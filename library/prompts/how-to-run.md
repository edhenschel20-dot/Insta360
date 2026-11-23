---
title: How to run an edit prompt
tags: [editing, prompts]
---
# How to run an edit prompt

## Before every run (2 minutes)
1. **Copy the clip to the laptop by cable.** Use the camera card in the
   USB hub, or plug the phone in over USB and go to `Android › data ›
   com.arashivision.insta360akiko › files › … › galleryOriginal`. Copy
   every file with the same date and time (the `_00_` and `_10_` pairs).
2. **Open it in Insta360 Studio.**
    - If the clip was edited before, those edits come back with it. Clear
      them, or leave the prompt's "clear old edits" line in.
    - **Save time and allowance on long clips:** cut out the one or two
      biggest dead stretches yourself (for example, a 2-minute wait
      before the finale). Claude does the fine cuts.
    - **Free head start:** drag the view so the main subject is centred.
      It takes 5 seconds.
3. **In the Claude desktop app:** check **Settings → Usage** and note the
   **This week %**. Make sure **Computer use** is turned on.
4. **Choose Opus.** In testing, Sonnet only trimmed the clip: it did no
   reframing and added no transitions. Opus does the creative part.
5. Start a **new chat**, paste the prompt and allow access to Insta360
   Studio **and Windows File Explorer**. Without Explorer, Claude can't
   bring Studio to the front. **Leave the laptop alone** until it's done.
6. Afterwards, note **This week %** again.

## What it costs
- **About 1–2% of a weekly limit per clip** on Opus (tested on 3-minute
  fireworks clips). Sonnet uses under 1%, but it does a worse job.
- The weekly limit resets every **Tuesday at midnight**. Any free
  **limit resets** on the Usage page are a safety net: save them for late
  in a week when you're close to 100%.
- Go by **This week %**, not "Current session". The session number
  resets every 5 hours, so it isn't comparable between runs.
- Exporting is done by Studio on the laptop and **costs no Claude
  allowance**.

## Export size
- **1080p** is the default in the prompts. It exports much faster, makes
  smaller files, and is plenty for phones and sharing.
- For a special clip you'll watch on a big TV, re-export it at 4K later
  in Studio. **Keep the original 360 files** of anything special: they
  let you re-edit or re-export years from now.
