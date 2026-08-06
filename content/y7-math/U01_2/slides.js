// content/y7-math/U01_2/slides.js
// Year 7 Mathematics · 1.2 Multiplying & Dividing Integers. Monday 10 Aug 2026.
//
// Same house style as 1.1: teal section headers, purple activity boxes, red
// homework, and the book's orange for every key word students copy down.
// Anything they must write goes in an orange "Write This Down" panel or an
// orange bumper — never plain body text, and never game rules.
//
// The spine is the sentence "two negatives make a positive". It is TRUE for
// × and ÷ and FALSE for +, and the class will already have met the addition
// case last lesson. So the starter quietly reloads that rule, the middle of
// the deck earns the multiplication one from a pattern rather than asserting
// it, and slide 7 puts the two side by side and breaks the careless version
// of the sentence on purpose. It is a language failure, not an arithmetic one.
//
// Source: Workbook Section 1.2, pages 9–11. There is no separate Learner's
// Book for maths — the workbook carries the worked examples too. Nothing from
// Exercise 1.2 is used in class, because that exercise is the homework.
import { DIAGRAMS } from './diagrams.js'
import { PairsGameWidget, TranslateWidget } from './widgets.jsx'
import coins from './images/coins.jpg'
import frost from './images/frost.jpg'
import diver from './images/diver.jpg'
import durian from './images/durian.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'

export const slides = [
  // ── Section 1: reload last lesson's rule, quietly ────────────────────────
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Equal',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    eyebrow: 'Unit 1 · 1.2',
    eyebrowVn: 'Chương 1 · 1.2',
    date: '10 Aug 2026',
    title: 'Multiplying & Dividing Integers',
    titleVn: 'Nhân và Chia Số nguyên',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'Work out **−3 + −4** and **−3 − (−4)**. Write the **calculation and the answer** for both.',
      textVn: 'Hãy tính **−3 + −4** và **−3 − (−4)**. Viết cả **phép tính và đáp án** cho cả hai.',
    },
  },
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'Check the starter',
    eyebrowVn: 'Kiểm tra bài khởi động',
    label: 'Whiteboards',
    labelVn: 'Bảng con',
    labelIcon: 'Pencil',
    text: 'One of those answers is negative. One is positive.',
    textVn: 'Một trong hai đáp án là số âm. Một là số dương.',
    sub: 'Which is which — and **why**?',
    subVn: 'Cái nào là cái nào — và **vì sao**?',
    reveal: {
      label: 'Show me',
      labelVn: 'Cho em xem',
      answer:
        '$-3 + -4 = -7$. Adding a negative still sends you **left**.\n\n' +
        '$-3 - (-4) = 1$. Only **minus a negative** turns into plus.',
      answerVn:
        '$-3 + -4 = -7$. Cộng một số âm vẫn đưa em sang **trái**.\n\n' +
        '$-3 - (-4) = 1$. Chỉ có **trừ một số âm** mới đổi thành cộng.',
    },
  },

  // ── Section 2: multiplying, derived rather than asserted ─────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    title: 'What Multiplying by a Negative Means',
    titleVn: 'Nhân với số âm nghĩa là gì',
    ratio: 45,
    inlineSvg: DIAGRAMS.REPEATED_JUMPS,
    content: 'Multiplying is just **repeated adding**. So `3 × −4` means **−4, three times over** — three jumps of four to the left.',
    contentVn: 'Nhân chính là **cộng lặp lại**. Vậy `3 × −4` nghĩa là **−4, lặp lại ba lần** — ba bước nhảy bốn đơn vị sang trái.',
    notes: [
      {
        tone: 'write',
        text: 'A **positive × a negative** is **negative**.',
        textVn: 'Một số **dương × một số âm** thì **âm**.',
      },
    ],
    exampleLabel: 'Examples',
    exampleLabelVn: 'Ví dụ',
    example: '**1)** $5 × -2 = -10$\n\n**2)** $-6 × 3 = -18$',
    exampleVn: '**1)** $5 × -2 = -10$\n\n**2)** $-6 × 3 = -18$',
  },
  // The question slide. Repeated adding cannot explain a negative number of
  // times, so the pattern is the honest route in — and it only works if they
  // are made to continue it themselves first.
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Scale',
    eyebrow: 'In pairs — two minutes, no calculators',
    eyebrowVn: 'Theo cặp — hai phút, không dùng máy tính',
    title: 'Keep the Pattern Going',
    titleVn: 'Hãy tiếp tục quy luật',
    inlineSvg: DIAGRAMS.PATTERN_LADDER,
    caption: 'You cannot do something **negative one times**, so we cannot draw this one. Look at what the answers are doing instead, and **write down the last two rows**.',
    captionVn: 'Em không thể làm một việc **âm một lần**, nên không thể vẽ trường hợp này. Hãy nhìn quy luật của các đáp án, và **viết ra hai dòng cuối**.',
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'ShieldCheck',
    eyebrow: 'The big rule of the lesson',
    eyebrowVn: 'Quy tắc lớn của bài học',
    title: 'Negative Times Negative',
    titleVn: 'Âm nhân âm',
    ratio: 45,
    side: 'left',
    inlineSvg: DIAGRAMS.PATTERN_LADDER_SOLVED,
    content: 'Every step down the ladder adds 4. For the pattern to keep working, `−1 × −4` has to be **+4**. Nothing else fits.',
    contentVn: 'Mỗi bước đi xuống trong bảng đều cộng thêm 4. Để quy luật tiếp tục đúng, `−1 × −4` bắt buộc phải là **+4**. Không còn khả năng nào khác.',
    notes: [
      {
        tone: 'write',
        text: 'A **negative × a negative** is **positive**.',
        textVn: 'Một số **âm × một số âm** thì **dương**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Equal',
    title: 'All Four Rules at Once',
    titleVn: 'Cả bốn quy tắc cùng lúc',
    ratio: 45,
    inlineSvg: DIAGRAMS.SIGN_GRID,
    drawThis: true,
    content: 'Dividing **undoes** multiplying, so it obeys the same rules. Copy this table — it is the whole lesson in nine boxes.',
    contentVn: 'Phép chia **làm ngược lại** phép nhân, nên nó theo đúng các quy tắc đó. Hãy chép bảng này — cả bài học nằm trong chín ô.',
    notes: [
      {
        tone: 'write',
        text: '**Same signs → positive.**\n**Different signs → negative.**\nThe same four rules work for **×** and **÷**.',
        textVn: '**Hai dấu giống nhau → dương.**\n**Hai dấu khác nhau → âm.**\nBốn quy tắc này dùng cho cả **×** và **÷**.',
      },
    ],
    exampleLabel: 'Examples',
    exampleLabelVn: 'Ví dụ',
    example: '$-6 × -7 = 42$   ·   $-6 × 7 = -42$\n\n$-42 ÷ -7 = 6$   ·   $-42 ÷ 7 = -6$',
    exampleVn: '$-6 × -7 = 42$   ·   $-6 × 7 = -42$\n\n$-42 ÷ -7 = 6$   ·   $-42 ÷ 7 = -6$',
  },

  // ── Section 3: the misconception, broken on purpose ──────────────────────
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'Every class is an English class',
    eyebrowVn: 'Mỗi tiết học đều là tiết tiếng Anh',
    title: 'Is That Sentence Always True?',
    titleVn: 'Câu đó có luôn đúng không?',
    label: 'Discuss',
    labelVn: 'Thảo luận',
    labelIcon: 'MessageSquare',
    text: '“Two negatives make a positive.”',
    textVn: '“Two negatives make a positive.”',
    sub: 'Test it on **−3 × −4**, then test it on **−3 + −4**. Does it survive both?',
    subVn: 'Hãy thử với **−3 × −4**, rồi thử với **−3 + −4**. Nó có đúng cả hai lần không?',
    reveal: {
      label: 'Show me',
      labelVn: 'Cho em xem',
      answer:
        'For **× and ÷** it is true: $-3 × -4 = 12$.\n\n' +
        'For **+** it is false: $-3 + -4 = -7$. Adding a negative still sends you left.\n\n' +
        'The sentence is only safe if you say **which operation** you mean. That is why we wrote the rules on a table headed **× and ÷**.',
      answerVn:
        'Với **× và ÷** thì đúng: $-3 × -4 = 12$.\n\n' +
        'Với **+** thì sai: $-3 + -4 = -7$. Cộng một số âm vẫn đưa em sang trái.\n\n' +
        'Câu đó chỉ an toàn khi em nói rõ **phép tính nào**. Đó là lý do bảng quy tắc của chúng ta có tiêu đề **× và ÷**.',
    },
  },

  // ── Section 4: the words ─────────────────────────────────────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'BookOpen',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khoá',
    title: 'Product',
    titleVn: 'Product — Tích',
    content: 'The book uses one new word in this section, and it is a word you already own in English — which is exactly what makes it easy to misread.',
    contentVn: 'Sách dùng một từ mới trong phần này, và đó là từ em đã biết trong tiếng Anh — chính điều đó khiến nó dễ bị hiểu nhầm.',
    notes: [
      {
        tone: 'write',
        text: '**Product:** the answer when you **multiply** two numbers. The product of 2 and −9 is −18.',
        textVn: '**Tích (product):** kết quả khi em **nhân** hai số. Tích của 2 và −9 là −18.',
      },
    ],
    reveal: {
      label: 'Where else do you meet this word?',
      labelVn: 'Em còn gặp từ này ở đâu?',
      prompt: 'What is a **product** in a shop?',
      promptVn: '**Product** trong cửa hàng nghĩa là gì?',
      answer: 'A thing you buy — shampoo, a phone, a packet of noodles. In maths a product is not a **thing** at all: it is an **answer**, the one you get from multiplying. Same word, completely different job.',
      answerVn: 'Là món hàng em mua — dầu gội, điện thoại, gói mì. Trong toán, "product" không phải là một **vật**: đó là một **kết quả**, kết quả của phép nhân. Cùng một từ, nhiệm vụ hoàn toàn khác.',
    },
  },
  {
    layout: 'statement',
    accent: ORANGE,
    eyebrow: 'Every class is an English class',
    eyebrowVn: 'Mỗi tiết học đều là tiết tiếng Anh',
    title: 'Which Number Gets Cut Up?',
    titleVn: 'Số nào bị chia nhỏ?',
    label: 'Whiteboards',
    labelVn: 'Bảng con',
    labelIcon: 'Pencil',
    text: 'Divide −20 by 4.',
    textVn: 'Divide −20 by 4.',
    sub: 'Write the calculation. Then try: **4 divided into −20**. Same thing, or not?',
    subVn: 'Viết phép tính. Rồi thử câu: **4 divided into −20**. Có giống nhau không?',
    reveal: {
      label: 'Show me',
      labelVn: 'Cho em xem',
      prompt: '**Hint:** which number is being **shared out**?',
      promptVn: '**Gợi ý:** số nào đang bị **chia ra**?',
      answer:
        'Both are $-20 ÷ 4 = -5$. The number being shared out is **−20** every time — but the English puts it **first** in one sentence and **second** in the other.\n\n' +
        'Exactly the trap from last lesson: **subtract 5 from 8** was $8 - 5$, never $5 - 8$.',
      answerVn:
        'Cả hai đều là $-20 ÷ 4 = -5$. Số bị chia luôn là **−20** — nhưng tiếng Anh đặt nó **trước** trong câu này và **sau** trong câu kia.\n\n' +
        'Đúng cái bẫy của tiết trước: **subtract 5 from 8** là $8 - 5$, không bao giờ là $5 - 8$.',
    },
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Repeat',
    title: 'Say It, Then Write It',
    titleVn: 'Đọc câu, rồi viết phép tính',
    ratio: 45,
    content:
      'The arithmetic is the easy part. The **English** is where the marks go — so we practise the translation again, with this week’s words.\n\n' +
      'For every sentence: find the **signal words**, write the **calculation**, and only then the answer.',
    contentVn:
      'Phần tính toán là phần dễ. **Tiếng Anh** mới là chỗ mất điểm — nên ta lại luyện cách chuyển đổi, với các từ của tuần này.\n\n' +
      'Với mỗi câu: tìm **từ khoá**, viết **phép tính**, rồi mới đến đáp án.',
    notes: [
      {
        tone: 'task',
        badge: 'On your whiteboard',
        badgeVn: 'Trên bảng con',
        text: 'Everyone writes the calculation **before** anybody says the answer out loud.',
        textVn: 'Mọi người viết phép tính **trước khi** có ai đó nói to đáp án.',
      },
    ],
    widget: TranslateWidget,
  },

  // ── Section 5: order of operations, where the misconception bites ────────
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Layers',
    title: 'Brackets First',
    titleVn: 'Làm trong ngoặc trước',
    ratio: 45,
    side: 'left',
    inlineSvg: DIAGRAMS.BRACKETS_FIRST,
    content: 'When a calculation has brackets, work out **what is inside them** before you multiply or divide anything.',
    contentVn: 'Khi phép tính có dấu ngoặc, hãy tính **phần bên trong ngoặc** trước khi nhân hay chia bất cứ thứ gì.',
    notes: [
      {
        tone: 'write',
        text: '**Do the brackets first.** Work out what is inside, then multiply or divide.',
        textVn: '**Làm trong ngoặc trước.** Tính phần bên trong, rồi mới nhân hoặc chia.',
      },
      {
        tone: 'info',
        badge: 'Careful',
        badgeVn: 'Cẩn thận',
        icon: 'AlertTriangle',
        text: 'Inside that bracket is an **addition**. So $-3 + -2 = -5$, **not** $5$. The new rule does not live in there.',
        textVn: 'Bên trong ngoặc là một phép **cộng**. Nên $-3 + -2 = -5$, **không** phải $5$. Quy tắc mới không áp dụng ở đó.',
      },
    ],
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Scale',
    title: 'Round First, Then Check',
    titleVn: 'Làm tròn trước, rồi kiểm tra',
    ratio: 45,
    content:
      'An **estimate** is a quick, rough answer you work out **before** the real one. It will not be exact — that is not the point.\n\n' +
      'The point is that if your real answer lands nowhere near your estimate, you know you have made a mistake, and you still have time to find it.',
    contentVn:
      '**Ước lượng** là đáp án nhanh và thô mà em tính **trước** đáp án thật. Nó sẽ không chính xác — đó không phải là mục đích.\n\n' +
      'Mục đích là: nếu đáp án thật của em cách xa ước lượng, em biết mình đã sai, và vẫn còn kịp thời gian để tìm ra chỗ sai.',
    notes: [
      {
        tone: 'write',
        text: '**Estimate:** round each number to something easy, then calculate. Check your real answer is close to it.',
        textVn: '**Ước lượng:** làm tròn mỗi số về số dễ tính, rồi tính. Kiểm tra xem đáp án thật có gần với nó không.',
      },
    ],
    exampleLabel: 'Worked example',
    exampleLabelVn: 'Ví dụ mẫu',
    example: 'Estimate $-4.1 × 2.8$.\n\nRound: $-4 × 3 = -12$, so the answer is about $-12$.',
    exampleVn: 'Ước lượng $-4.1 × 2.8$.\n\nLàm tròn: $-4 × 3 = -12$, vậy đáp án khoảng $-12$.',
  },

  // ── Section 6: practice ──────────────────────────────────────────────────
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Users',
    title: 'Team Game: Hunt the Pairs',
    titleVn: 'Trò chơi đội: Săn tìm các cặp số',
    ratio: 45,
    content: 'Play in **teams of two**, one whiteboard each.',
    contentVn: 'Chơi theo **đội hai người**, mỗi đội một bảng con.',
    notes: [
      {
        tone: 'task',
        badge: 'Game Rules',
        badgeVn: 'Luật chơi',
        text:
          '**1.** In **2 minutes**, find as many pairs of integers as you can that **multiply to −24**.\n' +
          '**2.** Both numbers must be integers. Order does not matter.\n' +
          '**3.** Read your list out. A wrong pair costs you one.\n' +
          '**4.** The longest correct list wins.',
        textVn:
          '**1.** Trong **2 phút**, tìm càng nhiều cặp số nguyên càng tốt sao cho **tích bằng −24**.\n' +
          '**2.** Cả hai số phải là số nguyên. Thứ tự không quan trọng.\n' +
          '**3.** Đọc to danh sách của em. Một cặp sai bị trừ một điểm.\n' +
          '**4.** Đội có danh sách đúng dài nhất sẽ thắng.',
      },
    ],
    widget: PairsGameWidget,
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'HelpCircle',
    title: 'Work Backwards',
    titleVn: 'Làm ngược lại',
    ratio: 55,
    content:
      'In each of these, one number is missing. Work out the **sign** first — that is half the answer — then the digits.\n\n' +
      '> **1.**  3 × ? = −24\n' +
      '> **2.**  ? ÷ 6 = −7\n' +
      '> **3.**  −5 × ? = 45\n' +
      '> **4.**  −72 ÷ ? = −9',
    contentVn:
      'Mỗi câu dưới đây thiếu một số. Hãy tìm **dấu** trước — đó là một nửa đáp án — rồi mới tìm chữ số.\n\n' +
      '> **1.**  3 × ? = −24\n' +
      '> **2.**  ? ÷ 6 = −7\n' +
      '> **3.**  −5 × ? = 45\n' +
      '> **4.**  −72 ÷ ? = −9',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer: '**1.** −8    **2.** −42    **3.** −9    **4.** 8\n\nFor **3**, the answer is positive and one number is negative — so the missing one must be negative too.',
      answerVn: '**1.** −8    **2.** −42    **3.** −9    **4.** 8\n\nỞ câu **3**, đáp án là số dương mà một số đã âm — vậy số còn thiếu cũng phải âm.',
    },
  },

  // ── Section 7: word problems, getting steadily sillier ───────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Problem 1',
    eyebrowVn: 'Bài 1',
    title: 'The Empty Account',
    titleVn: 'Tài khoản rỗng',
    ratio: 55,
    image: coins,
    content:
      'Mr Bowen’s bank charges him **7 dollars every day** that his account is empty.\n\n' +
      'His account has been empty for **5 days**.\n\n' +
      'What has that done to his balance?',
    contentVn:
      'Ngân hàng thu của thầy Bowen **7 đô mỗi ngày** mà tài khoản của thầy trống rỗng.\n\n' +
      'Tài khoản của thầy đã trống **5 ngày**.\n\n' +
      'Điều đó ảnh hưởng thế nào đến số dư của thầy?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$5 × -7 = -35$. His balance has gone **down 35 dollars**.',
      answerVn: '$5 × -7 = -35$. Số dư của thầy đã **giảm 35 đô**.',
    },
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Problem 2',
    eyebrowVn: 'Bài 2',
    title: 'The Long Night',
    titleVn: 'Đêm dài',
    ratio: 55,
    side: 'left',
    image: frost,
    content:
      'At six in the evening the temperature is exactly **0 °C**.\n\n' +
      'It falls **3 degrees every hour** for **6 hours**.\n\n' +
      'What is the temperature at midnight?',
    contentVn:
      'Lúc sáu giờ tối, nhiệt độ đúng bằng **0 °C**.\n\n' +
      'Nhiệt độ giảm **3 độ mỗi giờ** trong **6 giờ**.\n\n' +
      'Nhiệt độ lúc nửa đêm là bao nhiêu?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$6 × -3 = -18$, so **−18 °C**.',
      answerVn: '$6 × -3 = -18$, vậy là **−18 °C**.',
    },
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Problem 3',
    eyebrowVn: 'Bài 3',
    title: 'The Dive',
    titleVn: 'Cú lặn',
    ratio: 55,
    image: diver,
    content:
      'Mr Bowen goes diving. He starts at the surface, at **0 m**, and goes down at a **steady rate**.\n\n' +
      'After **6 minutes** he is at **−48 m**.\n\n' +
      'How far does he go down each minute?',
    contentVn:
      'Thầy Bowen đi lặn. Thầy bắt đầu ở mặt nước, tại **0 m**, và đi xuống với **tốc độ đều**.\n\n' +
      'Sau **6 phút** thầy ở độ sâu **−48 m**.\n\n' +
      'Mỗi phút thầy đi xuống bao nhiêu mét?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$-48 ÷ 6 = -8$, so **8 metres down every minute** — a change of −8 m per minute.',
      answerVn: '$-48 ÷ 6 = -8$, vậy **mỗi phút xuống 8 mét** — thay đổi −8 m mỗi phút.',
    },
    caption: 'A diver descending on a line.',
    captionVn: 'Một thợ lặn đang lặn xuống theo dây.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Problem 4',
    eyebrowVn: 'Bài 4',
    title: 'The Durian Run',
    titleVn: 'Chuyến đi mua sầu riêng',
    ratio: 55,
    side: 'left',
    image: durian,
    content:
      'Mr Bowen decides to buy durian for the class. Each durian costs **90 000 dong**. There are **24 students**, and every student wants **3 durians**.\n\n' +
      'He rides **14 km** to the market. The cold room where the durians are kept is **−2 °C**. He spends **45 minutes** choosing.\n\n' +
      'Then he remembers that durian is **not allowed on the school bus**, so he buys **0 durians**.\n\n' +
      'How much does Mr Bowen spend on durian?',
    contentVn:
      'Thầy Bowen quyết định mua sầu riêng cho cả lớp. Mỗi quả giá **90 000 đồng**. Lớp có **24 học sinh**, và mỗi bạn muốn **3 quả**.\n\n' +
      'Thầy chạy xe **14 km** đến chợ. Phòng lạnh bảo quản sầu riêng ở **−2 °C**. Thầy mất **45 phút** để chọn.\n\n' +
      'Rồi thầy nhớ ra rằng sầu riêng **không được mang lên xe buýt của trường**, nên thầy mua **0 quả**.\n\n' +
      'Thầy Bowen đã tiêu bao nhiêu tiền cho sầu riêng?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: 'Nothing. **Anything multiplied by 0 is 0**, so not one of the other numbers matters.\n\nRead the whole question before you start calculating.',
      answerVn: 'Không đồng nào. **Bất cứ số nào nhân với 0 đều bằng 0**, nên không con số nào khác có ý nghĩa cả.\n\nHãy đọc hết câu hỏi trước khi bắt đầu tính.',
    },
  },

  // ── Section 8: recap and homework ────────────────────────────────────────
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you leave',
    eyebrowVn: 'Trước khi ra về',
    title: 'Can You Do All Seven?',
    titleVn: 'Em làm được cả bảy điều này chứ?',
    content:
      '> Your notebook should now have **6 rules written down** and **the sign table copied**. Check.',
    contentVn:
      '> Trong vở của em bây giờ phải có **6 quy tắc đã chép** và **bảng dấu đã vẽ lại**. Hãy kiểm tra.',
    items: [
      { text: 'Say what a **product** is.', textVn: 'Nói được **tích (product)** là gì.' },
      { text: 'Explain why a **positive × a negative** is negative.', textVn: 'Giải thích vì sao **dương × âm** là số âm.' },
      { text: 'Explain why a **negative × a negative** is positive.', textVn: 'Giải thích vì sao **âm × âm** là số dương.' },
      { text: 'Use the **same four rules** for dividing.', textVn: 'Dùng **đúng bốn quy tắc đó** cho phép chia.' },
      { text: 'Say why “two negatives make a positive” is **not** true for adding.', textVn: 'Nói được vì sao “two negatives make a positive” **không** đúng với phép cộng.' },
      { text: 'Do the **brackets first**, then multiply or divide.', textVn: 'Làm **trong ngoặc trước**, rồi mới nhân hoặc chia.' },
      { text: '**Estimate** by rounding, to check your own answer.', textVn: '**Ước lượng** bằng cách làm tròn, để tự kiểm tra đáp án.' },
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
    content: 'Show the **calculation** every time — not just the answer.',
    contentVn: 'Với mỗi câu hãy viết cả **phép tính** — không chỉ viết đáp án.',
    notes: [
      {
        tone: 'homework',
        badge: 'Section 1.1 · pages 7–8',
        badgeVn: 'Mục 1.1 · trang 7–8',
        icon: 'Pencil',
        text: 'Finish Exercise 1.1 if it is not already done.',
        textVn: 'Hoàn thành Bài tập 1.1 nếu em chưa làm xong.',
      },
      {
        tone: 'homework',
        badge: 'Section 1.2 · pages 9–11',
        badgeVn: 'Mục 1.2 · trang 9–11',
        icon: 'Pencil',
        text:
          '**Focus** — Q1 to 5. Everybody.\n' +
          '**Practice** — Q6 to 11. Q8 and Q9 are estimates, so round first.\n' +
          '**Challenge** — Q12 to 15. An attempt beats a blank.',
        textVn:
          '**Focus** — câu 1 đến 5. Tất cả các em.\n' +
          '**Practice** — câu 6 đến 11. Câu 8 và 9 là ước lượng, hãy làm tròn trước.\n' +
          '**Challenge** — câu 12 đến 15. Làm sai vẫn hơn bỏ trống.',
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
    subtitle: 'You can multiply and divide any two integers, and you know when “two negatives make a positive” is a lie. Exit question: what is **−6 × −5**, and which rule gives you the sign?',
    subtitleVn: 'Em đã có thể nhân và chia hai số nguyên bất kỳ, và biết khi nào câu “two negatives make a positive” là sai. Câu hỏi ra về: **−6 × −5** bằng bao nhiêu, và quy tắc nào cho em biết dấu?',
  },
]
