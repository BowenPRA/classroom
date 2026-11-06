// content/y5-math/U05_L3/slides.js
// Year 5 Mathematics (Mr. David) · Unit 5 Addition and subtraction · lesson 3:
// Below Zero in Words. One period, after Mr. David's two Unit 5 lessons
// ("Subtracting into Negative Numbers" and "Adding & Subtracting with Negative
// Numbers"), which taught the jumps on a number line with small numbers and
// the word "negative". This one keeps the method (zero is a bridge), makes the
// numbers bigger, adds estimating first, and teaches the ENGLISH of the word
// problems: rises / falls, warmer / colder, floors below the ground (B1 = −1),
// owing money, "the difference between", and the question words "Calculate"
// and "Estimate", each with a sentence frame for the answer.
//
// Sources: Cambridge Primary Mathematics framework 5Ni.01 (estimate, add and
// subtract integers, including where one integer is negative) and 5Nc.01
// (count on and back beyond zero); the Stage 5 scheme of work, Unit 5.4 Topic 1
// (its blank number line with 0 in the middle, its key phrases "An estimate for
// the answer is …" and "The difference between … and … is …", its "treat
// −5 + 8 as −13" misconception); the question types of the Unit 5 end-of-unit
// test. There is no Year 5 Workbook on the drive yet. Every number on the
// slides is new: none is taken from the test or the scheme of work, so the
// test stays unspent (5 Nov audit: slide 12 had used the test's 4 − 106).
//
// ENGLISH ONLY. The course is `bilingual: false`, so there are no …Vn / …Fr
// twins. Mr. David appears in the examples; there are no student names. The
// "What happens next?" strip (slide 7) uses Pip, the shared made-up otter in
// src/lib/storyCharacter.js: a teacher deck never draws a real teacher.
//
// THE ARC (plan.js has the timings):
//   Floors      starter: the lift goes down 6 floors from floor 4; the lift
//               stepper (moves chained, to G, then the rest); back to the
//               starter (number sentence 4 − 6 = −2); two real lift panels
//               (−2 is B2, ringed).
//   Temperature the up and down words (write); what happens next? Pip camps
//               on Fansipan: 8, 5, 2 °C, then a frozen thermometer (the answer,
//               −4 °C, crosses zero; the last press melts the ice); a vote
//               (−3 °C rises by 8 °C: 5 °C or −11 °C?); zero is a bridge
//               (write); "Calculate" on whiteboards with bigger numbers;
//               estimate first with its sentence frame (write); Mr. David's
//               homework, marked 4/4.
//   Money       owe (write); Up or Down?, standing, with three trap rounds.
//   Difference  an English check with two number lines; a vote with the
//               sentence frame (−4 and 5: 1 or 9?); the gap (write).
//   Put it to   the temperature table, its answers shown one press at a time
//   work        (flow step 8); words → number sentence; number sentence → a
//               story; three Mr. David word problems, each sillier (21–23).
//
// The goals slide (2) and the checklist (24) say the same three things:
// past zero with temperatures (estimate, zero as a bridge), floors and money
// below zero, and the gap. The starter comes back on slide 4.
//
// COPY-DOWN: 5 written panels — the up and down words (6), zero is a bridge
// (9), estimate (11), owe (13), the difference (17). No drawings.
//
// WRITING RULE (the Maths 2.3 density): one hook line, short sentences, and the
// body never repeats the write note, a label or the caption.
import { DIAGRAMS } from './diagrams.js'
import { LiftStepper } from './lift.jsx'
import { UpOrDown } from './updown.jsx'
import { NightStory } from './story.jsx'
import { TableReveal } from './table.jsx'

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
      text: 'Mr. David is in the lift on **floor 4**. He goes **down 6 floors** to his car. Which floor is he on now? Write your **guess**.',
    },
  },

  // 2. Today's goals (the checklist on slide 24 ticks off the same three).
  // The goal lines are `content`, not `caption`, so they print at 20 px or more.
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Today',
    title: 'Today You Will…',
    columns: [
      {
        heading: 'Temperature',
        accent: BLUE,
        icon: 'Thermometer',
        inlineSvg: DIAGRAMS.PIC_THERMO,
        content: 'Add and subtract past zero.',
      },
      {
        heading: 'Floors and money',
        accent: ORANGE,
        icon: 'Building2',
        inlineSvg: DIAGRAMS.PIC_LIFT,
        content: 'Go below zero in a lift or a shop.',
      },
      {
        heading: 'How far apart?',
        accent: GREEN,
        icon: 'ArrowLeftRight',
        inlineSvg: DIAGRAMS.PIC_GAP,
        content: 'Find the gap between two numbers.',
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
    caption: 'The lift stops at **G** on the way.',
  },

  // 4. Back to the starter
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Back to the starter',
    title: 'Down to His Car',
    text: 'Floor **4**. Down **6** floors. Which floor?',
    reveal: {
      label: 'Answer',
      answer: '4 floors down to G, then 2 more: two floors under the ground. Number sentence: 4 − 6 = **−2**.',
    },
  },

  // 5. Two real lift panels: −2 and B2 are the same floor (both ringed)
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
  // TEMPERATURE — the words first, then Pip's night
  // ════════════════════════════════════════════════════════════════════════

  // 6. The up and down words (write), on snow in Sa Pa. Before the strip, so
  // "falls" is taught before Pip's story uses it. The example does not cross
  // zero: the strip's first step (2 − 3) is the class's to predict.
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Snowflake',
    eyebrow: 'Key words',
    title: 'Up Words and Down Words',
    ratio: 50,
    inlineSvg: DIAGRAMS.SAPA_PHOTO,
    notes: [
      {
        tone: 'write',
        text: '**Add (+):** rises, goes up, gets warmer.\n**Subtract (−):** falls, drops, goes down, gets colder.',
      },
      {
        tone: 'info',
        badge: false,
        text: 'Sa Pa is 5 °C. The temperature falls by 4 °C. 5 − 4 = **1 °C**.',
      },
    ],
  },

  // 7. What happens next? Pip's cold night, one panel per press (deadpan)
  {
    layout: 'showcase',
    accent: BLUE,
    icon: 'Moon',
    eyebrow: 'What happens next?',
    title: 'A Cold Night on Fansipan',
    widget: NightStory,
    caption: 'Before each step, **predict**: what happens next?',
  },

  // 8. Vote: −3 °C rises by 8 °C
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

  // 9. Answer A: zero is a bridge (write)
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
        text: '**Zero is a bridge.** First jump to **0**. Then jump again.',
      },
      {
        tone: 'info',
        badge: false,
        text: '**B is wrong:** it rises, so it gets warmer. −11 °C is colder than −3 °C.',
      },
    ],
  },

  // 10. Whiteboards: bigger jumps. "Calculate" is the test's question word.
  {
    layout: 'split',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Whiteboards',
    title: 'Bigger Jumps',
    ratio: 45,
    inlineSvg: DIAGRAMS.ZERO_LINE,
    content: 'Draw a number line like this one. Put **0** in the middle.\n\n**Calculate** (work out):\n**a** 6 − 15\n**b** −12 + 30\n**c** 40 − 75',
    reveal: {
      label: 'Check your answers',
      answer: '**a** 6 to 0, then 9 more: **−9**. **b** 12 to 0, then 18 more: **18**. **c** 40 to 0, then 35 more: **−35**.',
    },
  },

  // 11. Estimate first (write), with the scheme of work's sentence frame
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Key word',
    title: 'Estimate First',
    text: '**−98 + 203**',
    sub: 'Say: “An estimate for the answer is ___.”',
    notes: [
      {
        tone: 'write',
        text: '**Estimate:** a quick answer with easy numbers. It helps you check.',
      },
    ],
    reveal: {
      label: 'Answer',
      answer: 'Estimate **100** (−100 + 200). Exact **105**: 98 to 0, then 105 more.',
    },
  },

  // 12. Spot the mistakes: Mr. David's homework (pair talk). Original numbers.
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
      answer: '**a** is −105, not 105: he found the gap, not the answer. **b** is **4**: −6 + 10 goes up past 0. **c** and **d** are right. So 2 out of 4.',
    },
  },

  // ════════════════════════════════════════════════════════════════════════
  // MONEY — owing
  // ════════════════════════════════════════════════════════════════════════

  // 13. Owe (write)
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

  // 14. Up or Down? Everyone stands
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

  // 15. English check: two questions that look alike, each with its number line
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
        inlineSvg: DIAGRAMS.NL_SUB,
        content: 'Start at **2**. Take away **5**: 2 − 5 = **−3**\n\nThe number after **from** comes first.',
      },
      {
        heading: '“The difference between 2 and 5”',
        accent: ORANGE,
        icon: 'ArrowLeftRight',
        inlineSvg: DIAGRAMS.NL_GAP,
        content: 'How far apart are **2** and **5**? **3** steps.\n\nA difference is a **gap**.',
      },
    ],
  },

  // 16. Vote: the difference between −4 and 5, asked as the sentence frame
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    title: 'How Far Apart?',
    text: 'The **difference between −4 and 5** is ___.',
    columns: [
      { heading: 'A · left hand up', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_1 },
      { heading: 'B · right hand up', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_9 },
    ],
  },

  // 17. Answer B: the gap (write)
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

  // 18. Read the table (whiteboards), then the answers one press at a time
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Table',
    eyebrow: 'Whiteboards · read the table',
    title: 'One Cold Morning',
    ratio: 45,
    widget: TableReveal,
    content: '**a** Seoul gets **10 °C warmer**. What is the new temperature?\n**b** Sa Pa **falls by 4 °C**. What is the new temperature?\n**c** What is the **difference** between Hội An and Seoul?\n**d** Which place is the **coldest**?',
  },

  // 19. Words → number sentence (whiteboards)
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Whiteboards',
    title: 'Story to Number Sentence',
    content:
      'Write the **number sentence**. Then write the answer.\n' +
      '**a** The lift is on **B2**. It goes **up 7** floors. Which floor is it on now?\n' +
      '**b** Mr. David has **12 000 dong**. His lunch costs **20 000 dong**. How much does he **owe**?\n' +
      '**c** It is **11 °C**. Every hour it gets **4 °C colder**. What are the next **three** temperatures?',
    reveal: {
      label: 'Check your answers',
      answer: '**a** −2 + 7 = **5**: floor 5. **b** 12 000 − 20 000 = **−8 000**. **c** **7, 3, −1 °C**.',
    },
  },

  // 20. Number sentence → story (pairs)
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Talk to your partner',
    title: 'Make Up the Story',
    text: '**3 − 8 = −5**',
    sub: 'Tell your partner a story for this number sentence. Use a temperature, a lift or money.',
    reveal: {
      label: 'One story',
      answer: 'It is **3 °C** in the morning. In the evening the temperature **falls by 8 °C**. Now it is **−5 °C**.',
    },
  },

  // 21–23. Word problems, each sillier (deadpan)
  // 21. Paying back too much
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'Coins',
    eyebrow: 'Whiteboards',
    title: 'Mr. David Pays His Sister',
    content:
      'Mr. David **owes** his sister **30 000 dong**.\n\n' +
      'He only has a **50 000 dong** note. He gives it to her.\n\n' +
      'Who owes who now? How much?',
    reveal: {
      label: 'Check your answer',
      answer: '−30 000 + 50 000 = **20 000**. Now his sister owes him **20 000 dong**.',
    },
  },

  // 22. Where is the car?
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'Building2',
    eyebrow: 'Talk to your partner',
    title: 'Mr. David Has a Day',
    content:
      'Mr. David parks on **B3**. He goes **up 7** floors to his office.\n\n' +
      'After work he goes **down 5**, then **up 2**.\n\n' +
      'Which floor is he on? Is his car there?',
    reveal: {
      label: 'Check your answer',
      answer: '−3 + 7 = 4, then **B1** (−1), then **floor 1**. No: his car is on B3.',
    },
  },

  // 23. The freezer door (the picture names "freezer" before the question)
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Snowflake',
    eyebrow: 'Whiteboards',
    title: 'The Freezer Door',
    ratio: 50,
    inlineSvg: DIAGRAMS.FREEZER,
    content: 'Mr. David’s **freezer** is **−18 °C**. He opens the door to look for the ice cream. He forgets to close it.\n\nIt gets **23 °C warmer**. What is the temperature now?',
    reveal: {
      label: 'Check your answer',
      answer: '−18 + 23 = **5 °C**: 18 to 0, then 5 more.',
    },
  },

  // ── CLOSE ─────────────────────────────────────────────────────────────────
  // 24. Checklist: slide 2's three goals, with the key words
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 1,
    eyebrow: 'Before you leave',
    title: 'Can You Do These?',
    content: '> Check your notebook: **5 written panels**.',
    items: [
      { text: '**Add** and **subtract** past zero when a temperature **rises** or **falls**: **estimate** first, then use **zero as a bridge**.' },
      { text: 'Go **below zero** in a lift or a shop: B2 = −2, and **owe** 5 000 dong = −5 000.' },
      { text: 'Find **the difference between** two numbers: the **gap**.' },
    ],
  },

  // 25. Exit: two numbers to compare, then a rise
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Target',
    eyebrow: 'Exit question',
    title: 'Overnight',
    card: {
      icon: 'Pencil',
      badge: 'Write it down',
      text: 'At 9 p.m. it is **4 °C**. At 6 a.m. it is **−5 °C**. **a** What is the **difference**? **b** Then it **rises by 8 °C**. What is the temperature now?',
    },
    reveal: {
      label: 'Answer',
      answer: '**a** 4 to 0, then 5 more: **9 °C**. **b** −5 + 8 = **3 °C**.',
    },
  },
]
