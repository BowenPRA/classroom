# A1.3 — The Circle Map

A **one-page, landscape** handout for **Algebra Track 1.3, Circles, Compasses
and Three Points** (`content/freshman-math/U01_3/`). Not a Year 7 packet: no
sections, no marks, no Vietnamese, and no answer key.

```bash
powershell -NoProfile -File .claude/skills/new-homework/scripts/build-hw.ps1 -Packet alg13 -SkipTeacher
```

`-SkipTeacher` is deliberate. Nothing on this sheet has a single right answer —
the student picks their own three cities — so a teacher copy would be an empty
duplicate. The marking guidance lives in the lesson plan
(`content/freshman-math/U01_3/plan.js`), under Slide 8, Slide 12 and Slide 21.

## What it is for

The sheet is used **twice in the same lesson**, and the two uses are the point:

| When | Deck slides | What they do |
|---|---|---|
| Before the construction is taught | 6–7 | **Task 1** — pick three cities, find the circle **by eye**, guessing and re-swinging. Three times, three colours. |
| After the construction is taught | 23 | **Task 2** — pick three again and **construct** it: two perpendicular bisectors, one crossing, one sweep. |

Everybody succeeds roughly at Task 1 and nobody succeeds exactly, which is what
makes the compass worth learning. The comparison between a student's two circles
is the assessment. Do not reorder the lesson so the construction comes first.

The **Challenge** box asks for three cities with no circle through them. On this
map the near-collinear trios are **Madrid–Paris–Amsterdam** and
**Paris–Copenhagen–Stockholm**; there are others. A perfectly straight trio does
not exist among fourteen real cities, so the honest answer is "these three are so
close to a straight line that the centre runs off the sheet" — which is exactly
the right intuition and should be accepted.

## The map, and why this one

There is no image file in this folder. The `\includegraphics` reaches across to
`content/freshman-math/U01_3/images/europe-map.png` — the **same file the deck's
widget uses** — so the class sees the identical map on the projector and on the
desk, and the two cannot drift apart. It is a public-domain
equidistant-cylindrical (equirectangular) blank map from Wikimedia Commons, user
*Anameofmyveryown*, cropped to 12°W–30°E and 36°N–64°N.

The projection is not incidental. It is a uniform **30 pixels per degree in both
directions**, which is why a circle through three cities is an actual circle on
this image rather than an ellipse — conic and relief maps would have made the
whole lesson a lie. The crop is 1260×840 and a city sits at

```
x = (longitude + 12) * 30        y = (64 - latitude) * 30
```

The `\city` macro takes those normalised to the image box, i.e.
`(x/1260, 1 - y/840)`. Full credit and coordinates are in
`content/freshman-math/U01_3/images/CREDITS.json`.

## Layout notes for a future edit

Three things fought back, all of them page-count problems:

- **`includeheadfoot` in the `\geometry` call is load-bearing.** Without it,
  `top=1.0cm` is measured to the top of the *body* and the running head hangs
  off the top of the sheet.
- **The side column must stay shorter than the map.** The row grows to the
  taller of the two, and at `\small` with default `hwbox` padding those three
  boxes came to 15.6 cm against the map's 12 cm — which spilled the sheet onto
  three pages. They are `\footnotesize` with tightened padding for that reason.
- **`tabularx` at a plain `\textwidth` overfills by 2.05 pt**, every time: it
  sizes `X` so the *content* totals the width and then adds the vertical rules.
  The table subtracts `5\arrayrulewidth` from its target.

The shared `\arraystretch` of 1.45 is also overridden to 1.0 before the table;
row height is set explicitly with `\rule` instead, so the writing space is
chosen rather than inherited.
