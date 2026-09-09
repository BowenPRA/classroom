# Year 7 · Homework Packet 6

`hw06.tex` — **Unit 2 so far, and the place the two subjects meet**: Mathematics 2.1–2.2
(constructing expressions; using expressions and formulae) and Science 2.1–2.2 (solids,
liquids and gases; particle theory; changes of state; measuring volume and temperature).

Due **Monday 14 September 2026**. The date is printed on the cover in red rather than
left as a blank line.

Goes out with **`../hw06x/`**, the Extra Homework sheet.

## Section C is why this packet exists

Volume is the one quantity both courses handed this class in the same week, from
opposite ends. Science measured it in a cylinder, in cm³. Maths built it out of
letters. Section C puts them on one idea:

> the small number in the unit counts how many lengths you multiplied

so cm, cm² and cm³ stop being three labels to memorise and become one length, two
multiplied, three multiplied. Everything in C follows from that:

- `V = lwh` is three letters, three lengths, cm³ — and `2l + 2w` has two letters and is
  still cm, because they are **added**. That row is the whole question and most of the
  class will get it wrong.
- A tank with a fixed base turns a depth into the expression `300h`, then the formula
  `V = 300h`, then a substitution. 2.1's wall and 2.2's wall on the same object.
- The science property *a liquid keeps its volume but takes the shape of its container*
  becomes an algebraic statement: `l`, `w` and `h` all change and `lwh` does not.
  Neither subject could have said that on its own.
- The syringe does the opposite for a gas: `v` becomes `v/2` because the gaps close.
  Fill the same syringe with water and the answer is `v`, unchanged — an expression
  that is a single letter, which some students will not believe is an answer.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw06
```

On a machine with only Windows PowerShell 5.1 there is no `pwsh` on PATH — call the
script directly:

```bash
powershell -c '& "C:\Users\bowen\lessons\.claude\skills\new-homework\scripts\build-hw.ps1" hw06'
```

Built and verified with MiKTeX 25.12: **10 pages**, no errors, no overfull boxes.
Teacher copy is 16 pages. Every page was rasterised and read.

## Student copy vs teacher copy

`hw06.pdf` is the student copy; `hw06-teacher.pdf` is the same packet with the answer
key appended. Rebuild the key alone with:

```bash
pdflatex -jobname=hw06-teacher "\def\TEACHER{}\input{hw06.tex}"
```

## What's in it

**Section A — Mathematics 2.1–2.2**

| | |
| --- | --- |
| A1 | Expression, formula, or neither — the third column is the one that separates the class, because `8 + 5 = 13` has an equals sign and no letters |
| A2 | Write the expression: more than, fewer than, times as much, half as much, total, difference |
| A3 | The word that changes the order — *subtract 6* against *subtract from 6*, `g less than k`, and Mr Bowen's wrong description of `9 − 2m` |
| A4 | Substitute, with the middle line — `5n` when `n = 6` is 30, never 56 |
| A5 | The order of operations does not switch off, including `30 − 4n` |
| A6 | The minus sign travels with its number: brackets at the substitution step |
| A7 | Use a formula, and the part where a correct calculation gives an impossible answer |
| A8 | **Now you write the question** for `40 − 5n` |

**Section B — Science 2.1–2.2**

| | |
| --- | --- |
| B1 | Vocabulary match — matter, property, particle, volume, compressed, vibrate, vacuum, meniscus |
| B2 | The properties table, plus why sand is not a liquid |
| B3 | Full sentences: pouring, the two syringes, and **the sponge** |
| B4 | The five changes of state as verb, noun, from → to, heat or cool |
| B5 | Evaporating or boiling, and the glass of water that emptied over a weekend |
| B6 | Read two measuring cylinders, then **draw** a third at 45 cm³ — the reverse skill |

**Section C — where the two subjects meet**

| | |
| --- | --- |
| C1 | Count the letters, write the unit — and `2l + 2w`, which breaks the rule they just extracted |
| C2 | The tank: expression, formula, substitution, litres, and why `h = 40` is wrong |
| C3 | The same water in three containers |
| C4 | The syringe, where the volume really does change — and where it does not |
| C5 | Three bad ideas, read deadpan |

## The questions that matter most

- **C3** is the question the packet was built around. It is one sentence the class has
  already copied down in Science, and it is also an algebraic fact.
- **C1's last row.** The rule students will have extracted is *count the letters*, and
  here there are two letters and the answer is still cm. Put both answers on the board
  and let the class argue rather than marking it.
- **C2(a) and C2(c)** are 2.1's wall and 2.2's wall on the same object: `300h` is a
  finished answer, and `300h` with `h = 4` is 1200 and never 3004. A student who makes
  both errors has learned the two lessons separately and not joined them up.
- **A8** cannot be answered by pattern-matching, which makes it the best single question
  for finding out who is reading.
- **C4(b)** — the answer is the letter `v`, with no operation at all. Expect blanks.

## Layout notes for whoever edits this next

Three fixes are load-bearing and all three were found by looking at the PNGs, not by
reading the log:

- **`\qlines{n}` exists because `\wlines{n}` splits across a page break** and strands a
  single rule at the top of the next page. It did that three times. `\qlines` wraps it
  in `\needspace{(n+1)\baselineskip}`.
- **The word-help tables must use `l` as the first column, not `p`.** LaTeX puts the
  stretched row strut in the first cell only; inside a `p`-column it lands in the parbox
  and pushes the text down a line, so every left-hand phrase printed one line below its
  meaning. The spec cannot be hidden behind a macro (`array` does not expand macros in a
  preamble) or the table behind a wrapper environment (`tabularx` reads ahead for a
  literal `\end{tabularx}`). Both were tried.
- **The A1 instruction line comes before its orange box.** A section heading followed
  immediately by a large `tcolorbox` cannot be split, so the pair moved to page 2 and
  left the cover page two-thirds empty.

The cylinder diagram in B6 is drawn at `y=0.52cm` per 10 cm³ division. It is atomic — a
`tikzpicture` cannot break — so its height decides which page the whole B6 block lands
on. At `0.64` it overshot the tail of its page by about 1.3 cm, moved whole, and cost
half a page. Do not enlarge it without re-rendering and counting pages.
