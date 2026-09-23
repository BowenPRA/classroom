# Year 7 · Homework Packet 8

`hw08.tex` — **Where It Lands on the Line**: Science 2.8 (acids, bases, indicators, the
pH scale, neutralisation), a short Science 2.7 block (compounds and mixtures), and
Mathematics 2.6 (inequalities), 2.5 (equations and formulae) and 3.1–3.2 (place value
and rounding).

Due **Monday 28 September 2026**. The date is printed on the cover in red rather than
left as a blank line.

Goes out with **`../hw08x/`**, the Extra Homework sheet on decimals and place value.

## Science is at the front, and Section C depends on it

Every packet except 5 has led with maths. This one does not, because **Section C reads
Section A's table**. The eight liquids that get placed on the pH scale in A1 are the
same eight that C2 filters with `<` and `>`, and a student who has not done A1 cannot
start C2. The cover says so.

## Section F is why this packet exists

Four things on this packet are the same object, and nothing in either course says so:

> the pH scale, the number line, the measuring cylinder and the graph axis are all a
> row of marks with numbers on it, and every one of them asks **how much is one small
> line worth?** before it will tell you anything.

Rounding is the same question asked backwards — which mark on the line are you allowed
to land on.

Four of the ties are exact rather than decorative:

- **A1 and Section F are inverses, not repeats.** A1 gives the number and asks for the
  place: every pH on the list is a decimal, so each liquid has to be counted onto the
  scale in small lines worth 0.2 each. F2 and F3 give the place and ask for the number.
  Section F's opening line says so out loud.
- **C2 is A1 read with inequality signs, and the decimals are what make it bite.** Four
  of its six inequalities name a liquid's pH exactly, so that liquid is excluded:
  `p > 9.6` drops baking soda, `p < 3.8` drops orange juice, and `p > 12.6` drops bleach
  — which leaves **no answer at all**, and the instruction line warns that one of the six
  is like that. Pure water at **7.0** is in neither `p < 7` nor `p > 7`, which is the best
  row on the question.
- **F2's cylinders A and B are the same picture with different numbers**, and the two
  readings are 65 and 6.5. A factor of ten, which is Section E standing in a cylinder.
  Part (b) asks them to explain it and it is the best question in Section F.
- **F3(f) is D3(e) from the other end.** D3(e) hands them `m = 60 + v` and asks for `v`;
  F3(f) shows them the line and asks for the formula. Hand those two back together.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw08
```

On a machine with only Windows PowerShell 5.1 there is no `pwsh` on PATH — call the
script directly:

```bash
powershell -c '& "C:\Users\bowen\lessons\.claude\skills\new-homework\scripts\build-hw.ps1" hw08'
```

Built and verified with MiKTeX 25.12: **10 pages**, no errors, no overfull boxes.
Teacher copy is 16 pages. Every page was rasterised and read; every answer in the key
was checked arithmetically, not by eye.

## What's in it

| | |
| --- | --- |
| **Section A — Science 2.8** | |
| A1 | The colour-coded pH scale, drawn as a ruler with five small spaces to a whole number. **Eight liquids with decimal pH values** to draw onto it and label, then acid / neutral / alkali |
| A2 | Why the school buys litmus *and* universal indicator: litmus cannot separate pH 8 from pH 13 |
| A3 | The misconception of the lesson — pH 13 is as dangerous as pH 1, and it is under his kitchen sink |
| A4 | Neutralisation: which of four things to dig into soil at pH 4, then why |
| **Section B — Science 2.7** | |
| B1 | Compound or mixture, eight rows. Water and sea water are on the same row on purpose |
| B2 | Iron and sulfur, stirred and then heated, and why the magnet stops working |
| **Section C — Mathematics 2.6** | |
| C1 | Write `<` or `>`, then say it aloud in English. The English column is the question |
| C2 | **Which liquids match the inequality** — A1's table, six inequalities, four of which name a pH exactly and one of which has no answer |
| C3 | English → inequality, on four real pH rules, two of them with decimals |
| C4 | Read two number lines, draw one |
| C5 | The smallest or largest integer, including the negative-direction trap |
| **Section D — Mathematics 2.5** | |
| D1 | Check by substituting. All three wrong answers are the same habit |
| D2 | Two-step equations; write the middle line |
| D3 | **You are given the formula — find the letter.** Six formulae, a mix of one-step and two-step |
| D4 | Two word problems. The second one is the cat |
| **Section E — Mathematics 3.1–3.2** | |
| E1 | Multiply and divide by powers of 10 |
| E2 | Round to 1 and 2 decimal places. Four of the eight need the trailing zero |
| E3 | One place further: divide to one extra digit, then round |
| E4 | Mr Bowen's homework — one of four is right |
| **Section F — the bridge** | |
| F1 | **How much is one small line worth?** Count the spaces, not the lines, then divide |
| F2 | Four measuring cylinders, ticks worth 5, 0.5 and 0.2 cm³, plus one to draw on |
| F3 | A graph whose axes have to be worked out before anything can be read off it |

## Student copy vs teacher copy

`hw08.pdf` is the student copy; `hw08-teacher.pdf` is the same source with the answer
key appended (`\def\TEACHER{}`). The key gives the diagnosis, not just the answer: which
wrong answer to expect, what it means, and which questions to discuss rather than mark.

## What came out, and where it went

Four things were cut to reach ten pages. Three of them lost nothing:

- **D2, a block of six bare one-step equations.** D3(a), (c) and (d) are one-step
  equations arrived at from a formula, which is the same solving with a reason attached,
  and D1 still gives the section its easy way in. The only thing that left with it is the
  equation written backwards, `31 = t + 16`; say that one out loud when you hand the
  packet back.
- **One of three number lines to read in C4**, and one of two to draw. What is left still
  covers less-than, greater-than and a line that crosses zero.
- **Two of the six "smallest integer" items in C5**, and two of eight in E1.

One cut does lose a stated objective, so it did not simply disappear:

- **E2, the mg → g → kg → t mass ladder.** `hw08x` Part 4 teaches the ladder at length
  and every student gets that sheet. Set the two together, not one instead of the other.

## Source notes

The pH values are the lesson deck's own (Science 2.8, slide 14) with a decimal added, and
the fourteen colours of the scale are the exact hex values from
`content/y7-science/U02_8/diagrams.js` — so the scale the class coloured into their
notebooks on slide 13 and the scale printed here are the same scale. Do not "improve"
them.

The band is drawn as a **continuous** scale, with pH *n* at the centre of its colour
rather than filling a cell of its own. That is what gives a pH of 2.4 somewhere to land,
and it is why A1 is a placing task rather than a lookup.

Nothing on the packet is lifted from the workbook. Where a trap from a deck is reused it
has new numbers and a new context.
