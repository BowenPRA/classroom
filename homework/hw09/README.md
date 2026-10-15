# Year 7 · Homework Packet 9

`hw09.tex` — **Lighter on the Moon**: Mathematics 4.1–4.4 (compare, add, subtract,
multiply and divide decimals), 4.5 (making calculations easier) and the Unit 4 review
(× and ÷ by a 2-digit number, money to 2 d.p., conjecture and the mean). Section F uses
**Science 3.1** (gravity, weight and mass), but only as a place to do decimals: there is
no science question on the packet that is not answered with a number.

Due **Friday 23 October 2026**, printed on the cover in red.

Goes out with **`../hw09x/`**, the Extra Homework sheet.

## Three PDFs from one source

| File | What it is |
| --- | --- |
| `hw09.pdf` | Student copy, English. **10 pages.** |
| `hw09-fr.pdf` | Student copy with a **grey French line under every instruction and question**. **14 pages.** |
| `hw09-teacher.pdf` | English copy plus the answer key. **15 pages.** Not linked from the site. |

The French copy is the teacher's request from 14 October 2026, when the lessons moved to
English + French: *"a mix of French and English to help the student learn English."*
So the English stays exactly where it was and the French is support underneath it:

- `\fr{...}` prints a French line under the English; `\frin{...}` a short gloss in
  brackets (table cells, word-help rows, headings). Both are **empty** in the English
  copy, and both start with `\unskip` so the English layout is unchanged by them.
- **The English key word is left inside the French line, in blue** — *Combien de
  monnaie (**change**) reçoit-il ?* That is the point of the mix: the student reads the
  French, and the word they have to learn is still the English one.
- Numbers keep the **English decimal point** (0.85, not 0,85), as the class does. The
  French *words* say **la virgule**, which is what a French speaker calls the decimal
  separator; the cover explains once that English calls it *the point* and writes it
  with a dot.
- Questions that ask for writing say **"en anglais"**. The answers are English either way.
- The answer key is English only; there is no French teacher copy.

**The French was rewritten on 15 October** after the teacher found the first version
awkward. It now reads as French a teacher would write for 12-year-olds, not as
word-for-word English: *ordre croissant*, *droite graduée*, *se partager
équitablement*, *combien de monnaie lui rend-on ?*, *la première ligne est faite pour
toi*. The rewrite was done from a table of old → new lines (every line matched; none
was changed silently).

**Even page count.** The French copy gets more room to write as well as the French
lines — leading 1.10 instead of 1.06, table rows 2.4em instead of 1.9em, working boxes
a third taller — which lands it on **14 pages**, whole double-sided sheets. F4 has the
last page to itself with a taller box. All of this sits in an `\iffr` block after the
`\tall` definition; none of it touches the English copy. Minipages keep each
instruction with its table (A1(b), C1, C3, D2, E4, F4) because the longer French copy
split all of them across pages.

## Section F is why this packet exists

**F3, "Do heavy things fall faster?"**, is the falling-ball lab done with a stopwatch:
four drop times each for a heavy ball and a light ball, from 1 metre.

- The fastest **single** time in the table belongs to the **light** ball (0.39 s), so
  (a) and (b) lead the class to the conjecture *the light ball falls faster*.
- Both **means** are 1.80 ÷ 4 = **0.45 s**. The mean tests the conjecture and throws it
  out, and the decimals answer the question Science 3.1 opened on.
- (e) asks why four drops of the same ball give four times: the 0.2 s reaction time
  from the 3.1 deck's slide 43.

Everything else in F is checked against the 3.1 deck: the strengths of gravity are the
deck's own (Moon 1.6, Mars 3.7, Uranus 8.7, Venus 8.9, Earth 10, Neptune 11, Jupiter 25;
Mercury and Saturn are left out so F4 has one answer), every weight is a **whole** mass
times a decimal strength (never decimal × decimal, which Stage 7 does not teach), and F2
uses a 15 kg backpack because the deck already did Mr Bowen's 80 kg on every planet. F4
runs that deck question backwards (296 N ÷ 80 kg → Mars), and its last line —
*what will his mass be when he gets there?* — is the science, needing no calculation.

## What's in it

| | |
| --- | --- |
| **A · 4.1** | |
| A1 | Place 5.2, 5.9, 5.45, 5.05 on a line in tenths, then order them. The easy way in |
| A2 | `<`, `>` or `=`; then Mr Bowen's *"6.18 is bigger than 6.2, because 18 is bigger than 2"* — say both in English first |
| A3 | Long jump (longest wins) and 50 m swim (fastest = smallest). The winner of each looks wrong. (e) asks **fourth**, not the deck's *third*, because with five lanes third is the middle from either end |
| **B · 4.2** | |
| B1 | Six written-method sums and differences; three need zeros written; (f) is the deck's 1 − 0.72 with new numbers |
| B2 | Mental method: round, then give back. Two of the four give back with a **plus** |
| **C · 4.3–4.4** | |
| C1 | Point out, point back, with an estimate column |
| C2 | Six divisions; (b) and (f) need a 0 in the answer; (d) and (e) run out of digits |
| C3 | One fact (38 × 27 = 1026), five answers, no multiplying |
| **D · 4.5** | |
| D1 | Decimals ↔ fractions; 0.03 and 8/100 are the traps |
| D2 | *Half of / a quarter of / a tenth of* — calculation → English and back |
| D3 | × a decimal: divide first. Every answer is smaller than where it started |
| D4 | × 9, × 11, partitioning |
| D5 | Mr Bowen's homework: one trap each from C1, A2, C2 and D3; only (c) is right |
| **E · review** | |
| E1 | 5.8 × 15 and 41.6 ÷ 13 (write the 13 table) |
| E2 | **English → calculation.** The heart of the maths: change, share equally (*Mr Bowen and two friends* = 3), how much heavier, *subtract 2.6 from 9.1* |
| E3 | Money to 2 d.p.; 25 dollars shared by three, and the 1 cent left over |
| E4 | Three notebooks and a pen; the grapes and "quality control" (the deadpan one) |
| E5 | **Calculation → English**: a word problem for 12.60 ÷ 4 = 3.15 |
| **F · Science 3.1** | |
| F1 | Order the strengths of gravity; Venus vs Uranus; Earth vs Moon |
| F2 | The 15 kg backpack on five worlds |
| F3 | **Do heavy things fall faster?** The mean answers it |
| F4 | Mr Bowen moves house |

## Cut for the ten-page target

The first build was 13 pages. Taken out, in case any of it is wanted back: a
weight-on-Earth (× 10) table, a ruler-catch reaction-time question (its mean is now in
EX 9's X13), a *mass on Mars* sentence (F4's last line asks the same thing), D3(g)
(*"multiplying always makes a number bigger"* — D5(d) tests it), E1(a) and (d), E2(f),
E4's rope, E5's first expression, D2's *half of 9.6*, D4's 7.2 × 9 and 5.4 × 11, C1's
12.6 × 3, and D5's 6 − 2.35 and 0.06 = 6/10.

## Building

```bash
powershell -c '& "C:\Users\bowen\lessons\.claude\skills\new-homework\scripts\build-hw.ps1" hw09 -French'
```

`-French` (added to the build script for this packet) also builds `hw09-fr.pdf` and
rasterises it to `.preview/fr-N.png`. All three copies take a few minutes together; the
French one is the slowest.

Built and verified with MiKTeX: English **10 pages**, French **14**, teacher **15**, no
errors, no overfull boxes. Every page of the English and French copies was rasterised
and read; every answer in the key was checked arithmetically.
