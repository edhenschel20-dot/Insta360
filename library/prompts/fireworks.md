---
title: "Edit prompt: Fireworks"
tags: [editing, prompts, night]
---
# Edit prompt: Fireworks

!!! info "Current version: 4 (2026-11-22), not tested yet"
    Use **Opus**. Paste it into a new chat in the Claude desktop app, with
    the clip open in Insta360 Studio. See [How to run it](how-to-run.md).

```text
Insta360 Studio is open with one 360 clip of a fireworks show. Edit it
into a fun 16:9 clip with movement and creativity - not one fixed view
for the whole thing.

These are mostly OUR OWN fireworks, set off by the family. What counts
as action:
- Our fireworks: bursts in the sky, and also the ground-level part -
  someone lighting a fuse, a fountain, someone holding and shooting a
  roman candle. Turn the camera to where each one is coming from, not
  just the sky.
- Distant fireworks (neighbours, across the street, far away) do NOT
  count. If ours have stopped and only distant ones are going off while
  we chat or get the next one ready, that's dead time - cut it.

Keep EVERY one of our fireworks - don't drop any to make it shorter.
Only cut the waiting and gaps between them. The length is whatever is
left once the dead time is gone.

If the clip still has edits from an earlier test, clear them all first
(keyframes, cuts, speed changes, effects) and confirm it's clean.

Camera moves to include (natural view, not fisheye):
- Opening: start low on the crowd or skyline, then tilt up smoothly to
  reveal the first bursts.
- During the show: keep the fireworks as the subject, but keep the
  camera alive - slow push-ins (zoom in) on big bursts, gentle pans to
  follow them, easing back out between them. Something should be
  moving slowly most of the time.
- Once, at a natural pause, swing round to the people watching for
  about 2 seconds, then back to the sky.
- Finale: one dramatic move - for example a quick zoom out to a wide or
  tiny-planet view for a second or two, then back in. This is the one
  place a curved look is welcome.
- End: a slow pull-back or a fade out.

Required - check each one before exporting:
1. REFRAME: keep the main subject well framed in 16:9 - never stuck at
   the edge - while still using the camera moves asked for above.
   Take a screenshot to confirm.
2. CUT: remove the dead time (see below).
3. CAMERA PASS: after cutting, go through every kept section one by
   one and aim the view at where the action is in THAT section - it
   moves around. Every section gets its own view and at least one move;
   never leave the whole clip pointing one way.
4. TRANSITIONS AND EFFECTS: add a transition at the joins between cut
   sections, and at least one effect at the best moment. Choose ones
   that suit the clip.
In your report, confirm each of these 4 and say where you did it.

Editing style (always):
- Cut out dead time completely: setting up, waiting, people walking
  about, anything where nothing is happening. Don't speed those parts
  up - remove them. Keep a second or so before each key moment so the
  cuts aren't abrupt. Never cut the action itself: I want to see
  everything that happened, just without the waiting.
- Keep a normal, natural-looking view most of the time - no fisheye or
  heavy curving. Use a wide, curved look only once or twice as a
  deliberate effect, for a second or two.
- Focus on the action. A quick glance at people reacting is fine
  (under 2 seconds), then go straight back. Never stay on the person
  holding the camera.
- Smooth moves: ease in and out of every pan or tilt; no sudden jumps.
- Transitions and effects are welcome where they suit the moment, but
  don't overdo them.

How Insta360 Studio behaves (learned in earlier runs - follow this):
- Permissions: at the very start, ask for access to BOTH Insta360
  Studio AND Windows File Explorer in one request. Without Explorer
  you can't bring Studio to the front, even when it's open.
- Clean start: reset the view angle to 0/0/0 and turn off all Imaging
  effects. Delete any old project segments that point at a missing
  file. Leave old saved versions in Clip Management alone.
- Find the action first: use the sound waveform and brightness to list
  every section to keep (with start and end times) BEFORE cutting.
- Make the cuts from the END of the clip backwards. Delete closes up
  the gap automatically, so cutting from the end keeps the earlier
  times on your list correct.
- Clicking a clip selects it and moves the playhead there.
- Ctrl+B splits at the MOUSE position if the mouse is over the
  timeline. Move the mouse off the timeline (e.g. onto the preview)
  before pressing Ctrl+B, so it splits at the playhead.
- Before pressing Delete, check the split really exists and only the
  gap is selected. If a split fails, Delete removes everything up to
  that point - Ctrl+Z straight away if that happens.
- Never touch or overwrite the original file.

Rules to keep this quick:
- Use keyframes for purposeful, slow moves - not one fixed view, but no
  jittery extra keyframes either.
- Check your work with no more than 3-4 screenshots.
- If something goes wrong twice, stop and tell me rather than retrying.
- Export at 1080p to my Downloads folder.
When you're done, tell me what you cut, the effects and transitions you
used, and roughly where they are.
```

## What we've learned
- **Version 1** (loose prompt, Opus): the best result so far. It had
  movement and creativity, but it sped up the dead time instead of
  cutting it, and used too much curvature.
- **Version 2** (strict prompt): it cut the dead time perfectly, but the
  camera never moved. Opus framed the fireworks and stayed put. Sonnet
  didn't even reframe.
- **Version 3** (Opus, plus the Studio know-how): "much better". It cut
  well, but the view still never turned. It missed Ed's son shooting a
  roman candle, and it kept gaps where only distant fireworks across the
  street were going off.
- **Version 4** says what counts as action (our fireworks, including
  ground-level and hand-held ones, but not distant ones) and adds a
  **camera pass** after the cuts: every kept section gets its own view.
- **Version 3** also kept the cutting rules and the natural view, and asks
  for **specific camera moves**. Movement comes from pans, push-ins and
  pull-backs, not from curvature.

Full details are in the [test log](test-log.md).
