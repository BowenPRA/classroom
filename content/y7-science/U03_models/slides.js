// content/y7-science/U03_models/slides.js
// Year 7 Science · Models: Space and Time. A Unit 3 modelling deck, taught
// after 3.2 (formation of the Solar System) and before 3.3 (movement in space).
//
// ENGLISH AND FRENCH ONLY, like every Year 7 deck from Unit 4 / 15 October:
// every string has an …Fr twin and no …Vn twin. The diagrams stay in English.
//
// TWO PARTS (plan.js has the timings):
//   1 Space   how big (the football Sun, asked as a size vote first); the
//             two kinds of model from 3.2; the Solar System, with 3.2's words
//             and 3.3's question left open; the plane, reviewed; the working
//             Solar System model; limitations (Cambridge asks for them); then
//             the nebula, reviewed from 3.2, and the formation model.
//   2 Time    half-life from Mr Bowen's coffee; Mr Bowen, tragically without
//             his coffee, frozen in a glacier: carbon dating; Last Atom
//             Standing with coins; why not dinosaurs; longer clocks; the age
//             of the Earth (crystals, meteorites, Patterson) and of the Sun (a
//             model Sun that must match the real one); Earth's history as a year.
//
// THE THREAD IS MODELLING. Both meanings from 3.2 are used — a model that
// represents (the globe, the football Sun, the formation model) and a model
// that uses maths to work out what nobody could see (÷ 6.3 billion, half-lives,
// the model Sun). Limitations come once, just before the class judges the
// Solar System model, and are used again for the formation model.
//
// WRITING RULE (the 2.5 density): one hook line, short sentences, and the body
// never repeats the write note, a label or the caption.

import { DIAGRAMS } from './diagrams.js'
import { SolarSystem } from './solar.jsx'
import { PlanetSizes, ScaleShrink } from './sizes.jsx'
import { Formation } from './formation.jsx'
import { CoffeeClock, CarbonClock, LastAtom } from './dating.jsx'
import { SunModel, EarthYear } from './deeptime.jsx'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'
const INDIGO = '#3949ab'

export const slides = [
  // ════════════════════════════════════════════════════════════════════════
  // PART 1 — SPACE: how big, what a model is, the Solar System, how it formed
  // ════════════════════════════════════════════════════════════════════════

  // 1. Hero + starter: a size guess, nothing else
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Telescope',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    eyebrow: 'Unit 3 · Models · Part 1',
    eyebrowFr: 'Unité 3 · Modèles · Partie 1',
    title: 'Models: Space and Time',
    titleFr: 'Modèles : espace et temps',
    card: {
      icon: 'Pencil',
      badge: 'Starter',
      badgeFr: 'Pour commencer',
      text: 'The Sun is the size of a **football**. How big is the **Earth**? Write: **I think … because …**',
      textFr: 'Le Soleil a la taille d’un **ballon de foot**. Quelle taille a la **Terre** ? Écris : **I think … because …**',
    },
  },

  // 2. Vote: the size of the Earth
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowFr: 'Vote avec une main',
    title: 'The Sun Is a Football',
    titleFr: 'Le Soleil est un ballon de foot',
    text: 'If the Sun were a football, the Earth would be …',
    textFr: 'Si le Soleil était un ballon de foot, la Terre serait …',
    columns: [
      { heading: 'A · left hand up', headingFr: 'A · main gauche levée', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_TENNIS },
      { heading: 'B · right hand up', headingFr: 'B · main droite levée', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_PIN },
    ],
  },

  // 3. The football model, one object at a time
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Ruler',
    eyebrow: 'A scale model',
    eyebrowFr: 'Un modèle à l’échelle',
    title: 'Shrink the Solar System',
    titleFr: 'Réduis le système solaire',
    widget: ScaleShrink,
    caption: 'Answer: **B**, a pinhead. Now guess how **far** away, **before** each one is shown.',
    captionFr: 'Réponse : **B**, une tête d’épingle. Devine maintenant à quelle **distance**, **avant** chaque réponse.',
  },

  // 4. True sizes, then the Sun
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Globe',
    eyebrow: 'All to the same scale',
    eyebrowFr: 'Tout à la même échelle',
    title: 'How Big Are the Planets?',
    titleFr: 'Quelle taille ont les planètes ?',
    widget: PlanetSizes,
    caption: 'Click a planet. Then add the **Sun**.',
    captionFr: 'Clique sur une planète. Puis ajoute le **Soleil**.',
  },

  // 5. The two meanings of "model" from 3.2
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Boxes',
    eyebrow: 'Review · 3.2',
    eyebrowFr: 'Révision · 3.2',
    title: 'Two Kinds of Model',
    titleFr: 'Deux sortes de modèles',
    ratio: 45,
    inlineSvg: DIAGRAMS.MODEL_TWO,
    content: 'You just used **both** kinds.',
    contentFr: 'Tu viens d’utiliser les **deux** sortes.',
    notes: [
      {
        tone: 'info',
        badge: 'From 3.2',
        badgeFr: 'Vu en 3.2',
        text: '**1 · A model represents something.** It shows something that is hard to observe directly. The football Sun is one.',
        textFr: '**1 · Un modèle représente quelque chose.** Il montre ce qu’on ne peut pas bien observer directement. Le Soleil-ballon en est un.',
      },
      {
        tone: 'info',
        badge: 'From 3.2',
        badgeFr: 'Vu en 3.2',
        text: '**2 · A model can use maths** to work out something we could never see. Dividing by 6 300 000 000 told us the Earth is a pinhead.',
        textFr: '**2 · Un modèle peut utiliser les maths** pour trouver ce qu’on ne pourra jamais voir. Diviser par 6 300 000 000 nous a dit que la Terre est une tête d’épingle.',
      },
    ],
  },

  // 6. The Solar System: 3.2's words, and 3.3's question
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Sun',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'The Solar System',
    titleFr: 'Le système solaire',
    ratio: 45,
    inlineSvg: DIAGRAMS.ORBIT,
    content: 'Words from 3.2: **orbit** · **spin** · **axis** · **plane**',
    contentFr: 'Mots vus en 3.2 : **orbit** (orbite) · **spin** (tourner) · **axis** (axe) · **plane** (plan)',
    notes: [
      {
        tone: 'write',
        text: '**Solar System:** the Sun and everything that orbits it: 8 planets, their moons, dwarf planets, asteroids and comets.',
        textFr: '**Système solaire (Solar System) :** le Soleil et tout ce qui tourne autour : 8 planètes, leurs lunes, des planètes naines, des astéroïdes et des comètes.',
      },
      {
        tone: 'theory',
        badge: 'Coming up in 3.3',
        badgeFr: 'À venir en 3.3',
        text: 'Why don’t the planets **fall into the Sun**? Why do they **keep going round**? We answer that in 3.3.',
        textFr: 'Pourquoi les planètes ne **tombent-elles pas sur le Soleil** ? Pourquoi **continuent-elles de tourner** ? On répond en 3.3.',
      },
    ],
  },

  // 7. Vote, as a 3.2 review: ball or plate?
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Review · 3.2 · vote with one hand',
    eyebrowFr: 'Révision · 3.2 · vote avec une main',
    title: 'Ball or Plate?',
    titleFr: 'Boule ou assiette ?',
    text: 'Remember 3.2: from the **side**, all the orbits are …',
    textFr: 'Souviens-toi de 3.2 : vues **de côté**, toutes les orbites sont …',
    columns: [
      { heading: 'A · left hand up', headingFr: 'A · main gauche levée', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_BALL },
      { heading: 'B · right hand up', headingFr: 'B · main droite levée', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_PLATE },
    ],
  },

  // 8. The working model (full slide)
  {
    layout: 'game',
    title: 'A Working Model of the Solar System',
    titleFr: 'Un modèle du système solaire qui fonctionne',
    widget: SolarSystem,
  },

  // 9. Limitations, just before the class judges the model (write)
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Globe',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'What Does a Globe Get Wrong?',
    titleFr: 'Qu’est-ce qu’un globe a de faux ?',
    ratio: 50,
    inlineSvg: DIAGRAMS.GLOBE,
    content: 'A globe is a **model** of the Earth. Find **three** things it gets wrong.',
    contentFr: 'Un globe est un **modèle** de la Terre. Trouve **trois** choses fausses.',
    notes: [
      {
        tone: 'write',
        text: '**Limitation:** something a model cannot do, gets wrong or leaves out. Every model has limitations.',
        textFr: '**Limite (limitation) :** ce qu’un modèle ne peut pas faire, montre mal ou oublie. Tous les modèles ont des limites.',
      },
      {
        tone: 'theory',
        badge: 'Exam tip',
        badgeFr: 'Conseil pour l’examen',
        text: 'Cambridge **loves** this question: *Give one limitation of this model.*',
        textFr: 'Cambridge **adore** cette question : *Give one limitation of this model.* (Donne une limite de ce modèle.)',
      },
    ],
    reveal: {
      label: 'Some answers',
      labelFr: 'Quelques réponses',
      answer: 'It is about **40 million times** too small.\nIt does not **spin** by itself.\nNo clouds, no weather, no night.\nThe mountains are **flat**.',
      answerFr: 'Il est environ **40 millions de fois** trop petit.\nIl ne **tourne** pas tout seul.\nPas de nuages, pas de météo, pas de nuit.\nLes montagnes sont **plates**.',
    },
  },

  // 10. What does our computer model get wrong?
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'Search',
    eyebrow: 'Think like a scientist',
    eyebrowFr: 'Pense comme un scientifique',
    title: 'Is Our Model Right?',
    titleFr: 'Notre modèle est-il juste ?',
    text: 'Name **one** thing our model gets right, and **one** limitation.',
    textFr: 'Cite **une** chose juste dans notre modèle, et **une** limite.',
    reveal: {
      label: 'Some answers',
      labelFr: 'Quelques réponses',
      answer: '**Right:** where the planets really are, their speeds, the real distances, the flat plane.\n**Limitations:** the planets are drawn too big ("Enlarged"). Time runs millions of times too fast. Most moons are missing.',
      answerFr: '**Juste :** la vraie position des planètes, leurs vitesses, les vraies distances, le plan.\n**Limites :** les planètes sont dessinées trop grandes (« Agrandies »). Le temps passe des millions de fois trop vite. Il manque la plupart des lunes.',
    },
  },

  // 11. Before the Sun — a 3.2 review
  {
    layout: 'statement',
    accent: BLUE,
    eyebrow: '4.6 billion years ago',
    eyebrowFr: 'Il y a 4.6 milliards d’années',
    title: 'Before the Sun',
    titleFr: 'Avant le Soleil',
    label: 'Review · 3.2',
    labelFr: 'Révision · 3.2',
    labelIcon: 'Repeat',
    text: 'There was no Sun and no Earth. Only a huge **cloud** of gas and dust: a **nebula**.',
    textFr: 'Il n’y avait ni Soleil ni Terre. Seulement un énorme **nuage** de gaz et de poussière : une **nébuleuse**.',
    sub: 'How do you make a Sun and 8 planets from a cloud?',
    subFr: 'Comment faire un Soleil et 8 planètes avec un nuage ?',
  },

  // 12. The formation model (full slide)
  {
    layout: 'game',
    title: 'How the Solar System Formed',
    titleFr: 'Comment le système solaire s’est formé',
    widget: Formation,
  },

  // 13. Why it spun faster and went flat
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'RotateCcw',
    eyebrow: 'Two things you can try',
    eyebrowFr: 'Deux choses à essayer',
    title: 'Spin Faster, Go Flat',
    titleFr: 'Tourner plus vite, s’aplatir',
    inlineSvg: DIAGRAMS.SPIN_FLAT,
    caption: 'The shrinking cloud did **both**. That is why the planets are flat and all go the **same way**.',
    captionFr: 'Le nuage qui rétrécit a fait **les deux**. Voilà pourquoi les planètes sont dans un plan et tournent toutes dans le **même sens**.',
  },

  // 14. The four steps (write + Draw This)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw this',
    eyebrowFr: 'À dessiner',
    title: 'How the Solar System Formed',
    titleFr: 'Comment le système solaire s’est formé',
    ratio: 50,
    inlineSvg: DIAGRAMS.NEBULA_STEPS,
    drawThis: true,
    notes: [
      {
        tone: 'write',
        text: '1. Gravity pulls the nebula together. It spins faster.\n2. It flattens into a spinning disc.\n3. The hot middle becomes the Sun.\n4. Dust sticks together and grows into planets.',
        textFr: '1. La gravité rassemble la nébuleuse. Elle tourne plus vite.\n2. Elle s’aplatit en un disque qui tourne.\n3. Le centre chaud devient le Soleil.\n4. La poussière s’agglomère et forme des planètes.',
      },
    ],
  },

  // 15. Rocky or giant: the frost line
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'Thermometer',
    eyebrow: 'Step 4 of the model',
    eyebrowFr: 'Étape 4 du modèle',
    title: 'Rocky or Giant?',
    titleFr: 'Rocheuse ou géante ?',
    columns: [
      {
        heading: 'Near the Sun: hot',
        headingFr: 'Près du Soleil : chaud',
        accent: ORANGE,
        icon: 'Flame',
        inlineSvg: DIAGRAMS.ROCKY,
        caption: 'Too hot for ice. Only **rock and metal**, so small **rocky** planets: Mercury, Venus, Earth, Mars.',
        captionFr: 'Trop chaud pour la glace. Seulement **roche et métal**, donc de petites planètes **rocheuses** : Mercure, Vénus, la Terre, Mars.',
      },
      {
        heading: 'Far away: cold',
        headingFr: 'Loin : froid',
        accent: BLUE,
        icon: 'Snowflake',
        inlineSvg: DIAGRAMS.GIANT,
        caption: '**Ice** too: big cores pull in **gas**, so **giants**: Jupiter, Saturn, Uranus, Neptune.',
        captionFr: 'De la **glace** aussi : de gros noyaux attirent du **gaz**, donc des **géantes** : Jupiter, Saturne, Uranus, Neptune.',
      },
    ],
  },

  // 16. Evidence: HL Tauri again, now as a check on the model
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Telescope',
    eyebrow: 'Evidence · you saw it in 3.2',
    eyebrowFr: 'Une preuve · vue en 3.2',
    title: 'We Can See It Happening',
    titleFr: 'On peut le voir en ce moment',
    ratio: 45,
    inlineSvg: DIAGRAMS.HL_TAU,
    content: 'A model must match what we **see**.\nHL Tauri is a young star with a dusty disc **today**. The dark gaps are where planets are growing.',
    contentFr: 'Un modèle doit correspondre à ce qu’on **voit**.\nHL Tauri est une jeune étoile entourée d’un disque de poussière, **aujourd’hui**. Les espaces sombres sont là où des planètes grandissent.',
  },

  // 17. Limitations of the formation model
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'Search',
    eyebrow: 'Think like a scientist',
    eyebrowFr: 'Pense comme un scientifique',
    title: 'What Does Our Model Get Wrong?',
    titleFr: 'Qu’est-ce que notre modèle a de faux ?',
    text: 'Give **two** limitations of the formation model.',
    textFr: 'Donne **deux** limites du modèle de formation.',
    reveal: {
      label: 'Some answers',
      labelFr: 'Quelques réponses',
      answer: 'Distances are **squashed**.\n100 million years take **one minute**.\nIt has about 5 000 grains, not trillions of trillions.\nThe computer moves each grain to its place. It does not really calculate gravity.',
      answerFr: 'Les distances sont **écrasées**.\n100 millions d’années durent **une minute**.\nIl y a environ 5 000 grains, pas des milliards de milliards.\nL’ordinateur place chaque grain. Il ne calcule pas vraiment la gravité.',
    },
  },

  // ════════════════════════════════════════════════════════════════════════
  // PART 2 — TIME: half-life, Mr Bowen's coffee, Mr Bowen's carbon, the oldest things
  // ════════════════════════════════════════════════════════════════════════

  // 18. Hero + starter: when is the coffee gone?
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Hourglass',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    eyebrow: 'Unit 3 · Models · Part 2',
    eyebrowFr: 'Unité 3 · Modèles · Partie 2',
    title: 'How Old Is It?',
    titleFr: 'Quel âge a-t-il ?',
    card: {
      icon: 'Coffee',
      badge: 'Starter',
      badgeFr: 'Pour commencer',
      text: 'Mr Bowen drinks a coffee at **7 a.m.** When is the caffeine **all gone** from his body? Write a time.',
      textFr: 'M. Bowen boit un café à **7 h**. Quand la caféine a-t-elle **complètement disparu** de son corps ? Écris une heure.',
    },
  },

  // 19. The coffee stepper
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Coffee',
    eyebrow: 'Say it first',
    eyebrowFr: 'Dis-le d’abord',
    title: 'Mr Bowen’s Coffee',
    titleFr: 'Le café de M. Bowen',
    widget: CoffeeClock,
    caption: 'A cup of coffee: about **100 mg** of caffeine. Say the next number **before** it is shown.',
    captionFr: 'Une tasse de café : environ **100 mg** de caféine. Dis le nombre suivant **avant** qu’il s’affiche.',
  },

  // 20. Half-life (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Hourglass',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'Half-Life',
    titleFr: 'La demi-vie',
    ratio: 45,
    inlineSvg: DIAGRAMS.HALVING,
    content: 'It is **never** all gone. It just keeps halving.',
    contentFr: 'Elle ne disparaît **jamais** complètement. Elle est divisée par deux, encore et encore.',
    notes: [
      {
        tone: 'write',
        text: '**Half-life:** the time it takes for half of something to disappear. Caffeine’s half-life is about **5 hours**.',
        textFr: '**Demi-vie (half-life) :** le temps qu’il faut pour que la moitié de quelque chose disparaisse. La demi-vie de la caféine est d’environ **5 heures**.',
      },
    ],
  },

  // 21. English check
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'English check',
    eyebrowFr: 'Point d’anglais',
    title: 'Half, Halve, Half-Life',
    titleFr: 'Half, halve, half-life',
    text: '**half** · to **halve** · a **half-life**',
    textFr: '**half** · to **halve** · a **half-life**',
    content: '**half** = ½ · to **halve** = to cut in half · a **half-life** = an amount of time',
    contentFr: '**half** = ½ (la moitié) · to **halve** = couper en deux · a **half-life** = une durée (la demi-vie)',
    sub: '"Every 5 hours the caffeine **halves**. Its **half-life** is 5 hours."',
    subFr: '« Toutes les 5 heures, la caféine est **divisée par deux** (halves). Sa **demi-vie** (half-life) est de 5 heures. »',
  },

  // 22. The story begins (deadpan)
  {
    layout: 'statement',
    accent: ORANGE,
    icon: 'Coffee',
    eyebrow: 'One Monday morning',
    eyebrowFr: 'Un lundi matin',
    title: 'A Sad Day',
    titleFr: 'Un triste jour',
    text: 'Mr Bowen did **not** get his morning coffee.',
    textFr: 'M. Bowen n’a **pas** eu son café du matin.',
    sub: 'He did not survive.',
    subFr: 'Il n’a pas survécu.',
  },

  // 23. Frozen — and the question
  {
    layout: 'statement',
    accent: BLUE,
    eyebrow: 'Then',
    eyebrowFr: 'Ensuite',
    title: 'Frozen',
    titleFr: 'Congelé',
    text: 'Dying, delirious and coffee‑less, he wandered into a **glacier**, just as he died.',
    textFr: 'Mourant, délirant et sans café, il s’est égaré dans un **glacier**, juste au moment de mourir.',
    sub: '11 400 years later, scientists find him. How can they tell **when** he died?',
    subFr: '11 400 ans plus tard, des scientifiques le retrouvent. Comment savoir **quand** il est mort ?',
    reveal: {
      label: 'A clue',
      labelFr: 'Un indice',
      answer: 'His body is a **clock**. The clock is made of **carbon**.',
      answerFr: 'Son corps est une **horloge**. L’horloge est faite de **carbone**.',
    },
  },

  // 24. Carbon-14 (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Atom',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'Carbon-14',
    titleFr: 'Le carbone 14',
    ratio: 45,
    inlineSvg: DIAGRAMS.CARBON_TWO,
    content: 'You are full of **carbon** atoms (2.5). A tiny few are a special kind.',
    contentFr: 'Tu es plein d’atomes de **carbone** (2.5). Quelques-uns sont d’un type spécial.',
    notes: [
      {
        tone: 'write',
        text: '**Carbon-14:** a rare kind of carbon that slowly breaks down into nitrogen. Its half-life is **5 700 years**.',
        textFr: '**Carbone 14 (carbon-14) :** un type rare de carbone qui se transforme lentement en azote. Sa demi-vie est de **5 700 ans**.',
      },
    ],
  },

  // 25. Where it comes from
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Leaf',
    eyebrow: 'From the air to Mr Bowen',
    eyebrowFr: 'De l’air jusqu’à M. Bowen',
    title: 'Where Does Carbon-14 Come From?',
    titleFr: 'D’où vient le carbone 14 ?',
    inlineSvg: DIAGRAMS.C14_CYCLE,
    caption: 'While you are alive, food and drink keep **topping up** your carbon-14. Even coffee.',
    captionFr: 'Tant que tu es vivant, la nourriture et les boissons **rechargent** ton carbone 14. Même le café.',
  },

  // 26. The carbon clock model
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Timer',
    eyebrow: 'A model',
    eyebrowFr: 'Un modèle',
    title: 'Mr Bowen’s Carbon Clock',
    titleFr: 'L’horloge à carbone de M. Bowen',
    widget: CarbonClock,
    caption: 'Before each half-life, guess: how many atoms will be left?',
    captionFr: 'Avant chaque demi-vie, devine : combien d’atomes resteront ?',
  },

  // 27. Carbon dating (write + Draw This)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw this',
    eyebrowFr: 'À dessiner',
    title: 'Carbon Dating',
    titleFr: 'La datation au carbone 14',
    ratio: 45,
    inlineSvg: DIAGRAMS.DECAY_CURVE,
    drawThis: true,
    content: 'Less carbon-14 left means **older**.',
    contentFr: 'Moins il reste de carbone 14, plus c’est **vieux**.',
    notes: [
      {
        tone: 'write',
        text: '**Carbon dating:** finding the age of something that was once alive by measuring how much carbon-14 is left.',
        textFr: '**Datation au carbone 14 (carbon dating) :** trouver l’âge de quelque chose qui a été vivant en mesurant le carbone 14 qui reste.',
      },
    ],
  },

  // 28. Last Atom Standing
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Coins',
    eyebrow: 'A game · 5 coins each',
    eyebrowFr: 'Un jeu · 5 pièces chacun',
    title: 'Last Atom Standing',
    titleFr: 'Le dernier atome debout',
    widget: LastAtom,
    caption: 'Flip all your coins each round. **Tails:** that atom broke down. The last student with a **head** wins a prize ticket!',
    captionFr: 'Lance toutes tes pièces à chaque tour. **Pile :** cet atome s’est désintégré. Le dernier élève avec une **face** gagne un ticket !',
  },

  // 29. Random or predictable?
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Think',
    eyebrowFr: 'Réfléchis',
    title: 'Random or Predictable?',
    titleFr: 'Hasard ou prévisible ?',
    text: 'Could anyone say **who** would win before we started?',
    textFr: 'Pouvait-on dire **qui** allait gagner avant de commencer ?',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '**No.** Each atom breaks down at a random moment.\nBut **half** of a big group always goes in one half-life.\nMr Bowen has about **900 trillion** carbon-14 atoms. More than **3 000** break down every second.',
      answerFr: '**Non.** Chaque atome se désintègre à un moment au hasard.\nMais la **moitié** d’un grand groupe part toujours en une demi-vie.\nM. Bowen a environ **900 000 milliards** d’atomes de carbone 14. Plus de **3 000** se désintègrent chaque seconde.',
    },
  },

  // 30. Vote: the dinosaur
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowFr: 'Vote avec une main',
    title: 'A Dinosaur Bone',
    titleFr: 'Un os de dinosaure',
    text: 'Can carbon dating tell us how old a **dinosaur** bone is?',
    textFr: 'La datation au carbone 14 peut-elle donner l’âge d’un os de **dinosaure** ?',
    columns: [
      { heading: 'A · left hand up', headingFr: 'A · main gauche levée', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_DINO_YES },
      { heading: 'B · right hand up', headingFr: 'B · main droite levée', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_DINO_NO },
    ],
  },

  // 31. Too old for carbon (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'AlertTriangle',
    eyebrow: 'Answer: B',
    eyebrowFr: 'Réponse : B',
    title: 'Too Old for Carbon',
    titleFr: 'Trop vieux pour le carbone 14',
    ratio: 45,
    inlineSvg: DIAGRAMS.TOO_OLD,
    content: 'Dinosaurs died out **66 million years** ago. That is over **11 000** half-lives. No carbon-14 is left.',
    contentFr: 'Les dinosaures ont disparu il y a **66 millions d’années**. C’est plus de **11 000** demi-vies. Il ne reste plus de carbone 14.',
    notes: [
      {
        tone: 'write',
        text: 'Carbon dating only works for things that were **alive**, up to about **50 000 years** old.',
        textFr: 'La datation au carbone 14 ne marche que pour ce qui a été **vivant**, jusqu’à environ **50 000 ans**.',
      },
    ],
  },

  // 32. A clock for billions of years? (the question before the clocks)
  {
    layout: 'statement',
    accent: INDIGO,
    eyebrow: 'Think',
    eyebrowFr: 'Réfléchis',
    title: 'Clocks in Rocks',
    titleFr: 'Des horloges dans les roches',
    text: 'Carbon-14 is a clock for **50 000 years**. What would a clock for **4 billion years** need?',
    textFr: 'Le carbone 14 est une horloge pour **50 000 ans**. De quoi aurait besoin une horloge pour **4 milliards d’années** ?',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: 'A much **longer half-life**: billions of years, not thousands.',
      answerFr: 'Une **demi-vie** beaucoup plus **longue** : des milliards d’années, pas des milliers.',
    },
  },

  // 33. Three clocks
  {
    layout: 'showcase',
    accent: INDIGO,
    icon: 'Timer',
    eyebrow: 'The right clock for the job',
    eyebrowFr: 'La bonne horloge pour le travail',
    title: 'Three Clocks',
    titleFr: 'Trois horloges',
    inlineSvg: DIAGRAMS.CLOCKS,
    caption: 'You do not time a 100 m race with a calendar. Choose the clock with the right **half-life**.',
    captionFr: 'On ne chronomètre pas un 100 m avec un calendrier. Choisis l’horloge avec la bonne **demi-vie**.',
  },

  // 34. Dating a dinosaur
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Layers',
    eyebrow: 'Back to the dinosaur',
    eyebrowFr: 'Retour au dinosaure',
    title: 'Dating a Dinosaur',
    titleFr: 'Dater un dinosaure',
    ratio: 45,
    inlineSvg: DIAGRAMS.DINO_LAYERS,
    content: 'We do not date the bone. We date the **volcanic ash** above it and below it.',
    contentFr: 'On ne date pas l’os. On date les **cendres volcaniques** au-dessus et en dessous.',
    reveal: {
      label: 'How old is the dinosaur?',
      labelFr: 'Quel âge a le dinosaure ?',
      answer: 'Older than the ash above it, younger than the ash below it.\nSo it lived **between 66 and 68 million years ago**.',
      answerFr: 'Plus vieux que la cendre au-dessus, plus jeune que la cendre en dessous.\nIl a donc vécu **il y a entre 66 et 68 millions d’années**.',
    },
  },

  // 35. Why not the oldest rock?
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'Globe',
    eyebrow: 'Think',
    eyebrowFr: 'Réfléchis',
    title: 'How Old Is the Earth?',
    titleFr: 'Quel âge a la Terre ?',
    text: 'Why can’t we just find the **oldest rock**?',
    textFr: 'Pourquoi ne pas simplement trouver la **roche la plus vieille** ?',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: 'The Earth **recycles** its rocks. Volcanoes melt them, rain wears them away, and they sink back inside.\nThe oldest rocks are about **4 billion** years old (Canada). The oldest crystal is **4.4 billion** years old (Australia).',
      answerFr: 'La Terre **recycle** ses roches. Les volcans les font fondre, la pluie les use, et elles replongent à l’intérieur.\nLes plus vieilles roches ont environ **4 milliards** d’années (Canada). Le plus vieux cristal a **4.4 milliards** d’années (Australie).',
    },
  },

  // 36. A clock inside a crystal
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Gauge',
    eyebrow: 'A clock inside a crystal',
    eyebrowFr: 'Une horloge dans un cristal',
    title: 'Zircon Crystals',
    titleFr: 'Les cristaux de zircon',
    ratio: 45,
    inlineSvg: DIAGRAMS.ZIRCON,
    content: 'A new zircon crystal takes in **uranium**, but **no lead**.\nSo all the lead inside came from uranium breaking down. The clock starts at zero.',
    contentFr: 'Un cristal de zircon neuf contient de l’**uranium**, mais **pas de plomb**.\nTout le plomb à l’intérieur vient donc de l’uranium qui s’est désintégré. L’horloge part de zéro.',
    notes: [
      {
        tone: 'theory',
        text: 'Uranium-238’s half-life is **4.5 billion years**. More lead, less uranium: an **older** crystal.',
        textFr: 'La demi-vie de l’uranium 238 est de **4.5 milliards d’années**. Plus de plomb, moins d’uranium : un cristal plus **vieux**.',
      },
    ],
  },

  // 37. Meteorites
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Sparkles',
    eyebrow: 'Rocks from space',
    eyebrowFr: 'Des roches venues de l’espace',
    title: 'Meteorites',
    titleFr: 'Les météorites',
    ratio: 45,
    inlineSvg: DIAGRAMS.METEORITE,
    content: 'Meteorites are **leftover** building blocks of the planets (the formation model, step 7). They were **never** melted or recycled.',
    contentFr: 'Les météorites sont des **restes** des briques qui ont fait les planètes (le modèle de formation, étape 7). Elles n’ont **jamais** fondu ni été recyclées.',
    notes: [
      {
        tone: 'info',
        text: 'The white specks are the oldest solids in the Solar System. The Allende meteorite fell in Mexico in **1969**.',
        textFr: 'Les taches blanches sont les plus vieux solides du système solaire. La météorite d’Allende est tombée au Mexique en **1969**.',
      },
    ],
  },

  // 38. Work it out: one half-life
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Work it out',
    eyebrowFr: 'Calcule',
    title: 'Half Is Gone',
    titleFr: 'La moitié est partie',
    text: 'In the oldest meteorites, about **half** the uranium-238 has turned into lead.',
    textFr: 'Dans les plus vieilles météorites, environ la **moitié** de l’uranium 238 est devenue du plomb.',
    sub: 'Its half-life is 4.5 billion years. How old are they?',
    subFr: 'Sa demi-vie est de 4.5 milliards d’années. Quel âge ont-elles ?',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: 'Half gone = **one half-life** = about **4.5 billion years**.\n(Measured exactly: 4 567 million years.)',
      answerFr: 'La moitié partie = **une demi-vie** = environ **4.5 milliards d’années**.\n(Mesure exacte : 4 567 millions d’années.)',
    },
  },

  // 39. Clair Patterson
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'FlaskConical',
    eyebrow: 'A true story',
    eyebrowFr: 'Une histoire vraie',
    title: 'The Man Who Measured the Earth',
    titleFr: 'L’homme qui a mesuré l’âge de la Terre',
    content: 'In 1953, **Clair Patterson** measured the lead in meteorites. The Earth was **4.55 billion years** old.\nBut lead from car petrol was everywhere, even in his lab. So he built one of the first **super-clean** labs.\nThen he fought for years to stop **leaded petrol**. The whole world stopped selling it for cars in **2021**.',
    contentFr: 'En 1953, **Clair Patterson** a mesuré le plomb des météorites. La Terre avait **4.55 milliards d’années**.\nMais le plomb de l’essence des voitures était partout, même dans son labo. Il a donc construit l’un des premiers labos **ultra-propres**.\nPuis il s’est battu pendant des années contre l’**essence au plomb**. Le monde entier a arrêté de la vendre pour les voitures en **2021**.',
  },

  // 40. The age of the Earth (write)
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'Put it together',
    eyebrowFr: 'En résumé',
    title: 'The Age of the Earth',
    titleFr: 'L’âge de la Terre',
    text: 'The Earth is about **4.5 billion years** old.',
    textFr: 'La Terre a environ **4.5 milliards d’années**.',
    notes: [
      {
        tone: 'write',
        text: 'We know the Earth’s age from **radioactive dating** of the oldest rocks, crystals and meteorites. Different clocks give the **same answer**.',
        textFr: 'On connaît l’âge de la Terre grâce à la **datation radioactive** des plus vieilles roches, des cristaux et des météorites. Des horloges différentes donnent la **même réponse**.',
      },
    ],
  },

  // 41. The Sun: the question
  {
    layout: 'statement',
    accent: ORANGE,
    icon: 'Sun',
    eyebrow: 'Think',
    eyebrowFr: 'Réfléchis',
    title: 'How Old Is the Sun?',
    titleFr: 'Quel âge a le Soleil ?',
    text: 'Nobody can take a piece of the Sun.',
    textFr: 'Personne ne peut prendre un morceau du Soleil.',
    sub: 'So how could we find its age? Think of **two** ways.',
    subFr: 'Alors comment trouver son âge ? Trouve **deux** façons.',
    reveal: {
      label: 'Three ways',
      labelFr: 'Trois façons',
      answer: '1. The Sun formed **with** the meteorites.\n2. Build a **model Sun** and let it age until it matches the real one.\n3. **Listen** to it: the Sun vibrates like a bell.',
      answerFr: '1. Le Soleil s’est formé **avec** les météorites.\n2. Construire un **Soleil modèle** et le faire vieillir jusqu’à ce qu’il ressemble au vrai.\n3. L’**écouter** : le Soleil vibre comme une cloche.',
    },
  },

  // 42. The model Sun
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Sun',
    eyebrow: 'A maths model',
    eyebrowFr: 'Un modèle mathématique',
    title: 'Build a Sun, Then Let It Age',
    titleFr: 'Construis un Soleil, puis fais-le vieillir',
    widget: SunModel,
    caption: 'The Sun turns **hydrogen** into **helium**. Slide until the model matches what we measure.',
    captionFr: 'Le Soleil transforme l’**hydrogène** en **hélium**. Fais glisser jusqu’à ce que le modèle corresponde aux mesures.',
  },

  // 43. Three methods, one answer (write)
  {
    layout: 'stack',
    accent: ORANGE,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Why scientists trust it',
    eyebrowFr: 'Pourquoi les scientifiques y croient',
    title: 'Three Methods, One Answer',
    titleFr: 'Trois méthodes, une réponse',
    notes: [
      {
        tone: 'info',
        badge: 'Meteorites',
        badgeFr: 'Les météorites',
        text: '**4.57 billion years**: the oldest bits of the Solar System.',
        textFr: '**4.57 milliards d’années** : les plus vieux morceaux du système solaire.',
      },
      {
        tone: 'info',
        badge: 'A model Sun',
        badgeFr: 'Un Soleil modèle',
        text: '**About 4.6 billion years**: when the model matches the real Sun.',
        textFr: '**Environ 4.6 milliards d’années** : quand le modèle correspond au vrai Soleil.',
      },
      {
        tone: 'info',
        badge: 'The Sun’s vibrations',
        badgeFr: 'Les vibrations du Soleil',
        text: '**4.57 billion years**: waves inside the Sun show how much hydrogen is left.',
        textFr: '**4.57 milliards d’années** : les ondes dans le Soleil montrent combien d’hydrogène il reste.',
      },
      {
        tone: 'write',
        text: 'The Sun is about **4.6 billion years** old. When different methods **agree**, scientists trust the answer.',
        textFr: 'Le Soleil a environ **4.6 milliards d’années**. Quand des méthodes différentes sont **d’accord**, les scientifiques font confiance à la réponse.',
      },
    ],
  },

  // 44. All of Earth's history in one year
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Timer',
    eyebrow: 'A scale model of time',
    eyebrowFr: 'Un modèle du temps à l’échelle',
    title: 'Earth’s History in One Year',
    titleFr: 'L’histoire de la Terre en un an',
    widget: EarthYear,
    caption: 'Guess the **date** of each event before it is shown.',
    captionFr: 'Devine la **date** de chaque événement avant qu’elle s’affiche.',
  },

  // 45. Checklist
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
    content: '> Check your notebook: **9 written panels** and **2 drawings**.',
    contentFr: '> Vérifie ton cahier : **9 encadrés recopiés** et **2 dessins**.',
    items: [
      { text: 'Give the **two** kinds of model, and one **limitation**.', textFr: 'Donner les **deux** sortes de modèles, et une **limite**.' },
      { text: 'Use a scale model to compare **sizes**.', textFr: 'Utiliser un modèle à l’échelle pour comparer des **tailles**.' },
      { text: 'Describe how a **nebula** became the Solar System.', textFr: 'Décrire comment une **nébuleuse** est devenue le système solaire.' },
      { text: 'Use a **half-life** to find what is left.', textFr: 'Utiliser une **demi-vie** pour trouver ce qui reste.' },
      { text: 'Explain **carbon dating**, and why it fails for dinosaurs.', textFr: 'Expliquer la **datation au carbone 14**, et pourquoi elle ne marche pas pour les dinosaures.' },
      { text: 'Say how we know the age of the **Earth** and the **Sun**.', textFr: 'Dire comment on connaît l’âge de la **Terre** et du **Soleil**.' },
    ],
  },

  // 46. Exit
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Target',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    eyebrow: 'Exit question',
    eyebrowFr: 'Question de sortie',
    title: 'A Wooden Spear',
    titleFr: 'Une lance en bois',
    subtitle: 'A wooden spear has **25%** of its carbon-14 left. How old is it?',
    subtitleFr: 'Une lance en bois a encore **25 %** de son carbone 14. Quel âge a-t-elle ?',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '25% is half of a half: **2 half-lives**.\n5 700 × 2 = **11 400 years** old.',
      answerFr: '25 %, c’est la moitié de la moitié : **2 demi-vies**.\n5 700 × 2 = **11 400 ans**.',
    },
  },
]
