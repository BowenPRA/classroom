---
name: weekly-plan
description: >-
  Build or extend the printed weekly lesson-plan document for this repo — a
  LaTeX document compiled to PDF, one page per teaching day, with a week
  overview, the Friday parent update, and live links to lesson slides, teacher
  plans and homework. Use this whenever the user wants their lesson plan
  written up, a new week added, or the plan brought up to date — including
  phrasings like "add last week and next week to my plan", "make a lesson plan
  PDF", "update the weekly plan", "put the parent announcement in the plan".
  Use it for revisions too ("move the review to Wednesday", "the Thursday lab
  changed"), because the build-and-look loop is identical.
---

# Building the weekly lesson plan

The plan is a **printed PDF Mr Bowen teaches from and writes on**, not a deck
and not a packet. One page per teaching day, so a single day can be printed and
carried. It is also the archive of what was actually taught and what went out
to parents, which is why the parent updates live in it.

Read `CLAUDE.md` first for the house non-negotiables that apply everywhere
(Mr Bowen in worked examples, no invented student names). `docs/LESSON-PLAYBOOK.md`
governs decks and does **not** govern this. The design rules are below.

## 0 · Ask before you build

A plan written from a wrong assumption is worse than no plan, because it will
be believed later. Pin down, up front:

- **Which weeks, and which are past and which are future.** A past week records
  what happened; a future week records what is intended. Do not blur them.
- **Every period in the week.** The teacher will usually list the interesting
  lessons and silently skip the routine ones. Ask about the gaps by name
  ("Thursday maths isn't in your list — what ran?") rather than inventing a
  filler lesson. `AskUserQuestion` with a recommended option is the fast way.
- **The parent update for each past week.** Ask for it if it was not supplied;
  it is half the point of the week page.

## 1 · Where it lives, and how it builds

```
planning/
  plan-style.tex        <- shared house style. Do not fork it.
  y7-q1/
    y7-q1.tex       <- the document
    y7-q1.pdf
    .preview/           <- rasterised pages, regenerated every build
```

**Build and look in one command:**

```bash
pwsh .claude/skills/weekly-plan/scripts/build-plan.ps1 y7-q1
```

It runs pdflatex **three** times (the contents page is hand-rolled from
`\label`/`\pageref` pairs pointing forward, and hyperref needs a pass after
those settle), reports errors, overfull boxes and undefined references, prints
a page-density bar chart, and rasterises every page to `.preview/p-N.png`.

MiKTeX is installed per-user at `%LOCALAPPDATA%\Programs\MiKTeX\miktex\bin\x64`
and is **not on PATH** in a fresh shell; the script prepends it. `pdftoppm`
ships with MiKTeX.

## 2 · The structure, and the macros that build it

Every week is the same four things, in this order:

```latex
\clearpage                                    % BEFORE the renewcommand. See below.
\renewcommand{\currentweek}{Week 3 \sep 17--21 August}

\begin{weekoverview}{w3}{Week 3}{17--21 August 2026}   % at-a-glance table
\glancerow{w3d1}{Monday 17}{science one-liner}{maths one-liner}
...
\end{weekoverview}

\begin{weeklinks}                             % two columns of live links
\linkline{\slidelink{y7-math/U01_4}{Maths 1.4 Highest Common Factors}}
\linkline{\planlink{y7-math/U01_4}{Maths 1.4}}
\linkline{Homework: \hwlink{Packet 3 \sep Factors, Tests and Tissues} --- due Monday.}
\end{weeklinks}

\annstart{w3ann}{Friday 21 August}            % the parent update, same page
\begin{editorial}[title]...\end{editorial}    % optional, and it goes HERE
\begin{annbody}
\annsec{This week}
\annsub{Science --- Unit 1.4: Tissues}
...
\end{annbody}

\begin{daypage}{w3d1}{Monday}{17 August}      % then one page per day
\subjectrow{Homeroom}{8:30 -- 8:45}{objective}{activities}{evidence}
\subjectrow{Science}{8:45 -- 9:35}{...}{...}{...}
\subjectrow{Mathematics}{10:45 -- 11:35}{...}{...}{...}
\end{daypage}
```

Cells are lists of short statements, never paragraphs: write
`\li{...}\li{...}` with no blank lines between.

Add the week's entries to the hand-rolled contents at the top with `\tocweek`
and `\tocline`, in **document order** — overview, parent update, then the days.

### The three link macros

`\slidelink{course/unit}{label}` the deck the class saw ·
`\planlink{course/unit}{label}` the one-page teacher plan ·
`\hwlink{label}` the homework shelf.

Unit ids are folder names under `content/`, and the lesson route is
`#/lesson/<course>/<unit>`. **Homework is different: individual packet PDFs are
fingerprinted by Vite at build time**, so `hw03.pdf` has a different URL after
every deploy. `#/homework` is the only stable address and it lists every
packet — never hand-write a path to a PDF.

Get the objective, the activity beats and the evidence from
`content/<course>/<unit>/plan.js`. It already contains the real timeline,
the traps and the answers; writing them again from memory invents detail.

## 3 · House style, and why

- **Landscape A4.** The day table is four columns of prose. Portrait crushes
  Main Activities into a ribbon and the page stops being readable at a glance,
  which is the only thing it is for.
- **One day per page, always.** A day that spills is worse than a day set two
  points smaller. The table is `\footnotesize` for exactly this reason.
- **No math mode anywhere.** This document never loads `mathastext`, so a
  single `$-3$` renders in Computer Modern serif against Lato and the page
  looks half-typeset. Use `\tminus`, `\ttimes`, `\textsuperscript{2}`.
- **Pure ASCII source.** Write `--`, `` `` ''`` , `\ldots`. Prefer the Edit tool
  over PowerShell text substitution on `.tex` files, which will happily
  double-encode UTF-8 into mojibake.
- Colours match the decks: teal for days, purple for weeks, green for the
  parent update, orange for a note to the teacher.

## 4 · Parent updates: reproduce, do not tidy

The update is a record of what parents were actually told. So:

- **Reproduce the wording.** Fix only mangled link syntax and obvious typos.
- **Emoji are dropped.** The section markers carry the same meaning as
  headings, and colour emoji do not render in pdflatex. Say so once.
- **When the post contradicts itself or contradicts the plan, do not pick a
  winner.** Put it in an `editorial` box and leave the ambiguous fact out. Two
  real examples now in the document: a packet due date given as both Thursday
  and Monday in the same post, and a Jeopardy game filed under Maths in the
  post but taught in the Science period. Silently choosing one would have
  buried a mistake the teacher still needs to fix.
- **A future week has no sent post.** Draft one from the plan, mark it clearly
  as a draft in an `editorial` box, and name every placeholder in it.

## 5 · Traps that have already cost time

- **`\color` inside a leader box breaks the leaders.** xcolor queues an
  `\aftergroup\reset@color`, which lands between the box and the `\hfill`, and
  TeX stops with *"Leaders not followed by proper glue"* once per line. Set the
  colour **outside**: `{\color{black!30}\leaders\hbox to 0.55em{\hss.\hss}\hfill}`.
- **`\fcolorbox{...}{\parbox{\dimexpr\textwidth-2\fboxsep...}}` collapsed the
  box to a sliver.** Use a `tcolorbox`, which takes `\linewidth` as its outer
  width — which is what is actually wanted.
- **`\renewcommand{\currentweek}` must follow a `\clearpage`.** The running
  head is read at shipout, so renewing it while the previous page is still open
  stamps the next week's name on it. This put "Week 1" on the contents page.
- **A `tcolorbox` after a full two-column announcement splits and strands one
  line on a near-empty page.** Editorial notes go **above** `annbody`, not
  after it.
- **Check the page count arithmetic.** `2 + sum over weeks of (1 + days)`,
  plus one for each announcement that spills. If the built PDF has more pages
  than that, a day page overflowed — and the log will not tell you.

## 6 · Verify by looking. There is no substitute.

Run the build script, then **Read the PNGs.** Every page first time through;
the changed pages and their neighbours on a revision. In order:

1. **Did any day spill onto a second page?** Page-count arithmetic first, then
   look at the day pages flagged densest.
2. **Anything past the right margin** — the day table and the glance table.
3. **A box split across a page break**, leaving an orphan line.
4. **The contents page numbers.** They are forward references; a two-pass build
   leaves them stale and the log says so only as "undefined references".

Then check the links resolve, rather than trusting that they look right:

```bash
python3 -c "import fitz,collections; d=fitz.open('y7-q1.pdf'); c=collections.Counter(l['uri'] for p in d for l in p.get_links() if l.get('kind')==2); [print(n,u) for u,n in sorted(c.items())]"
```

Every URI should be `https://bowenpra.github.io/classroom/#/...` and every
lesson id should match a real folder under `content/`.

## 7 · Adding a week to an existing document

Copy the previous week's block, renumber every label key (`w4d1`, `w4ann`, …),
add the matching `\tocweek`/`\tocline` entries, rebuild, and re-read the pages
from the new week's overview onwards. Labels are the one thing that fails
silently: a duplicated key builds cleanly and sends two contents entries to the
same page.

When the document grows past a term, start a new one (`planning/y7-w05-08/`)
rather than letting the contents page run to two columns of forty lines.
