# Year 7 · Homework Packet 5

`hw05.tex` — **the whole of Unit 1 in one packet**: Science 1.1–1.4 (cells, animal
cells, specialised cells, tissues and organs) and Mathematics 1.1–1.6 (integers,
multiples and the LCM, factors and the HCF, tests for divisibility, squares, cubes and
roots).

Goes out with **`../hw05x/`**, the Extra Homework sheet on two-digit multiplication and
long division.

## Two things are deliberately different from HW 1–4

**Science is at the front.** Every other packet leads with maths. This one does not,
because the maths section runs to five of the eight pages and opening on the long
section makes a review packet look unfinishable.

**The maths is most of the packet, and most of it is skills and word problems.** Unit 1
is finished; what is left is fluency and, as always in this class, the English of the
question.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw05
```

On a machine with only Windows PowerShell 5.1 there is no `pwsh` on PATH — call the
script directly:

```bash
powershell -c '& "C:\Users\bowen\lessons\.claude\skills\new-homework\scripts\build-hw.ps1" hw05'
```

Built and verified with MiKTeX 25.12: **8 pages**, no errors, no overfull boxes.
Teacher copy is 12 pages. Every answer in the key was checked arithmetically, not by
eye.

## Student copy vs teacher copy

`hw05.pdf` is the student copy; `hw05-teacher.pdf` is the same packet with the answer
key appended. Rebuild the key alone with:

```bash
pdflatex -jobname=hw05-teacher "\def\TEACHER{}\input{hw05.tex}"
```

## What's in it

**Section A — Science 1.1–1.4 · Cells, Tissues and Organs**

| | |
| --- | --- |
| A1 | Vocabulary match across the whole unit — organelle to organism, plus *chlorophyll*, *specialised*, *cellulose* |
| A2 | Climb the ladder: which level, **and the level above it** — the last row has none |
| A3 | Name the specialised cell from a clue, then the `adapted to … because it has …` sentence, then why a root hair cell has no chloroplasts |
| A4 | One full-sentence question: plant or animal, and **how do you know** |
| A5 | **Label the animal cell** — one outline, because an animal cell has no wall |

**Sections B–D — Mathematics 1.1–1.6**

| | |
| --- | --- |
| B1–B2 | Higher/lower/warmer/colder, then twelve calculations covering all four movement rules *and* all four sign rules |
| B3 | English → calculation, six sentences, calculation written first |
| B4 | Difference, including the pair that looks identical and is not |
| C1 | Build the HCF and the LCM from the lists, and why 96 is not the LCM of 8 and 12 |
| C2 | **Which one does the question want?** — tick HCF or LCM on four worded scenarios |
| C3 | The divisibility grid, plus *factor of / multiple of / divisible by* as three sentences for one fact |
| C4 | Squares, cubes and roots, plus which numbers **cannot** be square |
| D1 | Five word problems, one per lesson, with working boxes |
| D2 | **Now you write the question** for `−7 + 12 = 5` |

Nothing is lifted from the workbook, and no question is a straight repeat of HW 1–4.
Where a trap is reused it has new numbers and a new context.

## The questions that matter most

- **C2** is the point of the maths half. HW 2 and HW 3 could only test the LCM and the
  HCF one at a time; this puts them side by side, which is where the class actually
  meets the confusion. Mark the ticks before the answers — a right tick with wrong
  arithmetic is a better piece of work than the reverse.
- **B2(i)**, `−20 + (−14)`, is why the two rule sets are printed side by side. It is an
  addition, so the two negatives do **not** make a positive. A student who writes 34
  has over-applied the multiplying rule.
- **A5** labels an animal cell on purpose, rather than repeating HW 1's plant cell. The
  diagram has one outline, so "cell wall" for label 1 is a real error and not a slip.
- **D2** cannot be answered by pattern-matching, which makes it the best single
  question in the packet for finding out who is reading.

## Layout notes for whoever edits this next

This packet sits **exactly on the 8-page boundary**. Changing a `\smallskip` to a
`\medskip` in the Section B rules box was enough to tip it to nine pages, and the
comment in the source says so. Re-render and check the page count after any edit.

Two page-break fixes are load-bearing:

- Section B's heading lands at the foot of page 3 and its rules box cannot follow it
  there. Guarding the pair with `\needspace{15\baselineskip}` pushes both over and
  costs a whole page; the line of prose after the heading fits, so the page ends on a
  sentence rather than on a bare heading.
- The C3 answer-key table is `\dimexpr\linewidth-14pt`. With `@{}` at both ends
  `tabularx` still counts the outer padding and the table overhangs the text block by
  exactly 14pt.
