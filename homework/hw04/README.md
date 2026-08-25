# Year 7 · Homework Packet 4

`hw04.tex` — Mathematics 1.6 (Square Roots and Cube Roots) and Mathematics 1.5 (Tests
for Divisibility). **No science this week.**

Goes out with **`../hw04x/`**, the Extra Homework sheet on two-digit multiplication
and division. Week 4 ends in the End-of-Unit 1 test, so the whole packet is maths.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw04
```

On a machine with only Windows PowerShell 5.1 there is no `pwsh` on PATH — call the
script directly:

```bash
powershell -c '& "C:\Users\bowen\lessons\.claude\skills\new-homework\scripts\build-hw.ps1" hw04'
```

Built and verified with MiKTeX 25.12: **4 pages** — two double-sided sheets — no
errors, no overfull boxes, no half-empty pages. Teacher copy is 6 pages.

## Student copy vs teacher copy

`hw04.pdf` is the student copy; `hw04-teacher.pdf` is the same packet with the answer
key appended. Rebuild the key alone with:

```bash
pdflatex -jobname=hw04-teacher "\def\TEACHER{}\input{hw04.tex}"
```

## What's in it

**Section A — Mathematics 1.6 · Squares and Cubes**

| | |
| --- | --- |
| A1 | Write out the twelve squares and the cubes — the tool the rest of the packet runs on |
| A2 | 7² against 7 × 2, then nine calculations, one landing on −6 |
| A3 | English → calculation, with a Word help box that includes *consecutive* |
| A4 | Trap four roots between consecutive whole numbers, then the pair of consecutive squares that add to 85 |

**Section B — Maths 1.5 and 1.6 · Using the Tests on a Root**

| | |
| --- | --- |
| B1 | **Can it be a square number?** — five numbers run through the tests for 3, 9, 2 and 4 |
| B2 | **Split it, then find the root** — four roots found by dividing off a 9 or an 8 |
| B3 | **The challenge: 5832**, in four scaffolded steps |
| B4 | Word problem: 400 students in a perfect square |

## Section B is the point of the packet

The two sections are together because a **square number is a pair** — 36 = 6 × 6 — so
every factor inside it turns up twice, and a **cube is three copies**. That turns last
week's divisibility tests into two different tools for this week's roots.

**As three rules that can only ever say NO:**

- divides by 3 but not by 9 → not a square number
- divides by 2 but not by 4 → not a square number
- divides by 2 but not by 8 → not a cube number

**As a method that finds the answer:** the digits of 1296 add to 18, so 9 divides it,
so 1296 = 9 × 144, so √1296 = 3 × 12 = 36 — with no guessing and no calculator, on a
number nowhere near the twelve they copied.

Two rows in B1 are there to be got wrong on purpose. **162** passes the 3-and-9 rule
and is killed by the 2-and-4 one, so half-running the rules fails it. **108** passes
*everything* and is still not a square — that is B1(g), and it is the difference
between a test and a proof.

## B1(g) through B3 were too hard, and got simplified

The first draft asked too much independent reasoning back to back. Three fixes,
recorded so the difficulty doesn't creep back in on a future edit:

- **B1(g)** used to ask students to explain in their own words what the rules can
  and cannot prove — a piece of abstract reasoning about the *rules themselves*,
  not about a number. It is now the same trap-the-root check as A4, aimed at 108:
  find the two square numbers either side of it, and say yes or no. Same concept,
  concrete instead of abstract.
- **B2** used to make students identify *which* divisibility test applied before
  they could even start the split — a strategy decision on top of the arithmetic,
  four times in a row. The divisor (9, 9, 8, 1000) is now printed in its own
  column, so the only jobs left are the division, the two roots, and the
  multiplication.
- **B3** kept its four steps but two got easier: Step 1 now suggests halving three
  times instead of one long division by 8, and Step 4's check is two separate
  blanks (`18 × 18 = ___`, then `___ × 18 = ___`) instead of one open box asking
  the student to invent the two-step structure themselves.

None of the numbers changed and no question was cut — the maths is the same, the
scaffolding is heavier.

## The closing question, and the join to Homework 3

B3 is **5832**, which was a row in Homework 3's tick grid. It passes every rule in B1
and is a cube: 5832 ÷ 8 = 729, ∛729 = 9, so ∛5832 = 2 × 9 = 18. One question
containing a divisibility test, a four-digit division, a cube root, and a check that
is two two-digit multiplications — which is exactly what the extra sheet is for.

## Wording

The packet was rewritten once for readability, and the rules that came out of that are
worth keeping:

- **The three rules are called "rules", not "screens".** *Screen* used as a verb is
  hard English, it is not in the Learner's Book, and it made a simple idea sound
  technical. Anything a student has to decode before they can start the maths is the
  wrong word for this class.
- **Short sentences, one idea each.** The cover instructions are four short bullets
  rather than three long ones; the orange boxes state the fact and stop.
- **No decorative headings.** "The challenge: 5832" says what the question is.
  Question headings name the task — *Can it be a square number?*, *Split it, then find
  the root* — so a student who reads only the heading still knows what to do.
- **The Word help glosses are fragments, not sentences**: `the square root of 81` →
  `9, because 9 × 9 = 81`. A gloss that needs parsing is not help.

## What got cut to reach four pages, and why

Four pages is two sheets, and this packet started at six. Recorded here so nothing is
re-added by accident:

- **A second word problem** (a cube-shaped crate of 1728 watermelons). Cubes already
  have two rows of B2 and the whole of B3; the surviving word problem is a *square*
  because that is the only place in the packet where a square root has to be dug out
  of an English sentence.
- **B4's old Step 5**, which asked the B1(g) question a second time after 5832. B1(g)
  now gets three writing lines instead of two, which is where that space went.
- **300 from the B1 table**, which is ruled out by exactly the same rule as 132.
- **√900 from the B2 table**, whose 9 × 100 split is covered by B4's 400 = 4 × 100.

## Layout notes worth keeping

- **B3 comes before B4**, and that is what took the packet from five pages to four.
  B3 is the block that cannot break — a box, four steps and a workspace — so wherever
  it sat mid-section it stranded a third of a page. Putting the small word problem
  last means the leftover space lands on a workspace instead of on nothing. It also
  puts the deadpan line last, which is where it belongs.
- **A3's calculation and answer blanks go on their own line** under the sentence. With
  `\hfill` on the same line, the longer sentences wrapped and left the Answer blank
  stranded on a line by itself.
- **The A4 green box is kept to two lines.** At three it broke over the page and left
  the words "whole numbers." alone at the top of the next one.
- **The B2 box is kept to four lines.** Splitting its first paragraph in two pushed
  B4 onto a fifth page; the rewrite has to stay inside the same box.
- **The orange box above A1 does not print the two lists**, because A1 *is* the
  student writing them out.

None of the questions are lifted from the Learner's Book. Exercise 1.6 (pp. 17–19) is
set separately, so duplicating it here would waste the packet.
