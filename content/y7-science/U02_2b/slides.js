// content/y7-science/U02_2b/slides.js
// Year 7 Science · 2.2b Measuring, and heating water. Monday 14 September 2026.
//
// The second half of Learner's Book section 2.2: pages 37-40. 2.2a (U02_2a) is
// pages 35-36 (the five change words) and is taught first — this deck uses those
// words at the end, when the water it heats reaches its boiling point and stops
// getting hotter.
//
// THIS LESSON IS A SKILL, not a set of facts: measure a volume accurately (read
// the bottom of the meniscus, eye level) and a temperature accurately (read the
// top of the liquid, eye level), then run a real investigation — heat water,
// record the temperature every minute, plot it, and discover that the
// temperature climbs and then STOPS at the boiling point. That last fact is the
// payoff, and it is asked as a prediction before it is shown.
//
// THE ENGLISH BEATS: "accurate" and "eye level" (the whole reason two people get
// different numbers), the graph words "axis / horizontal / vertical", and the
// sentence frames on p.40 for describing a graph — comparative English ("the
// longer we heated, the higher the temperature"), which is exactly what this
// class needs practice saying.
//
// THE COPY-DOWN PLAN. Five written items and two drawn:
//   · measuring cylinder + meniscus + how to read it
//   · thermometer + how to read it
//   · axis (and horizontal / vertical)
//   · the safety rules
//   · the finding: the temperature stops rising at the boiling point
//   · the apparatus, drawn and labelled      — Draw This
//   · the results table, ruled up            — Draw This
//
// Source: Learner's Book Unit 2.2, pages 37-40. Questions 1-2, the "Think like a
// scientist" method and its questions, and the Summary checklist are the book's
// own; the readings in the two question figures are chosen to be unambiguous.
// Every figure is redrawn in diagrams.js — no Learner's Book scans are used.
import { DIAGRAMS } from './diagrams.js'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const RED = '#c8102e'

export const slides = [
  // ── Section 1: why accuracy matters, and measuring volume ────────────────
  {
    layout: 'hero',
    color: TEAL,
    icon: 'Ruler',
    brand: 'Year 7 Science',
    brandVn: 'Khoa học Lớp 7',
    eyebrow: '2.2 Changes of state · part 2 of 2',
    eyebrowVn: '2.2 Sự chuyển thể · phần 2 trong 2',
    date: '14 Sep 2026',
    title: 'Measuring',
    titleVn: 'Đo lường',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'Write a **guess** for each temperature, in degrees C: a **cold drink**, a **warm bath**, and **boiling water**. Three numbers. We will check them later.',
      textVn: 'Viết một **con số dự đoán** cho mỗi nhiệt độ, theo độ C: một **ly nước lạnh**, một **bồn tắm ấm**, và **nước đang sôi**. Ba con số. Lát nữa ta sẽ kiểm tra.',
    },
  },
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'In pairs — one minute',
    eyebrowVn: 'Theo cặp — một phút',
    title: 'Same Water, Two Answers',
    titleVn: 'Cùng một lượng nước, hai đáp án',
    text: 'Two students measure the **same** water. One writes **50**, the other writes **47**.',
    textVn: 'Hai học sinh đo **cùng** một lượng nước. Một bạn viết **50**, bạn kia viết **47**.',
    sub: 'They cannot both be right. What did one of them do wrong?',
    subVn: 'Không thể cả hai đều đúng. Một trong hai bạn đã làm sai điều gì?',
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Beaker',
    eyebrow: 'Learner’s Book, page 37 · Measuring volume',
    eyebrowVn: 'Sách học sinh, trang 37 · Đo thể tích',
    title: 'Reading a Measuring Cylinder',
    titleVn: 'Đọc một ống đong',
    ratio: 52,
    side: 'left',
    inlineSvg: DIAGRAMS.MENISCUS,
    content:
      'You measure the **volume** of a liquid with a **measuring cylinder**. The surface of the liquid curves up at the edges — that curve is the **meniscus**.\n\n' +
      'Read from the **bottom** of the curve, with your **eye level** with it. Look from above and you read too high; from below, too low.',
    contentVn:
      'Em đo **thể tích (volume)** của chất lỏng bằng một **ống đong (measuring cylinder)**. Mặt chất lỏng cong lên ở mép — đường cong đó là **mặt khum (meniscus)**.\n\n' +
      'Đọc ở **đáy** của đường cong, với **mắt ngang tầm (eye level)** với nó. Nhìn từ trên xuống thì đọc quá cao; nhìn từ dưới lên thì quá thấp.',
    notes: [
      {
        tone: 'write',
        text: '**Measuring cylinder:** the tool used to measure the volume of a liquid.\n**Meniscus:** the curved surface of the liquid. Read the **bottom** of it, with your **eye level**.',
        textVn: '**Ống đong (measuring cylinder):** dụng cụ để đo thể tích chất lỏng.\n**Mặt khum (meniscus):** mặt cong của chất lỏng. Đọc ở **đáy** của nó, với **mắt ngang tầm**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'HelpCircle',
    eyebrow: 'Learner’s Book, page 37 · Question 1',
    eyebrowVn: 'Sách học sinh, trang 37 · Câu hỏi 1',
    title: 'What Volume Is in Each One?',
    titleVn: 'Mỗi ống chứa thể tích bao nhiêu?',
    ratio: 56,
    inlineSvg: DIAGRAMS.CYLINDERS_Q1,
    content:
      'Read each cylinder the way you just learned: **eye level**, at the **bottom of the meniscus**. Each small line is **10 cm³**.\n\n' +
      'Write your three answers in your notebook, with the units — **cm³** — every time.',
    contentVn:
      'Đọc mỗi ống theo cách em vừa học: **mắt ngang tầm**, ở **đáy mặt khum**. Mỗi vạch nhỏ là **10 cm³**.\n\n' +
      'Viết ba đáp án vào vở, kèm đơn vị — **cm³** — mỗi lần.',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**A** = 20 cm³\n**B** = 60 cm³\n**C** = 90 cm³',
      answerVn: '**A** = 20 cm³\n**B** = 60 cm³\n**C** = 90 cm³',
    },
  },

  // ── Section 2: measuring temperature ─────────────────────────────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Thermometer',
    eyebrow: 'Learner’s Book, page 37 · Measuring temperature',
    eyebrowVn: 'Sách học sinh, trang 37 · Đo nhiệt độ',
    title: 'Reading a Thermometer',
    titleVn: 'Đọc một nhiệt kế',
    ratio: 52,
    side: 'left',
    inlineSvg: DIAGRAMS.THERMOMETER,
    content:
      'You measure **temperature** with a **thermometer**. The liquid inside **expands** — gets bigger — as it gets hotter, so it rises up the tube.\n\n' +
      'Read the scale at the **top of the liquid**, with your **eye level** with it — the same rule as the cylinder.',
    contentVn:
      'Em đo **nhiệt độ (temperature)** bằng một **nhiệt kế (thermometer)**. Chất lỏng bên trong **giãn nở (expands)** — to ra — khi nóng lên, nên nó dâng lên trong ống.\n\n' +
      'Đọc thang đo ở **đỉnh của cột chất lỏng**, với **mắt ngang tầm** với nó — cùng quy tắc như ống đong.',
    notes: [
      {
        tone: 'write',
        text: '**Thermometer:** the tool used to measure temperature. The liquid inside **expands** and rises as it gets hotter. Read the **top of the liquid**, at **eye level**.',
        textVn: '**Nhiệt kế (thermometer):** dụng cụ để đo nhiệt độ. Chất lỏng bên trong **giãn nở** và dâng lên khi nóng hơn. Đọc ở **đỉnh cột chất lỏng**, **ngang tầm mắt**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'HelpCircle',
    eyebrow: 'Learner’s Book, page 38 · Question 2',
    eyebrowVn: 'Sách học sinh, trang 38 · Câu hỏi 2',
    title: 'What Temperature Does Each Show?',
    titleVn: 'Mỗi nhiệt kế chỉ bao nhiêu độ?',
    ratio: 56,
    inlineSvg: DIAGRAMS.THERMOMETERS_Q2,
    content:
      'Read each thermometer at the **top of the liquid**. Write your answers with the units — **degrees C** — every time.',
    contentVn:
      'Đọc mỗi nhiệt kế ở **đỉnh cột chất lỏng**. Viết đáp án kèm đơn vị — **độ C** — mỗi lần.',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer: '**A** = 25 degrees C\n**B** = 15 degrees C\n**C** = 40 degrees C',
      answerVn: '**A** = 25 độ C\n**B** = 15 độ C\n**C** = 40 độ C',
    },
  },

  // ── Section 3: the investigation — predict, do, plot, explain ─────────────
  {
    layout: 'statement',
    accent: PURPLE,
    icon: 'HelpCircle',
    eyebrow: 'Predict — write it down before we start',
    eyebrowVn: 'Dự đoán — viết ra trước khi bắt đầu',
    title: 'Does It Get Hotter Forever?',
    titleVn: 'Nước có nóng lên mãi không?',
    text: 'We are going to heat water and read the temperature **every minute** until it boils.',
    textVn: 'Chúng ta sẽ đun nước và đọc nhiệt độ **mỗi phút** cho đến khi nó sôi.',
    sub: 'Predict: does the temperature keep going up and up, or does something happen when it boils? Write your prediction now.',
    subVn: 'Dự đoán: nhiệt độ cứ tăng mãi, hay có điều gì xảy ra khi nước sôi? Hãy viết dự đoán của em ngay bây giờ.',
  },
  {
    layout: 'callout',
    accent: RED,
    icon: 'AlertTriangle',
    eyebrow: 'Learner’s Book, page 38 · Before you start',
    eyebrowVn: 'Sách học sinh, trang 38 · Trước khi bắt đầu',
    title: 'Safety First',
    titleVn: 'An toàn trước tiên',
    content:
      'Hot water burns. Before anyone lights a Bunsen burner, we agree the rules — and you copy them down.',
    contentVn:
      'Nước nóng gây bỏng. Trước khi ai đó châm đèn Bunsen, cả lớp thống nhất các quy tắc — và em chép lại.',
    notes: [
      {
        tone: 'homework',
        badge: 'Safety',
        badgeVn: 'An toàn',
        icon: 'AlertTriangle',
        text: 'Wear **safety spectacles**. **Stand up** while you work, so spilled hot water falls away from you, not onto you. **Take care** with the hot beaker and the Bunsen flame.',
        textVn: 'Đeo **kính bảo hộ**. **Đứng lên** khi làm, để nước nóng nếu đổ thì rơi ra xa người em, không phải vào người. **Cẩn thận** với cốc nóng và ngọn lửa đèn Bunsen.',
      },
    ],
  },
  {
    layout: 'showcase',
    accent: PURPLE,
    icon: 'FlaskConical',
    eyebrow: 'Rulers out — draw it as you set it up',
    eyebrowVn: 'Lấy thước ra — vẽ trong lúc em lắp đặt',
    title: 'The Apparatus',
    titleVn: 'Bộ dụng cụ',
    inlineSvg: DIAGRAMS.APPARATUS,
    drawThis: true,
    caption: 'Draw the whole set-up and label every part. The one thing that matters: the thermometer bulb sits IN the water, not touching the bottom of the beaker — so it measures the water, not the glass.',
    captionVn: 'Vẽ toàn bộ bộ dụng cụ và ghi nhãn từng bộ phận. Điều quan trọng nhất: bầu nhiệt kế nằm TRONG nước, không chạm đáy cốc — để nó đo nhiệt độ của nước, chứ không phải của thủy tinh.',
  },
  {
    layout: 'steps',
    accent: PURPLE,
    icon: 'FlaskConical',
    eyebrow: 'Learner’s Book, page 39 · The method',
    eyebrowVn: 'Sách học sinh, trang 39 · Cách tiến hành',
    title: 'What to Do',
    titleVn: 'Các bước tiến hành',
    steps: [
      { text: 'Measure **150 cm³** of water accurately into the beaker.', textVn: 'Đong chính xác **150 cm³** nước vào cốc.' },
      { text: 'Put the thermometer bulb **in the water**, held so it does **not touch the bottom**.', textVn: 'Đặt bầu nhiệt kế **trong nước**, giữ sao cho nó **không chạm đáy**.' },
      { text: 'Read the temperature and **record it** in your table at 0 minutes.', textVn: 'Đọc nhiệt độ và **ghi vào bảng** ở phút 0.' },
      { text: 'Light the Bunsen and heat the water. Read the temperature **every minute**.', textVn: 'Châm đèn Bunsen và đun nước. Đọc nhiệt độ **mỗi phút**.' },
      { text: 'Keep going until the water is **boiling** hard.', textVn: 'Tiếp tục cho đến khi nước **sôi** mạnh.' },
    ],
  },
  {
    layout: 'showcase',
    accent: ORANGE,
    icon: 'Grid3x3',
    eyebrow: 'Copy this before you light the Bunsen',
    eyebrowVn: 'Chép bảng này trước khi châm đèn Bunsen',
    title: 'Your Results Table',
    titleVn: 'Bảng kết quả của em',
    inlineSvg: DIAGRAMS.RESULTS_TABLE,
    drawThis: true,
    caption: 'Rule up this table so you are ready to write a number the moment you read one. Add more rows — you keep going until the water boils.',
    captionVn: 'Kẻ sẵn bảng này để em sẵn sàng ghi số ngay khi đọc được. Thêm nhiều dòng nữa — em tiếp tục cho đến khi nước sôi.',
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Grid3x3',
    eyebrow: 'Learner’s Book, page 40 · Plot a graph',
    eyebrowVn: 'Sách học sinh, trang 40 · Vẽ đồ thị',
    title: 'Turn the Table Into a Graph',
    titleVn: 'Biến bảng số thành đồ thị',
    ratio: 56,
    content:
      'A graph shows the numbers as a picture. It has two lines called **axes** (say *AK-sees*).\n\n' +
      'Put **time** along the **horizontal** axis (the one that goes across) and **temperature** up the **vertical** axis (the one that goes up). Mark each reading with a dot, then join the dots.',
    contentVn:
      'Đồ thị cho thấy các con số dưới dạng hình ảnh. Nó có hai đường gọi là **trục (axes)**.\n\n' +
      'Đặt **thời gian** dọc theo **trục nằm ngang (horizontal)** (đường đi ngang) và **nhiệt độ** theo **trục thẳng đứng (vertical)** (đường đi lên). Đánh dấu mỗi số đọc bằng một chấm, rồi nối các chấm lại.',
    notes: [
      {
        tone: 'write',
        text: '**Axis:** a line on a graph. **Time** goes on the **horizontal** axis (across); **temperature** goes on the **vertical** axis (up).',
        textVn: '**Trục (axis):** một đường trên đồ thị. **Thời gian** nằm trên **trục ngang (horizontal)**; **nhiệt độ** nằm trên **trục dọc (vertical)**.',
      },
    ],
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Zap',
    eyebrow: 'The answer to your prediction',
    eyebrowVn: 'Đáp án cho dự đoán của em',
    title: 'It Stops at the Boiling Point',
    titleVn: 'Nó dừng lại ở nhiệt độ sôi',
    ratio: 56,
    side: 'left',
    inlineSvg: DIAGRAMS.HEATING_CURVE,
    content:
      'At first the temperature climbs steadily — about the same amount each minute. Then it reaches **100 degrees C**, the **boiling point** of water, and it **stops rising**, even though the Bunsen is still on.\n\n' +
      'The heat is now being used to turn the liquid into gas, not to make it hotter. That is why the line goes flat.',
    contentVn:
      'Lúc đầu nhiệt độ tăng đều — mỗi phút tăng khoảng như nhau. Rồi nó đạt **100 độ C**, **nhiệt độ sôi** của nước, và nó **ngừng tăng**, dù đèn Bunsen vẫn đang cháy.\n\n' +
      'Bây giờ nhiệt được dùng để biến chất lỏng thành khí, chứ không phải để làm nó nóng hơn. Đó là lý do đường đồ thị đi ngang.',
    notes: [
      {
        tone: 'write',
        text: 'While water **boils**, its temperature **stays the same** at the boiling point (100 degrees C). The heat changes the liquid into gas instead of raising the temperature.',
        textVn: 'Trong khi nước **sôi**, nhiệt độ của nó **giữ nguyên** ở nhiệt độ sôi (100 độ C). Nhiệt biến chất lỏng thành khí thay vì làm tăng nhiệt độ.',
      },
    ],
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'MessageSquare',
    eyebrow: 'Learner’s Book, page 40 · Describe your graph',
    eyebrowVn: 'Sách học sinh, trang 40 · Mô tả đồ thị của em',
    title: 'Finish the Sentences',
    titleVn: 'Hoàn thành các câu',
    ratio: 56,
    content:
      'Describe your graph out loud, in full sentences. Fill each gap:\n\n' +
      '> When we heated the water, the temperature ______.\n' +
      '> The longer we heated it, the ______ the temperature became.\n' +
      '> When the water started to boil, the temperature ______.',
    contentVn:
      'Mô tả đồ thị của em thành lời, bằng câu đầy đủ. Điền vào mỗi chỗ trống:\n\n' +
      '> When we heated the water, the temperature ______.\n' +
      '> The longer we heated it, the ______ the temperature became.\n' +
      '> When the water started to boil, the temperature ______.',
    reveal: {
      label: 'Example answers',
      labelVn: 'Câu trả lời mẫu',
      answer:
        'When we heated the water, the temperature **went up (rose)**.\nThe longer we heated it, the **higher** the temperature became.\nWhen the water started to boil, the temperature **stayed the same**.',
      answerVn:
        'When we heated the water, the temperature **went up (rose)** — nhiệt độ tăng lên.\nThe longer we heated it, the **higher** the temperature became — càng đun lâu, nhiệt độ càng cao.\nWhen the water started to boil, the temperature **stayed the same** — khi nước bắt đầu sôi, nhiệt độ giữ nguyên.',
    },
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'HelpCircle',
    eyebrow: 'Learner’s Book, page 40 · Questions 3 to 5',
    eyebrowVn: 'Sách học sinh, trang 40 · Câu hỏi 3 đến 5',
    title: 'Explain What You Saw',
    titleVn: 'Giải thích điều em đã thấy',
    ratio: 56,
    content:
      '> **3.** What happened to the temperature when the water was boiling?\n' +
      '> **4.** Why do you think this happened?\n' +
      '> **5.** The thermometer is held so it does not rest on the bottom of the beaker. Why?',
    contentVn:
      '> **3.** Điều gì xảy ra với nhiệt độ khi nước đang sôi?\n' +
      '> **4.** Vì sao em nghĩ điều đó xảy ra?\n' +
      '> **5.** Nhiệt kế được giữ sao cho không chạm đáy cốc. Vì sao?',
    reveal: {
      label: 'Check',
      labelVn: 'Kiểm tra',
      answer:
        '**3.** It stopped rising and stayed the same, at about 100 degrees C.\n**4.** The heat was being used to turn the water into a gas (steam), not to make it hotter.\n**5.** So it measures the temperature of the **water**, not the hotter glass at the bottom of the beaker.',
      answerVn:
        '**3.** Nó ngừng tăng và giữ nguyên, ở khoảng 100 độ C.\n**4.** Nhiệt được dùng để biến nước thành khí (hơi), chứ không phải làm nó nóng hơn.\n**5.** Để nó đo nhiệt độ của **nước**, chứ không phải của lớp thủy tinh nóng hơn ở đáy cốc.',
    },
  },

  // ── Section 4: recap and homework ────────────────────────────────────────
  {
    layout: 'stack',
    variant: 'checklist',
    accent: TEAL,
    icon: 'CheckCircle2',
    columns: 2,
    eyebrow: 'Learner’s Book, page 40 · Summary checklist',
    eyebrowVn: 'Sách học sinh, trang 40 · Bảng tự đánh giá',
    title: 'Can You Do All Four?',
    titleVn: 'Em làm được cả bốn điều này chứ?',
    content:
      '> Your notebook should now have **the meniscus and thermometer notes**, **the word axis**, **the safety rules**, **one labelled apparatus drawing**, and **one results table**. Check.',
    contentVn:
      '> Trong vở của em bây giờ phải có **ghi chú về mặt khum và nhiệt kế**, **từ trục (axis)**, **các quy tắc an toàn**, **một hình bộ dụng cụ có ghi nhãn**, và **một bảng kết quả**. Hãy kiểm tra.',
    items: [
      { text: 'Name the **three states of matter**.', textVn: 'Kể tên **ba trạng thái của vật chất**.' },
      { text: 'Use the correct words for water changing from **solid to liquid to gas**.', textVn: 'Dùng đúng các từ cho nước chuyển từ **rắn sang lỏng sang khí**.' },
      { text: 'Use a **thermometer** and a **measuring cylinder** accurately.', textVn: 'Dùng **nhiệt kế** và **ống đong** một cách chính xác.' },
      { text: 'Carry out an **investigation safely**.', textVn: 'Tiến hành một **thí nghiệm an toàn**.' },
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
    content: 'Take your science notebook home. Both tasks are short.',
    contentVn: 'Hãy mang vở khoa học về nhà. Cả hai nhiệm vụ đều ngắn.',
    notes: [
      {
        tone: 'homework',
        badge: 'Practice reading scales',
        badgeVn: 'Luyện đọc thang đo',
        icon: 'Pencil',
        text: 'Draw a **measuring cylinder** showing **35 cm³**, and a **thermometer** showing **28 degrees C**. Mark clearly where you read each one.',
        textVn: 'Vẽ một **ống đong** chỉ **35 cm³**, và một **nhiệt kế** chỉ **28 độ C**. Đánh dấu rõ chỗ em đọc số ở mỗi hình.',
      },
      {
        tone: 'homework',
        badge: 'Finish the write-up',
        badgeVn: 'Hoàn thành bài viết',
        icon: 'BookOpen',
        text: 'Finish your graph and write the three sentences describing it. Read Unit 2.2 **pages 37 to 40** again to check your answers.',
        textVn: 'Hoàn thành đồ thị và viết ba câu mô tả nó. Đọc lại Bài 2.2 **trang 37 đến 40** để kiểm tra đáp án.',
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
    subtitle: 'You can measure a volume and a temperature accurately, and you know the temperature stops climbing at the boiling point. Exit question: **why** does the liquid in a thermometer rise when the water gets hotter? What is happening to it?',
    subtitleVn: 'Em đo được thể tích và nhiệt độ một cách chính xác, và em biết nhiệt độ ngừng tăng ở nhiệt độ sôi. Câu hỏi ra về: **vì sao** chất lỏng trong nhiệt kế dâng lên khi nước nóng hơn? Điều gì đang xảy ra với nó?',
  },
]
