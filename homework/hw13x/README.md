# Year 7 · Extra Homework 13 — The Same Amount

`hw13x.tex` is an **eight-page** extra packet that goes out with **Homework 13** (`../hw13/`,
*Count It, Measure It, Key It*) and is due the same day, **Monday 23 November 2026**. The
teacher asked (17 November 2026) for an easier packet with *"a lot of work on equivalent
fractions and converting between improper and mixed numbers"*, *"much more towards fraction
work, very little on data"*, and *"a little of animals and keys from sci 4.4 and 4.5"*. No
French.

| File | What it is |
| --- | --- |
| `hw13x.pdf` | Student copy. **8 pages.** |
| `hw13x-teacher.pdf` | Student copy plus a 2-page key with the wrong answers to expect. **10 pages.** |

Build: `pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw13x`

## Revised 17 November 2026

The teacher found the first version's formatting and spacing poor and disliked the title
*How Many Wholes?* Renamed **The Same Amount**. Each page now breaks where it was planned
(`\clearpage`) and its spare space is spread between questions (`\vfill`) or given to
bigger pictures, arrows, table rows and key diagrams, instead of collecting at the foot
of the page. No question changed.

## The framing

As in EX 3–12, nothing on the sheet says *easy* or *extra help*. The cover says every fraction
question is about one idea: *the same amount, written in a new way*. Every method is printed
as pictures or boxes, (a) is always done in teal, and the scaffold fades (arrows printed, then
an empty arrow label, then no arrows). Numbered **X1–X16** because Homework 13 uses A–C.

## What's in it

| | |
| --- | --- |
| **Part 1 · Fractions** (about six pages) | |
| X1 | What fraction is shaded? Bars and cakes, and say it in English |
| X2 | Shade the same amount: 1/3 → ?/6, 3/4 → ?/8, 2/5 → ?/10 |
| X3 | A printed fraction wall (1 to tenths) and six boxes to fill from it |
| X4 | = or ≠, checked on the wall; (e) 2/4 vs 2/8 is the trap |
| X5 | Fill the box with arrows: × then ÷, labels fading; nine bare ones; three equal to 1/2 |
| X6 | Count the wholes: Mr Bowen's cakes as quarters / thirds / halves / fifths, both ways |
| X7 | Improper → mixed: "÷ = □ remainder □" boxes; 12/4 is a whole number |
| X8 | Mixed → improper: "× = □, □ + = □" boxes |
| X9 | Number line in quarters: A–D as quarters and mixed numbers (C is 2) |
| X10 | Match six improper fractions to mixed numbers that mostly start with 2 |
| X11 | Mr Bowen's cake, pizzas, bánh mì loaves and water bottle |
| X12 | Mr Bowen's mistakes: three wrong, one right |
| **Part 2 · Data and keys** (about two pages) | |
| X13 | A word, a count or a measure? Six animal facts |
| X14 | Use a branching key: snake, chicken, water buffalo, frog |
| X15 | Good or bad key question? |
| X16 | Finish the key: fish, butterfly, chicken, dog, with a word bank |

## Nothing untaught

Everything is from 7.1 Part 1 (`classroom/content/y7-math/U07_1a` in PRA Learn): numerator,
denominator, equivalent fractions by × or ÷ top and bottom, the fraction wall, = and ≠,
improper fraction, mixed number, divide / multiply then add. Ordering fractions is Part 2 and
is not used. Part 2 uses 6.1's word / count / measure, 4.4's branching key and 4.5's good key
question. HW 13's six animals are not reused.

Built and verified: student copy 8 pages, teacher 10 pages, no errors and no overfull boxes.
Every page was rasterised and read, and every answer in the key was checked by hand.
