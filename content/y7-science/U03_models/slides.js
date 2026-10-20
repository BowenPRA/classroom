// content/y7-science/U03_models/slides.js
// Year 7 Science · Models: Space and Time. A Unit 3 modelling deck, after 3.1
// (gravity), 3.2 (formation of the Solar System) and 3.3 (movement in space).
//
// ENGLISH AND FRENCH ONLY, like every Year 7 deck from Unit 4 / 15 October:
// every string has an …Fr twin and no …Vn twin. The diagrams stay in English.
//
// FOUR PARTS, ONE DECK, about three periods (plan.js has the timings):
//   1 Space           what a model is; how big and how far (the football Sun);
//                     the working Solar System model; why it is flat — asked
//   2 How it formed   the nebula model answers the question from Part 1
//   3 Time            half-life from Mr Bowen's coffee; Mr Bowen, tragically
//                     without his coffee, frozen in a glacier: carbon dating;
//                     the class becomes the atoms; why not dinosaurs
//   4 The oldest      clocks with longer half-lives; the age of the Earth
//     things          (crystals, meteorites, Patterson); the age of the Sun
//                     (a model Sun that must match the real one); all of
//                     Earth's history as one year
//
// THE THREAD IS MODELLING. Every part uses a model, and every part asks what
// that model gets wrong (slides 3, 11, 19) and how we know it is right
// (evidence on 18, agreeing methods on 44). Models are named as models.
//
// WRITING RULE (the 2.5 density): one hook line, short sentences, and the body
// never repeats the write note, a label or the caption. The widgets carry the
// detail; the slides carry the questions.

import { DIAGRAMS } from './diagrams.js'
import { SolarSystem } from './solar.jsx'
import { PlanetSizes, ScaleShrink } from './sizes.jsx'
import { Formation } from './formation.jsx'
import { CoffeeClock, CarbonClock, CoinDecay } from './dating.jsx'
import { SunModel, EarthYear } from './deeptime.jsx'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'
const INDIGO = '#3949ab'

export const slides = [
  // ════════════════════════════════════════════════════════════════════════
  // PART 1 — SPACE: what a model is, how big, how far, how it moves
  // ════════════════════════════════════════════════════════════════════════

  // 1. Hero + starter: guess the size before anything is shown
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
      text: 'The Sun is the size of a **football**. How big is the Earth? How far away is it? Write: **I think … because …**',
      textFr: 'Le Soleil a la taille d’un **ballon de foot**. Quelle taille a la Terre ? À quelle distance est-elle ? Écris : **I think … because …**',
    },
  },

  // 2. What a model is (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Boxes',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'What Is a Model?',
    titleFr: 'Qu’est-ce qu’un modèle ?',
    ratio: 45,
    inlineSvg: DIAGRAMS.MODEL_KINDS,
    content: 'You have used models all year.\nWe need one when the real thing is too **big**, too **small**, too **slow** or too **old** to see.',
    contentFr: 'Tu utilises des modèles depuis septembre.\nOn en a besoin quand la vraie chose est trop **grande**, trop **petite**, trop **lente** ou trop **ancienne** pour être vue.',
    notes: [
      {
        tone: 'write',
        text: '**Model:** a simple version of something real. It helps us **explain** and **predict**.',
        textFr: '**Modèle (model) :** une version simple de quelque chose de réel. Il nous aide à **expliquer** et à **prévoir**.',
      },
    ],
  },

  // 3. Every model is wrong somehow (write)
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Globe',
    eyebrow: 'Think',
    eyebrowFr: 'Réfléchis',
    title: 'What Does a Globe Get Wrong?',
    titleFr: 'Qu’est-ce qu’un globe a de faux ?',
    ratio: 50,
    inlineSvg: DIAGRAMS.GLOBE,
    content: 'A globe is a **model** of the Earth. Find **three** things it gets wrong.',
    contentFr: 'Un globe est un **modèle** de la Terre. Trouve **trois** choses fausses.',
    notes: [
      {
        tone: 'write',
        text: '**Limitation:** something a model gets wrong or leaves out. Every model has limitations.',
        textFr: '**Limite (limitation) :** ce qu’un modèle montre mal ou oublie. Tous les modèles ont des limites.',
      },
    ],
    reveal: {
      label: 'Some answers',
      labelFr: 'Quelques réponses',
      answer: 'It is about **40 million times** too small.\nIt does not **spin** by itself.\nNo clouds, no weather, no night.\nThe mountains are **flat**.',
      answerFr: 'Il est environ **40 millions de fois** trop petit.\nIl ne **tourne** pas tout seul.\nPas de nuages, pas de météo, pas de nuit.\nLes montagnes sont **plates**.',
    },
  },

  // 4. Vote: the football Sun
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

  // 5. The football model, one object at a time
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Ruler',
    eyebrow: 'A scale model',
    eyebrowFr: 'Un modèle à l’échelle',
    title: 'Shrink the Solar System',
    titleFr: 'Réduis le système solaire',
    widget: ScaleShrink,
    caption: 'Answer: **B**. Say each answer **before** it is shown.',
    captionFr: 'Réponse : **B**. Dis chaque réponse **avant** qu’elle s’affiche.',
  },

  // 6. True sizes, then the Sun
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

  // 7. The Solar System and orbit (write + Draw This)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw this',
    eyebrowFr: 'À dessiner',
    title: 'The Solar System',
    titleFr: 'Le système solaire',
    ratio: 45,
    inlineSvg: DIAGRAMS.ORBIT,
    drawThis: true,
    content: 'Remember 3.1: **gravity** pulls things together.',
    contentFr: 'Souviens-toi de 3.1 : la **gravité** attire les objets les uns vers les autres.',
    notes: [
      {
        tone: 'write',
        text: '**Solar System:** the Sun and everything that orbits it: 8 planets, their moons, dwarf planets, asteroids and comets.\n**Orbit:** the path of a planet around the Sun. The Sun’s **gravity** keeps it there.',
        textFr: '**Système solaire (Solar System) :** le Soleil et tout ce qui tourne autour : 8 planètes, leurs lunes, des planètes naines, des astéroïdes et des comètes.\n**Orbite (orbit) :** le chemin d’une planète autour du Soleil. La **gravité** du Soleil l’y retient.',
      },
    ],
  },

  // 8. Vote before the model is turned: ball or plate?
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowFr: 'Vote avec une main',
    title: 'Ball or Plate?',
    titleFr: 'Boule ou assiette ?',
    text: 'Look at all the orbits from the **side**. They are …',
    textFr: 'Regarde toutes les orbites **de côté**. Elles sont …',
    columns: [
      { heading: 'A · left hand up', headingFr: 'A · main gauche levée', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_BALL },
      { heading: 'B · right hand up', headingFr: 'B · main droite levée', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_PLATE },
    ],
  },

  // 9. The working model (full slide)
  {
    layout: 'game',
    title: 'A Working Model of the Solar System',
    titleFr: 'Un modèle du système solaire qui fonctionne',
    widget: SolarSystem,
  },

  // 10. Flat, and the same way (write + Draw This)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw this',
    eyebrowFr: 'À dessiner',
    title: 'Flat, and the Same Way',
    titleFr: 'Plat, et dans le même sens',
    ratio: 45,
    inlineSvg: DIAGRAMS.PLANE,
    drawThis: true,
    content: 'Answer: **B**, a plate. But **why**? Keep that question for Part 2.',
    contentFr: 'Réponse : **B**, une assiette. Mais **pourquoi** ? Garde cette question pour la partie 2.',
    notes: [
      {
        tone: 'write',
        text: 'The planets orbit the Sun in the **same direction**, in almost the **same flat plane**.',
        textFr: 'Les planètes tournent autour du Soleil dans le **même sens**, presque dans le **même plan**.',
      },
    ],
  },

  // 11. What does our computer model get wrong?
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

  // ════════════════════════════════════════════════════════════════════════
  // PART 2 — HOW IT FORMED: the nebula model answers "why flat?"
  // ════════════════════════════════════════════════════════════════════════

  // 12. Hero + starter: the spinning chair
  {
    layout: 'hero',
    color: BLUE,
    icon: 'Sparkles',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    eyebrow: 'Models · Part 2',
    eyebrowFr: 'Modèles · Partie 2',
    title: 'How Did It Form?',
    titleFr: 'Comment s’est-il formé ?',
    card: {
      icon: 'Pencil',
      badge: 'Starter',
      badgeFr: 'Pour commencer',
      text: 'Mr Bowen spins on a chair with his arms **out**. Then he pulls them **in**. What happens? Write: **I think … because …**',
      textFr: 'M. Bowen tourne sur une chaise, les bras **écartés**. Puis il les **ramène**. Que se passe-t-il ? Écris : **I think … because …**',
    },
  },

  // 13. The question, with no answer on it
  {
    layout: 'statement',
    accent: BLUE,
    icon: 'Sparkles',
    eyebrow: '4.6 billion years ago',
    eyebrowFr: 'Il y a 4.6 milliards d’années',
    title: 'Before the Sun',
    titleFr: 'Avant le Soleil',
    text: 'There was no Sun and no Earth. Only a huge **cloud** of gas and dust.',
    textFr: 'Il n’y avait ni Soleil ni Terre. Seulement un énorme **nuage** de gaz et de poussière.',
    sub: 'How do you make a Sun and 8 planets from a cloud?',
    subFr: 'Comment faire un Soleil et 8 planètes avec un nuage ?',
  },

  // 14. The formation model (full slide)
  {
    layout: 'game',
    title: 'How the Solar System Formed',
    titleFr: 'Comment le système solaire s’est formé',
    widget: Formation,
  },

  // 15. Why it spun faster and went flat
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

  // 16. The four steps (write + Draw This)
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
        text: '**Nebula:** a huge cloud of gas and dust in space.\n1. Gravity pulls the nebula together. It spins faster.\n2. It flattens into a spinning disc.\n3. The hot middle becomes the Sun.\n4. Dust sticks together and grows into planets.',
        textFr: '**Nébuleuse (nebula) :** un énorme nuage de gaz et de poussière dans l’espace.\n1. La gravité rassemble la nébuleuse. Elle tourne plus vite.\n2. Elle s’aplatit en un disque qui tourne.\n3. Le centre chaud devient le Soleil.\n4. La poussière s’agglomère et forme des planètes.',
      },
    ],
  },

  // 17. Rocky or giant: the frost line
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'Thermometer',
    eyebrow: 'Step 3 of the model',
    eyebrowFr: 'Étape 3 du modèle',
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

  // 18. Evidence: we can see it happening
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Telescope',
    eyebrow: 'Evidence',
    eyebrowFr: 'Une preuve',
    title: 'We Can See It Happening',
    titleFr: 'On peut le voir en ce moment',
    ratio: 45,
    inlineSvg: DIAGRAMS.HL_TAU,
    content: 'A model must match what we **see**.\nTelescopes find young stars with dusty discs **today**. The dark gaps are where planets are growing.',
    contentFr: 'Un modèle doit correspondre à ce qu’on **voit**.\nLes télescopes trouvent **aujourd’hui** de jeunes étoiles entourées de disques de poussière. Les espaces sombres sont là où des planètes grandissent.',
    notes: [
      {
        tone: 'info',
        text: '**HL Tauri:** a star about 1 million years old, 450 light years away. Photographed by the ALMA telescope in 2014.',
        textFr: '**HL Tauri :** une étoile d’environ 1 million d’années, à 450 années-lumière. Photographiée par le télescope ALMA en 2014.',
      },
    ],
  },

  // 19. Limitations of the formation model
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'Search',
    eyebrow: 'Think like a scientist',
    eyebrowFr: 'Pense comme un scientifique',
    title: 'What Does Our Model Get Wrong?',
    titleFr: 'Qu’est-ce que notre modèle a de faux ?',
    text: 'Find **two** limitations of the formation model.',
    textFr: 'Trouve **deux** limites du modèle de formation.',
    reveal: {
      label: 'Some answers',
      labelFr: 'Quelques réponses',
      answer: 'Distances are **squashed**.\n100 million years take **one minute**.\nIt has about 5 000 grains, not trillions of trillions.\nThe computer moves each grain to its place. It does not really calculate gravity.',
      answerFr: 'Les distances sont **écrasées**.\n100 millions d’années durent **une minute**.\nIl y a environ 5 000 grains, pas des milliards de milliards.\nL’ordinateur place chaque grain. Il ne calcule pas vraiment la gravité.',
    },
  },

  // ════════════════════════════════════════════════════════════════════════
  // PART 3 — TIME: half-life, Mr Bowen's coffee, Mr Bowen's carbon
  // ════════════════════════════════════════════════════════════════════════

  // 20. Hero + starter: when is the coffee gone?
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Hourglass',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    eyebrow: 'Models · Part 3',
    eyebrowFr: 'Modèles · Partie 3',
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

  // 21. The coffee stepper
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

  // 22. Half-life (write)
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

  // 23. English check
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

  // 24. The story begins (deadpan)
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

  // 25. Frozen — and the question
  {
    layout: 'statement',
    accent: BLUE,
    eyebrow: 'Then',
    eyebrowFr: 'Ensuite',
    title: 'Frozen',
    titleFr: 'Congelé',
    text: 'He wandered into the mountains and was frozen in a **glacier**.',
    textFr: 'Il s’est perdu dans les montagnes et a été pris dans un **glacier**.',
    sub: '11 400 years later, scientists find him. How can they tell **when** he died?',
    subFr: '11 400 ans plus tard, des scientifiques le retrouvent. Comment savoir **quand** il est mort ?',
    reveal: {
      label: 'A clue',
      labelFr: 'Un indice',
      answer: 'His body is a **clock**. The clock is made of **carbon**.',
      answerFr: 'Son corps est une **horloge**. L’horloge est faite de **carbone**.',
    },
  },

  // 26. Carbon-14 (write)
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

  // 27. Where it comes from
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

  // 28. The carbon clock model
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

  // 29. Carbon dating (write + Draw This)
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

  // 30. The class are the atoms
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Coins',
    eyebrow: 'Everyone stand up',
    eyebrowFr: 'Tout le monde debout',
    title: 'Be the Atoms',
    titleFr: 'Deviens un atome',
    widget: CoinDecay,
    caption: 'Each round is one half-life. Flip your coin. **Tails:** you broke down. Sit down.',
    captionFr: 'Chaque tour est une demi-vie. Lance ta pièce. **Pile :** tu t’es désintégré. Assieds-toi.',
  },

  // 31. Random or predictable?
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Think',
    eyebrowFr: 'Réfléchis',
    title: 'Random or Predictable?',
    titleFr: 'Hasard ou prévisible ?',
    text: 'Can anyone say **which** atom will break down next?',
    textFr: 'Peut-on dire **quel** atome va se désintégrer ensuite ?',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '**No.** Each atom breaks down at a random moment.\nBut **half** of a big group always goes in one half-life.\nMr Bowen has about **900 trillion** carbon-14 atoms. More than **3 000** break down every second.',
      answerFr: '**Non.** Chaque atome se désintègre à un moment au hasard.\nMais la **moitié** d’un grand groupe part toujours en une demi-vie.\nM. Bowen a environ **900 000 milliards** d’atomes de carbone 14. Plus de **3 000** se désintègrent chaque seconde.',
    },
  },

  // 32. Vote: the dinosaur
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

  // 33. Too old for carbon (write)
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

  // ════════════════════════════════════════════════════════════════════════
  // PART 4 — THE OLDEST THINGS: longer clocks, the Earth, the Sun
  // ════════════════════════════════════════════════════════════════════════

  // 34. Hero + starter
  {
    layout: 'hero',
    color: ORANGE,
    icon: 'Globe',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    eyebrow: 'Models · Part 4',
    eyebrowFr: 'Modèles · Partie 4',
    title: 'Clocks in Rocks',
    titleFr: 'Des horloges dans les roches',
    card: {
      icon: 'Pencil',
      badge: 'Starter',
      badgeFr: 'Pour commencer',
      text: 'Carbon-14 is a clock for **50 000 years**. What would a clock for **4 billion years** need? Write: **It needs …**',
      textFr: 'Le carbone 14 est une horloge pour **50 000 ans**. De quoi aurait besoin une horloge pour **4 milliards d’années** ? Écris : **It needs …**',
    },
  },

  // 35. Three clocks
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

  // 36. Dating a dinosaur
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

  // 37. Why not the oldest rock?
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

  // 38. A clock inside a crystal
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

  // 39. Meteorites
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
    content: 'Meteorites are **leftover** building blocks of the planets (Part 2, step 4). They were **never** melted or recycled.',
    contentFr: 'Les météorites sont des **restes** des briques qui ont fait les planètes (partie 2, étape 4). Elles n’ont **jamais** fondu ni été recyclées.',
    notes: [
      {
        tone: 'info',
        text: 'The white specks are the oldest solids in the Solar System. The Allende meteorite fell in Mexico in **1969**.',
        textFr: 'Les taches blanches sont les plus vieux solides du système solaire. La météorite d’Allende est tombée au Mexique en **1969**.',
      },
    ],
  },

  // 40. Work it out: one half-life
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

  // 41. Clair Patterson
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

  // 42. The age of the Earth (write)
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

  // 43. The Sun: the question
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

  // 44. The model Sun
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Sun',
    eyebrow: 'A computer model',
    eyebrowFr: 'Un modèle informatique',
    title: 'Build a Sun, Then Let It Age',
    titleFr: 'Construis un Soleil, puis fais-le vieillir',
    widget: SunModel,
    caption: 'The Sun turns **hydrogen** into **helium**. Slide until the model matches what we measure.',
    captionFr: 'Le Soleil transforme l’**hydrogène** en **hélium**. Fais glisser jusqu’à ce que le modèle corresponde aux mesures.',
  },

  // 45. Three methods, one answer (write)
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

  // 46. All of Earth's history in one year
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

  // 47. Checklist
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
    content: '> Check your notebook: **11 written panels** and **4 drawings**.',
    contentFr: '> Vérifie ton cahier : **11 encadrés recopiés** et **4 dessins**.',
    items: [
      { text: 'Say what a **model** is, and give one **limitation**.', textFr: 'Dire ce qu’est un **modèle**, et donner une **limite**.' },
      { text: 'Say why the planets are in one **flat plane**.', textFr: 'Dire pourquoi les planètes sont dans un même **plan**.' },
      { text: 'Describe how a **nebula** became the Solar System.', textFr: 'Décrire comment une **nébuleuse** est devenue le système solaire.' },
      { text: 'Use a **half-life** to find what is left.', textFr: 'Utiliser une **demi-vie** pour trouver ce qui reste.' },
      { text: 'Explain **carbon dating**, and why it fails for dinosaurs.', textFr: 'Expliquer la **datation au carbone 14**, et pourquoi elle ne marche pas pour les dinosaures.' },
      { text: 'Say how we know the age of the **Earth** and the **Sun**.', textFr: 'Dire comment on connaît l’âge de la **Terre** et du **Soleil**.' },
    ],
  },

  // 48. Exit
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
