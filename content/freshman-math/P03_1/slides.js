// content/freshman-math/P03_1/slides.js
// Algebra Track · Project 3 — Somebody Is 2.7 Kilometres Away.
//
// The deck is in THREE parts, and the order is not negotiable:
//
//   Slides 1–16   THE PROJECT. The Hoi An hunt and the privacy write-up.
//                 Nothing in here answers anything.
//   Slide 17      THE CHECKPOINT. Maps are signed off; that part is closed.
//   Slides 18–29  AFTER. What this is called, what a phone actually does, and
//                 the treasure task for the Early Years class downstairs.
//   Slide 30      A STOP SLIDE.
//   Slides 31–35  THE SOLUTIONS. Shown once the sheets are collected.
//
// THE HOOK IS A JOKE THAT TURNS SERIOUS. "Neary" is a friend-finder app whose
// privacy promise — we never share your location — is completely true and
// completely worthless, because it shares your DISTANCE, and three distances
// are a location. Mr Bowen is the target, on purpose: the lesson is about how
// easily a person is found, and it should not be modelled on following a
// stranger. Slide 15 is the payoff and slide 16 is the write-up question.
//
// THE NUMBERS ARE REAL AND WERE COMPUTED, NOT CHOSEN. The map is an
// equirectangular render at exactly 1 cm = 250 m (see images/CREDITS.json).
// From Classic Coffee the true distances to the three anchors are 2688.4 m,
// 1469.1 m and 2327.1 m, which is why the app says 2.7, 1.5 and 2.3. The
// bearings to the three anchors are 117, 88 and 154 degrees apart, so the fix
// is well conditioned; and rounding to the nearest 0.1 km leaves a region
// 111 m by 143 m, which is the honest answer to "where is he" and the number
// the privacy slide turns on.
//
// THE TWO-CIRCLE AMBIGUITY IS THE SPINE OF BOTH HALVES. Circles A and B cross
// at two points 2674 m apart and BOTH are on the map. That is slide 8, and it
// is also exactly why the Early Years class downstairs is handed TWO tape
// measures and THREE clues: two tapes find two places, and the third clue is
// what picks one. If that connection is not made out loud at slide 25, the
// treasure task is just a game.
//
// ON LAYOUT: `showcase`, `steps`, `compare` and `gallery` silently DROP a
// slide-level `notes` array. Every copy-down item here is therefore on a
// `split`, `statement`, `callout` or `stack`, or is an orange `>` bumper inside
// a `steps` slide's `content`, which `renderContent` does draw.
//
// The course is bilingual:false, so this deck is English-only and carries no
// …Vn twins. There is no `date`: a project spans several lessons.
import { DIAGRAMS } from './diagrams.js'
import { HoiAnFixWidget } from './widgets.jsx'
import hoiAnMap from './images/hoi-an-map.png'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'

export const slides = [
  // ══════════════════════════════════════════════════════════════════════════
  // THE PROJECT — slides 1 to 16. No answers anywhere in here.
  // ══════════════════════════════════════════════════════════════════════════
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Sigma',
    brand: 'Algebra Track · Project 3',
    eyebrow: 'Two lessons + a write-up',
    title: 'Somebody Is 2.7 Kilometres Away',
    card: {
      icon: 'MapPin',
      badge: 'Your task',
      text: '**Three distances**, and Mr Bowen will not say where. Find him. Out of **16**.',
    },
  },
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'The situation',
    title: 'He Is Not Answering',
    label: 'Set-up',
    labelIcon: 'MessageSquare',
    text: 'Mr Bowen is somewhere in Hoi An. He will not say where, and he thinks you cannot find out.',
    sub: 'He is wrong, and the only thing you have is an app called **Neary** — which shows how far away your friends are, and nothing else.',
  },
  {
    // No diagram here on purpose. This slide carried ONE_READING in the first
    // draft, and that picture has "one reading tells you a circle, not a place"
    // written across the top of it — which is the answer to slide 4, printed
    // above the question. The diagram arrives at slide 5, after they have had a
    // go at it.
    layout: 'callout',
    accent: PURPLE,
    icon: 'Info',
    eyebrow: 'What the app actually gives you',
    title: 'Neary Does Not Share Your Location',
    content: 'It says so on its front page: **"We never share your location."**\n\nAll it shares is a **distance**, to the nearest tenth of a kilometre. That is completely true — and you are going to test it.',
    notes: [
      {
        tone: 'task',
        badge: 'Three readings, taken from three places',
        text: '**A** Japanese Bridge — Mr Bowen is **2.7 km** away.\n**B** Tra Que Herb Village — **1.5 km** away.\n**C** Cua Dai Beach — **2.3 km** away.',
      },
    ],
  },
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'In pairs, before anybody draws anything',
    title: 'One Reading. Where Is He?',
    label: 'Predict',
    labelIcon: 'HelpCircle',
    text: 'You are at the Japanese Bridge and the app says **2.7 km**.',
    sub: 'Point at the map and say where he is. If you cannot point at one place, say exactly what the reading **does** tell you — and be precise about it.',
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'Circle',
    eyebrow: 'A distance is not a place',
    title: 'One Reading Is a Circle',
    ratio: 46,
    inlineSvg: DIAGRAMS.ONE_READING,
    drawThis: true,
    content: 'Every point exactly 2.7 km from the Japanese Bridge is a possible answer, and those points make a **circle** — the definition you copied down in 1.3, doing real work.\n\nThe ring is about 17 km long. He could be on a beach, in a rice field, or in somebody\'s kitchen.',
    notes: [
      {
        tone: 'write',
        text: 'One distance from one place gives a **circle** of possible answers, centred on that place.',
      },
    ],
  },
  {
    layout: 'statement',
    accent: BLUE,
    eyebrow: 'Still in pairs — no drawing yet',
    title: 'Now You Have Two',
    label: 'Predict',
    labelIcon: 'HelpCircle',
    text: 'Add the second reading: **1.5 km** from Tra Que Herb Village.',
    sub: 'How many places are left? Say a **number** before you say anything else, and be ready to defend it.',
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Target',
    side: 'left',
    eyebrow: 'The answer most people get wrong',
    title: 'Two Readings Leave Two Places',
    ratio: 46,
    inlineSvg: DIAGRAMS.TWO_READINGS,
    drawThis: true,
    content: 'Two circles cross **twice**. Not once — twice, unless they only just touch.\n\nSo two readings do not name a place. They name a **pair** of places, and on this map those two are **2.7 km apart**. One of them is nowhere near the other.',
    notes: [
      {
        tone: 'write',
        text: 'Two circles cross at **two** points. Two distances are not enough to fix one place.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'CheckCircle2',
    eyebrow: 'And that is why there are three',
    title: 'The Third Reading Decides',
    ratio: 46,
    inlineSvg: DIAGRAMS.THREE_READINGS,
    content: 'The third circle passes through **one** of the two candidates and misses the other.\n\nThat is the whole method. Three distances, from three places that are not in a straight line, name exactly one point.',
    notes: [
      {
        tone: 'write',
        text: 'Three distances from **three places not in a line** give **one** place.\n\nThis is the three-point rule from 1.3, used backwards.',
      },
    ],
  },
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'MapPin',
    eyebrow: 'Your sheet · 1 cm on the map is 250 m on the ground',
    title: 'The Map You Are Working On',
    image: hoiAnMap,
    caption: 'A, B and C are the three places the readings were taken from. The scale bar is the authority — measure your radii off it.',
  },
  {
    layout: 'steps',
    accent: PURPLE,
    icon: 'Compass',
    eyebrow: 'The construction · on your printed sheet',
    title: 'Three Arcs, In Pencil',
    content: '> 1 km on the ground is **4 cm** on the sheet.',
    steps: [
      { text: '**Convert the radii first**, before the compass: **10.8**, **6.0**, **9.2** cm.' },
      { text: '**Needle on A**, then **B**, then **C** — three arcs, all in pencil.' },
      { text: '**Mark the crossing** and name what is there.' },
    ],
  },
  {
    // This was a `reveal` on the slide above until the two of them together ran
    // 92px past the bottom at 1440x900. It is better off here anyway: the trick
    // is not a work-around for a broken compass, it is 1.3's argument in paper,
    // and it wants a copy-down of its own.
    layout: 'callout',
    accent: TEAL,
    icon: 'Ruler',
    eyebrow: 'Almost no school compass opens to 10.8 cm',
    title: 'When the Compass Will Not Reach',
    content: 'Take a strip of scrap paper and mark two points on its edge exactly **10.8 cm** apart. Hold one mark on A with a pencil point, put your pencil through the other, and turn it.\n\nYou have just drawn a 2.7 km arc without a compass.',
    notes: [
      {
        tone: 'write',
        badge: 'Why that is allowed',
        text: 'What draws a circle is a **locked distance**, not a particular tool — 1.3, in paper instead of metal.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'PenLine',
    side: 'left',
    eyebrow: 'Question 1 · on your sheet',
    title: 'Two Answers Before One',
    ratio: 56,
    content: 'Before you use reading **C**, stop with just **A** and **B** and find **both** places where those two arcs cross.\n\nMark them both. Give the second one a name too — say what is there, or what road it is on.',
    notes: [
      {
        tone: 'task',
        badge: 'Marks are for showing both',
        text: 'A sheet with only the right crossing on it has skipped the part of the argument that matters.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Target',
    eyebrow: 'Question 2 · on your sheet',
    title: 'Name the Place',
    ratio: 56,
    content: 'Now bring in **C**. One of your two crossings survives.\n\nWrite down **where he is** — not "here", but the name of the road, the corner or the business your arcs land on.',
    notes: [
      {
        tone: 'task',
        badge: 'Write it as a sentence',
        text: 'Mr Bowen is at ______________________ , which is about ______ km from the Japanese Bridge.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Scale',
    side: 'left',
    eyebrow: 'Question 3 · the part that separates good work from finished work',
    title: 'How Sure Are You, In Metres?',
    ratio: 46,
    inlineSvg: DIAGRAMS.BAND_PRECISION,
    content: 'Your three arcs will **not** meet at a single point. Look closely — they bound a small triangle.\n\nThat is not bad drawing. "2.7 km" means anywhere from **2.65 to 2.75**, so each reading is a 100 m **band**, and three bands overlap in a patch.',
    notes: [
      {
        tone: 'task',
        badge: 'Measure it and convert it',
        text: 'Measure the little triangle in **mm**, then turn it into **metres** using the scale. Write both numbers down.',
      },
    ],
  },
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'Stop and look at what you just did',
    title: 'He Never Told You Where He Was',
    label: 'Think',
    labelIcon: 'AlertTriangle',
    text: 'Neary was telling the truth the whole time. It never shared anybody\'s location.',
    sub: 'It shared a **distance**, rounded to the nearest tenth of a kilometre, which sounds like nothing. Three of those put a person inside a patch you can walk across in two minutes.',
  },
  {
    layout: 'callout',
    accent: RED,
    icon: 'ShieldCheck',
    eyebrow: 'Question 4 · on your sheet, in full sentences',
    title: 'What This Means for Your Phone',
    content: 'Plenty of real apps show how far away other people are, and promise they never share your location. Most are telling the truth.\n\nYou have just proved the promise is worth less than it sounds.',
    notes: [
      {
        tone: 'write',
        badge: 'Copy this, then answer the question under it',
        text: 'A distance is not a location. **Three distances are.**\n\n**Q4:** An app shows only how far away you are, to the nearest 0.1 km. In three or four sentences: why is that still worth being careful about? Name one thing you would check in its settings.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // THE CHECKPOINT. The Hoi An half is closed off here, before the method has a
  // name and before anybody is told what a phone does.
  // ══════════════════════════════════════════════════════════════════════════
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Pens down',
    title: 'Bring Your Map to the Front',
    label: 'Checkpoint',
    labelIcon: 'CheckCircle2',
    text: 'Mr Bowen signs the corner of your map. That part of the project is now **closed**.',
    sub: 'Keep the sheet — the back of it is used again this afternoon. Everything from here on is about what you have just done and what it is called.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AFTER THE CHECKPOINT — the theory, then the task downstairs.
  // ══════════════════════════════════════════════════════════════════════════
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'It has a name, and almost everybody gets it wrong',
    title: 'What Did You Just Do?',
    label: 'Discuss',
    labelIcon: 'MessageSquare',
    text: 'Most people would call it **triangulation**.',
    sub: 'Most people would be wrong, and the difference is worth knowing — because it is the difference between measuring a **distance** and measuring an **angle**.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Spline',
    eyebrow: 'Two different methods, two different words',
    title: 'Trilateration and Triangulation',
    ratio: 42,
    inlineSvg: DIAGRAMS.TRILAT_VS_TRIANG,
    content: '**Trilateration** works from **distances**. Each one gives a circle, and the circles cross. That is what you did, and what your phone does.\n\n**Triangulation** works from **angles**. From each end of one carefully measured base line you sight the target and record an angle; the two lines of sight cross.',
    notes: [
      {
        tone: 'write',
        text: '**Trilateration:** fixing a position from **distances** — lateral, meaning sides.\n**Triangulation:** fixing a position from **angles**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Telescope',
    side: 'left',
    eyebrow: 'Why the wrong word won',
    title: 'Surveyors Got There First',
    ratio: 56,
    content: 'For two hundred years, mapping a country meant triangulation. Measuring an angle accurately was easy; measuring a distance of forty kilometres accurately was almost impossible.\n\nSo surveyors measured **one** base line with enormous care, and then built a whole country out of angles from it.\n\nRadio and satellites reversed that. Now the distance is the easy measurement, and the angle is the hard one — but the old word stuck.',
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Zap',
    eyebrow: 'The same method, one dimension up',
    title: 'This Is What Your Phone Does',
    ratio: 44,
    inlineSvg: DIAGRAMS.GPS_FIX,
    content: 'A GPS satellite sends a message saying when it left. Your phone times how long it took and multiplies by the speed of light — that is a **distance**.\n\nOne distance in three dimensions is a **sphere**, not a circle. Three spheres cross, and the maths is the distance formula from 1.1 with a third term in it.',
    notes: [
      {
        tone: 'write',
        text: 'GPS is **trilateration in 3D**. A fourth satellite is needed because the phone\'s own clock is unknown too — so there are four unknowns, not three.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // THE TREASURE TASK — downstairs, with the Early Years class.
  // ══════════════════════════════════════════════════════════════════════════
  {
    layout: 'hero',
    color: GREEN,
    icon: 'Users',
    brand: 'Algebra Track · Project 3',
    eyebrow: 'Part 2 · downstairs, with the Early Years class',
    title: 'Now You Write the Clues',
    card: {
      icon: 'Target',
      badge: 'The task',
      text: 'Hide a **sticker**. Measure its distance from **three points you choose**. Hand those three numbers to a class of five-year-olds and watch whether your clues actually work. Worth **4 of the 16 marks**.',
    },
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'MapPin',
    side: 'left',
    eyebrow: 'The one rule that decides whether it works',
    title: 'Choose Your Three Points Well',
    ratio: 44,
    inlineSvg: DIAGRAMS.TREASURE_ROOM,
    content: 'Pick three fixed things nobody can move: a door frame, a pillar, the corner of a step. Write down exactly which spot on each one you measured from.\n\nSpread them **around** the treasure. Three points along one wall are in a straight line, and you already know what that does.',
    notes: [
      {
        tone: 'write',
        badge: 'The rule, and the reason',
        text: 'Three points in a straight line pin down **nothing** — the same exception as 1.3.\n\nSpread out, the three distances agree in **one** place.',
      },
    ],
  },
  {
    layout: 'steps',
    accent: GREEN,
    icon: 'Ruler',
    eyebrow: 'Do it in this order',
    title: 'Hide, Measure, Write',
    content: 'Work in **metres to the nearest 10 cm** — 2.4 m, not "about two and a bit".',
    steps: [
      { text: '**Hide the sticker** low down, where a five-year-old can reach it.' },
      { text: '**Name your three points** P, Q and R, and say what each one is.' },
      { text: '**Measure all three to the sticker.** Every number on the clue card.' },
      { text: '**Check your own card.** Could a stranger find it from those numbers?' },
    ],
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Users',
    side: 'left',
    eyebrow: 'Why they get two tapes and three numbers',
    title: 'Two Tapes Find Two Places',
    ratio: 56,
    inlineSvg: DIAGRAMS.TWO_READINGS,
    content: 'The Early Years class gets **two** tape measures. Two children hold the ends at P and Q and walk until both tapes read your numbers.\n\nThey will find a spot — and there is **another** spot, on the other side of the line from P to Q, where both tapes read exactly the same. That is slide 7, happening on a floor.\n\nYour **third** number is what tells them which one.',
  },
  {
    layout: 'stack',
    variant: 'checklist',
    accent: GREEN,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you hand the card over',
    title: 'Is Your Clue Card Finished?',
    content: '> Everything on this list, or the little ones will not find it.',
    items: [
      { text: 'Three points named so a stranger could **stand on them**.' },
      { text: 'The three points are **not in a straight line**.' },
      { text: 'Three distances, in **metres to the nearest 10 cm**.' },
      { text: 'You measured to the **sticker**, not to near it.' },
      { text: 'The sticker is **reachable** by a five-year-old.' },
      { text: 'Your team has **checked the card** without looking at the sticker.' },
    ],
  },
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'Sparkles',
    eyebrow: 'You are the grown-up for twenty minutes',
    title: 'How to Be Good at This',
    content: 'They are five. They cannot read your handwriting, they will let go of the tape, and they will be extremely excited.\n\nRead the numbers out for them. Hold your end of the tape still. Let them do the walking, and let them be the one who finds it.',
    notes: [
      {
        tone: 'task',
        badge: 'What Mr Bowen is watching for',
        text: 'Not whether they find it fast. Whether **your clues worked**, and whether you let them do the finding.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'PenLine',
    eyebrow: 'Question 5 · the last thing on your sheet',
    title: 'Write Down What Happened',
    ratio: 56,
    content: 'Back upstairs, finish the sheet while it is fresh.\n\nDid your clues work first time? If they went to the wrong place first, **which** wrong place was it — and does that match what you would predict from two circles?',
    notes: [
      {
        tone: 'task',
        badge: 'Two or three sentences',
        text: 'The most interesting write-ups are the ones where it went **wrong**, and the team can explain the wrong answer with a diagram.',
      },
    ],
  },
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you hand the project in',
    title: 'Marked Out of 16',
    content: '> Both sides of the sheet, with every arc still on it.',
    items: [
      { text: '**Q1** Both A–B crossings found and named — **3**' },
      { text: '**Q2** The place named, arcs left on the map — **3**' },
      { text: '**Q3** The patch measured in mm **and** metres — **3**' },
      { text: '**Q4** The privacy answer, in full sentences — **3**' },
      { text: '**Treasure** Three points, not in a line — **1**' },
      { text: '**Treasure** Three distances measured properly — **1**' },
      { text: '**Treasure** The clues worked — **1**' },
      { text: '**Q5** The write-up explains what happened — **1**' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // THE STOP SLIDE. Everything past here is worked answers.
  // ══════════════════════════════════════════════════════════════════════════
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'End of the project',
    title: 'Stop Here',
    label: 'Answers ahead',
    labelIcon: 'AlertTriangle',
    text: 'Everything after this slide is the **worked solution**.',
    sub: 'Do not go past this point until every sheet is finished and handed in. If you are still working, the questions you need are on the slides before this one.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SOLUTIONS — for after the projects are collected.
  // ══════════════════════════════════════════════════════════════════════════
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'MapPin',
    eyebrow: 'Solution · press once per arc',
    title: 'Watch It Close In',
    widget: HoiAnFixWidget,
    caption: 'One arc leaves a ring seventeen kilometres long. Two leave two places. Three leave a coffee shop.',
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Target',
    side: 'left',
    eyebrow: 'Solution · Q1 and Q2',
    title: 'The Two Crossings, and the Winner',
    ratio: 56,
    content: 'Arcs **A** and **B** cross at two places **2.7 km apart**: one on the road out towards Cua Dai, and one up in the north-west near Thanh Ha.\n\nArc **C** passes through the first and misses the second by well over two kilometres.',
    notes: [
      {
        tone: 'write',
        badge: 'The answer',
        text: 'Mr Bowen was at **Classic Coffee**, on the road out to the beach — about 2.7 km from the Japanese Bridge, 1.5 km from Tra Que and 2.3 km from Cua Dai.',
      },
    ],
    reveal: {
      label: 'How close should a good sheet be?',
      answer:
        'Within about **5 mm** of the true crossing, which is 125 m on the ground. A team that is 5 mm out has drawn well; the rounding alone is worth about 4 mm.\n\nMark the **arcs**, not the accuracy. A sheet with three clean arcs and a crossing 8 mm out is worth more than a confident dot with no working.',
    },
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Scale',
    eyebrow: 'Solution · Q3',
    title: 'How Big Is the Patch?',
    ratio: 46,
    inlineSvg: DIAGRAMS.BAND_PRECISION,
    content: 'Each reading admits **±50 m**, so each arc is really a 100 m band.\n\nWorking out where all three bands agree gives a patch **111 m by 143 m** — call it **130 m across**, or about **5 mm** on the sheet.',
    notes: [
      {
        tone: 'write',
        badge: 'Accept anything in this range',
        text: 'Any answer between about **100 m and 200 m** is a good one, if the working shows a measurement in mm converted with the scale.',
      },
    ],
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'ShieldCheck',
    side: 'left',
    eyebrow: 'Solution · Q4',
    title: 'What a Good Privacy Answer Says',
    ratio: 56,
    content: 'The strong answers make three moves, and the third is the one that separates them.\n\n**One:** a distance on its own is nearly harmless. **Two:** three distances are not, and you have proved it. **Three:** nobody needs three phones — one person walking to three places gets three readings from the same app.',
    notes: [
      {
        tone: 'write',
        badge: 'The move that earns the last mark',
        text: 'Noticing that **you can move**. The three readings did not need three people — they needed one person and twenty minutes.',
      },
    ],
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Users',
    eyebrow: 'Solution · the treasure task',
    title: 'What the Wrong Place Tells You',
    ratio: 46,
    inlineSvg: DIAGRAMS.TWO_READINGS,
    content: 'If the Early Years class went to the wrong place first, that place was almost certainly the **mirror image** of the sticker across the line joining P and Q.\n\nThat is the second crossing, on a floor, in front of the whole class. A team that spotted this and drew it has understood the entire project.',
    notes: [
      {
        tone: 'write',
        text: 'Reflect the sticker across the line **PQ** and you land on the other place two tapes allow. The **third** distance is the only thing that separates them.',
      },
    ],
  },
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Algebra Track · Project 3',
    title: 'Project Complete!',
    subtitle: 'One distance is a circle, two are a pair of places, three are an address. Exit question — Neary changes its readings to the nearest whole kilometre instead of the nearest tenth. Roughly how much bigger does the patch get, and would you still call it private?',
  },
]
