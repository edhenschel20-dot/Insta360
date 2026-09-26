---
title: Night and Low Light
tags: [night, settings, low-light]
---
# Night and low light

For evening walks, dark venues, and city lights after sunset. PureVideo is
built specifically for this — it changes how the shot is captured, not just
brightness afterwards.

## Settings
| | General night | City lights (signage, streetlights) |
|---|---|---|
| Mode | PureVideo | PureVideo |
| Res/FPS | 4K or 5.7K, 30fps | 5.7K30 |
| EV | −0.3 to −0.7 | −0.7 |
| ISO | Auto, capped ~1600 (or manual 400–800 on a tripod) | same |
| White balance | Manual 3200–4500K, or Auto if the scene is mixed/moving | Manual 3200–3500K |
| Colour | Standard | Standard |
| Sharpness | Medium | Medium |

## PureVideo EV — sources disagree
Creators give different starting points for PureVideo's exposure
compensation, and rather than silently pick one, here's what each says
(checked 2026-09-26):
- Best360: **−0.7**, with white balance locked after an initial auto read
- Eat Sleep 360: **−0.3**
- Frank Family Fun: **−1**
- Learn Online Video: **−3**, for very dark/neon scenes specifically

Read across these as a rough guide: **start at −0.7 and go darker toward
−3 for neon/bright signage, or lighter toward −0.3 for a more natural
everyday look.** PureVideo has no manual exposure control at all — if it's
not giving you what you want, switch to manual: 1/50–1/60 shutter, ISO set
by checking the histogram (Gaba_VR's approach), rather than fighting the
auto EV.

**Technique:** the longest stick you have, held with two hands, helps
steady the slower effective shutter speed at night. In the edit: shadows
up, highlights down, saturation up is a good starting recipe for night
clips — see [Colour in the phone app](../editing/colour-in-the-app.md).

**Anti-flicker:** check both the camera's own anti-flicker setting and
Studio's export-time anti-flicker option if you see banding under
artificial lights — they're separate controls.

**Gimbal comparison (mention, not a recommendation):** one creator found
PureVideo can look soft next to gimbal footage, due to its denoising. Not
a reason to add a gimbal to the kit — just a known trade-off of the mode.

## Tips
- The negative EV keeps detail in lights (streetlamps, signs, candles)
  instead of letting them blow out to white blobs. Shadows are easy to
  brighten later; blown highlights aren't.
- A mini tripod or planted stick beats handheld for anything longer than a
  casual clip — slower effective shutter at night makes hand-shake obvious.
- Don't shoot 8K in low light — more noise, and PureVideo's support for 8K
  is inconsistent. Stick to 4K/5.7K.
- Reportedly around a 65-minute overheat-shutdown risk in demanding
  conditions (app-connected, direct heat) — not usually an issue for normal
  handheld night shooting. Check in the app if you're on a long session.

## Sources
- [X5 PureVideo tutorial](https://onlinemanual.insta360.com/x5/en-us/operating_tutorials/capture-preview/shooting-mode/purevideo) (checked 2026-09-26)
- [Best settings for low light with the X5](https://droneandcam.com/en/post/best-settings-for-shooting-in-low-light-with-the-insta360-x5/) (checked 2026-09-26)
- This project's own `docs/settings-presets.md` (checked 2026-09-26)
