---
title: "Edit prompt: Lake or backyard afternoon (batch, overnight)"
tags: [editing, prompts, beach-water, kids-family]
---
# Edit prompt: Lake or backyard afternoon (batch, overnight)

!!! info "Current version: 1 (2026-11-22), not tested yet"
    This prompt works through **every clip in the folder on its own**, so
    you can start it and go to bed. Use **Opus**. See
    [How to run it](how-to-run.md), and do the overnight checklist
    below first.

## Overnight checklist (before you go to bed)
1. **Wait for any other Claude edit to finish.** Two chats can't share
   the mouse.
2. **Put all the clips in one folder**, for example `Downloads\Lake`, and
   change the folder name in the prompt to match.
3. **Keep the laptop awake.** Plug it in. In **Settings → System → Power**,
   set the screen and sleep to **Never** while plugged in. Don't lock the
   screen: Claude can't work on a locked or sleeping screen.
4. **Note This week % and Current session %.**
5. Paste the prompt into a **new chat** and **approve Insta360 Studio
   when it asks**. That should be the only approval it needs. Watch the
   first minute or so to make sure it's under way.
6. **If you hit a limit:** the 5-hour session limit is the one most
   likely to stop it overnight. The prompt tells Claude to finish the
   clip it's on and list what's left. In the morning, start a new chat
   with the same prompt; it skips the clips already exported.

```text
I'm going to bed, so work through this on your own: don't wait for me
or ask me questions. Make sensible choices yourself.

The job: there are several 360 clips from an afternoon at a family lake
house in the folder Downloads\Lake. Edit EVERY clip in that folder, one
at a time, not just the one on screen. Export each one as its own
16:9 video.

How to work through them:
1. First, list every clip in the folder (name and length) in this chat.
2. Skip any clip that already has an export in Downloads\Lake\Edited
   (so this prompt can be re-run to finish off).
3. Edit each clip as below, export it, then go to the next one.
4. After each clip, add one line to your running list here: clip name,
   done or skipped, and why if skipped.
5. If a clip fails twice at the same step, skip it, note why, and move
   on. Don't get stuck on one clip.
6. If you're close to a usage limit, finish the clip you're on and stop
   cleanly, with the list of what's done and what's left.

What these clips are: an afternoon at the lake - kids playing in the
yard and the water, the lake itself, and beautiful scenery. Show the
whole scene and what's happening, not the person holding the camera.

Keep all the action: every bit of the kids playing, anything fun or
funny, and the best views. Only cut the dead time (see below).

Camera moves to include (natural view, not fisheye):
- Opening of each clip: a slow, wide establishing view of the lake or
  yard, then ease in towards whatever is happening.
- Follow the kids when they're doing something: pick them up, pan with
  them, push in slowly on the fun moments (jumps, splashes, laughing,
  games). If Studio's Deep Track can lock onto a child, use it.
- In quiet moments, show off the scenery: a slow pan across the lake,
  the shoreline, trees and sky.
- Adults chatting: a quick glance is fine (under 2 seconds), then back
  to the kids or the view. Never stay on the person holding the camera
  or the camera stick.
- One special moment per clip, at most: a tiny-planet view of the yard
  or lake, or a quick zoom out to wide and back. This is the one place
  a curved look is welcome.
- End of each clip: a slow pull-back to a wide view of the lake, or a
  fade out.

Required for EACH clip - check before exporting:
1. REFRAME: keep the subject (kids, action or view) well framed in
   16:9 - never stuck at the edge - while still using the moves above.
2. CUT: remove the dead time (see below).
3. TRANSITIONS AND EFFECTS: a transition at the joins between cut
   sections, and at least one effect at the best moment.
4. EXPORT: 1080p, into Downloads\Lake\Edited, named after the
   original clip with "-edit" on the end.

Editing style (always):
- Cut out dead time completely: setting up, waiting, walking with the
  camera, the camera lying in grass or pointing at the ground, anything
  where nothing is happening. Don't speed those parts up - remove them.
  Keep a second or so before each key moment so the cuts aren't abrupt.
  Never cut the action itself: I want to see everything that happened,
  just without the waiting.
- Keep a normal, natural-looking view most of the time - no fisheye or
  heavy curving.
- Smooth moves: ease in and out of every pan or tilt; no sudden jumps.
- Transitions and effects are welcome where they suit the moment, but
  don't overdo them.

How Insta360 Studio behaves (learned in earlier runs - follow this):
- Clean start: reset the view angle to 0/0/0 and turn off all Imaging
  effects. Delete any old project segments that point at a missing
  file. Leave old saved versions in Clip Management alone.
- Find the action first: use the sound waveform and what's on screen to
  list every section to keep (with start and end times) BEFORE cutting.
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
- Never touch, move or overwrite the original files.
- If Studio can queue exports, queue each one and move on to the next
  clip; otherwise wait for each export to finish.

Rules to keep this efficient:
- Use keyframes for purposeful, slow moves - not one fixed view, but no
  jittery extra keyframes either.
- Use as few screenshots as you need to check your work.
- Keep your notes in this chat short - one line per clip.

When everything is done, give me a short summary: each clip, how long
the edit is, the effects and transitions used, and anything skipped.
```

## Next morning
- The edits are in `Downloads\Lake\Edited`.
- To make **one highlight video** from them with music, ask **Claude Code**
  on the laptop to join them. See [Join clips and finish](finishing.md).
- Note **This week %** and tell Claude Code how it went, so this page and
  the [test log](test-log.md) get updated.

## What we've learned
Not tested yet.
