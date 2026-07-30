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
```

Hosted on GitHub Pages at `/lessons/` (see `base` in `vite.config.js` — change it
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

Each slide is an object. `type` is `intro` · `concept` · `warmup` · `summary`.

| Field | Applies to | Purpose |
|---|---|---|
| `title` / `titleVn` | all | heading (Vn = Vietnamese) |
| `subtitle` / `subtitleVn` | intro, summary | one supporting line |
| `unit`, `objective` / `objectiveVn`, `warmUp` / `warmUpVn` | intro | rich title slide |
| `content` / `contentVn` | concept, warmup | body (markdown-lite, see below) |
| `example` / `exampleVn`, `exampleLabel` / `exampleLabelVn` | concept | worked example panel |
| `icon` | concept | `BookOpen`, `Target`, `Scale`, `MessageSquare`, `ShieldCheck`, `AlertTriangle`, `Users`, `Equal`, `Repeat`, `HelpCircle`, … |
| `color` | all | `bg-[#hex]` header/background |
| `inlineSvg` | concept, warmup | a diagram from `diagrams.js` |
| `widget` | concept | an interactive widget component |
| `drawThis` | concept | amber "Draw This" badge on the diagram |

**Body markdown-lite:** `**bold**`, `$inline$` / `$$block$$` KaTeX math, and a line
starting with `>` becomes an amber "write this down" note. Blank line = spacer.

Run `npm run audit:svg` after editing any diagram — a lesson isn't done until it's
clean.

## Teacher plan (`plan.js`)

Optional. Rendered as a printable one-pager (`plan` link in the deck / course page).
See [`content/y7-math/U01_1/plan.js`](content/y7-math/U01_1/plan.js) for the shape:
`duration`, `objective`, `materials[]`, `vocab[]`, `timeline[]`, `answers[]`, `notes`.
