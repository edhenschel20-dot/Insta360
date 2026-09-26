"""Turn a YouTube video into a guide page using Gemini.

Usage:
    python scripts/video_to_entry.py <youtube-url> [--careful] [--notes "..."]

Needs GEMINI_API_KEY in the environment (or in a local .env file).
Writes library/youtube/<slug>.md and adds a link to library/youtube/index.md.
Prints the path of the new page.
"""

import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
YOUTUBE_DIR = ROOT / "library" / "youtube"

# Flash is cheap and fine for most tutorials; Pro reads more carefully.
FAST_MODEL = "gemini-2.5-flash"
CAREFUL_MODEL = "gemini-2.5-pro"

PROMPT = """You are helping a hobbyist who owns an Insta360 X5 360-degree camera and
edits in the Insta360 phone app. Watch this video and write a guide entry so
he never needs to rewatch it.

How he shoots: he lets the camera roll in full 360 mode while enjoying time
with family, then edits later on his phone. He is always in the 360 capture
(he holds the stick). Keep shoot-time steps minimal and practical.

Write in plain, short language, in second person ("you"), readable on a
phone. Fill in each field of the response. For edit steps, use the exact
menu/button names shown in the video, and note the app version if visible.
For settings, only include settings actually shown or stated.

Rules: only include steps you actually saw or heard in the video. If a step
was skipped or unclear, say so rather than guessing. If the video is not
about 360 cameras, still summarise the technique and note that.
"""

LIST = {"type": "ARRAY", "items": {"type": "STRING"}}
SCHEMA = {
    "type": "OBJECT",
    "properties": {
        "title": {"type": "STRING", "description": "name of the effect or technique"},
        "slug": {"type": "STRING", "description": "short kebab-case filename, no extension"},
        "tags": LIST,
        "summary": {"type": "STRING", "description": "one line, max 12 words"},
        "what_it_looks_like": {"type": "STRING", "description": "1-2 sentences"},
        "difficulty": {"type": "STRING", "enum": ["Easy", "Medium", "Hard"]},
        "camera_in_video": {"type": "STRING", "description": "model shown, or 'not stated'"},
        "shoot_steps": LIST,
        "edit_steps": LIST,
        "settings": LIST,
        "tips": LIST,
        "key_moments": {
            "type": "ARRAY",
            "items": {
                "type": "OBJECT",
                "properties": {"time": {"type": "STRING"}, "what": {"type": "STRING"}},
                "required": ["time", "what"],
            },
        },
        "differs_from_common_advice": {
            "type": "STRING",
            "description": "anything the creator recommends against common 360 advice, or 'Nothing notable'",
        },
    },
    "required": [
        "title", "slug", "tags", "summary", "what_it_looks_like", "difficulty",
        "camera_in_video", "shoot_steps", "edit_steps", "settings", "tips",
        "key_moments", "differs_from_common_advice",
    ],
}


def load_key() -> str:
    key = os.environ.get("GEMINI_API_KEY", "").strip()
    env_file = ROOT / ".env"
    if not key and env_file.exists():
        for line in env_file.read_text(encoding="utf-8").splitlines():
            if line.startswith("GEMINI_API_KEY="):
                key = line.split("=", 1)[1].strip()
    if not key:
        sys.exit("GEMINI_API_KEY is not set.")
    return key


def ask_gemini(url: str, careful: bool, notes: str) -> dict:
    model = CAREFUL_MODEL if careful else FAST_MODEL
    prompt = PROMPT + (f"\nExtra notes from the user: {notes}\n" if notes else "")
    body = {
        "contents": [{"parts": [{"file_data": {"file_uri": url}}, {"text": prompt}]}],
        "generationConfig": {
            "responseMimeType": "application/json",
            "responseSchema": SCHEMA,
            # Low resolution keeps the cost down; careful mode reads on-screen menus better.
            "mediaResolution": "MEDIA_RESOLUTION_MEDIUM" if careful else "MEDIA_RESOLUTION_LOW",
        },
    }
    req = urllib.request.Request(
        f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent",
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "x-goog-api-key": load_key()},
    )
    try:
        with urllib.request.urlopen(req, timeout=600) as resp:
            data = json.load(resp)
    except urllib.error.HTTPError as err:
        sys.exit(f"Gemini error {err.code}: {err.read().decode()[:500]}")
    entry = json.loads(data["candidates"][0]["content"]["parts"][0]["text"])
    entry["model"] = model
    return entry


def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")[:60] or "video"


def render_body(e: dict) -> str:
    def numbered(items):
        return "\n".join(f"{i}. {s}" for i, s in enumerate(items, 1)) or "_Not shown in the video._"

    def bullets(items):
        return "\n".join(f"- {s}" for s in items) or "- Not stated"

    moments = "\n".join(f"- **{m['time']}** {m['what']}" for m in e["key_moments"]) or "- Not noted"
    return (
        f"# {e['title']}\n\n{e['what_it_looks_like']}\n\n"
        f"**Difficulty:** {e['difficulty']}  ·  **Camera in video:** {e['camera_in_video']}\n\n"
        f"## Shoot it\n{numbered(e['shoot_steps'])}\n\n"
        f"## Edit it (phone app)\n{numbered(e['edit_steps'])}\n\n"
        f"## Settings\n{bullets(e['settings'])}\n\n"
        f"## Tips\n{bullets(e['tips'])}\n\n"
        f"## Key moments in the video\n{moments}\n\n"
        f"## Differs from common advice?\n{e['differs_from_common_advice']}\n"
    )


def write_entry(url: str, entry: dict) -> Path:
    YOUTUBE_DIR.mkdir(parents=True, exist_ok=True)
    slug = slugify(entry["slug"] or entry["title"])
    path = YOUTUBE_DIR / f"{slug}.md"
    n = 2
    while path.exists():
        path = YOUTUBE_DIR / f"{slug}-{n}.md"
        n += 1

    tags = ", ".join(slugify(t) for t in entry["tags"][:4]) or "video"
    title = entry["title"].replace('"', "'")
    path.write_text(
        f'---\ntitle: "{title}"\ntags: [youtube, {tags}]\n---\n'
        f"{render_body(entry)}\n"
        f"## Source\n- [Watch the video]({url}) (read by {entry['model']} on {date.today()})\n\n"
        f'!!! note "Unreviewed"\n    Written automatically from the video. '
        f"Check the steps the first time you try it.\n",
        encoding="utf-8",
    )

    index = YOUTUBE_DIR / "index.md"
    if index.exists():
        with index.open("a", encoding="utf-8") as f:
            f.write(f"\n- [{entry['title']}]({path.name}): {entry['summary']}\n")
    return path


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("url")
    parser.add_argument("--careful", action="store_true", help="use the slower, more accurate model")
    parser.add_argument("--notes", default="")
    args = parser.parse_args()

    if not re.match(r"https?://(www\.|m\.)?(youtube\.com|youtu\.be)/", args.url):
        sys.exit(f"Not a YouTube link: {args.url}")

    entry = ask_gemini(args.url, args.careful, args.notes)
    print(write_entry(args.url, entry).relative_to(ROOT).as_posix())


if __name__ == "__main__":
    main()
