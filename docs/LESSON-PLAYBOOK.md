# Lesson Playbook

How to build a lesson deck in this repo that actually works in front of a class.

[README.md](../README.md) is the **reference** — every field, every layout. This
is the **method**: what makes a deck good, the order to build it in, and the
traps that have already cost time. Written after Y7 Science 1.1 Cells, which is
the worked example for everything below — read
[`content/y7-science/U01_1/`](../content/y7-science/U01_1/) alongside this.

---

## 1. The design principles

### Mimic the Cambridge Learner's Book
Students have the book open next to them. When a slide uses the same visual
language as the page, they don't have to translate between two systems.

- **Solid colour header strip over a tinted body** — that's the book's box.
  Teal for sections, purple for activities, red for homework, green for
  plant-only, orange for the things they copy.
- **Key words in the book's orange**, printed bold inside the sentence, exactly
  where the book prints them.
- **Flat line art on white**, dark ink outlines, pale flat fills. No gradients,
  no drop shadows, no 3D.
- Palette lives in `CAMBRIDGE` and `NOTE_TONES` in
  [`src/components/layouts/helpers.jsx`](../src/components/layouts/helpers.jsx).
  Use those tokens; don't invent new hexes per lesson.

### Accent everything they have to write down
This is the single most important rule in this repo. A definition that looks
like discussion prose does not get copied into a notebook.

- Copy-down content goes in a **`write` note** (orange "Write This Down" panel)
  or an **orange `>` bumper**. Nothing else does.
- Discussion, context and narration stay as plain body text.
- Write the term as `**Term:** definition` — bold runs inside a note pick up
  that tone's key-word colour automatically.
- End the deck by telling them the count: *"your notebook should now have 13
  definitions and 2 labelled drawings."* It turns a vague instruction into a
  checkable one.

### Don't overcrowd — prefer another slide
If a slide needs a scrollbar on a projector, it is two slides. Splitting is
free; a cut-off definition is not.

Concretely, in 1.1 the five plant-only organelles were one dense gallery. Split
into *"What holds a plant up"* and *"How a plant feeds itself"*, each gets a
reason to exist and room for a real micrograph. The deck went 17 → 22 slides and
got easier to teach, not longer.

### Ask before you tell
Put the question on its own slide, with **no numbers on it**, before any slide
that works it out.

Slide 2 of 1.1 is only: *imagine one average cell in Mr Bowen's body magnified
to the size of a soda can — how big would Mr Bowen be?* plus his height. Pairs,
no calculators. Guesses go on the board. Slide 3 has the numbers. The gap
between their guess and 10.68 km **is** the lesson; showing the working first
throws that away.

### Reveal a calculation one step at a time
Multi-step arithmetic on a slide is either spoiled (all visible) or unusable
(all hidden). Use a stepper widget: one line of the calculation per press, big
numbers, teacher-paced, so the class does each step on paper first.

See `ScaleChallengeWidget` in
[`widgets.jsx`](../content/y7-science/U01_1/widgets.jsx) — four steps, a Back
button, and nothing else to fiddle with.

### Three sources of imagery, each with a job

| Source | Use it for | How |
|---|---|---|
| **Crops from the textbook pages** | The exact figure students will look at in the book, and Draw This targets | Crop the figure out of a page scan — never show a whole page |
| **Openly-licensed photos** | The real phenomenon: what a cell actually looks like, the real instrument, the real place | Wikimedia Commons, PD/CC0/CC-BY/CC-BY-SA |
| **Authored SVG** (`diagrams.js`) | Teaching diagrams where you control exactly what is emphasised — isolates, light paths, process diagrams | House style, §4 |

Pair them where you can. A drawn chloroplast next to a photograph of real
chloroplasts teaches more than either alone.

### Widgets: simple and useful, not clever
A widget earns its place by doing one thing a static slide cannot.

- No sliders, emoji or gimmicks unless the fiddling *is* the learning.
- **Highlighting must be unmissable.** In `CellExplorerWidget` the selected
  organelle keeps its colour and gains a halo plus a heavy outline while
  *everything else drops to flat grey* — and the part is named on the picture.
  A slightly thicker outline is not enough on a projector at the back of a room.
- Never hide the picture behind the interaction: the whole cell stays readable
  at all times.

---

## 2. Which layout for which teaching move

| Teaching move | Layout |
|---|---|
| Open the lesson; set the starter task | `hero` |
| Pose a question and stop | `statement` |
| Explain with a diagram / run a widget beside the text | `split` |
| One big figure, especially a Draw This | `showcase` |
| A vs B (animal vs plant, model vs real, word vs word) | `compare` |
| A set of terms, one picture each | `gallery` |
| Recap checklist | `stack` + `variant: 'checklist'` |
| Aside, cross-curricular link, homework | `callout` |

---

## 3. Build order

1. **Read** [README.md](../README.md) and one existing unit end to end. Match
   the patterns you find; don't invent parallel ones.
2. **Write the beat sheet first** — one line per slide, in teaching order,
   before any code. Mark which slides are questions, which are copy-down, and
   which are Draw This.
3. **Source the images** (§4) and record every one in `images/CREDITS.json` as
   you go, not afterwards.
4. **Author the diagrams** (§5).
5. **Write `slides.js`**, bilingual from the start — retro-fitting `…Vn` is
   worse than writing it inline.
6. **Update `plan.js`** so the teacher plan matches the deck. A stale timeline
   is worse than none.
7. **Verify** (§6). Fix. Re-verify.
8. **Commit to `main`, then `npm run deploy`** and confirm the live site is
   serving the new bundle before calling it done.

---

## 4. Sourcing images

Everything goes in the unit's `images/` folder and is **imported** in
`slides.js` (`import x from './images/x.jpg'`) so Vite hashes it and respects
the `/classroom/` base. Never hand-write a `/public/...` path.

### Cropping a textbook figure

Crop the *figure*, not the page. On Windows, `System.Drawing` is enough — no
extra tooling:

```powershell
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile($Src)
$bmp = New-Object System.Drawing.Bitmap $W, $H
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = 'HighQualityBicubic'
$g.DrawImage($img, (New-Object System.Drawing.Rectangle 0,0,$W,$H),
             (New-Object System.Drawing.Rectangle $X,$Y,$W,$H), 'Pixel')
$bmp.Save($Dst, $codec, $ep)   # jpeg encoder, quality ~90
```

Crop, look at the result, adjust. Two passes is normal.

### Finding an openly-licensed photo

Search the Commons API, check the licence **before** downloading, and pull a
sane size via `iiurlwidth` rather than the full-resolution original:

```
https://commons.wikimedia.org/w/api.php?action=query&format=json
  &list=search&srsearch=<terms>&srnamespace=6

https://commons.wikimedia.org/w/api.php?action=query&format=json
  &prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=1400&titles=File:<name>
```

Send a real `User-Agent`, and sleep ~1s between calls — the API rate-limits
fast and returns HTML, not JSON, when it does.

Then downscale to ≤1200px and re-encode at quality ~80. A detailed engraving at
quality 92 can be 700 kB; the same image at 900px/78 is 255 kB and looks
identical on a projector.

### Licence hygiene

Every file gets an entry in `images/CREDITS.json` with `name`, `title`,
`descUrl`, `license`, `artist`. Prefer PD / CC0 / CC-BY / CC-BY-SA.

If a copyrighted scan is used anyway at the teacher's instruction, say so
**explicitly** in the entry — licence `"(c) <publisher> - NOT openly licensed"`
plus a `usage` note — so a future reader knows it needs replacing before the
site is shared any wider. Don't bury it.

---

## 5. Drawing diagrams

House style, all enforced by eye plus `npm run audit:svg`:

- **Open with a white plate** covering the viewBox. Then the artwork reads on a
  light *or* dark slide and never depends on the page's text colour.
- Dark ink outlines (`#2b2b2b`), pale flat fills, **labels in the book's orange
  (`#c25e12`) out in the margins** on thin leader lines with a dot on the end.
- Never put label text on top of the drawing.
- **Write `<text>` literally** — see the trap in §7.
- For "where is this part?" isolates: draw the whole cell ghost-grey and ink in
  only the named part. Students learn the location, not just the shape.

Render a contact sheet of every diagram and *look at it* before wiring them into
slides. Headless Chrome will do it:

```bash
chrome --headless=new --screenshot=sheet.png --window-size=1500,1700 file:///sheet.html
```

This is how the ER labels-over-the-cell and the sideways microscope arrowheads
were caught — both passed the audit.

---

## 6. Verification

Nothing ships until all four are clean:

```bash
npm run lint         # zero warnings
npm run build
npm run audit:svg    # diagram text fits its boxes and frame
npm run check:deck -- "http://localhost:5173/#/lesson/<course>/<unit>"
```

`check:deck` ([scripts/deck-check.mjs](../scripts/deck-check.mjs)) walks every
slide in headless Chrome and reports what the other three cannot see: content
overflowing a slide, images that failed to load, and console errors. It found
three real bugs that lint and build were happy with.

### check:deck does not test the mode you teach in

`check:deck` measures the deck **windowed, at 1440×900, in English**. The lesson
is taught **fullscreen, in project mode**, where every layout swaps to `clamp()`
type that is roughly 40% larger. A deck can be spotless in `check:deck` and still
scroll on nine slides in front of the class.

Check project mode separately, at the resolution the room actually has (1.2 was
clean at 1920×1080 while still overflowing seven slides at 1366×768), and in
**both languages** — Vietnamese runs longer and fails different slides than
English does.

Two things make that harder than it looks:

- Project mode calls `requestFullscreen()`, which needs a **trusted user
  gesture**. `element.click()` from injected JS is not one — drive it with CDP
  `Input.dispatchMouseEvent` on the button's coordinates.
- Headless Chrome **ignores `--window-size`** for this; it reports 800×600 and
  every slide looks broken. Set the viewport with
  `Emulation.setDeviceMetricsOverride`, and set it **again after** entering
  fullscreen, which resets the override.

Get a baseline from a deck that already teaches well before assuming a number is
bad — 1.1 overflows one slide by 96px at 1366×768 and is fine in the room.

Then check by eye, because these are visual artefacts:

- [ ] **Dark mode**, not just light — especially any text on a *fixed*-colour surface
- [ ] **Vietnamese** — toggle it and read a dense slide; VN runs longer than EN
- [ ] **Project mode** on the biggest slides (the Project button — the `F`
      shortcut in its tooltip is not actually wired up)
- [ ] Every **Draw This** slide is actually drawable in the time you'd allow
- [ ] The **teacher plan** matches the deck you just built

When checking a **deployed** site, let images settle before judging: sample too
early and every slide reports broken images that are merely still downloading.

---

## 7. Traps that have already bitten

Each of these passed lint *and* build while being visibly broken.

**Tailwind only scanned `./src`.**
Lesson data carries Tailwind classes too (`color: 'bg-[#5c2483]'`), so the class
was never generated and the hero rendered white-on-white. `content/**` is in the
glob now, and `HeroLayout` paints from an inline style so it cannot fail
silently again. → *If a colour "isn't applying", check which directory the
string lives in before debugging the component.*

**`audit:svg` only sees literal text.**
Labels emitted from a `${label(...)}` helper are invisible to it, so the audit
reported "0 overflows" while checking **zero labels**. → *Write label `<text>`
out literally; use helpers only for shapes and leader lines.*

**`fill="currentColor"` in dark mode.**
Inherited near-black, on a dark panel. Invisible. → *Give diagrams their own
white plate and explicit fills; set an explicit text colour on any inline-SVG
container.*

**Bold text on a surface that doesn't follow the theme.**
The hero's callout card is *always* white, but `parseInlineText` defaults bold
to `dark:text-slate-100` — so in dark mode the emphasised words went
white-on-white. → *When the surface is a fixed colour, pin the emphasis colour
to the surface, not to the theme.* `HeroLayout` now passes explicit
`STRONG_ON_CARD` / `STRONG_ON_FIELD`.

**Layout heuristics keyed off the wrong number.**
The gallery chose its compact card by *item count*, so four cards in two columns
still overflowed. → *Key off what actually causes the overflow — rows.*

**Text that only renders sometimes.**
`compare` captions and `stack` checklist items printed literal `**asterisks**`
because they weren't passed through `parseInlineText`. → *Any author-facing
string field must go through it.*

**A `$` in body text ate the sentence.**
`parseInlineText` splits on `/(\$[\s\S]+?\$)/` to find KaTeX, so *any* two dollar
signs on a line become a maths span. Writing a currency amount — even the
escaped `$\$20$` — printed a stray backslash and swallowed the words between.
→ *Never put a `$` in prose. Write "20 dollars", and keep `$…$` for real maths.*
Related: a lone signed number reads better as plain text with a Unicode minus
(`−5`) than as `$-5$`; save KaTeX for expressions that actually have operators.

**Slide index carried across lessons.**
Navigating from one lesson URL straight to another kept the index, landing
mid-deck and crashing when the second deck was shorter. Fixed with a `key` on
`<Deck>`.

---

## 8. Definition of done

- [ ] `lint`, `build`, `audit:svg`, `check:deck` all clean
- [ ] Every user-facing string has a `…Vn` twin
- [ ] Light **and** dark checked by eye
- [ ] Every copy-down item is in a `write` note or an orange bumper
- [ ] Every image is in `CREDITS.json` with an honest licence
- [ ] `plan.js` matches the deck
- [ ] Committed to `main`; deployed; **live URL confirmed serving the new bundle**
