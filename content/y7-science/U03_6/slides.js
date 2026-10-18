// content/y7-science/U03_6/slides.js
// Year 7 Science · 3.6 Changes in energy. Monday 26 October 2026 (provisional).
// Source: Learner's Book pages 111–116 (Unit 3 Forces and energy).
//
// ENGLISH AND FRENCH ONLY. From 15 October the Year 7 lessons drop Vietnamese
// (meta.vietnamese: false), so every string has an …Fr twin and no …Vn twin.
// The store names are the book's 3.5 names, in English everywhere: kinetic,
// chemical, thermal, elastic potential, gravitational potential, electrical,
// sound, light. The French gives its own name beside them, and says
// "transformer" for the English "change".
//
// ONE LESSON, THEN A LAB SECTION. Slides 1–23 are the 50-minute lesson and end
// on their own exit slide. Slides 24–31 are "Lab day: Candle Energy", the
// book's Think like a scientist, for whenever the class does the practical —
// its own starter, method, safety, questions and wrap-up. The lesson only sets
// the experiment up and has the class commit to a guess (slide 21), so it does
// not spoil the lab; the sample results (slide 29) are backup data there.
//
// ONE IDEA HOLDS IT TOGETHER: FOLLOW THE ENERGY. Every example asks the same two
// things — where did the energy come from, and what did it change to? — and
// the answer is always written the book's way: a box for each energy, an arrow
// for each change. The class FEELS it first (rub your hands, stand up), then
// predicts it one press at a time (the gas power station, then Vietnam's Hòa
// Bình dam on whiteboards), names it in a film (The Page Turner), and meets the
// harmful side (Typhoon Yagi). The book's questions 1–3 are done on
// whiteboards. The book's Activity (a display about freezing water) is in
// plan.js as an extension.
//
// NOT LIKE 3.1. 3.1 ran vote → desk test → film → story. This deck runs
// feel it → see it in a photo → predict it, one step at a time → draw it →
// spot it in a film → plan an experiment and guess, and keeps its one vote
// for the lab (bar chart or line graph), where two good answers compete.
//
// COPY-DOWN, ON A BUDGET: 4 short write panels (energy is changed or
// transferred · energy diagram · process and event · useful energy change)
// and 2 small drawings (the television diagram; the power station chain).
// Everything else is on whiteboards or said aloud.
//
// WRITING RULE (the 2.5 density): short sentences, one idea each, and the body
// text never repeats the write note, a label or the caption.

import { DIAGRAMS } from './diagrams.js'
import { PowerChain, DamChain, PageTurner } from './widgets.jsx'
import pot from './images/pot.jpg'
import stairs from './images/stairs.jpg'
import candle from './images/candle.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'
const RED = '#c8102e'

export const slides = [
  // ══════════════════════════════════════════════════════════════════════════
  // THE LESSON (one period, slides 1–23)
  // ══════════════════════════════════════════════════════════════════════════

  // ── START: WHAT DO YOU REMEMBER? ────────────────────────────────────────
  // 1. Hero + the book's Getting started
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Zap',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    date: '26 Oct 2026',
    eyebrow: '3.6 · Forces and energy',
    eyebrowFr: '3.6 · Forces et énergie',
    title: 'Changes in Energy',
    titleFr: 'Les changements d’énergie',
    card: {
      icon: 'Pencil',
      badge: 'Starter',
      badgeFr: 'Pour commencer',
      text: 'With a partner, list all the energy **stores** and **transfers** you remember. Give an **example** of each.',
      textFr: 'Avec ton voisin, liste tous les **stocks** (stores) et **transferts** (transfers) d’énergie que tu connais. Donne un **exemple** pour chacun.',
    },
  },

  // 2. The eight from 3.5, the book's own names
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'ListChecks',
    eyebrow: 'Starter check',
    eyebrowFr: 'Correction',
    title: 'Did You Get All Eight?',
    titleFr: 'As-tu les huit ?',
    inlineSvg: DIAGRAMS.EIGHT,
    caption: 'Tick each one you wrote.',
    captionFr: 'Coche ceux que tu as écrits.',
  },

  // ── ENERGY CHANGES WHEN SOMETHING HAPPENS ───────────────────────────────
  // 3. Feel it first
  {
    layout: 'statement',
    accent: GREEN,
    eyebrow: 'Try it',
    eyebrowFr: 'Essaie',
    title: 'Rub Your Hands',
    titleFr: 'Frotte-toi les mains',
    text: 'Rub your hands together, **fast**, for 10 seconds.',
    textFr: 'Frotte tes mains, **vite**, pendant 10 secondes.',
    sub: 'Now touch your cheeks. What do you feel?',
    subFr: 'Touche tes joues. Que sens-tu ?',
    reveal: {
      label: 'What changed?',
      labelFr: 'Qu’est-ce qui a changé ?',
      answer: '**Warm hands!** Movement (**kinetic** energy) changed to **thermal** energy.',
      answerFr: '**Mains chaudes !** L’énergie **cinétique** (le mouvement) s’est transformée en **thermique**.',
    },
  },

  // 4. The book's Question 1, asked before it is answered
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Whiteboards',
    eyebrowFr: 'Ardoises',
    title: 'Finish the Sentence',
    titleFr: 'Complète la phrase',
    text: 'When something happens, energy is ______ or ______.',
    textFr: 'When something happens, energy is ______ or ______.',
    sub: 'Question 1: finish it on your whiteboard.',
    subFr: 'Question 1 : complète-la en anglais sur ton ardoise.',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '**changed** · **transferred**',
      answerFr: '**changed** (transformée) · **transferred** (transférée)',
    },
  },

  // 5. The key word, with the chain drawn the book's way
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'Energy Changes',
    titleFr: 'L’énergie se transforme',
    ratio: 40,
    inlineSvg: DIAGRAMS.HANDS_CHAIN,
    content: 'Your **breakfast** gave your hands the energy to move.',
    contentFr: 'Ton **petit-déjeuner** a donné à tes mains l’énergie pour bouger.',
    notes: [
      {
        tone: 'write',
        text: 'When something happens, energy is **changed** or **transferred**.\nRubbing your hands changes **kinetic** energy to **thermal** energy.',
        textFr: 'Quand quelque chose se passe, l’énergie est **transformée** (changed) ou **transférée** (transferred).\nSe frotter les mains transforme l’énergie **cinétique** en énergie **thermique**.',
      },
    ],
  },

  // 6. The book's cooking pot: ask, then follow the energy
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Flame',
    eyebrow: 'Learner’s Book, page 112',
    eyebrowFr: 'Manuel, page 112',
    title: 'The Cooking Pot',
    titleFr: 'La marmite',
    ratio: 40,
    image: pot,
    content: 'Where does the energy **come from**? Where does it **go**?',
    contentFr: 'D’où **vient** l’énergie ? Où **va**-t-elle ?',
    reveal: {
      label: 'Follow the energy',
      labelFr: 'Suis l’énergie',
      answer: '**Wood** stores **chemical** energy.\n**Burning** changes it to **thermal** energy.\nThe thermal energy is **transferred** to the pot and the food.',
      answerFr: 'Le **bois** stocke de l’énergie **chimique**.\nLa **combustion** la transforme en énergie **thermique**.\nL’énergie thermique est **transférée** à la marmite et à la nourriture.',
    },
  },

  // 7. The book's stairs, acted out
  {
    layout: 'split',
    accent: GREEN,
    icon: 'MoveUp',
    eyebrow: 'Act it out',
    eyebrowFr: 'Mime-le',
    title: 'Walking Up the Stairs',
    titleFr: 'Monter l’escalier',
    ratio: 40,
    image: stairs,
    content: 'Batu Caves, Malaysia: **272 steps**.\n\nStand up, slowly. Your head is now **higher**.',
    contentFr: 'Batu Caves, Malaisie : **272 marches**.\n\nLève-toi, lentement. Ta tête est maintenant plus **haute**.',
    reveal: {
      label: 'Three energies',
      labelFr: 'Trois énergies',
      answer: '**chemical** (your food) → **kinetic** (you move) → **gravitational potential** (you are higher)',
      answerFr: '**chimique** (ta nourriture) → **cinétique** (tu bouges) → **potentielle de pesanteur** (tu es plus haut)',
    },
  },

  // ── DRAW IT THE BOOK'S WAY ──────────────────────────────────────────────
  // 8. Draw This: the book's television diagram (p.113), and how to say it
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw this · page 113',
    eyebrowFr: 'À dessiner · page 113',
    title: 'Energy Diagrams',
    titleFr: 'Les diagrammes d’énergie',
    ratio: 40,
    inlineSvg: DIAGRAMS.DRAW_DIAGRAMS,
    drawThis: true,
    content: 'A television changes **one** energy into **two**.',
    contentFr: 'Une télévision transforme **une** énergie en **deux**.',
    notes: [
      {
        tone: 'write',
        text: '**Energy diagram:** write each energy in a **box**. Draw an **arrow** for each change.',
        textFr: '**Diagramme d’énergie (energy diagram) :** écris chaque énergie dans une **case**. Trace une **flèche** pour chaque transformation.',
      },
    ],
  },

  // 9. The book's power station, one store at a time — then draw the chain
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Zap',
    eyebrow: 'Learner’s Book, pages 112–113',
    eyebrowFr: 'Manuel, pages 112–113',
    title: 'A Gas Power Station',
    titleFr: 'Une centrale au gaz',
    widget: PowerChain,
    drawThis: true,
    caption: 'Say the next energy **before** Mr Bowen presses Next. Then draw the chain.',
    captionFr: 'Dis l’énergie suivante **avant** le clic de M. Bowen. Puis dessine la chaîne.',
  },

  // 10. Your turn: Vietnam's Hòa Bình hydropower dam
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Waves',
    eyebrow: 'Your turn · whiteboards',
    eyebrowFr: 'À toi · ardoises',
    title: 'Hòa Bình Dam, Vietnam',
    titleFr: 'Le barrage de Hòa Bình, Viêt Nam',
    widget: DamChain,
    caption: 'No fuel burns here. Write the chain on your whiteboard **first**.',
    captionFr: 'Ici, rien ne brûle. Écris la chaîne sur ton ardoise **d’abord**.',
  },

  // ── NOT ALWAYS HELPFUL ──────────────────────────────────────────────────
  // 11. Typhoon Yagi, September 2024
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Wind',
    eyebrow: 'Not always helpful',
    eyebrowFr: 'Pas toujours utile',
    title: 'Typhoon Yagi, 2024',
    titleFr: 'Le typhon Yagi, 2024',
    inlineSvg: DIAGRAMS.YAGI,
    caption: 'Strong wind can transfer energy in a damaging way. A tree falls: what energy change?',
    captionFr: 'Un vent fort peut transférer de l’énergie et faire des dégâts. Un arbre tombe : quelle transformation ?',
  },

  // 12. Question only: where did the wind's energy come from?
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Think',
    eyebrowFr: 'Réfléchis',
    title: 'Where Does the Wind Get Its Energy?',
    titleFr: 'D’où vient l’énergie du vent ?',
    text: 'Yagi’s wind had a huge store of **kinetic** energy.',
    textFr: 'Le vent de Yagi avait beaucoup d’énergie **cinétique**.',
    sub: 'Where did it come from?',
    subFr: 'D’où venait-elle ?',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: 'From the **warm sea** (the Sun heated it). Its **thermal** energy changes to **kinetic** energy in the wind.',
      answerFr: 'De la **mer chaude** (le Soleil l’a chauffée) : son énergie **thermique** se transforme en **cinétique** dans le vent.',
    },
  },

  // ── THE KEY WORDS: CHANGE, PROCESS, EVENT ───────────────────────────────
  // 13. English check: three words that mean something else at home
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'English check',
    eyebrowFr: 'Point d’anglais',
    title: 'Change, Process, Event',
    titleFr: 'Change, process, event',
    inlineSvg: DIAGRAMS.WORDS,
    caption: 'Same words. In science, they are about energy.',
    captionFr: 'Mêmes mots. En sciences, ils parlent d’énergie : change = transformer, process = processus, event = événement.',
  },

  // 14. Process and event (write), with Mr Bowen's book
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Key words',
    eyebrowFr: 'Mots clés',
    title: 'Process and Event',
    titleFr: 'Processus et événement',
    ratio: 40,
    inlineSvg: DIAGRAMS.PROCESS_EVENT,
    content: 'A book on a shelf: its energy is **stored**. It does nothing until Mr Bowen pushes it.',
    contentFr: 'Un livre sur une étagère : son énergie est **stockée**. Il ne fait rien… jusqu’à ce que M. Bowen le pousse.',
    notes: [
      {
        tone: 'write',
        text: '**Process:** something that keeps going and changes energy, like burning.\n**Event:** something that happens once and changes energy, like a book falling.',
        textFr: '**Processus (process) :** quelque chose qui dure et transforme l’énergie, comme la combustion.\n**Événement (event) :** quelque chose qui arrive une fois et transforme l’énergie, comme un livre qui tombe.',
      },
    ],
  },

  // 15. Spot the changes in a film: The Page Turner
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Clapperboard',
    eyebrow: 'Whiteboards',
    eyebrowFr: 'Ardoises',
    title: 'The Page Turner',
    titleFr: 'The Page Turner',
    widget: PageTurner,
    caption: 'A machine to turn one page.',
    captionFr: 'Une machine pour tourner une page.',
  },

  // ── USEFUL CHANGES AND THE BOOK'S QUESTIONS ─────────────────────────────
  // 16. Useful energy change (write): the book's own candle, lit at the front.
  // Ask "what do we want from it?" BEFORE showing the slide (the note answers it).
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Lightbulb',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'A Useful Energy Change',
    titleFr: 'Un changement d’énergie utile',
    ratio: 45,
    image: candle,
    content: 'It gives light **and** heat. We light it for the **light**.',
    contentFr: 'Elle donne de la lumière **et** de la chaleur. On l’allume pour la **lumière**.',
    notes: [
      {
        tone: 'write',
        text: '**Useful energy change:** energy is changed in a way that we **want**.\nA candle: **chemical to light**.',
        textFr: '**Changement d’énergie utile (useful energy change) :** l’énergie est transformée comme on le **veut**.\nUne bougie : **chimique → lumineuse** (chemical to light).',
      },
    ],
  },

  // 17. Question 2, with a lamp and a phone at the front
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Whiteboards · page 114',
    eyebrowFr: 'Ardoises · page 114',
    title: 'Question 2',
    titleFr: 'Question 2',
    content:
      'Write the **useful** energy change, like **chemical to light**.\n\n' +
      '**a** an electric lamp · **b** a bus · **c** a radio',
    contentFr:
      'Écris le changement d’énergie **utile**, comme **chemical to light**.\n\n' +
      '**a** une lampe électrique · **b** un bus · **c** une radio',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**a** electrical to light · **b** chemical to kinetic · **c** electrical to sound',
      answerFr: '**a** electrical to light (électrique → lumineuse)\n**b** chemical to kinetic (chimique → cinétique)\n**c** electrical to sound (électrique → sonore)',
    },
  },

  // 18. Question 3 a–b: draw a, say b (the fire chain has been drawn already)
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Whiteboards · page 114',
    eyebrowFr: 'Ardoises · page 114',
    title: 'Question 3, Parts a and b',
    titleFr: 'Question 3, a et b',
    content:
      'Energy diagrams, on your whiteboard.\n\n' +
      '**a** a motorcycle that uses petrol to move: **draw it**\n' +
      '**b** a wood fire for cooking: **say it**',
    contentFr:
      'Des diagrammes d’énergie, sur ton ardoise.\n\n' +
      '**a** une moto qui roule à l’essence : **dessine-le**\n' +
      '**b** un feu de bois pour cuisiner : **dis-le**',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**a** chemical → kinetic\n**b** "chemical to thermal"',
      answerFr: '**a** chimique → cinétique\n**b** « chemical to thermal » (chimique → thermique)',
    },
  },

  // 19. Question 3 c–d
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Whiteboards · page 114',
    eyebrowFr: 'Ardoises · page 114',
    title: 'Question 3, Parts c and d',
    titleFr: 'Question 3, c et d',
    content:
      'Draw an energy diagram for:\n\n' +
      '**c** a bird using movement to fly higher\n' +
      '**d** a ball rolling down a hill',
    contentFr:
      'Dessine un diagramme d’énergie pour :\n\n' +
      '**c** un oiseau qui bouge pour monter plus haut\n' +
      '**d** une balle qui descend une colline',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**c** kinetic → gravitational potential\n**d** gravitational potential → kinetic',
      answerFr: '**c** cinétique → potentielle de pesanteur\n**d** potentielle de pesanteur → cinétique',
    },
  },

  // ── THINK LIKE A SCIENTIST: SET IT UP AND GUESS ─────────────────────────
  // 20. The set-up, and why not stir with the thermometer (Question 1)
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'FlaskConical',
    eyebrow: 'Think like a scientist · page 115',
    eyebrowFr: 'Pense comme un scientifique · page 115',
    title: 'Candle Energy',
    titleFr: 'L’énergie d’une bougie',
    ratio: 40,
    inlineSvg: DIAGRAMS.CANDLE_SETUP,
    content: 'Heat cooking oil with a candle. Read the temperature **every minute**. Stop at **10 °C** hotter.',
    contentFr: 'Chauffe de l’huile avec une bougie. Lis la température **chaque minute**. Arrête à **10 °C** de plus.',
    reveal: {
      prompt: 'Stir with the rod, **not** the thermometer. Why?',
      promptFr: 'Remue avec l’agitateur, **pas** avec le thermomètre. Pourquoi ?',
      label: 'Answer',
      labelFr: 'Réponse',
      answer: 'It can **break**: it is thin glass. It is for measuring, not stirring.',
      answerFr: 'Il peut **casser** : c’est du verre fin. Il sert à mesurer, pas à remuer.',
    },
  },

  // 21. Commit to a guess before any data exists
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Predict',
    eyebrowFr: 'Prédis',
    title: 'How Long Will It Take?',
    titleFr: 'Combien de temps ?',
    text: 'How many **minutes** will one candle take to make the oil **10 °C** hotter?',
    textFr: 'Combien de **minutes** faut-il à une bougie pour chauffer l’huile de **10 °C** ?',
    sub: 'Write your guess in your notebook. The lab will tell us.',
    subFr: 'Écris ton estimation dans ton cahier. Le labo nous le dira.',
  },

  // ── CLOSE ───────────────────────────────────────────────────────────────
  // 22. Checklist (the book's summary checklist, plus the key words)
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
    content: '> Check your notebook: **4 written panels** and **2 drawings**.',
    contentFr: '> Vérifie ton cahier : **4 encadrés recopiés** et **2 dessins**.',
    items: [
      { text: 'Say that energy is **changed** or **transferred** when something happens.', textFr: 'Dire que l’énergie est **transformée** ou **transférée** quand quelque chose se passe.' },
      { text: 'Give **examples** of changes in energy.', textFr: 'Donner des **exemples** de transformations d’énergie.' },
      { text: 'Draw **diagrams** to show energy changes.', textFr: 'Dessiner des **diagrammes** de transformations d’énergie.' },
      { text: 'Tell a **process** from an **event**.', textFr: 'Distinguer un **processus** d’un **événement**.' },
      { text: 'Name a **useful** energy change.', textFr: 'Nommer un changement d’énergie **utile**.' },
    ],
  },

  // 23. Exit question
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    title: 'Lesson Complete!',
    titleFr: 'Leçon terminée !',
    subtitle: 'Exit question: draw an energy diagram for a **torch**. Clue: it has a battery.',
    subtitleFr: 'Question de sortie : dessine un diagramme d’énergie pour une **lampe de poche** (torch). Indice : elle a une pile.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // LAB DAY: CANDLE ENERGY (slides 24–31) — the book's Think like a scientist,
  // pp. 115–116, for the lab period. Its own starter and its own wrap-up.
  // ══════════════════════════════════════════════════════════════════════════

  // 24. Lab starter: back to the guess
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'FlaskConical',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    eyebrow: '3.6 · Lab day',
    eyebrowFr: '3.6 · Jour de labo',
    title: 'Lab Day: Candle Energy',
    titleFr: 'Labo : l’énergie d’une bougie',
    card: {
      icon: 'Pencil',
      badge: 'Starter',
      badgeFr: 'Pour commencer',
      text: 'Find your guess: how many minutes to make the oil **10 °C** hotter? Tell a partner **why**.',
      textFr: 'Retrouve ton estimation : combien de minutes pour chauffer l’huile de **10 °C** ? Dis à ton voisin **pourquoi**.',
    },
  },

  // 25. The book's method, steps 1–7
  {
    layout: 'steps',
    accent: PURPLE,
    icon: 'ListOrdered',
    eyebrow: 'Think like a scientist · page 115',
    eyebrowFr: 'Pense comme un scientifique · page 115',
    title: 'The Method',
    titleFr: 'La méthode',
    inlineSvg: DIAGRAMS.CANDLE_SETUP,
    steps: [
      { text: 'Measure the temperature of the oil. Write it down.', textFr: 'Mesure la température de l’huile. Note-la.' },
      { text: 'Light the candle under the beaker. Start the timer.', textFr: 'Allume la bougie sous le bécher. Lance le chrono.' },
      { text: 'Every minute: stir with the **rod**, then write the time and temperature in a **table**.', textFr: 'Chaque minute : remue avec l’**agitateur**, puis note le temps et la température dans un **tableau**.' },
      { text: 'Stop at **10 °C** hotter. Blow out the candle carefully.', textFr: 'Arrête à **10 °C** de plus. Souffle la bougie avec soin.' },
    ],
  },

  // 26. The book's safety box
  {
    layout: 'callout',
    accent: RED,
    icon: 'ShieldCheck',
    eyebrow: 'Before you light it',
    eyebrowFr: 'Avant d’allumer',
    title: 'Work Safely',
    titleFr: 'Travaille en sécurité',
    content:
      '**Glasses** on. Hair tied back.\n' +
      '**Candle** on the mat: it must not fall over.\n' +
      '**Paper** away from the flame.\n' +
      '**Hot!** Touch nothing until it is cool.',
    contentFr:
      '**Lunettes** sur le nez. Cheveux attachés.\n' +
      '**Bougie** sur la plaque : elle ne doit pas tomber.\n' +
      '**Papier** loin de la flamme.\n' +
      '**Chaud !** Ne touche à rien avant que ça refroidisse.',
  },

  // 27. Questions 2 and 3, after the experiment
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Questions 2 and 3',
    eyebrowFr: 'Questions 2 et 3',
    title: 'Where Did It Come From?',
    titleFr: 'D’où vient-elle ?',
    text: 'The oil got **10 °C** hotter.',
    textFr: 'L’huile a chauffé de **10 °C**.',
    sub: 'Where did the energy come from? What happened to the candle?',
    subFr: 'D’où vient l’énergie ? Qu’est-il arrivé à la bougie ?',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: 'The wax is a fuel: it stores **chemical** energy. Burning changed it to **thermal** energy.\nThe candle got **shorter**: the wax was used up.',
      answerFr: 'La cire est un combustible : elle stocke de l’énergie **chimique**. La combustion l’a transformée en énergie **thermique**.\nLa bougie a **raccourci** : la cire a été utilisée.',
    },
  },

  // 28. Vote (Question 6): no answer on the slide
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowFr: 'Vote avec une main',
    title: 'Bar Chart or Line Graph?',
    titleFr: 'Barres ou courbe ?',
    text: 'Which shows your candle results better?',
    textFr: 'Lequel montre le mieux tes résultats ?',
    columns: [
      {
        heading: 'A · left hand up',
        headingFr: 'A · main gauche levée',
        accent: BLUE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_BAR,
      },
      {
        heading: 'B · right hand up',
        headingFr: 'B · main droite levée',
        accent: ORANGE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_LINE,
      },
    ],
  },

  // 29. Why the line wins, on sample results (backup if a group's are missing)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'TrendingUp',
    eyebrow: 'Sample results',
    eyebrowFr: 'Résultats d’exemple',
    title: 'Why a Line Graph?',
    titleFr: 'Pourquoi une courbe ?',
    ratio: 40,
    inlineSvg: DIAGRAMS.RESULTS_GRAPH,
    content: '**B.** Time and temperature change **smoothly**: a line shows the **trend**.\n\nDraw yours: temperature on the **vertical** axis.',
    contentFr: '**B.** Le temps et la température changent **en continu** : une courbe montre la **tendance** (trend).\n\nTrace la tienne : la température sur l’axe **vertical**.',
    reveal: {
      prompt: 'Here: what was the temperature at **2.5 minutes**?',
      promptFr: 'Ici : quelle était la température à **2.5 minutes** ?',
      label: 'Answer',
      labelFr: 'Réponse',
      answer: 'About **29.5 °C**. A bar chart cannot tell you that.',
      answerFr: 'Environ **29.5 °C**. Un diagramme en barres ne peut pas te le dire.',
    },
  },

  // 30. Questions 4 and 5: not all the energy went into the oil
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'Thermometer',
    eyebrow: 'Questions 4 and 5',
    eyebrowFr: 'Questions 4 et 5',
    title: 'Not All Into the Oil',
    titleFr: 'Pas tout dans l’huile',
    content:
      '**4.** Not all the thermal energy went into the oil. Name **two** other things that got hot.\n\n' +
      '**5.** How could you get **more** energy into the oil?',
    contentFr:
      '**4.** L’huile n’a pas reçu toute l’énergie thermique. Nomme **deux** autres choses qui ont chauffé.\n\n' +
      '**5.** Comment mettre **plus** d’énergie dans l’huile ?',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**4.** The beaker, the gauze, the tripod, the air, the thermometer.\n**5.** Move the candle closer · put a shield round the flame · put a lid on the beaker.',
      answerFr: '**4.** Le bécher, la grille, le trépied, l’air, le thermomètre.\n**5.** Bougie plus près · un écran autour de la flamme · un couvercle sur le bécher.',
    },
  },

  // 31. Lab wrap-up
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    title: 'Lab Complete!',
    titleFr: 'Labo terminé !',
    subtitle: 'Write: "I guessed … minutes. It took … minutes." Was your guess close? Why?',
    subtitleFr: 'Écris : « I guessed … minutes. It took … minutes. » Ton estimation était-elle proche ? Pourquoi ?',
  },
]
