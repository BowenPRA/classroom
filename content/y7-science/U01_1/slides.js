// content/y7-science/U01_1/slides.js
// Year 7 Science · 1.1 Cells.
//
// Styled after the Cambridge Lower Secondary Learner's Book: teal section
// headers, purple activity boxes, red homework, and the book's orange for every
// key word the students are expected to copy down. Anything a student must
// write into their notebook is either an orange "Write This Down" panel or an
// orange-ruled bumper — never plain body text.
//
// Figures marked `lb-*` are scans from the Learner's Book (Unit 1.1, pp. 8–12);
// see images/CREDITS.json. Everything else is drawn in diagrams.js.
import { DIAGRAMS } from './diagrams.js'
import { ScaleChallengeWidget, CellExplorerWidget } from './widgets.jsx'
import lbPlantCell from './images/lb-plant-cell-diagram.jpg'
import lbLeaf from './images/lb-leaf-micrograph.jpg'
import lbMicroscope from './images/lb-microscope-labelled.jpg'
import hookeCork from './images/hooke-cork.jpg'
import prisonCell from './images/prison-cell.jpg'
import everest from './images/everest.jpg'
import electronMicroscope from './images/electron-microscope.jpg'
import onionCells from './images/onion-cells.jpg'
import cheekCells from './images/cheek-cells.jpg'
import chloroplastsPhoto from './images/chloroplasts.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'

export const slides = [
  // ── Section 1: the hook and the scale of life ────────────────────────────
  {
    layout: 'hero',
    color: '#5c2483',
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
  // The question on its own, with nothing to work from yet. Give the room a
  // couple of minutes to argue about it before any numbers appear.
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'Scale',
    eyebrow: 'In pairs — no calculators yet',
    eyebrowVn: 'Theo cặp — chưa dùng máy tính',
    title: 'The Soda Can Challenge',
    titleVn: 'Thử thách Lon Nước Ngọt',
    label: 'Discuss',
    labelVn: 'Thảo luận',
    labelIcon: 'MessageSquare',
    text: 'Imagine one **average cell** in Mr Bowen’s body was magnified until it was the size of a **soda can**. How big would Mr Bowen be?',
    textVn: 'Hãy tưởng tượng một **tế bào trung bình** trong cơ thể thầy Bowen được phóng to đến khi bằng một **lon nước ngọt**. Khi đó thầy Bowen sẽ to cỡ nào?',
    sub: 'Mr Bowen is **178 cm** tall. A building? A mountain? Agree with your partner, and be ready to say why.',
    subVn: 'Thầy Bowen cao **178 cm**. Một toà nhà? Một ngọn núi? Hãy thống nhất với bạn cùng cặp và sẵn sàng giải thích vì sao.',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Scale',
    title: 'Working It Out',
    titleVn: 'Cùng tính toán',
    ratio: 45,
    content:
      'Now let’s find the real answer together. Everything you need is on the right — press through it one step at a time.\n\n' +
      '> **1.** A typical human cell is **0.02 mm** across.\n' +
      '> **2.** A soda can is about **120 mm** tall.\n' +
      '> **3.** Work out the **scale factor** — how many times bigger?',
    contentVn:
      'Bây giờ hãy cùng tìm đáp án thật. Mọi thứ em cần đều ở bên phải — bấm từng bước một.\n\n' +
      '> **1.** Một tế bào người thường rộng **0,02 mm**.\n' +
      '> **2.** Một lon nước ngọt cao khoảng **120 mm**.\n' +
      '> **3.** Hãy tính **hệ số phóng đại** — lớn hơn bao nhiêu lần?',
    widget: ScaleChallengeWidget,
  },
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Sparkles',
    eyebrow: 'The answer',
    eyebrowVn: 'Đáp án',
    title: 'Taller Than Everest',
    titleVn: 'Cao hơn cả Everest',
    image: everest,
    caption: 'Magnified 6000×, Mr Bowen would be **10.68 km** tall. Everest is **8.85 km**. He would stand almost 2 km above the summit — and that is how much bigger a soda can is than one of your cells.',
    captionVn: 'Phóng đại 6000 lần, thầy Bowen sẽ cao **10,68 km**. Everest cao **8,85 km**. Thầy sẽ đứng cao hơn đỉnh núi gần 2 km — và đó chính là mức chênh lệch giữa một lon nước ngọt và một tế bào của em.',
  },
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Ruler',
    eyebrow: 'Getting a feel for it',
    eyebrowVn: 'Cảm nhận kích thước',
    title: 'How Small Is Small?',
    titleVn: 'Nhỏ đến mức nào?',
    inlineSvg: DIAGRAMS.SCALE_LADDER,
    caption: 'Everything to the right of the hair needs a microscope. A cell is about **3 times thinner than a human hair**.',
    captionVn: 'Mọi thứ bên phải sợi tóc đều cần kính hiển vi. Một tế bào **mỏng hơn sợi tóc khoảng 3 lần**.',
  },

  // ── Section 2: defining the cell and where the word comes from ───────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'BookOpen',
    title: 'Defining the Cell',
    titleVn: 'Định nghĩa Tế bào',
    ratio: 50,
    side: 'left',
    inlineSvg: DIAGRAMS.TINY_ROOM,
    content: 'All living organisms — every plant, every animal, you — are built out of the same kind of tiny unit.',
    contentVn: 'Mọi sinh vật sống — mọi loài cây, mọi loài vật, và cả em — đều được tạo nên từ cùng một loại đơn vị tí hon.',
    notes: [
      {
        tone: 'write',
        text: '**Cell:** the smallest basic unit of all living organisms.',
        textVn: '**Tế bào:** đơn vị cơ bản nhỏ nhất của mọi sinh vật sống.',
      },
    ],
    reveal: {
      label: 'Every class is an English class — where does "cell" come from?',
      labelVn: 'Mỗi tiết học đều là tiết tiếng Anh — từ "cell" đến từ đâu?',
      prompt: '**Hint:** you already know this word. What are **prison cells**? What makes a prison cell a "cell"?',
      promptVn: '**Gợi ý:** em đã biết từ này rồi. **Prison cell** (phòng giam) là gì? Điều gì khiến một phòng giam được gọi là "cell"?',
      answer: 'From the Latin word **cella**, meaning a "**small room**". A prison cell is a small bare room — and so was a monk’s cell. Robert Hooke looked at cork through an early microscope, saw rows of little empty boxes, and used the same word.',
      answerVn: 'Từ tiếng Latin **cella**, nghĩa là "**căn phòng nhỏ**". Phòng giam là một căn phòng nhỏ trống trải — phòng của tu sĩ cũng vậy. Robert Hooke quan sát nút bần qua kính hiển vi thời đầu, thấy những dãy hộp nhỏ trống rỗng, và dùng đúng từ đó.',
    },
  },
  {
    layout: 'compare',
    accent: PURPLE,
    icon: 'Boxes',
    title: 'Same Word, Two Places',
    titleVn: 'Cùng một từ, hai nơi',
    columns: [
      {
        heading: 'A prison cell', headingVn: 'Phòng giam',
        accent: '#5c6570',
        icon: 'Home',
        image: prisonCell,
        caption: 'A small, bare room. This is the meaning you already knew.',
        captionVn: 'Một căn phòng nhỏ, trống trải. Đây là nghĩa em đã biết.',
      },
      {
        heading: 'Hooke’s cork, 1665', headingVn: 'Nút bần của Hooke, 1665',
        accent: PURPLE,
        icon: 'Microscope',
        image: hookeCork,
        caption: 'Robert Hooke’s own drawing of cork under his microscope — rows of little rooms. He named them **cells**, and the name stuck for 360 years.',
        captionVn: 'Bản vẽ của chính Robert Hooke về nút bần dưới kính hiển vi — những dãy phòng nhỏ. Ông gọi chúng là **cells**, và cái tên ấy tồn tại suốt 360 năm.',
      },
    ],
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'ScanEye',
    title: 'Seeing Them For Real',
    titleVn: 'Nhìn thấy chúng thật sự',
    ratio: 45,
    side: 'left',
    image: lbLeaf,
    content:
      'This is part of a **leaf**, photographed through a microscope. Every one of those pale boxes is a single living cell.\n\n' +
      'Look at the little **green circles** inside them. What do you think they are? Why are they green? What might happen inside them?',
    contentVn:
      'Đây là một phần của **chiếc lá**, chụp qua kính hiển vi. Mỗi ô nhạt màu đó là một tế bào sống.\n\n' +
      'Hãy nhìn những **chấm tròn xanh** bên trong. Em nghĩ đó là gì? Vì sao chúng có màu xanh? Bên trong chúng có thể xảy ra điều gì?',
    reveal: {
      label: 'Discuss with your partner, then reveal',
      labelVn: 'Thảo luận với bạn, rồi hiện đáp án',
      answer: 'They are **chloroplasts**. They are green because they are full of a green substance called **chlorophyll**, and inside them the plant makes its own food using sunlight.',
      answerVn: 'Đó là **lục lạp**. Chúng có màu xanh vì chứa đầy chất màu xanh gọi là **diệp lục**, và bên trong chúng cây tự tạo ra thức ăn nhờ ánh sáng mặt trời.',
    },
    caption: 'Part of a leaf seen through a microscope (Learner’s Book, p. 9)',
    captionVn: 'Một phần chiếc lá nhìn qua kính hiển vi (Sách học sinh, tr. 9)',
  },

  // ── Section 3: inside the tiny room ──────────────────────────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Boxes',
    title: 'Inside the Tiny Room',
    titleVn: 'Bên trong căn phòng nhỏ',
    ratio: 45,
    content:
      'A classroom has furniture. A human body has organs. In the same way, a cell has tiny structures inside it, and each one has a job.\n\n' +
      'Tap a part on the right to find out what it does. 👉',
    contentVn:
      'Lớp học có bàn ghế. Cơ thể người có các cơ quan. Tương tự, tế bào có những cấu trúc nhỏ bên trong, và mỗi cái có một nhiệm vụ.\n\n' +
      'Chạm vào một bộ phận bên phải để xem nó làm gì. 👉',
    notes: [
      {
        tone: 'write',
        text: '**Organelle:** a tiny structure inside a cell that does one specific, important job to keep the cell alive.',
        textVn: '**Bào quan:** một cấu trúc nhỏ bên trong tế bào, đảm nhận một nhiệm vụ cụ thể, quan trọng để giữ tế bào sống.',
      },
    ],
    widget: CellExplorerWidget,
  },
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Leaf',
    eyebrow: 'Learner’s Book, page 9',
    eyebrowVn: 'Sách học sinh, trang 9',
    title: 'Parts of a Plant Cell',
    titleVn: 'Các bộ phận của tế bào thực vật',
    image: lbPlantCell,
    drawThis: true,
    caption: 'Copy this diagram into your notebook and label all **seven** parts. Take your time — neat lines, no shading.',
    captionVn: 'Chép hình này vào vở và chú thích đủ **bảy** bộ phận. Làm từ tốn — nét gọn, không tô bóng.',
  },

  // ── Section 4: the organelles every cell has ─────────────────────────────
  {
    layout: 'gallery',
    accent: TEAL,
    icon: 'Layers',
    tone: 'write',
    columns: 4,
    eyebrow: 'The standard features',
    eyebrowVn: 'Những bộ phận tiêu chuẩn',
    title: 'Every Cell Has These Four',
    titleVn: 'Mọi tế bào đều có bốn bộ phận này',
    content: 'Animal cells and plant cells both have all four. The highlighted part shows you where it sits.',
    contentVn: 'Cả tế bào động vật và thực vật đều có đủ bốn bộ phận. Phần được tô đậm cho em thấy vị trí của nó.',
    items: [
      {
        inlineSvg: DIAGRAMS.ORG_MEMBRANE,
        term: 'Cell membrane', termVn: 'Màng tế bào',
        text: 'A very thin, flexible layer that **controls what goes in and out** of the cell.',
        textVn: 'Lớp rất mỏng và linh hoạt, **kiểm soát những gì ra vào** tế bào.',
      },
      {
        inlineSvg: DIAGRAMS.ORG_CYTOPLASM,
        term: 'Cytoplasm', termVn: 'Tế bào chất',
        text: 'A clear, jelly-like substance where the cell’s **chemical reactions** happen.',
        textVn: 'Chất trong suốt, dạng thạch, nơi diễn ra các **phản ứng hoá học** của tế bào.',
      },
      {
        inlineSvg: DIAGRAMS.ORG_NUCLEUS,
        term: 'Nucleus', termVn: 'Nhân',
        text: 'The **control centre** — the "boss" that manages everything the cell does.',
        textVn: '**Trung tâm điều khiển** — "ông chủ" quản lý mọi hoạt động của tế bào.',
      },
      {
        inlineSvg: DIAGRAMS.ORG_MITOCHONDRIA,
        term: 'Mitochondria', termVn: 'Ti thể',
        tag: 'plural', tagVn: 'số nhiều',
        text: 'Where **energy is released from food**. One of them is a mitochondrion.',
        textVn: 'Nơi **năng lượng được giải phóng từ thức ăn**. Số ít là "mitochondrion".',
      },
    ],
  },

  // ── Section 5: the plant-only extras ─────────────────────────────────────
  // The five plant-only terms, split so each pair gets room to breathe and can
  // be paired with the real thing under a microscope.
  {
    layout: 'gallery',
    accent: GREEN,
    icon: 'Leaf',
    tone: 'plant',
    columns: 2,
    eyebrow: 'Plant cell exclusives · 1 of 2',
    eyebrowVn: 'Đặc quyền của tế bào thực vật · 1/2',
    title: 'What Holds a Plant Up',
    titleVn: 'Điều gì giữ cho cây đứng vững',
    content: 'A plant cell has **everything** an animal cell has, **plus** some extras. An animal has a skeleton to hold it up — a plant does not, so every single cell needs a stiff box around it.',
    contentVn: 'Tế bào thực vật có **mọi thứ** mà tế bào động vật có, **cộng thêm** vài phần nữa. Động vật có bộ xương để nâng đỡ — cây thì không, nên mỗi tế bào cần một chiếc hộp cứng bao quanh.',
    items: [
      {
        inlineSvg: DIAGRAMS.ORG_WALL,
        term: 'Cell wall', termVn: 'Thành tế bào',
        text: 'A strong, stiff outer layer that **holds the plant cell in shape**.',
        textVn: 'Lớp ngoài chắc và cứng, **giữ hình dạng cho tế bào thực vật**.',
      },
      {
        inlineSvg: DIAGRAMS.ORG_CELLULOSE,
        term: 'Cellulose', termVn: 'Xenlulozơ',
        text: 'The tough, fibrous substance that the **cell wall is made of**.',
        textVn: 'Chất dai, dạng sợi, **cấu tạo nên thành tế bào**.',
      },
      {
        inlineSvg: DIAGRAMS.ORG_VACUOLE,
        term: 'Sap vacuole', termVn: 'Không bào',
        text: 'A large space of cell sap — sugars and water — that **keeps the cell firm**, like air in a tyre.',
        textVn: 'Khoảng lớn chứa dịch tế bào — đường và nước — **giúp tế bào căng cứng**, như hơi trong lốp xe.',
      },
      {
        image: onionCells,
        term: 'The real thing', termVn: 'Vật thật',
        text: 'Onion cells down a microscope. Those hard straight edges are **cell walls** — animal cells never look this boxy.',
        textVn: 'Tế bào hành dưới kính hiển vi. Những cạnh thẳng cứng đó là **thành tế bào** — tế bào động vật không bao giờ vuông vắn như vậy.',
      },
    ],
  },
  {
    layout: 'gallery',
    accent: GREEN,
    icon: 'Sun',
    tone: 'plant',
    columns: 3,
    eyebrow: 'Plant cell exclusives · 2 of 2',
    eyebrowVn: 'Đặc quyền của tế bào thực vật · 2/2',
    title: 'How a Plant Feeds Itself',
    titleVn: 'Cây tự nuôi mình bằng cách nào',
    content: 'An animal has to go and find food. A plant makes its own, inside these — which is the whole reason plants are green.',
    contentVn: 'Động vật phải đi tìm thức ăn. Cây tự tạo ra thức ăn bên trong những bộ phận này — và đó chính là lý do cây có màu xanh.',
    items: [
      {
        inlineSvg: DIAGRAMS.ORG_CHLOROPLAST,
        term: 'Chloroplast', termVn: 'Lục lạp',
        text: 'Green structures where the plant **makes its food using sunlight**.',
        textVn: 'Cấu trúc màu xanh, nơi cây **tạo thức ăn nhờ ánh sáng mặt trời**.',
      },
      {
        inlineSvg: DIAGRAMS.ORG_CHLOROPHYLL,
        term: 'Chlorophyll', termVn: 'Diệp lục',
        text: 'The **green substance inside chloroplasts** that captures the sunlight.',
        textVn: '**Chất màu xanh bên trong lục lạp**, hấp thụ ánh sáng mặt trời.',
      },
      {
        image: chloroplastsPhoto,
        term: 'The real thing', termVn: 'Vật thật',
        text: 'Chloroplasts inside a pondweed leaf. Every green dot is one chloroplast, packed with chlorophyll.',
        textVn: 'Lục lạp bên trong lá rong đuôi chó. Mỗi chấm xanh là một lục lạp, chứa đầy diệp lục.',
      },
    ],
  },
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'Scale',
    title: 'Side by Side',
    titleVn: 'So sánh trực tiếp',
    columns: [
      {
        heading: 'Animal cell', headingVn: 'Tế bào động vật',
        accent: '#c2185b',
        icon: 'Users',
        inlineSvg: DIAGRAMS.ANIMAL_CELL,
        caption: 'Round and soft. Membrane, cytoplasm, nucleus, mitochondria — and nothing else.',
        captionVn: 'Tròn và mềm. Màng, tế bào chất, nhân, ti thể — và không có gì thêm.',
      },
      {
        heading: 'Plant cell', headingVn: 'Tế bào thực vật',
        accent: GREEN,
        icon: 'Leaf',
        inlineSvg: DIAGRAMS.PLANT_CELL,
        caption: 'Boxy and stiff. The same four parts, plus a wall, chloroplasts and a big sap vacuole.',
        captionVn: 'Vuông vắn và cứng. Vẫn bốn bộ phận đó, cộng thêm thành tế bào, lục lạp và không bào lớn.',
      },
    ],
  },
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'ScanEye',
    eyebrow: 'Not drawings — photographs',
    eyebrowVn: 'Không phải hình vẽ — ảnh chụp',
    title: 'The Same Two Cells, For Real',
    titleVn: 'Vẫn hai loại tế bào đó, ngoài đời thật',
    columns: [
      {
        heading: 'A human cheek cell', headingVn: 'Một tế bào má người',
        accent: '#c2185b',
        icon: 'Users',
        image: cheekCells,
        caption: 'Scraped from the inside of someone’s cheek, then stained. Soft and shapeless, with no straight edges — the small dark dot near the middle is its **nucleus**.',
        captionVn: 'Lấy từ mặt trong má của một người rồi nhuộm màu. Mềm và không có hình dạng cố định, không có cạnh thẳng — chấm sẫm nhỏ ở giữa là **nhân** của nó.',
      },
      {
        heading: 'Onion cells', headingVn: 'Tế bào hành',
        accent: GREEN,
        icon: 'Leaf',
        image: onionCells,
        caption: 'A single layer peeled off an onion. Stacked like bricks, because every one is inside a stiff **cell wall**.',
        captionVn: 'Một lớp mỏng bóc từ củ hành. Xếp chồng như những viên gạch, vì mỗi tế bào nằm trong một **thành tế bào** cứng.',
      },
    ],
  },

  // ── Section 6: beyond the book ───────────────────────────────────────────
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Zap',
    eyebrow: 'Expand your knowledge',
    eyebrowVn: 'Mở rộng kiến thức',
    title: 'The Cellular Highway',
    titleVn: 'Đường cao tốc của tế bào',
    ratio: 45,
    inlineSvg: DIAGRAMS.ER_HIGHWAY,
    content:
      'Here is one bonus organelle that is not in your textbook: the **Endoplasmic Reticulum**, or **ER**.\n\n' +
      'Think of it as the cell’s **motorway system**. It folds around the nucleus and carries proteins and materials to wherever they are needed.',
    contentVn:
      'Đây là một bào quan thưởng thêm không có trong sách: **Lưới nội chất**, gọi tắt là **ER**.\n\n' +
      'Hãy hình dung nó như **hệ thống đường cao tốc** của tế bào. Nó cuộn quanh nhân và vận chuyển protein cùng vật liệu đến nơi cần thiết.',
    notes: [
      {
        tone: 'theory',
        text: 'You will not be tested on the ER this year — but scientists never stop at the syllabus.',
        textVn: 'Năm nay em sẽ không bị kiểm tra về ER — nhưng nhà khoa học thì không bao giờ dừng ở chương trình học.',
      },
    ],
  },

  // ── Section 7: the invisible world ───────────────────────────────────────
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'Microscope',
    eyebrow: 'Learner’s Book, page 10',
    eyebrowVn: 'Sách học sinh, trang 10',
    title: 'The Tool That Makes It Visible',
    titleVn: 'Công cụ giúp ta nhìn thấy',
    image: lbMicroscope,
    drawThis: true,
    caption: 'Find every one of these parts on a real microscope: **eyepiece · coarse and fine focussing knobs · three objective lenses · stage · mirror**.',
    captionVn: 'Hãy tìm đủ các bộ phận này trên kính hiển vi thật: **thị kính · núm chỉnh thô và chỉnh tinh · ba vật kính · bàn kính · gương**.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Telescope',
    title: 'How Does It Magnify?',
    titleVn: 'Nó phóng đại bằng cách nào?',
    ratio: 45,
    side: 'left',
    inlineSvg: DIAGRAMS.MICROSCOPE_LIGHT,
    content:
      'Light shines up through the specimen. Two curved pieces of glass — **lenses** — bend that light, and the image reaching your eye is far bigger than the real thing.',
    contentVn:
      'Ánh sáng chiếu xuyên qua mẫu vật. Hai miếng thuỷ tinh cong — **thấu kính** — bẻ cong ánh sáng đó, và hình ảnh đến mắt em to hơn vật thật rất nhiều.',
    notes: [
      {
        tone: 'write',
        text: '**Microscope:** a scientific tool that uses curved pieces of glass, called lenses, to bend light and **magnify** an image — make it look much bigger than it really is.',
        textVn: '**Kính hiển vi:** dụng cụ khoa học dùng các miếng thuỷ tinh cong, gọi là thấu kính, để bẻ ánh sáng và **phóng đại** hình ảnh — làm nó trông to hơn thực tế rất nhiều.',
      },
      {
        tone: 'info',
        text: 'Once the lab kit arrives, we will use these ourselves on real onion cells.',
        textVn: 'Khi có thiết bị phòng thí nghiệm, chúng ta sẽ tự dùng chúng để quan sát tế bào hành thật.',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'ScanEye',
    eyebrow: 'Pushing the limits',
    eyebrowVn: 'Vượt giới hạn',
    title: 'Smaller Than a Cell',
    titleVn: 'Nhỏ hơn cả tế bào',
    ratio: 45,
    side: 'left',
    image: electronMicroscope,
    content:
      'To see things smaller than a cell — **viruses**, or even single **molecules** — scientists use an **Electron Microscope** like this one. It fills a room and costs more than a house.\n\n' +
      'Here is the puzzle. If something is too small for a wave of light to bounce off it, how could this machine possibly see it?',
    contentVn:
      'Để nhìn những thứ nhỏ hơn tế bào — **virus**, hay thậm chí từng **phân tử** — các nhà khoa học dùng **Kính hiển vi điện tử** như chiếc này. Nó chiếm cả một căn phòng và đắt hơn một ngôi nhà.\n\n' +
      'Câu đố là đây. Nếu một vật quá nhỏ để sóng ánh sáng phản xạ lại, thì cỗ máy này nhìn thấy nó bằng cách nào?',
    reveal: {
      label: 'Discuss, then reveal',
      labelVn: 'Thảo luận rồi hiện đáp án',
      answer: 'It fires a beam of **electrons** instead of light. An electron is far smaller than a wave of light, so it can pick out detail that light simply slides past.',
      answerVn: 'Nó bắn một chùm **electron** thay cho ánh sáng. Electron nhỏ hơn sóng ánh sáng rất nhiều, nên nó thấy được những chi tiết mà ánh sáng lướt qua mất.',
    },
    caption: 'A modern electron microscope.',
    captionVn: 'Một kính hiển vi điện tử hiện đại.',
  },

  // ── Section 8: models, limitations, and the recap ────────────────────────
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'GraduationCap',
    eyebrow: 'Moving forward',
    eyebrowVn: 'Bước tiếp theo',
    title: 'Building Models with Mr Seth',
    titleVn: 'Làm mô hình với thầy Seth',
    ratio: 45,
    inlineSvg: DIAGRAMS.MODEL_LIMITS,
    content:
      'In class with **Mr Seth** you will build physical **models** of these cells out of boxes, bags, beads and modelling clay.\n\n' +
      'A model helps you think — but a model is never the real thing. Keep asking yourself what yours is missing.',
    contentVn:
      'Trong tiết học với **thầy Seth**, các em sẽ làm **mô hình** vật lý của tế bào từ hộp, túi, hạt và đất nặn.\n\n' +
      'Mô hình giúp em tư duy — nhưng mô hình không bao giờ là vật thật. Hãy luôn tự hỏi mô hình của mình còn thiếu gì.',
    notes: [
      {
        tone: 'write',
        text: '**Limitations:** the weaknesses of a scientific model — the ways it is different from the real object.',
        textVn: '**Hạn chế:** những điểm yếu của một mô hình khoa học — những chỗ nó khác với vật thật.',
      },
    ],
  },
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
      'Read each line and be honest with yourself. If you could not explain one of them to a friend who missed today, that is the part to look at tonight.\n\n' +
      '> Your notebook should now have **13 definitions** and **2 labelled drawings** in it. Check.',
    contentVn:
      'Đọc từng dòng và thành thật với chính mình. Nếu có điều nào em chưa giải thích được cho một bạn vắng mặt hôm nay, thì tối nay hãy xem lại phần đó.\n\n' +
      '> Trong vở của em bây giờ phải có **13 định nghĩa** và **2 hình vẽ có chú thích**. Hãy kiểm tra lại.',
    items: [
      { text: 'Say **how small a cell is** — with a number or a comparison.', textVn: 'Nói được **tế bào nhỏ đến mức nào** — bằng con số hoặc phép so sánh.' },
      { text: 'Define a **cell** and an **organelle**, and say where the word "cell" came from.', textVn: 'Định nghĩa **tế bào** và **bào quan**, và nói được từ "cell" bắt nguồn từ đâu.' },
      { text: 'Name the **four parts every cell has**, and what each one does.', textVn: 'Kể được **bốn bộ phận mọi tế bào đều có** và nhiệm vụ của từng cái.' },
      { text: 'Name the **five plant-only parts**, and why a plant needs them.', textVn: 'Kể được **năm bộ phận chỉ có ở thực vật**, và vì sao cây cần chúng.' },
      { text: 'Explain what a **microscope** does, and label its main parts.', textVn: 'Giải thích **kính hiển vi** làm gì, và chú thích các bộ phận chính.' },
      { text: 'Explain the **limitations** of a scientific model.', textVn: 'Giải thích **hạn chế** của một mô hình khoa học.' },
    ],
  },

  // ── Section 9: homework ──────────────────────────────────────────────────
  {
    layout: 'callout',
    accent: RED,
    icon: 'Home',
    eyebrow: 'Homework Assignment',
    eyebrowVn: 'Bài tập về nhà',
    title: 'For Next Lesson',
    titleVn: 'Cho tiết học sau',
    content: 'Take your science notebook home with you.',
    contentVn: 'Hãy mang vở khoa học về nhà.',
    notes: [
      {
        tone: 'homework',
        badge: 'Reading Task',
        badgeVn: 'Bài đọc',
        icon: 'BookOpen',
        text: 'Read the whole of Unit 1.1, **pages 8 to 12**.',
        textVn: 'Đọc toàn bộ Bài 1.1, **trang 8 đến 12**.',
      },
      {
        tone: 'homework',
        badge: 'Writing Task',
        badgeVn: 'Bài viết',
        icon: 'Pencil',
        text: 'Turn to **page 9** and copy the **2 Questions** into your notebook. Answer them in **full, complete English sentences** — not single words.',
        textVn: 'Mở **trang 9**, chép **2 câu hỏi** vào vở. Trả lời bằng **câu tiếng Anh đầy đủ, hoàn chỉnh** — không viết cụt ngủn.',
      },
    ],
  },
]
