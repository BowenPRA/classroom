# Year 7 · Quarter 1 Science Review Packet

`q1sci.tex` — **Q1 Review: Science Units 1 and 2**: Science 1.1–1.4 (cells, specialised
cells, tissues and organs), 2.1–2.4 (particles, changes of state, the water cycle) and
2.5–2.8 (atoms, the Periodic Table, compounds and formulae, mixtures, acids and bases).
Science only; the maths review is `q1rev`.

Headings are the green of the Extra packets (EX 3–8), at the teacher's request. Name and
date given go once, on the cover. The instruction box is two lines: the three levels,
then "Answer in full sentences."

Goes out before the **Science Quarter 1 Assessment** (50 marks, 60 minutes, Units 1 and
2 mixed, the same format as the maths one).

## The assessment is not in this repo, on purpose

It lives in `OneDrive\Desktop\Y7Tests\Science\Q1-Assessment\`, beside the Cambridge
tests. This repo is public on GitHub and deploys to a public site.

At the teacher's request this packet overlaps the assessment **a little**: a few
question *types* are on both, never the same item. Which ones is written down in the
assessment's own source, not here — a list in this file would tell the class where to
look.

## The end-of-year overlap

Also at the teacher's request, the questions on the Cambridge Stage 7 **end-of-year**
paper that Units 1 and 2 can answer are here, rewritten with new items:

| Here | End-of-year | What changed |
| --- | --- | --- |
| A1 | Q2, cell part to function | all seven parts, not four; two jobs both start "controls" |
| C3 | Q9, a list of symbols and formulae | a new list; "cooking gas" instead of "a gas" |
| C5(b) | Q8, word to statement | element / compound / mixture / pure, not metal / alloy (alloys and "metals are on the left" were never taught) |
| C6 | Q6, acid or alkali | twelve cards from the 2.8 deck, not five |
| C7 | Q7 and Q10 | sulfur + oxygen for magnesium + oxygen; the two-bottle neutralisation without its products (salt and water is Stage 8) |

## Nothing untaught

pH runs 1 to 14 (the 2.8 deck). Only litmus colours are asked in words. Only a magnet
and evaporating separate a mixture. No sublimation, no cooling curve, no metals-on-the-
left, only the first 20 elements. Contexts already used in HW 1–8 are avoided.

## Building

```bash
powershell -c '& "C:\Users\bowen\lessons\.claude\skills\new-homework\scripts\build-hw.ps1" q1sci'
```

Built and verified with MiKTeX 25.12: **10 pages**, no errors, no overfull boxes, every
page rasterised and read. Teacher copy is 13 pages.

## What's in it

| | |
| --- | --- |
| A1–A2 | Part to job (with the "controls" trap); label a root hair cell and trace the water into it |
| A3–A4 | Sort ten things into cell / tissue / organ / system / organism; Mr Bowen's table of specialised cells, one mistake a row |
| **A5** | **Challenge** — how many cells make a millimetre (Unit 3 maths); why a white blood cell has no wall |
| B1–B3 | Draw the particles; tick solid / liquid / gas (two rows need two ticks); name the change from real examples |
| B4–B5 | Explain boiling and condensing with particles (sentence starters); the water cycle, all six arrows |
| **B6** | **Challenge** — the heating curve (still heating at 10 minutes, still 100 °C); why clothes dry faster in the sun |
| C1–C5 | Symbols both ways; the first 20 elements, rows and columns; formulae; naming compounds; element, compound or mixture from particle boxes, and separating a mixture |
| C6 | Acid or alkali, from the end-of-year paper |
| **C7** | **Challenge** — the particle equation and the neutralisation investigation, from the end-of-year paper |
| **D1** | **Challenge** — Mr Bowen's lab notebook: find six of its mistakes |

## What came out for the 10-page target

The first full draft was 13 pages. These were cut (labels are the draft's):

- A2 **true or false**, six sentences (chlorophyll is an organelle; the membrane is
  stiff; mitochondria only in animals …) — A1 and D1 carry the same misconceptions.
- A4(b) red blood cells and capillaries; A5(b) the organs of the digestive system;
  A6 "give two limitations of a model cell".
- B2(b)–(c) strongest forces, and what is between gas particles.
- **B4 melting and boiling points** (water, mercury, oxygen, iron at 20 °C and −50 °C,
  and 357 − (−39)).
- B5(c) why thermometer liquid rises; **B6 reading two thermometers** and the three eyes
  at a measuring cylinder — HW 8 Section F was a whole section on reading scales.
- B8 the hospital's oxygen bottle; C4(c) monoxide and dioxide.
- **C7 reading the pH** (six liquids, weakest acid, red litmus in shampoo, why litmus
  cannot tell strong from weak); C8.1(c) element or compound; C2(e) the three metals
  in period 3.

One thing was **added** during the cuts: C5(c), separating a mixture with a magnet or by
evaporating. It was on the assessment's topic list and nowhere in the packet.

## Layout notes for whoever edits this next

Several blocks are minipages because each was once split across a page: A2's diagram
with its instruction, A3's list with its table, each part of B4, C1's box with its table,
C4(b), C7's word help with question 1, and all of D1. The order inside Sections A and B
was chosen so the big blocks pack; moving one moves every page break after it.

This packet also found a bug in the house style's page breaking: a question heading
straight after a section heading still offered a page break between the two (its
`\needspace`), and TeX took it when the first question was a big block — "Section D"
was left alone at the foot of page 10. `hw-style.tex` now skips that `\needspace`
(2026-09-30).
