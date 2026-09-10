// content/y7-math/T02_girl-math/slides.js
// Year 7 Mathematics · Task 2 — Girl Math.
//
// A standalone TASK. Four teaching slides, then a ten-round timed game, then
// one closing question. It is short on purpose: the teaching is only the bar
// model, and everything else is the class playing.
//
// WHAT IT IS ACTUALLY FOR. "Carrot gets twice as many as Erica, and there are
// twelve pieces" is a linear equation, and this class cannot solve one yet.
// Drawn as boxes it is not an equation at all — three identical boxes, twelve
// pieces, so a box is four. That picture is worth having in the room a long
// time before the algebra that replaces it, and it is the single most useful
// thing a Year 7 can own for word problems.
//
// THE ENGLISH IS THE MATHS, AGAIN. Every round turns on three phrases and
// nothing else: "twice as many as", "more than", "fewer than". A student who
// reads "Nam gets 3 more than Su" as "Nam gets 3" is not bad at arithmetic —
// they have misread a sentence. Say all three out loud on slides 2 and 3, and
// keep saying them during the game.
//
// THE GAME'S SHAPE, so the deck and the widget agree:
//   · ten rounds, harder as they go, worth 2 rolls up to 8
//   · a generous clock — 90 seconds early, 210 by the end, and a +30 button
//   · answers revealed ONE GIRL AT A TIME, so half-right gets caught
//   · the class writes on whiteboards; the teacher says who was right and taps
//     a team to award that round's rolls. Nothing is typed in.
//
// The names are the class's own. The reasons attached to the rules are deadpan
// nonsense on purpose — this class works harder for a silly problem than a
// sensible one, and the maths underneath is identical either way.
import { DIAGRAMS } from './diagrams.js'
import { GirlMathGame } from './widgets.jsx'

const TEAL = '#0087a8'
const PINK = '#c02a6e'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const PURPLE = '#5c2483'

export const slides = [
  {
    layout: 'hero',
    color: PINK,
    icon: 'Users',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    eyebrow: 'Task 2',
    eyebrowVn: 'Nhiệm vụ 2',
    title: 'Girl Math',
    titleVn: 'Toán Của Các Bạn Nữ',
    subtitle: 'Share the rice paper. Beat the clock.',
    subtitleVn: 'Chia bánh tráng. Nhanh hơn đồng hồ.',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'There are **10 pieces** of rice paper. Lily gets **four times as many** as Ana.\n\nHow many does each girl get? Whiteboards. **60 seconds.**',
      textVn: 'Có **10 miếng** bánh tráng. Lily được **gấp bốn lần** Ana.\n\nMỗi bạn được mấy miếng? Viết ra bảng con. **60 giây.**',
    },
  },

  // ── The bar model, in two halves ──────────────────────────────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Boxes',
    side: 'left',
    eyebrow: 'Draw a box for the smaller share',
    eyebrowVn: 'Vẽ một cái hộp cho phần nhỏ hơn',
    title: 'Twice As Many',
    titleVn: 'Gấp Đôi',
    ratio: 45,
    inlineSvg: DIAGRAMS.BAR_TWICE,
    content:
      'Do not start with the numbers. Start with a **box** for the smaller share — here that is Erica.\n\n' +
      '**Twice as many** means two boxes of exactly that size. So the 12 pieces are shared into **three** equal boxes, not two.',
    contentVn:
      'Đừng bắt đầu bằng các con số. Hãy bắt đầu bằng một **cái hộp** cho phần nhỏ hơn — ở đây là Erica.\n\n' +
      '**Gấp đôi** nghĩa là hai cái hộp đúng bằng cỡ đó. Vậy 12 miếng được chia vào **ba** hộp bằng nhau, không phải hai.',
    notes: [
      {
        tone: 'write',
        text:
          '**Draw a box** for the smallest share.\n' +
          '**Twice as many** = 2 boxes. **Three times as many** = 3 boxes. **The same as** = 1 more box.\n' +
          'Count all the boxes, then divide the total by that number.',
        textVn:
          '**Vẽ một cái hộp** cho phần nhỏ nhất.\n' +
          '**Gấp đôi** = 2 hộp. **Gấp ba** = 3 hộp. **Bằng nhau** = thêm 1 hộp nữa.\n' +
          'Đếm tất cả các hộp, rồi lấy tổng chia cho số hộp đó.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Equal',
    eyebrow: 'The extra comes off the total first',
    eyebrowVn: 'Phần dôi ra phải trừ khỏi tổng trước',
    title: 'More Than, Fewer Than',
    titleVn: 'Nhiều Hơn, Ít Hơn',
    ratio: 45,
    inlineSvg: DIAGRAMS.BAR_PLUS,
    content:
      '**3 more than** is not a box. It is one box **plus a loose 3**.\n\n' +
      'Take that 3 off the total before you divide. Put it back at the end. **Fewer than** works the same way, but you *add* it on first.',
    contentVn:
      '**Nhiều hơn 3** không phải một cái hộp. Nó là một hộp **cộng thêm 3 miếng lẻ**.\n\n' +
      'Hãy trừ 3 đó khỏi tổng trước khi chia. Cuối cùng mới cộng lại. **Ít hơn** làm y hệt, nhưng phải *cộng* vào trước.',
    notes: [
      {
        tone: 'write',
        text:
          '**More than** = 1 box + the extra. Take the extra **off** the total before dividing.\n' +
          '**Fewer than** = 1 box − the missing pieces. Put them **back on** the total before dividing.\n' +
          'Divide only when every share is a whole number of boxes.',
        textVn:
          '**Nhiều hơn** = 1 hộp + phần dôi. Trừ phần dôi **khỏi** tổng trước khi chia.\n' +
          '**Ít hơn** = 1 hộp − phần thiếu. Cộng phần thiếu **vào** tổng trước khi chia.\n' +
          'Chỉ chia khi mọi phần đều là số hộp nguyên.',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Users',
    side: 'left',
    eyebrow: 'Both moves at once — this is every round',
    eyebrowVn: 'Cả hai bước cùng lúc — mọi vòng đều thế',
    title: 'Three Girls At Once',
    titleVn: 'Ba Bạn Cùng Lúc',
    ratio: 45,
    inlineSvg: DIAGRAMS.BAR_THREE,
    content:
      'Extras off the total first. Then count the boxes. Then divide.\n\n' +
      'Always **add your answers up** at the end. If they do not make the total, a rule was read wrong.',
    contentVn:
      'Trừ phần dôi khỏi tổng trước. Rồi đếm số hộp. Rồi chia.\n\n' +
      'Cuối cùng luôn **cộng các đáp án lại**. Nếu không ra đúng tổng thì em đã đọc sai một quy tắc.',
    notes: [
      {
        tone: 'write',
        text:
          '**The order, every time:**\n' +
          '**1** Take the extras off the total (or add the missing ones on).\n' +
          '**2** Count the boxes. **3** Divide to find one box.\n' +
          '**4** Work out each girl. **5** Add them up and check they make the total.',
        textVn:
          '**Thứ tự, lần nào cũng vậy:**\n' +
          '**1** Trừ phần dôi khỏi tổng (hoặc cộng phần thiếu vào).\n' +
          '**2** Đếm số hộp. **3** Chia để tìm một hộp.\n' +
          '**4** Tính phần của từng bạn. **5** Cộng lại và kiểm tra có ra đúng tổng không.',
      },
    ],
  },

  // ── How the game runs ─────────────────────────────────────────────────────
  {
    layout: 'callout',
    accent: PINK,
    icon: 'Timer',
    eyebrow: 'Ten rounds',
    eyebrowVn: 'Mười vòng',
    title: 'How Girl Math Works',
    titleVn: 'Cách Chơi',
    content:
      'The screen shows how many pieces there are and the rules. **You work it out on your whiteboard** while the clock runs. Nobody shouts.\n\n' +
      'When the clock stops, the answers come out **one girl at a time**.\n\n' +
      'Each round is worth a number of **rolls**. Harder round, more rolls.\n\n' +
      '> The rounds get harder. They also get sillier. Both on purpose.',
    contentVn:
      'Màn hình cho biết có bao nhiêu miếng và các quy tắc. **Em tính ra bảng con** trong lúc đồng hồ chạy. Không ai được hô.\n\n' +
      'Khi hết giờ, đáp án hiện ra **từng bạn một**.\n\n' +
      'Mỗi vòng có giá trị một số **cuốn**. Vòng khó hơn thì nhiều cuốn hơn.\n\n' +
      '> Các vòng sẽ khó dần. Và cũng ngớ ngẩn dần. Cả hai đều là cố ý.',
  },

  // ── The game ──────────────────────────────────────────────────────────────
  {
    layout: 'game',
    title: 'Girl Math',
    titleVn: 'Toán Của Các Bạn Nữ',
    widget: GirlMathGame,
  },

  {
    layout: 'hero',
    color: GREEN,
    icon: 'Target',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    // No subtitle: in project mode at 1366×768 this hero is the tightest slide
    // in the deck, and the closing line reads just as well in the eyebrow.
    eyebrow: 'Task 2 · you never solved an equation, you counted boxes',
    eyebrowVn: 'Nhiệm vụ 2 · em chưa giải phương trình nào, em chỉ đếm hộp',
    title: 'Boxes Before Numbers',
    titleVn: 'Vẽ Hộp Trước, Tính Sau',
    card: {
      icon: 'Pencil',
      badge: 'Exit Question',
      badgeVn: 'Câu hỏi ra về',
      text: 'There are **34 pieces**. Su gets **three times as many** as Ana; Tess gets **4 more** than Ana.\n\nDraw the boxes. How many does each girl get?',
      textVn: 'Có **34 miếng**. Su được **gấp ba** Ana. Tess được **nhiều hơn** Ana **4 miếng**.\n\nVẽ các hộp ra. Mỗi bạn được mấy miếng?',
    },
  },
]
