# Year 7 · Homework Packet 7

`hw07.tex` — **Mathematics 2.3–2.4** (collecting like terms; expanding brackets) and
**Science 2.5–2.6** (atoms, elements and the Periodic Table; compounds and formulae),
plus Section E, where the two subjects turn out to have taught the same two rules.

Due **Monday 21 September 2026**. The date is printed on the cover in red rather than
left as a blank line.

Goes out with **`../hw07x/`**, the Extra Homework sheet.

## Section E is why this packet exists

Both courses handed this class the same two rules in the same week, and neither said so.

> **1. A letter says what kind. A number says how many.**
> **2. A number written in front multiplies everything after it.**

From the first: `8s − s = 7s` because `s` means `1s`, and `H₂O` has one oxygen atom
because nothing is written after the `O`. Both subjects leave the 1 out and expect you
to know it is there — that is **E2**.

And two of the same kind is still one kind, so `x + x = 2x` and `O₂` is still an
element. **E4** puts those two facts side by side and asks the class to see that they
are one fact. It is the best question on the packet.

From the second rule: `3CO₂` means three lots of `CO₂`, which is `3(C + 2O) = 3C + 6O`.
That is 2.4's grid drawn on a chemical formula, and it is **not an analogy** — it is how
the atoms in a formula are actually counted. **E3** is the keystone, and the grid is
printed on the formula so the class can see it is the same picture.

**E5** closes on the shared error: `4(x + 3) = 4x + 3` and `6CO₂ = 6C + 2O` are one
mistake made twice, once in each subject. Keep B4(a) to hand them back together.

`E1` is the smaller tie and a sharp one: `mg` is `m × g`, `Mg` is magnesium, `CO` is two
elements and `Co` is one. One capital letter changes the meaning completely, and
nothing in maths behaves like that.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw07
```

On a machine with only Windows PowerShell 5.1 there is no `pwsh` on PATH — call the
script directly:

```bash
powershell -c '& "C:\Users\bowen\lessons\.claude\skills\new-homework\scripts\build-hw.ps1" hw07'
```

Built and verified with MiKTeX 25.12: **10 pages**, no errors, no overfull boxes.
Teacher copy is 15 pages. Every page was rasterised and read, and every answer in the
key was checked arithmetically rather than by eye.

## Student copy vs teacher copy

`hw07.pdf` is the student copy; `hw07-teacher.pdf` is the same packet with the answer
key appended. Rebuild the key alone with:

```bash
pdflatex -jobname=hw07-teacher "\def\TEACHER{}\input{hw07.tex}"
```

## What's in it

**Section A — Mathematics 2.3**

| | |
| --- | --- |
| A1 | How many terms — and a number on its own is one, which is the row that separates the class |
| A2 | Like or not like: `2ab` against `5ba`, `m` against `m²`, `5c` against `−2c` |
| A3 | Ten to simplify, four of them containing a lone letter, **two of them already finished** |
| A4 | Every sign travels with its own term |
| A5 | **Now you write the question** for `5a + 3b` |

**Section B — Mathematics 2.4**

| | |
| --- | --- |
| B1 | Fill the grid, three of them |
| B2 | Thirteen to expand: plain, a minus inside, and a number already in front of the letter |
| B3 | Knowing when to stop — `12 − 4c` is finished, and `8 + 2m + 5` is not |
| B4 | Mr Bowen's homework: three wrong, one right |
| B5 | Expand, then collect — including two brackets in one line |
| B6 | The fish tanks, and the question whose answer is `7f` with nothing added to it |

**Section C — Science 2.5**

| | |
| --- | --- |
| C1 | Use the Periodic Table in your book: magnesium and chlorine |
| C2 | Vocabulary match — atom, element, Periodic Table, period, group, symbol, nanotube, metals |
| C3 | The capital-letter rule, and what Mr Bowen actually wrote when he wrote `CO` for cobalt |
| C4 | Full sentences: diamond and graphite are both only carbon |

**Section D — Science 2.6**

| | |
| --- | --- |
| D1 | Element or compound — with `O₂` and `H₂`, which most of the class will get wrong |
| D2 | Naming: the `-ide` and `-ate` endings, mono and di, and *sulfur calcide* |
| D3 | New properties: why salt is safe when chlorine is poisonous |
| D4 | Draw the particles of `O₂`, `H₂O`, `CO₂` and `CH₄` |

**Section E — where the two subjects meet**

| | |
| --- | --- |
| E1 | `Mg` or `mg`? — and `NaOH`, which needs the capital rule to read at all |
| E2 | The 1 that nobody writes, in both subjects |
| E3 | **Counting atoms is expanding brackets** — the grid, on a formula |
| E4 | **The same mistake, in two subjects** — `x + x = x²` and "`O₂` is a compound" |
| E5 | And he made it again — `4(x + 3) = 4x + 3` and `6CO₂ = 6C + 2O` |

## The questions that matter most

- **E3** is the question the packet was built around. `2CaCO₃` is the hard row, because
  the big 2 has to reach past two symbols to get to the small 3.
- **E4** should be discussed, not marked. Accept any wording that gets to *same kind*.
- **E5 against B4(a)**. Same line, twice: once with a letter in it, once with an
  element. A student who corrected B4(a) confidently and left E5 alone has learned a
  maths rule rather than a rule.
- **D1's `O₂` and `H₂` rows.** Take a hand vote before saying anything.
- **B6(c)** — the answer is `7f`, with no number added and no bracket. Expect blanks.
- **A5** cannot be pattern-matched, which makes it the best item in Section A for
  finding out who is reading.

## What was cut, and where it went

The packet ran to fifteen pages before the page target bit. Four things came out, and
three of them are still tested elsewhere on the same sheet:

- **A "Mr Bowen's homework" error-hunt on 2.3.** All four of its traps survive: `4ab`
  against `2ba` is a row of A2, the two already-finished items are A3(g) and A3(j), and
  the invisible 1 is four separate items of A3. B4 keeps the format, on 2.4.
- **A "Read the formula" table** (`H₂O`, `CO₂`, `CH₄`, `NaOH`, `CaCO₃`). E3's middle
  column asks for the atoms of each element by name, which is the same reading done
  harder, and the `NaOH` trap moved to E1 — where the capital-letter rule that decides
  it is the actual subject of the question.
- **A "work backwards" question** (`☐(x + 3) = 5x + 15`). It was the only item in
  Section B outside 2.4's stated objectives. `hw07x` teaches it at length instead.
- **A five-element Periodic Table lookup.** This one *did* cost coverage — it is the
  only kind of question that makes a student open the book. C1 is what came back: two
  elements instead of five, and it now opens Section C because the section header lands
  near the foot of a page and something short has to go there.

## Layout notes for whoever edits this next

Everything below was found by reading the PNGs. The log was clean throughout.

- **The three grids in B1 are three separate blocks, not three rows of a `tabularx`.**
  As table rows their borders touch and they read as one six-row grid, which is exactly
  the wrong idea. The optional argument of `\\` does **not** open the gap — each inner
  `tabular` is centred on its row's baseline and swallows it. Explicit `minipage` pairs
  with a real `\vspace` between them are the only thing that works.
- **B2's answer blanks are inline (`= \blank[1.5cm]`), not on a line under each item.**
  Under the item they cost a whole extra page in a three-column list.
- **`\ansline` exists because `\hfill \blank[...]` at the end of a wrapping `\item`
  overflows the margin** when the text happens to fill its last line. Two of them did.
  It puts the blank on its own right-aligned line, which cannot overflow.
- **C3's fix-the-symbol table is two self-contained three-column blocks side by side.**
  The first version put `NA / cl` in one cell followed by four answer cells, and nothing
  said which *Correct* column belonged to which symbol.
- **Two pages were lost to a heading followed by a big box**, which cannot be split, so
  the pair walks to the next page and strands a third of the previous one. The fix is
  always to shorten what comes *before* it, never to tune the box. Every `\qhead` that
  is followed by a `tcolorbox` here has a line of prose between them for that reason.
- **D4's drawing cells are `\rule[-5.2em]{0pt}{5.6em}`.** At `3.8em` they were 1.6 cm
  tall and nobody could draw a `CH₄` in one.
- `\qlines{n}` rather than `\wlines{n}` everywhere — see the note in `hw06.tex`.
- The packet is at exactly 10 pages with page 10 full to the last rule. Anything added
  anywhere will produce an eleventh page carrying two answer lines.
