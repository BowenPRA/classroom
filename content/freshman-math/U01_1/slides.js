// content/freshman-math/U01_1/slides.js
// Algebra Track 1.1 — The Cartesian Plane and Distance.
//
// This is the first lesson of the Algebra Track, and it sets the tone: the
// deck argues for its formulas instead of issuing them. Nothing here is
// presented as a rule to memorise. Distance on a line is a gap you can count;
// the plane is two of those lines crossed; distance in the plane is the
// triangle the components make; three dimensions is the same move done twice.
// By the time the formula √(x² + y² + z²) appears, the class has already built
// it, which is why the slide can afford to call the result surprising.
//
// The course is flagged bilingual:false in content/courses.js, so there are no
// …Vn twins here — the EN/VN toggle is hidden for this course. The English is
// still written for a class whose first language is Vietnamese: short
// sentences, one idea per line, and every new word said plainly before it is
// used. What this deck does NOT do is dodge vocabulary. Absolute value,
// magnitude, ordered pair, quadrant, perpendicular, component, hypotenuse,
// dimension and anticlockwise are all named properly, because these students
// are going to meet them in every later textbook and a nickname now is a debt
// later.
//
// The house rule holds: anything a student must copy is in an orange "Write
// This Down" panel or an orange `>` bumper, and nothing else is.
//
// Numbers were chosen so the arithmetic never competes with the idea: the
// plane worked pair A(−4, −2), B(4, 4) gives components 8 and 6, distance 10,
// and midpoint (0, 1) — which lands on the y-axis, so "is that really halfway?"
// can be checked by eye rather than taken on trust.
//
// The fly used to close this deck. It is now Project 1 (content/freshman-math/
// P01_1), which is where the twine, the folded-notebook model and the spider
// investigation live. This lesson teaches the mathematics that project needs
// and hands over on the last slide — run it first.
import { DIAGRAMS } from './diagrams.js'
import descartes from './images/descartes.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'

export const slides = [
  // ══ Part 1 · Distance on a line ═══════════════════════════════════════════
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Sigma',
    brand: 'Algebra Track',
    eyebrow: 'Unit 1 · 1.1',
    title: 'The Cartesian Plane and Distance',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      text: 'Draw a number line from **−6 to 8** and mark **−3** and **5**. In one sentence: **how far apart** are they, and **how do you know**?',
    },
  },
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'In pairs — no calculators',
    title: 'How Far Apart?',
    label: 'Best guess',
    labelIcon: 'MessageSquare',
    text: 'Mr Bowen is standing at **5**. You are standing at **−3**.',
    sub: 'How far apart are you? More importantly — **what calculation did you do** to get there? Write the calculation, not just the answer.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Ruler',
    eyebrow: 'Key word',
    title: 'Distance',
    ratio: 45,
    inlineSvg: DIAGRAMS.LINE_DISTANCE,
    content:
      'You can count the gap: from −3 up to 5 is 8 steps. Counting always works, but it is slow.\n\n' +
      'Subtracting is the fast version of counting the gap. In maths, the gap between two numbers has a name — the **difference**.',
    notes: [
      {
        tone: 'write',
        text: '**Distance** between two numbers = the **difference** between them = **bigger − smaller**.\n\nThe distance from −3 to 5 is $5 - (-3) = 8$.',
      },
    ],
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'AlertTriangle',
    side: 'left',
    eyebrow: 'What if you do it the other way?',
    title: 'A Distance Cannot Be Negative',
    ratio: 55,
    content:
      'Mr Bowen subtracts in the other order and gets $-3 - 5 = -8$.\n\n' +
      'So which is it — 8 or −8? Is he 8 apart from you, or −8 apart from you?\n\n' +
      '> Can two things ever be **−8 metres** apart? What would that even look like?',
    reveal: {
      label: 'So what is going on?',
      answer:
        'The answer is **8**. There is no such thing as a negative distance — distance is a **size**, and sizes are never negative.\n\n' +
        'The −8 is still telling you something true: it says the **direction** was backwards, that you went down the line rather than up it. But the **how far** part is 8 either way.\n\n' +
        'We need a way of saying "just the size, throw away the direction". That is the next slide.',
    },
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Equal',
    eyebrow: 'Key word',
    title: 'Absolute Value',
    ratio: 45,
    inlineSvg: DIAGRAMS.ABS_VALUE,
    drawThis: true,
    content:
      'The **absolute value** of a number is its **distance from zero**. Two straight bars: $|-4|$ is "the absolute value of negative four".\n\n' +
      'It is not "delete the minus sign" — that is only what it looks like from outside. It is a distance, which is why it comes out positive. Another word for it is the **magnitude**: the size, with the direction thrown away.',
    notes: [
      {
        tone: 'write',
        text: '**Absolute value:** the distance of a number from 0, written $|a|$. It is never negative.\n\n$|-4| = 4$ and $|4| = 4$.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'ArrowLeftRight',
    side: 'left',
    eyebrow: 'The version that always works',
    title: 'Distance, in One Formula',
    ratio: 55,
    content:
      '"Bigger minus smaller" works, but it makes you stop and check which number is bigger first. On a line that is easy. Later it will not be.\n\n' +
      'Absolute value removes the checking. Subtract in **either** order, then take the absolute value — the answer is the same both times.',
    notes: [
      {
        tone: 'write',
        text: 'For **any** two numbers $a$ and $b$, the distance between them is $|a - b| = |b - a|$',
      },
    ],
    reveal: {
      label: 'Check it — all three',
      prompt: 'Find the distance between: **A)** 3 and 11   **B)** −7 and −2   **C)** −6 and 6',
      answer:
        '**A)** $|3 - 11| = |-8| = 8$\n\n' +
        '**B)** $|-7 - (-2)| = |-5| = 5$\n\n' +
        '**C)** $|-6 - 6| = |-12| = 12$ — a common wrong answer here is 0, from cancelling the signs instead of subtracting.',
    },
  },

  // ══ Part 2 · The middle ═══════════════════════════════════════════════════
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Still no calculators',
    title: 'Where Do You Meet?',
    label: 'Best guess',
    labelIcon: 'MessageSquare',
    text: 'You are still at **−3**. Mr Bowen is still at **5**.',
    sub: 'You agree to walk towards each other and meet **exactly in the middle**. What number do you meet on? Write your guess before anyone speaks.',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Target',
    eyebrow: 'Key word',
    title: 'Midpoint',
    ratio: 45,
    inlineSvg: DIAGRAMS.LINE_MIDPOINT,
    content:
      'The **midpoint** is the point with an equal gap on both sides. Here it is 1: four steps back to −3, four steps on to 5.\n\n' +
      'To find it, add the two numbers and halve the answer.',
    notes: [
      {
        tone: 'write',
        text: '**Midpoint** of $a$ and $b$: $m = \\frac{a + b}{2}$\n\nMidpoint of −3 and 5: $\\frac{-3 + 5}{2} = \\frac{2}{2} = 1$.',
      },
    ],
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Sparkles',
    side: 'left',
    eyebrow: 'Two names, one calculation',
    title: 'You Have Done This Before',
    ratio: 55,
    content:
      'Add them up, divide by 2. You have been doing that since primary school and calling it the **average**, or the **mean**.\n\n' +
      'The midpoint of two numbers **is** their average — not something like it. The same arithmetic, used for a different purpose.',
    notes: [
      {
        tone: 'theory',
        badge: 'Where the formula comes from',
        text:
          'Halfway means the two gaps are equal: $m - a = b - m$.\n\n' +
          'Rearrange to $2m = a + b$, so $m = \\frac{a+b}{2}$. The formula is not a rule someone invented — it is what "halfway" forces.',
      },
      {
        tone: 'write',
        text: 'The **midpoint** of two numbers is the same thing as their **average** (their **mean**).',
      },
    ],
  },

  // ══ Part 3 · The plane ════════════════════════════════════════════════════
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'Think, then answer',
    title: 'One Number Is Not Enough',
    label: 'Discuss',
    labelIcon: 'MessageSquare',
    text: 'One number pins down a point **on a line**.',
    sub: 'Mr Bowen wants to describe exactly where a chair is **on this floor**. How many numbers does he need — and why is one not enough?',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Grid3x3',
    eyebrow: 'The idea',
    title: 'Cross Two Number Lines',
    ratio: 45,
    inlineSvg: DIAGRAMS.PLANE_ANATOMY,
    drawThis: true,
    content:
      'Take the number line you already know. Take a second one, and stand it up so the two cross at **90°** — at right angles. Cross them at their zeros.\n\n' +
      'That is the whole invention. Two things you already understand, arranged so that every point on the flat surface gets its own pair of numbers.',
    notes: [
      {
        tone: 'write',
        text:
          '**x-axis:** the horizontal number line (across).\n' +
          '**y-axis:** the vertical number line (up).\n' +
          '**Origin:** the point where they cross, $(0, 0)$.',
      },
    ],
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'MoveRight',
    side: 'left',
    eyebrow: 'Key word',
    title: 'Coordinates',
    ratio: 45,
    inlineSvg: DIAGRAMS.ORDER_MATTERS,
    content:
      'A point is written $(x, y)$ — **across first, then up**. Always that order, in every maths book you will ever open.\n\n' +
      'This is an **ordered pair**, and "ordered" is doing real work: $(4, 3)$ and $(3, 4)$ use the same digits and are different places.',
    notes: [
      {
        tone: 'write',
        text: '**Coordinates:** a pair of numbers $(x, y)$ giving a point\'s position — **x across, then y up**.\n\nThey are an **ordered pair**: $(4, 3)$ is not $(3, 4)$.',
      },
    ],
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'BookOpen',
    eyebrow: 'Where the name comes from',
    title: 'Descartes, and Three Names for One Thing',
    ratio: 50,
    image: descartes,
    content:
      '**René Descartes**, a French philosopher and mathematician of the 1600s. "Cartesian" is his name turned into an adjective.\n\n' +
      'You will also see **xy-plane** and **coordinate plane** — three names, one object.\n\n' +
      'His famous line: **"I think, therefore I am."**',
    notes: [
      {
        tone: 'theory',
        badge: 'Why he matters here',
        text: 'Before Descartes, **geometry** and **algebra** were separate subjects. Putting numbers on the plane welded them together: a shape became an equation, and an equation could be drawn.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'LayoutGrid',
    side: 'left',
    eyebrow: 'Key word',
    title: 'The Four Quadrants',
    ratio: 45,
    inlineSvg: DIAGRAMS.QUADRANTS,
    drawThis: true,
    content:
      'The two axes cut the plane into four regions. Each one is called a **quadrant** — from the Latin for "a quarter".\n\n' +
      'They are numbered with **Roman numerals**: I, II, III, IV. Each quadrant has its own pattern of signs, and once you know the pattern you can name a point\'s quadrant without plotting it.',
    notes: [
      {
        tone: 'write',
        text:
          '**Quadrant I:** $(+, +)$   ·   **Quadrant II:** $(-, +)$\n' +
          '**Quadrant III:** $(-, -)$   ·   **Quadrant IV:** $(+, -)$\n\n' +
          'A point sitting **on** an axis is in **no** quadrant.',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'RotateCcw',
    eyebrow: 'How to remember the order',
    title: 'Start at (1, 0) and Turn Left',
    ratio: 45,
    inlineSvg: DIAGRAMS.COUNTERCLOCKWISE,
    content:
      'The numbering looks arbitrary until you see the movement behind it.\n\n' +
      'Put your finger on **(1, 0)** and sweep it round **anticlockwise** — the opposite way to a clock. You pass through the quadrants in order: I, II, III, IV.\n\n' +
      'Not a mnemonic. A direction to turn.',
    notes: [
      {
        tone: 'theory',
        badge: 'A promise about later',
        text: 'That circle is the **unit circle**. Later, this plane gets described by **angles** instead of $(x, y)$ — that is **trigonometry**, a long way off.',
      },
    ],
  },

  // ══ Part 4 · Distance and midpoint in the plane ═══════════════════════════
  {
    layout: 'statement',
    accent: ORANGE,
    eyebrow: 'The hard question of the lesson',
    title: 'Now Measure a Slanted Line',
    label: 'Discuss — no formula yet',
    labelIcon: 'MessageSquare',
    text: 'On a number line, distance was easy: subtract, take the absolute value.',
    sub: 'But a line between two points on the plane can lie at **any angle**. It is not along the x-axis and it is not along the y-axis. How would you measure it — using only things you already know?',
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Spline',
    eyebrow: 'The key move',
    title: 'Break It Into Components',
    ratio: 45,
    inlineSvg: DIAGRAMS.COMPONENTS,
    drawThis: true,
    content:
      'You cannot measure the slanted line directly. But you **can** measure how far it goes across and how far it goes up — and each of those is a distance on a single number line.\n\n' +
      'These two pieces are the **components** of the line. Drop the corner in and a **right triangle** appears.',
    notes: [
      {
        tone: 'write',
        text:
          'The **x-component** is $|x_2 - x_1|$ — how far across.\n' +
          'The **y-component** is $|y_2 - y_1|$ — how far up.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Target',
    side: 'left',
    eyebrow: 'Components make this easy too',
    title: 'Midpoint of Two Points',
    ratio: 45,
    inlineSvg: DIAGRAMS.MIDPOINT_PLANE,
    content:
      'Once a line is split into components, each direction can be handled **on its own**.\n\n' +
      'Average the two x-values for the midpoint\'s x. Average the two y-values for its y. It is the number-line midpoint, done twice — and because a midpoint is a **point**, the answer is a pair.',
    notes: [
      {
        tone: 'write',
        text: '**Midpoint of two points:** $M = \\left( \\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2} \\right)$',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Ruler',
    eyebrow: 'The payoff',
    title: 'Distance Is the Hypotenuse',
    ratio: 45,
    inlineSvg: DIAGRAMS.DISTANCE_PLANE,
    content:
      'The two components are the **legs** of a right triangle. The slanted line you want is its **hypotenuse** — the longest side, opposite the right angle.\n\n' +
      'And there is already a rule for that: **Pythagoras**, waiting for exactly this.',
    notes: [
      {
        tone: 'write',
        text: '**Distance between two points:** $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$\n\nThe squares make the absolute value bars unnecessary — squaring kills a minus sign.',
      },
    ],
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'PenLine',
    side: 'left',
    eyebrow: 'Your turn',
    title: 'Both Formulas, One Pair of Points',
    ratio: 55,
    content:
      'Take P$(1, 2)$ and Q$(7, 10)$. Sketch them, drop the corner in, and find:\n\n' +
      '> **A)** the two **components**\n' +
      '> **B)** the **midpoint** of P and Q\n' +
      '> **C)** the **distance** from P to Q',
    notes: [
      {
        tone: 'task',
        badge: 'On paper, then whiteboards',
        text: 'Finish all three **before** anyone answers. If your distance is **smaller** than either component, you have slipped — the hypotenuse is the longest side.',
      },
    ],
    reveal: {
      label: 'Check your answers',
      answer:
        '**A)** across $= |7 - 1| = 6$, up $= |10 - 2| = 8$.\n\n' +
        '**B)** $M = \\left( \\frac{1+7}{2}, \\frac{2+10}{2} \\right) = (4, 6)$.\n\n' +
        '**C)** $d = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Another 6-8-10 — that is the 3-4-5 triangle doubled.',
    },
  },

  // ══ Part 5 · Dimensions, and the third one ════════════════════════════════
  {
    layout: 'statement',
    accent: BLUE,
    eyebrow: 'A word you have heard but probably cannot define',
    title: 'What Is a Dimension?',
    label: 'Discuss',
    labelIcon: 'MessageSquare',
    text: 'You have heard "3D" your whole life — 3D films, 3D printers.',
    sub: 'But what exactly is a **dimension**? Try to finish this sentence properly: "A dimension is …"',
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Layers',
    eyebrow: 'The definition',
    title: 'Count the Axes',
    ratio: 50,
    inlineSvg: DIAGRAMS.DIMENSION_LADDER,
    content:
      'A **dimension** is a direction you can move in that the others cannot copy. Count the axes and you have counted the dimensions.\n\n' +
      'A line is **1D**, the plane is **2D**. Axes are always **perpendicular** — at 90° — because a leaning axis would partly repeat one already there.',
    notes: [
      {
        tone: 'write',
        text:
          '**Dimension:** the number of **axes** you can move along. 1D = a line, 2D = a plane, 3D = space.\n\n' +
          '**Perpendicular:** at right angles (90°). Axes are always perpendicular.\n\n' +
          'One **axis**, two **axes** — said "AK-seez".',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Box',
    side: 'left',
    eyebrow: 'Add one more',
    title: 'Three Dimensions',
    ratio: 45,
    inlineSvg: DIAGRAMS.AXES_3D,
    content:
      'The room you are sitting in is **3D**. To describe where the fly on the wall is, "across" and "up the wall" are not enough — you also need **how far out from the wall** it is.\n\n' +
      'So we add a third axis, called **z**, perpendicular to both of the others. Every point in the room now has three numbers.',
    notes: [
      {
        tone: 'write',
        text: 'In **3D space** a point is $(x, y, z)$ — three axes, all perpendicular to each other, so three numbers.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Triangle',
    eyebrow: 'Do the same move twice',
    title: 'Two Triangles, Not One',
    ratio: 45,
    inlineSvg: DIAGRAMS.BOX_DIAGONAL,
    drawThis: true,
    content:
      'You want the distance from a bottom corner of a room to the **opposite ceiling corner**. No single triangle holds that line — so build two.\n\n' +
      'First on the **floor**: x and y make a right triangle with hypotenuse $f$.\n\n' +
      'Then **stand a second triangle up** on $f$, with legs $f$ and $z$.',
    notes: [
      {
        tone: 'theory',
        badge: 'The trick worth noticing',
        text: 'The hypotenuse of the first triangle becomes a **leg** of the second. That is the whole method — you can always stand one more triangle on the last answer.',
      },
    ],
  },
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Sparkles',
    eyebrow: 'Now watch what happens to the algebra',
    title: 'The Surprising Part',
    inlineSvg: DIAGRAMS.DISTANCE_3D_ALGEBRA,
    caption: 'Substitute the first equation into the second and the square root of the floor diagonal **disappears**. You never needed to work out $f$ at all. The 2D formula did not get replaced — it just **grew another square**, and it will keep doing that for as long as you keep adding axes.',
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'CheckCircle2',
    side: 'left',
    eyebrow: 'Copy this one carefully',
    title: 'Distance in 3D',
    ratio: 55,
    content:
      'One square per dimension, all added up, all under a single square root. The pattern is the point — if you ever meet a fourth axis, you already know what to write.\n\n' +
      'And this makes the arithmetic much easier than the two-triangle method, because you never have to stop and take a square root in the middle.',
    notes: [
      {
        tone: 'write',
        text: '**Distance in 3D:** $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$',
      },
    ],
    reveal: {
      label: 'Quick check',
      prompt: 'Find the distance from $(0, 0, 0)$ to $(2, 3, 6)$.',
      answer: '$d = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.',
    },
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'AlertTriangle',
    eyebrow: 'The most expensive mistake in algebra',
    title: 'The Freshman’s Dream',
    ratio: 50,
    inlineSvg: DIAGRAMS.FRESHMAN_DREAM,
    content:
      'It is tempting to "simplify" $\\sqrt{x^2 + y^2}$ to $x + y$. **They do not cancel.** If they did, every hypotenuse would equal the other two sides added together — and triangles would not exist.',
    notes: [
      {
        tone: 'write',
        text: '**Careful:** $\\sqrt{x^2 + y^2} \\neq x + y$\n\nA root splits across **times** and **divide** — never across **plus**.',
      },
      {
        tone: 'info',
        badge: 'It has a name',
        text: 'Textbooks call this the **freshman\'s dream**. Every one of Mr Bowen\'s algebra students has tried it; being the one who does not is worth real marks.',
      },
    ],
  },

  // ══ Part 7 · Recap ════════════════════════════════════════════════════════
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you leave',
    title: 'Can You Do All Eight?',
    content: '> Your notebook should now have **15 written items** and **5 labelled drawings**. Check.',
    items: [
      { text: 'Find a **distance** with $|a - b|$.' },
      { text: 'Say what **absolute value** means.' },
      { text: 'Find a **midpoint**, and say why it is an **average**.' },
      { text: 'Plot $(x, y)$ and name the four **quadrants**.' },
      { text: 'Give the plane its three names, and place **Descartes**.' },
      { text: 'Split a line into **components** to find a **distance**.' },
      { text: 'Define a **dimension**; find a distance in **3D**.' },
      { text: 'Explain why $\\sqrt{x^2 + y^2} \\neq x + y$.' },
    ],
  },
  {
    layout: 'callout',
    accent: RED,
    icon: 'Home',
    eyebrow: 'Homework Assignment',
    title: 'For Next Lesson',
    content: 'Show a **sketch** for every distance question. The formula is the last step.',
    notes: [
      {
        tone: 'homework',
        icon: 'Pencil',
        text:
          '**1.** Distance **and** midpoint: $(2, 5)$ and $(10, 11)$; $(-3, 4)$ and $(5, -2)$; $(0, -6)$ and $(-8, 0)$.\n' +
          '**2.** Distance from $(1, 2, 2)$ to $(4, 6, 14)$.\n' +
          '**3.** A cupboard 6 ft by 6 ft by 7 ft: corner to opposite ceiling corner?\n' +
          '**4.** Find $x$ and $y$ making $\\sqrt{x^2 + y^2} = x + y$ **true** — why does that not rescue the rule?',
      },
    ],
  },
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'Hammer',
    eyebrow: 'What happens next',
    title: 'You Are About to Need All of This',
    content:
      'Next lesson this stops being an exercise. You will be given a room, a fly that crosses it in a straight line, and a **project** — with a mark scheme.\n\n' +
      'Everything you copied down today is the toolkit for it, so bring your notebook.',
    notes: [
      {
        tone: 'theory',
        badge: 'Bring to the next lesson',
        text: 'Your **notebook** (it becomes the 3D model — you will fold it), a **ruler**, and a **calculator**. Some of the answers stop being whole numbers.',
      },
    ],
  },
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Algebra Track',
    title: 'Lesson Complete!',
    subtitle: 'You can measure a distance in one, two or three dimensions — and you built the 3D formula rather than being handed it. Exit question: a room is 4 ft by 4 ft by 2 ft. What is the corner-to-opposite-ceiling-corner distance, and why is this one so friendly?',
  },
]
