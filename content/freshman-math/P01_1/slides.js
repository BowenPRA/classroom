// content/freshman-math/P01_1/slides.js
// Algebra Track · Project 1 — The Flight of the Fly.
//
// The deck is in TWO HALVES, and the split is the most important thing about
// its structure:
//
//   Slides 1–16  THE PROJECT.  Everything the student needs to do the work and
//                nothing else. No answers, no worked methods, no numbers that
//                give the task away — the two room diagrams here are the
//                deliberately blank FLY_ROOM_BLANK and ROOM_NET_BLANK.
//   Slide 17     A STOP SLIDE.
//   Slides 18–23 THE SOLUTIONS. Shown only once projects are handed in.
//
// An earlier version interleaved the two, so the slide posing "how far does the
// fly travel?" carried a diagram with 15 ft and 17 ft printed on it. That is a
// lesson's habit, not a project's, and it quietly removes the thing being
// assessed.
//
// There is no time, speed or duration anywhere in this project. It asks for two
// distances: how far the FLY flies, and how far the SPIDER walks. Everything
// else was scope that made the brief harder to read without making it richer.
//
// The mathematics: a 12 × 9 × 8 ft room, chosen so the flight chains two
// Pythagorean triples (9-12-15, then 15-8-17) and lands on exactly 17 ft. The
// walk deliberately does NOT come out whole — √433 ≈ 20.8 ft. That contrast is
// the point of Part 4: a tidy answer is a property of the question a teacher
// picked, not of the world.
//
// The course is bilingual:false, so this deck is English-only and carries no
// …Vn twins. There is no `date`: a project spans several lessons.
import { DIAGRAMS } from './diagrams.js'
import { FlyPathWidget } from './widgets.jsx'
import housefly from './images/housefly.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'

export const slides = [
  // ══════════════════════════════════════════════════════════════════════════
  // THE PROJECT — slides 1 to 15. No answers anywhere in here.
  // ══════════════════════════════════════════════════════════════════════════
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Hammer',
    brand: 'Algebra Track · Project 1',
    eyebrow: 'Two lessons + a write-up',
    title: 'The Flight of the Fly',
    card: {
      icon: 'Target',
      badge: 'Your task',
      text: 'Find **two distances**: how far a **fly flies** across a room, and how far a **spider walks** across the same room. Hand in one write-up. Marked out of **16**.',
    },
  },
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'The question this project answers',
    title: 'How Far Is It, Really?',
    label: 'No method yet',
    labelIcon: 'MessageSquare',
    text: 'A fly can cross a room in a straight line. A spider has to **walk**.',
    sub: 'They start in the same corner and finish in the same corner. **Do they travel the same distance?** By the end you will have both answers, and you will have checked one of them with a piece of string.',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Bug',
    eyebrow: 'The brief',
    title: 'The Room',
    ratio: 45,
    image: housefly,
    content:
      'A fly starts in a **bottom corner** of a room and flies in a perfectly straight line to the **opposite corner of the ceiling**.\n\n' +
      'The room is **12 ft** long, **9 ft** wide and **8 ft** high.',
    notes: [
      {
        tone: 'write',
        badge: 'Copy this — the five parts',
        text:
          '**1. Predict** — before any maths.\n' +
          '**2. Model** — build the room and measure it.\n' +
          '**3. The fly** — how far does it fly?\n' +
          '**4. The spider** — how far does it walk?\n' +
          '**5. Your own room**, then **write it up**.',
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
    content: 'Four things, **4 marks each**, **16 total**. None of them is "got the right number" on its own.',
    notes: [
      {
        tone: 'write',
        badge: '1 · The Model  (4)',
        icon: 'Boxes',
        text: 'Your room is drawn **to scale** with a stated scale, the start and finish are marked, and your measured string length is recorded **with units**.',
      },
      {
        tone: 'write',
        badge: '2 · The Mathematics  (4)',
        icon: 'Equal',
        text: 'The right method, carried out accurately. Every distance is justified by a **right triangle you can point to**, not by a remembered formula.',
      },
      {
        tone: 'write',
        badge: '3 · The Investigation  (4)',
        icon: 'Telescope',
        text: 'You tested **more than the one case** you were given, and you state a **general rule** in your own words — and say how confident you are in it.',
      },
      {
        tone: 'write',
        badge: '4 · The Write-Up  (4)',
        icon: 'PenLine',
        text: 'Another student could follow your work without asking you anything. Diagram labelled, units everywhere, conclusions in **full sentences**.',
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
      { text: '**2 — Partly there.** The main idea, but with gaps or errors that change the answer.' },
      { text: '**3 — Secure.** Everything asked for, right method, small slips only.' },
      { text: '**4 — Beyond.** Correct and complete with reasoning shown — **and something nobody asked for**: an extra case, a check, a rule of your own.' },
    ],
  },

  // ── Part 1 · Predict ──────────────────────────────────────────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'HelpCircle',
    side: 'left',
    eyebrow: 'Part 1 · before any calculation',
    title: 'Predict',
    ratio: 55,
    content:
      'Write these down **now**, while you still do not know. A wrong prediction costs you nothing.\n\n' +
      '> **1.1** Estimate how far the **fly** flies, in feet.\n' +
      '> **1.2** Estimate how far the **spider** walks.\n' +
      '> **1.3** Which will be harder to work out, and why?',
    notes: [
      {
        tone: 'task',
        badge: 'Rule for Part 1',
        text: 'No calculating. A prediction you later disagree with is **evidence you learned something** — do not edit it.',
      },
    ],
  },

  // ── Part 2 · The model ────────────────────────────────────────────────────
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Box',
    eyebrow: 'Part 2 · build it',
    title: 'Where the Two Ends of the String Go',
    inlineSvg: DIAGRAMS.NOTEBOOK_MODEL,
    caption: 'Fold a notebook to **90°** and you have a floor, a wall and the corner between them. Draw the room on it, then run the twine from the **start on the flat page** to the **finish on the upright page** — the string has to leave the paper and cross the open air. If both ends sit on the flat page you have measured the floor, not the flight.',
  },
  {
    layout: 'steps',
    accent: GREEN,
    icon: 'Hammer',
    eyebrow: 'Part 2 · in pairs — first, draw the room',
    title: 'Turn Your Notebook Into the Room',
    steps: [
      { text: '**Fold your notebook to 90°.** The flat page is the **floor**; the upright page is one **wall**; the fold is where they meet.' },
      { text: '**Write down your scale** — 1 square = 1 foot. On the flat page draw the **12 by 9** floor, with a **9 ft edge lying along the fold**.' },
      { text: 'On the upright page, draw that wall standing on the fold: **9 ft wide and 8 ft tall**.' },
    ],
  },
  {
    layout: 'steps',
    accent: GREEN,
    icon: 'Ruler',
    eyebrow: 'Part 2 · now run the string',
    title: 'Measure the Flight',
    steps: [
      { text: 'Mark the **START** on the **flat page**, at the floor corner **furthest from the fold**.' },
      { text: 'Mark the **FINISH** on the **upright page**, at its **top corner at the far end** — diagonally opposite the start.' },
      { text: '**Tape** the twine at the start and pull it **tight** to the finish. It should lift clear of both pages and cross the open air. **Cut** it there.' },
      { text: '**2.1** Measure the cut string, convert to feet using your scale, and record it **with units**. How close is it to your Part 1 estimate?' },
    ],
  },

  // ── Part 3 · The fly ──────────────────────────────────────────────────────
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Triangle',
    eyebrow: 'Part 3 · the fly',
    title: 'How Far Does the Fly Fly?',
    ratio: 45,
    inlineSvg: DIAGRAMS.FLY_ROOM_BLANK,
    content:
      'The fly goes straight through the air. Find that length **two different ways** and show they agree — the agreement is a large part of the mark.\n\n' +
      '> **3.1** Find the diagonal **across the floor**. Draw the triangle you used.\n' +
      '> **3.2** Stand a second triangle on that diagonal. Find the distance to the **ceiling corner**.\n' +
      '> **3.3** Now do it in **one step** with the 3D distance formula. Do the answers agree?',
  },

  // ── Part 4 · The spider ───────────────────────────────────────────────────
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'Part 4 · the spider',
    title: 'But a Spider Cannot Fly',
    label: 'Think before you calculate',
    labelIcon: 'MessageSquare',
    text: 'It has to **walk** — across the floor, and up the wall.',
    sub: 'It starts and finishes at the same two corners as the fly. Its path is made of **straight lines on flat surfaces**, so it cannot cut through the air. What is its shortest route?',
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'Layers',
    eyebrow: 'Part 4 · the idea that makes it possible',
    title: 'Flatten the Room',
    ratio: 45,
    inlineSvg: DIAGRAMS.ROOM_NET_BLANK,
    content:
      'A cardboard box can be cut open and laid flat. Do that to the room and the spider\'s two surfaces become **one rectangle** — and on a flat rectangle the shortest route is a plain straight line.\n\n' +
      '> **4.1** Unfold the floor and the wall into one rectangle. What are its two side lengths?\n' +
      '> **4.2** Find the length of the straight line across it.',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Telescope',
    side: 'left',
    eyebrow: 'Part 4 · this is the investigation',
    title: 'That Was Only One Way to Unfold It',
    ratio: 55,
    content:
      'Unfold along different edges and you get a **different rectangle**.\n\n' +
      '> **4.3** Find **all three**. Give each rectangle\'s sides and its diagonal.\n' +
      '> **4.4** Which is shortest? Was it the one you tried first?\n' +
      '> **4.5** A room is $a$ by $b$ by $c$. Write a **rule**, then test it.\n' +
      '> **4.6** How much further does the spider walk than the fly flies?',
    notes: [
      {
        tone: 'task',
        badge: 'Do not ask for the answer',
        text: 'This is where the **Investigation** marks live. Three rectangles you found beat one you were given.',
      },
    ],
  },

  // ── Part 5 · Transfer and write-up ────────────────────────────────────────
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Ruler',
    eyebrow: 'Part 5 · a room that is actually real',
    title: 'Now Measure Somewhere You Live',
    ratio: 55,
    content:
      'Pick a real room — this classroom, your bedroom, a lift.\n\n' +
      '> **5.1** Record **length, width and height** with units, and say **how** you measured.\n' +
      '> **5.2** How far would the **fly** fly in your room?\n' +
      '> **5.3** How far would the **spider** walk, using your rule from 4.5?\n' +
      '> **5.4** Is your answer **reasonable**? What would make it wrong?',
    notes: [
      {
        tone: 'info',
        badge: 'Expect untidy numbers',
        text: 'A real room will not give a whole number. **Say what you rounded to** — nearest-centimetre measuring does not justify six decimal places.',
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
      '> **6.1** Write up Parts 1–5 in order, a labelled diagram for every distance.\n' +
      '> **6.2** Compare your **predictions** with your results. Where were you wrong?\n' +
      '> **6.3** One paragraph: who genuinely needs a **3D distance**, and why?',
    notes: [
      {
        tone: 'theory',
        badge: 'Stuck on 6.3?',
        text: 'Anything moving through air or ground rather than along a road: aircraft separation, drones, lift shafts, sonar, cranes.',
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
      { text: 'Predictions written **before** calculating (1.1–1.3).' },
      { text: 'Scale **stated**, string measurement recorded (2.1).' },
      { text: 'The **fly** found two ways, shown to agree (3.1–3.3).' },
      { text: 'The room unfolded flat, rectangle drawn (4.1–4.2).' },
      { text: '**All three** unfoldings found and compared (4.3–4.4).' },
      { text: 'A **general rule**, tested on your own room (4.5–4.6).' },
      { text: 'A real room measured, with units and method (5.1–5.4).' },
      { text: 'A **labelled diagram** for every distance (6.1–6.3).' },
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
    accent: PURPLE,
    icon: 'Triangle',
    eyebrow: 'Solution · Part 3',
    title: 'The Fly Travels 17 ft',
    ratio: 45,
    inlineSvg: DIAGRAMS.FLY_ROOM,
    content:
      'Across the floor first: $\\sqrt{12^2 + 9^2} = \\sqrt{225} = 15$ ft, a 9-12-15 triangle.\n\n' +
      'Then stand a second triangle on that diagonal, with the 8 ft height as its other leg: $\\sqrt{15^2 + 8^2} = \\sqrt{289} = 17$ ft.\n\n' +
      'The one-step formula gives the same thing, and never mentions the 15.',
    notes: [
      {
        tone: 'write',
        text: '$d = \\sqrt{12^2 + 9^2 + 8^2} = \\sqrt{289} = 17$ ft.',
      },
    ],
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Calculator',
    side: 'left',
    eyebrow: 'Solution · Part 3, one line at a time',
    title: 'Why the Floor Diagonal Vanishes',
    ratio: 50,
    content:
      'The floor triangle gives $f^2 = x^2 + y^2$. The upright triangle gives $d^2 = f^2 + z^2$.\n\n' +
      'Substitute the first into the second and $f$ disappears: $d^2 = x^2 + y^2 + z^2$.\n\n' +
      'You would have squared the floor diagonal immediately after taking its square root, so that root never needed doing at all.',
    widget: FlyPathWidget,
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'Layers',
    eyebrow: 'Solution · Part 4',
    title: 'The Spider Walks About 20.8 ft',
    ratio: 45,
    inlineSvg: DIAGRAMS.ROOM_NET,
    content:
      'Unfolding the floor and the wall gives one rectangle **12 ft by 17 ft** — because the 9 ft of floor and the 8 ft of wall now lie end to end.\n\n' +
      'On a flat rectangle the shortest route is the straight diagonal, so Pythagoras works again.',
    notes: [
      {
        tone: 'write',
        text: '$d = \\sqrt{12^2 + 17^2} = \\sqrt{433} \\approx 20.8$ ft.',
      },
    ],
  },
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'CheckCircle2',
    eyebrow: 'Solution · Part 4.3 and 4.4',
    title: 'All Three Routes',
    inlineSvg: DIAGRAMS.THREE_UNFOLDINGS,
    caption: 'Three ways to unfold, three different walks — and the shortest is the **12 by 17** rectangle at about **20.8 ft**. Notice that none of them is a whole number. The fly came out at exactly 17 ft because the room was **chosen** to make it; the spider is what a real answer usually looks like.',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Telescope',
    side: 'left',
    eyebrow: 'Solution · Part 4.5 and 4.6',
    title: 'The Rule, and the Gap',
    ratio: 55,
    content:
      'For a room $a$ by $b$ by $c$, **add the two smallest** dimensions and pair that sum against the largest. Here $8 + 9 = 17$, paired with 12.\n\n' +
      'It falls out of the algebra: comparing $(a+b)^2 + c^2$ with $(a+c)^2 + b^2$ cancels down to comparing $2ab$ with $2ac$, so the **smaller** number belongs inside the bracket.\n\n' +
      'And the gap: $20.8 - 17 = 3.8$ ft, so the spider walks about **22% further** than the fly flies.',
    notes: [
      {
        tone: 'write',
        text: 'Shortest walk $= \\sqrt{(\\text{two smallest added})^2 + (\\text{largest})^2}$',
      },
    ],
  },
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Algebra Track · Project 1',
    title: 'Two Corners, Two Answers',
    subtitle: 'The fly flies 17 ft and the spider walks about 20.8 ft, between the very same pair of corners. You measured a distance nobody could reach with a ruler, checked it with a piece of string, and found a rule that works for any room — not just this one.',
  },
]
