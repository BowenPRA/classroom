// content/y7-science/U02_6/slides.js
// Year 7 Science · 2.6 Compounds and formulae. Wednesday 16 September 2026.
// Source: Learner's Book pages 57–63.
//
// Built to the exemplars (Science 2.5, Maths 2.3): short sentences, one idea
// each, and no slide body that repeats its write note.
//
// THE SHAPE: yesterday the class learned what an element is. Today opens on two
// dangerous elements, a hand vote on whether you would eat them joined
// together, and the answer that they already have — salt. Then the key words,
// the naming rules (-ide, -ate, mono, di), particle diagrams and formulae, with
// the book's questions right after the section that answers them.
//
// COPY-DOWN: 8 written panels (compound · bonding · sodium chloride · new
// properties · naming -ide · naming -ate · mono and di · formula) and the Draw
// This of four particles. The book's key words are bonding, compound, formula,
// sodium chloride.

import { DIAGRAMS } from './diagrams.js'
import { NameCompound, FormulaReader, ElementOrCompound } from './widgets.jsx'
import saltfield from './images/saltfield.jpg'
import coppersulfate from './images/coppersulfate.jpg'
import halong from './images/halong.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const BLUE = '#1a5fa8'
const RED = '#c8102e'

export const slides = [
  // ── 1. Hero + starter (the book's Getting Started) ─────────────────────────
  {
    layout: 'hero',
    color: TEAL,
    icon: 'FlaskConical',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    date: '16 Sep 2026',
    eyebrow: '2.6 Compounds and formulae',
    eyebrowVn: '2.6 Hợp chất và công thức hóa học',
    title: 'Compounds & Formulae',
    titleVn: 'Hợp chất & Công thức',
    card: {
      icon: 'Pencil',
      badge: 'Starter · 3 minutes',
      badgeVn: 'Khởi động · 3 phút',
      text: 'Test your partner on the symbols. You say **sodium**. They say **Na**.',
      textVn: 'Kiểm tra bạn bên cạnh về kí hiệu. Em nói **sodium**. Bạn nói **Na**.',
    },
  },

  // ── ELEMENTS JOIN ──────────────────────────────────────────────────────────
  // 2. Two dangerous elements
  {
    layout: 'showcase',
    accent: RED,
    icon: 'AlertTriangle',
    eyebrow: 'Two elements',
    eyebrowVn: 'Hai nguyên tố',
    title: 'Two Dangerous Elements',
    titleVn: 'Hai nguyên tố nguy hiểm',
    inlineSvg: DIAGRAMS.TWO_DANGERS,
    caption: 'Mr Bowen bonds them together.',
    captionVn: 'Thầy Bowen cho chúng liên kết với nhau. (sodium = natri, chlorine = clo)',
  },

  // 3. Vote. No answer on this slide.
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowVn: 'Biểu quyết bằng một tay',
    title: 'Would You Eat It?',
    titleVn: 'Em có dám ăn không?',
    text: 'Sodium + chlorine, bonded. Would you eat it?',
    textVn: 'Natri + clo, liên kết với nhau. Em có ăn không?',
    columns: [
      { heading: 'A · left hand up', headingVn: 'A · giơ tay trái', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_YES },
      { heading: 'B · right hand up', headingVn: 'B · giơ tay phải', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_NO },
    ],
  },

  // 4. The answer
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Sparkles',
    eyebrow: 'Book page 58',
    eyebrowVn: 'Sách trang 58',
    title: 'You Already Eat It',
    titleVn: 'Em đã ăn nó rồi',
    inlineSvg: DIAGRAMS.SALT_MADE,
    caption: '**Yes!** Sodium chloride is **salt**. You probably ate some today.',
    captionVn: '**Có!** Sodium chloride là **muối ăn**. Có lẽ hôm nay em đã ăn rồi.',
  },

  // ── KEY WORDS ──────────────────────────────────────────────────────────────
  // 5. Compound
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Boxes',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Compound',
    titleVn: 'Hợp chất',
    ratio: 40,
    inlineSvg: DIAGRAMS.ELEMENT_COMPOUND,
    content: 'Remember: an **element** has only one kind of atom.',
    contentVn: 'Nhớ lại: một **nguyên tố** chỉ có một loại nguyên tử.',
    notes: [
      {
        tone: 'write',
        text: '**Compound:** a substance made of different kinds of atom bonded together.',
        textVn: '**Hợp chất (compound):** một chất gồm các loại nguyên tử khác nhau liên kết với nhau.',
      },
    ],
  },

  // 6. Bonding
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Atom',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Bonding',
    titleVn: 'Liên kết',
    ratio: 40,
    inlineSvg: DIAGRAMS.BONDING_REAL,
    content: 'A model kit shows atoms as balls.',
    contentVn: 'Bộ mô hình biểu diễn nguyên tử bằng các quả bóng.',
    notes: [
      {
        tone: 'write',
        text: '**Bonding:** atoms joining tightly together.',
        textVn: '**Liên kết (bonding):** các nguyên tử gắn chặt với nhau.',
      },
    ],
  },

  // 7. Sodium chloride, from a Vietnamese salt field
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Droplet',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Sodium Chloride',
    titleVn: 'Natri clorua',
    ratio: 45,
    image: saltfield,
    content: 'Phú Yên, Vietnam: salt from the sea.',
    contentVn: 'Phú Yên, Việt Nam: muối từ biển.',
    notes: [
      {
        tone: 'write',
        text: '**Sodium chloride:** the compound of sodium and chlorine. Its everyday name is **salt**.',
        textVn: '**Natri clorua (sodium chloride):** hợp chất của natri và clo. Tên thường gọi là **muối ăn**.',
      },
    ],
  },

  // 8. New properties
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Scale',
    eyebrow: 'Compare',
    eyebrowVn: 'So sánh',
    title: 'Totally New Properties',
    titleVn: 'Tính chất hoàn toàn mới',
    ratio: 40,
    inlineSvg: DIAGRAMS.NEW_PROPERTIES,
    notes: [
      {
        tone: 'write',
        text: 'A compound has **new properties**. It is not like the elements it is made from.',
        textVn: 'Hợp chất có **tính chất mới**. Nó không giống các nguyên tố tạo nên nó.',
      },
    ],
  },

  // 9. Book questions 1–2
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 59",
    eyebrowVn: 'Sách học sinh, trang 59',
    title: 'Questions 1–2',
    titleVn: 'Câu hỏi 1–2',
    content:
      '> Describe **two** ways sodium chloride is different from… **1.** sodium **2.** chlorine',
    contentVn:
      '> Nêu **hai** điểm sodium chloride khác với… **1.** sodium **2.** chlorine',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**1.** Sodium: shiny metal, not safe to eat. Salt: white crystals, safe to eat.\n**2.** Chlorine: yellow-green gas, poisonous. Salt: white solid, safe to eat.',
      answerVn: '**1.** Natri: kim loại sáng bóng, không ăn được. Muối: tinh thể trắng, ăn được.\n**2.** Clo: khí vàng lục, độc. Muối: chất rắn trắng, ăn được.',
    },
  },

  // ── NAMING ─────────────────────────────────────────────────────────────────
  // 10. Spot the change
  {
    layout: 'statement',
    accent: PURPLE,
    eyebrow: 'Look closely',
    eyebrowVn: 'Nhìn kỹ nhé',
    title: 'Spot the Change',
    titleVn: 'Tìm chỗ thay đổi',
    text: 'sodium + chlorine → sodium chloride',
    textVn: 'sodium + chlorine → sodium chloride',
    sub: 'One word changed. Which part?',
    subVn: 'Một từ đã thay đổi. Phần nào?',
    reveal: {
      label: 'Answer',
      labelVn: 'Đáp án',
      answer: 'chlor**ine** became chlor**ide**. The metal, sodium, stays the same.',
      answerVn: 'chlor**ine** thành chlor**ide**. Kim loại sodium giữ nguyên.',
    },
  },

  // 11. The -ide rule (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'PenLine',
    eyebrow: 'Book page 59',
    eyebrowVn: 'Sách trang 59',
    title: 'Naming Compounds',
    titleVn: 'Gọi tên hợp chất',
    ratio: 40,
    inlineSvg: DIAGRAMS.NAME_RULE,
    content: 'The name tells you the elements.',
    contentVn: 'Tên cho em biết các nguyên tố.',
    notes: [
      {
        tone: 'write',
        text: '**Naming a compound:** the metal comes first. The non-metal ends in **‑ide**.',
        textVn: '**Gọi tên hợp chất:** kim loại đứng trước. Phi kim có đuôi **‑ide**.',
      },
    ],
  },

  // 12. Book questions 3–6
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 59",
    eyebrowVn: 'Sách học sinh, trang 59',
    title: 'Questions 3–6',
    titleVn: 'Câu hỏi 3–6',
    content:
      '> Which **two** elements are combined in… **3.** sodium chloride? **4.** hydrogen sulfide? **5.** magnesium oxide?\n' +
      '> **6.** A compound of calcium and sulfur was named **sulfur calcium**. What is wrong? Write the correct name.',
    contentVn:
      '> Hai nguyên tố nào kết hợp trong… **3.** sodium chloride? **4.** hydrogen sulfide? **5.** magnesium oxide?\n' +
      '> **6.** Hợp chất của calcium và sulfur bị gọi là **sulfur calcium**. Sai ở đâu? Viết tên đúng.',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**3.** sodium, chlorine; **4.** hydrogen, sulfur; **5.** magnesium, oxygen; **6.** metal first, ‑ide ending: **calcium sulfide**',
      answerVn: '**3.** sodium, chlorine; **4.** hydrogen, sulfur; **5.** magnesium, oxygen; **6.** kim loại trước, đuôi ‑ide: **calcium sulfide**',
    },
  },

  // 13. The -ate rule (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'PenLine',
    eyebrow: 'Book page 59',
    eyebrowVn: 'Sách trang 59',
    title: 'Names Ending in -ate',
    titleVn: 'Tên có đuôi -ate',
    ratio: 45,
    image: coppersulfate,
    content: 'Copper sulfate: copper, sulfur **and oxygen**.',
    contentVn: 'Copper sulfate (đồng sunfat): đồng, lưu huỳnh **và oxi**.',
    notes: [
      {
        tone: 'write',
        text: 'Two elements **plus oxygen**: the name often ends in **‑ate**.\ncalcium + carbon + oxygen → calcium carbonate',
        textVn: 'Hai nguyên tố **cộng với oxi**: tên thường có đuôi **‑ate**.\ncalcium + carbon + oxygen → calcium carbonate',
      },
    ],
  },

  // 14. Naming practice (widget)
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Say it, then press Show',
    eyebrowVn: 'Nói trước, rồi bấm Hiện',
    title: 'Name the Compound',
    titleVn: 'Gọi tên hợp chất',
    widget: NameCompound,
    caption: 'Yellow boxes are metals. Blue boxes are non-metals.',
    captionVn: 'Ô vàng là kim loại. Ô xanh là phi kim.',
  },

  // 15. Book questions 7–9, with Ha Long Bay
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 60",
    eyebrowVn: 'Sách học sinh, trang 60',
    title: 'Questions 7–9',
    titleVn: 'Câu hỏi 7–9',
    ratio: 55,
    image: halong,
    content:
      'Ha Long Bay\'s rocks are **calcium carbonate**.\n\n' +
      '> Which **three** elements are combined in… **7.** calcium nitrate? **8.** magnesium carbonate? **9.** lithium sulfate?',
    contentVn:
      'Đá ở vịnh Hạ Long là **calcium carbonate** (canxi cacbonat).\n\n' +
      '> Ba nguyên tố nào kết hợp trong… **7.** calcium nitrate? **8.** magnesium carbonate? **9.** lithium sulfate?',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**7.** calcium, nitrogen, oxygen; **8.** magnesium, carbon, oxygen; **9.** lithium, sulfur, oxygen',
      answerVn: '**7.** calcium, nitrogen, oxygen; **8.** magnesium, carbon, oxygen; **9.** lithium, sulfur, oxygen',
    },
  },

  // ── HOW MANY ATOMS ─────────────────────────────────────────────────────────
  // 16. Mono and di (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'MessageSquare',
    eyebrow: 'English check',
    eyebrowVn: 'Kiểm tra tiếng Anh',
    title: 'Mono and Di',
    titleVn: 'Mono và Di',
    ratio: 40,
    inlineSvg: DIAGRAMS.PREFIXES,
    content: 'Count the oxygen atoms.',
    contentVn: 'Đếm số nguyên tử oxi.',
    notes: [
      {
        tone: 'write',
        text: '**mono** = one, **di** = two\ncarbon monoxide = CO, carbon dioxide = CO₂',
        textVn: '**mono** = một, **di** = hai\ncarbon monoxide = CO, carbon dioxide = CO₂',
      },
    ],
  },

  // 17. Vote. No answer on this slide.
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowVn: 'Biểu quyết bằng một tay',
    title: 'Is Oxygen a Compound?',
    titleVn: 'Oxi có phải hợp chất?',
    text: 'Oxygen, O₂, has two atoms. Element or compound?',
    textVn: 'Oxi, O₂, có hai nguyên tử. Nguyên tố hay hợp chất?',
    columns: [
      { heading: 'A · left hand up', headingVn: 'A · giơ tay trái', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_ELEMENT },
      { heading: 'B · right hand up', headingVn: 'B · giơ tay phải', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_COMPOUND },
    ],
  },

  // 18. Draw This: four particles (p. 60)
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw all four, with labels',
    eyebrowVn: 'Vẽ cả bốn, có ghi chú',
    title: 'Four Particles',
    titleVn: 'Bốn loại hạt',
    inlineSvg: DIAGRAMS.PARTICLES,
    drawThis: true,
    caption: '**O₂ is an element**: both atoms are oxygen. The other three are compounds.',
    captionVn: '**O₂ là nguyên tố**: cả hai nguyên tử đều là oxi. Ba chất còn lại là hợp chất.',
  },

  // 19. The same four, photographed
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'ScanEye',
    eyebrow: 'The drawings, for real',
    eyebrowVn: 'Hình vẽ, ngoài đời thật',
    title: 'The Particles, for Real',
    titleVn: 'Các hạt ngoài đời thật',
    inlineSvg: DIAGRAMS.PARTICLES_REAL,
    caption: 'Dry ice is frozen carbon dioxide. Cooking gas is mostly methane.',
    captionVn: 'Đá khô là cacbon đioxit đông lạnh. Khí gas nấu ăn chủ yếu là metan.',
  },

  // 20. Formula (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'PenLine',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Formula',
    titleVn: 'Công thức hóa học',
    ratio: 40,
    inlineSvg: DIAGRAMS.FORMULA_READ,
    content: 'Salt has a formula too: **NaCl**.',
    contentVn: 'Muối ăn cũng có công thức: **NaCl**.',
    notes: [
      {
        tone: 'write',
        text: '**Formula:** the symbols of the elements in a compound.\nThe small number tells you how many atoms. No number means one.',
        textVn: '**Công thức (formula):** kí hiệu của các nguyên tố trong hợp chất.\nSố nhỏ cho biết có bao nhiêu nguyên tử. Không có số nghĩa là một.',
      },
    ],
  },

  // 21. Read a formula (widget)
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Count before you press',
    eyebrowVn: 'Đếm trước khi bấm',
    title: 'Read the Formula',
    titleVn: 'Đọc công thức',
    widget: FormulaReader,
    caption: 'Careful: **C** is carbon. **Ca** is calcium.',
    captionVn: 'Cẩn thận: **C** là cacbon. **Ca** là canxi.',
  },

  // 22. Game: left hand element, right hand compound
  {
    layout: 'game',
    title: 'Element or Compound?',
    titleVn: 'Nguyên tố hay hợp chất?',
    widget: ElementOrCompound,
  },

  // ── BOOK QUESTIONS 10–17 ───────────────────────────────────────────────────
  // 23. Questions 10–11
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 62",
    eyebrowVn: 'Sách học sinh, trang 62',
    title: 'Questions 10–11',
    titleVn: 'Câu hỏi 10–11',
    content:
      '> **10.** Element or compound? Explain. K · O₂ · NaCl · Al · Ca · CaCl₂ · H₂\n' +
      '> **11.** SO₂ is sulfur dioxide. **a** How many elements? **b** How many oxygen atoms per sulfur atom?',
    contentVn:
      '> **10.** Nguyên tố hay hợp chất? Giải thích. K · O₂ · NaCl · Al · Ca · CaCl₂ · H₂\n' +
      '> **11.** SO₂ là sulfur dioxide. **a** Có bao nhiêu nguyên tố? **b** Mỗi nguyên tử lưu huỳnh có mấy nguyên tử oxi?',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**10.** Elements (one kind of atom): K, O₂, Al, Ca, H₂. Compounds: NaCl, CaCl₂. **11.** **a** 2, **b** 2',
      answerVn: '**10.** Nguyên tố (một loại nguyên tử): K, O₂, Al, Ca, H₂. Hợp chất: NaCl, CaCl₂. **11.** **a** 2, **b** 2',
    },
  },

  // 24. Questions 12–13
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 62",
    eyebrowVn: 'Sách học sinh, trang 62',
    title: 'Questions 12–13',
    titleVn: 'Câu hỏi 12–13',
    content:
      '> **12.** Water is H₂O. **a** Which two elements? **b** What does the formula tell you about the numbers of atoms?\n' +
      '> **13.** CO is carbon **mon**oxide. Why not just "carbon oxide"?',
    contentVn:
      '> **12.** Nước là H₂O. **a** Hai nguyên tố nào? **b** Công thức cho biết gì về số nguyên tử?\n' +
      '> **13.** CO là carbon **mon**oxide. Vì sao không gọi là "carbon oxide"?',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**12.** **a** hydrogen, oxygen; **b** two hydrogen atoms, one oxygen atom. **13.** Mono = one oxygen atom, unlike carbon **di**oxide.',
      answerVn: '**12.** **a** hiđro, oxi; **b** hai nguyên tử hiđro, một nguyên tử oxi. **13.** Mono = một nguyên tử oxi, khác carbon **di**oxide.',
    },
  },

  // 25. Questions 14–17
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 62",
    eyebrowVn: 'Sách học sinh, trang 62',
    title: 'Questions 14–17',
    titleVn: 'Câu hỏi 14–17',
    content:
      '> **14.** Name **a** MgO **b** NaCl **c** CaCl₂\n' +
      '> **15.** NaOH and KOH are hydroxides. Which two elements are in all hydroxides?\n' +
      '> **16.** Name LiOH. **17.** How many elements are in LiOH?',
    contentVn:
      '> **14.** Gọi tên **a** MgO **b** NaCl **c** CaCl₂\n' +
      '> **15.** NaOH và KOH là hydroxide. Hai nguyên tố nào có trong mọi hydroxide?\n' +
      '> **16.** LiOH tên là gì? **17.** LiOH có bao nhiêu nguyên tố?',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**14.** magnesium oxide, sodium chloride, calcium chloride; **15.** oxygen, hydrogen; **16.** lithium hydroxide; **17.** 3',
      answerVn: '**14.** magnesium oxide, sodium chloride, calcium chloride; **15.** oxi và hiđro; **16.** lithium hydroxide; **17.** 3',
    },
  },

  // ── CLOSE ──────────────────────────────────────────────────────────────────
  // 26. Homework: the book's Activity 2.6.1
  {
    layout: 'callout',
    accent: RED,
    icon: 'Home',
    eyebrow: 'Activity 2.6.1',
    eyebrowVn: 'Hoạt động 2.6.1',
    title: 'Make the Models',
    titleVn: 'Làm mô hình',
    content: 'Make paper models of **five** compounds from today.',
    contentVn: 'Làm mô hình giấy của **năm** hợp chất học hôm nay.',
    notes: [
      {
        tone: 'homework',
        badge: 'Homework',
        badgeVn: 'Bài tập về nhà',
        icon: 'Pencil',
        text: '1. Cut out coloured circles: one colour for each element.\n2. Write the symbol on each atom.\n3. Stick them on paper to make the particle.\n4. Write the name and the formula underneath.\nAlso: finish Questions 1–17.',
        textVn: '1. Cắt các hình tròn màu: mỗi nguyên tố một màu.\n2. Viết kí hiệu lên mỗi nguyên tử.\n3. Dán lên giấy để tạo thành hạt.\n4. Viết tên và công thức bên dưới.\nVà: làm xong Câu hỏi 1–17.',
      },
    ],
  },

  // 27. Checklist (the book's summary checklist)
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
    content: '> Check your notebook: **8 written panels** and **1 drawing**.',
    contentVn: '> Kiểm tra vở: **8 khung ghi chép** và **1 hình vẽ**.',
    items: [
      { text: 'Explain the difference between an **element** and a **compound**.', textVn: 'Giải thích sự khác nhau giữa **nguyên tố** và **hợp chất**.' },
      { text: '**Name** compounds: -ide and -ate.', textVn: '**Gọi tên** hợp chất: -ide và -ate.' },
      { text: 'Say what **mono** and **di** mean.', textVn: 'Nói được **mono** và **di** nghĩa là gì.' },
      { text: 'Read a **formula**: which elements, how many atoms.', textVn: 'Đọc **công thức**: nguyên tố nào, bao nhiêu nguyên tử.' },
    ],
  },

  // 28. Exit question
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    title: 'Lesson Complete!',
    titleVn: 'Hoàn thành bài học!',
    subtitle: 'Exit question: **CaCO₃**. Which elements? How many atoms?',
    subtitleVn: 'Câu hỏi ra về: **CaCO₃**. Những nguyên tố nào? Bao nhiêu nguyên tử?',
  },
]
