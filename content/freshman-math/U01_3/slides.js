// content/freshman-math/U01_3/slides.js
// Algebra Track 1.3 — Circles, Compasses and Three Points.
//
// THE DECK IS ONE JOKE, TOLD SLOWLY, AND THE JOKE IS THE LESSON.
// It opens with a conspiracy: London, Rome and Warsaw sit on a perfect circle.
// Then Paris, Berlin and Rome do too. The class is asked, seriously, why major
// cities keep landing on circles, and told to write their best explanation down
// — because that answer has to still be on the page at the end.
//
// The answer, forty minutes later, is that ANY three places do. The pattern was
// never evidence of anything. Every mathematical beat in between exists to earn
// that punchline:
//   · three points determine a circle (slides 9–10)
//   · except three in a straight line (11–12)
//   · what a circle IS, and why a compass draws one (13–15)
//   · the perpendicular bisector, by construction rather than by arithmetic
//     (16–19) — 1.2 built one with slopes on a mirror; this one uses no numbers
//   · and finally the circumcentre, which is both the construction and the
//     explanation of the map (20–21).
//
// ON THE ACTIVITY (slides 6–8): students draw circles through cities BY EYE,
// before they have any method. That is deliberate and must not be "fixed" by
// moving the construction earlier. The point of the activity is that everybody
// succeeds roughly and nobody succeeds exactly, so the compass arrives as the
// answer to a question the class has already asked. Slide 21 sends them back to
// the same sheet to do one properly.
//
// ON LAYOUT: `showcase`, `steps`, `compare` and `gallery` silently DROP a
// slide-level `notes` array — nothing errors, the panel just never renders. So
// every copy-down item in this deck is either in a `write` note on a `split` /
// `statement` / `callout` / `stack`, or an orange `>` bumper inside `content`,
// which `renderContent` does draw on a `steps` slide. Nothing else is copy-down.
//
// ON DENSITY: 1.2 overflowed twelve slides on its first draft. Same rule here —
// at most three short paragraphs of `content`, at most three lines in a `write`
// note, and when a slide wants a fourth idea it becomes two slides.
//
// The course is flagged bilingual:false in content/courses.js, so there are no
// …Vn twins and the EN/VN toggle is hidden. The English is still written for a
// class whose first language is Vietnamese — short sentences, one idea per line
// — but the vocabulary is not softened: circle, centre, radius, chord, collinear,
// equidistant, perpendicular bisector, construction and circumcentre are all
// named properly.
//
// One image, one widget. The map is a public-domain equirectangular crop (see
// images/CREDITS.json) and the widget's only job is to make the circle arrive
// after the cities without the picture moving. Everything else is authored SVG.
import { DIAGRAMS } from './diagrams.js'
import { CityCircleOneWidget, CityCircleTwoWidget } from './widgets.jsx'
import europeMap from './images/europe-map.png'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'

export const slides = [
  // ══ Part 1 · The map ══════════════════════════════════════════════════════
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Sigma',
    brand: 'Algebra Track',
    eyebrow: 'Unit 1 · 1.3',
    title: 'Circles, Compasses and Three Points',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      text: '**Three dots** on a clean page — spread out, not in a line. **Compass and ruler** out.',
    },
  },
  {
    layout: 'showcase',
    accent: RED,
    icon: 'Globe',
    eyebrow: 'Nobody planned this. Probably.',
    title: 'Three Cities',
    widget: CityCircleOneWidget,
    caption: 'London. Rome. Warsaw. Press the button — and notice that the circle misses none of them.',
  },
  {
    layout: 'showcase',
    accent: BLUE,
    icon: 'Globe',
    eyebrow: 'And again, with different cities',
    title: 'It Happens Twice',
    widget: CityCircleTwoWidget,
    caption: 'Paris. Berlin. Rome. A different circle, a different size — and Rome is on both of them.',
  },
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'In pairs — nothing on the board, no numbers',
    title: 'Why Would That Happen?',
    label: 'Discuss',
    labelIcon: 'MessageSquare',
    text: 'Major cities keep landing on circles with each other.',
    sub: 'Give a **reason**. Rivers? Ports? A day\'s ride from the last city? Empires drawing borders? Somebody planning it? Say which of your reasons could actually be **tested**.',
  },
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'Lightbulb',
    eyebrow: 'Before we go any further',
    title: 'Commit to an Answer',
    content: 'Everyone in this room now has an opinion about that map. Write yours down before you hear anybody else\'s, and put a **box around it**.\n\nAt the end of the lesson you are going to mark your own answer.',
    notes: [
      {
        tone: 'write',
        badge: 'Write it down now',
        text: 'My explanation for the city circles: ______________________\n\nHow sure am I, out of 10? ______',
      },
    ],
  },

  // ══ Part 2 · The activity ═════════════════════════════════════════════════
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'MapPin',
    eyebrow: 'Class task · one sheet each',
    title: 'Your Own Map',
    ratio: 48,
    image: europeMap,
    content: 'You are getting a map of Europe with **fourteen cities** marked on it.\n\nYour job is to find circles of your own. Pick any **three** cities and draw the circle that goes through all three.\n\nYou have no method yet. That is on purpose — do it **by eye** and get as close as you can.',
    notes: [
      {
        tone: 'task',
        badge: 'The rules',
        text: 'The circle must pass **through** all three dots, not around them.\n\nMark the **centre** with a small cross, and write the three city names beside it.',
      },
    ],
  },
  {
    layout: 'steps',
    accent: PURPLE,
    icon: 'Pencil',
    eyebrow: 'Class task · about ten minutes',
    title: 'Do It Three Times',
    content: 'Work in pencil. A circle you can rub out beats one you commit to.',
    steps: [
      { text: '**Pick three cities**, well spread out, and write their names down.' },
      { text: '**Guess the centre.** Needle there, open to one city, swing. Missed? Nudge it and swing again.' },
      { text: '**Change one city** and start over. Three circles, three colours.' },
    ],
  },
  {
    layout: 'statement',
    accent: GREEN,
    eyebrow: 'Hands up — count the room',
    title: 'Did Anybody Fail?',
    label: 'Discuss',
    labelIcon: 'Users',
    text: 'Every team found a circle. Every time.',
    sub: 'So here is the real question, and it is a better one than the one about cities: **was that luck, or was it going to happen whatever three you picked?**',
  },

  // ══ Part 3 · Three points ═════════════════════════════════════════════════
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    side: 'left',
    eyebrow: 'Count the circles as the dots go in',
    title: 'One Dot, Two Dots, Three Dots',
    ratio: 42,
    inlineSvg: DIAGRAMS.HOW_MANY_CIRCLES,
    content: 'Put down **one** dot. Endless circles pass through it — any size, anywhere.\n\nAdd a **second**. Still endless: fat ones and thin ones both reach.\n\nAdd a **third**, and the choice is gone. There is exactly **one** circle left.',
    notes: [
      {
        tone: 'write',
        text: '**Three points determine a circle:** any three points that are not in a straight line lie on **exactly one** circle.',
      },
    ],
  },
  {
    layout: 'statement',
    accent: BLUE,
    eyebrow: 'Compare with last lesson',
    title: 'You Have Met This Shape of Rule',
    label: 'Recall 1.2',
    labelIcon: 'Repeat',
    text: 'Two points determine a **line**. Three points determine a **circle**.',
    sub: 'Both say the same kind of thing: *this many points is exactly enough to leave you no choice.* Fewer and there are endless answers. More and you are probably asking for the impossible.',
  },
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'On paper, in pairs — two minutes',
    title: 'Find the One That Fails',
    label: 'Your turn',
    labelIcon: 'AlertTriangle',
    text: 'There is an arrangement of three points with **no circle through them at all**.',
    sub: 'Find it. Draw three points that you cannot get a circle through however hard you try — then say **in one sentence** what is special about them.',
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'AlertTriangle',
    eyebrow: 'The exception, and the reason for it',
    title: 'Three in a Straight Line',
    ratio: 42,
    inlineSvg: DIAGRAMS.LINE_MEETS_CIRCLE,
    content: 'Draw any circle and lay a ruler across it. The straight edge cuts the circle in **two** places. Slide it, tilt it, do what you like — never three.\n\nSo three points on one straight line cannot all be on one circle. There is no room for the third.',
    notes: [
      {
        tone: 'write',
        text: '**Collinear:** three or more points that lie on one straight line.\n\n**Collinear points have no circle** through them. That is the only exception.',
      },
    ],
    reveal: {
      label: 'Is that on your map too?',
      answer:
        'Yes — and closer than you would think. **Madrid, Paris and Amsterdam** are very nearly in a straight line.\n\nA circle does exist through those three, but it is enormous: its centre is far off the sheet, and the arc across Europe looks straight. The nearer to collinear three places are, the further away the centre runs.',
    },
  },

  // ══ Part 4 · What a circle is, and the compass ════════════════════════════
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Circle',
    side: 'left',
    eyebrow: 'Define it properly before you draw it',
    title: 'What a Circle Actually Is',
    ratio: 45,
    inlineSvg: DIAGRAMS.CIRCLE_DEF,
    drawThis: true,
    content: 'A circle is not "a round shape". Round is not a definition — an egg is round.\n\nA circle is every point that sits **exactly the same distance** from one chosen point. That distance is the only thing you get to choose.',
    notes: [
      {
        tone: 'write',
        text: '**Circle:** all the points a fixed distance from one point.\n**Centre:** that one point. **Radius:** that fixed distance.',
      },
    ],
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Compass',
    eyebrow: 'Why the tool is the definition',
    title: 'The Compass Has No Choice',
    ratio: 42,
    inlineSvg: DIAGRAMS.COMPASS_ANATOMY,
    content: 'A compass is not a gadget for drawing round shapes. It is the definition of a circle, built out of metal.\n\nThe needle holds one point still. The hinge locks the gap. So the pencil **cannot** be any distance except that one — and the only path it can take is a circle.',
    notes: [
      {
        tone: 'write',
        text: 'The compass **setting is the radius**, and the **needle is the centre**.\n\nIf the hinge slips, the radius changed, and what you drew is not a circle.',
      },
    ],
  },
  {
    layout: 'steps',
    accent: TEAL,
    icon: 'Ruler',
    eyebrow: 'Do this one now, on your starter page',
    title: 'Drawing One Properly',
    content: 'Bad circles fail at the setting or the grip, not at the maths.',
    steps: [
      { text: '**Set the radius against a ruler** — on the mark, not near it. Try 4 cm.' },
      { text: '**Plant the needle** and press it in. **Hold the head**, never a leg.' },
      { text: '**Turn the paper**, not the compass, all the way round in one movement.' },
    ],
    reveal: {
      label: 'Check your own circle',
      answer:
        'Mark **five** points anywhere on it and measure each back to the needle hole. All five should read **4 cm**.\n\nIf one reads 4.3, the hinge moved — exactly the failure the definition predicts.',
    },
  },

  // ══ Part 5 · The perpendicular bisector, with no numbers ══════════════════
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Back to the mirrors, for a moment',
    title: 'You Have Built One of These Before',
    label: 'Recall 1.2',
    labelIcon: 'Repeat',
    text: 'You have built a **perpendicular bisector** before — on the mirror.',
    sub: 'That one needed a tape measure and a slope multiplying to −1. Today: **two arcs and a ruler**. No measuring, no arithmetic — and exact rather than careful.',
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'Equal',
    side: 'left',
    eyebrow: 'The idea the construction is built on',
    title: 'The Line of Equal Distance',
    ratio: 45,
    inlineSvg: DIAGRAMS.EQUIDISTANT,
    drawThis: true,
    content: 'Take two points A and B. Some places are nearer to A. Some are nearer to B.\n\nIn between there is a whole **line** of places that are exactly the same distance from both — and that line is the perpendicular bisector.',
    notes: [
      {
        tone: 'write',
        text: '**Perpendicular bisector of AB:** every point that is the same distance from A as from B.\n\nIt cuts AB **in half**, at a **right angle**.',
      },
    ],
  },
  {
    layout: 'steps',
    accent: BLUE,
    icon: 'Compass',
    eyebrow: 'The construction · follow it on your page',
    title: 'Two Arcs and a Ruler',
    content: '> Open the compass **wider than half of AB** — then do not touch it.',
    steps: [
      { text: '**Mark A and B** on your page, about 10 cm apart.' },
      { text: '**Needle on A**, arc above and below. **Needle on B**, same setting, arc above and below.' },
      { text: '**Two crossings** — **P** and **Q**. Join them with a ruler.' },
    ],
  },
  {
    // The construction diagram gets its own slide rather than a 42%-wide column
    // beside the steps: at 1440x900 that version overflowed by 72px, and this is
    // the picture students are copying, so it wants the width anyway.
    layout: 'showcase',
    accent: BLUE,
    icon: 'Compass',
    eyebrow: 'What your page should look like',
    title: 'The Finished Construction',
    inlineSvg: DIAGRAMS.PERP_BISECTOR,
    drawThis: true,
    caption: 'Leave the arcs on the page. They are your working — rubbing them out is rubbing out the proof.',
  },
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'ShieldCheck',
    eyebrow: 'This is the part worth understanding',
    title: 'Why Two Arcs Is Enough',
    content: 'The setting never changed. So P is the **same distance** from A as it is from B — the compass could not have made it anything else. The same is true of Q.\n\nThat gives you **two** points on the line of equal distance. And two points determine a line, which you proved last lesson.',
    notes: [
      {
        tone: 'write',
        badge: 'The whole proof, in one line',
        text: 'Same compass setting → **PA = PB** and **QA = QB** → both are on the equal-distance line → the line **PQ** is that line.',
      },
    ],
  },

  // ══ Part 6 · The payoff ═══════════════════════════════════════════════════
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'Put the two halves together',
    title: 'Where Is the Centre?',
    label: 'Think first',
    labelIcon: 'HelpCircle',
    text: 'The centre of a circle is the **same distance from every point on it**.',
    sub: 'You have three points that must be on the circle. You have a tool that finds every place equally far from **two** points. How do you use it to find a place equally far from **three**?',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Target',
    side: 'left',
    eyebrow: 'The construction, and the answer to the map',
    title: 'Finding the Centre for Three Points',
    ratio: 45,
    inlineSvg: DIAGRAMS.CIRCUMCENTRE,
    drawThis: true,
    content: 'Bisect **AB**, then bisect **BC**.\n\nWhere those two lines **cross** is equally far from all three. Needle there, pencil on A, swing — and it catches B and C on the way round.',
    notes: [
      {
        tone: 'write',
        badge: 'Circle through three points',
        text: '**1.** Perpendicular bisector of **AB**.\n**2.** Perpendicular bisector of **BC**.\n**3.** They cross at the **centre** — radius is centre to any of the three.',
      },
    ],
    reveal: {
      label: 'And what if the three points ARE in a line?',
      answer:
        'Then the two perpendicular bisectors come out **parallel**. Two parallel lines never cross, so there is no centre to find — and no circle exists.\n\nThat is the same exception as before, arriving a second time from a completely different direction. The construction fails in exactly the case the geometry said it must.',
    },
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'MapPin',
    eyebrow: 'Class task · back to your sheet',
    title: 'Now Do One Properly',
    ratio: 55,
    content: 'Choose three of your cities again — the same three if you like — and this time **construct** the circle instead of guessing it.\n\nTwo bisectors, one crossing, one sweep. Then compare it with the circle you drew by eye at the start of the lesson.',
    notes: [
      {
        tone: 'task',
        badge: 'Hand this in',
        text: 'Leave your **arcs on the page**. Rubbing out the construction lines is rubbing out your working.',
      },
    ],
  },
  {
    layout: 'callout',
    accent: RED,
    icon: 'Sparkles',
    eyebrow: 'Read what you wrote at the start of the lesson',
    title: 'So Why Do Cities Sit on Circles?',
    content: 'They don\'t. **Any** three places not in a straight line sit on a circle — three shops, three trees, three of your own dots.\n\nThe map was true, and it was not evidence of anything, because it could not have come out any other way.',
    notes: [
      {
        tone: 'write',
        badge: 'Worth more than the geometry',
        text: 'A pattern that **always** happens tells you **nothing** about the thing you found it in.\n\nBefore a pattern is evidence, ask: could it have come out differently?',
      },
    ],
  },
  {
    layout: 'stack',
    variant: 'checklist',
    accent: GREEN,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you leave',
    title: 'Can You Do All Eight?',
    content: '> Your notebook should now have **10 written items** and **4 labelled drawings**. Check.',
    items: [
      { text: 'Define a **circle** without using the word "round".' },
      { text: 'Name the **centre** and the **radius** on a drawing.' },
      { text: 'Say why a **compass** can only ever draw a circle.' },
      { text: 'State that **three points determine a circle**.' },
      { text: 'Say what **collinear** means, and why those three fail.' },
      { text: 'Construct a **perpendicular bisector** with two arcs.' },
      { text: 'Explain why the two arcs are **enough** to prove it.' },
      { text: 'Construct the **circle through three given points**.' },
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
        badge: 'Compass and ruler only — leave the arcs on the page',
        text:
          '**1.** Draw a **12 cm** segment. Construct its perpendicular bisector; measure both halves.\n' +
          '**2.** Plot $A(1,1)$, $B(7,3)$, $C(3,7)$. Construct their circle; give its centre and radius.\n' +
          '**3.** Try $D(0,2)$, $E(2,3)$, $F(6,5)$. In one sentence, what goes wrong?\n' +
          '**4.** Mark three points whose centre lands **outside** their triangle.',
      },
    ],
  },
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Algebra Track',
    title: 'Lesson Complete!',
    subtitle: 'Two points leave you endless circles; three leave you exactly one, unless they lie in a straight line. Exit question — for two points A and B, there are endless circles through both. Where do all of their centres lie? You already know the answer; say it in three words.',
  },
]
