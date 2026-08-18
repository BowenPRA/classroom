# P3 — Somebody Is 2.7 km Away

The **two-sided, landscape** working sheet for **Algebra Track Project 3**
(`content/freshman-math/P03_1/`). Not a Year 7 packet: no sections, no marks
printed on it, no Vietnamese, and no answer key PDF.

```bash
powershell -NoProfile -File .claude/skills/new-homework/scripts/build-hw.ps1 -Packet alg13p3 -SkipTeacher
```

**Print double-sided, one per student.** `-SkipTeacher` is deliberate — half the
sheet has no single right answer, and the marking guidance (including the mark
split, 12 for the Hoi An half and 4 for the treasure task) lives in the lesson
plan at `content/freshman-math/P03_1/plan.js`.

| Side | Carries |
|---|---|
| **Front** | The three app readings, then the Hoi An map, almost edge to edge. This side is a drawing surface — the 2.7 km arc alone has a **10.8 cm radius**. |
| **Back** | Q1 (both A–B crossings), Q2 (name the place), Q3 (measure the patch, convert it), Q4 (the privacy answer), the treasure-hunt planning grid, a tear-off clue card, and Q5 (what actually happened). |

## The scale is load-bearing

The map is included at **exactly 25.6 cm wide**, which makes it **1 cm = 250 m**
and **1 km = 4 cm**. The deck tells students to convert 2.7 km into a 10.8 cm
radius on that basis, so **rescaling the `\includegraphics` silently makes the
slides wrong.** If the sheet ever has to be printed at another size, the scale
**bar drawn on the map** is the fallback authority — that is why it is there,
and why the deck says to measure radii off it.

There is no image file in this folder. The `\includegraphics` reaches across to
`content/freshman-math/P03_1/images/hoi-an-map.png` — the same file the deck and
the solution widget use — so the map on the desk and the map on the projector
cannot drift apart. That file is generated from OpenStreetMap data by the script
beside it; frame, projection and anchor coordinates are all in its
`CREDITS.json`.

**The ODbL credit line is burned into the image**, bottom right, and must stay
there. This sheet leaves the building, and a note in a JSON file would not
travel with it.

## Layout notes for a future edit

Two things fought back, both page-count problems, and both the same shape as the
ones in `alg13/`:

- **`includeheadfoot` in the `\geometry` call is load-bearing.** Without it,
  `top=1.0cm` is measured to the top of the *body* and the running head hangs
  off the top of the sheet.
- **A banner at the top of the back page cost a whole extra page.** The
  "1 cm = 250 m" reminder started life as a full-width `tcolorbox` there; at
  1.5 cm tall it was exactly enough to push the two-column row onto page 3 and
  leave page 2 empty. It lives in the running head now, where it appears on both
  sides and costs nothing. Watch for this if anything is ever added above the
  two minipages.

The running head is also kept short on the left for a reason — the full lesson
title there ran straight into the scale note on the right and the two
overprinted.
