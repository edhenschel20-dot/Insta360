# X5 Settings Presets — What to Dial In Before You Press Record

Author: photography-expert agent. Date of research: 2026-09-26 (checked against
current Insta360 docs, YouTube creators, and r/Insta360 as of this date — the
app and firmware change often, especially PureVideo/AdaptiveTone, ND filter
support, and resolution options, so re-verify menu names if this doc is more
than a few months old).

This doc is the "what buttons to press" companion to
[`shot-recipes.md`](./shot-recipes.md), which covers *how to hold and move the
camera* for a fast edit. Read that one for mounting, height, and framing. This
one is purely: mode, resolution/fps, exposure, colour, and accessories, for
each kind of shoot.

**Every preset is tagged:**
- **CONSENSUS** — several independent sources (Insta360's own docs plus 2+
  creators/reviewers) agree.
- **SINGLE-SOURCE TIP** — only one source said this; useful but unverified
  elsewhere, treat as "try it and see."
- **MY RECOMMENDATION** — my synthesis where sources conflict or say "use
  Auto," aimed at Ed's actual situation (hobbyist, phone-edited, not chasing
  a specific cinematic look).

---

## Quick reference (glance at this on your phone before you shoot)

| Scenario | Mode / Res-FPS | EV | ISO (auto cap / manual) | White balance | Colour | Tag |
|---|---|---|---|---|---|---|
| Diving (dive case) | Video, **Dive Case Mode ON**, 5.7K30 | Auto, +0.3–0.7 if murky | Auto ≤1600 / manual 400–800 | Manual 5500–6500K or Auto + AquaVision later | Standard | CONSENSUS |
| Snorkelling / surface water | Video, 5.7K30 (dive case usually not needed) | Auto | Auto ≤1600 | Auto + AquaVision later | Standard | CONSENSUS |
| Night / low light (general) | **PureVideo**, 5.7K30 or 4K30 | **−0.3 to −0.7** | Auto ≤1600 / manual 400–800 (tripod) | 3200–4500K manual or Auto | Standard | CONSENSUS core, EV = MY REC (explained below) |
| Night timelapse / stars | Timelapse or Interval, manual exposure | 0 (manual exposure instead) | 800–1600 manual | Auto or 4000K | Standard/Flat | SINGLE-SOURCE |
| City nights with lights | **PureVideo**, 5.7K30 | **−0.7** | Auto ≤1600 / manual 400–800 | 3200–3500K manual | Standard | MY RECOMMENDATION (builds on night consensus) |
| Snow / bright sun | Video (not PureVideo), 5.7K60 or 8K30 + **ND filter** | −0.3 to −1.0 | Auto (low) | Auto or 5500–6000K | Standard/Vivid | CONSENSUS |
| Sunset / golden hour | Video, 5.7K60 or 8K30, **Active HDR ON** | −0.7 to −1.3 for silhouette | Auto | Auto or warm manual | Standard | CONSENSUS |
| Motorsport (helmet POV) | **Single-Lens Mode**, up to 4K60 | Auto | Auto | Auto | Standard | CONSENSUS |
| Mountain biking (360) | Video, 5.7K30 or 4K60 | Auto | Auto | Auto | Standard | CONSENSUS |
| Driving (car mount) | Video, 5.7K30 (PureVideo at dusk/night) | Auto | Auto | Auto | Standard | CONSENSUS |
| Walking vlog | Video, 5.7K30 (or InstaFrame) | Auto | Auto | Auto | Standard/Vivid | CONSENSUS (see shot-recipes #1) |
| Indoor events/parties | PureVideo or Video, 5.7K30–60 | Auto or −0.3 | Auto ≤1600 / manual 400–800 (tripod) | 3000–4000K manual or Auto | Standard | CONSENSUS |
| Photos — social/quick | Photo, PureShot, HDR **off**, 72MP, 3s timer | Auto | Auto | Auto | Standard/Vivid | CONSENSUS |
| Photos — virtual tour/quality | Photo, PureShot + **HDR on** + RAW backup, 72MP, tripod | Auto | Auto/low | Auto | Standard | CONSENSUS |
| Timelapse (static) | Timelapse/Interval, manual shutter for effect | 0 | Manual, low | Auto | Standard/Flat | SINGLE-SOURCE |
| TimeShift (moving hyperlapse) | TimeShift, speed Auto or up to 60x | Auto | Auto | Auto | Standard | CONSENSUS |
| Bullet time | **Bullet Time mode**, 5.7K120 (or 4K120) | Auto (Balanced Exposure if chest mount) | Auto | Auto | Standard | CONSENSUS |
| Slow motion | Video, 4K100/120 or 2.7K120 (single-lens for max fps) | Auto | Auto, faster shutter if manual | Auto | Standard | CONSENSUS |

---

## Why these settings — plain language

A few concepts come up in almost every preset below. Understanding them once
means you don't need to memorise 15 separate rulebooks.

- **Exposure compensation (EV)** is a "make it brighter/darker than what the
  camera thinks is correct" dial, usually from about −5 to +5 (or −3.9 to
  +3.9 in HDR). The X5's auto exposure tends to protect shadows, which can
  blow out bright highlights — streetlights, signage, snow, a bright sky. A
  small negative EV (−0.3 to −0.7) tells the camera "assume the scene is
  slightly brighter than you think," which pulls highlights back from being
  pure white blobs, at the cost of slightly darker shadows. Shadows are much
  easier to brighten back up in editing than blown highlights are to recover,
  so "protect the highlights, fix shadows later" is the general rule any time
  you have small bright things against a dark background (city lights,
  candles, snow glare, a sunset sky).
- **ISO and shutter** control brightness the "old" way: ISO amplifies the
  sensor's signal (higher = brighter but grainier/noisier), shutter speed
  controls how long light hits the sensor (slower = brighter but more motion
  blur). In Auto mode the X5 picks both for you; capping Auto ISO (e.g. at
  1600) is a way to tell the camera "don't get grainy chasing brightness,"
  useful at night. Manual ISO/shutter matters mainly for two situations:
  deliberately slow shutter for star trails/light trails (need manual), or
  deliberately fast shutter to freeze motion in bright fast action
  (motorsport). For everything else, Auto is genuinely fine on the X5 — this
  is one of the strongest points of agreement across sources.
- **PureVideo** isn't just "night mode" in the marketing sense — it's a
  different processing pipeline (three onboard AI processors analysing each
  frame) that does noise reduction and exposure optimisation specifically for
  dark scenes, at the cost of losing some manual controls (no manual shutter
  in PureVideo, narrower resolution/fps choices, and mixed reports on whether
  8K is supported — see the night preset below). Use it whenever the scene is
  dim: it isn't just cleaning up noise afterwards, it changes how the shot is
  captured.
- **Colour profile** (Standard / Vivid / Flat / I-Log) decides how much
  "grading room" you keep versus how ready-to-post the file is out of camera.
  Standard is the safe default — realistic saturation, still gradeable.
  Vivid punches up saturation/contrast in-camera, good if you're posting
  straight off the phone with no edit. Flat/I-Log capture more shadow and
  highlight detail but look grey and lifeless until graded — only worth it
  if you actually plan to colour-grade in Studio; otherwise it's wasted
  effort for a phone-edit workflow like Ed's. Given the project's phone-first
  editing goal, **Standard is the right default for nearly everything below**
  unless a preset says otherwise.
- **Sharpness**: leave it at **Medium**. High sharpness on the X5 tends to
  add a grainy/noisy look to fine detail rather than genuinely sharpening the
  image — this is a specific, repeated warning across sources, not personal
  taste.
- **White balance**: Auto is accurate "the vast majority of the time" per
  multiple sources, and is the right default for anything mixed or moving
  (walking, driving, events). Manual white balance is worth setting only when
  the light is a single, known, unchanging colour cast you want to correct
  deliberately — underwater blue, warm indoor bulbs, or orange sodium
  streetlights — and even then, mainly because it saves you a colour-grading
  step later.
- **The dive case's effect on stitching and FOV**: water bends (refracts)
  light differently than air, and it does so differently again at the join
  between the case and the water right where the X5's two lenses need to
  agree with each other to hide the seam. Off dry land, the stitching
  algorithm's "hide the seam in the least-detailed part of the overlap"
  trick gets confused by that extra refraction, which shows up as a visible
  stitch line or soft/warped patch in the water at the sides of the camera.
  **Dive Case Mode** is Insta360's fix: switching it on (or letting the X5
  auto-detect the Dive Case Pro) tells the stitching algorithm to expect and
  correct for underwater refraction. On FOV specifically: the X5 doesn't let
  you adjust field of view at all in full 360 mode, case or no case — that's
  fixed and framing happens in editing — but the *practical* usable FOV
  underwater is smaller, because the refraction distortion the case is
  correcting for is worst right at the stitch line (the sides), so keep
  subjects more toward the front/back of each lens and less toward the
  edges when diving, more so than you would on land.

---

## 1. Diving (with the Invisible Dive Case)

- **Mode:** Video, with **Dive Case Mode switched on** (the X5 can also
  auto-detect the Dive Case Pro and switch itself). CONSENSUS.
- **Resolution/fps:** 5.7K30 for most diving (motion of fish/divers,
  reasonable file size); 8K24 only for slow, deliberate reef/wreck shots
  where you want maximum stitch-back detail. MY RECOMMENDATION, built from
  general X5 guidance since no source gives a diving-specific resolution
  rule.
- **Exposure compensation:** Auto is fine in clear water; nudge +0.3 to +0.7
  in murky/green water where the camera under-reads brightness. SINGLE-SOURCE
  reasoning (general "protect from the camera guessing wrong" logic, not a
  diving-specific citation).
- **ISO/shutter:** Auto, capped ISO 1600 if you have manual access — water
  attenuates light fast with depth, so don't fight it by forcing a low ISO
  and getting motion blur instead.
- **Colour profile:** Standard. Don't bother with Flat/Log for a phone edit
  workflow — colour correction underwater is a separate step regardless (see
  white balance/AquaVision below), and Log adds nothing there.
- **Sharpness:** Medium (same reasoning as everywhere else).
- **White balance:** Two workable approaches — (a) manual, 5500–6500K
  depending on how much ambient light/depth, which is the "get it righter
  in-camera" route, or (b) leave Auto and rely on **AquaVision 2.0** in the
  Insta360 app/Studio, which auto-detects underwater footage and removes the
  blue/green cast in one tap. For a hobbyist doing quick phone edits,
  AquaVision-in-post is the lower-effort, more consistent choice.
  CONSENSUS on AquaVision existing and working; the manual-WB range is
  SINGLE-SOURCE.
- **Stabilisation:** FlowState stays on; it's doing less work underwater
  since you're not walking, but currents/fin kicks still benefit from it.
- **Accessories:** Invisible Dive Case Pro (rated to 60 m / 197 ft — well
  beyond recreational dive limits and well beyond the X5's native 15 m/49 ft
  IP68 rating without it). A dive tray/tripod handle helps keep the camera
  steady and away from your own bubbles.
- **Common mistakes:** Forgetting to turn on Dive Case Mode (visible seam
  artefacts in the water); standing/swimming between the lenses right at
  the stitch line, which is exactly where underwater distortion is worst;
  skipping AquaVision and posting straight footage with a heavy blue cast.
- **Sources:** [Insta360 X5 Invisible Dive Case Pro](https://store.insta360.com/product/x5-invisible-dive-case-pro), [X5 Invisible Dive Case Tutorial](https://www.insta360.com/support/supportdetail/video/eAgOCDoXbX), [Insta360 X5 Review: Diving up to 60m](https://www.scubaportal.it/en/insta360-x5-subacquea-recensione-60m/), [X5 FOV Settings](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-parameters/fov), [X5 Stitching guide](https://onlinemanual.insta360.com/x5/en-us/camera/basicuse/stitching).

## 2. Snorkelling / surface water (no dive case)

- **Mode:** Video, no case needed for casual snorkelling — the X5's native
  IP68 rating is **15 m (49 ft)**, comfortably past typical snorkelling
  depths. (Note: some older write-ups, including this project's own
  shot-recipes.md, cite 10 m — that was the X4's rating; the X5 improved
  this to 15 m, confirmed across several current sources. Worth a quick
  double-check in the current X5 manual before relying on it near that
  limit.)
- **Resolution/fps:** 5.7K30 — plenty of detail, and one creator's advice
  applies directly here: "snorkelling alone is more than enough to get good
  footage... just swim with it, dunk it under, spin it around."
- **Exposure compensation:** Auto.
- **ISO/shutter:** Auto.
- **Colour profile:** Standard, correct blue cast with AquaVision afterwards
  (same as diving above).
- **Sharpness:** Medium.
- **White balance:** Auto; AquaVision 2.0 in-app/Studio afterwards.
- **Stabilisation:** FlowState on.
- **Accessories:** None required; a short stick or wrist strap is enough at
  the surface. Save the dive case for depths near/beyond 15 m or if you want
  the guaranteed-clean stitching the case's mode provides.
- **Common mistakes:** Over-thinking framing at the surface — this is the
  one water scenario where "just let it run" genuinely works, per the source
  below; don't waste effort trying to aim the camera at fish.
- **Sources:** [The 2026 Guide to Underwater Photography](https://www.insta360.com/blog/tips/underwater-photography.html), [Why the X5 Is the Best Underwater 360 Camera Right Now](https://www.threesixtycameras.com/360-cameras/why-the-insta360-x5-is-the-best-underwater-360-camera-right-now/), [X5 Waterproofing tutorial](https://onlinemanual.insta360.com/x5/en-us/camera/maintenance/waterproof).

## 3. Night / low light (general — this is where "−0.7 EV, PureVideo, 4K 30fps" lives)

**Verifying what Ed heard:** all three pieces check out, separately, though
no single source states them together as one exact combo:
- **PureVideo** is real and is the right mode choice for low light —
  CONSENSUS across Insta360's own docs and every low-light-focused
  review/guide found.
- **4K 30fps is a genuine PureVideo option** (PureVideo offers 4K
  3840×2160 @30/25/24fps, alongside 5.7K and reportedly 8K at the same frame
  rates — sources partially disagree on whether 8K is available in
  PureVideo at all, so don't assume it is; 4K or 5.7K at 30fps is the safe
  choice). CONSENSUS on 4K30 existing as an option.
- **−0.7 EV** is not stated as a night-specific number by Insta360, but it
  matches the general "protect highlights in high-contrast scenes" guidance
  found across sources (−0.3 for general shooting, −0.7 for high-contrast
  scenes with bright elements against dark surroundings) — which describes
  night shots almost exactly: streetlights, shop signs, headlights, or the
  moon are small bright points against large dark areas, precisely the
  "blown highlight" risk that negative EV protects against. **This is why
  it works, in plain terms: at night, Auto exposure sees mostly darkness and
  tries to brighten the whole frame, which turns every light source into a
  featureless white blob; −0.3 to −0.7 EV tells it to expose for those
  bright points instead, keeping detail in the lights while PureVideo's AI
  noise reduction does the heavy lifting on keeping the dark areas usable
  rather than just black.**
- **Verdict: MY RECOMMENDATION** — treat "PureVideo, 4K or 5.7K 30fps,
  −0.3 to −0.7 EV" as a solid combination Ed can use with confidence; it's
  built from consensus pieces even though no single source states the exact
  trio.
- **ISO/shutter:** Auto capped around ISO 1600 is the repeated number; if
  shooting manual on a tripod, ISO 400–800 keeps noise low since shutter can
  go slower without a handheld shake problem.
- **Colour profile:** Standard — PureVideo's own processing is already doing
  a lot of work; don't stack Log on top for a phone edit.
- **Sharpness:** Medium (high sharpness is worse than usual at night, since
  it also sharpens noise).
- **White balance:** Manual 3200–4500K for warm/mixed artificial light is a
  repeated recommendation, or Auto if the scene is genuinely mixed/moving.
- **Stabilisation:** On, and consider a tripod/mini-tripod or planted stick
  for anything static — slower effective shutter at night means handheld
  shake matters more than usual, and FlowState fixes wobble, not blur from
  camera movement during a long exposure.
- **Accessories:** Mini tripod or a wall/ledge to rest the stick on for
  anything longer than a casual handheld clip.
- **Common mistakes:** Leaving EV at 0 and getting blown-out light sources;
  shooting 8K in low light (more noise, and PureVideo support for it is
  inconsistent across sources — stick to 4K/5.7K); aggressively lifting
  shadows in editing instead of nudging exposure down and letting shadows be
  dark on purpose.
- **Sources:** [X5 PureVideo tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-mode/purevideo), [Best settings for low light with the X5](https://droneandcam.com/en/post/best-settings-for-shooting-in-low-light-with-the-insta360-x5/), [Insta360 X5 Low Light Performance Tested](https://rundreamachieve.com/insta360-x5-low-light-performance/), [Insta360 Low Light Video: Best Settings & Tips](https://www.threesixtycameras.com/360-cameras/insta360-low-light-video-best-settings-shooting-tips/), [Beginner's Guide to Night Time Photography & Video](https://www.insta360.com/blog/tips/night-time-photograph-guide.html), [Best Settings for X5: Sports, Travel, Night & Indoor](https://mirame360.com/blog/en/best-settings-for-insta360-x5-sports-travel-night-indoor-get-the-most-out-of-your-360-camera).

## 4. Night timelapse / star shots

- **Mode:** Timelapse (in-camera, moving/car-friendly) for star trails as
  streaks over a longer session, or **Photo mode's Interval/long exposure**
  for single dramatic star-field frames — one source specifically prefers
  the Interval function over the dedicated Starlapse mode "for potentially
  better results." SINGLE-SOURCE TIP, but plausible: manual control over
  interval length usually beats an automatic preset for tricky dark-sky
  exposure.
- **Resolution/fps:** Whatever the mode defaults to; this is shutter/ISO
  territory, not a resolution decision.
- **Exposure compensation:** Not applicable — you're setting exposure
  manually (see below), so EV compensation on top of manual settings doesn't
  apply the same way.
- **ISO/shutter:** This is the one scenario on the X5 where you go fully
  manual. Timelapse mode allows shutter as slow as **1 second**; Photo mode
  allows shutter down to a genuinely long **2 minutes**, which is what you'd
  use for star streak/light trail single frames. For ISO, one creator
  reported using **ISO 1250** on a dark night for a starlapse; general
  guidance is to keep ISO as low as the shutter speed allows to minimise
  noise, so somewhere in the 800–1600 range is a reasonable starting point
  to test and adjust from. SINGLE-SOURCE TIP for the specific ISO number;
  CONSENSUS on "go manual, keep ISO low, use the longest workable shutter."
- **Colour profile:** Standard or Flat — Flat is one of the few places in
  this whole doc where it's arguably worth it, since a static, single,
  deliberately-composed astro shot is exactly the kind of thing worth a
  proper grade. Still optional for a phone edit.
- **Sharpness:** Medium.
- **White balance:** Auto is unreliable for night sky (can shift between
  frames of a timelapse); manual, fixed around 4000K, avoids flicker/colour
  drift across a sequence.
- **Stabilisation:** Camera must be completely static — a tripod, not a
  handheld stick, is mandatory for anything using multi-second shutter
  speeds.
- **Accessories:** A real tripod (not just the selfie stick planted on the
  ground) — any wobble during a 1s–2min exposure ruins the frame. Consider a
  power bank; long timelapses drain the battery.
- **Common mistakes:** Trying this handheld (guaranteed blur at these
  shutter speeds); letting white balance stay on Auto across a multi-hour
  timelapse and getting colour flicker between frames; starting the
  dedicated Starlapse mode with zero test shots first — one source
  documented exactly this ("Starlapse: First Attempt, Default Settings, Zero
  Preparation") as a cautionary example.
- **Sources:** [Insta360 X5 Starlapse: First Attempt, Default Settings, Zero Preparation](https://danielhedrick.com/2026/06/10/insta360-x5-starlapse/), [How to Do a Timelapse Video](https://www.insta360.com/blog/tips-how-to-make-a-timelapse-video.html), [Master Your Insta360 X5 Full Guide (Patreon)](https://www.patreon.com/posts/master-your-x5-138205994).

## 5. City nights with lights (signage, traffic, streetlights)

- **Mode:** PureVideo. CONSENSUS.
- **Resolution/fps:** 5.7K30 — this is the specific case where the general
  night-preset resolution advice (section 3) applies most directly, since
  city scenes are usually static enough that 30fps is plenty and PureVideo's
  fps ceiling isn't a limitation.
- **Exposure compensation:** **−0.7 EV** — this is the strongest, most
  literal match to what Ed heard, because city lights are the textbook
  "small bright thing against large dark area" case described in section 3's
  explainer. MY RECOMMENDATION, built on the general night consensus.
- **ISO/shutter:** Auto capped ~1600, or manual 400–800 if you can plant the
  camera (a lamppost base, a railing, a tripod).
- **Colour profile:** Standard.
- **Sharpness:** Medium.
- **White balance:** **3200–3500K manual** is the specific, repeated
  recommendation for white/sodium city lights — it "cools" the image
  slightly for a more natural, less orange-blown-out look, and some
  creators push it further toward teal/blue in grading for contrast against
  warm streetlamps. CONSENSUS on the 3200–3500K starting point.
- **Stabilisation:** On; a planted stick beats handheld here for the same
  slow-shutter-at-night reasons as section 3.
- **Accessories:** Mini tripod useful for held shots at intersections/plazas
  where you want to stand still for a beat.
- **Common mistakes:** Shooting handheld while walking at full night
  exposure (motion blur stacks with high ISO grain); ignoring EV and
  turning every shopfront sign into a white smear.
- **Sources:** same as section 3, particularly [Insta360 Low Light Video: Best Settings & Tips](https://www.threesixtycameras.com/360-cameras/insta360-low-light-video-best-settings-shooting-tips/) and [Best settings for low light with the X5](https://droneandcam.com/en/post/best-settings-for-shooting-in-low-light-with-the-insta360-x5/).

## 6. Snow / bright sun

- **Mode:** Standard Video (not PureVideo — that's for the opposite
  lighting problem).
- **Resolution/fps:** 5.7K60 for movement (skiing, sledding), 8K30 for
  static/scenic snow shots.
- **Exposure compensation:** −0.3 to −1.0 — snow reflects a lot of light and
  reads as "very bright" to the meter, which can cause the camera to
  under-expose everything *else* trying to compensate, or blow the snow
  itself to featureless white; a negative EV nudge protects snow texture and
  highlight detail. MY RECOMMENDATION extending the general highlight-
  protection principle to this specific case (no source gave a snow-specific
  EV number).
- **ISO/shutter:** Auto is fine; there's plenty of light. If you have an ND
  filter on (see accessories) you may need a touch more, since the filter is
  cutting light on purpose.
- **Colour profile:** Standard, or Vivid if posting straight off the phone —
  snow scenes often look flat/grey in Standard without a grading pass.
- **Sharpness:** Medium.
- **White balance:** Auto usually handles snow's blue-ish cast correctly;
  manual 5500–6000K if you find it running too cool.
- **AdaptiveTone:** if your firmware has it (added via a 2025/2026 update),
  turn it on for 8K30/5.7K30 video and PureVideo — it independently balances
  exposure between the two lenses, which specifically helps the "one side of
  the sphere is blinding snow glare, the other is in shadow" problem winter
  scenes create. CONSENSUS this feature exists and targets exactly this
  scenario; SINGLE-SOURCE on how well it performs in practice.
- **Stabilisation:** FlowState on as usual.
- **Accessories:** **ND filter** — this is the standout, repeated
  recommendation for snow/bright sun specifically. ND16 (4 stops) for
  general bright/cloudy brightness, ND32 (5 stops) for direct midday sun,
  ND64/ND128 (6+ stops) for extreme glare off snow. An ND filter both
  prevents overexposure and lets you use a slower shutter for natural motion
  blur instead of the harsh, stuttery look a very fast shutter gives in
  bright light.
- **Common mistakes:** Shooting bright snow with no ND filter and a fast
  auto shutter, producing a "strobe-y," overly sharp motion look; forgetting
  the stick's shadow can fall right across the stitch line in low winter
  sun (see shot-recipes.md's camera-height notes).
- **Sources:** [X5 ND Filters tutorial](https://onlinemanual.insta360.com/x5/en-us/operating-tutorials/accessories/nd-filters), [What Is an ND Filter?](https://www.insta360.com/blog/tips/nd-filters-guide-for-cameras.html), [X5 AdaptiveTone tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-function/tone-enhancement), [Insta360's 2025 Winter Update](https://www.insta360.com/blog/news/insta360-2025-winter-update.html).

## 7. Sunset / golden hour

- **Mode:** Standard Video, **Active HDR on**. CONSENSUS that Active HDR is
  specifically for bright, high-contrast light — sunset is one of the
  situations it's built for, unlike flat/overcast light where it can make
  things worse.
- **Resolution/fps:** 5.7K60 for a good balance of dynamic range and motion,
  or 8K30 for a static "watch the sky change" shot. Active HDR is supported
  at 5.7K60 specifically per one source, so that's the safer combo if you
  want both.
- **Exposure compensation:** For a classic silhouette shot (subject as a
  dark shape against a bright sky), expose for the sky: **−0.7 to −1.3 EV**
  deliberately darkens the foreground/subject into silhouette rather than
  fighting to keep them lit — this is a well-established stills technique
  restated for video here. CONSENSUS on the silhouette technique itself;
  MY RECOMMENDATION on the specific EV range to achieve it on the X5.
- **ISO/shutter:** Auto.
- **Colour profile:** Standard — the sky's colour is doing the work, no need
  for Vivid to oversaturate it further (it can look artificial), and no need
  for Flat since you're not doing a heavy grade.
  **After sunset**, switch straight to **PureVideo** — one source frames
  PureVideo explicitly as "the mode of choice for shooting after sunset,"
  i.e. treat this as a two-phase shoot (HDR sunset, then PureVideo dusk/
  night) rather than one continuous setting.
- **Sharpness:** Medium.
- **White balance:** Auto handles the warm tones well; manual only if you
  want to push warmer than Auto gives you.
- **Stabilisation:** On.
- **Accessories:** None required; an 11K Timelapse is worth doing as a
  *separate* clip alongside handheld shots if you want the "watch the whole
  sky change" effect (see section 13 for timelapse settings).
- **Common mistakes:** Leaving Active HDR on into full darkness (it's
  fighting the wrong problem by then — switch to PureVideo); trying to keep
  a foreground subject fully lit against a bright sky instead of embracing
  the silhouette.
- **Sources:** [Insta360 X5, full review: sees at night](https://www.maisondudrone.com/en/insta360-x5-full-review-the-360-that-sees-at-night/), [Golden Hour Photography](https://www.insta360.com/blog/tips/golden-hour-photography.html), [Best Settings for X5: Sports, Travel, Night & Indoor](https://mirame360.com/blog/en/best-settings-for-insta360-x5-sports-travel-night-indoor-get-the-most-out-of-your-360-camera).

## 8. Motorsport / biking (fast motion)

Two different cases here — treat them differently (see shot-recipes.md
recipes #4 and #5 for the shooting-technique side of both):

**Motorsport / motorcycle / go-kart (helmet POV):**
- **Mode:** **Single-Lens Mode**, up to 4K60 — one lens only, already-flat
  POV footage. CONSENSUS this is the right call for speed: no stitch line to
  worry about, no reframing needed, and it avoids the "other lens just
  shows your own helmet/bike" problem full 360 has at speed.
- **Exposure/ISO:** Auto — at speed you want the camera reacting to light
  changes (tunnels, shadows) faster than you can adjust manually.
- **Shutter:** Faster shutter = sharper individual frames but a more
  "strobe-y" look; slower = smoother motion but more blur on fast-passing
  detail. General rule from sources: bias shutter faster for clarity in
  bright daylight motorsport, and accept the camera going slower
  automatically in lower light (with the trade-off of more motion blur) —
  this is Auto's job unless you specifically want to force a fast shutter
  for freeze-frame clarity.
- **Colour/sharpness/WB:** Standard, Medium, Auto — no reason to deviate.
- **Accessories:** Helmet or chest mount.
- **Common mistakes:** Using full 360 mode by default "just in case" — it
  adds reframing work for zero benefit unless you specifically want a
  look-back-at-the-bike shot.

**Mountain biking / trail riding (full 360):**
- **Mode:** Video, full 360.
- **Resolution/fps:** 5.7K30 for normal riding, or 4K60 if you want the
  option of slow-mo on jumps. Max/Action wide FOV setting if available.
- **Exposure/ISO:** Auto, Active HDR on for high-contrast trail light
  (dappled shade under trees is a classic HDR case).
- **Colour/sharpness/WB:** Standard, Medium, Auto.
- **Stabilisation:** FlowState + Horizon Lock — Horizon Lock matters more
  here than on a motorcycle because a chest-mounted camera tips with your
  body lean through corners.
- **Accessories:** Chest mount preferred over helmet for a steadier horizon.
- **Sources:** [X5 Shooting Modes: Full Breakdown](https://www.benclaremont.com/blog/insta360-x5-all-17-shooting-modes-full-breakdown), [Master Your Insta360 X5 Full Guide (Patreon)](https://www.patreon.com/posts/master-your-x5-138205994), [Insta360 X5 review — Singletracks](https://www.singletracks.com/mtb-gear/insta360-x5-action-camera-review/), [Best Settings for X5: Sports, Travel, Night & Indoor](https://mirame360.com/blog/en/best-settings-for-insta360-x5-sports-travel-night-indoor-get-the-most-out-of-your-360-camera), [MotoVlog Setup Guide](https://www.youtube.com/watch?v=yOLwEI4DDdA).

## 9. Driving (car mount)

- **Mode:** Standard Video, or the X5's **Road Mode** (a dedicated dashcam-
  style mode that also auto-manages storage and blurs plates for privacy).
  PureVideo for dusk/night driving.
- **Resolution/fps:** 5.7K30 — better low-light/dynamic range for glare and
  tunnel transitions than 8K, matching this project's existing driving
  recipe in shot-recipes.md. 8K is an option if you specifically want
  license-plate-level detail and are driving in good light.
- **Exposure compensation:** Auto — a car interior/exterior mixes bright
  windscreen glare and dark cabin shadow constantly; let the camera react.
- **ISO/shutter:** Auto.
- **Colour profile:** Standard.
- **Sharpness:** Medium.
- **White balance:** Auto (mixed daylight/tunnel lighting changes too fast
  for a fixed manual value to stay right).
- **Stabilisation:** FlowState on — it's doing real work here smoothing
  road vibration.
- **Accessories:** Suction/dash mount on the windscreen or dash, lens axis
  along the direction of travel (one lens forward through the glass, one
  back into the cabin) — matches shot-recipes.md's existing driving recipe.
- **Common mistakes:** Shooting 8K by default for long drives and filling
  the card fast for no real benefit; forgetting PureVideo exists for night
  driving and getting noisy, smeary footage on the motorway after dark.
- **Sources:** [Reimagining the Best Dash Camera for Your Car](https://www.insta360.com/blog/tips/best-dash-camera-for-cars.html), [How To Install and Shoot With Insta360 Car Mounts](https://www.insta360.com/blog/tips/install-shoot-with-insta360-car-mount.html), [I swapped my dash cam for the X5 — TechRadar](https://www.techradar.com/vehicle-tech/dash-cams/i-swapped-my-dash-cam-for-the-insta360-x5-for-a-month-heres-how-the-360-camera-compared).

## 10. Walking vlog (you're the subject)

Covered in shooting-technique detail in shot-recipes.md's recipe #1 (stick
height, arm position, facing one lens). Settings side:

- **Mode:** Video (5.7K30/5.7K+), or **InstaFrame** if you want a
  ready-to-post flat file with zero reframe step.
- **Resolution/fps:** 5.7K30; HDR on if backlit.
- **Exposure/ISO/WB:** Auto across the board — you're moving through mixed
  light constantly.
- **Colour profile:** Standard if you'll grade or trim in the app; Vivid if
  posting straight off the phone.
- **Sharpness:** Medium.
- **Stabilisation:** Quick FlowState on; pair with Horizon Lock so the world
  stays level even if the stick tilts as you walk.
- **Accessories:** Invisible selfie stick.
- **Common mistakes:** See shot-recipes.md section 3 — standing between the
  lenses, swinging the stick around mid-shot.
- **Sources:** [Invisible Selfie Stick, How to Use](https://www.insta360.com/blog/tips/invisible-selfie-stick-how-to-use.html), and this project's own [shot-recipes.md](./shot-recipes.md).

## 11. Indoor events / parties

- **Mode:** PureVideo for dim rooms/evening light, standard Video for
  well-lit indoor spaces (daytime, bright venue lighting). CONSENSUS.
- **Resolution/fps:** 5.7K30–60.
- **Exposure compensation:** Auto normally; −0.3 if the room has bright
  point sources (candles, fairy lights, a spotlit cake) you want to protect.
- **ISO/shutter:** Manual ISO 400–800 if the camera is on a tripod/table
  (see recipe #7/#14 in shot-recipes.md); Auto capped ~1600 if handheld.
- **Colour profile:** Standard.
- **Sharpness:** Medium.
- **White balance:** Manual ~3000–4000K for warm indoor bulbs (candlelight,
  tungsten), or Auto if the room has mixed daylight and artificial light.
  CONSENSUS on the 3000–4000K range for warm bulbs specifically.
- **Stabilisation:** On; but per shot-recipes.md, static-on-a-table beats
  handheld for this scenario anyway, which also removes handheld shake as
  an issue entirely.
- **Accessories:** Mini tripod or the stick's own base, planted on a table
  or shelf — this project's existing recipe #7 already covers why static
  beats moving for events (Deep Track handles "subjects moving through a
  static frame" well).
- **Common mistakes:** Handholding through a whole party (tiring and adds
  shake on top of already-dim light); leaving white balance on Auto under
  warm bulb light and getting an orange cast Auto doesn't fully correct.
- **Sources:** [Best Settings for X5: Sports, Travel, Night & Indoor](https://mirame360.com/blog/en/best-settings-for-insta360-x5-sports-travel-night-indoor-get-the-most-out-of-your-360-camera), [Best settings for low light with the X5](https://droneandcam.com/en/post/best-settings-for-shooting-in-low-light-with-the-insta360-x5/), this project's [shot-recipes.md](./shot-recipes.md) recipe #7.

## 12. Photos (360 stills, HDR, PureShot)

- **Mode:** **PureShot** is now the default/standard photo processing on the
  X5 (a chipset-level pipeline doing dynamic range boost, noise reduction,
  and sharpening at capture time) — you're generally shooting *with*
  PureShot rather than choosing whether to enable it. CONSENSUS.
- **Two clear use cases, per multiple aligned sources:**
  - **Casual / social media:** HDR **off**, PureShot on, 72MP, 3-second
    timer (avoids camera-shake blur from your finger on the shutter).
  - **Virtual tour / max quality (static tripod shots):** HDR **on**
    (blends 3 exposures) + PureShot + shoot **RAW as a backup** file
    alongside the processed JPEG, still 72MP.
- **Resolution:** 72MP is the repeated "always use this" recommendation
  across sources for photo mode.
- **Exposure compensation:** Auto normally; nudge negative for bright/high-
  contrast static scenes (same highlight-protection logic as video).
- **Colour profile:** Standard.
- **Sharpness:** PureShot already sharpens at capture; don't stack extra
  manual sharpness on top.
- **White balance:** Auto, unless shooting underwater/warm indoor (see
  those sections).
- **Stabilisation:** N/A for stills, but a tripod matters more for HDR
  photos specifically — a 3-exposure blend needs the camera to stay
  perfectly still between the three shots or you get ghosting.
- **Accessories:** Mini tripod for the HDR/virtual-tour case; timer or
  remote trigger to avoid shake.
- **Common mistakes:** Using HDR handheld (ghosting/blur from the 3-shot
  blend); shooting RAW for casual social shots and creating unnecessary
  editing work for files that were never going to be graded.
- **Sources:** [Your Ultimate Guide to X5: Tips, Tricks & Best Settings](https://www.insta360.com/blog/insta360-x5-tips-shooting-best-settings-guide.html), [X5 PureShot tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-parameters/pureshot), [The Best X5 Photo Modes for Virtual Tours](https://www.benclaremont.com/blog/the-best-insta360-x5-photo-modes-for-virtual-tours), [Real Estate Photographer's Take on X5 Stills](https://gothru.co/blog/hands-on-with-the-insta360-x5-a-real-estate-photographers-take-on-still-image-quality-and-workflow/).

## 13. Timelapse / TimeShift (know which mode you actually want)

These are two different tools for two different situations:

**TimeShift** — for when *you're moving* (walking, driving, on a chairlift)
and want a sped-up "flying through the scene" hyperlapse:
- **Mode:** TimeShift.
- **Speed:** Auto lets the camera pick a sensible speed for the final clip
  length; manual goes up to 60x for very long stretches (motorway drives,
  long chairlifts). One editing tip found: bias toward a fast multiplier
  (e.g. 16x) at the start/end of a sequence and drop to normal or half-speed
  at key moments, with Motion Blur turned on to sell the sense of speed.
  SINGLE-SOURCE TIP for the specific multiplier/edit structure.
- **Why TimeShift over a plain sped-up video:** it renders as a flat,
  already-sped-up file *in-camera*, roughly a tenth the file size of full
  8K video, with zero reframing needed afterwards — matches this project's
  existing "shoot for a fast edit" principle from shot-recipes.md.
- **Everything else** (exposure, colour, WB): Auto/Standard, same as the
  scenario you're travelling through (see driving/hiking sections).

**Timelapse/Interval mode** — for when *the camera is static* and the scene
changes over time (day-to-night, clouds, star trails):
- **Mode:** Timelapse (video-style, continuous) or Interval (photo-style,
  fixed gaps) depending on how long the total session runs.
- **Shutter:** Manual shutter as slow as 1 second in Timelapse mode is
  usable for a deliberate motion-blur/light-trail look between frames.
- **Exposure:** Manual is worth it for anything spanning a big light change
  (sunset into night) so the exposure doesn't visibly "hunt" between frames.
- **Accessories:** Tripod is mandatory — any camera movement during a
  multi-minute-to-multi-hour static timelapse ruins it, and a power
  bank/external power for long sessions.
- **Common mistakes:** Using TimeShift for a static scene (it's built for
  movement) or Timelapse mode while moving (you'll get shaky, unusable
  results — pick based on whether *you* are moving, not the subject).
- **Sources:** [How to Do a Timelapse Video](https://www.insta360.com/blog/tips-how-to-make-a-timelapse-video.html), [How to shoot a hyperlapse with the X5](https://droneandcam.com/en/post/how-to-shoot-a-hyperlapse-with-the-insta360-x5-a-complete-guide/), [X5 Timelapse Mode tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-mode/dynamic-follow-mode), and this project's [shot-recipes.md](./shot-recipes.md) recipe #13.

## 14. Bullet time

- **Mode:** Dedicated **Bullet Time** mode.
- **Resolution/fps:** Up to **5.7K120** for the smoothest slow-motion swing
  (some sources describe the mode topping out around 4K120 — resolution/fps
  ceiling for this specific mode seems to vary by firmware version, so check
  what's on offer in-app rather than assuming). CONSENSUS this mode exists
  and is fps-heavy by design.
- **Exposure:** Auto is the default recommendation specifically because
  Bullet Time needs the two lenses to agree on exposure as you swing between
  them — inconsistent exposure between lenses shows as a colour/brightness
  jump at the stitch line mid-swing. If you're on a chest mount (one lens
  close to your body), use **Balanced Exposure** specifically — it's a named
  setting for exactly this "one lens sees something very different to the
  other" case.
- **Light:** Shoot in good light. In low light, the camera automatically
  slows shutter to keep exposure up, which introduces motion blur on a fast
  swing — this mode fundamentally wants daylight/well-lit conditions.
  CONSENSUS.
- **Colour/sharpness/WB:** Standard, Medium, Auto.
- **Movement:** Swing at roughly 1 second per 360° rotation, one lens up and
  one down, per this project's shot-recipes.md recipe #10.
- **Accessories:** Invisible selfie stick, fully extended.
- **Common mistakes:** Shooting Bullet Time indoors/dim light and getting
  motion blur; pointing a lens straight at the sun/a bright light mid-swing
  (aim to keep the camera's *side* toward bright light sources instead).
- **Sources:** [X5 Bullet Time tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-mode/bullet-time), [Unlock the Magic of Bullet Time](https://www.insta360.com/blog/tips/insta360-how-to-use-bullet-time.html), this project's [shot-recipes.md](./shot-recipes.md) recipe #10.

## 15. Slow motion

- **Mode:** Standard Video at a high frame rate, or Single-Lens Mode if you
  don't need the full sphere (recommended when chasing the highest fps, per
  shot-recipes.md's single-lens recipes).
- **Resolution/fps — know the trade-off:** the X5 tops out around
  **4K100/120fps** or **2.7K120fps** for a clean 4x slow-mo with in-camera
  stitching; **5.7K120** exists specifically for Bullet Time rather than
  general slow-mo. Higher fps forces lower resolution — that's a hardware
  reality, not a setting to fight. Pick 4K120 as the general-purpose "good
  detail and smooth slow-mo" choice; drop to 2.7K120 only if you specifically
  need more slow-down (4x+) and can accept softer detail. CONSENSUS on the
  resolution/fps trade-off existing; MY RECOMMENDATION on which to default
  to.
- **Exposure compensation:** Auto.
- **ISO/shutter:** Auto normally; if shooting manual, bias shutter faster
  than you would for normal-speed video — high fps footage played back slow
  shows motion blur much more obviously per frame, so a faster shutter at
  capture keeps individual frames crisper once slowed down.
- **Colour profile:** Standard.
- **Sharpness:** Medium.
- **White balance:** Auto.
- **Stabilisation:** On — slow-mo footage makes any shake very obvious once
  stretched out in time.
- **Accessories:** Whatever mount suits the action (chest/helmet for sports,
  same as sections 8/14).
- **Common mistakes:** Shooting slow-mo in low light (forces slower shutter
  automatically, which then shows as heavy blur once slowed down further in
  edit — this compounds badly); expecting 8K quality at 120fps, which isn't
  how the hardware works.
- **Sources:** [How to Shoot Epic Fast & Slow Motion](https://www.benclaremont.com/blog/how-to-shoot-epic-fast-slow-motion-with-your-insta360-camera), [X5 Slow Motion Mode FAQ](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-parameters/slow-motion), [Your Ultimate Guide to X5: Tips, Tricks & Best Settings](https://www.insta360.com/blog/insta360-x5-tips-shooting-best-settings-guide.html).

---

## Sources (full list)

- [X5 User Manual (PDF)](https://res.insta360.com/static/799f62228667e25424238f90e453d299/X5_UserManual_EN.pdf)
- [Insta360 X5 FAQ: Everything You Need to Know](https://www.insta360.com/blog/tips/insta360-x5-faq.html)
- [Your Ultimate Guide to Insta360 X5: Tips, Tricks & Best Settings](https://www.insta360.com/blog/insta360-x5-tips-shooting-best-settings-guide.html)
- [The Best 360 Video Settings for the Insta360 X5](https://www.benclaremont.com/blog/the-best-360-video-settings-for-the-insta360-x5)
- [Insta360 X5 Shooting Modes: Full Breakdown of All 17 Modes](https://www.benclaremont.com/blog/insta360-x5-all-17-shooting-modes-full-breakdown)
- [Best Settings for Insta360 X5: Sports, Travel, Night & Indoor](https://mirame360.com/blog/en/best-settings-for-insta360-x5-sports-travel-night-indoor-get-the-most-out-of-your-360-camera)
- [Best settings for shooting in low light with the Insta360 X5](https://droneandcam.com/en/post/best-settings-for-shooting-in-low-light-with-the-insta360-x5/)
- [Insta360 X5 Low Light Performance Tested](https://rundreamachieve.com/insta360-x5-low-light-performance/)
- [Insta360 X5 low light performance | Sub-Etha Software](https://subethasoftware.com/2025/04/27/insta360-x5-low-light-performance/)
- [Insta360 Low Light Video: Best Settings & Shooting Tips](https://www.threesixtycameras.com/360-cameras/insta360-low-light-video-best-settings-shooting-tips/)
- [Beginner's Guide to Night Time Photography & Video](https://www.insta360.com/blog/tips/night-time-photograph-guide.html)
- [Insta360 X5, full review: the 360° that sees at night!](https://www.maisondudrone.com/en/insta360-x5-full-review-the-360-that-sees-at-night/)
- [Insta360 X5 Starlapse: First Attempt, Default Settings, Zero Preparation](https://danielhedrick.com/2026/06/10/insta360-x5-starlapse/)
- [How to Do a Timelapse Video: A Comprehensive Guide](https://www.insta360.com/blog/tips-how-to-make-a-timelapse-video.html)
- [How to shoot a hyperlapse with the Insta360 X5](https://droneandcam.com/en/post/how-to-shoot-a-hyperlapse-with-the-insta360-x5-a-complete-guide/)
- [X5 Timelapse Mode tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-mode/dynamic-follow-mode)
- [X5 PureVideo tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-mode/purevideo)
- [Master Your Insta360 X5 Full Guide | Simon Horrocks (Patreon)](https://www.patreon.com/posts/master-your-x5-138205994)
- [X5 ND Filters tutorial](https://onlinemanual.insta360.com/x5/en-us/operating-tutorials/accessories/nd-filters)
- [What Is an ND Filter? When and How to Use Them](https://www.insta360.com/blog/tips/nd-filters-guide-for-cameras.html)
- [X5 AdaptiveTone tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-function/tone-enhancement)
- [Insta360's 2025 Winter Update (AdaptiveTone, ND Filters)](https://www.insta360.com/blog/news/insta360-2025-winter-update.html)
- [Insta360 X5 Summer Update](https://www.insta360.com/blog/news/insta360-x5-summer-update.html)
- [Golden Hour Photography](https://www.insta360.com/blog/tips/golden-hour-photography.html)
- [X5 Shooting Modes: Full Breakdown of All 17 Modes](https://www.benclaremont.com/blog/insta360-x5-all-17-shooting-modes-full-breakdown)
- [Insta360 X5 action camera review — Singletracks](https://www.singletracks.com/mtb-gear/insta360-x5-action-camera-review/)
- [The Ultimate Insta360 X5 Motovlogging Setup](https://www.youtube.com/watch?v=BPxF4i9YsvQ)
- [Insta360 X5 - Your Ultimate MotoVlog Setup Guide](https://www.youtube.com/watch?v=yOLwEI4DDdA)
- [Reimagining The Best Dash Camera for Your Car](https://www.insta360.com/blog/tips/best-dash-camera-for-cars.html)
- [How To Install and Shoot With Insta360 Car Mounts](https://www.insta360.com/blog/tips/install-shoot-with-insta360-car-mount.html)
- [I swapped my dash cam for the Insta360 X5 for a month — TechRadar](https://www.techradar.com/vehicle-tech/dash-cams/i-swapped-my-dash-cam-for-the-insta360-x5-for-a-month-heres-how-the-360-camera-compared)
- [How To Use the Invisible Selfie Stick](https://www.insta360.com/blog/tips/invisible-selfie-stick-how-to-use.html)
- [Your Ultimate Guide to X5: Tips, Tricks & Best Settings](https://www.insta360.com/blog/insta360-x5-tips-shooting-best-settings-guide.html)
- [X5 PureShot tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-parameters/pureshot)
- [The Best Insta360 X5 Photo Modes for Virtual Tours](https://www.benclaremont.com/blog/the-best-insta360-x5-photo-modes-for-virtual-tours)
- [Hands-On with the X5: A Real Estate Photographer's Take on Stills](https://gothru.co/blog/hands-on-with-the-insta360-x5-a-real-estate-photographers-take-on-still-image-quality-and-workflow/)
- [How to Shoot Epic Fast & Slow Motion with Your Insta360 Camera](https://www.benclaremont.com/blog/how-to-shoot-epic-fast-slow-motion-with-your-insta360-camera)
- [X5 Slow Motion Mode FAQ](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-parameters/slow-motion)
- [X5 Bullet Time tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-mode/bullet-time)
- [Unlock the Magic of Bullet Time With Insta360](https://www.insta360.com/blog/tips/insta360-how-to-use-bullet-time.html)
- [Insta360's X5 Invisible Dive Case Pro (product page)](https://store.insta360.com/product/x5-invisible-dive-case-pro)
- [X5 Invisible Dive Case Tutorial video](https://www.insta360.com/support/supportdetail/video/eAgOCDoXbX)
- [Insta360 X5 Review: Diving and 360° Shooting Up to 60 Meters](https://www.scubaportal.it/en/insta360-x5-subacquea-recensione-60m/)
- [X5 FOV Settings tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-parameters/fov)
- [X5 Stitching tutorial (avoiding issues)](https://onlinemanual.insta360.com/x5/en-us/camera/basicuse/stitching)
- [X5 Waterproofing tutorial](https://onlinemanual.insta360.com/x5/en-us/camera/maintenance/waterproof)
- [The 2026 Guide to Underwater Photography](https://www.insta360.com/blog/tips/underwater-photography.html)
- [Why the Insta360 X5 Is the Best Underwater 360 Camera Right Now](https://www.threesixtycameras.com/360-cameras/why-the-insta360-x5-is-the-best-underwater-360-camera-right-now/)
- [X5 x6 Color Modes and Filters tutorial (profile definitions)](https://onlinemanual.insta360.com/x6/en-us/operating-tutorials/capture-preview/parameters/color-mode-filter)
- This project's own [shot-recipes.md](./shot-recipes.md), for shooting technique that pairs with every preset above.
