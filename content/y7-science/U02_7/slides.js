// content/y7-science/U02_7/slides.js
// Year 7 Science · 2.7 Compounds and mixtures. Thursday 17 September 2026.
// Source: Learner's Book pages 64–69.
//
// Built to the exemplars (Science 2.5, Maths 2.3): short sentences, one idea
// each, and no slide body that repeats its write note.
//
// THE SHAPE: yesterday the class bonded elements into compounds. Today the
// same two elements, iron and sulfur, are first only STIRRED (a mixture: a
// magnet pulls the iron out) and then HEATED (a compound: the magnet does
// nothing). Each result is voted on, left hand / right hand, before it is
// shown. There is no lab kit, so the heating is a downloaded video. Then the
// book's two everyday mixtures, air and water, each with its questions.
//
// COPY-DOWN: 10 written panels (filings · mixture · mixture vs compound ×2 ·
// composition · natural emissions · pure · mineral · evaporating basin) and
// the Draw This of iron and sulfur, mixed then bonded. The book's key words
// are composition, evaporating basin, filings, mineral, mixture, natural
// emissions, pipe-clay triangle and pure; the pipe-clay triangle is never used
// in the section, so it is left to the plan.

import { DIAGRAMS } from './diagrams.js'
import { IronSulfurClip, MixtureOrCompound } from './widgets.jsx'
import filings from './images/filings.jpg'
import ijen from './images/ijen.jpg'
import magnet from './images/magnet.jpg'
import ironsulfide from './images/ironsulfide.jpg'
import volcano from './images/volcano.jpg'
import traffic from './images/traffic.jpg'
import basin from './images/basin.jpg'
import kettle from './images/kettle.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const BLUE = '#1a5fa8'
const RED = '#c8102e'
const GREEN = '#4a8b23'

export const slides = [
  // ── 1. Hero + starter (the book's Getting Started) ─────────────────────────
  {
    layout: 'hero',
    color: TEAL,
    icon: 'FlaskConical',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    date: '17 Sep 2026',
    eyebrow: '2.7 Compounds and mixtures',
    eyebrowVn: '2.7 Hợp chất và hỗn hợp',
    title: 'Compounds & Mixtures',
    titleVn: 'Hợp chất & Hỗn hợp',
    card: {
      icon: 'Pencil',
      badge: 'Starter · element or compound?',
      badgeVn: 'Khởi động · nguyên tố hay hợp chất?',
      text: 'nitrogen · carbon dioxide · calcium chloride · sodium · **O₂** · **CaO** · **CH₄** · **H₂O** · **K**',
      textVn: 'nitrogen · carbon dioxide · calcium chloride · sodium · **O₂** · **CaO** · **CH₄** · **H₂O** · **K**',
    },
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**Elements:** nitrogen, sodium, O₂, K\n**Compounds:** carbon dioxide, calcium chloride, CaO, CH₄, H₂O',
      answerVn: '**Nguyên tố:** nitrogen, sodium, O₂, K\n**Hợp chất:** carbon dioxide, calcium chloride, CaO, CH₄, H₂O',
    },
  },

  // ── MIXED ──────────────────────────────────────────────────────────────────
  // 2. The two elements, photographed
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'Boxes',
    eyebrow: 'Book page 65',
    eyebrowVn: 'Sách trang 65',
    title: 'Iron and Sulfur',
    titleVn: 'Sắt và lưu huỳnh',
    columns: [
      {
        heading: 'Iron · magnetic',
        headingVn: 'Sắt · bị nam châm hút',
        accent: BLUE,
        icon: 'Hammer',
        image: filings,
        notes: [
          {
            tone: 'write',
            text: '**Filings:** very small pieces of metal.',
            textVn: '**Mạt (filings):** những mẩu kim loại rất nhỏ.',
          },
        ],
      },
      {
        heading: 'Sulfur · not magnetic',
        headingVn: 'Lưu huỳnh · không bị nam châm hút',
        accent: ORANGE,
        icon: 'Flame',
        image: ijen,
        caption: 'Sulfur from a volcano in Indonesia.',
        captionVn: 'Lưu huỳnh lấy từ một ngọn núi lửa ở Indonesia.',
      },
    ],
  },

  // 3. Vote. No answer on this slide.
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowVn: 'Biểu quyết bằng một tay',
    title: 'Stir Them Together',
    titleVn: 'Khuấy chúng lại với nhau',
    text: 'Iron + sulfur, stirred. Can a magnet pull the iron out?',
    textVn: 'Sắt + lưu huỳnh, khuấy đều. Nam châm có hút sắt ra được không?',
    columns: [
      { heading: 'A · left hand up', headingVn: 'A · giơ tay trái', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_YES },
      { heading: 'B · right hand up', headingVn: 'B · giơ tay phải', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_NO },
    ],
  },

  // 4. The answer: yes. Mixture (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Boxes',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Mixture',
    titleVn: 'Hỗn hợp',
    ratio: 40,
    image: magnet,
    content: '**Yes!** The iron is still iron. The sulfur is still sulfur.',
    contentVn: '**Có!** Sắt vẫn là sắt. Lưu huỳnh vẫn là lưu huỳnh.',
    notes: [
      {
        tone: 'write',
        text: '**Mixture:** different substances mixed together, but **not bonded**.',
        textVn: '**Hỗn hợp (mixture):** các chất khác nhau trộn lẫn với nhau, nhưng **không liên kết**.',
      },
    ],
  },

  // ── HEATED ─────────────────────────────────────────────────────────────────
  // 5. Vote. No answer on this slide.
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowVn: 'Biểu quyết bằng một tay',
    title: 'Now Heat Them',
    titleVn: 'Bây giờ đun nóng',
    text: 'Heat the mixture. Can a magnet **still** pull the iron out?',
    textVn: 'Đun nóng hỗn hợp. Nam châm **vẫn** hút sắt ra được không?',
    columns: [
      { heading: 'A · left hand up', headingVn: 'A · giơ tay trái', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_YES },
      { heading: 'B · right hand up', headingVn: 'B · giơ tay phải', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_NO },
    ],
  },

  // 6. The video: iron and sulfur heated
  {
    layout: 'showcase',
    accent: RED,
    icon: 'Flame',
    eyebrow: 'Book page 66 · watch closely',
    eyebrowVn: 'Sách trang 66 · xem kỹ nhé',
    title: 'Heating Iron and Sulfur',
    titleVn: 'Đun nóng sắt và lưu huỳnh',
    widget: IronSulfurClip,
    caption: 'What colour is it **before**? What colour is it **after**?',
    captionVn: 'Trước khi đun nó màu gì? **Sau** khi đun nó màu gì?',
  },

  // 7. The answer: no. Iron sulfide.
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Sparkles',
    eyebrow: 'A new substance',
    eyebrowVn: 'Một chất mới',
    title: 'Iron Sulfide',
    titleVn: 'Sắt sunfua',
    ratio: 45,
    image: ironsulfide,
    content:
      '**No!** The magnet does nothing.\n\n' +
      'The iron and sulfur are **bonded** now. They made a compound: **iron sulfide**.',
    contentVn:
      '**Không!** Nam châm không hút được.\n\n' +
      'Sắt và lưu huỳnh bây giờ đã **liên kết** với nhau. Chúng tạo thành hợp chất: **sắt sunfua (iron sulfide)**.',
  },

  // 8. Draw This: mixed, then bonded (p. 65)
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Draw both boxes, with labels',
    eyebrowVn: 'Vẽ cả hai khung, có ghi chú',
    title: 'Mixed, Then Bonded',
    titleVn: 'Trộn lẫn, rồi liên kết',
    inlineSvg: DIAGRAMS.MIX_COMPOUND,
    drawThis: true,
    caption: 'Use two colours: one for iron, one for sulfur.',
    captionVn: 'Dùng hai màu: một màu cho sắt, một màu cho lưu huỳnh.',
  },

  // 9. The difference (write, one panel per column)
  {
    layout: 'compare',
    accent: ORANGE,
    icon: 'Scale',
    eyebrow: 'The difference',
    eyebrowVn: 'Sự khác nhau',
    title: 'Mixture vs Compound',
    titleVn: 'Hỗn hợp và hợp chất',
    columns: [
      {
        heading: 'Mixture',
        headingVn: 'Hỗn hợp',
        accent: BLUE,
        icon: 'Boxes',
        notes: [
          {
            tone: 'write',
            badge: 'Mixture',
            badgeVn: 'Hỗn hợp',
            text: '**Not bonded.**\nEach substance **keeps** its properties.\n**Easy** to separate.',
            textVn: '**Không liên kết.**\nMỗi chất **giữ nguyên** tính chất.\n**Dễ** tách ra.',
          },
        ],
      },
      {
        heading: 'Compound',
        headingVn: 'Hợp chất',
        accent: ORANGE,
        icon: 'Atom',
        notes: [
          {
            tone: 'write',
            badge: 'Compound',
            badgeVn: 'Hợp chất',
            text: '**Bonded.**\nIt has **new** properties.\n**Hard** to separate.',
            textVn: '**Liên kết.**\nNó có tính chất **mới**.\n**Khó** tách ra.',
          },
        ],
      },
    ],
  },

  // 10. Book questions 1–2 (Think like a scientist)
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 67",
    eyebrowVn: 'Sách học sinh, trang 67',
    title: 'Questions 1–2',
    titleVn: 'Câu hỏi 1–2',
    content:
      '> **1.** Describe what it looks like: **a** the mixture of iron and sulfur **b** the iron sulfide\n' +
      '> **2.** Can a magnet remove the iron from iron sulfide? Explain.',
    contentVn:
      '> **1.** Mô tả vẻ ngoài của: **a** hỗn hợp sắt và lưu huỳnh **b** sắt sunfua\n' +
      '> **2.** Nam châm có tách được sắt ra khỏi sắt sunfua không? Giải thích.',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**1a** A yellow and grey powder. You can see bits of both. **1b** A dark grey or black solid.\n**2.** No. The iron is bonded to the sulfur. Iron sulfide is a compound, and it is not magnetic.',
      answerVn: '**1a** Bột màu vàng và xám. Nhìn thấy được cả hai chất. **1b** Chất rắn màu xám đen.\n**2.** Không. Sắt đã liên kết với lưu huỳnh. Sắt sunfua là hợp chất và không bị nam châm hút.',
    },
  },

  // ── AIR ────────────────────────────────────────────────────────────────────
  // 11. Question first
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Think',
    eyebrowVn: 'Suy nghĩ',
    title: 'What Is Air?',
    titleVn: 'Không khí là gì?',
    text: 'You breathe it all day.',
    textVn: 'Em hít thở nó cả ngày.',
    sub: 'Is air an **element**, a **compound** or a **mixture**?',
    subVn: 'Không khí là **nguyên tố**, **hợp chất** hay **hỗn hợp**?',
  },

  // 12. The particles of air, with book questions 1–3
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Wind',
    eyebrow: "Learner's Book, page 68",
    eyebrowVn: 'Sách học sinh, trang 68',
    title: 'Air Is a Mixture',
    titleVn: 'Không khí là hỗn hợp',
    ratio: 40,
    inlineSvg: DIAGRAMS.AIR,
    content:
      '> **1.** Which is the most common element in air?\n' +
      '> **2.** How many different kinds of substance can you see?\n' +
      '> **3.** Which is the least common compound?',
    contentVn:
      '> **1.** Nguyên tố nào có nhiều nhất trong không khí?\n' +
      '> **2.** Em thấy có bao nhiêu loại chất khác nhau?\n' +
      '> **3.** Hợp chất nào có ít nhất?',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**1.** nitrogen **2.** 4: nitrogen, oxygen, carbon dioxide, water **3.** carbon dioxide',
      answerVn: '**1.** nitơ **2.** 4: nitơ, oxi, cacbon đioxit, nước **3.** cacbon đioxit',
    },
  },

  // 13. Composition (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Target',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Composition',
    titleVn: 'Thành phần',
    ratio: 40,
    inlineSvg: DIAGRAMS.AIR_PIE,
    content: 'The water in air changes with the **weather**.',
    contentVn: 'Lượng hơi nước trong không khí thay đổi theo **thời tiết**.',
    notes: [
      {
        tone: 'write',
        text: '**Composition:** what a mixture is made of, and how much of each.\nAir: 78% nitrogen, 21% oxygen, 1% other gases.',
        textVn: '**Thành phần (composition):** hỗn hợp gồm những chất gì, và mỗi chất bao nhiêu.\nKhông khí: 78% nitơ, 21% oxi, 1% các khí khác.',
      },
    ],
  },

  // 14. What changes the air
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'CloudFog',
    eyebrow: 'Book page 67',
    eyebrowVn: 'Sách trang 67',
    title: 'The Air Changes',
    titleVn: 'Không khí thay đổi',
    columns: [
      {
        heading: 'From nature',
        headingVn: 'Từ tự nhiên',
        accent: GREEN,
        icon: 'Leaf',
        image: volcano,
        notes: [
          {
            tone: 'write',
            text: '**Natural emissions:** gases that nature gives out. Animals and plants give out carbon dioxide.',
            textVn: '**Khí thải tự nhiên (natural emissions):** các khí do tự nhiên thải ra. Động vật và thực vật thải ra cacbon đioxit.',
          },
        ],
      },
      {
        heading: 'From people',
        headingVn: 'Từ con người',
        accent: RED,
        icon: 'Flame',
        image: traffic,
        caption: 'Burning petrol gives out carbon dioxide too.',
        captionVn: 'Đốt xăng cũng thải ra cacbon đioxit.',
      },
    ],
  },

  // ── WATER ──────────────────────────────────────────────────────────────────
  // 15. Pure: the English check (write)
  {
    layout: 'statement',
    accent: ORANGE,
    icon: 'MessageSquare',
    eyebrow: 'English check',
    eyebrowVn: 'Kiểm tra tiếng Anh',
    title: 'Pure',
    titleVn: 'Tinh khiết',
    text: 'On a bottle, **pure** means clean. In science, it means **only one substance**.',
    textVn: 'Trên chai nước, **pure** nghĩa là sạch. Trong khoa học, nó nghĩa là **chỉ có một chất**.',
    notes: [
      {
        tone: 'write',
        text: '**Pure:** contains only one substance. Pure water is only water.',
        textVn: '**Tinh khiết (pure):** chỉ chứa một chất. Nước tinh khiết chỉ có nước.',
      },
    ],
  },

  // 16. Mineral water (write) + book question 4
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Droplets',
    eyebrow: "Learner's Book, page 68",
    eyebrowVn: 'Sách học sinh, trang 68',
    title: 'Mineral Water',
    titleVn: 'Nước khoáng',
    ratio: 45,
    inlineSvg: DIAGRAMS.MINERAL_LABEL,
    content: '> **4.** List the **three** most abundant minerals. (most abundant = the most)',
    contentVn: '> **4.** Kể tên **ba** khoáng chất có nhiều nhất. (most abundant = nhiều nhất)',
    notes: [
      {
        tone: 'write',
        text: '**Mineral:** a natural substance from rocks. Mineral water is a mixture: water and minerals.',
        textVn: '**Khoáng chất (mineral):** một chất tự nhiên từ đất đá. Nước khoáng là hỗn hợp: nước và khoáng chất.',
      },
    ],
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: 'bicarbonate (248), calcium (55), chloride (37)',
      answerVn: 'bicarbonate (248), calcium (55), chloride (37)',
    },
  },

  // 17. Vote. No answer on this slide.
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Hand',
    eyebrow: 'Vote with one hand',
    eyebrowVn: 'Biểu quyết bằng một tay',
    title: 'Is Tap Water Pure?',
    titleVn: 'Nước máy có tinh khiết không?',
    text: 'Water from the tap. Pure, or a mixture?',
    textVn: 'Nước từ vòi. Tinh khiết, hay hỗn hợp?',
    columns: [
      { heading: 'A · left hand up', headingVn: 'A · giơ tay trái', accent: BLUE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_PURE },
      { heading: 'B · right hand up', headingVn: 'B · giơ tay phải', accent: ORANGE, icon: 'Hand', inlineSvg: DIAGRAMS.ANS_MIXTURE },
    ],
  },

  // 18. Evaporating basin (write)
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Beaker',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khóa',
    title: 'Evaporating Basin',
    titleVn: 'Bát cô cạn',
    ratio: 40,
    image: basin,
    content: 'Boil the tap water away. Is anything **left**?',
    contentVn: 'Đun cho nước máy bay hơi hết. Có gì **còn lại** không?',
    notes: [
      {
        tone: 'write',
        text: '**Evaporating basin:** a dish for heating a liquid until the water evaporates.',
        textVn: '**Bát cô cạn (evaporating basin):** cái bát dùng để đun chất lỏng cho đến khi nước bay hơi hết.',
      },
    ],
  },

  // 19. The answer: something is left behind
  {
    layout: 'split',
    accent: TEAL,
    icon: 'ScanEye',
    eyebrow: 'Look in your kettle at home',
    eyebrowVn: 'Nhìn vào ấm đun nước ở nhà',
    title: 'Something Is Left Behind',
    titleVn: 'Có thứ còn lại',
    ratio: 40,
    image: kettle,
    content:
      '**A mixture!** A white solid is left.\n\n' +
      'It was **dissolved** in the water. It came from the rocks.',
    contentVn:
      '**Hỗn hợp!** Còn lại một chất rắn màu trắng.\n\n' +
      'Nó đã **hòa tan** trong nước. Nó đến từ đất đá.',
  },

  // 20. Book questions 1–5 (Think like a scientist, p. 69)
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: "Learner's Book, page 69",
    eyebrowVn: 'Sách học sinh, trang 69',
    title: 'Is Water Really a Mixture?',
    titleVn: 'Nước có thật là hỗn hợp?',
    content:
      '> **1.** Use particles to explain why the water evaporated. **2.** What was left in the basin?\n' +
      '> **3.** Where did it come from? **4.** Was the water pure, or a mixture? Explain. **5.** Why wear safety glasses?',
    contentVn:
      '> **1.** Dùng kiến thức về hạt để giải thích vì sao nước bay hơi. **2.** Cái gì còn lại trong bát?\n' +
      '> **3.** Nó đến từ đâu? **4.** Nước đó tinh khiết hay là hỗn hợp? Giải thích. **5.** Vì sao phải đeo kính bảo hộ?',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**1.** Heat gives the particles energy. They move fast enough to escape as a gas. **2.** a white solid (minerals) **3.** dissolved in the water, from rocks **4.** A mixture: something else was in it. **5.** Hot liquid can spit.',
      answerVn: '**1.** Nhiệt cho các hạt năng lượng. Chúng chuyển động đủ nhanh để thoát ra thành khí. **2.** chất rắn màu trắng (khoáng chất) **3.** hòa tan trong nước, từ đất đá **4.** Hỗn hợp: có chất khác trong đó. **5.** Chất lỏng nóng có thể bắn ra.',
    },
  },

  // 21. Game: left hand mixture, right hand compound
  {
    layout: 'game',
    title: 'Mixture or Compound?',
    titleVn: 'Hỗn hợp hay hợp chất?',
    widget: MixtureOrCompound,
  },

  // ── CLOSE ──────────────────────────────────────────────────────────────────
  // 22. Homework
  {
    layout: 'callout',
    accent: RED,
    icon: 'Home',
    eyebrow: 'At home',
    eyebrowVn: 'Ở nhà',
    title: 'Read a Water Label',
    titleVn: 'Đọc nhãn chai nước',
    notes: [
      {
        tone: 'homework',
        badge: 'Homework',
        badgeVn: 'Bài tập về nhà',
        icon: 'Pencil',
        text: '1. Find a bottle of water at home or in a shop.\n2. Copy the minerals from its label.\n3. Circle the **three** most abundant.\nNo minerals on the label? Write that down too.',
        textVn: '1. Tìm một chai nước ở nhà hoặc ở cửa hàng.\n2. Chép các khoáng chất trên nhãn.\n3. Khoanh tròn **ba** khoáng chất nhiều nhất.\nNhãn không ghi khoáng chất? Cũng ghi lại điều đó.',
      },
    ],
  },

  // 23. Checklist (the book's summary checklist)
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 1,
    eyebrow: 'Before you leave',
    eyebrowVn: 'Trước khi ra về',
    title: 'Can You Do These?',
    titleVn: 'Em làm được chưa?',
    content: '> Check your notebook: **10 written panels** and **1 drawing**.',
    contentVn: '> Kiểm tra vở: **10 khung ghi chép** và **1 hình vẽ**.',
    items: [
      { text: 'Tell a **compound** from a **mixture**.', textVn: 'Phân biệt **hợp chất** với **hỗn hợp**.' },
      { text: 'Explain the **difference** between a compound and a mixture.', textVn: 'Giải thích **sự khác nhau** giữa hợp chất và hỗn hợp.' },
      { text: 'Give **examples** of mixtures.', textVn: 'Nêu **ví dụ** về hỗn hợp.' },
    ],
  },

  // 24. Exit question
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    title: 'Lesson Complete!',
    titleVn: 'Hoàn thành bài học!',
    subtitle: 'Exit question: **salt water**. Mixture or compound? Why?',
    subtitleVn: 'Câu hỏi ra về: **nước muối**. Hỗn hợp hay hợp chất? Vì sao?',
  },
]
