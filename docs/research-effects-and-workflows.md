# 360 effects, techniques and "smarter way" workflows for the Insta360 X5

Research report by the explorer-researcher agent. Compiled 2026-09-26.

How to read this:

- **X5 status** says whether the entry applies to the X5 and the current app (Insta360 app v2.x, Studio 6.x). "Legacy source" means the tutorial was written for ONE X2/ONE R/X3 but the technique still works; the UI labels have changed (old "Stories > Shot Lab" is now "Edit > Shot Lab"; old "FreeCapture/ViewFinder" is now "Record" / "Quick Edit").
- **Difficulty** is for a solo shooter with a selfie stick: Easy = one or two keyframes or a one-tap template; Medium = a few keyframes plus some shooting discipline; Hard = multiple clips, compositing, or desktop-only.
- Every entry has a source URL and the source date. Insta360 changes the app often; dates matter.
- Confidence notes are given where a claim could not be verified directly.

Two caveats up front:

1. Reddit could not be fetched from this environment (Reddit blocks automated access), so the "complaints" section relies on the official manuals, Insta360's own announcements, and forum/Facebook snippets surfaced by search. Insta360's own documentation confirms the behaviour Ed sees, so the gap is about volume of user reports, not about whether the problem is real.
2. Several popular YouTube "X5 tricks" videos are retitled older videos. Gimbal Guru's "10 sensational Insta360 X5 tricks for 2026" was uploaded 2024-01-10 and its description talks about the X3; "21 creative Insta360 X5 tricks" was uploaded 2021-01-10 (X2 era). The techniques are still valid, but the editing UI shown is old.

---

## Part 1. Effects & techniques catalogue (38 entries)

### A. Reframe moves (keyframe camera moves you do in post)

These are the bread and butter. Almost all of them are two keyframes: one where the move starts, one where it ends, with "Ease In/Out" on the curve between them. The trick that makes them fast is doing the physical camera move while shooting so the edit only needs two keyframes.

**1. Rotating reveal (pan from front to back to reveal subject or landscape)**
- Looks like: the camera glides forward, then the view swings round to reveal what is behind or ahead.
- Shoot: 360 video, 8K30. Walk or ride forward smoothly. Nothing else.
- Edit (app): scrub to where the move starts, set framing, tap keyframe. Move 2-3 s later, set a keyframe pointing at the subject (or away from it, to reveal scenery). Tap the line between keyframes and choose Ease In/Out. FOV "Mega" works well. Studio: same, or drag a "Movement" preset (left-to-right) onto the clip from the Project page and set its duration.
- Difficulty: Easy.
- X5 status: current (shot on X5, March 2026).
- Source: MountMedia, "The Best Creative Shot Ideas For the Insta360 X5", 2026-03-28, https://www.youtube.com/watch?v=DZcy1So1Et4 (0:54)

**2. Fake drone / aerial shot**
- Looks like: an overhead drone shot following you or the scene.
- Shoot: X5 on the 3 m Extended Edition Selfie Stick (or 114 cm stick for a lower "drone"). Keep the two lenses parallel to the stick so it disappears. Hold the stick straight up, walk forward in a straight line at constant height. 8K30.
- Edit (app): keyframe at start and end, FOV Mega, optionally a third keyframe mid-way; or just Deep Track yourself. Combine with entry 1 for a "drone orbits then reveals" feel.
- Difficulty: Easy.
- X5 status: current.
- Sources: Insta360, "No drone? No problem!", 2022-07-18, https://www.insta360.com/blog/news/no-drone-no-problem.html ; MountMedia 2026-03-28 (5:05) https://www.youtube.com/watch?v=DZcy1So1Et4

**3. Rise shot (bottom-to-top crane)**
- Looks like: the camera lifts from ground level up past you into the sky.
- Shoot: stick fully extended, start with camera near the ground, raise smoothly overhead. Objects on left/right of frame add depth.
- Edit: keyframe at start and end of the lift; optional FOV change (Mega to Dewarp or the reverse) for more depth.
- Difficulty: Easy.
- X5 status: current.
- Source: MountMedia 2026-03-28 (8:07); Best360 "Crane Shot" in Insta360 Tutorials, 2025-05-22, https://www.youtube.com/watch?v=mYMILGQoyfc (10:41)

**4. Object reveal / push-through**
- Looks like: the camera passes through or past a railing, bike, car, doorway, and the subject appears as it clears the object.
- Shoot: long stick, move the camera through or alongside the object. 8K30.
- Edit: keyframe 1 framed so the object is hidden; keyframe 2 at the end framed on the object. Change FOV between them (Dewarp to Mega) for extra punch.
- Difficulty: Easy-Medium.
- X5 status: current.
- Source: MountMedia 2026-03-28 (4:05)

**5. Fake drone zoom (top-down pull-out with rotation)**
- Looks like: the view starts close on a person from above, then zooms out and rotates as if a drone is climbing.
- Shoot: telescopic stick overhead, film subject from above.
- Edit (Studio shown; app equivalent): keyframe 1 in Natural View on the subject; keyframe 2 at end zoomed right out with a rotation (roll) change.
- Difficulty: Medium.
- X5 status: technique current; source UI is X3-era Studio.
- Source: Gimbal Guru, uploaded 2024-01-10 (retitled), https://www.youtube.com/watch?v=PZx1yj1pUvA (6:21)

**6. Fake FPV dive**
- Looks like: an FPV drone diving down a cliff or building.
- Shoot: long stick, start high, sweep the camera down and forward along the drop.
- Edit: very wide FOV on the first keyframe (ultra-wide reads as FPV), then further keyframes tracing the "flight". Turn on Motion ND for blur.
- Difficulty: Medium-Hard.
- X5 status: technique current; Shot Lab "Fly Lapse" (entry 30) is the one-tap version.
- Source: Gimbal Guru 2024-01-10, https://www.youtube.com/watch?v=PZx1yj1pUvA (14:42)

**7. Planet landing**
- Looks like: a spaceship landing on a tiny planet: starts as a tiny planet, descends into a normal view.
- Shoot: from a viewpoint, move the camera top-to-bottom while walking forward.
- Edit: keyframe 1 tiny planet (FOV max, tilt straight down), keyframe 2 normal view at the end.
- Difficulty: Medium.
- X5 status: technique current.
- Source: Gimbal Guru 2024-01-10 (11:32), https://www.youtube.com/watch?v=PZx1yj1pUvA

**8. Tiny planet and inverted (reverse) tiny planet**
- Looks like: the world wrapped into a ball with you on top (tiny planet) or a tunnel/sky-ball (inverted).
- Shoot: works when either you move through a changing environment or the camera is static and things move around it. Keep the stick vertical.
- Edit (app): open FOV control, drag FOV to maximum and tilt straight down (planet) or straight up (inverted). Or use a "Tiny Planet" Movement template. Studio: view mode "Tiny Planet".
- Difficulty: Easy.
- X5 status: current (Movement templates have a "Tiny Planet" category).
- Sources: Insta360 X5 guide, 2025-04-24, https://www.insta360.com/blog/insta360-x5-tips-shooting-best-settings-guide.html ; App manual "Keyframes & Movement" https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/keyframes-and-camera-movements

**9. Tiny planet flip / enter-the-planet transition**
- Looks like: the view flips from tiny planet to normal (or the reverse) as a transition between scenes.
- Shoot: any clip; works best with a static camera and some movement in scene.
- Edit: keyframe in tiny planet, keyframe 1-2 s later in normal view; keyframe curve "Quick In/Out" for a snappy flip. Cut to the next clip on the fastest part of the move.
- Difficulty: Medium.
- X5 status: current (keyframe curves since app v2.17.0).
- Source: Gimbal Guru 2021-01-10 (7:13, 7:35), https://www.youtube.com/watch?v=_BpjaaCGS5E ; curves: App manual (link above)

**10. 360 spin and barrel roll**
- Looks like: the world spins horizontally (spin) or rolls end-over-end (barrel roll) around you.
- Shoot: no special shooting. On the X5 in InstaFrame 2.0 you can trigger them in-camera; the Mini Remote does a spin/roll with three presses.
- Edit (app): Record/Quick Edit mode has spin and barrel roll buttons: tap while recording your reframe. Or a Movement template in the "Advanced" category.
- Difficulty: Easy.
- X5 status: current.
- Sources: Insta360 "How to edit and reframe 360" (updated for X5), https://www.insta360.com/blog/tips/how-to-edit-and-reframe-360.html ; Best360 short "How to film and edit a barrel roll", 2025-11-25, https://www.youtube.com/shorts/107gkzr5aKA

**11. Dolly zoom / horizon pull (vertigo)**
- Looks like: the subject stays the same size while the background rushes in or out.
- Shoot: walk straight toward (or away from) a subject at steady pace. Insta360's own short uses a friend filming from behind with the stick.
- Edit (app): keyframe 1 with a wide FOV, keyframe 2 with a narrow FOV as you get closer (or the opposite), keeping the subject the same size. Shot Lab also has a one-tap "Dolly Zoom" template (see entry 33).
- Difficulty: Medium.
- X5 status: current.
- Source: Insta360 short "X5 Dolly Zoom Tutorial | Horizon Pull", 2025-08-31, https://www.youtube.com/shorts/aY-SqbRtRyc ; Gimbal Guru 2021 (4:39)

**12. 360 look-around (slow pan while walking)**
- Looks like: a slow, deliberate pan around the environment while moving.
- Shoot: stick raised, walk. Edit: two keyframes with different pan angles, long gap between them for a slow move.
- Difficulty: Easy.
- X5 status: current.
- Source: Gimbal Guru 2021-01-10 (4:58), https://www.youtube.com/watch?v=_BpjaaCGS5E

**13. Top-down third-person ("video game") view**
- Looks like: you seen from above-behind as in a third-person game.
- Shoot: stick extended behind/above you (or the Third-Person Backpack / Back Bar mount). Edit: one fixed keyframe looking down at yourself; widen FOV if the camera is close.
- Difficulty: Easy.
- X5 status: current.
- Source: Gimbal Guru 2021 (2:23, 5:42); MountMedia 2026 "Back Mount Shot" (10:20)

**14. Time freeze (animated 360 photo)**
- Looks like: a frozen moment the camera flies around.
- Shoot: a 360 photo (72MP) of an action pose. Edit: open the photo, use Record/Quick Edit to move the phone or swipe to animate a path through the still; or the new one-tap "Animate" effect for 360 photos.
- Difficulty: Easy.
- X5 status: current (Animate is a 2026 app feature).
- Sources: Gimbal Guru 2021 (6:02); App Store listing for one-tap Animate, https://apps.apple.com/us/app/insta360/id1491299654

**15. Split screen / MultiView (2-4 angles at once, picture-in-picture)**
- Looks like: two to four views of the same moment (front and selfie, or "car multiview").
- Shoot: nothing special. Edit (app): keyframe icon > reframing menu > Multiview; choose a layout, drag selection boxes, adjust each frame's zoom, optional blend edge or PiP.
- Difficulty: Easy.
- X5 status: current (upgraded April 2026).
- Source: Ben Claremont, "3 quiet Insta360 app updates", 2026-04-24, https://www.benclaremont.com/blog/3-quiet-insta360-app-updates-you-might-have-missed

**16. Spin transition (whip-spin cut between clips)**
- Looks like: the view whips round at the end of clip A and settles at the start of clip B.
- Shoot: two clips, ideally both moving. Edit: fast spin keyframes at the end of A and start of B (or the Record-mode spin button), cut on the blur. Motion ND helps hide the cut.
- Difficulty: Medium.
- X5 status: current.
- Source: Insta360 short "How to do this creative spin transition", 2025-12-01, https://www.youtube.com/shorts/r5fsQzzXHus

**17. Tracked-object POV shot (mouth mount)**
- Looks like: a ball, tool or hand-held object stays dead centre while the world moves.
- Shoot: X5 on a mouth mount (or chest), hold/throw the object. Edit: Deep Track with the "Universal Tracker" on the object (helmets, cups, phones are supported object classes), or keyframe the object to centre.
- Difficulty: Medium.
- X5 status: current.
- Sources: Gimbal Guru 2024 (0:47); App manual "Tracking Feature" https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/tracking-function

### B. Stick and mount tricks (decisions you make while shooting)

**18. Invisible selfie stick third-person shot**
- Looks like: you filmed by an invisible cameraman.
- Shoot: keep the lenses parallel with the stick ("right down the middle") or it will not disappear. Extended 3 m stick for the "how did they film that" version.
- Edit: none needed beyond framing.
- Difficulty: Easy.
- Source: Insta360 X5 guide 2025-04-24 (link above); Insta360 "How to use the Invisible Selfie Stick", https://www.insta360.com/blog/tips/invisible-selfie-stick-how-to-use.html

**19. Front-mount "who is filming me" shot**
- Looks like: a camera operator riding/skiing in front of you.
- Shoot: stick pointing forward, mounted on the Bike Headset Cap Mount, Ski Pole Mount, or the Third-Person Bike Handlebar Mount. Use the carbon Action Invisible Selfie Stick (aluminium ones can break on this shot).
- Edit (app): tap Custom > Selfie and let the app reframe, or Deep Track yourself.
- Difficulty: Easy.
- Sources: MountMedia 2026 (2:18); Insta360 bike mount announcement https://www.insta360.com/blog/news/new-bike-mount-for-third-person-shots.html

**20. Back mount / backpack follow shot**
- Looks like: a drone following you from behind.
- Shoot: Back Bar Mount or Third-Person Backpack Mount with a stick. Edit: let the app track you, widen FOV since the camera is close.
- Difficulty: Easy-Medium (comfort is the hard part).
- Sources: MountMedia 2026 (10:20); Best360 2025 "Backpack Shot" (11:45)

**21. 360 orbit (hand-swung, not bullet time)**
- Looks like: a drone circling you at shoulder height.
- Shoot: standard video mode, swing the stick around yourself horizontally at shoulder height. Horizon lock in stabilisation keeps it level. Edit: point the view at yourself (Deep Track or a fixed keyframe).
- Difficulty: Easy.
- Source: Gimbal Guru 2021 (1:55), https://www.youtube.com/watch?v=_BpjaaCGS5E

**22. Low-angle ground skim**
- Looks like: a camera racing along the ground.
- Shoot: stick pointing down, camera just above the surface; do not let the lens touch the ground; keep some distance from the subject. Edit: frame on the subject.
- Difficulty: Easy.
- Source: MountMedia 2026 (11:10)

**23. Chest-mount 360 POV**
- Looks like: a very wide first-person view with hands and bike visible.
- Shoot: X5 protruding slightly from a chest mount, facing forward. Enable "tilt recovery" for bikes so lean is preserved. Edit: FOV Dewarp (Mega makes arms look too long).
- Difficulty: Easy.
- Source: MountMedia 2026 (9:34)

**24. Look-up shot**
- Looks like: towering trees or buildings converging overhead as you move.
- Shoot: camera held low, moving forward. Edit: tilt up, wide FOV; one keyframe.
- Difficulty: Easy.
- Source: Best360 / Insta360 Tutorials 2025-05-22 (5:37), https://www.youtube.com/watch?v=mYMILGQoyfc

**25. Portal water jump / dive match-cut**
- Looks like: you jump into water in one place and surface somewhere else.
- Shoot: clip A: jump in, dunk the camera as the person enters the water. Clip B: elsewhere, do the same in reverse (camera comes up as the person surfaces). X5 is waterproof; the Invisible Dive Case gives sharper underwater results.
- Edit: cut exactly at the water surface in both clips.
- Difficulty: Medium-Hard.
- Source: Gimbal Guru 2024 (2:38, 10:44), https://www.youtube.com/watch?v=PZx1yj1pUvA

### C. Speed and time effects

**26. TimeShift hyperlapse (in-camera)**
- Looks like: flying through a scene at speed with motion blur.
- Shoot: TimeShift mode, 8K, speed Auto or manual up to 60x. Keep camera at constant height, move in straight lines (ski lift, bike). Files are ~10% the size of normal video.
- Edit (app or Studio): turn on Motion ND; MountMedia used Spread 85 / Intensity 50. Add keyframes only where the path curves.
- Difficulty: Easy.
- Sources: MountMedia 2026 (5:52); Ben Claremont "All 17 X5 shooting modes", 2025-05-29, https://www.benclaremont.com/blog/insta360-x5-all-17-shooting-modes-full-breakdown

**27. Walking hyperlapse from normal video**
- Looks like: same as 26 but you keep full control in post (and can slow down for a moment).
- Shoot: standard 8K30 video, stick up, walk straight. Edit: speed to 8x, Motion ND, a keyframe at the start on a building, then keyframes only at curves. Bigger files than TimeShift.
- Difficulty: Easy-Medium.
- Source: MountMedia 2026 (8:43)

**28. Motion timelapse (reframed 11K timelapse)**
- Looks like: a timelapse where the camera also pans.
- Shoot: Timelapse mode, 11K, interval 5 s for clouds or 2 s for crowds, at least 10-15 min. Edit: keyframe at start and end panning in the direction the clouds move.
- Difficulty: Easy.
- Source: MountMedia 2026 (3:14)

**29. Speed ramp**
- Looks like: fast, then real-time or half-speed at the key moment, then fast again.
- Shoot: normal video. Edit (app): Speed tool per segment (0.25x-8x; Insta360 suggests 16x hyperlapse at start/end and 1x or 0.5x for the key moment).
- Difficulty: Medium.
- Sources: Insta360 "Adjust Speed", https://www.insta360.com/support/supportcourse?post_id=13474 ; Ben Claremont app reframe tutorial 2025-05-23, https://www.benclaremont.com/blog/reframe-360-video-insta360-app-v2-tutorial

**30. Freeze Go (freeze at the peak moment, camera moves around it)**
- Looks like: the video freezes at the top of a jump while the camera keeps moving.
- Shoot: normal video with a clear peak action. Edit: Movement template "Freeze Go" (AI finds the peak moment) in the "Highlights" category.
- Difficulty: Easy.
- X5 status: current (movement templates added Aug 2024, app v1.69).
- Source: PetaPixel, 2024-08-15, https://petapixel.com/2024/08/15/insta360-app-update-promises-better-ai-and-easier-360-degree-video-editing/

**31. Slow-motion tracked run**
- Looks like: cinematic slow motion of someone running/riding.
- Shoot: 5.7K60 or 4K120 video (the manual says these give 4x slow-mo playback). Edit: Deep Track the runner, set speed 0.25-0.5x.
- Difficulty: Easy.
- Source: Insta360 X5 guide 2025-04-24; Gimbal Guru 2024 (9:40)

**32. Time flies (real-time you + timelapse sky)**
- Looks like: you standing still while clouds race overhead.
- Shoot: clip A normal video of the scene with you; clip B a timelapse from the same spot. Edit: desktop NLE, luma key the sky from A and drop B behind it.
- Difficulty: Hard (desktop compositing).
- Source: Gimbal Guru 2024 (18:13)

### D. Bullet time family

**33. Bullet time (and bullet time with motion)**
- Looks like: the world spins around you in slow motion, Matrix style.
- Shoot: Bullet Time mode (5.7K120). Bullet Time handle or cord; swing overhead at about one rotation per second, no faster; try to keep one lens up and one down. Works while skiing or walking too.
- Edit: open the clip, export; the camera auto-centres you. Shot Lab "Bullet Time Mix" stitches six or more locations into one reel.
- Difficulty: Easy-Medium.
- Sources: Insta360 X5 guide 2025-04-24; MountMedia 2026 (7:32); Bullet Time Mix tutorial https://www.insta360.com/support/supportcourse?post_id=17299 (ONE R era, legacy UI)

### E. Shot Lab and AI templates (one-tap, but you must shoot them the way the template expects)

Shot Lab lives under the app's Edit tab and has 25-30+ templates that change over time. Most of the step-by-step tutorials below are ONE R / ONE X2 era (2020-2021) and reference the old "Stories" tab, but the shooting recipe is what matters and the templates still exist in the app as of 2025-2026 per Insta360's X5 guide (which names Sky Swap, AI Warp and Fly Lapse) and Panoee's June 2026 software guide (Clone Trail, Sky Swap). Confirm each template is still present in the app before relying on it.

**34. Fly Lapse (fake FPV drone hyperlapse)**
- Shoot: 5.7K30 (X5: 8K works), Invisible Selfie Stick at full length, walk about 3 minutes in a straight line; symmetrical streets with close buildings work best.
- Edit: Edit > Shot Lab > Fly Lapse > Use this theme; AI picks segments; preview and export.
- Difficulty: Easy.
- Source: Insta360 forum FlyLapse tutorial (ONE R era), https://forums.insta360.com/section/16/post/5400/

**35. Clone Trail / Shadow Clone**
- Looks like: several copies of you trailing behind as you move.
- Shoot: camera static on a tripod or held steady, you move across the scene in one direction.
- Edit: Shot Lab > Clone Trail. Difficulty: Easy.
- Sources: Insta360 "Shot Lab: the AI tool", https://www.insta360.com/blog/tips/insta360-shot-lab-ai-editing-tool.html ; Shot Lab tutorial collection https://forums.insta360.com/section/16/post/24010/

**36. Sky Swap**
- Shoot: open space, camera on a stick or tripod, more than 15 s of footage with lots of visible sky. Edit: Shot Lab > Sky Swap > pick Atmospheric/Starry (static) or Cube (interactive) templates.
- Difficulty: Easy.
- Source: Insta360 forum "Shot Lab Creative Inspiration", https://forums.insta360.com/section/15/post/41964

**37. Street Lapse and Flash Dash (superhuman speed)**
- Looks like: you isolated from a background that streams past (Street Lapse) or you rocketing forward with lightning (Flash Dash).
- Shoot: walk/skate/ski steadily with the stick extended; several people can be in a Flash Dash. Edit: Shot Lab template.
- Difficulty: Easy.
- Sources: Insta360 Shot Lab blog (above); Flash Dash tutorial https://forums.insta360.com/section/16/post/2661/

**38. Ghost Town (remove people from a busy place)**
- Shoot: Timelapse at 1 s interval for over a minute, or Interval Photo with at least 60 shots; camera static; avoid complex lighting and dense crowds.
- Edit: Shot Lab > Ghost Town. Difficulty: Easy.
- Source: https://forums.insta360.com/section/16/post/6026/ (ONE X2 era)

**39. Stop Motion (static / forward / backward walker)**
- Shoot: 5.7K30, stick at full length, walk at an even pace for at least 2 minutes so the AI can learn your pose. Edit: Shot Lab > Stop Motion, long-press yourself, pick one of three motion styles.
- Difficulty: Easy.
- Source: https://www.insta360.com/support/supportcourse?post_id=17281 (2020)

**40. Roll Planet / Spin View / Jump Planet**
- Roll Planet: camera static on tripod, you walk a 2 m circle around it; edit into tiny planet and let the phone gyro roll it. Spin View: one 360 photo of you at 45-60 degrees to the stick, template animates it (8 variants). Jump Planet / Giant Jump: jump next to a static camera.
- Difficulty: Easy.
- Sources: Roll Planet https://www.insta360.com/support/supportcourse?post_id=8257 ; Spin View https://forums.insta360.com/section/16/post/2195/ ; collection https://forums.insta360.com/section/16/post/24010/

Other Shot Lab templates confirmed to have existed (verify in app): Dolly Zoom, Auto TimeShift, Time Flip, Starlapse, Overtaker, Horizon Flip, Pixelize, Split Jump, Stop Motion Mix, Flip My Day, Parallel Planet, Nose Mode, AI Warp, People Swap (movement template).

---

## Part 2. Workflow scan: how fast creators avoid tedious keyframing

### 2.1 The ladder of reframing methods in the current app (fastest first)

Insta360's own forum post "4 ways to reframe like a pro" (https://forums.insta360.com/section/16/post/60173/) and the March 2023 (updated for X5) guide (https://www.insta360.com/blog/tips/how-to-edit-and-reframe-360.html) describe a ladder. Ed is currently stuck near the bottom (manual keyframes) and burned by the top (AI). The middle rungs are where the time savings are.

| Rung | What it is | Effort | Who picks the subject |
|---|---|---|---|
| Fixed view export | Tap Custom / Selfie / Forward, export. No keyframes. | Seconds | You (one direction for the whole clip) |
| AI Frame | Suggests two perspectives for the clip | Seconds | AI, you choose between suggestions |
| Auto Frame (app and Studio) | AI cuts the clip into several highlight clips, each labelled with subject and direction (person, car, dog, building; Forward / Selfie / In / Out) | Minutes of processing, seconds of choosing | AI; you keep the ones you like. Cannot steer it. |
| Deep Track | You draw / pick a green box; AI keeps it centred | Seconds to set, processing time | **You** |
| Record / Quick Edit ("Snap Wizard") | Play the clip and steer live: swipe, virtual joystick, or physically move the phone (gyro). Spin and barrel roll buttons. Saves instantly. | Real time (one pass) | You, live |
| Movement templates | 40+ preset moves (categories Tiny Planet, Protagonist, Advanced, Highlights; e.g. People Swap, Freeze Go) applied at a keyframe with adjustable speed/end perspective | One tap per move | You place it; AI templates pick people |
| 360 Templates (new April 2026) | Whole-edit templates ("globe zooms", "planet spinners") applied to chosen clips; AI Effects are limited to three generations | One tap | AI |
| Keyframes + curves | Manual; keyframe curves (Linear, Ease In/Out, Ease In, Ease Out, Transition Delay, Quick In/Out, Hard Cut) since app v2.17; Auto Keyframe toggle adds keyframes as you drag | Slowest | You |
| AI Edit / Auto Edit / FlashCut | Multi-clip auto edit with 70+ themed templates, music, transitions; you can edit individual scenes after | Minutes | AI |

Sources for the table: Insta360 Snap Wizard announcement https://www.insta360.com/blog/news/insta360-update-speeds-up-workflow.html ; App manual Tracking https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/tracking-function ; App manual Keyframes & Movement https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/keyframes-and-camera-movements ; App manual Auto Edit https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/auto-edit ; Studio Auto Frame https://onlinemanual.insta360.com/studio/en-us/operation-guide/edit-function/auto-frame ; Ben Claremont 2026-04-24 (above); ThreeSixtyCameras app guide 2025-05-04 https://www.threesixtycameras.com/360-cameras/the-ultimate-insta360-app-2025-guide-full-walkthrough-features-explained/

Practical implications for Ed:

- **Deep Track is the only method where he chooses the subject.** In the app: Editor or Quick Edit > Deep Track; it auto-suggests a green box, but you can zoom/move the box to any target, or long-press to pick manually. Two tracker types: Universal (objects like helmets, cups, phones) and Individual (whole people/pets). Since app v2.21.0 on the Quick Edit page you can pause and resume tracking, which is the official way to switch target mid-clip: pause, re-pick, resume. Limitation: Deep Track cannot be combined with keyframes or Movement templates on the same clip, and is unavailable for Bullet Time, Timelapse and single-lens clips. (App manual, Tracking Feature, link above.)
- **Record / Quick Edit mode with the phone gyro is the fastest "manual" method.** Ben Claremont (2025-05-23) reports doing it on a swivel office chair for "surprisingly decent results". One pass, no keyframes, exports at once. Good for walk-throughs and look-arounds.
- **Movement templates replace the two-keyframe moves in Part 1.** MountMedia's Studio workflow: put clip on the Project timeline, set framing, pick Movement (e.g. left-to-right), drag it onto the clip, set duration. Same in the app via the yellow "+" > Movement.
- **Auto Frame is steerable after the fact, not before.** Each generated clip is labelled by subject and direction. Ed can simply discard the "Selfie view / person" clips and keep "Forward view / building / car" ones. It is still AI choosing, but the labels make triage fast. Studio's Auto Frame runs on the Media page, minimum 10 s clips, not for Timelapse/Bullet Time/Slow Motion.
- **Keyframe copy/paste does not exist in the app** (manual says use Studio). In Studio, duplicating a clip carries all its edit data, which is the workaround for re-using a reframe on similar shots. Copy/paste keyframes remains a forum feature request (https://forums.insta360.com/section/14/post/2290/).

### 2.2 Shooting so that editing is easy

Consistent advice across MountMedia (2026), Insta360's X5 guide (2025), insta360.pl (May 2026) and the forum:

1. **Make the camera move physically; keep the edit to two keyframes.** Rise, orbit, push-through, drone-up: if the stick does the move, post is "keyframe at start, keyframe at end, ease". MountMedia (a solo creator) built his whole 12-shot list on this principle.
2. **Constant height, straight lines, steady pace** for anything sped up (hyperlapse, Fly Lapse, Street Lapse, Stop Motion). Curves are where extra keyframes get added.
3. **Keep the subject off the stitch line** (the sides of the camera) and about 0.75 m or more away; keep lenses parallel to the stick.
4. **Shoot flat when you already know the framing.** InstaFrame 2.0 (X5, firmware 1.7.43+, app 2.14+) records a ready 4K30 flat video plus an optional 5.7K 360 backup. Modes: Fixed View (front/back/top/bottom/custom), Selfie View (tracks the stick holder), and since December 2025 **Follow View, which "can track anyone in frame, not just the person holding the Invisible Selfie Stick"**. Virtual Joystick lets you steer the flat framing live on the camera screen; Virtual Gimbal has Pitch Lock / Follow / FPV. Limits: no HDR, no 60fps, no 8K, no PureVideo; subject tracking and virtual joystick are mutually exclusive; no object/animal tracking; 50 cm minimum. (X5 manual https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-mode/instaframe ; winter update 2025-12-11 https://www.insta360.com/blog/news/insta360-2025-winter-update.html ; TechRadar 2025-05-03 https://www.techradar.com/cameras/360-cameras/these-handy-insta360-x5-editing-tricks-address-my-biggest-problem-with-360-action-cameras)
5. **Me Mode / FreeFrame** when you just want a wide selfie or POV without any reframe (170 degree, 4K30 or 2.7K120).
6. **Mark the moment while shooting.** Tap the flag on the camera screen, use voice control ("mark"), or Twist-to-Shoot on the stick. Markers live in the .insv file and Studio shows them on the timeline. The X5 AI Highlights Assistant flags exciting moments in-camera so the app's analysis is faster. Note: the X5 AI Highlights Assistant does not support manual flagging inside its own highlight list; manual markers are a separate feature. (X5 manual, AI Highlights Assistant https://onlinemanual.insta360.com/x5/en-us/operating-tutorials/highlight-features/ai-highlights-assistant ; Ben Claremont hidden settings https://www.benclaremont.com/blog/Insta360-X5-hidden-settings)
7. **Pre-Recording and Loop** for unpredictable action so you record less and scrub less.
8. **Decide the platform and aspect ratio before you open the clip** (insta360.pl's checklist: platform, format, mark strongest moments, choose reframe method, keep it short, add effects last).

### 2.3 Desktop routes that save real time

- **Insta360 Studio 6.x**: Deep Track, Auto Frame, Motion ND, keyframe pop-up with numeric pan/tilt/roll/FOV/distance, keyframe transitions, project management (several edits of one clip), export queue and export presets, duplicate-clip-inherits-edits, higher bitrate output. Studio's Project page has Movement presets you drag onto a clip. (Studio tutorial https://www.insta360.com/support/supportcourse?post_id=20605 ; Studio experience update 2021-11-23 https://www.insta360.com/blog/news/insta360-studio-experience-update.html ; MountMedia 2026.)
- **Insta360 Reframe plug-in for Premiere Pro** (2021+): imports .insv directly, keyframes yaw/pitch/FOV. Backward compatibility complaints exist on Adobe's forum. https://www.insta360.com/support/supportcourse?post_id=17067
- **GoPro ReFrame for DaVinci Resolve** (public beta Sept 2025): works on any equirectangular MP4 exported from Studio; pan/tilt/roll/zoom keyframes with motion blur between keyframes. https://community.gopro.com/s/article/GoPro-Reframe-For-DaVinci-Resolve
- **reframe360XL** (open source, Apache 2.0, OpenFX for Resolve 17-19, Win/Mac/Linux): pan/tilt/roll/FOV with animation curves. https://github.com/eltorio/reframe360XL
- **KartaVR / Reactor Reframe360Ultra** in Resolve, real-time reframing (Hugh Hou tutorial). https://www.classcentral.com/course/youtube-how-to-reframe-any-360-video-in-davinci-resolve-free-in-real-time-insta360-gopro-max-qoocam-8k-150916
- Hardware control: Resolve control panels have pan/tilt/zoom/rotate knobs; a Blackmagic forum thread proposes flight-sim joysticks for reframing (https://forum.blackmagicdesign.com/viewtopic.php?f=21&t=183899, could not be fetched, unverified). "Reframe Controls" was a $5 overlay for GoPro VR Reframe in Premiere (2019, https://360rumors.com/reframe-controls-gopro-vr-reframe/). A Google patent (US10645361) describes recording a viewing path from a VR headset as the edit. None of these is a turnkey product for Insta360 footage today.

### 2.4 Community / open-source tools and file-level hooks (the interesting part)

**Studio project files are editable XML, and two projects already write keyframes into them.**

- `.insprj` format: Studio's project file is plain XML. `<scheme>` blocks hold `<preference>`, `<timeline>`, `<rendering>` and `<audio>`; inside the timeline's `<recording>` section are `<keyframe>` elements with time in ms plus pan, tilt, FOV and distance, and `<transition>` elements with easing between keyframes. Documented against Studio 4.2.1 (2022-04-03) at https://insta.pk360.de/studio202x_insprj/ . Caveat: file naming and MD5 hashing changed between versions, and moving source files disconnects the project.
- **insta360py** (Python 3.12+, MIT, pure Python, protobuf only): reads/writes the .insv metadata trailer, cuts clips without re-encoding, extracts timeline markers, and **injects markers as editable keyframes into a Studio .insprj** (`insv-markers`, plus a small GUI). Tested on ONE R and **X5** including 5.7K dual-lens files. Injected keyframes inherit framing by interpolating between your existing keyframes so they never move the camera by themselves. Keyframe injection is Windows-only, and Studio must be closed while it runs (Studio keeps the project in memory), then reopened. https://github.com/ReignBock/insta360py
- **Insv-Marker-Extractor** (Windows, PowerShell/Batch wrapper around insvtools): same idea, tested with Studio 6.0.2; "Smart Interpolation" preserves manual keyframes. https://github.com/arismelachroinos/Insv-Marker-Extractor
- **insvtools** (Java toolkit for .insv) https://github.com/alex-plekhanov/insvtools ; **InstaTrailer.jl** (Julia, reads the .insv/.insp trailer; ".insv files are just .mp4 files with an extra trailer") https://github.com/EvertSchippers/InstaTrailer.jl
- What this means: the pipeline "something decides pan/tilt/FOV at time t, writes `<keyframe>` rows into the .insprj, Studio renders" already exists in a hobbyist form. Nobody has yet plugged a tracker into the front of it (see 2.5).

**Stitching / conversion without Studio**

- **insta360-cli-utils**: Docker + the Linux Media SDK (LinuxSDK20241128) + ffmpeg + exiftool to stitch .insv to equirectangular MP4 headlessly. Useful on Ed's Proxmox box; the SDK itself must be requested from Insta360. https://github.com/syncom/insta360-cli-utils
- **Insta360-INSV-Pro-Converter** (C++17, GPU): .insv to 2:1 equirectangular with FlowState and optical-flow stitching, all X models, Windows/Ubuntu. https://github.com/umutcantr/Insta360-INSV-Pro-Converter
- **Desktop Media SDK (official, C++)**: stitching, stabilisation, export for ONE X through X5, Windows 7+ x64 and Ubuntu 22.04; apply at https://www.insta360.com/sdk/apply. The public README documents equirectangular export only; no documented API for animated yaw/pitch/FOV reframe export. Whether the SDK's "set camera angle parameters (FOV, distance, yaw, pitch)" can be keyframed is for the software expert to check in the actual SDK docs. https://github.com/Insta360Develop/Desktop-MediaSDK-Cpp
- **Insta360Convert-GUI**: ffmpeg-based extraction of fixed pitch/yaw/FOV perspective views from equirectangular MP4 (no animated moves; built for photogrammetry). https://github.com/stechdrive/Insta360Convert-GUI
- **ffmpeg v360 filter**: converts equirectangular to a flat perspective with yaw/pitch/roll/FOV. Handy for fixed views; animating parameters per frame needs a script that renders segments or a Python equirect-to-perspective library. Cheat sheet: https://gist.github.com/nickkraakman/e351f3c917ab1991b7c9339e10578049

**Tracking and automatic cinematography on 360 footage**

- **SpaceTimeLab/360_object_tracking** (2025-2026, YOLOv12 + StrongSORT on equirectangular video; projects the frame into four overlapping perspective sub-images to detect, then re-merges; outputs MOT track files). Built for cycling-safety research, not for reframing, but it solves exactly the "where is the thing I care about, over time" problem on 360 frames. No licence stated. https://github.com/SpaceTimeLab/360_object_tracking
- **"Poor man's intelligent reframing" gist** (Jan 2024): YOLO + DeepSORT + CLIP, choose the longest-lived track, ease the crop toward it with a 0.1 damping factor, drift back to centre if lost for 3 s. Flat GoPro video only, but the smoothing recipe is directly reusable. https://gist.github.com/bsod90/fbeca5fd3d021e43aead278d176f07fb
- Research lineage: Pano2Vid / AutoCam (2016), "Making 360 video watchable in 2D" (2017), Deep 360 Pilot (2017, sports), TAPVid-360 (Nov 2025, point tracking in 360). Older code exists but is not maintained. Lists: https://github.com/hsientzucheng/awesome-360-vision , https://github.com/xiangjieSui/Awesome-360-processing

### 2.5 Complaints that match Ed's, and known fixes

**The behaviour is by design, and Insta360 has acknowledged it.**

- X5 manual, InstaFrame: Selfie View "automatically recognizes and tracks the person holding the selfie stick (or the person who occupies the largest area in the frame if no stick is held)". Manual subject selection is not available in 1.0; with several equally sized people it "randomly selects one person to track". (https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-mode/instaframe)
- December 2025 winter update: InstaFrame 2.0 Follow View "can now track anyone in frame, not just the person holding the Invisible Selfie Stick". That sentence only makes sense if enough users complained. (https://www.insta360.com/blog/news/insta360-2025-winter-update.html)
- Auto Edit / AI Edit documentation offers no subject or perspective choice at all. ThreeSixtyCameras (May 2025) calls Auto Edit results "inconsistent". TechRadar (May 2025) still describes 360 editing as "a painful, frustrating slog" that InstaFrame and AI Edit only partly fix.
- Flow gimbal Deep Track docs recommend the tracked subject occupy more than 1/10 of the frame and be within 5 m, which explains the bias: on a selfie stick, Ed is always the biggest, closest person.
- Reddit threads on this could not be retrieved (blocked). Facebook Insta360 group posts surfaced by search ("Can you copy and paste keyframes from one clip to another", "Does the desktop app have movement templates?") show the same friction but could not be opened. Confidence that the complaint is widespread: medium; confidence that it is real and designed-in: high.

**Fixes that exist today**

1. Use **Deep Track with a manually chosen box** instead of Selfie View, AI Frame or AI Edit. Pause/resume in Quick Edit (app 2.21+) to change target mid-clip.
2. Use **Forward View** (fixed) export or Auto Frame and discard the "Selfie" labelled clips.
3. Shoot in **InstaFrame 2.0 Follow View** when the subject is someone else; keep 360 backup on.
4. Make yourself small: 3 m stick fully extended, camera high, so other subjects are larger in frame and the "largest area" rule picks them. (Inference from the documented rule; not tested.)
5. Use **Record / Quick Edit** with the phone gyro for one-pass manual reframes; a swivel chair helps.
6. Use **Movement templates** and keyframe curves rather than hand-placed keyframes for the standard moves.

### 2.6 Unconventional and surprising

- **Markers as the editing interface.** Press mark (button, voice, or twist) at the moment something interesting happens; insta360py drops a keyframe at each marker in Studio. Ed then only sets the direction at each marker instead of scrubbing for the moment. This is the cheapest "smarter way" and needs no AI.
- **Swivel chair gyro reframing** (Ben Claremont, 2025): sit on an office chair, hold the phone, spin. A physical "reframe controller" for free.
- **Insta360 is itself moving toward "tell it the subject".** The X6 (August 2026) ships "Moments Pro", where the user specifies subject, mood, style and timeframe and a cloud tool generates the video, plus a "POV Head Tracker" accessory that frames from the wearer's gaze. Not on the X5 (as far as the announcement says), but it signals the direction. https://amp.kr-asia.com/insta360-launches-x6-as-360-cameras-hand-more-creative-work-to-ai
- **Insta360 X5 firmware and app now let the camera do the spins**: InstaFrame 2.0's spin/barrel-roll buttons and the Mini Remote triple press mean some "effects" no longer need editing at all.
- **Studio duplicate-clip trick** as a poor man's template: keep a Studio project with one "reference" reframe per shot type (rise, orbit, reveal) and duplicate it onto new clips of the same kind.
- **360 Templates and AI Effects (April 2026)** are new enough that few tutorials cover them; the "globe zoom" and "planet spinner" templates automate several Part 1 entries. Generation limits (three uses) apply to AI Effects.

---

## Part 3. Most promising "smarter way" ideas, with confidence

1. **Marker-to-keyframe pipeline on Studio project files (high confidence it works today).** `.insprj` is XML; insta360py already injects keyframes and was tested on X5 files with Studio 6.x. A small tool could take "pick the target at marker N" and write the keyframe rows. Risk: Windows-only injection, Studio must be closed, and Insta360 can change the format at any Studio release.
2. **User-chosen target tracking that writes .insprj keyframes (medium confidence; nobody has built it, all parts exist).** Stitch to equirectangular (Studio export, or Media SDK / INSV-Pro-Converter on the Proxmox box), run a tracker (SpaceTimeLab's 360 detector/tracker, or SAM2/YOLO on perspective sub-views), convert the track to pan/tilt over time with the gist's easing rule, write keyframes into the .insprj, let Studio render with its stabilisation and quality. This is the "Ed picks, tool proposes keyframes" idea from CLAUDE.md, and it fits Ed's server. Unknowns: whether Studio's keyframe format is stable across versions (pk360 doc is from Studio 4.2, insta360py proves it still worked on 6.x), and how well trackers cope with equirectangular distortion (SpaceTimeLab's sub-image trick handles it).
3. **Shot recipes that reduce post to two keyframes or one template (high confidence, no code).** Part 1 is already organised that way; a checklist per shot type ("stick up, walk straight, constant height, keyframe start/end, Mega FOV, Motion ND 85/50") is the phase-1 library.
4. **Switch the default from AI Edit to Deep Track + Movement templates in the app (high confidence).** This is a habit change, not a tool, and it directly addresses the "follows me" problem.
5. **InstaFrame 2.0 Follow View for other-subject shots (high confidence for people; no animals/objects).**
6. **Media SDK reframe export (low-medium confidence).** The official SDK advertises yaw/pitch/FOV camera parameters but the public README only shows equirectangular export; the software expert should confirm whether keyframed flat export exists before planning around it.

---

## Source index (dates)

- Insta360, X5 tips guide, 2025-04-24: https://www.insta360.com/blog/insta360-x5-tips-shooting-best-settings-guide.html
- Insta360, How to edit and reframe 360 (X5-updated), orig. 2023-03-23: https://www.insta360.com/blog/tips/how-to-edit-and-reframe-360.html
- Insta360, Snap Wizard / Quick Reader update: https://www.insta360.com/blog/news/insta360-update-speeds-up-workflow.html
- Insta360, Winter update, 2025-12-11: https://www.insta360.com/blog/news/insta360-2025-winter-update.html
- Insta360, No drone no problem, 2022-07-18: https://www.insta360.com/blog/news/no-drone-no-problem.html
- Insta360, 10 creative video ideas, 2025-07-16: https://www.insta360.com/blog/tips/videography-ideas.html
- Insta360 forum, 4 ways to reframe like a pro: https://forums.insta360.com/section/16/post/60173/
- Insta360 app manual: Tracking, Keyframes & Movement, Auto Edit (links in text)
- Insta360 X5 manual: InstaFrame, Me Mode, Bullet Time, AI Highlights Assistant (links in text)
- Insta360 Studio manual: Deep Track, Keyframe, Auto Frame, Deep Track issues (links in text)
- Ben Claremont, All 17 X5 modes, 2025-05-29; App V2 reframe tutorial, 2025-05-23; 3 quiet app updates, 2026-04-24; X5 hidden settings
- ThreeSixtyCameras, Insta360 app 2025 guide, 2025-05-04; Studio 2025 walkthrough
- TechRadar, X5 editing tricks, 2025-05-03
- PetaPixel, app 1.69 movement templates, 2024-08-15
- insta360.pl, Edit 360 without the stress, 2026-05-01
- Panoee, Insta360 software guide, 2026-06-02
- KrASIA, X6 launch, 2026-08-14
- MountMedia, 12 best creative X5 shots, 2026-03-28: https://www.youtube.com/watch?v=DZcy1So1Et4
- Insta360 Tutorials ft. Best360, 10 creative shots, 2025-05-22: https://www.youtube.com/watch?v=mYMILGQoyfc
- Gimbal Guru, "10 sensational tricks" (uploaded 2024-01-10, X3 content) and "21 creative tricks" (uploaded 2021-01-10, X2 content)
- Insta360 shorts: Dolly zoom 2025-08-31; Spin transition 2025-12-01; Best360 barrel roll 2025-11-25
- pk360.de, .insprj format, 2022-04-03: https://insta.pk360.de/studio202x_insprj/
- GitHub: insta360py, Insv-Marker-Extractor, insvtools, InstaTrailer.jl, insta360-cli-utils, Insta360-INSV-Pro-Converter, Insta360Convert-GUI, Desktop-MediaSDK-Cpp, reframe360XL, SpaceTimeLab/360_object_tracking, awesome-360-vision
- Medium, Poor man's intelligent reframing, 2024-01-06
- GoPro ReFrame for DaVinci Resolve, beta 2025-09
