---
title: Auto Frame and AI Edit
tags: [editing, reframing, ai]
---
# Auto Frame and AI Edit

The fully automatic options. Fast, but this is the pair that **prefers
people over the action** — it's why you got 30 seconds of yourself holding
the camera instead of the ride, or the family instead of the fireworks.
Use them to triage a big pile of footage, not as the final answer for
anything you actually care about.

## What they do
- **Auto Frame** (app and Studio): cuts a clip into several highlight
  clips, each labelled with subject and direction (person, car, dog,
  building; Forward / Selfie / In / Out). You can't steer it while it
  runs, but the labels make it fast to discard the ones you don't want.
- **AI Edit / Auto Edit**: goes further — scans multiple clips, picks
  moments, and assembles a themed multi-clip edit with music and
  transitions. You can still edit individual scenes afterwards.

## When to use them
- Triaging a large pile of clips quickly to see what's there.
- A first draft you plan to fix up afterwards, not a final cut.
- Casual footage where you genuinely don't mind what it picks.

## When to skip them
- Anything where the family reaction isn't the point — fireworks, a ride,
  a parade float. Use [split and fixed views](split-and-fixed-views.md) or
  [Deep Track](deep-track.md) instead.
- After it runs, it's fine to just **discard the "Selfie view / person"
  clips and keep the "Forward view / building / car" ones** — that's a
  legitimate way to use Auto Frame's output without accepting all of it.

## Footage-length limits
- **AI Edit / Auto Edit** analyses up to 100 media files, but has a total
  footage ceiling that depends on your phone: reportedly up to about 60
  minutes total on high-end phones, under 20 minutes on lesser devices.
  Minimum clip length around 4 seconds (360) / 2 seconds (flat). A long
  continuous roll (90+ minutes) needs a rough pre-trim before Auto Edit can
  use it — see [finding moments in long clips](finding-moments-in-long-clips.md).
- **Auto Frame** needs a clip longer than 10 seconds and doesn't work on
  Timelapse, Bullet Time, or Slow-Motion clips. No documented maximum
  length, but its behaviour on very long (20–60+ minute) clips isn't
  independently tested — worth just trying it on your own footage.

## Studio's batch export
In Insta360 Studio (desktop), right-click a clip › **Start Autoframe** —
Studio outputs a separate 16:9 clip per person/moving object plus a
combined one; select several results and batch-export them together. This
is the fast route for "one angle per child" from a single table-side
clip. Source: Orlando Nelson, X5 AI features in Studio, 2026 update,
2026-01-20, https://www.youtube.com/watch?v=4C_SgSFTTcc @150 (checked 2026-09-26).

## Sources
- Insta360 app manual, "Auto Edit" (checked 2026-09-26)
- Insta360 Studio manual, "Auto Frame" (checked 2026-09-26)
- This project's own `docs/long-vs-short-clips.md` (checked 2026-09-26)
