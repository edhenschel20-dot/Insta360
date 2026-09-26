# Effect page spec

Every page in `library/effects/` follows this spec. The situation and
category pages are **generated automatically** from each page's front matter
by `scripts/build_groups.py`, so the front matter must be exact.

## Front matter (required)
```
---
title: <Effect name>
summary: <what it looks like, max 10 words>
category: <one of the category slugs below>
good_for: [<1-4 situation slugs below>]
difficulty: Easy | Medium | Hard
tags: [<2-4 short free-form tags>]
---
```

### Category slugs (exactly one)
| Slug | Shown as |
|---|---|
| `reframe-moves` | Reframe moves |
| `transitions` | Transitions |
| `stick-mount` | Stick & mount tricks |
| `speed-time` | Speed & time |
| `bullet-time` | Bullet time |
| `shot-lab` | Shot Lab & templates |
| `ai-effects` | AI effects 💎 (use limited generations) |
| `x5-modes` | X5 modes |

### Situation slugs (`good_for`, 1-4)
| Slug | Shown as |
|---|---|
| `everyday` | Everyday & walking |
| `kids-family` | Kids & family |
| `beach-water` | Beach & water |
| `night` | Night |
| `travel-scenic` | Travel & scenic |
| `bicycle` | Bicycle |
| `car-road-trip` | Car & road trip |
| `golf-sport` | Golf & sport |
| `just-for-fun` | Just for fun |
| `motorcycle-only` | Motorcycle only (use ONLY if it genuinely can't be adapted) |

## Body
```
# <Effect name>
<What it looks like, 1-2 lines>

**Difficulty:** Easy | Medium | Hard  ·  **Works on X5:** Yes / Likely / Check app version

## See it
<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID?start=SECONDS" title="TITLE" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe></div>

[Watch on YouTube](https://www.youtube.com/watch?v=VIDEO_ID&t=SECONDSs) · CHANNEL

## Shoot it
1. ...
## Edit it (phone app)
1. ...
## Adapt it            <- required if the example video uses a motorcycle; optional otherwise
- **Walking / kids running:** ...
- **Bicycle:** ...
- **Car / golf cart:** ...
## Settings
- ...
## Tips
- ...
## Sources
- <link> (checked YYYY-MM-DD)
```
- No verified video: use `_No verified example video yet. Add one with the "Add a video" form._` under "See it".
- Video IDs must be verified (YouTube oEmbed returns 200). Never guess an ID. Omit `start`/`t` unless confirmed.
- AI effects pages also include **"What footage it needs"** (e.g. "a person running toward the camera, 3-5 s") and **"Cost"** (free generations, diamonds, Preview first).

## Writing rules
- Second person, plain language, short: it's read on a phone in the field.
- Fits how Ed shoots: let it roll, always full 360, he's always in the
  capture. Don't recommend Single-Lens mode or stop/start clips as general
  advice. Deliberate short takes are fine for specific effect shots.
- No personal details (family names, travel dates). The repo is public.
- App menu names change: write "(menu names vary by app version)" rather
  than inventing a path.
- Link other effects as `other-effect.md`, and editing how-tos as `../editing/<page>.md`.
