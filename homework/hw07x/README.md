# Year 7 · Extra Homework — Split, Multiply, Add

`hw07x.tex` — two-digit multiplication, dividing, and the same grid with a letter in it.
Goes out alongside **`../hw07/`**, for students who will get more out of Unit 2 with the
arithmetic and the algebra shown to be the same picture.

Due **Monday 21 September 2026**, printed on the cover.

## The framing is deliberate

As with `hw03x` through `hw06x`, nothing on the sheet says *easy*, *basic*, *extra
help*, *catch-up* or *revision*, and no question is marked as being for anybody in
particular. The cover states a fact instead, and it is a true one:

> Nobody multiplies by 16. They **split it up**: 4 × 10 is 40, 4 × 6 is 24, and
> 40 + 24 = 64. That is three steps — **split, multiply, add** — and it is also,
> exactly, what expanding a bracket is.

Handing it out with that sentence said out loud, rather than handed quietly to four
people, is the intended use.

## Why the grid, when hw05x already taught multiplication

`hw05x` taught the **column method** — two rows, then add — and long division. This
sheet does not repeat either. It teaches the **grid**, for one reason: the column method
hides the four partial products, and the algebra needs them visible.

`4 × 16` is the deck's own starter for Maths 2.4. `4(x + 3)` is the same grid with one
box unknown. So Part 1 practises the grid on numbers, Part 4 puts a letter in one box,
and nothing else changes. A student who has stopped drawing the grid has nothing to fall
back on when the box will not multiply — which is why F4 and F6 still insist on it.

The division in Part 3 is aimed at one thing: **the reverse of a multiplication**, which
is what undoes a bracket. F10 (`6 × ☐ = 54`) and F16 (`☐(x + 2) = 5x + 10`) are the same
question, and the sheet says so on the page.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw07x
```

Built and verified with MiKTeX 25.12: **8 pages**, no errors, no overfull boxes.
Teacher copy is 12 pages. Every page was rasterised and read, and every answer in the
key was checked arithmetically rather than by eye.

## What's in it

| | |
| --- | --- |
| **Part 1 — Split it up** | |
| F1 | Tens and ones, nine of them. `70 = 70 + 0` is the one that catches people |
| F2 | **Times a ten**, twelve of them — the box that decides whether Part 2 works at all |
| F3 | One row, two digits by one digit, with the grid printed |
| F4 | Twelve more, draw your own grid |
| **Part 2 — Two digits by two digits** | |
| F5 | Six with the four-box grid printed |
| F6 | **Twelve more**, draw your own |
| F7 | Four word problems, none of which says *multiply* |
| **Part 3 — Dividing, the multiplication backwards** | |
| F8 | The same three numbers, four ways — two rows filled in backwards, from the division |
| F9 | Twelve exact, then four with a remainder |
| F10 | **Find the missing number** — every box is a division |
| F11 | Four word problems, including two remainders treated in opposite ways |
| **Part 4 — The same grid, with a letter in it** | |
| F12 | Collect the like terms; the invisible 1, three times |
| F13 | **One box has a letter in it** — F3's grid, unchanged |
| F14 | Fill the boxes: `3(a + 2) = ☐a + ☐` |
| F15 | A minus inside |
| F16 | Find the number outside — F10 with a bracket round it |
| F17 | **Check it with a number** |

## The questions worth talking about

- **F17 is the sheet in one question.** Expand `4(x + 3)`, then put `x = 10` into both
  sides. The left side is `4 × 13` done as one multiplication; the right side is
  `40 + 12`, which is the grid for `4 × 13` arrived at from the algebra. Part (d) asks
  which two numbers were added, and "40 and 12" is the moment the sheet lands. Part (e)
  is the same thing with the scaffolding removed.
- **F2 is the one to mark first.** The top-left box of every two-by-two grid is a ten
  times a ten and is much the biggest number in it. A student who writes 60 for
  `20 × 30` will be about ten times too small on every question in Part 2, and that
  symptom is worth memorising: **answers ten times too small means F2, not F5.**
- **F11 question 2 against question 4.** Both divisions leave a remainder and the two
  remainders are treated in opposite ways — the ten students need a sixth bus, the
  thirteen spare rubber ducks just stay in the box. Nothing in the arithmetic tells you
  which; only the sentence does. That is the whole reason they are word problems.
- **F13's left box.** `2 × x` cannot be worked out, so you write `2x` and move on. A
  student who stalls there has not misunderstood multiplication — they have been taught
  that a box must contain a number, and it is worth saying plainly that this one does
  not.
- **F14(c).** `7(c + 1)` puts a 7 in both boxes and looks wrong. Expect it blank.
- **F9(a), (b) and (c) are all 12** on purpose. Say so afterwards: a student who trusted
  their arithmetic and got three identical answers will have assumed they were wrong.

## Layout notes for whoever edits this next

- **F4 and F6 are separate one-row tables, not one table each.** A `tabularx` cannot
  break across a page, so F6 as a single twelve-cell block walked whole to the next page
  and left two-fifths of the previous one white. As four bands of three, TeX can break
  between any two of them and the student sees no difference.
- **F9's remainder items are in two columns, not four.** An answer there is `35 r 3`,
  and at four columns the blank had nowhere to go and dropped onto a line of its own
  underneath the division.
- **`\gridtwo` and `\gridone` draw every practice grid on the sheet**, so the picture
  never changes between a number question and a letter question. That is the entire
  argument of the sheet, and it only works if nothing else on the page draws a grid a
  different way.
- **`\nbox` is the sheet's other design** — an empty square inside a printed line, not a
  blank. A blank square in front of a letter is much harder to skip than an empty rule,
  and skipping the second number (`3(a + 2) = 3a + 2`) is the headline error of 2.4.
- Adding content here can *reduce* the page count rather than raise it, because most of
  the holes are a block that will not fit rather than a shortage of material. Rebuild
  and look before assuming an addition has cost a page.
- `\qlines{n}` rather than `\wlines{n}` everywhere — see the note in `hw06.tex`.
