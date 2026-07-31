// content/y7-science/U01_1/slides.js
// Year 7 Science · 1.1 Cells — built on the flexible layout system to show its
// range: hero, split, statement, compare, stack, showcase, callout. Bilingual
// EN/VN, real micrographs (Wikimedia, credited in images/CREDITS.json) mixed
// with authored SVG diagrams, and two interactive widgets.
import { DIAGRAMS } from './diagrams.js'
import { ScaleChallengeWidget, CellExplorerWidget } from './widgets.jsx'
import microscope from './images/microscope.jpg'

export const slides = [
  // Section 1: The Hook & The Scale of Life
  {
    layout: 'hero',
    color: 'bg-[#5c2483]', // Cambridge purple
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
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'Write a **complete sentence** describing how small a cell is. You must use a **measurement** (like mm) or a **real-world comparison**.',
      textVn: 'Viết một **câu hoàn chỉnh** mô tả tế bào nhỏ như thế nào. Em phải dùng một **đơn vị đo** (như mm) hoặc một **so sánh thực tế**.',
    },
  },
  {
    layout: 'split',
    accent: '#0ea5e9', // Cambridge teal
    icon: 'Scale',
    title: 'The Soda Can Challenge',
    titleVn: 'Thử thách Lon Nước Ngọt',
    ratio: 45,
    content:
      'In **pairs**, take a physical soda can. If Mr. Bowen was magnified so that a typical cell in his body was the size of this soda can, how tall would he be?\n\n' +
      '> **1.** A typical human cell is **0.02 mm**.\n' +
      '> **2.** A soda can is about **120 mm** tall.\n' +
      '> **3.** Work out the **scale factor** (how many times bigger).',
    contentVn:
      'Theo **cặp đôi**, hãy cầm một lon nước ngọt. Nếu thầy Bowen được phóng to để một tế bào bình thường trong cơ thể thầy bằng cái lon này, thầy sẽ cao bao nhiêu?\n\n' +
      '> **1.** Một tế bào người thường là **0.02 mm**.\n' +
      '> **2.** Một lon nước ngọt cao khoảng **120 mm**.\n' +
      '> **3.** Hãy tính **hệ số phóng đại** (lớn hơn bao nhiêu lần).',
    reveal: {
      label: 'The Big Reveal',
      labelVn: 'Tiết lộ kết quả',
      answer: 'Magnifying 0.02 mm to 120 mm is a scale factor of **6,000**. \n\nIf you multiply Mr. Bowen’s height (178 cm) by 6,000, he would be **10,680 meters (10.68 km)** tall. He would be taller than Mount Everest!',
      answerVn: 'Phóng to từ 0.02 mm lên 120 mm là hệ số phóng đại **6.000**. \n\nNếu nhân chiều cao của thầy Bowen (178 cm) với 6.000, thầy sẽ cao **10.680 mét (10.68 km)**. Thầy sẽ cao hơn cả đỉnh Everest!',
    },
    widget: ScaleChallengeWidget,
  },

  // Section 2: Defining the Cell & Etymology
  {
    layout: 'split',
    accent: '#8b5cf6', // purple
    icon: 'BookOpen',
    title: 'Defining the Cell',
    titleVn: 'Định nghĩa Tế bào',
    ratio: 50,
    side: 'left',
    inlineSvg: DIAGRAMS.TINY_ROOM,
    notes: [
      { tone: 'write', text: '**Cell:** The smallest basic unit of all living organisms. All living organisms are made of **cells**.', textVn: '**Tế bào:** Đơn vị cơ bản nhỏ nhất của mọi sinh vật sống. Mọi sinh vật sống đều được tạo nên từ **tế bào**.' },
    ],
    reveal: {
      label: 'Where does the word "cell" come from?',
      labelVn: 'Từ "cell" đến từ đâu?',
      answer: 'It comes from the Latin word **cella**, which means a "**small room**" or "tiny house." Early scientists thought plant cells looked like the tiny, bare rooms monks lived in!',
      answerVn: 'Nó bắt nguồn từ tiếng Latin **cella**, nghĩa là "**căn phòng nhỏ**" hay ngôi nhà tí hon. Các nhà khoa học xưa thấy tế bào thực vật giống những căn phòng trống nhỏ mà các tu sĩ ở!',
    },
  },

  // Section 3: Inside the Tiny Room (Organelles)
  {
    layout: 'split',
    accent: '#0ea5e9', // teal
    icon: 'Boxes',
    title: 'Inside the Tiny Room',
    titleVn: 'Bên trong căn phòng nhỏ',
    ratio: 45,
    content:
      'Just like a **classroom** has furniture, or a human **body** has organs, a cell has tiny structures inside it.\n\n' +
      'Tap a part to explore. 👉',
    contentVn:
      'Giống như một **lớp học** có bàn ghế, hay **cơ thể** người có các cơ quan, tế bào cũng có những cấu trúc nhỏ bên trong.\n\n' +
      'Chạm vào một phần để khám phá. 👉',
    notes: [
      { tone: 'write', text: '**Organelle:** Tiny structures inside a cell that each do a specific, important job to keep the cell alive.', textVn: '**Bào quan:** Những cấu trúc nhỏ bên trong tế bào, mỗi cái đảm nhận một nhiệm vụ cụ thể, quan trọng để giữ tế bào sống.' },
    ],
    widget: CellExplorerWidget,
  },

  // Section 4: The Shared Organelles (Animal & Plant)
  {
    layout: 'stack',
    accent: '#0ea5e9', // teal
    icon: 'Layers',
    columns: 2,
    title: 'The Standard Features',
    titleVn: 'Những bộ phận tiêu chuẩn',
    content: 'These four parts are found in **both** animal and plant cells. Copy each into your notebook.',
    contentVn: 'Bốn bộ phận này có ở **cả** tế bào động vật và thực vật. Hãy chép từng cái vào vở.',
    notes: [
      { tone: 'write', text: '**Cell Membrane:** A very thin, flexible layer that controls what goes in and out of the cell.', textVn: '**Màng tế bào:** Lớp mỏng, linh hoạt, kiểm soát những gì đi vào và ra khỏi tế bào.' },
      { tone: 'write', text: '**Nucleus:** The control center or "boss" of the cell that manages all activities.', textVn: '**Nhân:** Trung tâm điều khiển hay "ông chủ" của tế bào, quản lý mọi hoạt động.' },
      { tone: 'write', text: '**Cytoplasm:** A clear, jelly-like substance where chemical reactions happen to keep the cell alive.', textVn: '**Tế bào chất:** Chất trong suốt, dạng thạch, nơi các phản ứng hóa học diễn ra để giữ tế bào sống.' },
      { tone: 'write', text: '**Mitochondrion** (plural: mitochondria): This is where energy is released from food. The powerhouse of the cell!', textVn: '**Ti thể** (số nhiều: ti thể): Nơi năng lượng được giải phóng từ thức ăn. Nhà máy điện của tế bào!' },
    ],
  },

  // Section 5: Plant Power (Exclusive Features)
  {
    layout: 'stack',
    accent: '#16a34a', // green
    icon: 'Leaf',
    columns: 2,
    title: 'Plant Cell Exclusives',
    titleVn: 'Đặc quyền Tế bào Thực vật',
    content: 'These extra parts are **plant only** — they let plants stand tall and make their own food.',
    contentVn: 'Những bộ phận thêm này **chỉ có ở thực vật** — giúp cây đứng vững và tự tạo ra thức ăn.',
    notes: [
      { tone: 'plant', text: '**Cell Wall:** A strong, stiff outer layer that holds the plant cell in shape.', textVn: '**Thành tế bào:** Lớp ngoài chắc, cứng, giữ hình dạng cho tế bào thực vật.' },
      { tone: 'plant', text: '**Cellulose:** The tough, fibrous substance that makes up the cell wall.', textVn: '**Xenlulozơ:** Chất dai, dạng sợi, cấu tạo nên thành tế bào.' },
      { tone: 'plant', text: '**Chloroplast:** Green structures where plants make their food using sunlight.', textVn: '**Lục lạp:** Cấu trúc màu xanh, nơi cây tạo thức ăn nhờ ánh sáng mặt trời.' },
      { tone: 'plant', text: '**Chlorophyll:** The green substance inside chloroplasts that captures the sunlight.', textVn: '**Diệp lục:** Chất màu xanh bên trong lục lạp, hấp thụ ánh sáng mặt trời.' },
      { tone: 'plant', text: '**Sap Vacuole:** A large space filled with cell sap (sugar and water) that helps keep the cell firm.', textVn: '**Không bào:** Khoảng lớn chứa dịch tế bào (đường và nước) giúp tế bào căng cứng.' },
    ],
  },

  // Section 6: Beyond the Book
  {
    layout: 'callout',
    accent: '#f59e0b', // amber
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

  // Section 7: The Invisible World (Microscopy)
  {
    layout: 'split',
    accent: '#0ea5e9', // teal
    icon: 'Microscope',
    title: 'The Invisible World',
    titleVn: 'Thế giới vô hình',
    ratio: 45,
    side: 'left',
    image: microscope,
    content:
      'If a cell is only **0.02 mm** small, how do we know what a chloroplast actually looks like?\n\n' +
      'We use a tool that **magnifies** the view, making tiny things look big. Soon, we’ll use these microscopes to look at real onion cells!',
    contentVn:
      'Nếu tế bào chỉ nhỏ **0.02 mm**, làm sao ta biết lục lạp trông thế nào?\n\n' +
      'Ta dùng một công cụ **phóng đại** góc nhìn, làm vật nhỏ trông to ra. Sắp tới, ta sẽ dùng kính hiển vi này để xem tế bào hành thật!',
    notes: [
      { tone: 'write', text: '**Microscope:** A scientific tool that uses curved pieces of glass called lenses to bend light and **magnify** an image (make it look much bigger than it really is).', textVn: '**Kính hiển vi:** Dụng cụ khoa học dùng các thấu kính thủy tinh cong để bẻ ánh sáng và **phóng đại** hình ảnh (làm nó trông to hơn nhiều so với thật).' },
    ],
    caption: 'A real compound microscope. Key parts: eyepiece, focussing knobs, objective lenses, stage, and mirror.',
    captionVn: 'Một kính hiển vi quang học thật. Các bộ phận chính: thị kính, núm chỉnh tiêu cự, vật kính, bàn kính, và gương.',
  },

  // 7b: Electron Microscope (Pushing the Limits)
  {
    layout: 'callout',
    accent: '#8b5cf6', // purple
    icon: 'ScanEye',
    eyebrow: 'Pushing the limits',
    eyebrowVn: 'Vượt giới hạn',
    title: 'Smaller Than a Cell',
    titleVn: 'Nhỏ hơn cả tế bào',
    content:
      'To see things even smaller than cells — like **viruses** or **molecules** — scientists use **Electron Microscopes**.\n\n' +
      'If something is too small for regular light to hit it, how do you think an electron microscope works?',
    contentVn:
      'Để nhìn những thứ nhỏ hơn cả tế bào — như **virus** hay **phân tử** — các nhà khoa học dùng **Kính hiển vi điện tử**.\n\n' +
      'Nếu một vật quá nhỏ để ánh sáng thường chiếu tới, em nghĩ kính hiển vi điện tử hoạt động như thế nào?',
    reveal: {
      label: 'Discuss, then reveal',
      labelVn: 'Thảo luận rồi hiện đáp án',
      answer: 'It fires a beam of tiny **electrons** instead of light. Electrons are far smaller than light waves, so they can reveal incredible detail!',
      answerVn: 'Nó bắn một chùm **electron** siêu nhỏ thay cho ánh sáng. Electron nhỏ hơn sóng ánh sáng rất nhiều, nên chúng cho thấy những chi tiết đáng kinh ngạc!',
    },
  },

  // Section 8: Moving Forward (Models & Summation)
  {
    layout: 'callout',
    accent: '#14b8a6', // teal
    icon: 'GraduationCap',
    eyebrow: 'Moving forward',
    eyebrowVn: 'Bước tiếp theo',
    title: 'Building Models with Mr Seth',
    titleVn: 'Làm mô hình với thầy Seth',
    content:
      'In class with **Mr Seth**, you will build physical **models** of these cells using various materials.\n\n' +
      'As you build, keep one science idea in mind:',
    contentVn:
      'Trong tiết học với **thầy Seth**, các em sẽ làm **mô hình** vật lý của tế bào từ nhiều vật liệu khác nhau.\n\n' +
      'Khi làm, hãy nhớ một ý tưởng khoa học:',
    notes: [
      { tone: 'write', text: '**Limitations:** The weaknesses or differences between a scientific model and the real object. *(Think: how is a cardboard box different from a living cell wall?)*', textVn: '**Hạn chế:** Những điểm yếu hoặc khác biệt giữa mô hình khoa học và vật thật. *(Hãy nghĩ: hộp bìa cứng khác thành tế bào sống ở chỗ nào?)*' },
    ],
  },
  {
    layout: 'stack',
    variant: 'checklist',
    accent: '#22c55e', // green
    icon: 'CheckCircle2',
    columns: 2,
    title: 'Lesson Summation',
    titleVn: 'Tổng kết bài học',
    items: [
      { text: 'The tiny scale of a cell, and the concept of **magnification**.', textVn: 'Kích thước bé nhỏ của tế bào, và khái niệm **phóng đại**.' },
      { text: 'A **cell** is the basic unit of life; **organelles** do the jobs.', textVn: 'Một **tế bào** là đơn vị cơ bản của sự sống; **bào quan** đảm nhận nhiệm vụ.' },
      { text: 'The **four shared** features: membrane, cytoplasm, nucleus, mitochondrion.', textVn: '**Bốn bộ phận chung**: màng tế bào, tế bào chất, nhân, ti thể.' },
      { text: 'The **plant-only** features: cell wall (cellulose), chloroplast (chlorophyll), sap vacuole.', textVn: 'Bộ phận **chỉ có ở thực vật**: thành tế bào (xenlulozơ), lục lạp (diệp lục), không bào.' },
      { text: 'The basic function of a **microscope**.', textVn: 'Chức năng cơ bản của một **kính hiển vi**.' },
      { text: 'The **limitations** of scientific models.', textVn: 'Những **hạn chế** của mô hình khoa học.' },
    ],
  },

  // Section 9: Homework Assignment
  {
    layout: 'callout',
    accent: '#e11d48', // rose/pink for homework
    icon: 'Home',
    eyebrow: 'Homework Assignment',
    eyebrowVn: 'Bài tập về nhà',
    title: 'For Next Lesson',
    titleVn: 'Cho tiết học sau',
    content:
      'Take your science notebooks home.\n\n' +
      '> **Reading Task:** Read the full Unit 1.1 text, pages 8 through 12.\n' +
      '> **Writing Task:** Turn to page 9 in the textbook and write down the **2 Questions** located there. You must answer them in your notebook using **full, complete English sentences**.',
    contentVn:
      'Mang vở khoa học về nhà.\n\n' +
      '> **Bài đọc:** Đọc toàn bộ bài Unit 1.1, trang 8 đến 12.\n' +
      '> **Bài viết:** Mở trang 9 sách giáo khoa và chép **2 câu hỏi** ở đó. Trả lời vào vở bằng **câu tiếng Anh đầy đủ, hoàn chỉnh**.',
  },
]
