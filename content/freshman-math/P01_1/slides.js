// content/freshman-math/P01_1/slides.js
// Algebra Track · Project 1 — The Flight of the Fly.
//
// This was the closing activity of lesson 1.1 and has been pulled out into a
// project in its own right. The difference is not length, it is FRAMING: a
// project states its question up front, publishes how it will be marked before
// any work starts, gives students the questions in writing so they can work
// without the projector, and asks for something handed in at the end.
//
// The structure borrowed from good project assessment, in plain words:
//   · one driving question, asked before any method is given;
//   · a physical model, so the answer can be checked against reality rather
//     than against the back of a book;
//   · an open investigation with a result the teacher does not simply hand
//     over — here, the spider's walk and the rule for which unfolding is
//     shortest;
//   · transfer to a space the student measures themselves;
//   · a published rubric, in student-facing language, shown BEFORE they start.
//
// The mathematics is the same 12 × 9 × 8 ft room from the lesson, chosen so the
// flight chains two Pythagorean triples (9-12-15, then 15-8-17). The walk
// deliberately does NOT come out whole: √433 ≈ 20.8 ft. That contrast is the
// point of Part 4 — a tidy answer is a property of the question a teacher
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
  // ══ The brief ═════════════════════════════════════════════════════════════
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Hammer',
    brand: 'Algebra Track · Project 1',
    eyebrow: 'Two lessons + a write-up',
    title: 'The Flight of the Fly',
    card: {
      icon: 'Target',
      badge: 'What you will hand in',
      text: 'One write-up: a **labelled diagram**, your **calculations**, your **measured model**, and your **conclusions in full sentences**. Marked out of **16**.',
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
    sub: 'How far does each of them travel — and **why is the spider\'s journey the harder question**? By the end you will have answered both, and checked one of them with a piece of string.',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Bug',
    eyebrow: 'The brief',
    title: 'The Room, and the Six Parts',
    ratio: 45,
    image: housefly,
    content:
      'A fly starts in a **bottom corner** of a room and flies in a perfectly straight line to the **opposite corner of the ceiling**.\n\n' +
      'The room is **12 ft** long, **9 ft** wide and **8 ft** high. The fly flies at **3.4 feet per second**.',
    notes: [
      {
        tone: 'write',
        badge: 'The six parts — copy this list',
        text:
          '**1. Predict** — before any maths.\n' +
          '**2. Model** — build the room and measure it.\n' +
          '**3. The flight** — calculate it two ways.\n' +
          '**4. The walk** — investigate the spider.\n' +
          '**5. Your own room** — measure a real one.\n' +
          '**6. Write it up.**',
      },
    ],
  },

  // ══ How it is marked — published before any work starts ═══════════════════
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

  // ══ Part 1 · Predict ══════════════════════════════════════════════════════
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
      '> **1.1** Estimate the fly\'s straight-line distance, in feet.\n' +
      '> **1.2** The spider must walk on the surfaces. Is its shortest route longer? By a little, or a lot?\n' +
      '> **1.3** Which do you expect to be harder to work out, and why?',
    notes: [
      {
        tone: 'task',
        badge: 'Rule for Part 1',
        text: 'No calculating. A prediction you later disagree with is **evidence you learned something** — do not edit it.',
      },
    ],
  },

  // ══ Part 2 · The model ════════════════════════════════════════════════════
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Box',
    eyebrow: 'Part 2 · build it',
    title: 'Your Notebook Is Already 3D',
    inlineSvg: DIAGRAMS.NOTEBOOK_MODEL,
    caption: 'Open a notebook to **90°** and you have built three perpendicular axes with your hands. The flat page carries **x** and **y**; the fold standing up between the pages is **z**. A calculation you cannot check is just a hope — so build the room, run the string, and measure it.',
  },
  {
    layout: 'steps',
    accent: GREEN,
    icon: 'Hammer',
    eyebrow: 'Part 2 · in pairs',
    title: 'Build It and Measure It',
    steps: [
      { text: '**Fold your notebook to 90°** — flat page = **floor**, standing page = **wall**. Draw the **x and y axes** on the flat page; the fold line is the **z-axis**.' },
      { text: '**Write down your scale** — 1 square = 1 foot. Draw the **12 by 9** floor.' },
      { text: 'Mark the **start** at the origin; the **finish** is the opposite corner, 8 squares **up**.' },
      { text: '**Tape, pull tight, cut, measure.** **2.1** Convert to feet, record with units, compare with your estimate.' },
    ],
  },

  // ══ Part 3 · The flight ═══════════════════════════════════════════════════
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Triangle',
    eyebrow: 'Part 3 · both routes must agree — that agreement is a large part of the mark',
    title: 'Calculate It Two Ways',
    ratio: 40,
    inlineSvg: DIAGRAMS.FLY_ROOM,
    content:
      '> **3.1** The diagonal **across the floor**. Draw it.\n' +
      '> **3.2** Stand a second triangle on it; find the distance **to the ceiling corner**.\n' +
      '> **3.3** Do it again in **one step**. Do the answers agree?\n' +
      '> **3.4** Why does the one-step formula never need the floor diagonal?',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Calculator',
    side: 'left',
    eyebrow: 'Part 3 · check together',
    title: 'The Flight, Step by Step',
    ratio: 50,
    content:
      'Both routes land on **17 ft**, and the 15 ft floor diagonal never appears in the one-step version. The fly flies at **3.4 feet per second**.\n\n' +
      '> **3.5** How long does the whole flight take?\n' +
      '> **3.6** After **3 seconds**: how far, and what are the **x, y and z components**?\n' +
      '> **3.7** Check 3.6 with the 3D distance formula.',
    notes: [
      {
        tone: 'task',
        badge: 'Before the button',
        text: 'Nobody presses anything until every pair has a number on paper.',
      },
    ],
    widget: FlyPathWidget,
  },

  // ══ Part 4 · The investigation ════════════════════════════════════════════
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'Part 4 · the investigation',
    title: 'But a Spider Cannot Fly',
    label: 'Think before you calculate',
    labelIcon: 'MessageSquare',
    text: 'It has to **walk** — across the floor, up a wall, over the ceiling.',
    sub: 'It still goes from the same corner to the same corner. Its path is made of **straight lines on flat surfaces**. So what is the shortest walk, and how could you possibly find it?',
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'Layers',
    eyebrow: 'Part 4 · the key idea',
    title: 'Flatten the Room',
    ratio: 45,
    inlineSvg: DIAGRAMS.ROOM_NET,
    content:
      'A cardboard box can be cut open and laid flat. Do that to the room and the spider\'s two surfaces become **one rectangle** — and on a flat rectangle the shortest route is a plain straight line.\n\n' +
      'This is the lesson\'s move again: make the problem flat, then use Pythagoras.\n\n' +
      '> **4.1** Unfold the floor and the far wall into one rectangle. What are its two side lengths?\n' +
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
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'CheckCircle2',
    eyebrow: 'Only open this after you have hunted for your own',
    title: 'Check: The Three Routes',
    inlineSvg: DIAGRAMS.THREE_UNFOLDINGS,
    caption: 'The shortest walk is about **20.8 ft** — over 3 ft further than the fly\'s 17 ft. Notice that none of these is a whole number. The flight came out at exactly 17 because the room was **chosen** to make it; the walk is what a real answer usually looks like.',
  },

  // ══ Part 5 · Transfer ═════════════════════════════════════════════════════
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
      '> **5.2** Find the straight-line corner-to-ceiling-corner distance.\n' +
      '> **5.3** Find the shortest **walk**, using your rule from 4.5.\n' +
      '> **5.4** Is your answer **reasonable**? What would make it wrong?',
    notes: [
      {
        tone: 'info',
        badge: 'Expect untidy numbers',
        text: 'A real room will not give a whole number. **Say what you rounded to** — nearest-centimetre measuring does not justify six decimal places.',
      },
    ],
  },

  // ══ Part 6 · Communicate ══════════════════════════════════════════════════
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
      { text: 'The flight found **both ways**, shown to agree (3.1–3.4).' },
      { text: 'Time and the 3-second components **checked** (3.5–3.7).' },
      { text: '**All three** unfoldings found and compared (4.1–4.4).' },
      { text: 'A **general rule**, tested on your own room (4.5–4.6).' },
      { text: 'A real room measured, with units and method (5.1–5.4).' },
      { text: 'A **labelled diagram** for every distance (6.1–6.3).' },
    ],
  },
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Algebra Track · Project 1',
    title: 'Hand It In',
    subtitle: 'You measured a distance nobody could reach with a ruler, checked it with a piece of string, and found a rule that works for any room. Build the model, do the mathematics, then ask whether the answer deserves to be believed.',
  },
]
