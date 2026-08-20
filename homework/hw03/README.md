# Year 7 · Homework Packet 3

`hw03.tex` — Mathematics 1.4 (Highest Common Factors), Mathematics 1.5 (Tests for
Divisibility) and Science 1.4 (Cells, Tissues and Organs).

Goes out with **`../hw03x/`**, the Extra Homework sheet on multiplication and division.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw03
```

Builds both copies and rasterises every page to `.preview/` so the layout can be
checked by eye. On a machine with only Windows PowerShell 5.1, call the script
directly instead — there is no `pwsh` on PATH:

```bash
powershell -c '& "C:\Users\bowen\lessons\.claude\skills\new-homework\scripts\build-hw.ps1" hw03'
```

Built and verified with MiKTeX 25.12: **8 pages**, no errors, no overfull boxes, no
half-empty pages. Teacher copy is 12 pages.

## Student copy vs teacher copy

`hw03.pdf` is the student copy; `hw03-teacher.pdf` is the same packet with the answer
key appended. Rebuild the key alone with:

```bash
pdflatex -jobname=hw03-teacher "\def\TEACHER{}\input{hw03.tex}"
```

## What's in it

**Section A — Mathematics 1.4 · Highest Common Factors**

| | |
| --- | --- |
| A1 | Hunt the factor pairs of 36 and 54, then common factors and the HCF |
| A2 | **Divide to decide** — eight divisions, tick only if there is nothing left over |
| A3 | English → calculation, with a Word help box on *divide by*, *share between*, *exactly* |
| A4 | HCF, then divide top and bottom to reach simplest form (six more divisions) |
| A5 | The two mirror-image traps: HCF(9, 10) = 1, HCF(7, 42) = 7 |
| A6 | Two word problems (bracelets; a test score as a simplified fraction) |

**Section B — Mathematics 1.5 · Tests for Divisibility**

| | |
| --- | --- |
| B1 | A 5 × 9 tick grid: which of 2–11 divide into 1260, 3465, 2088, 4510, 5832 |
| B2 | **Now prove it** — six of those ticks, carried out as actual divisions |
| B3 | Three missing-digit questions (tests for 3, 9 and 11) |
| B4 | Two word problems, the second deadpan |
| B5 | **Backwards:** write the word problem for `4368 ÷ 8 = 546`, then explain the test |

**Section C — Science 1.4 · Cells, Tissues and Organs**

| | |
| --- | --- |
| C1 | Vocabulary match |
| C2 | Which level is it? — including the two traps, a leaf and the palisade layer |
| C3 | Climb the ladder: one example on all five rungs |
| C4 | Label the leaf (TikZ cross-section, four tissues) |
| C5 | Full-sentence answers, including the two meanings of *tissue* |

None of the questions are lifted from the Learner's Book. Exercises 1.4 and 1.5 are set
separately from the book, so duplicating them here would waste the packet; Section C's
book homework is Activity 1.4.1, the researched organ-system drawing.

## Division practice, and where it lives

The brief was to work a good deal of division into the maths without a bolted-on block
of bare sums. It is in four places, and in each one the division is the point of the
question rather than an exercise attached to it:

- **A2** divides in order to decide whether something is a factor — eight divisions,
  five exact and three with remainders.
- **A4** divides top and bottom by the HCF — six divisions, and the actual use of an HCF.
- **A6** needs two more divisions after the HCF to answer what was asked.
- **B2** is the largest block: six four-digit divisions, framed as proving the ticks
  from B1. A test says yes or no; only a division says how many.

That is around thirty divisions across the packet.

## Layout notes worth keeping

- **The leaf diagram plus its answer table is one `minipage`.** Left to themselves they
  split across a page break and the answer lines arrived without the picture.
- **C4 (the leaf) sits before C5 (the writing questions), not after.** The leaf block
  cannot break, so putting the breakable questions last lets the leftover space at the
  foot of the packet land on writing lines instead of on nothing. This is the opposite
  of the hw01 arrangement and it is what took the packet from 9 pages to 8.
- **Label columns in a `remember`/`wordhelp` table must be `l`, not `p{}`.** As a
  p-column every label printed half a line below its own description.
- **Section C's orange box carries only the *similar* vs *different* rule.** It used to
  print all four definitions, which handed C1 its own answers.
