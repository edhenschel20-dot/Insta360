# Verdict: is this worth doing?

Product manager, 2026-09-26 (revised same day). Based on the reports in `docs/`.

> **What changed:** the first version misread the problem as "the AI follows the stick holder". The real problem: the app's **automatic reframing (AI Edit, Auto Frame, highlights) prefers people over the action**. At the fireworks it kept turning round to show you, your wife and your son watching. This version puts the zero-build fixes first, looks at an "action finder" tool, and plans around **Maui on 26 Nov 2026**.

## 1. The short answer

**Yes for the library and the link-to-entry feature. Not yet for any tool that reframes for you.**

Insta360's auto-edit is built to find people, with no way to say "the fireworks matter, not us". But for clips like the fireworks, the fix takes seconds by hand. A custom tool only beats that when the action **moves around** during a long clip.

**What you can do today, with nothing built:**
1. **Static action (fireworks, a stage, a sunset): one fixed view.** Open the clip, point the view at the action, set the size (FOV) and export. With no further keyframes, the view never turns round to your faces. This covers most "watching something" clips.
2. **Decide at shoot time.** Point one lens at the action. If you know you only want the show, use **InstaFrame Fixed View** (flat 4K video, ready to share; keep the 360 backup on) or **Single-Lens mode**.
3. **Make the reaction a choice, not an accident.** **Multi-View** shows the fireworks big and your family's faces small in one frame.
4. **Moving action (a float, a boat, a performer): Deep Track, with the box drawn by you.** It tracks things with a steady shape: people, vehicles, animals, objects. Fireworks aren't a steady object, and I don't expect Deep Track to hold them (not tested). Use a fixed view for those.
5. **If you still use Auto Frame, sort its output.** Each clip it makes is labelled by subject and direction. Delete the "person/Selfie" ones and keep the rest. Don't use AI Edit for event clips: it gives no subject choice at all.
6. **Mark the moment** (flag, "mark", or twist) when the action peaks.

## 2. What to build, and when

### Before Maui (now until 26 Nov)

**Phase 0, practice (this week, no building):** do the Oktoberfest editing homework in `2026-09-26-oktoberfest-practice.md`. Add two exercises: a **fixed view** on the parade, and a **Multi-View** of action plus reaction.

**Phase 1a, the library with Maui first (a weekend):** keep **markdown files as the master copy** (in `library/`), shown as a **searchable static website on Proxmox** (such as MkDocs in Docker) and added as a **webpage card in your Home Assistant dashboard**. Markdown survives if the site dies, and a static site almost never breaks. Write the **Maui entries first**: snorkelling, beach and bright sun, sunset, night, the "point at the action" fixes above, and a one-screen Maui shot checklist. The other ~40 effects, recipes and presets follow.

**Phase 1b, paste a link (an evening or two, can slip until after Maui):** a box on the site sends a YouTube link to **Gemini**, and the answer is saved as a draft entry marked "unreviewed". Tricky videos go through the **dual read** (Claude + Gemini) on your PC with the existing `watch`/`youtube-to-skill` skills. **Needs:** a Gemini API key and a small container on Proxmox. Adding links from your phone away from home also needs remote access (Tailscale or HA's).

### After Maui

**Phase 2, try the "action finder" on real clips (one or two weekends, only if phase 0 leaves real pain).** The idea is to find **where in the 360 frame the action is** from brightness bursts and motion, ignore faces, and output a view direction or a few keyframes.
- **Static camera (fireworks, parades, a stage): realistic.** Export the clip as a 360 MP4 from the app or Studio, so no special stitching is needed. A script on Proxmox measures where brightness and motion change most and picks a smoothed direction. It then renders a flat video (ffmpeg on Linux) or gives you pan/tilt numbers to type into the app.
- **Moving camera (walking, boats): much harder.** When the camera moves, everything moves, so "motion" stops pointing at the action. Not worth it.
- **Audio** tells you *when* things happen (bangs, cheers), not *where*, so it only helps with timing.
- **Writing keyframes into a Studio project** (the `.insprj` route) is possible but needs Windows, Studio closed while it runs, and an unofficial file format. Only worth it if you want Studio's finish.
- **A cheaper first test:** give Gemini one exported 360 clip and ask "which direction is the action, and when?" If it gets that right, you may not need a detector at all. Costs an evening; untested.

**Honest verdict:** for fireworks, a fixed view already takes seconds. The action finder only pays off on long clips where the action moves: parade floats, kids playing, whales. **Decide after Maui**, from the clips that actually gave you trouble.

**Phase 3, marker → keyframe trial (one evening).** Run **insta360py** as it comes on one shoot where you used markers. Keep it if it saves time. It needs Windows and Studio.

## 3. What NOT to build

- **A full "understand the scene" tracker** (people vs. action, moving camera). It would take many weekends, need a GPU, and break easily.
- **A Home Assistant integration for the camera.** None exists, and it doesn't serve your goals.
- **Your own stitching pipeline.** The app already exports 360 video well.
- **A separate phone app.** The website in an HA panel covers it.

## 4. Risks

- **The Studio file format is unofficial.** Any Studio update could break the keyframe write-back without warning.
- **The app keeps changing.** Insta360 could fix "people over action" itself. Library entries go stale, so each carries a date.
- **Gemini costs.** Tutorial videos are cheap to read, but long videos and dual reads cost more. Set a **monthly spending cap**.
- **AI mistakes.** Drafts stay "unreviewed" until you've tried them.
- **Wasted effort.** The action finder could work but save less time than a fixed view. Hence a trial, after Maui.

## 5. Open questions for Ed

1. **Which clips does auto-edit get wrong most:** things you watch from one spot (fireworks, shows, sunsets), or action that moves (kids, sport, boats)? The first is solved by a fixed view. Only the second justifies phase 2.
2. **What's on the Maui plan** (snorkelling, luau or fireworks, whale-watching, the road to Hana)? That decides which library entries come first.
3. **Must the final edit stay on your phone,** or would you finish some videos on a Windows PC in Studio? That decides whether keyframe write-back matters.
4. **Do you already have a shared dashboard** (HA or something like Homepage) where the library should appear?
5. **Do you have a Gemini API key, and what monthly cap feels comfortable?** Do you need to add links while travelling?
