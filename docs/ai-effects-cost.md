# The Cost of the Insta360 App's AI Effects

Author: insta360-software-expert agent. Date of research: 2026-09-26.

How to read this: every claim is tagged **CONFIRMED** (read directly from an
official Insta360 page or a primary source), **LIKELY** (corroborated by
independent sources but not independently re-verified word-for-word, often
because Insta360's own blog blocked automated fetching with a 403 error), or
**UNKNOWN** (genuinely unclear — I could not find a source, or sources
conflict). Insta360's AI-effects pricing changes often and isn't published in
one clean place, so re-check the numbers in-app before relying on them if
this doc is more than a couple of months old.

**Headline finding: there appear to be two different generative AI features
in the app today, with two different (and differently documented) free
allowances, and Ed's "about one free generation a day" doesn't cleanly match
either one on paper.** See §2 for why, and the one 10-second check in the app
that resolves it.

---

## 1. What AI effects exist right now, and which cost money

The Insta360 app has several things that could reasonably be called "AI,"
and only some of them touch the credit/diamond system. Knowing which is
which is the single most useful thing in this doc.

| Feature | What it does | Costs credits? |
|---|---|---|
| **AI Warp** (Shot Lab) | Generative video transformation: pick a clip (4-15s), apply a preset style (Cyberpunk, Sci-Fi, Space, Anime, seasonal styles) or a free-text prompt ("Custom prompt effect"), or paint over an area ("Custom AI effect"). Output up to 4K flat / 5.7K 360, always carries a permanent "AI Generation" watermark. **This is almost certainly the feature Ed used for the wave-crashing-cubicles effect**, or a close relative of it (see §2). | **Yes — metered** |
| **"AI Effects"** (Edit tab, launched ~April 2026) | A separate, newer section next to Shot Lab: more experimental generative transformations (matrix-style effects, action overlays). Workflow: pick an effect → "Use this theme" → pick a clip → ~1 minute of processing. | **Yes — metered, and more tightly limited than AI Warp (see §2)** |
| **360 Templates** (Edit tab, ~April 2026) | Structured whole-edit templates using camera-movement styles (globe zooms, "planet spinner" effects) rather than generating new imagery. One-tap: pick clips, AI assembles the edit. | **LIKELY free/unlimited** — described as a different, non-generative category from "AI Effects" by the one source that covers it |
| Deep Track, Freeze Go, Auto Frame, Movement templates | Computer-vision tracking/reframing and preset camera moves. No new pixels generated — these reposition/crop the existing 360 sphere. | **LIKELY free/unlimited** — standard part of the app, no credit mentioned anywhere |
| Shot Lab non-AI-Warp effects (Sky Swap, Clone Trail, Ghost Town, Bullet Time, Tiny Planet, etc.) | One-tap creative templates, covered in this project's `research-effects-and-workflows.md`. | **LIKELY free/unlimited**, with one loose end: Sky Swap is described elsewhere as "cloud-based AI," and no source explicitly confirms it shares no cost with AI Warp. Treat as free but worth a glance in-app. |
| AI Edit / Auto Edit ("FlashCut"-style) | Scans your clips and auto-assembles a themed multi-clip edit with music/transitions. | **CONFIRMED free** — documented as a standard editing function, not a paid one |
| Insta360+ "Moments" / "Moments Lite" | A *different* cloud feature (part of the Insta360+ subscription, not Shot Lab) that revisits and auto-curates your backed-up footage library. Also uses the word "credit," which is a separate pool from AI Warp's diamonds. | Paid via subscription — **LIKELY not usable for AI Warp/AI Effects generations** (see §3) |

Sources: Insta360 official app manual, "AI Warp," fetched 2026-09-26,
https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/al-magician
— CONFIRMED, read directly. Ben Claremont, "3 Quiet Insta360 App Updates You
Might Have Missed," published 2026-04-24,
https://www.benclaremont.com/blog/3-quiet-insta360-app-updates-you-might-have-missed
— CONFIRMED, read directly (this is the only source found describing "AI
Effects" and "360 Templates" as distinct features). Panoee, "Insta360
Software: The Ultimate Guide," updated 2026-06-02, https://panoee.com/insta360-software
— LIKELY (describes core app features as free, doesn't name every template).

---

## 2. The exact free allowance — and the gap in Ed's own experience

**AI Warp: 3 free generations per day**, resetting at 8:00 AM Beijing Time
(roughly 5pm Pacific / 8pm Eastern the previous US day — check the in-app
countdown for your exact local reset, since I could not verify how it
handles daylight saving). After the free 3, each further generation costs
**20 diamonds** (Insta360's in-app virtual currency).
— **CONFIRMED**, read directly from the official manual page above, verbatim:
*"3 free generations per day. The number of free generations will be reset at
8:00 (Beijing Time) the next day... After using up the free generations,
each generation costs 20 diamonds."*

**"AI Effects" (the newer Edit-tab feature): limited to "just three total
uses"** at its April 2026 launch, described by the one source covering it as
"quite restrictive" — note the wording is *three total*, not *three per day*.
— **LIKELY**, Ben Claremont, 2026-04-24 (above), read directly. I found no
official Insta360 page documenting this feature's limit or confirming
whether it has since been changed (loosened to a small recurring allowance,
for example) between April and September 2026.

**Why this matters for Ed:** his own observation — "about one free generation
a day" — doesn't cleanly match either documented number. Two explanations
are plausible:
1. He's using the newer "AI Effects" feature (not AI Warp), which is
   separately and more tightly rationed, and its current (Sept 2026) limit
   simply isn't published anywhere I could find.
2. A "Full AI effect" generation (one of AI Warp's three sub-modes, alongside
   "Custom AI effect" and "Custom prompt effect") may be more compute-heavy
   and could be throttled differently — no source confirms or rules this out.

**The fastest way to resolve this is in the app itself**, not more web
research: Insta360's own UI typically shows a running count ("2/3 free
today," etc.) right on the AI Warp/AI Effects screen. Ed should screenshot
which exact feature name appears when he taps the wave-crashing-style effect
— that single check settles which allowance actually applies to him, more
reliably than anything found online.

---

## 3. Paid options

### Insta360+ subscription

X5 owners can only buy the **Premium** tier (the cheaper Essentials/Classic
tier is Ace Pro 2 / GO Ultra only). — CONFIRMED, store.insta360.com/product/insta360plus,
fetched 2026-09-26.

**Premium pricing (USD), confirmed via the Insta360 App Store listing:**

| Storage | Monthly | Yearly |
|---|---|---|
| 200 GB | $2.99 | $29.99 |
| 1 TB | $8.99 | $89.99 |
| 2 TB | $11.99 | ~$119.90 (yearly = 10× the monthly rate — Insta360's stated annual-discount rule) |

— CONFIRMED for monthly figures and the 200GB/1TB yearly figures (read
directly from the Apple App Store listing for the Insta360 app,
https://apps.apple.com/us/app/insta360/id1491299654, fetched 2026-09-26).
The 2TB yearly figure is **LIKELY** — not seen as a literal line item, but
follows the confirmed rule (stated independently via WebSearch, 2026-09-26)
that "paying annually will cost the same as paying monthly for 10 months."

**What Premium includes:** cloud auto-backup, cloud editing & export, 360
online playback, plus a monthly allotment of **"Moments Lite" credits** (1
credit/month on 200GB and 1TB tiers, 2 credits/month on 2TB) for the
separate cloud "Moments" auto-highlight feature.
— CONFIRMED that this table exists on the official product page, fetched
2026-09-26. **Important: I could not find anywhere that Insta360 states these
Moments Lite credits can be spent on AI Warp or AI Effects generations** —
every description ties them to the Moments auto-curation tool specifically,
which is a different feature (it revisits your existing footage library,
rather than generating a fictional scene). Treat Insta360+ as **not** a
lever for more AI Warp/AI Effects generations unless Ed confirms otherwise
in-app — **LIKELY**, based on the absence of any stated link, not a direct
denial from Insta360.

### AI Warp "Diamonds" (pay-as-you-go, no subscription)

Diamonds are Insta360's separate in-app virtual currency; 20 diamonds buys
one AI Warp generation beyond the free 3/day.
— CONFIRMED that the system exists and costs 20 diamonds/generation (official
manual, above). **The exact USD price of a diamond top-up pack is UNKNOWN** —
Insta360's own support copy (titles found via search but blocked at 403 on
direct fetch: "About Diamonds" and "Insta360 Diamonds Top Up Agreement",
insta360.com/support/supportcourse?post_id=20754 and ...20755) reportedly
says only that Insta360 "independently determines" diamond pricing based on
region/promotions, shown at the point of purchase in-app. No standalone
"Diamond pack" line item appeared in the Apple App Store listing either — it
looks like diamonds are sold through an in-app store screen rather than as a
normal App Store in-app purchase. **Ed needs to open the in-app "Top Up
Diamonds" screen once to see the real price** — this is the single biggest
number missing from this report.

### Did buying the X5 include a trial?

**Two separate things exist:**
- A **first-ever-subscriber 30-day free trial** of Insta360+ (any tier: 200GB,
  1TB, or 2TB), available to X2/X3/X4/X4 Air/**X5**/X6/Ace Pro 2/GO Ultra
  owners, as long as the account has never subscribed or redeemed free
  service before, claimed via the app's "Me" tab (app v2.3.0+), auto-renews
  at full price unless cancelled. Exclusive to App Store/Google Play (not
  the Insta360 web store or Alipay).
  — CONFIRMED, read directly, https://onlinemanual.insta360.com/insta360+/en-us/operating-tutorials/service-activity/free-activity,
  fetched 2026-09-26. This is still available to Ed today if he's never
  used it.
- A **bundled 1-year/1TB Insta360+ subscription promotion for X5 buyers**
  (stated value ~$107) — but the claim deadline reported was **31 August
  2025**, so this is very likely expired and not something Ed can rely on
  now (September 2026) unless he bought his X5 before that date and never
  claimed it.
  — LIKELY, found via search summary only (insta360.com/blog/tips/insta360-guide-top-x5-bundles.html
  blocked automated fetch at 403), deadline detail not independently
  re-verified against a live page.

---

## 4. Cost per generation, and practical tips

**Cost-per-generation math:**
- **Free tier (AI Warp): $0** for the first 3/day. This is genuinely
  unlimited-feeling if 3/day covers your practice pace.
- **Paid overage (AI Warp): 20 diamonds/generation**, but the $/diamond rate
  is unpublished (see above) — I can't give an honest $/generation number
  until Ed checks the in-app price.
- **Insta360+ subscription: LIKELY not applicable** to AI Warp/AI Effects at
  all — don't budget a $2.99-$11.99/month plan expecting it to buy more
  generations; its "Moments Lite" credits appear to be for a different tool.

**Is a failed generation refunded?**
**Yes — CONFIRMED.** The official manual states plainly: *"If the AI Warp
video generation task fails: Diamonds will be automatically refunded by the
system."* Cancelled or interrupted uploads also don't consume diamonds.
Read directly, 2026-09-26. There's no equivalent statement about a
successful-but-disappointing result (renders fine, you just don't like it)
— no source addresses this either way, and the general pattern across
comparable AI-generation products (Adobe Firefly, Sora, etc.) is that only
genuine technical failures are refunded, not results you simply dislike.
LIKELY, by analogy, not confirmed for Insta360 specifically.

**Can you preview before spending a generation?**
**Yes — CONFIRMED, and this is worth knowing before Ed budgets anything.**
The official manual describes a **"Preview"** button (bottom-left of the AI
Warp screen) that lets you see the AI effect *before* tapping "Make AI
video" to commit and actually spend a generation. Read directly, 2026-09-26.
Exactly how much of the final result the preview reveals (a rough draft? the
actual output?) isn't detailed on the page — worth Ed testing once to see
how reliable a signal it is — but the mechanism to avoid blind spending
exists.

**Maximizing free generations:**
- The only clearly documented lever is **waiting for the daily reset**
  (8:00 AM Beijing Time) and spacing practice sessions across days rather
  than trying to burn through ideas in one sitting.
- No referral bonuses for AI Warp/AI Effects credits were found anywhere.
- Using multiple free accounts to stack multiple 3/day pools is technically
  conceivable but **not something to recommend** — no source confirms
  Insta360's terms of service allow or forbid it, and it's a policy grey
  area rather than a documented tip.

---

## 5. Reviews and community opinion — is it worth paying for?

This is the weakest-sourced section of this report, and worth being honest
about: **no dedicated 2026 review or forum thread specifically judging "is
Insta360+/AI Warp worth the money" turned up in this research.** Reddit
searches for r/Insta360 threads on AI effects cost returned nothing directly
relevant (the search tool used here can lag Reddit's own site search — Ed
searching r/Insta360 directly may turn up more than this report did).

What did surface:
- General brand sentiment (one review-aggregator site, not independently
  fetched, so **LIKELY** at best) suggests the Insta360 ecosystem is
  worthwhile once you're bought in, but specifically cautions **not** to
  expect "budget-friendly ownership" — a generic warning about Insta360's
  overall accessory/subscription cost structure, not a verdict on AI Warp
  specifically.
- No source found confirms or denies "hit-or-miss" quality complaints about
  generative effects like the wave-crashing-cubicles style specifically.
  **UNKNOWN.** Once Ed confirms the exact in-app feature name (§2), searching
  under that precise label will likely surface more relevant opinions than
  the generic terms tried here.

**Bottom line: treat "is it worth it" as genuinely unresolved** rather than
a confident yes/no — the practical recommendation in §6 is built to work
even without a clear verdict on quality, by leaning on the free daily
allowance and the preview button rather than a paid commitment.

---

## 6. Plain-language recommendation for the Maui trip

Today is 2026-09-26. The Maui trip is **about 9 weeks away (~63
days).**

**The core finding that shapes this recommendation: Insta360+ is LIKELY the
wrong thing to pay for if the goal is specifically "more AI effect
generations."** Its credits appear to belong to a different feature
(Moments). So the cheapest sensible plan doesn't start with a subscription —
it starts with using what's already free, and only spending money on the
actual thing that's metered (diamonds), once Ed knows their real price.

**Step 1 — this week, free, 10 minutes:** Open the AI Warp/AI Effects screen
in the app and (a) note the exact remaining-count indicator to see which
feature and allowance actually applies to Ed, and (b) open "Top Up Diamonds"
once to see the real USD price list. This resolves both open unknowns in
this report and takes less time than any further web research would.

**Step 2 — the next 9 weeks, free:** Practise using the free daily
allowance (3/day if it's AI Warp), spread across multiple days rather than
burned in one sitting. At even a conservative 1-3 free generations a day,
that's 60-190+ free attempts before the trip — plenty to learn what
prompts/styles work, use the Preview button before committing each one, and
get comfortable with the workflow, at $0.

**Step 3 — for the trip itself:** Rely on the free
daily allowance across travel days first. On any specific day Ed wants more
than the free allowance (e.g., wants 5-6 effects on one big day out), top up
diamonds on-demand — pay-as-you-go, no subscription commitment, once the
real per-generation cost is known from Step 1.

**Step 4 — only if Ed separately wants cloud backup of his Maui footage**
(a genuinely different, reasonable want — not about AI effects): the
already-confirmed **first-time 30-day free trial** of Insta360+ (any tier,
claimed via the app's "Me" tab, if he's never subscribed before) could be
timed to start a few days before departure and cancelled before it renews —
effectively a free month of cloud backup/1TB storage that happens to
straddle the trip, at $0 if cancelled in time. This is a storage decision,
not an AI-generations decision, and shouldn't be conflated with the two.

**What NOT to do:** don't buy a monthly Insta360+ Premium plan (e.g. $8.99
for 1TB) specifically hoping it unlocks more AI Warp/AI Effects
generations — the evidence points to its credits being for a separate
feature. If Ed wants more generations than the free daily allowance gives
him, diamonds (once their price is known) are the more direct, and likely
cheaper, lever.

---

## Key open questions worth Ed checking in-app (each under a minute)

1. **Exact USD price of a diamond top-up pack** — needed for real
   $/generation math; genuinely not published anywhere found online.
2. **Whether the wave-crashing-style effect Ed used is "AI Warp" or the
   newer "AI Effects"** — this explains the gap between the confirmed 3/day
   (AI Warp) and Ed's observed ~1/day.
3. **Whether Insta360+ "Moments Lite" credits can be spent on AI
   Warp/AI Effects generations** — current evidence says no, but Insta360
   doesn't state this explicitly anywhere found.

---

## Sources

- Insta360 official app manual, "AI Warp," https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/al-magician — read directly, 2026-09-26
- Insta360+ store page, https://store.insta360.com/product/insta360plus — read directly, 2026-09-26
- Insta360+ First Month Free Trial, https://onlinemanual.insta360.com/insta360+/en-us/operating-tutorials/service-activity/free-activity — read directly, 2026-09-26
- Insta360 app listing (App Store, pricing), https://apps.apple.com/us/app/insta360/id1491299654 — read directly, 2026-09-26
- Ben Claremont, "3 Quiet Insta360 App Updates You Might Have Missed," 2026-04-24, https://www.benclaremont.com/blog/3-quiet-insta360-app-updates-you-might-have-missed — read directly
- 360rumors.com, "Insta360 AI Warp effect now available for most Insta360 cameras!", 2024-01-12, https://360rumors.com/insta360-ai-warp/
- Panoee, "Insta360 Software: The Ultimate Guide to the App & Studio," updated 2026-06-02, https://panoee.com/insta360-software
- Insta360 support, "About Diamonds," https://www.insta360.com/support/supportcourse?post_id=20754 (title/existence confirmed via search; page itself blocked automated fetch, 403)
- Insta360 support, "Insta360 Diamonds Top Up Agreement," https://www.insta360.com/support/supportcourse?post_id=20755 (same caveat)
- Insta360 blog, "Your Ultimate Guide to the Top Insta360 X5 Bundles" (X5 purchase promo, claim deadline reportedly Aug 2025) — title/URL via search, blocked automated fetch, 403
- WebSearch result summaries (2026-09-26) for Insta360+ Essentials/Premium monthly pricing tiers, cross-checked against the App Store listing above

This doc's research was split across a dedicated research pass (covering
most of the above) plus direct follow-up fetches of the AI Warp manual page,
the Insta360+ free-trial page, and the Ben Claremont article to close the
biggest gaps (preview button, refund policy, and the AI Warp/"AI Effects"
distinction) that the first pass could not resolve because several
insta360.com/blog pages block automated fetching (403).
