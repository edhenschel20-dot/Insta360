# Shoot for a Fast Edit — X5 Shot Recipes

Author: photography-expert agent. Date of research: 2026-09-26 (X5 facts checked
against current Insta360 docs/reviews as of this date — the app and firmware
change often, so re-verify settings names if this doc is more than a few
months old).

The core idea: **every minute spent deciding *before* you press record saves
five minutes of dragging keyframes later.** A 360 camera captures everything,
which is exactly why editing it is slow — the software has no idea what you
meant to show. If you decide the viewer's focus, direction, and length at
shoot time, the edit becomes "pick a template and trim," not "hunt for the
shot inside a sphere."

---

## 1. Principles of "shoot for a fast edit"

### Decide the viewer's focus before you press record
Ask "what is this clip *about*?" in one sentence — a person, a view, a
motion, a place. If you can't answer that in one sentence, the AI reframe
tool won't be able to either, and it will default to the easiest target:
you, the stick holder. A clip with one clear subject can often be reframed
automatically (Deep Track, InstaFrame) or with 2-3 keyframes. A clip you shot
"to see what happens" always needs manual scrubbing afterwards.

### Hold direction is a framing decision, not an afterthought
The X5's two lenses split the world into a front hemisphere and a back
hemisphere. Whichever lens you deliberately point at the subject becomes your
"front camera" for reframing — pick it and stay consistent for the whole
clip. If you swing the stick around mid-shot to look at different things,
you've turned one shot into three and the edit has to catch up.

### Use the lens axis and stitch line on purpose
- The X5 stitches the two lenses together with roughly 40° of overlap, and
  the algorithm looks for the least-detailed content in that overlap to hide
  the seam. Keep important subjects and straight lines (doorframes, horizons
  at the seam, railings) **out of the stitch line**, which runs along the
  sides of the stick, not the front/back.
- Insta360's own guidance: keep subjects at least ~1 m (3.3 ft) from the
  camera, don't twist the stick relative to the lenses, and face one lens
  rather than standing between the two — standing between them is what puts
  *you* right on the seam, which both looks bad and confuses subject
  tracking.
- Decide which lens is "front" before you start, and treat the other lens as
  the disposable one (sky, ceiling, empty trail behind you).

### Camera height sets the story, not just the composition
- Chest/shoulder height (on a short stick or chest mount) = "I am here,
  POV," good for vlogging and hikes.
- Extended overhead (1.5–3 m invisible stick) = "establishing/god's-eye"
  view, good for crowds, landscapes, traffic, bike paths — and it also lifts
  the lens line above most foreground clutter, which helps stitching.
- Low/ground level = dramatic, good for water, pets, kids, wheels — but
  watch for the stick's shadow crossing the stitch line in bright sun.
- Pick one height and commit for the clip; changing height mid-shot (raising
  and lowering the stick) creates a reframe path the AI has to guess at.

### Motion should be simple and hold-able
360 footage forgives handheld shake less gracefully than it seems (FlowState
stabilization fixes wobble, not confused framing). Prefer:
- A single steady translation (walk forward, drive forward, pan the stick
  slowly) over multiple direction changes.
- Constant speed over stop-start.
- If you need a reveal (turn a corner, look up), do it once, deliberately,
  and hold before and after so the edit has clean in/out points to cut on.

### Clip length: shoot short and single-purpose
Long, meandering clips are the single biggest cause of slow edits — every
extra minute of footage is a minute you have to scrub through looking for
"the good bit." Rules of thumb:
- 10–30 seconds per clip for a specific moment (a viewpoint, a trick, a
  greeting).
- Stop and restart rather than "just keep it rolling" — a new clip is a new,
  independently reframeable unit; a 20-minute continuous clip is a single
  unit you cannot reframe two different ways inside one edit action.
- If you do run long (hikes, drives), plan to use TimeShift/hyperlapse or the
  AI Highlights/AI Edit auto-cut rather than manual reframing for that clip.

---

## 2. Shot recipes

Each recipe: **Setup** · **X5 settings** · **Movement** · **Reframe target**
· **Fastest edit path** · **Pairs well with**.

### 1. Walking / talking vlogging (you're the subject)
- **Setup:** Invisible selfie stick, chest-to-head height, arm extended
  ~60–90 cm out in front and slightly to the side so your face isn't on the
  seam.
- **X5 settings:** 5.7K30 or 5.7K+ (HDR if backlit), Standard color if you'll
  grade, Vivid if posting straight from the phone. Quick FlowState
  stabilization on.
- **Movement:** Walk at steady pace, stick held at constant height, face one
  lens the whole time.
- **Reframe to:** Selfie View (InstaFrame) or Deep Track locked on your face.
- **Fastest edit:** InstaFrame mode shoots a ready-to-share flat video
  *alongside* the 360 file — zero reframing needed if you shot it in-camera.
  Otherwise, Deep Track on face in the app, one pass, done.
- **Pairs well with:** Horizon Lock (keeps the world level even if the stick
  tilts).

### 2. Walking b-roll of a place, not you
- **Setup:** Stick overhead (1.5–2 m), or chest mount with camera facing
  forward, you out of frame intentionally by keeping the "front" lens ahead
  of you and slightly up.
- **X5 settings:** 8K24/25/30 for max detail on scenery, standard
  stabilization.
- **Movement:** Walk in one direction at steady pace; no turning to check on
  the camera.
- **Reframe to:** A fixed forward-looking virtual camera, or a single slow
  pan across the scene — not a tracked subject.
- **Fastest edit:** Pre-built camera-movement templates ("pre-built dynamic
  reframing" in the app) applied to the whole clip in one tap, or 2 keyframes
  (start view, end view) and let the app interpolate.
- **Pairs well with:** Tiny Planet or Panorama stills pulled from the same
  clip for social posts.

### 3. Driving (dashcam / road trip)
- **Setup:** Suction or dash mount on the windshield or dash, lens axis along
  the direction of travel (one lens forward through the windscreen, one
  lens back into the cabin).
- **X5 settings:** 5.7K30 (better low-light/dynamic range for
  glare/tunnels) rather than 8K; PureVideo mode if driving at dusk/night.
- **Movement:** None needed from you — the car does the movement. Keep
  sessions to natural trip segments (a scenic stretch, not the whole
  journey) so files stay short.
- **Reframe to:** Forward through windscreen as the default view, with a
  quick look back to passengers as a secondary point of interest.
- **Fastest edit:** 2 keyframes per clip (forward, then a glance to the
  cabin) — don't track anything, roads don't need Deep Track.
- **Pairs well with:** TimeShift/hyperlapse for long boring stretches
  (motorway) shot as a separate, dedicated clip.

### 4. Motorcycle / motorsport / go-kart
- **Setup:** Helmet or chest mount, lens axis forward.
- **X5 settings:** Single-Lens Mode at up to 4K60 — one lens only, POV,
  **no reframing needed at all** and no stitch line to worry about at speed.
  Use full 360 mode only if you specifically want a look-back-at-the-bike
  shot.
- **Movement:** Whatever the vehicle does; camera doesn't need to move
  independently.
- **Reframe to:** N/A in single-lens mode (already flat); if 360, forward
  view fixed, no tracking.
- **Fastest edit:** Single-Lens Mode files import as normal flat video — cut
  directly in the phone's regular video editor or Insta360 app with no
  reframe step at all.
- **Pairs well with:** Bullet Time for the pit-lane/grid walk before the
  race (see recipe 10).

### 5. Mountain biking / trail riding
- **Setup:** Chest mount preferred over helmet (steadier horizon, less head
  -flick), lens axis forward along the trail.
- **X5 settings:** 5.7K30 or 4K60 (higher fps if you want slow-mo on
  jumps), Quick FlowState on, HorizonLock if shooting Pro/RAW-adjacent.
- **Movement:** Ride naturally; don't look around at the camera — trust the
  360 capture to get the trail either side.
- **Reframe to:** Forward-trail view as base, with Deep Track only if a
  riding buddy is the subject (front lens on them).
- **Fastest edit:** FlowState stabilization + Horizon Lock in one pass, then
  a single forward-facing reframe path (2-3 keyframes at direction changes
  only, e.g., sharp switchbacks).
- **Pairs well with:** Bullet Time at the top of a climb (stop, swing stick
  overhead) as a "and here's the view" punctuation shot.

### 6. Hiking to a vista / summit reveal
- **Setup:** Handheld or short stick at chest height while walking; switch to
  extended invisible stick at the viewpoint.
- **X5 settings:** 8K24/25/30 for the payoff shot (max detail on the
  landscape); 5.7K30 for the approach if storage matters.
- **Movement:** Two-part shot — approach (walking, forward-facing) then stop,
  raise the stick overhead, slow 360° pan for the reveal.
- **Reframe to:** Forward walking view for the approach; for the reveal,
  either a slow manual pan keyframed start-to-end, or Tiny Planet still.
- **Fastest edit:** Split into two clips in-camera (stop/start) so the app
  can apply the "walking" template to clip 1 and a simple 2-keyframe pan to
  clip 2 — don't try to reframe one long continuous clip through both
  phases.
- **Pairs well with:** Panorama photo pulled from the same stop, and Tiny
  Planet for a thumbnail/social teaser.

### 7. Family events (parties, dinners, kids playing)
- **Setup:** Stick planted on a table/shelf (mini tripod or the stick's own
  base) rather than handheld — the X5's field of view means you don't need
  to hold it near anyone.
- **X5 settings:** 5.7K30, PureVideo if indoors/evening light.
- **Movement:** None — let it run stationary and let subjects move through
  frame; this is the one situation where a static camera beats a moving one,
  because it turns the whole clip into "reframe wherever the interesting
  thing happens," which Deep Track handles well.
- **Reframe to:** Deep Track on whichever person is active (opening
  presents, blowing candles); switch tracked subject via keyframes when the
  "story" moves to someone else.
- **Fastest edit:** AI Highlights / AI Edit auto-cut — let the app find the
  moments first, then only manually adjust the 2-3 clips it picked wrong.
- **Pairs well with:** Multi-View (front + selfie) if you want the reactor's
  face and the event visible at once without cutting.

### 8. Travel b-roll (markets, streets, architecture)
- **Setup:** Handheld at chest/head height, walking slowly, OR overhead
  invisible-stick "hero shot" for landmarks.
- **X5 settings:** 8K for architecture/landmark detail; 5.7K for
  fast-moving street scenes to save card space and edit time.
- **Movement:** Slow, deliberate walk-throughs; pause 2-3 seconds at
  points of interest rather than swinging the camera to look at them.
- **Reframe to:** A series of fixed "look here" keyframes at each pause
  point, letting the app's interpolation handle the movement between them.
- **Fastest edit:** Because you already paused on points of interest, this is
  the clip type where manual keyframing is fastest — one keyframe per pause,
  nothing in between.
- **Pairs well with:** Tiny Planet stills at architecturally symmetric
  spots (domes, plazas, staircases).

### 9. Water (kayak, pool, beach, boat)
- **Setup:** Waterproof-rated as-is (current sources say X5 is natively waterproof
  to 15 m; 10 m was the X4 spec. Check the manual before going near that
  depth. No housing needed for casual water use), short stick or chest mount for
  splash resilience.
- **X5 settings:** 5.7K30, PureVideo/HDR if bright glare off water; consider
  the dive case only if going deeper/faster than the native rating.
  Standard color for easier quick edits.
- **Movement:** Steady paddling/floating pace; avoid whipping the stick to
  "catch" splashes — let the 360 capture handle it and choose the moment in
  edit instead.
- **Reframe to:** Fixed forward or Deep Track on a fellow swimmer/kayaker if
  present.
- **Fastest edit:** 1-2 keyframes; rely on FlowState for the chop instead of
  trying to reframe around it.
- **Pairs well with:** Bullet Time from a boat or dock (swing over the
  water) for a standout single shot.

### 10. "Drone-style" third-person / bullet time
- **Setup:** Invisible selfie stick, arm fully extended overhead or
  outstretched, you as the subject in the middle of the frame.
- **X5 settings:** Dedicated Bullet Time mode, up to 5.7K120 for slow-mo;
  shoot in good light (low light forces slower shutter → motion blur).
- **Movement:** Swing the stick in a circle around yourself at roughly 1
  second per 360° rotation, keeping one lens up and one down as you swing —
  this is the "drone orbit" look without a drone.
- **Reframe to:** N/A — Bullet Time auto-reframes to keep you centered and
  slows the swing down in-camera.
- **Fastest edit:** None needed — it's a ready-to-share clip straight off the
  camera. At most, trim the lead-in/lead-out.
- **Pairs well with:** Use as the closing/opening shot of a longer edit — it
  reads as a "title card" moment.

### 11. Static group / landscape "look around" (tiny planet candidate)
- **Setup:** Stick planted vertically on the ground or a rock, camera at
  1–1.5 m, group standing in a loose circle around it or landscape
  surrounding it.
- **X5 settings:** 8K photo mode or 8K24 video for a few seconds.
- **Movement:** None (or one slow 360° pan if video).
- **Reframe to:** Tiny Planet or full Panorama — this shot exists specifically
  for that conversion.
- **Fastest edit:** One-tap Tiny Planet effect in-app; no keyframing.
- **Pairs well with:** Use as an establishing shot before a walking b-roll
  clip of the same location.

### 12. Single-lens POV for anything fast or tight (climbing, ski, kayak nose)
- **Setup:** Any mount, but shoot in **Single-Lens Mode** rather than full
  360 — good for spaces too tight for a clean stitch (inside a tent, close
  quarters) or fast action where you don't need a look-back option.
- **X5 settings:** Single-Lens 4K60 or 2.7K60.
- **Movement:** Natural to the activity.
- **Reframe to:** N/A — already a flat video file.
- **Fastest edit:** Import straight into any normal video editor; this is
  the zero-reframe-time recipe by design. Use it whenever you already know
  you won't need the 360 sphere for this particular clip.
- **Pairs well with:** Cut alongside full-360 clips from the same session for
  variety without extra reframe work on the fast bits.

### 13. Long steady-state (long drives, chairlifts, boring transit)
- **Setup:** Any fixed mount, forward-facing.
- **X5 settings:** TimeShift (hyperlapse) mode, 5.7K or 8K, speed on Auto (or
  manually pick up to 60x for very long stretches).
- **Movement:** None from you; the vehicle/lift does it.
- **Reframe to:** N/A — TimeShift renders a flat, sped-up file in-camera.
- **Fastest edit:** Zero reframing; trim only.
- **Pairs well with:** Bookend with a Bullet Time or InstaFrame clip at
  departure/arrival for context.

### 14. Two-people conversation (interview-style, both visible)
- **Setup:** Stick planted on a table between you, roughly equidistant, each
  person facing a different lens.
- **X5 settings:** 5.7K30, PureVideo indoors.
- **Movement:** Static.
- **Reframe to:** Multi-View (both lens views shown at once, e.g. front +
  back or split screen) so you don't have to choose/track a speaker at all.
- **Fastest edit:** Multi-View template applied once, covers the whole
  clip — no per-speaker keyframing.
- **Pairs well with:** Deep Track as a fallback for portions where only one
  person is actually talking and you want a single focused view instead.

---

## 3. Stopping the edit from always following you (the stick holder)

This is the recurring complaint, and it's mostly solvable at shoot time:

1. **Don't stand between the lenses.** If you're on the stitch line, both AI
   subject-detection and the "nearest/largest subject" heuristics that drive
   auto-reframe are more likely to lock onto you, because you're the biggest,
   closest, most central thing in the overlap zone. Stand facing one lens
   instead.
2. **Point the "front" lens at the actual subject, not at yourself.** The
   camera doesn't know intent — it infers it from framing. If the subject
   (view, friend, trail, kids) occupies the lens you've designated as front,
   that's what gets suggested first.
3. **Use Single-Lens Mode when you genuinely just want POV of what's ahead of
   you.** It physically can't reframe to you because it only records the
   forward hemisphere — this is the most reliable fix for "the AI keeps
   picking me."
4. **Use InstaFrame's non-Selfie option, or manually deselect yourself as
   tracked subject**, when multiple subjects are detected — Deep Track lets
   you tap/select which detected person to lock onto; get in the habit of
   confirming it picked the right one instead of accepting the default.
5. **Get out of frame on purpose for b-roll clips.** Hold the stick out and
   slightly ahead/above so you're below the lens's effective horizon line, or
   physically step back after planting the stick on a mount/tripod for that
   shot.
6. **Shoot "environment" clips separately from "me" clips.** Don't expect one
   clip to serve both purposes — a clip meant to show the view will edit fast
   if it never had you as a competing subject in the first place.
7. **Static tripod/table shots remove the ambiguity entirely** — with no
   camera motion, tracking is about *who's* in frame, not who's holding the
   stick, so this sidesteps the "follows the operator" behaviour altogether
   (see recipe 7 and 14).
8. **Report/skip bad auto-selections quickly rather than fighting them** — if
   Deep Track or AI Frame locks onto you, don't try to nudge it off with more
   keyframes; it's usually faster to just pick a template (fixed forward
   view, Multi-View) and abandon tracking for that clip.

---

## 4. What a personal helper tool could do (photographer's view)

Framed around the actual bottleneck — decisions not made at shoot time —
here's what I'd want from a tool, roughly in order of impact per effort:

1. **A pre-shoot checklist/prompt, not a post-shoot fix.** Before you start a
   session (or even per clip), a 10-second prompt: "What's this clip about?
   Subject / place / motion?" "Which lens is front?" "How long — quick
   moment or long roll?" Answering this out loud (or tapping 3 buttons) is
   the single highest-leverage habit, and it's exactly what a phone
   companion app or even a laminated card on the stick could do cheaply.
2. **A recipe picker on the phone**, keyed to the situations above (walking,
   driving, biking, vista, family, water, third-person) that just tells you,
   in one glance: mount, height, X5 setting to select, and which app feature
   to use afterwards. This turns "which of 17 shooting modes do I want" into
   a lookup, which is squarely in scope for the phase-1 effects/techniques
   library this project already plans to build (`library/`) — the shot
   recipes in this doc could seed that library directly, tagged by
   situation.
2b. This doesn't need to be a new standalone screen — it could genuinely be a
   Home Assistant dashboard card/checklist (something Ed can pull up on his
   phone before a shoot alongside his other tools) rather than a separate
   app, worth validating rather than assuming a bespoke UI is needed.
3. **A post-shoot triage / "worth editing" pass.** This is the highest-value
   *editing-time* saver: after import, flag which clips are short, single-
   subject, and steady (fast to reframe) versus long, ambiguous, or
   multi-direction (will take real time) — even a simple duration +
   motion-variance heuristic on the file metadata could rank clips so Ed
   edits the easy wins first and knows which long clips to run through
   auto-tools (AI Highlights, TimeShift) rather than by hand. This depends on
   what the .insv files and any Insta360 SDK expose — worth the
   insta360-software-expert agent validating feasibility before committing to
   it.
4. **A simple shoot log**, even a one-line note per session ("hike, overhead
   reveal at summit, front lens = trail") tied to the clip's timestamp/GPS,
   so six months later Ed knows what he meant to do with each file instead
   of re-discovering intent from scratch — this is the kind of small,
   boring, high-value feature this project's longer-term ideas already list.

My honest ranking: the checklist (#1) and the recipe picker (#2) need no SDK
work at all and would remove most of the "AI follows me" and "which setting"
friction immediately; the post-shoot triage (#3) is the one actually worth
prototyping as *the* tool, since it attacks the slowest part of Ed's current
workflow (hunting through long clips), but it's also the one most dependent
on what Insta360's files/SDK will actually let us inspect.

---

## Sources
- [Product Specs - X5](https://www.insta360.com/us/specs/x5)
- [Insta360 X5 FAQ: Everything You Need to Know](https://www.insta360.com/blog/tips/insta360-x5-faq.html)
- [Insta360 X5 Shooting Modes: Full Breakdown of All 17 Modes](https://www.benclaremont.com/blog/insta360-x5-all-17-shooting-modes-full-breakdown)
- [The Best 360 Video Settings for the Insta360 X5](https://www.benclaremont.com/blog/the-best-360-video-settings-for-the-insta360-x5)
- [Insta360 X5 camera hands-on: Bigger sensors, improved low light performance - Engadget](https://www.engadget.com/cameras/insta360-x5-launch-date-price-hands-on-132439941.html)
- [Insta360 X5 low light performance | Sub-Etha Software](https://subethasoftware.com/2025/04/27/insta360-x5-low-light-performance/)
- [Insta360 X5 Low Light Performance Tested](https://rundreamachieve.com/insta360-x5-low-light-performance/)
- [An Inside Look at Insta360 X5: Breaking Boundaries in 360 Innovation](https://www.insta360.com/blog/news/insta360-x5-inside-look.html)
- [Insta360 x5 Camera Tutorial - Avoiding Stitching Issues](https://onlinemanual.insta360.com/x5/en-us/camera/basicuse/stitching)
- [How To Use the Invisible Selfie Stick](https://www.insta360.com/blog/tips/invisible-selfie-stick-how-to-use.html)
- [Insta360 x5 Troubleshooting - X Series: Stitching Issues](https://onlinemanual.insta360.com/x5/en-us/troubleshooting/image/stitching)
- [Your Ultimate Guide to Insta360 X5: Tips, Tricks & Best Settings](https://www.insta360.com/blog/insta360-x5-tips-shooting-best-settings-guide.html)
- [How to Edit and Reframe 360 Videos: The Ultimate Guide](https://www.insta360.com/blog/tips/how-to-edit-and-reframe-360.html)
- [Insta360 X5: The Power of AI in 360-Degree Action Cameras](https://2immersive4u.com/2025/08/14/insta360-x5-the-power-of-ai-in-360-degree-action-cameras-stories-about-ai/)
- [Insta360 Speeds Up Workflow with New 360 Reframing Tool, Better Stabilization & Quick Reader](https://www.insta360.com/blog/news/insta360-update-speeds-up-workflow.html)
- [Insta360 Update – New Reframing Tool, Stabilization Mode, Quick Reader | CineD](https://www.cined.com/insta360-update-new-reframing-tool-for-the-app-stabilization-mode-and-quick-reader/)
- [Insta360 x5 Operation Tutorials - Bullet Time](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-mode/bullet-time)
- [Unlock the Magic of Bullet Time With Insta360](https://www.insta360.com/blog/tips/insta360-how-to-use-bullet-time.html)
- [X5 User Manual (PDF)](https://res.insta360.com/static/799f62228667e25424238f90e453d299/X5_UserManual_EN.pdf)
