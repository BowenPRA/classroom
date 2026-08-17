// content/y7-science/U01_4/slides.js
// Year 7 Science · 1.4 Cells, tissues and organs. Tuesday 18 August 2026.
//
// Same house style as 1.1-1.3: teal section headers, crimson for animal, green
// for plant, purple for activities, red for homework, and the Learner's Book
// orange for every key word students copy down. Anything a student must write
// goes in an orange "Write This Down" panel or an orange `>` bumper — never
// plain body text.
//
// The spine is one ladder, climbed once, with ONE example on every rung:
//   ciliated cell → ciliated epithelium → a lung → the breathing system → you.
// The class already owns the bottom rung: they drew that exact cell last lesson.
// So 1.4 is not five new ideas, it is one familiar cell walked upwards, and the
// Draw This at the end is that walk.
//
// THE COPY-DOWN PLAN, because this is what keeps the lesson from drowning.
// Four definitions, each written at the moment it is taught and nowhere else:
//   · tissue      (after the ciliated epithelium pays off the hook),
//   · organ       (after the leaf turns out to hold four tissues),
//   · organ system + organism (one panel, two lines, where the book puts them),
//   · two sentences of their own for Question 2, which is a writing task,
//   · the LADDER, which is the deck's one Draw This.
// Question 3 in the book is "copy and complete" four sentences — but those four
// sentences ARE the four definitions, so copying them again would be writing
// every fact twice. Instead Q3 is run as a hunt: the answers are already in
// their notebook, and finding them is the check. That is the 1.3 lesson learned.
//
// MORE ACTIVITY THAN 1.3, which is what was asked for. Seven times the class
// stops writing and does something: draw the body outline (starter), stand and
// point to five organs on themselves, argue the hook in pairs, write two
// sentences of their own English, find the organs on a real X-ray, a round-the-
// group organ relay with no repeats, and the fingers-up levels drill. The
// longest unbroken stretch of copying is one definition.
//
// Source: Learner's Book Unit 1.4, pages 22-25. Getting started, Questions 1-3
// and Activity 1.4.1 are the book's own. Figures are drawn in diagrams.js;
// photographs are openly licensed (see images/CREDITS.json).
import { DIAGRAMS } from './diagrams.js'
import { LevelDrillWidget } from './widgets.jsx'
import trachea from './images/trachea.jpg'
import onionepi from './images/onionepi.jpg'
import onion from './images/onion.jpg'
import leaf from './images/leaf.jpg'
import chestxray from './images/chestxray.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const CRIMSON = '#c2185b' // the animal colour, carried from 1.1-1.3

export const slides = [
  // ── Section 1: the starter, and a question they cannot yet answer ────────
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Boxes',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    eyebrow: '1.4 Cells, tissues and organs',
    eyebrowVn: '1.4 Tế bào, mô và cơ quan',
    date: '18 Aug 2026',
    title: 'From One Cell to a Whole Body',
    titleVn: 'Từ một tế bào đến cả cơ thể',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'Draw an outline of a human body. Then sketch and label these five organs inside it: **brain · heart · stomach · intestine · lungs**. Four minutes — a rough drawing is fine.',
      textVn: 'Vẽ hình phác một cơ thể người. Rồi vẽ và ghi tên năm cơ quan này bên trong: **brain (não) · heart (tim) · stomach (dạ dày) · intestine (ruột) · lungs (phổi)**. Bốn phút — vẽ nháp là được.',
    },
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'CheckCircle2',
    eyebrow: 'Getting started · check your drawing',
    eyebrowVn: 'Khởi động · kiểm tra hình vẽ của em',
    title: 'Did You Put Them in the Right Places?',
    titleVn: 'Em đã đặt chúng đúng chỗ chưa?',
    ratio: 40,
    inlineSvg: DIAGRAMS.HUMAN_ORGANS,
    content: 'Nobody gets all five exactly right, and that is fine. The **stomach** sits higher than most people draw it, and the **intestines** fill nearly the whole space below it.',
    contentVn: 'Không ai đặt đúng cả năm cơ quan, và điều đó không sao. **Dạ dày** nằm cao hơn hầu hết mọi người vẽ, và **ruột** chiếm gần hết khoảng trống bên dưới.',
    notes: [
      {
        tone: 'task',
        badge: 'Everybody stand up',
        badgeVn: 'Cả lớp đứng lên',
        icon: 'Users',
        text: 'Point to each one **on yourself** as I say it: brain — lungs — heart — stomach — intestines. Then sit down.',
        textVn: 'Chỉ vào từng cơ quan **trên cơ thể em** khi thầy đọc: brain — lungs — heart — stomach — intestines. Rồi ngồi xuống.',
      },
    ],
  },
  // The hook. The class drew this exact cell last lesson, so they recognise it
  // instantly — and the slide carries no answer, no number and no second cell.
  // The empty white space around it IS the argument. Take guesses first.
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'In pairs — two minutes, and no calling out',
    eyebrowVn: 'Theo cặp — hai phút, không nói to đáp án',
    title: 'Could This One Cell Keep Your Lungs Clean?',
    titleVn: 'Một tế bào này có giữ sạch phổi em được không?',
    inlineSvg: DIAGRAMS.ONE_CILIATED_CELL,
    caption: 'You met this cell last lesson. Its cilia beat about **twelve times every second**, sweeping dust and germs up and away from your lungs. Here is exactly one of them. Would **one** be enough? Agree on a reason with your partner.',
    captionVn: 'Em đã gặp tế bào này tiết trước. Lông rung của nó đập khoảng **mười hai lần mỗi giây**, quét bụi và vi khuẩn ra xa khỏi phổi. Đây là đúng một tế bào như vậy. **Một** cái có đủ không? Hãy cùng bạn thống nhất một lý do.',
  },
  {
    layout: 'split',
    accent: CRIMSON,
    icon: 'Layers',
    eyebrow: 'The answer',
    eyebrowVn: 'Đáp án',
    title: 'No. It Takes Millions, Side by Side.',
    titleVn: 'Không. Phải cần hàng triệu, sát cạnh nhau.',
    ratio: 52,
    inlineSvg: DIAGRAMS.CILIATED_EPITHELIUM,
    content:
      'One cell sweeps a speck. To clear a whole airway you need **millions** of them, joined edge to edge, all beating the same way at the same time — like grass bending in the wind.\n\n' +
      'A group of cells like that has its own name, and it is the first new word today: a **tissue**.',
    contentVn:
      'Một tế bào chỉ quét được một hạt bụi. Để làm sạch cả đường thở cần **hàng triệu** tế bào, nối liền nhau, cùng đập một hướng cùng một lúc — như cỏ ngả theo gió.\n\n' +
      'Một nhóm tế bào như thế có tên riêng, và đó là từ mới đầu tiên hôm nay: **mô (tissue)**.',
    notes: [
      {
        tone: 'write',
        text: '**Tissue:** a group of **similar** cells, all working together to carry out **one particular job**.',
        textVn: '**Mô (tissue):** một nhóm tế bào **giống nhau**, cùng làm việc với nhau để thực hiện **một nhiệm vụ nhất định**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: CRIMSON,
    icon: 'Microscope',
    eyebrow: 'The real thing',
    eyebrowVn: 'Vật thật',
    title: 'Ciliated Epithelium',
    titleVn: 'Biểu mô có lông rung',
    ratio: 45,
    image: trachea,
    content: 'The lining of a real windpipe. Every cell along that edge is the **same kind** of cell, and the **fuzzy dark band** on top is millions of cilia.\n\nIts name is **ciliated epithelium** — and *epithelium* just means a tissue that covers a surface.',
    contentVn: 'Lớp lót của một khí quản thật. Mọi tế bào dọc mép đó đều **cùng một loại**, và **dải sẫm lởm chởm** phía trên là hàng triệu lông rung.\n\nTên của nó là **biểu mô có lông rung (ciliated epithelium)** — và *epithelium* chỉ có nghĩa là mô phủ lên một bề mặt.',
    reveal: {
      label: 'Page 23, Question 1 — what is this tissue’s function?',
      labelVn: 'Trang 23, Câu hỏi 1 — chức năng của mô này là gì?',
      answer: 'To **keep the airways clean**: the cilia sweep mucus, and all the dust and germs trapped in it, **up and away from the lungs**. One ciliated cell does that job in one tiny spot. The tissue does it along the whole tube.',
      answerVn: 'Để **giữ sạch đường thở**: lông rung quét chất nhầy, cùng toàn bộ bụi và vi khuẩn dính trong đó, **lên và ra xa khỏi phổi**. Một tế bào có lông rung làm việc đó ở một điểm nhỏ. Cả mô làm việc đó dọc toàn bộ ống.',
    },
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Leaf',
    eyebrow: 'Plants have tissues too',
    eyebrowVn: 'Thực vật cũng có mô',
    title: 'Onion Epidermis',
    titleVn: 'Biểu bì hành tây',
    ratio: 52,
    side: 'left',
    inlineSvg: DIAGRAMS.ONION_EPIDERMIS,
    content:
      '**Tissue** is not a human word, or even an animal word. Cut open an onion and every layer inside is wrapped in a thin skin. That skin is a tissue, and it is called the **onion epidermis**.\n\n' +
      'Look at what makes it a tissue: every cell is the **same kind**, they are **joined edge to edge** with no gaps, and together they do **one job** — covering and protecting the surface.',
    contentVn:
      '**Mô** không phải là từ chỉ dành cho người, cũng không chỉ dành cho động vật. Bổ củ hành ra, mỗi lớp bên trong đều được bọc bởi một lớp da mỏng. Lớp da đó là một mô, và nó tên là **biểu bì hành tây (onion epidermis)**.\n\n' +
      'Hãy xem điều gì làm nó thành một mô: mọi tế bào đều **cùng loại**, chúng **nối liền nhau** không có khe hở, và cùng nhau làm **một nhiệm vụ** — che phủ và bảo vệ bề mặt.',
  },
  {
    layout: 'compare',
    accent: GREEN,
    icon: 'ScanEye',
    eyebrow: 'The same skin, twice',
    eyebrowVn: 'Cùng một lớp da, hai lần',
    title: 'You Have Held This Tissue in Your Hand',
    titleVn: 'Em đã từng cầm mô này trên tay',
    columns: [
      {
        heading: 'In the kitchen',
        headingVn: 'Trong bếp',
        accent: '#a3762f',
        icon: 'Leaf',
        image: onion,
        caption: 'A cut onion. See the **thin see-through skin** peeling away from the layers on the left? That is the piece you can lift off with your fingers.',
        captionVn: 'Một củ hành đã cắt. Thấy **lớp da mỏng trong suốt** đang bong ra khỏi các lớp ở bên trái không? Đó là mảnh em có thể bóc ra bằng tay.',
      },
      {
        heading: 'Under the microscope',
        headingVn: 'Dưới kính hiển vi',
        accent: GREEN,
        icon: 'Microscope',
        image: onionepi,
        caption: 'The same skin, magnified. It is **one cell thick**, and every cell is packed against its neighbours like bricks in a wall. That is a tissue.',
        captionVn: 'Cũng lớp da đó, phóng to lên. Nó **dày đúng một tế bào**, và mọi tế bào đều xếp sát vào nhau như gạch trong một bức tường. Đó là một mô.',
      },
    ],
  },
  // The English beat. Question 2 is the best thing in this section of the book
  // for an ESL room, and it is a WRITING task, so it goes in a write note.
  {
    layout: 'split',
    accent: TEAL,
    icon: 'BookOpen',
    eyebrow: 'Every science class is an English class',
    eyebrowVn: 'Mỗi tiết khoa học đều là tiết tiếng Anh',
    title: 'Two Kinds of Tissue',
    titleVn: 'Hai loại "tissue"',
    ratio: 46,
    content:
      'Ask for **a tissue** in a shop and you get a paper handkerchief. That is the everyday meaning, and it is **countable**: one tissue, two tissues, a box of tissues.\n\n' +
      'In science, **tissue** means a group of similar cells — and it is usually **uncountable**: we say *muscle tissue*, not *a muscle tissue*.\n\n' +
      'Same five letters, completely different meaning.',
    contentVn:
      'Xin **a tissue** ở cửa hàng thì em nhận được một tờ khăn giấy. Đó là nghĩa đời thường, và nó **đếm được**: one tissue, two tissues, a box of tissues.\n\n' +
      'Trong khoa học, **tissue** nghĩa là một nhóm tế bào giống nhau — và nó thường **không đếm được**: ta nói *muscle tissue*, chứ không nói *a muscle tissue*.\n\n' +
      'Cùng năm chữ cái, nghĩa hoàn toàn khác.',
    notes: [
      {
        tone: 'write',
        badge: 'Page 23, Question 2',
        badgeVn: 'Trang 23, Câu hỏi 2',
        text: 'Write **two sentences of your own**. In the first, use *tissue* with its **everyday** meaning. In the second, use *tissue* with its **scientific** meaning.',
        textVn: 'Viết **hai câu của riêng em**. Câu đầu dùng *tissue* với nghĩa **đời thường**. Câu sau dùng *tissue* với nghĩa **khoa học**.',
      },
    ],
    reveal: {
      label: 'If you are stuck — two examples',
      labelVn: 'Nếu em bí — hai ví dụ',
      answer:
        '**Everyday:** “Mr Bowen sneezed, so he took **a tissue** out of the box.”\n\n' +
        '**Scientific:** “The wall of the stomach contains **muscle tissue**.”\n\n' +
        'Now write two different ones. Do not copy mine.',
      answerVn:
        '**Đời thường:** “Mr Bowen sneezed, so he took **a tissue** out of the box.” (Thầy Bowen hắt hơi, nên thầy lấy một tờ khăn giấy ra khỏi hộp.)\n\n' +
        '**Khoa học:** “The wall of the stomach contains **muscle tissue**.” (Thành dạ dày chứa mô cơ.)\n\n' +
        'Bây giờ hãy viết hai câu khác. Đừng chép của thầy.',
    },
  },

  // ── Section 2: up one rung — the organ ───────────────────────────────────
  {
    layout: 'statement',
    accent: GREEN,
    icon: 'HelpCircle',
    eyebrow: 'Before I show you — have a guess',
    eyebrowVn: 'Trước khi thầy cho xem — hãy đoán thử',
    title: 'One Leaf',
    titleVn: 'Một chiếc lá',
    text: 'A leaf is **one** part of a plant. How many **different kinds of tissue** are inside it?',
    textVn: 'Một chiếc lá là **một** bộ phận của cây. Bên trong nó có bao nhiêu **loại mô khác nhau**?',
    sub: 'Last lesson you drew the palisade cell, and it lives in a leaf. So a leaf has palisade tissue. Is that all? Hands up for a number.',
    subVn: 'Tiết trước em đã vẽ tế bào mô giậu, và nó nằm trong lá. Vậy lá có mô giậu. Chỉ có thế thôi sao? Giơ tay và nói một con số.',
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Layers',
    eyebrow: 'A leaf, cut open',
    eyebrowVn: 'Một chiếc lá, cắt ngang',
    title: 'Four Different Tissues, Stacked',
    titleVn: 'Bốn loại mô khác nhau, xếp chồng lên nhau',
    ratio: 45,
    side: 'left',
    inlineSvg: DIAGRAMS.LEAF_SECTION,
    content: 'Flat **epidermis** on top and underneath, protecting the leaf. Tall **palisade** cells packed with chloroplasts, catching the light. Loose **spongy** cells with air gaps, letting gases move around.\n\nFour tissues, four jobs, one leaf.',
    contentVn: '**Biểu bì** dẹt ở trên và ở dưới, bảo vệ lá. Tế bào **mô giậu** cao chứa đầy lục lạp, bắt lấy ánh sáng. Tế bào **mô xốp** lỏng lẻo có khe khí, cho khí di chuyển.\n\nBốn loại mô, bốn nhiệm vụ, một chiếc lá.',
    notes: [
      {
        tone: 'write',
        text: '**Organ:** a structure made of **several different tissues**, all working together. A leaf is a plant organ. So are roots and flowers.',
        textVn: '**Cơ quan (organ):** một cấu trúc tạo nên từ **nhiều loại mô khác nhau**, cùng làm việc với nhau. Lá là một cơ quan của thực vật. Rễ và hoa cũng vậy.',
      },
    ],
  },
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'Microscope',
    eyebrow: 'The real thing',
    eyebrowVn: 'Vật thật',
    title: 'A Real Leaf, Sliced Across',
    titleVn: 'Một chiếc lá thật, cắt ngang',
    image: leaf,
    caption: 'The same four layers in a real leaf, in the same order. Find the **flat cells on the top edge**, then the **tall purple columns** just below them, then the **round loose cells with gaps**, then the flat cells again at the bottom.',
    captionVn: 'Vẫn bốn lớp đó trong một chiếc lá thật, theo đúng thứ tự. Hãy tìm **các tế bào dẹt ở mép trên**, rồi **những cột tím cao** ngay bên dưới, rồi **các tế bào tròn lỏng lẻo có khe hở**, rồi lại là các tế bào dẹt ở dưới cùng.',
  },
  {
    layout: 'split',
    accent: CRIMSON,
    icon: 'ScanEye',
    eyebrow: 'Your organs — in a living person, right now',
    eyebrowVn: 'Các cơ quan của em — trong một người đang sống, ngay lúc này',
    title: 'Find Them on the X-ray',
    titleVn: 'Hãy tìm chúng trên phim X-quang',
    ratio: 45,
    image: chestxray,
    content: 'Your brain contains neurones **and** several other kinds of cell. Your heart, stomach and lungs are organs too — each one built from several tissues.\n\nLook for the two dark **lungs**, the pale **heart** shadow between them, and the black **bubble of gas** at the top of the stomach, bottom left.',
    contentVn: 'Não em chứa tế bào thần kinh **và** vài loại tế bào khác nữa. Tim, dạ dày và phổi cũng là cơ quan — mỗi cái tạo nên từ nhiều loại mô.\n\nHãy tìm hai lá **phổi** sẫm màu, bóng **tim** nhạt màu ở giữa, và **bọt khí** đen ở đỉnh dạ dày, phía dưới bên trái.',
    notes: [
      {
        tone: 'task',
        badge: 'Whiteboards',
        badgeVn: 'Bảng con',
        icon: 'Pencil',
        text: 'Which of the five organs from your starter drawing can you **not** see on this picture? Write it down.',
        textVn: 'Trong năm cơ quan em vẽ ở phần khởi động, cơ quan nào em **không** nhìn thấy trên bức ảnh này? Hãy viết ra.',
      },
    ],
  },

  // ── Section 3: up the last two rungs ─────────────────────────────────────
  {
    layout: 'statement',
    accent: TEAL,
    icon: 'HelpCircle',
    eyebrow: 'One more question before the last two words',
    eyebrowVn: 'Một câu hỏi nữa trước hai từ cuối cùng',
    title: 'Lungs Alone Are No Use',
    titleVn: 'Chỉ có phổi thì vô ích',
    text: 'Your lungs cannot get oxygen to your **big toe**.',
    textVn: 'Phổi không thể đưa oxy xuống **ngón chân cái** của em.',
    sub: 'They take the oxygen out of the air — but they cannot deliver it. With your partner: name **two more** body parts it has to pass through.',
    subVn: 'Phổi lấy oxy từ không khí — nhưng không đưa nó đi được. Cùng bạn: kể tên **hai bộ phận nữa** mà oxy phải đi qua.',
  },
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'Boxes',
    eyebrow: 'Organs working in a team',
    eyebrowVn: 'Các cơ quan làm việc theo nhóm',
    title: 'A Set of Organs, One Shared Job',
    titleVn: 'Một nhóm cơ quan, một nhiệm vụ chung',
    columns: [
      {
        heading: 'The breathing system',
        headingVn: 'Hệ hô hấp',
        accent: '#3d8fc4',
        icon: 'Droplet',
        inlineSvg: DIAGRAMS.RESPIRATORY_SYSTEM,
        caption: 'Shared job: **get oxygen into the body**. Not one of these organs can do it alone — the nose warms the air, the windpipe carries it, the lungs take the oxygen out.',
        captionVn: 'Nhiệm vụ chung: **đưa oxy vào cơ thể**. Không cơ quan nào trong số này làm được một mình — mũi làm ấm không khí, khí quản dẫn nó đi, phổi lấy oxy ra.',
      },
      {
        heading: 'The digestive system',
        headingVn: 'Hệ tiêu hoá',
        accent: '#c07a1e',
        icon: 'Sprout',
        inlineSvg: DIAGRAMS.DIGESTIVE_SYSTEM,
        caption: 'Shared job: **break food down and take it into the body**. The mouth chews, the gullet swallows, the stomach churns, the intestines absorb.',
        captionVn: 'Nhiệm vụ chung: **phân giải thức ăn và đưa nó vào cơ thể**. Miệng nhai, thực quản nuốt, dạ dày co bóp, ruột hấp thụ.',
      },
    ],
  },
  // The `compare` layout renders columns and nothing else — no notes — so the
  // last two definitions get their own slide rather than being silently dropped
  // onto the one before. It also gives them a beat of their own, which the two
  // biggest words in the lesson had earned anyway.
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'Target',
    eyebrow: 'The last two words',
    eyebrowVn: 'Hai từ cuối cùng',
    title: 'Organ System, and Organism',
    titleVn: 'Hệ cơ quan, và sinh vật',
    content: 'You have now met every word in the ladder. **Organism** is the one that surprises people: it is not a special kind of creature — it is just any living thing. A tree is an organism. So is a mosquito. So are you.',
    contentVn: 'Bây giờ em đã gặp đủ mọi từ trong bậc thang. **Sinh vật (organism)** là từ khiến nhiều người bất ngờ: nó không phải một loài đặc biệt nào — nó chỉ là bất kỳ cơ thể sống nào. Một cái cây là sinh vật. Một con muỗi cũng vậy. Em cũng vậy.',
    notes: [
      {
        tone: 'write',
        text:
          '**Organ system:** a set of **organs** that all work together to carry out the **same function**.\n' +
          '**Organism:** a living thing. It may contain many organ systems, organs and tissues.',
        textVn:
          '**Hệ cơ quan (organ system):** một nhóm **cơ quan** cùng làm việc với nhau để thực hiện **cùng một chức năng**.\n' +
          '**Sinh vật (organism):** một cơ thể sống. Nó có thể chứa nhiều hệ cơ quan, cơ quan và mô.',
      },
    ],
  },
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'Groups of four · ninety seconds',
    eyebrowVn: 'Nhóm bốn người · chín mươi giây',
    title: 'Organ Relay',
    titleVn: 'Tiếp sức cơ quan',
    text: 'Round your group, one organ each — **no repeats**.',
    textVn: 'Mỗi người một cơ quan, lần lượt — **không lặp lại**.',
    sub: 'Out loud, in English. When you run out, count them. Two rounds is good; four is excellent.',
    subVn: 'Nói to, bằng tiếng Anh. Hai vòng là tốt; bốn vòng là xuất sắc.',
    reveal: {
      label: 'Some your group may have missed',
      labelVn: 'Những cơ quan dễ bị bỏ sót',
      answer: '**brain · heart · lungs · stomach · intestines · liver · kidneys · skin · eyes · ears · tongue · bones · muscles**. And yes — your **skin** is an organ. It is the biggest one you have.',
      answerVn: '**brain (não) · heart (tim) · lungs (phổi) · stomach (dạ dày) · intestines (ruột) · liver (gan) · kidneys (thận) · skin (da) · eyes (mắt) · ears (tai) · tongue (lưỡi) · bones (xương) · muscles (cơ)**. Và đúng vậy — **da** của em là một cơ quan. Nó là cơ quan lớn nhất em có.',
    },
  },

  // ── Section 4: the Draw This, then the drill ─────────────────────────────
  // The whole lesson on one line, using the cell the class already owned before
  // the bell. This is the deck's only diagram to copy, and it is placed here on
  // purpose — after all four words exist, so ruling it up is recall, not dictation.
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Grid3x3',
    eyebrow: 'Learner’s Book, pages 22-24 · put it all together',
    eyebrowVn: 'Sách học sinh, trang 22-24 · ghép tất cả lại',
    title: 'The Five Levels',
    titleVn: 'Năm cấp độ',
    ratio: 40,
    inlineSvg: DIAGRAMS.LEVELS_LADDER,
    drawThis: true,
    content: 'One cell, climbing all the way up to a whole person — and it is the **same cell you were looking at ten minutes ago**.\n\nRead it left to right: each box is built out of the box before it.',
    contentVn: 'Một tế bào, đi lên hết đường đến cả một con người — và đó chính là **tế bào em đã nhìn cách đây mười phút**.\n\nĐọc từ trái sang phải: mỗi ô được tạo nên từ ô liền trước.',
    notes: [
      {
        tone: 'write',
        text: 'Copy the five boxes and the four arrows. Use a **ruler**. Write the **orange word** in each box, and the example underneath it.',
        textVn: 'Chép năm ô và bốn mũi tên. Dùng **thước kẻ**. Viết **từ màu cam** trong mỗi ô, và ví dụ ở bên dưới.',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Repeat',
    eyebrow: 'Whole class · fingers up',
    eyebrowVn: 'Cả lớp · giơ ngón tay',
    title: 'Which Level Is It?',
    titleVn: 'Đây là cấp độ nào?',
    ratio: 42,
    content:
      'One thing at a time on the screen. Decide which level it is, and hold that many **fingers in the air** — **1** for a cell, up to **5** for an organism.\n\n' +
      'Everyone shows at the same time, and nobody shouts. I will only press the button when every hand is up.',
    contentVn:
      'Mỗi lần một thứ hiện trên màn hình. Hãy quyết định đó là cấp độ nào, và giơ đúng số **ngón tay lên không** — **1** là tế bào, đến **5** là sinh vật.\n\n' +
      'Cả lớp giơ cùng lúc, và không ai được hét. Thầy chỉ bấm nút khi mọi bàn tay đã giơ lên.',
    notes: [
      {
        tone: 'task',
        badge: 'Look at your ladder',
        badgeVn: 'Nhìn vào sơ đồ của em',
        text: 'Your Draw This has the five levels in the right order. Use it. That is what notes are for.',
        textVn: 'Hình em vừa vẽ có đủ năm cấp độ theo đúng thứ tự. Hãy dùng nó. Ghi chép là để dùng như vậy.',
      },
    ],
    widget: LevelDrillWidget,
  },
  // Question 3 in the book is "copy and complete" — but the four sentences ARE
  // the four definitions already in their notebooks. So it is run as a hunt.
  {
    layout: 'split',
    accent: TEAL,
    icon: 'HelpCircle',
    eyebrow: 'Learner’s Book, page 24 · Question 3',
    eyebrowVn: 'Sách học sinh, trang 24 · Câu hỏi 3',
    title: 'The Answers Are Already in Your Notebook',
    titleVn: 'Đáp án đã có sẵn trong vở của em',
    ratio: 55,
    content:
      'Choose from: **organism · tissue · organ · organ system**. Say each answer out loud, then **point to where you wrote it** today.\n\n' +
      '> **a.** A group of similar cells is called a ______ .\n' +
      '> **b.** An ______ is a structure made of many different tissues.\n' +
      '> **c.** An ______ is a group of organs that carry out a particular function.\n' +
      '> **d.** An ______ is a living thing.',
    contentVn:
      'Chọn trong: **organism · tissue · organ · organ system**. Nói to từng đáp án, rồi **chỉ vào chỗ em đã viết nó** hôm nay.\n\n' +
      '> **a.** A group of similar cells is called a ______ .\n' +
      '> **b.** An ______ is a structure made of many different tissues.\n' +
      '> **c.** An ______ is a group of organs that carry out a particular function.\n' +
      '> **d.** An ______ is a living thing.',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**a.** tissue  ·  **b.** organ  ·  **c.** organ system  ·  **d.** organism\n\nIf you could not point to one of them, that is the definition to copy up tonight.',
      answerVn: '**a.** tissue (mô)  ·  **b.** organ (cơ quan)  ·  **c.** organ system (hệ cơ quan)  ·  **d.** organism (sinh vật)\n\nNếu em không chỉ được chỗ đã viết một định nghĩa nào đó, thì tối nay hãy chép lại đúng định nghĩa ấy.',
    },
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
    title: 'Can You Do All Six?',
    titleVn: 'Em làm được cả sáu điều này chứ?',
    content:
      '> Your notebook should now have **1 body outline**, **4 definitions**, **2 sentences of your own**, and **1 labelled ladder**. Check.',
    contentVn:
      '> Trong vở của em bây giờ phải có **1 hình cơ thể**, **4 định nghĩa**, **2 câu của riêng em**, và **1 sơ đồ năm cấp độ có ghi chú**. Hãy kiểm tra.',
    items: [
      { text: 'Explain what a **tissue** is, and give one animal and one plant example.', textVn: 'Giải thích **mô** là gì, và nêu một ví dụ ở động vật và một ở thực vật.' },
      { text: 'Explain what an **organ** is, and say why a leaf is one.', textVn: 'Giải thích **cơ quan** là gì, và nói vì sao lá là một cơ quan.' },
      { text: 'Explain what an **organ system** is, and name two of them.', textVn: 'Giải thích **hệ cơ quan** là gì, và kể tên hai hệ.' },
      { text: 'Name **five human organs** and point to each on yourself.', textVn: 'Kể **năm cơ quan của người** và chỉ vào từng cái trên cơ thể em.' },
      { text: 'Say the five levels **in order**, from cell up to organism.', textVn: 'Nói năm cấp độ **theo đúng thứ tự**, từ tế bào lên sinh vật.' },
      { text: 'Use the word *tissue* correctly in **both** of its meanings.', textVn: 'Dùng đúng từ *tissue* ở **cả hai** nghĩa của nó.' },
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
        text: 'Read the whole of Unit 1.4, **pages 22 to 25**.',
        textVn: 'Đọc toàn bộ Bài 1.4, **trang 22 đến 25**.',
      },
      {
        tone: 'homework',
        badge: 'Activity 1.4.1',
        badgeVn: 'Hoạt động 1.4.1',
        icon: 'Pencil',
        text: 'Choose **one** organ system: digestive, circulatory, respiratory or skeletal. Find the **names and jobs** of its organs, and bring a **large labelled drawing** on one side of paper. Names in English.',
        textVn: 'Chọn **một** hệ cơ quan: tiêu hoá, tuần hoàn, hô hấp hoặc xương. Tìm **tên và nhiệm vụ** các cơ quan của hệ đó, và mang đến một **hình vẽ lớn có ghi chú** trên một mặt giấy. Tên viết bằng tiếng Anh.',
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
    subtitle: 'You can climb the whole ladder: cell, tissue, organ, organ system, organism. Exit question: a **jellyfish** has no heart, no lungs and no brain. It is still an organism. So which of the five levels can a living thing manage **without**?',
    subtitleVn: 'Em đã leo được cả bậc thang: tế bào, mô, cơ quan, hệ cơ quan, sinh vật. Câu hỏi ra về: một con **sứa** không có tim, không có phổi và không có não. Nó vẫn là một sinh vật. Vậy một cơ thể sống có thể **thiếu** cấp độ nào trong năm cấp độ đó?',
  },
]
