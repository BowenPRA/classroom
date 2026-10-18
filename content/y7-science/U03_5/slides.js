// content/y7-science/U03_5/slides.js
// Year 7 Science · 3.5 Energy. Friday 23 October 2026 (provisional), one period.
// Source: Learner's Book pages 105–110 (Unit 3 Forces and energy). The unit
// turns from forces to energy here; 3.6 (changes in energy) and 3.7 (where
// does energy go?) follow, so this deck NAMES the stores and transfers and
// leaves energy changing from one to another to them. The names are the
// book's table (p.107), word for word, so the three decks agree.
//
// ENGLISH AND FRENCH ONLY (meta.vietnamese: false): every string has an …Fr
// twin and no …Vn twin. Diagrams stay in English.
//
/// THE SHAPE: FEEL IT, NAME IT, FIND IT, KEEP IT.
//   Feel it    — the starter is the book's Getting Started. Then the joule,
//                ask before tell: lift an apple 1 m (about 1 J; 3.1's apple
//                was 1 N), then RANK stairs, a 100 m run and a litre of
//                boiling water on whiteboards before the book's numbers
//                appear as a pictogram — the kettle is 200 floors of stairs.
//   Name it    — an English check (stored / transferred: "store" is not a
//                shop), then the book's eight, one per slide, about 45 s each:
//                a real photo (Vietnam where there is one — the rooftop water
//                tank every student has at home), one line in the same
//                pattern ("… store it" / "… transfer it"), and an ACTION the
//                whole class does in a purple Do it panel. Six actions are
//                given (run, rub hands, stretch, lift, zigzag, hum) and are the
//                same gestures the game asks for; for chemical and light the
//                class INVENTS its own — the book's own question on p.107, "can
//                you think of a way to help you remember them?". Sound is the
//                one slide that changes medium: 12 seconds of a đàn bầu. A vote
//                on "is the Moon luminous?" catches the word that looks like
//                "bright". Then the book's table, drawn books-closed and
//                completed from memory, with one model row (fuels).
//   Find it    — the book's bus (p.107) as the model, then the class's turn on
//                33 seconds of the last space-shuttle launch, with its sound —
//                the book's poster Activity (p.109), done from the front.
//   Keep it    — the book's "Storing energy": vote on six photos, sort them,
//                drop a real tennis ball. Then Act It Out (the actions, eight
//                cards), the book's Questions 1–4, checklist, exit. Question 5
//                is a discussion: if it is not reached, it is the next
//                lesson's spoken warm-up.
//
// COPY-DOWN, ON A BUDGET: 4 short write panels (energy + joule · stored and
// transferred · luminous · which stores last) and 1 drawing (the table). The
// other key words — the eight names and "fuels" — are copied in the table.
//
// WRITING RULE (the 2.5 density): short sentences, one idea each, and the body
// text never repeats the write note, a label or the caption.
//
// The poster Activity and its peer assessment (pp.109–110) need magazines and
// most of a period: they are in plan.js as an extension, not in the deck.

import { DIAGRAMS } from './diagrams.js'
import { LaunchClip, DanBauClip, ActItOut } from './widgets.jsx'
import fireworks from './images/fireworks.jpg'
import traffic from './images/traffic.jpg'
import pho from './images/pho.jpg'
import archer from './images/archer.jpg'
import wires from './images/wires.jpg'
import lanterns from './images/lanterns.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'

export const slides = [
  // ── FEEL IT ─────────────────────────────────────────────────────────────
  // 1. Hero + the book's Getting Started
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Zap',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    date: '23 Oct 2026',
    eyebrow: '3.5 · Forces and energy',
    eyebrowFr: '3.5 · Forces et énergie',
    title: 'Energy',
    titleFr: 'L’énergie',
    card: {
      icon: 'Pencil',
      badge: 'Starter',
      badgeFr: 'Pour commencer',
      text: 'With a partner, make two lists: **1** things you need **energy** to do, **2** **fuels** you know.',
      textFr: 'Avec ton voisin, fais deux listes : **1** des choses qui demandent de l’**énergie** (energy), **2** des **combustibles** (fuels) que tu connais.',
    },
  },

  // 2. Energy (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Zap',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'What Is Energy?',
    titleFr: 'Qu’est-ce que l’énergie ?',
    ratio: 50,
    image: fireworks,
    content: 'Running, cooking, a phone, a firework: they all need **energy**.',
    contentFr: 'Courir, cuisiner, un téléphone, un feu d’artifice : tout cela demande de l’**énergie**.',
    notes: [
      {
        tone: 'write',
        text: '**Energy:** something that must be changed or transferred to do something.\nEnergy is measured in **joules (J)**.',
        textFr: '**Énergie (energy) :** quelque chose qui doit être transformé ou transféré pour faire quelque chose.\nL’énergie se mesure en **joules (J)**.',
      },
    ],
  },

  // 3. Feel a joule
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Ruler',
    eyebrow: 'Feel a joule',
    eyebrowFr: 'Ressens un joule',
    title: 'How Big Is a Joule?',
    titleFr: 'Un joule, c’est combien ?',
    ratio: 40,
    inlineSvg: DIAGRAMS.APPLE_LIFT,
    content: 'A **joule** is small.',
    contentFr: 'Un **joule**, c’est petit.',
    notes: [
      {
        tone: 'task',
        badge: 'Do it',
        badgeFr: 'Fais-le',
        icon: 'Hand',
        text: 'Lift your pencil case above your head. That is only a few joules.',
        textFr: 'Lève ta trousse au-dessus de ta tête. Ça ne fait que quelques joules.',
      },
    ],
  },

  // 4. Rank them first (no numbers)
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'ListOrdered',
    eyebrow: 'Guess first · whiteboards',
    eyebrowFr: 'Devine d’abord · ardoises',
    title: 'Which Needs the Most?',
    titleFr: 'Lequel demande le plus ?',
    inlineSvg: DIAGRAMS.RANK_ASK,
    caption: 'Put A, B and C in order, from the **least** energy to the **most**.',
    captionFr: 'Range A, B et C, de celui qui demande le **moins** d’énergie à celui qui en demande le **plus**.',
  },

  // 5. The book's numbers, as a pictogram
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'TrendingUp',
    eyebrow: 'Learner’s Book, page 106',
    eyebrowFr: 'Manuel, page 106',
    title: '200 Floors of Stairs',
    titleFr: '200 étages d’escaliers',
    inlineSvg: DIAGRAMS.RANK_ANSWER,
    caption: 'Heating water takes **a lot** of energy.',
    captionFr: 'Chauffer de l’eau demande **beaucoup** d’énergie.',
  },

  // ── NAME IT ─────────────────────────────────────────────────────────────
  // 6. English check: stored and transferred (write)
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'English check',
    eyebrowFr: 'Point d’anglais',
    title: 'Stored and Transferred',
    titleFr: 'Stockée et transférée',
    ratio: 40,
    inlineSvg: DIAGRAMS.STORE_TRANSFER,
    content: 'Energy can be **stored** or **transferred**.\n\nNot a shop! Here, **store** means **keep**.',
    contentFr: 'L’énergie peut être **stockée** ou **transférée**.\n\nPas un magasin ! Ici, **store** veut dire **garder**.',
    notes: [
      {
        tone: 'write',
        text: '**Stored:** kept to use later.\n**Transferred:** moved from one place to another.',
        textFr: '**Stockée (stored) :** gardée pour plus tard.\n**Transférée (transferred) :** déplacée d’un endroit à un autre.',
      },
    ],
  },

  // 7. Kinetic
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Gauge',
    eyebrow: 'Energy store',
    eyebrowFr: 'Stock d’énergie',
    title: 'Kinetic Energy',
    titleFr: 'Kinetic · l’énergie cinétique',
    ratio: 40,
    image: traffic,
    content: 'Things that **move** store it.',
    contentFr: 'Les objets qui **bougent** la stockent.',
    notes: [
      {
        tone: 'task',
        badge: 'Do it',
        badgeFr: 'Fais-le',
        icon: 'Hand',
        text: 'Run on the spot!',
        textFr: 'Cours sur place !',
      },
    ],
  },

  // 8. Chemical
  {
    layout: 'split',
    accent: TEAL,
    icon: 'FlaskConical',
    eyebrow: 'Energy store',
    eyebrowFr: 'Stock d’énergie',
    title: 'Chemical Energy',
    titleFr: 'Chemical · l’énergie chimique',
    ratio: 40,
    inlineSvg: DIAGRAMS.CHEMICAL,
    content: 'All three store it.\n\n**Fuels** are things we burn, like wood, coal, oil and gas.',
    contentFr: 'Les trois la stockent.\n\nLes **combustibles** (fuels), on les brûle : le bois, le charbon, le pétrole, le gaz.',
    notes: [
      {
        tone: 'task',
        badge: 'Do it',
        badgeFr: 'Fais-le',
        icon: 'Hand',
        text: 'With a partner, invent an action for chemical energy. The class picks the best one!',
        textFr: 'Avec ton voisin, invente un geste pour l’énergie chimique. La classe choisit le meilleur !',
      },
    ],
  },

  // 9. Thermal
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Flame',
    eyebrow: 'Energy store or transfer',
    eyebrowFr: 'Stock ou transfert',
    title: 'Thermal Energy',
    titleFr: 'Thermal · l’énergie thermique',
    ratio: 40,
    image: pho,
    content: '**Hot** things store it. It is transferred to **colder** things.',
    contentFr: 'Les objets **chauds** la stockent. Elle est transférée aux objets plus **froids**.',
    notes: [
      {
        tone: 'task',
        badge: 'Do it',
        badgeFr: 'Fais-le',
        icon: 'Hand',
        text: 'Rub your hands fast. Now touch your cheeks.',
        textFr: 'Frotte tes mains très vite. Puis touche tes joues.',
      },
    ],
  },

  // 10. Elastic potential
  {
    layout: 'split',
    accent: TEAL,
    icon: 'ArrowLeftRight',
    eyebrow: 'Energy store',
    eyebrowFr: 'Stock d’énergie',
    title: 'Elastic Potential Energy',
    titleFr: 'Elastic potential · l’énergie potentielle élastique',
    ratio: 40,
    image: archer,
    content: 'Things that are **stretched** or **squeezed** store it.',
    contentFr: 'Les objets **étirés** ou **comprimés** la stockent.',
    notes: [
      {
        tone: 'task',
        badge: 'Do it',
        badgeFr: 'Fais-le',
        icon: 'Hand',
        text: 'Stretch your hands apart, like a rubber band.',
        textFr: 'Écarte les mains, comme un élastique qu’on étire.',
      },
    ],
  },

  // 11. Gravitational potential
  {
    layout: 'split',
    accent: TEAL,
    icon: 'ArrowUp',
    eyebrow: 'Energy store',
    eyebrowFr: 'Stock d’énergie',
    title: 'Gravitational Potential Energy',
    titleFr: 'Gravitational potential · l’énergie potentielle de pesanteur',
    ratio: 40,
    inlineSvg: DIAGRAMS.ROOF_TANK,
    content: 'Things **lifted up**, away from the Earth, store it. So does the water in the tank on your roof.\n\n**Potential**: it **could** happen. Let go, and it falls.',
    contentFr: 'Les objets **soulevés**, loin de la Terre, la stockent. L’eau du réservoir sur ton toit aussi.\n\n**Potential** (potentielle) : ça **pourrait** arriver. Lâche-le, et il tombe.',
    notes: [
      {
        tone: 'task',
        badge: 'Do it',
        badgeFr: 'Fais-le',
        icon: 'Hand',
        text: 'Lift both hands up high, as if you are lifting a book.',
        textFr: 'Lève les deux mains bien haut, comme pour soulever un livre.',
      },
    ],
  },

  // 12. Electrical
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Zap',
    eyebrow: 'Energy transfer',
    eyebrowFr: 'Transfert d’énergie',
    title: 'Electrical Energy',
    titleFr: 'Electrical · l’énergie électrique',
    ratio: 40,
    image: wires,
    content: 'The **current** in a circuit transfers it.',
    contentFr: 'Le **courant** dans un circuit la transfère.',
    notes: [
      {
        tone: 'task',
        badge: 'Do it',
        badgeFr: 'Fais-le',
        icon: 'Hand',
        text: 'Draw a zigzag in the air. Then find a wire in this room.',
        textFr: 'Dessine un zigzag dans l’air. Puis trouve un fil dans la classe.',
      },
    ],
  },

  // 13. Sound
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Waves',
    eyebrow: 'Energy transfer',
    eyebrowFr: 'Transfert d’énergie',
    title: 'Sound Energy',
    titleFr: 'Sound · l’énergie sonore',
    ratio: 40,
    widget: DanBauClip,
    content: 'Things that **vibrate** (shake fast) transfer it. Listen to the string of a đàn bầu.',
    contentFr: 'Les objets qui **vibrent** (tremblent très vite) la transfèrent. Écoute la corde d’un đàn bầu.',
    notes: [
      {
        tone: 'task',
        badge: 'Do it',
        badgeFr: 'Fais-le',
        icon: 'Hand',
        text: 'Hum, with a hand on your throat. Can you feel it?',
        textFr: 'Fredonne, la main sur la gorge. Tu le sens ?',
      },
    ],
  },

  // 14. Light
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Lightbulb',
    eyebrow: 'Energy transfer',
    eyebrowFr: 'Transfert d’énergie',
    title: 'Light Energy',
    titleFr: 'Light · l’énergie lumineuse',
    ratio: 40,
    image: lanterns,
    content: '**Luminous** things transfer it, like the Sun or a lantern.',
    contentFr: 'Les objets **lumineux** (luminous) la transfèrent, comme le Soleil ou une lanterne.',
    notes: [
      {
        tone: 'task',
        badge: 'Do it',
        badgeFr: 'Fais-le',
        icon: 'Hand',
        text: 'With a partner, invent an action for light energy. The class picks the best one!',
        textFr: 'Avec ton voisin, invente un geste pour l’énergie lumineuse. La classe choisit le meilleur !',
      },
    ],
  },

  // 15. Vote: a word that looks like "bright"
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowFr: 'Vote avec une main',
    title: 'Is the Moon Luminous?',
    titleFr: 'La Lune est-elle lumineuse ?',
    text: 'Is the Moon **luminous**?',
    textFr: 'La Lune est-elle **lumineuse** (luminous) ?',
    columns: [
      {
        heading: 'A · left hand up',
        headingFr: 'A · main gauche levée',
        accent: BLUE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_YES,
      },
      {
        heading: 'B · right hand up',
        headingFr: 'B · main droite levée',
        accent: ORANGE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_NO,
      },
    ],
  },

  // 16. Luminous (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Sun',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'Luminous',
    titleFr: 'Lumineux',
    ratio: 40,
    inlineSvg: DIAGRAMS.LUMINOUS,
    content: '**B: no.** The Moon only **looks** bright.',
    contentFr: '**B : non.** La Lune a seulement **l’air** brillante.',
    notes: [
      {
        tone: 'write',
        text: '**Luminous:** gives out its own light.\nThe Sun is luminous. The Moon is not.',
        textFr: '**Lumineux (luminous) :** qui produit sa propre lumière.\nLe Soleil est lumineux. La Lune ne l’est pas.',
      },
      {
        tone: 'task',
        badge: 'Do it',
        badgeFr: 'Fais-le',
        icon: 'Hand',
        text: 'Point to something luminous in this room.',
        textFr: 'Montre un objet lumineux dans la classe.',
      },
    ],
  },

  // 17. Draw This: the book's table, completed from memory
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw this · books closed',
    eyebrowFr: 'À dessiner · livres fermés',
    title: 'Copy and Complete',
    titleFr: 'Recopie et complète',
    inlineSvg: DIAGRAMS.TABLE_BLANK,
    drawThis: true,
    caption: 'Copy the table. Fill the empty boxes **from memory**. One example is done for you.',
    captionFr: 'Recopie le tableau. Remplis les cases vides **de mémoire**. Un exemple est déjà donné.',
  },

  // 18. The answers
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Table',
    eyebrow: 'Swap and mark',
    eyebrowFr: 'Échange et corrige',
    title: 'Check Your Table',
    titleFr: 'Vérifie ton tableau',
    inlineSvg: DIAGRAMS.TABLE_FULL,
    caption: 'Tick or fix the middle column. Any good example is right!',
    captionFr: 'Coche ou corrige la colonne du milieu. Tout bon exemple est juste !',
  },

  // ── FIND IT ─────────────────────────────────────────────────────────────
  // 19. The book's bus, as the model
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'BookOpen',
    eyebrow: 'Learner’s Book, page 107',
    eyebrowFr: 'Manuel, page 107',
    title: 'Seven on One Bus',
    titleFr: 'Sept dans un seul bus',
    inlineSvg: DIAGRAMS.BUS,
    caption: 'Read each label aloud: "**kinetic** – the bus is moving".',
    captionFr: 'Lis chaque étiquette à voix haute : « **kinetic** – the bus is moving ».',
  },

  // 20. Their turn: the last shuttle launch, with sound
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Clapperboard',
    eyebrow: 'Activity · page 109',
    eyebrowFr: 'Activité · page 109',
    title: 'Find Them in a Launch',
    titleFr: 'Trouve-les dans un décollage',
    ratio: 40,
    widget: LaunchClip,
    content: 'Watch and **listen**. Write every store and transfer you find, like the bus.\n\nExample: **sound** – the engines roar.',
    contentFr: 'Regarde et **écoute**. Écris chaque stock et chaque transfert, comme pour le bus.\n\nExemple : **sound** – the engines roar.',
    reveal: {
      label: 'Mr Bowen’s list',
      labelFr: 'La liste de M. Bowen',
      answer:
        '**chemical** – the fuel in the orange tank\n' +
        '**kinetic** – it moves\n' +
        '**gravitational potential** – it goes up\n' +
        '**thermal** – hot flames\n' +
        '**light** – bright flames\n' +
        '**sound** – the roar',
      answerFr:
        '**chemical** – le carburant du réservoir orange\n' +
        '**kinetic** – elle bouge\n' +
        '**gravitational potential** – elle monte\n' +
        '**thermal** – des flammes chaudes\n' +
        '**light** – des flammes brillantes\n' +
        '**sound** – le grondement',
    },
  },

  // ── KEEP IT ─────────────────────────────────────────────────────────────
  // 21. Vote on each photo
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Hourglass',
    eyebrow: 'Vote on each one',
    eyebrowFr: 'Vote pour chacun',
    title: 'Which Keep Their Energy?',
    titleFr: 'Lesquels gardent leur énergie ?',
    inlineSvg: DIAGRAMS.KEEP_ASK,
    caption: 'Mr Bowen points to each photo. Everyone votes **at once**.',
    captionFr: 'M. Bowen montre chaque photo. Tout le monde vote **en même temps**.',
  },

  // 22. Storing energy (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Hourglass',
    eyebrow: 'Storing energy',
    eyebrowFr: 'Stocker l’énergie',
    title: 'Some Stores Last Longer',
    titleFr: 'Certains stocks durent plus longtemps',
    ratio: 40,
    inlineSvg: DIAGRAMS.KEEP_SORTED,
    content: 'Coal and oil formed **millions of years** ago, and they still store energy!',
    contentFr: 'Le charbon et le pétrole datent de **millions d’années**, et stockent toujours de l’énergie !',
    notes: [
      {
        tone: 'write',
        text: 'Chemical and gravitational potential stores can last a **long time**.\nThermal and kinetic stores do **not** last long.',
        textFr: 'L’énergie chimique et l’énergie potentielle de pesanteur se gardent **longtemps**.\nL’énergie thermique et l’énergie cinétique, **non**.',
      },
      {
        tone: 'task',
        badge: 'Watch',
        badgeFr: 'Regarde',
        icon: 'Hand',
        text: 'Mr Bowen drops a tennis ball. Count the bounces.',
        textFr: 'M. Bowen lâche une balle de tennis. Compte les rebonds.',
      },
    ],
  },

  // 23. Game: the actions, from the front
  {
    layout: 'game',
    title: 'Act It Out',
    titleFr: 'Mime-le',
    widget: ActItOut,
  },

  // ── THE BOOK'S QUESTIONS (page 109) ─────────────────────────────────────
  // 24. Question 1
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'PenLine',
    eyebrow: 'Whiteboards · page 109',
    eyebrowFr: 'Ardoises · page 109',
    title: 'Question 1',
    titleFr: 'Question 1',
    ratio: 40,
    inlineSvg: DIAGRAMS.CIRCUIT,
    content: 'Copy and complete:\n\n**a** ______ energy is stored in the battery.\n**b** ______ energy is transferred in the wires.',
    contentFr: 'Recopie et complète (en anglais) :\n\n**a** ______ energy is stored in the battery.\n**b** ______ energy is transferred in the wires.',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**a** chemical · **b** electrical',
      answerFr: '**a** chemical (chimique) · **b** electrical (électrique)',
    },
  },

  // 25. Question 2
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'PenLine',
    eyebrow: 'Whiteboards · page 109',
    eyebrowFr: 'Ardoises · page 109',
    title: 'Question 2',
    titleFr: 'Question 2',
    content:
      'Name the energy store in each one. There may be more than one.\n\n' +
      '**a** food · **b** petrol · **c** a falling rock · **d** a book lifted up onto a shelf',
    contentFr:
      'Nomme le stock d’énergie de chacun. Il peut y en avoir plusieurs.\n\n' +
      '**a** la nourriture · **b** l’essence · **c** un rocher qui tombe · **d** un livre posé en haut d’une étagère',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**a** chemical · **b** chemical · **c** kinetic and gravitational potential · **d** gravitational potential',
      answerFr: '**a** chemical · **b** chemical · **c** kinetic et gravitational potential · **d** gravitational potential',
    },
  },

  // 26. Questions 3 and 4
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'PenLine',
    eyebrow: 'Whiteboards · page 109',
    eyebrowFr: 'Ardoises · page 109',
    title: 'Questions 3 and 4',
    titleFr: 'Questions 3 et 4',
    content:
      '**3 a** Name two energy stores that last a long time.\n' +
      '**b** Name one store, not thermal, that does not last long.\n\n' +
      '**4** Give an example that shows thermal energy cannot be stored for a long time.',
    contentFr:
      '**3 a** Nomme deux stocks d’énergie qui durent longtemps.\n' +
      '**b** Nomme un stock, autre que thermique, qui ne dure pas longtemps.\n\n' +
      '**4** Donne un exemple qui montre qu’on ne peut pas stocker l’énergie thermique longtemps.',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**3 a** chemical, gravitational potential · **b** kinetic\n**4** A hot bowl of phở is cold an hour later.',
      answerFr: '**3 a** chemical, gravitational potential · **b** kinetic\n**4** Un bol de phở chaud est froid une heure plus tard.',
    },
  },

  // 27. Question 5, talked through in pairs
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'Talk with a partner · page 109',
    eyebrowFr: 'Discute avec ton voisin · page 109',
    title: 'Question 5',
    titleFr: 'Question 5',
    content:
      'The world has more people every year, and countries like Vietnam are developing fast: more cities and factories.\n\n' +
      'How does this change the energy we use? Use stores and transfers in your answer.',
    contentFr:
      'Il y a chaque année plus de gens sur Terre, et des pays comme le Vietnam se développent vite : plus de villes et d’usines.\n\n' +
      'Qu’est-ce que ça change à l’énergie qu’on utilise ? Parle de stocks et de transferts.',
    reveal: {
      label: 'Ideas',
      labelFr: 'Des idées',
      answer: 'We use **more**: more fuel (chemical) for motorbikes, more electrical energy for phones and air conditioners, more food.',
      answerFr: 'On en utilise **plus** : plus de carburant (chimique) pour les motos, plus d’énergie électrique pour les téléphones et les climatiseurs, plus de nourriture.',
    },
  },

  // ── CLOSE ───────────────────────────────────────────────────────────────
  // 28. Checklist (the book's summary checklist, p.110)
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
    content: '> Check your notebook: **4 written panels** and **1 table**.',
    contentFr: '> Vérifie ton cahier : **4 encadrés recopiés** et **1 tableau**.',
    items: [
      { text: 'Say what **energy** is, and its unit: the **joule**.', textFr: 'Dire ce qu’est l’**énergie**, et son unité : le **joule**.' },
      { text: 'Recall the ways energy is **stored** and **transferred**.', textFr: 'Citer les façons dont l’énergie est **stockée** et **transférée**.' },
      { text: 'Describe each energy **store** and **transfer**.', textFr: 'Décrire chaque **stock** et chaque **transfert** d’énergie.' },
      { text: 'Give an **example** of each one.', textFr: 'Donner un **exemple** de chacun.' },
      { text: 'Say which stores last **longer** than others.', textFr: 'Dire quels stocks durent **plus longtemps** que d’autres.' },
    ],
  },

  // 29. Exit question
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    title: 'Lesson Complete!',
    titleFr: 'Leçon terminée !',
    subtitle: 'Exit question: name the energy store in a **battery**, a **squeezed** sponge and a **hot** iron.',
    subtitleFr: 'Question de sortie : nomme le stock d’énergie dans une **pile**, une éponge **comprimée** et un fer à repasser **chaud**.',
  },
]
