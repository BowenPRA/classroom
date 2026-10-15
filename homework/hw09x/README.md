# Year 7 · Extra Homework — Where the Point Goes

`hw09x.tex` — comparing, adding and subtracting, multiplying and dividing decimals, and
the words that choose the operation. Goes out alongside **`../hw09/`**, for students who
will get more out of Unit 4 with every method printed as a frame to fill in.

Due **Friday 23 October 2026**, printed on the cover.

## The framing is deliberate

As with `hw03x` through `hw08x`, nothing on the sheet says *easy*, *basic*, *extra
help*, *catch-up* or *revision*, and no question is marked as being for anybody in
particular. The cover states a fact instead, and it is a true one:

> There is **nothing new to calculate** in Unit 4. 3.2 × 7 is 32 × 7, and you already
> know how to do that. 8.24 ÷ 4 is short division. The one new question is **where the
> point goes**.

Handing it out with that sentence said out loud, rather than handed quietly to four
people, is the intended use.

## Filling the boxes is the method

Every Unit 4 method is drawn, so it cannot be skipped. **An orange box always means:
write a 0 here.**

- **Column grids** (`\colgrid`): tens, ones, a point column, tenths, hundredths. The
  point is printed on all three rows, so it cannot move. X5 gives the digits; **X7 takes
  them away** and the student places the numbers themselves.
- **Point out, point back** (X8): a table whose scaffold fades — row 1 done, rows 2–3
  with the calculations printed, rows 4–6 empty. X9 then shows that the estimate alone
  picks the answer from 2.72 / 27.2 / 272.
- **Division frames** (`\bus`): a box above every digit and the point already printed
  in the answer row (X11). **X12 removes the printed point** — `\bus[np]` — and the
  student puts it up themselves.

hw08x was place value and the point never moving. This sheet does not repeat it: no
place-value table, no × 10 or × 100.

## Science 3.1, lightly

X10 (*Lighter on the Moon*: 5 × 1.6, 3 × 1.6, 7 × 3.7), X13 (the mean of three drop
times and four ruler-catch times — the 0.45 s and 0.2 s from HW 9 and the deck) and
X18(d) (weight = mass × 10). Whole masses times decimal strengths only.

## Question numbers are X, not A–F

Homework 9 has Sections A–F and the two sheets go home together, so this one numbers
X1–X19.

## French copy

`hw09x-fr.pdf` is the same source built with `\FRENCH` defined: a grey French line under
each instruction and question, with the English key word left in, in blue. The English
copy is unchanged by it (the macros are empty and `\unskip` their leading space). See
`../hw09/README.md` for the scheme and the 15 October rewrite of the French. The French
copy also gets more room (looser leading, taller table rows and working boxes) and starts
X19 on its own last page with a large box, which makes it **10 pages** — an even number,
so it prints on whole double-sided sheets. The X17 word column widens in the French copy
to fit the glosses.

## Building

```bash
powershell -c '& "C:\Users\bowen\lessons\.claude\skills\new-homework\scripts\build-hw.ps1" hw09x -French'
```

Built and verified with MiKTeX: English **8 pages**, French **10**, teacher **11**, no
errors, no overfull boxes. Every page was rasterised and read.

## What's in it

| | |
| --- | --- |
| **Part 1 — which is bigger?** | |
| X1 | Whole-number part and decimal part. 0.38 has one, and it is 0 |
| X2 | Fill with zeros in orange boxes, then compare. The bigger number is always the shorter one |
| X3 | Four numbers to three places, then in order |
| X4 | The snail race. Fastest = smallest time |
| **Part 2 — line up the points** | |
| X5 | Six grids with the digits placed and the zeros to write |
| X6 | Change from 10 and from 20 dollars |
| X7 | **Now you line them up**: empty grids |
| **Part 3 — point out, point back** | |
| X8 | Four steps, scaffold fading row by row |
| X9 | The estimate decides |
| X10 | Lighter on the Moon |
| **Part 4 — the point goes straight up** | |
| X11 | Division frames with the point printed, and the inverse check |
| X12 | **Now you put the point up**: the same frames without it |
| X13 | The mean in two steps |
| **Part 5 — making it easier** | |
| X14 | *Of* means ×: half, a quarter, a tenth |
| X15 | × 9 and × 11 from × 10 |
| X16 | Partitioning |
| **Part 6 — the words that choose** | |
| X17 | Which operation? |
| X18 | Calculation first — and *how many people?* before the division |
| X19 | The whole sheet in one question: three mangoes and the change |
