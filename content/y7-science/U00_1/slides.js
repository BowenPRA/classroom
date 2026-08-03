// content/y7-science/U00_1/slides.js
// Year 7 · Day One — Tuesday 4 August 2026.
//
// One deck for the whole first day, in the order it is taught:
//   Part 1 · Homeroom 8:30–8:45  — welcome, who I am, the week
//   Part 2 · Science  8:45–9:35  — the guessing game, the expectation
//                                  letter, and setting up the binder
//   Part 3 · Math    10:45–11:35 — the Stage 6 diagnostic
//
// Styled after the Cambridge Lower Secondary Learner's Book: teal section
// headers, purple activity boxes, red homework, and the book's orange for
// everything a student has to copy down or do. On day one almost nothing goes
// in a notebook yet — so here the orange panels carry the INSTRUCTIONS, and
// they are the only place instructions live.
//
// The expectation letter is reproduced as seven note slides, one section each,
// because a page of prose handed to a Year 7 class is a page nobody reads.
import { DIAGRAMS } from './diagrams.js'
import { ScheduleWidget, QuestionCardsWidget, GuessWhoWidget } from './widgets.jsx'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'

export const slides = [
  // ══ PART 1 · HOMEROOM ════════════════════════════════════════════════════
  {
    layout: 'hero',
    color: '#0087a8',
    icon: 'Sparkles',
    brand: 'Year 7 · Homeroom',
    brandVn: 'Lớp 7 · Sinh hoạt lớp',
    eyebrow: 'Day One',
    eyebrowVn: 'Ngày đầu tiên',
    date: '4 Aug 2026',
    title: 'Welcome to Year 7',
    titleVn: 'Chào mừng đến với Lớp 7',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'On your desk there are **three small slips of paper**. Take them, take a pencil, and **do not write your name on anything**.',
      textVn: 'Trên bàn em có **ba mảnh giấy nhỏ**. Hãy cầm lấy chúng, lấy một cây bút chì, và **không viết tên lên bất kỳ mảnh nào**.',
    },
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Users',
    title: 'Three Facts About Mr Bowen',
    titleVn: 'Ba điều về thầy Bowen',
    ratio: 50,
    content:
      'I teach your **Science** lesson in the morning and your **Mathematics** lesson before lunch, and I am your **homeroom teacher** — so you will see me more than anybody else this year.\n\n' +
      'Here are three things about me. **One of them is not true.** Talk to the person next to you and decide which one.',
    contentVn:
      'Thầy dạy **Khoa học** vào buổi sáng và **Toán** trước giờ ăn trưa, và thầy cũng là **giáo viên chủ nhiệm** của em — nên năm nay em sẽ gặp thầy nhiều hơn bất kỳ ai khác.\n\n' +
      'Đây là ba điều về thầy. **Một trong số đó không đúng.** Hãy trao đổi với bạn bên cạnh và quyết định xem là điều nào.',
    notes: [
      {
        tone: 'task',
        badge: 'Which one is false?',
        badgeVn: 'Điều nào sai?',
        icon: 'HelpCircle',
        text:
          '**1.** I have taught in three different countries.\n' +
          '**2.** I once ate a whole durian by myself, on purpose.\n' +
          '**3.** I am 10.68 kilometres tall.',
        textVn:
          '**1.** Thầy đã từng dạy học ở ba quốc gia khác nhau.\n' +
          '**2.** Thầy từng tự mình ăn hết một quả sầu riêng, hoàn toàn cố ý.\n' +
          '**3.** Thầy cao 10,68 ki-lô-mét.',
      },
    ],
    reveal: {
      label: 'Decide with your partner first, then reveal',
      labelVn: 'Thống nhất với bạn trước, rồi hiện đáp án',
      answer:
        'Number **3** is false. I am 178 cm tall, which is roughly 60 000 times shorter. Keep that number somewhere though — you will meet **10.68 km** again tomorrow in Science, and it will make more sense then.',
      answerVn:
        'Điều **3** là sai. Thầy cao 178 cm, tức là thấp hơn khoảng 60 000 lần. Nhưng hãy nhớ con số ấy — em sẽ gặp lại **10,68 km** vào tiết Khoa học ngày mai, và lúc đó nó sẽ có ý nghĩa hơn.',
    },
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Layers',
    title: 'Your Week, Every Week',
    titleVn: 'Lịch học của em, mỗi tuần',
    ratio: 45,
    side: 'left',
    widget: ScheduleWidget,
    content:
      'This is your timetable, and it is the **same every day** from Monday to Friday. Learn it this week and you will never have to ask which book to bring.',
    contentVn:
      'Đây là thời khoá biểu của em, và nó **giống nhau mỗi ngày** từ thứ Hai đến thứ Sáu. Hãy thuộc nó ngay tuần này thì em sẽ không bao giờ phải hỏi hôm nay mang sách gì.',
    notes: [
      {
        tone: 'write',
        badge: 'Know these four times',
        badgeVn: 'Nhớ bốn mốc giờ này',
        text: 'School starts at **8:00**. Homeroom is **8:30**. Science is **8:45**. Mathematics is **10:45**.',
        textVn: 'Vào trường lúc **8:00**. Sinh hoạt lớp **8:30**. Khoa học **8:45**. Toán **10:45**.',
      },
    ],
  },
  {
    layout: 'stack',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'How our mornings will run',
    eyebrowVn: 'Buổi sáng của chúng ta sẽ diễn ra thế nào',
    title: 'Homeroom Every Morning',
    titleVn: 'Sinh hoạt lớp mỗi sáng',
    content: 'Fifteen minutes, same four things, every single day. If we do these well the rest of the day is easy.',
    contentVn: 'Mười lăm phút, cùng bốn việc, mỗi ngày. Nếu làm tốt bốn việc này thì cả ngày sẽ nhẹ nhàng.',
    notes: [
      {
        tone: 'write',
        badge: 'Arrive',
        badgeVn: 'Đến lớp',
        icon: 'Home',
        text: 'Be in the room and sitting down by **8:30**. Bag away, chair in, pencil out.',
        textVn: 'Có mặt trong lớp và ngồi vào chỗ trước **8:30**. Cất cặp, đẩy ghế vào, lấy bút ra.',
      },
      {
        tone: 'write',
        badge: 'Phone',
        badgeVn: 'Điện thoại',
        icon: 'AlertTriangle',
        text: 'Your phone is **left at reception** on the way in. It is not in your bag, and it is not in your pocket.',
        textVn: 'Điện thoại **để lại quầy lễ tân** khi vào trường. Không để trong cặp, không để trong túi.',
      },
      {
        tone: 'write',
        badge: 'Planner',
        badgeVn: 'Sổ liên lạc',
        icon: 'BookOpen',
        text: 'Your **student-family planner** is open on the desk. This is where deadlines and my feedback go.',
        textVn: 'Mở **sổ liên lạc gia đình** trên bàn. Đây là nơi ghi hạn nộp bài và nhận xét của thầy.',
      },
      {
        tone: 'write',
        badge: 'Notices',
        badgeVn: 'Thông báo',
        icon: 'MessageSquare',
        text: 'I read out what is happening today. If you missed it, ask a classmate — not me, in the middle of Science.',
        textVn: 'Thầy sẽ đọc các việc trong ngày. Nếu em bỏ lỡ, hãy hỏi bạn cùng lớp — đừng hỏi thầy giữa tiết Khoa học.',
      },
    ],
  },

  // ══ PART 2 · SCIENCE 8:45–9:35 ═══════════════════════════════════════════
  {
    layout: 'hero',
    color: '#5c2483',
    icon: 'FlaskConical',
    brand: 'Part 2 · Science',
    brandVn: 'Phần 2 · Khoa học',
    eyebrow: '8:45 – 9:35',
    eyebrowVn: '8:45 – 9:35',
    title: 'Who Is In This Room?',
    titleVn: 'Ai đang ở trong phòng này?',
    subtitle: 'The bin game, our class expectations, and setting up your binder.',
    subtitleVn: 'Trò chơi bốc phiếu, nội quy lớp học, và sắp xếp bìa còng của em.',
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'Pencil',
    title: 'Three Questions, Three Slips',
    titleVn: 'Ba câu hỏi, ba mảnh giấy',
    ratio: 45,
    side: 'left',
    widget: QuestionCardsWidget,
    content:
      'One question at a time. Write your answer on **one slip**, then fold it and wait for the next question.\n\n' +
      'Nobody will know it was you, so give a real answer — the more surprising it is, the harder we will have to think.',
    contentVn:
      'Mỗi lần một câu hỏi. Viết câu trả lời lên **một mảnh giấy**, gấp lại rồi chờ câu tiếp theo.\n\n' +
      'Không ai biết đó là của em, nên hãy trả lời thật — càng bất ngờ thì cả lớp càng phải suy nghĩ nhiều.',
    notes: [
      {
        tone: 'write',
        badge: 'How to write your slips',
        badgeVn: 'Cách viết phiếu của em',
        text: 'Answer in a **full English sentence**. **No name** on the slip. **Do not show anybody** what you wrote.',
        textVn: 'Trả lời bằng một **câu tiếng Anh hoàn chỉnh**. **Không ghi tên** lên phiếu. **Không cho ai xem** những gì em viết.',
      },
    ],
  },
  {
    layout: 'callout',
    accent: ORANGE,
    icon: 'Quote',
    eyebrow: 'Every class is an English class',
    eyebrowVn: 'Mỗi tiết học đều là tiết tiếng Anh',
    title: 'A Sentence, Not a Word',
    titleVn: 'Một câu, không phải một từ',
    content:
      'If I pull a slip out of the bin that just says "**football**", there is nothing to guess and nothing to say. A sentence tells us something about the person who wrote it. This is the rule for the whole year, in every subject I teach.',
    contentVn:
      'Nếu thầy rút ra một phiếu chỉ ghi "**football**", thì chẳng có gì để đoán và chẳng có gì để nói. Một câu hoàn chỉnh mới cho ta biết điều gì đó về người đã viết nó. Đây là quy tắc cho cả năm học, trong mọi môn thầy dạy.',
    notes: [
      {
        tone: 'info',
        badge: 'Not this',
        badgeVn: 'Không viết thế này',
        text: 'Football. · A dog. · Da Nang.',
        textVn: 'Football. · A dog. · Da Nang.',
      },
      {
        tone: 'write',
        badge: 'This',
        badgeVn: 'Hãy viết thế này',
        text: '**I am really good at** playing football with my left foot.\n**The best place I have been to is** Da Nang, and I swam there every morning.',
        textVn: '**I am really good at** playing football with my left foot.\n**The best place I have been to is** Da Nang, and I swam there every morning.',
      },
    ],
  },
  {
    layout: 'steps',
    accent: PURPLE,
    icon: 'Users',
    eyebrow: 'The bin game',
    eyebrowVn: 'Trò chơi bốc phiếu',
    title: 'How One Round Works',
    titleVn: 'Một lượt chơi diễn ra thế nào',
    ratio: 45,
    widget: GuessWhoWidget,
    steps: [
      { text: 'Fold your three slips and put them in the bin. I pull one out. **Nobody speaks.**', textVn: 'Gấp ba phiếu của em và bỏ vào hộp. Thầy rút một phiếu ra. **Không ai nói gì.**' },
      { text: 'I read it out **twice**, slowly. Listen for a clue.', textVn: 'Thầy đọc to **hai lần**, thật chậm. Hãy nghe kỹ để tìm manh mối.' },
      { text: 'I count **three, two, one** — everybody **points** at who they think wrote it.', textVn: 'Thầy đếm **ba, hai, một** — mọi người **chỉ tay** vào người mình nghĩ đã viết.' },
      { text: 'The writer **stands up** and says it again as a full sentence. Most of the class right, **the class scores**; wrong, **the writer scores**.', textVn: 'Người viết **đứng lên** và nói lại thành câu hoàn chỉnh. Phần lớn lớp đoán đúng thì **cả lớp ghi điểm**; sai thì **người viết ghi điểm**.' },
    ],
  },
  {
    layout: 'statement',
    accent: GREEN,
    icon: 'Sparkles',
    eyebrow: 'An example, so you know what a good slip sounds like',
    eyebrowVn: 'Một ví dụ, để em biết một phiếu hay nghe ra sao',
    title: 'Mr Bowen Goes First',
    titleVn: 'Thầy Bowen làm mẫu trước',
    label: 'Listen',
    labelVn: 'Lắng nghe',
    labelIcon: 'MessageSquare',
    text:
      'I am really good at **remembering the name of every student I have ever taught**.',
    textVn:
      'Thầy rất giỏi **nhớ tên của mọi học sinh thầy từng dạy**.',
    sub: 'Which is useful, because by Friday I will need all of yours. And I would keep a **cow** as a pet, because no cow has ever asked me a question during a test.',
    subVn: 'Điều đó khá hữu ích, vì đến thứ Sáu thầy sẽ cần nhớ hết tên các em. Và thầy sẽ nuôi một con **bò**, vì chưa có con bò nào từng hỏi thầy một câu trong giờ kiểm tra.',
  },

  // ── The expectation letter, one section per slide ────────────────────────
  {
    layout: 'statement',
    accent: TEAL,
    icon: 'BookOpen',
    eyebrow: 'The letter in front of you',
    eyebrowVn: 'Lá thư trước mặt em',
    title: 'Class Expectations',
    titleVn: 'Nội quy và kỳ vọng của lớp',
    label: 'Follow along',
    labelVn: 'Đọc theo',
    labelIcon: 'BookOpen',
    text: 'Every one of you has a **copy of this letter**. It is also going home to your family tonight.',
    textVn: 'Mỗi em đều có **một bản của lá thư này**. Tối nay nó cũng sẽ được mang về cho gia đình em.',
    sub: 'We are going to read it together, one section at a time. If there is a word you do not know, put your hand up and stop me — that is not interrupting, that is doing it properly.',
    subVn: 'Chúng ta sẽ cùng đọc, từng phần một. Nếu có từ nào em không hiểu, hãy giơ tay và dừng thầy lại — đó không phải là ngắt lời, đó là học đúng cách.',
  },
  {
    layout: 'stack',
    accent: TEAL,
    icon: 'MessageSquare',
    columns: 1,
    eyebrow: 'Letter · Section 1',
    eyebrowVn: 'Lá thư · Phần 1',
    title: 'How Your Family Contacts School',
    titleVn: 'Gia đình liên lạc với trường thế nào',
    notes: [
      {
        tone: 'theory',
        badge: 'For my subjects',
        badgeVn: 'Về các môn của thầy',
        text: 'Anything about **Science, Mathematics, homeroom or routines** goes straight to me: **bowen@pra.edu.vn**. Allow up to **three working days** for a reply.',
        textVn: 'Mọi việc liên quan đến **Khoa học, Toán, sinh hoạt lớp hoặc nề nếp** thì gửi thẳng cho thầy: **bowen@pra.edu.vn**. Vui lòng chờ tối đa **ba ngày làm việc** để nhận phản hồi.',
      },
      {
        tone: 'theory',
        badge: 'For everything else',
        badgeVn: 'Về những việc khác',
        text: 'Art and Design, PE, Fashion and Textiles, anything urgent, and general enquiries go to the admin team: **admin@palmriveracademy.edu.vn**.',
        textVn: 'Mỹ thuật, Thể dục, Thời trang và Dệt may, các việc khẩn cấp và các thắc mắc chung thì gửi cho bộ phận hành chính: **admin@palmriveracademy.edu.vn**.',
      },
      {
        tone: 'info',
        badge: 'What arrives without asking',
        badgeVn: 'Thông tin gửi tự động',
        text: 'A **weekly update** on Google Classroom about what we are learning, and the **school newsletter every Friday**.',
        textVn: 'Một **cập nhật hằng tuần** trên Google Classroom về nội dung đang học, và **bản tin của trường mỗi thứ Sáu**.',
      },
    ],
  },
  {
    layout: 'stack',
    accent: BLUE,
    icon: 'BookOpen',
    columns: 1,
    eyebrow: 'Letter · Section 2',
    eyebrowVn: 'Lá thư · Phần 2',
    title: 'Feedback and Your Planner',
    titleVn: 'Nhận xét và sổ liên lạc',
    content: 'The planner is the thread between this room and your kitchen table. It only works if it travels.',
    contentVn: 'Sổ liên lạc là sợi dây nối giữa lớp học này và bàn ăn nhà em. Nó chỉ có tác dụng nếu được mang đi mang về.',
    notes: [
      {
        tone: 'write',
        badge: 'Your job',
        badgeVn: 'Việc của em',
        text: 'Write **every deadline** in your planner, on the day it is set. Bring it to every lesson.',
        textVn: 'Ghi **mọi hạn nộp** vào sổ liên lạc, ngay hôm được giao. Mang sổ đến mọi tiết học.',
      },
      {
        tone: 'theory',
        badge: 'My job',
        badgeVn: 'Việc của thầy',
        text: 'I write **feedback about your progress** in it, and it goes home regularly. Your family can write back to me in the same book.',
        textVn: 'Thầy sẽ ghi **nhận xét về tiến bộ của em** vào đó, và sổ sẽ được mang về nhà thường xuyên. Gia đình em có thể viết phản hồi cho thầy ngay trong sổ.',
      },
    ],
  },
  {
    layout: 'stack',
    accent: RED,
    icon: 'AlertTriangle',
    columns: 1,
    eyebrow: 'Letter · Section 3',
    eyebrowVn: 'Lá thư · Phần 3',
    title: 'Phones and Digital Responsibility',
    titleVn: 'Điện thoại và trách nhiệm số',
    notes: [
      {
        tone: 'homework',
        badge: 'Phone-free campus',
        badgeVn: 'Trường không điện thoại',
        icon: 'AlertTriangle',
        text: 'You may **bring** a phone, but it is **dropped off at reception** when you arrive and collected at the **end of the day**.',
        textVn: 'Em **được mang** điện thoại, nhưng phải **gửi tại quầy lễ tân** khi đến trường và **nhận lại cuối ngày**.',
      },
      {
        tone: 'homework',
        badge: 'If it is not checked in',
        badgeVn: 'Nếu không gửi',
        icon: 'AlertTriangle',
        text: 'A phone found with a student during the day means the phone **stays at home** from then on, and **your family is notified**.',
        textVn: 'Nếu phát hiện học sinh giữ điện thoại trong ngày, điện thoại sẽ **phải để ở nhà** từ đó về sau, và **gia đình sẽ được thông báo**.',
      },
      {
        tone: 'theory',
        badge: 'Online',
        badgeVn: 'Trên mạng',
        text: 'Follow the **age rules** of every platform and the law — for example, **Discord is not allowed under 15**. Messaging apps and social media: be the person you are in this room.',
        textVn: 'Tuân thủ **quy định độ tuổi** của mọi nền tảng và pháp luật — ví dụ, **Discord không dành cho người dưới 15 tuổi**. Với ứng dụng nhắn tin và mạng xã hội: hãy cư xử đúng như con người em trong lớp này.',
      },
    ],
  },
  {
    layout: 'stack',
    accent: PURPLE,
    icon: 'ShieldCheck',
    columns: 1,
    eyebrow: 'Letter · Section 4',
    eyebrowVn: 'Lá thư · Phần 4',
    title: 'The Family Handbook',
    titleVn: 'Sổ tay Gia đình',
    content: 'Your family signs up to this, and so do you. It is short, and it covers four things.',
    contentVn: 'Gia đình em cam kết thực hiện điều này, và em cũng vậy. Nó ngắn thôi, và gồm bốn nội dung.',
    notes: [
      {
        tone: 'task',
        badge: 'What it covers',
        badgeVn: 'Nội dung',
        icon: 'ShieldCheck',
        text:
          '**Behaviour and conduct** — how we treat each other.\n' +
          '**Attendance, dress and classroom guidelines** — being here, on time, in uniform.\n' +
          '**Responsibilities** of students and of families.\n' +
          '**Devices** and appropriate use of technology.',
        textVn:
          '**Hành vi và ứng xử** — cách chúng ta đối xử với nhau.\n' +
          '**Chuyên cần, đồng phục và nề nếp lớp học** — có mặt, đúng giờ, đúng đồng phục.\n' +
          '**Trách nhiệm** của học sinh và của gia đình.\n' +
          '**Thiết bị** và việc sử dụng công nghệ đúng mực.',
      },
    ],
  },
  {
    layout: 'stack',
    accent: ORANGE,
    icon: 'Pencil',
    columns: 1,
    eyebrow: 'Letter · Section 5',
    eyebrowVn: 'Lá thư · Phần 5',
    title: 'Homework and Notebooks',
    titleVn: 'Bài tập về nhà và vở ghi',
    notes: [
      {
        tone: 'write',
        badge: 'Every week',
        badgeVn: 'Hằng tuần',
        text: 'There is homework **every week**. It is either a **paper packet** or specific questions from the **Learner’s Book or Workbook**.',
        textVn: 'Có bài tập về nhà **mỗi tuần**. Hoặc là một **tập bài in**, hoặc là các câu hỏi cụ thể trong **Sách học sinh hoặc Sách bài tập**.',
      },
      {
        tone: 'write',
        badge: 'Your notebook',
        badgeVn: 'Vở của em',
        text: 'You keep a **notebook** for copying lecture notes and questions. Sometimes homework answers are written **straight into it**.',
        textVn: 'Em giữ một quyển **vở** để chép bài giảng và câu hỏi. Đôi khi bài tập về nhà sẽ được viết **thẳng vào vở**.',
      },
      {
        tone: 'homework',
        badge: 'The books are not yours',
        badgeVn: 'Sách không phải của em',
        icon: 'AlertTriangle',
        text: 'You are encouraged to **take the Learner’s Book and Workbook home** to review. In return you take **excellent care** of them — no tears, no scribbles, no water.',
        textVn: 'Em được khuyến khích **mang Sách học sinh và Sách bài tập về nhà** để ôn. Đổi lại, em phải **giữ gìn thật cẩn thận** — không rách, không vẽ bậy, không để ướt.',
      },
    ],
  },
  {
    layout: 'stack',
    accent: TEAL,
    icon: 'Quote',
    columns: 1,
    eyebrow: 'Letter · Section 6',
    eyebrowVn: 'Lá thư · Phần 6',
    title: 'Literacy Is the Focus This Year',
    titleVn: 'Trọng tâm năm nay là kỹ năng ngôn ngữ',
    content:
      'This is the part of the letter that will change your day the most, so read it twice. **English writing is our main focus this year** — in Science and in Mathematics, not just in English lessons.',
    contentVn:
      'Đây là phần của lá thư ảnh hưởng đến em nhiều nhất, nên hãy đọc hai lần. **Viết tiếng Anh là trọng tâm chính của năm nay** — trong cả Khoa học và Toán, chứ không riêng gì môn tiếng Anh.',
    notes: [
      {
        tone: 'write',
        badge: 'What I will ask for',
        badgeVn: 'Điều thầy sẽ yêu cầu',
        text: 'Good **handwriting**, and **full, proper sentences** in everything you hand in.',
        textVn: '**Chữ viết** rõ ràng, và **câu hoàn chỉnh, đúng ngữ pháp** trong mọi bài em nộp.',
      },
      {
        tone: 'theory',
        badge: 'Why the computers stay shut',
        badgeVn: 'Vì sao máy tính sẽ đóng lại',
        text: 'We **substantially limit computer use** during Cambridge instructional time. Writing by hand and reasoning on paper is how the literacy gets built.',
        textVn: 'Chúng ta sẽ **hạn chế đáng kể việc dùng máy tính** trong giờ học chương trình Cambridge. Viết tay và tư duy trên giấy chính là cách xây dựng kỹ năng ngôn ngữ.',
      },
    ],
  },
  {
    layout: 'stack',
    accent: GREEN,
    icon: 'Boxes',
    columns: 2,
    eyebrow: 'Letter · Section 7',
    eyebrowVn: 'Lá thư · Phần 7',
    title: 'What You Bring Every Day',
    titleVn: 'Những thứ em mang theo mỗi ngày',
    content: 'The first three are required from tomorrow morning. The last one is a recommendation, but the students who have it enjoy the projects more.',
    contentVn: 'Ba mục đầu là bắt buộc kể từ sáng mai. Mục cuối là khuyến khích, nhưng bạn nào có thì sẽ thấy các dự án thú vị hơn nhiều.',
    notes: [
      {
        tone: 'write',
        badge: 'Required · daily',
        badgeVn: 'Bắt buộc · hằng ngày',
        text: '**Pencils**, a **coloured pen**, an **eraser**, a **ruler**, and a **sharpener**.',
        textVn: '**Bút chì**, một **bút màu**, **cục tẩy**, **thước kẻ**, và **gọt bút chì**.',
      },
      {
        tone: 'info',
        badge: 'From me',
        badgeVn: 'Thầy chuẩn bị',
        text: 'I keep **spare pencils** in the room and hand them out through the year. I do not keep spare rulers.',
        textVn: 'Thầy có sẵn **bút chì dự phòng** trong lớp và sẽ phát trong năm học. Nhưng thầy không có thước dự phòng.',
      },
      {
        tone: 'write',
        badge: 'Strongly encouraged',
        badgeVn: 'Rất nên có',
        text: 'A **maths kit** with a **protractor** and a **compass** — we start needing it in Unit 5.',
        textVn: 'Một **bộ dụng cụ toán** có **thước đo góc** và **compa** — chúng ta sẽ cần từ Chương 5.',
      },
      {
        tone: 'plant',
        badge: 'Recommended',
        badgeVn: 'Nên có',
        icon: 'Sparkles',
        text: 'A set of **coloured markers or pens** — there are a lot of diagrams and projects this year.',
        textVn: 'Một bộ **bút màu hoặc bút dạ** — năm nay sẽ có rất nhiều hình vẽ và dự án.',
      },
    ],
  },
  {
    layout: 'callout',
    accent: PURPLE,
    icon: 'GraduationCap',
    eyebrow: 'The last paragraph of the letter',
    eyebrowVn: 'Đoạn cuối của lá thư',
    title: 'What This Year Is For',
    titleVn: 'Năm học này để làm gì',
    content:
      'This year is about building a **strong, resilient foundation** in reasoning, problem-solving and literacy. We step back from screens during Cambridge time and lean into hands-on practice, careful note-taking and detailed project work.\n\n' +
      'Those are the habits that will still be useful to you in ten years, long after you have forgotten what a chloroplast does.',
    contentVn:
      'Năm học này là để xây dựng một **nền tảng vững chắc và bền bỉ** về tư duy, giải quyết vấn đề và ngôn ngữ. Chúng ta tạm rời màn hình trong giờ Cambridge và tập trung vào thực hành, ghi chép cẩn thận và làm dự án chi tiết.\n\n' +
      'Đó là những thói quen vẫn còn hữu ích với em sau mười năm nữa, rất lâu sau khi em đã quên lục lạp làm nhiệm vụ gì.',
    notes: [
      {
        tone: 'homework',
        badge: 'Tonight',
        badgeVn: 'Tối nay',
        icon: 'Home',
        text: 'The letter goes **home tonight**. A parent reads it and **signs the bottom**. Bring it back tomorrow and it lives at the **front of your binder** all year.',
        textVn: 'Lá thư sẽ được **mang về nhà tối nay**. Phụ huynh đọc và **ký vào cuối thư**. Ngày mai mang lại, và nó sẽ nằm ở **đầu bìa còng** của em suốt cả năm.',
      },
    ],
  },

  // ── Setting up the binder ────────────────────────────────────────────────
  {
    layout: 'steps',
    accent: ORANGE,
    icon: 'Boxes',
    eyebrow: 'Everybody stands up · four jobs, one at a time',
    eyebrowVn: 'Tất cả đứng lên · bốn việc, làm từng việc một',
    title: 'Setting Up Your Binder',
    titleVn: 'Sắp xếp bìa còng của em',
    ratio: 45,
    inlineSvg: DIAGRAMS.BINDER_SETUP,
    steps: [
      { text: 'Collect **one binder** and **one folder**. Write your **full name** on each.', textVn: 'Lấy **một bìa còng** và **một bìa kẹp**. Viết **họ tên đầy đủ** lên cả hai.' },
      { text: 'Put **three sleeves** into the binder: **Math**, **Science**, **English**.', textVn: 'Cho **ba túi nhựa** vào bìa còng: **Toán**, **Khoa học**, **Tiếng Anh**.' },
      { text: 'Put your **expectation letter** in the **very front**, before the sleeves.', textVn: 'Đặt **lá thư nội quy** ở **ngay trang đầu**, trước ba túi nhựa.' },
      { text: 'Write your **name** on **one piece of tape** and stick it on your **Learner’s Book**.', textVn: 'Viết **tên** lên **một mẩu băng dính** và dán lên **Sách học sinh** của em.' },
    ],
  },
  {
    layout: 'showcase',
    accent: TEAL,
    icon: 'BookOpen',
    eyebrow: 'Job four, close up',
    eyebrowVn: 'Việc thứ tư, nhìn gần',
    title: 'Your Name on Your Book',
    titleVn: 'Tên em trên sách của em',
    inlineSvg: DIAGRAMS.BOOK_TAPE,
    caption: 'The tape goes on the **front cover**, never on a page. Two hundred Learner’s Books look identical from across a room — the tape is the only reason yours comes back to you.',
    captionVn: 'Băng dính dán ở **bìa trước**, không bao giờ dán lên trang sách. Hai trăm quyển Sách học sinh nhìn từ xa đều giống hệt nhau — mẩu băng dính là lý do duy nhất khiến quyển của em quay về với em.',
  },
  {
    layout: 'stack',
    variant: 'checklist',
    accent: GREEN,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Before the bell',
    eyebrowVn: 'Trước khi hết tiết',
    title: 'Hold It Up and Check',
    titleVn: 'Giơ lên và kiểm tra',
    content:
      'Hold your binder up so I can see it from the front of the room. Five things, and I am checking all five.\n\n' +
      '> Anything not finished, finish it now — not tonight, not tomorrow morning.',
    contentVn:
      'Giơ bìa còng của em lên để thầy nhìn thấy từ phía trên lớp. Năm thứ, và thầy sẽ kiểm tra cả năm.\n\n' +
      '> Nếu còn thiếu gì, hãy hoàn thành ngay bây giờ — không phải tối nay, cũng không phải sáng mai.',
    items: [
      { text: 'My **name** is on the **binder**.', textVn: '**Tên** của em có trên **bìa còng**.' },
      { text: 'My **name** is on the **folder**.', textVn: '**Tên** của em có trên **bìa kẹp**.' },
      { text: '**Three sleeves** inside: Math, Science, English.', textVn: 'Bên trong có **ba túi nhựa**: Toán, Khoa học, Tiếng Anh.' },
      { text: 'The **expectation letter** is at the front.', textVn: '**Lá thư nội quy** nằm ở đầu.' },
      { text: '**Taped and named** Learner’s Book.', textVn: 'Sách học sinh đã được **dán băng dính và ghi tên**.' },
    ],
  },

  // ══ PART 3 · MATHEMATICS 10:45–11:35 ═════════════════════════════════════
  {
    layout: 'hero',
    color: '#1a5fa8',
    icon: 'Scale',
    brand: 'Part 3 · Mathematics',
    brandVn: 'Phần 3 · Toán',
    eyebrow: '10:45 – 11:35',
    eyebrowVn: '10:45 – 11:35',
    title: 'The Stage 6 Diagnostic',
    titleVn: 'Bài kiểm tra chẩn đoán Stage 6',
    card: {
      icon: 'Pencil',
      badge: 'On your desk',
      badgeVn: 'Trên bàn em',
      text: 'A **pencil**, an **eraser**, and **nothing else**. No calculator, no phone, no book.',
      textVn: 'Một **bút chì**, một **cục tẩy**, và **không gì khác**. Không máy tính, không điện thoại, không sách.',
    },
  },
  {
    layout: 'split',
    accent: BLUE,
    icon: 'Target',
    title: 'This Is Not a Test',
    titleVn: 'Đây không phải bài kiểm tra lấy điểm',
    ratio: 50,
    content:
      'A diagnostic and a test look the same and feel the same, but they are used for **completely different things**.\n\n' +
      'A test asks: **how much did you learn?** A diagnostic asks: **what should I teach first?** Nothing on this paper goes in your report, and nothing on it goes home.\n\n' +
      'Which means the only way to get it wrong is to leave the hard questions blank so that I never find out you needed them.',
    contentVn:
      'Bài chẩn đoán và bài kiểm tra trông giống nhau, cảm giác cũng giống nhau, nhưng chúng được dùng cho **hai mục đích hoàn toàn khác nhau**.\n\n' +
      'Bài kiểm tra hỏi: **em đã học được bao nhiêu?** Bài chẩn đoán hỏi: **thầy nên dạy gì trước?** Không có gì trong bài này vào học bạ, và cũng không có gì được gửi về nhà.\n\n' +
      'Nghĩa là cách duy nhất để làm sai bài này là bỏ trống những câu khó, khiến thầy không bao giờ biết em cần được giúp ở đâu.',
    notes: [
      {
        tone: 'write',
        text: '**Diagnostic:** a set of questions used to find out what you already know, so that the teaching can start in the right place. It is **not graded**.',
        textVn: '**Bài chẩn đoán:** một loạt câu hỏi dùng để tìm hiểu em đã biết những gì, để việc dạy bắt đầu đúng chỗ. Bài này **không chấm điểm**.',
      },
    ],
    reveal: {
      label: 'So what happens to your paper tonight?',
      labelVn: 'Vậy bài của em tối nay sẽ ra sao?',
      answer:
        'I mark every paper **tonight**, and tomorrow’s lesson is built from what I find. If the class is secure on integers we move fast; if it is not, we slow down. That decision is made by your paper, so make it an honest one.',
      answerVn:
        'Thầy sẽ chấm tất cả bài **ngay tối nay**, và tiết học ngày mai được xây dựng từ những gì thầy thấy. Nếu cả lớp vững về số nguyên, chúng ta sẽ đi nhanh; nếu chưa, chúng ta sẽ đi chậm lại. Quyết định đó đến từ bài làm của em, nên hãy làm thật trung thực.',
    },
  },
  {
    layout: 'stack',
    accent: RED,
    icon: 'ShieldCheck',
    columns: 2,
    eyebrow: 'Before I hand the papers out',
    eyebrowVn: 'Trước khi thầy phát đề',
    title: 'The Rules for the Next 40 Minutes',
    titleVn: 'Quy định cho 40 phút tới',
    notes: [
      {
        tone: 'write',
        badge: 'Silence',
        badgeVn: 'Giữ im lặng',
        text: 'From the moment the papers land until I collect them, **no talking at all** — not even to ask a friend what a word means.',
        textVn: 'Từ lúc nhận đề đến khi thầy thu bài, **tuyệt đối không nói chuyện** — kể cả để hỏi bạn nghĩa của một từ.',
      },
      {
        tone: 'write',
        badge: 'Ask me instead',
        badgeVn: 'Hãy hỏi thầy',
        icon: 'HelpCircle',
        text: 'If you cannot **read** a word, put your hand up. I will read it to you. That is allowed — this is a maths paper, not a reading paper.',
        textVn: 'Nếu em không **đọc được** một từ, hãy giơ tay. Thầy sẽ đọc cho em. Điều đó được phép — đây là bài Toán, không phải bài đọc hiểu.',
      },
      {
        tone: 'write',
        badge: 'Pencil only',
        badgeVn: 'Chỉ dùng bút chì',
        text: 'Work in **pencil** so you can erase. Show your **working** underneath the question, not on your hand.',
        textVn: 'Làm bài bằng **bút chì** để có thể tẩy. Trình bày **cách làm** ngay dưới câu hỏi, đừng viết lên tay.',
      },
      {
        tone: 'write',
        badge: 'Never blank',
        badgeVn: 'Đừng bỏ trống',
        text: 'If you are stuck, write **what you tried**. A wrong attempt tells me more than an empty box does.',
        textVn: 'Nếu bí, hãy viết **những gì em đã thử**. Một cách làm sai cho thầy biết nhiều hơn một ô trống.',
      },
    ],
  },
  {
    layout: 'steps',
    accent: ORANGE,
    icon: 'Quote',
    eyebrow: 'Every class is an English class',
    eyebrowVn: 'Mỗi tiết học đều là tiết tiếng Anh',
    title: 'How to Read a Word Problem',
    titleVn: 'Cách đọc một bài toán có lời văn',
    content: 'Marks are lost in Year 7 because a question was answered before it was read. Do these four things on **every** word problem today.',
    contentVn: 'Học sinh Lớp 7 mất điểm vì trả lời trước khi đọc kỹ. Hãy làm bốn việc sau với **mọi** bài toán có lời văn hôm nay.',
    steps: [
      { text: 'Read the **whole** question to the end. Do not start at the first number you see.', textVn: 'Đọc **hết** câu hỏi đến dòng cuối. Đừng bắt đầu từ con số đầu tiên em nhìn thấy.' },
      { text: '**Underline the numbers** and the **units** next to them — cm, kg, degrees.', textVn: '**Gạch chân các con số** và **đơn vị** đi kèm — cm, kg, độ.' },
      { text: '**Circle the word that tells you what to do**: total, difference, share, each, left.', textVn: '**Khoanh tròn từ cho biết phải làm gì**: total, difference, share, each, left.' },
      { text: 'Write the **calculation** first, then work it out. Check it is **sensible** — nobody has 2.5 brothers.', textVn: 'Viết **phép tính** trước, rồi mới tính. Kiểm tra kết quả có **hợp lý** không — không ai có 2,5 anh em.' },
    ],
  },
  {
    layout: 'callout',
    accent: TEAL,
    icon: 'ArrowRight',
    eyebrow: 'After the papers are collected',
    eyebrowVn: 'Sau khi thu bài',
    title: 'What Happens Next',
    titleVn: 'Tiếp theo sẽ thế nào',
    content:
      'I mark every paper tonight. Tomorrow we begin **Unit 1: Integers** in Mathematics, and **1.1 Cells** in Science — and both lessons will be pitched at what your papers tell me.\n\n' +
      'Nothing you did today decides what you are capable of. It only decides where we start.',
    contentVn:
      'Thầy sẽ chấm hết bài tối nay. Ngày mai chúng ta bắt đầu **Chương 1: Số nguyên** ở môn Toán, và **1.1 Tế bào** ở môn Khoa học — cả hai tiết sẽ được điều chỉnh theo những gì bài làm của em cho thầy biết.\n\n' +
      'Những gì em làm hôm nay không quyết định năng lực của em. Nó chỉ quyết định chúng ta bắt đầu từ đâu.',
    notes: [
      {
        tone: 'info',
        badge: 'Tomorrow',
        badgeVn: 'Ngày mai',
        text: 'Science 8:45 — **1.1 Cells**. Mathematics 10:45 — **1.1 Adding and Subtracting Integers**. Bring both books.',
        textVn: 'Khoa học 8:45 — **1.1 Tế bào**. Toán 10:45 — **1.1 Cộng và trừ số nguyên**. Mang theo cả hai quyển sách.',
      },
    ],
  },
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Day one, done',
    eyebrowVn: 'Ngày đầu tiên, hoàn tất',
    title: 'What You Leave With Today',
    titleVn: 'Hôm nay em ra về với những gì',
    content: 'Six things. If any of them is missing, see me before you go.',
    contentVn: 'Sáu thứ. Nếu thiếu bất kỳ thứ nào, hãy gặp thầy trước khi ra về.',
    items: [
      { text: 'A **binder** and a **folder** with my name on them.', textVn: 'Một **bìa còng** và một **bìa kẹp** có ghi tên em.' },
      { text: '**Three sleeves** — Math, Science, English.', textVn: '**Ba túi nhựa** — Toán, Khoa học, Tiếng Anh.' },
      { text: 'A **Learner’s Book** with my name taped on the cover.', textVn: 'Một **Sách học sinh** có dán tên trên bìa.' },
      { text: 'The **expectation letter**, to be signed at home.', textVn: '**Lá thư nội quy**, để ký ở nhà.' },
      { text: 'I know **four times**: 8:00, 8:30, 8:45, 10:45.', textVn: 'Em nhớ **bốn mốc giờ**: 8:00, 8:30, 8:45, 10:45.' },
      { text: 'I know the names of **five people** in this room.', textVn: 'Em nhớ tên của **năm bạn** trong lớp này.' },
    ],
  },
  {
    layout: 'callout',
    accent: RED,
    icon: 'Home',
    eyebrow: 'Homework · no writing tonight, three jobs instead',
    eyebrowVn: 'Bài về nhà · tối nay không viết, chỉ ba việc',
    title: 'For Tomorrow',
    titleVn: 'Cho ngày mai',
    notes: [
      {
        tone: 'homework',
        badge: 'Job 1 · the letter',
        badgeVn: 'Việc 1 · lá thư',
        icon: 'BookOpen',
        text: 'Give the **expectation letter** to a parent and bring it back **signed**.',
        textVn: 'Đưa **lá thư nội quy** cho phụ huynh và mang lại **có chữ ký**.',
      },
      {
        tone: 'homework',
        badge: 'Job 2 · your supplies',
        badgeVn: 'Việc 2 · dụng cụ',
        icon: 'Pencil',
        text: 'Pack **pencils, a coloured pen, an eraser, a ruler and a sharpener** — expected every day from tomorrow.',
        textVn: 'Chuẩn bị **bút chì, bút màu, cục tẩy, thước kẻ và gọt bút chì** — bắt buộc mỗi ngày kể từ mai.',
      },
      {
        tone: 'homework',
        badge: 'Job 3 · five names',
        badgeVn: 'Việc 3 · năm cái tên',
        icon: 'Users',
        text: 'Learn the **names of five classmates** you did not know this morning. I will ask tomorrow.',
        textVn: 'Học thuộc **tên của năm bạn cùng lớp** mà sáng nay em chưa biết. Ngày mai thầy sẽ hỏi.',
      },
    ],
  },
  {
    layout: 'hero',
    color: '#4a8b23',
    icon: 'Sparkles',
    brand: 'Year 7 · Day One',
    brandVn: 'Lớp 7 · Ngày đầu tiên',
    eyebrow: 'See you at 8:30 tomorrow',
    eyebrowVn: 'Hẹn gặp lúc 8:30 ngày mai',
    title: 'Well Done, Year 7',
    titleVn: 'Làm tốt lắm, Lớp 7',
    card: {
      icon: 'Quote',
      badge: 'One last thing',
      badgeVn: 'Một điều cuối cùng',
      text: 'You now know more about each other than you did at 8:30 this morning, and I know which one of you would keep a **wolf** in an apartment. I have written it down. We will discuss it in June.',
      textVn: 'Bây giờ các em đã hiểu nhau hơn so với lúc 8:30 sáng nay, và thầy đã biết bạn nào định nuôi một con **sói** trong căn hộ. Thầy đã ghi lại rồi. Đến tháng Sáu chúng ta sẽ bàn tiếp.',
    },
  },
]
