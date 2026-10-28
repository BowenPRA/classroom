# The current standard (from 27 Oct 2026)

Mr Bowen is happy with the decks from Coffee, Carbon and Stars onward. This
file is what they have in common. The playbook and SKILL.md still hold the
method; this is the bar a new deck is judged against. Read it after the
playbook and before the beat sheet.

## The decks that set it

| Deck | Folder | Read it for |
|---|---|---|
| Coffee, Carbon and Stars | `content/y7-science/U03_coffee` | the flow, the "What happens next?" strip, a class-data widget |
| 3.4 Tides | `content/y7-science/U03_4` | the same flow at its cleanest; acting it out; a model predicted per press |
| 3.5 Energy / 3.6 Changes in energy | `U03_5`, `U03_6` | shared art in `art.js`, standing games, photos and film |
| 5.2 Intersecting lines | `content/y7-math/U05_2` | the shape in maths; reason sentences; a game with trap rounds |
| 5.3 Drawing lines and quadrilaterals | `content/y7-math/U05_3` | a practical lesson; class data kept in localStorage |

All five had a clarity pass on 27–28 Oct (see "The clarity pass" below). The
pass is part of the standard, not an optional extra. Read `slides.js`,
`plan.js` and at least one widget from two of them before you build.
Science 2.5 and Maths 2.3 still set how few words a slide carries.

## The flow: one 50-minute period, about 20–26 slides

1. **Hero starter.** One question the class can guess and write down while
   settling. Nothing on it gives the answer away. Leave the hero undated
   unless Mr Bowen gives a date.
2. **"Today You Will…"**: a `compare` with three columns. Each column has a
   picture with no words and a one-line goal in everyday words, about 37
   characters at most. No key word the lesson has not taught yet, and no bold.
3. **A stepper to say first.** A showcase widget. The class predicts out loud
   before every press, and each press makes one change.
4. **Key word, then a write panel.** The panel holds the definition only. An
   example or a number goes underneath in a plain `tone: 'info', badge:
   false` note, read aloud but not copied.
5. **Whiteboards**, then **"Back to the starter"**: answer the opening
   question.
6. **Mr Bowen's "What happens next?" strip.** Four panels, one per press. It
   is deadpan and a little silly, and ends on a question with a clue. Use the
   shared cartoon in `src/lib/mrBowen.js`, with props in `handLeft` /
   `handRight` (see U03_coffee/dating.jsx and U03_4/U03_5's strips).
7. **Votes.** Left hand A, right hand B, all at once, with the problem printed
   big (playbook §1). Use picture votes where you can.
8. **A model or widget predicted per press.** It earns its place by showing
   motion, or by revealing one answer at a time after the class has worked.
9. **A whole-class activity.** For example a standing game with arms up or
   down (Equal or Not?, Name That Energy, High Tide or Low Tide?), with real
   trap rounds. Or the class's own data, collected and graphed on screen.
10. **Put it together**: one summary drawing or one application.
11. **"Can You Do These?"**: a checklist that repeats the three goals, now
    with the key words, plus the notebook count (written panels + drawings).
12. **Exit-question hero.** No homework slide.

Copy-down budget: about 4–5 short write panels and at most 2 small drawings a
period. Mix the moves so no two slides in a row feel the same: vote, pair
test at the desk, film, story, English check, act it out, whiteboards, game.

## Pictures, film and widgets

- **Real photographs**, from Wikimedia (the playbook §4 route), in a
  Vietnamese setting where one exists (Hòa Bình Dam, a Saigon rice shop,
  Typhoon Yagi in Hà Nội, Tết fireworks). Each one gets a `CREDITS.json`
  entry with an honest licence.
- **Short film at exact timestamps.** Embed a copyrighted clip as
  youtube-nocookie with `start`/`end`, one button per segment so the class
  predicts between them. Trim a public-domain or CC clip to WebM in
  `images/`. Never download a copyrighted clip.
- **Widgets.** Each showcase widget has one wide white-plate SVG stage, uses
  the house `Btn` (`U03_models/ui.jsx`), and handles EN/FR through
  `tr(lang, en, null, fr)`. Never show the value the class is predicting
  until the press. If the widget keeps class data, store it in localStorage
  under `classroom:<course>:<unit>:<name>`, let it expire after 12 hours, give
  it a Clear all button, and keep it anonymous (no names). Our Squares (5.3)
  and Last Atom Standing (Coffee) are the pattern.
- **Reuse the shared art** before drawing new art: `U03_5/art.js` and
  `U03_6/art.js` (objects, eight action poses, candle, kettle, generator, …).

## Maths specifically

- The English of the question is the lesson. Teach the Workbook's question
  words ("Give a reason", "Explain why", "Is there evidence that…",
  "Suggest", "Critique") as English, with a sentence frame for the answer.
- Read the diagram or table first, then do the question in two steps.
- Use original numbers on slides. The Workbook exercise stays unspent for
  practice, and `plan.js` holds its full answer key.
- End with Mr Bowen word problems that get sillier, presented deadpan.
- There is no Learner's Book for Units 5 and 6. Build from the Workbook print
  edition (`C:\Users\sbowe\Downloads\Mathematics Workbook 7 - print
  edition.pdf`, PDF page = book page) and the Teacher Resource's "Additional
  teaching ideas" (`Downloads\LS_Maths_7_Teacher_Resource\3. Unit
  resources\Unit N`). Both are copyrighted: read them for ideas, and never
  copy a page into the repo.

## The clarity pass

When the deck passes every check in SKILL.md §7, walk it again in project
mode at 1366×768, in EN and FR, with every reveal open (`REVEALS=1
deck-shots.mjs`). Open every widget in every state. Write an audit in your
scratchpad with three headings: **Wrong**, **Unclear / repeats**, **Fine as
is**. Then fix everything under the first two headings. For an audit that is
not anchored on your own intentions, you may hand the screenshots and the book
pages to a fresh subagent. What the 27–28 Oct passes caught:

- **A diagram that is not true.** An angle drawn at a size other than its
  label (check the coordinates). An upside-down F or a mirrored Z: the F
  stands upright and the Z is never mirrored. A generator drawn as a wind
  turbine. A label pointing at something hidden behind another shape. A
  kettle standing on the floor.
- **A picture that answers its own question.** A diagram prints the answer
  beside the question. A label answers a reveal before it is asked. A widget
  shows the value the class is meant to predict.
- **Saying it twice.** The caption repeats the label, the content repeats the
  write note, the banner repeats the panels, the title repeats the content.
- **Contradictions between slides.** "Rice" grouped with "millions of years";
  a candle's useful change given as light, then as heat two slides later
  with no reason.
- **Dishonest numbers.** Say "about" when a number is approximate. Put the
  arithmetic in `plan.js`.
- **A stepper that is not one change a press**, or that marks a tie as a
  winner.
- **An object named only after the answer.** An ESL student may not know
  "kettle" or "bow". Name it first.
- **French.** Two slides with the same title. French overflowing where the
  English fits.
- **A vague instruction.** "Copy the diagram": which one? Say exactly what
  to copy or draw.
- Text smaller than about 20 px on the projector.

## Working beside other sessions

Several Claude sessions often work in this folder at once.

- Touch only your own lesson folder. Uncommitted changes elsewhere (for
  example in `src/`) belong to another session: never edit, stage, revert or
  commit them. If `npm run lint` fails in a file you did not touch, run
  `npx eslint content/<course>/<unit>` on your own folder and say so in your
  report. If the deck needs a change to shared code in `src/`, stop and
  report it rather than editing.
- Commit only your own paths: `git add content/<course>/<unit>` then
  `git commit -- content/<course>/<unit>`.
- Give every Chrome-driving script its own `PORT` (the brief names yours).
  Never kill a Chrome you did not start.
- Start the dev server with `preview_start` `lessons-dev` (it takes a free
  port). Read the real port from its log.
- **Deploy from a clean worktree of the current `main`**, never with a plain
  `npm run deploy` while anyone's uncommitted work is in the folder. Follow
  the route in the `deploy-from-clean-worktree` memory, and publish to both
  remotes. Then confirm the live bundle hash. If another session deployed
  between your build and your push and your lesson is missing from the live
  site, deploy again from the newest `main`.
