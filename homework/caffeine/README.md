# Year 7 · Science Models · Challenge Homework — Why Is Mr Bowen Still Awake?

`caffeine.tex`: an **eight-page** challenge packet (two A4 sheets, double-sided) for
after Part 2 of the Models deck (`content/y7-science/U03_models`, slides 18–46).

| File | What it is |
| --- | --- |
| `caffeine.pdf` | Student copy. **8 pages.** |
| `caffeine-teacher.pdf` | Student copy plus a 3-page key with diagnoses. |

**Keep it at eight.** The first draft was 13 pages and the teacher called it "way too
many pages". What came out to get there: Mr Bowen's full 16-row hour-by-hour table
(now B2, 1 p.m. to 8 p.m. only), a separate cover word-help box, a "more or less
than one cup" question (A5 asks it), reading a printed carbon-14 curve between the
dots (70% and 35%, and "35 is half of 70"), and a "right clock" matching question
that repeated deck slide 33.

## The numbers

The deck's own: caffeine half-life **5 hours**, a cup of coffee **about 100 mg**,
carbon-14 half-life **5 700 years**, carbon dating to **about 50 000 years**.

Mr Bowen's real day, chosen so the halving is exact:

| | |
| --- | --- |
| 8 a.m. | two cold brews from Jeremy's, 200 mg each → **400** |
| 1 p.m. | halved → 200, then a double-shot oat milk latte (2 × 60 mg) → **320** |
| 6 p.m. | **160** |
| 8 p.m. | off the grid: read from the graph, **about 120** (exactly 121) |
| 11 p.m. | bedtime, **80** — almost a whole cup of coffee |

Bedtime is 11 p.m., not 8 p.m., because 8 p.m. is not a whole number of half-lives
after 1 p.m. It became the read-between-the-dots question instead, which is the skill
Part C needs.

The hour-by-hour rule is **× 0.87 every hour, + a drink when they drink**.
0.87⁵ = 0.498, so it is the 5-hour half-life. Rounded at every step it gives 160 at
6 p.m. and 121 at 8 p.m., which is what B2 checks against Parts A2 and A4.

## What's in it

| Page | |
| --- | --- |
| 1 | Cover, how to do it, the three write-notes from the deck, Mr Bowen's day as a timeline |
| 2 | Word help; A1 the drinks (and "does the oat milk add caffeine?"); A2 the half-life chain; A3 the graph, morning drawn |
| 3 | A4 read the graph (8 p.m., 11 p.m., 520 mg against the 400 mg limit, which drink to skip); A5 the title question; Part B the rule; B1 why 0.87 |
| 4 | B2 check it with Mr Bowen; **Part C**: what you will do (Sting named), C1 the interview questions and the drinks table |
| 5 | C2 finding the caffeine (label, website, search; mg per 100 ml; the middle of a range); C3 the hour-by-hour table, 20 rows in two halves |
| 6 | C4 their graph, with a scale chooser |
| 7 | C5 results: bedtime, compared with Mr Bowen, one piece of advice, one limitation; a hand-in checklist |
| 8 | Part D: D1 the halving chain; D2 the museum (three traps: charcoal and cotton were alive, a stone axe never was, a T. rex is too old); D3 same model, different clock |

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 caffeine
```

Built and verified with MiKTeX: student copy **8 pages**, teacher copy 11, no errors,
no overfull boxes in the student copy. Every page was rasterised and read.

English only. A French copy would follow `../hw09x/`: `\fr` lines, the `-French`
build, an even page count.
