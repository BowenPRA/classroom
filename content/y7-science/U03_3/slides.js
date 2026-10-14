// content/y7-science/U03_3/slides.js
// Year 7 Science · 3.3 Movement in space. Tuesday 20 October 2026 (provisional).
// Source: Learner's Book pages 91–96 (Unit 3 Forces and energy).
//
// ENGLISH AND FRENCH ONLY (meta.vietnamese: false): every string has an …Fr
// twin and no …Vn twin. Diagrams stay in English.
//
// ONE PERIOD, THREE QUESTIONS — the book's three objectives, in its order:
//   1. What keeps the planets in orbit?  Ask, then Mr Bowen swings a ball on a
//      string: the class votes on where it goes when he lets go (left hand: away
//      from the centre; right hand: straight on), he lets go, and the LetGo
//      widget does the same to four planets. Then the book's diagram, drawn.
//   2. Why do planets move at different speeds?  The book's Activity: the class
//      draws the bar graph and finds the pattern themselves; the reason
//      (weaker pull far away) comes after.
//   3. Why don't things in space slow down?  Feel air resistance with an open
//      exercise book, then the vacuum, Juno and Voyager 1 (one light-day away on
//      18 November 2026, four weeks after this lesson).
//   Last, the book's Think like a scientist on Neptune is an English lesson:
//   observation, prediction, conclusion.
//
// DIFFERENT MOVES FROM 3.1 ON PURPOSE: a teacher demo instead of a desk drop,
// a graph to draw, a feel-it moment, a four-finger vote, a story with a French
// connection (Bouvard and Le Verrier). No film: the motion that matters is the
// live demo and the widget.
//
// COPY-DOWN: 4 short write panels (circular + the Sun's pull, speed, air
// resistance, vacuum), 1 drawing (the orbit, slide 9) and 1 bar graph
// (slide 11). Everything else is said, voted, felt or written on whiteboards.
//
// WRITING RULE (the 2.5 density): short sentences, one idea each, and the body
// text never repeats the write note, a label or the caption.

import { DIAGRAMS } from './diagrams.js'
import { LetGo } from './widgets.jsx'
import sunPhoto from './images/sun.jpg'
import spoilers from './images/spoilers.jpg'
import juno from './images/juno.jpg'
import voyager from './images/voyager.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'

export const slides = [
  // ── START ───────────────────────────────────────────────────────────────
  // 1. Hero + the book's Getting Started
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Globe',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    date: '20 Oct 2026',
    eyebrow: '3.3 · Forces and energy',
    eyebrowFr: '3.3 · Forces et énergie',
    title: 'Movement in Space',
    titleFr: 'Le mouvement dans l’espace',
    card: {
      icon: 'Pencil',
      badge: 'Starter',
      badgeFr: 'Pour commencer',
      text: 'Write the names of the planets in order, starting with the one **closest to the Sun**. Then name the object that orbits the **Earth**, not the Sun.',
      textFr: 'Écris le nom des planètes (en anglais) dans l’ordre, en commençant par la plus **proche du Soleil**. Puis nomme l’objet qui tourne autour de la **Terre**, et pas du Soleil.',
    },
  },

  // 2. The answers, photographed
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Globe',
    eyebrow: 'Starter answers',
    eyebrowFr: 'Réponses',
    title: 'The Planets in Order',
    titleFr: 'Les planètes dans l’ordre',
    inlineSvg: DIAGRAMS.PLANET_ROW,
    caption: 'The orange words help you remember the order.',
    captionFr: 'Les mots orange aident à retenir l’ordre. En français : « Me Voici Toute Mignonne, Je Suis Une Nébuleuse ».',
  },

  // ── THE SUN ─────────────────────────────────────────────────────────────
  // 3. The biggest mass, the strongest gravity (3.1's N/kg)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Sun',
    eyebrow: 'The biggest mass',
    eyebrowFr: 'La plus grande masse',
    title: 'The Sun',
    titleFr: 'Le Soleil',
    ratio: 50,
    image: sunPhoto,
    content:
      'Mass: **330\u00a0000 times** the Earth’s. More than all the planets together.\n\n' +
      'Gravity: **270\u00a0N/kg**, 27 times the Earth’s.\n\n' +
      '**Never** look straight at the Sun.',
    contentFr:
      'Masse\u00a0: **330\u00a0000 fois** celle de la Terre. Plus que toutes les planètes réunies.\n\n' +
      'Gravité\u00a0: **270\u00a0N/kg**, 27 fois celle de la Terre.\n\n' +
      'Ne regarde **jamais** le Soleil en face.',
    reveal: {
      prompt: 'Mr Bowen (80\u00a0kg) visits the Sun. What is his weight there?',
      promptFr: 'M. Bowen (80\u00a0kg) va sur le Soleil. Quel est son poids là-bas ?',
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '80 × 270 = **21\u00a0600\u00a0N**. On Earth: 800\u00a0N.',
      answerFr: '80 × 270 = **21\u00a0600\u00a0N**. Sur Terre : 800\u00a0N.',
    },
  },

  // 4. Question 3, in pairs
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Question 3 · talk in pairs',
    eyebrowFr: 'Question 3 · parles-en à deux',
    title: 'Second Strongest Gravity',
    titleFr: 'La deuxième gravité',
    text: 'The **Sun** has the strongest gravity in the Solar System.',
    textFr: 'Le **Soleil** a la gravité la plus forte du système solaire.',
    sub: 'Which object has the **second** strongest?',
    subFr: 'Quel objet a la **deuxième** plus forte ?',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '**Jupiter.** After the Sun, it has the most mass. Its gravity: 25\u00a0N/kg.',
      answerFr: '**Jupiter.** Après le Soleil, c’est lui qui a le plus de masse. Sa gravité : 25\u00a0N/kg.',
    },
  },

  // ── WHAT KEEPS THE PLANETS IN ORBIT? ────────────────────────────────────
  // 5. Question first
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Think',
    eyebrowFr: 'Réfléchis',
    title: 'Why Don’t They Fly Away?',
    titleFr: 'Pourquoi ne partent-elles pas ?',
    text: 'The planets move **very fast**.',
    textFr: 'Les planètes vont **très vite**.',
    sub: 'So why don’t they fly off into space?',
    subFr: 'Alors pourquoi ne s’envolent-elles pas dans l’espace ?',
  },

  // 6. The demo, set up
  {
    layout: 'split',
    accent: GREEN,
    icon: 'RotateCcw',
    eyebrow: 'Watch Mr Bowen',
    eyebrowFr: 'Regarde M. Bowen',
    title: 'A Ball on a String',
    titleFr: 'Une balle au bout d’une ficelle',
    ratio: 40,
    inlineSvg: DIAGRAMS.STRING_DEMO,
    content: 'His hand is the **Sun**. The ball is a **planet**.',
    contentFr: 'Sa main, c’est le **Soleil**. La balle, c’est une **planète**.',
  },

  // 7. Vote: left hand A, right hand B, all at once. He lets go after it.
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowFr: 'Vote avec une main',
    title: 'What If He Lets Go?',
    titleFr: 'Et s’il lâche ?',
    text: 'Mr Bowen lets go of the string. Which way does the ball go?',
    textFr: 'M. Bowen lâche la ficelle. Par où part la balle ?',
    columns: [
      {
        heading: 'A · left hand up',
        headingFr: 'A · main gauche levée',
        accent: BLUE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_OUT,
      },
      {
        heading: 'B · right hand up',
        headingFr: 'B · main droite levée',
        accent: ORANGE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_ON,
      },
    ],
  },

  // 8. The same, for planets
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Globe',
    eyebrow: 'B is right: straight on',
    eyebrowFr: 'B est juste : tout droit',
    title: 'Switch Off the Sun’s Gravity',
    titleFr: 'Coupe la gravité du Soleil',
    widget: LetGo,
    caption: 'Press **Play**. Which planet is fastest? Then press **Gravity off**.',
    captionFr: 'Appuie sur **Lancer**. Quelle planète va le plus vite ? Puis appuie sur **Sans gravité**.',
  },

  // 9. Draw This: the book's diagram (p.92)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw this · page 92',
    eyebrowFr: 'À dessiner · page 92',
    title: 'What Keeps Planets in Orbit',
    titleFr: 'Ce qui garde les planètes en orbite',
    ratio: 40,
    inlineSvg: DIAGRAMS.ORBIT_DRAW,
    drawThis: true,
    content: 'Without this force, the planet would go off in a **straight line**.',
    contentFr: 'Sans cette force, la planète partirait en **ligne droite**.',
    notes: [
      {
        tone: 'write',
        text: '**Circular:** in the shape of a circle. The planets’ orbits are almost circular.\nThe Sun’s **gravity** keeps the planets in orbit. It always pulls **towards the Sun**.',
        textFr: '**Circulaire (circular) :** en forme de cercle. Les orbites des planètes sont presque circulaires.\nLa **gravité** du Soleil garde les planètes en orbite. Elle tire toujours **vers le Soleil**.',
      },
    ],
  },

  // 10. Questions 1 and 2
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Whiteboards · page 94',
    eyebrowFr: 'Ardoises · page 94',
    title: 'Questions 1 and 2',
    titleFr: 'Questions 1 et 2',
    content:
      '**1.** In which direction does the Sun’s gravity pull on a planet?\n\n' +
      '**2.** Comets and asteroids orbit the Sun too. What keeps them in orbit?',
    contentFr:
      '**1.** Dans quel sens la gravité du Soleil tire-t-elle une planète ?\n\n' +
      '**2.** Les comètes et les astéroïdes tournent aussi autour du Soleil. Qu’est-ce qui les garde en orbite ?',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**1.** Towards the Sun.\n**2.** The Sun’s gravity.',
      answerFr: '**1.** Vers le Soleil.\n**2.** La gravité du Soleil.',
    },
  },

  // ── WHY DIFFERENT SPEEDS? ───────────────────────────────────────────────
  // 11. The book's Activity: draw the bar graph
  {
    layout: 'showcase',
    accent: BLUE,
    icon: 'Table',
    eyebrow: 'Activity · page 94',
    eyebrowFr: 'Activité · page 94',
    title: 'Planet Speeds',
    titleFr: 'La vitesse des planètes',
    inlineSvg: DIAGRAMS.SPEED_TABLE,
    caption: 'Draw the bar graph. **km/s** = kilometres **per** second: Mercury goes 48\u00a0km **every** second!',
    captionFr: 'Trace le diagramme en barres. **km/s** = kilomètres **par** seconde : Mercure parcourt 48\u00a0km **chaque** seconde !',
  },

  // 12. Check it; the pattern is theirs to say
  {
    layout: 'showcase',
    accent: BLUE,
    icon: 'CheckCircle2',
    eyebrow: 'Check your graph',
    eyebrowFr: 'Vérifie ton graphique',
    title: 'Is Yours the Same?',
    titleFr: 'Le tien est-il pareil ?',
    inlineSvg: DIAGRAMS.SPEED_GRAPH,
    caption: 'Complete: “As the distance from the Sun increases, the speed of orbit of the planets …” Then say **why**.',
    captionFr: 'Complète en anglais : « As the distance from the Sun increases, the speed of orbit of the planets … » Puis dis **pourquoi**.',
  },

  // 13. Speed (write) and the reason
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Gauge',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'Speed',
    titleFr: 'La vitesse',
    ratio: 45,
    inlineSvg: DIAGRAMS.SPEED_PULL,
    content: 'Mercury: **170\u00a0000\u00a0km/h**. The Earth: about **100\u00a0000\u00a0km/h**.',
    contentFr: 'Mercure : **170\u00a0000\u00a0km/h**. La Terre : environ **100\u00a0000\u00a0km/h**.',
    notes: [
      {
        tone: 'write',
        text: '**Speed:** how fast something moves.\nAs the distance from the Sun increases, the speed of the planets **decreases**.\nThe Sun’s pull is **weaker** far away.',
        textFr: '**Vitesse (speed) :** la rapidité avec laquelle un objet se déplace.\nPlus on s’éloigne du Soleil, plus la vitesse des planètes **diminue**.\nL’attraction du Soleil est **plus faible** au loin.',
      },
    ],
  },

  // 14. The Activity's Questions 2 and 4
  {
    layout: 'callout',
    accent: BLUE,
    icon: 'HelpCircle',
    eyebrow: 'Activity · Questions 2 and 4',
    eyebrowFr: 'Activité · Questions 2 et 4',
    title: 'Why a Bar Graph?',
    titleFr: 'Pourquoi des barres ?',
    content:
      '**2.** Why is a graph better than a table for these numbers?\n\n' +
      '**4.** Why a **bar** graph, and not a **line** graph?',
    contentFr:
      '**2.** Pourquoi un graphique est-il mieux qu’un tableau pour ces nombres ?\n\n' +
      '**4.** Pourquoi un diagramme en **barres** (bar graph), et pas une **courbe** (line graph) ?',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**2.** You see the pattern at once, and you can compare the planets easily.\n**4.** The planets are separate things. There is nothing **between** two planets, so we do not join them with a line.',
      answerFr: '**2.** On voit la tendance tout de suite, et on compare facilement les planètes.\n**4.** Les planètes sont des choses séparées. Il n’y a rien **entre** deux planètes, donc on ne les relie pas par une ligne.',
    },
  },

  // ── WHY DON'T THINGS IN SPACE SLOW DOWN? ────────────────────────────────
  // 15. Feel it
  {
    layout: 'statement',
    accent: GREEN,
    eyebrow: 'Try it at your desk',
    eyebrowFr: 'Essaie à ta place',
    title: 'Feel the Air',
    titleFr: 'Sens l’air',
    text: 'Wave your open exercise book: **slowly**, then **fast**.',
    textFr: 'Agite ton cahier ouvert : **lentement**, puis **vite**.',
    sub: 'Then move it **edge first**. What do you feel?',
    subFr: 'Puis fais-le passer **par la tranche**. Que sens-tu ?',
    reveal: {
      label: 'What did you feel?',
      labelFr: 'Qu’as-tu senti ?',
      answer: 'A push **against** your hand. Bigger when you go **faster**, and when the flat side pushes more **particles** of air.',
      answerFr: 'Une poussée **contre** ta main. Plus forte quand tu vas **plus vite**, et quand le côté plat pousse plus de **particules** d’air.',
    },
  },

  // 16. Air resistance (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Wind',
    eyebrow: 'Key word',
    eyebrowFr: 'Mot clé',
    title: 'Air Resistance',
    titleFr: 'La résistance de l’air',
    ratio: 45,
    image: spoilers,
    content: 'This plane has just landed. Panels on its wing stand up to make **more** air resistance.',
    contentFr: 'Cet avion vient d’atterrir. Des panneaux se lèvent sur l’aile pour faire **plus** de résistance de l’air.',
    notes: [
      {
        tone: 'write',
        text: '**Air resistance:** a force from the air that slows a moving object down. It acts in the **opposite** direction to the movement.\nThe faster an object moves, the **bigger** the air resistance.',
        textFr: '**Résistance de l’air (air resistance) :** une force de l’air qui ralentit un objet en mouvement. Elle agit dans le sens **opposé** au mouvement.\nPlus un objet va vite, plus la résistance de l’air est **grande**.',
      },
    ],
  },

  // 17. Question first
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Think',
    eyebrowFr: 'Réfléchis',
    title: 'Air Resistance in Space?',
    titleFr: 'Résistance de l’air dans l’espace ?',
    text: 'Air resistance comes from **particles** of air.',
    textFr: 'La résistance de l’air vient des **particules** d’air.',
    sub: 'Is there air resistance in **space**?',
    subFr: 'Y a-t-il de la résistance de l’air dans l’**espace** ?',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '**No.** Space has very, very few particles: nothing to push against.',
      answerFr: '**Non.** Dans l’espace, il y a très, très peu de particules : rien à pousser.',
    },
  },

  // 18. Vacuum (write) — Question 4 is its definition
  {
    layout: 'split',
    accent: TEAL,
    icon: 'CircleSlash',
    eyebrow: 'Key word · Question 4',
    eyebrowFr: 'Mot clé · Question 4',
    title: 'Vacuum',
    titleFr: 'Le vide',
    ratio: 45,
    image: juno,
    content: 'In 2016, the **Juno** probe passed Jupiter at **266\u00a0000\u00a0km/h**. On Earth, air resistance makes that impossible.',
    contentFr: 'En 2016, la sonde **Juno** est passée près de Jupiter à **266\u00a0000\u00a0km/h**. Sur Terre, la résistance de l’air rend cela impossible.',
    notes: [
      {
        tone: 'write',
        text: '**Vacuum:** a space with no particles.\nSpace is a vacuum, so there is no air resistance. Only **gravity** acts on the planets.',
        textFr: '**Vide (vacuum) :** un espace sans particules.\nL’espace est un vide, donc il n’y a pas de résistance de l’air. Seule la **gravité** agit sur les planètes.',
      },
    ],
  },

  // 19. Voyager 1 — Question 5
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Telescope',
    eyebrow: 'Question 5 · page 94',
    eyebrowFr: 'Question 5 · page 94',
    title: 'Voyager 1: Still Going',
    titleFr: 'Voyager 1 : toujours en route',
    ratio: 50,
    image: voyager,
    content:
      'Launched in **1977**. Now outside the Solar System, at **64\u00a0000\u00a0km/h**.\n\n' +
      'On **18 November 2026** it will be so far away that a radio message takes a **whole day** to reach it.',
    contentFr:
      'Lancée en **1977**. Aujourd’hui hors du système solaire, à **64\u00a0000\u00a0km/h**.\n\n' +
      'Le **18 novembre 2026**, elle sera si loin qu’un message radio mettra **une journée entière** pour l’atteindre.',
    reveal: {
      prompt: 'Why could Voyager 1 not travel this fast on Earth?',
      promptFr: 'Pourquoi Voyager 1 ne pourrait-elle pas aller aussi vite sur Terre ?',
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '**Air resistance.** At 64\u00a0000\u00a0km/h it would be huge and slow Voyager down. In space there is no air.',
      answerFr: '**La résistance de l’air.** À 64\u00a0000\u00a0km/h, elle serait énorme et ralentirait Voyager. Dans l’espace, il n’y a pas d’air.',
    },
  },

  // 20. Question 6 — four answers, so fingers, not hands
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Question 6 · show 1, 2, 3 or 4 fingers',
    eyebrowFr: 'Question 6 · montre 1, 2, 3 ou 4 doigts',
    title: 'Which Forces?',
    titleFr: 'Quelles forces ?',
    content:
      'Which forces act on the Earth as it orbits the Sun?\n\n' +
      '**1** gravity only\n' +
      '**2** air resistance only\n' +
      '**3** gravity and air resistance\n' +
      '**4** gravity, air resistance and friction',
    contentFr:
      'Quelles forces agissent sur la Terre quand elle tourne autour du Soleil ?\n\n' +
      '**1** la gravité seulement\n' +
      '**2** la résistance de l’air seulement\n' +
      '**3** la gravité et la résistance de l’air\n' +
      '**4** la gravité, la résistance de l’air et le frottement',
    reveal: {
      label: 'Answer',
      labelFr: 'Réponse',
      answer: '**1: gravity only.** Space is a vacuum: no air resistance. Nothing rubs on the Earth: no friction.',
      answerFr: '**1 : la gravité seulement.** L’espace est un vide : pas de résistance de l’air. Rien ne frotte sur la Terre : pas de frottement.',
    },
  },

  // ── THINK LIKE A SCIENTIST: DISCOVERING NEPTUNE ─────────────────────────
  // 21. The story
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Telescope',
    eyebrow: 'Think like a scientist · page 95',
    eyebrowFr: 'Pense comme un scientifique · page 95',
    title: 'How Neptune Was Found',
    titleFr: 'Comment on a trouvé Neptune',
    inlineSvg: DIAGRAMS.NEPTUNE_STORY,
    caption: 'Something was pulling Uranus off its path. It was the gravity of **Neptune**.',
    captionFr: 'Quelque chose tirait Uranus hors de son chemin. C’était la gravité de **Neptune**. Bouvard et Le Verrier étaient français !',
  },

  // 22. Questions 1–3: three science words
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'Questions 1–3 · English check',
    eyebrowFr: 'Questions 1–3 · point d’anglais',
    title: 'Which Word?',
    titleFr: 'Quel mot ?',
    ratio: 50,
    inlineSvg: DIAGRAMS.WORDS3,
    content:
      '**1.** Bouvard **calculated** where Uranus would be.\n\n' +
      '**2.** Uranus was **seen** further from the Sun. The results were recorded.\n\n' +
      '**3.** “Another source of gravity is pulling Uranus.”',
    contentFr:
      '**1.** Bouvard a **calculé** où serait Uranus.\n\n' +
      '**2.** On a **vu** Uranus plus loin du Soleil. On a noté les résultats.\n\n' +
      '**3.** « Une autre source de gravité tire Uranus. »',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**1.** predictions **2.** observations **3.** a conclusion',
      answerFr: '**1.** predictions (des prédictions) **2.** observations **3.** a conclusion (une conclusion)',
    },
  },

  // 23. Question 4
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'PenLine',
    eyebrow: 'Question 4 · whiteboards',
    eyebrowFr: 'Question 4 · ardoises, en anglais',
    title: 'Complete the Sentences',
    titleFr: 'Complète les phrases',
    content:
      'Uranus moving further from the Sun ________ the prediction about its orbit.\n\n' +
      'Scientists found Neptune using careful ________.\n\n' +
      '**testable** · **a fair test** · **contradicted** · **results** · **conclusions** · **supported** · **observations** · **measurements**',
    contentFr:
      'Uranus moving further from the Sun ________ the prediction about its orbit.\n\n' +
      'Scientists found Neptune using careful ________.\n\n' +
      '**testable** · **a fair test** · **contradicted** · **results** · **conclusions** · **supported** · **observations** · **measurements**',
    reveal: {
      label: 'Check your answers',
      labelFr: 'Vérifie tes réponses',
      answer: '**contradicted** (it went against the prediction) · **measurements** (or **observations**)',
      answerFr: '**contradicted** (contredit) · **measurements** (des mesures) ou **observations**',
    },
  },

  // ── CLOSE ───────────────────────────────────────────────────────────────
  // 24. Checklist (the book's summary checklist, plus the vacuum)
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
    content: '> Check your notebook: **4 written panels**, **1 drawing** and **1 bar graph**.',
    contentFr: '> Vérifie ton cahier : **4 encadrés recopiés**, **1 dessin** et **1 diagramme en barres**.',
    items: [
      { text: 'Name the force that keeps the planets in **orbit**.', textFr: 'Nommer la force qui garde les planètes en **orbite**.' },
      { text: 'Say which way this force acts on a planet.', textFr: 'Dire dans quel sens cette force agit sur une planète.' },
      { text: 'Explain why planets closer to the Sun move **faster**.', textFr: 'Expliquer pourquoi les planètes proches du Soleil vont **plus vite**.' },
      { text: 'Explain why things in space do not **slow down**.', textFr: 'Expliquer pourquoi les objets dans l’espace ne **ralentissent** pas.' },
    ],
  },

  // 25. Exit question — the book's Question 7
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandFr: 'Sciences 7e année',
    title: 'Lesson Complete!',
    titleFr: 'Leçon terminée !',
    subtitle: 'Exit question: the Earth is a little **closer** to the Sun in January than in July. When does it move **faster**?',
    subtitleFr: 'Question de sortie : la Terre est un peu **plus proche** du Soleil en janvier qu’en juillet. Quand va-t-elle **plus vite** ?',
  },
]
