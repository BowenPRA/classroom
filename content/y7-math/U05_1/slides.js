// content/y7-math/U05_1/slides.js
// Year 7 Mathematics · 5.1 A sum of 360°. Monday 26 October 2026, one period.
// Source: Workbook Unit 5, Section 5.1 (pp. 66–68). Every number used in class
// is original, so the Workbook exercise is still unspent. No homework slide
// (Mr Bowen, 14 Oct). English and French only. Shaped like Coffee, Carbon and
// Stars: a starter, a "Today You Will…" slide that the checklist mirrors,
// write panels that hold only the fact, and an exit question.
//
// WHAT EXERCISE 5.1 NEEDS, AND WHERE IT IS TAUGHT:
//   angles on a straight line = 180°    slides 4–6   (Focus 1, Practice 4)
//   angles round a point = 360°         slides 7–8   (Focus 2, Challenge 8–9)
//   sum, quadrilateral (the key words)  slides 9–10
//   angles in a quadrilateral = 360°    slides 11–14 (Focus 3, Practice 5–6)
//   the question words                  slide 16     (every question)
//   one angle known, the rest equal     slide 17     (Practice 5)
//   parallelogram                       slide 18     (Practice 7)
//   squares and equilateral triangles   slide 19     (Challenge 9)
//
// THE ENGLISH: "sum" sounds like "some" (slide 9); "quad" is four (slide 10);
// the Workbook's instruction words (slide 16).
//
// COPY-DOWN: 6 written panels — straight line · round a point · sum ·
// quadrilateral · quadrilateral 360° · parallelogram.
import { DIAGRAMS } from './diagrams.js'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'
const RED = '#c8102e'

export const slides = [
  // 1. Hero + starter: the four facts from primary school
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Triangle',
    brand: 'Year 7 Mathematics',
    brandFr: 'Maths 7e année',
    eyebrow: 'Unit 5 · 5.1',
    eyebrowFr: 'Unité 5 · 5.1',
    date: '26 Oct 2026',
    title: 'A Sum of 360°',
    titleFr: 'Une somme de 360°',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeFr: 'Pour commencer',
      text: 'How many degrees? Write four numbers: a **right angle**, a **straight line**, a **full turn**, and the three angles of a **triangle**.',
      textFr: 'Combien de degrés ? Écris quatre nombres : un **angle droit**, une **ligne droite**, un **tour complet**, et les trois angles d’un **triangle**.',
    },
  },

  // 2. Today's goals (the checklist on slide 22 ticks off the same three)
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Today',
    eyebrowFr: 'Aujourd’hui',
    title: 'Today You Will…',
    titleFr: 'Aujourd’hui, tu vas…',
    text: 'Find a **missing angle**.',
    textFr: 'Trouver un **angle qui manque**.',
    columns: [
      {
        heading: 'On a line',
        headingFr: 'Sur une ligne',
        accent: TEAL,
        icon: 'Minus',
        inlineSvg: DIAGRAMS.LINE,
        caption: 'Find a missing angle on a line.',
        captionFr: 'Trouver un angle sur une ligne.',
      },
      {
        heading: 'Round a point',
        headingFr: 'Autour d’un point',
        accent: PURPLE,
        icon: 'Circle',
        inlineSvg: DIAGRAMS.POINT,
        caption: 'Find a missing angle round a point.',
        captionFr: 'Trouver un angle autour d’un point.',
      },
      {
        heading: 'In a 4-sided shape',
        headingFr: 'Dans une figure à 4 côtés',
        accent: ORANGE,
        icon: 'Square',
        inlineSvg: DIAGRAMS.WORKED,
        caption: 'Find the last angle of a 4-sided shape.',
        captionFr: 'Trouver le dernier angle à 4 côtés.',
      },
    ],
  },

  // 3. Starter answers
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'CheckCircle2',
    eyebrow: 'Starter check',
    eyebrowFr: 'Correction',
    title: 'Four Numbers',
    titleFr: 'Quatre nombres',
    inlineSvg: DIAGRAMS.FACTS,
    caption: 'Today we use **180°** and **360°** again and again.',
    captionFr: 'Aujourd’hui, on utilise **180°** et **360°** encore et encore.',
  },

  // ── A STRAIGHT LINE ───────────────────────────────────────────────────────
  // 4. Angles on a straight line (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Minus',
    eyebrow: 'Angle fact',
    eyebrowFr: 'Propriété',
    title: 'On a Straight Line',
    titleFr: 'Sur une ligne droite',
    ratio: 45,
    inlineSvg: DIAGRAMS.LINE,
    content: 'Find **a**.',
    contentFr: 'Trouve **a**.',
    notes: [
      {
        tone: 'write',
        text: 'Angles on a **straight line** add up to **180°**.',
        textFr: 'Les angles sur une **ligne droite** font **180°** en tout.',
      },
    ],
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**a = 180° − 130° = 50°**',
      answerFr: '**a = 180° − 130° = 50°**',
    },
  },

  // 5. Vote: is it really straight?
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowFr: 'Vote avec une main',
    title: 'Is It Straight?',
    titleFr: 'Est-ce droit ?',
    text: 'Two angles on the line XY are **57°** and **121°**. Is XY a **straight** line?',
    textFr: 'Deux angles sur la ligne XY font **57°** et **121°**. XY est-elle une ligne **droite** ?',
    columns: [
      { heading: 'A · left hand up', headingFr: 'A · main gauche levée', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_YES },
      { heading: 'B · right hand up', headingFr: 'B · main droite levée', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_NO },
    ],
  },

  // 6. The vote settled
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'Answer: B',
    eyebrowFr: 'Réponse : B',
    title: 'Not Quite Straight',
    titleFr: 'Pas tout à fait droite',
    text: '**57° + 121° = 178°**. Not 180°, so XY is **not** straight.',
    textFr: '**57° + 121° = 178°**. Pas 180°, donc XY n’est **pas** droite.',
    sub: 'It can **look** straight. Always add.',
    subFr: 'Elle peut **sembler** droite. Additionne toujours.',
  },

  // ── ROUND A POINT ─────────────────────────────────────────────────────────
  // 7. Mr Bowen's pizza, photographed and drawn
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Circle',
    eyebrow: 'A full turn',
    eyebrowFr: 'Un tour complet',
    title: 'Mr Bowen’s Pizza',
    titleFr: 'La pizza de M. Bowen',
    inlineSvg: DIAGRAMS.PIZZA,
    caption: 'Eight equal slices meet in the middle. Why **45°**?',
    captionFr: 'Huit parts égales se rejoignent au milieu. Pourquoi **45°** ?',
  },

  // 8. Angles round a point (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Circle',
    eyebrow: 'Angle fact',
    eyebrowFr: 'Propriété',
    title: 'Round a Point',
    titleFr: 'Autour d’un point',
    ratio: 45,
    inlineSvg: DIAGRAMS.POINT,
    content: 'Find **b**.',
    contentFr: 'Trouve **b**.',
    notes: [
      {
        tone: 'write',
        text: 'Angles **around a point** add up to **360°**.',
        textFr: 'Les angles **autour d’un point** font **360°** en tout.',
      },
    ],
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**100° + 120° = 220°**, so **b = 360° − 220° = 140°**',
      answerFr: '**100° + 120° = 220°**, donc **b = 360° − 220° = 140°**',
    },
  },

  // ── KEY WORDS ─────────────────────────────────────────────────────────────
  // 9. Sum (write) — it sounds like "some"
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'MessageSquare',
    eyebrow: 'Key word · English check',
    eyebrowFr: 'Mot clé · point d’anglais',
    title: 'Sum',
    titleFr: 'La somme',
    ratio: 45,
    inlineSvg: DIAGRAMS.SUM_SOME,
    notes: [
      {
        tone: 'write',
        text: '**Sum:** the total when you add numbers together.',
        textFr: '**Somme (sum) :** le total quand on additionne des nombres.',
      },
      {
        tone: 'info',
        badge: false,
        text: '**A sum of 360°** means they **add up to** 360°.',
        textFr: '**A sum of 360°** veut dire qu’ils **font 360° en tout**.',
      },
    ],
  },

  // 10. Quadrilateral (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Square',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'Quadrilateral',
    titleFr: 'Le quadrilatère',
    ratio: 45,
    inlineSvg: DIAGRAMS.QUADS,
    content: '**quad** = 4 · **lateral** = side',
    contentFr: '**quad** = 4 · **lateral** = côté',
    notes: [
      {
        tone: 'write',
        text: '**Quadrilateral:** a flat shape with **four** straight sides.',
        textFr: '**Quadrilatère (quadrilateral) :** une figure plane à **quatre** côtés droits.',
      },
    ],
  },

  // ── ANGLES IN A QUADRILATERAL ─────────────────────────────────────────────
  // 11. Vote: every quadrilateral, or only some?
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowFr: 'Vote avec une main',
    title: 'Every Quadrilateral?',
    titleFr: 'Tous les quadrilatères ?',
    text: 'A square’s four angles add up to **360°**. Is that true for **every** quadrilateral?',
    textFr: 'Les quatre angles d’un carré font **360°**. Est-ce vrai pour **tous** les quadrilatères ?',
    columns: [
      { heading: 'A · left hand up', headingFr: 'A · main gauche levée', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_SOME },
      { heading: 'B · right hand up', headingFr: 'B · main droite levée', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_ALL },
    ],
  },

  // 12. Hands-on: tear off the corners
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Try it · paper',
    eyebrowFr: 'Essaie · papier',
    title: 'Tear Off the Corners',
    titleFr: 'Déchire les coins',
    inlineSvg: DIAGRAMS.CORNERS,
    caption: 'Draw **any** quadrilateral. Tear off the 4 corners. Put the points together.',
    captionFr: 'Dessine **n’importe quel** quadrilatère. Déchire les 4 coins. Mets les pointes ensemble.',
  },

  // 13. Angles in a quadrilateral (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Square',
    eyebrow: 'Answer: B · angle fact',
    eyebrowFr: 'Réponse : B · propriété',
    title: 'A Sum of 360°',
    titleFr: 'Une somme de 360°',
    ratio: 45,
    inlineSvg: DIAGRAMS.QUAD_TRI,
    content: 'The corners made a **full turn**. And one line makes **two triangles**.',
    contentFr: 'Les coins ont fait un **tour complet**. Et une ligne fait **deux triangles**.',
    notes: [
      {
        tone: 'write',
        text: 'The angles in a **quadrilateral** add up to **360°**.',
        textFr: 'Les angles d’un **quadrilatère** font **360°** en tout.',
      },
    ],
  },

  // 14. Worked example, said before it is shown
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Target',
    eyebrow: 'Say each step first',
    eyebrowFr: 'Dis chaque étape avant',
    title: 'Find the Fourth Angle',
    titleFr: 'Trouve le quatrième angle',
    ratio: 45,
    inlineSvg: DIAGRAMS.WORKED,
    content: 'Three angles of a quadrilateral are **70°**, **95°** and **120°**. Find **d**.',
    contentFr: 'Trois angles d’un quadrilatère font **70°**, **95°** et **120°**. Trouve **d**.',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: 'The sum is **360°**.\n**70° + 95° + 120° = 285°**\n**d = 360° − 285° = 75°**',
      answerFr: 'La somme fait **360°**.\n**70° + 95° + 120° = 285°**\n**d = 360° − 285° = 75°**',
    },
  },

  // 15. Whiteboards: one of each
  {
    layout: 'split',
    accent: GREEN,
    icon: 'CheckCircle2',
    eyebrow: 'Whiteboards',
    eyebrowFr: 'Ardoises',
    title: 'One of Each',
    titleFr: 'Un de chaque',
    ratio: 40,
    inlineSvg: DIAGRAMS.PRACTICE,
    content: 'Find **x**, **y** and **z**.\n\nWhich fact did you use? **180°** or **360°**?',
    contentFr: 'Trouve **x**, **y** et **z**.\n\nQuelle propriété ? **180°** ou **360°** ?',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**1** **x = 35°** (180°), **2** **y = 125°** (360°), **3** **z = 75°** (360°)',
      answerFr: '**1** **x = 35°** (180°), **2** **y = 125°** (360°), **3** **z = 75°** (360°)',
    },
  },

  // 16. The Workbook's question words
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'English check',
    eyebrowFr: 'Point d’anglais',
    title: 'Read the Question',
    titleFr: 'Lis la question',
    inlineSvg: DIAGRAMS.PHRASES,
    caption: '**Calculate** and **work out** both mean **find**.',
    captionFr: '**Calculate** et **work out** veulent dire **trouve** (calcule).',
  },

  // 17. One angle known, the other three equal
  {
    layout: 'statement',
    accent: GREEN,
    eyebrow: 'Whiteboards',
    eyebrowFr: 'Ardoises',
    title: 'Three the Same',
    titleFr: 'Trois pareils',
    text: 'One angle of a quadrilateral is **150°**. The other three angles are **the same size**.',
    textFr: 'Un angle d’un quadrilatère fait **150°**. Les trois autres angles sont **égaux**.',
    sub: 'Work out the size of the other angles.',
    subFr: 'Calcule la taille des autres angles.',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**360° − 150° = 210°**, and **210° ÷ 3 = 70°** each',
      answerFr: '**360° − 150° = 210°**, et **210° ÷ 3 = 70°** chacun',
    },
  },

  // 18. Parallelogram (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Square',
    eyebrow: 'Angle fact',
    eyebrowFr: 'Propriété',
    title: 'Parallelogram',
    titleFr: 'Le parallélogramme',
    ratio: 45,
    inlineSvg: DIAGRAMS.PARA,
    content: 'One angle is **65°**. Find **p**, **q** and **r**.',
    contentFr: 'Un angle fait **65°**. Trouve **p**, **q** et **r**.',
    notes: [
      {
        tone: 'write',
        text: 'In a **parallelogram**, opposite angles are **equal**.',
        textFr: 'Dans un **parallélogramme**, les angles opposés sont **égaux**.',
      },
    ],
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**q = 65°**. **360° − 65° − 65° = 230°**, so **p = r = 115°**',
      answerFr: '**q = 65°**. **360° − 65° − 65° = 230°**, donc **p = r = 115°**',
    },
  },

  // 19. Challenge: squares and an equilateral triangle round a point
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Trophy',
    eyebrow: 'Challenge',
    eyebrowFr: 'Défi',
    title: 'Shapes Round a Point',
    titleFr: 'Des figures autour d’un point',
    ratio: 45,
    inlineSvg: DIAGRAMS.TILES,
    content: 'Two squares and an equilateral triangle meet at a point. Find **y**.',
    contentFr: 'Deux carrés et un triangle équilatéral se rejoignent en un point. Trouve **y**.',
    notes: [
      {
        tone: 'info',
        badge: false,
        text: 'Every angle in an **equilateral** triangle is **60°**.',
        textFr: 'Chaque angle d’un triangle **équilatéral** fait **60°**.',
      },
    ],
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**y = 360° − 90° − 90° − 60° = 120°**',
      answerFr: '**y = 360° − 90° − 90° − 60° = 120°**',
    },
  },

  // ── WORD PROBLEMS (deadpan) ───────────────────────────────────────────────
  // 20. Mr Bowen's chair
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'RotateCcw',
    eyebrow: 'Word problem',
    eyebrowFr: 'Problème',
    title: 'Mr Bowen’s Chair',
    titleFr: 'La chaise de M. Bowen',
    content:
      'Mr Bowen sits on his chair, facing the board.\n\n' +
      'He spins round **2½ times**. How many degrees does he turn? What is he facing now?',
    contentFr:
      'M. Bowen est assis sur sa chaise, face au tableau.\n\n' +
      'Il tourne **2 fois et demie**. De combien de degrés tourne-t-il ? Que regarde-t-il maintenant ?',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**2.5 × 360° = 900°**. He is facing the **back** of the room. The lesson is behind him.',
      answerFr: '**2.5 × 360° = 900°**. Il regarde le **fond** de la classe. La leçon est derrière lui.',
    },
  },

  // 21. Mr Bowen's garden
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'Home',
    eyebrow: 'Word problem',
    eyebrowFr: 'Problème',
    title: 'Mr Bowen’s Garden',
    titleFr: 'Le jardin de M. Bowen',
    content:
      'Mr Bowen’s garden is a quadrilateral. Three of its corners are **90°**.\n\n' +
      'His cat sleeps in the fourth corner. What size is the cat’s corner?',
    contentFr:
      'Le jardin de M. Bowen est un quadrilatère. Trois de ses coins font **90°**.\n\n' +
      'Son chat dort dans le quatrième coin. Quelle est la taille du coin du chat ?',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**360° − 90° − 90° − 90° = 90°**. The cat does not change the angle.',
      answerFr: '**360° − 90° − 90° − 90° = 90°**. Le chat ne change pas l’angle.',
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
    eyebrowFr: 'Avant de partir',
    title: 'Can You Do These?',
    titleFr: 'Sais-tu faire ceci ?',
    content: '> Check your notebook: **6 written panels**.',
    contentFr: '> Vérifie ton cahier : **6 encadrés recopiés**.',
    items: [
      { text: 'Find a missing angle on a **straight line** (180°).', textFr: 'Trouver un angle sur une **ligne droite** (180°).' },
      { text: 'Find a missing angle **around a point** (360°).', textFr: 'Trouver un angle **autour d’un point** (360°).' },
      { text: 'Find the fourth angle of a **quadrilateral** (360°).', textFr: 'Trouver le quatrième angle d’un **quadrilatère** (360°).' },
      { text: 'Say what **sum** means, and read **calculate** and **work out**.', textFr: 'Dire ce que veut dire **sum**, et lire **calculate** et **work out**.' },
    ],
  },

  // 23. Exit
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Target',
    brand: 'Year 7 Mathematics',
    brandFr: 'Maths 7e année',
    eyebrow: 'Exit question',
    eyebrowFr: 'Question de sortie',
    title: 'The Fourth Angle',
    titleFr: 'Le quatrième angle',
    subtitle: 'Three angles of a quadrilateral are **85°**, **100°** and **110°**. Work out the fourth angle.',
    subtitleFr: 'Trois angles d’un quadrilatère font **85°**, **100°** et **110°**. Calcule le quatrième angle.',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '**85° + 100° + 110° = 295°**\n**360° − 295° = 65°**',
      answerFr: '**85° + 100° + 110° = 295°**\n**360° − 295° = 65°**',
    },
  },
]
