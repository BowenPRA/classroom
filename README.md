# Lessons

Projected, interactive classroom lesson decks — a small React app that turns
lesson **data files** into polished slide decks with an EN/VN toggle, KaTeX math,
interactive widgets, clean SVG diagrams, a fullscreen **Project** mode, dark mode,
and a printable teacher lesson plan.

Adding a lesson means adding one folder of data — it inherits all the polish.

## Run it

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run deploy     # build + publish dist/ to the gh-pages branch
npm run audit:svg  # check every diagram's text fits its boxes
npm run check:deck -- "http://localhost:5173/#/lesson/y7-science/U01_1"
                   # walk every slide: overflow, broken images, console errors
```

**Writing a lesson?** Read [docs/LESSON-PLAYBOOK.md](docs/LESSON-PLAYBOOK.md)
first — the design principles, the build order, and the traps that pass lint and
build while looking broken. This file is the field reference; that one is the
method.

Hosted on GitHub Pages at `/classroom/` (see `base` in `vite.config.js` — change it
if you rename the repo).

## How it's organised

```
content/
  courses.js              the list of courses (shown on the home page, in order)
  registry.js             auto-discovers every lesson — no list to maintain
  <course>/<unit>/
    index.js              default-exports { meta, slides, plan }
    slides.js             the deck (array of slide objects)
    diagrams.js           inline SVG diagrams, referenced by key
    widgets.jsx           interactive React widgets for this unit
    plan.js               the printable teacher lesson plan (optional)
src/
  components/Deck.jsx     the slide renderer (schema below)
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
`bilingual: false` hides the EN/VN toggle for that course.

## Add a lesson

Create `content/<course>/<unit>/index.js`:

```js
import { slides } from './slides.js'
import { plan } from './plan.js'        // optional

export default {
  meta: { course: 'y7-math', unit: '1.2', id: 'U01_2',
          title: 'Multiplying & Dividing Integers', order: 2 },
  slides,
  plan,
}
```

## Slide schema (`slides.js`)

Each slide is a plain object. Set **`layout`** to pick a shape. (Slides with no
`layout` fall back to the legacy `type` renderer — `intro` · `concept` · `warmup`
· `summary` — so old decks keep working unchanged.)

### The layouts

| `layout` | Shape | Key fields |
|---|---|---|
| `hero` | Full-colour opener/closer | `color` (`bg-[#hex]`), `brand`, `eyebrow`, `date`, `icon`, `title`, `objective` **or** `subtitle`, `card` (white callout: `{icon,badge,text}`), `reveal` |
| `statement` | Big centred definition on a theme canvas | `accent` (hex), `eyebrow`, `title`, `label` (chip), `text` (the big line), `sub`, `reveal`, `notes` |
| `split` | Text + media panel | `accent`, `icon`, `title`, `content`, `notes`, `example`+`exampleLabel`, media (`widget`/`inlineSvg`/`image`), `side` (`'left'`\|`'right'`), `ratio` (40/45/50/55/60), `reveal`, `drawThis` |
| `showcase` | One media, edge-to-edge | `accent`, `icon`, `title`, `eyebrow`, media, `caption`, `drawThis` |
| `compare` | Two themeable columns | `title`, `columns: [{heading, accent, icon, content, notes, inlineSvg\|image, caption}]` |
| `stack` | Grid of note cards / checklist | `accent`, `icon`, `title`, `content`, `columns` (1\|2), `notes` — or `variant:'checklist'` + `items` |
| `steps` | Numbered sequence | `accent`, `icon`, `title`, `content`, `steps: [{text}]`, optional side media, `reveal` |
| `callout` | Single accent "glass" card | `accent`, `icon`, `eyebrow`, `title`, `content`, `notes`, `reveal` |
| `gallery` | Grid of picture + key word cards | `accent`, `icon`, `title`, `eyebrow`, `content`, `tone`, `columns` (2\|3\|4), `copy`/`copyLabel`, `items: [{inlineSvg\|image, term, text, tag}]` |

Any field can be suffixed `…Vn` for the Vietnamese version (e.g. `titleVn`,
`contentVn`, and inside `notes`/`columns`/`card`/`reveal`: `textVn`, `headingVn`,
`answerVn`, …). Missing `…Vn` falls back to English.

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
  language as a prop (`({ lang }) => …`, `'en' | 'vn'`), so its own buttons and
  labels can be bilingual like the rest of the slide. Ignore the prop if the
  widget has no text of its own.
- **media** — `inlineSvg` (from `diagrams.js`), `widget` (a component), or
  `image` (import a file from the unit's `images/` folder so Vite hashes it and
  respects the `/classroom/` base — don't hand-write `/public` paths). `drawThis`
  adds the amber "Draw This" badge; a caption sits under `showcase`/`compare` media.
- **`icon`** — a lucide name: `BookOpen`, `Microscope`, `Leaf`, `Boxes`, `Layers`,
  `Target`, `Scale`, `Users`, `Equal`, `AlertTriangle`, `ShieldCheck`, `Zap`,
  `Sparkles`, `CheckCircle2`, `GraduationCap`, `Telescope`, `ScanEye`, … (see
  `src/components/layouts/primitives.jsx`).

**Body markdown-lite** (`content`, note/step/reveal text): `**bold**`,
`$inline$` / `$$block$$` KaTeX math, a line starting with `>` becomes an amber
"write this down" note, blank line = spacer.

Real photos live in the unit's `images/` folder with a `CREDITS.json` recording
each source + licence (see `content/y7-science/U01_1/images/`).

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
