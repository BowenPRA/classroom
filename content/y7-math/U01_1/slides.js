// content/y7-math/U01_1/slides.js
// Year 7 Mathematics · 1.1 Adding & Subtracting Integers.
//
// Styled after the Cambridge Lower Secondary Learner's Book: teal section
// headers, purple activity boxes, red homework, and the book's orange for every
// key word the students are expected to copy down. Anything a student must
// write into their notebook is either an orange "Write This Down" panel or an
// orange-ruled bumper — never plain body text, and never game rules.
//
// The spine of this lesson is ENGLISH. The class can already do the arithmetic;
// what costs them marks is the wording of a question. So the deck teaches the
// vocabulary of change and comparison, drills the sentence → calculation
// translation both ways, and finishes on word problems that have to be read
// carefully before they can be answered.
import { DIAGRAMS } from './diagrams.js'
import { TeamActivityWidget, NumberLineWidget, TranslateWidget } from './widgets.jsx'
import liftPanel from './images/lift-panel.jpg'
import piggyBank from './images/piggy-bank.jpg'
import southPoleStation from './images/south-pole-station.jpg'
import snail from './images/snail.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'

export const slides = [
  // ── Section 1: open, and get negatives into the room ─────────────────────
  {
    layout: 'hero',
    color: '#5c2483',
    icon: 'Ruler',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    eyebrow: 'Unit 1 · 1.1',
    eyebrowVn: 'Chương 1 · 1.1',
    date: '6 Aug 2026',
    title: 'Adding & Subtracting Integers',
    titleVn: 'Cộng và Trừ Số nguyên',
    // No `objective` here on purpose: the starter card is what the class needs
    // on screen while they settle, and the two together overflow a projector in
    // Project mode. The objective lives in index.js meta and in plan.js.
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'Write down **three things** that can be described with a **negative number**. Write your list as a **full English sentence**.',
      textVn: 'Viết ra **ba thứ** có thể được mô tả bằng **số âm**. Hãy viết danh sách của em thành một **câu tiếng Anh hoàn chỉnh**.',
    },
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Users',
    title: 'Team Game: Name the Negatives',
    titleVn: 'Trò chơi đội: Kể tên số âm',
    ratio: 45,
    content:
      'Play in **teams of two**, one whiteboard each.',
    contentVn:
      'Chơi theo **đội hai người**, mỗi đội một bảng con.',
    notes: [
      {
        tone: 'task',
        badge: 'Game Rules',
        badgeVn: 'Luật chơi',
        text:
          '**1.** In **2 minutes**, list everything you can think of that uses negative numbers.\n' +
          '**2.** Take turns reading your list out loud.\n' +
          '**3.** If another team has the **same** idea, **both** cross it out.\n' +
          '**4.** The most **unique** ideas wins.',
        textVn:
          '**1.** Trong **2 phút**, hãy liệt kê mọi thứ em nghĩ ra có dùng số âm.\n' +
          '**2.** Lần lượt đọc to danh sách của mình.\n' +
          '**3.** Nếu đội khác có ý tưởng **giống nhau**, **cả hai** cùng gạch bỏ.\n' +
          '**4.** Đội có nhiều ý tưởng **độc nhất** nhất sẽ thắng.',
      },
    ],
    widget: TeamActivityWidget,
  },

  // ── Section 2: the line, and the words for reading it ────────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Ruler',
    title: 'The Number Line',
    titleVn: 'Trục số',
    ratio: 45,
    inlineSvg: DIAGRAMS.NUMBER_LINE_BIG,
    drawThis: true,
    content: 'Every integer has its own place on the line. Copy the whole line into your book, from −5 to 5.',
    contentVn: 'Mỗi số nguyên có một vị trí riêng trên trục số. Hãy chép cả trục số vào vở, từ −5 đến 5.',
    notes: [
      {
        tone: 'write',
        text: '**Integer:** a whole number that is positive, negative or zero — never a fraction.',
        textVn: '**Số nguyên:** một số nguyên vẹn, có thể dương, âm hoặc bằng không — không bao giờ là phân số.',
      },
      {
        tone: 'write',
        text:
          '**Positive integers** are to the **right** of zero.\n' +
          '**Negative integers** are to the **left** of zero.\n' +
          '**Zero** is in the middle.',
        textVn:
          '**Số nguyên dương** nằm bên **phải** số không.\n' +
          '**Số nguyên âm** nằm bên **trái** số không.\n' +
          '**Số không** nằm ở giữa.',
      },
    ],
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Scale',
    title: 'Above Zero, Below Zero',
    titleVn: 'Trên không, dưới không',
    ratio: 45,
    side: 'left',
    inlineSvg: DIAGRAMS.THERMOMETER,
    content:
      'A thermometer is the same number line, stood on its end. The words change — the maths does not.\n\n' +
      'Careful: −8 is **lower** than −4, because it is further from zero on the cold side.',
    contentVn:
      'Nhiệt kế chính là trục số đó, dựng đứng lên. Từ ngữ thay đổi — phép toán thì không.\n\n' +
      'Cẩn thận: −8 **thấp hơn** −4, vì nó xa số không hơn về phía lạnh.',
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Quote',
    eyebrow: 'Every class is an English class',
    eyebrowVn: 'Mỗi tiết học đều là tiết tiếng Anh',
    title: '“Negative Five” or “Minus Five”?',
    titleVn: '“Negative five” hay “minus five”?',
    ratio: 45,
    inlineSvg: DIAGRAMS.SIGN_OR_OPERATION,
    content: 'The same little dash does **two different jobs**, and each job has its own English word.',
    contentVn: 'Cùng một dấu gạch nhỏ làm **hai việc khác nhau**, và mỗi việc có một từ tiếng Anh riêng.',
    notes: [
      {
        tone: 'write',
        text: '**negative five** = the number −5 (the dash is a **sign**).\n**minus** = the operation, as in $8 - 5$ (the dash is an **instruction**).',
        textVn: '**negative five** = số −5 (dấu gạch là **dấu của số**).\n**minus** = phép tính, như trong $8 - 5$ (dấu gạch là **lệnh làm tính**).',
      },
      {
        tone: 'info',
        badge: 'Real life',
        badgeVn: 'Đời thực',
        text: 'Weather forecasts break this rule and say “minus five degrees”. In maths, say **negative five**.',
        textVn: 'Bản tin thời tiết phá luật này và nói “minus five degrees”. Trong toán, hãy nói **negative five**.',
      },
    ],
  },

  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    title: 'Adding Integers',
    titleVn: 'Cộng số nguyên',
    ratio: 45,
    inlineSvg: DIAGRAMS.ADD_NEG,
    content: 'Start at the first number, then move.',
    contentVn: 'Bắt đầu ở số thứ nhất, rồi di chuyển.',
    notes: [
      {
        tone: 'write',
        text: 'Add a **positive** → move **right**.\nAdd a **negative** → move **left**.',
        textVn: 'Cộng số **dương** → đi sang **phải**.\nCộng số **âm** → đi sang **trái**.',
      },
    ],
    exampleLabel: 'Examples',
    exampleLabelVn: 'Ví dụ',
    example: '**1)** $-3 + (-4) = -7$\n\n**2)** $-2 + 6 = 4$',
    exampleVn: '**1)** $-3 + (-4) = -7$\n\n**2)** $-2 + 6 = 4$',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Scale',
    title: 'Subtracting Integers',
    titleVn: 'Trừ số nguyên',
    ratio: 45,
    side: 'left',
    inlineSvg: DIAGRAMS.SUB_POS,
    content: 'Subtracting a **positive** is the opposite of adding one. You can finish below zero — that is fine.',
    contentVn: 'Trừ một số **dương** thì ngược lại với cộng. Em có thể kết thúc dưới số không — điều đó hoàn toàn ổn.',
    notes: [
      {
        tone: 'write',
        text: 'Subtract a **positive** → move **left**, to a smaller number.',
        textVn: 'Trừ số **dương** → đi sang **trái**, đến số nhỏ hơn.',
      },
    ],
    exampleLabel: 'Examples',
    exampleLabelVn: 'Ví dụ',
    example: '**1)** $-6 - 3 = -9$\n\n**2)** $2 - 5 = -3$',
    exampleVn: '**1)** $-6 - 3 = -9$\n\n**2)** $2 - 5 = -3$',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Equal',
    title: 'Two Signs Together',
    titleVn: 'Hai dấu đứng cạnh nhau',
    ratio: 45,
    inlineSvg: DIAGRAMS.TWO_SIGNS,
    content: 'Sometimes two signs end up **next to each other**. Combine them into one sign first, then move.',
    contentVn: 'Đôi khi hai dấu **đứng cạnh nhau**. Hãy gộp chúng thành một dấu trước, rồi mới di chuyển.',
    notes: [
      {
        tone: 'write',
        text: '**Same** signs → **$+$** → move **right**.\n**Different** signs → **$-$** → move **left**.',
        textVn: 'Hai dấu **giống nhau** → **$+$** → đi sang **phải**.\nHai dấu **khác nhau** → **$-$** → đi sang **trái**.',
      },
      {
        tone: 'info',
        badge: 'Careful',
        badgeVn: 'Cẩn thận',
        icon: 'AlertTriangle',
        text: 'Only $-(-)$ turns into $+$. A single $+(-)$ still sends you left: $5 + (-3) = 2$, **not** $8$.',
        textVn: 'Chỉ có $-(-)$ mới đổi thành $+$. Một dấu $+(-)$ vẫn đưa em sang trái: $5 + (-3) = 2$, **không** phải $8$.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'ArrowRight',
    title: 'Left or Right?',
    titleVn: 'Trái hay Phải?',
    ratio: 45,
    content:
      'Every add and every subtract is just a **move** along the line.\n\n' +
      'Change **one thing at a time** and check that the arrow goes the way you expect. Press the orange button only to **check yourself**.',
    contentVn:
      'Mỗi phép cộng và mỗi phép trừ chỉ là một **bước di chuyển** trên trục số.\n\n' +
      'Hãy thay đổi **từng thứ một** và kiểm tra xem mũi tên có đi đúng hướng em nghĩ không. Chỉ bấm nút màu cam để **tự kiểm tra**.',
    notes: [
      {
        tone: 'task',
        badge: 'Your job',
        badgeVn: 'Nhiệm vụ của em',
        text: 'Test **all four** rules: add a positive, add a negative, subtract a positive, subtract a negative.',
        textVn: 'Thử đủ **bốn** quy tắc: cộng số dương, cộng số âm, trừ số dương, trừ số âm.',
      },
    ],
    widget: NumberLineWidget,
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'ShieldCheck',
    eyebrow: 'The big rule of the lesson',
    eyebrowVn: 'Quy tắc lớn của bài học',
    title: 'Minus a Negative',
    titleVn: 'Trừ một số âm',
    ratio: 45,
    side: 'left',
    inlineSvg: DIAGRAMS.SUB_NEG,
    drawThis: true,
    content: 'To subtract a negative, add its **inverse** instead. Take away a debt and you are richer.',
    contentVn: 'Để trừ một số âm, hãy cộng **số đối** của nó. Xoá một khoản nợ thì em giàu thêm.',
    notes: [
      {
        tone: 'write',
        text:
          '**Inverse:** the opposite of a number — the inverse of 5 is −5.\n' +
          '**Minus a negative = plus:**  $a - (-b) = a + b$',
        textVn:
          '**Số đối:** số ngược lại của một số — số đối của 5 là −5.\n' +
          '**Trừ số âm = cộng:**  $a - (-b) = a + b$',
      },
      {
        tone: 'theory',
        badge: 'Language note',
        badgeVn: 'Ghi chú ngôn ngữ',
        text: 'Saying **inverse**, and writing the rule with **$a$ and $b$** instead of numbers, is us using **algebra language**: a letter stands for any number.',
        textVn: 'Dùng từ **inverse** (số đối) và viết quy tắc bằng **$a$ và $b$** chính là **ngôn ngữ đại số**: chữ cái thay cho một số bất kỳ.',
      },
    ],
  },

  // ── Section 4: the language of change ────────────────────────────────────
  {
    layout: 'compare',
    accent: ORANGE,
    icon: 'MessageSquare',
    eyebrow: 'The words that do the work',
    eyebrowVn: 'Những từ làm nên phép tính',
    title: 'Which Way Does the Word Send You?',
    titleVn: 'Từ ngữ đưa em về phía nào?',
    columns: [
      {
        heading: 'These send you UP',
        headingVn: 'Những từ đưa em LÊN',
        accent: GREEN,
        icon: 'ArrowRight',
        content: '**rise · increase · gain · deposit · climb · warmer · higher · above · more than**',
        contentVn: '**rise** (tăng) · **increase** (tăng lên) · **gain** (được thêm) · **deposit** (gửi tiền vào) · **climb** (leo lên) · **warmer** (ấm hơn) · **higher** (cao hơn) · **above** (trên) · **more than** (nhiều hơn)',
        notes: [
          {
            tone: 'write',
            text: 'The temperature **rises by** 6 → +6\nHe **deposits** 20 dollars → +20',
            textVn: 'Nhiệt độ **rises by** (tăng thêm) 6 → +6\nThầy ấy **deposits** (gửi vào) 20 đô → +20',
          },
        ],
      },
      {
        heading: 'These send you DOWN',
        headingVn: 'Những từ đưa em XUỐNG',
        accent: RED,
        icon: 'ArrowRight',
        content: '**fall · drop · decrease · loss · withdraw · owe · colder · lower · below · less than**',
        contentVn: '**fall** (giảm) · **drop** (rơi xuống) · **decrease** (giảm bớt) · **loss** (mất mát) · **withdraw** (rút tiền ra) · **owe** (nợ) · **colder** (lạnh hơn) · **lower** (thấp hơn) · **below** (dưới) · **less than** (ít hơn)',
        notes: [
          {
            tone: 'write',
            text: 'The temperature **falls by** 9 → −9\nShe **owes** 12 dollars → −12',
            textVn: 'Nhiệt độ **falls by** (giảm đi) 9 → −9\nCô ấy **owes** (nợ) 12 đô → −12',
          },
        ],
      },
    ],
  },
  {
    layout: 'statement',
    accent: ORANGE,
    icon: 'Quote',
    eyebrow: 'Every class is an English class',
    eyebrowVn: 'Mỗi tiết học đều là tiết tiếng Anh',
    title: 'Read It Very Carefully',
    titleVn: 'Hãy đọc thật kỹ',
    label: 'Whiteboards',
    labelVn: 'Bảng con',
    labelIcon: 'Pencil',
    text: 'Subtract 5 from 8.',
    textVn: 'Subtract 5 from 8.',
    sub: 'Write the calculation — not the answer. Which number do you write **first**?',
    subVn: 'Hãy viết **phép tính** — chưa cần đáp án. Em viết số nào **trước**?',
    reveal: {
      label: 'Show me',
      labelVn: 'Cho em xem',
      prompt: '**Hint:** the word **from** tells you where you **start**. Where do you start?',
      promptVn: '**Gợi ý:** từ **from** cho biết em **bắt đầu** ở đâu. Vậy em bắt đầu ở đâu?',
      answer:
        'It is $8 - 5 = 3$ — **not** $5 - 8$. In English the two numbers arrive in the **opposite order** to the calculation.\n\n' +
        'The same trap: **take 7 away from 3** → $3 - 7$.   **6 less than 2** → $2 - 6$.',
      answerVn:
        'Đáp án là $8 - 5 = 3$ — **không** phải $5 - 8$. Trong tiếng Anh, hai số xuất hiện theo **thứ tự ngược lại** với phép tính.\n\n' +
        'Cùng một cái bẫy: **take 7 away from 3** → $3 - 7$.   **6 less than 2** → $2 - 6$.',
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
      'The arithmetic is the easy part. The **English** is where the marks are lost — so let us practise the translation.\n\n' +
      'For every sentence: find the **signal words**, write the **calculation**, and only then work out the answer.',
    contentVn:
      'Phần tính toán là phần dễ. **Tiếng Anh** mới là chỗ mất điểm — nên hãy luyện tập cách chuyển đổi.\n\n' +
      'Với mỗi câu: tìm **từ khoá**, viết **phép tính**, rồi mới tính ra đáp án.',
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

  // ── Section 5: difference ────────────────────────────────────────────────
  {
    layout: 'statement',
    accent: ORANGE,
    eyebrow: 'Every class is an English class',
    eyebrowVn: 'Mỗi tiết học đều là tiết tiếng Anh',
    title: 'Two Questions That Look the Same',
    titleVn: 'Hai câu hỏi trông giống nhau',
    label: 'Discuss',
    labelVn: 'Thảo luận',
    labelIcon: 'MessageSquare',
    text: 'Find the difference between −3 and 4.',
    textVn: 'Find the difference between −3 and 4.',
    sub: 'And: **what is −3 minus 4?** The same question?',
    subVn: 'Và: **−3 minus 4 bằng bao nhiêu?** Cùng một câu hỏi chứ?',
    reveal: {
      label: 'Show me',
      labelVn: 'Cho em xem',
      prompt: '**Hint:** put both numbers on the number line. How many **steps apart** are they?',
      promptVn: '**Gợi ý:** đặt cả hai số lên trục số. Chúng cách nhau **bao nhiêu bước**?',
      answer:
        'A **difference** is the **gap** between two numbers, so it is never negative. From −3 to 4 is **7** steps: the difference is $7$.\n\n' +
        'But $-3 - 4 = -7$. Two different questions, two different answers.',
      answerVn:
        '**Hiệu (difference)** là **khoảng cách** giữa hai số, nên nó không bao giờ âm. Từ −3 đến 4 là **7** bước: hiệu bằng $7$.\n\n' +
        'Nhưng $-3 - 4 = -7$. Hai câu hỏi khác nhau, hai đáp án khác nhau.',
    },
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Scale',
    title: 'How Much Warmer? How Much Lower?',
    titleVn: 'Ấm hơn bao nhiêu? Thấp hơn bao nhiêu?',
    ratio: 45,
    inlineSvg: DIAGRAMS.DIFFERENCE_GAP,
    content: 'All of these ask for the **same thing** — the gap: **how much warmer · how much colder · how much higher · how many more**.',
    contentVn: 'Tất cả đều hỏi **cùng một thứ** — khoảng cách: **how much warmer · how much colder · how much higher · how many more**.',
    notes: [
      {
        tone: 'write',
        text: '**Difference:** how far apart two numbers are. Work it out with **bigger − smaller**. The answer is never negative.',
        textVn: '**Hiệu:** hai số cách nhau bao xa. Tính bằng **số lớn − số bé**. Đáp án không bao giờ âm.',
      },
    ],
    exampleLabel: 'Worked example',
    exampleLabelVn: 'Ví dụ mẫu',
    example: 'Freezer −15 °C, room 20 °C. How much **warmer**?  $20 - (-15) = 35$ degrees.',
    exampleVn: 'Tủ đông −15 °C, căn phòng 20 °C. **Ấm hơn** bao nhiêu?  $20 - (-15) = 35$ độ.',
  },

  // ── Section 6: word problems ─────────────────────────────────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Problem 1',
    eyebrowVn: 'Bài 1',
    title: 'The Car Park',
    titleVn: 'Bãi đỗ xe',
    ratio: 55,
    image: liftPanel,
    content:
      'Mr Bowen parks on level **B4** — four floors **below** the ground, which is floor −4.\n\n' +
      'He gets into the lift and goes **up 9 floors**.\n\n' +
      'Which floor is he on now?',
    contentVn:
      'Thầy Bowen đỗ xe ở tầng **B4** — bốn tầng **dưới** mặt đất, tức là tầng −4.\n\n' +
      'Thầy bước vào thang máy và đi **lên 9 tầng**.\n\n' +
      'Bây giờ thầy đang ở tầng nào?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$-4 + 9 = 5$. He is on **floor 5**.',
      answerVn: '$-4 + 9 = 5$. Thầy đang ở **tầng 5**.',
    },
    caption: 'The B buttons are the floors below zero.',
    captionVn: 'Các nút B là những tầng dưới số không.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Problem 2',
    eyebrowVn: 'Bài 2',
    title: 'The Bank Account',
    titleVn: 'Tài khoản ngân hàng',
    ratio: 55,
    side: 'left',
    image: piggyBank,
    content:
      'Mr Bowen has −6 dollars in his account — he **owes** the bank 6 dollars.\n\n' +
      'He **deposits** 20 dollars. Then he **withdraws** 9 dollars. Then the bank **takes away** a 4-dollar debt he had forgotten about.\n\n' +
      'How much does he have now?',
    contentVn:
      'Thầy Bowen có −6 đô trong tài khoản — thầy **nợ** ngân hàng 6 đô.\n\n' +
      'Thầy **gửi vào** 20 đô. Rồi thầy **rút ra** 9 đô. Sau đó ngân hàng **xoá** khoản nợ 4 đô mà thầy đã quên mất.\n\n' +
      'Bây giờ thầy có bao nhiêu tiền?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$-6 + 20 - 9 - (-4) = 9$, so **9 dollars**. Taking away a debt **adds** to your money.',
      answerVn: '$-6 + 20 - 9 - (-4) = 9$, vậy là **9 đô**. Xoá một khoản nợ thì **cộng thêm** vào số tiền của em.',
    },
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Problem 3',
    eyebrowVn: 'Bài 3',
    title: 'The Research Station',
    titleVn: 'Trạm nghiên cứu',
    ratio: 55,
    image: southPoleStation,
    content:
      'At 6 a.m. it is −11 °C at the research station. By noon the temperature has **risen 4 degrees**. By midnight it has **fallen 9 degrees**.\n\n' +
      'What is the temperature at midnight?',
    contentVn:
      'Lúc 6 giờ sáng, trạm nghiên cứu ở −11 °C. Đến trưa, nhiệt độ đã **tăng 4 độ**. Đến nửa đêm, nhiệt độ đã **giảm 9 độ**.\n\n' +
      'Nhiệt độ lúc nửa đêm là bao nhiêu?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: '$-11 + 4 - 9 = -16$, so **−16 °C**. Work along the sentence in order: start, then the rise, then the fall.',
      answerVn: '$-11 + 4 - 9 = -16$, vậy là **−16 °C**. Hãy làm theo đúng thứ tự trong câu: số ban đầu, rồi phần tăng, rồi phần giảm.',
    },
    caption: 'Amundsen–Scott Station at the South Pole.',
    captionVn: 'Trạm Amundsen–Scott ở Nam Cực.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Problem 4',
    eyebrowVn: 'Bài 4',
    title: 'The Snail',
    titleVn: 'Con ốc sên',
    ratio: 55,
    image: snail,
    content:
      'A snail is at the bottom of a well, 12 metres below the ground, at −12 m.\n\n' +
      'Every day it climbs **up 3 m**. Every night it slides **down 3 m**.\n\n' +
      'Where is the snail after 9 days?',
    contentVn:
      'Một con ốc sên ở đáy giếng, sâu 12 mét dưới mặt đất, tức là −12 m.\n\n' +
      'Mỗi ngày nó bò **lên 3 m**. Mỗi đêm nó tụt **xuống 3 m**.\n\n' +
      'Sau 9 ngày, con ốc sên ở đâu?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: 'Each day: $+3 - 3 = 0$. After 9 days the snail is still at −12 m, at the bottom of the well. Some questions are long, but the numbers cancel.',
      answerVn: 'Mỗi ngày: $+3 - 3 = 0$. Sau 9 ngày, con ốc sên vẫn ở −12 m, dưới đáy giếng. Có những câu hỏi rất dài, nhưng các con số triệt tiêu nhau.',
    },
  },

  // ── Section 7: recap and homework ────────────────────────────────────────
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you leave',
    eyebrowVn: 'Trước khi ra về',
    title: 'Can You Do All Eight?',
    titleVn: 'Em làm được cả tám điều này chứ?',
    content:
      '> Your notebook should now have **4 definitions**, the **four movement rules** and **2 drawings** in it. Check.',
    contentVn:
      '> Trong vở của em bây giờ phải có **4 định nghĩa**, **bốn quy tắc di chuyển** và **2 hình vẽ**. Hãy kiểm tra lại.',
    items: [
      { text: 'Say what an **integer** is, and where each kind sits on the line.', textVn: 'Nói được **số nguyên** là gì và mỗi loại nằm ở đâu trên trục số.' },
      { text: 'Say −5 out loud correctly, and know when English says **minus**.', textVn: 'Đọc đúng −5, và biết khi nào tiếng Anh nói **minus**.' },
      { text: 'Move the right way in **all four** cases.', textVn: 'Di chuyển đúng hướng trong **cả bốn** trường hợp.' },
      { text: 'Explain **minus a negative = plus**, using the word **inverse**.', textVn: 'Giải thích **trừ số âm = cộng**, dùng từ **số đối**.' },
      { text: 'Give three **up** words and three **down** words.', textVn: 'Nêu ba từ **đi lên** và ba từ **đi xuống**.' },
      { text: 'Turn “subtract 5 from 8” into a calculation, the right way round.', textVn: 'Chuyển “subtract 5 from 8” thành phép tính, đúng thứ tự.' },
      { text: 'Find the **difference**, and say why it is never negative.', textVn: 'Tìm **hiệu**, và nói vì sao nó không bao giờ âm.' },
      { text: 'Write the **calculation before the answer**.', textVn: 'Viết **phép tính trước khi viết đáp án**.' },
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
    content: 'You **must do Workbook Section 1.1, pages 7 and 8, at home**. Show the **calculation** every time — not just the answer.',
    contentVn: 'Em **phải làm Sách bài tập Mục 1.1, trang 7 và 8, ở nhà**. Với mỗi câu hãy viết cả **phép tính** — không chỉ viết đáp án.',
    notes: [
      {
        tone: 'homework',
        badge: 'Section 1.1 · pages 7–8',
        badgeVn: 'Mục 1.1 · trang 7–8',
        icon: 'Pencil',
        text:
          '**Focus** — questions 1 to 5. Everybody.\n' +
          '**Practice** — questions 6 to 12. Q6 and Q7 have a missing number; Q8 and Q9 are estimates, so round first.\n' +
          '**Challenge** — questions 13 and 14, the two tables. An attempt beats a blank.',
        textVn:
          '**Focus** — câu 1 đến 5. Tất cả các em.\n' +
          '**Practice** — câu 6 đến 12. Câu 6 và 7 có ô trống; câu 8 và 9 là ước lượng, hãy làm tròn trước.\n' +
          '**Challenge** — câu 13 và 14, hai bảng số. Làm sai vẫn hơn bỏ trống.',
      },
    ],
  },
  {
    layout: 'hero',
    color: '#0087a8',
    icon: 'CheckCircle2',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    title: 'Lesson Complete!',
    titleVn: 'Hoàn thành bài học!',
    subtitle: 'You can move both ways along the number line, and you can turn an English sentence into a calculation. Exit question: the temperature is −4 °C and it **falls by 10 degrees**. What is it now?',
    subtitleVn: 'Em đã có thể di chuyển cả hai hướng trên trục số, và chuyển một câu tiếng Anh thành phép tính. Câu hỏi ra về: nhiệt độ đang là −4 °C và **giảm 10 độ**. Bây giờ là bao nhiêu?',
  },
]
