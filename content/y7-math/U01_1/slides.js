// content/y7-math/U01_1/slides.js
// The projected lesson deck for 1.1 Adding & Subtracting Integers.
// Rebuilt on the flexible layout system (hero / split / compare / statement /
// showcase / callout / stack / steps) — same pedagogy, widgets and diagrams.
import { DIAGRAMS } from './diagrams.js';
import {
  NumberLineWidget,
  TeamActivityWidget,
  TempDropProblemWidget,
  WarmerProblemWidget,
} from './widgets.jsx';

export const slides = [
  // 1 ─ Title + objective + warm-up ────────────────────────────────────────
  {
    layout: 'hero',
    color: 'bg-[#8b5cf6]',
    icon: 'BookOpen',
    eyebrow: 'Unit 1 · 1.1',
    eyebrowVn: 'Chương 1 · 1.1',
    title: 'Adding & Subtracting Integers',
    titleVn: 'Cộng và Trừ Số nguyên',
    objective: 'I can add and subtract positive and negative integers by moving along a number line.',
    objectiveVn: 'Em có thể cộng và trừ số nguyên dương và âm bằng cách di chuyển trên trục số.',
    card: {
      icon: 'Pencil',
      badge: 'Warm-Up · Do this now in your book',
      badgeVn: 'Khởi động · Làm ngay vào vở',
      text: 'Write down **at least 3 things** that can be described with negative numbers.',
      textVn: 'Viết ra **ít nhất 3 thứ** có thể được mô tả bằng số âm.',
    },
  },

  // 2 ─ Team activity: brainstorm negatives (timer + reveal) ────────────────
  {
    layout: 'split',
    accent: '#58cc02',
    icon: 'Users',
    title: 'Team Game: Name the Negatives',
    titleVn: 'Trò chơi đội: Kể tên số âm',
    ratio: 45,
    content:
      'Play in **teams of two**, one whiteboard each.\n\n' +
      '> **1.** In **2 minutes**, list as many things as you can that use **negative numbers**.\n' +
      '> **2.** Take turns reading your list out loud.\n' +
      '> **3.** If another team has the **same** idea, **both cross it out**.\n' +
      '> **4.** The team with the most **unique** ideas wins! 🏆',
    contentVn:
      'Chơi theo **đội hai người**, mỗi người một bảng con.\n\n' +
      '> **1.** Trong **2 phút**, hãy liệt kê càng nhiều thứ dùng **số âm** càng tốt.\n' +
      '> **2.** Lần lượt đọc to danh sách của mình.\n' +
      '> **3.** Nếu đội khác có ý tưởng **giống nhau**, **cả hai cùng gạch bỏ**.\n' +
      '> **4.** Đội có nhiều ý tưởng **độc nhất** nhất sẽ thắng! 🏆',
    widget: TeamActivityWidget,
  },

  // 3 ─ The number line ─────────────────────────────────────────────────────
  {
    layout: 'split',
    accent: '#1cb0f6',
    icon: 'BookOpen',
    title: 'The Number Line',
    titleVn: 'Trục số',
    ratio: 45,
    inlineSvg: DIAGRAMS.NOTES_NUMBER_LINE_BIG,
    drawThis: true,
    content:
      'Every integer has a home on the number line. Copy these into your book:\n\n' +
      '> **Integer**: a whole number that is **positive, negative, or zero** — never a fraction.\n' +
      '> **Positive**: to the **right** of zero. **Negative**: to the **left** of zero.\n' +
      '> **Zero** is neither positive nor negative — it sits in the middle.\n' +
      '> Zero and the positives together are the **whole (natural) numbers**.',
    contentVn:
      'Mỗi số nguyên có một vị trí trên trục số. Hãy chép vào vở:\n\n' +
      '> **Số nguyên**: một số nguyên vẹn, có thể **dương, âm hoặc bằng không** — không bao giờ là phân số.\n' +
      '> **Số dương**: ở bên **phải** số không. **Số âm**: ở bên **trái** số không.\n' +
      '> **Số không** không âm cũng không dương — nó nằm ở giữa.\n' +
      '> Số không cùng với các số dương là các **số tự nhiên**.',
    exampleLabel: 'Read it',
    exampleLabelVn: 'Đọc thử',
    example: '$-3$ is 3 steps **left** of zero. $4$ is 4 steps **right** of zero. So $-3 < 4$.',
    exampleVn: '$-3$ ở **bên trái** số không 3 bước. $4$ ở **bên phải** số không 4 bước. Vậy $-3 < 4$.',
  },

  // 4 ─ Framing (discussion) + interactive jumper ──────────────────────────
  {
    layout: 'split',
    accent: '#ff9600',
    icon: 'MessageSquare',
    title: 'Left or Right?',
    titleVn: 'Trái hay Phải?',
    ratio: 45,
    content:
      'Every add or subtract is just a **move** along the line. Before you calculate, always ask **one question**:\n\n' +
      '> **"Should I move RIGHT or LEFT?"**\n' +
      '> **Right** = bigger. **Left** = smaller.\n\n' +
      'Play with the tool. Can you find the rule for **+** and **−** yourself?',
    contentVn:
      'Mỗi phép cộng hay trừ chỉ là một **bước di chuyển** trên trục số. Trước khi tính, hãy luôn tự hỏi **một câu**:\n\n' +
      '> **"Mình nên đi sang PHẢI hay TRÁI?"**\n' +
      '> **Phải** = lớn hơn. **Trái** = nhỏ hơn.\n\n' +
      'Hãy thử công cụ. Em có tự tìm ra quy tắc cho **+** và **−** không?',
    widget: NumberLineWidget,
  },

  // 5 ─ Two signs together → combine into one (comparison) ──────────────────
  {
    layout: 'compare',
    accent: '#8b5cf6',
    icon: 'Equal',
    title: 'Two Signs Together',
    titleVn: 'Hai dấu đứng cạnh nhau',
    columns: [
      {
        heading: 'Same signs → +',
        headingVn: 'Cùng dấu → +',
        icon: 'ArrowRight',
        accent: '#22c55e',
        content:
          'Two of the **same** sign combine into a **plus** — so you move **right**.\n\n' +
          '> $+\\,+ \\;=\\; +$ and $-\\,- \\;=\\; +$',
        contentVn:
          'Hai dấu **giống nhau** gộp thành dấu **cộng** — nên em đi sang **phải**.\n\n' +
          '> $+\\,+ \\;=\\; +$ và $-\\,- \\;=\\; +$',
        notes: [{ tone: 'info', badge: 'Example', badgeVn: 'Ví dụ', text: '$5 - (-3) = 5 + 3 = 8$', icon: 'Equal' }],
      },
      {
        heading: 'Different signs → −',
        headingVn: 'Khác dấu → −',
        icon: 'ArrowRight',
        accent: '#ef4444',
        content:
          'Two **different** signs combine into a **minus** — so you move **left**.\n\n' +
          '> $+\\,- \\;=\\; -$ and $-\\,+ \\;=\\; -$',
        contentVn:
          'Hai dấu **khác nhau** gộp thành dấu **trừ** — nên em đi sang **trái**.\n\n' +
          '> $+\\,- \\;=\\; -$ và $-\\,+ \\;=\\; -$',
        notes: [{ tone: 'homework', badge: 'Example', badgeVn: 'Ví dụ', text: '$5 + (-3) = 5 - 3 = 2$', icon: 'Equal' }],
      },
    ],
  },

  // 6 ─ Adding integers ────────────────────────────────────────────────────
  {
    layout: 'split',
    accent: '#ff9600',
    icon: 'Target',
    title: 'Adding Integers',
    titleVn: 'Cộng số nguyên',
    ratio: 45,
    inlineSvg: DIAGRAMS.NOTES_ADD_NEG,
    drawThis: true,
    content:
      'To **add**, start at the first number and move:\n\n' +
      '> Add a **positive** → move **right**.\n' +
      '> Add a **negative** → move **left**.',
    contentVn:
      'Để **cộng**, bắt đầu ở số thứ nhất và di chuyển:\n\n' +
      '> Cộng số **dương** → đi sang **phải**.\n' +
      '> Cộng số **âm** → đi sang **trái**.',
    exampleLabel: 'Examples',
    exampleLabelVn: 'Ví dụ',
    example:
      '**1)** $-3 + (-4) = -7$: start at $-3$, move $4$ **left**.\n\n' +
      '**2)** $-2 + 6 = 4$: start at $-2$, move $6$ **right**.',
    exampleVn:
      '**1)** $-3 + (-4) = -7$: bắt đầu ở $-3$, đi $4$ bước sang **trái**.\n\n' +
      '**2)** $-2 + 6 = 4$: bắt đầu ở $-2$, đi $6$ bước sang **phải**.',
  },

  // 7 ─ Subtracting a positive ─────────────────────────────────────────────
  {
    layout: 'split',
    accent: '#ff4b4b',
    icon: 'Scale',
    title: 'Subtracting Integers',
    titleVn: 'Trừ số nguyên',
    ratio: 45,
    side: 'left',
    inlineSvg: DIAGRAMS.NOTES_SUB_POS,
    drawThis: true,
    content:
      'Subtracting a **positive** is the opposite of adding one:\n\n' +
      '> Subtract a **positive** → move **left**, to a smaller number.\n\n' +
      'You can end up below zero — that is fine!',
    contentVn:
      'Trừ một số **dương** thì ngược lại với cộng:\n\n' +
      '> Trừ số **dương** → đi sang **trái**, đến số nhỏ hơn.\n\n' +
      'Em có thể xuống dưới số không — điều đó hoàn toàn ổn!',
    exampleLabel: 'Examples',
    exampleLabelVn: 'Ví dụ',
    example:
      '**1)** $-6 - 3 = -9$: start at $-6$, move $3$ **left**.\n\n' +
      '**2)** $2 - 5 = -3$: start at $2$, move $5$ **left**.',
    exampleVn:
      '**1)** $-6 - 3 = -9$: bắt đầu ở $-6$, đi $3$ bước sang **trái**.\n\n' +
      '**2)** $2 - 5 = -3$: bắt đầu ở $2$, đi $5$ bước sang **trái**.',
  },

  // 8 ─ The big rule (statement) ───────────────────────────────────────────
  {
    layout: 'statement',
    accent: '#14b8a6',
    icon: 'ShieldCheck',
    eyebrow: 'The big rule of the lesson',
    eyebrowVn: 'Quy tắc lớn của bài học',
    label: 'Write This Down',
    labelVn: 'Chép vào vở',
    text: 'Minus a negative = plus:  $a - (-b) = a + b$',
    textVn: 'Trừ số âm = cộng:  $a - (-b) = a + b$',
    sub: 'Different signs cancel, so subtracting a negative sends you **right**. Think of debt: if the bank removes your $\\$5$ debt, you are $\\$5$ richer!',
    subVn: 'Hai dấu khác nhau triệt tiêu, nên trừ một số âm đưa em sang **phải**. Hãy nghĩ về nợ: nếu ngân hàng xóa khoản nợ $\\$5$, em giàu hơn $\\$5$!',
    reveal: {
      label: 'See two examples',
      labelVn: 'Xem hai ví dụ',
      answer:
        '**1)** $2 - (-5) = 2 + 5 = 7$.\n\n' +
        '**2)** $-6 - (-9) = -6 + 9 = 3$.',
      answerVn:
        '**1)** $2 - (-5) = 2 + 5 = 7$.\n\n' +
        '**2)** $-6 - (-9) = -6 + 9 = 3$.',
    },
  },

  // 9 ─ See it on the line (showcase) ──────────────────────────────────────
  {
    layout: 'showcase',
    accent: '#14b8a6',
    icon: 'Target',
    title: 'See It on the Line',
    titleVn: 'Nhìn trên trục số',
    inlineSvg: DIAGRAMS.NOTES_SUB_NEG,
    drawThis: true,
    caption: '$2 - (-5)$ becomes $2 + 5$: start at $2$ and jump $5$ to the **right**.',
    captionVn: '$2 - (-5)$ trở thành $2 + 5$: bắt đầu ở $2$ và nhảy $5$ bước sang **phải**.',
  },

  // 10 ─ Watch out: the minus sign does two jobs (callout) ──────────────────
  {
    layout: 'callout',
    accent: '#ff4b4b',
    icon: 'AlertTriangle',
    eyebrow: 'Common mistake',
    eyebrowVn: 'Lỗi thường gặp',
    title: 'Watch Out!',
    titleVn: 'Cẩn thận!',
    content:
      'The minus sign does **two jobs** — be sure which one you mean.\n\n' +
      '> In $8 + (-12)$, the $-$ is the **sign** of $12$ (a negative number).\n' +
      '> Only **$-(-)$** turns into $+$. A single **$+(-)$** still means **move left**.',
    contentVn:
      'Dấu trừ làm **hai việc** — hãy chắc chắn em muốn nói việc nào.\n\n' +
      '> Trong $8 + (-12)$, dấu $-$ là **dấu** của $12$ (một số âm).\n' +
      '> Chỉ có **$-(-)$** mới đổi thành $+$. Một dấu **$+(-)$** vẫn nghĩa là **đi sang trái**.',
    notes: [
      { tone: 'homework', badge: 'Do not do this', badgeVn: 'Đừng làm thế này', icon: 'AlertTriangle', text: '$5 + (-3) = 2$ (move left), **NOT** $8$. Don’t flip $+(-)$ into $+$.', textVn: '$5 + (-3) = 2$ (đi sang trái), **KHÔNG** phải $8$. Đừng đổi $+(-)$ thành $+$.' },
    ],
  },

  // 11 ─ Word problem 1: temperature drop ──────────────────────────────────
  {
    layout: 'split',
    accent: '#ff4b4b',
    icon: 'Target',
    title: 'Word Problem: Temperature',
    titleVn: 'Bài toán đố: Nhiệt độ',
    ratio: 45,
    content:
      'Read carefully, then work it out on your whiteboard.\n\n' +
      '> At **noon** the temperature is **$4°C$**.\n' +
      '> By **midnight** it has **dropped $9$ degrees**.\n\n' +
      'What is the temperature at midnight?',
    contentVn:
      'Đọc kỹ, rồi tính trên bảng con của em.\n\n' +
      '> Vào **buổi trưa** nhiệt độ là **$4°C$**.\n' +
      '> Đến **nửa đêm** nhiệt độ đã **giảm $9$ độ**.\n\n' +
      'Nhiệt độ lúc nửa đêm là bao nhiêu?',
    widget: TempDropProblemWidget,
  },

  // 12 ─ Word problem 2: how much warmer ───────────────────────────────────
  {
    layout: 'split',
    accent: '#14b8a6',
    icon: 'MessageSquare',
    title: 'Word Problem: How Much Warmer?',
    titleVn: 'Bài toán đố: Ấm hơn bao nhiêu?',
    ratio: 45,
    side: 'left',
    content:
      'This one hides a **subtract-a-negative**. Spot it!\n\n' +
      '> The **freezer** is **$-15°C$**.\n' +
      '> The **room** is **$20°C$**.\n\n' +
      'How many degrees **warmer** is the room than the freezer?',
    contentVn:
      'Bài này ẩn một phép **trừ số âm**. Hãy tìm ra nó!\n\n' +
      '> **Tủ đông** là **$-15°C$**.\n' +
      '> **Căn phòng** là **$20°C$**.\n\n' +
      'Căn phòng **ấm hơn** tủ đông bao nhiêu độ?',
    widget: WarmerProblemWidget,
  },

  // 13 ─ Recap: all the rules (stack) ──────────────────────────────────────
  {
    layout: 'stack',
    accent: '#14b8a6',
    icon: 'ShieldCheck',
    columns: 1,
    title: 'Recap: The Rules',
    titleVn: 'Tóm tắt: Các quy tắc',
    content: 'Keep this in your notebook — it is everything from today.',
    contentVn: 'Hãy giữ điều này trong vở — đây là tất cả những gì hôm nay.',
    notes: [
      { tone: 'write', text: '**Ask first:** move **right** (bigger) or **left** (smaller)?', textVn: '**Hỏi trước:** đi sang **phải** (lớn hơn) hay **trái** (nhỏ hơn)?' },
      { tone: 'write', text: 'Add **+** → right. Add **−** → left. Subtract **+** → left.', textVn: 'Cộng **+** → phải. Cộng **−** → trái. Trừ **+** → trái.' },
      { tone: 'write', text: '**Same** signs → **+** (right). **Different** signs → **−** (left).', textVn: '**Cùng** dấu → **+** (phải). **Khác** dấu → **−** (trái).' },
      { tone: 'write', text: '**Minus a negative = plus:** $a - (-b) = a + b$.', textVn: '**Trừ số âm = cộng:** $a - (-b) = a + b$.' },
    ],
  },

  // 14 ─ Quick self-check (steps + reveal) ─────────────────────────────────
  {
    layout: 'steps',
    accent: '#8b5cf6',
    icon: 'Repeat',
    title: 'Quick Self-Check',
    titleVn: 'Tự kiểm tra nhanh',
    content: 'Try each on your whiteboard, then check with a partner before you reveal.',
    contentVn: 'Thử từng câu trên bảng con, kiểm tra với bạn rồi mới bấm hiện đáp án.',
    steps: [
      { text: '**a)**  $20 + (-5)$', textVn: '**a)**  $20 + (-5)$' },
      { text: '**b)**  $-10 - (-15)$', textVn: '**b)**  $-10 - (-15)$' },
      { text: '**c)**  $-2 + (-13)$', textVn: '**c)**  $-2 + (-13)$' },
    ],
    reveal: {
      label: 'Reveal the answers',
      labelVn: 'Hiện đáp án',
      answer: '**a)** $15$    **b)** $5$    **c)** $-15$',
      answerVn: '**a)** $15$    **b)** $5$    **c)** $-15$',
    },
  },

  // 15 ─ Celebration + exit question ───────────────────────────────────────
  {
    layout: 'hero',
    color: 'bg-[#14b8a6]',
    icon: 'CheckCircle2',
    title: 'Lesson Complete!',
    titleVn: 'Hoàn thành bài học!',
    subtitle: 'You can now add and subtract integers on a number line — even subtracting a negative. Exit question: what is $-4 - (-10)$?',
    subtitleVn: 'Bây giờ em có thể cộng và trừ số nguyên trên trục số — kể cả trừ số âm. Câu hỏi ra về: $-4 - (-10)$ bằng bao nhiêu?',
  },
];
