// content/y7-science/U04_1/slides.js
// Year 7 Science · 4.1 Characteristics of living organisms. One 50-minute
// period, the first lesson of Unit 4 (Grouping and identifying organisms).
// Source: Learner's Book pages 127–129.
//
// ENGLISH AND FRENCH ONLY, like every Year 7 deck from Unit 4 / 15 October:
// every string has an …Fr twin and no …Vn twin. The diagrams stay in English.
//
// THE ARC (the shape of Coffee, Carbon and Stars and 3.4–3.7; plan.js has the
// timings). Three short commands, one for each part:
//   Spot it    one living thing and one never-alive thing in the room
//              (Getting started); what can the living one do? A tree has no
//              heart and does not breathe like you, but it is alive. Organism.
//   Name them  the book's polar bears, a letter a press: M R S G R E N. Is
//              respiration breathing? (vote) M, R, S. "Sensitive" in everyday
//              English and in science; the sensitive plant, filmed. G, R, E, N.
//              Back to the starter's list. Mr Bowen's new pet (a rock).
//              Alive or Not?, everyone standing, with real traps.
//   Test it    Activity 4.1.1, is a car alive? Groups, then the seven checked a
//              press at a time. An organism does all seven. Questions 1–7.
//
// The goals slide (2) and the checklist (19) say the same three things, so
// the lesson ends where it said it would; the starter's list comes back on 12.
//
// COPY-DOWN: 4 written panels — organism (5), M R S (8), G R E N (11), all
// seven (17). No drawing. Each panel is the definition only.
//
// WRITING RULE (the 2.5 density): one hook line, short sentences, and the body
// never repeats the write note, a label or the caption.

import { DIAGRAMS } from './diagrams.js'
import { BearSeven, CarCheck } from './seven.jsx'
import { PetRock } from './story.jsx'
import { AliveOrNot } from './game.jsx'
import { MimosaFilm } from './film.jsx'
import { BlankQuestions } from './quiz.jsx'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'

export const slides = [
  // ════════════════════════════════════════════════════════════════════════
  // SPOT IT — living or not
  // ════════════════════════════════════════════════════════════════════════

  // 1. Hero + starter (Getting started, page 127)
  {
    layout: 'hero',
    color: GREEN,
    icon: 'Sprout',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    eyebrow: '4.1 · Characteristics of living organisms',
    eyebrowFr: '4.1 · Les caractéristiques du vivant',
    title: 'Is It Alive?',
    titleFr: 'Est-ce vivant ?',
    date: '9 Nov 2026',
    card: {
      icon: 'Search',
      badge: 'Starter',
      badgeFr: 'Pour commencer',
      text: 'Look around the room. Write down **one living thing** and **one thing that has never been alive**.',
      textFr: 'Regarde autour de toi. Écris **une chose vivante** et **une chose qui n’a jamais été vivante**.',
    },
  },

  // 2. Today's goals (the checklist on slide 19 ticks off the same three)
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Today',
    eyebrowFr: 'Aujourd’hui',
    title: 'Today You Will…',
    titleFr: 'Aujourd’hui, tu vas…',
    text: 'What makes a living thing **alive**?',
    textFr: 'Qu’est-ce qui rend une chose **vivante** ?',
    columns: [
      {
        heading: 'Spot it',
        headingFr: 'Repérer',
        accent: GREEN,
        icon: 'Search',
        inlineSvg: DIAGRAMS.PIC_SPOT_IT,
        caption: 'Tell what is alive and what is not.',
        captionFr: 'Dire ce qui est vivant, et ce qui ne l’est pas.',
      },
      {
        heading: 'Name them',
        headingFr: 'Nommer',
        accent: ORANGE,
        icon: 'ListOrdered',
        inlineSvg: DIAGRAMS.PIC_NAME_IT,
        caption: 'Learn seven things living things do.',
        captionFr: 'Apprendre sept choses que fait le vivant.',
      },
      {
        heading: 'Test it',
        headingFr: 'Tester',
        accent: PURPLE,
        icon: 'Microscope',
        inlineSvg: DIAGRAMS.PIC_TEST_IT,
        caption: 'Find out if a car is alive.',
        captionFr: 'Découvrir si une voiture est vivante.',
      },
    ],
  },

  // 3. Getting started, part 2 (page 127): pairs make a list
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Getting started · pairs',
    eyebrowFr: 'Pour démarrer · en binôme',
    title: 'What Can It Do?',
    titleFr: 'Que sait-elle faire ?',
    text: 'What can your **living** thing do that your **non-living** thing **cannot**?',
    textFr: 'Que peut faire ta chose **vivante** que ta chose **non vivante** ne peut **pas** faire ?',
    sub: 'Make a list with your partner. Be ready to share.',
    subFr: 'Fais une liste avec ton binôme. Prépare-toi à la partager.',
  },

  // 4. A tree has no heart (page 128)
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Leaf',
    eyebrow: 'Page 128',
    eyebrowFr: 'Page 128',
    title: 'How Do You Know?',
    titleFr: 'Comment le sais-tu ?',
    ratio: 45,
    inlineSvg: DIAGRAMS.TREE,
    content: 'A person **breathes**, and their **heart** beats. A tree has no heart, and does not breathe like you.',
    contentFr: 'Une personne **respire**, et son **cœur** bat. Un arbre n’a pas de cœur, et ne respire pas comme toi.',
    reveal: {
      prompt: 'Is the tree alive? How do you know?',
      promptFr: 'L’arbre est-il vivant ? Comment le sais-tu ?',
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '**Yes.** It **grows**, and it makes **seeds**. We need a better test than a heartbeat.',
      answerFr: '**Oui.** Il **grandit**, et il fait des **graines**. Il faut un meilleur test que le cœur.',
    },
  },

  // 5. Organism (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Sprout',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'Organism',
    titleFr: 'Organisme',
    ratio: 45,
    inlineSvg: DIAGRAMS.ORGANISMS,
    content: 'The bears, the tree, the buffalo, and Mr Bowen: all **organisms**.',
    contentFr: 'Les ours, l’arbre, le buffle et M. Bowen : tous des **organismes**.',
    notes: [
      {
        tone: 'write',
        text: '**Organism:** a living thing.',
        textFr: '**Organisme (organism) :** un être vivant.',
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // NAME THEM — the seven characteristics
  // ════════════════════════════════════════════════════════════════════════

  // 6. The stepper: the book's polar bears, a letter a press (page 128)
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'ListOrdered',
    eyebrow: 'Say it first · page 128',
    eyebrowFr: 'Dis-le d’abord · page 128',
    title: 'Seven Things a Polar Bear Does',
    titleFr: 'Sept choses que fait un ours polaire',
    widget: BearSeven,
    caption: 'Every organism does these seven. The book calls them **characteristics**.',
    captionFr: 'Tout organisme fait ces sept choses. Le livre les appelle des **characteristics** (caractéristiques).',
  },

  // 7. Vote: is respiration breathing?
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowFr: 'Vote avec une main',
    title: 'What Is Respiration?',
    titleFr: 'Qu’est-ce que la respiration ?',
    text: 'In science, **respiration** means…',
    textFr: 'En sciences, la **respiration**, c’est…',
    columns: [
      { heading: 'A · left hand up', headingFr: 'A · main gauche levée', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_BREATHING },
      { heading: 'B · right hand up', headingFr: 'B · main droite levée', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_CELLS },
    ],
  },

  // 8. Answer B: movement, respiration, sensitivity (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Pencil',
    eyebrow: 'Answer: B · key words',
    eyebrowFr: 'Réponse : B · mots clés',
    title: 'M, R, S',
    titleFr: 'M, R, S',
    ratio: 36,
    inlineSvg: DIAGRAMS.MRS,
    content: '**Breathing** brings in oxygen. **Respiration** uses it, inside your cells.',
    contentFr: 'Respirer (**breathing**) fait entrer l’oxygène. La **respiration** l’utilise, dans tes cellules.',
    notes: [
      {
        tone: 'write',
        text: '**Movement:** changing position or shape.\n**Respiration:** breaking down food inside cells to get energy.\n**Sensitivity:** noticing changes around it.',
        textFr: '**Mouvement (movement) :** changer de position ou de forme.\n**Respiration :** décomposer la nourriture dans les cellules pour avoir de l’énergie.\n**Sensibilité (sensitivity) :** remarquer les changements autour de soi.',
      },
    ],
  },

  // 9. English check: two meanings of "sensitive"
  {
    layout: 'compare',
    accent: BLUE,
    icon: 'Languages',
    eyebrow: 'English check',
    eyebrowFr: 'L’anglais',
    title: 'Two Meanings of Sensitive',
    titleFr: 'Deux sens de « sensitive »',
    columns: [
      {
        heading: 'Everyday English',
        headingFr: 'L’anglais de tous les jours',
        accent: PURPLE,
        icon: 'MessageSquare',
        inlineSvg: DIAGRAMS.SENSE_EVERYDAY,
        caption: 'Mr Bowen is **sensitive**: he cries at sad films.',
        captionFr: 'M. Bowen est **sensitive** (sensible) : il pleure devant les films tristes.',
      },
      {
        heading: 'Science',
        headingFr: 'Les sciences',
        accent: GREEN,
        icon: 'Sun',
        inlineSvg: DIAGRAMS.SENSE_SCIENCE,
        caption: 'A plant is **sensitive** to light: it notices light and turns to it.',
        captionFr: 'Une plante est **sensitive** à la lumière : elle la remarque et se tourne vers elle.',
      },
    ],
  },

  // 10. Film: the sensitive plant (Mimosa pudica)
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Clapperboard',
    eyebrow: 'Watch · a real plant',
    eyebrowFr: 'Regarde · une vraie plante',
    title: 'The Sensitive Plant',
    titleFr: 'La sensitive',
    widget: MimosaFilm,
    caption: 'You know it: **cây xấu hổ**. Which **two** of the seven do you see?',
    captionFr: 'Tu la connais : **cây xấu hổ**. Quelles **deux** caractéristiques vois-tu ?',
  },

  // 11. Growth, reproduction, excretion, nutrition (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Pencil',
    eyebrow: 'Key words',
    eyebrowFr: 'Mots clés',
    title: 'G, R, E, N',
    titleFr: 'G, R, E, N',
    ratio: 36,
    inlineSvg: DIAGRAMS.GREN,
    content: 'Plants **make** their own food, using light. Bears **eat** meat.',
    contentFr: 'Les plantes **fabriquent** leur nourriture, avec la lumière. Les ours **mangent** de la viande.',
    notes: [
      {
        tone: 'write',
        text: '**Growth:** getting bigger.\n**Reproduction:** making more organisms of the same kind.\n**Excretion:** getting rid of waste, such as carbon dioxide.\n**Nutrition:** taking in or making food.',
        textFr: '**Croissance (growth) :** devenir plus grand.\n**Reproduction :** faire d’autres organismes de la même espèce.\n**Excrétion (excretion) :** rejeter les déchets, comme le dioxyde de carbone.\n**Nutrition :** prendre ou fabriquer sa nourriture.',
      },
    ],
  },

  // 12. Back to the starter: the pairs' lists
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Back to the starter',
    eyebrowFr: 'Retour au début',
    title: 'Your List',
    titleFr: 'Ta liste',
    text: 'Look at your list. Which of the **seven** did you find?',
    textFr: 'Regarde ta liste. Lesquelles des **sept** as-tu trouvées ?',
    reveal: {
      label: 'Most lists',
      labelFr: 'La plupart des listes',
      answer: 'Most lists have **movement**, **nutrition** (eating) and **growth**. **Excretion** and **respiration** are hard to see.',
      answerFr: 'La plupart des listes ont **movement**, **nutrition** (manger) et **growth**. **Excretion** et **respiration** sont difficiles à voir.',
    },
  },

  // 13. What happens next? Mr Bowen's new pet (deadpan)
  {
    layout: 'showcase',
    accent: BLUE,
    icon: 'MessageSquare',
    eyebrow: 'What happens next?',
    eyebrowFr: 'Que se passe-t-il ensuite ?',
    title: 'Mr Bowen’s New Pet',
    titleFr: 'Le nouvel animal de M. Bowen',
    widget: PetRock,
    caption: 'Before each step, **predict**: what happens next?',
    captionFr: 'Avant chaque étape, **prédis** : que se passe-t-il ensuite ?',
  },

  // 14. Alive or Not?: the whole class, standing
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Trophy',
    eyebrow: 'A game · everyone stands',
    eyebrowFr: 'Un jeu · tout le monde debout',
    title: 'Alive or Not?',
    titleFr: 'Vivant ou pas ?',
    widget: AliveOrNot,
    caption: '**Arms up:** alive. **Arms down:** not alive. The last ones standing win a prize ticket!',
    captionFr: '**Bras en haut :** vivant. **Bras en bas :** pas vivant. Les derniers debout gagnent un ticket !',
  },

  // ════════════════════════════════════════════════════════════════════════
  // TEST IT — is a car alive?
  // ════════════════════════════════════════════════════════════════════════

  // 15. Activity 4.1.1 (page 129): groups
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'Activity 4.1.1 · groups',
    eyebrowFr: 'Activité 4.1.1 · en groupes',
    title: 'Is a Car Alive?',
    titleFr: 'Une voiture est-elle vivante ?',
    ratio: 45,
    inlineSvg: DIAGRAMS.CAR,
    content: 'A car uses **fuel** and **oxygen** to move. It gives off **waste gases**. Some cars **sense** the dark and turn on their lights.',
    contentFr: 'Une voiture utilise du **carburant** et de l’**oxygène** pour avancer. Elle rejette des **gaz**. Certaines **sentent** le noir et allument leurs phares.',
    notes: [
      {
        tone: 'task',
        badge: false,
        text: 'List how a car is **like** an organism, and how it is **different**.',
        textFr: 'Liste en quoi une voiture **ressemble** à un organisme, et en quoi elle est **différente**.',
      },
    ],
  },

  // 16. The car, checked against the seven
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'ListChecks',
    eyebrow: 'Check it',
    eyebrowFr: 'Vérifie',
    title: 'The Car and the Seven',
    titleFr: 'La voiture et les sept',
    widget: CarCheck,
    caption: 'Did your group find these?',
    captionFr: 'Ton groupe les a-t-il trouvées ?',
  },

  // 17. Put it together: all seven (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'CheckCircle2',
    eyebrow: 'Put it together',
    eyebrowFr: 'En résumé',
    title: 'All Seven',
    titleFr: 'Les sept',
    ratio: 45,
    inlineSvg: DIAGRAMS.ALL_SEVEN,
    content: 'And Mr Bowen’s rock? It does **none** of them.',
    contentFr: 'Et le caillou de M. Bowen ? Il n’en fait **aucune**.',
    notes: [
      {
        tone: 'write',
        text: 'A living organism does **all seven**. A non-living thing may do some, but **not all**.',
        textFr: 'Un organisme vivant fait **les sept**. Une chose non vivante peut en faire quelques-unes, mais **pas toutes**.',
      },
    ],
  },

  // 18. Questions 1–7 (pages 128–129), on whiteboards
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'PenLine',
    eyebrow: 'Questions 1–7 · whiteboards',
    eyebrowFr: 'Questions 1 à 7 · ardoises',
    title: 'Fill the Gap',
    titleFr: 'Complète la phrase',
    widget: BlankQuestions,
    caption: 'Use a word **once**, **more than once**, or **not at all**.',
    captionFr: 'Un mot peut servir **une fois**, **plusieurs fois**, ou **pas du tout**.',
  },

  // 19. Checklist: slide 2's goals, ticked off
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
    content: '> Check your notebook: **4 written panels**.',
    contentFr: '> Vérifie ton cahier : **4 encadrés recopiés**.',
    items: [
      { text: 'Say if something is a living **organism** or not.', textFr: 'Dire si une chose est un **organisme** vivant ou non.' },
      { text: 'List the seven **characteristics**: **MRS GREN**.', textFr: 'Citer les sept **caractéristiques** : **MRS GREN**.' },
      { text: 'Say what each of the seven means.', textFr: 'Dire ce que veut dire chacune des sept.' },
      { text: 'Explain why a car is **not alive**.', textFr: 'Expliquer pourquoi une voiture n’est **pas vivante**.' },
    ],
  },

  // 20. Exit: a robot vacuum cleaner
  {
    layout: 'hero',
    color: GREEN,
    icon: 'Target',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    eyebrow: 'Exit question',
    eyebrowFr: 'Question de sortie',
    title: 'A Robot Vacuum Cleaner',
    titleFr: 'Un robot aspirateur',
    subtitle: 'It moves, and it **senses** walls. Is it **alive**? Name **two** of the seven it **cannot** do.',
    subtitleFr: 'Il bouge, et il **sent** les murs. Est-il **vivant** ? Nomme **deux** des sept qu’il ne sait **pas** faire.',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '**Not alive.** It cannot **grow** or **reproduce**. It never eats (**nutrition**), and it has no cells for **respiration**.',
      answerFr: '**Pas vivant.** Il ne peut pas **grandir** ni se **reproduire**. Il ne mange jamais (**nutrition**), et il n’a pas de cellules pour la **respiration**.',
    },
  },
]
