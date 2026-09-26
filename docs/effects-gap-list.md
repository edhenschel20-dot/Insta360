# Effects gap list — what the library is still missing

Researched 2026-09-26 for the Insta360 X5 + phone app. Every YouTube ID below was verified live with the oEmbed endpoint (HTTP 200) on 2026-09-26; start times are from the video's own chapter markers (yt-dlp), so they are exact. Where a technique was demoed on a motorcycle there is an **Adapt it** line for everyday use.

**How to read the tables.** *X5?* = works on the X5 (yes / likely / unknown). *Good for* uses Ed's situations: Everyday/walking · Kids & family · Beach & water · Night · Travel & scenic · Bicycle · Car & road trip · Golf & sport · Just for fun. 💎 = uses limited generative AI allowances.

**Search caveat.** Web search quota ran out early in this session, so Reddit/TikTok/Instagram could not be read directly; the sweep relied on Insta360's manuals and blog, creator blogs, and ~60 YouTube tutorials (chapters + transcripts). Items marked *unknown* are real but not verifiable from public text.

---

## Ed's two named transitions — the answer up front

### (a) "Spinning / rotating one photo or clip into another"

There is no single in-app template that spins photo A into photo B. It is done in two layers, both in the phone app:

1. **Give each still its own spin.** Two in-app options:
   - **Shot Lab › Spin View** — one-tap: takes ONE 360 photo and animates it as a spinning/zooming clip; 8 sub-templates including "Circle of 3–6 people", "Sky" and "Tiny planet fade". Best for group shots (it doesn't detect a subject, so a lone person may end up off-frame — Ben Claremont rated it C-tier for that reason).
   - **360 photo › Animate** — added to the app in July 2026 (v2.29.0): "one-tap Animate effects to add movement within the image"; Insta360's Dec-2025 how-to says "Tap Animate and choose your preferred camera movement".
2. **Cut them together with a spin.** Edit › Create a Video › add the animated stills (or clips) › tap the white box between two items › pick a transition. The transitions library has "dozens" of presets; Ben Claremont's picks are **Zoom Cut** and **Blur Cut** — the exact list of spin-style names could not be verified and changes by version, so check the box in the app. For clips (not photos) the manual, fully-controllable version is the **Roll / Rotation transition**: keyframe roll 0°→180° over the last 1–2 s of clip A ("Fade in / Quick out" curve), then 180°→360° over the first 1–2 s of clip B, same spacing so the spin speed matches; cut on the blur.

Verified examples: Spin View — Sarb Johal `g5tS9RgVo-I` (2020, ONE R-era UI; concept unchanged), Ben Claremont `3-5jjbZubYo` @902 s (2025-10-22). Rotation transition — Lincolas `n5MyTvBmets` @31 s (2023-04-10). App transitions menu — Ben Claremont `0vsCPu4ZlxY` @654 s (2025-06-20).

Sources: Insta360 forum "Shot Lab Tutorial – Spin View" https://forums.insta360.com/section/16/post/2195/ (undated; checked 2026-09-26) · App Store version history (v2.29.0, 2026-07-14) https://apps.apple.com/us/app/insta360/id1491299654 · Insta360 blog "Share 360 photos on Instagram" 2025-12-30 https://www.insta360.com/blog/tips/share-360-photos-instagram.html · App manual, Transition Effect https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/transition

### (b) "Same person, same pose and outfit, at several locations, blended / flipped between them"

This has several names. The **one-tap version** exists and Ed can do it entirely in the app:

- **Shot Lab › Spin Me Around** (Ben Claremont: S-tier, "transitions between two locations with a tornado-style effect… really easy to film and edit"). Shoot 3–4 clips at different places: stick fully extended and held level, elbows locked, rotate slowly **in the same direction every time** for 25 s+ (one creator rotates a full minute so the app reliably finds the clip). Then Edit › Shot Lab › Spin Me Around › Use this theme › pick the clips › reorder by press-and-hold › Export (motion blur is added on export).
- **Manual versions** (same shoot, more control; all doable with keyframes + speed in the app): "Selfie Transition" (Rain Michael), "Landscape Switch" (Gimbal Guru), "Tornado transition" (Ben Claremont). Shoot: same stick length, same height, same rotation direction and speed at each location. Edit: keep yourself centred (Deep Track or one keyframe per quarter-turn, head on the same grid line), speed-ramp the last half of clip A and the first half of clip B to ~8× with Motion ND on, cross-dissolve on the fastest part.
- **"Flipped" variants (templates):** **Time Flip** — spin 180° at each location, the app stitches the halves (Ben: D-tier, needs genuinely different backgrounds); **Flip My Day** — a day-in-the-life multi-scene flip (D-tier, lots of planning). **MatchCuts** — clap/gesture-based auto match cut between locations (A-tier), but the manual lists it as Android-only and for flat video.

Verified examples: Spin Me Around — Tomasz Nowacki `mFtL9sNwEJc` (2024-02-10, whole video is the tutorial; app steps @218 s), Ben `3-5jjbZubYo` @678 s. Manual — Rain Michael `D6_2HC6nhkA` @373 s (2024-08-30), Gimbal Guru `dCVNhJuPWMI` @435 s (2024-04-16), Ben Claremont `U9sb6JGT6Lk` @79 s (2025-09-22, Studio + Resolve).

Sources: App manual Shot Lab template list https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/shot-lab (checked 2026-09-26) · Ben Claremont "Best and Worst Insta360 Effects (Ranked)" 2025-10-22 https://www.youtube.com/watch?v=3-5jjbZubYo

---

## Transitions (new pages)

| Proposed page | Good for | What it is | How it's done | X5? | Sources (dated) | Example video |
|---|---|---|---|---|---|---|
| Spin Me Around / Rotating-Selfie Location Switch | Travel & scenic, Beach & water, Kids & family | Same person spins on the stick; the world tornado-cuts to the next place | **Template:** Shot Lab › Spin Me Around (3–4 clips, rotate same direction 25 s+). **Manual:** centre yourself, 8× speed ramp in/out, Motion ND, dissolve | Yes | App manual Shot Lab list (2026-09-26); Ben Claremont ranking 2025-10-22 | `mFtL9sNwEJc` (tutorial); `D6_2HC6nhkA` @373; `U9sb6JGT6Lk` @79 |
| Roll / Rotation Transition | Everyday/walking, Travel & scenic | View twists 180° at the cut, finishes twisting in the next clip | Manual: 2 keyframes at end of A (roll 0→180°), 2 at start of B (180→360°), matching spacing, fast curve; cut on blur | Yes | Lincolas 2023-04-10; Gimbal Guru 2021-08-26 https://forums.insta360.com/section/16/post/17530/ | `n5MyTvBmets` @31; `hmWxt6vcwKw` @536 |
| Whip-Pan Transition | Everyday/walking, Kids & family | Fast 180° pan out of one clip, into the next | Manual: 2 keyframes 0.5 s apart panning 180° at end of A; mirror at start of B; Quick In/Out curve; cut on blur. Works up/down/left/right | Yes | Lincolas 2023-04-10; Ben Claremont 2024-08-27 | `n5MyTvBmets` @176; `nTOnQ0aw1U0` @195 |
| Sky Transition (tilt up, tilt down elsewhere) | Travel & scenic, Beach & water | Tilt up to plain sky, cut, tilt down onto a new place | Manual: keyframe A ends on all-sky (roll 90° helps); B starts on all-sky, tilts down 2–3 s later; same sky type both sides; optional 5-frame fade | Yes | Ben Claremont 2025-09-22; Lincolas 2023-04-10 | `U9sb6JGT6Lk` @587; `n5MyTvBmets` @276 |
| Ground Swoop / Portal Transition | Travel & scenic, Kids & family | Camera dives into the ground and pops up somewhere else | Shoot: stick low, lift high, back down (walk fwd, then repeat walking back). Edit: keyframes rotate 90° into the ground at the low points, level at the top, ease curves; overlap/fade clips. "Ground Pull" is the same with a wave motion | Yes | Rain Michael 2024-08-30; Ben Claremont 2025-09-22; Gimbal Guru 2024-04-16 | `D6_2HC6nhkA` @18 (swoop) and @228 (portal); `U9sb6JGT6Lk` @411; `dCVNhJuPWMI` @622 |
| Zoom-In Transition (+ app "Zoom Cut") | Everyday/walking, Travel & scenic | Push in at the end of A, start B wide and settle | Manual: FOV 110→80 over last second of A; 140→110 at start of B; or just pick **Zoom Cut** in Create a Video. Best combined with a slight roll | Yes | Lincolas 2023-04-10; Ben Claremont 2025-06-20 | `n5MyTvBmets` @416; `0vsCPu4ZlxY` @654 |
| Gesture Match Cut (click / clap / high-five / hand swipe) | Kids & family, Just for fun, Everyday/walking | Same gesture in two places; cut on the gesture | **Template:** Shot Lab › MatchCuts (manual says Android-only, flat video). **Manual:** export both with sound, cut just before the click/clap in each; hand-swipe across the lens works as a wipe | Yes (manual); template: check | Insta360 GO 2 forum post https://forums.insta360.com/section/16/post/16991/ (undated); Ben 2025-09-22 | `U9sb6JGT6Lk` @706 (click) and @765 (swipe); `DbQZaRYoxbw` @42 (2021 GO 2 demo) |
| Catch / Throw Transition | Kids & family, Golf & sport, Beach & water | Throw a ball/object up, cut on the catch to a new place | Shoot with mouth mount or stick; reframe so the object stays centred (grid on); cut exactly on the catch in each clip | Yes | Gimbal Guru 2024-04-16 | `dCVNhJuPWMI` @751 |
| Splash Transition | Beach & water, Kids & family | Water hits the lens; next clip starts as water leaves it | Splash the X5 in two places; cut exactly where water hits the lens | Yes | Gimbal Guru 2024-04-16 | `dCVNhJuPWMI` @165 |
| Pass-By Wipe (person/object fills frame) | Everyday/walking, Travel & scenic, Kids & family | Someone walks past very close and "wipes" you to a new location | Clip A: pass a person/object very close; clip B: start very close and move away; cut where the frame is filled. Best360's "Jump Cut" is the hands-free version: walk past the camera on a monopod, split, reframe | Yes | Gimbal Guru 2022-09-08 (demoed in single-lens — do it in 360 and reframe); Best360 2026-03-30 | `U_ZB5rn8N_4` @450; `YyVv2tKdO1U` @526 |
| Jump-Cut Teleport & Outfit Swap ("Super Spy") | Kids & family, Just for fun | Jump in one spot, land in another / outfit changes mid-run | Camera on tripod (or stick held steady): run/jump, change outfit, repeat. Edit: narrow FOV, split each clip at the top of the jump or as you leave frame, delete the rest. Same idea as the "teleport" trend | Yes | Insta360 Tutorials 2021-08-13 (X2-era UI); Insta360 forum teleport post https://forums.insta360.com/section/16/post/6740/ (desktop version) | `tz98aC9hhtA` @30 (shoot) and @61 (edit) |
| Time Flip & Flip My Day (multi-location spin templates) | Travel & scenic | Half-turns at several locations stitched into one flip | Template: Shot Lab › Time Flip (spin 180° at each place) / Flip My Day. Ben: D-tier (needs several genuinely different scenes); Spin Me Around is the easier cousin | Yes | App manual Shot Lab list; Ben 2025-10-22 | `3-5jjbZubYo` @618 and @705 |

## Reframe moves (new pages)

| Proposed page | Good for | What it is | How it's done | X5? | Sources (dated) | Example video |
|---|---|---|---|---|---|---|
| Movement Templates (one-tap camera moves) | Everyday/walking, Kids & family | 40+ preset moves in Keyframe editor › Movement (categories Tiny Planet, Protagonist, Advanced, Highlights) | Tap a template, it applies to the highlighted section; drag the edge to lengthen. Names confirmed in the wild: **360 Left**, **Drag Down**, **Interstellar** (Tiny Planet › barrel roll), **Pulse**, **Zoom In/Out**, **Roll**, **Pan**, **Push**, **People Swap**, **Freeze Go**. Full list not published — scroll the app | Yes | App manual Keyframes & Movement (checked 2026-09-26); PetaPixel 2024-08-15; Best360 2026-08-26; Ben 2025-06-20 | `0vsCPu4ZlxY` @577; `VYwVi9ruAS8` @581 (Drag Down) and @917 (Interstellar); `mqjxZodvXiI` @305 |
| Real Motion + Zoom Combo (Sail Away / Gondola / Zoom Dolly) | Beach & water, Travel & scenic (boat, gondola, helicopter cabin) | Add a slow zoom-out (or in) to something already moving | Two keyframes: start closer, end wider (boat/gondola), or start wide and push in for tension ("Zoom Dolly": start zoomed in, zoom right out) | Yes | Ben Claremont 2026-02-10 and 2024-08-27 | `GmYovhkMmKY` @74 (sail) and @172 (gondola); `nTOnQ0aw1U0` @529 |
| Vertigo Roll | Travel & scenic (bridges, cliffs, viewpoints) | Slow rotation while walking a high walkway | Camera above head on stick; keyframe 1 angled, keyframe 2 rotated further; precise roll values | Yes | Ben Claremont 2026-02-10 | `GmYovhkMmKY` @520 |
| Landmark Pivot Hyperlapse | Travel & scenic | Circle a landmark for minutes, it stays pinned while the world spins | Stick above head, walk a smooth path (follow a kerb/track); keyframe every so often keeping one reference point on the same grid line; 32×; test with and without Motion ND | Yes | Ben Claremont 2026-02-10 | `GmYovhkMmKY` @844 |
| Super-Wide, Fisheye-Free Look | Beach & water, Travel & scenic, helicopter | Almost the whole scene in one frame without fisheye bend | Keyframe FOV 135 and distortion control 0.1 (Studio); in app use widest Dewarp/Linear and pull back | Likely (Studio-confirmed) | Lincolas / Insta360 Tutorials 2025-07-17; Gimbal Guru 2024-04-16 | `4ooR3D4WXk0` @127; `dCVNhJuPWMI` @266 |
| Direction-Lock Carlapse | Car & road trip | Car stays in one spot in frame while the road streams past, sped up | Stick out the window braced on the armrest; Direction Lock on, one keyframe, 16–32× with Motion ND. **Adapt it:** same trick on a bicycle handlebar or held from a golf cart | Yes | Ben Claremont 2024-08-27; The 360 Guy 2026-06-04 (direction lock) | `nTOnQ0aw1U0` @752; `H3o30IYsGXg` @161 |
| Walking Tiny Planet ("planet walk") + Inverted variants | Beach & water, Kids & family, Just for fun | You run around a grounded camera and appear to walk on top of your own planet | Camera on mini tripod on the ground, run 3–4 laps; tiny planet preset, keyframe roll every few seconds to keep yourself on top. Variants: inverted "flower tunnel", "rabbit hole", "wormhole". Best in open areas (beach, field) | Yes | The 360 Guy 2024-05-19 | `TGSsNRdch-c` @52 (walk), @107 (inverted), @213 (flower tunnel), @292, @422 |
| Curtain Reveal / Natural Fade | Just for fun, Travel & scenic (hotel room) | Curtains open onto the view and you walk in; close them for a fade to black | X5 on tripod, manual exposure for the bright outside, trigger with remote; zoom/rotate freely in post | Yes | Brandon Li 2025-08-26 | `DMIZ6KYBdOo` @529 |

## Stick & mount tricks (new pages)

| Proposed page | Good for | What it is | How it's done | X5? | Sources (dated) | Example video |
|---|---|---|---|---|---|---|
| Mouth-Mount / Bite POV (hands-free) | Kids & family, Beach & water, Golf & sport | Realistic POV with both hands free, no chest strap | Put the X5 in your mouth (or bite mount), do the action; reframe forward with a slightly wider FOV. Also the base for catch transitions and golf-swing POV | Yes | Insta360 Tutorials 2025-07-17; Insta360 (Chris Hau) 2025-09-05 | `4ooR3D4WXk0` @95; `qRpa3ZSWXtw` @295 |
| Stick Freestyle / Windmill Orbit | Just for fun, Kids & family, Travel & scenic | Wave the stick anywhere; edit keeps you centred so the world tumbles | Move the stick around wildly (or windmill it over someone's head); keyframe to keep the subject centred, add slight rotations | Yes | Insta360 Tutorials (Lincolas) 2023-11-04; Brandon Li 2022-08-20 | `eQ6TXPIEIic` @122; `awhRm5ruOuo` @272 |
| Boat Selfie / Off-the-Stern Shot | Beach & water, Travel & scenic (snorkel boat, ferry) | Drone-like shot of you at the back of a boat | Rest the stick under your arm or hold the extended stick sideways (turn the camera on its side to hide the bend); 32× speed with keyframes recentring the boat; optional look-back at the end | Yes | Brandon Li 2022-08-20; Insta360 Tutorials (Best360) 2024-07-31 | `awhRm5ruOuo` @98; `UK64zAgZQgY` @466 |
| Car Exterior Stick & Drive-By Shots | Car & road trip | Fake chase-car: front ¾, rear ¾, wheel, sunroof top-down, roadside drive-by | Extended stick out the window braced on the mirror; suction cup on roof; camera on tripod at roadside and pan with the car in post; foot-on-pedal and mirror-reflection details. ~30 s per angle. Safety: watch signs/traffic. **Adapt it:** from a golf cart or a bicycle the same bracing trick works at low speed | Yes | Insta360 (Chris Hau) 2025-09-05; Learn Online Video 2025-04-22; Insta360 Tutorials 2025-07-17 | `qRpa3ZSWXtw` @98; `15OQIt-zZg4` @506 (top-down) and @575 (drive-by); `4ooR3D4WXk0` @56 |
| Golf Swing + Fake Ball Flight | Golf & sport | Swing with the stick, then the "ball" flies down the fairway | Shot 1: swing with the extended stick. Shot 2: walk the fairway moving the camera in a low→high→low arc; speed up as a hyperlapse; add a roll where the ball "lands". Mouth-mount POV of the real swing is the simple version | Yes | Gimbal Guru 2022-09-08 | `U_ZB5rn8N_4` @502 |
| Aircraft / Gondola Window Shot | Travel & scenic (helicopter, cable car) | Camera centred in a window, smooth zoom-out as the view opens | Clamp/suction inside the cabin (never out of a helicopter door); keep the frame centred and add a zoom keyframe. Doors-off tours: ask the operator; tethered only | Likely (in-cabin X5 demos exist) | Ben Claremont 2026-02-10 (gondola); Schmiiindy 2025-11-04 (X5 in a Cessna); Brad Pierce (in-cockpit) | `GmYovhkMmKY` @172; `SwhUXtg8xmM`; `zYCegoGc3BU` |

## Speed & time (new pages)

| Proposed page | Good for | What it is | How it's done | X5? | Sources (dated) | Example video |
|---|---|---|---|---|---|---|
| Slow-Mo Particle Shot (spray, sand, snow, bubbles) | Beach & water, Kids & family | Particles passing the camera on all sides at ¼ speed | 4K 120 fps; get in the spray/snow; lightning-bolt speed tool, drag to ¼ | Yes | Insta360 Tutorials (Lincolas) 2025-07-17 | `4ooR3D4WXk0` @7 |
| CineLapse (auto hyperlapse with built-in location cut) | Travel & scenic | AI hyperlapse that points at highlights and transitions into a second clip | Shot Lab › CineLapse; Ben's caveat: it moves around too much vs manual keyframing (see Hyperlapse page) | Yes | App manual Shot Lab list; Ben 2025-10-22 | `3-5jjbZubYo` @179 |
| Starlapse (night sky) | Night | Star-trail or star-motion timelapse | Camera mode Starlapse (X3–X6); tripod; interval/shutter/ISO per tutorials; process in app or Studio 6.0.2 (workflow changed Aug 2026) | Yes | X5 manual Starlapse https://onlinemanual.insta360.com/x5/en-us/operating-tutorials/capture-preview/shooting-mode/starlapse; Lincolas 2026-08-03; New Adventure Films 2026-08-27 | `RTRRTqe1c6U` @21 (settings); `izo1A9mV3P8`; `LUNcKkkTOpg` |

## Shot Lab / AI templates (new individual pages)

Current X5 Shot Lab list per the manual (checked 2026-09-26): AI Warp, Sky Swap, Fly Lapse, Bullet Time Mix, Auto TimeShift, CineLapse, Horizon Flip, Flash Dash, Electric Surge, Clone Trail, Clone Loop, Stop Motion, Stop Motion Statue, Stop Motion Mix, Spin Me Around, Street Lapse, Ghost Town, MatchCuts, Time Flip, Parallel Planet, Roll Planet, Jump Planet, Flip My Day, Nose Mode, Freeze Throw, Shadow Clone, Pixelize, Center Stage, Dolly Zoom, Face Off (not X5), Giant Jump, Split Jump, Spin View, Starlapse, AI Selfie Stick Eraser (Ace only). The manual's per-template platform notes (e.g. "iOS only") appear to be about max-resolution support, not availability — confirm in the app.

| Proposed page | Good for | What it is | How it's done | X5? | Sources (dated) | Example video |
|---|---|---|---|---|---|---|
| Horizon Flip | Everyday/walking, Travel & scenic | Inception-style: the horizon is mirrored on top while the frame spins. Ben: S-tier, "hard to mess up" | Any walking clip; Shot Lab › Horizon Flip; tweakable in-app | Yes | App manual; Ben 2025-10-22 | `3-5jjbZubYo` @525 |
| Spin Me Around | see Transitions | | | Yes | | `mFtL9sNwEJc` |
| MatchCuts | Kids & family | Auto match cut on a clap/gesture/lens-brush. Ben: A-tier | Shot Lab › MatchCuts; manual: Android, flat video | Check (Android) | App manual; Ben 2025-10-22 | `3-5jjbZubYo` @728 |
| Pixelize | Kids & family, Just for fun | You become a floating 8-bit ghost. Ben: A-tier fun | Camera locked off, move around in front of it | Yes | Ben 2025-10-22 | `3-5jjbZubYo` @357 |
| Clone Loop & Shadow Clone | Kids & family, Just for fun | Clone Loop: walk round the camera doing an action, you're cloned as it pans (A-tier). Shadow Clone: different actions in different spots, 10–15 s each (C-tier, work) | Shot Lab › Clone Loop / Shadow Clone | Yes | Ben 2025-10-22 | `3-5jjbZubYo` @472 |
| 360 Templates (Edit tab, April 2026) | Travel & scenic | New submenu beside Shot Lab: "globe-style Earth zoom into your clip", "planet spinner" intros | Edit tab › 360 templates › Use this theme › pick clips. Individual template names not published; screenshot the list | Yes (app) | Ben Claremont blog 2026-04-24 https://www.benclaremont.com/blog/3-quiet-insta360-app-updates-you-might-have-missed | none found |
| Live Frame Collage templates | Kids & family | "Live Frame Collage templates for 360 content" | App v2.31.1 (2026-08-10); details unknown | Unknown | App Store version history (checked 2026-09-26) | none found |
| AI Director (on-camera auto edit) | Everyday/walking, Kids & family, Travel & scenic | Free: camera analyses the day's clips while charging (from 80% battery) and sends a finished clip to the phone; addresses Ed's "AI edit swings to the family" problem by letting him tweak after | Turn on in camera menu (Battery-life-optimised or Efficiency mode); X5 support arrived with firmware 1.13.21 (2026-09-15) and app 2.34.0. Tips: clean starts/stops (voice/gesture), film in story order | Yes (since 2026-09-15) | latestupdate.io firmware log; App Store history; Eat Sleep 360 2026-08-26; MountMedia 2026-08-10 | `lvqg0kgfsk8`; `uu1UNkbGzbI`; `297G-NWKSqU` @111 |
| Auto Edit 2.0 & Moments Pro | Travel & scenic | Auto Edit 2.0: pick clips, one tap, then switch template/reorder. Moments Pro: cloud edit described in words (paid Insta360+ tier, 1080p output) | Edit › Auto Edit; Moments needs cloud subscription — cheapest is to ignore | Yes | App manual Auto Edit https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/auto-edit; MountMedia 2026-08-10 | `uu1UNkbGzbI` |
| 360 Photo › Animate & AI Layout | Travel & scenic, Kids & family | One-tap camera moves on a 360 photo; AI framing suggestions for stills | App v2.29.0 (2026-07-14). Ties into Ed's photo-spin transition | Yes | App Store history; Insta360 blog 2025-12-30 | none verified |

## AI effects (💎 uses generations)

Ed's specific asks ("Ghost Rider" son-running-at-camera; a wave crashing over someone) could **not** be confirmed as named Insta360 scenes from any public source. What is verifiable:

| Proposed page | Good for | What it is | How it's done / cost | X5? | Sources (dated) | Example video |
|---|---|---|---|---|---|---|
| AI Warp presets: Cyberpunk, Sci-Fi, Space, Anime | Just for fun, Kids & family | Whole-clip style repaint | Shot Lab › AI Warp › pick style › Preview › generate. 4–15 s clip, up to 5.7K 360. **3 free/day** (reset 08:00 Beijing), then 20 diamonds each; failed = refunded | Yes | App manual AI Warp https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/al-magician (checked 2026-09-26) | `D7Lhjj_flUU` (already in library) |
| AI Warp › Custom prompt / painted area — the route to "Ghost Rider" and "wave" | Kids & family, Beach & water, Just for fun | Paint over the person, type a prompt ("flaming skull, chains, Ghost Rider" / "huge wave crashing over"), AI fills the painted area | Same allowance as above. Footage: 4–15 s, subject large in frame, steady; for "running toward camera" use a tripod and a straight run so the mask tracks. Results are hit-or-miss — always Preview first | Yes | App manual AI Warp; Insta360 forum AI Warp tutorial https://forums.insta360.com/section/16/post/58030/ (custom prompts) | `rrnHLkW5Msw` (The 360 Guy, prompt workflow, Ace Pro UI) |
| AI Effects section (Edit tab, April 2026) | Just for fun | Separate menu of "stylized transformations" (one snowboarding scene named) | Edit › AI Effects › Use this theme › AI generate (~1 min). Reported **3 total uses**; output watermarked. Scene names: unknown — a Jan-2026 r/Insta360 thread titled "Ghost rider" exists but could not be read | Yes | Ben Claremont blog 2026-04-24; r/Insta360 thread https://www.reddit.com/r/Insta360/comments/1qct9ef/ghost_rider/ (2026-01-14, unread) | none found |
| Seasonal AI scenes (Sky Swap / AI Warp holiday packs) | Just for fun | Time-limited holiday skies/styles | Shot Lab › Sky Swap or AI Warp › seasonal entries; free Sky Swap doesn't use generations | Yes | Insta360 blog 2025-12-30 https://www.insta360.com/blog/news/insta360-holiday-ai-effects.html | none |

Action for Ed (free, 5 min): open Edit › AI Effects and Shot Lab › AI Warp and screenshot both lists — that settles the scene names and the remaining-count indicator better than anything online.

## X5 modes (new pages)

| Proposed page | Good for | What it is | How it's done | X5? | Sources (dated) | Example video |
|---|---|---|---|---|---|---|
| InstaFrame 2.0 + Virtual Gimbal (Pitch Lock / Follow / FPV) + Dynamic Tracking 2.0 | Kids & family, Everyday/walking | Camera bakes a tracked, gimbal-stable flat video in-camera (4K30 alone, or 1080p flat + 5.7K 360 backup). Tracks **any** selected subject (kids), on-screen joystick, in-camera 360 Spin and Barrel Roll; 2.35:1 added Jan 2026 (fw 1.10.7) | Mode InstaFrame › keep "360 video backup" ON (Ed's always-360 rule) › tap subject › choose gimbal mode. **Adapt it:** demos are often motorbike/vlog; works handheld while walking with the kids or on a bike bar mount | Yes (fw Dec 2025+) | Air Photography 2025-12-03; Gaba_VR 2025-12-12; FlytPath 2026-03-16; latestupdate.io firmware log | `Psbeh8qQP_U`; `NRNnwqkq-Tc` @32 and @98; `Ntzeog5Wc7Y` @165 (tracking kids) and @230 |
| Me Mode / FreeFrame (niche only) | Everyday/walking | Single-lens: Me Mode points at the stick holder; FreeFrame lets you choose 16:9/9:16 later | Single-lens menu. Per project rules, niche only — mention, don't recommend | Yes | Ben Claremont 2025-05-29 | `lFkxnXitsEU` @765 (FreeFrame) and @803 (Me Mode) |
| Road Mode (dash-cam loop by card space) | Car & road trip | Long loop recording capped by SD space | 360 video › Road Mode; fw 1.11.6 (2026-04-13) improved it. **Adapt it:** built for motorcycle/car trips; for a scenic drive just buy a second card instead | Yes | Ben Claremont 2025-05-29; latestupdate.io | `lFkxnXitsEU` @456 |
| Cinematic 2.35:1 photos, borders, in-camera filters (NC Film etc.) | Travel & scenic | Wide-format single-lens photos, style borders, 8 in-camera looks | Winter 2025 firmware (v1.7.43) | Yes | Sarb Johal 2025-12-05; Gaba_VR 2025-12-12 | `-FCjuwCqYnM` @311; `NRNnwqkq-Tc` @164 |
| Foldable Selfie Stick Remote Kit "gimbal-like output" | Everyday/walking | Firmware 1.13.21 adds support for gimbal-like video with the new stick | Details unknown; X6-era accessory also on X5 | Likely | latestupdate.io (2026-09-15) | none verified |
| Not on the X5 (for the record) | — | **Clarity Zoom** (Ace Pro 2 only, 2× lossless in-camera zoom) · **MotionShot**: no Insta360 feature by that name found | — | No | Ace Pro 2 manual https://onlinemanual.insta360.com/acepro2/en-us/camera/features/zoom | — |

---

## Suggested additions to existing pages

| Existing page | Add |
|---|---|
| Spin Transition | Distinguish pan-whip (current) from the roll/rotation version; link the new Roll Transition and Whip-Pan pages. Note the app's own preset transitions (Zoom Cut, Blur Cut) as the zero-effort option — Ben `0vsCPu4ZlxY` @654. |
| Portal Water Jump | "Underwater Transition" (dip the camera under in one place, cut as it surfaces elsewhere) — Gimbal Guru `U_ZB5rn8N_4` @328; and the "Dive Transition" (person dives up in shot 2) — `PZx1yj1pUvA` @644. |
| Hyperlapse / TimeShift | "Hyperlapse-to-hyperlapse match" (end wide on a path, start next hyperlapse wide on a path) — Ben `U9sb6JGT6Lk` @516; TimeShift-vs-Timelapse official explainer; 32× default vs 16×. |
| 360 Spin and Barrel Roll | "360 Spin Shot" recipe (8× section speed, 90° keyframe every 2 s, end on a zoom to the landmark) — Best360 `UK64zAgZQgY` @767; "Spin Shot" wedging the 3 m stick — `VYwVi9ruAS8` @186; in-camera barrel roll/360 spin via InstaFrame 2.0 — `Ntzeog5Wc7Y` @181. |
| 360 Look-Around (Slow Pan) | Ben's "Location Sweep": one keyframe, spin 360° a few seconds later, drag the keyframe to slow it — `nTOnQ0aw1U0` @125. |
| Rise Shot (Crane) | Editing-only "Float Up" (start zoomed on ground detail, tilt up and zoom out) — `nTOnQ0aw1U0` @252; Brandon Li's rise-and-walk-away and "Walking Fly Away" — `awhRm5ruOuo` @98 and @347; Ben's "Drone takeoff" (run low, lift, hide a zoom-in) — `GmYovhkMmKY` @706. |
| Tiny Planet & Inverted | "Location Reveal" (start tight, end on tiny planet at the top of a stick lift, 0.5×) — `GmYovhkMmKY` @626; inverted planet "flower tunnel" — `TGSsNRdch-c` @213. |
| Tiny Planet Flip / Planet Landing | Jump-to-inverted-planet transition (planet → cut on landing → inverted) — `TGSsNRdch-c` @169. |
| Fake FPV Dive | Brandon Li's "FPV flip and fly away" C-shape move with the thropod — `DMIZ6KYBdOo` @481; Lincolas "Dive" (stick high, slowly down to ground) — `4ooR3D4WXk0` @238. |
| Low-Angle Ground Skim | "The step over" (Insta360 travel tutorial, 2026-03-11) `-64ENzj6usE` @417 and Brandon Li "Under Over" `awhRm5ruOuo` @138 (no transcripts; watch). |
| Bullet Time / Bullet Time Mix | "Rotating landscape flip" (bullet-time swings at several landscapes + speed ramps) — `U_ZB5rn8N_4` @580; "Bullet time with motion" — MountMedia `DZcy1So1Et4` @452. |
| Split Screen / MultiView | April-2026 upgrade: 2/3/4-way, Car MultiView, rounded corners and border blending (manual, checked 2026-09-26); Best360's 3 m-stick dual-screen recipe — `YyVv2tKdO1U` @790; Air Photography walkthrough `M-VZiSy8eac`. |
| Clone Trail | Clone Loop and Shadow Clone (see AI templates table). |
| Stop Motion | Stop Motion Statue (feet-together detection is unreliable — Ben F-tier) and Stop Motion Mix — `3-5jjbZubYo` @843. |
| Other Shot Lab Templates | Replace the list with the manual's 35 names above; note Ben's verdicts: Sky Swap (best), Horizon Flip (S), Spin Me Around (S), Pixelize/Clone Loop/MatchCuts (A), Spin View (C), Time Flip/Flip My Day/Giant & Split Jump (D), Freeze Throw/Face Off/Center Stage/Parallel Planet (F — Freeze Throw means throwing the camera; don't). Add Electric Surge, Center Stage, Giant Jump as names only. |
| AI Warp & AI Effects | Add the preset names (Cyberpunk, Sci-Fi, Space, Anime), the painted-area + prompt route for Ed's Ghost Rider / wave ideas, the seasonal packs, and the screenshot-the-list action. |
| Sunset settings | Silhouette recipe (manual exposure for the sky, subject dark, cave/doorway exits) — `4ooR3D4WXk0` @265; "Framed Shot" through a cave or branches — `eQ6TXPIEIic` @102. |
| Night & low light settings | Best360's night-time selfie (PureVideo 8K30, Dewarp, two keyframes) and night TimeShift — `VYwVi9ruAS8` @376 and @624 (X6, same on X5); low-light 72 MP photo recipe — `UK64zAgZQgY` @425. |
| Snorkelling & water / underwater diving | Official Invisible Dive Case Pro guide `wqvGM7U2dHo` (2025-09-15) and MountMedia's X5 underwater tutorial `DZ-D1DxKpNo` (2025-07-21); AquaVision on in edit. |
| Driving & road trips (shots) | Link the new Car Exterior Stick Shots and Direction-Lock Carlapse pages. |
| Golf (shots) | Link Golf Swing + Fake Ball Flight and Mouth-Mount POV. |
| Aerial & helicopter (shots) | Link Aircraft/Gondola Window Shot; Super-Wide look. |

## Not found / could not verify (so nobody wastes time)

- Individual **AI Effects** scene names (Ghost Rider, wave crash): no public listing; Reddit blocked; only "snowboarding" scene named (Ben Claremont, 2026-04-24).
- Individual **360 Templates** names beyond "globe zoom" and "planet spinner".
- Full **Movement** template list (40+): only the eleven names above are confirmed.
- **Live Frame Collage** and **Foldable Selfie Stick Remote Kit** behaviours: release-note one-liners only.
- Jordi Koalitic's X5 ideas (`qo2I_Mm4xWQ`, 2025-05-16: Waterfall Effect, Free Fall, Wheel Reflection, Chimney Shot, The Chase) — no narration/transcript, so not written up; worth a dual-read watch.
