# Year 7 · Extra Homework — Multiplication and Division

`hw03x.tex` — "The Two That Do the Work". Goes out alongside **`../hw03/`** for
students who will get more out of Unit 1 with extra practice on multiplying and
dividing.

## The framing is deliberate

Nothing on the sheet says *easy*, *basic*, *extra help*, *catch-up* or *revision*, and
no question is marked as being for anybody in particular. The cover states a fact
instead, and it is a true one: **factors are found by dividing, factor pairs by
multiplying, and the HCF simplifies a fraction by dividing top and bottom** — so
getting faster at those two operations makes the whole unit easier. That is the whole
justification for the sheet and it is the same reason a strong student would benefit
from it.

Handing it out with that sentence said out loud, rather than handed quietly to four
people, is the intended use.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw03x
```

Built and verified with MiKTeX 25.12: **4 pages** — one double-sided sheet — no errors,
no overfull boxes, evenly dense. Teacher copy is 6 pages.

## What's in it

| | |
| --- | --- |
| **Part 1** | |
| E1 | Fifteen times-table facts, chosen for the ones that turn up in factor lists |
| E2 | Multiply: two-by-one, three-by-one, two-by-two, each with a working box |
| **Part 2** | |
| E3 | Eight divisions that come out exactly, plus the multiply-back check |
| E4 | Six divisions that do not, written as *q* r *r*, with a Word help box |
| **Part 3** | |
| E5 | Missing-number fact families, including the harder ones where the gap is the big number |
| E6 | **Use it:** is it a factor? — four divisions, straight out of Homework 3 |
| E7 | Three word problems, the last one deadpan and two-step |

## Two design choices to keep

- **E6 repeats two divisions the student has already done** in E3(d) and E4(b), and the
  instruction says so. A student who does all four from scratch has not read it; one who
  spots them has done the thing the sheet is for. Rows 3 and 4 also both come to 14 —
  one exactly, one with a remainder of 2 — which is the definition of a factor in two
  lines.
- **E7 problem 3 is the only two-step question**: multiply to find the total, then
  divide with a remainder. Its workspace is the largest on the sheet because the
  leftover space at the foot of the last page belongs to the student, not to the margin.

## Answer key

`hw03x-teacher.pdf`. The notes there are diagnostic rather than just correct: E1 is
better timed than marked; in E4 a remainder *bigger than the divisor* is a method error
and a remainder wrong by one is arithmetic, and only the first needs re-teaching.
