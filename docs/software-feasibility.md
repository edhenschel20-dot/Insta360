# Insta360 X5 — Software Feasibility Research

Researched: 2026-09-26 (dates noted per source below; app/Studio features change often — re-verify
before relying on anything marked with an app/Studio version number).

Status tags used throughout: **CONFIRMED** (source checked directly), **LIKELY** (strong secondary
evidence, not directly verified against an official/primary source), **UNKNOWN** (could not
establish either way).

---

## 1. Insta360 app (mobile) vs Insta360 Studio (desktop)

### 1.1 Reframe & keyframes — app

**CONFIRMED** — [Insta360 App: Keyframes & Camera Movements](https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/keyframes-and-camera-movements)

- A keyframe is a "memory point" recording FOV/zoom/pan at a moment in time. You set keyframes
  three ways: the keyframe icon on the Player page; "Auto Keyframe" toggle in Editor (app v2.10.4+);
  or Edit → Create a Video → 360 Reframe → add keyframe.
- **Keyframe Curve** (app v2.17.0+): 7 easing types between keyframes (Linear, Ease In/Out, Ease In,
  Transition Delay, Ease Out, Quick In/Out, Hard Cut) — this is the interpolation Ed currently has to
  fight with manually.
- **Movement templates**: preset motion paths grouped as Tiny Planet, Protagonist, Advanced,
  Highlights — apply a canned path instead of hand-keyframing.
- Limitation confirmed directly: **copy/paste of keyframes is not supported** in the app — this is
  likely a real source of Ed's tedium (every reframe path is built from scratch).

### 1.2 Subject tracking — app & Studio (Deep Track / Tracking)

**CONFIRMED** — [App: Tracking Feature](https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/tracking-function), [Studio: Deep Track](https://onlinemanual.insta360.com/studio/en-us/operation-guide/edit-function/deep-tracking-function)

This is the most directly relevant finding for Ed's actual complaint ("AI follows the person holding
the stick"):

- Tracking is **not fully automatic-only**. Once enabled, the app auto-selects a target with a green
  box, but **"you can manually zoom and move the green box to change the tracked target."** In
  other words, there is already a built-in way to tell it "track that person, not me."
- Studio's Deep Track works the same way for X5 footage specifically (Deep Track is confirmed
  applicable to X5) and can be invoked from either the Project timeline or Media library.
- Deep Track 3.0 (per Insta360's own marketing/blog, **LIKELY** not independently verified against a
  changelog) adds Person Re-Identification (keeps tracking a subject even if briefly occluded) and
  All-Angle Tracking (subject shape changes, e.g. turning around).
- 2026 update (**LIKELY**, from search snippets, not confirmed against a dated changelog) adds
  single/multi-target tracking *recommendations* so you don't have to hand-draw the box every time.
- Confirmed restriction: Deep Track does **not** work on footage shot in Bullet Time or Timelapse
  modes.

**Practical implication:** before building anything, it's worth Ed actually testing manual
re-targeting of the tracking box in the current app/Studio on a real clip — this may already solve
the "AI follows the wrong person" problem without any new tooling. This is a product-manager
decision point, not a software-capability gap.

### 1.3 AI Edit / Auto-Reframe / Shot Lab / Warp — app

**LIKELY** (from Insta360's own blog posts and support pages, cross-referenced across multiple
search hits, not all individually fetched):

- **AI Auto-Reframe**: analyzes a clip, identifies the "most interesting action," and auto-places
  keyframes.
- **AI Warp**: generative-AI stylization tool (text-prompt driven), unrelated to reframing logic.
- **Shot Lab**: 25+ one-tap AI templates (Nose Mode, Sky Swap, AI Warp, Clone Trail, Bullet Time,
  Tiny Planet, etc.) — mobile app only.

### 1.4 Studio (desktop) — differences from app

**CONFIRMED/LIKELY mix** — [Panoee guide (2026)](https://panoee.com/insta360-software), forum thread on Shot Lab absence from desktop:

- **Shot Lab is confirmed absent from the desktop app** (per Insta360's own community forum) — it's
  mobile-only. Desktop focuses on higher-quality manual/AI reframe, higher-bitrate 8K export, and
  (per v3.5.0, **LIKELY** unverified changelog) per-section speed ramping for TimeShift effects.
- Studio gives frame-accurate manual keyframing plus Deep Track, same underlying reframe/keyframe
  engine as the app but with a full timeline and higher export ceiling.
- **Premiere Pro plugin CONFIRMED**: Insta360 ships a "Reframe" plugin for Premiere Pro 2021+,
  installed alongside Studio, that lets Premiere read/edit `.insv`/`.insp` natively. No equivalent
  found for After Effects or Final Cut Pro in this research (**UNKNOWN** whether one exists —
  searches turned up nothing).

---

## 2. Insta360 Media SDK / Camera SDK

**CONFIRMED** — [SDK Guide](https://onlinemanual.insta360.com/developer/en-us/resource/sdk), [Desktop-MediaSDK-Cpp](https://github.com/Insta360Develop/Desktop-MediaSDK-Cpp), [GitHub org](https://github.com/Insta360Develop)

- **X5 is explicitly supported** by both Camera SDK and Media SDK.
- **Platforms**: Windows 7+, Ubuntu 22.04 (Linux), Android 10+, iOS 13+. No emulator support. This
  means a Linux/Proxmox deployment target is plausible for the SDK itself, if access is granted.
- **Camera SDK** = device control: connect, status, preview stream, parameter config, trigger
  capture, file listing/deletion, live streaming. X5/X4-only extras: lock-screen control, purple
  fringing removal (X5 only).
- **Media SDK** = processing: stitching (Template / Optical flow / Dynamic / AI stitching engines),
  stabilization, denoise/color correction/defringe, export to MP4 (H.264/H.265), JPG, and frame
  sequences.
- **No reframe or keyframe API found anywhere in the Media SDK or Camera SDK documentation.** The
  README for Desktop-MediaSDK-Cpp describes stitching and export only — nothing about camera-path
  animation, viewport control, or keyframe timelines. This means the SDK gets you from raw dual-fisheye
  to a stitched equirectangular (or perspective) frame, but **any reframe/keyframe logic (the actual
  thing Ed wants automated) would have to be built entirely outside the SDK**, e.g. by rendering your
  own virtual-camera path over the stitched equirectangular output.
- **Access**: apply at insta360.com/sdk/apply; reviewed by Insta360, typically ~3 business
  days–1 week turnaround (two sources gave slightly different estimates — treat as "about a week").
  **UNKNOWN**: cost/licensing terms for a hobbyist/individual (vs. a business). The EULA page exists
  but a direct fetch returned HTTP 403; search snippets only confirm it's a "limited, royalty-free,
  non-transferable, revocable, non-exclusive" license for building "Application Software," aimed
  generally at businesses — no explicit statement that individuals/hobbyists are excluded, but also
  none confirming they're welcome. **Recommend Ed just apply and see** — worst case is a rejection or
  a request for more detail about the project.

---

## 3. Is reframe/keyframe project data stored anywhere readable/writable?

This is the key question for "could an external tool generate keyframes Studio then imports."

**CONFIRMED, with caveats** — multiple independent GitHub projects:

- **Insta360 Studio project files use a `.insprj` format**, and it **is** writable by external code:
  [Insv-Marker-Extractor](https://github.com/arismelachroinos/Insv-Marker-Extractor) reads
  highlight-marker timestamps out of `.insv`/`.lrv` files and **"injects keyframe nodes directly into
  the `.insprj` project file,"** explicitly blending auto-generated keyframes with a user's existing
  manual pan/tilt/FOV keyframes without clobbering them. This is a working, published proof that
  `.insprj` keyframe data (pan, tilt, FOV, timing) can be generated by a third-party script and then
  opened/rendered by Studio.
- **No public specification of the `.insprj` schema exists** — this tool (and everything else found)
  works from reverse-engineering, not documentation. Format could change with Studio updates and
  break any tool built against it. **LIKELY** stable in broad strokes (it's presumably a JSON or
  XML-like project format) but treat as fragile / undocumented.
- **`.insv` file structure**: **CONFIRMED** — it's a standard MP4/HEVC container with a proprietary
  metadata trailer appended (gyro, GPS, exposure, in-camera framing hints, shoot-time markers). Tools
  that read/write this trailer:
  - [insvtools](https://github.com/alex-plekhanov/insvtools) — dump/decompose/compose/remove/replace
    metadata as JSON; doesn't document the format itself but is functional. X5 compatibility not
    explicitly stated (**UNKNOWN**, other tools confirm broad Insta360 `.insv` compatibility so
    **LIKELY** works).
  - [insta360py](https://github.com/ReignBock/insta360py) — Python reimplementation, claims
    byte-for-byte round-trip read/write of the metadata trailer.
  - [ExifTool](https://exiftool.org/) has some `.insv` metadata support (mentioned in search results,
    not independently verified here).

**Bottom line for the "could a personal tool generate keyframes Studio imports" question:**
**LIKELY yes, with real engineering effort and fragility risk.** There is precedent (a working public
tool doing exactly this), but no official/stable API — it's a reverse-engineered file format that
could break on any Studio update, and Ed (or whoever builds this) would inherit that maintenance
burden.

---

## 4. Open-source stitching / reframing routes, and Linux feasibility

### 4.1 Stitching without Insta360 Studio — confirmed viable on Linux

**CONFIRMED** — [insv-stitch](https://github.com/BenjaminHenriksson/insv-stitch) (fetched directly):

- Purpose-built **Linux-native** pipeline specifically for **X5** raw `.insv` (two H.265 fisheye
  streams + IMU + calibration metadata) → stabilized equirectangular output. No Insta360 Studio
  needed.
- Pipeline: MEI fisheye dewarp (camera-specific calibration) → IMU-based stabilization (gravity
  vector) → rolling-shutter correction (32 SLERP keyframes across the ~21ms sensor readout) → seam
  blending with adaptive feathering.
- Dependencies: Python 3.12+, ffmpeg/ffprobe, installable via `uv` or `pip`. Not containerized as
  shipped, but nothing about it prevents wrapping it in a Docker image for a Proxmox VM/container —
  the runtime is Python + ffmpeg, nothing GPU-mandatory or Windows-only mentioned, so this is a
  realistic Proxmox/Docker target.
- Author reports quality "22.5–22.9 dB PSNR at 7680×3840" vs. official Studio output — i.e. it's a
  credible, working reimplementation, not a toy.
- Caveat: IMU calibration is device-specific. The author calibrated the hardcoded IMU-to-camera
  rotation on one X5 unit; Ed's own camera may need recalibration or running with `--no-stab` mode.
  Worth a pilot run against Ed's own camera before trusting results.

### 4.2 ffmpeg v360 filter

**CONFIRMED** the filter exists and can do basic dual-fisheye → equirectangular conversion (example
command found: `v360=input=dfisheye:output=e:ih_fov=204:iv_fov=204...`), but **LIKELY** insufficient
alone for X5: it does fixed-angle projection, not the IMU stabilization/rolling-shutter correction
that insv-stitch adds. Good for quick previews/one-off conversions, not a full pipeline replacement.

### 4.3 Gyroflow

**CONFIRMED — does not support the X5 or any Insta360 360° (dual-lens) camera.**
[Gyroflow docs](https://docs.gyroflow.xyz/app/getting-started/supported-cameras/insta360) explicitly
state 360° cameras are unsupported; Gyroflow supports Insta360's single-lens action cameras (GO
series, ONE R/RS, Ace/Ace Pro) only. Not a route for X5 footage.

### 4.4 Custom camera-path reframing / object tracking on equirectangular video

**LIKELY buildable, but this is where the real engineering effort lives**, and it's genuinely
separate from stitching. Relevant building blocks found (none X5-specific, none plug-and-play):

- [360_object_tracking](https://github.com/SpaceTimeLab/360_object_tracking) — detects/tracks
  objects in equirectangular 360 video by re-projecting into overlapping perspective sub-images
  (handles wraparound and distortion, the two hard problems of 360 object detection).
- [360Tracking](https://github.com/HuajianUP/360Tracking) — SiamX-based visual tracker adapted for
  equirectangular input.
- [reframe360XL](https://github.com/sctg-development/reframe360XL) — an OpenFX plugin that reframes
  360°/equirectangular footage to a standard flat output given a camera path; supports GoPro Max,
  YouTube 360, generic equirectangular. Would need a host (Resolve/Natron) or CLI wrapper.
- [AutoFlip](https://opensource.googleblog.com/2020/02/autoflip-open-source-framework-for.html) —
  Google's general-purpose ML reframing framework; built for flat video, not 360, but the
  detect-track-plan-crop architecture is the right shape for what a custom tool would need to
  reimplement for equirectangular input.
- No single project found that does "pick a subject, ignore the stick-holder, output a keyframed
  reframe path" end-to-end for Insta360 footage specifically. **This would be original integration
  work**: stitch (insv-stitch) → detect/track chosen subject across the equirectangular frame
  (360_object_tracking or similar) → convert the tracked subject's position into a pan/tilt/FOV path
  → either render directly with ffmpeg/v360, or (per Section 3) inject that path as `.insprj`
  keyframes so Studio does the final render/export.

### 4.5 Running this on a Linux server (Proxmox VM/Docker)

**LIKELY realistic for stitching and tracking; the reframe-path generation is the open engineering
problem, not the hosting.** Everything found in 4.1–4.4 is Python/ffmpeg/C++ tooling with no
Windows-only or GUI-only dependency identified — all portable to a Linux VM or Docker container.
Processing 8K 360 footage is CPU/GPU-intensive (stitching + object detection), so realistic runtime
depends on what hardware the Proxmox box has (a GPU passthrough would matter for the AI
detection/tracking step); no benchmark numbers found for feasibility on modest hardware — flag as
**UNKNOWN**, worth a small pilot before committing.

---

## 5. Home Assistant angle

**CONFIRMED — no existing Home Assistant integration for Insta360.** Searches found only Home
Assistant's generic Camera integration (live-view/streaming cameras, not applicable to
after-the-fact 360 video file management) and Insta360's own import mechanisms (Studio "Import
Media," app "Auto Download Files" over Wi-Fi). No custom HA component, no HACS integration, nothing
in the Insta360 developer docs about Home Assistant or MQTT.

**LIKELY buildable as a thin wrapper, not a native integration**: since the Camera SDK (Section 2)
can trigger the camera and pull the file list over Wi-Fi from a script, and a Docker/Proxmox job
could poll the camera and auto-import new files, this could be exposed to Home Assistant as:
- A simple `command_line` or REST sensor/binary_sensor (e.g. "new footage ready" flag), and/or
- A script/automation triggered by HA that kicks off the pull-and-stitch pipeline.
This is a thin custom-script layer on top of the SDK/insv-stitch pipeline, not a ready-made
integration — reasonable "for completeness" item, not a phase-1 priority.

---

## Summary (see also the reply to product-manager)

Buildable now, no new tooling: manually re-targeting Deep Track's tracking box (app and Studio) to
choose a subject other than the stick-holder — confirmed to exist today.

Buildable with real effort, on Ed's own Linux hardware: a stitch → detect/track → reframe pipeline
using insv-stitch (confirmed working, X5-specific, Linux) plus an object-tracking library adapted for
equirectangular video, either rendering directly or (more fragile) writing `.insprj` keyframes for
Studio to finish. Needs an SDK application (X5 supported, ~1 week turnaround, cost/hobbyist terms
unconfirmed) only if camera control/native stitching quality is wanted; the ffmpeg/insv-stitch route
doesn't need SDK access at all.

Not realistic: Gyroflow for X5 (no 360 support, confirmed); relying on the Media/Camera SDK for the
reframe/keyframe logic itself (it doesn't expose that — confirmed absent from the API); treating the
`.insprj` route as a stable, official integration point (it's reverse-engineered and could break on
any Studio update).
