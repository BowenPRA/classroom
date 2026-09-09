// content/y7-math/U02_2/slides.js
// Year 7 Mathematics · 2.2 Using Expressions and Formulae. Thursday 10 Sept 2026.
//
// Same house style as 1.1–1.6 and 2.1: teal section headers, purple activity
// boxes, red homework, and the book's orange for every key word students copy
// down. Anything they must write goes in an orange "Write This Down" panel or
// an orange `>` bumper — never plain body text.
//
// FOUR THINGS SHAPE THIS DECK.
//
// 1. IT OPENS BY PAYING OFF 2.1. Last lesson the hardest thing to sell was that
//    c − 50 is a finished answer and they were allowed to stop. Slide 2 hands
//    them c = 320 and the row finishes. That is the whole of 2.2 in one move,
//    it uses the same cups and the same numbers as the 2.1 diagram, and it
//    means the new word arrives as a reward rather than as another rule. Do not
//    reorder these first three slides.
//
// 2. THE WALL IS SLIDE 4, AND IT IS 2.1's OWN FAULT. Last lesson taught them to
//    write 3 × n as 3n. The bill arrives here: a student who reads 3n as two
//    digits pushed together answers 34 for n = 4, and is completely confident.
//    INVISIBLE_TIMES draws the × back in before any number lands. Every year
//    this is the mistake that costs the most marks in Exercise 2.2, and it is
//    not an arithmetic failure — it is a reading failure, like everything else
//    in this unit.
//
// 3. THE VOCABULARY IS THE WORKBOOK'S. Substitute, value and formula are the
//    section's three margin key words, and the definition on slide 9 is
//    Cambridge's own: a rule connecting two or more quantities, written with
//    letters, WITH an = sign. That last clause is the whole contrast with 2.1,
//    where an expression was defined as having no = sign, so the two words are
//    put side by side rather than left two pages apart for a student to notice.
//    The verb stays REPRESENT, as it was in 2.1.
//
// 4. THE ENGLISH IS STILL THE MATHS. Slides 6–8 add no new arithmetic: 3x + 2
//    with x = 4 is 14, and the class already knows × comes before +. What they
//    do not know is that substituting does not switch that rule off. Slides
//    12–13 are the same again with a negative — the arithmetic is 5 + 6, and
//    the only difficulty is whether the minus sign travelled into the bracket.
//
// Ask-before-you-tell is used twice — slides 6 and 12 — and neither has an
// answer anywhere on it. Both are deliberately built as a disagreement between
// two answers, because a show of hands split down the middle buys more
// attention than a correct answer handed over.
//
// Source: Workbook Unit 2, Section 2.2. Every number used in class is original;
// the exercise is the homework and should not be spent in advance. The boiling
// water on slide 15 is the bridge to Science 2.2 (changes of state), which this
// class had yesterday.
import { DIAGRAMS } from './diagrams.js'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const BLUE = '#1a5fa8'
const RED = '#c8102e'

export const slides = [
  // ── Section 1: the row that would not finish, finishes ────────────────────
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Sigma',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    eyebrow: 'Unit 2 · 2.2',
    eyebrowVn: 'Chương 2 · 2.2',
    date: '10 Sept 2026',
    title: 'Using Expressions and Formulae',
    titleVn: 'Sử dụng biểu thức và công thức',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'Last lesson a cup held **c ml**, Mr Bowen drank 50 ml, and I told you to stop at **c − 50**.\n\nToday I am telling you: **c = 320**. On your whiteboard, write how much is left. You have 30 seconds.',
      textVn: 'Tiết trước, một cốc chứa **c ml**, thầy Bowen uống 50 ml, và thầy bảo em dừng lại ở **c − 50**.\n\nHôm nay thầy nói cho em biết: **c = 320**. Hãy viết lên bảng con: còn lại bao nhiêu? Em có 30 giây.',
    },
  },
  {
    // The payoff to 2.1's wall. Everybody gets this right, and that is the
    // point — the lesson opens with the class succeeding at the thing they
    // were told last week they were not allowed to do.
    layout: 'split',
    accent: TEAL,
    icon: 'Coffee',
    side: 'left',
    eyebrow: 'Maths 2.1 — the cup we had to leave alone',
    eyebrowVn: 'Toán 2.1 — cái cốc mà ta đành để nguyên',
    title: 'The Row Finishes',
    titleVn: 'Dòng tính đã hoàn thành',
    ratio: 50,
    inlineSvg: DIAGRAMS.CUP_FINISHES,
    content:
      'Last lesson **c − 50** was the finished answer, and stopping there was correct.\n\n' +
      'Nothing about that has changed. The only new thing is that somebody has now **told us what c is**.\n\n' +
      'So today the row goes one step further, and lands on a number: **270**.',
    contentVn:
      'Tiết trước, **c − 50** chính là đáp án hoàn chỉnh, và dừng ở đó là đúng.\n\n' +
      'Điều đó vẫn không thay đổi. Chỉ có một điều mới: bây giờ đã có người **cho ta biết c bằng bao nhiêu**.\n\n' +
      'Vậy nên hôm nay dòng tính đi thêm được một bước nữa, và ra một con số: **270**.',
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Repeat',
    eyebrow: 'Key words',
    eyebrowVn: 'Từ khoá',
    title: 'Substitute',
    titleVn: 'Thay số',
    ratio: 50,
    inlineSvg: DIAGRAMS.SUBSTITUTE_SWAP,
    content:
      'In football, a **substitute** comes on and another player goes off. The position on the pitch does not change — only who is standing in it.\n\n' +
      'A letter works the same way.',
    contentVn:
      'Trong bóng đá, một cầu thủ **dự bị (substitute)** vào sân và một cầu thủ khác rời sân. Vị trí trên sân không đổi — chỉ đổi người đứng ở đó.\n\n' +
      'Chữ cái trong đại số cũng hoạt động đúng như vậy.',
    notes: [
      {
        tone: 'write',
        text:
          '**Substitute:** put a number in place of a letter.\n' +
          '**Value:** the number you get after substituting. When $n = 4$, the value of $3n + 2$ is 14.',
        textVn:
          '**Substitute (thay số):** đặt một con số vào chỗ của chữ cái.\n' +
          '**Value (giá trị):** con số em thu được sau khi thay. Khi $n = 4$, giá trị của $3n + 2$ là 14.',
      },
    ],
  },

  // ── Section 2: the bill for last lesson's shorthand ───────────────────────
  {
    // THE WALL. 2.1 taught them to drop the times sign; this is what that costs
    // if nobody says it out loud. Say "3n is never 34" more than once.
    layout: 'split',
    accent: RED,
    icon: 'AlertTriangle',
    side: 'left',
    eyebrow: 'This one costs the most marks every year',
    eyebrowVn: 'Chỗ này năm nào cũng mất điểm nhiều nhất',
    title: 'The Times Sign Did Not Leave',
    titleVn: 'Dấu nhân vẫn còn đó',
    ratio: 50,
    inlineSvg: DIAGRAMS.INVISIBLE_TIMES,
    content:
      'Last lesson we stopped writing the **×**. We did not stop **doing** it.\n\n' +
      'So when you substitute, put the **×** back in first. Write $3 × 4$, and only then work it out.',
    contentVn:
      'Tiết trước ta ngừng **viết** dấu **×**. Nhưng ta không hề ngừng **thực hiện** phép nhân đó.\n\n' +
      'Vậy nên khi thay số, hãy **viết lại dấu ×** trước đã. Viết $3 × 4$, rồi mới tính.',
    notes: [
      {
        tone: 'write',
        text:
          '$3n$ means $3 × n$. When $n = 4$, $3n = 3 × 4 = 12$.\n' +
          '**It is never 34.** Never push the two digits together.',
        textVn:
          '$3n$ nghĩa là $3 × n$. Khi $n = 4$ thì $3n = 3 × 4 = 12$.\n' +
          '**Không bao giờ bằng 34.** Đừng bao giờ ghép hai chữ số lại với nhau.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'ListChecks',
    eyebrow: 'Quick fire — thirty seconds each',
    eyebrowVn: 'Nhanh — mỗi câu ba mươi giây',
    title: 'Four to Substitute',
    titleVn: 'Bốn câu để thay số',
    ratio: 50,
    content:
      'In every one of these, **n = 5**. Work out the value.\n\n' +
      '**a** $n + 7$\n' +
      '**b** $4n$\n' +
      '**c** $n − 9$\n' +
      '**d** $\\frac{n}{5}$',
    contentVn:
      'Trong tất cả các câu sau, **n = 5**. Hãy tính giá trị.\n\n' +
      '**a** $n + 7$\n' +
      '**b** $4n$\n' +
      '**c** $n − 9$\n' +
      '**d** $\\frac{n}{5}$',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer:
        '**a** 12  **b** 20  **c** −4  **d** 1\n\n' +
        'Part **b** is $4 × 5$, not 45. Part **c** goes below zero, and that is allowed — you did this in Unit 1.',
      answerVn:
        '**a** 12  **b** 20  **c** −4  **d** 1\n\n' +
        'Câu **b** là $4 × 5$, không phải 45. Câu **c** xuống dưới 0, và điều đó hoàn toàn được — em đã học ở Chương 1.',
    },
  },

  // ── Section 3: the order does not switch off ──────────────────────────────
  {
    // QUESTION ONLY. Neither answer is marked. Take a show of hands and write
    // the split on the board before slide 7 settles it.
    layout: 'compare',
    accent: PURPLE,
    icon: 'MessageSquare',
    // No maths markup in an eyebrow — HeaderBar prints it raw and uppercased,
    // so a $…$ would show as literal dollar signs on the slide.
    eyebrow: 'Both worked out 3x + 2 when x = 4. Only one is right.',
    eyebrowVn: 'Cả hai cùng tính 3x + 2 khi x = 4. Chỉ một bạn đúng.',
    title: 'Which Answer, and Why?',
    titleVn: 'Đáp án nào đúng, và vì sao?',
    columns: [
      {
        heading: 'Answer A',
        headingVn: 'Đáp án A',
        accent: BLUE,
        icon: 'Hash',
        content: '**14**\n\n"I did the multiplication first."',
        contentVn: '**14**\n\n"Em nhân trước."',
        caption: 'Hands up if you got this.',
        captionVn: 'Giơ tay nếu em ra kết quả này.',
      },
      {
        heading: 'Answer B',
        headingVn: 'Đáp án B',
        accent: ORANGE,
        icon: 'Hash',
        content: '**18**\n\n"I worked from left to right."',
        contentVn: '**18**\n\n"Em tính lần lượt từ trái sang phải."',
        caption: 'Now hands up for this one. Do not change your mind yet.',
        captionVn: 'Bây giờ giơ tay cho đáp án này. Chưa đổi ý vội.',
      },
    ],
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'ArrowDownUp',
    side: 'left',
    eyebrow: 'The rule you already know, still switched on',
    eyebrowVn: 'Quy tắc em đã biết, vẫn còn hiệu lực',
    title: 'Multiply Before You Add',
    titleVn: 'Nhân trước, cộng sau',
    ratio: 50,
    inlineSvg: DIAGRAMS.ORDER_AFTER_SUB,
    content:
      '**14 is right.** 18 comes from reading left to right and adding first.\n\n' +
      'Substituting a number does not change the order of operations. It never did in arithmetic, and it does not here.',
    contentVn:
      '**14 mới đúng.** 18 là do đọc từ trái sang phải rồi cộng trước.\n\n' +
      'Việc thay số vào không làm thay đổi thứ tự phép tính. Trong số học đã vậy, ở đây cũng vậy.',
    notes: [
      {
        tone: 'write',
        text:
          '**Order of operations:** do **× and ÷ first**, then + and −.\n' +
          'When $x = 4$: $3x + 2 = 3 × 4 + 2 = 12 + 2 = 14$.',
        textVn:
          '**Thứ tự phép tính:** làm **nhân và chia trước**, rồi mới cộng và trừ.\n' +
          'Khi $x = 4$: $3x + 2 = 3 × 4 + 2 = 12 + 2 = 14$.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'ListChecks',
    eyebrow: 'Three to try — write the middle line every time',
    eyebrowVn: 'Ba câu để thử — luôn viết dòng trung gian',
    title: 'Your Turn',
    titleVn: 'Đến lượt em',
    ratio: 50,
    content:
      'Work out the value of each expression.\n\n' +
      '**a** $5n − 3$ when $n = 4$\n' +
      '**b** $20 − 3n$ when $n = 6$\n' +
      '**c** $\\frac{n}{2} + 8$ when $n = 10$',
    contentVn:
      'Hãy tính giá trị của mỗi biểu thức sau.\n\n' +
      '**a** $5n − 3$ khi $n = 4$\n' +
      '**b** $20 − 3n$ khi $n = 6$\n' +
      '**c** $\\frac{n}{2} + 8$ khi $n = 10$',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer:
        '**a** $20 − 3 = 17$  **b** $20 − 18 = 2$  **c** $5 + 8 = 13$\n\n' +
        'In **b** the multiplication happens first even though it is written second. $20 − 3n$ is not $17n$.',
      answerVn:
        '**a** $20 − 3 = 17$  **b** $20 − 18 = 2$  **c** $5 + 8 = 13$\n\n' +
        'Ở câu **b**, phép nhân vẫn làm trước dù nó được viết sau. $20 − 3n$ không phải là $17n$.',
    },
  },

  // ── Section 4: the second key word, and the = sign ────────────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Equal',
    side: 'left',
    eyebrow: 'Key word — and the opposite of last lesson’s',
    eyebrowVn: 'Từ khoá — và là cái ngược lại với tiết trước',
    title: 'Formula',
    titleVn: 'Công thức',
    ratio: 50,
    inlineSvg: DIAGRAMS.EXPRESSION_FORMULA,
    content:
      'Last lesson you learned that an **expression** has **no = sign**.\n\n' +
      'A **formula** is the one that does. It is a rule: tell it n, and it tells you C.',
    contentVn:
      'Tiết trước em đã học rằng **biểu thức (expression)** thì **không có dấu =**.\n\n' +
      '**Công thức (formula)** thì có. Nó là một quy tắc: cho nó biết n, nó cho em biết C.',
    notes: [
      {
        tone: 'write',
        text:
          '**Formula:** a rule that connects two or more quantities, written with letters, and it **has an = sign**.\n' +
          'For example $C = 3n + 2$, $A = lw$. More than one formula: **formulae**.',
        textVn:
          '**Công thức (formula):** một quy tắc liên hệ hai đại lượng trở lên, viết bằng chữ cái, và **có dấu =**.\n' +
          'Ví dụ $C = 3n + 2$, $A = lw$. Số nhiều của formula là **formulae**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Square',
    eyebrow: 'A formula you have used since primary school',
    eyebrowVn: 'Một công thức em đã dùng từ hồi tiểu học',
    title: 'Two Letters, So Substitute Twice',
    titleVn: 'Hai chữ cái, nên phải thay hai lần',
    ratio: 50,
    inlineSvg: DIAGRAMS.RECTANGLE_FORMULA,
    content:
      'The area of a rectangle is its length times its width. Written as a formula, that is **A = lw**.\n\n' +
      'Remember what $lw$ means: $l × w$. The times sign is still missing, and still there.',
    contentVn:
      'Diện tích hình chữ nhật bằng chiều dài nhân chiều rộng. Viết thành công thức là **A = lw**.\n\n' +
      'Nhớ lại $lw$ nghĩa là gì: $l × w$. Dấu nhân vẫn bị lược đi, và vẫn đang ở đó.',
    notes: [
      {
        tone: 'write',
        text:
          'When a formula has **two letters**, substitute **both** before you work anything out.\n' +
          '$A = lw$, with $l = 7$ and $w = 4$: $A = 7 × 4 = 28$.',
        textVn:
          'Khi công thức có **hai chữ cái**, hãy thay **cả hai** rồi mới tính.\n' +
          '$A = lw$, với $l = 7$ và $w = 4$: $A = 7 × 4 = 28$.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'ListChecks',
    side: 'left',
    eyebrow: 'Two formulae, four substitutions',
    eyebrowVn: 'Hai công thức, bốn lần thay số',
    title: 'Use the Formula',
    titleVn: 'Hãy dùng công thức',
    ratio: 50,
    content:
      'The perimeter of a rectangle is **P = 2l + 2w**.\n\n' +
      '**a** Find P when $l = 9$ and $w = 5$.\n' +
      '**b** Find P when $l = 12$ and $w = 3$.\n\n' +
      'A different formula: **T = 5a − b**.\n\n' +
      '**c** Find T when $a = 4$ and $b = 6$.',
    contentVn:
      'Chu vi hình chữ nhật là **P = 2l + 2w**.\n\n' +
      '**a** Tìm P khi $l = 9$ và $w = 5$.\n' +
      '**b** Tìm P khi $l = 12$ và $w = 3$.\n\n' +
      'Một công thức khác: **T = 5a − b**.\n\n' +
      '**c** Tìm T khi $a = 4$ và $b = 6$.',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer:
        '**a** $18 + 10 = 28$  **b** $24 + 6 = 30$  **c** $20 − 6 = 14$\n\n' +
        'Both multiplications happen before the + or the −, every time.',
      answerVn:
        '**a** $18 + 10 = 28$  **b** $24 + 6 = 30$  **c** $20 − 6 = 14$\n\n' +
        'Lần nào cũng vậy: cả hai phép nhân đều làm trước dấu + hoặc dấu −.',
    },
  },

  // ── Section 5: the minus sign has to travel with the number ───────────────
  {
    // QUESTION ONLY. No answer on this slide. The two candidates are the two
    // things the class will actually write, so let them argue.
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Discuss in pairs — do not write the answer yet',
    eyebrowVn: 'Thảo luận theo cặp — chưa viết đáp án vội',
    title: 'One of These Is Wrong',
    titleVn: 'Một trong hai cái này là sai',
    label: 'Discuss',
    labelVn: 'Thảo luận',
    labelIcon: 'MessageSquare',
    text: '$5 − 2n$, when $n = −3$',
    textVn: '$5 − 2n$, khi $n = −3$',
    sub: 'One pair says the answer is **−1**. Another pair says it is **11**.',
    subVn: 'Một cặp nói đáp án là **−1**. Một cặp khác nói là **11**.',
    content: '> Which pair is right, and what did the other pair forget?',
    contentVn: '> Cặp nào đúng, và cặp kia đã quên mất điều gì?',
  },
  {
    layout: 'split',
    accent: RED,
    icon: 'Minus',
    eyebrow: 'Unit 1 comes back, inside Unit 2',
    eyebrowVn: 'Chương 1 quay lại, nằm trong Chương 2',
    title: 'The Minus Sign Travels With It',
    titleVn: 'Dấu trừ đi theo con số',
    ratio: 50,
    inlineSvg: DIAGRAMS.NEGATIVE_SUB,
    content:
      '**11 is right.** −1 comes from substituting 3 and leaving the minus sign behind.\n\n' +
      'The arithmetic here is $5 + 6$. Nobody in this room finds that hard. The only difficulty is getting the sign into the expression in one piece.',
    contentVn:
      '**11 mới đúng.** −1 là do chỉ thay số 3 vào mà bỏ quên dấu trừ.\n\n' +
      'Phép tính ở đây là $5 + 6$. Không bạn nào trong lớp thấy khó cả. Cái khó duy nhất là đưa được dấu trừ vào biểu thức cùng với con số.',
    notes: [
      {
        tone: 'write',
        text:
          '**Put a negative number in brackets when you substitute it.**\n' +
          'If $n = −3$ then $2n = 2 × (−3) = −6$, so $5 − 2n = 5 − (−6) = 5 + 6 = 11$.',
        textVn:
          '**Khi thay một số âm, hãy đặt nó trong dấu ngoặc.**\n' +
          'Nếu $n = −3$ thì $2n = 2 × (−3) = −6$, nên $5 − 2n = 5 − (−6) = 5 + 6 = 11$.',
      },
    ],
  },

  // ── Section 6: build your own formula, then find where it stops ───────────
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'PenTool',
    side: 'left',
    eyebrow: 'Now go the other way — write the formula first',
    eyebrowVn: 'Bây giờ làm ngược lại — viết công thức trước',
    title: 'Write It, Then Use It',
    titleVn: 'Viết ra, rồi dùng nó',
    ratio: 50,
    content:
      'A taxi charges **15 thousand dong** to start, and then **9 thousand dong for every kilometre**.\n\n' +
      '**a** Write a formula for the cost **C** of a journey of **k** kilometres.\n' +
      '**b** Use your formula to find the cost of a journey of 6 kilometres.',
    contentVn:
      'Một chuyến taxi tính **15 nghìn đồng** tiền mở cửa, sau đó **9 nghìn đồng mỗi ki-lô-mét**.\n\n' +
      '**a** Hãy viết công thức tính chi phí **C** cho một chuyến đi dài **k** ki-lô-mét.\n' +
      '**b** Dùng công thức của em để tính chi phí của chuyến đi 6 ki-lô-mét.',
    notes: [
      {
        tone: 'write',
        text:
          'When you write a formula, **say what every letter represents**.\n' +
          'C is the cost in thousand dong · k is the number of kilometres.',
        textVn:
          'Khi viết một công thức, hãy **nói rõ mỗi chữ cái đại diện cho cái gì**.\n' +
          'C là chi phí tính bằng nghìn đồng · k là số ki-lô-mét.',
      },
    ],
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer:
        '**a** $C = 15 + 9k$\n\n' +
        '**b** $C = 15 + 9 × 6 = 15 + 54 = 69$, so 69 thousand dong.\n\n' +
        'The 15 is paid once, so it has no letter with it. The 9 is paid every kilometre, so it is multiplied by k.',
      answerVn:
        '**a** $C = 15 + 9k$\n\n' +
        '**b** $C = 15 + 9 × 6 = 15 + 54 = 69$, tức là 69 nghìn đồng.\n\n' +
        'Số 15 chỉ trả một lần nên không đi kèm chữ cái nào. Số 9 phải trả mỗi ki-lô-mét nên được nhân với k.',
    },
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Thermometer',
    eyebrow: 'Problem — from your Science lesson yesterday',
    eyebrowVn: 'Bài toán — từ tiết Khoa học hôm qua',
    title: 'The Water That Would Not Get Hotter',
    titleVn: 'Nước không thể nóng hơn được nữa',
    ratio: 50,
    inlineSvg: DIAGRAMS.BOILING_LIMIT,
    content:
      'Mr Bowen heats water. It starts at 24 °C and rises 3 °C every minute, so **T = 24 + 3m**.\n\n' +
      '**a** Find T after 12 minutes.\n' +
      '**b** Find T after 25 minutes.\n' +
      '**c** The formula says T = 144 after 40 minutes. Is that possible?',
    contentVn:
      'Thầy Bowen đun nước. Nước bắt đầu ở 24 °C và tăng 3 °C mỗi phút, nên **T = 24 + 3m**.\n\n' +
      '**a** Tìm T sau 12 phút.\n' +
      '**b** Tìm T sau 25 phút.\n' +
      '**c** Công thức cho ra T = 144 sau 40 phút. Điều đó có thể xảy ra không?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer:
        '**a** $24 + 36 = 60$ °C  **b** $24 + 75 = 99$ °C\n\n' +
        '**c** **No.** Water boils at 100 °C and stops getting hotter — you saw that yesterday.\n\n' +
        'The arithmetic is perfect and the answer is still wrong, because a formula is only true while the situation it describes is true.',
      answerVn:
        '**a** $24 + 36 = 60$ °C  **b** $24 + 75 = 99$ °C\n\n' +
        '**c** **Không.** Nước sôi ở 100 °C rồi không nóng thêm nữa — hôm qua em đã thấy điều đó.\n\n' +
        'Phép tính hoàn toàn đúng mà đáp án vẫn sai, vì một công thức chỉ đúng chừng nào tình huống mà nó mô tả còn đúng.',
    },
  },

  // ── Section 7: recap and homework ─────────────────────────────────────────
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you leave',
    eyebrowVn: 'Trước khi ra về',
    title: 'Can You Do All Six?',
    titleVn: 'Em làm được cả sáu điều này chứ?',
    content:
      '> Your notebook should now have **7 written panels**. Count them. If one is missing, copy it from your partner before you go.',
    contentVn:
      '> Trong vở của em bây giờ phải có **7 khung ghi chép**. Hãy đếm lại. Nếu thiếu khung nào, hãy chép của bạn bên cạnh trước khi ra về.',
    items: [
      { text: '**Substitute** a number for a letter, and say what the **value** is.', textVn: '**Thay số (substitute)** vào chỗ chữ cái, và nói được **giá trị (value)** là bao nhiêu.' },
      { text: 'Work out $3n$ when $n = 4$ and get **12**, never 34.', textVn: 'Tính $3n$ khi $n = 4$ và ra **12**, không bao giờ ra 34.' },
      { text: 'Do the **× and ÷ before the + and −** after substituting.', textVn: 'Sau khi thay số, làm **nhân và chia trước cộng và trừ**.' },
      { text: 'Say what a **formula** is, and why it **has** an = sign.', textVn: 'Nói được **công thức** là gì, và vì sao nó **có** dấu =.' },
      { text: 'Substitute into a formula with **two letters**, such as $A = lw$.', textVn: 'Thay số vào công thức có **hai chữ cái**, ví dụ $A = lw$.' },
      { text: 'Substitute a **negative** number in brackets: $2 × (−3) = −6$.', textVn: 'Thay một số **âm** trong dấu ngoặc: $2 × (−3) = −6$.' },
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
    content: 'Write the **middle line** in every question — the line where the letters have gone and the × signs are back. That line is where the marks are.',
    contentVn: 'Ở mỗi câu, hãy viết **dòng trung gian** — dòng mà chữ cái đã biến mất và dấu × đã quay lại. Điểm nằm ở dòng đó.',
    notes: [
      {
        tone: 'homework',
        badge: 'Workbook 2.2',
        badgeVn: 'Vở bài tập 2.2',
        icon: 'Pencil',
        text:
          '**Focus** — everybody.\n' +
          '**Practice** — the formulae with two letters.\n' +
          '**Challenge** — an attempt beats a blank.\n\n' +
          'If an answer looks impossible, check the situation before you check the arithmetic.',
        textVn:
          '**Focus** — tất cả các em.\n' +
          '**Practice** — phần công thức có hai chữ cái.\n' +
          '**Challenge** — làm sai vẫn hơn bỏ trống.\n\n' +
          'Nếu một đáp án trông có vẻ vô lý, hãy kiểm tra lại tình huống trước khi kiểm tra phép tính.',
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
    subtitle: 'Last lesson you were not allowed to finish. This lesson you were. Exit question: **$s = 4t + 1$. Work out s when $t = 6$.**',
    subtitleVn: 'Tiết trước em không được phép tính xong. Tiết này thì được. Câu hỏi ra về: **$s = 4t + 1$. Hãy tính s khi $t = 6$.**',
  },
]
