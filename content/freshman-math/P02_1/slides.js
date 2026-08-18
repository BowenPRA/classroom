// content/freshman-math/P02_1/slides.js
// Algebra Track · Project 2 — The Rectangle That Isn't.
//
// The deck is in TWO HALVES, exactly as Project 1 is, and the split is the most
// important thing about its structure:
//
//   Slides 1–17  THE PROJECT.  Everything the student needs and nothing else.
//                The two shape diagrams here are SHAPE_P_BLANK and
//                SHAPE_Q_BLANK — vertices named, no slopes, no verdict.
//   Slide 18     A STOP SLIDE.
//   Slides 19–25 THE SOLUTIONS. Shown only once projects are handed in.
//
// THE HOOK. Shape P and Shape Q share the edge AB and differ by ONE grid square
// at C. Both are parallelograms. P's corners are exactly 90°; Q's are 79.7°.
// Nobody can call that by eye on a tilted figure, and that is the entire point
// of the project: your eye cannot referee a right angle, and a slope can. The
// numbers were chosen so neither shape is a square either, which blocks the
// short cut of measuring one side and declaring victory.
//
//   Shape P   A(−4,−2)  B(2,1)  C(4,−3)  D(−2,−6)   slopes 1/2 and −2
//   Shape Q   A(−4,−2)  B(2,1)  C(5,−3)  D(−1,−6)   slopes 1/2 and −4/3
//
// WHY THERE IS A PAIR OF SCISSORS IN A COORDINATE GEOMETRY PROJECT. Part 2 is
// the equivalent of Project 1's twine: students draw a slope triangle, cut it
// out, and physically turn it a quarter turn. Rise and run swap places and one
// of them changes sign — which is not a mnemonic for the perpendicular rule, it
// IS the perpendicular rule, discovered with their hands before it is written
// down. Without that part this project would be a worksheet, and it is the one
// part not to cut for time.
//
// There is deliberately NO WIDGET. The one thing a widget could add here is the
// turning triangle, and a student turning a real piece of paper beats watching
// one turn on a screen. Everything else is a static diagram or a question.
//
// The course is bilingual:false, so this deck is English-only and carries no
// …Vn twins. There is no `date`: a project spans several lessons.
import { DIAGRAMS } from './diagrams.js'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'

export const slides = [
  // ══════════════════════════════════════════════════════════════════════════
  // THE PROJECT — slides 1 to 17. No answers anywhere in here.
  // ══════════════════════════════════════════════════════════════════════════
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Hammer',
    brand: 'Algebra Track · Project 2',
    eyebrow: 'Two lessons + a write-up',
    title: 'The Rectangle That Isn’t',
    card: {
      icon: 'Target',
      badge: 'Your task',
      text: 'Two shapes. **One of them is a rectangle and one is not.** Decide which — and **prove it with slopes**, not with a ruler and not with your eyes. Hand in one write-up. Marked out of **16**.',
    },
  },
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'The question this project answers',
    title: 'Can You Trust Your Eyes?',
    label: 'No method yet',
    labelIcon: 'MessageSquare',
    text: 'A rectangle is a shape whose corners are all **exactly 90°**.',
    sub: 'Exactly. Not nearly. On the next slide are two tilted shapes — **look at them and vote**. By the end you will have a test that never needs an opinion.',
  },
  {
    layout: 'compare',
    title: 'Look at Both. Which One Is the Rectangle?',
    columns: [
      {
        heading: 'Shape P',
        accent: BLUE,
        icon: 'Grid3x3',
        inlineSvg: DIAGRAMS.SHAPE_P_BLANK,
        caption: 'A(−4, −2)  ·  B(2, 1)  ·  C(4, −3)  ·  D(−2, −6)',
      },
      {
        heading: 'Shape Q',
        accent: GREEN,
        icon: 'Grid3x3',
        inlineSvg: DIAGRAMS.SHAPE_Q_BLANK,
        caption: 'A(−4, −2)  ·  B(2, 1)  ·  C(5, −3)  ·  D(−1, −6)',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Hammer',
    side: 'left',
    eyebrow: 'The brief',
    title: 'What You Are Doing',
    ratio: 55,
    content:
      'The two shapes share the edge **AB**. They differ at one corner only, by a **single square**.\n\n' +
      'Copy both onto squared paper before you do anything else. You will be working on them for two lessons.',
    notes: [
      {
        tone: 'write',
        badge: 'Copy this — the five parts',
        text:
          '**1. Predict** — vote before any maths.\n' +
          '**2. Build** — cut out a slope triangle and turn it.\n' +
          '**3. The rules** — parallel, then perpendicular.\n' +
          '**4. The verdict** — test both shapes.\n' +
          '**5. Your own shape**, then **write it up**.',
      },
    ],
  },

  // ── How it is marked, published before any work starts ────────────────────
  {
    layout: 'stack',
    accent: ORANGE,
    icon: 'Scale',
    columns: 2,
    eyebrow: 'Read this before you start',
    title: 'What You Are Marked On',
    content: 'Four things, **4 marks each**, **16 total**. None of them is "picked the right shape" on its own.',
    notes: [
      {
        tone: 'write',
        badge: '1 · The Drawings  (4)',
        icon: 'Grid3x3',
        text: 'Both shapes plotted accurately on squared paper, axes labelled and numbered, every vertex named.',
      },
      {
        tone: 'write',
        badge: '2 · The Mathematics  (4)',
        icon: 'Equal',
        text: 'Every slope worked out and shown. Each claim backed by a **calculation you can point to**, never by how the picture looks.',
      },
      {
        tone: 'write',
        badge: '3 · The Investigation  (4)',
        icon: 'Telescope',
        text: 'You built your own shape and tested it, and you found something the brief did not tell you — a case the rule fails to cover.',
      },
      {
        tone: 'write',
        badge: '4 · The Write-Up  (4)',
        icon: 'PenLine',
        text: 'Another student could follow it without asking you anything. Conclusions in **full sentences**, not just numbers.',
      },
    ],
  },
  {
    layout: 'steps',
    accent: ORANGE,
    icon: 'Scale',
    eyebrow: 'The same scale applies to all four',
    title: 'How Each Part Is Scored',
    content: 'Decide which line matches your work **before** you hand it in.',
    steps: [
      { text: '**1 — Started.** Something relevant is on the page.' },
      { text: '**2 — Partly there.** The main idea, with gaps or errors that change the answer.' },
      { text: '**3 — Secure.** Everything asked for, right method, small slips only.' },
      { text: '**4 — Beyond.** Correct and complete with reasoning shown — **and something nobody asked for**.' },
    ],
  },

  // ── Part 1 · Predict ──────────────────────────────────────────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'HelpCircle',
    eyebrow: 'Part 1 · before any calculation',
    title: 'Predict',
    ratio: 55,
    content:
      'Write these down **now**, while you still do not know. A wrong prediction costs you nothing.\n\n' +
      '> **1.1** Which shape do you think is the rectangle — P or Q?\n' +
      '> **1.2** How sure are you, out of 10?\n' +
      '> **1.3** What would you have to measure to settle it properly?',
    notes: [
      {
        tone: 'task',
        badge: 'Rule for Part 1',
        text: 'No calculating and no rulers. A prediction you later disagree with is **evidence you learned something** — do not edit it.',
      },
    ],
  },

  // ── Part 2 · The construction ─────────────────────────────────────────────
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Triangle',
    side: 'left',
    eyebrow: 'Part 2 · scissors out',
    title: 'Turn a Slope Through a Right Angle',
    ratio: 40,
    inlineSvg: DIAGRAMS.ROTATE_BLANK,
    content:
      'A slope is really a **triangle**: go along, then go up. So turning a line through 90° must turn its triangle too.\n\n' +
      'You are going to find out what that does to the numbers — by turning a real one.',
    notes: [
      {
        tone: 'task',
        badge: 'You need',
        text: 'Squared paper, scissors, and a pencil.',
      },
    ],
  },
  {
    layout: 'steps',
    accent: GREEN,
    icon: 'Hammer',
    eyebrow: 'Part 2 · in pairs',
    title: 'Cut It Out and Turn It',
    steps: [
      { text: 'On squared paper draw a right triangle with **run 3** and **rise 1**. Write its slope beside it. **Cut it out.**' },
      { text: 'Put it back on the grid, then **turn it a quarter turn** — keep the corner pinned under your pencil.' },
      { text: '**2.1** Record the **new run** and the **new rise**, with signs, and work out the new slope.' },
      { text: '**2.2** Repeat for **run 2, rise 5**, and one you choose yourself. Three rows in a table.' },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'ScanEye',
    side: 'left',
    eyebrow: 'Part 2 · look down your table',
    title: 'What Happened Every Time?',
    ratio: 55,
    content:
      'Three triangles, three quarter turns, and the same thing happened to all of them.\n\n' +
      '> **2.3** Describe it in **one sentence**. What happens to the rise and the run?\n\n' +
      'Get this sentence right. It is the rule you are about to prove in Part 3.',
    notes: [
      {
        tone: 'task',
        badge: 'Two things to mention',
        text: 'A good sentence says what happens to the **positions** of the two numbers, and what happens to a **sign**. Most first attempts only get one of the two.',
      },
    ],
  },

  // ── Part 3 · The rules ────────────────────────────────────────────────────
  {
    layout: 'split',
    accent: BLUE,
    icon: 'ArrowLeftRight',
    eyebrow: 'Part 3 · the easy rule first',
    title: 'Lines That Never Meet',
    ratio: 55,
    content:
      'Two lines that run in exactly the same direction never meet. They are **parallel**.\n\n' +
      '> **3.1** On one grid draw three different lines that all look parallel. Find the slope of each.\n' +
      '> **3.2** What do the three slopes have in common? Write the rule as a full sentence.\n' +
      '> **3.3** Two lines have slopes $\\frac{6}{8}$ and $\\frac{3}{4}$. Parallel or not? How do you know?',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Equal',
    side: 'left',
    eyebrow: 'Part 3 · now the hard one',
    title: 'Lines That Meet at a Right Angle',
    ratio: 55,
    content:
      'Your table from **2.1** has a slope **before** each turn and one **after** it — and a 90° turn is exactly what makes two lines **perpendicular**.\n\n' +
      '> **3.4** For each row, **multiply** the two slopes together. What do you get every time?\n' +
      '> **3.5** State the perpendicular rule in your own words.\n' +
      '> **3.6** A line has slope $-\\frac{2}{5}$. What slope is perpendicular to it? Check by multiplying.',
    notes: [
      {
        tone: 'task',
        text: 'Do not look this rule up. You already have the evidence for it in your own table.',
      },
    ],
  },

  // ── Part 4 · The verdict ──────────────────────────────────────────────────
  {
    layout: 'split',
    accent: RED,
    icon: 'ScanEye',
    eyebrow: 'Part 4 · settle it',
    title: 'Now Test Both Shapes',
    ratio: 40,
    inlineSvg: DIAGRAMS.SHAPE_P_BLANK,
    content:
      'Eight slopes in total — four edges on each shape. Show every one.\n\n' +
      '> **4.1** Find the slopes of **AB, BC, CD and DA** for **both** shapes.\n' +
      '> **4.2** Is each shape a **parallelogram**? Which slopes prove it?\n' +
      '> **4.3** Is each shape a **rectangle**? Which multiplication proves it?',
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'Ruler',
    side: 'left',
    eyebrow: 'Part 4 · one more question, and a trap',
    title: 'Rectangle, or Something Better?',
    ratio: 55,
    content:
      'A **square** is a rectangle whose sides are all the same length — so slopes alone can never prove one.\n\n' +
      '> **4.4** Use the **distance formula** from Lesson 1.1 to find the side lengths of the shape you decided was a rectangle.\n' +
      '> **4.5** Is it a square? Justify with numbers.\n' +
      '> **4.6** Go back to your Part 1 prediction. Were you right? Write one sentence on **why the eye finds this hard**.',
    notes: [
      {
        tone: 'task',
        badge: 'Careful',
        text: 'Two sides being equal is not enough. Say **which** lengths you compared and **why** those are the ones that matter.',
      },
    ],
  },

  // ── Part 5 · Investigation and write-up ───────────────────────────────────
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Telescope',
    eyebrow: 'Part 5 · this is the investigation',
    title: 'Now Build One Yourself',
    ratio: 55,
    content:
      'Anyone can check a shape they were given. Making one is harder.\n\n' +
      '> **5.1** Invent a rectangle that is **not** a square and has **no horizontal or vertical side**. Give its four vertices and prove it works.\n' +
      '> **5.2** Now make a **square** the same way. Prove both the slopes **and** the lengths.\n' +
      '> **5.3** Find a pair of perpendicular lines whose slopes **cannot** be multiplied. What is going on?',
    notes: [
      {
        tone: 'task',
        badge: 'Do not ask for the answer',
        text: 'This is where the **Investigation** marks live. 5.3 has a real answer and most students walk straight past it.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'PenLine',
    side: 'left',
    eyebrow: 'Part 6 · the write-up is worth as much as the mathematics',
    title: 'Make It Followable',
    ratio: 55,
    content:
      'Your reader is a classmate who was away.\n\n' +
      '> **6.1** Write up Parts 1–5 in order, with a labelled grid for every shape.\n' +
      '> **6.2** State your two rules clearly enough that someone could use them without seeing your working.\n' +
      '> **6.3** One paragraph: who actually needs to check a right angle **without** a protractor, and why?',
    notes: [
      {
        tone: 'theory',
        badge: 'Stuck on 6.3?',
        text: 'Anything built from coordinates rather than measured on site: screen graphics, robot arms, CNC cutting, surveying, game collision.',
      },
    ],
  },
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you hand it in',
    title: 'Check All Eight',
    content: '> Your write-up must answer **every numbered question**, 1.1 to 6.3.',
    items: [
      { text: 'Prediction written **before** calculating (1.1–1.3).' },
      { text: 'The cut-out turned, with a **table** of three rows (2.1–2.3).' },
      { text: 'The **parallel** rule, in a full sentence (3.1–3.3).' },
      { text: 'The **perpendicular** rule, from your own table (3.4–3.6).' },
      { text: 'All **eight** slopes shown for the two shapes (4.1–4.3).' },
      { text: 'Side **lengths** used to rule a square in or out (4.4–4.6).' },
      { text: 'Your **own** rectangle and square, both proved (5.1–5.2).' },
      { text: 'The pair the rule **cannot** handle, explained (5.3).' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // THE STOP SLIDE. Everything past here is worked answers.
  // ══════════════════════════════════════════════════════════════════════════
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'End of the project',
    title: 'Stop Here',
    label: 'Answers ahead',
    labelIcon: 'AlertTriangle',
    text: 'Everything after this slide is the **worked solution**.',
    sub: 'Do not go past this point until your project is **finished and handed in**. If you are still working, the questions you need are on the slides before this one.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SOLUTIONS — for after the projects are collected.
  // ══════════════════════════════════════════════════════════════════════════
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Triangle',
    eyebrow: 'Solution · Part 2',
    title: 'What the Turn Does',
    ratio: 40,
    inlineSvg: DIAGRAMS.ROTATE_SOLVED,
    content:
      'The **same** triangle, turned. The 3 that was along the bottom is now up the side, and the 1 that was up the side is now along the bottom — pointing the other way.\n\n' +
      'So the rise and the run **swap**, and exactly one of them **changes sign**.',
    notes: [
      {
        tone: 'write',
        text: '$\\frac{1}{3}$ becomes $-\\frac{3}{1} = -3$. Turn it, and the slope **flips over** and **changes sign**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Equal',
    side: 'left',
    eyebrow: 'Solution · Part 3',
    title: 'The Two Rules',
    ratio: 40,
    inlineSvg: DIAGRAMS.TWO_RULES,
    content:
      'Parallel is the easy one: same direction, same slope.\n\n' +
      'Perpendicular falls out of the turn. Flipping a fraction and changing its sign is exactly what multiplying to −1 means.',
    notes: [
      {
        tone: 'write',
        text: '**Parallel:** $m_1 = m_2$.\n\n**Perpendicular:** $m_1 \\times m_2 = -1$.\n\nFor 3.6: the perpendicular of $-\\frac{2}{5}$ is $\\frac{5}{2}$.',
      },
    ],
  },
  {
    layout: 'compare',
    title: 'The Verdict — and It Was P All Along',
    columns: [
      {
        heading: 'Shape P · a rectangle',
        accent: GREEN,
        icon: 'CheckCircle2',
        inlineSvg: DIAGRAMS.SHAPE_P_SOLVED,
        caption: 'Two pairs of equal slopes, and $\\frac{1}{2} \\times (-2) = -1$.',
      },
      {
        heading: 'Shape Q · only a parallelogram',
        accent: RED,
        icon: 'AlertTriangle',
        inlineSvg: DIAGRAMS.SHAPE_Q_SOLVED,
        caption: 'Still two pairs of equal slopes, but $\\frac{1}{2} \\times (-\\frac{4}{3}) = -\\frac{2}{3}$.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'ScanEye',
    eyebrow: 'Solution · Part 4.4 to 4.6',
    title: 'Why Your Eyes Lost',
    ratio: 55,
    content:
      'Shape P has sides $\\sqrt{45}$ and $\\sqrt{20}$ — a rectangle, **not** a square.\n\n' +
      'Shape Q\'s corner is **79.7°**. That is only ten degrees off square, and ten degrees on a tilted figure is invisible. Tilt is what defeats the eye: upright shapes are judged against the edge of the page, and these have no upright edge to borrow.\n\n' +
      'One grid square moved at C, and the shape stopped being a rectangle without ever looking different.',
    notes: [
      {
        tone: 'write',
        text: 'Slopes settle **parallel** and **right angles**. Distances settle **lengths**. A square needs **both** — neither test alone is enough.',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Telescope',
    side: 'left',
    eyebrow: 'Solution · Part 5.3 — the one worth full marks',
    title: 'The Pair the Rule Cannot Reach',
    ratio: 40,
    inlineSvg: DIAGRAMS.PERP_EXCEPTION,
    content:
      'A horizontal line and a vertical line are perpendicular — obviously, and everybody can draw them.\n\n' +
      'But the horizontal has slope **0** and the vertical\'s slope is **undefined**, and you cannot multiply a number by something that is not a number. The rule simply has nothing to say here.',
    notes: [
      {
        tone: 'write',
        text: 'The rule $m_1 \\times m_2 = -1$ works for **every** perpendicular pair **except** a horizontal with a vertical, which has to be stated separately.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Sparkles',
    eyebrow: 'Solution · Part 5.1 and 5.2',
    title: 'Building One From Nothing',
    ratio: 55,
    content:
      'Pick any slope — say $\\frac{2}{3}$. Its perpendicular is $-\\frac{3}{2}$.\n\n' +
      'Start anywhere. Step **3 right and 2 up** to get the second corner. From there step **2 right and 3 down** to get the third. Repeat the first step to close it. The corners are square because you built them that way.\n\n' +
      'For a **square**, make both steps the same length: $(3, 2)$ and $(2, -3)$ both have length $\\sqrt{13}$.',
    notes: [
      {
        tone: 'theory',
        badge: 'The check that catches errors',
        text: 'The fourth corner should come out on its own. If you have to force it, one of your three steps was wrong.',
      },
    ],
  },
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Algebra Track · Project 2',
    title: 'One Square, One Verdict',
    subtitle: 'Two shapes that looked identical, and one grid square between them. You proved a right angle without a protractor, built shapes that had to be right, and found the one case the rule cannot touch — all from a pair of numbers per edge.',
  },
]
