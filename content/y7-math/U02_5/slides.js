// content/y7-math/U02_5/slides.js
// Year 7 Mathematics · 2.5 Constructing and Solving Equations. Thursday 17 Sept 2026.
// Source: Workbook Unit 2, Section 2.5. Every number used in class is original,
// except the book's own flow chart (x + 5 = 12) on slide 8; the exercise is the
// homework and is not spent in advance.
//
// WRITING RULE FOR THIS DECK (the 2.5 Science density): short sentences, one
// idea each, and the body text never repeats the write note. A diagram carries
// the picture; the note carries the words to copy.
//
// THREE THINGS SHAPE THIS DECK.
//
// 1. THE CLASS HAS ALREADY SOLVED EQUATIONS. The starter is three missing-number
//    boxes, and in Girl Math the box was called n. Slide 2 just gives the box a
//    letter. Nothing today is new arithmetic.
//
// 2. THE ENGLISH IS THE BARRIER. "Reverse" (go backwards) and "inverse" (the
//    opposite operation) look almost the same and mean different things — and a
//    two-step equation needs both. "Inverse" also meant something else in Unit 1
//    (the inverse of 5 is −5). And "I think of a number" is not "I think about a
//    number": it means choose one and keep it secret. Slide 4 stops for all
//    three. Socks and shoes (slides 16–17) carry the order: last on, first off.
//
// 3. TWO MISTAKES COST THE MARKS: doing the operation you see instead of its
//    inverse (x − 4 = 6, so x = 2) and undoing the steps in the wrong order
//    (2a + 4 = 18, halve first, so a = 5). Each gets an ask-before-you-tell vote
//    (5 and 18) with no answer on it. The first is settled by CHECKING — putting
//    each answer back in — which is 2.2's substitution and the book's instruction
//    on every question. The second is settled by the widget.
//
// COPY-DOWN: 7 written panels — equation + solve · check · inverse operation ·
// reverse the flow chart · either way round · I think of a number · undo the
// last step first.
import { DIAGRAMS } from './diagrams.js'
import { ReverseOne, ReverseTwo, CheckIt } from './widgets.jsx'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'
const RED = '#c8102e'

export const slides = [
  // ── 1. Hero + starter ─────────────────────────────────────────────────────
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Sigma',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    eyebrow: 'Unit 2 · 2.5',
    eyebrowVn: 'Chương 2 · 2.5',
    date: '17 Sept 2026',
    title: 'Solving Equations',
    titleVn: 'Giải phương trình',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'Find each missing number.\n\n**□ + 7 = 15**, **□ × 4 = 28**, **20 − □ = 11**',
      textVn: 'Tìm mỗi số còn thiếu.\n\n**□ + 7 = 15**, **□ × 4 = 28**, **20 − □ = 11**',
    },
  },

  // ── YOU ALREADY DO THIS ───────────────────────────────────────────────────
  // 2. The box gets a letter.
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Starter check',
    eyebrowVn: 'Kiểm tra khởi động',
    title: 'The Box Has a Name',
    titleVn: 'Ô trống có tên',
    text: '**□ + 7 = 15** → **x + 7 = 15**',
    textVn: '**□ + 7 = 15** → **x + 7 = 15**',
    sub: 'In Girl Math, the box was **n**.',
    subVn: 'Trong Girl Math, ô trống tên là **n**.',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**8**, **7** and **9**. You just solved three **equations**.',
      answerVn: '**8**, **7** và **9**. Em vừa giải ba **phương trình**.',
    },
  },

  // 3. Key words: equation + solve
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Equal',
    eyebrow: 'Key words',
    eyebrowVn: 'Từ khóa',
    title: 'Equation',
    titleVn: 'Phương trình',
    ratio: 40,
    inlineSvg: DIAGRAMS.KINDS,
    content: 'You know two of these already.',
    contentVn: 'Em đã biết hai loại rồi.',
    notes: [
      {
        tone: 'write',
        text: '**Equation:** has an = sign and an **unknown** number.\n**Solve:** find the value of the unknown.\n$x + 7 = 15$, so $x = 8$',
        textVn: '**Phương trình (equation):** có dấu = và một số **chưa biết** (unknown).\n**Giải (solve):** tìm giá trị của số chưa biết.\n$x + 7 = 15$, nên $x = 8$',
      },
    ],
  },

  // ── THE ENGLISH ───────────────────────────────────────────────────────────
  // 4. English check: reverse / inverse / think of
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'English check',
    eyebrowVn: 'Kiểm tra tiếng Anh',
    title: 'Three Words to Watch',
    titleVn: 'Ba từ cần chú ý',
    inlineSvg: DIAGRAMS.WORDS,
    caption: '**Reverse** and **inverse** look the same. They are not.',
    captionVn: '**Reverse** = đi ngược lại. **Inverse** = phép ngược. **think of a number** = nghĩ ra một số và giữ bí mật.',
  },

  // ── MISTAKE 1: DOING WHAT YOU SEE ─────────────────────────────────────────
  // 5. Question only. Everyone votes at once — left hand A, right hand B —
  // and nobody settles it until slide 6.
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowVn: 'Biểu quyết bằng một tay',
    title: 'Which Is Right?',
    titleVn: 'Đáp án nào đúng?',
    text: 'Solve $x − 4 = 6$',
    textVn: 'Giải $x − 4 = 6$',
    columns: [
      {
        heading: 'A · left hand up',
        headingVn: 'A · giơ tay trái',
        accent: BLUE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_X2,
      },
      {
        heading: 'B · right hand up',
        headingVn: 'B · giơ tay phải',
        accent: ORANGE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_X10,
      },
    ],
  },

  // 6. Checking settles it
  {
    layout: 'split',
    accent: RED,
    icon: 'CheckCircle2',
    eyebrow: 'Do not guess',
    eyebrowVn: 'Đừng đoán',
    title: 'Check Your Answer',
    titleVn: 'Thử lại đáp án',
    ratio: 40,
    inlineSvg: DIAGRAMS.CHECK,
    content: '**x = 10 is right.** You met substitution in 2.2.',
    contentVn: '**x = 10 mới đúng.** Em đã học thay số ở bài 2.2.',
    notes: [
      {
        tone: 'write',
        text: '**Check:** substitute your answer back into the equation.\n$10 − 4 = 6$ ✓',
        textVn: '**Thử lại (check):** thay đáp án của em vào lại phương trình.\n$10 − 4 = 6$ ✓',
      },
    ],
  },

  // ── UNDO IT ───────────────────────────────────────────────────────────────
  // 7. Inverse operation
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'ArrowLeftRight',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Inverse Operation',
    titleVn: 'Phép toán ngược',
    ratio: 40,
    inlineSvg: DIAGRAMS.INVERSES,
    notes: [
      {
        tone: 'write',
        text: '**Inverse operation:** the operation that undoes another.\n+ and − are inverses. × and ÷ are inverses.',
        textVn: '**Phép toán ngược (inverse operation):** phép toán xóa bỏ tác dụng của một phép toán khác.\n+ và − là hai phép ngược nhau. × và ÷ là hai phép ngược nhau.',
      },
    ],
  },

  // 8. The book's flow chart
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'RotateCcw',
    eyebrow: 'The book’s method',
    eyebrowVn: 'Phương pháp trong sách',
    title: 'Reverse the Flow Chart',
    titleVn: 'Đi ngược sơ đồ',
    ratio: 40,
    inlineSvg: DIAGRAMS.FLOW,
    content: 'The same chart is in your workbook.',
    contentVn: 'Sơ đồ này cũng có trong vở bài tập.',
    notes: [
      {
        tone: 'write',
        text: 'To **solve**, reverse the flow chart.\nUse the **inverse** of each operation.\n$x + 5 = 12$, so $x = 12 − 5 = 7$',
        textVn: 'Để **giải**, đi ngược sơ đồ (flow chart).\nDùng phép **ngược** của mỗi phép toán.\n$x + 5 = 12$, nên $x = 12 − 5 = 7$',
      },
    ],
  },

  // 9. The flow chart, one box per press
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Target',
    eyebrow: 'Say each box first',
    eyebrowVn: 'Nói từng ô trước',
    title: 'Undo It',
    titleVn: 'Làm ngược lại',
    widget: ReverseOne,
    caption: 'Before each press, the class says what goes in the box.',
    captionVn: 'Trước mỗi lần bấm, cả lớp nói điều gì sẽ vào ô đó.',
  },

  // 10. Practice
  {
    layout: 'split',
    accent: GREEN,
    icon: 'CheckCircle2',
    eyebrow: 'Whiteboards',
    eyebrowVn: 'Bảng con',
    title: 'Solve, Then Check',
    titleVn: 'Giải, rồi thử lại',
    ratio: 50,
    content:
      '**a** $x + 8 = 20$\n' +
      '**b** $x − 7 = 9$\n' +
      '**c** $6 + x = 14$\n' +
      '**d** $6x = 42$\n' +
      '**e** $x − 15 = 20$',
    contentVn:
      '**a** $x + 8 = 20$\n' +
      '**b** $x − 7 = 9$\n' +
      '**c** $6 + x = 14$\n' +
      '**d** $6x = 42$\n' +
      '**e** $x − 15 = 20$',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** $x = 12$, **b** $x = 16$, **c** $x = 8$, **d** $x = 7$, **e** $x = 35$',
      answerVn: '**a** $x = 12$, **b** $x = 16$, **c** $x = 8$, **d** $x = 7$, **e** $x = 35$',
    },
  },

  // 11. Either way round (write) + practice
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'ArrowLeftRight',
    eyebrow: 'Look closely',
    eyebrowVn: 'Nhìn kỹ nhé',
    title: 'Either Way Round',
    titleVn: 'Viết chiều nào cũng được',
    notes: [
      {
        tone: 'write',
        text: '$14 = x + 3$ means the same as $x + 3 = 14$.',
        textVn: '$14 = x + 3$ có nghĩa giống như $x + 3 = 14$.',
      },
    ],
    reveal: {
      prompt: 'Solve **a** $20 = x + 6$, **b** $35 = 5x$, **c** $9 = x − 4$.',
      promptVn: 'Giải **a** $20 = x + 6$, **b** $35 = 5x$, **c** $9 = x − 4$.',
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** $x = 14$, **b** $x = 7$, **c** $x = 13$',
      answerVn: '**a** $x = 14$, **b** $x = 7$, **c** $x = 13$',
    },
  },

  // 12. Game
  {
    layout: 'game',
    title: 'Check It!',
    titleVn: 'Thử lại nào!',
    widget: CheckIt,
  },

  // ── I THINK OF A NUMBER ───────────────────────────────────────────────────
  // 13. Question only
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'Say it as an equation',
    eyebrowVn: 'Nói thành phương trình',
    title: 'Mr Bowen’s Number',
    titleVn: 'Con số của thầy Bowen',
    text: '"I think of a number and subtract 5. My answer is 21."',
    textVn: '"Thầy nghĩ ra một số rồi trừ đi 5. Kết quả là 21."',
    sub: 'What number did Mr Bowen **first think of**?',
    subVn: 'Lúc đầu thầy Bowen **đã nghĩ ra** số nào?',
  },

  // 14. Sentence to equation
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'PenLine',
    eyebrow: 'Sentence to equation',
    eyebrowVn: 'Từ câu văn đến phương trình',
    title: 'Call It n',
    titleVn: 'Gọi nó là n',
    ratio: 40,
    inlineSvg: DIAGRAMS.SENTENCE,
    content: '**26.** Write the equation first. Then solve it.',
    contentVn: '**26.** Viết phương trình trước. Rồi giải nó.',
    notes: [
      {
        tone: 'write',
        text: '**I think of a number:** call it $n$.\n$n − 5 = 21$, so $n = 21 + 5 = 26$',
        textVn: '**I think of a number** (nghĩ ra một số): gọi số đó là $n$.\n$n − 5 = 21$, nên $n = 21 + 5 = 26$',
      },
    ],
  },

  // 15. Practice
  {
    layout: 'split',
    accent: GREEN,
    icon: 'CheckCircle2',
    eyebrow: 'Whiteboards',
    eyebrowVn: 'Bảng con',
    title: 'Write It, Then Solve It',
    titleVn: 'Viết ra, rồi giải',
    ratio: 50,
    content:
      'I think of a number and…\n\n' +
      '**a** add 13. The answer is 30.\n' +
      '**b** subtract 8. The answer is 15.\n' +
      '**c** multiply it by 6. The answer is 54.\n' +
      '**d** divide it by 4. The answer is 5.',
    contentVn:
      'Thầy nghĩ ra một số rồi…\n\n' +
      '**a** cộng 13. Kết quả là 30.\n' +
      '**b** trừ đi 8. Kết quả là 15.\n' +
      '**c** nhân nó với 6. Kết quả là 54.\n' +
      '**d** chia nó cho 4. Kết quả là 5.',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** $n + 13 = 30$, $n = 17$\n**b** $n − 8 = 15$, $n = 23$\n**c** $6n = 54$, $n = 9$\n**d** $n ÷ 4 = 5$, $n = 20$',
      answerVn: '**a** $n + 13 = 30$, $n = 17$\n**b** $n − 8 = 15$, $n = 23$\n**c** $6n = 54$, $n = 9$\n**d** $n ÷ 4 = 5$, $n = 20$',
    },
  },

  // ── TWO STEPS ─────────────────────────────────────────────────────────────
  // 16. Question only. The order of undoing, in everyday English.
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'Say it in English',
    eyebrowVn: 'Nói bằng tiếng Anh',
    title: 'Getting Dressed',
    titleVn: 'Mặc đồ',
    text: 'Mr Bowen puts on his **socks**. Then he puts on his **shoes**.',
    textVn: 'Thầy Bowen mang **tất**. Rồi thầy mang **giày**.',
    sub: 'How does he take them off? Say it in a sentence.',
    subVn: 'Thầy cởi chúng ra thế nào? Hãy nói thành một câu (bằng tiếng Anh).',
  },

  // 17. The real thing
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'RotateCcw',
    eyebrow: 'Undo in reverse order',
    eyebrowVn: 'Làm ngược theo thứ tự ngược',
    title: 'Last On, First Off',
    titleVn: 'Mang sau, cởi trước',
    inlineSvg: DIAGRAMS.SOCKS_REAL,
    caption: 'An equation with two steps works the same way.',
    captionVn: 'Phương trình có hai bước cũng như vậy. (put on = mang vào, take off = cởi ra)',
  },

  // 18. Question only. Left hand A, right hand B; slide 19 settles it.
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowVn: 'Biểu quyết bằng một tay',
    title: 'Two Pairs Disagree',
    titleVn: 'Hai cặp không đồng ý',
    text: 'Solve $2a + 4 = 18$',
    textVn: 'Giải $2a + 4 = 18$',
    columns: [
      {
        heading: 'A · left hand up',
        headingVn: 'A · giơ tay trái',
        accent: BLUE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_A5,
      },
      {
        heading: 'B · right hand up',
        headingVn: 'B · giơ tay phải',
        accent: ORANGE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_A7,
      },
    ],
  },

  // 19. The widget settles it
  {
    layout: 'showcase',
    accent: RED,
    icon: 'Target',
    eyebrow: 'Say each box first',
    eyebrowVn: 'Nói từng ô trước',
    title: 'Two Steps',
    titleVn: 'Hai bước',
    widget: ReverseTwo,
    caption: '**a = 7** is right. The **+ 4** happened last, so undo it first.',
    captionVn: '**a = 7** mới đúng. Phép **+ 4** làm sau cùng, nên làm ngược nó trước.',
  },

  // 20. The rule
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Ruler',
    eyebrow: 'The rule',
    eyebrowVn: 'Quy tắc',
    title: 'Undo the Last Step First',
    titleVn: 'Làm ngược bước cuối trước',
    ratio: 40,
    inlineSvg: DIAGRAMS.TWO_STEP,
    content: 'Socks and shoes again.',
    contentVn: 'Lại là tất và giày.',
    notes: [
      {
        tone: 'write',
        text: 'Two steps: undo the **last** step **first**.\n$2a + 4 = 18$\n$18 − 4 = 14$, then $14 ÷ 2 = 7$',
        textVn: 'Hai bước: làm ngược bước **cuối** **trước tiên**.\n$2a + 4 = 18$\n$18 − 4 = 14$, rồi $14 ÷ 2 = 7$',
      },
    ],
  },

  // 21. Practice
  {
    layout: 'split',
    accent: GREEN,
    icon: 'CheckCircle2',
    eyebrow: 'Whiteboards',
    eyebrowVn: 'Bảng con',
    title: 'Two-Step Equations',
    titleVn: 'Phương trình hai bước',
    ratio: 50,
    content:
      '**a** $3a + 5 = 26$\n' +
      '**b** $4b − 3 = 29$\n' +
      '**c** $30 = 6c + 12$\n' +
      '**d** $20 = 5d − 10$',
    contentVn:
      '**a** $3a + 5 = 26$\n' +
      '**b** $4b − 3 = 29$\n' +
      '**c** $30 = 6c + 12$\n' +
      '**d** $20 = 5d − 10$',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** $a = 7$, **b** $b = 8$, **c** $c = 3$, **d** $d = 6$',
      answerVn: '**a** $a = 7$, **b** $b = 8$, **c** $c = 3$, **d** $d = 6$',
    },
  },

  // ── FIND THE MISTAKE ──────────────────────────────────────────────────────
  // 22. Mr Bowen's homework
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Pencil',
    eyebrow: 'Find the mistakes',
    eyebrowVn: 'Tìm lỗi sai',
    title: 'Mr Bowen’s Homework',
    titleVn: 'Bài tập về nhà của thầy Bowen',
    ratio: 40,
    inlineSvg: DIAGRAMS.MISTAKES,
    content: 'Mr Bowen gave himself **4 out of 4**.\n\nCheck each answer. Find his **four** mistakes.',
    contentVn: 'Thầy Bowen tự chấm **4 trên 4**.\n\nThử lại từng đáp án. Tìm **bốn** lỗi sai của thầy.',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer:
        '**a** $x = 8$: he added 6\n' +
        '**b** $x = 9$: he subtracted 5\n' +
        '**c** $x = 25$: he subtracted 7\n' +
        '**d** $x = 7$: he undid the × 2 first',
      answerVn:
        '**a** $x = 8$: thầy đã cộng 6\n' +
        '**b** $x = 9$: thầy đã trừ 5\n' +
        '**c** $x = 25$: thầy đã trừ 7\n' +
        '**d** $x = 7$: thầy làm ngược × 2 trước',
    },
  },

  // 23. Angles (Challenge)
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Triangle',
    eyebrow: 'Challenge · uses 2.3',
    eyebrowVn: 'Thử thách · dùng bài 2.3',
    title: 'Angles',
    titleVn: 'Góc',
    ratio: 40,
    inlineSvg: DIAGRAMS.ANGLES,
    content: '**a** Write an equation.\n**b** Solve it.\n**c** How big is each angle?',
    contentVn: '**a** Viết một phương trình.\n**b** Giải nó.\n**c** Mỗi góc bằng bao nhiêu độ?',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** $4x + 5x = 90$\n**b** $9x = 90$, so $x = 10$\n**c** 40° and 50°',
      answerVn: '**a** $4x + 5x = 90$\n**b** $9x = 90$, nên $x = 10$\n**c** 40° và 50°',
    },
  },

  // ── WORD PROBLEMS (deadpan, and they get sillier) ─────────────────────────
  // 24. Notebooks
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Write an equation, then solve it',
    eyebrowVn: 'Viết phương trình, rồi giải',
    title: 'Mr Bowen’s Notebooks',
    titleVn: 'Những cuốn vở của thầy Bowen',
    content:
      'Mr Bowen buys 4 notebooks and one pen. The pen costs 7 thousand dong.\n\n' +
      'He pays 43 thousand dong.\n\n' +
      'How much is one notebook?',
    contentVn:
      'Thầy Bowen mua 4 cuốn vở và một cây bút. Cây bút giá 7 nghìn đồng.\n\n' +
      'Thầy trả 43 nghìn đồng.\n\n' +
      'Một cuốn vở giá bao nhiêu?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$4n + 7 = 43$\n\n$4n = 36$, so $n = 9$: **9 thousand dong**.',
      answerVn: '$4n + 7 = 43$\n\n$4n = 36$, nên $n = 9$: **9 nghìn đồng**.',
    },
  },

  // 25. Silly one
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Write an equation, then solve it',
    eyebrowVn: 'Viết phương trình, rồi giải',
    title: 'Mr Bowen’s Age',
    titleVn: 'Tuổi của thầy Bowen',
    content:
      'Mr Bowen thinks of his age.\n\n' +
      'He doubles it, then subtracts 7. The answer is 1.\n\n' +
      'How old is Mr Bowen?',
    contentVn:
      'Thầy Bowen nghĩ đến tuổi của mình.\n\n' +
      'Thầy gấp đôi nó, rồi trừ đi 7. Kết quả là 1.\n\n' +
      'Thầy Bowen bao nhiêu tuổi?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$2a − 7 = 1$\n\n$2a = 8$, so $a = 4$. Mr Bowen is **4 years old**.',
      answerVn: '$2a − 7 = 1$\n\n$2a = 8$, nên $a = 4$. Thầy Bowen **4 tuổi**.',
    },
  },

  // 26. Sillier one
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Write an equation, then solve it',
    eyebrowVn: 'Viết phương trình, rồi giải',
    title: 'Mr Bowen’s Plant',
    titleVn: 'Cái cây của thầy Bowen',
    content:
      'Mr Bowen buys a plant. It grows 5 cm every week.\n\n' +
      'After 6 weeks, it is 26 cm tall.\n\n' +
      'How tall was it when he bought it?',
    contentVn:
      'Thầy Bowen mua một cái cây. Mỗi tuần nó cao thêm 5 cm.\n\n' +
      'Sau 6 tuần, nó cao 26 cm.\n\n' +
      'Lúc thầy mua, cái cây cao bao nhiêu?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$h + 30 = 26$\n\n$h = 26 − 30 = −4$. The plant was **−4 cm** tall.',
      answerVn: '$h + 30 = 26$\n\n$h = 26 − 30 = −4$. Cái cây cao **−4 cm**.',
    },
  },

  // ── CLOSE ─────────────────────────────────────────────────────────────────
  // 27. Checklist
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you leave',
    eyebrowVn: 'Trước khi ra về',
    title: 'Can You Do These?',
    titleVn: 'Em làm được chưa?',
    content: '> Check your notebook: **7 written panels**.',
    contentVn: '> Kiểm tra vở: **7 khung ghi chép**.',
    items: [
      { text: 'Say what an **equation** is and what **solve** means.', textVn: 'Nói được **phương trình** là gì và **giải** nghĩa là gì.' },
      { text: '**Check** an answer by putting it back in.', textVn: '**Thử lại** đáp án bằng cách thay nó vào lại.' },
      { text: 'Undo a step with its **inverse operation**.', textVn: 'Làm ngược một bước bằng **phép toán ngược**.' },
      { text: '**Reverse** a flow chart to solve.', textVn: '**Đi ngược** sơ đồ để giải.' },
      { text: 'Turn "I think of a number" into an equation.', textVn: 'Biến "I think of a number" thành phương trình.' },
      { text: 'Undo the **last** step **first**.', textVn: 'Làm ngược bước **cuối** **trước tiên**.' },
    ],
  },

  // 28. Homework
  {
    layout: 'callout',
    accent: RED,
    icon: 'Home',
    eyebrow: 'Homework Assignment',
    eyebrowVn: 'Bài tập về nhà',
    title: 'For Next Lesson',
    titleVn: 'Cho tiết học sau',
    content: 'Check every answer by putting it back into the equation.',
    contentVn: 'Thử lại mọi đáp án bằng cách thay nó vào lại phương trình.',
    notes: [
      {
        tone: 'homework',
        badge: 'Workbook 2.5',
        badgeVn: 'Vở bài tập 2.5',
        icon: 'Pencil',
        text: '**Focus** — everybody.\n**Practice** — questions 5 to 9.\n**Challenge** — an attempt beats a blank.',
        textVn: '**Focus** — tất cả các em.\n**Practice** — câu 5 đến câu 9.\n**Challenge** — làm sai vẫn hơn bỏ trống.',
      },
    ],
  },

  // 29. Exit question
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    title: 'Lesson Complete!',
    titleVn: 'Hoàn thành bài học!',
    subtitle: 'Exit question: solve **6x − 4 = 32**, then check.',
    subtitleVn: 'Câu hỏi ra về: giải **6x − 4 = 32**, rồi thử lại.',
  },
]
