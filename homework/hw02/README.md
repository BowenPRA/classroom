# Year 7 · Homework Packet 2

`hw02.tex` — Mathematics 1.2 (Multiplying & Dividing Integers) and Science 1.2
(Animal Cells).

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw02
```

Builds both copies, reports errors and overfull boxes, and rasterises every page to
`.preview/` so the layout can be checked by eye — which is the only way it gets
checked. Or by hand, twice (the second pass settles the TikZ bounding boxes):

```bash
pdflatex hw02.tex && pdflatex hw02.tex
```

House style is shared, in `../hw-style.tex`. No shell-escape, no bibliography, no
external images — the diagram is inline TikZ, so the two `.tex` files are the whole
document and it compiles unchanged on Overleaf.

Built and verified with MiKTeX 25.12: 8 pages, no errors, no overfull boxes.

## Student copy vs teacher copy

`hw02.pdf` is the student copy. For the teacher copy — same packet with an answer key
appended — build it without editing anything:

```bash
pdflatex -jobname=hw02-teacher "\def\TEACHER{}\input{hw02.tex}"
```

That produces `hw02-teacher.pdf` (11 pages). Alternatively flip `\keyfalse` to
`\keytrue` near the top of `hw02.tex`.

## What's in it

**Section A — Mathematics**

| | |
| --- | --- |
| A1 | Complete the four sign rules; then give only the **sign** of six answers, no digits |
| A2 | Twelve calculations, × and ÷, covering all four rules |
| A3 | Six English → calculation translations, with a Word help box |
| A4 | Brackets first, plus a student's wrong answer to diagnose in a sentence |
| A5 | Use an estimate to catch a wrong answer |
| A6 | Three word problems (Mr Bowen throughout), the last one deadpan |
| A7 | **Backwards:** given an expression, write the word problem that matches it |

**Section B — Science**

| | |
| --- | --- |
| B1 | The comparing words — *both / and / but / Unlike / similar / the same* |
| B2 | True or false, then rewrite the false ones so they become true |
| B3 | Three full-sentence questions, with sentence starters |
| B4 | Two microscope pictures — plant or animal, and the onion that breaks "no green means animal" |
| B5 | Label the animal cell (TikZ diagram, four leader lines) |

The label-the-diagram question sits **last** on purpose. It is a full-page block that
cannot be broken, so putting it anywhere else leaves a third of a page empty above it.

## What is deliberately *not* in it

Workbook Exercise 1.2 is already set as homework from the lesson deck, so nothing here
duplicates it. In particular the packet avoids the workbook's shapes entirely — no
addition pyramids, no multiplication grids, no product-circle diagrams — and the four
rounding drills that would naturally sit in A5 are gone, because Q8 and Q9 of that
exercise are exactly those. A5 keeps only the part the workbook does not ask: using an
estimate to *catch* a wrong answer.

Section A reuses the *language* traps from the deck with new numbers and new contexts:
`divided by` versus `divided into`, "two negatives make a positive" being false for
`+`, brackets first, and which number is the one being shared out.

The science section covers animal cells only. The Learner's Book cheek-cell practical
is not tested — the class has not run it, because the microscope has not arrived.

## Layout notes worth keeping

Everything below was found by rasterising the PDF and looking, not by reading the log.

- The cell outline is a **lopsided blob**, not an ellipse. The first draft used
  near-symmetric coordinates and TikZ's smoothing turned them into a tidy oval, which
  teaches the opposite of "an animal cell has no fixed shape".
- The Section B **Remember box is kept to three lines** so it fits on the page it
  starts on. At six lines it split across the page break and hyphenated
  "chloroplasts"; reserving space with `needspace` to prevent that pushed the whole
  block onto the next page and cost a page overall. Shortening the box costs nothing.
- The **A3 Word help box uses different numbers** from the questions it supports.
  Matching numbers would hand over three of the six answers.
- `needspace` around A5 was tried and removed. One reservation of 5 baselineskips
  there was enough to push the packet from 8 pages to 9. Folding the question stem
  into part (a) achieved the same thing for free.
