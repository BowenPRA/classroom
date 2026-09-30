# Year 7 · Quarter 1 Review Packet

`q1rev.tex` — **Q1 Review: Units 1 to 3**: Mathematics 1.1–1.6 (integers, factors,
multiples, tests for divisibility, roots), 2.1–2.6 (expressions, formulae, like terms,
brackets, equations, inequalities) and 3.1–3.2 (powers of 10, the mass ladder,
rounding). Maths only.

Name and date given go once, on the cover; there is no name line on every page. The
cover's instruction box is two lines: the three levels as coloured words, then "No
calculator. Show all your work."

Goes out before the **Quarter 1 Assessment** (50 marks, 60 minutes, no calculator,
Units 1–3 mixed in the school's Progress Review format).

## The assessment is not in this repo, on purpose

The assessment and its mark scheme live in
`OneDrive\Desktop\Y7Tests\Maths\Q1-Assessment\`, beside the Cambridge tests. This repo
is public on GitHub and deploys to a public site, so anything committed here is
something the class can read before they sit it.

**This packet shares no question with the assessment.** Every question *type* on the
assessment appears here with different numbers and a different context. If either
document is edited, check that the packet has not become the assessment's answer
sheet.

## The levels

Every question carries one of the Cambridge Workbook's three tags, which the class
already knows: **Focus** (the basics), **Practice** (what most of the assessment looks
like) and **Challenge** (what its last page looks like, and harder). The brief asked for
a range skewed hard at the top, so Challenge is about a third of the packet by space.
A8 and B8 are the hardest blocks: each puzzle on the assessment has a harder cousin
there.

## Building

```bash
powershell -c '& "C:\Users\bowen\lessons\.claude\skills\new-homework\scripts\build-hw.ps1" q1rev'
```

Built and verified with MiKTeX 25.12: **10 pages**, no errors, no overfull boxes, every
page rasterised and read. Teacher copy is 14 pages. Every answer in the key was
checked against the final question text after the cuts, not before.

## What's in it

| | |
| --- | --- |
| A1–A3 | The sign rules, English → calculation, the missing integer |
| A4–A5 | LCM and HCF from lists; **which one does the question want?** |
| A6–A7 | Divisibility grid and missing digit; squares, cubes, roots |
| **A8** | **Challenge** — HCF/LCM given, find the numbers; product and sum; divisible by 15; root to root through 729; the card puzzle |
| B1–B4 | Expression / equation / formula; "Mr Bowen thinks of a number"; substitution with a negative; which way round is the formula |
| B5–B7 | Like terms, expanding, solving (one written backwards) |
| **B8** | **Challenge** — isosceles triangle, ages (asks for the dog, not the cat), equilateral perimeter |
| B9 | Inequalities: read and draw the line, smallest/largest integer |
| C1–C5 | Powers of 10, the mass ladder, rounding with the zeros kept, one place further, Mr Bowen's mistakes (with the assessment's "the mistake is…" sentence) |
| C6 | **Challenge** — between two decimals; smallest number that rounds to 5.4 |
| D1–D2 | Mixed word problems (Harbin, the mangoes); **now you write the question** for `3n − 4 = 20` |

## What came out for the 10-page target

The first full draft was 14 pages. These were cut (labels are the draft's), each
because something else on the packet already practises the same thing:

- A half-page **"Before the Assessment — What Can You Do?" tick-list**, one row per
  lesson. Every question heading already names its unit.
- A2 "difference between −6 and 9" and "a lift goes down 7 floors" (the Moscow item
  keeps the gap); three A1 and three A7 drills; the ropes row of A5.
- A6's 2316 row and "5☐2 divisible by 9" (4☐8 keeps the missing digit).
- A8 "smallest number above 5000 divisible by 9".
- B1's `5(m − 2)` row; B2 (a)–(b), B3 (a)/(c)/(d), B5 (a), B6 (a)/(c), B7 (a)/(c) — the
  easiest item or two from each drill; B4's minutes-in-hours formula.
- B8 "Mr Bowen thinks of a number, ×4, +13, gets 49" (B2 writes it, B7 solves it).
- C1 and C2 became one question: C1's "10³ as an ordinary number" and "ten million as
  a power of 10" went, and three of C2's nine digit-moving drills (`4.6 × 10`,
  `830 ÷ 100`, `0.5 × 10⁴`). C4's 3 d.p. rounding row; C7's ordering item and "a
  number between 4.6 and 4.7".
- D1 "the buses", "the pens" and "the prize" (LCM, equation-from-words and divide-and-
  round are all practised earlier in the packet).

Then two more, at the teacher's request, so the 10 pages could breathe (the space went
into bigger workspaces and more room between drills):

- A8 "the product of two integers is 24, their sum is −10" — the second product-and-sum;
  "−42 and 1" stays, and it is the assessment's type.
- B5(g) "Mr Bowen simplifies 5k − 2j + 3k + j and gets 8k − 3j" — B6(f) and C5 already
  ask what Mr Bowen did wrong.

## Layout notes for whoever edits this next

This packet is where the house style's page-break fix came from (now in
`hw-style.tex`, 2026-09-30). `needspace.sty` wrote `\vskip 0pt plus X \penalty-100`
before every heading; a page ending anywhere else is underfull with no stretch and
scores b=10000, but a page ending at a heading got that stretch and a finite badness,
so any heading in roughly the bottom half of a page claimed the break and its question
moved over whole. `\tracingpages` showed it exactly (b=4531 at the A8 heading, b=10000
at every later break). The style now keeps only the `\penalty9999`, glues each heading
to what follows with `\nobreak`, and makes the remember / word-help boxes unbreakable —
a breakable box that could not fit its first lines forced its own page break, which
`\nobreak` cannot stop, and left the heading alone at the foot of the page (tested).

Every question whose text and answer space must stay together is a `minipage`: the A8
puzzles, the card puzzle, B8(b)/(c), C5(e). The A5 and B1 tables carry their
instruction in their own header row for the same reason.

Re-render and read every page after any edit; it is a 10-page packet with little slack.
