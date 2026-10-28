# Year 7 · Extra Homework 11 — How High Does It Bounce?

`hw11x.tex`: an **eight-page** extra packet that goes out alongside **Homework 11**
(`../hw11/`, *180° Apart*), due the same day, **Friday 6 November 2026**. The teacher
asked (28 October 2026) for "an easier extra homework packet that covers more decimal
work mixed in with the science (and some angles)". So every number is a Unit 4
decimal, every question is Science 3.4 Tides, 3.5 Energy or 3.6 Changes in energy, and
Part 3 is a light touch of Maths 5.1 (180° on a line, 360° round a point, the two
steps).

| File | What it is |
| --- | --- |
| `hw11x.pdf` | Student copy. **8 pages.** |
| `hw11x-fr.pdf` | Student copy with a grey French line under every instruction and question. **12 pages.** |
| `hw11x-teacher.pdf` | Student copy plus a 3-page key with diagnoses. English only. **11 pages.** |

## The framing is deliberate

As with `hw03x` to `hw10x`, nothing on the sheet says *easy*, *basic*, *extra help*,
*catch-up* or *revision*. The cover states a fact instead:

> There is **nothing new to calculate** here. Every number is a Unit 4 decimal, and
> every question is this week's science.

Every method is printed as a frame, as in `hw09x`. There are column grids with the
point column drawn and an **orange box wherever a 0 must be written**, and division
frames with the point already up. The scaffold fades through each question: the first
row is done, the next is partly printed, the rest are empty. The question numbers are
**X1–X12**, because Homework 11 uses A–F and the two sheets go home together.

## What's in it

| | |
| --- | --- |
| **Part 1 · Tides in decimals** | |
| X1 | Read a tide board with a line every 0.2 m: 5.4, 4.4, 2.2, 1.2 m over one falling tide; which time was high tide, which low |
| X2 | Tidal range in column grids: 5.4 − 1.2 (worked), 3.75 − 0.9**0**, 6.1**0** − 2.35; the Bay of Fundy's 16.3 m against 4.2 m, grid placed by the student |
| X3 | **Half above, half below**: 3.4's Question 6 (average 5.0, range 2.0, deepest 6.0, *not* 7.0) as row 1, then three more rows; Mr Bowen's 4.5 + 3.0 = 7.5 mistake to explain |
| X4 | The earth tide: 30 cm = 0.3 m, twice a day, 4.2 m in a week, and nobody noticed. Why not? |
| **Part 2 · Energy in decimals** | |
| X5 | Six balls dropped from 2 m: bouncy 1.75, ping-pong 1.5, basketball 1.35, tennis 1.1 (the deck's), clay 0.05, an egg 0. How far below 2 m (2 = 2.00); order them (1.5 > 1.35); which changed the most energy to sound and heat |
| X6 | The mean of three bounces: 3.33 ÷ 3 = 1.11 with the digits placed, then 4.08 ÷ 3 = 1.36 with them taken away |
| X7 | The book's joules: the kettle by 0.1 litres (40 000 J each), split 3.5 floors and 12.5 m, and a cup of tea (0.2 litres) in floors of stairs: 40 |
| X8 | Mr Bowen's coffee cools 82.5 → 64.0 → 51.5 → 43.0 °C in a 28.5 °C room: the drops shrink (18.5, 12.5, 8.5), heat goes from the coffee to the room, and it never gets colder than the room |
| **Part 3 · Some angles** | |
| X9 | The Earth turns 15° an hour: 6 h a right angle (high to low), 12 h a straight line (high to high), 24 h a full turn, 0.5 h 7.5°, 2.5 h 37.5° |
| X10 | Equal angles round a point by short division: turbine 120°, fan 72°, pizza 45°, and 16 slices 22.5° (into the orange box) |
| X11 | A ramp at 32.5°: 180.0 − 32.5 = 147.5°; the ball's energy change; 90° + 47.5° and the two steps: 42.5° |
| X12 | The whole sheet in one question: a beach day's tidal range (4.6**0** − 0.75 = 3.85), 6 hours = 90° = a right angle, a ball that bounces 0.35 m on sand, its store, where the energy went |

## Nothing untaught

The tennis ball's 1.1 m is the 3.6 deck's bouncing ball. The other balls are realistic
(a bouncy ball keeps most of its height, clay almost none), and the egg is the deadpan
one. The joules are the book's (page 106): 2 000 J a floor, 200 J a metre run,
400 000 J a litre boiled. The 16.3 m and Hanoi's 30 cm are 3.4's. *Hotter to colder* is
3.6's write note. Nothing comes from 3.7 (useful and wasted energy, percentages,
*dissipated*).

Homework 11 uses a **football** bouncing to 1.3 m and **4 floors, 45 m, 0.5 litre** for
its joules, so this sheet does not.

## French copy

`hw11x-fr.pdf` is the same source built with `\FRENCH` defined, on HW 9's scheme (see
`../hw09/README.md`): `\fr` and `\frin` lines that are empty in the English copy, the
English key word in blue inside the French, the English decimal point, *en anglais*
wherever the student writes. It has more room: leading 1.10, writing lines 1.9em apart,
taller rows, and a shorter tide board (`\boardy`). X5's ball column is a fixed 2.75 cm
so the French names wrap inside it, not off the page. **Twelve pages**, whole
double-sided sheets. The spare space falls under the cover box (X1 is one block, the
board beside its table) and after X4.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw11x -French
```

Built and verified with MiKTeX: student copy **8 pages**, French **12**, teacher **11**,
no errors, no overfull boxes. Every page of all three copies was rasterised and read,
and every answer in the key was checked arithmetically.
