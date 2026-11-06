# Silent traps

Things that go wrong in this repo while lint, build, `audit:svg` and `check:deck` all pass.
Each one has cost a build real time. Read this before your first deck and again whenever
something "isn't applying". Each entry says what goes wrong, how to spot it, and the fix.

The general rule behind most of them: **look at the slides.** A field the layout does not
read, a label pointing at the wrong shape or a widget state nobody pressed never overflows,
so no check reports it. Screenshot every slide (`deck-shots.mjs`), open every widget in every
state, and before setting a field check that the layout component actually reads it.

## Layouts and fields

**Slide-level `notes` vanish on `showcase`, `compare` and `steps`.** Only `split`,
`statement`, `callout` and `stack` render a slide's `notes`; `showcase` and `compare` also
ignore `reveal`. Nothing errors and the panel never appears, even a `write` note holding the
definition. `drawThis: true` still shows its badge, which hides the loss.
Spot it: a note or reveal missing from the screenshot. Fix: make the slide a `split`
(`ratio` is the text column's width, minimum 40), or give the note its own `callout` slide.
Notes *inside* a `compare` column (`columns: [{ heading, content, notes }]`) do render.

**`>` bumpers, blank-line spacers and `$$…$$` work only in `content`.** Every other text
field (`sub`, `caption`, note text, step text, reveal text, `statement.text`) goes through
`parseInlineText`: a `>` prints as a character, the line break is eaten and `$$…$$` prints as
raw LaTeX. Spot it: a literal `>` or LaTeX on the slide. Fix: use single `$…$` in notes; put
lists that need bumpers in `content`. `StatementLayout` renders its `content` slot only when
both `content` and `text` are set.

**`statement.text` and `reveal.prompt` collapse newlines.** Two sentences on separate lines
run together as one paragraph. Spot it: a "spot the difference" pair that reads as one
block. Fix: separate reveal items with commas; for an A-versus-B contrast use `compare`.

**`*italic*` prints its own asterisks.** `parseInlineText` only understands `**bold**`; a
single-asterisk run renders literally, and a `**bold**` nested inside one breaks too.
Fix: there is no italic in this app. Use `**bold**` or reword.

**A `$` in prose eats words.** Any two `$` signs become a maths span. Fix: write "20 dollars".

**Runs of spaces collapse.** `$4x + x = 5x$     $8s − s = 7s$` in a note, or `a   3x` in SVG
`<text>`, renders as one run-together line. Fix: join with "and" or a comma. One answer per
line avoids it but costs height.

**`callout` prints `content` above its notes.** A practice question in `content` appears
before the rule it depends on. Fix: put the question in `reveal.prompt`, which renders above
the button.

**A note panel costs about 29 px whatever its text.** The coloured header strip and padding
are fixed, so adding any note to a full `split` can tip it into overflow at 1366×768 while
`check:deck` at 1440×900 says ok. Shortening the words barely helps. Fix: `badge: false`
drops the strip. Measure against an untouched sibling slide: if the neighbours are at 0, the
overflow you see is yours.

**A `tone: 'task'` note with no `badge` prints "Starter Task".** Wrong in the middle of a
lesson. Fix: give it a badge.

**Unknown icon names fall back to an info circle.** `Ic` in
`src/components/layouts/primitives.jsx` resolves against its own small `ICONS` map, not all of
lucide. `src/lib/courseIcons.js` is a separate, smaller map for course tiles, so a name can
work on the home page and fall back inside a deck. Spot it: a plain (i) where an icon should
be. Fix: add the import and the map entry (shared code in `src/`).

**Aspect ratio decides how big a diagram renders.** A `split` media panel is landscape
windowed but roughly square in project mode (about 600×580 at 1366×768); a `showcase` is
wide. Draw `split` diagrams at about 1.4:1 (840×560) and `showcase` diagrams at about 2.4:1
(1120×440 or 1160×470). A 3:2 diagram on a showcase letterboxes with everything half size; a
2:1 diagram on a split renders at half height with labels near 13 px. Spot it: white bands
beside or above the picture. Fix: one diagram cannot suit both layouts; pick the slide that
matters and give the other different media.

**Vertical media does not fit a `split`.** A 9:16 video or portrait photo renders about
100 px wide. Fix: use `showcase`, and do not nest a unit's own `Stage`/`Controls` shell
inside it (showcase already supplies the frame; the extra one cost about 90 px). For
height-driven media size the box with `h-full` and `style={{ aspectRatio }}` inside a
`flex-1 min-h-0` row.

**A `gallery` turns photographs into thumbnails.** Its picture box is a fixed
`h-[clamp(7rem,15vh,12rem)]`, about 115 px on the projector, sized for line-art icons.
Fix: for photos, author a wide SVG panel in `diagrams.js`
(`<image href="${importedJpg}" preserveAspectRatio="xMidYMid meet">` in 1120×440 cells, labels
as literal `<text>`) and show it on a `showcase` with a caption.

**A `compare` column holding a photo and a note shrinks the photo.** The note takes its
height from the photo, which ends up about 140×90. Fix: a compare column holds a photo with a
caption, or notes alone. When each half needs a picture and a definition, make two `split`
slides.

**A `showcase` widget gets a short, wide box.** After the header, frame, caption and the
widget's buttons, about 3:1 is left (about 1200×390 at 1440×900). A squarer stage is
height-limited and renders small. Fix: draw the stage as one SVG with a wide `viewBox`
(1120×440 works) so its text scales with the panel; keep only the buttons as HTML. Widgets
also receive `isDisplayMode` for HTML type sizes.

**The deck's floating controls cover the top right on a game slide** until they idle out.
Fix: nothing that must stay visible (a game clock) goes there.

**Widget buttons reach the phone remote only through the shared `Btn` / `GlassButton`**
(`content/y7-science/U03_models/ui.jsx`, registered in `src/lib/deckControls.js`). A widget
with its own `<button>`s works on the laptop and is missing from the phone. Fix: use `Btn`.

**`plan.js` with the wrong field names prints blank sections.** `src/pages/Plan.jsx` reads
`vocab: [{ term, def }]`, `timeline: [{ time, phase, detail }]`, `answers: [{ q, a }]` (an
array) and `print: [{ label, href, note }]`. Other names render "atom —", an empty timeline
or no answer key, and no deck check touches the plan. Fix: copy the shape from a recent
`plan.js` (`content/y7-science/U02_5/plan.js`) and open `#/plan/<course>/<unit>` before
shipping.

**`content/registry.js` passes only the lesson `meta` fields it lists.** A new `meta.foo` is
dropped before the deck sees it. Fix: add it to the registry (shared code). Course fields in
`content/courses.js` pass through whole.

**The dev server's Tailwind watcher misses a brand-new folder under `content/`.** Arbitrary
values in a new widget come out transparent (`bg-[#c02a6e]` → `rgba(0,0,0,0)`) and `lg:`
variants do nothing; `npm run build` is correct. Fix: touch `tailwind.config.js` and reload,
or check `dist/assets/*.css` before believing the browser.

## SVG and the audit

**`audit:svg` sees only literal `<text>`.** Text produced by a `${helper(...)}` call is
invisible to it, so a diagrams file can report "0 overflows" while measuring nothing.
Fix: write label `<text>` out literally; use helpers for shapes and leader lines only.

**`audit:svg` reads only diagrams written as `KEY: \`…\`` in `diagrams.js`, and `inlineSvg:`
blocks in `slides.js`.** A diagram built as `const FOO = \`…\`` and referenced as `POSTER: FOO`,
or derived later (`DIAGRAMS.X = foo.replace(…)`), is never measured. Fix: keep every diagram
with text as an UPPER_CASE literal key; derive variants after the object, from the literal.

**`audit:svg` never reads widget files.** A widget that draws its stage as one SVG (the house
pattern) is outside its scan, and `check:deck` only measures scrolling `div`s, while an SVG
clips silently. A 14-cell pH scale ran 100 px past its `viewBox` with every check green.
Fix: size widget geometry against the longest language's strings, then walk every widget
state in the page and compare each `text.getBBox()` with the `viewBox` and with the panel
whose centre the text falls inside (match by the text's centre, not its left edge).

**`audit:svg` blames a panel for a title that only sits above it.** It picks the smallest
`<rect>` with `t.y >= c.y - t.size`, so a heading within one font size of a panel's top edge
is measured against the panel's width and reports a large "short by N px". Fix: move the
heading or the panel so the gap is more than the font size; do not shrink the heading. Frame
overflows are reported separately and are real.

**`audit:svg` counts `&#160;` as six characters.** Leave a little more room on a label that
uses it.

**SVG arrowheads scale with `stroke-width`, and `marker-start` points forward.** Markers
default to `markerUnits="strokeWidth"`, so `markerWidth="7"` on a 5 px line is a 35 px head.
Plain `orient="auto"` at the start of a path aims the same way as the end. Spot it: only in
the picture. Fix: `markerUnits="userSpaceOnUse"` with fixed `markerWidth`/`markerHeight`;
a separately defined reversed marker (`refX` near 0, `d="M10 0 L0 5 L10 10 z"`) for the start.
`auto-start-reverse` is not a drop-in in Chrome.

**Label leader lines land on the wrong part.** Dots inside the shape, or on the membrane
when the label means the cytoplasm. Only a contact sheet shows it (new-lesson `SKILL.md` §4).

## Checks and verification

**`check:deck` does not test project mode.** It walks windowed at 1440×900 in English.
Project mode is full screen with type about 40% larger, so a deck clean in `check:deck` can
scroll on a third of its slides on the projector. Fix: run `project-check.mjs` at 1366×768
(and 1920×1080) in every language the deck offers, with and without `REVEALS=1`.

**`check:deck` walks with every reveal closed, and nothing presses widget buttons.** An open
answer is the commonest overflow, and a widget panel that appears only after a click is never
measured. Fix: `REVEALS=1` on `project-check.mjs` and `deck-shots.mjs` opens every reveal by
its chevron, whatever its label. For widgets, copy a check script to your scratch folder and
have it click given buttons on given slides and measure every SVG `<text>`.

**`check:deck` stops at two consecutive slides with the same title.** It breaks out when a
slide's `<h1>/<h2>` matches the previous one and reports "6 slides checked, 0 issues" for an
18-slide deck. Spot it: the slide count is short. Fix: give every slide a distinct title
(name a station for what the class does on it). `check:deck` also takes a slide count
(`… 50`).

**`scripts/deck-check.mjs` sometimes dies on its first launch** with "Cannot destructure
property 'result'". Re-run it.

**A wrong URL fails like a broken deck.** Every dev URL needs the `/classroom/` base
(`http://localhost:<port>/classroom/#/lesson/...`), and Vite moves to 5174 when 5173 is taken
without the preview tool always saying so. Symptom: "0 slides checked" or a blank `#root`.
Fix: read the dev server's own log line for the real port. After a restart the first
headless load can take about 12 s; the stock scripts wait for it, a custom one must too.

**A custom screenshot walker stalls on `ArrowRight`.** An open reveal absorbs the key, a
`compare` slide stalls it, and a `game` slide switches it off (`navLocked` in Deck.jsx).
Fix: click the deck's own Next, the last `<button>` in the document, as the stock scripts do.

**Two scripts on one Chrome debugging port see each other's tabs.** `check:deck` uses port
9333; a test script on the same port attached to another session's Chrome and screenshotted
its lesson. Fix: give every Chrome-driving script its own `PORT` (9447 and up); never kill
whatever holds 9333.

**A background tab in headless Chrome freezes.** CSS animations stop at their first
keyframe (so `animation-fill-mode: both` elements look invisible), and clicks and timers
stall. Spot it: a picture that looks wrong only in headless. Fix: `Page.bringToFront` before
each screenshot, plus `--disable-background-timer-throttling
--disable-backgrounding-occluded-windows --disable-renderer-backgrounding`.

**Headless Chrome needs `--user-data-dir`**, or a screenshot fails with "Access is denied".

**The in-app browser pane cannot prove project mode or a clean reload.** Inside the Claude
desktop app's pane `requestFullscreen()` never resolves, so it only shows the windowed
fallback; and it keeps Vite's "Failed to reload" error from a save made mid-edit, showing a
blank page. Fix: reload the pane, or trust a fresh headless load
(`chrome --headless=new --dump-dom --virtual-time-budget=15000`) and `project-check.mjs`.

**The printed plan is never checked by the deck checks.** Fix: print
`#/plan/<course>/<unit>` from the dev server with headless Chrome `--print-to-pdf` and count
the pages with `pdfinfo` (the size line should say A4).

## Text, French and Vietnamese

**French runs longer than English and overflows different slides,** mostly titles on hero
and closing slides at 1366×768, where a wrapped title costs a whole line. Fix: write French no
longer than the English, string by string, from the start; check project mode in FR. In a
bilingual EN/VN deck, Vietnamese is usually the longer string.

**A literal no-break space inside a template literal fails eslint** (`no-irregular-whitespace`);
inside a quoted string it is fine. Fix: concatenate, or in an SVG template write `&#160;`.

**Writing ` ` with the Write or Edit tool stores a literal no-break space,** not the
six-character escape. Fix: put escapes in from a script (`chr(92)` for the backslash) and
check the bytes with `od -c`.

**Read, then Write, turns no-break spaces into plain ones.** French `? ! : ; « »`, `25 %` and
thousands groups (`5 700`) in every language lose their U+00A0 and nothing fails. Edit-tool
`old_string`s spanning such lines also fail to match. Fix: move files byte-exact
(`git show HEAD:…`), patch those lines from a script, or run a fixer afterwards: space to
no-break space before `?!:;»`, after `«`, between a digit and `%`, and
`(?<=\d) (?=\d{3}(?!\d))`. `plan.js` files use plain spaces; leave them.

**A no-break-space fixer built on a regex breaks code.** In JSX it paired one string's
closing quote with the next string's opening quote and put no-break spaces into code
(`=== 'tank' ? PETROL`); a thousands rule also hit `viewBox="0 0 1120 440"` and polygon
`points`, silently breaking the SVG with lint passing. Fix: tokenise with espree
(`require('espree').tokenize(src, { ecmaVersion: 'latest', ecmaFeatures: { jsx: true }, range: true })`)
and touch only String tokens; check every SVG attribute afterwards.

**Unicode subscript digits (₂ ₃) look full size in large HTML text,** so "N₂" reads as "N2".
Fine in body text and SVG labels. Fix: real `<sub>` markup for big formulae (Science 2.6's
`Formula` in `content/y7-science/U02_6/`).

## Windows and tools

**A Bash heredoc collapses `\\` to `\`.** It happens in the tool's transport, so quoting the
heredoc does not help. A Python `str.replace` whose pattern or replacement holds `\\` (a LaTeX
line break, a tabular row end, a JS `\n` escape) silently matches nothing or writes the wrong
thing; a LaTeX build then fails with "Extra alignment tab", or a JS string is left
unterminated. Fix: write the script to a scratch file with the Write tool, run it by path,
and assert `s.count(pattern) == 1` for every substitution. Prefer the Edit tool on `.tex`.

**`python -I` ignores `PYTHONIOENCODING`,** so a script printing "−" dies on cp1252.
Fix: `sys.stdout.reconfigure(encoding='utf-8')` at the top.

**`pwsh` may not be on the Git Bash PATH.** Fix: run the skills' `.ps1` scripts as
`powershell -NoProfile -ExecutionPolicy Bypass -File <script> <args>`.

**Wikimedia returns HTTP 429 for odd sizes and originals.** Fix: `iiurlwidth=960` (a standard
bucket), about 1.5 s between requests, back off on 429. A PNG with transparency comes out
black unless flattened onto white. Search titles lie often (about half of a blind batch is
unusable): stage candidates, build a contact sheet and look before copying into `images/`.
For a plain object, the lead image of the English Wikipedia article (`prop=pageimages`) is
usually better than Commons keyword search.

## Deploy

**`npm run deploy` publishes whatever is in the working tree.** The registry discovers every
lesson folder, so another session's unfinished, uncommitted deck goes live with yours.
Spot it: `git status` shows files you did not change. Fix, from a clean commit:

1. `git worktree add --detach <short-path>\deploy-wt <commit>`
2. Junction `node_modules` from PowerShell:
   `New-Item -ItemType Junction -Path <wt>\node_modules -Target <repo>\node_modules`
   (Git Bash mangles `mklink /J`).
3. `npx vite build` inside the worktree.
4. From the main repo folder, `npx gh-pages -d <wt>\dist -r <remote>` for both remotes
   (README "Hosting").
5. Remove the junction as a link, `(Get-Item <wt>\node_modules).Delete()`, then
   `git worktree remove --force <wt>`. A recursive delete follows the junction into the real
   `node_modules`.

**A deploy worktree under a deep path fails** in gh-pages with "unable to open loose object …
Filename too long". Fix: put it at a short path, such as a folder beside the repo.

**Another session may commit or deploy in the same checkout.** Fix: stage only your own
paths (`git add content/<course>/<unit>`, `git commit -- content/<course>/<unit>`). After the
push, confirm the live bundle hash; if your lesson is missing because someone deployed
between your build and your push, deploy again from the newest `main`.

**The push can hang and Pages lags several minutes.** Wrap the push in `timeout`, check
`git log origin/main`, and poll the live `index-*.js` hash (new-lesson `SKILL.md` §8).

## Fixed for good

No longer traps, kept here so nobody re-applies an old workaround:

- Tailwind now scans `content/**`, and `HeroLayout` paints its background inline (31 Jul 2026).
- Every widget receives `isDisplayMode` on every layout (30 Sep 2026).
- `check:deck` and `project-check.mjs` wait for a cold dev server and click Next, so they walk
  past game slides (14 Oct 2026).
- `project-check.mjs` walks up to 150 slides and `REVEALS=1` opens every reveal by its chevron;
  both scripts accept the deck's display mode when headless Chrome refuses full screen
  (27 Oct 2026).
