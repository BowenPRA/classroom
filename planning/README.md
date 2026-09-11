# planning

The printed weekly lesson plan: LaTeX compiled to PDF, **one page per teaching
day**, so a single day can be printed and written on.

```
plan-style.tex        shared house style -- do not fork it per document
y7-q1/
  y7-q1.tex           Quarter 1, one week block appended each Friday
  y7-q1.pdf           the built document (landscape A4, one day per page)
  .preview/           rasterised pages, regenerated on every build
```

## Build

```bash
pwsh .claude/skills/weekly-plan/scripts/build-plan.ps1 y7-q1
```

Three pdflatex passes (the contents page is built from forward `\pageref`s),
then every page is rasterised to `.preview/p-N.png`. **Look at the PNGs.** A
clean log says nothing about whether a day spilled onto a second page.

## What is in each week

1. **Overview** — the at-a-glance table, day by day, science against maths.
2. **Links** — lesson slides, the one-page teacher plans, and the homework.
3. **Parent update** — the Friday post as it went out, on the same page.
4. **One page per day** — the four-column table, science against maths.

Everything coloured is a live link. Lesson links point at the deployed site
(`#/lesson/<course>/<unit>`); homework points at `#/homework`, which is the
only stable address for a packet because Vite fingerprints the PDFs on every
deploy.

## Adding a week

See `.claude/skills/weekly-plan/SKILL.md`. The short version: copy the previous
week's block, renumber every label key, add the matching contents entries,
rebuild, and re-read the pages from the new week onward. A duplicated label key
builds cleanly and silently sends two contents entries to the same page.
