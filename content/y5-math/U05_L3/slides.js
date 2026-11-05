// content/y5-math/U05_L3/slides.js
// Year 5 Mathematics (Mr. David) · Unit 5 Addition and subtraction · lesson 3:
// Below Zero in Words. One period, after Mr. David's two Unit 5 lessons
// ("Subtracting into Negative Numbers" and "Adding & Subtracting with Negative
// Numbers"), which taught the jumps on a number line with small numbers. This
// one keeps the method (zero is a bridge), makes the numbers bigger, adds
// estimating first, and teaches the ENGLISH of the word problems: rises /
// falls, warmer / colder, floors below the ground (B1 = −1), owing money, and
// "the difference between".
//
// Sources: Cambridge Primary Mathematics framework 5Ni.01 (estimate, add and
// subtract integers, including where one integer is negative) and 5Nc.01
// (count on and back beyond zero); the Stage 5 scheme of work, Unit 5.4 Topic 1
// (its −7 + 12 and −94 + 104 activities, its "treat −5 + 8 as −13"
// misconception); the question types of the Unit 5 end-of-unit test. There is
// no Year 5 Workbook on the drive yet. Every number on the slides is new.
//
// ENGLISH ONLY. The course is `bilingual: false`, so there are no …Vn / …Fr
// twins. Mr. David appears in the examples; there are no student names.
//
// THE ARC (plan.js has the timings):
//   Floors      starter: the lift goes down 6 floors from floor 4; the lift
//               stepper (to G, then the rest); back to the starter; two real
//               lift panels (−2 is B2).
//   Temperature Sa Pa in the snow; the up and down words (write); a vote
//               (−3 °C rises by 8 °C: 5 °C or −11 °C?); zero is a bridge
//               (write); whiteboards with bigger numbers; estimate first
//               (write); Mr. David's homework, marked 4/4.
//   Money       owe (write); Up or Down?, standing, with two trap rounds.
//   Difference  a vote (−4 and 5: 1 or 9?); the gap (write).
//   Put it to   the temperature table; words → number sentence; number
//   work        sentence → a story; three Mr. David word problems, each sillier
//               (slides 20–21).
//
// The goals slide (2) and the checklist (22) say the same three things, and
// the starter comes back on slide 4.
//
// COPY-DOWN: 5 written panels — the up and down words (6), zero is a bridge
// (8), estimate (10), owe (12), the difference (16). No drawings.
//
// WRITING RULE (the Maths 2.3 density): one hook line, short sentences, and the
// body never repeats the write note, a label or the caption.
import { DIAGRAMS } from './diagrams.js'
import { LiftStepper } from './lift.jsx'
import { UpOrDown } from './updown.jsx'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'

export const slides = [
  // ════════════════════════════════════════════════════════════════════════
  // FLOORS — Mr. David's lift
  // ════════════════════════════════════════════════════════════════════════

  // 1. Hero + starter
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Building2',
    brand: 'Year 5 Mathematics',
    eyebrow: 'Unit 5 · Addition and subtraction',
    title: 'Below Zero in Words',
    card: {
      icon: 'Pencil',
      badge: 'Starter',
      text: 'Mr. David is in the lift on **floor 4**. He goes **down 6 floors** to the car park. Which floor is he on now? **Guess** and write it down.',
    },
  },

  // 2. Today's goals (the checklist on slide 22 ticks off the same three)
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Today',
    title: 'Today You Will…',
    text: 'Read the **story**. Write the **number sentence**. Solve it.',
    columns: [
      {
        heading: 'Cold days',
        accent: BLUE,
        icon: 'Thermometer',
        inlineSvg: DIAGRAMS.PIC_THERMO,
        caption: 'Work out a temperature below zero.',
      },
      {
        heading: 'Under the ground',
        accent: ORANGE,
        icon: 'Building2',
        inlineSvg: DIAGRAMS.PIC_LIFT,
        caption: 'Go down to floors under the ground.',
      },
      {
        heading: 'The gap',
        accent: GREEN,
        icon: 'ArrowLeftRight',
        inlineSvg: DIAGRAMS.PIC_GAP,
        caption: 'Find the gap between two numbers.',
      },
    ],
  },

  // 3. The lift stepper: say it first
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Building2',
    eyebrow: 'Say it first',
    title: 'Mr. David’s Lift',
    widget: LiftStepper,
    caption: 'Say the floor **before** each press. The lift stops at **G** on the way.',
  },

  // 4. Back to the starter
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Back to the starter',
    title: 'The Car Park',
    text: 'Floor **4**. Down **6** floors. Which floor?',
    reveal: {
      label: 'Answer',
      answer: '4 − 6 = **−2**. Floor −2: two floors under the ground. 4 floors down to G, then 2 more.',
    },
  },

  // 5. Two real lift panels: −2 and B2 are the same floor
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Search',
    eyebrow: 'Real lifts',
    title: 'Floor −2 or Floor B2?',
    inlineSvg: DIAGRAMS.LIFTS_PHOTO,
    caption: '**G** (ground) is floor **0**. **B** means **below** the ground: B2 = **−2**.',
  },

  // ════════════════════════════════════════════════════════════════════════
  // TEMPERATURE — Sa Pa
  // ════════════════════════════════════════════════════════════════════════

  // 6. The up and down words (write), on snow in Sa Pa
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Snowflake',
    eyebrow: 'Key words',
    title: 'Up Words and Down Words',
    ratio: 50,
    inlineSvg: DIAGRAMS.SAPA_PHOTO,
    content: 'Sa Pa can go **below 0 °C** in winter.',
    notes: [
      {
        tone: 'write',
        text: '**Add (+):** rises, goes up, gets warmer.\n**Subtract (−):** falls, drops, goes down, gets colder.',
      },
    ],
  },

  // 7. Vote: −3 °C rises by 8 °C
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    title: 'Lunchtime in Sa Pa',
    text: 'At 6 a.m. it is **−3 °C**. By lunchtime it **rises by 8 °C**. What is the temperature now?',
    columns: [
      { heading: 'A · left hand up', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_5C },
      { heading: 'B · right hand up', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_M11C },
    ],
  },

  // 8. Answer A: zero is a bridge (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Thermometer',
    eyebrow: 'Answer: A',
    title: 'Zero Is a Bridge',
    ratio: 45,
    inlineSvg: DIAGRAMS.THERMO_BRIDGE,
    notes: [
      {
        tone: 'write',
        text: '**Zero is a bridge.** Jump to **0** first. Then jump the rest.',
      },
      {
        tone: 'info',
        badge: false,
        text: '**B is wrong:** it rises, so it gets warmer. −11 °C is colder than −3 °C.',
      },
    ],
  },

  // 9. Whiteboards: bigger jumps
  {
    layout: 'split',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Whiteboards',
    title: 'Bigger Jumps',
    ratio: 45,
    inlineSvg: DIAGRAMS.ZERO_LINE,
    content: 'Draw a line. Put **0** in the middle.\n\n**a** 6 − 15\n**b** −12 + 30\n**c** 40 − 75',
    reveal: {
      label: 'Check your answers',
      answer: '**a** 6 to 0, then 9 more: **−9**. **b** 12 to 0, then 18 more: **18**. **c** 40 to 0, then 35 more: **−35**.',
    },
  },

  // 10. Estimate first (write)
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Key word',
    title: 'Estimate First',
    text: '**−98 + 203**',
    sub: 'Use easy numbers.',
    notes: [
      {
        tone: 'write',
        text: '**Estimate:** a quick answer with easy numbers. It helps you check.',
      },
    ],
    reveal: {
      label: 'Answer',
      answer: 'About −100 + 200 = **100**. Exactly **105**: 98 to 0, then 105 more.',
    },
  },

  // 11. Spot the mistakes: Mr. David's homework (pair talk)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'AlertTriangle',
    eyebrow: 'Talk to your partner',
    title: 'Mr. David’s Homework',
    ratio: 45,
    inlineSvg: DIAGRAMS.HOMEWORK,
    content: 'Mr. David marked his own homework. He gave himself **4 out of 4**.\n\nWhich answers are **wrong**?',
    reveal: {
      label: 'Answer',
      answer: '**a** is −102, not 102: he found the gap, not the answer. **b** is **4**: −5 + 9 goes up past 0. **c** and **d** are right. So 2 out of 4.',
    },
  },

  // ════════════════════════════════════════════════════════════════════════
  // MONEY — owing
  // ════════════════════════════════════════════════════════════════════════

  // 12. Owe (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Coins',
    eyebrow: 'Key word',
    title: 'Money You Owe',
    ratio: 45,
    inlineSvg: DIAGRAMS.MONEY,
    notes: [
      {
        tone: 'write',
        text: '**Owe:** to have to pay money back. Money you owe is a **negative** number.',
      },
      {
        tone: 'info',
        badge: false,
        text: '20 000 − 25 000 = **−5 000**',
      },
    ],
  },

  // 13. Up or Down? Everyone stands
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Trophy',
    eyebrow: 'A game · everyone stands',
    title: 'Up or Down?',
    widget: UpOrDown,
    caption: '**Arms up:** add. **Arms down:** subtract. Wrong? Sit down.',
  },

  // ════════════════════════════════════════════════════════════════════════
  // THE DIFFERENCE BETWEEN
  // ════════════════════════════════════════════════════════════════════════

  // 14. English check: two questions that look alike
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'English check',
    title: 'Two Questions, Two Answers',
    columns: [
      {
        heading: '“Subtract 5 from 2”',
        accent: BLUE,
        icon: 'Minus',
        content: 'Start at **2**. Take away **5**.\n\n2 − 5 = **−3**',
        caption: 'The number after **from** comes first.',
      },
      {
        heading: '“The difference between 2 and 5”',
        accent: ORANGE,
        icon: 'ArrowLeftRight',
        content: 'How far apart are **2** and **5**?\n\n**3** steps',
        caption: 'A difference is a **gap**.',
      },
    ],
  },

  // 15. Vote: the difference between −4 and 5
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    title: 'How Far Apart?',
    text: 'What is the **difference between −4 and 5**?',
    columns: [
      { heading: 'A · left hand up', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_1 },
      { heading: 'B · right hand up', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_9 },
    ],
  },

  // 16. Answer B: the gap (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'ArrowLeftRight',
    eyebrow: 'Answer: B',
    title: 'The Difference Between',
    ratio: 45,
    inlineSvg: DIAGRAMS.GAP,
    notes: [
      {
        tone: 'write',
        text: '**The difference between** two numbers is the **gap** between them. It is never negative.',
      },
      {
        tone: 'info',
        badge: false,
        text: '**A is wrong:** 5 − 4 = 1 forgets that −4 is below zero.',
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // PUT IT TO WORK
  // ════════════════════════════════════════════════════════════════════════

  // 17. Read the table (whiteboards)
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Table',
    eyebrow: 'Whiteboards · read the table',
    title: 'One Cold Morning',
    ratio: 45,
    inlineSvg: DIAGRAMS.TABLE,
    content: '**a** Seoul gets **10 °C warmer**. New temperature?\n**b** Sa Pa **falls by 4 °C**. New temperature?\n**c** What is the **difference** between Hội An and Seoul?\n**d** Which place is the **coldest**?',
    reveal: {
      label: 'Check your answers',
      answer: '**a** −7 + 10 = **3 °C**. **b** −2 − 4 = **−6 °C**. **c** 7 + 19 = **26 °C**. **d** **Harbin**, −21 °C.',
    },
  },

  // 18. Words → number sentence (whiteboards)
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Whiteboards · write the number sentence first',
    title: 'Story to Number Sentence',
    content:
      '**a** The lift is on **B2**. It goes **up 7** floors.\n\n' +
      '**b** Mr. David has **12 000 dong**. He spends **20 000 dong**. How much does he **owe**?\n\n' +
      '**c** Count back from **15** in steps of **4**: 15, 11, … What are the next **three** numbers?',
    reveal: {
      label: 'Check your answers',
      answer: '**a** −2 + 7 = **5**: floor 5. **b** 12 000 − 20 000 = **−8 000**: he owes 8 000 dong. **c** **7, 3, −1**.',
    },
  },

  // 19. Number sentence → story (pairs)
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Talk to your partner',
    title: 'Make Up the Story',
    text: '**3 − 8 = −5**',
    sub: 'Write a story for this number sentence. Use a temperature, a lift or money.',
    reveal: {
      label: 'One story',
      answer: 'It is **3 °C** in the morning. In the evening the temperature **falls by 8 °C**. Now it is **−5 °C**.',
    },
  },

  // 20. Word problems: two, the second sillier (deadpan)
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Word problems',
    title: 'Mr. David Has a Day',
    content:
      '**a** Mr. David’s freezer is **−18 °C**. He leaves the door open to look for the ice cream. It gets **23 °C warmer**. Temperature now?\n\n' +
      '**b** He parks on **B3**. Looking for his car, he goes **up 7**, **down 5**, then **up 2**. Which floor is he on? Is his car there?',
    reveal: {
      label: 'Check your answers',
      answer: '**a** −18 + 23 = **5 °C**. **b** 4, then −1, then **1**: floor 1. His car is on B3.',
    },
  },

  // 21. Word problem: paying back too much (deadpan)
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'Coins',
    eyebrow: 'Word problem',
    title: 'Mr. David Pays His Sister',
    content:
      'Mr. David **owes** his sister **30 000 dong**.\n\n' +
      'He has no small notes, so he gives her **50 000 dong**.\n\n' +
      'Who owes who now? How much?',
    reveal: {
      label: 'Check your answer',
      answer: '−30 000 + 50 000 = **20 000**. Now his sister owes him **20 000 dong**.',
    },
  },

  // ── CLOSE ─────────────────────────────────────────────────────────────────
  // 22. Checklist: slide 2's goals, with the key words
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you leave',
    title: 'Can You Do These?',
    content: '> Check your notebook: **5 written panels**.',
    items: [
      { text: 'Work out a temperature that **rises** or **falls** past 0 °C.' },
      { text: 'Go **down** to floors **below** the ground: B2 = −2.' },
      { text: 'Find **the difference between** two numbers: the gap.' },
      { text: '**Estimate** first, then use **zero as a bridge**.' },
    ],
  },

  // 23. Exit
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Target',
    brand: 'Year 5 Mathematics',
    eyebrow: 'Exit question',
    title: 'Overnight',
    subtitle: 'At 9 p.m. it is **5 °C**. By morning it **falls by 12 °C**. What is the temperature now? What is the **difference**?',
    reveal: {
      label: 'Answer',
      answer: '5 − 12 = **−7 °C**. The difference is **12 °C**.',
    },
  },
]
