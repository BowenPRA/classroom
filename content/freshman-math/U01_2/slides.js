// content/freshman-math/U01_2/slides.js
// Algebra Track 1.2 — Lines and Slope.
//
// THE DECK IS BUILT ON ONE RETREAD, DELIBERATELY: A(−4, −2) and B(4, 4) are the
// exact pair from lesson 1.1. The class has already drawn that triangle once to
// get a distance of 10. Here they draw it again and ask a different question of
// it — and the answer is a slope of 3/4. That is the whole architecture of the
// lesson in one sentence: the hypotenuse is a distance, the two legs are a
// slope, and it is the same triangle both times.
//
// Part 1 (slides 2–5) re-teaches distance, but only the part students actually
// lose: the third corner is not given to them, they have to put it in. It is
// short on purpose. It is not a second helping of 1.1.
//
// Part 2 (slides 6–8) is the bit textbooks skip — what a LINE is. Students
// arrive using "line" for a queue and for the mark a ruler leaves, and both are
// wrong in mathematics. Segment and ray get their proper names, and then the
// load-bearing fact: two points determine a line. That is what licenses the
// whole rest of the course to work from a pair of points.
//
// Part 3 (slides 9–17) is slope, introduced with WORDS (rise, run) before
// SYMBOLS (Δy/Δx), and never as a rule to memorise. Slide 11 is the one to
// protect: a straight line has ONE slope, measurable anywhere along it, which is
// what "straight" actually means. Slide 15 splits zero from undefined, which is
// the confusion that costs the most marks in the topic.
//
// Part 4 (slides 18–21) is scaffolding and practice: a four-move procedure, one
// worked example, one drill, and one find-the-mistake. There is no widget. Every
// one of these is a static slide with a click-to-reveal answer, because what the
// class needs here is time on paper, not something to press.
//
// ON SLIDE DENSITY: the first draft of this deck overflowed twelve slides at
// 1440×900 while lesson 1.1 overflowed none, so every `content` block here has
// been cut to three short paragraphs at most and every `write` note to three
// lines at most. Project mode sets type roughly 40% larger again, so prose that
// merely fits in the window will not fit in the room. When adding to this deck,
// add a slide rather than a paragraph.
//
// The course is flagged bilingual:false in content/courses.js, so there are no
// …Vn twins and the EN/VN toggle is hidden. The English is still written for a
// class whose first language is Vietnamese — short sentences, one idea per line
// — but the vocabulary is not softened: line segment, ray, slope, rise, run,
// gradient, subscript, delta, undefined and rate are all named properly.
//
// No photographs. Two Wikimedia candidates were tried for the slope-as-a-rate
// slide and both were rejected: the "1 in 4" gradient sign was illegible at
// projector size, and the Baldwin Street shot is a house with an identifiable
// person in it rather than a visible gradient. SLOPE_AS_RATE draws the sign
// instead, which also lets the hill be drawn to scale against its own number.
//
// The house rule holds: anything a student must copy is in an orange "Write This
// Down" panel or an orange `>` bumper, and nothing else is.
import { DIAGRAMS } from './diagrams.js'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'

export const slides = [
  // ══ Part 1 · The triangle you already know ════════════════════════════════
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Sigma',
    brand: 'Algebra Track',
    eyebrow: 'Unit 1 · 1.2',
    title: 'Lines and Slope',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      text: 'Plot **A(−4, −2)** and **B(4, 4)** and join them with a ruler. Then **draw the right triangle underneath the line** and write down how long each of its two short sides is.',
    },
  },
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'In pairs — nothing written on the board',
    title: 'You Forgot the Formula',
    label: 'Discuss',
    labelIcon: 'MessageSquare',
    text: 'Mr Bowen rubs the distance formula off the board.',
    sub: 'Your two points are still on your page. **Can you still find the distance?** Say what you would draw first, and why that is enough.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Triangle',
    eyebrow: 'The move you must not lose',
    title: 'The Triangle Is the Formula',
    ratio: 45,
    inlineSvg: DIAGRAMS.RECALL_TRIANGLE,
    drawThis: true,
    content:
      'Last lesson this pair came out at 10. Here is the step that made it possible.\n\n' +
      'You were given **two** points. A triangle needs **three** corners — so you put the third one in yourself. Nobody hands it to you.\n\n' +
      'Then the two short sides are just gaps on a number line, and the distance is the **hypotenuse**.',
    notes: [
      {
        tone: 'write',
        text: '**Distance between two points:** $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$\n\nThe formula **is** the triangle, written down.',
      },
    ],
  },
  {
    layout: 'steps',
    accent: TEAL,
    icon: 'Ruler',
    eyebrow: 'Do it in this order, every time',
    title: 'Three Moves, Then Stop',
    content: 'Do these three and you never have to remember the formula.',
    steps: [
      { text: '**Sketch it.** Two dots and a ruler line. Rough is fine — it only has to show which way the triangle sits.' },
      { text: '**Add the corner** and label the short sides: how far **across**, how far **up**.' },
      { text: '**Pythagoras.** Square them, add them, take the square root. Never add the sides themselves.' },
    ],
    reveal: {
      label: 'Why does move 3 say "never add the sides"?',
      answer:
        'Because $\\sqrt{x^2 + y^2} \\neq x + y$ — the freshman\'s dream from last lesson.\n\n' +
        'Here it gives $8 + 6 = 14$ instead of 10. But 14 is what you walk going across **and then** up. A straight line is always shorter than the corner route, so 14 was impossible before you checked it.',
    },
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'PenLine',
    side: 'left',
    eyebrow: 'Your turn — sketch first',
    title: 'Two to Warm Up',
    ratio: 55,
    content:
      'A sketch with the corner drawn in, then the arithmetic. Both answers are whole numbers — if yours is not, check the triangle before the calculator.\n\n' +
      '> **A)** C$(-3, 2)$ and D$(1, 5)$\n' +
      '> **B)** E$(-5, -1)$ and F$(7, 4)$',
    notes: [
      {
        tone: 'task',
        badge: 'On paper, then whiteboards',
        text: 'Both are triangles worth knowing by sight: **3-4-5** and **5-12-13**.',
      },
    ],
    reveal: {
      label: 'Check your answers',
      answer:
        '**A)** across $|1 - (-3)| = 4$, up $|5 - 2| = 3$, so $d = \\sqrt{16 + 9} = 5$.\n\n' +
        '**B)** across $|7 - (-5)| = 12$, up $|4 - (-1)| = 5$, so $d = \\sqrt{144 + 25} = 13$.',
    },
  },

  // ══ Part 2 · What a line actually is ══════════════════════════════════════
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Harder than it sounds',
    title: 'What Is a Line?',
    label: 'Discuss',
    labelIcon: 'MessageSquare',
    text: 'You have drawn hundreds of them. Now define one.',
    sub: 'Finish this sentence properly: "A line is …". Then test your sentence against a **queue of people waiting for lunch** — in English that is called a line too. What is different?',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'ArrowLeftRight',
    eyebrow: 'Three key words',
    title: 'Line, Segment, Ray',
    ratio: 45,
    inlineSvg: DIAGRAMS.LINE_SEGMENT_RAY,
    drawThis: true,
    content:
      'In everyday English a line is a queue, or a ruler mark. In mathematics **neither of those is a line**.\n\n' +
      'A line is perfectly **straight**, has **no thickness**, and **never ends** — for ever, both ways. That is what the arrowheads mean.',
    notes: [
      {
        tone: 'write',
        text:
          '**Line:** straight, no thickness, for ever **both** ways.\n' +
          '**Line segment:** the piece **between** two points.\n' +
          '**Ray:** starts at a point, then for ever **one** way.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Target',
    side: 'left',
    eyebrow: 'The fact the rest of the course runs on',
    title: 'Any Two Points Make a Line',
    ratio: 45,
    inlineSvg: DIAGRAMS.TWO_POINTS_ONE_LINE,
    content:
      'Put **one** dot down and lay a ruler through it. Spin the ruler — it still goes through the dot. Infinitely many lines fit.\n\n' +
      'Now add a **second** dot. The ruler is stuck: exactly **one** straight line passes through both.\n\n' +
      'So two points are exactly the right number to fix a line — which is why everything ahead starts from a pair of points.',
    notes: [
      {
        tone: 'write',
        text: '**Two points determine a line.** Through any two different points there is **exactly one** straight line.',
      },
    ],
  },

  // ══ Part 3 · Slope ════════════════════════════════════════════════════════
  {
    layout: 'statement',
    accent: ORANGE,
    eyebrow: 'The question the rest of the lesson answers',
    title: 'Both of These Go Up',
    label: 'Discuss — no numbers yet',
    labelIcon: 'MessageSquare',
    text: 'One line is a gentle wheelchair ramp. The other is nearly a cliff.',
    sub: 'Both are "going up", so that phrase is useless for telling them apart. **What number could you attach to a line** to say how steep it is — and what would you measure to find it?',
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Spline',
    eyebrow: 'Key word',
    title: 'Slope: Rise Over Run',
    ratio: 45,
    inlineSvg: DIAGRAMS.SLOPE_TRIANGLE,
    drawThis: true,
    content:
      'Draw the same triangle again. For distance we wanted the **hypotenuse** — now ignore it.\n\n' +
      'Steepness compares the two **legs**. Climbing 6 while going 8 across is one kind of steep; climbing 60 is quite another.\n\n' +
      'So divide: how much up, for each step across.',
    notes: [
      {
        tone: 'write',
        text: '**Slope:** how far a line goes **up** for each step **across**.\n\n$\\text{slope} = \\dfrac{\\text{rise}}{\\text{run}}$\n\nFor A and B: $\\frac{6}{8} = \\frac{3}{4}$.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Layers',
    side: 'left',
    eyebrow: 'Why slope is worth having at all',
    title: 'Measure It Anywhere',
    ratio: 45,
    inlineSvg: DIAGRAMS.SLOPE_STAIRCASE,
    content:
      'Start at A and step **4 across, then 3 up**. You land exactly on the line. Do it again and you land on B.\n\n' +
      'One small step gives $\\frac{3}{4}$. The whole way, using 8 and 6, gives $\\frac{6}{8}$ — which **is** $\\frac{3}{4}$.\n\n' +
      'A straight line is equally steep at every point. That is what "straight" means, and it is why one number can describe a whole infinite line.',
    notes: [
      {
        tone: 'write',
        text: '**A line has one slope.** Any two points on it give the same answer — so pick whichever pair is easiest to count.',
      },
    ],
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Equal',
    eyebrow: 'Words first, symbols second',
    title: 'Writing It Properly',
    ratio: 45,
    inlineSvg: DIAGRAMS.DELTA_NOTATION,
    content:
      '**Rise** and **run** are the idea. Here are the symbols every textbook uses.\n\n' +
      'Label the points $(x_1, y_1)$ and $(x_2, y_2)$. Those small numbers are **subscripts** — labels saying which point you mean. They are not powers and not multiplication.\n\n' +
      'The slope itself is always called $m$. Nobody is sure why; the letter simply stuck.',
    notes: [
      {
        tone: 'write',
        text: '**Slope formula:** $m = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{y_2 - y_1}{x_2 - x_1}$\n\n$\\Delta$ (**delta**) means "the change in".',
      },
    ],
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'Repeat',
    side: 'left',
    eyebrow: 'Where the marks are lost',
    title: 'Pick a Direction and Keep It',
    ratio: 45,
    inlineSvg: DIAGRAMS.ORDER_CONSISTENT,
    content:
      'For **distance** the order never mattered — squaring killed the minus sign. For **slope** there is no squaring to rescue you.\n\n' +
      'A to B gives $\\frac{+6}{+8}$. B to A gives $\\frac{-6}{-8}$. Two minus signs cancel, so both are $\\frac{3}{4}$.\n\n' +
      'Either order is fine. Mixing them halfway through is not.',
    notes: [
      {
        tone: 'write',
        text: '**Choose a starting point and keep it.** Take the top and the bottom of the fraction from the **same** direction of travel.',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'LayoutGrid',
    eyebrow: 'Predict the sign before you divide',
    title: 'The Four Kinds of Slope',
    ratio: 45,
    inlineSvg: DIAGRAMS.FOUR_SLOPES,
    drawThis: true,
    content:
      'Call the **sign** out loud before you calculate. Read the line **left to right**, the way you read English — climbing means positive, falling means negative.\n\n' +
      'Two of them are special cases, and they are the pair students mix up.',
    notes: [
      {
        tone: 'write',
        text:
          '**Positive** — the line goes **up** left to right.\n' +
          '**Negative** — the line goes **down** left to right.\n' +
          '**Zero** — **horizontal**; the rise is 0.\n' +
          '**Undefined** — **vertical**; the run is 0.',
      },
    ],
  },
  {
    layout: 'compare',
    title: 'Zero Slope Is Not the Same as No Slope',
    columns: [
      {
        heading: 'Horizontal — the slope is 0',
        accent: BLUE,
        icon: 'Ruler',
        content:
          'Take $(-3, 4)$ and $(3, 4)$.\n\n' +
          'The rise is $4 - 4 = 0$. The run is 6.\n\n' +
          '$m = \\frac{0}{6} = 0$\n\n' +
          'Zero divided by something is a perfectly good answer: **zero**. This line has a slope, and it happens to be none.',
        notes: [{ tone: 'write', text: '**Horizontal line:** $m = 0$. Zero **is** the answer.' }],
      },
      {
        heading: 'Vertical — the slope is undefined',
        accent: PURPLE,
        icon: 'AlertTriangle',
        content:
          'Take $(2, -1)$ and $(2, 7)$.\n\n' +
          'The rise is 8. The run is $2 - 2 = 0$.\n\n' +
          '$m = \\frac{8}{0}$\n\n' +
          'Dividing by zero does not give a huge number. It gives **no number at all**, so this line has no slope to report.',
        notes: [{ tone: 'write', text: '**Vertical line:** $m$ is **undefined**. There is no slope.' }],
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Scale',
    side: 'left',
    eyebrow: 'Slope off the graph paper',
    title: 'A Road Sign Is a Slope',
    ratio: 45,
    inlineSvg: DIAGRAMS.SLOPE_AS_RATE,
    content:
      'A road sign reading **25%** is not a score. It is a slope — the same fraction you have been calculating all lesson.\n\n' +
      '25% means 25 up for every 100 along, which is 1 up for every 4 along: $m = \\frac{1}{4} = 0.25$.\n\n' +
      'One slope, three costumes. Outside this room it is called the **gradient**.',
    notes: [
      {
        tone: 'write',
        text: '**Slope is a rate:** how much the line rises **per one step** across.\n\nThe same slope as a fraction $\\frac{1}{4}$, a decimal $0.25$, a percentage 25%.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'HelpCircle',
    eyebrow: 'Guess the order before you calculate',
    title: 'Which One Is Steepest?',
    ratio: 55,
    content:
      'Three real slopes, written three different ways. Order them **steepest first** from instinct, write your guess down, then work them out.\n\n' +
      '> **A)** a hill signposted **1 in 5**\n' +
      '> **B)** a mountain road marked **12%**\n' +
      '> **C)** stairs rising **18 cm** for every **28 cm**',
    notes: [
      {
        tone: 'task',
        badge: 'Whiteboards',
        text: 'Put all three into the **same** costume first — decimals are easiest.',
      },
    ],
    reveal: {
      label: 'Now order them',
      answer:
        '**A)** $\\frac{1}{5} = 0.2$   **B)** $\\frac{12}{100} = 0.12$   **C)** $\\frac{18}{28} = 0.64$\n\n' +
        'So the order is **C, A, B** — which is exactly why you **walk** up stairs and **drive** up hills.\n\n' +
        'Most classes pick B as the steepest, because 12 is the biggest number on the slide. It is the gentlest of the three.',
    },
  },

  // ══ Part 4 · Scaffolding and practice ═════════════════════════════════════
  // This is a `callout` with a write note rather than the `steps` layout that
  // slide 4 uses, and the difference is the house rule, not decoration: these
  // four moves are copy-down content, and copy-down content lives in a write
  // note. Slide 4's three moves are talked through, not copied, so `steps` is
  // right there. (`steps` cards also carry fixed padding — 78px per item
  // regardless of how short the text is — so four of them plus a bumper cannot
  // be made to fit this slide by trimming words.)
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'ShieldCheck',
    eyebrow: 'Scaffolding — use it until you no longer need it',
    title: 'Finding a Slope, in Four Moves',
    content: 'Every slope question in this course can be done with these four, in this order.',
    notes: [
      {
        tone: 'write',
        badge: 'The four moves',
        text:
          '**1. Sketch and label** both points.\n' +
          '**2. Draw the triangle**, corner underneath.\n' +
          '**3. Count the rise and the run**, with signs — up and right positive, down and left negative.\n' +
          '**4. Divide and simplify**, then check the sign against your sketch.',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'GraduationCap',
    side: 'left',
    eyebrow: 'Worked together — follow the four moves',
    title: 'Mr Bowen Tries One',
    ratio: 55,
    content:
      'The points are P$(-2, 5)$ and Q$(4, -4)$.\n\n' +
      'Sketch them first. P sits up and left; Q sits down and right, so the line **falls** as it goes right and the slope must come out **negative**. Decide that now, before any arithmetic.\n\n' +
      'Now count. Going from P to Q: how far across, and how far up or down?',
    reveal: {
      label: 'Work it through',
      prompt: 'All four moves on paper first — including the sketch.',
      answer:
        'Run: $4 - (-2) = 6$, so **6 to the right**.\n\n' +
        'Rise: $-4 - 5 = -9$, so **9 downwards**.\n\n' +
        '$m = \\frac{-9}{6} = -\\frac{3}{2}$\n\n' +
        'Negative, exactly as the sketch promised. Read it aloud as "3 down for every 2 across".',
    },
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'PenLine',
    eyebrow: 'Your turn — sketch every one',
    title: 'Three Slopes',
    ratio: 55,
    content:
      'Call the **sign** from your sketch before you divide. One of these three is not a number at all.\n\n' +
      '> **A)** $(1, 2)$ and $(5, 10)$\n' +
      '> **B)** $(-3, 4)$ and $(3, 4)$\n' +
      '> **C)** $(2, -1)$ and $(2, 7)$',
    notes: [
      {
        tone: 'task',
        badge: 'On paper, then whiteboards',
        text: 'If a sketch comes out flat, or comes out vertical, **trust it**. That is the answer, not a mistake.',
      },
    ],
    reveal: {
      label: 'Check all three',
      answer:
        '**A)** rise 8, run 4, so $m = \\frac{8}{4} = 2$.\n\n' +
        '**B)** rise $4 - 4 = 0$, run 6, so $m = 0$. Horizontal.\n\n' +
        '**C)** rise 8, run $2 - 2 = 0$, so $m = \\frac{8}{0}$ is **undefined**. Vertical.\n\n' +
        'The usual wrong answer on **C** is 0 — but 0 is what you get when the **rise** vanishes, not the run.',
    },
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'AlertTriangle',
    side: 'left',
    eyebrow: 'One of these three lines is wrong',
    title: 'Find Mr Bowen’s Mistake',
    ratio: 55,
    content:
      'He is finding the slope through R$(-5, 3)$ and S$(1, -3)$:\n\n' +
      '**1.** run $= 1 - (-5) = 6$\n' +
      '**2.** rise $= 3 - (-3) = 6$\n' +
      '**3.** so $m = \\frac{6}{6} = 1$\n\n' +
      'His own sketch shows the line **falling** to the right. Which numbered line breaks — and how could you tell before checking any arithmetic?',
    notes: [
      {
        tone: 'task',
        text: 'Say **which numbered line** is wrong, and **what the sketch had already told you**.',
      },
    ],
    reveal: {
      label: 'Where it breaks',
      answer:
        'Line **2**. He took the run going R to S, then took the rise going **S back to R** — he swapped direction halfway through.\n\n' +
        'Done consistently from R to S: rise $= -3 - 3 = -6$, so $m = \\frac{-6}{6} = -1$.\n\n' +
        'The sketch caught it first: a line falling to the right cannot have a positive slope.',
    },
  },

  // ══ Part 5 · Recap ════════════════════════════════════════════════════════
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you leave',
    title: 'Can You Do All Eight?',
    content: '> Your notebook should now have **12 written items** and **4 labelled drawings**. Check.',
    items: [
      { text: 'Find a distance by **drawing the triangle**, not by recalling a formula.' },
      { text: 'Say what a **line** is, and how a **segment** and a **ray** differ from it.' },
      { text: 'Explain why **two points determine a line**.' },
      { text: 'Define **slope** as the **rise** divided by the **run**.' },
      { text: 'Say why a line has the **same** slope wherever you measure it.' },
      { text: 'Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$, keeping your **direction** consistent.' },
      { text: 'Name all four kinds, and separate **zero** from **undefined**.' },
      { text: 'Turn a slope into a **decimal** and a **percentage**.' },
    ],
  },
  {
    layout: 'callout',
    accent: RED,
    icon: 'Home',
    eyebrow: 'Homework Assignment',
    title: 'For Next Lesson',
    content: 'A **sketch with the triangle** for every question.',
    notes: [
      {
        tone: 'homework',
        icon: 'Pencil',
        text:
          '**1.** Slope **and** distance: $(0, 0)$–$(6, 8)$; $(-4, 7)$–$(2, -1)$; $(3, -5)$–$(3, 6)$.\n' +
          '**2.** Kind of slope, no calculating: $(1, 1)$–$(9, 1)$; $(-2, 8)$–$(5, -6)$.\n' +
          '**3.** A **1 in 12** ramp must reach a door **40 cm** up. How long is it?\n' +
          '**4.** A line has slope $\\frac{2}{3}$ through $(1, 2)$. Find **three more** points.',
      },
    ],
  },
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Algebra Track',
    title: 'Lesson Complete!',
    subtitle: 'One triangle, two questions: the hypotenuse gives you a distance, and the two legs give you a slope. Exit question — a line through (2, 3) has a slope of 5. Without using any formula, name another point on that line. Then name a third.',
  },
]
