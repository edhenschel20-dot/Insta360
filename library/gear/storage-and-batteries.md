---
title: Storage and Batteries
tags: [gear, storage, battery, trip-planning]
---
# Storage and batteries: trip planning

A general method for working out how many cards and batteries a trip needs,
before you go.

## Steps
1. **Estimate hours of footage per activity.** List your planned activities
   (diving, driving, events, general rolling) and a rough number of hours
   for each.
2. **Multiply by about 80 GB per hour** as a worst-case estimate. This is
   the ceiling at the X5's maximum published bitrate (180 Mbps ≈ 81 GB/hr) —
   your real footage will usually be smaller, but plan storage against the
   worst case so you don't get caught out.
3. **Measure your own real GB/hour** from one day's shooting once you're on
   the trip (or in a practice shoot beforehand) — check the file sizes
   against how long you actually recorded, and use that number to refine
   the rest of the trip's storage plan.
4. **Check battery runtime per mode** against how long you'll shoot in one
   sitting without a break to swap batteries.
5. **Plan for heat.** The camera can shut down from overheating in hot sun,
   especially at 8K with the app connected. Shoot 5.7K rather than 8K for
   long outdoor stretches, avoid leaving it connected to the phone app in
   direct sun, and give it shade breaks.
6. **Plan charging.** USB-C fast charging gets you to roughly 80% in about
   20 minutes, full in about 35 — useful for topping up between activities
   rather than needing a full battery swap every time.

## Worked example
| Activity | Hours | GB (@ 80 GB/hr) | Notes |
|---|---|---|---|
| General rolling (5.7K30) | 6 hrs | ~480 GB | Battery: ~135 min per charge at this res |
| Diving (5.7K30) | 3 hrs | ~240 GB | Battery can't be swapped inside the dive case |
| Driving / TimeShift | 2 hrs | ~20 GB | TimeShift is roughly a tenth the size of normal video |
| **Total (rough)** | | **~740 GB** | Round up — this is a worst case, not your real number |

## Tips
- Battery life by mode (lab figures, may run lower in real-world heat):
  roughly 93 min at 8K30, 135 min at 5.7K30, up to ~235 min at 5.7K24 with
  Endurance Mode on Ultra Battery. Endurance Mode trades away AI Highlights
  Assistant, so it's a real trade-off, not free extra runtime.
- Let battery swaps be the natural "chapter breaks" in your day rather than
  a deliberate stop for editing convenience — this fits how you already
  shoot.
- See [memory cards](memory-cards.md) for which cards to buy and how many.

## Sources
- Insta360 X5 manual, "Battery Level & Battery Life" (checked 2026-09-26)
- Insta360 X5 manual, "Shooting Specs" (checked 2026-09-26)
- Insta360 X5 manual, "Camera Stops Recording due to Heating" (checked 2026-09-26)
- This project's own `docs/long-vs-short-clips.md` (checked 2026-09-26)
