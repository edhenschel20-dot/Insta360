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
4. Pick the model. **Opus for now.** In the 2026-11-22 test, Sonnet cut
   the dead time well but did no reframing and no transitions; it only
   trimmed. Opus did the reframing and effects. Opus costs up to 2% of a
   week per clip, and Sonnet under 1%. Sonnet can be retried with the
   stricter checklist below.
   - **Free head start:** before handing over, drag the view in Studio so
     the main subject is centred. It takes 5 seconds and gives Claude the
     right framing to start from.
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
Required - check each one before exporting:
1. REFRAME: keep the main subject well framed in 16:9 - never stuck at
   the edge - while still using the camera moves asked for above. Take a screenshot
   to confirm. If the subject is off to one side, fix it before going on.
2. CUT: remove the dead time (see below).
3. TRANSITIONS AND EFFECTS: add a transition at the joins between cut
   sections, and at least one effect at the best moment. Choose ones
   that suit the clip.
In your report, confirm each of these 3 and say where you did it.

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
- Use keyframes for purposeful, slow moves - not one fixed view, but no
  jittery extra keyframes either.
- Check your work with no more than 3-4 screenshots.
- If something goes wrong twice, stop and tell me rather than retrying.
- Export at 1080p to my Downloads folder.
When you're done, tell me what you cut, the effects and transitions you
used, and roughly where they are.
```

**Export size:** 1080p is the default for the trip. It exports faster,
makes much smaller files, and is plenty for phones and sharing. Export
size makes no difference to the Claude allowance, because Studio does
the export, not Claude. For a keeper you'll watch on the big TV,
re-export it at 4K later from Studio, as long as you keep the original.

## Situation prompts (put the shared block underneath)

### Fireworks
Tested 2026-11-22:
- **Opus, first prompt**: the best so far. It had movement and creativity,
  but it sped up the dead time instead of cutting it, and used too much
  curvature.
- **Sonnet**: cut the dead time perfectly, with joins you can't notice.
  But it never reframed (the fireworks stayed at the far right) and
  added no transitions.
- **Opus, strict prompt**: centred the fireworks and cut the dead time well,
  but the camera never moved. The result was "a video on the same spot
  the whole time". The rules (stay on the fireworks, natural view, few
  keyframes) were too tight, so it played it safe.

**Lesson:** say "natural view" *and* ask for specific camera moves.
Movement comes from pans, push-ins and pull-backs, not from curvature.
Version 3 below (not tested yet):
```
Insta360 Studio is open with one 360 clip of a fireworks show. Edit it
into a short, fun 16:9 clip with movement and creativity - not one
fixed view for the whole thing.

If the clip still has edits from an earlier test, clear them all first
(keyframes, cuts, speed changes, effects) and confirm it's clean.

Camera moves to include (natural view, not fisheye):
- Opening: start low on the crowd or skyline, then tilt up smoothly to
  reveal the first bursts.
- During the show: keep the fireworks as the subject, but keep the
  camera alive - slow push-ins (zoom in) on big bursts, gentle pans to
  follow them, easing back out between them. Something should be
  moving slowly most of the time.
- Once, at a natural pause, swing round to the people watching for
  about 2 seconds, then back to the sky.
- Finale: one dramatic move - for example a quick zoom out to a wide or
  tiny-planet view for a second or two, then back in. This is the one
  place a curved look is welcome.
- End: a slow pull-back or a fade out.
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

## Finishing on the phone instead
Exported clips are flat MP4s, so they're small enough for LocalSend
(VPN off), a USB cable into `DCIM` or `Movies`, or the hub's drive. In
the Insta360 app, add them from the **phone album**. That gives you
transitions (tap the square between clips), music, Auto Edit (clips over
2 seconds) and FlashCut templates.
- **No 360 tricks** on flat clips: no reframing, Deep Track, tiny planet
  or Shot Lab. Do those in Studio first.
- **Custom music** may not be allowed in the app (one review said so; check
  it). For your own song, join the clips with ffmpeg (above).
- **Insta360 Studio v5+** also has multi-clip editing with music and
  effects, so Claude could do the joining in Studio in the same session.

Sources (checked 2026-11-22): [phone album](https://www.insta360.com/support/supportcourse?post_id=19659),
[Auto Edit](https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/auto-edit),
[Transitions](https://onlinemanual.insta360.com/app/en-us/operation-tutorial/edit-function/transition),
[Studio v5 multi-clip](https://www.insta360.com/cn/support/supportdetail/video/vzuQQmR69q)

## Cost log
| Date | Clip | Length | Model | Weekly % used | Verdict |
|---|---|---|---|---|---|
| 2026-11-22 | Fireworks | 3 min | Opus 5.5 Medium | ≤ 2% (included other work) | Really good; cut dead time instead of speeding up; less curvature |
| 2026-11-22 | Fireworks #2 (same night) | ? | Sonnet | < 1% (week stayed 21%; session 7% → 8%) | Loved the dead-time cuts; but no reframing (fireworks stuck far right) and no transitions |
| 2026-11-22 | Fireworks #2 again (strict prompt) | ? | Opus | ? (before: week 21%) | Centred and cut well, but no camera movement at all; first Opus run still the best |
