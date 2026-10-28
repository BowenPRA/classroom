# Lessons

Projected, interactive classroom lesson decks — a small React app that turns
lesson **data files** into polished slide decks with an EN/VN/FR toggle, KaTeX math,
interactive widgets, clean SVG diagrams, a **Full screen** projector mode, dark mode,
and a printable teacher lesson plan.

Adding a lesson means adding one folder of data — it inherits all the polish.

## Run it

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run deploy     # build once + publish dist/ to both gh-pages branches
npm run audit:svg  # check every diagram's text fits its boxes
npm run check:deck -- "http://localhost:5173/#/lesson/y7-science/U01_1"
                   # walk every slide: overflow, broken images, console errors
                   # (add `vn` or `fr` to walk it in that language)
```

**Writing a lesson?** Read [docs/LESSON-PLAYBOOK.md](docs/LESSON-PLAYBOOK.md)
first — the design principles, the build order, and the traps that pass lint and
build while looking broken. This file is the field reference; that one is the
method.

## Hosting

The site is published twice, from two GitHub accounts, to the same path:

- https://bowenpra.github.io/classroom/ — `BowenPRA/classroom`
- https://sbowen209.github.io/classroom/ — `sbowen209/classroom`

Both repos are named `classroom` on purpose. `base` in `vite.config.js` is
`/classroom/`, so one build serves both URLs; renaming either repo means
changing `base` and building separately for each.

`origin` has two push URLs, so a plain `git push` mirrors the source to both
accounts, and `npm run deploy` builds once and publishes `dist/` to both
`gh-pages` branches. Nothing extra to run — but note that if the first push
fails the second is skipped, so read the output rather than assuming both
landed.

## How it's organised

```
content/
  courses.js              the list of courses (shown on the home page, in order)
  registry.js             auto-discovers every lesson — no list to maintain
  banks/<bank>/bank.js    question banks that games draw from (never an index.js)
  <course>/<unit>/
    index.js              default-exports { meta, slides, plan }
    slides.js             the deck (array of slide objects)
    diagrams.js           inline SVG diagrams, referenced by key
    widgets.jsx           interactive React widgets for this unit
    plan.js               the printable teacher lesson plan (optional)
src/
  components/Deck.jsx     the slide renderer (schema below)
  components/RandomStudent.jsx
                          the one-press Pick button and the roster manager
  lib/useStudentPicker.js roster (per-device) and no-repeats round state
  lib/recentLessons.js    the home page's "recently opened" strip (per-device)
  lib/useDeckRemote.js    the laptop's end of the phone remote (see "Phone remote")
  lib/remote/             bus, room code and QR shared by the phone remotes
  remote/DeckRemote.jsx   the phone's screen, #/remote/<room>
  pages/                  Home (courses) · CoursePage (lessons) · Plan (printable)
```

## Add a course

Add an entry to [`content/courses.js`](content/courses.js). It shows up
immediately (as "coming soon" until it has a lesson):

```js
{ id: 'y7-science', title: 'Year 7 Science', subtitle: 'Cambridge Lower Secondary',
  color: '#14b8a6', icon: 'FlaskConical', bilingual: true }
```

`id` must match the folder under `content/` and each lesson's `meta.course`.
`bilingual: false` hides the language toggle for that course. FR is added per
lesson (`meta.french: true`, below).

## Add a lesson

Create `content/<course>/<unit>/index.js`:

```js
import { slides } from './slides.js'
import { plan } from './plan.js'        // optional

export default {
  meta: { course: 'y7-math', unit: '1.2', id: 'U01_2',
          title: 'Multiplying & Dividing Integers', order: 2, french: true },
  slides,
  plan,
}
```

`french: true` adds FR to the deck's EN/VN switch. Set it once every string in
the lesson, widgets included, has its `…Fr` twin. Every Year 7 lesson has
French; the Year 7 maths tasks (`T*`) and the other courses do not.

`vietnamese: false` takes VN off the switch. The Year 7 lessons are English and
French from Unit 4 (15 October 2026), so a new Year 7 deck sets
`french: true, vietnamese: false` and writes no `…Vn` twins; the decks before it
keep EN / VN / FR. (`deckLangs` in `src/lib/lang.js` decides the switch.)

## Slide schema (`slides.js`)

Each slide is a plain object. Set **`layout`** to pick a shape. (A slide written
before `layout` existed carries a `type` instead — `intro` · `concept` · `warmup`
· `summary` — and is mapped onto the layout that replaced it: hero, split, split,
hero. A slide with neither renders a red "no layout" notice, not a blank card.)

### The layouts

| `layout` | Shape | Key fields |
|---|---|---|
| `hero` | Full-colour opener/closer | `color` (`bg-[#hex]`), `brand`, `eyebrow`, `date`, `icon`, `title`, `objective` **or** `subtitle`, `card` (white callout: `{icon,badge,text}`), `reveal` |
| `statement` | Big centred definition on a theme canvas | `accent` (hex), `eyebrow`, `title`, `label` (chip), `text` (the big line), `sub`, `reveal`, `notes` |
| `split` | Text + media panel | `accent`, `icon`, `title`, `content`, `notes`, `example`+`exampleLabel`, media (`widget`/`inlineSvg`/`image`), `side` (`'left'`\|`'right'`), `ratio` (40/45/50/55/60), `reveal`, `drawThis` |
| `showcase` | One media, edge-to-edge | `accent`, `icon`, `title`, `eyebrow`, media, `caption`, `drawThis` |
| `compare` | Two themeable columns | `title`, `text` (optional big problem line above the columns — use it on vote slides), `columns: [{heading, accent, icon, content, notes, inlineSvg\|image, caption}]` |
| `stack` | Grid of note cards / checklist | `accent`, `icon`, `title`, `content`, `columns` (1\|2), `notes` — or `variant:'checklist'` + `items` |
| `steps` | Numbered sequence | `accent`, `icon`, `title`, `content`, `steps: [{text}]`, optional side media, `reveal` |
| `callout` | Single accent "glass" card | `accent`, `icon`, `eyebrow`, `title`, `content`, `notes`, `reveal` |
| `game` | Full-bleed game board — no header, no padding | `widget` (gets `lang` **and** `isDisplayMode`) |
| `gallery` | Grid of picture + key word cards | `accent`, `icon`, `title`, `eyebrow`, `content`, `tone`, `columns` (2\|3\|4), `copy`/`copyLabel`, `items: [{inlineSvg\|image, term, text, tag}]` |

Any field can be suffixed `…Vn` for the Vietnamese version and `…Fr` for the
French (e.g. `titleVn` / `titleFr`, `contentVn` / `contentFr`, and inside
`notes`/`columns`/`card`/`reveal`: `textVn`, `headingFr`, `answerVn`, …). A
missing twin falls back to English. The choosing is done by `tr` and `field` in
[`src/lib/lang.js`](src/lib/lang.js).

### Shared pieces

- **`accent`** — a raw hex (e.g. `'#14b8a6'`) used for chips, borders and icons;
  theme-safe on light and dark. (`hero`/`showcase` title bars can also take a
  `color` like `'bg-[#hex]'`.)
- **`notes`** — typed "copy this" cards, drawn as Learner's Book panels (a solid
  colour header strip over a tinted body): `{ tone, text, badge?, icon? }`.
  Tones: `write` (orange — the copy-this-down panel), `task` (purple), `plant`
  (green), `homework` (red), `theory` (blue), `info` (teal). `badge:false` hides
  the strip. **Bold** runs inside a note pick up that tone's key-word colour, so
  writing `**Cell:** the smallest…` prints the term the way the book does.
- **`reveal`** — a click-to-reveal answer box: `{ label, prompt?, answer }`.
- **widgets** — a `widget` component is rendered with the deck's current
  language as a prop (`({ lang }) => …`, `'en' | 'vn' | 'fr'`), so its own
  buttons and labels can follow the deck's language like the rest of the slide:
  `import { tr } from '../../../src/lib/lang.js'`, then
  `tr(lang, 'Back', 'Lùi', 'Retour')`. Ignore the prop if the widget has no
  text of its own.
- **media** — `inlineSvg` (from `diagrams.js`), `widget` (a component), or
  `image` (import a file from the unit's `images/` folder so Vite hashes it and
  respects the `/classroom/` base — don't hand-write `/public` paths). `drawThis`
  adds the amber "Draw This" badge; a caption sits under `showcase`/`compare` media.
- **`icon`** — a lucide name: `BookOpen`, `Microscope`, `Leaf`, `Boxes`, `Layers`,
  `Target`, `Scale`, `Users`, `Equal`, `AlertTriangle`, `ShieldCheck`, `Zap`,
  `Sparkles`, `CheckCircle2`, `GraduationCap`, `Telescope`, `ScanEye`, … (see
  `src/components/layouts/primitives.jsx`).

**Body markdown-lite** (`content`, note/step/reveal text): `**bold**`,
`$inline$` KaTeX math, a line starting with `>` becomes an amber "write this
down" note, blank line = spacer.

> **`$$block$$` math only works in a slide's `content`.** That field goes
> through `renderContent`, which understands it; note, step and reveal text go
> through `parseInlineText`, which does **not** — a `$$…$$` formula there prints
> as raw LaTeX on the slide, and nothing in `lint`, `build`, `audit:svg` or
> `check:deck` will notice. Use single `$…$` inside notes.

Real photos live in the unit's `images/` folder with a `CREDITS.json` recording
each source + licence (see `content/y7-science/U01_1/images/`).

### Keys in a deck

| Key | Does |
|---|---|
| `→` `Enter` `PageDown` `Space` | next slide (a presenter clicker sends PageDown) |
| `←` `PageUp` | previous slide |
| `F` | full screen on / off — the **Full screen** button does the same |
| `R` | draw a random student (opens the class list if there is none yet) |
| `B` | blank the screen ("Eyes on Mr Bowen"); any key or a click brings the slide back |
| `Esc` | close an expanded picture, or leave full screen |

Full screen is what the class sees: no toolbars, type about 40% larger, the
cursor hidden after three idle seconds. Where a browser has no fullscreen API
(an iPhone) the same view opens windowed instead of doing nothing.

### Phone remote

**Phone remote** (the phone icon in the bottom bar or the projector dock) shows
a QR code and a four-letter room code. Scan it, and the phone
(`#/remote/<room>`) turns the slides; swiping works too. It also switches Full
screen on and off. That is display mode only: a browser grants real fullscreen
to a click or key on the laptop and nothing else, so press **F11** on the
laptop once (its browser's own full screen) and display mode then fills the
screen. The phone says so when the browser's bars still show. It also jumps to
any slide, opens and closes the answer box, switches the language, picks a
student (the name shows on the phone),
blanks the screen, starts a countdown in the corner of the projector, and
presses the slide's widget buttons. It shows the slide's lines from `plan.js`
as well: any timeline sentence that starts "Slide 9:" and any answer whose `q`
starts "Slide 9 —".

- **On the phone's home screen** (Chrome menu → *Add to Home screen*, or
  *Install app*) the remote is an app of its own: no address bar, and it opens
  straight into the last room (`#/remote` remembers it; `#/remote?code=new`
  asks for another). The manifest and icons are in `public/remote/` and are
  linked from the remote's page only, so saving a lesson to a home screen
  still saves the lesson.
- **Widget buttons** reach the phone through the shared `Btn` and `GlassButton`
  (`content/y7-science/U03_models/ui.jsx`), which register with the slide
  (`src/lib/deckControls.js`). A widget with its own `<button>`s stays
  laptop-only; switching it to `Btn` is all it takes.
- **The connection** is Supabase realtime on The Current's project (free plan,
  shared with the school's admin app), plus BroadcastChannel between windows of
  one browser. A deck opens nothing until the button is pressed, and loads the
  realtime code only then (`remote-vendor` chunk, never fetched by a lesson).
  It then stays on in that tab until the tab closes. The room code is kept in
  the laptop's localStorage, so one phone link works every lesson; **New code**
  locks out any phone holding the old one.
- **Budget:** the phone says hello every 10 seconds while its screen is on, and
  the laptop answers with the state — about 2,000 messages a lesson, roughly
  90,000 a month at two lessons a day, under 5% of the free 2 million. The phone
  goes quiet when it locks and pauses after 20 minutes without a tap. Keep
  messages to ids, indexes and short strings.
- The laptop owns all the state (`src/lib/useDeckRemote.js`); the phone only
  asks (`src/remote/DeckRemote.jsx`). The bus, room code and QR are shared with
  Guess Who in `src/lib/remote/`.

### Games

The `games` course works the same way, except a "unit" is one game rather than a
sequence of slides: a single `layout: 'game'` slide handing the whole slide to a
widget. On a game slide the deck's Enter/arrow navigation is switched off, so
the keyboard belongs to the game — leave via **Back** or **Finish**. See
[`content/games/G01_word-wall/`](content/games/G01_word-wall/).

**Pictures on a Jeopardy clue.** A clue in
[`content/games/G02_jeopardy/boards.js`](content/games/G02_jeopardy/boards.js)
may carry `qImage` (on screen the moment the clue opens) and/or `aImage` (held
back until the teacher reveals), each `{ src, alt, altVn }` with `src` coming
from `images.js`. Which one you use turns on a single question: *does seeing it
give the answer away?* "Which animal has three hearts?" gets an `aImage` — a
photograph of an octopus beside that sentence is not a clue any more. Most clues
get neither, and that is the default, not an oversight: a photo next to
`What is 9²?` is decoration, and decoration on a projector is one more thing
between the class and the maths. Every board's images are preloaded when the
board is chosen, so a reveal is never a blank rectangle waiting on school wifi.

For a class that cannot read yet, a clue can be led by its pictures instead:
`qImages` is a list of one to four `{ src, alt, altVn, label?, labelVn? }`,
shown under a one-line question and filling the card. With two or more
pictures, `aIndex` names the right one, and it turns green on the reveal while
the others fade. A `qImage` on such a clue is not a choice: it sits beside the
question at the height of the words, which is how a country's flag goes next to
"Which one is from Japan?". The Year 1 board is built entirely this way. A board can also
have fewer than six categories: the grid takes its column count from the data.

**Question banks.** A game that wants one question at a time draws from a bank
rather than carrying its own: [`content/banks/y7-math/`](content/banks/y7-math/)
holds about 30 short questions per maths unit, each with its unit, a level
(1–3), the source it was adapted from, and an optional `check` that
`npm run check:bank` recomputes against the answer. The schema is in the header
of `bank.js`. Nothing under `content/banks/` may be called `index.js`, because
the registry would load it as a lesson. **Around the World**
([`content/games/G04_around-the-world/`](content/games/G04_around-the-world/))
is the first game built on it: choose units, and one question at a time comes up
big, sized to fit the screen, with one key to show the answer and the next.

### Drawing diagrams

House style (see `content/y7-science/U01_1/diagrams.js`): open every diagram with
a white plate `<rect>` so it stays legible on light *and* dark slides, outline
shapes in dark ink with flat pale fills, and set labels in the book's orange
(`#c25e12`) out in the margins on a thin leader line.

Write label `<text>` **literally** in the template string. The audit only sees
raw text in the diagram block — anything produced by a `${helper(...)}` call is
invisible to it, so a helper that emits `<text>` silently opts out of checking.

Run `npm run audit:svg` after editing any diagram — a lesson isn't done until it's
clean.

## Teacher plan (`plan.js`)

Optional. Rendered as a printable one-pager (`plan` link in the deck / course page).
See [`content/y7-math/U01_1/plan.js`](content/y7-math/U01_1/plan.js) for the shape:
`duration`, `objective`, `materials[]`, `vocab[]`, `timeline[]`, `answers[]`, `notes`.
