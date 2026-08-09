// content/y7-science/U01_3/slides.js
// Year 7 Science · 1.3 Specialised cells. Wednesday 12 August 2026.
//
// Same house style as 1.1 and 1.2: teal section headers, crimson for animal
// cells, green for plant, purple for activities, red for homework, and the
// Learner's Book orange for every key word students copy down. Anything a
// student must write goes in an orange "Write This Down" panel or an orange `>`
// bumper — never plain body text.
//
// The spine is one idea, and it is both the science and the English: STRUCTURE
// FITS FUNCTION. A cell's shape is the reason it can do its job. Every cell in
// the lesson is taught the same way — name the job, name the special feature,
// then join them with the sentence frame "adapted to ___ because it has ___".
// The class already met the cell PARTS in 1.1 and 1.2; here those parts get a
// purpose. Each drawn diagram is paired with the real cell under a microscope.
//
// Source: Learner's Book Unit 1.3, pages 17–21. The structure-function table on
// the Draw This slide is the book's own Activity 1.3.1. Figures are drawn in
// diagrams.js; photographs are openly licensed (see images/CREDITS.json).
import { DIAGRAMS } from './diagrams.js'
import { SpecialisedCellWidget } from './widgets.jsx'
import blood from './images/blood.jpg'
import neuron from './images/neuron.jpg'
import trachea from './images/trachea.jpg'
import roothair from './images/roothair.jpg'
import leaf from './images/leaf.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const CRIMSON = '#c2185b' // the animal-cell colour, carried from 1.1 and 1.2

export const slides = [
  // ── Section 1: reload the parts, then ask the question ───────────────────
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Dna',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    eyebrow: '1.3 Specialised cells',
    eyebrowVn: '1.3 Tế bào chuyên hoá',
    date: '12 Aug 2026',
    title: 'Cells With a Job to Do',
    titleVn: 'Những tế bào có nhiệm vụ riêng',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'With a partner, finish each sentence: **Cell membranes …   ·   Cell walls …   ·   A nucleus …   ·   Chloroplasts …** Be ready to share.',
      textVn: 'Cùng bạn hoàn thành mỗi câu: **Cell membranes …   ·   Cell walls …   ·   A nucleus …   ·   Chloroplasts …** Hãy sẵn sàng chia sẻ.',
    },
  },
  {
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'Getting started · check your sentences',
    eyebrowVn: 'Khởi động · kiểm tra câu của em',
    label: 'Share',
    labelVn: 'Chia sẻ',
    labelIcon: 'CheckCircle2',
    text: 'Every one of those parts has a **job**.',
    textVn: 'Mỗi bộ phận đó đều có một **nhiệm vụ**.',
    sub: 'A cell **membrane** controls what goes in and out. A cell **wall** holds a plant cell in shape. A **nucleus** controls the cell. **Chloroplasts** make food. Today: whole cells with jobs.',
    subVn: '**Màng** tế bào kiểm soát những gì ra vào. **Thành** tế bào giữ hình dạng cho tế bào thực vật. **Nhân** điều khiển tế bào. **Lục lạp** tạo thức ăn. Hôm nay: cả những tế bào có nhiệm vụ riêng.',
  },
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'In pairs — no answer yet, just think',
    eyebrowVn: 'Theo cặp — chưa cần đáp án, chỉ suy nghĩ',
    title: 'Are All Your Cells the Same?',
    titleVn: 'Tất cả tế bào của em có giống nhau không?',
    text: 'Last lesson you learned you are built from about **100 trillion cells**.',
    textVn: 'Tiết trước em đã biết mình được tạo nên từ khoảng **100 nghìn tỉ tế bào**.',
    sub: 'Are they **all the same**? Name **three different jobs** a cell might do.',
    subVn: 'Chúng có **giống hệt nhau** không? Kể **ba nhiệm vụ khác nhau** mà một tế bào có thể làm.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Boxes',
    eyebrow: 'The big idea',
    eyebrowVn: 'Ý tưởng lớn',
    title: 'Different Jobs, Different Shapes',
    titleVn: 'Nhiệm vụ khác nhau, hình dạng khác nhau',
    ratio: 50,
    inlineSvg: DIAGRAMS.THREE_SHAPES,
    content:
      'No — your cells are **not** all the same. There are many kinds, and each kind has a different **function**: the job it does.\n\n' +
      'Each one is **specialised** — its shape is built to do that job really well. We say the cell is **adapted** to its function.',
    contentVn:
      'Không — tế bào của em **không** giống hệt nhau. Có rất nhiều loại, và mỗi loại có một **chức năng** khác nhau: nhiệm vụ nó làm.\n\n' +
      'Mỗi loại đều **chuyên hoá** — hình dạng của nó được tạo ra để làm tốt nhiệm vụ đó. Ta nói tế bào **thích nghi** với chức năng của nó.',
    notes: [
      {
        tone: 'write',
        text:
          '**Function:** the job a cell does.\n' +
          '**Specialised / adapted:** the cell has a structure that helps it do its function really well.',
        textVn:
          '**Chức năng (function):** nhiệm vụ mà tế bào làm.\n' +
          '**Chuyên hoá / thích nghi (specialised / adapted):** tế bào có cấu trúc giúp nó làm tốt chức năng của mình.',
      },
    ],
  },

  // ── Section 2: three specialised animal cells ────────────────────────────
  {
    layout: 'split',
    accent: CRIMSON,
    icon: 'Droplet',
    eyebrow: 'Animal cell 1',
    eyebrowVn: 'Tế bào động vật 1',
    title: 'Red Blood Cell',
    titleVn: 'Tế bào hồng cầu',
    ratio: 48,
    inlineSvg: DIAGRAMS.RED_BLOOD_CELL,
    content:
      'Its **function** is to carry **oxygen** around your body.\n\n' +
      'Its cytoplasm is full of a red **pigment** (a colour) called **haemoglobin**, and haemoglobin is what carries the oxygen.',
    contentVn:
      '**Chức năng** của nó là vận chuyển **oxy** đi khắp cơ thể.\n\n' +
      'Tế bào chất của nó chứa đầy một **sắc tố** đỏ tên là **haemoglobin**, và chính haemoglobin vận chuyển oxy.',
    notes: [
      {
        tone: 'write',
        text: '**Red blood cell:** carries oxygen. It is full of the red pigment **haemoglobin** and has **no nucleus**, leaving more room for it.',
        textVn: '**Tế bào hồng cầu:** vận chuyển oxy. Nó chứa đầy sắc tố đỏ **haemoglobin** và **không có nhân**, để có nhiều chỗ hơn cho haemoglobin.',
      },
    ],
    reveal: {
      label: 'Why has it got no nucleus?',
      labelVn: 'Vì sao nó không có nhân?',
      answer: 'Almost every other cell keeps its nucleus. The red blood cell gives its up so there is **more room inside for haemoglobin** — so it can carry even more oxygen. The structure fits the job.',
      answerVn: 'Gần như mọi tế bào khác đều giữ nhân. Tế bào hồng cầu bỏ nhân đi để có **nhiều chỗ hơn cho haemoglobin** — nhờ đó chở được nhiều oxy hơn. Cấu trúc phù hợp với nhiệm vụ.',
    },
  },
  {
    layout: 'split',
    accent: CRIMSON,
    icon: 'Zap',
    eyebrow: 'Animal cell 2',
    eyebrowVn: 'Tế bào động vật 2',
    title: 'Neurone (Nerve Cell)',
    titleVn: 'Tế bào thần kinh (nơ-ron)',
    ratio: 48,
    side: 'left',
    inlineSvg: DIAGRAMS.NEURONE,
    content:
      'Its **function** is to carry **electrical signals** from one part of the body to another — for example, from your brain to a muscle, to make it move.\n\n' +
      'The **axon** is a very long strand, so a signal can travel a long way, very fast. The short **dendrites** collect signals from nearby cells.',
    contentVn:
      '**Chức năng** của nó là truyền **tín hiệu điện** từ bộ phận này sang bộ phận khác — ví dụ, từ não đến một cơ, để làm cơ cử động.\n\n' +
      '**Sợi trục (axon)** là một sợi rất dài, nên tín hiệu truyền được rất xa và rất nhanh. Các **sợi nhánh (dendrite)** ngắn thu tín hiệu từ các tế bào lân cận.',
    notes: [
      {
        tone: 'write',
        text: '**Neurone:** carries electrical signals. It has a very long **axon**, so signals travel far and fast, and short **dendrites** to collect them.',
        textVn: '**Tế bào thần kinh:** truyền tín hiệu điện. Nó có **sợi trục** rất dài để tín hiệu đi xa và nhanh, và các **sợi nhánh** ngắn để thu tín hiệu.',
      },
    ],
  },
  {
    layout: 'split',
    accent: CRIMSON,
    icon: 'Wind',
    eyebrow: 'Animal cell 3',
    eyebrowVn: 'Tế bào động vật 3',
    title: 'Ciliated Cell',
    titleVn: 'Tế bào có lông rung',
    ratio: 48,
    inlineSvg: DIAGRAMS.CILIATED_CELL,
    content:
      'These cells line the tubes from your mouth down to your lungs. Along the top edge they have tiny hairs called **cilia**, and the cilia can **move**.\n\n' +
      'Other cells there make sticky **mucus** that traps dust and germs from the air. The cilia sweep the mucus up to the back of your mouth, and you swallow it.',
    contentVn:
      'Những tế bào này lót các ống từ miệng xuống phổi. Ở mép trên chúng có những sợi lông nhỏ gọi là **lông rung (cilia)**, và lông rung biết **chuyển động**.\n\n' +
      'Các tế bào khác ở đó tạo ra **chất nhầy (mucus)** dính, giữ lại bụi và vi khuẩn trong không khí. Lông rung quét chất nhầy lên cuối miệng, và em nuốt nó xuống.',
    notes: [
      {
        tone: 'write',
        text: '**Ciliated cell:** has tiny moving hairs called **cilia** on top. They sweep **mucus** — with its trapped dust and germs — away from the lungs.',
        textVn: '**Tế bào có lông rung:** có những sợi lông nhỏ biết chuyển động gọi là **lông rung** ở phía trên. Chúng quét **chất nhầy** — cùng bụi và vi khuẩn bị giữ lại — ra khỏi phổi.',
      },
    ],
  },
  {
    layout: 'gallery',
    accent: CRIMSON,
    icon: 'Microscope',
    columns: 3,
    copy: false,
    eyebrow: 'The same three, for real',
    eyebrowVn: 'Chính ba loại đó, ngoài đời thực',
    title: 'Down a Real Microscope',
    titleVn: 'Nhìn qua kính hiển vi thật',
    content: 'Every cell you have just drawn is a real thing. Here they are down a microscope — match each photograph to the drawing you copied.',
    contentVn: 'Mỗi tế bào em vừa vẽ đều là vật thật. Đây là chúng qua kính hiển vi — hãy ghép mỗi bức ảnh với hình em đã chép.',
    items: [
      {
        image: blood,
        term: 'Red blood cells', termVn: 'Tế bào hồng cầu',
        text: 'Flat discs with a **pale dent** in the middle. The one small purple cell is a white blood cell.',
        textVn: 'Những đĩa dẹt có **vết lõm nhạt màu** ở giữa. Tế bào tím nhỏ là một bạch cầu.',
      },
      {
        image: neuron,
        term: 'A neurone', termVn: 'Một tế bào thần kinh',
        text: 'The green cell, with its **long arms** reaching far across the picture.',
        textVn: 'Tế bào màu xanh lá, với những **nhánh dài** vươn ra khắp bức ảnh.',
      },
      {
        image: trachea,
        term: 'Ciliated cells', termVn: 'Tế bào có lông rung',
        text: 'The lining of the windpipe. The **fuzzy dark edge** at the top is the cilia.',
        textVn: 'Lớp lót khí quản. **Mép sẫm lởm chởm** ở trên chính là lông rung.',
      },
    ],
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'HelpCircle',
    eyebrow: 'Learner’s Book, page 19 · Questions 1 and 2',
    eyebrowVn: 'Sách học sinh, trang 19 · Câu hỏi 1 và 2',
    title: 'What Do They Share?',
    titleVn: 'Chúng có điểm gì chung?',
    ratio: 55,
    content:
      'Look back at the three animal cells.\n\n' +
      '> **1.** Name **two things** all three cells have in common.\n' +
      '> **2.** How can you tell they are all **animal** cells, not plant cells?',
    contentVn:
      'Hãy nhìn lại ba tế bào động vật.\n\n' +
      '> **1.** Kể **hai thứ** mà cả ba tế bào đều có chung.\n' +
      '> **2.** Làm sao em biết cả ba đều là tế bào **động vật**, không phải thực vật?',
    reveal: {
      label: 'Check your answers',
      labelVn: 'Kiểm tra đáp án',
      answer:
        '**1.** They all have **cytoplasm** and a **cell membrane** — and all three are **specialised**. Careful: they do **not** all have a nucleus, because the red blood cell has none!\n\n' +
        '**2.** They have **no cell wall, no chloroplasts and no big vacuole** — those are the plant-only parts from last lesson.',
      answerVn:
        '**1.** Cả ba đều có **tế bào chất** và **màng tế bào** — và cả ba đều **chuyên hoá**. Cẩn thận: chúng **không** đều có nhân, vì tế bào hồng cầu không có nhân!\n\n' +
        '**2.** Chúng **không có thành tế bào, không có lục lạp và không có không bào lớn** — đó là những bộ phận chỉ thực vật mới có, từ tiết trước.',
    },
  },

  // ── Section 3: two specialised plant cells ───────────────────────────────
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Droplet',
    eyebrow: 'Plant cell 1',
    eyebrowVn: 'Tế bào thực vật 1',
    title: 'Root Hair Cell',
    titleVn: 'Tế bào lông hút',
    ratio: 48,
    side: 'left',
    inlineSvg: DIAGRAMS.ROOT_HAIR_CELL,
    content:
      'Root hair cells are found on the outside of a plant’s **roots**. Their **function** is to **absorb** — soak up — water from the soil.\n\n' +
      'Each cell has a long, thin **extension** that pushes out between the soil grains, giving a big surface for water to move in through.',
    contentVn:
      'Tế bào lông hút nằm ở mặt ngoài **rễ** cây. **Chức năng** của chúng là **hấp thụ** — hút — nước từ đất.\n\n' +
      'Mỗi tế bào có một phần **kéo dài** dài và mảnh, đẩy ra giữa các hạt đất, tạo bề mặt lớn để nước đi vào.',
    notes: [
      {
        tone: 'write',
        text: '**Root hair cell:** absorbs water from the soil. Its long, thin **root hair** gives a big surface, so water moves in easily.',
        textVn: '**Tế bào lông hút:** hấp thụ nước từ đất. **Lông hút** dài và mảnh tạo bề mặt lớn, nên nước đi vào dễ dàng.',
      },
    ],
    reveal: {
      label: 'Page 20, Question 4 — which parts does the water pass through?',
      labelVn: 'Trang 20, Câu hỏi 4 — nước đi qua những bộ phận nào?',
      answer: 'Going from the soil to the sap vacuole, the water passes through the **cell wall → cell membrane → cytoplasm → vacuole**, in that order.',
      answerVn: 'Đi từ đất vào không bào, nước đi qua **thành tế bào → màng tế bào → tế bào chất → không bào**, theo đúng thứ tự đó.',
    },
  },
  {
    layout: 'statement',
    accent: GREEN,
    icon: 'Lightbulb',
    eyebrow: 'Think about it',
    eyebrowVn: 'Hãy suy nghĩ',
    title: 'Why No Chloroplasts?',
    titleVn: 'Vì sao không có lục lạp?',
    text: 'A root hair cell is a **plant** cell — but it has **no chloroplasts**. Why not?',
    textVn: 'Tế bào lông hút là tế bào **thực vật** — nhưng nó **không có lục lạp**. Vì sao?',
    reveal: {
      label: 'Reveal',
      labelVn: 'Hiện đáp án',
      answer: 'Chloroplasts use **sunlight** to make food. Roots are **underground, in the dark**, where no sunlight reaches — so chloroplasts would be useless there. A cell only builds the parts its job needs.',
      answerVn: 'Lục lạp dùng **ánh sáng mặt trời** để tạo thức ăn. Rễ nằm **dưới đất, trong bóng tối**, nơi không có ánh sáng — nên lục lạp sẽ vô dụng ở đó. Tế bào chỉ tạo những bộ phận mà nhiệm vụ của nó cần.',
    },
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Sun',
    eyebrow: 'Plant cell 2',
    eyebrowVn: 'Tế bào thực vật 2',
    title: 'Palisade Cell',
    titleVn: 'Tế bào mô giậu',
    ratio: 48,
    inlineSvg: DIAGRAMS.PALISADE_CELL,
    content:
      'Palisade cells are found in the **leaves** of a plant. Their **function** is to make food by **photosynthesis**.\n\n' +
      'They are packed with **chloroplasts**, which contain the green **chlorophyll** that absorbs energy from sunlight. They sit near the top of the leaf, closest to the light.',
    contentVn:
      'Tế bào mô giậu nằm trong **lá** cây. **Chức năng** của chúng là tạo thức ăn bằng **quang hợp**.\n\n' +
      'Chúng chứa đầy **lục lạp**, bên trong có **diệp lục** màu xanh hấp thụ năng lượng từ ánh sáng mặt trời. Chúng nằm gần mặt trên của lá, gần ánh sáng nhất.',
    notes: [
      {
        tone: 'write',
        text: '**Palisade cell:** makes food by photosynthesis. It is packed with **chloroplasts**, near the top of the leaf where the sunlight is.',
        textVn: '**Tế bào mô giậu:** tạo thức ăn bằng quang hợp. Nó chứa đầy **lục lạp**, nằm gần mặt trên của lá nơi có ánh sáng.',
      },
    ],
  },
  {
    layout: 'gallery',
    accent: GREEN,
    icon: 'Microscope',
    tone: 'plant',
    columns: 2,
    eyebrow: 'The plant cells, for real',
    eyebrowVn: 'Tế bào thực vật, ngoài đời thực',
    title: 'Down a Real Microscope',
    titleVn: 'Nhìn qua kính hiển vi thật',
    content: 'And the two plant cells, as they really look. Match each one to the drawing you copied.',
    contentVn: 'Và hai tế bào thực vật, đúng như chúng trông thật. Hãy ghép mỗi cái với hình em đã chép.',
    items: [
      {
        image: roothair,
        term: 'Root hairs', termVn: 'Lông hút',
        text: 'Cress seeds sprouting in soil. The **white fuzz** on each young root is thousands of root hairs.',
        textVn: 'Hạt cải xoong nảy mầm trong đất. **Lớp lông trắng** trên mỗi rễ non là hàng nghìn lông hút.',
      },
      {
        image: leaf,
        term: 'Palisade cells', termVn: 'Tế bào mô giậu',
        text: 'A slice through a leaf. The **tall purple columns** just under the top are the palisade cells, full of chloroplasts.',
        textVn: 'Một lát cắt qua lá. Những **cột tím cao** ngay dưới mặt trên là tế bào mô giậu, chứa đầy lục lạp.',
      },
    ],
  },

  // ── Section 4: the English, the table, the drill ─────────────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'BookOpen',
    eyebrow: 'Every class is an English class',
    eyebrowVn: 'Mỗi tiết học đều là tiết tiếng Anh',
    title: 'Structure Fits Function',
    titleVn: 'Cấu trúc phù hợp với chức năng',
    ratio: 45,
    content:
      'Every cell today told the **same kind of story**: it has a job, and a special feature that helps it do that job.\n\n' +
      'There is one English sentence that says it every time. Learn the frame and you can describe **any** specialised cell.',
    contentVn:
      'Mọi tế bào hôm nay đều kể **cùng một kiểu câu chuyện**: nó có một nhiệm vụ, và một đặc điểm đặc biệt giúp nó làm nhiệm vụ đó.\n\n' +
      'Có một câu tiếng Anh nói điều đó mỗi lần. Học mẫu câu này thì em mô tả được **bất kỳ** tế bào chuyên hoá nào.',
    notes: [
      {
        tone: 'write',
        text:
          '**The sentence frame:**\n' +
          'A [cell] is **adapted to** [its job] **because it has** [its special feature].\n' +
          '“A red blood cell is adapted to carry oxygen because it has no nucleus and is full of haemoglobin.”',
        textVn:
          '**Mẫu câu:**\n' +
          'A [cell] is **adapted to** [nhiệm vụ] **because it has** [đặc điểm đặc biệt].\n' +
          '“A red blood cell is adapted to carry oxygen because it has no nucleus and is full of haemoglobin.”',
      },
    ],
    reveal: {
      label: 'Your turn — finish this one out loud',
      labelVn: 'Đến lượt em — hãy hoàn thành câu này',
      prompt: '“A palisade cell is adapted to ______ because it has ______ .”',
      promptVn: '“A palisade cell is adapted to ______ because it has ______ .”',
      answer: 'A palisade cell is adapted to **make food by photosynthesis** because it has **lots of chloroplasts near the top of the leaf**.',
      answerVn: 'A palisade cell is adapted to **make food by photosynthesis** because it has **lots of chloroplasts near the top of the leaf**. (Tế bào mô giậu thích nghi để quang hợp vì nó có nhiều lục lạp gần mặt trên của lá.)',
    },
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Table',
    eyebrow: 'Learner’s Book, Activity 1.3.1',
    eyebrowVn: 'Sách học sinh, Hoạt động 1.3.1',
    title: 'Build the Table',
    titleVn: 'Lập bảng',
    ratio: 52,
    inlineSvg: DIAGRAMS.SF_TABLE,
    drawThis: true,
    content: 'Copy this table into your notebook. The **red blood cell** row is done for you as an example. Fill in the **neurone** and the **ciliated cell**, then add a row for each **plant** cell.',
    contentVn: 'Chép bảng này vào vở. Dòng **tế bào hồng cầu** đã được làm sẵn làm ví dụ. Hãy điền **tế bào thần kinh** và **tế bào có lông rung**, rồi thêm một dòng cho mỗi **tế bào thực vật**.',
    notes: [
      {
        tone: 'write',
        text: 'Give your table a **title**, and use a **ruler** for the lines. Four columns: **Name · Function · Special structure · How this helps.**',
        textVn: 'Đặt **tiêu đề** cho bảng, và dùng **thước** kẻ dòng. Bốn cột: **Tên · Chức năng · Cấu trúc đặc biệt · Điều này giúp ích thế nào.**',
      },
    ],
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Repeat',
    title: 'Say It Before You See It',
    titleVn: 'Nói trước khi nhìn thấy',
    ratio: 45,
    content: 'One cell at a time. For each photo, say its **job** and its **special feature** out loud **before** we reveal them — then check.',
    contentVn: 'Mỗi lần một tế bào. Với mỗi bức ảnh, hãy nói to **nhiệm vụ** và **đặc điểm đặc biệt** của nó **trước khi** ta hiện đáp án — rồi kiểm tra.',
    notes: [
      {
        tone: 'task',
        badge: 'On your whiteboard',
        badgeVn: 'Trên bảng con',
        text: 'Write the cell’s job **before** anyone presses the button. Use the sentence frame if it helps.',
        textVn: 'Viết nhiệm vụ của tế bào **trước khi** có ai bấm nút. Dùng mẫu câu nếu cần.',
      },
    ],
    widget: SpecialisedCellWidget,
  },

  // ── Section 5: recap and homework ────────────────────────────────────────
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before you leave',
    eyebrowVn: 'Trước khi ra về',
    title: 'Can You Do All Five?',
    titleVn: 'Em làm được cả năm điều này chứ?',
    content:
      '> Your notebook should now have the **key words**, **five cells described**, and the **structure-function table** started. Check.',
    contentVn:
      '> Trong vở của em bây giờ phải có các **từ khoá**, **năm tế bào được mô tả**, và **bảng cấu trúc–chức năng** đã bắt đầu. Hãy kiểm tra.',
    items: [
      { text: 'Say what **function** and **specialised** mean.', textVn: 'Nói được **chức năng** và **chuyên hoá** nghĩa là gì.' },
      { text: 'Name the **three** specialised animal cells and each one’s job.', textVn: 'Kể **ba** tế bào động vật chuyên hoá và nhiệm vụ của từng cái.' },
      { text: 'Name the **two** specialised plant cells and each one’s job.', textVn: 'Kể **hai** tế bào thực vật chuyên hoá và nhiệm vụ của từng cái.' },
      { text: 'Use the frame: **adapted to ___ because it has ___**.', textVn: 'Dùng mẫu câu: **adapted to ___ because it has ___**.' },
      { text: 'Explain why a root hair cell has **no chloroplasts**.', textVn: 'Giải thích vì sao tế bào lông hút **không có lục lạp**.' },
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
    content: 'Take your science notebook home with you.',
    contentVn: 'Hãy mang vở khoa học về nhà.',
    notes: [
      {
        tone: 'homework',
        badge: 'Reading Task',
        badgeVn: 'Bài đọc',
        icon: 'BookOpen',
        text: 'Read the whole of Unit 1.3, **pages 17 to 21**.',
        textVn: 'Đọc toàn bộ Bài 1.3, **trang 17 đến 21**.',
      },
      {
        tone: 'homework',
        badge: 'Writing Task',
        badgeVn: 'Bài viết',
        icon: 'Pencil',
        text: 'Finish the **structure-function table** for all five cells (Activities 1.3.1 and 1.3.2). Then answer **Questions 1 to 4** (pages 19–20) in **full English sentences**.',
        textVn: 'Hoàn thành **bảng cấu trúc–chức năng** cho cả năm tế bào (Hoạt động 1.3.1 và 1.3.2). Rồi trả lời **Câu hỏi 1 đến 4** (trang 19–20) bằng **câu tiếng Anh đầy đủ**.',
      },
    ],
  },
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    title: 'Lesson Complete!',
    titleVn: 'Hoàn thành bài học!',
    subtitle: 'You can name five specialised cells and explain how each one’s structure fits its function. Exit question: a **sperm cell** has a long **tail**. What do you think its job is — and how does the tail help it?',
    subtitleVn: 'Em có thể kể năm tế bào chuyên hoá và giải thích cấu trúc của mỗi cái phù hợp với chức năng ra sao. Câu hỏi ra về: một **tế bào tinh trùng** có một cái **đuôi** dài. Em nghĩ nhiệm vụ của nó là gì — và cái đuôi giúp gì cho nó?',
  },
]
