// content/y7-science/U01_2/slides.js
// Year 7 Science · 1.2 Animal Cells. Monday 10 August 2026.
//
// Same house style as 1.1: teal section headers, purple activity boxes, red
// homework, green for plant-only, and the Learner's Book orange for every key
// word students are expected to copy down. Anything a student must write into
// their notebook is either an orange "Write This Down" panel or an orange-ruled
// bumper — never plain body text.
//
// The teaching spine is the same too: ask the question on its own slide before
// any numbers appear, pair every drawn diagram with the real thing under a
// microscope, and stop for the English whenever a word is doing more work than
// it looks.
//
// Figures marked `lb-*` are scans from the Learner's Book (Unit 1.2, pp. 13–16);
// see images/CREDITS.json. Everything else is drawn in diagrams.js or is an
// openly-licensed photograph.
import { DIAGRAMS } from './diagrams.js'
import { CellCountWidget, PlantOrAnimalWidget } from './widgets.jsx'
import lbAnimalCell from './images/lb-animal-cell.jpg'
import lbCellArtwork from './images/lb-cell-artwork.jpg'
import milkyWay from './images/milky-way.jpg'
import cheekCells from './images/cheek-cells.jpg'
import neuron from './images/neuron.jpg'
import slideCoverslip from './images/slide-coverslip.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'
const CRIMSON = '#c2185b' // the animal-cell colour, used all through 1.1 too

export const slides = [
  // ── Section 1: pick up where 1.1 stopped ─────────────────────────────────
  {
    layout: 'hero',
    color: CRIMSON,
    icon: 'Dna',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    eyebrow: '1.2 Animal Cells',
    eyebrowVn: '1.2 Tế bào động vật',
    date: '10 Aug 2026',
    title: 'Animal Cells: What You Are Made Of',
    titleVn: 'Tế bào động vật: Em làm từ gì',
    card: {
      icon: 'Hourglass',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'Several parts of a **plant cell** begin with **c**. List as many as you can. **Two minutes.**',
      textVn: 'Nhiều bộ phận của **tế bào thực vật** bắt đầu bằng **c**. Liệt kê càng nhiều càng tốt. **Hai phút.**',
    },
  },
  {
    layout: 'statement',
    accent: GREEN,
    eyebrow: 'Getting started · from the book',
    eyebrowVn: 'Khởi động · trong sách',
    title: 'The C Words',
    titleVn: 'Những từ bắt đầu bằng C',
    label: 'Check your list',
    labelVn: 'Kiểm tra danh sách',
    labelIcon: 'CheckCircle2',
    text: 'The book asks for **five**. You found **six**.',
    textVn: 'Sách hỏi **năm** từ. Em tìm ra **sáu**.',
    sub: 'Read your list out loud. Which six?',
    subVn: 'Đọc to danh sách của em. Sáu từ nào?',
    reveal: {
      label: 'So why does the book say five?',
      labelVn: 'Vậy vì sao sách lại nói là năm?',
      prompt: 'Two of your six are not **parts**. A part is something you can point to.',
      promptVn: 'Hai trong sáu từ đó không phải là **bộ phận**. Bộ phận là thứ em chỉ vào được.',
      answer:
        '**The parts:** cell wall · cell membrane · cytoplasm · chloroplast.\n' +
        '**The substances:** cellulose, which the cell wall is made of, and chlorophyll, which sits inside a chloroplast.',
      answerVn:
        '**Các bộ phận:** thành tế bào · màng tế bào · tế bào chất · lục lạp.\n' +
        '**Các chất:** xenlulozơ, chất cấu tạo nên thành tế bào, và diệp lục, chất nằm bên trong lục lạp.',
    },
  },

  // ── Section 2: the hook — ask first, count afterwards ─────────────────────
  // The question slide carries no numbers on purpose. Take wild guesses and
  // write a few on the board before moving on; the gap between their guess and
  // 100 trillion is the lesson.
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'In pairs — no calculators, just a guess',
    eyebrowVn: 'Theo cặp — không dùng máy tính, chỉ đoán',
    title: 'How Many Cells Is Mr Bowen?',
    titleVn: 'Thầy Bowen có bao nhiêu tế bào?',
    label: 'Discuss',
    labelVn: 'Thảo luận',
    labelIcon: 'MessageSquare',
    text: '**Guess** how many cells are inside Mr Bowen.',
    textVn: 'Hãy **đoán** xem thầy Bowen có bao nhiêu tế bào.',
    sub: 'Nobody has ever counted them. A thousand? A million? A billion? Agree on **one** number.',
    subVn: 'Chưa ai từng đếm hết. Một nghìn? Một triệu? Một tỉ? Hãy thống nhất **một** con số.',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Users',
    title: 'Working It Out',
    titleVn: 'Cùng tính toán',
    ratio: 45,
    content:
      'Now the real answer. Press through it one step at a time — do each step on paper before the next one appears.\n\n' +
      '> **1.** Scientists estimate about **100 trillion** cells in one person.\n' +
      '> **2.** Imagine counting them: **one cell every second**.\n' +
      '> **3.** How long would that take you?',
    contentVn:
      'Bây giờ là đáp án thật. Hãy bấm từng bước một — làm xong mỗi bước trên giấy rồi mới sang bước sau.\n\n' +
      '> **1.** Các nhà khoa học ước tính một người có khoảng **100 nghìn tỉ** tế bào.\n' +
      '> **2.** Hãy tưởng tượng em đếm chúng: **mỗi giây một tế bào**.\n' +
      '> **3.** Việc đó sẽ mất bao lâu?',
    widget: CellCountWidget,
  },
  {
    layout: 'showcase',
    accent: BLUE,
    icon: 'Sparkles',
    eyebrow: 'The answer',
    eyebrowVn: 'Đáp án',
    title: 'More Cells Than Stars',
    titleVn: 'Nhiều tế bào hơn cả số sao',
    image: milkyWay,
    caption: 'Our whole galaxy holds about **400 billion stars**. You are built from about **100 trillion cells** — at least **250 times more**. Every one of them is doing a job right now, while you sit there.',
    captionVn: 'Cả thiên hà của chúng ta có khoảng **400 tỉ ngôi sao**. Còn em được tạo nên từ khoảng **100 nghìn tỉ tế bào** — nhiều gấp ít nhất **250 lần**. Mỗi tế bào đều đang làm việc ngay lúc này, khi em ngồi đây.',
  },
  {
    layout: 'showcase',
    accent: CRIMSON,
    icon: 'Microscope',
    eyebrow: 'Learner’s Book, page 13',
    eyebrowVn: 'Sách học sinh, trang 13',
    title: 'One of Them, Close Up',
    titleVn: 'Nhìn gần một tế bào',
    image: lbCellArtwork,
    caption: 'An artist’s picture of animal cells. The purple lump is the **nucleus**; the small pale sausages floating around it are **mitochondria**. You already met both of those last lesson.',
    captionVn: 'Hình vẽ minh hoạ tế bào động vật. Khối màu tím là **nhân**; những hạt nhỏ nhạt màu hình xúc xích quanh nó là **ti thể**. Em đã gặp cả hai trong tiết học trước.',
  },

  // ── Section 3: the parts of an animal cell ───────────────────────────────
  {
    layout: 'split',
    accent: CRIMSON,
    icon: 'Boxes',
    title: 'Parts of an Animal Cell',
    titleVn: 'Các bộ phận của tế bào động vật',
    ratio: 45,
    inlineSvg: DIAGRAMS.ANIMAL_CELL,
    content:
      'All animals are made of cells. **You are an animal**, so your body is made of cells too.\n\n' +
      'An animal cell is **similar** to a plant cell in several ways — and we will come back to that word.',
    contentVn:
      'Mọi loài vật đều được tạo nên từ tế bào. **Em cũng là một động vật**, nên cơ thể em cũng được tạo nên từ tế bào.\n\n' +
      'Tế bào động vật **tương tự** tế bào thực vật ở nhiều điểm — và chúng ta sẽ quay lại với từ này.',
    notes: [
      {
        tone: 'write',
        text: '**An animal cell has:** a cell membrane, cytoplasm, mitochondria and a nucleus.',
        textVn: '**Tế bào động vật có:** màng tế bào, tế bào chất, ti thể và nhân.',
      },
    ],
    reveal: {
      label: 'Quick check — what does each one do?',
      labelVn: 'Kiểm tra nhanh — mỗi bộ phận làm nhiệm vụ gì?',
      answer:
        '**Cell membrane:** controls what goes in and out of the cell.\n' +
        '**Cytoplasm:** where the cell’s chemical reactions happen.\n' +
        '**Mitochondria:** where energy is released from food.\n' +
        '**Nucleus:** the control centre that manages everything.',
      answerVn:
        '**Màng tế bào:** kiểm soát những gì ra vào tế bào.\n' +
        '**Tế bào chất:** nơi diễn ra các phản ứng hoá học của tế bào.\n' +
        '**Ti thể:** nơi năng lượng được giải phóng từ thức ăn.\n' +
        '**Nhân:** trung tâm điều khiển mọi hoạt động.',
    },
  },
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Learner’s Book, page 14',
    eyebrowVn: 'Sách học sinh, trang 14',
    title: 'Draw It and Label It',
    titleVn: 'Vẽ và chú thích',
    image: lbAnimalCell,
    drawThis: true,
    caption: 'Copy this drawing into your notebook and label all **four** parts. Neat lines, no shading — and give your drawing a title.',
    captionVn: 'Chép hình này vào vở và chú thích đủ **bốn** bộ phận. Nét gọn, không tô bóng — và nhớ đặt tên cho hình vẽ.',
  },

  // ── Section 4: the difference — asked before it is answered ──────────────
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Scale',
    eyebrow: 'In pairs — two minutes, and no calling out',
    eyebrowVn: 'Theo cặp — hai phút, không nói to đáp án',
    title: 'Spot the Difference',
    titleVn: 'Tìm điểm khác nhau',
    inlineSvg: DIAGRAMS.SPOT_THE_DIFFERENCE,
    caption: 'The plant cell has **three things** the animal cell has not got. Find all three, and **write them down** — do not say them out loud yet.',
    captionVn: 'Tế bào thực vật có **ba thứ** mà tế bào động vật không có. Hãy tìm đủ cả ba và **viết ra giấy** — chưa nói to vội.',
  },
  {
    layout: 'gallery',
    accent: GREEN,
    icon: 'Leaf',
    tone: 'plant',
    columns: 3,
    eyebrow: 'The answer',
    eyebrowVn: 'Đáp án',
    title: 'Three Things an Animal Cell Has Not Got',
    titleVn: 'Ba thứ tế bào động vật không có',
    copyLabel: 'Write This Down',
    copyLabelVn: 'Chép vào vở',
    content: 'A plant cell has **everything** an animal cell has, **plus** these three. In each picture the rest of the cell is greyed out, so you can see exactly where the part sits.',
    contentVn: 'Tế bào thực vật có **mọi thứ** tế bào động vật có, **cộng thêm** ba phần này. Trong mỗi hình, phần còn lại của tế bào được làm mờ để em thấy rõ vị trí của bộ phận đó.',
    items: [
      {
        inlineSvg: DIAGRAMS.ORG_WALL,
        term: 'Cell wall', termVn: 'Thành tế bào',
        text: 'A strong, stiff outer layer made of **cellulose**. It holds the plant cell in shape.',
        textVn: 'Lớp ngoài chắc và cứng, làm bằng **xenlulozơ**. Nó giữ hình dạng cho tế bào thực vật.',
      },
      {
        inlineSvg: DIAGRAMS.ORG_CHLOROPLAST,
        term: 'Chloroplasts', termVn: 'Lục lạp',
        text: 'Green structures where the plant **makes its own food** using sunlight.',
        textVn: 'Cấu trúc màu xanh, nơi cây **tự tạo ra thức ăn** nhờ ánh sáng mặt trời.',
      },
      {
        inlineSvg: DIAGRAMS.ORG_VACUOLE,
        term: 'Sap vacuole', termVn: 'Không bào',
        text: 'A large space of cell sap that **keeps the cell firm**, like air inside a tyre.',
        textVn: 'Khoảng lớn chứa dịch tế bào, **giúp tế bào căng cứng**, như hơi trong lốp xe.',
      },
    ],
  },
  {
    layout: 'split',
    accent: CRIMSON,
    icon: 'Droplet',
    title: 'No Wall, No Fixed Shape',
    titleVn: 'Không có thành, không có hình dạng cố định',
    ratio: 45,
    side: 'left',
    inlineSvg: DIAGRAMS.SHAPE_FREEDOM,
    content:
      'A plant stands still. Every one of its cells is locked inside a stiff box, and that is what holds a whole tree up.\n\n' +
      'An animal **moves**. Your cells have to bend, squeeze and change shape all day — a stiff box would stop them.',
    contentVn:
      'Cây đứng yên một chỗ. Mỗi tế bào của nó nằm trong một chiếc hộp cứng, và chính điều đó nâng đỡ cả một cái cây.\n\n' +
      'Động vật thì **di chuyển**. Tế bào của em phải uốn, ép và đổi hình dạng suốt ngày — một chiếc hộp cứng sẽ cản trở điều đó.',
    notes: [
      {
        tone: 'write',
        text: '**An animal cell has no cell wall,** so it has **no fixed shape**. Animal cells look soft and rounded, with no straight edges.',
        textVn: '**Tế bào động vật không có thành tế bào,** nên nó **không có hình dạng cố định**. Tế bào động vật trông mềm và tròn, không có cạnh thẳng.',
      },
    ],
  },

  // ── Section 5: beyond the book ───────────────────────────────────────────
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Zap',
    eyebrow: 'Expand your knowledge',
    eyebrowVn: 'Mở rộng kiến thức',
    title: 'Not All Animal Cells Look Alike',
    titleVn: 'Không phải tế bào động vật nào cũng giống nhau',
    ratio: 45,
    image: neuron,
    content:
      'Here is something that is not in your textbook. Because an animal cell is not locked inside a box, it can grow into **whatever shape its job needs**.\n\n' +
      'This is a **nerve cell**. Those long arms carry messages around your body. The longest nerve cell in a person runs from the bottom of the back all the way to the big toe — about **one metre**, and all of it is a single cell.',
    contentVn:
      'Đây là điều không có trong sách giáo khoa. Vì tế bào động vật không bị nhốt trong một chiếc hộp, nó có thể phát triển thành **bất kỳ hình dạng nào mà nhiệm vụ của nó cần**.\n\n' +
      'Đây là một **tế bào thần kinh**. Những nhánh dài đó truyền tín hiệu đi khắp cơ thể. Tế bào thần kinh dài nhất trong cơ thể người chạy từ cuối lưng xuống tận ngón chân cái — dài khoảng **một mét**, và tất cả chỉ là **một** tế bào.',
    notes: [
      {
        tone: 'theory',
        text: 'You will not be tested on nerve cells this year — but scientists never stop at the syllabus.',
        textVn: 'Năm nay em sẽ không bị kiểm tra về tế bào thần kinh — nhưng nhà khoa học thì không bao giờ dừng ở chương trình học.',
      },
    ],
  },

  // ── Section 6: every class is an English class ───────────────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'BookOpen',
    eyebrow: 'Every class is an English class',
    eyebrowVn: 'Mỗi tiết học đều là tiết tiếng Anh',
    title: 'Similar Is Not the Same',
    titleVn: '"Similar" không phải là "the same"',
    content:
      'Your book says: "Animal cells are **similar** to plant cells in several ways."\n\n' +
      'It does not say **the same**. **Similar** means alike in some ways, different in others.',
    contentVn:
      'Sách viết: "Animal cells are **similar** to plant cells in several ways."\n\n' +
      'Sách không viết **the same** (giống hệt). **Similar** là giống một số điểm, khác một số điểm.',
    notes: [
      {
        tone: 'write',
        text:
          '**Sentences for comparing two things:**\n' +
          '**Both** a plant cell **and** an animal cell **have** a nucleus.\n' +
          'A plant cell has a cell wall, **but** an animal cell does not.\n' +
          '**Unlike** a plant cell, an animal cell has no fixed shape.',
        textVn:
          '**Mẫu câu so sánh hai vật:**\n' +
          '**Both** a plant cell **and** an animal cell **have** a nucleus. (Cả… và… đều có…)\n' +
          'A plant cell has a cell wall, **but** an animal cell does not. (…, nhưng… thì không)\n' +
          '**Unlike** a plant cell, an animal cell has no fixed shape. (Khác với…, …)',
      },
    ],
    reveal: {
      label: 'Your turn — finish the sentence out loud',
      labelVn: 'Đến lượt em — hãy hoàn thành câu này',
      prompt: '"Both cells have ______ , but only the plant cell has ______ ."',
      promptVn: '"Both cells have ______ , but only the plant cell has ______ ."',
      answer: 'Both cells have **a cell membrane, cytoplasm, mitochondria and a nucleus**, but only the plant cell has **a cell wall, chloroplasts and a sap vacuole**.',
      answerVn: 'Both cells have **a cell membrane, cytoplasm, mitochondria and a nucleus**, but only the plant cell has **a cell wall, chloroplasts and a sap vacuole**. (Cả hai loại tế bào đều có màng tế bào, tế bào chất, ti thể và nhân, nhưng chỉ tế bào thực vật mới có thành tế bào, lục lạp và không bào.)',
    },
  },

  // ── Section 7: the real photographs (Learner's Book p. 15, Question 1) ───
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'ScanEye',
    eyebrow: 'Learner’s Book, page 15 · Question 1',
    eyebrowVn: 'Sách học sinh, trang 15 · Câu hỏi 1',
    title: 'Plant or Animal?',
    titleVn: 'Thực vật hay động vật?',
    ratio: 40,
    content:
      'Four real photographs, all taken down a microscope. For each one decide: **plant cell or animal cell** — and be ready to say **how you know**.\n\n' +
      '> Answer in a full sentence: "Photograph A shows plant cells **because** ... "',
    contentVn:
      'Bốn tấm ảnh thật, đều chụp qua kính hiển vi. Với mỗi ảnh, hãy quyết định: **tế bào thực vật hay tế bào động vật** — và sẵn sàng nói **vì sao em biết**.\n\n' +
      '> Trả lời bằng câu hoàn chỉnh: "Photograph A shows plant cells **because** ... "',
    widget: PlantOrAnimalWidget,
  },

  // ── Section 8: the practical ─────────────────────────────────────────────
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Beaker',
    eyebrow: 'Think like a scientist',
    eyebrowVn: 'Tư duy như nhà khoa học',
    title: 'Looking at Your Own Cells',
    titleVn: 'Quan sát tế bào của chính em',
    ratio: 55,
    side: 'left',
    image: slideCoverslip,
    content: 'The book asks you to take cells from **inside your own cheek** and look at them down a microscope.',
    contentVn: 'Sách yêu cầu em lấy tế bào từ **mặt trong má của chính mình** và quan sát chúng qua kính hiển vi.',
    notes: [
      {
        tone: 'task',
        badge: 'You Will Need',
        badgeVn: 'Em sẽ cần',
        icon: 'Beaker',
        text: 'microscope · slide · cover slip · cotton bud · methylene blue · dropper pipette · safety glasses',
        textVn: 'kính hiển vi · lam kính · lamen · tăm bông · xanh methylen · ống nhỏ giọt · kính bảo hộ',
      },
      {
        tone: 'homework',
        badge: 'Safety',
        badgeVn: 'An toàn',
        icon: 'ShieldCheck',
        text: '**Safety glasses on** before you start. Use your **own** cotton bud, **once**, then bin it.',
        textVn: '**Đeo kính bảo hộ** trước khi bắt đầu. Dùng tăm bông **của riêng em**, **một lần**, rồi bỏ đi.',
      },
    ],
  },
  // The unit's one and only Key Word gets its own slide. It also earns a second
  // job: "stain" is a word they already own in English, with the opposite
  // feeling attached to it.
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'Droplet',
    eyebrow: 'Key word',
    eyebrowVn: 'Từ khoá',
    title: 'Stain',
    titleVn: 'Stain — thuốc nhuộm',
    content: 'Your cheek cells are almost see-through. Untreated, you would see an empty grey circle and decide there was nothing there. So we add a dye that colours the parts.',
    contentVn: 'Tế bào má của em gần như trong suốt. Không xử lý gì, em chỉ thấy vòng tròn xám trống và tưởng chẳng có gì. Vậy nên ta thêm phẩm màu để tô màu các bộ phận.',
    notes: [
      {
        tone: 'write',
        text: '**Stain:** a coloured dye added to a specimen to make its parts **easier to see**.',
        textVn: '**Thuốc nhuộm (stain):** phẩm màu thêm vào mẫu vật để các bộ phận **dễ nhìn thấy hơn**.',
      },
    ],
    reveal: {
      label: 'English class: what is a stain on your school shirt?',
      labelVn: 'Tiếng Anh: vết "stain" trên áo đồng phục là gì?',
      answer: 'A mark you did **not** want — coffee, ink, mud. In a laboratory it is the exact opposite: a scientist stains something **on purpose**, because the colour is the whole point. Same word, opposite feeling.',
      answerVn: 'Là vết bẩn em **không** hề muốn — cà phê, mực, bùn. Trong phòng thí nghiệm thì ngược lại hoàn toàn: nhà khoa học nhuộm màu **có chủ ý**, vì màu sắc chính là điều họ cần. Cùng một từ, cảm giác trái ngược.',
    },
  },
  {
    layout: 'steps',
    accent: PURPLE,
    icon: 'Layers',
    eyebrow: 'Steps 1 to 4',
    eyebrowVn: 'Bước 1 đến 4',
    title: 'Making the Slide',
    titleVn: 'Chuẩn bị tiêu bản',
    inlineSvg: DIAGRAMS.SLIDE_PREP,
    steps: [
      {
        text: 'Very gently rub a cotton bud along the **inside of your cheek**.',
        textVn: 'Nhẹ nhàng chà tăm bông dọc theo **mặt trong má**.',
      },
      {
        text: 'Rub the bud on a clean **microscope slide**. You still will not see anything.',
        textVn: 'Chà tăm bông lên một **lam kính** sạch. Em vẫn chưa thấy gì cả.',
      },
      {
        text: 'Add one drop of **methylene blue** with a dropper pipette.',
        textVn: 'Nhỏ một giọt **xanh methylen** bằng ống nhỏ giọt.',
      },
      {
        text: 'Carefully lower a **cover slip** over the drop.',
        textVn: 'Cẩn thận hạ **lamen** xuống phủ lên giọt thuốc nhuộm.',
      },
    ],
  },
  {
    layout: 'steps',
    accent: TEAL,
    icon: 'Microscope',
    eyebrow: 'Steps 5 to 7',
    eyebrowVn: 'Bước 5 đến 7',
    title: 'Setting Up the Microscope',
    titleVn: 'Lắp đặt kính hiển vi',
    content: 'The last step here matters more than it looks. Get it wrong and you break the slide.',
    contentVn: 'Bước cuối ở đây quan trọng hơn vẻ ngoài của nó. Làm sai là em làm vỡ lam kính.',
    steps: [
      {
        text: 'Put the **smallest objective lens** over the stage.',
        textVn: 'Đưa **vật kính nhỏ nhất** vào vị trí trên bàn kính.',
      },
      {
        text: 'Put the slide on the stage, with the part you want to look at **over the hole**.',
        textVn: 'Đặt lam kính lên bàn kính, sao cho phần em muốn quan sát nằm **ngay trên lỗ sáng**.',
      },
      {
        text: '**Looking from the side**, turn the focussing knob until the lens is close to the slide.',
        textVn: '**Nhìn từ bên cạnh**, vặn núm chỉnh cho tới khi vật kính gần sát lam kính.',
      },
    ],
    reveal: {
      label: 'Why does step 7 say to look from the side?',
      labelVn: 'Vì sao bước 7 lại bảo phải nhìn từ bên cạnh?',
      answer: 'Because with your eye at the top of the eyepiece you cannot tell how close the lens is. Looking from the side is the only way to be sure you are not about to drive it through the slide.',
      answerVn: 'Vì khi mắt em ở trên thị kính, em không thể biết vật kính đang cách lam kính bao xa. Nhìn từ bên cạnh là cách duy nhất để chắc chắn em không đâm vật kính xuyên qua lam kính.',
    },
  },
  {
    layout: 'steps',
    accent: TEAL,
    icon: 'ScanEye',
    eyebrow: 'Steps 8 to 10',
    eyebrowVn: 'Bước 8 đến 10',
    title: 'Finding the Cells',
    titleVn: 'Tìm ra tế bào',
    content: 'We will run all of this for real as soon as the lab kit arrives. Today, learn the order.',
    contentVn: 'Chúng ta sẽ thực hành toàn bộ ngay khi có bộ dụng cụ thí nghiệm. Hôm nay, hãy học thuộc thứ tự.',
    steps: [
      {
        text: 'Look down the eyepiece. Slowly turn the knob to move the lens **upwards**, and stop when you can see the cells.',
        textVn: 'Nhìn qua thị kính. Từ từ vặn núm để đưa vật kính **lên trên**, và dừng lại khi em thấy được tế bào.',
      },
      {
        text: 'Turn the lenses until a **larger one** is over the stage. The view should be more magnified.',
        textVn: 'Xoay cụm vật kính cho tới khi một **vật kính lớn hơn** nằm trên bàn kính. Hình ảnh sẽ được phóng to hơn.',
      },
      {
        text: '**Draw** one or two of the cells you can see, and label your drawing.',
        textVn: '**Vẽ** một hoặc hai tế bào em nhìn thấy, và chú thích hình vẽ.',
      },
    ],
  },
  {
    layout: 'showcase',
    accent: CRIMSON,
    icon: 'ScanEye',
    eyebrow: 'What you are looking for',
    eyebrowVn: 'Thứ em cần tìm',
    title: 'Your Own Cells, Stained Blue',
    titleVn: 'Tế bào của chính em, nhuộm xanh',
    image: cheekCells,
    caption: 'Real human cheek cells after methylene blue. Soft, shapeless, not one straight edge — and the **dark blue dot** inside each one is its nucleus. Without the stain you would see almost nothing at all.',
    captionVn: 'Tế bào má người thật sau khi nhuộm xanh methylen. Mềm, không có hình dạng cố định, không một cạnh thẳng — và **chấm xanh đậm** bên trong mỗi tế bào là nhân của nó. Không có thuốc nhuộm thì em gần như chẳng thấy gì.',
  },

  // ── Section 9: the group activity ────────────────────────────────────────
  {
    layout: 'steps',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'Activity · groups of two or three',
    eyebrowVn: 'Hoạt động · nhóm hai hoặc ba bạn',
    title: 'Build a Cell, Then Take It Apart',
    titleVn: 'Dựng một tế bào, rồi tháo bớt đi',
    content: 'Each group gets **fifteen card ovals** (five red, ten green), **one grey circle**, string, tape, glue and a big sheet of paper. Your group decides what each piece stands for.',
    contentVn: 'Mỗi nhóm nhận **mười lăm hình bầu dục bằng bìa** (năm đỏ, mười xanh), **một hình tròn xám**, dây, băng dính, keo và một tờ giấy lớn. Nhóm em tự quyết định mỗi mảnh là bộ phận nào.',
    steps: [
      {
        text: 'Use the materials to build a picture of a **plant cell** on the big sheet of paper.',
        textVn: 'Dùng các vật liệu để dựng hình một **tế bào thực vật** trên tờ giấy lớn.',
      },
      {
        text: 'Ask another group, or Mr Bowen, to check that every piece is in the right place.',
        textVn: 'Nhờ một nhóm khác, hoặc thầy Bowen, kiểm tra xem mọi mảnh đã đúng vị trí chưa.',
      },
      {
        text: 'Now **remove some pieces** to turn your picture into an **animal cell**.',
        textVn: 'Bây giờ **bỏ bớt một số mảnh** để biến hình của em thành một **tế bào động vật**.',
      },
    ],
    reveal: {
      label: 'Page 15, Question 2 — what did you have to take away?',
      labelVn: 'Trang 15, Câu hỏi 2 — em đã phải bỏ đi những gì?',
      answer: 'The **cell wall**, the **chloroplasts** and the **sap vacuole**. Everything else stays exactly where it was — and now your cell is free to be any shape at all.',
      answerVn: '**Thành tế bào**, **lục lạp** và **không bào**. Mọi thứ khác giữ nguyên vị trí — và giờ tế bào của em được tự do mang bất kỳ hình dạng nào.',
    },
  },

  // ── Section 10: the rule that always works ───────────────────────────────
  {
    layout: 'statement',
    accent: GREEN,
    eyebrow: 'Think about it',
    eyebrowVn: 'Hãy suy nghĩ',
    title: 'The One Clue That Always Works',
    titleVn: 'Dấu hiệu luôn luôn đúng',
    label: 'Discuss',
    labelVn: 'Thảo luận',
    labelIcon: 'MessageSquare',
    text: 'Can you **always** tell whether a picture shows a plant cell or an animal cell?',
    textVn: 'Em có **luôn luôn** biết một bức ảnh là tế bào thực vật hay động vật không?',
    sub: 'What is the **most reliable** thing to look for?',
    subVn: 'Dấu hiệu **đáng tin cậy nhất** cần tìm là gì?',
    reveal: {
      label: 'Reveal',
      labelVn: 'Hiện đáp án',
      answer:
        'The **cell wall**: a straight, stiff edge, with cells packed together like bricks. Only plants have one, so it never lets you down.\n\n' +
        'Green is the clue that does. **No chloroplasts does not mean animal.** Photograph C was an onion — and an onion bulb grows underground, in the dark.',
      answerVn:
        '**Thành tế bào**: đường viền thẳng và cứng, các tế bào xếp sát nhau như những viên gạch. Chỉ thực vật mới có, nên dấu hiệu này không bao giờ sai.\n\n' +
        'Màu xanh mới là dấu hiệu đánh lừa em. **Không có lục lạp không có nghĩa là tế bào động vật.** Ảnh C là củ hành — mà củ hành mọc dưới đất, trong bóng tối.',
    },
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
      '> Your notebook should now have **7 things written down** and **1 labelled drawing** in it. Check.',
    contentVn:
      'Đọc từng dòng và thành thật với chính mình. Điều nào em chưa giải thích được cho bạn vắng mặt hôm nay, tối nay hãy xem lại.\n\n' +
      '> Trong vở của em bây giờ phải có **7 mục đã chép** và **1 hình vẽ có chú thích**.',
    items: [
      { text: 'Name the **four parts** every animal cell has, and say what each one does.', textVn: 'Kể **bốn bộ phận** mọi tế bào động vật đều có, và nhiệm vụ của từng cái.' },
      { text: 'Name the **three parts** a plant cell has that an animal cell has not.', textVn: 'Kể **ba bộ phận** tế bào thực vật có mà tế bào động vật không có.' },
      { text: 'Explain why an animal cell has **no fixed shape**.', textVn: 'Giải thích vì sao tế bào động vật **không có hình dạng cố định**.' },
      { text: 'Look at a photograph and say **plant or animal** — with a reason.', textVn: 'Nhìn một bức ảnh và nói được **thực vật hay động vật** — kèm lý do.' },
      { text: 'Say what a **stain** is and why scientists use one.', textVn: 'Nói **thuốc nhuộm** là gì và vì sao các nhà khoa học dùng nó.' },
      { text: 'Put the steps of **making a slide** in the right order.', textVn: 'Sắp xếp đúng thứ tự các bước **làm tiêu bản**.' },
    ],
  },

  // ── Section 11: homework ─────────────────────────────────────────────────
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
        text: 'Read the whole of Unit 1.2, **pages 13 to 16**.',
        textVn: 'Đọc toàn bộ Bài 1.2, **trang 13 đến 16**.',
      },
      {
        tone: 'homework',
        badge: 'Writing Task',
        badgeVn: 'Bài viết',
        icon: 'Pencil',
        text: 'Turn to **page 15** and copy **Questions 1 and 2** into your notebook. Answer in **full English sentences**. For Question 1, give a **reason** for every photograph — the word **because** should appear three times.',
        textVn: 'Mở **trang 15**, chép **Câu hỏi 1 và 2** vào vở. Trả lời bằng **câu tiếng Anh đầy đủ**. Với Câu hỏi 1, nêu **lý do** cho từng ảnh — từ **because** phải xuất hiện ba lần.',
      },
    ],
  },
]
