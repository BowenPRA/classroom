# Year 7 · Homework Packet 12 — None of the Seven

`hw12.tex`: Maths **5.3 Drawing lines and quadrilaterals** with a short review of **5.1** and
**5.2**; Science **4.1 Characteristics of living organisms** and **4.2 Viruses**. The teacher
asked (11 November 2026) for an eight-page packet of maths and science, and said: *"I don't
want them to need a protractor for this assignment."*

Due **Monday 16 November 2026**, printed on the cover in red.

| File | What it is |
| --- | --- |
| `hw12.pdf` | Student copy, English. **8 pages** (two sheets, double-sided). Linked on `#/homework` as **HW 12**. |
| `hw12-teacher.pdf` | Student copy plus a 3-page answer key with diagnoses. **11 pages.** Not linked from the site. |

**No French copy** this time, at the teacher's request. The source has no `\fr` lines, so
`build-hw.ps1 hw12 -French` would just print the English again.

Build: `pwsh .claude/skills/new-homework/scripts/build-hw.ps1 hw12` (house style
`../hw-style.tex`, unchanged).

## No protractor

5.3 is a protractor lesson, so every 5.3 skill here is done another way:

- **A1** reads a *printed* protractor. It covers the deck's main skill, "count up from the 0 on
  the line, and say acute or obtuse first", and there is nothing for the student to hold. The
  trap answer, 130°, is the deck's vote.
- **A3** draws parallel and perpendicular lines on a **squared grid** by counting squares (the
  parallel goes "3 across, 1 up" like AB). It is also the deck's *through Q* / *from C to MN*
  language trap.
- **A4** square or rhombus (the frame with one nail in each corner), and **A5** checks
  measurements with 360° (the table measured from the outside, now 250° → 110°).
- **B1** diagrams say *calculate, do not measure*.

The cover says: *You do not need a protractor: a pencil and a ruler are enough.*

## What's in it

| | |
| --- | --- |
| **Part 1 · Maths** | |
| A1 | Read the protractor: acute or obtuse, the two numbers, 50° not 130°, and why |
| A2 | The Workbook's words: six phrases from the deck's slide 19 matched to their meanings |
| A3 | On the grid: parallel through P, perpendicular *through* Q, perpendicular *from* C, the shortest way |
| A4 | A square needs right angles: tick table (square, rhombus, rectangle), and Mr Bowen's "still a square" |
| A5 | Does it add up to 360°? Four of Mr Bowen's drawings, then his garden measured from the outside |
| B1 | Find the angle and give a reason: round a point, vertically opposite, corresponding, alternate (obtuse) |
| **Part 2 · Science** | |
| C1 | The seven, and one more: the four write panels word for word, matched |
| C2 | The gecko on the wall: one clue per characteristic; Mr Bowen jumps (two answers) |
| C3 | Breathing or respiration? True/false, including the tree and *sensitive*; correct one |
| C4 | Alive, alive once, or never alive: the game's traps with new things; the river in full sentences |
| C5 | The robot dog (some of the seven, not all) and the cactus (all seven, slowly) |
| D1 | Label the virus: pegs, protein coat, RNA, with what each one does under its line |
| D2 | A cell or a virus? Six rows; row 6 is "both" |
| D3 | Follow the flu virus: five steps in order, the photocopier, why you feel ill |
| D4 | Mr Bowen's model virus (the book's Think like a scientist): what stands for what, and one difference |
| D5 | Is a virus alive? The seven on its own (six N, one S), then five sentences with a tick list |

## Cut to reach eight pages

The first build was 12 pages. These were cut, and any of them would make a good starter:

- **Write the question** for `180° − 65° − 90° = 25°`. HW 11 had a calculation → English
  question last week.
- **B1's straight line and quadrilateral** (38° → 142°; 80°, 110°, 75° → 95°). A5 already uses
  360° in a quadrilateral.
- **The diagonal**: the class's 5 cm square has a 7.1 cm diagonal, so a 50 cm tablecloth's is
  about 71 cm (the table's 75 cm height doesn't matter). Mr Bowen's "a 3 m square has a 6 m
  diagonal" is wrong because a diagonal is shorter than two sides.
- **How small is a virus?** 10 000 in 1 mm, so 100 000 in 1 cm and 120 000 across a 1.2 cm
  fingernail. If the virus were a 4 cm ping-pong ball, the cell would be 8 m wide, about the
  width of the classroom (the deck's zoom, backwards).

Nothing left in the packet tests *diagonal*, so check it in class before the unit test.

## Sources and rules

Every number is new. None comes from the Workbook (5.3 Practice 6 is 90°, 125°, 90° → 55°, and
it is not used) or from the decks' practice slides. Question types follow the decks:
`content/y7-math/U05_3`, `content/y7-science/U04_1`, `content/y7-science/U04_2`.
