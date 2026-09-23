# Year 7 · Extra Homework — The Point Never Moves

`hw08x.tex` — reading decimals, multiplying and dividing by powers of 10, rounding, and
the mg → g → kg → t ladder. Goes out alongside **`../hw08/`**, for students who will get
more out of Unit 3 with the same idea taken one column at a time.

Due **Monday 28 September 2026**, printed on the cover.

## The framing is deliberate

As with `hw03x` through `hw07x`, nothing on the sheet says *easy*, *basic*, *extra help*,
*catch-up* or *revision*, and no question is marked as being for anybody in particular.
The cover states a fact instead, and it is a true one:

> **0.46**, **4.6**, **46** and **460** are the **same two digits**. Nothing about the 4
> or the 6 is different. What tells you which number you are looking at is **where the
> point is**.

Handing it out with that sentence said out loud, rather than handed quietly to four
people, is the intended use.

## Why a place-value table, when the deck already taught this

Because the folk rule cannot survive one. "To multiply by 10, add a zero" is what Maths
3.1 spends slide 8 killing, and a student who still believes it will keep believing it
through any amount of practice — until they watch the digits move and the point stay in
the same place. **X5 is that moment**, and X5(b) is the only question on the sheet with
no arithmetic in it at all:

> The 4 and the 6 are in all three rows. What moved, and what stayed still?

A student who can write that sentence can do the whole of Part 2. A student who cannot
is still adding zeros, and X6 will not fix it.

## Part 4 is here because it came out of Homework 8

The mg → g → kg → t ladder was Homework 8's **E2**, and it was cut for the ten-page
target. Converting between mg, g, kg and t is a stated objective of Maths 3.1, so it had
to land somewhere. It lands here, with the ladder drawn, three identical steps and both
directions marked.

**Set the two sheets together, not one instead of the other.** Homework 8 no longer
tests metric mass anywhere.

## Question numbers are X, not F

Homework 8 has a **Section F** of its own (F1, F2, F3), and the two sheets go home in the
same envelope. "F2" would name two different questions on the same evening, so this sheet
numbers X1–X21.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw08x
```

On a machine with only Windows PowerShell 5.1 there is no `pwsh` on PATH — call the
script directly:

```bash
powershell -c '& "C:\Users\bowen\lessons\.claude\skills\new-homework\scripts\build-hw.ps1" hw08x'
```

Built and verified with MiKTeX 25.12: **8 pages**, no errors, no overfull boxes. Teacher
copy is 12 pages. Every page was rasterised and read; every answer in the key was checked
arithmetically, not by eye.

## What's in it

| | |
| --- | --- |
| **Part 1 — where the point is** | |
| X1 | One digit per column in a place-value table. `130.06` is the row that does the work: two zeros, both holding a place open |
| X2 | The same digit, five different jobs. `0.63` and `0.86` both have a 6 after the point and it is worth ten times more in one |
| X3 | **Saying it out loud.** `12.34` is "twelve point three four", not "thirty-four", and `4.05` has a zero that has to be said |
| X4 | Which is bigger? A longer number is not a bigger number — and one pair is neither |
| **Part 2 — moving the digits** | |
| X5 | Watch it happen: three rows of one table, `4.6` → `46` → `460`. **(b) is the sheet** |
| X6 | Multiplying moves the digits left |
| X7 | Dividing moves them right — and four of the nine need a zero written where nothing landed |
| X8 | `10²`, `10³`, `10⁵`, and how to say them aloud |
| X9 | The same job with the power written in, and the folk rule killed on the page |
| X10 | Which way, and how far? X6 to X9 read backwards |
| **Part 3 — stopping somewhere** | |
| X11 | A number line from 3 to 4 in tenths. Rounding is a question about which end you are nearer, before it is a rule about the digit 5 |
| X12 | Round to the nearest whole number |
| X13 | Counting decimal places — from the point, not from the front |
| X14 | Round to 1 decimal place |
| X15 | **The zero that has to stay.** Every answer on that line ends in a zero, and the line says so |
| X16 | Round to 2 decimal places. `8.996` carries into the ones and comes out `9.00` |
| **Part 4 — the mass ladder** | |
| X17 | One step |
| X18 | Two steps: kg to mg is `×10⁶` |
| X19 | Which is heavier? You cannot compare until both are in the same unit |
| X20 | Mr Bowen's homework — one trap each from X6, X7, X15, X13, X18 and X4, and only one of the six is right |
| X21 | **The whole sheet in one question.** `0.045 kg` is `45 g` is `45 000 mg`, and the gram answer to 1 d.p. is `45.0` |

## Student copy vs teacher copy

`hw08x.pdf` is the student copy; `hw08x-teacher.pdf` is the same source with the answer
key appended (`\def\TEACHER{}`). The key gives the diagnosis, not just the answer.

## Two defects the render caught

Both were found by rasterising and reading the pages, and neither shows in the log:

- **X12's worked examples were `3.4 → 3` and `3.7 → 4`** — which are exactly the two
  numbers X11 had just asked the class to find and place on the number line. The box was
  printing the answer to the question above it. New numbers now: 12.3, 12.8, 12.5.
- **X15 and X16 in four columns** put the arrow at the end of a column and dropped the
  answer blank onto a line of its own underneath it. They are two columns now.
