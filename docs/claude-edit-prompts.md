# Claude edit prompts (Claude desktop app driving Insta360 Studio)

Ready-to-paste prompts for having Claude reframe and edit a clip in
Insta360 Studio, using **computer use in the Claude desktop app**. This
file is kept up to date as we learn what works. Ask Claude Code
"give me the prompt for <situation>" and it builds one from here.

Last updated: 2026-11-22

## Before every run (2 minutes)
1. Copy the clip to the laptop **by cable** (the card in the Anker hub,
   or the phone over USB → `Android › data › com.arashivision.insta360akiko
   › files › … › galleryOriginal`). Copy every file with the same date and
   time.
2. Open it in **Insta360 Studio**. Optionally trim off long dead stretches
   yourself, because it's cheaper than having Claude hunt for them.
3. In the Claude desktop app: check **Settings → Usage** and write down
   **This week %**. Make sure **Computer use** is on.
4. Pick the model: **Sonnet** for everyday clips, **Opus** for special ones
   (the luau, Kapalua 18, Road to Hana highlights).
5. Start a **new chat**, paste the prompt, allow access to Insta360 Studio,
   and leave the laptop alone until it's done.
6. Afterwards, write down **This week %** again. Exporting doesn't use any
   of the Claude allowance.

## Ed's standing preferences (in every prompt)
These come from the first test (2026-11-22, fireworks):
- **Cut dead time; don't speed it up.** Nobody wants to watch the set-up,
  the waiting or people walking about.
- **A natural view, not curved.** Fisheye or heavy curving only once or
  twice, briefly, as a deliberate effect.
- **The action, not the family.** A quick glance at people reacting is
  fine (under 2 seconds); never dwell on them, and never on the person
  holding the camera.
- **Smooth moves**, not jumpy ones.

## The shared block (paste at the end of every prompt)
```
Editing style (always):
- Cut out dead time completely: setting up, waiting, people walking
  about, anything where nothing is happening. Don't speed those parts
  up - remove them. Keep a second or so before each key moment so the
  cuts aren't abrupt.
- Keep a normal, natural-looking view most of the time - no fisheye or
  heavy curving. Use a wide, curved look only once or twice as a
  deliberate effect, for a second or two.
- Focus on the action. A quick glance at people reacting is fine
  (under 2 seconds), then go straight back. Never stay on the person
  holding the camera.
- Smooth moves: ease in and out of every pan or tilt; no sudden jumps.
- Transitions and effects are welcome where they suit the moment, but
  don't overdo them.

Rules to keep this quick:
- Use as few keyframes as you need for smooth moves.
- Check your work with no more than 3-4 screenshots.
- If something goes wrong twice, stop and tell me rather than retrying.
- Export at [1080p for sharing / 4K for keeping] to my Downloads folder.
When you're done, tell me what you cut, the effects and transitions you
used, and roughly where they are.
```

## Situation prompts (put the shared block underneath)

### Fireworks
Tested 2026-11-22 on Opus: "turned out really good". It cost at most
about 2% of a weekly limit for a 3-minute clip. The notes from that run
are now in the shared block.
```
Insta360 Studio is open with one 360 clip of a fireworks show. Reframe
it to 16:9 and edit it into a short, watchable clip.

- Keep the view on the fireworks for nearly the whole clip. Tilt up
  enough that the bursts are well in frame, with a little of the
  horizon or skyline at the bottom for scale.
- Follow where the bursts are; if they move left or right, pan smoothly
  with them.
- Once, at a natural pause, glance round to the people watching behind
  the camera for about 2 seconds, then turn back.
```

### Parade
Not tested yet.
```
Insta360 Studio is open with one 360 clip of a parade. Reframe it to
16:9 and edit it into a short, watchable clip.

- Keep the view on the parade: the floats, performers and whatever is
  passing. Follow each float as it goes by.
- If the kids react to something, a quick glance at them is fine.
- If Studio's Deep Track can lock onto a float, use it instead of hand
  keyframes.
```

### (More to add: luau, Kapalua golf, beach, snorkel, Road to Hana)
When a new situation is tested, add its prompt here with the date, the
model and Ed's verdict.

## Getting a recipe from a run you liked
In the same chat, straight after a good result:
```
Write down exactly what you did - each cut, effect, transition and
camera move, with timings and the Studio settings you used - as a
reusable recipe I can give to another chat for a different clip of the
same kind. Include my style rules: cut dead time rather than speeding
up, natural view with little curvature, action not the family.
```
Save the result into the situation's section above.

## Joining several clips into one finished video
Once the clips are exported (flat MP4s), ask **Claude Code** (the
terminal on the laptop), not the desktop app:
> "Join the clips in `Downloads\<folder>` in this order, with
> [cross-fades / fade through black / quick cuts to the beat], add
> `<music>.mp3` with a fade-out, title '<text>', export 1080p."

This uses ffmpeg (installed at `C:\Users\User1\tools\ffmpeg`) and very
little of the Claude allowance. Use royalty-free music (e.g. YouTube
Audio Library) if the video will be posted anywhere.

## Cost log
| Date | Clip | Length | Model | Weekly % used | Verdict |
|---|---|---|---|---|---|
| 2026-11-22 | Fireworks | 3 min | Opus 5.5 Medium | ≤ 2% (included other work) | Really good; cut dead time instead of speeding up; less curvature |
