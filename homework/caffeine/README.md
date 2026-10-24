# Year 7 · Science Models · Challenge Homework — Why Is Mr Bowen Still Awake?

`caffeine.tex`: an **eight-page** challenge packet (two A4 sheets, double-sided) for
after **Coffee, Carbon and Stars** (`content/y7-science/U03_coffee`).

| File | What it is |
| --- | --- |
| `caffeine.pdf` | Student copy. **8 pages.** |
| `caffeine-teacher.pdf` | Student copy plus a 3-page key with diagnoses. |

**Keep it at eight.** The first draft was 13 pages and the teacher called it "way too
many pages".

## Rewritten easier (24 Oct 2026)

The teacher found the first version too hard for Year 7. The deck only ever
**halves** (its plan: "keep the maths to halving"), so the packet now does too.

- **Out:** the hour-by-hour rule (× 0.87 every hour) and everything built on it —
  the 20-row table and the graph with a scale to choose; the latte added halfway
  through Mr Bowen's day; the 400 mg daily limit; the label-maths drill; the
  charcoal and cotton traps in the museum.
- **Kept, by request:** the interview, and students still **look the caffeine up
  themselves**, on the label or with Google. Now it is one drink, halved every
  5 hours to bedtime.
- **In, by request:** the Sun and "different speeds, the same maths" (deck slides
  20–22).
- **Part E, by request (same day):** a page on how caffeine affects sleep, with a
  writing piece. It replaced the old last page, which the teacher said had no
  meaningful questions: a same/different question whose sentence starter gave the
  answer, a joke tick question about where carbon is made, and a hand-in
  checklist.
- **Not added, by choice:** Mr Bowen's sad day, Last Atom Standing at home, a
  separate dinosaur question. (The T. rex tooth stays in the museum, the only place
  the 50 000-year limit is tested.)

## The numbers

The deck's own: caffeine half-life **5 hours**, a cup of coffee **about 100 mg**,
carbon-14 half-life **5 700 years**, carbon dating to **about 50 000 years**,
dinosaurs **66 million years** ago, the Sun **about 4.6 billion years** old, its core
hydrogen **71% → 34%** (about half gone; never call it a half-life).

Mr Bowen's day, chosen so the halving is exact: two cold brews from Jeremy's at
8 a.m., 200 mg each → **400**; 1 p.m. **200**; 6 p.m. **100**; bed at 11 p.m.
**50**, half a cup of coffee. 8 p.m. is read from the graph between the dots:
**about 76** (straight lines give 80).

## What's in it

| Page | |
| --- | --- |
| 1 | Cover, how to do it, the deck's three write notes, Mr Bowen's day as a timeline |
| 2 | Word help; A1 halving warm-up; A2 Mr Bowen's chain; A3 does it ever run out? (the limitation, as a fill-in) |
| 3 | A4 the graph (the first part drawn); A5 read 8 p.m. between two dots; A6 the title question |
| 4 | Part B: what you will do, word help; B1 the interview; B2 where to look |
| 5 | B2 reading a label (20 mg in 100 ml, 300 ml), the answer; B3 the halving table, with a tea example that crosses noon and midnight; B4 bedtime between two boxes; B5 compare with Mr Bowen |
| 6 | B6 one limitation (tick, then a sentence); Part C: C1 the chain in years; C2 the museum |
| 7 | C3 why not (alive / old); Part D: D1 how old is the Sun; D2 three clocks to match and order |
| 8 | Part E: a five-point guide to caffeine and sleep (sleepy chemical, blocked; the 400 mg / 6 hours study; 9–11 hours), with a picture; E1 plan from the packet's numbers (50 mg, last drink by 5 p.m., one cold brew leaves 25 mg); E2 a letter to Mr Bowen, six tick-off conditions, eight lines |

The guide's sources are in the key: adenosine (never named on the student page),
Drake et al. 2013 for 400 mg six hours before bed, and the National Sleep
Foundation's 9–11 hours for ages 6–13.

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 caffeine
```

Built and verified with MiKTeX: student copy **8 pages**, teacher copy 11, no errors,
no overfull boxes. Every page was rasterised and read.

English only. A French copy would follow `../hw09x/`: `\fr` lines, the `-French`
build, an even page count.
