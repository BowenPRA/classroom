# Year 7 · Homework Packet 2

`hw02.tex` — Maths 1.2 (multiplying & dividing integers), Maths 1.3 (multiples and the
LCM), Science 1.2 (comparing plant and animal cells), Science 1.3 (specialised cells).

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw02
```

House style is shared, in `../hw-style.tex`. Method is the `new-homework` skill.

Built and verified with MiKTeX 25.12: 10 pages, no errors, no overfull boxes.
Teacher copy is 14 pages.

## What's in it

Four sections, one per lesson, maths first.

| | |
| --- | --- |
| A1–A5 | Sign rules and 12 calculations · English → calculation · **"two negatives make a positive" tested on both `×` and `+`** · brackets and estimating · three word problems |
| B1–B4 | Multiples → common multiples → LCM from the lists · the don't-just-multiply trap · two word problems · **write the question** for an integer product and for an LCM |
| C1–C4 | Vocabulary · plant-or-animal with a reason · *similar* is not *the same* · order the slide-preparation steps |
| D1–D3 | The structure–function table · the `adapted to … because it has …` frame · name the five specialised cells |

Nothing is lifted from the workbook. The traps are the deck's, with new numbers:

- **A3** is the spine of Maths 1.2 — the sentence is true for `×` and `÷` and false for
  `+`, and part (d) makes them repair it.
- **A5.3** is the deadpan one, and it is a harder trick than Homework 1's: he sells zero
  ducks, so most of the numbers vanish — but the stall fee does not. Expect both "0" and
  "−15" in the room.
- **C2 row 3** is the Rhoeo trap: purple, no chloroplasts at all, still a plant, because
  every cell has a straight-sided wall. It catches students who have quietly replaced
  "has a cell wall" with "is green".
- **D2.3** is the nucleus trap — the three animal cells share cytoplasm and a membrane,
  but *not* a nucleus.

## Layout notes

- The specialised-cell drawing is in **two rows**, not one. The neurone and the root
  hair cell are the long ones; on a single row of five they shrink until the axon reads
  as an arrow rather than a cell.
- The root hair cell is drawn as a **single outline path**, so the box and the hair join
  with no seam down the middle.
- `D3` is the unbreakable full-page block, so it sits last in its section.
