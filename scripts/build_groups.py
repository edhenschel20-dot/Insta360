"""Generate the effects index and the "by situation" pages from front matter.

Reads every page in library/effects/ and library/youtube/ that has
`category` and `good_for` in its front matter (see docs/effect-page-spec.md)
and writes:
  - library/effects/index.md               (all effects, grouped by category)
  - library/effects/situations/<slug>.md   (one page per situation)

Run before `mkdocs build` (the publish workflow does this automatically).
"""

from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
LIB = ROOT / "library"
EFFECTS = LIB / "effects"
SITUATIONS_DIR = EFFECTS / "situations"
SOURCES = [EFFECTS, LIB / "youtube"]

CATEGORIES = {
    "transitions": "Transitions",
    "reframe-moves": "Reframe moves",
    "stick-mount": "Stick & mount tricks",
    "speed-time": "Speed & time",
    "bullet-time": "Bullet time",
    "shot-lab": "Shot Lab & templates",
    "ai-effects": "AI effects 💎",
    "x5-modes": "X5 modes",
}

SITUATIONS = {
    "kids-family": ("Kids & family", "Fun shots with the kids, family days, and people."),
    "beach-water": ("Beach & water", "Beach days, snorkelling, diving and boats."),
    "travel-scenic": ("Travel & scenic", "Views, landmarks, towns and big reveals."),
    "night": ("Night", "Parades, fireworks, city lights and low light."),
    "golf-sport": ("Golf & sport", "Golf rounds and other sport."),
    "bicycle": ("Bicycle", "Riding a bike, with the camera on you or the bike."),
    "car-road-trip": ("Car & road trip", "Scenic drives, road trips and golf carts."),
    "everyday": ("Everyday & walking", "Walking around, everyday moments."),
    "just-for-fun": ("Just for fun", "Crowd-pleasers and silly effects."),
    "motorcycle-only": ("Motorcycle only", "Effects that only really work on a motorcycle."),
}

DIFFICULTY_ORDER = {"Easy": 0, "Medium": 1, "Hard": 2}


def front_matter(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return {}
    try:
        return yaml.safe_load(text.split("---", 2)[1]) or {}
    except yaml.YAMLError:
        return {}


def collect() -> list[dict]:
    pages = []
    for folder in SOURCES:
        if not folder.exists():
            continue
        for path in sorted(folder.glob("*.md")):
            if path.name == "index.md":
                continue
            fm = front_matter(path)
            if fm.get("category") not in CATEGORIES:
                continue
            good_for = [g for g in (fm.get("good_for") or []) if g in SITUATIONS]
            pages.append({
                "path": path,
                "title": str(fm.get("title", path.stem)),
                "summary": str(fm.get("summary", "")),
                "category": fm["category"],
                "good_for": good_for,
                "difficulty": str(fm.get("difficulty", "")),
                "youtube": folder.name == "youtube",
            })
    return pages


def link(page: dict, from_dir: Path) -> str:
    rel = Path(*[".."] * len(from_dir.relative_to(LIB).parts)) / page["path"].relative_to(LIB)
    badge = " ▶" if page["youtube"] else ""
    return f"[{page['title']}]({rel.as_posix()}){badge}"


def table(pages: list[dict], from_dir: Path) -> str:
    rows = sorted(pages, key=lambda p: (DIFFICULTY_ORDER.get(p["difficulty"], 3), p["title"].lower()))
    lines = ["| Effect | What it looks like | Difficulty |", "|---|---|---|"]
    lines += [f"| {link(p, from_dir)} | {p['summary']} | {p['difficulty']} |" for p in rows]
    return "\n".join(lines)


def by_category(pages: list[dict], from_dir: Path) -> str:
    out = []
    for slug, name in CATEGORIES.items():
        group = [p for p in pages if p["category"] == slug]
        if group:
            out.append(f"## {name}\n\n{table(group, from_dir)}\n")
    return "\n".join(out)


def main() -> None:
    pages = collect()
    SITUATIONS_DIR.mkdir(exist_ok=True)
    for old in SITUATIONS_DIR.glob("*.md"):
        old.unlink()

    counts = {}
    for slug, (name, blurb) in SITUATIONS.items():
        group = [p for p in pages if slug in p["good_for"]]
        counts[slug] = len(group)
        if not group:
            continue
        (SITUATIONS_DIR / f"{slug}.md").write_text(
            f"---\ntitle: {name}\n---\n# {name}\n\n{blurb} **{len(group)} effects**, "
            f"easiest first in each group. ▶ = added from a YouTube video.\n\n"
            f"{by_category(group, SITUATIONS_DIR)}",
            encoding="utf-8",
        )

    # Keep the sidebar in the same order as SITUATIONS, listing only pages that exist.
    (SITUATIONS_DIR / ".nav.yml").write_text(
        "nav:\n" + "".join(f"  - {slug}.md\n" for slug in SITUATIONS if counts[slug]),
        encoding="utf-8",
    )

    situation_links = "\n".join(
        f"- **[{name}](situations/{slug}.md)** ({counts[slug]})"
        for slug, (name, _) in SITUATIONS.items() if counts[slug]
    )
    (EFFECTS / "index.md").write_text(
        "---\ntitle: Effects & transitions\n---\n"
        "# Effects & transitions\n\n"
        f"**{len(pages)} effects.** Pick what you're doing, or browse everything by type below. "
        "Use the search box to find one by name. 💎 = uses limited AI generations. "
        "▶ = added from a YouTube video.\n\n"
        f"## By situation\n{situation_links}\n\n"
        f"{by_category(pages, EFFECTS)}",
        encoding="utf-8",
    )
    print(f"{len(pages)} effects; situations: " + ", ".join(f"{k}={v}" for k, v in counts.items() if v))


if __name__ == "__main__":
    main()
