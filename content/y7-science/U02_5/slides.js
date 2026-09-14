// content/y7-science/U02_5/slides.js
// Year 7 Science · 2.5 Atoms, elements and the Periodic Table.
// Source: Learner's Book pages 51–56.
//
// WRITING RULE FOR THIS DECK: short sentences, one idea each, and the body text
// never repeats the write note. If the note says it, the slide does not.
//
// COPY-DOWN (8 key words, the book's own list, + 1 drawing):
//   atom · nanotube · element · The Periodic Table · period · group · metals ·
//   symbol — and the Draw This of how atoms join together.

import { DIAGRAMS } from './diagrams.js'
import { HalvingWidget, TableRowsCols, TableMass, TableMetals, TableExplore, SymbolSnap } from './widgets.jsx'
import democritus from './images/democritus.jpg'
import stm from './images/stm.jpg'
import nanotube from './images/nanotube.jpg'
import ptwall from './images/ptwall.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'

export const slides = [
  // ── 1. Hero + starter (the book's Getting Started) ─────────────────────────
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Atom',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    date: '15 Sep 2026',
    eyebrow: '2.5 Atoms, elements and the Periodic Table',
    eyebrowVn: '2.5 Nguyên tử, nguyên tố và Bảng tuần hoàn',
    title: 'Atoms & Elements',
    titleVn: 'Nguyên tử & Nguyên tố',
    card: {
      icon: 'Pencil',
      badge: 'Starter',
      badgeVn: 'Khởi động',
      text: 'Draw the particles in a **solid**. What must you do to a solid to make it **melt**?',
      textVn: 'Vẽ các hạt trong **chất rắn**. Em phải làm gì để chất rắn **nóng chảy**?',
    },
  },

  // ── ATOMS ──────────────────────────────────────────────────────────────────
  // 2. Question first: can you cut forever?
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Think, then vote',
    eyebrowVn: 'Suy nghĩ, rồi biểu quyết',
    title: 'Can You Cut Forever?',
    titleVn: 'Có cắt mãi được không?',
    text: 'Mr Bowen cuts a piece of gold in half. Then in half again. And again.',
    textVn: 'Thầy Bowen cắt đôi một miếng vàng. Rồi lại cắt đôi. Cứ thế mãi.',
    sub: 'Can he keep cutting **forever**? Yes or no?',
    subVn: 'Thầy có thể cắt **mãi mãi** không? Có hay không?',
  },

  // 3. Democritus answers
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Atom',
    eyebrow: 'Greece, over 2000 years ago',
    eyebrowVn: 'Hy Lạp, hơn 2000 năm trước',
    title: 'Democritus Said No',
    titleVn: 'Democritus nói: Không',
    ratio: 55,
    image: democritus,
    content: 'Keep cutting, and you reach a piece that **cannot be cut**.',
    contentVn: 'Cứ cắt mãi, em sẽ đến một mẩu **không thể cắt** được nữa.',
    notes: [
      {
        tone: 'write',
        text: '**Atom:** a tiny piece of matter. Everything is made of atoms.\n"Atom" means "cannot be divided".',
        textVn: '**Nguyên tử (atom):** một mẩu vật chất rất nhỏ. Mọi thứ đều được tạo nên từ nguyên tử.\n"Atom" nghĩa là "không thể chia nhỏ".',
      },
    ],
  },

  // 4. Question first: how many cuts?
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Guess first',
    eyebrowVn: 'Đoán trước',
    title: 'How Many Cuts?',
    titleVn: 'Bao nhiêu lần cắt?',
    text: "Mr Bowen's gold cube is **1 cm** wide. He cuts it in half, again and again.",
    textVn: 'Khối vàng của thầy Bowen rộng **1 cm**. Thầy cắt đôi nó, hết lần này đến lần khác.',
    sub: 'How many cuts until it is just **one atom** wide?',
    subVn: 'Cắt bao nhiêu lần thì nó chỉ còn rộng **một nguyên tử**?',
  },

  // 5. The halving counter
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Target',
    eyebrow: 'Count out loud',
    eyebrowVn: 'Đếm to lên',
    title: 'Half, and Half Again',
    titleVn: 'Một nửa, rồi lại một nửa',
    widget: HalvingWidget,
    caption: 'Say the number with every cut. Was your guess close?',
    captionVn: 'Đọc to con số sau mỗi lần cắt. Em đoán có gần đúng không?',
  },

  // 6. Seeing atoms today + nanotube
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'Microscope',
    eyebrow: 'Today we can see atoms',
    eyebrowVn: 'Ngày nay ta có thể nhìn thấy nguyên tử',
    title: 'Atoms Are Real',
    titleVn: 'Nguyên tử là có thật',
    columns: [
      {
        heading: 'Real gold atoms',
        headingVn: 'Nguyên tử vàng thật',
        accent: TEAL,
        image: stm,
        caption: 'Each tiny bright dot is one atom. Seen with a **scanning tunnelling microscope**.',
        captionVn: 'Mỗi chấm sáng nhỏ là một nguyên tử. Chụp bằng **kính hiển vi quét xuyên hầm**.',
      },
      {
        heading: 'A model of a nanotube',
        headingVn: 'Mô hình ống nano',
        accent: TEAL,
        image: nanotube,
        notes: [
          {
            tone: 'write',
            text: '**Nanotube:** a very, very small tube made of carbon atoms.\n"Nano" means "very, very small".',
            textVn: '**Ống nano (nanotube):** một ống rất, rất nhỏ tạo nên từ nguyên tử cacbon.\n"Nano" nghĩa là "rất, rất nhỏ".',
          },
        ],
      },
    ],
  },

  // ── ELEMENTS ───────────────────────────────────────────────────────────────
  // 7. Three elements, photographed
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Boxes',
    eyebrow: 'Look closely',
    eyebrowVn: 'Nhìn kỹ nhé',
    title: 'Only One Kind of Atom',
    titleVn: 'Chỉ một loại nguyên tử',
    inlineSvg: DIAGRAMS.ONE_KIND,
    caption: 'Each is made of **only one kind** of atom. Graphite and diamond are **both** just carbon!',
    captionVn: 'Mỗi chất chỉ gồm **một loại** nguyên tử. Than chì và kim cương **đều** chỉ là cacbon! (vàng = gold, bạc = silver)',
  },

  // 8. Element: the silver-ring zoom
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Atom',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Element',
    titleVn: 'Nguyên tố',
    ratio: 40,
    inlineSvg: DIAGRAMS.SILVER_ZOOM,
    content:
      'Carbon, gold and silver are all **elements**.\n\n' +
      'Each kind of atom has different **properties**. So each element does too.',
    contentVn:
      'Cacbon, vàng và bạc đều là **nguyên tố**.\n\n' +
      'Mỗi loại nguyên tử có **tính chất** khác nhau. Vì vậy mỗi nguyên tố cũng vậy.',
    notes: [
      {
        tone: 'write',
        text: '**Element:** a substance made of only one kind of atom.',
        textVn: '**Nguyên tố (element):** một chất chỉ được tạo nên từ một loại nguyên tử.',
      },
    ],
  },

  // 9. Book Q2 as a question slide
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Think',
    eyebrowVn: 'Suy nghĩ',
    title: 'How Many Elements?',
    titleVn: 'Có bao nhiêu nguyên tố?',
    text: 'Scientists have found **94** kinds of atom in nature.',
    textVn: 'Có **94** loại nguyên tử trong tự nhiên.',
    sub: 'So how many natural elements are there?',
    subVn: 'Vậy có bao nhiêu nguyên tố tự nhiên?',
    reveal: {
      label: 'Answer',
      labelVn: 'Đáp án',
      answer: '**94**, one for each kind of atom. Scientists have **made 24 more** in laboratories.',
      answerVn: '**94**, mỗi loại nguyên tử là một nguyên tố. Các nhà khoa học **tạo thêm 24** nguyên tố trong phòng thí nghiệm.',
    },
  },

  // 10. Draw This: how atoms join together
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw all four, with labels',
    eyebrowVn: 'Vẽ cả bốn, có ghi chú',
    title: 'How Atoms Join Together',
    titleVn: 'Các nguyên tử liên kết như thế nào',
    inlineSvg: DIAGRAMS.JOINING,
    drawThis: true,
    caption: 'Six elements, like neon: atoms alone. **Most**, like gold: packed close. **A few**: small particles.',
    captionVn: 'Sáu nguyên tố, như neon: nguyên tử đứng riêng. **Hầu hết**, như vàng: xếp sát nhau. **Một số ít**: hạt nhỏ.',
  },

  // 11. The real thing
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'ScanEye',
    eyebrow: 'The drawings, for real',
    eyebrowVn: 'Hình vẽ, ngoài đời thật',
    title: 'Neon, Oxygen, Sulfur',
    titleVn: 'Neon, Oxi, Lưu huỳnh',
    inlineSvg: DIAGRAMS.JOINING_REAL,
    caption: 'Neon: atoms **alone**. Oxygen: particles of **2 atoms**. Sulfur: particles of **8 atoms**.',
    captionVn: 'Neon: nguyên tử **riêng lẻ**. Oxi: hạt gồm **2 nguyên tử**. Lưu huỳnh: hạt gồm **8 nguyên tử**.',
  },

  // ── THE PERIODIC TABLE ─────────────────────────────────────────────────────
  // 12. The whole table
  {
    layout: 'split',
    accent: TEAL,
    icon: 'LayoutGrid',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'The Periodic Table',
    titleVn: 'Bảng tuần hoàn',
    ratio: 45,
    image: ptwall,
    content:
      'All **118** elements: 94 natural, 24 made by scientists.\n\n' +
      'Is there one on our lab wall? Today we learn the **first 20**.',
    contentVn:
      'Tất cả **118** nguyên tố: 94 tự nhiên, 24 do nhà khoa học tạo ra.\n\n' +
      'Phòng thí nghiệm của mình có treo bảng này không? Hôm nay ta học **20 nguyên tố đầu tiên**.',
    notes: [
      {
        tone: 'write',
        text: '**The Periodic Table:** a way of arranging all the elements.',
        textVn: '**Bảng tuần hoàn (The Periodic Table):** một cách sắp xếp tất cả các nguyên tố.',
      },
    ],
  },

  // 13. Rows and columns (widget)
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Grid3x3',
    eyebrow: 'The first 20 elements',
    eyebrowVn: '20 nguyên tố đầu tiên',
    title: 'Rows and Columns',
    titleVn: 'Hàng và cột',
    widget: TableRowsCols,
    caption: 'A **row** goes across →     A **column** goes down ↓',
    captionVn: 'Một **hàng** đi ngang →     Một **cột** đi xuống ↓',
  },

  // 14. Stop for the English
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'English check',
    eyebrowVn: 'Kiểm tra tiếng Anh',
    title: 'Words With Two Meanings',
    titleVn: 'Từ có hai nghĩa',
    inlineSvg: DIAGRAMS.TWO_MEANINGS,
    caption: 'Same word. A different meaning in science.',
    captionVn: 'Cùng một từ, nghĩa khác trong khoa học: **table** = bảng, **period** = chu kì, **group** = nhóm.',
  },

  // 15. Period + group (write)
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Key words',
    eyebrowVn: 'Từ khóa',
    title: 'Periods and Groups',
    titleVn: 'Chu kì và nhóm',
    content: 'Book page 54: put your finger on a **period**. Now on a **group**.',
    contentVn: 'Sách trang 54: đặt ngón tay lên một **chu kì**. Giờ lên một **nhóm**.',
    notes: [
      {
        tone: 'write',
        text: '**Period:** a row in the Periodic Table.\n**Group:** a column in the Periodic Table.',
        textVn: '**Chu kì (period):** một hàng trong Bảng tuần hoàn.\n**Nhóm (group):** một cột trong Bảng tuần hoàn.',
      },
    ],
  },

  // 16. Lightest to heaviest (widget)
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Scale',
    eyebrow: 'Read it like a page of English',
    eyebrowVn: 'Đọc như đọc một trang tiếng Anh',
    title: 'Lightest to Heaviest',
    titleVn: 'Từ nhẹ nhất đến nặng nhất',
    widget: TableMass,
    caption: 'Left to right, then the next row. The atoms get **heavier**. Say each name.',
    captionVn: 'Từ trái sang phải, rồi xuống hàng tiếp. Nguyên tử **nặng dần**. Đọc to từng tên.',
  },

  // 17. Metals and non-metals (widget)
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Layers',
    eyebrow: 'Look at the colours',
    eyebrowVn: 'Nhìn màu sắc',
    title: 'Metals and Non-metals',
    titleVn: 'Kim loại và phi kim',
    widget: TableMetals,
    caption: 'The table puts **similar** elements **close together**.',
    captionVn: 'Bảng xếp các nguyên tố **giống nhau** ở **gần nhau**.',
  },

  // 18. Photo quiz: which one is not a metal?
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Book page 54',
    eyebrowVn: 'Sách trang 54',
    title: 'Metal or Non-metal?',
    titleVn: 'Kim loại hay phi kim?',
    inlineSvg: DIAGRAMS.METAL_QUIZ,
    caption: 'Five of these are metals. **One is not.** Which one?',
    captionVn: 'Năm chất là kim loại. **Một chất thì không.** Chất nào?',
  },

  // 19. Metals (write) + the quiz answer
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Metals',
    titleVn: 'Kim loại',
    notes: [
      {
        tone: 'write',
        text: '**Metals:** elements like iron, copper and aluminium.\nIn the Periodic Table, metals are yellow. Non-metals are blue.',
        textVn: '**Kim loại (metals):** các nguyên tố như sắt, đồng và nhôm.\nTrong Bảng tuần hoàn, kim loại màu vàng. Phi kim màu xanh.',
      },
    ],
    reveal: {
      label: 'Which one was not a metal?',
      labelVn: 'Chất nào không phải kim loại?',
      answer: '**Bromine.** It is a non-metal — and a liquid!',
      answerVn: '**Brom (bromine).** Nó là phi kim — và là chất lỏng!',
    },
  },

  // ── SYMBOLS ────────────────────────────────────────────────────────────────
  // 20. Question first: why Na?
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Think',
    eyebrowVn: 'Suy nghĩ',
    title: 'Why Na?',
    titleVn: 'Tại sao là Na?',
    text: 'The symbol for **sodium** is **Na**.',
    textVn: 'Kí hiệu của **sodium** (natri) là **Na**.',
    sub: 'Sodium starts with **S**. So where does **Na** come from?',
    subVn: 'Sodium bắt đầu bằng chữ **S**. Vậy **Na** từ đâu ra?',
  },

  // 21. Three ways to make a symbol (write)
  {
    layout: 'split',
    accent: TEAL,
    icon: 'PenLine',
    eyebrow: 'Three ways to make a symbol',
    eyebrowVn: 'Ba cách tạo kí hiệu',
    title: 'Chemical Symbols',
    titleVn: 'Kí hiệu hóa học',
    ratio: 40,
    inlineSvg: DIAGRAMS.SYMBOL_WAYS,
    content: '**Na** comes from **natrium**, the old Latin name for sodium.',
    contentVn: '**Na** đến từ **natrium**, tên La-tinh cổ của sodium.',
    notes: [
      {
        tone: 'write',
        text: '**Symbol:** a short way to write the name of an element.\nThe first letter is always a capital (upper case). The second is always small (lower case).',
        textVn: '**Kí hiệu (symbol):** cách viết ngắn gọn tên của một nguyên tố.\nChữ cái đầu luôn viết hoa. Chữ cái thứ hai luôn viết thường.',
      },
    ],
  },

  // 22. Why capitals matter
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Spot the difference',
    eyebrowVn: 'Tìm điểm khác nhau',
    title: 'Capitals Matter',
    titleVn: 'Chữ hoa rất quan trọng',
    text: '**Co** and **CO** look almost the same.',
    textVn: '**Co** và **CO** trông gần giống nhau.',
    sub: 'How are they different?',
    subVn: 'Chúng khác nhau thế nào?',
    reveal: {
      label: 'Answer',
      labelVn: 'Đáp án',
      answer: '**Co** is one element: cobalt, a metal.\n**CO** is two elements: **C** (carbon) and **O** (oxygen).',
      answerVn: '**Co** là một nguyên tố: coban, một kim loại.\n**CO** là hai nguyên tố: **C** (cacbon) và **O** (oxi).',
    },
  },

  // 23. Game: the book's Activity, played from the front
  {
    layout: 'game',
    title: 'Symbol Snap',
    titleVn: 'Đoán nhanh kí hiệu',
    widget: SymbolSnap,
  },

  // ── BOOK QUESTIONS (two per slide, so an open answer never scrolls) ────────
  // 24. Questions 1–2
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 53",
    eyebrowVn: 'Sách học sinh, trang 53',
    title: 'Questions 1–2',
    titleVn: 'Câu hỏi 1–2',
    content:
      '> **1.** What are atoms?\n' +
      '> **2.** There are 94 kinds of natural atom. How many natural elements are there?',
    contentVn:
      '> **1.** Nguyên tử là gì?\n' +
      '> **2.** Có 94 loại nguyên tử tự nhiên. Có bao nhiêu nguyên tố tự nhiên?',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**1.** Tiny pieces of matter. Everything is made of atoms.\n**2.** 94.',
      answerVn: '**1.** Những mẩu vật chất rất nhỏ. Mọi thứ đều được tạo nên từ nguyên tử.\n**2.** 94.',
    },
  },

  // 25. Questions 3–4
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 55",
    eyebrowVn: 'Sách học sinh, trang 55',
    title: 'Questions 3–4',
    titleVn: 'Câu hỏi 3–4',
    ratio: 40,
    widget: TableExplore,
    content:
      '> **3.** Name the elements with the symbols Mg, Be, Li and N.\n' +
      '> **4.** Find the symbols for aluminium, boron, fluorine and potassium.',
    contentVn:
      '> **3.** Gọi tên các nguyên tố có kí hiệu Mg, Be, Li và N.\n' +
      '> **4.** Tìm kí hiệu của aluminium, boron, fluorine và potassium.',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**3.** magnesium, beryllium, lithium, nitrogen\n**4.** Al, B, F, K',
      answerVn: '**3.** magnesium, beryllium, lithium, nitrogen\n**4.** Al, B, F, K',
    },
  },

  // 26. Questions 5–6
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 55",
    eyebrowVn: 'Sách học sinh, trang 55',
    title: 'Questions 5–6',
    titleVn: 'Câu hỏi 5–6',
    ratio: 40,
    widget: TableMass,
    content:
      '> **5.** Which element has atoms with the smallest mass?\n' +
      '> **6.** Of the first 20 elements, which has atoms with the greatest mass?',
    contentVn:
      '> **5.** Nguyên tố nào có nguyên tử khối lượng nhỏ nhất?\n' +
      '> **6.** Trong 20 nguyên tố đầu tiên, nguyên tố nào có nguyên tử khối lượng lớn nhất?',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**5.** hydrogen\n**6.** calcium',
      answerVn: '**5.** hydrogen\n**6.** calcium',
    },
  },

  // 27. Questions 7–8
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 55",
    eyebrowVn: 'Sách học sinh, trang 55',
    title: 'Questions 7–8',
    titleVn: 'Câu hỏi 7–8',
    ratio: 40,
    widget: TableExplore,
    content:
      '> **7.** Give the **names** of two elements in the same period as magnesium.\n' +
      '> **8.** Give the **symbols** of two elements in the same group as helium.',
    contentVn:
      '> **7.** Viết **tên** hai nguyên tố cùng chu kì với magnesium.\n' +
      '> **8.** Viết **kí hiệu** hai nguyên tố cùng nhóm với helium.',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**7.** Any two: sodium, aluminium, silicon, phosphorus, sulfur, chlorine, argon\n**8.** Ne and Ar',
      answerVn: '**7.** Hai trong số: sodium, aluminium, silicon, phosphorus, sulfur, chlorine, argon\n**8.** Ne và Ar',
    },
  },

  // ── CLOSE ──────────────────────────────────────────────────────────────────
  // 28. Checklist (the book's summary checklist)
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
    content: '> Check your notebook: **8 key words** and **1 drawing**.',
    contentVn: '> Kiểm tra vở: **8 từ khóa** và **1 hình vẽ**.',
    items: [
      { text: 'Explain what an **atom** and an **element** are.', textVn: 'Giải thích **nguyên tử** và **nguyên tố** là gì.' },
      { text: 'Name **20 elements** and their symbols.', textVn: 'Gọi tên **20 nguyên tố** và kí hiệu của chúng.' },
      { text: 'Use **symbols** to write elements.', textVn: 'Dùng **kí hiệu** để viết các nguyên tố.' },
      { text: 'Describe the **Periodic Table**.', textVn: 'Mô tả **Bảng tuần hoàn**.' },
    ],
  },

  // 29. Exit question
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    title: 'Lesson Complete!',
    titleVn: 'Hoàn thành bài học!',
    subtitle: 'Exit question: write the symbols for **carbon**, **calcium** and **chlorine**.',
    subtitleVn: 'Câu hỏi ra về: viết kí hiệu của **carbon**, **calcium** và **chlorine**.',
  },
]
