---
title: Edit prompt test log
tags: [editing, prompts]
---
# Edit prompt test log

Each test run, what it cost and what we thought. The situation pages
always hold the current best prompt; this page keeps the history.

| Date | Clip | Prompt | Model | Weekly % used | Verdict |
|---|---|---|---|---|---|
| 2026-11-22 | Fireworks (3 min) | v1, loose | Opus | up to 2% (included other work) | **Best so far.** Movement and creativity, but it sped up dead time instead of cutting it, and too much curvature |
| 2026-11-22 | Fireworks #2, same night | v2, strict | Sonnet | under 1% | Loved the dead-time cuts, and the joins were invisible. But no reframing (fireworks stuck at the far right) and no transitions |
| 2026-11-22 | Fireworks #2 again | v2, strict | Opus | about 1% (included other work) | Centred and cut well, but no camera movement at all: "the same spot the whole time" |
| 2026-11-22 | Fireworks (19 min) | v3 + Studio know-how | Opus | under 2% (with other work) | "Much better." But the view never turned: it missed a hand-held roman candle, and kept gaps where only distant fireworks were going off. Led to v4: what counts as action, plus a camera pass |

## Lessons so far
- **Claude spends its effort on the cuts** and then leaves the view
  where it is. A separate **camera pass** after cutting (every kept
  section gets its own view) is now in every prompt.
- **Sound and brightness can't tell whose fireworks they are.** Say
  what counts as action and what doesn't.
- **Opus over Sonnet.** Sonnet trims; Opus reframes and gets creative.
  The extra cost is about 1% of a week per clip.
- **Loose prompts** get creativity, but also sloppy cuts and curvature.
- **Strict prompts** get clean cuts, but a static camera.
- **What works** is a strict prompt for cuts and view style, plus a
  specific list of camera moves.
- **Studio quirks found by Claude (fireworks v3 run):** Ctrl+B splits
  where the mouse is, not at the playhead, if the mouse is over the
  timeline. A failed split followed by Delete wiped 0:00–16:34. Delete
  closes up gaps automatically. These are now in every prompt, with
  "cut from the end backwards" and "check each split before deleting".
- **Lots of cuts take a long time.** A 19-minute fireworks clip needed
  about 19 keep sections, which is about 38 cut points. Trimming the
  biggest dead stretches yourself first saves time and allowance.
- **Studio remembers old edits.** Removing a clip and adding it back
  brings its edits back, so clear them before re-testing.
