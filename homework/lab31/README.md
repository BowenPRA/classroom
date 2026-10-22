# Year 7 · Science 3.1 Lab — Drop It!

`lab31.tex`: a **four-page** lab sheet (two A4 sheets, double-sided), one per student,
for groups of three. Science 3.1: gravity, reaction time and speed.

| File | What it is |
| --- | --- |
| `lab31.pdf` | Student copy. **4 pages.** |
| `lab31-teacher.pdf` | Student copy plus 2 pages: prep checklist, timing, expected values, model answers. |

**Keep it at four pages.** The teacher wanted "a few pages, six at most"; the first
draft was 13 and was cut. The results tables run sideways because a vertical
ten-drop table cost half a page.

## What's in it

| | |
| --- | --- |
| Page 1 | Title, names, prediction, safety, the two tools (mean; speed = distance ÷ time with Mr Bowen's 20 cm example), Part 1 method with a before/after ruler drawing |
| Part 1 | Ruler catch, no countdown. Ruler table 1–30 cm → s (t = √(2d/10), matches 3.1 slide 42). Five catches each: cm, ruler time, stopwatch time, total, mean. The ruler's speed. One question: why a stopwatch fails (reaction time). |
| Part 2 | Two objects, same size and shape, heavy and light, dropped from a tape mark as high as the *shortest* person can reach. Ten drops, two Timers, jobs swapped after drops 3 and 6. Speed of A. One question: why swap Timers, why the same size and shape. |
| Part 3 | Upstairs balcony to the ground. Height with a long tape, three readings. Fall-time table (no air) to predict. Six drops, jobs rotate every drop (the Ground person carries the objects up and becomes the Dropper). Speed of A. One question: why the longer fall gives the more accurate time. |
| Reflection | A letter to Aristotle (3.1 slide 6) in four parts: claim, evidence with two numbers, reasoning (3.1 slide 39), one way to make the test more accurate. |

## Building

```bash
pwsh .claude/skills/new-homework/scripts/build-hw.ps1 lab31
```

MiKTeX was reinstalled on 22 October 2026. Its package downloads fail from the
PowerShell sandbox (no network there), so the first build of anything that needs
a new package has to run from Git Bash. Already-installed packages build fine in
PowerShell.
