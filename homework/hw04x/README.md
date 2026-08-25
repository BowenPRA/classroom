# Year 7 · Extra Homework — Two-digit Multiplication and Division

`hw04x.tex` — "Two Rows, Then Add". Goes out alongside **`../hw04/`** for students who
will get more out of the end of Unit 1 with extra practice on the arithmetic it runs
on.

## The framing is deliberate

As with `hw03x`, nothing on the sheet says *easy*, *basic*, *extra help*, *catch-up* or
*revision*, and no question is marked as being for anybody in particular. The cover
states a fact instead, and it is a true one: **the list of squares stops at 12 × 12,
and every square after that is a two-digit multiplication** — 13 × 13, 18 × 18,
24 × 24. A cube is two of them. Checking that ∛5832 = 18 means working out 18 × 18 =
324 and then 324 × 18.

So this is not practice *beside* Unit 1. It is the arithmetic Unit 1 finishes on, and
handing it out with that sentence said out loud is the intended use.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw04x
```

Built and verified with MiKTeX 25.12: **6 pages** — three double-sided sheets — no
errors, no overfull boxes, no half-empty pages. Teacher copy is 8 pages.

## What's in it

| | |
| --- | --- |
| **Part 1 — the facts the method runs on** | |
| E1 | Fifteen times-table facts, chosen for the ones that appear in *both* rows |
| E2 | Multiply by a ten — the second row, taken out and practised on its own |
| **Part 2 — two rows, then add** | |
| — | The method shown once in full: 47 × 26, both rows, and what one row means |
| E3 | Warm up: four two-by-one multiplications |
| E4 | **Twelve two-digit by two-digit multiplications**, with working boxes |
| E5 | Squaring: 13, 15, 16, 18, 24, 25 — then 324 × 18, the only three-by-two |
| **Part 3 — division, which undoes it** | |
| E6 | Ten divisions that come out exactly, plus the multiply-back check |
| E7 | Eight that do not, written as *q* r *r*, with a Word help box |
| E8 | Missing-number fact families, including the harder ones where the gap is the big number |
| E9 | **Divide by a two-digit number** — four, with working boxes |
| E10 | **Use it:** the four divisions Homework 4 actually needs |
| E11 | Four word problems, the last one deadpan and two-step |

## Three design choices to keep

- **E2 comes before the method, not after it.** It is the second row of every question
  in E4 taken out and drilled alone, and a missing zero is much cheaper to catch on a
  one-line question than inside a four-line sum.
- **E9 exists because of E11.** Two of the four word problems divide by 24, so a
  student who has never divided by a two-digit number stalls there and looks as though
  they could not read the question. If E11 goes wrong, check E9 before blaming the
  English.
- **E10 is the join between the two sheets**, and it says so on the page: 441 ÷ 9,
  1296 ÷ 9, 1728 ÷ 8 and 5832 ÷ 8 are exactly the splits Homework 4 asks for. A student
  who does them here arrives at Homework 4 able to spend the time on the roots instead
  of on the long division. That is the reason the two go out together.

Three answers are also deliberately shared with Homework 4 and the lesson: **225** is
the patio, **576** is the worked example in Homework 4 B2, and **324** is the first
half of the check in Homework 4 B3.

## Answer key

`hw04x-teacher.pdf`. The notes are diagnostic rather than merely correct. The one that
matters most is in E4: **one row of working is the whole diagnosis** — it means the
student multiplied by the units digit and stopped, so the answer comes out roughly a
tenth of the right size. That is a method error and needs re-teaching; an answer out
by a small amount *with two rows present* is arithmetic and only needs a re-check.
Same idea in E7, where a remainder bigger than the divisor is a method error and a
remainder wrong by one is not.
