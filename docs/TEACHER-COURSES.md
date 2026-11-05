# Teacher courses

How a course for another PRA teacher differs from Mr Bowen's Year 7 decks. Written on
5 November 2026 while building the first one: **Year 5 Mathematics, Mr. David**
(`content/y5-math/`, lesson `U05_L3` *Below Zero in Words*, worksheet `homework/y5m05-l3/`).
Everything in `CLAUDE.md`, `docs/LESSON-PLAYBOOK.md` and the `new-lesson` / `new-homework`
skills still applies; this file lists only what changes.

The operator's side (requests from The Current, the queue, links back to the teacher) is
the `teacher-lessons` skill in `C:\Users\sbowe\.claude\skills\teacher-lessons\`. The two
use the same names (settled 5 Nov 2026, below); change both together.

## What a teacher gets

| Piece | Where | Built with |
| --- | --- | --- |
| Classroom deck | `content/<course>/<unit>/` | `new-lesson` skill, playbook |
| One-page plan | `plan.js` in the same folder, at `#/plan/<course>/<unit>` | below |
| Printed worksheet + key | `homework/<packet>/`, on `#/homework`, and a copy in the shared drive's Lesson packs | `new-homework` skill |
| Problem bank | `content/<course>/<unit>/problem-bank.md` | below; feeds the Dashboard's step practice |

## Naming

One rule for every teacher course, used by this file and the `teacher-lessons` skill alike.

| What | Rule | Year 5 pilot |
| --- | --- | --- |
| Course id | `y<year>-<subject>`, subject as in `courses.js`: `math`, `science`, `english`. Two teachers of one year and subject: add the name (`y5-math-david`); not needed yet | `y5-math` |
| Course title | `Year <n> <Subject>` in the `courses.js` style: Mathematics, Science, English | `Year 5 Mathematics` |
| Subtitle | `Cambridge Primary · <teacher>`, so the home page shows whose class it is | `Cambridge Primary · Mr. David` |
| `teacher` | The teacher as PRA writes it, with the full stop. The deck's blank screen and the plan's header use it; Mr Bowen's courses leave it out | `Mr. David` |
| Lesson folder, book section | The Workbook (or Learner's Book) section, like Mr Bowen's decks: `U05_3`, `meta.unit: '5.3'` | none yet |
| Lesson folder, no section | The lesson's place in the teacher's unit: `U05_L3` = Unit 5, lesson 3 (counting the teacher's own lessons in that unit), `meta.unit: '5 · Lesson 3'`. The unit comes from the teacher's planning folder or the scheme of work; if neither shows it, ask | `U05_L3` |
| Request number | Lives on the request (its links and notes), never in a folder, packet or `meta` | none |
| Worksheet packet | `homework/y<year><subject letter><unit, 2 digits>-<section, or l + lesson>/`, letters `m` `s` `e`: `y5m05-3`, `y5m05-l3`. Files `<packet>.pdf` and `<packet>-teacher.pdf` | `homework/y5m05-l3/` |
| Shelf label | `Y5 M5.3` or `Y5 M5 L3`. The shelf groups only `EX` and `FR` labels with the packet before them, so a teacher label stands alone | `Y5 M5 L3` |
| Dashboard track | `Y<year>_<SUBJECT>`, unit id = lesson folder | `Y5_MATH` (not built) |

- **Where the worksheet goes:** the student PDF on the classroom `#/homework` shelf, always
  (an entry in `content/homework.js`); the answer key never goes on the site. Once Bowen has
  made `G:\Shared drives\PRA Shared Drive\Lesson Planning\Lesson packs\`, both PDFs are also
  copied to `Lesson packs\<Class>\` (e.g. `Year 5`), and the request's worksheet link is the
  direct Drive link to the student PDF. Until the folder exists the link is
  `https://bowenpra.github.io/classroom/#/homework` and the key stays with the operator.
- **Icon:** one already in `src/lib/courseIcons.js` (`Calculator`, `BookOpen`, …). That
  file is shared code; a new icon is a change to `src/`, not to `content/`.
- **Units:** `units: { 5: 'Addition and subtraction' }`, from the book's contents or, with
  no book, from the teacher's planning folders (Mr. David's are named `Unit 1- The number
  system` … `Unit 18- …`).
- Say in the lesson's `index.js` what its number means (book section or lesson in the
  unit), so nobody mistakes `U05_L3` for book section 5.3.

## The teacher's name, and nobody else's

- The teacher's name replaces Mr Bowen in every example and word problem, written the way
  PRA writes it: **Mr. David**, **Ms. Kiu** (with the full stop; Mr Bowen's decks have
  none). No student names anywhere: the repo is public and mirrored to two accounts.
- **No cartoon of the teacher.** The Mr Bowen cartoon (`src/lib/mrBowen.js`) is his. Do not
  draw a real member of staff; the "What happens next?" strip is left out, or drawn with
  objects only. Y5 5 L3 replaced it with the lift stepper.
- Deadpan word problems about the teacher (Mr. David's 4/4 homework, his lost car) are in
  the house style, but they are about a colleague: keep them kind, and the teacher can ask
  for them to go.
- **The course's `teacher` field** names the teacher in the shared chrome: the blank
  screen (`B`) reads "Eyes on Mr. David" (`BlankScreen` in `src/components/DeckChrome.jsx`;
  in Vietnamese "Hãy nhìn thầy David", cô for Ms) and the plan's header reads "Year 5
  Mathematics · Mr. David · Unit 5 · Lesson 3". Without the field a deck says Mr Bowen in
  EN, VN and FR, as before. `getCatalog()` passes course fields through whole; only lesson
  `meta` is whitelisted in `registry.js`.

## Languages

- Teacher courses are **English only** unless the class profile asks for Vietnamese:
  `bilingual: false` in `courses.js` hides the switch, and the lesson writes **no `…Vn` or
  `…Fr` twins** (Year 7's French is for Bowen's class only). Leave `meta.french` and
  `meta.vietnamese` out; the defaults are right.
- If a class profile asks for Vietnamese support, that is `bilingual: true` (still no
  `meta` flags: VN is on by default, FR off) plus `…Vn` twins written inline from the start, natural Vietnamese (the admin repo's
  `VIETNAMESE.md`), and never "trường" or "học sinh".
- `slides-lint.mjs content/<course>/<unit>/slides.js --no-vn --no-fr` checks an
  English-only deck (it then only checks the `$` pairs).
- Write for the younger reader. Year 5 English is weaker than Year 7's: shorter sentences
  than the Year 7 exemplars, one idea a line, and the English of the question taught as
  the lesson (rises / falls, B2, owe, "subtract 5 from 2", "the difference between").

## Shape and size

- Same flow as `STANDARD.md` (hero starter → goals → a stepper → key word and write panel
  → votes → a game → practice → checklist → exit), 20–24 slides for one period.
- Fewer copy-down panels for younger classes: Y5 5 L3 has 5 short ones and no drawings.
- Votes, the standing game and whiteboards matter more, not less: the age group needs to
  move.

## The plan

- `plan.js` with the field names in `src/pages/Plan.jsx` (`vocab [{term, def}]`,
  `timeline [{time, phase, detail}]`, `answers [{q, a}]`, `print [{label, href, note}]`).
- **One printed A4 page**, always. One line a timeline row, answers grouped by slide range,
  notes in one short paragraph; keep every answer. The reasoning a teacher does not need in
  class goes in the header comment of `slides.js`. Make room by cutting words, never by
  making the type smaller.
- `Plan.jsx` prints compact (5 Nov 2026): `@page` A4 with 12 mm margins, no card padding,
  the root font at 13px so every rem size and gap shrinks together, and sections allowed to
  split so no half page is left empty. The screen view is unchanged. With it the Y5 5 L3
  plan prints on 1 page (2 before); Mr Bowen's longer plans went from 8 to 4 pages (Maths
  5.2, Science 3 Coffee) and from 3 to 2 (Maths 2.3), same layout.
- **Check it:** print `#/plan/<course>/<unit>` from the dev server to PDF in headless Chrome
  and count the pages with `pdfinfo` (the page size line should say A4). Plan.jsx sets
  `@page` A4, so `--print-to-pdf` no longer falls back to Letter.
- Link the worksheet in `print` with a `?url` import of the student PDF; never write a
  path to a PDF (Vite fingerprints them).

## Sources

- **The teacher's own files first.** Mr. David's planning folder
  (`G:\Shared drives\PRA Shared Drive\Lesson Planning\Cambridge Lesson Plans Resources\David\Year 5 Maths\`)
  has a folder per unit; the last unit with files is where the class is. His slides are
  `.pptx`: a pptx is a zip, read `ppt/slides/slide*.xml` for the `<a:t>` runs. Build the
  next lesson on his method (here: "jump to zero, then the rest") and say so in the plan.
- **Weekly plans are Google Docs** (`.gdoc` on the drive is only a link). They cannot be
  read from the files on this laptop, and the personal Google account in Chrome has no
  access. Ask for them to be shared with the operator's PRA account, or read them in a
  browser signed in as a PRA account. Without them, say which session you chose and why.
- **No Workbook yet** (Year 5 Maths on 5 Nov 2026): the question types come from the
  end-of-unit test (`Program curricula\Assessments Library\Maths\Year 5\End of unit\`)
  and the scheme of work (`Program curricula\Primary Cambridge\Schemes of Work\Year 5\`,
  one 257-page PDF for English, Maths and Science: its maths units are numbered 5.1, 5.2,
  … by topic, not by the book's units; addition, subtraction and negative numbers are
  "Unit 5.4 Topic 1"). Use the test for **types only**;
  never its items, numbers or contexts. Mark the problem bank for a refresh.
- The framework (`Program curricula\Primary Cambridge\Curriculum Frameworks\`) sets the
  ceiling: Stage 5 is 5Ni.01 "where one integer is negative", so no −3 − 4 on a Year 5
  slide even if the teacher's own slides have one.
- Photos: Wikimedia as in the playbook, Vietnamese settings where there is one (snow in
  Sa Pa), honest `CREDITS.json`. Made-up data (a temperature table) is labelled as made up
  on the slide or the sheet.

## Problem bank

`problem-bank.md` beside the lesson: a map from each source question (Workbook exercise,
or test question while there is no Workbook) to a question type, then per type 6–10 fresh
items with answers, easy to hard. Two or three types are marked ★ for step practice: each
gets numbered steps with a title of at most 8 words and a one-line hint, and its table has
a column per step value, so the Dashboard's step engine can check one step at a time.
It is committed with the lesson (its items are fresh, so the public repo is fine), and the
next lesson for the class starts from its unused items. The answer-check script
(`check_bank.py`, `teacher-lessons` skill, `problem-bank.md` section 3) stays in the
operator's `C:\Users\sbowe\pra-triage\tmp\lesson-<N>\`.

## Checks that caught something on the first build

- All the usual ones (lint, build, `audit:svg`, `check:deck`, project mode with
  `REVEALS=1` at 1366×768 and 1920×1080). Three slides overflowed at 1366×768 with the
  answers open; the word problems became two slides.
- **Widgets in every state.** `deck-shots.mjs` never presses a widget's buttons. A copy in
  the scratchpad that clicks given buttons on given slides and measures every SVG `<text>`
  against its viewBox found the game's arrows missing.
- **A no-break-space fixer must touch strings only.** A regex putting U+00A0 into
  thousands (`20 000`) also hit `viewBox="0 0 1120 440"` and polygon `points` in a
  widget, which silently broke the SVG. Lint passed. Tokenise with espree (as
  `lessons-app-conventions` trap 28 says) or check every SVG attribute after.
- In a template literal (diagrams.js) write `&#160;`, not the character: eslint's
  `no-irregular-whitespace` rejects it there. `audit:svg` then counts the entity as six
  characters, so leave a little more room.
- The printed plan, opened with headless Chrome `--print-to-pdf`, to count its pages.

## Settled with the teacher-lessons skill (5 Nov 2026)

The first build and the skill were written in parallel and named things differently. The
rule above is now in both: course title `Year 5 Mathematics` (was "Year 5 Maths"); lesson
folder by book section or lesson in the unit, never the request number (the skill had
`U05_R12`); worksheet packet `y5m05-l3` (was `y5m05`, which a second Unit 5 lesson would
have clashed with; the skill had `y5-math-U05_1`); worksheet on `#/homework` and on the
shared drive (the skill had the drive only); `meta.french` / `meta.vietnamese` left out;
the problem bank beside the lesson, committed with it (the skill had it in `tmp\`).
