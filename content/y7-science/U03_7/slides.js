// content/y7-science/U03_7/slides.js
// Year 7 Science · 3.7 Where does energy go? Tuesday 27 October 2026 (date to
// be confirmed). One period. Source: Learner's Book pages 117–119, the last
// section of Unit 3 Forces and energy.
//
// ENGLISH AND FRENCH ONLY. From 15 October the Year 7 lessons drop Vietnamese
// (meta.vietnamese: false), so every string has an …Fr twin and no …Vn twin.
//
// THE BOOK'S SECTION, IN ITS OWN ORDER: Getting started (energy changes from
// 3.6) → the motorbike: useful and wasted energy, only 1/4 moves you → wasted
// energy is DISSIPATED and cannot be RECOVERED → lamps A and B → the pot on
// the fire: even when we want thermal energy, some is wasted → Questions 1–3.
// The store names are the book's 3.5 table (kinetic, chemical, thermal,
// elastic potential, gravitational potential, electrical, sound, light) and an
// energy change is written the 3.6 way: boxes and arrows, "chemical to light".
//
// THE WORDS COME FIRST. The four key words are everyday English (waste, useful,
// dissipate, recover), so the English check sits on slide 3, before any of
// them is used, and "recover" gets its trap (= get better) named.
//
// THE MOVES, CHOSEN FOR THIS CONTENT (not 3.1's sequence): talk in pairs →
// English check → a real photo with a question (the power station: smoke or
// steam?) → a vote (1/4 or 3/4?) → draw the motorbike → rub your hands, then a
// thermal-camera film answers "where did the warmth go?" → predict a bounce
// and watch Mr Bowen drop a ball → point at the lamp → a second thermal film
// → a hand near the projector's vent → find 5 places in a photo → a game →
// whiteboards.
//
// COPY-DOWN: 3 short write panels — useful and wasted energy · dissipated and
// cannot be recovered · every change wastes some thermal energy — and 1
// drawing, the motorbike's energy diagram. Everything else is done, not copied.
//
// WRITING RULE (the 2.5 density): short sentences, one idea each, and the body
// text never repeats the write note, a label or the caption. Useful is green
// and wasted is grey in every diagram and in the game.

import { DIAGRAMS } from './diagrams.js'
import { HandPrintClip, LampsClip, UsefulOrWasted } from './widgets.jsx'
import tower from './images/tower.jpg'
import petrol from './images/petrol.jpg'
import strobe from './images/strobe.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'

export const slides = [
  // ── GETTING STARTED (3.6, again) ────────────────────────────────────────
  // 1. Hero + the book's Getting started, in pairs
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Flame',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    date: '27 Oct 2026',
    eyebrow: '3.7 · Forces and energy',
    eyebrowFr: '3.7 · Forces et énergie',
    title: 'Where Does Energy Go?',
    titleFr: 'Où va l’énergie ?',
    card: {
      icon: 'Users',
      badge: 'Starter · with a partner',
      badgeFr: 'Pour commencer · avec ton voisin',
      text: 'Where does the energy come from? What **useful** energy is it changed to? **Burning wood for cooking · walking up stairs · cycling on a level (flat) road**',
      textFr: 'D’où vient l’énergie ? En quelle énergie **utile** est-elle changée ? **Brûler du bois pour cuisiner · monter un escalier · faire du vélo sur une route plate (level)**',
    },
  },

  // 2. The answers, on three photographs
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Flame',
    eyebrow: 'Getting started · check',
    eyebrowFr: 'Pour commencer · vérifie',
    title: 'Where It Comes From',
    titleFr: 'D’où elle vient',
    inlineSvg: DIAGRAMS.GS,
    caption: 'All three start with **chemical** energy.',
    captionFr: 'Les trois commencent par de l’énergie **chimique**. Une route **level** est une route plate.',
  },

  // 3. English check, before any of the four key words is used
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'English check',
    eyebrowFr: 'Point d’anglais',
    title: 'Four Everyday Words',
    titleFr: 'Quatre mots de tous les jours',
    inlineSvg: DIAGRAMS.WORDS,
    caption: 'Careful: "I **recovered** from a cold" means I got **better**. In science, recover means **get back**.',
    captionFr: 'Attention : « I **recovered** from a cold » veut dire « je suis **guéri** ». En sciences, recover veut dire **récupérer**.',
  },

  // 4. The book's opener photo, as a question
  {
    layout: 'split',
    accent: TEAL,
    icon: 'CloudFog',
    eyebrow: 'Book page 117',
    eyebrowFr: 'Livre page 117',
    title: 'A Power Station',
    titleFr: 'Une centrale électrique',
    ratio: 45,
    image: tower,
    content: 'This power station burns coal to make electricity. More than **half** of the energy is wasted.\n\nWhat is the white cloud?',
    contentFr: 'Cette centrale brûle du charbon pour faire de l’électricité. Plus de la **moitié** de l’énergie est perdue.\n\nQu’est-ce que ce nuage blanc ?',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**Steam**, not smoke. It carries wasted **thermal** energy into the air.',
      answerFr: 'De la **vapeur**, pas de la fumée. Elle emporte de l’énergie **thermique** perdue dans l’air.',
    },
  },

  // ── USEFUL AND WASTED: THE MOTORBIKE ────────────────────────────────────
  // 5. What does the engine change the petrol's energy into?
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Droplet',
    eyebrow: 'Book page 118',
    eyebrowFr: 'Livre page 118',
    title: 'Petrol for the Motorbike',
    titleFr: 'De l’essence pour la moto',
    ratio: 45,
    image: petrol,
    content: 'Petrol is a store of **chemical** energy.\n\nThe engine changes it. Into **which** energies? Make a list with a partner.',
    contentFr: 'L’essence est une réserve d’énergie **chimique**.\n\nLe moteur la change. En **quelles** énergies ? Fais une liste avec ton voisin.',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**kinetic**: it moves · **thermal**: the engine gets hot · **sound**: it is noisy',
      answerFr: '**cinétique** : elle avance · **thermique** : le moteur chauffe · **sonore** : elle fait du bruit',
    },
  },

  // 6. Vote: no answer on the slide
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowFr: 'Vote avec une main',
    title: 'How Much Moves You?',
    titleFr: 'Quelle part te fait avancer ?',
    text: 'How much of the petrol’s energy **moves** the motorbike?',
    textFr: 'Quelle part de l’énergie de l’essence fait **avancer** la moto ?',
    columns: [
      {
        heading: 'A · left hand up',
        headingFr: 'A · main gauche levée',
        accent: BLUE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_QUARTER,
      },
      {
        heading: 'B · right hand up',
        headingFr: 'B · main droite levée',
        accent: ORANGE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_THREEQ,
      },
    ],
  },

  // 7. Useful and wasted (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Droplet',
    eyebrow: 'Key words',
    eyebrowFr: 'Mots clés',
    title: 'Useful and Wasted',
    titleFr: 'Utile et perdue',
    ratio: 45,
    inlineSvg: DIAGRAMS.MOTO_QUARTER,
    content: '**A: about 1/4 (25%).** The other 3/4 (75%) is wasted.',
    contentFr: '**A : environ 1/4 (25%).** Les 3/4 restants (75%) sont perdus.',
    notes: [
      {
        tone: 'write',
        text: '**Useful energy:** energy that is changed in the way we want.\n**Wasted energy:** energy that is changed in a way we do not want.',
        textFr: '**Énergie utile (useful) :** l’énergie changée comme on le veut.\n**Énergie perdue (wasted) :** l’énergie changée comme on ne le veut pas.',
      },
    ],
  },

  // 8. Draw This: the 3.6 diagram, with useful and wasted
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw this',
    eyebrowFr: 'À dessiner',
    title: 'The Motorbike, Drawn',
    titleFr: 'La moto en schéma',
    ratio: 40,
    inlineSvg: DIAGRAMS.MOTO_DRAW,
    drawThis: true,
    content: 'Boxes and arrows, like 3.6. Then write **useful** or **wasted** beside each box.',
    contentFr: 'Des cadres et des flèches, comme en 3.6. Puis écris **useful** ou **wasted** à côté de chaque cadre.',
  },

  // ── DISSIPATED ──────────────────────────────────────────────────────────
  // 9. Do it: warm hands, then wait. No answer here — slide 10's film is it.
  {
    layout: 'statement',
    accent: GREEN,
    eyebrow: 'Try it',
    eyebrowFr: 'Essaie',
    title: 'Rub Your Hands',
    titleFr: 'Frotte tes mains',
    text: 'Rub your hands together, **fast**, for 10 seconds.',
    textFr: 'Frotte tes mains, **vite**, pendant 10 secondes.',
    sub: 'Feel the warmth. Now wait 30 seconds. Where did it go?',
    subFr: 'Sens la chaleur. Attends 30 secondes. Où est-elle partie ?',
  },

  // 10. See it: a warm hand print on a thermal camera, predict between the parts
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Clapperboard',
    eyebrow: 'Thermal camera: yellow is warm',
    eyebrowFr: 'Caméra thermique : jaune = chaud',
    title: 'A Warm Hand, a Cold Tile',
    titleFr: 'Main chaude, carreau froid',
    widget: HandPrintClip,
    caption: 'Play **1**. Predict: what will happen to the warm print? Then play **2**.',
    captionFr: 'Lance **1**. Devine : que va devenir l’empreinte chaude ? Puis lance **2**.',
  },

  // 11. Dissipated (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Wind',
    eyebrow: 'Key words',
    eyebrowFr: 'Mots clés',
    title: 'Dissipated',
    titleFr: 'Dissipée',
    ratio: 45,
    inlineSvg: DIAGRAMS.DISSIPATE,
    content: 'Your warm hands, 30 seconds later.',
    contentFr: 'Tes mains chaudes, 30 secondes plus tard.',
    notes: [
      {
        tone: 'write',
        text: '**Dissipated energy:** energy that spreads out where there is no use for it.\nIt **cannot be recovered** (we cannot get it back).',
        textFr: '**Énergie dissipée (dissipated) :** de l’énergie qui se répand là où elle ne sert à rien.\nElle **ne peut pas être récupérée** (recovered).',
      },
    ],
  },

  // ── THE BOUNCING BALL ───────────────────────────────────────────────────
  // 12. Predict, then Mr Bowen drops a ball beside a metre ruler
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Predict, then watch',
    eyebrowFr: 'Devine, puis regarde',
    title: 'How High Will It Bounce?',
    titleFr: 'Jusqu’où va-t-elle rebondir ?',
    text: 'Mr Bowen drops a ball from **1 metre**.',
    textFr: 'M. Bowen lâche une balle d’une hauteur de **1 mètre**.',
    sub: 'How high does it bounce? Write your guess in **cm**.',
    subFr: 'Jusqu’où rebondit-elle ? Écris ton estimation en **cm**.',
  },

  // 13. The real thing: lower every time
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Repeat',
    eyebrow: 'One photo, 25 flashes a second',
    eyebrowFr: 'Une photo, 25 flashs par seconde',
    title: 'Lower Every Time',
    titleFr: 'Plus bas à chaque fois',
    ratio: 40,
    image: strobe,
    content: 'Every bounce is **lower**. The ball never gets back to the top.',
    contentFr: 'Chaque rebond est plus **bas**. La balle ne remonte jamais jusqu’en haut.',
    reveal: {
      prompt: 'Where does the energy go at each bounce?',
      promptFr: 'Où va l’énergie à chaque rebond ?',
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**Sound:** you hear every bounce. **Thermal:** the ball and the floor get a tiny bit warmer. It is dissipated.',
      answerFr: '**Sonore :** tu entends chaque rebond. **Thermique :** la balle et le sol chauffent un tout petit peu. Elle est dissipée.',
    },
  },

  // ── LAMPS A AND B ───────────────────────────────────────────────────────
  // 14. The book's two lamps: point at the one that wastes more
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Lightbulb',
    eyebrow: 'Book page 118',
    eyebrowFr: 'Livre page 118',
    title: 'Two Lamps',
    titleFr: 'Deux lampes',
    inlineSvg: DIAGRAMS.LAMPS,
    caption: 'A and B give the **same** light. Which one **wastes** more energy? Point at it.',
    captionFr: 'A et B donnent la **même** lumière. Laquelle **perd** le plus d’énergie ? Montre-la du doigt.',
  },

  // 15. Both lamps on a thermal camera
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Clapperboard',
    eyebrow: 'Thermal camera: white is hottest',
    eyebrowFr: 'Caméra thermique : blanc = le plus chaud',
    title: 'Switch Them On',
    titleFr: 'Allume-les',
    widget: LampsClip,
    caption: 'Lamp **A** is on the **right**. Watch the **thermal** energy.',
    captionFr: 'La lampe **A** est à **droite**. Regarde l’énergie **thermique**.',
  },

  // 16. The book's numbers
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Lightbulb',
    eyebrow: 'Electrical to light',
    eyebrowFr: 'De l’électrique à la lumière',
    title: 'Lamp A Wastes More',
    titleFr: 'La lampe A perd plus',
    inlineSvg: DIAGRAMS.LAMP_BARS,
    caption: 'Each lamp uses **100 J** of electrical energy. How many joules does each one waste?',
    captionFr: 'Chaque lampe utilise **100 J** d’énergie électrique. Combien de joules chacune perd-elle ?',
  },

  // 17. Feel it in the room: the projector has a lamp inside
  {
    layout: 'statement',
    accent: GREEN,
    eyebrow: 'Try it · do not touch',
    eyebrowFr: 'Essaie · sans toucher',
    title: 'Our Projector',
    titleFr: 'Notre projecteur',
    text: 'Hold your hand **near** the projector’s air vent.',
    textFr: 'Approche ta main **près** de la grille d’aération du projecteur.',
    sub: 'What is its **useful** energy? What is **wasted**?',
    subFr: 'Quelle est son énergie **utile** ? Laquelle est **perdue** ?',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: 'Useful: **light** (the picture). Wasted: **thermal** (the warm air) and **sound** (the fan).',
      answerFr: 'Utile : la **lumière** (l’image). Perdues : l’énergie **thermique** (l’air chaud) et **sonore** (le ventilateur).',
    },
  },

  // ── THE POT ON THE FIRE ─────────────────────────────────────────────────
  // 18. Find 5 places
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Search',
    eyebrow: 'Book page 119',
    eyebrowFr: 'Livre page 119',
    title: 'Water on a Wood Fire',
    titleFr: 'De l’eau sur un feu de bois',
    inlineSvg: DIAGRAMS.POT_Q,
    caption: 'Burning wood heats the water. Where **else** does the energy go? Find **5** places.',
    captionFr: 'Le bois qui brûle chauffe l’eau. Où va le **reste** de l’énergie ? Trouve **5** endroits.',
  },

  // 19. The five places, labelled
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Flame',
    eyebrow: 'Even when we want thermal energy',
    eyebrowFr: 'Même quand on veut de l’énergie thermique',
    title: 'Five Places It Goes',
    titleFr: 'Cinq endroits où elle va',
    inlineSvg: DIAGRAMS.POT_A,
    caption: 'Only the hot water is **useful**. The rest is wasted, and dissipated.',
    captionFr: 'Seule l’eau chaude est **utile**. Le reste est perdu, et dissipé.',
  },

  // 20. The rule (write)
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Key idea',
    eyebrowFr: 'Idée clé',
    title: 'Always Some Wasted',
    titleFr: 'Toujours de l’énergie perdue',
    content: 'The motorbike, the lamps, the bouncing ball, the fire: every one wasted some energy.',
    contentFr: 'La moto, les lampes, la balle, le feu : chacun a perdu de l’énergie.',
    notes: [
      {
        tone: 'write',
        text: '**Every** time energy is changed or transferred, some **thermal** energy is wasted. It is dissipated.',
        textFr: '**Chaque** fois que l’énergie est changée ou transférée, de l’énergie **thermique** est perdue. Elle est dissipée.',
      },
    ],
  },

  // 21. Game: same energy, different job
  {
    layout: 'game',
    title: 'Useful or Wasted?',
    titleFr: 'Utile ou perdue ?',
    widget: UsefulOrWasted,
  },

  // ── THE BOOK'S QUESTIONS ────────────────────────────────────────────────
  // 22. Question 1
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Book page 119',
    eyebrowFr: 'Livre page 119',
    title: 'Question 1',
    titleFr: 'Question 1',
    content:
      'Which of these describes energy that is **dissipated**? Show **1, 2, 3 or 4** fingers.\n\n' +
      '**1** energy that spreads out and becomes less useful\n' +
      '**2** energy that becomes more useful\n' +
      '**3** energy that can be used later\n' +
      '**4** energy that is not useful but can be stored',
    contentFr:
      'Laquelle décrit une énergie **dissipée** ? Montre **1, 2, 3 ou 4** doigts.\n\n' +
      '**1** de l’énergie qui se répand et devient moins utile\n' +
      '**2** de l’énergie qui devient plus utile\n' +
      '**3** de l’énergie qu’on peut utiliser plus tard\n' +
      '**4** de l’énergie pas utile, mais qu’on peut stocker',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**1.** It spreads out, so it is less useful. We cannot store it or use it later.',
      answerFr: '**1.** Elle se répand, donc elle est moins utile. On ne peut pas la stocker ni l’utiliser plus tard.',
    },
  },

  // 23. Question 2
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Book page 119 · whiteboards',
    eyebrowFr: 'Livre page 119 · ardoises',
    title: 'Question 2',
    titleFr: 'Question 2',
    content:
      'Which of these can be dissipated? Choose **all** that are correct.\n\n' +
      '**chemical · thermal · light · sound · elastic**',
    contentFr:
      'Lesquelles peuvent être dissipées ? Choisis **toutes** les bonnes réponses.\n\n' +
      '**chemical · thermal · light · sound · elastic**',
    reveal: {
      label: 'Check your answer',
      labelFr: 'Vérifie ta réponse',
      answer: '**Thermal, light and sound.** They spread out. Chemical and elastic are **stores**: they stay inside the object until they are used.',
      answerFr: '**Thermal, light, sound** (thermique, lumineuse, sonore). Elles se répandent. Chemical et elastic sont des **réserves** : elles restent dans l’objet jusqu’à ce qu’on les utilise.',
    },
  },

  // 24. Question 3
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Book page 119 · whiteboards',
    eyebrowFr: 'Livre page 119 · ardoises',
    title: 'Question 3',
    titleFr: 'Question 3',
    content:
      'List all the energy changes. Write **useful** or **wasted** for each one.\n\n' +
      '**a** a lamp · **b** a petrol car engine · **c** an electric motor',
    contentFr:
      'Liste les changements d’énergie. Écris **useful** ou **wasted** pour chacun.\n\n' +
      '**a** une lampe · **b** un moteur à essence · **c** un moteur électrique',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer:
        '**a** electrical to light (useful) · electrical to thermal (wasted)\n' +
        '**b** chemical to kinetic (useful) · chemical to thermal and sound (wasted)\n' +
        '**c** electrical to kinetic (useful) · electrical to thermal and sound (wasted)',
      answerFr:
        '**a** electrical to light (useful) · electrical to thermal (wasted)\n' +
        '**b** chemical to kinetic (useful) · chemical to thermal and sound (wasted)\n' +
        '**c** electrical to kinetic (useful) · electrical to thermal and sound (wasted)',
    },
  },

  // ── CLOSE ───────────────────────────────────────────────────────────────
  // 25. Checklist (the book's two objectives, and what the lesson practised)
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
    content: '> Check your notebook: **3 written panels** and **1 drawing**.',
    contentFr: '> Vérifie ton cahier : **3 encadrés recopiés** et **1 dessin**.',
    items: [
      { text: 'Say what **useful** and **wasted** energy are.', textFr: 'Dire ce que sont l’énergie **utile** et l’énergie **perdue**.' },
      { text: 'Find the wasted energy in a motorbike, a lamp and a fire.', textFr: 'Trouver l’énergie perdue dans une moto, une lampe et un feu.' },
      { text: 'Explain what **dissipated** means.', textFr: 'Expliquer ce que veut dire **dissipée**.' },
      { text: 'Say why dissipated energy **cannot be recovered**.', textFr: 'Dire pourquoi l’énergie dissipée **ne peut pas être récupérée**.' },
      { text: 'Explain why a ball bounces **lower** each time.', textFr: 'Expliquer pourquoi une balle rebondit **moins haut** à chaque fois.' },
      { text: 'Draw an energy diagram with **useful** and **wasted** energy.', textFr: 'Dessiner un schéma d’énergie avec l’énergie **utile** et **perdue**.' },
    ],
  },

  // 26. Exit question: looks back over 3.5, 3.6 and 3.7
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    title: 'Lesson Complete!',
    titleFr: 'Leçon terminée !',
    subtitle: 'Exit question: Mr Bowen’s phone plays music. Name the energy **store** in its battery, the **useful** energy, and one **wasted** energy.',
    subtitleFr: 'Question de sortie : le téléphone de M. Bowen joue de la musique. Nomme la **réserve** d’énergie dans sa batterie, l’énergie **utile** et une énergie **perdue**.',
  },
]
