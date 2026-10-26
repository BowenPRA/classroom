# Year 7 · Extra Homework 10 (Science Models) — Why Is Mr Bowen Still Awake?

`hw10x.tex`: an **eight-page** extra packet (two A4 sheets, double-sided) for
after **Coffee, Carbon and Stars** (`content/y7-science/U03_coffee`).

| File | What it is |
| --- | --- |
| `hw10x.pdf` | Student copy. **8 pages.** |
| `hw10x-fr.pdf` | Student copy with a grey French line under every instruction and question. **14 pages.** |
| `hw10x-teacher.pdf` | Student copy plus a 3-page key with diagnoses. English only. |

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
| 8 | Part E: a six-point guide to caffeine and sleep, with a picture (adenosine, blocked; **100 mg** near bedtime can stop an adult sleeping, about **50 mg** a child; stop **8 hours** before bed, longer after a big drink; 9–11 hours); E1 plan from the packet's numbers (50 mg, one cup by 3 p.m., one cold brew leaves 25 mg); E2 a letter to Mr Bowen, six tick-off conditions, eight blank lines |

Teacher's calls on Part E: say **adenosine**, not "sleepy chemical" (too juvenile);
**no sentence starter** on the letter; give a **direct mg figure**, not the 400 mg
study, which read as if 400 mg were the line. The sources are in the key: EFSA
(2015) for 100 mg in adults (the child's 50 mg is the same 1.4 mg/kg scaled to a
Year 7, our arithmetic); Gardiner et al. (2023) for about 9 hours per cup, Drake
et al. (2013) for why 6 hours is not enough; the National Sleep Foundation's
9–11 hours for ages 6–13.

## French copy (26 Oct 2026)

`hw10x-fr.pdf` is the same source built with `\FRENCH` defined, on HW 9's scheme
(see `../hw09/README.md`): `\fr` and `\frin` lines that are empty in the English
copy, the English key word kept in blue inside the French, the English decimal
point, *en anglais* wherever the student writes. The English copy is untouched:
all eight pages rasterise pixel-identical to the build before the French went in.

Choices worth knowing:

- **Times** are said the way French says the sheet's 12-hour clock: *8 h du matin
  (**8 a.m.**)*, *11 h du soir (**11 p.m.**)*, so a.m. and p.m. are taught in passing.
- **Billion.** Part D's word help warns that an English *billion* is a French
  *milliard*; a French *billion* is a million million.
- **The interview** in B1 is given in French too, in the *tu* a child uses at home,
  since the student may interview in any language. The answers stay English.
- **Labels in drawings** stay English. D2's three speeds and the Sun's core get a
  French line under the label (`\frnode`), with the rows set further apart in the
  French copy (`\dtwoB`, `\dtwoC`) so the lines do not collide.
- C2's object names get a French line inside the cell (`\frcell`), and those rows
  drop the `\tall` strut (`\ctall`), which opened a gap under a two-line cell.

**Fourteen pages**, whole double-sided sheets. The French copy has more room: leading
1.10, writing lines 1.9em apart, a taller A4 graph, more lines for A6 and B5 (6),
B6 (5) and the letter (14). A6, B1 and B5 are single blocks in the French copy so
a question never leaves its lines or its translation behind, and `\fr` carries a
`\nobreak`. Part D starts a new page there: D1 and D2 do not fit on one, and the
break keeps the count at 14 whatever moves earlier. The spare space falls after B5
(page 8) and D2 (page 12).

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw10x -French
```

Built and verified with MiKTeX: student copy **8 pages**, French **14**, teacher
copy 11, no errors, no overfull boxes. Every page was rasterised and read.
