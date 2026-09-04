# Year 7 · Extra Homework — Two-digit Multiplication and Long Division

`hw05x.tex` — "Bring Down the Next Digit". Goes out alongside **`../hw05/`**, for
students who will get more out of the end of Unit 1 with extra practice on the two
operations it runs on.

This is the **sequel to `hw04x`** and picks up exactly where that sheet stopped.
`hw04x` taught *two rows, then add*, and divided by a two-digit number by counting up in
multiples. This one teaches the **written long division** — divide, multiply, subtract,
bring down — which is the method that does not fall over on a four-digit dividend. The
multiplication goes one step further too: three digits by two, which is what a cube is.

## The framing is deliberate

As with `hw03x` and `hw04x`, nothing on the sheet says *easy*, *basic*, *extra help*,
*catch-up* or *revision*, and no question is marked as being for anybody in particular.
The cover states a fact instead, and it is a true one: **every method in Unit 1 finishes
in a multiplication or a division.** You find a factor by dividing. You find the HCF by
dividing twice. You check a square past 12 × 12 by multiplying, and a cube by
multiplying twice.

Handing it out with that sentence said out loud, rather than handed quietly to four
people, is the intended use.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw05x
```

Built and verified with MiKTeX 25.12: **8 pages**, no errors, no overfull boxes.
Teacher copy is 11 pages. Every answer in the key was checked arithmetically, not by
eye.

## What's in it

| | |
| --- | --- |
| **Part 1 — the facts both methods run on** | |
| E1 | Sixteen times-table facts, chosen for the ones that appear in both rows of a multiplication *and* in every division by 7, 8 or 9 |
| E2 | Multiply by a ten — the second row, taken out and practised on its own |
| E3 | **Count up in a two-digit number** — write the multiples of 23, 16, 24 and 37 before you ever divide by them |
| **Part 2 — two rows, then add** | |
| — | The method shown once in full: 58 × 34, both rows, and what one row means |
| E4 | Twelve two-by-one multiplications |
| E5 | **Twelve two-digit by two-digit**, with working boxes |
| E6 | Six three-digit by two-digit, ending on 324 × 18 — the second half of a cube root |
| **Part 3 — long division** | |
| — | Word help for *divisor*, *goes into*, *bring down*, *remainder*, then the method in full on 966 ÷ 23 |
| E7 | Eight one-digit divisors, exact |
| E8 | Six one-digit divisors with remainders |
| E9 | **Twelve two-digit divisors**, exact, with boxes big enough to set the method out |
| E10 | Six two-digit divisors with remainders |
| E11 | Sixteen missing-number fact families, including the ones where the gap is the big number |
| E12 | **Thirty mixed × and ÷**, no boxes, no help — a speed page |
| **Part 4 — use it** | |
| E13 | Six word problems, ending on a two-step one |

## The questions worth talking about

- **E3** is the whole sheet in miniature and the one to insist on. A student who writes
  the multiples list before dividing is *reading* at every step of a long division; a
  student who does not is guessing. Its four divisors are exactly the ones E9 needs.
- **E6's 324 × 18 = 5832** and **E7(h) 5832 ÷ 8 = 729** are the same fact from both
  ends. 18² = 324, so that multiplication *is* proving a cube root by hand.
- **E4's 94 × 4 and 47 × 8** both come to 376 — halve one, double the other, and the
  answer does not move. `16 × 25` in E12 is the same trick.
- **E8(c), E8(f), E9's 1224 ÷ 24 and E12's 812 ÷ 4** all have a **zero in the answer**,
  which is the single most common long-division error there is. `3000 ÷ 28` in E10 is
  the hardest case of it — expect "17 r 4".
- **E13.5, the tiles**, is the only place on the sheet where the remainder makes the
  answer go **up**: 1222 ÷ 20 = 61 r 2, and 61 boxes is not enough. Expect "61" from
  most of the class and treat it as a discussion, not a cross — the arithmetic is right
  and the reading is not.

## Layout notes for whoever edits this next

The sheet is a chain of large atomic blocks — a heading, a coloured box, then a wide
ruled table — and they pack badly. Two fixes are load-bearing:

- **E12 is a `tabular`, not `multicols`.** Thirty items in three columns will not fit in
  the tail of a page, and `multicols` splits itself across the break and then refuses to
  let anything follow it, which stranded a whole page. A `tabular` moves whole.
- **A heading that lands at the foot of a page gets one line of prose, not a box.** E9
  and E10 both do this: the one-line instruction comes before the `remember` box, so the
  page can end on a sentence rather than on a bare heading.

The page-density bar chart in the build script under-reads this packet badly. Pages that
are mostly empty working boxes are *supposed* to be white — check the PNGs, not the
numbers.
