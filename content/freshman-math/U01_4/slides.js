// content/freshman-math/U01_4/slides.js
// Algebra Track 1.4 — Parabolas and the Vertex Form.
//
// THE DECK NEVER TELLS THE CLASS A RULE THEY HAVE NOT ALREADY SEEN HAPPEN.
// Every transformation in it arrives in the same order, three times over:
//   (1) plot it by hand from a table, (2) look at what moved, (3) then and only
//   then, name the letter that did it. The sliders come AFTER the paper, never
//   instead of it.
//
// The spine:
//   Part 1  y = x² from a table of seven values, and the three words for it —
//           parabola, vertex, axis of symmetry (slides 2–6)
//   Part 2  y = x² + 1 predicted before it is plotted, then the k slider, then
//           the a slider: narrower, wider, flipped (7–12)
//   Part 3  y = x² + 2x. They THEORISE first, in writing, then plot it and find
//           the bottom sitting one below the axis and one to the left. Asked
//           what to ADD to lift it onto the axis, the class picks 1 — and so
//           writes x² + 2x + 1 for a reason it can see (13–17)
//   Part 4  that expression is recognised as (x + 1)², plotted from the vertex
//           outwards using symmetry, then (x − 2)² as the sign trap, then the
//           h slider (18–24). Nobody is taught to complete the square; they
//           moved a picture and the algebra followed
//   Part 5  the vertex (h, k), the full form, and the slider that has all three
//           letters on it (25–29)
//
// ON DENSITY: this deck was asked to be lighter than 1.3, which is the densest
// in the course. The budget here is TWO short paragraphs of `content` per slide
// and at most two lines in a `write` note. Where a third idea turned up it
// became another slide — that is why Part 4 is six slides for what a textbook
// prints as one paragraph.
//
// ON LAYOUT: `showcase`, `steps`, `compare` and `gallery` silently DROP a
// slide-level `notes` array — nothing errors, the panel just never renders. So
// every copy-down item here is in a `write` note on a `split` / `statement` /
// `callout` / `stack`, or an orange ">" bumper inside `content`.
//
// The course is flagged bilingual:false in content/courses.js, so there are no
// …Vn twins and the EN/VN toggle is hidden. The English is still written short
// for a class whose first language is Vietnamese, but the vocabulary is not
// softened: parabola, vertex, axis of symmetry, coefficient and vertex form all
// get named properly.
import { DIAGRAMS } from './diagrams.js'
import { ParabolaK, ParabolaA, ParabolaH, ParabolaFull } from './widgets.jsx'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'

export const slides = [
  // ══ Part 1 · Plot it by hand ══════════════════════════════════════════════
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Sigma',
    brand: 'Algebra Track',
    eyebrow: 'Unit 1 · 1.4',
    title: 'Parabolas and the Vertex Form',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      text: '**Draw axes** on squared paper. **x** from −5 to 5, **y** from −2 to 10. Ruler, pencil.',
    },
  },
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'In pairs · nothing on the board yet',
    title: 'What Shape Is This?',
    label: 'Guess first',
    labelIcon: 'HelpCircle',
    text: 'y = x²',
    sub: 'Sketch what you think it looks like. **A guess on paper now** is worth more than a correct answer copied in five minutes.',
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Table',
    eyebrow: 'Everybody, on paper · three minutes',
    title: 'Seven Values',
    ratio: 50,
    inlineSvg: DIAGRAMS.X2_TABLE,
    content: 'Work out **y = x²** for x from −3 to 3.\n\nThe two on the left are the ones people get wrong.',
    notes: [
      {
        tone: 'task',
        badge: 'Then plot them',
        text: 'Seven points on your axes. Join them with a **smooth curve**, not straight lines.',
      },
    ],
  },
  {
    layout: 'showcase',
    accent: BLUE,
    icon: 'TrendingUp',
    eyebrow: 'Check yours against this',
    title: 'Seven Points, One Curve',
    inlineSvg: DIAGRAMS.X2_POINTS,
    drawThis: true,
    caption: 'The left arm climbs because squaring a negative gives a positive. It is not a V and it is not a U — the bottom is smooth.',
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'BookOpen',
    side: 'left',
    eyebrow: 'Three words to own',
    title: 'Naming the Parts',
    ratio: 46,
    inlineSvg: DIAGRAMS.X2_CURVE,
    content: 'Every curve in this lesson is one of these. Only its **position** and its **width** will change.',
    notes: [
      {
        tone: 'write',
        text: '**Parabola:** the curve you get from squaring.\n**Vertex:** the turning point. **Axis of symmetry:** the mirror line through it.',
      },
    ],
  },

  // ══ Part 2 · One number at a time ═════════════════════════════════════════
  {
    layout: 'statement',
    accent: GREEN,
    eyebrow: 'Do not plot it yet · say it out loud',
    title: 'Predict This One',
    label: 'Your turn',
    labelIcon: 'HelpCircle',
    text: 'y = x² + 1',
    sub: 'Every y you just worked out gets **one added to it**. So what happens to your curve?',
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'MoveUp',
    eyebrow: 'The whole curve, one step up',
    title: 'Adding 1',
    ratio: 48,
    inlineSvg: DIAGRAMS.SHIFT_UP,
    content: 'Same shape. Same width. Every single point is **one higher** than before.\n\nThe vertex went from (0, 0) to (0, 1).',
    notes: [
      {
        tone: 'write',
        text: '**y = x² + k** slides the parabola **up by k**. A negative k slides it **down**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'SlidersHorizontal',
    eyebrow: 'Watch the vertex, not the arms',
    title: 'The k Slider',
    ratio: 52,
    widget: ParabolaK,
    content: 'Drag k. The grey dashed curve is **y = x²**, staying where it was.\n\nCall out the vertex before I let go of the slider.',
  },
  {
    layout: 'statement',
    accent: BLUE,
    eyebrow: 'Different question · in pairs',
    title: 'And If a Number Multiplies It?',
    label: 'Guess first',
    labelIcon: 'HelpCircle',
    text: 'y = 3x²    and    y = −x²',
    sub: 'One of these is **not** the same shape any more. One of them is not even the same way up. Which is which?',
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'SlidersHorizontal',
    eyebrow: 'Two things to watch for',
    title: 'The a Slider',
    ratio: 52,
    widget: ParabolaA,
    content: 'Push a **past 1**: the curve pinches in. Bring it **towards 0**: it flattens out.\n\nThen take it **below zero** and watch what happens.',
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'FlipVertical',
    eyebrow: 'Say both of these out loud',
    title: 'What a Does',
    ratio: 55,
    content: 'A big **a** makes it narrow because every y is multiplied up. A small one makes it wide.\n\nA **negative a** turns every y negative, so the curve is upside down and the vertex is now a **maximum**.',
    notes: [
      {
        tone: 'write',
        text: '**y = ax²:** bigger a → **narrower**, a between 0 and 1 → **wider**.\nNegative a → the parabola **opens downwards**.',
      },
    ],
  },
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'CheckCircle2',
    eyebrow: 'Two letters down',
    title: 'Where You Are So Far',
    content: 'You can move a parabola **up and down**, and you can change its **width** and flip it.\n\nThere is one direction you still cannot go: **sideways**. That is the rest of the lesson.',
  },

  // ══ Part 3 · The awkward one ══════════════════════════════════════════════
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'Theorise · nothing plotted, no calculators',
    title: 'What Will This One Do?',
    label: 'Commit to it',
    labelIcon: 'Lightbulb',
    text: 'y = x² + 2x',
    sub: 'Write down your prediction and **put a box around it** before anybody plots anything.',
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'Table',
    eyebrow: 'Now do it properly · on paper',
    title: 'Fill the Table',
    ratio: 52,
    inlineSvg: DIAGRAMS.TABLE_2X,
    content: 'Work **x²** and **2x** out separately, then add them.\n\nThe x = −1 column is the one to look at twice.',
    notes: [
      {
        tone: 'task',
        badge: 'Then plot it',
        text: 'Seven points, smooth curve, on the **same axes** as your first parabola.',
      },
    ],
  },
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'TrendingUp',
    eyebrow: 'Both curves, one grid',
    title: 'It Moved Sideways',
    inlineSvg: DIAGRAMS.TWO_CURVES,
    drawThis: true,
    caption: 'Exactly the same shape and exactly the same width — but the bottom is no longer at zero, and it is no longer on the y-axis.',
  },
  {
    layout: 'statement',
    accent: ORANGE,
    eyebrow: 'Read it off the picture · no algebra yet',
    title: 'Lift It Onto the Axis',
    label: 'Discuss',
    labelIcon: 'MessageSquare',
    text: 'The bottom of this curve sits **one below** the x-axis.',
    sub: 'What could you add to y = x² + 2x so that the bottom lands exactly **on** the axis?',
  },
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'Target',
    eyebrow: 'One move, and it changes the equation',
    title: 'Add One',
    content: 'Every y goes up by 1, so the vertex (−1, −1) becomes (−1, 0). The curve now touches the axis instead of crossing it.\n\nThe equation is **y = x² + 2x + 1**.',
  },

  // ══ Part 4 · The bracket ══════════════════════════════════════════════════
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Look hard at the one you just made',
    title: 'Have You Seen This Before?',
    label: 'Recall',
    labelIcon: 'Repeat',
    text: 'x² + 2x + 1',
    sub: 'You have expanded something that gave you exactly this. **What was it?**',
    reveal: {
      label: 'Show it',
      answer: '$(x + 1)^2$ — because $(x + 1)(x + 1) = x^2 + x + x + 1$.\n\nThe same expression, written a second way. Neither one is more correct; one of them is far more useful.',
    },
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Equal',
    eyebrow: 'Why the bracket is worth having',
    title: 'The Useful Form',
    ratio: 55,
    content: 'In **x² + 2x + 1** you cannot see where the curve is.\n\nIn **(x + 1)²** you can — and here is the reason. A square is never negative, so the smallest y can ever be is **0**, and that happens only when the bracket itself is zero.',
    notes: [
      {
        tone: 'write',
        text: 'The **vertex** of $y = (x + 1)^2$ is where the bracket equals zero: at $x = -1$.',
      },
    ],
  },
  {
    layout: 'steps',
    accent: PURPLE,
    icon: 'Pencil',
    eyebrow: 'Plot it the fast way · on your axes',
    title: 'Start at the Bottom',
    content: '> The bracket is zero at **x = −1**. Start there, and work outwards both ways.',
    steps: [
      { text: '**Vertex first:** (−1, 0). Mark it.' },
      { text: '**One step each way** — x = −2 and x = 0. Both give 1² = **1**.' },
      { text: '**Two steps each way** — x = −3 and x = 1. Both give 2² = **4**.' },
    ],
  },
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'TrendingUp',
    eyebrow: 'Five points and a smooth curve',
    title: 'y = (x + 1)²',
    inlineSvg: DIAGRAMS.FROM_VERTEX,
    drawThis: true,
    caption: 'Symmetry does half the work: every point on the left has a twin on the right, the same distance from the vertex.',
  },
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'On paper · two minutes · no table needed',
    title: 'Your Turn',
    label: 'Plot it',
    labelIcon: 'Pencil',
    text: 'y = (x − 2)²',
    sub: 'Find the vertex first, then go out one step and two steps each way, like you just did.',
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'AlertTriangle',
    eyebrow: 'The trap almost everybody falls into',
    title: 'Minus Two Goes Right',
    ratio: 48,
    inlineSvg: DIAGRAMS.X_MINUS_2,
    content: 'A **minus** in the bracket moves the curve to the **right**. It feels backwards, and it is not.\n\nAsk the only question that matters: **what x makes the bracket zero?** For (x − 2)², that is x = 2.',
    notes: [
      {
        tone: 'write',
        text: '**y = (x − h)²** has its vertex at **x = h**. Never read the sign — solve the bracket.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'SlidersHorizontal',
    eyebrow: 'Check the trap for yourself',
    title: 'The h Slider',
    ratio: 52,
    widget: ParabolaH,
    content: 'Set h to a **positive** number and read the bracket: it says minus, the curve goes right.\n\nSet h **negative** and the bracket flips to plus, and the curve goes left.',
  },

  // ══ Part 5 · The whole form ═══════════════════════════════════════════════
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Target',
    side: 'left',
    eyebrow: 'Three letters, three jobs',
    title: 'The Vertex Form',
    ratio: 50,
    inlineSvg: DIAGRAMS.VERTEX_ANATOMY,
    drawThis: true,
    content: 'Put all three together and the equation stops hiding things. It **tells you where its own vertex is**.',
    notes: [
      {
        tone: 'write',
        badge: 'The whole lesson in one line',
        text: '**Vertex form:** $y = a(x - h)^2 + k$, with its **vertex at (h, k)**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'SlidersHorizontal',
    eyebrow: 'All three at once',
    title: 'Build One',
    ratio: 52,
    widget: ParabolaFull,
    content: 'I will call out a vertex. **You** tell me the three numbers before I touch a slider.\n\nTry: vertex (3, −2). Then the same one, upside down.',
  },
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'No plotting · say them out loud',
    title: 'Read These Four',
    // The four equations live in `content`, one per line, rather than in the
    // big `text` line: side by side they wrapped into one continuous KaTeX
    // string on a 1366-wide projector, and the separators disappeared.
    text: 'Where is the vertex?',
    content:
      '**1.**  $y = (x - 4)^2 + 3$\n' +
      '**2.**  $y = (x + 5)^2 - 2$\n' +
      '**3.**  $y = -2(x - 1)^2$   — **which way up?**\n' +
      '**4.**  $y = 3x^2 + 6$',
    reveal: {
      label: 'Answers',
      answer: '(4, 3)  ·  (−5, −2)  ·  (1, 0), opening **downwards**  ·  (0, 6).',
    },
  },
  {
    layout: 'stack',
    variant: 'checklist',
    accent: GREEN,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you leave',
    title: 'Can You Do All Six?',
    content: '> Your notebook should now have **6 written items** and **4 plotted graphs**. Check.',
    items: [
      { text: 'Plot **y = x²** from a table of seven values.' },
      { text: 'Name the **vertex** and the **axis of symmetry**.' },
      { text: 'Say what **k** does, and what **a** does.' },
      { text: 'Plot from the **vertex outwards** using symmetry.' },
      { text: 'Explain why **(x − 2)²** moves to the **right**.' },
      { text: 'Read the vertex **(h, k)** straight off the equation.' },
    ],
  },
  {
    layout: 'callout',
    accent: RED,
    icon: 'Home',
    eyebrow: 'Homework Assignment',
    title: 'For Next Lesson',
    notes: [
      {
        tone: 'homework',
        icon: 'Pencil',
        badge: 'Squared paper · one set of axes per question',
        text:
          '**1.** Plot $y = x^2 - 3$ and $y = (x - 3)^2$ on the same axes. Give both vertices.\n' +
          '**2.** Plot $y = -(x + 2)^2 + 4$ from its vertex outwards, five points.\n' +
          '**3.** Write the equation of a parabola with vertex $(2, -5)$ that opens downwards.\n' +
          '**4.** Expand $(x - 3)^2$. Then say what the vertex of $y = x^2 - 6x + 9$ is, and how you knew.',
      },
    ],
  },
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Algebra Track',
    title: 'Lesson Complete!',
    subtitle:
      'Every parabola in this lesson was y = x² wearing a disguise: a changed its width, h slid it sideways, k slid it up. Exit question — y = x² + 6x + 9 has its vertex at (−3, 0), but y = x² + 6x + 5 does not. Where has that one gone, and what is the smallest y it ever reaches?',
  },
]
