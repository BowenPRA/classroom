// content/y7-math/U02_1/slides.js
// Year 7 Mathematics · 2.1 Constructing Expressions. Monday 7 Sept 2026.
//
// Same house style as 1.1–1.6: teal section headers, purple activity boxes,
// red homework, and the book's orange for every key word students copy down.
// Anything they must write goes in an orange "Write This Down" panel or an
// orange `>` bumper — never plain body text.
//
// THREE THINGS SHAPE THIS DECK.
//
// 1. IT IS THE FIRST ALGEBRA LESSON, so it is built as thin as 1.6 and thinner
//    than 1.5. There is exactly ONE key word in the book's margin — expression
//    — and four copy-down panels in the whole deck. Every slide carries one
//    picture, two or three lines of prose, and at most one panel. The arithmetic
//    never goes past 5 × 2, on purpose: the moment a student is busy computing,
//    they have stopped reading the sentence, and the sentence is the lesson.
//
// 2. THE WALL IS SLIDE 4, NOT THE NOTATION. Every year the sticking point is
//    not "what does b mean", it is "b + 2 doesn't equal anything, so I must be
//    wrong". BAG_PLUS_TWO exists only to say: the last row does not go
//    anywhere, and leaving it alone IS the answer. Slide 5 then gives that
//    unfinished-looking thing its name. If the class believes slide 4, the rest
//    of the unit is bookkeeping.
//
// 3. THE ENGLISH IS THE MATHS HERE. Slides 10–13 are the spine of the lesson
//    and they contain no new arithmetic at all: "h less than t" is written
//    t − h with the words reversed, and "subtract 4" against "subtract from 4"
//    is one preposition that flips the answer from 6 to −6. Exercise 2.1 Q9 and
//    Q11 are built on precisely these two, and a class that can do the algebra
//    still loses those marks on the reading. Do not compress this section to
//    save time; compress the word problems instead.
//
// Ask-before-you-tell is used four times — slides 2, 7, 10 and 12 — and each is
// a question slide with NO answer anywhere on it. The guesses are the lesson.
//
// Source: Workbook Unit 2, Section 2.1, pages 20–23. The bags on slide 2 are the
// book's own opening picture and Q9 is slide 13, because those two are the
// section. Everything else in class is original, since Exercise 2.1 is the
// homework and should not be spent in advance.
import { DIAGRAMS } from './diagrams.js'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'

export const slides = [
  // ── Section 1: a number you cannot see ────────────────────────────────────
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Sigma',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    eyebrow: 'Unit 2 · 2.1',
    eyebrowVn: 'Chương 2 · 2.1',
    date: '7 Sept 2026',
    title: 'Constructing Expressions',
    titleVn: 'Xây dựng biểu thức',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'Mr Bowen has **7 pens**. He buys **2 more**. How many now? Write the calculation, not just the answer.',
      textVn: 'Thầy Bowen có **7 cái bút**. Thầy mua thêm **2 cái**. Bây giờ có bao nhiêu? Hãy viết cả phép tính, đừng chỉ viết đáp án.',
    },
  },
  {
    // The hook, and the book's own opening picture. QUESTION ONLY. Nobody can
    // answer for the third bag, and being stuck there is the point — the letter
    // arrives on the next slide as the way out, not as a new rule to learn.
    layout: 'split',
    accent: TEAL,
    icon: 'ShoppingBag',
    side: 'left',
    eyebrow: 'In pairs — two minutes',
    eyebrowVn: 'Theo cặp — hai phút',
    title: 'Three Bags',
    titleVn: 'Ba cái túi',
    ratio: 55,
    inlineSvg: DIAGRAMS.THREE_BAGS,
    content:
      'You can see inside the first two bags.\n\n' +
      'The third bag is closed. Nobody in this room can see inside it.\n\n' +
      '**How many balls are in the third bag?**',
    contentVn:
      'Em nhìn thấy bên trong hai cái túi đầu tiên.\n\n' +
      'Cái túi thứ ba đóng kín. Không ai trong phòng này nhìn thấy bên trong nó.\n\n' +
      '**Trong túi thứ ba có bao nhiêu quả bóng?**',
  },
  {
    layout: 'statement',
    accent: ORANGE,
    eyebrow: 'The way out',
    eyebrowVn: 'Lối ra',
    title: 'Give It a Name',
    titleVn: 'Hãy đặt tên cho nó',
    label: 'Key idea',
    labelVn: 'Ý chính',
    labelIcon: 'Sparkles',
    text: '**b**',
    textVn: '**b**',
    sub: 'We cannot count the balls, so we call the number **b** and carry on.',
    subVn: 'Không đếm được số bóng, nên ta gọi số đó là **b**.',
    notes: [
      {
        tone: 'write',
        text:
          '**Letter:** in algebra a letter stands for **a number we do not know yet**.\n' +
          'b means **the number of balls**, not **a ball**.',
        textVn:
          '**Chữ cái (letter):** trong đại số, chữ cái đại diện cho **một số mà ta chưa biết**.\n' +
          'b nghĩa là **số lượng quả bóng**, không phải **một quả bóng**.',
      },
    ],
  },
  {
    // THE WALL. Rows one and two finish; row three does not, and the class must
    // be told out loud that this is allowed before the word "expression" is
    // worth anything to them.
    layout: 'split',
    accent: PURPLE,
    icon: 'Plus',
    eyebrow: 'Now add two balls to every bag',
    eyebrowVn: 'Bây giờ thêm hai quả bóng vào mỗi túi',
    title: 'The Row That Will Not Finish',
    titleVn: 'Dòng không thể tính xong',
    ratio: 55,
    inlineSvg: DIAGRAMS.BAG_PLUS_TWO,
    content:
      'The first two rows finish neatly: 4 and 6.\n\n' +
      'The last row will not. There is no number to write, because we still do not know **b**.\n\n' +
      'So we stop, and we leave it as **b + 2**. That is not giving up — that is the answer.',
    contentVn:
      'Hai dòng đầu tính xong gọn gàng: 4 và 6.\n\n' +
      'Dòng cuối thì không. Không có con số nào để viết, vì ta vẫn chưa biết **b**.\n\n' +
      'Vậy nên ta dừng lại và để nguyên **b + 2**. Đó không phải là bỏ cuộc — đó chính là đáp án.',
  },
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khoá',
    title: 'Expression',
    titleVn: 'Biểu thức',
    label: 'Copy this',
    labelVn: 'Chép lại',
    labelIcon: 'Pencil',
    text: 'b + 2',
    textVn: 'b + 2',
    sub: 'What you are left with has a name.',
    subVn: 'Thứ còn lại đó cũng có một cái tên.',
    notes: [
      {
        tone: 'write',
        text:
          '**Expression:** letters, and sometimes numbers, joined by operations — for example $n + 7$, $3s$ or $t − 6$.\n' +
          'It has **no equals sign** and does not have to be worked out.',
        textVn:
          '**Biểu thức (expression):** các chữ cái, đôi khi có cả số, nối với nhau bằng các phép tính — ví dụ $n + 7$, $3s$ hoặc $t − 6$.\n' +
          'Nó **không có dấu bằng** và không cần tính ra kết quả.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Boxes',
    side: 'left',
    eyebrow: 'Try three',
    eyebrowVn: 'Thử ba câu',
    title: 'Mr Bowen’s Box of Toys',
    titleVn: 'Hộp đồ chơi của thầy Bowen',
    ratio: 50,
    content:
      'There are **t toys** in the box. Write an expression for the number of toys after each move.\n\n' +
      '**a** He puts in four more toys.\n' +
      '**b** He takes out two toys.\n' +
      '**c** He takes out half of the toys.',
    contentVn:
      'Trong hộp có **t món đồ chơi**. Hãy viết biểu thức cho số đồ chơi sau mỗi lần thay đổi.\n\n' +
      '**a** Thầy bỏ thêm bốn món vào.\n' +
      '**b** Thầy lấy ra hai món.\n' +
      '**c** Thầy lấy ra một nửa số đồ chơi.',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** $t + 4$  **b** $t − 2$  **c** $t ÷ 2$.\n\nEvery answer still starts from **t**, because every question started from the same box.',
      answerVn: '**a** $t + 4$  **b** $t − 2$  **c** $t ÷ 2$.\n\nMọi đáp án đều bắt đầu từ **t**, vì mọi câu hỏi đều bắt đầu từ chính cái hộp đó.',
    },
  },

  // ── Section 2: the four English phrases of change ─────────────────────────
  {
    // QUESTION ONLY. No expressions on this slide.
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'On your whiteboard — no talking yet',
    eyebrowVn: 'Viết lên bảng con — chưa nói vội',
    title: 'One Sentence',
    titleVn: 'Một câu văn',
    label: 'Write it',
    labelVn: 'Hãy viết',
    labelIcon: 'MessageSquare',
    text: 'Mr Bowen has **s stickers**.',
    textVn: 'Thầy Bowen có **s cái sticker**.',
    sub: 'Lan has **two more stickers than Mr Bowen**. How many stickers does Lan have?',
    subVn: 'Lan có **nhiều hơn thầy Bowen hai cái sticker**. Lan có bao nhiêu cái sticker?',
    content: '> Show me your board. One expression, nothing else.',
    contentVn: '> Giơ bảng con lên cho thầy xem. Chỉ một biểu thức, không cần gì thêm.',
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Languages',
    eyebrow: 'Four phrases, four operations',
    eyebrowVn: 'Bốn cụm từ, bốn phép tính',
    title: 'The Words That Tell You What To Do',
    titleVn: 'Những từ cho em biết phải làm phép gì',
    ratio: 55,
    inlineSvg: DIAGRAMS.FOUR_PHRASES,
    content: 'The English phrase decides the operation. Learn the phrase and the maths follows.',
    contentVn: 'Cụm từ tiếng Anh quyết định phép tính. Thuộc cụm từ thì phần toán sẽ theo sau.',
    notes: [
      {
        tone: 'write',
        text:
          '**more than** → add · **fewer than** / **less than** → subtract\n' +
          '**times as many** → multiply · **half as many** → divide by 2\n' +
          'We write $3 × s$ as **3s**. The multiplication sign is dropped.',
        textVn:
          '**more than** (nhiều hơn) → cộng · **fewer than / less than** (ít hơn) → trừ\n' +
          '**times as many** (gấp … lần) → nhân · **half as many** (bằng một nửa) → chia cho 2\n' +
          'Ta viết $3 × s$ thành **3s**. Dấu nhân được lược bỏ.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'ListChecks',
    side: 'left',
    eyebrow: 'Quick fire — thirty seconds each',
    eyebrowVn: 'Nhanh — mỗi câu ba mươi giây',
    title: 'Your Turn',
    titleVn: 'Đến lượt em',
    ratio: 50,
    content:
      'Mr Bowen has **c chairs** in his classroom.\n\n' +
      '**a** The room next door has five more chairs than Mr Bowen.\n' +
      '**b** The library has four times as many chairs as Mr Bowen.\n' +
      '**c** The office has ten fewer chairs than Mr Bowen.',
    contentVn:
      'Thầy Bowen có **c cái ghế** trong lớp.\n\n' +
      '**a** Phòng bên cạnh có nhiều hơn thầy Bowen năm cái ghế.\n' +
      '**b** Thư viện có số ghế gấp bốn lần thầy Bowen.\n' +
      '**c** Văn phòng có ít hơn thầy Bowen mười cái ghế.',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** $c + 5$  **b** $4c$  **c** $c − 10$.\n\nIf you wrote $c4$ for **b**, the number always goes in front: $4c$.',
      answerVn: '**a** $c + 5$  **b** $4c$  **c** $c − 10$.\n\nNếu em viết $c4$ ở câu **b**, hãy nhớ số luôn đứng trước: $4c$.',
    },
  },

  // ── Section 3: the word order flips ───────────────────────────────────────
  {
    // QUESTION ONLY. Both candidates are on the slide; neither is marked.
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Discuss in pairs — do not write yet',
    eyebrowVn: 'Thảo luận theo cặp — chưa viết vội',
    title: 'Which One Is Right?',
    titleVn: 'Cái nào mới đúng?',
    label: 'Discuss',
    labelVn: 'Thảo luận',
    labelIcon: 'MessageSquare',
    text: '**h less than t**',
    textVn: '**h less than t** (t ít hơn h đơn vị)',
    sub: 'Is this written $h − t$, or is it written $t − h$? They are not the same.',
    subVn: 'Câu này viết là $h − t$, hay viết là $t − h$? Hai cái đó không giống nhau.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'ArrowLeftRight',
    eyebrow: 'Test it with numbers first',
    eyebrowVn: 'Hãy thử bằng số trước',
    title: 'The Words Come Backwards',
    titleVn: 'Thứ tự từ ngữ bị đảo ngược',
    ratio: 55,
    inlineSvg: DIAGRAMS.ORDER_FLIP,
    content:
      'You already know that **5 less than 12** is 7 — nobody says it is −7.\n\n' +
      'So you already know the rule. The letters do not change it.',
    contentVn:
      'Em vốn đã biết **5 less than 12** (12 bớt đi 5) bằng 7 — không ai nói là −7 cả.\n\n' +
      'Vậy là em đã biết quy tắc rồi. Có chữ cái thì quy tắc vẫn thế.',
    notes: [
      {
        tone: 'write',
        text:
          '**Watch the order.** In English the amount is often said **first**, but in maths the starting number is written **first**.\n' +
          '**h less than t** is $t − h$ · **k more than g** is $g + k$.',
        textVn:
          '**Chú ý thứ tự.** Trong tiếng Anh, phần thêm/bớt thường được nói **trước**, nhưng trong toán, số ban đầu lại được viết **trước**.\n' +
          '**h less than t** là $t − h$ · **k more than g** là $g + k$.',
      },
    ],
  },

  // ── Section 4: one preposition, a different answer ────────────────────────
  {
    // QUESTION ONLY. The two sentences differ by the single word "from", and
    // `compare` is used rather than `statement` so the class sees them as two
    // separate objects to hold side by side — `statement` runs its `text`
    // together into one flowing paragraph, which hides the very thing the
    // slide is asking them to find. Neither column carries an expression.
    layout: 'compare',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'Discuss in pairs — do A and B mean the same thing?',
    eyebrowVn: 'Thảo luận theo cặp — A và B có cùng nghĩa không?',
    title: 'Spot the Difference',
    titleVn: 'Tìm điểm khác nhau',
    columns: [
      {
        heading: 'Sentence A',
        headingVn: 'Câu A',
        accent: '#1a5fa8',
        icon: 'MessageSquare',
        content: 'Multiply x by 5 and **subtract 4**.',
        contentVn: 'Multiply x by 5 and **subtract 4**.',
        caption: 'Read it out loud.',
        captionVn: 'Hãy đọc to câu này.',
      },
      {
        heading: 'Sentence B',
        headingVn: 'Câu B',
        accent: ORANGE,
        icon: 'MessageSquare',
        content: 'Multiply x by 5 and **subtract from 4**.',
        contentVn: 'Multiply x by 5 and **subtract from 4**.',
        caption: 'Now read this one. What changed?',
        captionVn: 'Bây giờ đọc to câu này. Có gì thay đổi?',
      },
    ],
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'AlertTriangle',
    eyebrow: 'This one costs marks every year',
    eyebrowVn: 'Chỗ này năm nào cũng bị mất điểm',
    title: 'Subtract 4, or Subtract From 4?',
    titleVn: 'Trừ đi 4, hay lấy 4 trừ đi?',
    ratio: 55,
    inlineSvg: DIAGRAMS.SUBTRACT_VS_FROM,
    content:
      'Same numbers. Same letter. Opposite answers — 6 and −6.\n\n' +
      'The word **from** tells you which number you are starting at.',
    contentVn:
      'Cùng những con số. Cùng chữ cái. Đáp án ngược nhau — 6 và −6.\n\n' +
      'Từ **from** cho em biết em bắt đầu đếm ngược từ số nào.',
    notes: [
      {
        tone: 'write',
        text:
          '**subtract 4** → take 4 away from what you have: $5x − 4$\n' +
          '**subtract from 4** → start at 4 and take away what you have: $4 − 5x$',
        textVn:
          '**subtract 4** (trừ đi 4) → lấy cái em đang có trừ đi 4: $5x − 4$\n' +
          '**subtract from 4** (lấy 4 trừ đi) → bắt đầu từ 4 rồi trừ đi cái em đang có: $4 − 5x$',
      },
    ],
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'MessageSquare',
    side: 'left',
    eyebrow: 'Someone else’s answer',
    eyebrowVn: 'Đáp án của một bạn khác',
    title: 'Is Marcus Right?',
    titleVn: 'Bạn Marcus có đúng không?',
    ratio: 50,
    content:
      'Marcus is describing the expression $5 − 5x$ in words.\n\n' +
      'He writes: **"Multiply x by 5 then subtract 5."**\n\n' +
      'Is Marcus correct? Explain your answer to your partner.',
    contentVn:
      'Bạn Marcus đang mô tả biểu thức $5 − 5x$ bằng lời.\n\n' +
      'Bạn ấy viết: **"Multiply x by 5 then subtract 5."**\n\n' +
      'Marcus có đúng không? Hãy giải thích cho bạn bên cạnh nghe.',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer:
        '**No.** What Marcus wrote describes $5x − 5$, which starts at $5x$.\n\n' +
        'The expression $5 − 5x$ starts at 5, so it needs one more word: **multiply x by 5 and subtract FROM 5**.',
      answerVn:
        '**Không.** Câu Marcus viết mô tả biểu thức $5x − 5$, tức là bắt đầu từ $5x$.\n\n' +
        'Biểu thức $5 − 5x$ bắt đầu từ 5, nên cần thêm một từ: **multiply x by 5 and subtract FROM 5**.',
    },
  },

  // ── Section 5: two word problems, read completely straight ────────────────
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Users',
    eyebrow: 'Problem 1',
    eyebrowVn: 'Bài 1',
    title: 'Lunch for the Whole Trip',
    titleVn: 'Bữa trưa cho cả chuyến đi',
    ratio: 50,
    content:
      'At the restaurant an adult meal costs **a dollars** and a child’s meal costs **c dollars**.\n\n' +
      'Mr Bowen arrives with **four adults and five children**.\n\n' +
      'Write an expression for the total cost.',
    contentVn:
      'Ở nhà hàng, một suất ăn người lớn giá **a đô la** và một suất ăn trẻ em giá **c đô la**.\n\n' +
      'Thầy Bowen đến cùng **bốn người lớn và năm trẻ em**.\n\n' +
      'Hãy viết biểu thức cho tổng số tiền.',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$4a + 5c$.\n\nTwo different prices, so two different letters. You cannot add them together into one term.',
      answerVn: '$4a + 5c$.\n\nHai mức giá khác nhau nên phải dùng hai chữ cái khác nhau. Không thể gộp chúng thành một số hạng.',
    },
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Bug',
    side: 'left',
    eyebrow: 'Problem 2',
    eyebrowVn: 'Bài 2',
    title: 'The Crickets',
    titleVn: 'Những con dế',
    ratio: 50,
    content:
      'Mr Bowen keeps **p pet crickets** in a box under his desk. Every cricket has six legs.\n\n' +
      '**a** Write an expression for the total number of legs in the box.\n' +
      '**b** Two crickets escape. Write an expression for the number of legs still in the box.',
    contentVn:
      'Thầy Bowen nuôi **p con dế** trong một cái hộp dưới bàn làm việc. Mỗi con dế có sáu chân.\n\n' +
      '**a** Hãy viết biểu thức cho tổng số chân trong hộp.\n' +
      '**b** Hai con dế trốn thoát. Hãy viết biểu thức cho số chân còn lại trong hộp.',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '**a** $6p$  **b** $6p − 12$, because two crickets take twelve legs with them.\n\nMr Bowen would like them back.',
      answerVn: '**a** $6p$  **b** $6p − 12$, vì hai con dế mang theo mười hai cái chân.\n\nThầy Bowen mong chúng quay về.',
    },
  },

  // ── Section 6: recap and homework ─────────────────────────────────────────
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you leave',
    eyebrowVn: 'Trước khi ra về',
    title: 'Can You Do All Four?',
    titleVn: 'Em làm được cả bốn điều này chứ?',
    content:
      '> Your notebook should now have **4 written panels** — the letter, the expression, the four phrases, and subtract-from. Check that none is missing.',
    contentVn:
      '> Trong vở của em bây giờ phải có **4 khung ghi chép** — chữ cái, biểu thức, bốn cụm từ, và subtract-from. Hãy kiểm tra xem có thiếu khung nào không.',
    items: [
      { text: 'Say what an **expression** is, and why it does not need an equals sign.', textVn: 'Nói được **biểu thức** là gì, và vì sao nó không cần dấu bằng.' },
      { text: 'Leave $b + 2$ alone without thinking you got it wrong.', textVn: 'Để yên $b + 2$ mà không nghĩ là mình làm sai.' },
      { text: 'Turn **more than**, **fewer than**, **times as many** and **half as many** into $+$, $−$, $×$ and $÷$.', textVn: 'Chuyển **more than**, **fewer than**, **times as many** và **half as many** thành $+$, $−$, $×$ và $÷$.' },
      { text: 'Write **h less than t** as $t − h$, and tell **subtract 4** apart from **subtract from 4**.', textVn: 'Viết **h less than t** thành $t − h$, và phân biệt **subtract 4** với **subtract from 4**.' },
    ],
  },
  {
    layout: 'callout',
    accent: RED,
    icon: 'Home',
    eyebrow: 'Homework Assignment',
    eyebrowVn: 'Bài tập về nhà',
    title: 'For Next Lesson',
    titleVn: 'Cho tiết học sau',
    content: 'Read every question twice before you write. In this exercise the reading is the hard part, not the maths.',
    contentVn: 'Hãy đọc mỗi câu hỏi hai lần trước khi viết. Trong bài tập này, phần khó là đọc hiểu, không phải phần toán.',
    notes: [
      {
        tone: 'homework',
        badge: 'Workbook 2.1 · pages 20–23',
        badgeVn: 'Vở bài tập 2.1 · trang 20–23',
        icon: 'Pencil',
        text:
          '**Focus** — Q1 to 5. Everybody.\n' +
          '**Practice** — Q6 to 10.\n' +
          '**Challenge** — Q11 and 12. An attempt beats a blank.',
        textVn:
          '**Focus** — câu 1 đến 5. Tất cả các em.\n' +
          '**Practice** — câu 6 đến 10.\n' +
          '**Challenge** — câu 11 và 12. Làm sai vẫn hơn bỏ trống.',
      },
    ],
  },
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    title: 'Lesson Complete!',
    titleVn: 'Hoàn thành bài học!',
    subtitle: 'A letter is just a number you have not met yet. Exit question: **Mr Bowen has $n$ pens and gives away three. Write the expression.**',
    subtitleVn: 'Chữ cái chỉ là một con số em chưa gặp mà thôi. Câu hỏi ra về: **Thầy Bowen có $n$ cái bút và cho đi ba cái. Hãy viết biểu thức.**',
  },
]
