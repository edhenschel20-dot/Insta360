---
title: Studio's AI Tools — Auto Frame Batch, Motion ND, Waypoint Editor
tags: [editing, studio, desktop, ai]
---
# Studio's AI tools: Auto Frame batch, digital Motion ND, Waypoint editor

Desktop-only shortcuts in Insta360 Studio that turn one long clip into several finished angles with almost no manual keyframing. Deep Track works the same way here as in the phone app (see [Deep Track](deep-track.md)) — this page covers the three tools that are Studio-specific.

This is the tool for "kids at the table": one long clip, one exported angle per child, done as a batch instead of one at a time.

## Auto Frame — batch export
1. Right-click the clip in Studio and choose **Start Autoframe** (menu names vary by app version).
2. Studio outputs a separate 16:9 clip per person or moving object it detects, plus one combined clip.
3. Select several of the results and batch-export them together, rather than exporting one at a time.
4. Same caveat as the phone app's [Auto Frame and AI Edit](auto-frame-and-ai-edit.md): it prefers people over the action, so treat the output as a fast first pass to pick through, not a final answer for anything you care about — it's quickest to discard the "selfie/person" clips you don't want and keep the rest.

## Digital Motion ND
1. Media processing menu › **Motion ND**.
2. A starting point that's worked well: **85 spread / 30 intensity**.
3. This is a software approximation of a physical ND filter's motion blur — no filter to buy or carry, applied after the fact instead of at shoot time.
4. Useful for hyperlapse-style clips (see [Direction-Lock Carlapse](../effects/direction-lock-carlapse.md)) where you want the motion-blur look but didn't fit a physical ND filter before you started.

## Waypoint editor
1. Right-click the clip to set waypoints along it.
2. Select all the waypoints and apply fade-in/fade-out between them.
3. The result reads like a robotic-crane camera move — smooth ramps between fixed points — without hand-timing keyframe eases yourself.
4. Compare with [Keyframes with easing](keyframes-with-easing.md), the phone-app equivalent for a deliberate camera move; the Waypoint editor is the faster, Studio-only version when you're already working on desktop.

## When to reach for Studio instead of the phone app
- A big batch of clips to sort through at once (Auto Frame batch export).
- You want the ND motion-blur look without a physical filter.
- A multi-point camera move across a longer clip, where setting waypoints is faster than adding several keyframes by hand on the phone.

## Sources
- Orlando Nelson, X5 AI features in Studio, 2026 update, 2026-01-20, https://www.youtube.com/watch?v=4C_SgSFTTcc (checked 2026-09-26)
