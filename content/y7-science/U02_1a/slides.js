// content/y7-science/U02_1a/slides.js
// Year 7 Science · 2.1a Solids, liquids and gases. Monday 7 September 2026.
//
// Section 2.1 in the Learner's Book runs from page 28 to page 34 and is far too
// much for one period taught properly, so it is split. THIS deck is pages 28-30:
// the three states, their properties, and the two words scientists use when they
// are trying to explain something (hypothesis, theory). 2.1b is pages 31-34: the
// particle theory itself, and using it to explain everything decided here.
//
// The split is not arbitrary. Everything in this deck is something the class can
// SEE — pour it, squash it, watch it fill a balloon. Nothing here needs a
// particle. That is what makes 2.1b land: they will have spent a whole lesson
// collecting behaviour, and then get one idea that explains all of it at once.
//
// THE SPINE IS ONE ARGUMENT, MADE THREE TIMES:
//   you cannot tell the state by looking — you have to test the properties.
// Sand pours, and is a solid. Mercury is a metal, and is a liquid. Air is
// invisible, and is absolutely something. Each of those is a slide where the
// class commits to a wrong answer first, and each one is a tile in the Word Wall
// at the end.
//
// THE COPY-DOWN PLAN, because this is what keeps a lesson from drowning.
// Seven written items, each written at the moment it is taught and nowhere else:
//   · matter + states of matter   (one panel, two lines)
//   · property                    (with the everyday English meaning beside it)
//   · the properties of a solid
//   · the properties of a liquid
//   · the properties of a gas
//   · hypothesis + theory         (one panel, two lines)
//   · the four-question table, ruled up — the deck's one Draw This.
// The Learner's Book "Getting started" table is also started here, but it is
// finished for homework, because filling it properly needs the vocabulary this
// lesson is only just handing over.
//
// SEVEN TIMES THE CLASS STOPS AND DOES SOMETHING: the six-substance starter, the
// hourglass argument in pairs, the sorting table, the syringe prediction (hands
// up before I push), the syringe itself if the kit is out, the mercury/sand
// re-sort, and the Word Wall at the end.
//
// Source: Learner's Book Unit 2.1, pages 28-30. Getting started, Questions 1-7
// and the p.30 list of observations are the book's own. Figures are drawn in
// diagrams.js; photographs are openly licensed (see images/CREDITS.json).
import { DIAGRAMS } from './diagrams.js'
import { WordWallLink } from './widgets.jsx'
import halong from './images/halong.jpg'
import hourglass from './images/hourglass.jpg'
import ice from './images/ice.jpg'
import mercury from './images/mercury.jpg'
import balloon from './images/balloon.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const RED = '#c8102e'
// The three state colours, kept identical in 2.1b and in both diagrams files.
const STONE = '#8a7f68'
const WATER = '#2f7fb0'
const VIOLET = '#8b6bb1'

export const slides = [
  // ── Section 1: a starter they can already do, then one they cannot ───────
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Boxes',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    eyebrow: '2.1 Solids, liquids and gases · part 1 of 2',
    eyebrowVn: '2.1 Chất rắn, chất lỏng và chất khí · phần 1 trong 2',
    date: '7 Sep 2026',
    title: 'Solids, Liquids and Gases',
    titleVn: 'Chất rắn, chất lỏng và chất khí',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'In your notebook, write **two solids, two liquids and two gases**. Six things. Three minutes. Rule: none of them may be water.',
      textVn: 'Viết vào vở **hai chất rắn, hai chất lỏng và hai chất khí**. Sáu thứ. Ba phút. Một điều kiện: không được chọn nước.',
    },
  },
  // The hook. No answer anywhere on this slide, and no second picture. The
  // hourglass alone IS the argument: it looks like a liquid being poured.
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'In pairs — two minutes, and no calling out',
    eyebrowVn: 'Theo cặp — hai phút, không nói to đáp án',
    title: 'Sand Pours Like Water. Is Sand a Liquid?',
    titleVn: 'Cát chảy giống như nước. Vậy cát có phải chất lỏng không?',
    image: hourglass,
    caption: 'It flows through a narrow neck. It takes the shape of whatever you put it in. You can pour it from one hand to the other. Decide with your partner: **solid or liquid** — and be ready to say **why**.',
    captionVn: 'Nó chảy qua một cổ hẹp. Nó mang hình dạng của bất cứ thứ gì em đựng nó vào. Em có thể rót nó từ tay này sang tay kia. Hãy cùng bạn quyết định: **chất rắn hay chất lỏng** — và sẵn sàng nói **vì sao**.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Globe',
    eyebrow: 'Hạ Long Bay — three states in one photograph',
    eyebrowVn: 'Vịnh Hạ Long — ba trạng thái trong một bức ảnh',
    title: 'Everything Here Is Matter',
    titleVn: 'Mọi thứ ở đây đều là vật chất',
    ratio: 45,
    image: halong,
    content:
      'The rock is a **solid**. The sea is a **liquid**. The air above them is a **gas**. Three completely different ways of behaving — and every single one of them is **matter**.\n\n' +
      'Scientists sort all matter into those three groups. Nothing in this photograph is outside them.',
    contentVn:
      'Đá là **chất rắn**. Biển là **chất lỏng**. Không khí phía trên là **chất khí**. Ba cách hành xử hoàn toàn khác nhau — và tất cả đều là **vật chất**.\n\n' +
      'Các nhà khoa học chia mọi vật chất thành ba nhóm đó. Không có gì trong bức ảnh này nằm ngoài ba nhóm ấy.',
    notes: [
      {
        tone: 'write',
        text: '**Matter:** everything you can see and feel.\n**States of matter:** the three groups we sort matter into — **solid, liquid** and **gas**.',
        textVn: '**Vật chất (matter):** mọi thứ em có thể nhìn thấy và chạm vào.\n**Trạng thái của vật chất (states of matter):** ba nhóm mà ta chia vật chất ra — **chất rắn, chất lỏng** và **chất khí**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Table',
    eyebrow: 'Learner’s Book, page 28 · Getting started, Question 2',
    eyebrowVn: 'Sách học sinh, trang 28 · Khởi động, Câu hỏi 2',
    title: 'Rule Up This Table',
    titleVn: 'Hãy kẻ bảng này',
    ratio: 52,
    side: 'left',
    inlineSvg: DIAGRAMS.SORTING_TABLE,
    content:
      'Copy the table and put **your own six substances** into it — the ones you wrote at the start.\n\n' +
      'The third column is the one that matters. **“I know this because…”** is not a guess. It is the test you did in your head. *I can pour it. It stays in a lump. I cannot see it.*',
    contentVn:
      'Chép bảng này và điền **sáu chất của chính em** vào — những chất em đã viết lúc đầu giờ.\n\n' +
      'Cột thứ ba mới là cột quan trọng. **“I know this because…”** (Em biết vậy vì…) không phải là đoán. Đó là phép thử em đã làm trong đầu. *Em rót được nó. Nó vẫn thành một cục. Em không nhìn thấy nó.*',
    notes: [
      {
        tone: 'task',
        badge: 'In your notebook',
        badgeVn: 'Làm vào vở',
        icon: 'Pencil',
        text: 'Fill in **two rows now** — one solid and one liquid. Leave the rest. We will come back to it at the end.',
        textVn: 'Bây giờ điền **hai dòng** — một chất rắn và một chất lỏng. Phần còn lại để trống. Cuối giờ chúng ta sẽ quay lại.',
      },
    ],
  },
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'BookOpen',
    eyebrow: 'Every science class is an English class',
    eyebrowVn: 'Mỗi tiết khoa học đều là tiết tiếng Anh',
    title: 'The Word “Property”',
    titleVn: 'Từ “property”',
    content:
      'Ask an adult what a **property** is and they will say a house, or a piece of land. That is the everyday meaning, and it is not the one we want.\n\n' +
      'In science, a **property** is a way a substance **behaves**. Can you pour it? Can you squash it? Does it keep its own shape? Each answer is one property.',
    contentVn:
      'Hỏi một người lớn **property** là gì thì họ sẽ nói: một căn nhà, một mảnh đất. Đó là nghĩa đời thường, và không phải nghĩa ta cần.\n\n' +
      'Trong khoa học, **property (tính chất)** là cách một chất **hành xử**. Rót được không? Nén được không? Nó có giữ hình dạng riêng không? Mỗi câu trả lời là một tính chất.',
    notes: [
      {
        tone: 'write',
        text: '**Property:** a way that a substance behaves. The three states of matter have different properties.',
        textVn: '**Tính chất (property):** cách mà một chất hành xử. Ba trạng thái của vật chất có những tính chất khác nhau.',
      },
    ],
  },

  // ── Section 2: one state at a time, slowly ──────────────────────────────
  {
    layout: 'split',
    accent: STONE,
    icon: 'Box',
    eyebrow: 'State 1 of 3',
    eyebrowVn: 'Trạng thái 1 trong 3',
    title: 'Solids Keep Their Own Shape',
    titleVn: 'Chất rắn giữ hình dạng riêng',
    ratio: 45,
    image: ice,
    content:
      'Every cube in this picture is a **cube**. Tip them into a bowl and they are still cubes. Put one in your hand and squeeze — nothing happens.\n\n' +
      'That is what a solid does. It decides its own shape, and it keeps it. The **volume** — the amount of space it takes up — stays the same too.',
    contentVn:
      'Mỗi viên trong bức ảnh này đều là một **khối lập phương**. Đổ chúng vào bát thì chúng vẫn là khối lập phương. Cầm một viên trong tay và bóp — không có gì xảy ra.\n\n' +
      'Đó là điều chất rắn làm. Nó tự quyết định hình dạng của mình, và giữ nguyên hình dạng ấy. **Thể tích (volume)** — lượng không gian nó chiếm — cũng không đổi.',
    notes: [
      {
        tone: 'write',
        text: '**A solid:** keeps the same **shape** · keeps the same **volume** · cannot be **compressed** (squashed) · cannot be **poured**.',
        textVn: '**Chất rắn:** giữ nguyên **hình dạng** · giữ nguyên **thể tích** · không thể **nén (compressed)** · không thể **rót (poured)**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: WATER,
    icon: 'Droplets',
    eyebrow: 'State 2 of 3',
    eyebrowVn: 'Trạng thái 2 trong 3',
    title: 'Liquids Borrow the Container’s Shape',
    titleVn: 'Chất lỏng mượn hình dạng của vật chứa',
    ratio: 52,
    side: 'left',
    inlineSvg: DIAGRAMS.SAME_LIQUID,
    content:
      'Pour the same water into a tall tube, a flat dish and a round beaker, and it looks different every time. It has **no shape of its own** — it takes whichever one it is given.\n\n' +
      'But look at the label on each container. It is **50 cm³ every time**. The shape changed. The volume did not.',
    contentVn:
      'Rót cùng một lượng nước vào một ống cao, một đĩa nông và một cốc tròn thì lần nào trông cũng khác. Nó **không có hình dạng riêng** — nó nhận hình dạng nào được đưa cho.\n\n' +
      'Nhưng hãy nhìn nhãn trên mỗi vật chứa. Lần nào cũng là **50 cm³**. Hình dạng đã đổi. Thể tích thì không.',
    notes: [
      {
        tone: 'write',
        text: '**A liquid:** takes the **shape of its container** · keeps the same **volume** · can be **poured** · cannot be **compressed**.',
        textVn: '**Chất lỏng:** mang **hình dạng của vật chứa** · giữ nguyên **thể tích** · có thể **rót (poured)** · không thể **nén (compressed)**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: VIOLET,
    icon: 'Wind',
    eyebrow: 'State 3 of 3',
    eyebrowVn: 'Trạng thái 3 trong 3',
    title: 'Gases Fill Everything They Are In',
    titleVn: 'Chất khí lấp đầy mọi thứ chứa nó',
    ratio: 45,
    image: balloon,
    content:
      'There is a person standing inside that balloon, and the thing holding it open is **air**. You cannot see the air, you cannot pick it up, and it weighs very little — but it is filling every corner of a space the size of a house.\n\n' +
      'A gas will not sit in the bottom like a liquid. Give it a room and it takes the **whole room**.',
    contentVn:
      'Có một người đang đứng bên trong quả khinh khí cầu đó, và thứ giữ cho nó căng ra là **không khí**. Em không nhìn thấy không khí, không cầm được nó, và nó rất nhẹ — nhưng nó đang lấp đầy mọi góc của một không gian to bằng cả ngôi nhà.\n\n' +
      'Chất khí không nằm ở đáy như chất lỏng. Cho nó một căn phòng thì nó chiếm **cả căn phòng**.',
    notes: [
      {
        tone: 'write',
        text: '**A gas:** has **no shape of its own** · **fills** any closed container · can be **compressed** easily · its **volume can change** · it weighs very little.',
        textVn: '**Chất khí:** **không có hình dạng riêng** · **lấp đầy** mọi vật chứa kín · dễ dàng bị **nén (compressed)** · **thể tích có thể thay đổi** · nó rất nhẹ.',
      },
    ],
  },

  // ── Section 3: the practical, asked before it is answered ───────────────
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Predict — hands up before I touch anything',
    eyebrowVn: 'Dự đoán — giơ tay trước khi thầy chạm vào',
    title: 'Two Syringes',
    titleVn: 'Hai chiếc xi-lanh',
    text: 'One is full of **water**, one of **air**. I block both holes with my thumb and push hard.',
    textVn: 'Một chiếc đầy **nước**, một chiếc đầy **không khí**. Thầy bịt cả hai lỗ bằng ngón cái và đẩy mạnh.',
    sub: 'Which plunger moves — water, air, both, or neither? Everybody votes.',
    subVn: 'Cần đẩy nào sẽ di chuyển — nước, không khí, cả hai, hay không cái nào? Cả lớp đều bỏ phiếu.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Zap',
    eyebrow: 'The answer',
    eyebrowVn: 'Đáp án',
    title: 'Only the Air Moves',
    titleVn: 'Chỉ có không khí di chuyển',
    ratio: 50,
    side: 'left',
    inlineSvg: DIAGRAMS.SYRINGES,
    content:
      'The water plunger will not budge, however hard you lean on it. The air plunger slides in easily — and springs back the moment you let go.\n\n' +
      'The air was **compressed**: it was squashed into a smaller space. Nothing escaped, and nothing was added. Only the amount of room it took up changed.\n\n' +
      'This is the one property that separates a gas from **both** of the others.',
    contentVn:
      'Cần đẩy bên nước không nhúc nhích, dù em có tì mạnh đến đâu. Cần đẩy bên không khí trượt vào dễ dàng — và bật ngược lại ngay khi em buông tay.\n\n' +
      'Không khí đã bị **nén (compressed)**: nó bị ép vào một khoảng nhỏ hơn. Không có gì thoát ra, cũng không có gì thêm vào. Chỉ có lượng không gian nó chiếm là thay đổi.\n\n' +
      'Đây là tính chất duy nhất tách chất khí ra khỏi **cả hai** trạng thái kia.',
    notes: [
      {
        tone: 'write',
        text: '**Compressed:** squashed into a smaller space. **Only a gas can be compressed.**',
        textVn: '**Nén (compressed):** bị ép vào một khoảng không gian nhỏ hơn. **Chỉ chất khí mới có thể bị nén.**',
      },
    ],
  },

  // The hook is paid off here, and it is paid off TWICE, because one surprise
  // reads as a trick and two read as a rule.
  {
    layout: 'compare',
    accent: ORANGE,
    icon: 'ScanEye',
    eyebrow: 'Back to the hourglass — and one more like it',
    eyebrowVn: 'Quay lại chiếc đồng hồ cát — và thêm một ví dụ nữa',
    title: 'You Cannot Tell by Looking',
    titleVn: 'Nhìn thôi thì không thể biết được',
    columns: [
      {
        heading: 'Sand pours — but it is a SOLID',
        headingVn: 'Cát chảy — nhưng nó là CHẤT RẮN',
        accent: STONE,
        icon: 'Box',
        image: hourglass,
        caption: 'Look closer. Each **grain** keeps its own shape and cannot be squashed — so each grain is a solid. What is flowing is not the sand; it is **millions of tiny solids rolling over each other**. Sugar, salt and rice do exactly the same thing.',
        captionVn: 'Hãy nhìn kỹ hơn. Mỗi **hạt** cát giữ hình dạng riêng và không thể bị bóp nhỏ — nên mỗi hạt là một chất rắn. Thứ đang chảy không phải là cát; đó là **hàng triệu chất rắn tí hon lăn lên nhau**. Đường, muối và gạo cũng làm y hệt như vậy.',
      },
      {
        heading: 'Mercury is a metal — but it is a LIQUID',
        headingVn: 'Thuỷ ngân là kim loại — nhưng nó là CHẤT LỎNG',
        accent: WATER,
        icon: 'Droplets',
        image: mercury,
        caption: 'Every other metal you have held was hard and cold. This one pours, splashes, and takes the shape of the dish. It is a metal **and** a liquid, and there is no contradiction — **liquid** is not a kind of stuff, it is a way of behaving.',
        captionVn: 'Mọi kim loại khác em từng cầm đều cứng và lạnh. Kim loại này thì rót được, bắn toé, và mang hình dạng của cái đĩa. Nó vừa là kim loại **vừa** là chất lỏng, và không hề mâu thuẫn — **chất lỏng** không phải là một loại vật liệu, mà là một cách hành xử.',
      },
    ],
  },

  // ── Section 4: the Draw This, and the book's questions ──────────────────
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Table',
    eyebrow: 'Rulers out — you will use this sheet all unit',
    eyebrowVn: 'Lấy thước ra — em sẽ dùng bảng này suốt cả chương',
    title: 'Four Questions, Three States',
    titleVn: 'Bốn câu hỏi, ba trạng thái',
    inlineSvg: DIAGRAMS.STATES_TABLE,
    drawThis: true,
    caption: 'Everything on pages 28 and 29, on one grid. Rule it up properly, with a ruler, and copy the ticks and crosses exactly. Six minutes.',
    captionVn: 'Toàn bộ trang 28 và 29 gọn trong một bảng. Hãy kẻ cẩn thận bằng thước, và chép đúng các dấu tích và dấu chéo. Sáu phút.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'HelpCircle',
    eyebrow: 'Learner’s Book, page 30 · Questions 1 to 4',
    eyebrowVn: 'Sách học sinh, trang 30 · Câu hỏi 1 đến 4',
    title: 'Check the Table You Just Drew',
    titleVn: 'Kiểm tra lại bảng em vừa vẽ',
    ratio: 56,
    inlineSvg: DIAGRAMS.STATES_TABLE,
    content:
      '> **1.** What are the three states of matter?\n' +
      '> **2.** Which state of matter can be compressed (squashed) easily?\n' +
      '> **3.** Which state of matter cannot be poured?\n' +
      '> **4.** List the properties of solids.\n\n' +
      'Every answer is a row or a column of your own table. Find it there before you say it.',
    contentVn:
      '> **1.** What are the three states of matter?\n' +
      '> **2.** Which state of matter can be compressed (squashed) easily?\n' +
      '> **3.** Which state of matter cannot be poured?\n' +
      '> **4.** List the properties of solids.\n\n' +
      'Mỗi đáp án đều là một hàng hoặc một cột trong bảng của chính em. Hãy tìm nó ở đó trước khi trả lời.',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer:
        '**1.** Solid, liquid and gas.\n**2.** A gas.\n**3.** A solid.\n**4.** Keeps the same shape · keeps the same volume · cannot be compressed · cannot be poured.',
      answerVn:
        '**1.** Chất rắn, chất lỏng và chất khí.\n**2.** Chất khí.\n**3.** Chất rắn.\n**4.** Giữ nguyên hình dạng · giữ nguyên thể tích · không nén được · không rót được.',
    },
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'BookOpen',
    eyebrow: 'Learner’s Book, page 30 · Questions 5 to 7',
    eyebrowVn: 'Sách học sinh, trang 30 · Câu hỏi 5 đến 7',
    title: 'The Word Doing the Work Is “Share”',
    titleVn: 'Từ quan trọng nhất ở đây là “share”',
    ratio: 56,
    content:
      'To **share** a property means **both do it**. To **not share** means **one does and the other does not**. Answer out loud in a **full sentence**.\n\n' +
      '> **5.** Name a property of liquids that they do **not** share with solids.\n' +
      '> **6.** Name a property of gases that they **do** share with liquids.\n' +
      '> **7.** Name a property of gases that they do **not** share with solids **or** liquids.',
    contentVn:
      '**Share** nghĩa là **cả hai đều có**. **Not share** nghĩa là **một bên có, bên kia không**. Trả lời to bằng **một câu đầy đủ**.\n\n' +
      '> **5.** Name a property of liquids that they do **not** share with solids.\n' +
      '> **6.** Name a property of gases that they **do** share with liquids.\n' +
      '> **7.** Name a property of gases that they do **not** share with solids **or** liquids.',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer:
        '**5.** A liquid can be poured, and it takes the shape of its container — a solid does neither.\n' +
        '**6.** Both a gas and a liquid can be poured, can flow, and take the shape of their container.\n' +
        '**7.** Only a gas can be compressed, and only a gas changes its volume to fill the whole container.',
      answerVn:
        '**5.** Chất lỏng rót được và mang hình dạng vật chứa — chất rắn thì không làm được cả hai điều đó.\n' +
        '**6.** Cả chất khí và chất lỏng đều rót được, chảy được, và mang hình dạng vật chứa.\n' +
        '**7.** Chỉ chất khí mới nén được, và chỉ chất khí mới đổi thể tích để lấp đầy cả vật chứa.',
    },
  },

  // ── Section 5: page 30 — what scientists do with all of this ────────────
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Nobody answers yet — just think about it',
    eyebrowVn: 'Chưa ai trả lời vội — chỉ cần suy nghĩ',
    title: 'Dinner, Two Rooms Away',
    titleVn: 'Bữa tối, cách hai căn phòng',
    text: 'Your bedroom door is shut. Somebody starts cooking. A minute later you can **smell it**.',
    textVn: 'Cửa phòng em đóng kín. Có người bắt đầu nấu ăn. Một phút sau em đã **ngửi thấy mùi**.',
    sub: 'Something got to your nose, and nobody carried it. Keep your idea — we need it next lesson.',
    subVn: 'Có thứ gì đó đã đến mũi em, và không ai mang nó cả. Hãy giữ lấy ý tưởng đó — tiết sau ta cần đến.',
  },
  {
    layout: 'stack',
    accent: TEAL,
    icon: 'Telescope',
    columns: 2,
    eyebrow: 'Learner’s Book, page 30',
    eyebrowVn: 'Sách học sinh, trang 30',
    title: 'Four Things Scientists Noticed',
    titleVn: 'Bốn điều các nhà khoa học đã để ý thấy',
    content: 'None of these is strange. Every one of them has happened in your kitchen. What is strange is that **one single idea explains all four** — and that idea is next lesson.',
    contentVn: 'Không điều nào lạ lùng cả. Mỗi điều đều đã xảy ra trong bếp nhà em. Điều lạ là **chỉ một ý tưởng duy nhất giải thích được cả bốn** — và ý tưởng đó là bài tiết sau.',
    notes: [
      { tone: 'info', badge: false, icon: 'Soup', text: 'You can smell food cooking in another room.', textVn: 'Em ngửi thấy mùi thức ăn đang nấu ở phòng khác.' },
      { tone: 'info', badge: false, icon: 'Flame', text: 'Some substances get bigger when you heat them.', textVn: 'Một số chất nở to ra khi em đun nóng chúng.' },
      { tone: 'info', badge: false, icon: 'Droplets', text: 'Liquids, such as water, change to a gas when you heat them.', textVn: 'Chất lỏng, ví dụ như nước, biến thành chất khí khi em đun nóng.' },
      { tone: 'info', badge: false, icon: 'Snowflake', text: 'Substances change from liquid to solid if you cool them.', textVn: 'Các chất biến từ lỏng thành rắn nếu em làm lạnh chúng.' },
    ],
  },
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'BookOpen',
    eyebrow: 'Every science class is an English class',
    eyebrowVn: 'Mỗi tiết khoa học đều là tiết tiếng Anh',
    title: '“Theory” Means the Opposite of What You Think',
    titleVn: '“Theory” nghĩa ngược với em nghĩ',
    content:
      'In everyday English, *“it’s only a theory”* means **I am not sure**. A guess.\n\n' +
      'In science it means almost the opposite: an idea **tested again and again** until it passes **every time**. It is the strongest thing we have.',
    contentVn:
      'Trong tiếng Anh đời thường, *“it’s only a theory”* nghĩa là **tôi không chắc**. Trong khoa học thì ngược lại: một ý tưởng được **kiểm chứng nhiều lần** và **lần nào cũng đúng** — thứ chắc chắn nhất ta có.',
    notes: [
      {
        tone: 'write',
        text: '**Hypothesis:** a suggested explanation, which has not been tested yet.\n**Theory:** a hypothesis that has been tested many times and is accepted by scientists.',
        textVn: '**Giả thuyết (hypothesis):** cách giải thích được đề ra, chưa kiểm chứng.\n**Học thuyết (theory):** giả thuyết đã kiểm chứng nhiều lần, được công nhận.',
      },
    ],
  },
  {
    layout: 'callout',
    accent: VIOLET,
    icon: 'Sparkles',
    eyebrow: 'The best theory we have — and it is one sentence long',
    eyebrowVn: 'Học thuyết tốt nhất mà ta có — và nó chỉ dài một câu',
    title: 'Everything Is Made of Particles',
    titleVn: 'Mọi thứ đều được tạo nên từ các hạt',
    content:
      'All matter — the rock, the sea, the air, your hand, this room — is made of **particles**: pieces far too small to see.\n\n' +
      'That one sentence explains the last slide, the two syringes, the smell from the kitchen, and every row of your table. **Next lesson we prove it.**',
    contentVn:
      'Mọi vật chất — đá, biển, không khí, bàn tay em, căn phòng này — đều tạo nên từ các **hạt (particles)**: những mảnh quá nhỏ để nhìn thấy.\n\n' +
      'Chỉ một câu đó giải thích được trang trước, hai chiếc xi-lanh, mùi thức ăn từ bếp, và mọi hàng trong bảng của em. **Tiết sau ta sẽ chứng minh.**',
    notes: [
      {
        tone: 'write',
        text: '**Particle:** a tiny piece of matter, much too small to see. All matter is made of particles.',
        textVn: '**Hạt (particle):** một mảnh vật chất rất nhỏ, nhỏ đến mức không thể nhìn thấy. Mọi vật chất đều được tạo nên từ các hạt.',
      },
    ],
  },

  // ── Section 6: the game, the recap and the homework ─────────────────────
  // The Word Wall is the last thinking the class does, and it is deliberately
  // the same thinking as the mercury slide: sort by BEHAVIOUR, not by looks.
  {
    layout: 'split',
    accent: '#f59e0b',
    icon: 'Gamepad2',
    eyebrow: 'Word Wall · sixteen tiles, four hidden groups',
    eyebrowVn: 'Bức Tường Từ · mười sáu ô, bốn nhóm ẩn',
    title: 'Solid, Liquid or Gas?',
    titleVn: 'Chất rắn, chất lỏng hay chất khí?',
    ratio: 52,
    content:
      'Sixteen substances. Four groups of four. Three of the groups are **solids, liquids and gases** — and the fourth is the trap from today: things that **pour like a liquid but are made of tiny solid pieces**.\n\n' +
      'Two tiles are not where you think. **ICE** is water, and **MERCURY** is a metal. Neither of those facts decides anything. Ask the only question that counts: **what does it do?**\n\n' +
      'Four hearts. Whole class, one board, and nobody shouts the answer.',
    contentVn:
      'Mười sáu chất. Bốn nhóm, mỗi nhóm bốn ô. Ba nhóm là **chất rắn, chất lỏng và chất khí** — nhóm thứ tư là cái bẫy của hôm nay: những thứ **chảy như chất lỏng nhưng thật ra gồm những mẩu rắn tí hon**.\n\n' +
      'Hai ô không nằm ở chỗ em tưởng. **ICE** là nước, và **MERCURY** là kim loại. Cả hai điều đó đều không quyết định gì cả. Hãy hỏi câu duy nhất quan trọng: **nó hành xử thế nào?**\n\n' +
      'Bốn tim. Cả lớp, một bảng, và không ai được hét đáp án.',
    widget: WordWallLink,
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
      '> Your notebook should now have **6 substances**, **1 sorting table started**, **6 written items**, and **1 ruled table** with ticks and crosses. Check.',
    contentVn:
      '> Trong vở của em bây giờ phải có **6 chất**, **1 bảng phân loại đã bắt đầu**, **6 mục đã ghi**, và **1 bảng kẻ thước** có dấu tích và dấu chéo. Hãy kiểm tra.',
    items: [
      { text: 'Name the **three states of matter**.', textVn: 'Kể tên **ba trạng thái của vật chất**.' },
      { text: 'List the properties of a **solid**, a **liquid** and a **gas**.', textVn: 'Liệt kê tính chất của **chất rắn**, **chất lỏng** và **chất khí**.' },
      { text: 'Explain what **volume** means, and which states keep it the same.', textVn: 'Giải thích **thể tích** là gì, và trạng thái nào giữ nguyên thể tích.' },
      { text: 'Say which state can be **compressed**, and how the syringes showed it.', textVn: 'Nói trạng thái nào **nén được**, và hai chiếc xi-lanh đã cho thấy điều đó ra sao.' },
      { text: 'Explain why **sand is a solid** even though you can pour it.', textVn: 'Giải thích vì sao **cát là chất rắn** dù em rót được nó.' },
      { text: 'Use **hypothesis** and **theory** correctly in a sentence.', textVn: 'Dùng đúng từ **hypothesis** và **theory** trong một câu.' },
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
    content: 'Take your science notebook home with you. Both tasks are short.',
    contentVn: 'Hãy mang vở khoa học về nhà. Cả hai nhiệm vụ đều ngắn.',
    notes: [
      {
        tone: 'homework',
        badge: 'Reading Task',
        badgeVn: 'Bài đọc',
        icon: 'BookOpen',
        text: 'Read Unit 2.1, **pages 28 to 30**. Then read **page 31** once, slowly — that is where we start next time.',
        textVn: 'Đọc Bài 2.1, **trang 28 đến 30**. Rồi đọc **trang 31** một lượt thật chậm — đó là chỗ chúng ta sẽ bắt đầu tiết sau.',
      },
      {
        tone: 'homework',
        badge: 'Finish the table',
        badgeVn: 'Hoàn thành bảng',
        icon: 'Pencil',
        text: 'Complete all **six rows** of your sorting table. In the last column give a **property** as your reason, not “I just know”.',
        textVn: 'Hoàn thành cả **sáu dòng** trong bảng phân loại. Ở cột cuối hãy nêu một **tính chất** làm lý do, đừng viết “em biết vậy”.',
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
    subtitle: 'You can sort any substance by what it **does**, not by what it looks like. Exit question: **honey** pours, so slowly you can watch it. Is it a liquid, or a very soft solid? How would you settle the argument?',
    subtitleVn: 'Em xếp được bất kỳ chất nào dựa trên điều nó **làm được**, không dựa vào vẻ ngoài. Câu hỏi ra về: **mật ong** chảy, chậm đến mức nhìn thấy được. Nó là chất lỏng, hay chất rắn rất mềm? Em sẽ giải quyết tranh luận đó thế nào?',
  },
]
