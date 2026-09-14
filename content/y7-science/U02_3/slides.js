// content/y7-science/U02_3/slides.js
// Year 7 Science · 2.3 Explaining changes of state.
//
// 2.2a named the five changes. This lesson explains WHY each one happens, using
// particle theory. The content is pages 41–43 of the Learner's Book: heating
// solids, melting, boiling, cooling gases, condensing, freezing — all explained
// through energy transfer and attractive forces.
//
// KEPT LEAN. The book repeats one chain of reasoning five times with small
// variations. This deck teaches the chain once (with melting), then the widget
// drills it for all five. No filler slides.
//
// THE COPY-DOWN PLAN. Three items:
//   · four key words (heat energy, transferred, attractive force, expand)
//   · the particle explanation for melting (the pattern they reuse)
//   · the heating-to-melting diagram — the deck's one Draw This
//
// Source: Learner's Book Unit 2.3, pages 41–43.
import { DIAGRAMS } from './diagrams.js'
import { ExplainIt } from './widgets.jsx'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const HEAT = '#c25e12'

export const slides = [
  // ── 1. Title ────────────────────────────────────────────────────────────────
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Atom',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    eyebrow: '2.3 Explaining changes of state',
    eyebrowVn: '2.3 Giải thích sự chuyển thể',
    title: 'Explaining Changes of State',
    titleVn: 'Giải thích sự chuyển thể',
    card: {
      icon: 'Pencil',
      badge: 'Starter',
      badgeVn: 'Khởi động',
      text: 'Write the **five changes of state** and say each one as **from [state] to [state]**. Two minutes, from memory.',
      textVn: 'Viết **năm sự chuyển thể** và nói mỗi cái là **from [trạng thái] to [trạng thái]**. Hai phút, từ trí nhớ.',
    },
  },

  // ── 2. The question ─────────────────────────────────────────────────────────
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'You know WHAT happens. Today:',
    eyebrowVn: 'Em biết điều gì xảy ra. Hôm nay:',
    title: 'Why?',
    titleVn: 'Tại sao?',
    text: 'You can name melting, freezing, boiling, evaporation and condensation.',
    textVn: 'Em biết tên nóng chảy, đông đặc, sôi, bay hơi và ngưng tụ.',
    sub: 'But can you explain **why** each one happens — using the particles?',
    subVn: 'Nhưng em có thể giải thích **tại sao** mỗi thứ xảy ra — bằng các hạt không?',
  },

  // ── 3. Key words ────────────────────────────────────────────────────────────
  {
    layout: 'callout',
    accent: HEAT,
    icon: 'BookOpen',
    eyebrow: 'Four words you need today',
    eyebrowVn: 'Bốn từ em cần hôm nay',
    title: 'New Vocabulary',
    titleVn: 'Từ vựng mới',
    content:
      '**Heat energy** — the energy that makes particles move.\n' +
      '**Transferred** — moved from one place to another.\n' +
      '**Attractive force** — the force that holds particles together.\n' +
      '**Expand** — get bigger.',
    contentVn:
      '**Nhiệt năng (heat energy)** — năng lượng làm các hạt chuyển động.\n' +
      '**Truyền (transferred)** — di chuyển từ nơi này sang nơi khác.\n' +
      '**Lực hút (attractive force)** — lực giữ các hạt với nhau.\n' +
      '**Giãn nở (expand)** — to ra.',
    notes: [
      {
        tone: 'write',
        text: '**Heat energy:** the energy that makes particles move.\n**Transferred:** moved from one place to another.\n**Attractive force:** the force that holds particles together.\n**Expand:** to get bigger.',
        textVn: '**Nhiệt năng (heat energy):** năng lượng làm các hạt chuyển động.\n**Truyền (transferred):** di chuyển từ nơi này sang nơi khác.\n**Lực hút (attractive force):** lực giữ các hạt với nhau.\n**Giãn nở (expand):** to ra.',
      },
    ],
  },

  // ── 4. The pattern: heating → expanding → melting ───────────────────────────
  {
    layout: 'showcase',
    accent: HEAT,
    icon: 'Flame',
    eyebrow: 'Rulers out — this is the diagram you keep',
    eyebrowVn: 'Lấy thước ra — đây là sơ đồ em giữ lại',
    title: 'Heating a Solid Until It Melts',
    titleVn: 'Đun nóng chất rắn cho đến khi nóng chảy',
    inlineSvg: DIAGRAMS.HEATING_TO_MELTING,
    drawThis: true,
    caption: 'Copy the three panels and the arrows. This is the pattern you will use for every explanation today.',
    captionVn: 'Chép ba ô và các mũi tên. Đây là khuôn mẫu em sẽ dùng cho mọi giải thích hôm nay.',
  },

  // ── 5. The melting explanation in words ──────────────────────────────────────
  {
    layout: 'callout',
    accent: HEAT,
    icon: 'Droplets',
    eyebrow: 'Say it, then write it',
    eyebrowVn: 'Nói ra, rồi viết lại',
    title: 'The Particle Explanation for Melting',
    titleVn: 'Giải thích bằng hạt cho sự nóng chảy',
    content:
      '**Heat energy** is transferred to the particles. The particles **vibrate more**. They take up more space — the solid **expands**.\n\n' +
      'If enough heat is transferred, the particles vibrate so much that the **attractive forces** can no longer hold them in a fixed pattern. They can slide past each other. The solid **melts** into a liquid.',
    contentVn:
      '**Nhiệt năng** được truyền đến các hạt. Các hạt **rung động nhiều hơn**. Chúng chiếm nhiều chỗ hơn — chất rắn **giãn nở**.\n\n' +
      'Nếu đủ nhiệt được truyền, các hạt rung động nhiều đến mức **lực hút** không còn giữ được chúng trong trật tự cố định. Chúng có thể trượt qua nhau. Chất rắn **nóng chảy** thành chất lỏng.',
    notes: [
      {
        tone: 'write',
        text: '**Why does a solid melt?** Heat energy is transferred to the particles. They vibrate more and more. The attractive forces can no longer hold them in a fixed pattern. The particles slide past each other. The solid melts.',
        textVn: '**Tại sao chất rắn nóng chảy?** Nhiệt năng được truyền đến các hạt. Chúng rung động ngày càng nhiều. Lực hút không còn giữ được chúng trong trật tự cố định. Các hạt trượt qua nhau. Chất rắn nóng chảy.',
      },
    ],
  },

  // ── 6. Boiling + the reverse ────────────────────────────────────────────────
  {
    layout: 'callout',
    accent: TEAL,
    icon: 'Repeat',
    eyebrow: 'The same pattern, every time',
    eyebrowVn: 'Cùng một khuôn mẫu, mỗi lần',
    title: 'Boiling, Condensing and Freezing',
    titleVn: 'Sôi, ngưng tụ và đông đặc',
    content:
      '**Boiling:** the particles in the liquid move faster and faster. Some have enough energy to **break** the attractive forces. They escape as a gas.\n\n' +
      '**Cooling is the reverse.** Take energy **away** and the particles slow down. Slow enough and the forces pull them back together — a gas **condenses** to a liquid, a liquid **freezes** to a solid.',
    contentVn:
      '**Sôi:** các hạt trong chất lỏng chuyển động ngày càng nhanh. Một số có đủ năng lượng để **phá vỡ** lực hút. Chúng thoát ra dưới dạng khí.\n\n' +
      '**Làm lạnh là ngược lại.** Lấy năng lượng **đi** thì các hạt chậm lại. Chậm đủ thì lực hút kéo chúng lại — khí **ngưng tụ** thành lỏng, lỏng **đông đặc** thành rắn.',
  },

  // ── 7. The activity ─────────────────────────────────────────────────────────
  {
    layout: 'game',
    title: 'Explain It With Particles',
    titleVn: 'Giải thích bằng hạt',
    widget: ExplainIt,
  },

  // ── 8. Book questions ───────────────────────────────────────────────────────
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Learner\'s Book, page 43 · Questions 1–3',
    eyebrowVn: 'Sách học sinh, trang 43 · Câu hỏi 1–3',
    title: 'Use the Particles to Explain',
    titleVn: 'Dùng hạt để giải thích',
    ratio: 56,
    content:
      '> **1.** Explain why a solid expands when it is heated.\n' +
      '> **2.** Use particle theory to explain why solids and liquids cannot be compressed (squashed into a smaller volume).\n' +
      '> **3.** Use particle theory to explain why liquids and gases can flow.',
    contentVn:
      '> **1.** Giải thích vì sao chất rắn giãn nở khi bị đun nóng.\n' +
      '> **2.** Dùng lý thuyết hạt giải thích vì sao chất rắn và chất lỏng không thể bị nén (ép vào thể tích nhỏ hơn).\n' +
      '> **3.** Dùng lý thuyết hạt giải thích vì sao chất lỏng và chất khí có thể chảy.',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer:
        '**1.** Heat energy is transferred to the particles. They vibrate more and take up more space, so the solid gets bigger (expands).\n' +
        '**2.** In solids and liquids the particles are already touching. There is no space between them to squash into, so they cannot be compressed.\n' +
        '**3.** In liquids the particles can slide past each other. In gases the particles are far apart and move freely. Both can flow because the particles are not locked in a fixed pattern.',
      answerVn:
        '**1.** Nhiệt năng được truyền đến các hạt. Chúng rung động nhiều hơn và chiếm nhiều chỗ hơn, nên chất rắn to ra (giãn nở).\n' +
        '**2.** Trong chất rắn và lỏng, các hạt đã chạm nhau. Không có khoảng trống giữa chúng để ép vào, nên không thể bị nén.\n' +
        '**3.** Trong chất lỏng, các hạt có thể trượt qua nhau. Trong chất khí, các hạt ở xa nhau và chuyển động tự do. Cả hai đều có thể chảy vì các hạt không bị khóa trong trật tự cố định.',
    },
  },

  // ── 9. Recap ────────────────────────────────────────────────────────────────
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
      '> Your notebook should have the **four key words**, the **particle explanation for melting**, and the **heating-to-melting diagram**. Check.',
    contentVn:
      '> Trong vở phải có **bốn từ khóa**, **giải thích bằng hạt cho sự nóng chảy**, và **sơ đồ đun nóng đến nóng chảy**. Hãy kiểm tra.',
    items: [
      { text: 'Explain why a solid **expands** when heated.', textVn: 'Giải thích vì sao chất rắn **giãn nở** khi bị đun nóng.' },
      { text: 'Explain why a solid **melts** — using the particles.', textVn: 'Giải thích vì sao chất rắn **nóng chảy** — dùng các hạt.' },
      { text: 'Explain why a liquid **boils** — using the particles.', textVn: 'Giải thích vì sao chất lỏng **sôi** — dùng các hạt.' },
      { text: 'Explain condensing and freezing as the **reverse**.', textVn: 'Giải thích ngưng tụ và đông đặc là quá trình **ngược lại**.' },
    ],
  },

  // ── 10. End ─────────────────────────────────────────────────────────────────
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    title: 'Lesson Complete!',
    titleVn: 'Hoàn thành bài học!',
    subtitle: 'You can explain every change of state using particle theory. Exit question: a metal bridge is **longer in summer** than in winter. Use particle theory to explain why.',
    subtitleVn: 'Em có thể giải thích mọi sự chuyển thể bằng lý thuyết hạt. Câu hỏi ra về: một cầu kim loại **dài hơn vào mùa hè** so với mùa đông. Dùng lý thuyết hạt giải thích vì sao.',
  },
]
