// content/y7-science/U03_2/slides.js
// Year 7 Science · 3.2 Formation of the Solar System. Monday 19 October 2026
// (provisional), one period.
// Source: Learner's Book pages 85–90 (Unit 3 Forces and energy).
//
// ENGLISH AND FRENCH ONLY (meta.vietnamese: false): every string has an …Fr
// twin and no …Vn twin. French typography: a no-break space before ? ! : ;
// and inside « » (typed as the character itself, inside the quotes).
//
// ONE QUESTION HOLDS IT TOGETHER: NOBODY WAS THERE — SO HOW DO WE KNOW?
//   The book opens with it (p. 86), and its eleven key words are mostly the
//   words of the answer: observe, evidence, support, contradict, model. So the
//   deck teaches those words first, on something everyday — Mr Bowen's cake,
//   a hypothesis (the cat ate it) and three clues, voted on one at a time —
//   and then does the science the same way: the FACTS (orbit, spin, axis,
//   plane: acted out with bodies, then drawn), the HYPOTHESIS (a nebula, a
//   model the class watches clump into a star, NASA's film, a real young star
//   with a flat disc, the model again with spin), and the two facts that seem
//   to CONTRADICT it (Venus, Uranus), which are the cake's "locked outside".
//   Then the book's Think like a scientist on models — and the class's own
//   dust model is the model they judge — and the book's storyboard Activity
//   as the period's second drawing.
//
// THE MOVES, SO THE DECK IS NOT 3.1 AGAIN: vote with one hand (Getting
// started), a detective story with a vote per clue, act it out (orbit and
// spin round Mr Bowen), a desk test at eye level (the same plane), a real
// spacecraft photo, a model that moves (twice: still, then spinning), a film
// in three parts with a prediction between, a real photo of a young star,
// a four-finger vote and an English check (error / mistake / limitation /
// strength), whiteboards, and the storyboard.
//
// COPY-DOWN: 5 short write panels and 2 drawings —
//   observe + evidence + hypothesis + support/contradict (slide 6) ·
//   the facts: orbit, plane, spin, axes (slide 9, with the orbit/spin/axis
//   drawing) · nebula (12) · more mass → stronger gravity (14) · model (22) ·
//   and the storyboard (26). "Formed" is glossed on slide 4, not copied.
//
// WRITING RULE (the 2.5 density): short sentences, one idea each, and the body
// text never repeats the write note, a label or the caption.

import { DIAGRAMS } from './diagrams.js'
import { StarBirth, StillCloud, SpinningCloud } from './widgets.jsx'
import orion from './images/orion.jpg'
import hltau from './images/hltau.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'

export const slides = [
  // ── STARTER: the book's Getting started ─────────────────────────────────
  // 1. Hero + starter
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Sun',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    date: '19 Oct 2026',
    eyebrow: '3.2 · Forces and energy',
    eyebrowFr: '3.2 · Forces et énergie',
    title: 'Formation of the Solar System',
    titleFr: 'La formation du système solaire',
    card: {
      icon: 'Pencil',
      badge: 'Starter',
      badgeFr: 'Pour commencer',
      text: 'Book page 85, **Getting started**: answer questions **1**, **2** and **3**.',
      textFr: 'Livre page 85, **Getting started** : réponds aux questions **1**, **2** et **3**.',
    },
  },

  // 2. Question 1 as a vote: everyone at once, no answer on the slide
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Question 1 · vote with one hand',
    eyebrowFr: 'Question 1 · vote avec une main',
    title: 'Strong Gravity',
    titleFr: 'Une gravité forte',
    text: 'An object has a **strong** force of gravity. What must it have?',
    textFr: 'Un objet a une force de gravité **forte**. Que doit-il avoir ? (size = taille, mass = masse)',
    columns: [
      {
        heading: 'A · left hand up',
        headingFr: 'A · main gauche levée',
        accent: BLUE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_SIZE,
      },
      {
        heading: 'B · right hand up',
        headingFr: 'B · main droite levée',
        accent: ORANGE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_MASS,
      },
    ],
  },

  // 3. The answer, then Questions 2 and 3
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Sun',
    eyebrow: 'Questions 2 and 3',
    eyebrowFr: 'Questions 2 et 3',
    title: 'The Biggest Mass',
    titleFr: 'La plus grande masse',
    ratio: 45,
    inlineSvg: DIAGRAMS.OPTIONS,
    content:
      '**B: a large mass**, like in 3.1.\n\n' +
      '**2.** Which has the **largest mass** in the Solar System?\n' +
      '**3.** Which is at the **centre** of the Solar System?',
    contentFr:
      '**B : une grande masse**, comme en 3.1.\n\n' +
      '**2.** Lequel a la **plus grande masse** du système solaire ?\n' +
      '**3.** Lequel est au **centre** du système solaire ?',
    reveal: {
      label: 'Answers',
      labelFr: 'Réponses',
      answer: '**The Sun**, both times. It has **99.8%** of all the mass in the Solar System.',
      answerFr: '**Le Soleil**, les deux fois. Il a **99.8%** de toute la masse du système solaire.',
    },
  },

  // ── NOBODY WAS THERE: HOW CAN WE KNOW? ─────────────────────────────────
  // 4. The book's own problem, asked and left open
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Think with a partner',
    eyebrowFr: 'Réfléchis avec ton voisin',
    title: 'Nobody Was There',
    titleFr: 'Personne n’était là',
    text: 'The Solar System **formed** (was made) 4.6 billion years ago. Nobody was there to **observe** (watch) it.',
    textFr: 'Le système solaire s’est **formé** (formed) il y a 4.6 milliards d’années. Personne n’était là pour l’**observer** (observe).',
    sub: 'So how can scientists know what happened?',
    subFr: 'Alors comment les scientifiques peuvent-ils savoir ce qui s’est passé ?',
  },

  // 5. The same problem, everyday: a hypothesis and three clues
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Search',
    eyebrow: 'Vote on each clue',
    eyebrowFr: 'Vote pour chaque indice',
    title: 'Who Ate the Cake?',
    titleFr: 'Qui a mangé le gâteau ?',
    inlineSvg: DIAGRAMS.CAKE_CLUES,
    caption: 'Each clue: left hand if it **supports** (agrees with) the hypothesis, right hand if it **contradicts** (goes against) it.',
    captionFr: 'Pour chaque indice : main gauche s’il **confirme** (supports) l’hypothèse, main droite s’il la **contredit** (contradicts).',
  },

  // 6. The verdict, and the words (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Search',
    eyebrow: 'Key words',
    eyebrowFr: 'Mots clés',
    title: 'Evidence',
    titleFr: 'Les preuves (evidence)',
    ratio: 45,
    inlineSvg: DIAGRAMS.CAKE_VERDICT,
    notes: [
      {
        tone: 'write',
        text:
          '**Observe:** watch something happening.\n' +
          '**Evidence:** facts from observations or experiments.\n' +
          '**Hypothesis:** an idea that can be tested.\n' +
          'Evidence can **support** (agree with) or **contradict** (go against) a hypothesis.',
        textFr:
          '**Observer (observe) :** regarder quelque chose qui se passe.\n' +
          '**Preuves (evidence, pas « évidence ») :** des faits tirés d’observations ou d’expériences.\n' +
          '**Hypothèse (hypothesis) :** une idée qu’on peut tester.\n' +
          'Les preuves peuvent **confirmer** (support) ou **contredire** (contradict) une hypothèse.',
      },
    ],
    reveal: {
      label: 'So is the hypothesis wrong?',
      labelFr: 'Alors, l’hypothèse est-elle fausse ?',
      answer: 'Not yet. Two clues support it. Check again: was a window open?',
      answerFr: 'Pas encore. Deux indices la confirment. On vérifie : une fenêtre était-elle ouverte ?',
    },
  },

  // ── THE FACTS: OUR EVIDENCE ────────────────────────────────────────────
  // 7. The book's diagram (p. 86): look first
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'ScanEye',
    eyebrow: 'The facts · page 86',
    eyebrowFr: 'Les faits · page 86',
    title: 'Look Closely',
    titleFr: 'Regarde bien',
    inlineSvg: DIAGRAMS.SOLAR_SYSTEM,
    caption: 'Find **two things** that are the same for every planet.',
    captionFr: 'Trouve **deux choses** qui sont pareilles pour toutes les planètes.',
  },

  // 8. Orbit and spin, with bodies
  {
    layout: 'statement',
    accent: GREEN,
    eyebrow: 'Act it out',
    eyebrowFr: 'Joue la scène',
    title: 'Be a Planet',
    titleFr: 'Sois une planète',
    text: 'Mr Bowen is the **Sun**. Walk round him: **orbit**. Turn on the spot: **spin**.',
    textFr: 'M. Bowen est le **Soleil**. Marche autour de lui : **orbit**. Tourne sur place : **spin**.',
    sub: 'Now do both at once, the same way round.',
    subFr: 'Maintenant, fais les deux, dans le même sens.',
    reveal: {
      label: 'Now be Venus',
      labelFr: 'Maintenant, sois Vénus',
      answer: 'Orbit the **same** way, but spin the **opposite** way.',
      answerFr: 'Orbite dans le **même** sens, mais tourne dans le sens **opposé**.',
    },
  },

  // 9. Draw This: orbit, spin, axis — and the facts (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw this · the facts',
    eyebrowFr: 'À dessiner · les faits',
    title: 'Orbit, Spin, Axis',
    titleFr: 'Orbite, rotation, axe',
    ratio: 40,
    inlineSvg: DIAGRAMS.ORBIT_SPIN,
    drawThis: true,
    content: 'These facts are our **evidence**.',
    contentFr: 'Ces faits sont nos **preuves** (evidence).',
    notes: [
      {
        tone: 'write',
        text:
          'All the planets **orbit** the Sun in the same direction, in the same **plane** (one flat surface).\n' +
          'Most planets **spin** on their **axes** in the same direction too.',
        textFr:
          'Toutes les planètes **orbitent** autour du Soleil dans le même sens, dans le même **plan** (plane : une seule surface plate).\n' +
          'La plupart des planètes **tournent** sur leur **axe** (axis, pluriel axes) dans le même sens aussi.',
      },
    ],
  },

  // 10. Question 2: the same plane, at the desk and from a spacecraft
  {
    layout: 'split',
    accent: TEAL,
    icon: 'ScanEye',
    eyebrow: 'Question 2 · try it',
    eyebrowFr: 'Question 2 · essaie',
    title: 'The Same Plane',
    titleFr: 'Le même plan',
    ratio: 45,
    inlineSvg: DIAGRAMS.SIDE_VIEW,
    content:
      'What does "the same **plane**" mean? (Not an aeroplane!)\n\n' +
      'Lay your pen, eraser and ruler **flat** on the desk. Look along the desk, at eye level.',
    contentFr:
      'Que veut dire « the same **plane** » (le même plan) ? Pas un avion !\n\n' +
      'Pose ton stylo, ta gomme et ta règle **à plat** sur la table. Regarde le long de la table, à hauteur des yeux.',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: 'They could all lie on **one flat surface**. From the side, they make a **line**, like the planets in the photo.',
      answerFr: 'Ils pourraient tous être posés sur **une seule surface plate**. De côté, ils forment une **ligne**, comme les planètes sur la photo.',
    },
  },

  // ── THE HYPOTHESIS: HOW IT FORMED ──────────────────────────────────────
  // 11. Question first
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Think',
    eyebrowFr: 'Réfléchis',
    title: 'Why the Same Way?',
    titleFr: 'Pourquoi le même sens ?',
    text: 'Eight planets. All go round the Sun the **same way**, in **one flat plane**.',
    textFr: 'Huit planètes. Toutes tournent autour du Soleil dans le **même sens**, dans **un seul plan**.',
    sub: 'Just luck? Or did something make it happen?',
    subFr: 'Un hasard ? Ou est-ce que quelque chose l’a causé ?',
  },

  // 12. Nebula (write), the book's own photo, sharper
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Sparkles',
    eyebrow: 'Key word · page 87',
    eyebrowFr: 'Mot clé · page 87',
    title: 'Nebula',
    titleFr: 'La nébuleuse',
    ratio: 45,
    image: orion,
    content: 'The **Orion Nebula**, seen by the Hubble telescope.',
    contentFr: 'La **nébuleuse d’Orion**, vue par le télescope Hubble.',
    notes: [
      {
        tone: 'write',
        text: '**Nebula:** a cloud of dust and gas in space. Stars and planets form from it.',
        textFr: '**Nébuleuse (nebula) :** un nuage de poussière et de gaz dans l’espace. Les étoiles et les planètes s’y forment.',
      },
    ],
    reveal: {
      label: 'Can I see it?',
      labelFr: 'Puis-je la voir ?',
      answer: 'Yes! On a dark January evening, find **Orion’s belt**: three stars in a row. The fuzzy patch next to it is this cloud.',
      answerFr: 'Oui ! Un soir de janvier, loin des lumières, cherche la **ceinture d’Orion** : trois étoiles en ligne. La tache floue à côté, c’est ce nuage.',
    },
  },

  // 13. The model, still: predict, then watch the clumps grow
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Atom',
    eyebrow: 'A model · predict first',
    eyebrowFr: 'Un modèle · devine d’abord',
    title: 'From Dust to a Star',
    titleFr: 'De la poussière à une étoile',
    widget: StillCloud,
    caption: 'Every grain pulls on every other grain. Predict: which clumps grow **fastest**, small or big?',
    captionFr: 'Chaque grain attire tous les autres. Devine : quels amas grossissent le **plus vite**, les petits ou les gros ?',
  },

  // 14. Question 4 and the book's chain (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Repeat',
    eyebrow: 'Question 4 · page 88',
    eyebrowFr: 'Question 4 · page 88',
    title: 'More Mass, More Pull',
    titleFr: 'Plus de masse, plus d’attraction',
    ratio: 45,
    inlineSvg: DIAGRAMS.LOOP,
    content: 'The big clumps grew **fastest**: the graph bent upwards. Why? Remember 3.1.',
    contentFr: 'Les gros amas ont grossi le **plus vite** : la courbe montait de plus en plus. Pourquoi ? Souviens-toi de 3.1.',
    notes: [
      {
        tone: 'write',
        text: '**Gravity** pulls dust and gas together.\nMore mass → stronger gravity → it pulls in even more.',
        textFr: 'La **gravité** rassemble la poussière et le gaz.\nPlus de masse → gravité plus forte → elle attire encore plus.',
      },
    ],
  },

  // 15. Star or planet (p. 88), the Sun and Jupiter to scale
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Sun',
    eyebrow: 'Page 88',
    eyebrowFr: 'Page 88',
    title: 'Star or Planet?',
    titleFr: 'Étoile ou planète ?',
    ratio: 45,
    inlineSvg: DIAGRAMS.STAR_PLANET,
    content:
      'A clump grows into a ball. Big enough, and it gets **hot**: a **star**. If not: a **planet**.\n\n' +
      'It takes **millions of years**.',
    contentFr:
      'Un amas devient une boule. Assez grosse, elle devient **chaude** : une **étoile**. Sinon : une **planète**.\n\n' +
      'Cela prend **des millions d’années**.',
    reveal: {
      label: 'Jupiter: almost a star?',
      labelFr: 'Jupiter : presque une étoile ?',
      answer: 'It is the biggest planet. To be a star, it would need about **80 times** more mass.',
      answerFr: 'C’est la plus grosse planète. Pour être une étoile, il lui faudrait environ **80 fois** plus de masse.',
    },
  },

  // 16. NASA's film in three parts, a prediction between each
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Clapperboard',
    eyebrow: 'Film · NASA',
    eyebrowFr: 'Film · NASA',
    title: 'How Stars and Planets Form',
    titleFr: 'Comment naissent les étoiles et les planètes',
    widget: StarBirth,
    caption: 'Play one part at a time. Before each part, predict: **what happens next?**',
    captionFr: 'Lance une partie à la fois. Avant chaque partie, devine : **que va-t-il se passer ?**',
  },

  // 17. The real thing: a young star with a flat disc (p. 87)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Telescope',
    eyebrow: 'A real photo, 2014',
    eyebrowFr: 'Une vraie photo, 2014',
    title: 'A Young Star: HL Tauri',
    titleFr: 'Une jeune étoile : HL Tauri',
    ratio: 45,
    image: hltau,
    content:
      'A young star with a **flat disc** of dust round it, like in the film.\n\n' +
      'The dark rings may be where new **planets** are sweeping up the dust.',
    contentFr:
      'Une jeune étoile entourée d’un **disque plat** de poussière, comme dans le film.\n\n' +
      'Les anneaux sombres sont peut-être là où de nouvelles **planètes** ramassent la poussière.',
  },

  // 18. The model again, spinning: answers slide 11
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'RotateCcw',
    eyebrow: 'The model again · predict',
    eyebrowFr: 'Encore le modèle · devine',
    title: 'Now the Cloud Spins',
    titleFr: 'Maintenant, le nuage tourne',
    widget: SpinningCloud,
    caption: 'Predict: will the planets go round **different ways**, or **the same way**?',
    captionFr: 'Devine : les planètes vont-elles tourner dans des **sens différents** ou dans le **même sens** ?',
  },

  // 19. The hypothesis, said plainly
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'Back to the question',
    eyebrowFr: 'Retour à la question',
    title: 'The Hypothesis',
    titleFr: 'L’hypothèse',
    text: 'The Sun and planets formed from **one spinning cloud**.',
    textFr: 'Le Soleil et les planètes viennent d’**un seul nuage qui tournait**.',
    sub: 'So they all still go round **the same way**.',
    subFr: 'Alors ils tournent tous encore dans le **même sens**.',
    reveal: {
      label: 'Why is it flat?',
      labelFr: 'Pourquoi est-ce plat ?',
      answer: 'A spinning cloud **flattens**, like spun pizza dough.',
      answerFr: 'Ce qui tourne **s’aplatit**, comme une pâte à pizza.',
    },
  },

  // ── EVIDENCE THAT CONTRADICTS ──────────────────────────────────────────
  // 20. Venus and Uranus: vote, no answer on the slide
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowFr: 'Vote avec une main',
    title: 'Two Odd Ones Out',
    titleFr: 'Deux exceptions',
    inlineSvg: DIAGRAMS.SPIN_ODD,
    caption: 'Do these two facts **support** the hypothesis (left hand) or **contradict** it (right hand)?',
    captionFr: 'Ces deux faits **confirment**-ils l’hypothèse (main gauche) ou la **contredisent**-ils (main droite) ?',
  },

  // 21. Think like a scientist, Question 3: the answer, and the cake again
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Question 3 · page 90',
    eyebrowFr: 'Question 3 · page 90',
    title: 'They Seem to Contradict It',
    titleFr: 'Seem to contradict : sembler contredire',
    text: 'Venus and Uranus **seem to contradict** the hypothesis.',
    textFr: 'Vénus et Uranus **semblent contredire** l’hypothèse.',
    sub: 'One spinning cloud should make them all spin the same way.',
    subFr: 'Un seul nuage qui tourne devrait toutes les faire tourner pareil.',
    reveal: {
      label: 'So is the hypothesis wrong?',
      labelFr: 'Alors, l’hypothèse est-elle fausse ?',
      answer: 'Not yet: **most** evidence supports it, like the cake. Maybe giant crashes knocked them over.',
      answerFr: 'Pas encore : la **plupart** des preuves la confirment, comme pour le gâteau. Peut-être que d’énormes chocs les ont renversées.',
    },
  },

  // ── THINK LIKE A SCIENTIST: MODELS ─────────────────────────────────────
  // 22. Model (write) + Question 1
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Lightbulb',
    eyebrow: 'Key word · page 87',
    eyebrowFr: 'Mot clé · page 87',
    title: 'Model',
    titleFr: 'Le modèle',
    ratio: 45,
    inlineSvg: DIAGRAMS.MODEL_REAL,
    content: 'Our dust game was a **model** too!',
    contentFr: 'Notre jeu de poussière était un **modèle**, lui aussi !',
    notes: [
      {
        tone: 'write',
        text: '**Model:** a way of showing something that is hard to observe directly.',
        textFr: '**Modèle (model) :** une façon de montrer quelque chose qu’on ne peut pas bien observer directement.',
      },
    ],
    reveal: {
      prompt: '**Question 1:** a model speeds up millions of years. Suggest **one other** reason to use one.',
      promptFr: '**Question 1 :** un modèle accélère des millions d’années. Donne **une autre** raison.',
      label: 'Ideas',
      labelFr: 'Des idées',
      answer: 'Nobody can watch it happen · too big for a lab · you can change the cloud and run it again',
      answerFr: 'Personne ne peut le voir se faire · trop grand pour un labo · on peut changer le nuage et recommencer',
    },
  },

  // 23. Question 2: four words, four fingers
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Question 2 · show with your fingers',
    eyebrowFr: 'Question 2 · montre avec tes doigts',
    title: 'Which Word?',
    titleFr: 'Quel mot ?',
    inlineSvg: DIAGRAMS.FOUR_WORDS,
    caption: 'Hold up **1, 2, 3 or 4** fingers. Everyone at once.',
    captionFr: 'Les modèles ne sont pas réels : ils peuvent être imprécis (not accurate). Lève **1, 2, 3 ou 4** doigts, tous ensemble.',
  },

  // 24. The answer, and the English of it
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'English check',
    eyebrowFr: 'Point d’anglais',
    title: 'A Limitation',
    titleFr: 'Une limite (a limitation)',
    text: '**3 · a limitation:** something a model **cannot** do.',
    textFr: '**3 · a limitation :** ce qu’un modèle **ne peut pas** faire.',
    sub: 'An **error** = a **mistake**: someone got it wrong. A **strength**: a good point.',
    subFr: '**An error** = **a mistake** : une erreur. **A strength** : un point fort.',
    reveal: {
      label: 'Our dust model',
      labelFr: 'Notre modèle de poussière',
      answer: '**Limitations:** flat, only 240 grains, no gas, no heat. **A strength:** millions of years in 20 seconds.',
      answerFr: '**Limites :** plat, 240 grains seulement, ni gaz ni chaleur. **Un point fort :** des millions d’années en 20 secondes.',
    },
  },

  // 25. Question 4: two statements
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Whiteboards · page 90',
    eyebrowFr: 'Ardoises · page 90',
    title: 'Which Two?',
    titleFr: 'Lesquelles ?',
    content:
      '**Question 4.** Which **two** statements describe the hypothesis?\n\n' +
      '**a** It has been proven to be correct.\n' +
      '**b** Most, but not all, of the evidence supports it.\n' +
      '**c** The model that is used has limitations.\n' +
      '**d** It can be fully tested by experiments.',
    contentFr:
      '**Question 4.** Quelles **deux** phrases décrivent l’hypothèse ?\n\n' +
      '**a** On a prouvé qu’elle est juste.\n' +
      '**b** La plupart des preuves, mais pas toutes, la confirment.\n' +
      '**c** Le modèle utilisé a des limites.\n' +
      '**d** On peut la tester entièrement par des expériences.',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**b** and **c**. Nobody can prove it fully: nobody was there.',
      answerFr: '**b** et **c**. Personne ne peut la prouver entièrement : personne n’était là.',
    },
  },

  // ── ACTIVITY: THE STORYBOARD ───────────────────────────────────────────
  // 26. Draw This: the book's storyboard, four frames
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Activity · page 89',
    eyebrowFr: 'Activité · page 89',
    title: 'Solar System Storyboard',
    titleFr: 'Le storyboard du système solaire',
    inlineSvg: DIAGRAMS.STORYBOARD,
    drawThis: true,
    caption: 'Draw **4 boxes** in your notebook. In each one: a picture and a sentence.',
    captionFr: 'Dessine **4 cases** dans ton cahier. Dans chacune : un dessin et une phrase.',
  },

  // ── CLOSE ──────────────────────────────────────────────────────────────
  // 27. Checklist (the book's summary checklist, p. 90)
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
    content: '> Check your notebook: **5 written panels** and **2 drawings**.',
    contentFr: '> Vérifie ton cahier : **5 encadrés recopiés** et **2 dessins**.',
    items: [
      { text: 'Say what a **nebula** is.', textFr: 'Dire ce qu’est une **nébuleuse**.' },
      { text: 'Recall that stars and planets **form** from dust and gas.', textFr: 'Savoir que les étoiles et les planètes se **forment** à partir de poussière et de gaz.' },
      { text: 'Explain how **gravity** pulls dust and gas together.', textFr: 'Expliquer comment la **gravité** rassemble la poussière et le gaz.' },
      { text: 'Describe how a **star** and **planets** form.', textFr: 'Décrire comment se forment une **étoile** et des **planètes**.' },
      { text: 'Say if a fact **supports** or **contradicts** a hypothesis.', textFr: 'Dire si un fait **confirme** ou **contredit** une hypothèse.' },
      { text: 'Say how scientists use a **model**.', textFr: 'Dire comment les scientifiques utilisent un **modèle**.' },
    ],
  },

  // 28. Exit question
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    title: 'Lesson Complete!',
    titleFr: 'Leçon terminée !',
    subtitle: 'Exit question: why do all the planets orbit the Sun in the **same direction**?',
    subtitleFr: 'Question de sortie : pourquoi toutes les planètes tournent-elles autour du Soleil dans le **même sens** ?',
  },
]
