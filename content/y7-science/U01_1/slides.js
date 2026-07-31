// content/y7-science/U01_1/slides.js
// Year 7 Science · 1.1 Cells — built on the flexible layout system to show its
// range: hero, split, statement, compare, stack, showcase, callout. Bilingual
// EN/VN, real micrographs (Wikimedia, credited in images/CREDITS.json) mixed
// with authored SVG diagrams, and two interactive widgets.
import { DIAGRAMS } from './diagrams.js'
import { ScaleChallengeWidget, CellExplorerWidget } from './widgets.jsx'
import onionCells from './images/onion-cells.jpg'
import cheekCells from './images/cheek-cells.jpg'
import chloroplasts from './images/chloroplasts.jpg'
import microscope from './images/microscope.jpg'

export const slides = [
  // 1 ─ Hook: title + starter task ─────────────────────────────────────────
  {
    layout: 'hero',
    color: 'bg-[#14b8a6]',
    icon: 'Microscope',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    eyebrow: '1.1 Cells',
    eyebrowVn: '1.1 Tế bào',
    date: '5 Aug 2026',
    title: 'Cells: The Building Blocks of Life',
    titleVn: 'Tế bào: Đơn vị cơ bản của sự sống',
    card: {
      icon: 'Hourglass',
      badge: 'Starter Task · Do this now',
      badgeVn: 'Nhiệm vụ khởi động · Làm ngay',
      text: 'Write a **complete sentence** describing how small a cell is. You must use a **measurement** (like mm) or a **real-world comparison**.',
      textVn: 'Viết một **câu hoàn chỉnh** mô tả tế bào nhỏ như thế nào. Em phải dùng một **đơn vị đo** (như mm) hoặc một **so sánh thực tế**.',
    },
  },

  // 2 ─ The Soda Can Challenge (derive the scale factor) ────────────────────
  {
    layout: 'split',
    accent: '#8b5cf6',
    icon: 'Ruler',
    title: 'The Soda Can Challenge',
    titleVn: 'Thử thách Lon Nước Ngọt',
    ratio: 45,
    content:
      'In **pairs**, take a soda can. Imagine a single cell from Mr Bowen’s body was magnified until it was as tall as that can.\n\n' +
      '> **1.** I will give you the real size of a cell.\n' +
      '> **2.** A soda can is about **120 mm** tall.\n' +
      '> **3.** Work out **how many times** we must magnify the cell to reach the can — that is the **scale factor**.\n\n' +
      'Then use it: **how tall** would Mr Bowen become?',
    contentVn:
      'Theo **cặp đôi**, hãy cầm một lon nước ngọt. Tưởng tượng một tế bào trong cơ thể thầy Bowen được phóng to bằng chiều cao của lon đó.\n\n' +
      '> **1.** Thầy sẽ cho em biết kích thước thật của một tế bào.\n' +
      '> **2.** Một lon nước ngọt cao khoảng **120 mm**.\n' +
      '> **3.** Hãy tính xem phải phóng to tế bào **bao nhiêu lần** để bằng cái lon — đó là **hệ số phóng đại**.\n\n' +
      'Rồi áp dụng: thầy Bowen sẽ **cao bao nhiêu**?',
    widget: ScaleChallengeWidget,
  },

  // 3 ─ Definition: Cell ───────────────────────────────────────────────────
  {
    layout: 'statement',
    accent: '#3b82f6',
    icon: 'BookOpen',
    eyebrow: 'Key Vocabulary',
    eyebrowVn: 'Từ vựng quan trọng',
    label: 'Write This Down',
    labelVn: 'Chép vào vở',
    text: '**Cell:** the smallest basic unit of all living organisms.',
    textVn: '**Tế bào:** đơn vị cơ bản nhỏ nhất của mọi sinh vật sống.',
    sub: 'Every living thing — you, a tree, a germ — is built from cells.',
    subVn: 'Mọi sinh vật sống — em, một cái cây, một vi khuẩn — đều được tạo nên từ tế bào.',
  },

  // 4 ─ Etymology (every class is an English class) ─────────────────────────
  {
    layout: 'split',
    accent: '#8b5cf6',
    icon: 'BookOpen',
    eyebrow: 'Every class is an English class',
    eyebrowVn: 'Mỗi tiết học đều là tiết Tiếng Anh',
    title: 'Where does “cell” come from?',
    titleVn: 'Từ “cell” đến từ đâu?',
    ratio: 50,
    side: 'left',
    inlineSvg: DIAGRAMS.TINY_ROOM,
    content:
      'The word has been around for centuries. Have a guess with your partner, then reveal the answer.',
    contentVn:
      'Từ này đã có từ nhiều thế kỷ. Hãy đoán cùng bạn của em, rồi bấm để xem đáp án.',
    reveal: {
      label: 'Reveal the origin',
      labelVn: 'Hiện nguồn gốc',
      answer:
        'It comes from the Latin word **cella**, meaning a **“small room”** or tiny house. Early scientists thought plant cells looked like the bare little rooms that **monks** lived in!',
      answerVn:
        'Nó bắt nguồn từ tiếng Latin **cella**, nghĩa là **“căn phòng nhỏ”** hay ngôi nhà tí hon. Các nhà khoa học thời xưa thấy tế bào thực vật trông giống những căn phòng trống nhỏ mà các **tu sĩ** ở!',
    },
  },

  // 5 ─ Inside the tiny room: organelles + explorer widget ─────────────────
  {
    layout: 'split',
    accent: '#14b8a6',
    icon: 'Boxes',
    title: 'Inside the Tiny Room',
    titleVn: 'Bên trong căn phòng nhỏ',
    ratio: 45,
    content:
      'Just like a **classroom** has furniture, or your **body** has organs, a cell has tiny structures inside it — each with a job.\n\n' +
      'Tap a part to see what it does. 👉',
    contentVn:
      'Giống như một **lớp học** có bàn ghế, hay **cơ thể** em có các cơ quan, tế bào cũng có những cấu trúc nhỏ bên trong — mỗi cái một nhiệm vụ.\n\n' +
      'Chạm vào một bộ phận để xem nó làm gì. 👉',
    notes: [
      { tone: 'write', text: '**Organelle:** a tiny structure inside a cell that does a specific, important job to keep the cell alive.', textVn: '**Bào quan:** một cấu trúc nhỏ bên trong tế bào, đảm nhận một nhiệm vụ cụ thể, quan trọng để giữ cho tế bào sống.' },
    ],
    widget: CellExplorerWidget,
  },

  // 6 ─ The shared organelles (animal + plant) ─────────────────────────────
  {
    layout: 'stack',
    accent: '#3b82f6',
    icon: 'Layers',
    columns: 2,
    title: 'The Standard Features',
    titleVn: 'Những bộ phận cơ bản',
    content: 'These four are found in **both** animal and plant cells. Copy each into your book.',
    contentVn: 'Bốn bộ phận này có ở **cả** tế bào động vật và thực vật. Hãy chép từng cái vào vở.',
    notes: [
      { tone: 'write', text: '**Cell membrane:** a very thin, flexible layer that controls what goes in and out of the cell.', textVn: '**Màng tế bào:** một lớp mỏng, linh hoạt, kiểm soát những gì đi vào và ra khỏi tế bào.' },
      { tone: 'write', text: '**Nucleus:** the control centre or “boss” of the cell that manages all activities.', textVn: '**Nhân:** trung tâm điều khiển hay “ông chủ” của tế bào, quản lý mọi hoạt động.' },
      { tone: 'write', text: '**Cytoplasm:** a clear, jelly-like substance where chemical reactions happen to keep the cell alive.', textVn: '**Tế bào chất:** chất trong suốt, dạng thạch, nơi các phản ứng hóa học diễn ra để giữ tế bào sống.' },
      { tone: 'write', text: '**Mitochondria** (one: mitochondrion): where energy is released from food. The powerhouse of the cell!', textVn: '**Ti thể** (số ít: ti thể): nơi năng lượng được giải phóng từ thức ăn. Nhà máy điện của tế bào!' },
    ],
  },

  // 7 ─ Compare: animal vs plant (labelled diagrams) ───────────────────────
  {
    layout: 'compare',
    accent: '#8b5cf6',
    icon: 'Scale',
    title: 'Animal vs Plant Cell',
    titleVn: 'Tế bào Động vật và Thực vật',
    columns: [
      {
        heading: 'Animal cell',
        headingVn: 'Tế bào động vật',
        icon: 'Users',
        accent: '#ec4899',
        inlineSvg: DIAGRAMS.ANIMAL_CELL,
        content: 'Rounded, no fixed shape. Has the **four shared** parts — and nothing extra.',
        contentVn: 'Tròn, không có hình dạng cố định. Có **bốn bộ phận chung** — và không có gì thêm.',
      },
      {
        heading: 'Plant cell',
        headingVn: 'Tế bào thực vật',
        icon: 'Leaf',
        accent: '#16a34a',
        inlineSvg: DIAGRAMS.PLANT_CELL,
        content: 'Boxy and firm. Has the shared parts **plus** a cell wall, chloroplasts and a big sap vacuole.',
        contentVn: 'Vuông vắn và cứng cáp. Có các bộ phận chung **cộng thêm** thành tế bào, lục lạp và không bào lớn.',
      },
    ],
  },

  // 8 ─ Compare: the real thing (micrographs) ──────────────────────────────
  {
    layout: 'compare',
    accent: '#14b8a6',
    icon: 'Microscope',
    title: 'The Real Thing',
    titleVn: 'Tế bào thật',
    columns: [
      {
        heading: 'Real animal cells',
        headingVn: 'Tế bào động vật thật',
        icon: 'Users',
        accent: '#ec4899',
        image: cheekCells,
        caption: 'Human cheek cells — see the stained nucleus.',
        captionVn: 'Tế bào má người — hãy nhìn nhân đã nhuộm màu.',
      },
      {
        heading: 'Real plant cells',
        headingVn: 'Tế bào thực vật thật',
        icon: 'Leaf',
        accent: '#16a34a',
        image: onionCells,
        caption: 'Onion skin cells — notice the straight cell walls.',
        captionVn: 'Tế bào vỏ hành — chú ý các thành tế bào thẳng.',
      },
    ],
  },

  // 9 ─ Plant exclusives (green themed) ────────────────────────────────────
  {
    layout: 'stack',
    accent: '#16a34a',
    icon: 'Sprout',
    columns: 2,
    title: 'Plant Cell Exclusives',
    titleVn: 'Bộ phận chỉ có ở tế bào thực vật',
    content: 'These extra parts are **plant only** — they let plants stand tall and make their own food.',
    contentVn: 'Những bộ phận thêm này **chỉ có ở thực vật** — giúp cây đứng vững và tự tạo ra thức ăn.',
    notes: [
      { tone: 'plant', text: '**Cell wall:** a strong, stiff outer layer that holds the plant cell in shape.', textVn: '**Thành tế bào:** lớp ngoài chắc, cứng, giữ hình dạng cho tế bào thực vật.' },
      { tone: 'plant', text: '**Cellulose:** the tough, fibrous substance that makes up the cell wall.', textVn: '**Xenlulozơ:** chất dai, dạng sợi, cấu tạo nên thành tế bào.' },
      { tone: 'plant', text: '**Chloroplast:** green structures where plants make their food using sunlight.', textVn: '**Lục lạp:** cấu trúc màu xanh, nơi cây tạo thức ăn nhờ ánh sáng mặt trời.' },
      { tone: 'plant', text: '**Chlorophyll:** the green substance inside chloroplasts that captures the sunlight.', textVn: '**Diệp lục:** chất màu xanh bên trong lục lạp, hấp thụ ánh sáng mặt trời.' },
      { tone: 'plant', text: '**Sap vacuole:** a large space filled with cell sap (sugar and water) that keeps the cell firm.', textVn: '**Không bào:** khoảng lớn chứa dịch tế bào (đường và nước) giúp tế bào căng cứng.' },
    ],
  },

  // 10 ─ Showcase: real chloroplasts ───────────────────────────────────────
  {
    layout: 'showcase',
    accent: '#16a34a',
    icon: 'Leaf',
    title: 'Chloroplasts, For Real',
    titleVn: 'Lục lạp ngoài đời thật',
    eyebrow: 'Plant power',
    eyebrowVn: 'Sức mạnh thực vật',
    image: chloroplasts,
    caption: 'Real chloroplasts inside the leaf cells of a water plant — each green dot captures sunlight to make food.',
    captionVn: 'Lục lạp thật bên trong tế bào lá của một cây thủy sinh — mỗi chấm xanh hấp thụ ánh sáng để tạo thức ăn.',
  },

  // 11 ─ Beyond the book: the ER (bonus) ───────────────────────────────────
  {
    layout: 'callout',
    accent: '#8b5cf6',
    icon: 'Zap',
    eyebrow: 'Expand Your Knowledge',
    eyebrowVn: 'Mở rộng kiến thức',
    title: 'The Cellular Highway',
    titleVn: 'Đường cao tốc của tế bào',
    content:
      'One bonus organelle to know: the **Endoplasmic Reticulum (ER)**.\n\n' +
      'Think of it as the cell’s **highway system** — it transports proteins and materials all around the cell, keeping everything moving to where it is needed.',
    contentVn:
      'Một bào quan thưởng thêm cần biết: **Lưới nội chất (ER)**.\n\n' +
      'Hãy hình dung nó như **hệ thống đường cao tốc** của tế bào — vận chuyển protein và vật liệu đi khắp tế bào, đưa mọi thứ đến nơi cần thiết.',
  },

  // 12 ─ Microscopy: definition + real microscope ──────────────────────────
  {
    layout: 'split',
    accent: '#0ea5e9',
    icon: 'Microscope',
    title: 'The Invisible World',
    titleVn: 'Thế giới vô hình',
    ratio: 45,
    side: 'left',
    image: microscope,
    content:
      'If a cell is only **0.02 mm** across, how do we know what a chloroplast actually looks like?\n\n' +
      'We use a tool that bends light to make tiny things look big.',
    contentVn:
      'Nếu một tế bào chỉ rộng **0.02 mm**, làm sao ta biết lục lạp thật sự trông thế nào?\n\n' +
      'Ta dùng một dụng cụ bẻ cong ánh sáng để làm vật tí hon trông to ra.',
    notes: [
      { tone: 'write', text: '**Microscope:** a scientific tool that uses curved glass **lenses** to bend light and **magnify** an image (make it look much bigger than it really is).', textVn: '**Kính hiển vi:** dụng cụ khoa học dùng các **thấu kính** thủy tinh cong để bẻ ánh sáng và **phóng đại** hình ảnh (làm nó trông to hơn nhiều so với thật).' },
    ],
    caption: 'A real compound microscope — we’ll use these on real onion cells soon.',
    captionVn: 'Một kính hiển vi quang học thật — sắp tới ta sẽ dùng nó để xem tế bào hành thật.',
  },

  // 13 ─ Showcase: how a microscope magnifies (light-path SVG) ──────────────
  {
    layout: 'showcase',
    accent: '#3b82f6',
    icon: 'Telescope',
    title: 'How It Magnifies',
    titleVn: 'Nó phóng đại như thế nào',
    inlineSvg: DIAGRAMS.MICROSCOPE_LIGHT,
    drawThis: true,
    caption: 'Light shines up through the specimen; two curved lenses bend it so a much bigger image reaches your eye.',
    captionVn: 'Ánh sáng chiếu lên qua mẫu vật; hai thấu kính cong bẻ ánh sáng để một hình ảnh lớn hơn nhiều đến mắt em.',
  },

  // 14 ─ Pushing the limits: electron microscopes (discussion) ──────────────
  {
    layout: 'callout',
    accent: '#0d9488',
    icon: 'ScanEye',
    eyebrow: 'Pushing the limits',
    eyebrowVn: 'Vượt giới hạn',
    title: 'Smaller Than a Cell',
    titleVn: 'Nhỏ hơn cả tế bào',
    content:
      'To see things even smaller than cells — like **viruses** or **molecules** — scientists use **electron microscopes** instead of light.',
    contentVn:
      'Để nhìn những thứ còn nhỏ hơn tế bào — như **virus** hay **phân tử** — các nhà khoa học dùng **kính hiển vi điện tử** thay cho ánh sáng.',
    reveal: {
      label: 'Discuss, then reveal',
      labelVn: 'Thảo luận rồi hiện đáp án',
      prompt: 'If something is too small for light to hit, how could an electron microscope possibly “see” it?',
      promptVn: 'Nếu một vật quá nhỏ để ánh sáng chạm tới, làm sao kính hiển vi điện tử có thể “nhìn” thấy nó?',
      answer:
        'It fires a beam of tiny **electrons** instead of light. Electrons are far smaller than waves of light, so they can reveal detail light never could.',
      answerVn:
        'Nó bắn một chùm **electron** siêu nhỏ thay cho ánh sáng. Electron nhỏ hơn nhiều so với sóng ánh sáng, nên chúng cho thấy chi tiết mà ánh sáng không bao giờ thấy được.',
    },
  },

  // 15 ─ Models & limitations (cross-curricular) ───────────────────────────
  {
    layout: 'callout',
    accent: '#14b8a6',
    icon: 'GraduationCap',
    eyebrow: 'Moving forward',
    eyebrowVn: 'Bước tiếp theo',
    title: 'Building Models with Mr Seth',
    titleVn: 'Làm mô hình với thầy Seth',
    content:
      'In class with **Mr Seth**, you will build physical **models** of these cells from different materials.\n\n' +
      'As you build, keep one science idea in mind — no model is perfect.',
    contentVn:
      'Trong tiết học với **thầy Seth**, các em sẽ làm **mô hình** vật lý của các tế bào này từ nhiều vật liệu khác nhau.\n\n' +
      'Khi làm, hãy nhớ một ý tưởng khoa học — không mô hình nào là hoàn hảo.',
    notes: [
      { tone: 'write', text: '**Limitations:** the weaknesses or differences between a scientific model and the real object. (How is a cardboard box different from a living cell wall?)', textVn: '**Hạn chế:** những điểm yếu hoặc khác biệt giữa mô hình khoa học và vật thật. (Một hộp bìa khác thành tế bào sống ở chỗ nào?)' },
    ],
  },

  // 16 ─ Summation checklist ───────────────────────────────────────────────
  {
    layout: 'stack',
    variant: 'checklist',
    accent: '#22c55e',
    icon: 'CheckCircle2',
    columns: 2,
    title: 'What We Covered',
    titleVn: 'Những gì đã học',
    items: [
      { text: 'How **small** a cell is — and the soda-can scale factor.', textVn: 'Tế bào **nhỏ** thế nào — và hệ số phóng đại của cái lon.' },
      { text: 'A **cell** is the basic unit of life; **organelles** do the jobs.', textVn: 'Một **tế bào** là đơn vị cơ bản của sự sống; **bào quan** đảm nhận các nhiệm vụ.' },
      { text: 'The **four shared** parts of animal and plant cells.', textVn: '**Bốn bộ phận chung** của tế bào động vật và thực vật.' },
      { text: 'The **plant-only** parts: wall, chloroplast, vacuole.', textVn: 'Các bộ phận **chỉ có ở thực vật**: thành, lục lạp, không bào.' },
      { text: 'What a **microscope** does — and its limits.', textVn: '**Kính hiển vi** làm gì — và giới hạn của nó.' },
      { text: 'Why every **model** has limitations.', textVn: 'Vì sao mọi **mô hình** đều có hạn chế.' },
    ],
  },

  // 17 ─ Homework ──────────────────────────────────────────────────────────
  {
    layout: 'callout',
    accent: '#f43f5e',
    icon: 'Home',
    eyebrow: 'Homework Assignment',
    eyebrowVn: 'Bài tập về nhà',
    title: 'For Next Lesson',
    titleVn: 'Cho tiết học sau',
    content:
      'Take your science notebook home.\n\n' +
      '> **Reading:** read the full Unit 1.1 text, **pages 8–12**.\n' +
      '> **Writing:** turn to **page 9**, copy the **2 questions** there, and answer them in your notebook using **full, complete English sentences**.',
    contentVn:
      'Mang vở khoa học về nhà.\n\n' +
      '> **Đọc:** đọc toàn bộ bài Unit 1.1, **trang 8–12**.\n' +
      '> **Viết:** mở **trang 9**, chép **2 câu hỏi** ở đó, và trả lời vào vở bằng **câu tiếng Anh đầy đủ, hoàn chỉnh**.',
  },

  // 18 ─ Close ─────────────────────────────────────────────────────────────
  {
    layout: 'hero',
    color: 'bg-[#22c55e]',
    icon: 'CheckCircle2',
    title: 'You’ve Met the Cell!',
    titleVn: 'Em đã làm quen với tế bào!',
    subtitle: 'From a speck too small to see to the powerhouse inside every living thing. Next: real cells under real microscopes.',
    subtitleVn: 'Từ một đốm quá nhỏ để thấy đến nhà máy điện bên trong mọi sinh vật. Tiếp theo: tế bào thật dưới kính hiển vi thật.',
  },
]
