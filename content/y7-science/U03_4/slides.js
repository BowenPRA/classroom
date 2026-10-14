// content/y7-science/U03_4/slides.js
// Year 7 Science · 3.4 Tides. Wednesday 21 October 2026 (provisional), and the
// next science lesson after the Thursday lab (Friday 23 October, provisional).
// Source: Learner's Book pages 97–104 (Unit 3 Forces and energy).
//
// ENGLISH AND FRENCH ONLY (meta.vietnamese: false): every string has an …Fr
// twin and no …Vn twin. The diagrams stay in English, as always.
//
// TWO PERIODS, ONE DECK. Eight book pages, and the book's own Activity (cut out
// a Sun, an Earth, a Moon and two sets of card "ocean" crescents, then turn
// them) is a real hands-on model that needs half a period by itself.
//   Part 1 (slides 1–17)  what a tide is, tidal range, and why there are two
//                         high tides a day. Ends on its own exit slide.
//   Part 2 (slides 18–37) the Activity, the Moon moving on, the Sun and the
//                         Moon's phases, the effects of tides, and the three
//                         scientists of "Think like a scientist".
//
// THE SCIENCE IS THE BOOK'S, AT THE BOOK'S LEVEL (p.99). The Moon's gravity
// pulls the water more easily than the land; the pull is the tidal force; the
// side nearest the Moon AND the side furthest away have high tide; the Earth
// spins in 24 hours, so high tides are about 12 hours apart; the Sun's tidal
// force is weaker; Sun, Moon and Earth in line (new moon, full moon) give a
// bigger tidal range. The book does not explain WHY the far side bulges, and
// neither does the deck — the honest one-line answer is in plan.js for the
// teacher, if a student asks.
//
// REAL DATA, NOT INVENTED NUMBERS. The day graph (slide 5), the range (6), the
// week of high tides (22) and the month of ranges (27) are NOAA predictions for
// Eastport, at the mouth of the Bay of Fundy, for the very weeks of the lesson.
// The month shows exactly two peaks: after the full moon (26 Oct) and at the
// new moon (9 Nov).
//
// THE MOVES, CHOSEN FOR THIS SECTION (not 3.1's order): spot the difference in
// a photo pair → key words → a time-lapse loop → read a real tide graph → a
// guess, then 16.3 m → a left/right-hand vote on the book's Question 6 (the
// half-range trap) → Draw This → stand up and turn (you are a harbour) → the
// one motion widget → in Part 2, the book's card model in groups → a week of
// real high tides (how much later?) → a vote on new moon or full moon → a real
// month graph → Ho Chi Minh City's high-tide floods → the scientists, ending
// on planning a test of Kepler's magnetic idea.
//
// COPY-DOWN, ON A BUDGET: 8 short write panels and 2 drawings — 4 and 1 in each
// part. Slides 3, 6, 13 (drawing), 16; 26 (drawing), 30, 31, 34.
//
// WRITING RULE (the 2.5 density): short sentences, one idea each, and the body
// text never repeats the write note, a label or the caption.

import { DIAGRAMS } from './diagrams.js'
import { CausewayClip, TideTurn } from './widgets.jsx'
import earthMoon from './images/earthmoon.jpg'
import saigonFlood from './images/saigonflood.jpg'
import kepler from './images/kepler.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'

export const slides = [
  // ════════════════════════════════════════════════════════════════════════
  // PART 1 — what a tide is, and why there are two a day
  // ════════════════════════════════════════════════════════════════════════

  // 1. Hero + the book's Getting Started
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Waves',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    date: '21 Oct 2026',
    eyebrow: '3.4 · Forces and energy',
    eyebrowFr: '3.4 · Forces et énergie',
    title: 'Tides',
    titleFr: 'Les marées',
    card: {
      icon: 'Pencil',
      badge: 'Starter · with a partner',
      badgeFr: 'Pour commencer · avec ton voisin',
      text: '**1** Which object has the strongest gravity in the Solar System? **2** What large object orbits the Earth? **3** What force keeps it in its orbit?',
      textFr: '**1** Quel objet a la gravité la plus forte du Système solaire ? **2** Quel gros objet tourne autour de la Terre ? **3** Quelle force le garde sur son orbite ?',
    },
  },

  // ── WHAT ARE TIDES? ─────────────────────────────────────────────────────
  // 2. The photo pair, before the word "tide"
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'ScanEye',
    eyebrow: 'Spot the difference',
    eyebrowFr: 'Trouve la différence',
    title: 'Same Place, Six Hours Apart',
    titleFr: 'Même endroit, six heures plus tard',
    inlineSvg: DIAGRAMS.PAIR,
    caption: 'A harbour in Canada. What changed? Tell your partner.',
    captionFr: 'Un port au Canada. Qu’est-ce qui a changé ? Dis-le à ton voisin.',
  },

  // 3. Depth and tide (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Waves',
    eyebrow: 'Key words',
    eyebrowFr: 'Mots clés',
    title: 'Depth and Tide',
    titleFr: 'La profondeur et la marée',
    ratio: 45,
    inlineSvg: DIAGRAMS.DEPTH,
    content: '**deep** → **depth**, like **strong** → **strength**.',
    contentFr: '**deep** (profond) → **depth** (la profondeur), comme **strong** → **strength**.',
    notes: [
      {
        tone: 'write',
        text: '**Depth:** the distance from the surface of the water to the bottom.\n**Tide:** the change in the depth of the sea during the day.',
        textFr: '**Profondeur (depth) :** la distance entre la surface de l’eau et le fond.\n**Marée (tide) :** le changement de profondeur de la mer pendant la journée.',
      },
    ],
  },

  // 4. The road under the sea: a silent time-lapse loop
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Clapperboard',
    eyebrow: 'Holy Island, England · time-lapse',
    eyebrowFr: 'Holy Island, Angleterre · accéléré',
    title: 'The Road Under the Sea',
    titleFr: 'La route sous la mer',
    widget: CausewayClip,
    caption: 'Twice a day, the tide covers the road to the island.',
    captionFr: 'Deux fois par jour, la marée recouvre la route de l’île.',
  },

  // 5. A real day of tides: read the graph
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'TrendingUp',
    eyebrow: 'Read the graph',
    eyebrowFr: 'Lis le graphique',
    title: 'A Day of Tides',
    titleFr: 'Une journée de marées',
    ratio: 40,
    inlineSvg: DIAGRAMS.DAY,
    content: 'Find the two **high tides**. How many hours apart are they?\n\nAnd from high tide to **low tide**?',
    contentFr: 'Trouve les deux **marées hautes** (high tides). Combien d’heures entre elles ?\n\nEt de la marée haute à la **marée basse** (low tide) ?',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '07:37 → 19:58: about **12 hours**.\nHigh tide → low tide: about **6 hours**.',
      answerFr: '07:37 → 19:58 : environ **12 heures**.\nMarée haute → marée basse : environ **6 heures**.',
    },
  },

  // 6. Tidal range (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Ruler',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'Tidal Range',
    titleFr: 'Le marnage',
    ratio: 40,
    inlineSvg: DIAGRAMS.RANGE,
    content: 'Like the **range** in maths: highest − lowest.',
    contentFr: 'Comme l’étendue (**range**) en maths : le plus haut − le plus bas.',
    notes: [
      {
        tone: 'write',
        text: '**Tidal range:** the difference in depth between high tide and low tide.',
        textFr: '**Marnage (tidal range) :** la différence de profondeur entre la marée haute et la marée basse.',
      },
    ],
  },

  // 7. Guess first
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Guess first',
    eyebrowFr: 'Devine d’abord',
    title: 'The Biggest Tides?',
    titleFr: 'Les plus grandes marées ?',
    text: 'The biggest tidal range in the world: how big is it?',
    textFr: 'Le plus grand marnage du monde : combien mesure-t-il ?',
    sub: 'Write your guess in metres.',
    subFr: 'Écris ton estimation en mètres.',
  },

  // 8. The Bay of Fundy
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Waves',
    eyebrow: 'Bay of Fundy, Canada',
    eyebrowFr: 'Baie de Fundy, Canada',
    title: '16.3 Metres!',
    titleFr: '16.3 mètres !',
    inlineSvg: DIAGRAMS.FUNDY,
    caption: 'The biggest tidal range in the world. In the Mediterranean and the Caribbean: less than **1 m**.',
    captionFr: 'Le plus grand marnage du monde. En Méditerranée et dans les Caraïbes : moins de **1 m**.',
  },

  // 9. Question 6 as a vote: no answer on the slide
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Question 6 · vote with one hand',
    eyebrowFr: 'Question 6 · vote avec une main',
    title: 'Maximum Depth?',
    titleFr: 'Profondeur maximale ?',
    text: 'Average depth **5.0 m**. Tidal range **2.0 m**. Maximum depth?',
    textFr: 'Profondeur moyenne **5.0 m**. Marnage **2.0 m**. Profondeur maximale ?',
    columns: [
      {
        heading: 'A · left hand up',
        headingFr: 'A · main gauche levée',
        accent: BLUE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_7M,
      },
      {
        heading: 'B · right hand up',
        headingFr: 'B · main droite levée',
        accent: ORANGE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_6M,
      },
    ],
  },

  // 10. Question 6 answered
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Lightbulb',
    eyebrow: 'Question 6 · the answer',
    eyebrowFr: 'Question 6 · la réponse',
    title: 'Half Above, Half Below',
    titleFr: 'Moitié au-dessus, moitié en dessous',
    ratio: 45,
    inlineSvg: DIAGRAMS.HALF,
    content: '**B: 6.0 m.**\n\nThe **average** is in the middle. Half the range is above it, half is below.\n\n5.0 + 1.0 = **6.0 m**',
    contentFr: '**B : 6.0 m.**\n\nLa **moyenne** (average) est au milieu. La moitié du marnage est au-dessus, la moitié en dessous.\n\n5.0 + 1.0 = **6.0 m**',
  },

  // ── WHAT CAUSES TIDES? ──────────────────────────────────────────────────
  // 11. Question first
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Think',
    eyebrowFr: 'Réfléchis',
    title: 'What Pulls the Sea?',
    titleFr: 'Qu’est-ce qui tire la mer ?',
    text: 'Twice a day, the sea rises and falls.',
    textFr: 'Deux fois par jour, la mer monte et descend.',
    sub: 'Something **pulls** the water. What?',
    subFr: 'Quelque chose **tire** l’eau. Quoi ?',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '**The Moon.** Its gravity pulls on the Earth.',
      answerFr: '**La Lune.** Sa gravité attire la Terre.',
    },
  },

  // 12. The Moon pulls the oceans most
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Globe',
    eyebrow: 'Why tides happen',
    eyebrowFr: 'Pourquoi il y a des marées',
    title: 'The Moon Pulls',
    titleFr: 'La Lune attire',
    ratio: 40,
    image: earthMoon,
    content: 'The Moon’s gravity pulls on the whole Earth.\n\nWater is easier to pull than land. So the **oceans** move.',
    contentFr: 'La gravité de la Lune attire toute la Terre.\n\nL’eau est plus facile à tirer que les terres. Donc ce sont les **océans** qui bougent.',
  },

  // 13. Draw This: the book's figure (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw this · page 99',
    eyebrowFr: 'À dessiner · page 99',
    title: 'Two High Tides',
    titleFr: 'Deux marées hautes',
    ratio: 40,
    inlineSvg: DIAGRAMS.TWO_TIDES,
    drawThis: true,
    notes: [
      {
        tone: 'write',
        text: '**Tidal force:** the pull of the Moon’s gravity that causes tides.\nHigh tide: on the side **nearest** the Moon, and on the side **furthest** away.',
        textFr: '**Force de marée (tidal force) :** l’attraction de la gravité de la Lune, qui cause les marées.\nMarée haute : du côté **le plus proche** de la Lune, et du côté **le plus éloigné**.',
      },
    ],
  },

  // 14. Act it out
  {
    layout: 'statement',
    accent: GREEN,
    eyebrow: 'Stand up',
    eyebrowFr: 'Lève-toi',
    title: 'You Are a Harbour',
    titleFr: 'Tu es un port',
    text: 'The board is the **Moon**. Your nose is a harbour on the Earth.',
    textFr: 'Le tableau est la **Lune**. Ton nez est un port sur la Terre.',
    sub: 'Turn slowly to your left: one turn is one day. Say **high** or **low** as you turn.',
    subFr: 'Tourne lentement vers la gauche : un tour = un jour. Dis **high** ou **low** en tournant.',
    reveal: {
      label: 'How many?',
      labelFr: 'Combien ?',
      answer: 'In one turn: **2 high tides** and **2 low tides**.',
      answerFr: 'En un tour : **2 marées hautes** et **2 marées basses**.',
    },
  },

  // 15. The motion: the Earth turns under the two bulges
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Timer',
    eyebrow: 'One turn = 24 hours',
    eyebrowFr: 'Un tour = 24 heures',
    title: 'The Earth Turns',
    titleFr: 'La Terre tourne',
    widget: TideTurn,
    caption: 'Say **high** or **low** before each press.',
    captionFr: 'Dis **high** ou **low** avant chaque appui.',
  },

  // 16. Twice a day (write)
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Why twice a day?',
    eyebrowFr: 'Pourquoi deux fois par jour ?',
    title: 'Twice a Day',
    titleFr: 'Deux fois par jour',
    notes: [
      {
        tone: 'write',
        text: 'The Earth spins once every **24 hours**.\nSo there are **2 high tides** and **2 low tides** a day.\nHigh tides are about **12 hours** apart. High tide to low tide: about **6 hours**.',
        textFr: 'La Terre fait un tour sur elle-même en **24 heures**.\nDonc il y a **2 marées hautes** et **2 marées basses** par jour.\nLes marées hautes sont à environ **12 heures** d’écart. De la marée haute à la marée basse : environ **6 heures**.',
      },
    ],
  },

  // 17. End of Part 1
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    title: 'End of Part 1',
    titleFr: 'Fin de la partie 1',
    subtitle: 'Exit: **1** What is the pull that causes tides called? **2** High tide is at **08:00**. When is the next **low tide**? The next **high tide**?',
    subtitleFr: 'Sortie : **1** Comment s’appelle l’attraction qui cause les marées ? **2** Marée haute à **08:00**. À quelle heure la marée basse suivante ? La marée haute suivante ?',
  },

  // ════════════════════════════════════════════════════════════════════════
  // PART 2 — the model, the Sun, and why tides matter
  // ════════════════════════════════════════════════════════════════════════

  // 18. Hero + the book's Question 1, voted with fingers (answered on 26)
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Sun',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    date: '23 Oct 2026',
    eyebrow: '3.4 · Part 2',
    eyebrowFr: '3.4 · Partie 2',
    title: 'The Moon and the Sun',
    titleFr: 'La Lune et le Soleil',
    card: {
      icon: 'Hand',
      badge: 'Starter · Question 1 · hold up fingers',
      badgeFr: 'Pour commencer · Question 1 · lève tes doigts',
      text: 'What causes the gravity for tides? **1** the Sun only **2** the Moon only **3** the Sun and Moon **4** the Sun, Moon and other stars',
      textFr: 'Qu’est-ce qui cause la gravité des marées ? **1** le Soleil seul **2** la Lune seule **3** le Soleil et la Lune **4** le Soleil, la Lune et d’autres étoiles',
    },
  },

  // ── THE BOOK'S ACTIVITY, IN GROUPS ──────────────────────────────────────
  // 19. Make the model
  {
    layout: 'steps',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'Activity · page 101 · groups of 4',
    eyebrowFr: 'Activité · page 101 · groupes de 4',
    title: 'Investigating Tides',
    titleFr: 'Étudier les marées',
    inlineSvg: DIAGRAMS.PIECES,
    content: 'Take care with scissors.',
    contentFr: 'Attention avec les ciseaux.',
    steps: [
      {
        text: 'Draw around round things. Cut out a **small**, a **medium** and a **large** circle: **Moon**, **Earth**, **Sun**.',
        textFr: 'Trace autour d’objets ronds. Découpe un **petit**, un **moyen** et un **grand** cercle : **Lune**, **Terre**, **Soleil**.',
      },
      {
        text: 'Cut two **thin** crescents that fit around your Earth: **set 1**.',
        textFr: 'Découpe deux croissants **fins** qui entourent ta Terre : le **set 1**.',
      },
      {
        text: 'Cut two **thick** crescents: **set 2**. The crescents show the **depth** of the ocean.',
        textFr: 'Découpe deux croissants **épais** : le **set 2**. Les croissants montrent la **profondeur** de l’océan.',
      },
    ],
  },

  // 20. Activity Part 1 + its Question 1
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'Activity · Part 1',
    eyebrowFr: 'Activité · partie 1',
    title: 'Why Tides Happen',
    titleFr: 'Pourquoi il y a des marées',
    ratio: 40,
    inlineSvg: DIAGRAMS.SETUP,
    content: 'Put the Earth and the Moon about **30 cm** apart. Put **set 1** around the Earth.',
    contentFr: 'Place la Terre et la Lune à environ **30 cm** l’une de l’autre. Place le **set 1** autour de la Terre.',
    reveal: {
      prompt: 'Question 1: why are the deepest parts in line with the Moon?',
      promptFr: 'Question 1 : pourquoi les parties les plus profondes sont-elles alignées avec la Lune ?',
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: 'The Moon’s gravity pulls the water along that line: the **tidal force**.',
      answerFr: 'La gravité de la Lune tire l’eau sur cette ligne : c’est la **force de marée**.',
    },
  },

  // 21. Activity Part 2 + Questions 2–4
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'RotateCcw',
    eyebrow: 'Activity · Part 2',
    eyebrowFr: 'Activité · partie 2',
    title: 'Times of the Tides',
    titleFr: 'Les heures des marées',
    ratio: 40,
    inlineSvg: DIAGRAMS.TURN,
    content: 'Mark a point on the coast. Turn **only the Earth**, slowly, **anticlockwise**. One turn = 24 hours.',
    contentFr: 'Marque un point sur la côte. Tourne **seulement la Terre**, lentement, dans le sens **anticlockwise** (inverse des aiguilles d’une montre). Un tour = 24 heures.',
    reveal: {
      prompt: 'Questions 2–4: how many high tides in one turn? How many low tides? So how far apart are the high tides?',
      promptFr: 'Questions 2–4 : combien de marées hautes en un tour ? Combien de marées basses ? Donc quel écart entre les marées hautes ?',
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**2** Two. **3** Two. **4** 24 ÷ 2 = **12 hours**, for high tides and for low tides.',
      answerFr: '**2** Deux. **3** Deux. **4** 24 ÷ 2 = **12 heures**, pour les marées hautes comme pour les basses.',
    },
  },

  // 22. Question 5, with a real week of high tides
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Timer',
    eyebrow: 'Question 5 · real tides',
    eyebrowFr: 'Question 5 · vraies marées',
    title: 'Same Time Tomorrow?',
    titleFr: 'À la même heure demain ?',
    ratio: 45,
    inlineSvg: DIAGRAMS.HIGH_TIMES,
    content: 'The Moon moves too: it orbits the Earth.\n\nIs high tide at the **same time** every day? How much **later** is it?',
    contentFr: 'La Lune bouge aussi : elle tourne autour de la Terre.\n\nLa marée haute est-elle à la **même heure** chaque jour ? Combien **plus tard** ?',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: 'No: about **50 minutes later** each day (57, 54, 49, 45).\nThe Moon moves on, so the Earth turns a little more to face it.',
      answerFr: 'Non : environ **50 minutes plus tard** chaque jour (57, 54, 49, 45).\nLa Lune avance, donc la Terre tourne un peu plus pour lui faire face.',
    },
  },

  // 23. Activity Part 3 + Question 6
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Sun',
    eyebrow: 'Activity · Part 3',
    eyebrowFr: 'Activité · partie 3',
    title: 'Add the Sun',
    titleFr: 'Ajoute le Soleil',
    ratio: 40,
    inlineSvg: DIAGRAMS.LINE_UP,
    content: 'Change to **set 2**. Put the Earth, the Moon and the Sun in a line.',
    contentFr: 'Prends le **set 2**. Aligne la Terre, la Lune et le Soleil.',
    reveal: {
      prompt: 'Question 6: why is set 2 better now?',
      promptFr: 'Question 6 : pourquoi le set 2 est-il mieux maintenant ?',
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: 'The Sun pulls too. Sun and Moon together make a **bigger tidal force**: higher high tides, lower low tides.',
      answerFr: 'Le Soleil attire aussi. Ensemble, le Soleil et la Lune font une **force de marée plus grande** : marées hautes plus hautes, marées basses plus basses.',
    },
  },

  // ── THE MOON'S PHASES ───────────────────────────────────────────────────
  // 24. Question 7 as a vote
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Question 7 · vote with one hand',
    eyebrowFr: 'Question 7 · vote avec une main',
    title: 'Which Moon Do We See?',
    titleFr: 'Quelle Lune voit-on ?',
    text: 'The Moon is **between** the Earth and the Sun. What do we see?',
    textFr: 'La Lune est **entre** la Terre et le Soleil. Que voit-on ?',
    columns: [
      {
        heading: 'A · left hand up',
        headingFr: 'A · main gauche levée',
        accent: BLUE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_FULL,
      },
      {
        heading: 'B · right hand up',
        headingFr: 'B · main droite levée',
        accent: ORANGE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_NEW,
      },
    ],
  },

  // 25. Questions 7 and 8 answered
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Lightbulb',
    eyebrow: 'Questions 7 and 8',
    eyebrowFr: 'Questions 7 et 8',
    title: 'New Moon, Full Moon',
    titleFr: 'Nouvelle lune, pleine lune',
    ratio: 40,
    inlineSvg: DIAGRAMS.PHASES,
    content: '**B: a new moon.** Its lit side faces the Sun, away from us.\n\nMove the Moon **behind** the Earth: now we see the lit side. A **full moon**.',
    contentFr: '**B : une nouvelle lune (new moon).** Sa face éclairée regarde le Soleil, pas nous.\n\nPlace la Lune **derrière** la Terre : on voit la face éclairée. Une **pleine lune (full moon)**.',
  },

  // 26. Draw This: in line (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw this · page 99',
    eyebrowFr: 'À dessiner · page 99',
    title: 'The Sun Helps',
    titleFr: 'Le Soleil aide',
    ratio: 40,
    inlineSvg: DIAGRAMS.IN_LINE,
    drawThis: true,
    content: 'Starter answer: **3**, the Sun **and** the Moon.',
    contentFr: 'Réponse du départ : **3**, le Soleil **et** la Lune.',
    notes: [
      {
        tone: 'write',
        text: 'The Sun makes a tidal force too. It is **weaker**: the Sun is further away.\nSun, Moon and Earth **in line** (new moon or full moon): a **bigger tidal range**.',
        textFr: 'Le Soleil crée aussi une force de marée. Elle est plus **faible** : le Soleil est plus loin.\nSoleil, Lune et Terre **alignés** (nouvelle lune ou pleine lune) : un **marnage plus grand**.',
      },
    ],
  },

  // 27. Questions 9a and 9b: a real month
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'TrendingUp',
    eyebrow: 'Question 9 · read the graph',
    eyebrowFr: 'Question 9 · lis le graphique',
    title: 'A Month of Tides',
    titleFr: 'Un mois de marées',
    inlineSvg: DIAGRAMS.MONTH,
    caption: 'When is the tidal range biggest? How many times in one lunar month (29 days)?',
    captionFr: 'Quand le marnage est-il le plus grand ? Combien de fois par mois lunaire (29 jours) ?',
  },

  // 28. The answer, and Vietnam
  {
    layout: 'split',
    accent: TEAL,
    icon: 'MapPin',
    eyebrow: 'Question 9 · and in Vietnam',
    eyebrowFr: 'Question 9 · et au Vietnam',
    title: 'Twice a Month',
    titleFr: 'Deux fois par mois',
    ratio: 45,
    image: saigonFlood,
    content: 'The biggest tides come near the **full moon** and the **new moon**: **twice** a lunar month.\n\nIn Ho Chi Minh City, high tides flood streets most around the **1st** and the **15th** of the lunar month. Strong wind or rain makes it worse.',
    contentFr: 'Les plus grandes marées arrivent près de la **pleine lune** et de la **nouvelle lune** : **deux fois** par mois lunaire.\n\nÀ Hô-Chi-Minh-Ville, les marées hautes inondent les rues surtout vers le **1er** et le **15** du mois lunaire. Le vent fort ou la pluie aggravent tout.',
  },

  // ── EFFECTS OF TIDES ────────────────────────────────────────────────────
  // 29. What tides do
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Waves',
    eyebrow: 'Effects of tides · page 100',
    eyebrowFr: 'Les effets des marées · page 100',
    title: 'What Tides Do',
    titleFr: 'Ce que font les marées',
    inlineSvg: DIAGRAMS.EFFECTS,
    caption: 'Fish follow the tides to find food. Fast tides are **dangerous** for small boats.',
    captionFr: 'Les poissons suivent les marées pour trouver à manger. Les marées rapides sont **dangereuses** pour les petits bateaux.',
  },

  // 30. Question 4 + harbour and coastal (write)
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Question 4 · whiteboards',
    eyebrowFr: 'Question 4 · ardoises',
    title: 'Harbours and Coasts',
    titleFr: 'Ports et côtes',
    content: 'Explain why some **harbours** cannot be used at low tide.',
    contentFr: 'Explique pourquoi certains **ports** (harbours) ne peuvent pas servir à marée basse.',
    notes: [
      {
        tone: 'write',
        text: '**Harbour:** a place where boats and ships load and unload.\n**Coastal:** close to the sea.',
        textFr: '**Port (harbour) :** un endroit où les bateaux chargent et déchargent.\n**Côtier (coastal) :** près de la mer.',
      },
    ],
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: 'The water is not **deep** enough: boats would hit the bottom.',
      answerFr: 'L’eau n’est pas assez **profonde** : les bateaux toucheraient le fond.',
    },
  },

  // 31. Earth tide (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Globe',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'The Land Moves Too',
    titleFr: 'Le sol bouge aussi',
    ratio: 45,
    inlineSvg: DIAGRAMS.EARTH_TIDE,
    content: 'You cannot feel it: everything moves together.\n\nEarth tides are linked to **volcanoes**, and maybe to **earthquakes**. Scientists study them to try to predict eruptions.',
    contentFr: 'Tu ne le sens pas : tout bouge ensemble.\n\nLes marées terrestres sont liées aux **volcans**, et peut-être aux **séismes** (earthquakes). Les scientifiques les étudient pour essayer de prévoir les éruptions.',
    notes: [
      {
        tone: 'write',
        text: '**Earth tide:** the land rising and falling with the tides, by about **30 cm**.',
        textFr: '**Marée terrestre (earth tide) :** le sol qui monte et descend avec les marées, d’environ **30 cm**.',
      },
    ],
  },

  // ── THINK LIKE A SCIENTIST ──────────────────────────────────────────────
  // 32. Three people, 2000 years
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'GraduationCap',
    eyebrow: 'Think like a scientist · page 103',
    eyebrowFr: 'Pense comme un scientifique · page 103',
    title: 'Who Found the Cause?',
    titleFr: 'Qui a trouvé la cause ?',
    inlineSvg: DIAGRAMS.TIMELINE,
    caption: 'Pytheas was a Greek sailor from Massalia: today, Marseille in France.',
    captionFr: 'Pythéas était un marin grec de Massalia : aujourd’hui, Marseille.',
  },

  // 33. Think like a scientist, Question 1
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'PenLine',
    eyebrow: 'Think like a scientist · Question 1',
    eyebrowFr: 'Pense comme un scientifique · Question 1',
    title: 'Observation or Conclusion?',
    titleFr: 'Observation ou conclusion ?',
    content:
      'Choose from: **a conclusion · an observation · a prediction · a measurement · an explanation · a model**\n\n' +
      '**1.** The sailor noticed that the depth of water changed. This was …\n' +
      '**2.** He thought that the change was caused by the Moon. This was …\n' +
      '**3.** He did not know about gravity, so he could not give … for the tides.',
    contentFr:
      'Choisis parmi : **a conclusion · an observation · a prediction · a measurement · an explanation · a model**\n\n' +
      '**1.** Le marin a remarqué que la profondeur de l’eau changeait. C’était …\n' +
      '**2.** Il pensait que la Lune causait ce changement. C’était …\n' +
      '**3.** Il ne connaissait pas la gravité, donc il ne pouvait pas donner … des marées.',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**1** an observation · **2** a conclusion · **3** an explanation',
      answerFr: '**1** an observation · **2** a conclusion · **3** an explanation',
    },
  },

  // 34. Kepler: force of attraction (write) + Question 2, plan a test
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'FlaskConical',
    eyebrow: 'Question 2 · plan a test',
    eyebrowFr: 'Question 2 · prépare un test',
    title: 'Was Kepler Right?',
    titleFr: 'Kepler avait-il raison ?',
    ratio: 60,
    image: kepler,
    content: 'About 1600, Johannes Kepler said a **force of attraction** between the Moon and the water causes tides. He thought it was **magnetic**.',
    contentFr: 'Vers 1600, Johannes Kepler a dit qu’une **force d’attraction** entre la Lune et l’eau cause les marées. Il pensait qu’elle était **magnétique**.',
    notes: [
      {
        tone: 'write',
        text: '**Force of attraction:** a force that pulls objects towards each other. Gravity is one.',
        textFr: '**Force d’attraction (force of attraction) :** une force qui attire les objets l’un vers l’autre. La gravité en est une.',
      },
    ],
    reveal: {
      prompt: 'How could you test that?',
      promptFr: 'Comment le tester ?',
      label: 'Mr Bowen’s ideas',
      labelFr: 'Les idées de M. Bowen',
      answer: 'Hold a strong magnet next to water. Does the water move?\nWe now know the force is **gravity**, not magnetism.',
      answerFr: 'Approche un aimant puissant de l’eau. Elle bouge ?\nOn sait aujourd’hui que c’est la **gravité**, pas le magnétisme.',
    },
  },

  // 35. Think like a scientist, Question 3
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Think like a scientist · Question 3',
    eyebrowFr: 'Pense comme un scientifique · Question 3',
    title: 'Why Believe Newton?',
    titleFr: 'Pourquoi croire Newton ?',
    content:
      'Which **two** explain why people accepted Newton’s ideas?\n\n' +
      '**A** Newton did experiments on the tides that were fair tests.\n' +
      '**B** Newton provided evidence to support a hypothesis.\n' +
      '**C** Newton made observations, but earlier scientists did not.\n' +
      '**D** Newton made predictions that were shown to be accurate.',
    contentFr:
      'Quelles **deux** phrases expliquent pourquoi on a accepté les idées de Newton ?\n\n' +
      '**A** Newton a fait des expériences justes (fair tests) sur les marées.\n' +
      '**B** Newton a donné des preuves pour soutenir une hypothèse.\n' +
      '**C** Newton a fait des observations, mais pas les scientifiques d’avant.\n' +
      '**D** Newton a fait des prédictions qui se sont révélées exactes.',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**B** and **D**: his calculations matched the real tides.',
      answerFr: '**B** et **D** : ses calculs correspondaient aux vraies marées.',
    },
  },

  // ── CLOSE ───────────────────────────────────────────────────────────────
  // 36. Checklist (the book's summary checklist)
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
    content: '> Check your notebook: **8 written panels** and **2 drawings**.',
    contentFr: '> Vérifie ton cahier : **8 encadrés recopiés** et **2 dessins**.',
    items: [
      { text: 'Say what **tides** are.', textFr: 'Dire ce que sont les **marées**.' },
      { text: 'Say where **tidal forces** come from.', textFr: 'Dire d’où viennent les **forces de marée**.' },
      { text: 'Explain the part the **Moon** plays in tides.', textFr: 'Expliquer le rôle de la **Lune** dans les marées.' },
      { text: 'Explain how the **Sun** makes higher tides.', textFr: 'Expliquer comment le **Soleil** rend les marées plus hautes.' },
      { text: 'Explain why there are **2 high** and **2 low** tides a day.', textFr: 'Expliquer pourquoi il y a **2 marées hautes** et **2 basses** par jour.' },
    ],
  },

  // 37. Exit question: the book's Question 5
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    title: 'Lesson Complete!',
    titleFr: 'Leçon terminée !',
    subtitle: 'Exit question: why are the biggest tidal ranges at a **full moon** or a **new moon**?',
    subtitleFr: 'Question de sortie : pourquoi les plus grands marnages ont-ils lieu à la **pleine lune** ou à la **nouvelle lune** ?',
  },
]
