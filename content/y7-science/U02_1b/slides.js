// content/y7-science/U02_1b/slides.js
// Year 7 Science · 2.1b Particle theory. Wednesday 9 September 2026.
//
// The second half of Learner's Book section 2.1: pages 31 to 34. 2.1a was pages
// 28-30 and collected BEHAVIOUR — pour it, squash it, watch it fill a balloon,
// all of it visible, none of it explained. This deck is the explanation, and it
// is one idea: matter is made of particles, arranged three different ways.
//
// THE SHAPE OF THE HOUR. It is the same journey three times, and the class
// should feel the repetition, because the repetition is the argument:
//   · here is how the particles are arranged   (page 31)
//   · here is the property that follows from it (page 33)
//   · here is the thing you already watched happen last lesson.
// Every explanation on page 33 is settling something the class already saw with
// their own eyes on Monday. The syringes are referred to by name four times.
//
// THE UNPAID DEBT FROM 2.1A opens the deck: how does the smell of dinner get
// from the kitchen to a bedroom with the door shut? It was asked on Monday and
// deliberately left hanging. The ink photograph answers it in one picture.
//
// THE COPY-DOWN PLAN. Seven written items and one drawing:
//   · particle theory                 (the one-sentence claim)
//   · particles in a solid
//   · particles in a liquid
//   · particles in a gas
//   · the two rules from page 33      (flow, and changing volume — one panel)
//   · attractive forces
//   · vacuum
//   · the three boxes, drawn          — the deck's one Draw This, and the
//     Learner's Book Activity on page 34.
// The book's "copy and complete" sentences on page 32 are done as SPEAKING
// first and writing second, because they are three sentences the class can now
// say out loud and copying them cold teaches nothing.
//
// THE SPONGE IS THE BEST QUESTION IN THE SECTION and it gets two slides. A
// sponge is a solid and it squashes, which is exactly what the theory says
// cannot happen — and the resolution (you are compressing the air in the holes,
// not the sponge) is the first time this class evaluates a scientific model
// rather than learning one. Do not cut it.
//
// Source: Learner's Book Unit 2.1, pages 31-34. Both "Think like a scientist"
// tasks, the Activity and the Summary checklist are the book's own. Figures are
// drawn in diagrams.js; photographs are openly licensed (images/CREDITS.json).
import { DIAGRAMS } from './diagrams.js'
import diffusion from './images/diffusion.jpg'
import salt from './images/salt.jpg'
import sponge from './images/sponge.jpg'
import earth from './images/earth.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const RED = '#c8102e'
// The three state colours, identical to 2.1a and to both diagrams files.
const STONE = '#8a7f68'
const WATER = '#2f7fb0'
const VIOLET = '#8b6bb1'

export const slides = [
  // ── Section 1: the debt from last lesson, and the idea that settles it ───
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Atom',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    eyebrow: '2.1 Solids, liquids and gases · part 2 of 2',
    eyebrowVn: '2.1 Chất rắn, chất lỏng và chất khí · phần 2 trong 2',
    date: '9 Sep 2026',
    title: 'Particle Theory',
    titleVn: 'Thuyết hạt',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: '**Books closed.** Write down **three things a gas can do that a solid cannot**. Two minutes, then open your notebook and check your table from last lesson.',
      textVn: '**Gấp sách lại.** Viết ra **ba điều chất khí làm được mà chất rắn không làm được**. Hai phút, rồi mở vở kiểm tra lại bảng của em từ tiết trước.',
    },
  },
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'The question I left you with on Monday',
    eyebrowVn: 'Câu hỏi thầy để lại cho em hôm thứ Hai',
    title: 'The Door Was Shut',
    titleVn: 'Cửa đã đóng kín',
    text: 'Somebody cooks in the kitchen. Two rooms away, door closed, **you can smell it**.',
    textVn: 'Có người nấu ăn dưới bếp. Cách hai phòng, cửa đóng kín, **em vẫn ngửi thấy mùi**.',
    sub: 'Something travelled from the kitchen to your nose all by itself. Today we find out what.',
    subVn: 'Có thứ gì đó đã tự mình đi từ bếp đến mũi em. Hôm nay ta sẽ tìm ra đó là gì.',
  },
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'Droplets',
    eyebrow: 'Nobody stirred this',
    eyebrowVn: 'Không ai khuấy cả',
    title: 'One Drop of Ink, in Still Water',
    titleVn: 'Một giọt mực, trong nước đứng yên',
    image: diffusion,
    caption: 'The water was completely still. One drop of ink went in at the top, and it is spreading **by itself**, into every part of the glass. Leave it an hour and the whole glass will be pale grey. Whatever the ink is made of, it is **moving on its own** — and so is whatever came out of that kitchen.',
    captionVn: 'Nước hoàn toàn đứng yên. Một giọt mực rơi vào từ trên, và nó đang **tự lan ra**, đến mọi phần của cốc. Để một tiếng thì cả cốc sẽ ngả màu xám nhạt. Dù mực được tạo nên từ gì đi nữa, thứ đó **đang tự chuyển động** — và thứ bay ra từ căn bếp kia cũng vậy.',
  },
  {
    layout: 'callout',
    accent: VIOLET,
    icon: 'Sparkles',
    eyebrow: 'Learner’s Book, page 31',
    eyebrowVn: 'Sách học sinh, trang 31',
    title: 'One Idea Explains Everything',
    titleVn: 'Một ý tưởng giải thích tất cả',
    content:
      'All matter is made of **particles** — pieces far too small to see.\n\n' +
      'They are the **same particles** in a solid, a liquid and a gas; the only thing that changes is **how they are arranged and how they move**. That is the whole theory.',
    contentVn:
      'Mọi vật chất đều tạo nên từ các **hạt (particles)** — những mảnh quá nhỏ để nhìn thấy. Đó là **cùng những hạt ấy** trong chất rắn, chất lỏng và chất khí; thứ duy nhất thay đổi là **cách chúng sắp xếp và chuyển động**. Đó là toàn bộ học thuyết.',
    notes: [
      {
        tone: 'write',
        text: '**Particle theory:** all matter is made up of tiny particles. The particles are **arranged differently** in solids, liquids and gases.',
        textVn: '**Thuyết hạt (particle theory):** mọi vật chất đều được tạo nên từ những hạt rất nhỏ. Các hạt được **sắp xếp khác nhau** trong chất rắn, chất lỏng và chất khí.',
      },
    ],
  },
  {
    layout: 'split',
    accent: STONE,
    icon: 'Microscope',
    eyebrow: 'Evidence you can hold in your hand',
    eyebrowVn: 'Bằng chứng em có thể cầm trên tay',
    title: 'Why Is Every Grain of Salt a Cube?',
    titleVn: 'Vì sao mỗi hạt muối đều là một khối lập phương?',
    ratio: 45,
    image: salt,
    content:
      'Nobody cut these. This is table salt from a kitchen, under a microscope — and the grains are **cubes**, with square corners, every single time.\n\n' +
      'Particles are far too small to see. But if the theory is right, and the particles of a solid really are stacked in a **fixed, regular pattern**, then that pattern should sometimes show up on the **outside**.\n\n' +
      'Here it is. The grain is a cube because the particles inside it are stacked in cubes.',
    contentVn:
      'Không ai cắt chúng cả. Đây là muối ăn trong bếp, nhìn dưới kính hiển vi — và các hạt đều là **khối lập phương**, góc vuông vắn, lần nào cũng vậy.\n\n' +
      'Các hạt thì quá nhỏ để nhìn thấy. Nhưng nếu học thuyết đúng, và các hạt trong chất rắn thật sự xếp theo một **khuôn mẫu cố định, đều đặn**, thì khuôn mẫu ấy đôi khi phải lộ ra ở **bên ngoài**.\n\n' +
      'Đây chính là nó. Hạt muối là khối lập phương vì các hạt bên trong nó xếp thành khối lập phương.',
  },

  // ── Section 2: page 31 — the three arrangements, one slide each ─────────
  {
    layout: 'split',
    accent: STONE,
    icon: 'Box',
    eyebrow: 'Arrangement 1 of 3',
    eyebrowVn: 'Cách sắp xếp 1 trong 3',
    title: 'In a Solid, Nobody Moves',
    titleVn: 'Trong chất rắn, không hạt nào đi đâu cả',
    ratio: 48,
    side: 'left',
    inlineSvg: DIAGRAMS.PARTICLES_SOLID,
    content:
      'Packed tightly in a **fixed pattern** — rows and columns, touching, nothing between them.\n\n' +
      'They are not frozen. Each one **vibrates**: tiny movements on the spot, all the time. But it never leaves its place.\n\n' +
      'Look at the beaker: the block does not touch the walls. A solid keeps **its own** shape.',
    contentVn:
      'Xếp sát nhau theo **khuôn mẫu cố định** — hàng và cột, chạm nhau, không có gì ở giữa.\n\n' +
      'Chúng không đứng im: mỗi hạt **dao động (vibrate)** rất nhỏ tại chỗ, nhưng không rời vị trí.\n\n' +
      'Nhìn cốc: khối rắn không chạm thành cốc. Chất rắn giữ hình dạng **của chính nó**.',
    notes: [
      {
        tone: 'write',
        text: '**In a solid:** the particles are in a **fixed pattern**, **tightly packed** and **held together strongly**. They can **vibrate** but they stay in the same place.',
        textVn: '**Trong chất rắn:** các hạt ở trong một **khuôn mẫu cố định**, **xếp sát nhau** và **liên kết chặt với nhau**. Chúng có thể **dao động** nhưng vẫn ở nguyên vị trí.',
      },
    ],
  },
  {
    layout: 'split',
    accent: WATER,
    icon: 'Droplets',
    eyebrow: 'Arrangement 2 of 3',
    eyebrowVn: 'Cách sắp xếp 2 trong 3',
    title: 'In a Liquid, They Touch — but They Slide',
    titleVn: 'Trong chất lỏng, các hạt chạm nhau — nhưng trượt được',
    ratio: 48,
    side: 'left',
    inlineSvg: DIAGRAMS.PARTICLES_LIQUID,
    content:
      'Still touching, still no space between them — that has not changed from the solid.\n\n' +
      'What changed is the **hold**. It is only **weak** now, so particles slide past one another and change places. No pattern.\n\n' +
      'Look at the top: a **flat surface**. That is the container’s shape, not the liquid’s.',
    contentVn:
      'Vẫn chạm nhau, vẫn không có khoảng trống — điều đó không đổi so với chất rắn.\n\n' +
      'Thứ đã đổi là **độ bám giữ**. Giờ nó chỉ còn **yếu**, nên các hạt trượt qua nhau và đổi chỗ. Không còn khuôn mẫu.\n\n' +
      'Nhìn mặt trên: một **bề mặt phẳng**. Đó là hình dạng của vật chứa, không phải của chất lỏng.',
    notes: [
      {
        tone: 'write',
        text: '**In a liquid:** the particles **still touch** each other, but they are **held together weakly**. They can **move past one another** and change places.',
        textVn: '**Trong chất lỏng:** các hạt **vẫn chạm nhau**, nhưng chỉ **liên kết yếu**. Chúng có thể **trượt qua nhau** và đổi chỗ cho nhau.',
      },
    ],
  },
  {
    layout: 'split',
    accent: VIOLET,
    icon: 'Wind',
    eyebrow: 'Arrangement 3 of 3',
    eyebrowVn: 'Cách sắp xếp 3 trong 3',
    title: 'In a Gas, Almost All of It Is Empty',
    titleVn: 'Trong chất khí, gần như toàn bộ là khoảng trống',
    ratio: 48,
    side: 'left',
    inlineSvg: DIAGRAMS.PARTICLES_GAS,
    content:
      'Now the particles do **not** touch. They are far apart, moving quickly in every direction, and nothing holds them together.\n\n' +
      'A gas does not have fewer particles — the **space between them** has become enormous.\n\n' +
      'They spread out by themselves until every corner is filled. That is the ink, and that is the smell from the kitchen.',
    contentVn:
      'Bây giờ các hạt **không** chạm nhau. Chúng ở xa nhau, chuyển động nhanh theo mọi hướng, và không có gì giữ chúng lại.\n\n' +
      'Chất khí không hề có ít hạt hơn — mà **khoảng cách giữa chúng** đã trở nên rất lớn.\n\n' +
      'Chúng tự lan ra cho đến khi lấp đầy mọi góc. Đó là giọt mực, và đó là mùi thức ăn từ căn bếp.',
    notes: [
      {
        tone: 'write',
        text: '**In a gas:** the particles do **not touch**. They are **far apart** and **spread out by themselves** to fill the space they are in.',
        textVn: '**Trong chất khí:** các hạt **không chạm nhau**. Chúng ở **xa nhau** và **tự lan ra** để lấp đầy không gian chứa chúng.',
      },
    ],
  },
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'Learner’s Book, page 32 · Think like a scientist',
    eyebrowVn: 'Sách học sinh, trang 32 · Tư duy như nhà khoa học',
    title: 'Everybody Stand Up. You Are the Particles.',
    titleVn: 'Cả lớp đứng lên. Em chính là các hạt.',
    content:
      'In your group, arrange yourselves as the particles in a **solid**, then a **liquid**, then a **gas**. I will say when to change. Each time, ask: **regular rows? touching? can you change places?**',
    contentVn:
      'Theo nhóm, hãy xếp mình thành các hạt trong **chất rắn**, rồi **chất lỏng**, rồi **chất khí**. Thầy sẽ hô khi đổi. Mỗi lần hãy tự hỏi: **hàng đều không? chạm nhau không? đổi chỗ được không?**',
    notes: [
      {
        tone: 'write',
        badge: 'Page 32, Question 2 — say it, then write it',
        badgeVn: 'Trang 32, Câu hỏi 2 — nói trước, viết sau',
        text: 'Sit down and finish these **out loud** with your partner, then write all three in **your own English**: *In solids / In liquids / In gases, the particles are arranged…*',
        textVn: 'Ngồi xuống, hoàn thành các câu này **bằng lời** cùng bạn, rồi viết cả ba bằng **tiếng Anh của chính em**: *In solids / In liquids / In gases, the particles are arranged…*',
      },
    ],
  },

  // ── Section 3: page 33 — the properties, explained ──────────────────────
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Talk to your partner — one minute, no hands yet',
    eyebrowVn: 'Nói với bạn — một phút, chưa giơ tay',
    title: 'You Can Pour Water. You Cannot Pour a Brick.',
    titleVn: 'Rót được nước. Không rót được viên gạch.',
    text: 'Both are made of particles. So **why does one flow and the other refuse?**',
    textVn: 'Cả hai đều tạo nên từ các hạt. Vậy **vì sao thứ này chảy được, thứ kia thì không?**',
    sub: 'Both pictures are already in your notebook. The answer is a difference between them.',
    subVn: 'Cả hai hình đã có trong vở em. Đáp án là một điểm khác nhau giữa chúng.',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Scale',
    eyebrow: 'Learner’s Book, page 33',
    eyebrowVn: 'Sách học sinh, trang 33',
    title: 'Two Rules That Explain the Whole Table',
    titleVn: 'Hai quy tắc giải thích cả cái bảng',
    ratio: 52,
    side: 'left',
    inlineSvg: DIAGRAMS.THREE_ARRANGEMENTS,
    content:
      'Every tick and cross you drew last lesson comes out of these two sentences. Read them slowly — they are short, and they are doing a great deal of work.\n\n' +
      'Then hold them against the three boxes. A solid fails both. A liquid passes the first and fails the second. A gas passes both.',
    contentVn:
      'Mọi dấu tích và dấu chéo em vẽ tiết trước đều suy ra từ hai câu này. Hãy đọc chậm — chúng ngắn, nhưng làm được rất nhiều việc.\n\n' +
      'Rồi đối chiếu chúng với ba ô vuông. Chất rắn trượt cả hai. Chất lỏng đạt câu đầu và trượt câu sau. Chất khí đạt cả hai.',
    notes: [
      {
        tone: 'write',
        text: 'Matter can only **flow** (be poured) if the particles can **move past one another**.\n\nMatter can only **change volume** if the particles can **spread out or move closer together**.',
        textVn: 'Vật chất chỉ **chảy** (rót được) khi các hạt có thể **trượt qua nhau**.\n\nVật chất chỉ **đổi thể tích** khi các hạt có thể **giãn ra hoặc xích lại gần nhau**.',
      },
    ],
  },
  {
    layout: 'compare',
    accent: TEAL,
    icon: 'Equal',
    eyebrow: 'Rule 1 · why one flows and the other does not',
    eyebrowVn: 'Quy tắc 1 · vì sao thứ này chảy còn thứ kia thì không',
    title: 'The Difference Is the Pull Between Them',
    titleVn: 'Khác nhau là ở lực hút giữa các hạt',
    columns: [
      {
        heading: 'A solid cannot flow',
        headingVn: 'Chất rắn không chảy được',
        accent: STONE,
        icon: 'Box',
        inlineSvg: DIAGRAMS.PARTICLES_SOLID,
        caption: 'There is a **pull** between the particles — an **attractive force** — and in a solid it is strong. It holds every particle in its place, so they can only vibrate. Nothing can move past anything. So a solid cannot flow, and it keeps its own shape.',
        captionVn: 'Giữa các hạt có một **lực kéo** — gọi là **lực hút (attractive force)** — và trong chất rắn lực này rất mạnh. Nó giữ mỗi hạt ở đúng vị trí, nên chúng chỉ dao động được. Không hạt nào trượt qua hạt nào. Vì thế chất rắn không chảy được, và giữ hình dạng riêng.',
      },
      {
        heading: 'A liquid can flow',
        headingVn: 'Chất lỏng chảy được',
        accent: WATER,
        icon: 'Droplets',
        inlineSvg: DIAGRAMS.PARTICLES_LIQUID,
        caption: 'The same pull is there, but it is **weak** — weak enough to let the particles slide past one another, and still strong enough to keep them touching. That is why a liquid flows into any shape but never spreads out to fill the room the way a gas does.',
        captionVn: 'Vẫn có lực kéo đó, nhưng nó **yếu** — đủ yếu để các hạt trượt qua nhau, mà vẫn đủ mạnh để giữ chúng chạm vào nhau. Vì thế chất lỏng chảy vào mọi hình dạng nhưng không bao giờ lan ra lấp đầy cả căn phòng như chất khí.',
      },
    ],
  },
  {
    layout: 'split',
    accent: VIOLET,
    icon: 'Zap',
    eyebrow: 'Rule 2 · and this is Monday’s syringe',
    eyebrowVn: 'Quy tắc 2 · và đây chính là chiếc xi-lanh hôm thứ Hai',
    title: 'Why the Air Plunger Moved',
    titleVn: 'Vì sao cần đẩy bên không khí lại di chuyển',
    ratio: 52,
    side: 'left',
    inlineSvg: DIAGRAMS.COMPRESSING_GAS,
    content:
      'In a gas almost **nothing holds the particles together**, and there is a lot of **space between them**. Push, and they move closer — the gas takes up less room. Nothing escaped: **the gaps got smaller**, and that is all “compressed” means.\n\n' +
      'Now the water syringe. Those particles already touch. No gap left to close, so the plunger does not move.',
    contentVn:
      'Trong chất khí gần như **không có gì giữ các hạt lại**, và có rất nhiều **khoảng trống giữa chúng**. Đẩy vào thì chúng xích lại gần nhau — chất khí chiếm ít chỗ hơn. Không có gì thoát ra: **các khoảng trống nhỏ lại**, và “nén” chỉ có nghĩa như vậy.\n\n' +
      'Giờ đến xi-lanh nước. Các hạt ở đó đã chạm nhau. Không còn khoảng trống để khép, nên cần đẩy không nhúc nhích.',
    notes: [
      {
        tone: 'write',
        text: '**Attractive forces:** the pull between particles. **Strong** in a solid · **weak** in a liquid · almost **none** in a gas.',
        textVn: '**Lực hút (attractive forces):** lực kéo giữa các hạt. **Mạnh** trong chất rắn · **yếu** trong chất lỏng · gần như **không có** trong chất khí.',
      },
    ],
  },

  // ── Section 4: no particles at all ──────────────────────────────────────
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'CircleSlash',
    eyebrow: 'Learner’s Book, page 33 · No particles?',
    eyebrowVn: 'Sách học sinh, trang 33 · Không có hạt nào?',
    title: 'What if You Take Them All Away?',
    titleVn: 'Nếu lấy đi hết các hạt thì sao?',
    ratio: 48,
    side: 'left',
    inlineSvg: DIAGRAMS.VACUUM_BOX,
    content:
      'A box of gas looks empty. It is not — it is mostly space, but there are particles in it, bouncing around.\n\n' +
      'Take every one of them out and you have something with a name of its own: a **vacuum**. Not thin air. Not almost nothing. **Nothing.**\n\n' +
      'A vacuum has no state of matter, because there is no matter in it to have a state.',
    contentVn:
      'Hộp chứa khí trông có vẻ trống rỗng. Nó không trống — phần lớn là khoảng không, nhưng vẫn có các hạt đang nảy qua nảy lại.\n\n' +
      'Lấy hết chúng ra thì em có một thứ có tên riêng: **chân không (vacuum)**. Không phải khí loãng, mà là **không có gì cả**.\n\n' +
      'Chân không không có trạng thái nào, vì trong đó không có vật chất.',
    notes: [
      {
        tone: 'write',
        text: '**Vacuum:** a space where there are **no particles at all**. A vacuum contains nothing.',
        textVn: '**Chân không (vacuum):** một khoảng không **hoàn toàn không có hạt nào**. Chân không không chứa gì cả.',
      },
    ],
  },
  {
    layout: 'showcase',
    accent: VIOLET,
    icon: 'Globe',
    eyebrow: 'The biggest vacuum you will ever be shown a picture of',
    eyebrowVn: 'Chân không lớn nhất mà em từng được xem ảnh',
    title: 'Everything Black Here Is a Vacuum',
    titleVn: 'Mọi chỗ đen ở đây đều là chân không',
    image: earth,
    caption: 'The blue and white is our **atmosphere** — a thin skin of gas, and every particle you have ever breathed is inside it. The black is **space**, and space is very close to a perfect vacuum. That is why astronauts carry their own air, and why **there is no sound out there**: sound needs particles to travel through, and there are none.',
    captionVn: 'Phần xanh và trắng là **khí quyển** của chúng ta — một lớp khí mỏng, và mọi hạt em từng hít thở đều nằm trong đó. Phần đen là **vũ trụ**, và vũ trụ gần như là chân không hoàn hảo. Vì thế phi hành gia phải mang theo không khí riêng, và vì thế **ngoài đó không có âm thanh**: âm thanh cần các hạt để truyền đi, mà ở đó thì không có hạt nào.',
  },

  // ── Section 5: page 34 — testing the theory instead of learning it ──────
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Learner’s Book, page 34 · Think like a scientist · in pairs',
    eyebrowVn: 'Sách học sinh, trang 34 · Tư duy như nhà khoa học · theo cặp',
    title: 'A Sponge Is a Solid. So Why Can You Squash It?',
    titleVn: 'Miếng bọt biển là chất rắn. Vậy vì sao bóp được nó?',
    image: sponge,
    caption: 'We wrote it down twice today: **a solid cannot be compressed**, because its particles are already touching. But you can squeeze a sponge to half its size with one hand, and a marshmallow with two fingers. Either the theory is **wrong**, or we have missed something. Three minutes, in pairs. **Which is it?**',
    captionVn: 'Hôm nay chúng ta đã viết điều này hai lần: **chất rắn không thể bị nén**, vì các hạt của nó đã chạm nhau rồi. Nhưng em có thể bóp miếng bọt biển nhỏ đi một nửa chỉ bằng một tay, và bóp kẹo dẻo bằng hai ngón. Hoặc là học thuyết **sai**, hoặc là chúng ta đã bỏ sót điều gì đó. Ba phút, theo cặp. **Là điều nào?**',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'ShieldCheck',
    eyebrow: 'The answer — and it is not "the theory is wrong"',
    eyebrowVn: 'Đáp án — và không phải là "học thuyết sai"',
    title: 'You Are Not Squashing the Sponge',
    titleVn: 'Em không hề bóp miếng bọt biển',
    ratio: 55,
    image: sponge,
    content:
      'Look at the holes. A sponge is not solid all the way through — it is a **thin skeleton of solid with air in every gap**.\n\n' +
      'When you squeeze it, the solid part is not compressed at all. **The air is.** You are compressing a gas, exactly as you did with the syringe, and the sponge simply folds up around the smaller gaps. Let go and the air pushes it back out.\n\n' +
      'So the theory survives — but only because we looked closely enough to see what was really being squashed.',
    contentVn:
      'Hãy nhìn những lỗ nhỏ. Miếng bọt biển không đặc từ trong ra ngoài — nó là một **bộ khung rắn mỏng với không khí trong mọi khe hở**.\n\n' +
      'Khi em bóp nó, phần chất rắn hoàn toàn không bị nén. **Không khí mới bị nén.** Em đang nén một chất khí, đúng như đã làm với chiếc xi-lanh, và miếng bọt biển chỉ gập lại quanh những khe hở nhỏ đi. Buông tay ra thì không khí lại đẩy nó bung ra.\n\n' +
      'Vậy là học thuyết vẫn đứng vững — nhưng chỉ vì chúng ta đã nhìn đủ kỹ để thấy thứ thật sự bị nén là gì.',
    reveal: {
      label: 'Page 34, Questions 3 and 4 — the strengths and the weaknesses',
      labelVn: 'Trang 34, Câu hỏi 3 và 4 — điểm mạnh và điểm yếu',
      answer:
        '**Strengths:** one simple idea explains shape, volume, pouring, compressing, the smell from the kitchen and the ink in the glass — and it makes **predictions we can test**, like the two syringes.\n\n' +
        '**Weaknesses:** nobody has ever seen a particle, so we are believing in something invisible. The picture also makes particles look like hard little balls, which they are not. And it says nothing about **why** the forces between them are strong or weak — that is Year 8.',
      answerVn:
        '**Điểm mạnh:** một ý tưởng đơn giản giải thích được hình dạng, thể tích, việc rót, việc nén, mùi thức ăn từ bếp và giọt mực trong cốc — và nó đưa ra **dự đoán có thể kiểm chứng**, như hai chiếc xi-lanh.\n\n' +
        '**Điểm yếu:** chưa ai từng nhìn thấy một hạt, nên ta đang tin vào thứ vô hình. Hình vẽ cũng khiến các hạt trông như những viên bi cứng, mà thật ra không phải vậy. Và nó không nói gì về **vì sao** lực giữa chúng mạnh hay yếu — điều đó là của Lớp 8.',
    },
  },

  // ── Section 6: the Draw This, the recap and the homework ────────────────
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Pencil',
    eyebrow: 'Learner’s Book, page 34 · Activity · rulers out',
    eyebrowVn: 'Sách học sinh, trang 34 · Hoạt động · lấy thước ra',
    title: 'Three Boxes, and the Space Around Them',
    titleVn: 'Ba ô vuông, và khoảng trống quanh chúng',
    inlineSvg: DIAGRAMS.THREE_ARRANGEMENTS,
    drawThis: true,
    caption: 'Rule three large squares across a clean page and label them **Solid · Liquid · Gas**. Draw the particles inside each one. Then, in the space **around** each box, write that state’s properties from your table. Eight minutes, and leave real space around the squares — you will add to this in 2.2.',
    captionVn: 'Kẻ ba ô vuông lớn ngang một trang giấy sạch và ghi tên **Solid · Liquid · Gas**. Vẽ các hạt vào trong từng ô. Rồi ở khoảng trống **quanh** mỗi ô, viết các tính chất của trạng thái đó từ bảng của em. Tám phút, và hãy chừa khoảng trống thật rộng quanh các ô — em sẽ viết thêm vào đó ở bài 2.2.',
  },
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Learner’s Book, page 34 · Summary checklist',
    eyebrowVn: 'Sách học sinh, trang 34 · Bảng tự kiểm tra',
    title: 'Can You Do All Six?',
    titleVn: 'Em làm được cả sáu điều này chứ?',
    content:
      '> Your notebook should now have **7 written items**, **3 sentences of your own English**, and **1 page of three labelled boxes**. Check.',
    contentVn:
      '> Trong vở của em bây giờ phải có **7 mục đã ghi**, **3 câu tiếng Anh của riêng em**, và **1 trang gồm ba ô vuông có ghi chú**. Hãy kiểm tra.',
    items: [
      { text: 'Classify any substance as a **solid, liquid or gas**.', textVn: 'Phân loại bất kỳ chất nào thành **rắn, lỏng hay khí**.' },
      { text: 'List the **properties** of solids, liquids and gases.', textVn: 'Liệt kê **tính chất** của chất rắn, chất lỏng và chất khí.' },
      { text: 'Describe how the **particles are arranged** in each of the three states.', textVn: 'Mô tả cách **các hạt được sắp xếp** trong mỗi trạng thái.' },
      { text: 'Use particle theory to explain **why a liquid pours and a solid does not**.', textVn: 'Dùng thuyết hạt để giải thích **vì sao chất lỏng rót được còn chất rắn thì không**.' },
      { text: 'Use particle theory to explain **why only a gas can be compressed**.', textVn: 'Dùng thuyết hạt để giải thích **vì sao chỉ chất khí mới nén được**.' },
      { text: 'Say what a **vacuum** is, and name one **weakness** of the particle theory.', textVn: 'Nói **chân không** là gì, và nêu một **điểm yếu** của thuyết hạt.' },
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
    content: 'Section 2.1 is finished — 2.2 is Changes of State.',
    contentVn: 'Bài 2.1 đã xong — bài 2.2 là Sự chuyển thể.',
    notes: [
      {
        tone: 'homework',
        badge: 'Reading Task',
        badgeVn: 'Bài đọc',
        icon: 'BookOpen',
        text: 'Read Unit 2.1, **pages 31 to 34**, and tick the page 34 checklist honestly.',
        textVn: 'Đọc Bài 2.1, **trang 31 đến 34**, và đánh dấu bảng tự kiểm tra trang 34 trung thực.',
      },
      {
        tone: 'homework',
        badge: 'Explain it to somebody',
        badgeVn: 'Giải thích cho một người',
        icon: 'Users',
        text: 'Explain to somebody at home, in **English**, why a bottle of water cannot be squashed but a balloon can. Write down what you said.',
        textVn: 'Giải thích cho một người ở nhà, bằng **tiếng Anh**, vì sao chai nước không bóp được còn bóng bay thì được. Viết lại điều em đã nói.',
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
    subtitle: 'One idea — particles, arranged three ways — explained every row of Monday’s table. Exit question: a sealed bottle of air and a sealed bottle of water, both exactly full. **Which has more empty space inside?** Say why, using the word *particles*.',
    subtitleVn: 'Chỉ một ý tưởng — các hạt, sắp xếp theo ba cách — đã giải thích mọi hàng trong bảng hôm thứ Hai. Câu hỏi ra về: một chai không khí và một chai nước đậy kín, cả hai đều đầy. **Chai nào có nhiều khoảng trống hơn?** Hãy nói vì sao, dùng từ *particles*.',
  },
]
