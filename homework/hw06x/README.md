# Year 7 · Extra Homework — One Letter at a Time

`hw06x.tex` — expressions, substituting, and where volume comes from. Goes out
alongside **`../hw06/`**, for students who will get more out of Unit 2 with the same
ideas taken one step at a time.

Due **Monday 14 September 2026**, printed on the cover.

## The framing is deliberate

As with `hw03x`, `hw04x` and `hw05x`, nothing on the sheet says *easy*, *basic*, *extra
help*, *catch-up* or *revision*, and no question is marked as being for anybody in
particular. The cover states a fact instead, and it is a true one:

> There is almost **no arithmetic** in Unit 2. Every number in it is small. What decides
> the answer is one letter — what it stands for, and where you put it.

Handing it out with that sentence said out loud, rather than handed quietly to four
people, is the intended use.

## The scaffolding is the workbook's own

This is what the teacher asked for, and the source is Section 2.1's Focus pages. Five
devices are borrowed directly:

- **A bag you can see into, twice, then one you cannot** (E1). It is the clearest
  picture of what a letter is that exists.
- **A part-written sentence with a box to fill**, walked from a known number to an
  unknown one (E2): `6 + 3 = ☐`, then `☐ + 3 = ☐`, then `☐ + 3` with nothing after it.
- **"The first one has been done for you"** on every matching and true/false question —
  E5, E6, E7, E9, E11, E12.
- **One letter, one situation, four operations in a row** (E4), which is the workbook's
  box-of-toys question moved into the beaker the class handled in Science.
- **A Tip that prints the middle line itself** — the workbook writes `n − 1 = 5 − 1 = ☐`
  in the margin. E8 is that idea promoted to a whole question.

**E8 is the sheet in miniature.** Every middle line is printed as a skeleton with the
numbers missing, so it cannot be skipped: filling the boxes *is* the method. That one
habit is what fixes `3n = 34`.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw06x
```

Built and verified with MiKTeX 25.12: **8 pages**, no errors, no overfull boxes.
Teacher copy is 12 pages. Every page was rasterised and read.

## What's in it

| | |
| --- | --- |
| **Part 1 — What a letter is** | |
| E1 | Two bags you can count, one you cannot. Choose your own letter |
| E2 | Put three more in — the ladder from 6, to 10, to `n` |
| E3 | Say it the short way: `4n`, `ab`, `w` over 2 |
| E4 | One beaker, four things to do to it |
| E5 | **Match the description to the expression** — 3 and 8, six ways round |
| **Part 2 — Putting a number back in** | |
| E6 | Expression or formula, first two done |
| E7 | The same expression four times, `m + 7` beside `4m` |
| E8 | **The middle line, with the numbers left out** |
| E9 | True or false, and if it is false put it right |
| E10 | Two formulae, one rectangle: `A = lw` and `P = 2l + 2w` |
| **Part 3 — Where volume comes from** | |
| E11 | Count the letters, then write the unit |
| E12 | Four boxes, `V = lwh`, the first done |
| E13 | **The tank, one step at a time** — base area first, letter second |
| E14 | cm³, ml and litres |
| E15 | Say what changed |

## The questions worth talking about

- **E5 is the best question on the sheet.** Every description uses 3 and 8 and nothing
  else, so there is no arithmetic in it at all — the only thing being tested is reading.
  Mark **c against d** and **e against f**: one word, *from*, is the entire difference,
  and a student who gets c and e right and d and f wrong has read every word except that
  one. That is a very specific and very fixable diagnosis.
- **E11's `3ab` row** teaches something. Three symbols, two lengths — the 3 is a count
  and does not carry a centimetre, so the unit is cm². Expect cm³ from most of the class
  and treat it as a discussion: the rule they extracted was nearly right, and the
  correction is one word.
- **E12's four boxes are drawn identically on purpose.** The picture carries no
  information, so the numbers have to be read. A student who says "C is biggest because
  it looks biggest" has been caught by a trap set for exactly that.
- **E13(c)** is the only step with no arithmetic in it and it is the one to check.
  Writing `200 × h` as `200h` is E3 arriving in a new place.
- **E15** is the only question with no arithmetic anywhere, and it is the Section C idea
  from HW 6 reduced to four ticks and a two-word sentence.

## Layout notes for whoever edits this next

- **`\nbox` is the sheet's whole design** — an empty square inside a printed line, not a
  blank. It has to look like something you write in.
- The cuboid **depth labels sit outside the top-right slant edge**. On the bottom slant
  they landed on top of the dashed hidden edges and read as if they were labelling the
  front bottom edge.
- **E14's heading gets a line of prose before its orange box.** Without it the heading
  landed alone at the foot of a page, because a `\qhead` fits where the `tcolorbox` after
  it does not, and a heading with nothing under it is the worst page ending there is.
- **E9's rows are 4.0em, not 2.5em.** The last column has to hold a whole middle line;
  at 2.5em it was a 3 mm slot, and it left the page a third white.
- `\qlines{n}` rather than `\wlines{n}` everywhere — see the note in `hw06.tex`.
