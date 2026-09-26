# Insta360 Guide

## What this project is
Ed shoots with an **Insta360 X5** (previously an X2). He thinks Insta360's
software is very good; he just struggles to use it well now that the app has
changed. **This is a guidance project, not an editing app.** The goal is to
help Ed use Insta360's own app well: how to shoot, which settings to use, and
how to do specific effects and transitions. We don't build tools that
replace or re-do the editing.

The main pain point is reframing:
- Setting keyframes by hand works, but it takes too long.
- The app's AI auto-edit (which finds the best parts and reframes them)
  **prefers people over the action**. With fireworks in front of the family,
  it spent more time turned round showing the family than the
  fireworks. With the kids on a ride, it swings round to Ed holding the
  camera for 30 seconds. A quick glance at the family is fine; dwelling on
  them isn't.

## How Ed shoots (design all advice around this)
- **He lets the camera roll** and enjoys the time with his family, then edits
  later. Advice must not require him to stop and start, fiddle with
  settings, or step away from the family while things are happening.
  Anything done at shoot time must be minimal: set up once, and at most a
  quick voice "mark".
- **Always full 360.** Ed is always in the 360 capture, because he's on the
  other side of the camera. That's expected. Fix it in the edit, not by
  telling him to stay out of shot. **Don't recommend Single-Lens mode**
  except for niche cases; it throws away the 360 effects that are the point
  of the camera.
- Long clips are a feature: things happen behind you that you only notice
  later (e.g. a turtle or shark behind you while diving). Our early docs
  advised short clips. That's being re-checked against creator advice (see
  `docs/long-vs-short-clips.md`); don't repeat the short-clip advice as a rule.

## Long-term guide, with trip sections
This is Ed's **ongoing guide to using the camera**, not a one-off trip
planner. The core is general: settings, effects, editing how-tos, shot
recipes, and gear/storage planning. Trips get their own section (a kit list,
a storage/battery plan, and activity-by-activity notes that link back to the
general pages).
- First trip section: **Maui** (the date is kept private; see local memory).
  Maui-relevant content goes first because of the deadline, but it's written
  as general pages (diving, snorkelling, golf, beach, luau, scenic drives,
  helicopter) that are reused on later trips.

## What we're building
1. **Library of effects, techniques and settings** that Ed can search on his
   phone, at home or away. It's seeded from the research in `docs/`. Each
   entry covers: what it looks like, how to shoot it, the step-by-step edit
   in the phone app (and Studio if different), settings, difficulty, a
   source link, and the date it was checked.
2. **YouTube link to library entry.** Ed sends a YouTube tutorial and gets
   back a written entry with steps, so he never has to find and rewatch the
   video (especially on holiday). Focus on the app's transitions and effects,
   e.g. spinning one photo into another, or the same person in the same pose
   in 6 locations blended together.
   - **Gemini only** is the default (cheaper).
   - **Dual read** (the `watch` / `youtube-to-skill` skills, Claude plus
     Gemini) is for tricky or important videos.
   - Also use these videos to compare creator advice against our docs, and
     say where they disagree instead of picking one.
3. Later, maybe: a personal log of what worked on past shoots.

## Hosting and access
- Ed prefers hosting via **GitHub**, like most of his apps. That probably
  means GitHub Pages for the library, and GitHub Actions for the Gemini
  step. Confirm with Ed before building.
- Ed already has remote access to his home apps set up.
- Proxmox and Home Assistant exist (see global CLAUDE.md). Mention them when
  relevant, but don't default to them for this project.

## Constraints and facts
- The phone app (Insta360 app) is Ed's preferred editor, because it's quick.
  Desktop (Insta360 Studio) is acceptable if it saves real time.
- Verify claims about the X5, the app and features against current sources.
  The app changes often, so note the date of each source.
- Ed isn't a professional developer: explain trade-offs plainly and prefer
  boring, well-documented approaches.
- Watch costs: paid AI effects, Gemini API usage. Always give the cheapest
  sensible option.

## Agents (`.claude/agents/`)
| Agent | Model | Role |
|---|---|---|
| `product-manager` | Opus | Owns scope and priorities, synthesises the other agents' findings, and makes the worth-it call |
| `explorer-researcher` | Fable | Open-ended research: YouTube, forums, creators, new techniques, unconventional ideas |
| `insta360-software-expert` | Sonnet | Insta360 app, Studio, file formats, AI features and pricing |
| `photography-expert` | Sonnet | Shooting craft, settings presets, and portraits and people shots |

Use Fable only for the exploratory, open-ended work. Everything else runs on
Opus or Sonnet.

## Project files
- `docs/` holds research reports and decisions. Earlier docs were written
  before the "let it roll, always 360" correction. Treat their short-clip,
  stay-out-of-shot and single-lens advice as superseded.
- `library/` holds the effects/techniques library.
