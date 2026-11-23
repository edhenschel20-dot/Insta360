---
title: Build your own edit prompt
tags: [editing, prompts]
---
# Build your own edit prompt

For a situation that doesn't have its own page yet, ask Claude Code
"give me the edit prompt for <situation>", or build one yourself from
three parts:

1. **What the clip is.** One line, for example: "Insta360 Studio is open
   with one 360 clip of a luau. Edit it into a fun 16:9 clip with
   movement and creativity - not one fixed view for the whole thing."
2. **Keep all the action.** Say what must never be cut (every float,
   every dance, every golf shot).
3. **Camera moves to include.** List an opening, moves for the middle,
   one quick glance at the family, a finale and an ending. Be specific:
   vague prompts produce either a static clip or a wild, curvy one.

Then paste the **shared rules** below underneath.

## The shared rules (paste under every prompt)
```text
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

## Turn a good result into a recipe
When a run turns out well, paste this into **the same chat** straight
away:
```text
Write down exactly what you did - each cut, effect, transition and
camera move, with timings and the Studio settings you used - as a
reusable recipe I can give to another chat for a different clip of the
same kind. Include my style rules: cut dead time rather than speeding
up, natural view with little curvature, action not the family.
```
Give the recipe to Claude Code so it can become the new prompt on that
situation's page.

## The style rules in plain words
- **Cut dead time; don't speed it up.** But keep all the action.
- **A natural view, not curved.** A wide or fisheye look only once or
  twice, briefly, as an effect.
- **The action, not the family.** A quick glance at people reacting is
  fine; dwelling on them isn't, and never on the person holding the
  camera.
- **Movement and creativity.** Slow pans, push-ins and pull-backs, not
  one fixed view.
