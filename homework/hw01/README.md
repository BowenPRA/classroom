# Year 7 · Homework Packet 1

`hw01.tex` — Mathematics 1.1 (Adding & Subtracting Integers) and Science 1.1 (Cells).

This is the **reference implementation** for the format. To build a new packet, copy
this file, delete the body, and follow the `new-homework` skill.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw01
```

Builds both copies, reports errors and overfull boxes, and rasterises every page to
`.preview/` so the layout can be checked by eye — which is the only way it gets
checked. Or by hand, twice (the second pass settles the TikZ bounding boxes):

```bash
pdflatex hw01.tex && pdflatex hw01.tex
```

House style is shared, in `../hw-style.tex`. No shell-escape, no bibliography, no
external images — the diagram is inline TikZ, so the two `.tex` files are the whole
document and it compiles unchanged on Overleaf.

Built and verified with MiKTeX 25.12: 8 pages, no errors, no overfull boxes.

## Student copy vs teacher copy

`hw01.pdf` is the student copy. For the teacher copy — same packet with an answer key
appended — build it without editing anything:

```bash
pdflatex -jobname=hw01-teacher "\def\TEACHER{}\input{hw01.tex}"
```

That produces `hw01-teacher.pdf` (10 pages). Alternatively flip `\keyfalse` to
`\keytrue` near the top of `hw01.tex`.

## What's in it

**Section A — Mathematics**

| | |
| --- | --- |
| A1 | Show `4 + (−3)` on the number line; higher/lower/warmer/colder sentences |
| A2 | Twelve calculations covering all four movement rules |
| A3 | Six English → calculation translations, with a Word help box |
| A4 | Difference, including the "difference between" vs "minus" pair |
| A5 | Three word problems (Mr Bowen throughout) |
| A6 | **Backwards:** given an expression, write the word problem that matches it |

**Section B — Science**

| | |
| --- | --- |
| B1 | Vocabulary match |
| B2 | Animal / plant / both tick table |
| B3 | Four full-sentence questions, with sentence starters |
| B4 | A model of a cell — identify each item, then extend it to a plant cell |
| B5 | Label the plant cell (TikZ diagram, seven leader lines) |

The label-the-diagram question sits **last** on purpose. It is a full-page block that
cannot be broken, so putting it anywhere else leaves a third of a page empty above it.

None of the questions are lifted from the workbook. Section A re-uses the *language*
traps from the deck (subtract-from, difference-vs-minus, up-words and down-words) with
new numbers and new contexts.

## Design conventions

- **No solid dark banners.** Every header is a light tint with a coloured spine on the
  left, so the colour reads clearly without flooding a classroom printer.
- **No marks and no mark totals.** This is practice, not an exam paper.
- Learner's Book palette: teal sections, purple activity, orange "remember",
  green "your turn", blue **Word help**.
- Orange marks anything the student must know; blue marks English support.
- Lato at 12pt with open leading, and `mathastext` so inline maths is set in Lato too —
  without it every `-6 + 4` renders in Computer Modern serif and the sheet looks
  half-typeset.
- Writing lines are spaced for Year 7 handwriting, not adult margin notes.
