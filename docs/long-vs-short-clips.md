# Long Continuous Clips vs. Short Clips — What Fits Ed's "Let It Roll" Style

Author: insta360-software-expert agent. Date of research: 2026-09-26.

How to read this: **CONFIRMED** (read directly from an official Insta360
manual/spec page or a primary source), **LIKELY** (corroborated by
independent sources, not independently re-verified word-for-word), or
**UNKNOWN** (genuinely unclear or not found). This doc directly revisits the
"10-30 seconds per clip" advice in [`shot-recipes.md`](./shot-recipes.md)
§1, "Clip length: shoot short and single-purpose" — that advice was written
for a different priority (fast reframing/editing) than the one driving this
question (never missing a family moment, and catching things that happen
behind a 360 camera that you only notice later, like a turtle or shark
behind you while diving).

**Bottom line up front: for Ed's actual situation, the evidence supports
"let it roll" as the right default.** The X5's real limits are measured in
tens of minutes to hours (battery, heat), not seconds — so 10-30 second
clips solve a problem (easy editing) that isn't Ed's top priority, at the
direct cost of the thing he does care about (not fiddling with the camera,
not missing moments). See §6 for exactly where the old advice still applies
and where it doesn't.

---

## 1. Creator and community consensus, both sides

### The case for "let it roll" (long/continuous)

- GoPro's own official 360 shooting guide puts it plainly: with a 360
  camera, "it's not the camera operator calling the shots; you're grabbing
  everything at once, then shaping the story later." You "never have to
  aim, but always get the shot." — CONFIRMED, GoPro, "How to Shoot 360
  Content: A Comprehensive Guide," https://gopro.com/en/us/news/how-to-shoot-360-content-a-comprehensive-guide,
  accessed 2026-09-26 (undated).
- GoPro support confirms there's no built-in max/minimum recording time on
  360 cameras in this class — "you can record for hours if you'd like,"
  limited only by card and battery. — LIKELY, GoPro Community forum,
  https://community.gopro.com/t5/Cameras/360-Max-record-times/td-p/1071032
  (search-derived; direct fetch returned a 401).
- TechRadar frames 360 cameras as the "ultimate 'fire and forget' camera" —
  shoot first, pick angles later — specifically because reframing 360
  footage the old manual way is "a painful, frustrating slog," and
  Insta360's software tools exist to make that workable for "time poor (or
  simply plain lazy)" creators. — CONFIRMED (via Yahoo mirror), Sam
  Kieldsen, TechRadar/Yahoo, published 2025-05-03,
  https://tech.yahoo.com/cameras/articles/handy-insta360-x5-editing-tricks-130000920.html.
- Insta360's own travel-tips content makes the same pitch for travel/family
  footage, explicitly warning: **"Don't stop recording too quickly, as some
  of the best moments happen in-between."** — LIKELY (blocked at 403 on
  direct fetch, so via search summary), insta360.com/blog/tips/how-to-make-travel-videos.html.
- A real diver's account of the X5 confirms the practical payoff
  underwater: you can "enjoy your dive without having to concentrate on
  settings or worrying about framing the perfect shot," because framing
  happens in post. — CONFIRMED, Mark "Crowley" Russell, DIVE Magazine,
  "Insta360 X5 action camera dive bundle review," published 2025-12-19,
  https://divemagazine.com/underwater-photography/camera-gear/insta360-x5-action-camera-dive-bundle-review.
- The specific scenario Ed described — a turtle or shark behind you that
  you only notice later — is a real, named phenomenon in 360-camera
  community content, not a hypothetical: e.g. capturing "the whale shark
  that swam behind you when you were busy photographing something else."
  — LIKELY, Insta360 community-story content (date not confirmed),
  https://www.insta360.com/blog/community-stories/diving-with-sharks-360-cameras.html.

### The case for short, deliberate clips

- A snorkeling-focused reviewer explicitly argues against "let it roll" for
  that activity: "you are not going to want to turn the camera on and leave
  it on for your entire snorkel. You still need to have intention behind
  what you record. And it is best to keep the videos as short as possible."
  — CONFIRMED, tropicalsnorkeling.com, "Insta360 X5 For Snorkeling,"
  https://www.tropicalsnorkeling.com/insta360-x5-for-snorkeling/ (exact
  publish date not shown; site copyright reads 2026). **This directly
  contradicts the diver's account above** — two credible sources disagreeing
  on shooting style for water use specifically, not a hardware/software
  limitation either way.
- General (non-360-specific) filmmaking advice favours clips of at least
  ~10 seconds and "slightly longer than you think you need" — closer in
  spirit to the old 10-30s guidance, but this is generic editing-craft
  advice, not advice written for 360 cameras or for Ed's "don't want to
  fiddle" priority. — LIKELY, general filmmaking guidance surfaced via
  search, specific single source not independently confirmed.
- Real users do report friction editing X5 footage on the phone regardless
  of clip length (one Reddit search snippet: "isn't as intuitive or fast as
  some reviews have suggested") — an argument for keeping files
  *manageable*, but not specifically an argument for short over long
  clips. — LIKELY, search-derived, original thread URL not captured.

**Verdict on this section:** no creator or community source found argues
specifically that short clips beat continuous rolling *for casual
family/vacation documentation*. The "shoot short" voices are either
activity-specific (one snorkeling reviewer's personal preference, directly
contradicted by another diver's account) or generic filmmaking pacing
advice aimed at a different goal (deliberate composition) than Ed's.

---

## 2. X5 hardware/software limits on long continuous recording

### Battery life by mode

Official Insta360 lab figures (77°F/25°C, Wi-Fi Auto, Standard Bitrate,
AdaptiveTone off, AI Highlights Assistant off, screen off while recording):

| Mode | Battery | Runtime |
|---|---|---|
| 8K@30fps | Standard | **~93 min** |
| 5.7K@30fps | Standard | **~135 min** |
| 5.7K@24fps | Standard (firmware v1.3.0+) | **~208 min** |
| 5.7K@24fps, Endurance Mode | Ultra Battery | **~235 min (≈3h55m)** |

— CONFIRMED, Insta360 X5 manual, "Battery Level & Battery Life,"
https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/duration/battery-life,
fetched 2026-09-26.

**PureVideo mode has no published X5-specific runtime figure — UNKNOWN.**
For comparison, Insta360's newer X6 publishes PureVideo 8K@30fps at ~95
minutes, almost identical to its plain 8K@30fps figure (~140 min is X6's
non-PureVideo number at a different resolution, so this isn't a clean
apples-to-apples comparison, but it suggests PureVideo's extra AI
processing doesn't drastically change runtime versus the equivalent
resolution). Treat X5 PureVideo as **roughly similar to standard
video at the same resolution**, not confirmed.

Real-world corroboration: one diver reports 5.7K30 "easily lasted a
70-minute dive with continuous operation," while 8K was "definitely in the
red zone after a 60-minute dive" — roughly matching the lab figures once
real-world conditions (warmer water, screen interactions) are factored in.
— CONFIRMED, DIVE Magazine review (above), 2025-12-19.

Charging: ~80% in ~20 minutes, full charge in ~35 minutes via USB-C fast
charging. — LIKELY, corroborated across multiple retailer/spec pages, not
independently fetched from Insta360 directly.

### Does the X5 split or segment long recordings?

**No evidence it does, in practice.** Two supporting facts:
- The X5 records 360 video as a **single .insv file per session** (a
  simplification vs. some older Insta360 cameras that wrote two files, one
  per lens). — LIKELY (blocked at 403 on direct fetch; via search summary),
  https://www.insta360.com/blog/tips/how-insv-vs-lrv-video-files-transfer-workflow.html.
- Cards are formatted **exFAT**, not the older FAT32 that caps files at
  4GB — so the classic "action camera splits every few minutes" behaviour
  some cheaper cameras have does **not** apply here. — CONFIRMED, Insta360
  X5 manual, "File Storage," https://onlinemanual.insta360.com/x5/en-us/camera/basicuse/filestorage,
  fetched 2026-09-26.
- There's an **open, unfulfilled feature request** on Insta360's own forum
  asking Insta360 to *add* an option to split long recordings into
  segments — which implies the current X5/X4-generation cameras don't do
  this automatically today (it's a wanted future feature, not existing
  behaviour). — LIKELY, Insta360 Community Forum, https://forums.insta360.com/section/17/post/3085/
  (thread body only partially retrievable).
- For context: the much older One X had a hard ~30-minute cap at 5K that
  force-restarted into a new file. That's a different, older camera — the
  X5's hardware and battery have moved on — and no equivalent cap is
  documented for the X5. **In practice, battery life (65-235 min depending
  on mode) will end any single continuous take long before an undocumented
  software ceiling would.**

### Overheating — hot weather / direct sun (Maui) and the dive case

Confirmed mitigation advice, directly from the official troubleshooting
page (read 2026-09-26): overheating triggers an on-screen warning and
automatic shutdown; contributing factors named are 8K's higher power draw,
screen-on operation, an active app/Wi-Fi connection, charging while
recording, and general heat from the newer/larger sensor. Insta360's own
advice: **avoid direct sunlight, hot vehicles, or enclosed bags while
connected to the app**; shoot in shaded/ventilated spots where possible;
charge in a cool ventilated area; shoot 5.7K30 rather than 8K to cut heat;
give the camera a 5-10 minute rest roughly every 30 minutes of continuous
use; optional accessories exist (Cooling Screen Protector, Thermo Grip
Cover). — CONFIRMED, https://onlinemanual.insta360.com/x5/en-us/troubleshooting/heating/over-heating.

**A specific "expect a shutdown after about 65 minutes" figure surfaced
repeatedly in search results tracing back to this same official
troubleshooting-page family (shared wording across X3/X4/X5), but did not
appear verbatim in a direct fetch of the X5-specific page — tag this
LIKELY, not confirmed.** Treat ~60-65 minutes as a reasonable worst-case
estimate for 8K, direct sun, app-connected use, not a guaranteed number.

**Dive case:** no source — official or independent — documents heat buildup
specifically inside the Invisible Dive Case as a distinct problem. The one
dedicated dive-bundle review found doesn't mention case overheating at all;
its limiting factor was battery, not heat (8K "in the red zone" after 60
minutes underwater). Water around the case plausibly helps dissipate heat
versus open-air hot-sun use, but this is inference, not a sourced claim.
**UNKNOWN either way — genuinely undocumented.**

General industry context worth keeping in mind: 360 cameras run two
lenses/sensors and stitch in real time, so heat is a structural challenge
for the category — but "in real-world use, overheating is rarely an issue
if you're shooting normally (walking, biking, handheld)." The worst-case
combination is **static + 8K + direct sun + app connected**, not casual
handheld family shooting. — LIKELY, threesixtycameras.com, "Insta360 X5
Problems," search-derived.

**For Maui specifically:** the practical takeaway is to avoid leaving the
camera connected to the phone app while sitting in direct sun (e.g. on a
beach towel between shots), and to shoot 5.7K rather than 8K for long
outdoor stretches — both double as battery-life and heat-safety choices.

### Card space per hour

Max published bitrate across most high-res modes: **180 Mbps**. — CONFIRMED,
Insta360 X5 manual, "Shooting Specs," https://onlinemanual.insta360.com/x5/en-us/specs/shooting-specs,
fetched 2026-09-26. At that ceiling: 180 Mbps ÷ 8 = 22.5 MB/s × 3600s ≈
**~81 GB per hour**. Insta360 doesn't publish a separate per-resolution
GB/hour table, so this is a calculated ceiling figure (LIKELY applicable to
both 8K and high-bitrate 5.7K, since both may share the same 180 Mbps cap
rather than 5.7K being meaningfully smaller) rather than an
Insta360-published number.

Card requirement: **microSDXC, exFAT, UHS-I V30 or faster** (sustained 30
MB/s write), up to 1TB supported. — CONFIRMED, same manual page.
Independent buying guides suggest 256GB as "the best balance of price,
safety and convenience" for most users, 512GB-1TB for extended 8K sessions.
— LIKELY, droneandcam.com SD card guide.

**Practical translation:** at ~81 GB/hr, a 256GB card holds roughly **3
hours**, 512GB roughly **6 hours**, 1TB roughly **12 hours** of high-res
footage — comfortably a full day of family shooting in 5.7K. **Battery,
not card space, is the tighter constraint on any single continuous take.**

---

## 3. Low-effort ways to find the good moments afterward

- **Voice "Mark That" command:** the X5 supports 5 voice commands
  (photo, start/stop recording, **"Mark That,"** shutdown) within ~1.2m
  range, in English/Chinese/Japanese, working even with the screen off.
  — CONFIRMED, Insta360 X5 manual, "Voice Control,"
  https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-function/voice-control,
  fetched 2026-09-26. Whether the mark is later visible/usable while
  editing wasn't documented on that page directly, **but this project's own
  earlier research (`research-effects-and-workflows.md` §2.2) already
  answers it: markers (including flag/voice/twist marks) are written into
  the .insv file itself, and Insta360 Studio displays them on the timeline**
  — so the mark is genuinely useful later, not just a recording-time
  convenience. — CONFIRMED (cross-referenced within this project), citing
  the X5 manual's AI Highlights Assistant page and Ben Claremont's "hidden
  settings" piece.
- **AI Highlights Assistant:** automatically detects and flags exciting
  moments *during* recording (not user-triggered), then delivers a
  ready-made highlight reel in the app under Album > Memories once
  reconnected to the phone. No documented recording-length limit; works up
  to 60fps at any 360 resolution. **Important trade-off: it's incompatible
  with Endurance Mode, Stereo Recording, and 360 Audio** — so stretching
  battery life via Endurance Mode means losing this automatic help on that
  footage. — CONFIRMED, Insta360 X5 manual, "AI Highlights Assistant,"
  https://onlinemanual.insta360.com/x5/en-us/operating-tutorials/highlight-features/ai-highlights-assistant.
- **App Auto Edit / AI Edit:** analyzes up to 100 media files using smart
  framing, scene recognition, and music matching. **Has a total-footage
  ceiling that scales with the phone**: up to **60 minutes total** on
  high-end phones (iPhone 12+, Snapdragon 8/888/778G+, Dimensity 8250+),
  under **20 minutes total** on lesser devices. Minimum clip length 4s
  (360)/2s (flat); some capture types unsupported (Interval/Burst photos,
  Starlapse, single-lens Me Mode); initial output capped ~3 minutes
  (expandable). — CONFIRMED, Insta360 app manual, "Auto Edit,"
  https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/auto-edit.
  **This is the one real constraint on pure "let it roll" for Ed:** a
  90+ minute continuous take from a full charge exceeds even the high-end
  60-minute ceiling and needs pre-trimming before Auto Edit can use it.
- **Auto Frame (app and Studio):** requires source video **longer than 10
  seconds** and a genuine 360 clip (not Timelapse/Bullet Time/Slow-Motion).
  **No documented maximum length** — Insta360 doesn't publish an upper
  bound, and no independent test of a 20-60 minute clip was found.
  — CONFIRMED (10s minimum, no stated max), Insta360 Studio manual, "Auto
  Frame," https://onlinemanual.insta360.com/studio/en-us/operation-guide/edit-function/auto-frame.
  **Real-world scaling to very long clips is UNKNOWN** — worth Ed simply
  testing on his own footage rather than assuming either way.

---

## 4. Transfer and processing time for large files

- **WiFi transfer** (camera-to-phone in-app) is the most convenient method
  but explicitly **not the fastest** for large files — fine for quick
  previews/short clips, slower for long high-res takes. — CONFIRMED
  (general characterization), Insta360 X5 manual, "File Transfer" family,
  via search synthesis.
- **Wired transfer** (USB-C cable, or the optional Quick Reader accessory
  with USB-3.0) is "dramatically" faster and is the recommended route for
  big files. — LIKELY, same manual family.
- **Processing/export time scales with clip length and resolution**, and
  Insta360's own troubleshooting guidance is blunt about it: *"larger files
  simply take longer to process, particularly on older phones or
  devices... if exports feel slow at first, that's normal."* No specific
  minutes-per-hour-of-footage benchmark is published. — CONFIRMED
  (qualitative statement, LIKELY-sourced via search synthesis); the
  quantified benchmark itself is **UNKNOWN**.
- **Known friction points with large files:** corrupted-file import
  failures (Insta360 has a "File Repair" tool for this), special
  characters/emoji in file paths causing crashes, outdated app/Studio
  versions or graphics drivers causing lag, and a documented fix of
  disabling "Smoothing" playback and enabling Hardware Acceleration to ease
  memory/processing strain on long files. — CONFIRMED, Insta360 app/Studio
  troubleshooting pages (crash-while-recording, media-import-issue,
  export-slow).

---

## 5. Reserved for length: none needed — synthesis below

---

## 6. The "let it roll" workflow — and where the old advice still applies

**For Ed's actual situation — family time, doesn't want to fiddle with the
camera mid-moment, edits later, wants to catch surprises like marine life
behind him while snorkeling in Maui — the evidence supports "let it roll" as
the default.** This is exactly the use case 360 cameras and Insta360's own
product design are built around (§1), the X5's real constraints are
measured in tens of minutes to hours rather than seconds (§2), and
Insta360 ships tools (AI Highlights Assistant, voice marking, Auto Frame)
specifically to make reviewing long rolls workable — which is Insta360
validating this as a supported workflow, not an edge case.

### A practical "let it roll" workflow for Ed

1. **Default to 5.7K30, not 8K, for casual family/vacation rolling.** Roughly
   doubles battery life (135 min vs. 93 min) and reduces heat/overheat risk
   — the two real limits on a continuous take. Save 8K for moments Ed
   specifically wants maximum detail (a vista, a posed group shot).
2. **Use a 256-512GB V30 card.** Card space won't be the constraint —
   roughly 3-6+ hours of headroom at 5.7K, more than any single battery
   charge will use.
3. **Let battery swaps be the natural "chapter breaks,"** not a deliberate
   stop/restart for editing convenience. This still gives Ed
   individually-manageable files (65-235 minutes each depending on mode)
   without requiring him to "perform" for the camera or interrupt a family
   moment to hit record again.
4. **Say "Mark That" out loud when something notable happens** — surfing
   in, a kid's reaction, a turtle appearing. It costs nothing in the
   moment and the mark is preserved in the file and shown on Studio's
   timeline for review later (§3) — this is the single cheapest habit that
   makes long-clip editing faster, and needs no new tool.
5. **Keep AI Highlights Assistant on** by default, and consciously choose
   Endurance Mode only on days battery is the bigger risk than losing
   automatic highlight-flagging (they're mutually exclusive) — a real,
   worth-knowing trade-off, not a bug.
6. **In hot/sunny Maui conditions**, avoid leaving the camera connected to
   the phone app while sitting in direct sun; give it occasional shade
   breaks. This is about avoiding a forced overheat shutdown, not about
   shooting shorter clips.
7. **Before running a long roll through Auto Edit, check its length** —
   the app's 20-60 minute total-footage ceiling (phone-dependent) means a
   90+ minute take needs a rough pre-trim (even just "keep the middle
   45 minutes") before auto-editing can use it. This is a five-minute task
   on the phone, not a reason to shoot short in the first place.

### Where the old 10-30 second advice still holds

- **Effect shots genuinely need to be short and deliberate** — Bullet
  Time, Dolly Zoom, and similar Shot Lab/AI Warp effects are distinct
  camera *modes* requiring a specific motion or a short input clip (AI
  Warp itself only accepts 4-15 second inputs); they can't be extracted
  after the fact from a long continuous roll. If Ed wants these specific
  effect shots on the Maui trip, he does need to consciously stop, switch
  modes, and shoot short on purpose — this is the one place `shot-recipes.md`'s
  guidance is straightforwardly still correct.
- **Deliberately short, single-subject clips are still the fastest to
  edit** if Ed's goal for a specific piece of footage really is "reframe
  this cleanly in two keyframes" (per `shot-recipes.md`'s original framing)
  — that's still true. It's just not Ed's stated priority for general
  family/vacation rolling, where "don't miss it" beats "edit it fast."

### Where the old advice is simply wrong for Ed's situation

The original rule — "stop and restart rather than 'just keep it rolling'"
— optimizes for editing convenience and precise framing, at the direct cost
of the thing Ed actually said he wants: not fiddling with the camera while
present with his family, and not missing moments (including the
behind-the-camera surprises that are 360's whole advantage over a normal
camera). Given the X5's real ceilings are tens of minutes to hours, not
seconds, forcing 10-30 second clips would mean constantly starting and
stopping the camera in exactly the way Ed has said he doesn't want to — for
a benefit (faster keyframing) that matters less to him than not missing the
moment. **For Ed's rolling family-time and Maui-trip use case, this part of
the earlier advice should be set aside**; it remains good advice only for
the narrower effect-shot cases noted above.

---

## Notable gaps (UNKNOWN, worth Ed just testing rather than more research)

- Exact PureVideo-mode battery life on the X5 specifically (inferred from
  the X6's PureVideo figure, not confirmed for X5).
- Whether the ~65-minute overheat-shutdown figure is accurate for the X5
  specifically, versus shared troubleshooting-page wording across the
  X3/X4/X5 family.
- Whether the dive case causes any heat buildup of its own, versus helping
  dissipate heat compared to open-air hot-sun use.
- Whether Auto Frame meaningfully slows down or degrades on a 20-60+ minute
  clip — untested by any source found.
- Whether 5.7K and 8K genuinely differ in per-mode bitrate, or share the
  same 180 Mbps ceiling (only one bitrate figure is published).

---

## Sources

- GoPro, "How to Shoot 360 Content: A Comprehensive Guide," https://gopro.com/en/us/news/how-to-shoot-360-content-a-comprehensive-guide (accessed 2026-09-26)
- GoPro Community, "360 Max record times," https://community.gopro.com/t5/Cameras/360-Max-record-times/td-p/1071032
- Sam Kieldsen, TechRadar/Yahoo, "These handy Insta360 X5 editing tricks address my biggest problem with 360 action cameras," 2025-05-03, https://tech.yahoo.com/cameras/articles/handy-insta360-x5-editing-tricks-130000920.html
- Insta360 blog, "How to Make a Travel Video," https://www.insta360.com/blog/tips/how-to-make-travel-videos.html
- Mark "Crowley" Russell, DIVE Magazine, "Insta360 X5 action camera dive bundle review," 2025-12-19, https://divemagazine.com/underwater-photography/camera-gear/insta360-x5-action-camera-dive-bundle-review
- Insta360 blog/community stories, "Diving With Sharks — And 360 Cameras," https://www.insta360.com/blog/community-stories/diving-with-sharks-360-cameras.html
- tropicalsnorkeling.com, "Insta360 X5 For Snorkeling," https://www.tropicalsnorkeling.com/insta360-x5-for-snorkeling/
- Insta360 X5 manual, "Battery Level & Battery Life," https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/duration/battery-life — read directly, 2026-09-26
- Insta360 X5 manual, "Camera Stops Recording due to Heating or Overheating," https://onlinemanual.insta360.com/x5/en-us/troubleshooting/heating/over-heating — read directly, 2026-09-26
- Insta360 X5 manual, "File Storage," https://onlinemanual.insta360.com/x5/en-us/camera/basicuse/filestorage — read directly, 2026-09-26
- Insta360 X5 manual, "Shooting Specs," https://onlinemanual.insta360.com/x5/en-us/specs/shooting-specs — read directly, 2026-09-26
- Insta360 X5 manual, "Voice Control," https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-function/voice-control — read directly, 2026-09-26
- Insta360 X5 manual, "AI Highlights Assistant," https://onlinemanual.insta360.com/x5/en-us/operating-tutorials/highlight-features/ai-highlights-assistant
- Insta360 app manual, "Auto Edit," https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/auto-edit
- Insta360 Studio manual, "Auto Frame," https://onlinemanual.insta360.com/studio/en-us/operation-guide/edit-function/auto-frame
- Insta360 blog, "How Insta360 Video Files Work (INSV vs LRV)," https://www.insta360.com/blog/tips/how-insv-vs-lrv-video-files-transfer-workflow.html
- Insta360 Community Forum, "Allow option to split long videos into smaller segments," https://forums.insta360.com/section/17/post/3085/
- droneandcam.com, "Which SD Card Should I Choose for the Insta360 X5," https://droneandcam.com/en/post/which-sd-card-should-i-choose-for-the-insta360-x5-complete-guide-to-speeds-capacities-and-formats/
- threesixtycameras.com, "Insta360 X5 Problems: The Most Common Issues," https://threesixtycameras.com/360-camera-guides/insta360-x5-problems-the-most-common-issues
- This project's own [`research-effects-and-workflows.md`](./research-effects-and-workflows.md) §2.2, for the marker-to-Studio-timeline behaviour
- This project's own [`shot-recipes.md`](./shot-recipes.md) §1, the earlier short-clip advice this doc revisits
