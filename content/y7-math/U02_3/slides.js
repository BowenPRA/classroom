// content/y7-math/U02_3/slides.js
// Year 7 Mathematics · 2.3 Collecting Like Terms. Tuesday 15 Sept 2026.
// Source: Workbook Unit 2, Section 2.3. Every number used in class is original;
// the exercise is the homework and is not spent in advance.
//
// WRITING RULE FOR THIS DECK (the 2.5 Science density): short sentences, one
// idea each, and the body text never repeats the write note. A diagram carries
// the picture; the note carries the words to copy.
//
// THREE THINGS SHAPE THIS DECK.
//
// 1. THE CLASS ALREADY DOES THIS IN ENGLISH. Nobody says "3 apples and 2 bananas
//    make 5 apple-bananas". Slides 3–5 let them say the bag out loud before a
//    single letter appears, then show the letters doing the same thing — and
//    Science 2.5 this morning did it with atoms. The book's own tip (think of a
//    as an apple) is used, and slide 20 corrects it: the letter is a NUMBER, the
//    length of a brick.
//
// 2. THE ENGLISH IS THE BARRIER. "Like" here is not "I like mangoes"; "collect"
//    is not "collect the books"; "simplify" and "simplest form" are the exam's
//    instruction words. Slide 7 stops for all three.
//
// 3. TWO MISTAKES COST THE MARKS: dropping the invisible 1 (8s − s = 8) and
//    leaving a minus sign behind when terms move (7x + 5y − 3x + y = 10x + 6y).
//    Each gets an ask-before-you-tell slide (11 and 17) with a split vote and no
//    answer, then a widget or diagram that settles it.
//
// COPY-DOWN: 7 written panels — term · like terms · simplify + collecting like
// terms · x means 1x · only like terms · tricky like terms · keep the sign.
import { DIAGRAMS } from './diagrams.js'
import { CollectAdd, CollectSigns, Pyramid, LikeOrNot } from './widgets.jsx'
import stall from './images/stall.jpg'

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
    eyebrow: 'Unit 2 · 2.3',
    eyebrowVn: 'Chương 2 · 2.3',
    date: '15 Sept 2026',
    title: 'Collecting Like Terms',
    titleVn: 'Thu gọn các hạng tử đồng dạng',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'When **a = 5**, work out **3a + 4a**. Then work out **7a**.',
      textVn: 'Khi **a = 5**, hãy tính **3a + 4a**. Rồi tính **7a**.',
    },
  },

  // ── 2. Starter check ──────────────────────────────────────────────────────
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Starter check',
    eyebrowVn: 'Kiểm tra khởi động',
    title: 'Same Answer?',
    titleVn: 'Cùng đáp án?',
    text: 'Both answers are **35**.',
    textVn: 'Cả hai đáp án đều là **35**.',
    sub: 'Luck? Or is **3a + 4a** always the same as **7a**?',
    subVn: 'Tình cờ? Hay **3a + 4a** luôn bằng **7a**?',
    reveal: {
      label: 'Try a = 10',
      labelVn: 'Thử a = 10',
      answer: '$3a + 4a = 30 + 40 = 70$ and $7a = 70$.\n\nAlways the same. Today you find out why.',
      answerVn: '$3a + 4a = 30 + 40 = 70$ và $7a = 70$.\n\nLuôn bằng nhau. Hôm nay em sẽ biết vì sao.',
    },
  },

  // ── THE ENGLISH ALREADY DOES IT ───────────────────────────────────────────
  // 3. Question only. Make them SAY the bag in English.
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'Say it in English',
    eyebrowVn: 'Nói bằng tiếng Anh',
    title: 'What Is in the Bag?',
    titleVn: 'Trong túi có gì?',
    text: 'Mr Bowen buys **3 apples** and **2 bananas**. Then he buys **4 apples** and **1 banana**.',
    textVn: 'Thầy Bowen mua **3 quả táo** và **2 quả chuối**. Sau đó thầy mua **4 quả táo** và **1 quả chuối**.',
    sub: 'What is in his bag? Say it in a sentence.',
    subVn: 'Trong túi của thầy có gì? Hãy nói thành một câu (bằng tiếng Anh).',
  },

  // 4. The answer, photographed, then in letters
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Boxes',
    eyebrow: 'English does this already',
    eyebrowVn: 'Tiếng Anh vốn đã làm vậy',
    title: 'Apples With Apples',
    titleVn: 'Táo đi với táo',
    inlineSvg: DIAGRAMS.FRUIT_BAG,
    caption: 'Nobody says "10 apple-bananas". Algebra does not either.',
    captionVn: 'Không ai nói "10 quả táo-chuối". Đại số cũng vậy. (a: số táo, b: số chuối)',
  },

  // 5. The bridge to this morning's Science 2.5
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Atom',
    eyebrow: 'Science 2.5, this morning',
    eyebrowVn: 'Khoa học 2.5, sáng nay',
    title: 'Sorted by Kind',
    titleVn: 'Xếp theo từng loại',
    inlineSvg: DIAGRAMS.ATOMS_SORT,
    caption: 'Carbon and oxygen are different elements. Count each kind on its own.',
    captionVn: 'Cacbon và oxi là hai nguyên tố khác nhau. Đếm riêng từng loại. (carbon = cacbon, oxygen = oxi, hydrogen = hiđro)',
  },

  // ── KEY WORDS ─────────────────────────────────────────────────────────────
  // 6. Term
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Boxes',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Term',
    titleVn: 'Hạng tử',
    ratio: 40,
    inlineSvg: DIAGRAMS.TERMS,
    content: 'An expression is made of **terms**.',
    contentVn: 'Một biểu thức được tạo nên từ các **hạng tử (terms)**.',
    notes: [
      {
        tone: 'write',
        text: '**Term:** one part of an expression.\nThe + and − signs separate the terms.',
        textVn: '**Hạng tử (term):** một phần của biểu thức.\nCác dấu + và − ngăn cách các hạng tử.',
      },
    ],
  },

  // 7. English check: like / collect / simplify
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'English check',
    eyebrowVn: 'Kiểm tra tiếng Anh',
    title: 'Words With Two Meanings',
    titleVn: 'Từ có hai nghĩa',
    inlineSvg: DIAGRAMS.WORDS,
    caption: 'In maths, **like** means **the same kind**.',
    captionVn: 'Trong toán, **like** nghĩa là **cùng loại**, không phải "thích". **collect** = gộp lại, **simplify** = rút gọn.',
  },

  // 8. Like terms
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Equal',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Like Terms',
    titleVn: 'Hạng tử đồng dạng',
    ratio: 40,
    inlineSvg: DIAGRAMS.LIKE_UNLIKE,
    content: 'Look at the **letter**, not the number.',
    contentVn: 'Nhìn vào **chữ cái**, không nhìn con số.',
    notes: [
      {
        tone: 'write',
        text: '**Like terms:** terms that contain the same letter.\n$2a$ and $3a$ are like terms. $2a$ and $3b$ are not.',
        textVn: '**Hạng tử đồng dạng (like terms):** các hạng tử có cùng chữ cái.\n$2a$ và $3a$ là hạng tử đồng dạng. $2a$ và $3b$ thì không.',
      },
    ],
  },

  // 9. Simplify + collecting like terms, with the real fruit stall
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Layers',
    eyebrow: 'Key words',
    eyebrowVn: 'Từ khóa',
    title: 'Collect and Simplify',
    titleVn: 'Gộp và rút gọn',
    ratio: 45,
    image: stall,
    content: 'Halong Bay: every basket holds **one kind** of fruit.',
    contentVn: 'Vịnh Hạ Long: mỗi rổ chỉ đựng **một loại** trái cây.',
    notes: [
      {
        tone: 'write',
        text: '**Simplify:** write an expression in a shorter way.\n**Collecting like terms:** adding like terms together to simplify.\n$a + a = 2a$ and $2b + 3b = 5b$',
        textVn: '**Rút gọn (simplify):** viết biểu thức ngắn gọn hơn.\n**Thu gọn hạng tử đồng dạng (collecting like terms):** cộng các hạng tử đồng dạng lại để rút gọn.\n$a + a = 2a$ và $2b + 3b = 5b$',
      },
    ],
  },

  // 10. The method, one press at a time
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Target',
    eyebrow: 'Say each step first',
    eyebrowVn: 'Nói từng bước trước',
    title: 'Find, Move, Collect',
    titleVn: 'Tìm, chuyển, gộp',
    widget: CollectAdd,
    caption: 'Before each press, the class says what happens next.',
    captionVn: 'Trước mỗi lần bấm, cả lớp nói điều gì sẽ xảy ra.',
  },

  // ── THE INVISIBLE 1 ───────────────────────────────────────────────────────
  // 11. Question only. Everyone votes at once — left hand A, right hand B —
  // and nobody settles it until slide 12.
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowVn: 'Biểu quyết bằng một tay',
    title: 'Which Is Right?',
    titleVn: 'Đáp án nào đúng?',
    text: 'Simplify $8s − s$',
    textVn: 'Rút gọn $8s − s$',
    columns: [
      {
        heading: 'A · left hand up',
        headingVn: 'A · giơ tay trái',
        accent: BLUE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_8,
      },
      {
        heading: 'B · right hand up',
        headingVn: 'B · giơ tay phải',
        accent: ORANGE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_7S,
      },
    ],
  },

  // 12. x means 1x
  {
    layout: 'split',
    accent: RED,
    icon: 'AlertTriangle',
    eyebrow: 'The invisible 1',
    eyebrowVn: 'Số 1 vô hình',
    title: 'x Means 1x',
    titleVn: 'x nghĩa là 1x',
    ratio: 40,
    inlineSvg: DIAGRAMS.ONE_X,
    content: '**7s is right.** The letter never disappears.',
    contentVn: '**7s mới đúng.** Chữ cái không bao giờ biến mất.',
    notes: [
      {
        tone: 'write',
        text: '$x$ means $1x$.\n$4x + x = 5x$ and $8s − s = 7s$',
        textVn: '$x$ nghĩa là $1x$.\n$4x + x = 5x$ và $8s − s = 7s$',
      },
    ],
  },

  // ── ONLY LIKE TERMS ───────────────────────────────────────────────────────
  // 13. The rule
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Ruler',
    eyebrow: 'The rule',
    eyebrowVn: 'Quy tắc',
    title: 'Only Like Terms',
    titleVn: 'Chỉ gộp hạng tử đồng dạng',
    ratio: 40,
    inlineSvg: DIAGRAMS.CANT_COLLECT,
    content: 'Can you add 5 cm and 3 kg?',
    contentVn: 'Em có cộng được 5 cm với 3 kg không?',
    notes: [
      {
        tone: 'write',
        text: 'You can only collect **like terms**.\n$3a + 2b$ cannot be simplified.',
        textVn: 'Em chỉ có thể gộp các **hạng tử đồng dạng**.\n$3a + 2b$ không thể rút gọn.',
      },
    ],
  },

  // 14. Quick practice
  {
    layout: 'split',
    accent: GREEN,
    icon: 'CheckCircle2',
    eyebrow: 'Whiteboards',
    eyebrowVn: 'Bảng con',
    title: 'Tick or Cross?',
    titleVn: 'Đánh dấu ✓ hay ✗?',
    ratio: 50,
    content:
      'Can it be simplified? Tick ✓ and simplify. Or cross ✗.\n\n' +
      '**a** $4k + k$\n' +
      '**b** $3k + 3$\n' +
      '**c** $7w − 2v$\n' +
      '**d** $9d − d$\n' +
      '**e** $2m + 5m + 1$',
    contentVn:
      'Có rút gọn được không? Đánh ✓ rồi rút gọn. Hoặc đánh ✗.\n\n' +
      '**a** $4k + k$\n' +
      '**b** $3k + 3$\n' +
      '**c** $7w − 2v$\n' +
      '**d** $9d − d$\n' +
      '**e** $2m + 5m + 1$',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** ✓ $5k$, **b** ✗, **c** ✗, **d** ✓ $8d$, **e** ✓ $7m + 1$',
      answerVn: '**a** ✓ $5k$, **b** ✗, **c** ✗, **d** ✓ $8d$, **e** ✓ $7m + 1$',
    },
  },

  // 15. Tricky like terms
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'ScanEye',
    eyebrow: 'Look closely',
    eyebrowVn: 'Nhìn kỹ nhé',
    title: 'Tricky Like Terms',
    titleVn: 'Hạng tử đồng dạng dễ nhầm',
    ratio: 40,
    inlineSvg: DIAGRAMS.TRICKY,
    notes: [
      {
        tone: 'write',
        text: '**Numbers** are like terms: $7 + 2 = 9$.\n$ab$ and $ba$ are like terms, because $a × b = b × a$.\n$x$ and $x^2$ are **not** like terms.',
        textVn: '**Các số** là hạng tử đồng dạng: $7 + 2 = 9$.\n$ab$ và $ba$ là hạng tử đồng dạng, vì $a × b = b × a$.\n$x$ và $x^2$ **không** đồng dạng.',
      },
    ],
  },

  // 16. Game
  {
    layout: 'game',
    title: 'Like or Not?',
    titleVn: 'Đồng dạng hay không?',
    widget: LikeOrNot,
  },

  // ── THE SIGN TRAVELS ──────────────────────────────────────────────────────
  // 17. Question only. Left hand A, right hand B; slide 18 settles it.
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowVn: 'Biểu quyết bằng một tay',
    title: 'Two Pairs Disagree',
    titleVn: 'Hai cặp không đồng ý',
    text: 'Simplify $7x + 5y − 3x + y$',
    textVn: 'Rút gọn $7x + 5y − 3x + y$',
    columns: [
      {
        heading: 'A · left hand up',
        headingVn: 'A · giơ tay trái',
        accent: BLUE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_4X6Y,
      },
      {
        heading: 'B · right hand up',
        headingVn: 'B · giơ tay phải',
        accent: ORANGE,
        icon: 'Hand',
        inlineSvg: DIAGRAMS.ANS_10X6Y,
      },
    ],
  },

  // 18. The widget settles it
  {
    layout: 'showcase',
    accent: RED,
    icon: 'Move',
    eyebrow: 'Watch the minus sign',
    eyebrowVn: 'Theo dõi dấu trừ',
    title: 'The Sign Moves Too',
    titleVn: 'Dấu cũng di chuyển',
    widget: CollectSigns,
    caption: '**4x + 6y** is right. Watch where the **−** goes.',
    captionVn: '**4x + 6y** mới đúng. Hãy xem dấu **−** đi đâu.',
  },

  // 19. Keep the sign (write) + practice
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'The rule',
    eyebrowVn: 'Quy tắc',
    title: 'Keep the Sign',
    titleVn: 'Giữ nguyên dấu',
    notes: [
      {
        tone: 'write',
        text: 'The sign **in front** of a term belongs to it. Move them together.\n$7x + 5y − 3x + y = 7x − 3x + 5y + y = 4x + 6y$',
        textVn: 'Dấu **đứng trước** hạng tử thuộc về hạng tử đó. Di chuyển cùng nhau.\n$7x + 5y − 3x + y = 7x − 3x + 5y + y = 4x + 6y$',
      },
    ],
    reveal: {
      prompt: 'Simplify **a** $6p + 2q − 4p + 3q$ and **b** $9 + 5t − 4 − 2t$.',
      promptVn: 'Rút gọn **a** $6p + 2q − 4p + 3q$ và **b** $9 + 5t − 4 − 2t$.',
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** $2p + 5q$, **b** $3t + 5$',
      answerVn: '**a** $2p + 5q$, **b** $3t + 5$',
    },
  },

  // ── LETTERS ARE NUMBERS ───────────────────────────────────────────────────
  // 20. Real bricks: correct the apple
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Ruler',
    eyebrow: 'Real bricks',
    eyebrowVn: 'Gạch thật',
    title: 'A Letter Is a Number',
    titleVn: 'Chữ cái là một con số',
    inlineSvg: DIAGRAMS.BRICKS_REAL,
    caption: 'Here **x** is not a brick. It is the **length** of one brick.',
    captionVn: 'Ở đây **x** không phải viên gạch. Nó là **chiều dài** của một viên gạch. (length = chiều dài)',
  },

  // 21. Brick rows
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Ruler',
    eyebrow: 'Simplest form',
    eyebrowVn: 'Dạng gọn nhất',
    title: 'How Long Is Each Row?',
    titleVn: 'Mỗi hàng dài bao nhiêu?',
    ratio: 40,
    inlineSvg: DIAGRAMS.BRICK_ROWS,
    content: 'Write the total length of each row in **simplest form**.',
    contentVn: 'Viết tổng chiều dài của mỗi hàng ở **dạng gọn nhất**.',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** $2x + y$\n**b** $x + 2y$\n**c** $3x + 2y$',
      answerVn: '**a** $2x + y$\n**b** $x + 2y$\n**c** $3x + 2y$',
    },
  },

  // 22. Algebraic pyramids (widget)
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Triangle',
    eyebrow: 'Workbook puzzle',
    eyebrowVn: 'Câu đố trong vở bài tập',
    title: 'Algebraic Pyramids',
    titleVn: 'Kim tự tháp đại số',
    ratio: 40,
    widget: Pyramid,
    content: 'Each block is the **two blocks under it**, added.\n\nSay the block **before** you press.',
    contentVn: 'Mỗi ô bằng **hai ô bên dưới** cộng lại.\n\nNói kết quả **trước** khi bấm.',
  },

  // ── FIND THE MISTAKE ──────────────────────────────────────────────────────
  // 23. Mr Bowen's homework
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Pencil',
    eyebrow: 'Find the mistakes',
    eyebrowVn: 'Tìm lỗi sai',
    title: "Mr Bowen's Homework",
    titleVn: 'Bài tập về nhà của thầy Bowen',
    ratio: 40,
    inlineSvg: DIAGRAMS.MISTAKES,
    content: 'Mr Bowen gave himself **4 out of 4**.\n\nFind his **four** mistakes.',
    contentVn: 'Thầy Bowen tự chấm **4 trên 4**.\n\nHãy tìm **bốn** lỗi sai của thầy.',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** $3x + 5$: no like terms\n**b** $5y$: $y$ means $1y$\n**c** $5p + 2q$\n**d** $5ab$: $ab$ and $ba$ are like terms',
      answerVn: '**a** $3x + 5$: không có hạng tử đồng dạng\n**b** $5y$: $y$ nghĩa là $1y$\n**c** $5p + 2q$\n**d** $5ab$: $ab$ và $ba$ là hạng tử đồng dạng',
    },
  },

  // ── WORD PROBLEMS (deadpan, and they get sillier) ─────────────────────────
  // 24. Two sensible ones
  {
    layout: 'split',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Write it, then simplify',
    eyebrowVn: 'Viết ra, rồi rút gọn',
    title: 'Word Problems',
    titleVn: 'Bài toán có lời văn',
    ratio: 50,
    inlineSvg: DIAGRAMS.RECTANGLE,
    content:
      '**1.** Mr Bowen buys $n$ pens on Monday and $3n$ pens on Tuesday. How many pens does he buy?\n\n' +
      '**2.** Find the perimeter of the rectangle.',
    contentVn:
      '**1.** Thầy Bowen mua $n$ cây bút vào thứ Hai và $3n$ cây bút vào thứ Ba. Thầy mua tất cả bao nhiêu cây bút?\n\n' +
      '**2.** Tìm chu vi hình chữ nhật.',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**1.** $n + 3n = 4n$ pens\n**2.** $2x + 1 + x + 2x + 1 + x = 6x + 2$ cm',
      answerVn: '**1.** $n + 3n = 4n$ cây bút\n**2.** $2x + 1 + x + 2x + 1 + x = 6x + 2$ cm',
    },
  },

  // 25. Silly one
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Simplest form',
    eyebrowVn: 'Dạng gọn nhất',
    title: "Mr Bowen's Animals",
    titleVn: 'Những con vật của thầy Bowen',
    content:
      'Mr Bowen has $4c$ cats. He buys $3c$ more cats and $2d$ dogs.\n\n' +
      'Then $5c$ cats leave. One goldfish, called x, arrives.\n\n' +
      'How many animals does Mr Bowen have now?',
    contentVn:
      'Thầy Bowen có $4c$ con mèo. Thầy mua thêm $3c$ con mèo và $2d$ con chó.\n\n' +
      'Sau đó $5c$ con mèo bỏ đi. Một con cá vàng tên là x đến.\n\n' +
      'Bây giờ thầy Bowen có bao nhiêu con vật?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$4c + 3c + 2d − 5c + 1 = 2c + 2d + 1$\n\nThe goldfish is **1** animal. Its name is not a number.',
      answerVn: '$4c + 3c + 2d − 5c + 1 = 2c + 2d + 1$\n\nCon cá vàng là **1** con vật. Tên của nó không phải là một con số.',
    },
  },

  // 26. Sillier one
  {
    layout: 'callout',
    accent: GREEN,
    icon: 'PenLine',
    eyebrow: 'Simplest form',
    eyebrowVn: 'Dạng gọn nhất',
    title: "Mr Bowen's Keys",
    titleVn: 'Chùm chìa khóa của thầy Bowen',
    content:
      'Mr Bowen walks $3k$ km to school, then $3k$ km home.\n\n' +
      'He cannot find his keys. He walks to school and home again.\n\n' +
      'The keys were in his pocket. How far did he walk?',
    contentVn:
      'Thầy Bowen đi bộ $3k$ km đến trường, rồi $3k$ km về nhà.\n\n' +
      'Thầy không tìm thấy chìa khóa. Thầy lại đi bộ đến trường rồi về nhà.\n\n' +
      'Chìa khóa ở trong túi áo của thầy. Thầy đã đi bộ bao xa?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$3k + 3k + 3k + 3k = 12k$ km\n\nThe keys walked $12k$ km too.',
      answerVn: '$3k + 3k + 3k + 3k = 12k$ km\n\nChùm chìa khóa cũng đã đi $12k$ km.',
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
      { text: 'Say what a **term** and **like terms** are.', textVn: 'Nói được **hạng tử** và **hạng tử đồng dạng** là gì.' },
      { text: '**Simplify** by collecting like terms.', textVn: '**Rút gọn** bằng cách gộp hạng tử đồng dạng.' },
      { text: 'Remember that $x$ means $1x$.', textVn: 'Nhớ rằng $x$ nghĩa là $1x$.' },
      { text: 'Know that $3a + 2b$ cannot be simplified.', textVn: 'Biết rằng $3a + 2b$ không thể rút gọn.' },
      { text: 'Spot tricky like terms: $ab$ and $ba$.', textVn: 'Nhận ra hạng tử đồng dạng dễ nhầm: $ab$ và $ba$.' },
      { text: 'Move each **sign** with its term.', textVn: 'Di chuyển **dấu** cùng với hạng tử của nó.' },
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
    content: 'Before you simplify, **find** the like terms. Circle each kind in a different colour.',
    contentVn: 'Trước khi rút gọn, hãy **tìm** các hạng tử đồng dạng. Khoanh mỗi loại bằng một màu khác nhau.',
    notes: [
      {
        tone: 'homework',
        badge: 'Workbook 2.3',
        badgeVn: 'Vở bài tập 2.3',
        icon: 'Pencil',
        text: '**Focus** — everybody.\n**Practice** — the bricks and the pyramids.\n**Challenge** — an attempt beats a blank.',
        textVn: '**Focus** — tất cả các em.\n**Practice** — phần viên gạch và kim tự tháp.\n**Challenge** — làm sai vẫn hơn bỏ trống.',
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
    subtitle: 'Exit question: simplify **5m + 2n − m + 4n**.',
    subtitleVn: 'Câu hỏi ra về: rút gọn **5m + 2n − m + 4n**.',
  },
]
