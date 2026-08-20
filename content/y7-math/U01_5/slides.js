// content/y7-math/U01_5/slides.js
// Year 7 Mathematics · 1.5 Tests for Divisibility. Thursday 20 Aug 2026.
//
// Same house style as 1.1–1.4: teal section headers, purple activity boxes,
// red homework, and the book's orange for every key word students copy down.
// Anything they must write goes in an orange "Write This Down" panel or an
// orange `>` bumper — never plain body text.
//
// TWO THINGS SHAPE THIS DECK.
//
// 1. The book does not give the tests. Section 1.5 opens straight into Worked
//    example 1.5 and uses "tests for divisibility" as though the reader
//    already has them, yet Exercise 1.5 needs tests for 4, 8, 9 and 11 within
//    the first three questions. So the rules table is the deck's job, and it
//    is the copy-down spine of the lesson: nine tests, in five groups, each
//    group a slide.
//
// 2. The hook runs the whole way through. Slide 2 puts 3960 on the board and
//    asks which of 2 to 11 divide into it — guesses only, no method, no
//    answer. Then EVERY rule slide pays a piece of it back in its reveal, so
//    the class ticks their own guess sheet as the tests arrive and no rule
//    slide is just a rule. Slide 10 asks where 7 went (there is no easy test
//    for it, which is exactly why the deck never taught one) and slide 11 is
//    the full tick chart: every number from 2 to 11 except 7.
//    3960 = 2 × 2 × 2 × 3 × 3 × 5 × 11, which is what makes that work.
//
// The English beat is slide 4: "6 is a factor of 24", "24 is divisible by 6"
// and "24 is a multiple of 6" are one fact in three sentences. Without it,
// "divisible by" becomes a fourth unrelated thing to memorise on top of the
// factor and multiple vocabulary from 1.3 and 1.4.
//
// Source: Learner's Book Section 1.5, pages 16–17. Nothing from Exercise 1.5
// is used in class, because that exercise is the homework — the in-class
// numbers are all original, and 3948 (the book's worked example) is avoided
// on purpose because it looks too much like 3960 on a projector.
import { DIAGRAMS } from './diagrams.js'
import { FactorHuntWidget } from './widgets.jsx'
import biscuits from './images/biscuits.jpg'
import chairs from './images/chairs.jpg'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'

export const slides = [
  // ── Section 1: open, and pose the hook with no method ─────────────────────
  {
    layout: 'hero',
    color: PURPLE,
    icon: 'Boxes',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    eyebrow: 'Unit 1 · 1.5',
    eyebrowVn: 'Chương 1 · 1.5',
    date: '20 Aug 2026',
    title: 'Tests for Divisibility',
    titleVn: 'Dấu hiệu chia hết',
    card: {
      icon: 'Pencil',
      badge: 'Starter Task',
      badgeVn: 'Nhiệm vụ khởi động',
      text: 'No calculators. Which of **24, 35, 90** and **91** divide exactly by **2**? Which divide exactly by **5**? You already know how — the question is *how did you decide so fast?*',
      textVn: 'Không dùng máy tính. Trong **24, 35, 90** và **91**, số nào chia hết cho **2**? Số nào chia hết cho **5**? Em đã biết cách rồi — câu hỏi là *vì sao em quyết định nhanh đến vậy?*',
    },
  },
  {
    // The hook. No method, no answer, no tests — those arrive one group at a
    // time from slide 5 onwards, and each one hands back a piece of this.
    layout: 'statement',
    accent: TEAL,
    eyebrow: 'In pairs — no calculators, two minutes',
    eyebrowVn: 'Theo cặp — không máy tính, hai phút',
    title: 'Mr Bowen’s Number',
    titleVn: 'Con số của thầy Bowen',
    label: 'Tick or cross',
    labelVn: 'Đánh dấu đúng hoặc sai',
    labelIcon: 'MessageSquare',
    // Just the number. The title above already says whose it is, and at
    // project size a sentence here wraps to two 55px lines and pushes the
    // bumper off the bottom — in Vietnamese especially.
    text: '**3960**',
    textVn: '**3960**',
    // `sub` goes through parseInlineText, which knows nothing about `>`
    // bumpers or blank lines — a bumper written there prints as a stray
    // arrow and swallows the line break. The numbers therefore live in
    // `content`, which StatementLayout renders through renderContent.
    sub: 'Which of these divide into it **exactly**, with **nothing left over**?',
    subVn: 'Số nào trong các số này chia hết **chính xác**, **không dư gì**?',
    content: '> **2 · 3 · 4 · 5 · 6 · 7 · 8 · 9 · 10 · 11**\n\nWrite them down the side of your page with a **tick** or a **cross** next to each. Guessing is fine.',
    contentVn: '> **2 · 3 · 4 · 5 · 6 · 7 · 8 · 9 · 10 · 11**\n\nHãy viết chúng dọc mép trang, đánh **dấu đúng** hoặc **dấu sai** cạnh mỗi số. Đoán cũng được.',
  },

  // ── Section 2: the two key words, and the English that carries them ───────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'BookOpen',
    eyebrow: 'Key words',
    eyebrowVn: 'Từ khoá',
    title: 'Divisible',
    titleVn: 'Divisible — Chia hết',
    ratio: 45,
    inlineSvg: DIAGRAMS.EXACTLY_OR_NOT,
    content: 'One number is **divisible by** another if it divides **exactly** — nothing left over, no remainder. It is the same idea as a factor, said from the other end.',
    contentVn: 'Một số **chia hết cho** số khác nếu phép chia ra **đúng** — không thừa gì, không có số dư. Đây chính là ý tưởng ước số, chỉ nói từ phía ngược lại.',
    notes: [
      {
        tone: 'write',
        text:
          '**Divisible:** divides exactly, with nothing left over. 42 is divisible by 6.\n' +
          '**Tests for divisibility:** quick checks that tell you **yes or no** without doing the division.',
        textVn:
          '**Chia hết (divisible):** chia ra đúng, không dư gì cả. 42 chia hết cho 6.\n' +
          '**Dấu hiệu chia hết (tests for divisibility):** những cách kiểm tra nhanh cho biết **có hay không**, mà không cần chia.',
      },
    ],
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Equal',
    side: 'left',
    eyebrow: 'Every class is an English class',
    eyebrowVn: 'Mỗi tiết học đều là tiết tiếng Anh',
    title: 'Three Ways to Say One Thing',
    titleVn: 'Ba cách nói cùng một điều',
    ratio: 45,
    inlineSvg: DIAGRAMS.THREE_SENTENCES,
    content: 'You met **factor** in the last lesson and **multiple** the lesson before. **Divisible by** is not a third new idea — all three sentences describe the same division.',
    contentVn: 'Em đã học **factor (ước số)** ở bài trước và **multiple (bội số)** ở bài trước nữa. **Divisible by** không phải ý tưởng thứ ba — cả ba câu đều mô tả cùng một phép chia.',
    notes: [
      {
        tone: 'write',
        text:
          'These three sentences say the **same thing**:\n' +
          '**1.** 6 is a **factor of** 24.\n' +
          '**2.** 24 is **divisible by** 6.\n' +
          '**3.** 24 is a **multiple of** 6.',
        textVn:
          'Ba câu này nói **cùng một điều**:\n' +
          '**1.** 6 là **ước số của** 24.\n' +
          '**2.** 24 **chia hết cho** 6.\n' +
          '**3.** 24 là **bội số của** 6.',
      },
    ],
  },

  // ── Section 3: the nine tests, in five groups. Each reveal pays back a
  //    piece of the 3960 hook, so no rule slide is only a rule. ─────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Target',
    eyebrow: 'Tests for 2, 5 and 10',
    eyebrowVn: 'Dấu hiệu chia hết cho 2, 5 và 10',
    title: 'Look at the Last Digit',
    titleVn: 'Nhìn vào chữ số cuối',
    ratio: 45,
    inlineSvg: DIAGRAMS.LAST_DIGIT,
    content: 'For these three tests, **cover up the whole number except the last digit**. Nothing else can change the answer.',
    contentVn: 'Với ba dấu hiệu này, hãy **che hết cả số, chỉ chừa chữ số cuối**. Không có gì khác làm thay đổi câu trả lời.',
    notes: [
      {
        tone: 'write',
        text:
          '**Divisible by 2:** the last digit is 0, 2, 4, 6 or 8.\n' +
          '**Divisible by 5:** the last digit is 0 or 5.\n' +
          '**Divisible by 10:** the last digit is 0.',
        textVn:
          '**Chia hết cho 2:** chữ số cuối là 0, 2, 4, 6 hoặc 8.\n' +
          '**Chia hết cho 5:** chữ số cuối là 0 hoặc 5.\n' +
          '**Chia hết cho 10:** chữ số cuối là 0.',
      },
    ],
    reveal: {
      label: 'Try it on 3960',
      labelVn: 'Thử với 3960',
      answer: '3960 ends in **0**, so it is divisible by **2**, by **5** and by **10**. Three ticks already. Check them off on your list.',
      answerVn: '3960 tận cùng bằng **0**, nên nó chia hết cho **2**, cho **5** và cho **10**. Đã được ba dấu đúng. Hãy đánh dấu vào danh sách của em.',
    },
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'Layers',
    side: 'left',
    eyebrow: 'Tests for 3 and 9',
    eyebrowVn: 'Dấu hiệu chia hết cho 3 và 9',
    title: 'Add Up the Digits',
    titleVn: 'Cộng các chữ số lại',
    ratio: 45,
    inlineSvg: DIAGRAMS.DIGIT_SUM,
    // The "if the sum is still big, add its digits again" tip lived here and
    // pushed the Vietnamese past the bottom of the slide. It is in plan.js
    // instead, for the teacher to say out loud.
    content: 'Throw the number away and keep only the **sum of its digits**. If the sum passes, the number passes.',
    contentVn: 'Bỏ qua con số ban đầu, chỉ giữ lại **tổng các chữ số**. Nếu tổng thoả điều kiện thì số đó cũng thoả.',
    notes: [
      {
        tone: 'write',
        text:
          '**Divisible by 3:** the digits add up to a multiple of 3.\n' +
          '**Divisible by 9:** the digits add up to a multiple of 9.\n' +
          'Example: 4725 → 18, so both.',
        textVn:
          '**Chia hết cho 3:** tổng các chữ số là bội số của 3.\n' +
          '**Chia hết cho 9:** tổng các chữ số là bội số của 9.\n' +
          'Ví dụ: 4725 → 18, nên cả hai.',
      },
    ],
    reveal: {
      label: 'Try it on 3960',
      labelVn: 'Thử với 3960',
      answer: '3 + 9 + 6 + 0 = **18**, a multiple of both **3** and **9**. Five ticks.',
      answerVn: '3 + 9 + 6 + 0 = **18**, là bội số của cả **3** và **9**. Được năm dấu đúng.',
    },
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'ScanEye',
    eyebrow: 'Tests for 4 and 8',
    eyebrowVn: 'Dấu hiệu chia hết cho 4 và 8',
    title: 'Look at the End',
    titleVn: 'Nhìn vào phần đuôi',
    ratio: 45,
    inlineSvg: DIAGRAMS.END_OF_NUMBER,
    content: 'These two need more than one digit, but still not the whole number. Put a finger over the front and test only what is left.',
    contentVn: 'Hai dấu hiệu này cần nhiều hơn một chữ số, nhưng vẫn không cần cả số. Hãy lấy ngón tay che phần đầu và chỉ kiểm tra phần còn lại.',
    notes: [
      {
        tone: 'write',
        text:
          '**Divisible by 4:** the last **two** digits make a multiple of 4.\n' +
          '**Divisible by 8:** the last **three** digits make a multiple of 8.',
        textVn:
          '**Chia hết cho 4:** **hai** chữ số cuối tạo thành bội số của 4.\n' +
          '**Chia hết cho 8:** **ba** chữ số cuối tạo thành bội số của 8.',
      },
    ],
    reveal: {
      label: 'Try it on 3960',
      labelVn: 'Thử với 3960',
      // One paragraph, not two: with the copy-down panel above it, a two-part
      // answer pushed the last line off the bottom of the slide.
      answer: 'Last two digits **60**, and $60 ÷ 4 = 15$. Last three digits **960**, and $960 ÷ 8 = 120$. So 3960 divides by **4** and by **8**. Seven ticks.',
      answerVn: 'Hai chữ số cuối **60**, và $60 ÷ 4 = 15$. Ba chữ số cuối **960**, và $960 ÷ 8 = 120$. Vậy 3960 chia hết cho **4** và cho **8**. Được bảy dấu đúng.',
    },
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'ShieldCheck',
    side: 'left',
    eyebrow: 'Test for 6',
    eyebrowVn: 'Dấu hiệu chia hết cho 6',
    title: 'Two Tests at Once',
    titleVn: 'Hai dấu hiệu cùng lúc',
    ratio: 45,
    inlineSvg: DIAGRAMS.SIX_IS_TWO_AND_THREE,
    content: 'There is **no new test** for 6. Because $6 = 2 × 3$, a number divides by 6 exactly when it divides by 2 **and** by 3. One tick is not enough — 10 is even, but 10 does not divide by 6.',
    contentVn: 'Không có dấu hiệu **mới** cho 6. Vì $6 = 2 × 3$, một số chia hết cho 6 đúng khi nó chia hết cho 2 **và** cho 3. Một dấu đúng thôi thì chưa đủ — 10 là số chẵn, nhưng 10 không chia hết cho 6.',
    notes: [
      {
        tone: 'write',
        text: '**Divisible by 6:** divisible by **2** and by **3** — both, not one.',
        textVn: '**Chia hết cho 6:** chia hết cho **2** và cho **3** — cả hai, không phải một.',
      },
    ],
    reveal: {
      label: 'Try it on 3960',
      labelVn: 'Thử với 3960',
      answer: '3960 is even, and its digits add to 18, so it passes both tests. It is divisible by **6**. Eight ticks.',
      answerVn: '3960 là số chẵn, và tổng các chữ số bằng 18, nên nó thoả cả hai. Vậy 3960 chia hết cho **6**. Được tám dấu đúng.',
    },
  },
  {
    layout: 'split',
    accent: ORANGE,
    icon: 'Sparkles',
    eyebrow: 'Test for 11',
    eyebrowVn: 'Dấu hiệu chia hết cho 11',
    title: 'The Strange One',
    titleVn: 'Dấu hiệu kỳ lạ',
    ratio: 45,
    inlineSvg: DIAGRAMS.ELEVEN_GROUPS,
    content: 'Colour the digits alternately from the left, add each colour, then **subtract the smaller total from the bigger**.',
    contentVn: 'Tô màu các chữ số xen kẽ từ bên trái, cộng từng màu, rồi **lấy tổng lớn trừ tổng nhỏ**.',
    notes: [
      {
        tone: 'write',
        text:
          '**Divisible by 11:** add every other digit into two groups. If the **difference** is 0 or a multiple of 11, it divides by 11.\n' +
          'Example: 2915 → 14 − 3 = 11.',
        textVn:
          '**Chia hết cho 11:** cộng các chữ số cách nhau một ô thành hai nhóm. Nếu **hiệu** bằng 0 hoặc là bội số của 11 thì số đó chia hết cho 11.\n' +
          'Ví dụ: 2915 → 14 − 3 = 11.',
      },
    ],
    reveal: {
      label: 'Try it on 3960',
      labelVn: 'Thử với 3960',
      answer: '3 + 6 = **9** and 9 + 0 = **9** — a difference of $0$, and **zero counts**. So 3960 divides by **11**. Nine ticks.',
      answerVn: '3 + 6 = **9** và 9 + 0 = **9** — hiệu bằng $0$, và **số 0 vẫn tính**. Vậy 3960 chia hết cho **11**. Được chín dấu đúng.',
    },
  },
  {
    layout: 'statement',
    accent: RED,
    eyebrow: 'Count the tests we have written down',
    eyebrowVn: 'Đếm lại những dấu hiệu ta đã chép',
    title: 'One Number Is Missing',
    titleVn: 'Còn thiếu một số',
    label: 'Discuss',
    labelVn: 'Thảo luận',
    labelIcon: 'MessageSquare',
    // The big line is clamp(1.75rem, 4vw, 4rem) — 55px on a 1366 projector,
    // so anything past about 25 characters wraps to a second line and pushes
    // the open reveal off the bottom. The list of nine lives in `sub`.
    text: 'Nine tests, not ten.',
    textVn: 'Chín, không phải mười.',
    sub: 'We have tests for 2, 3, 4, 5, 6, 8, 9, 10 and 11. Which one is **missing**, and why?',
    subVn: 'Ta có dấu hiệu cho 2, 3, 4, 5, 6, 8, 9, 10 và 11. Số nào bị **thiếu**, và vì sao?',
    reveal: {
      label: 'Show me',
      labelVn: 'Cho em xem',
      answer: '**7.** Every test for 7 is longer than just dividing, so nobody uses one. For 7 you **divide and look at the remainder**.',
      answerVn: '**Số 7.** Mọi dấu hiệu cho 7 đều dài hơn cả phép chia, nên không ai dùng. Với 7, em **chia rồi xem số dư**.',
    },
  },
  {
    layout: 'showcase',
    accent: GREEN,
    icon: 'CheckCircle2',
    eyebrow: 'Back to Mr Bowen’s number',
    eyebrowVn: 'Quay lại con số của thầy Bowen',
    title: 'How Many Did You Get Right?',
    titleVn: 'Em đoán đúng được bao nhiêu?',
    inlineSvg: DIAGRAMS.TICK_CHART_3960,
    caption: 'Every number from 2 to 11 is a factor of 3960 — **except 7**, the only one without a test. Count your ticks and crosses against the chart. Two minutes of guessing at the start; nine tests later, you can prove all ten.',
    captionVn: 'Mọi số từ 2 đến 11 đều là ước số của 3960 — **trừ số 7**, số duy nhất không có dấu hiệu. Hãy đối chiếu các dấu của em với bảng này. Lúc đầu chỉ đoán trong hai phút; sau chín dấu hiệu, em có thể chứng minh cả mười.',
  },

  // ── Section 4: drill, then problems that get steadily sillier ─────────────
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Repeat',
    title: 'Your Turn to Hunt',
    titleVn: 'Đến lượt em đi săn',
    ratio: 45,
    content: 'Three more numbers. **Call out which test to run next** and Mr Bowen will press it — but everyone writes their tick or cross **before** the button.',
    contentVn: 'Thêm ba con số nữa. **Hãy hô lên nên thử dấu hiệu nào tiếp theo**, thầy Bowen sẽ bấm — nhưng mọi người phải viết dấu đúng hoặc sai của mình **trước khi** bấm nút.',
    notes: [
      {
        tone: 'task',
        badge: 'On your whiteboard',
        badgeVn: 'Trên bảng con',
        text: 'Say the **test** out loud, not just the answer: “the digits add to 18, so it divides by 9”.',
        textVn: 'Hãy nói to **cách kiểm tra**, không chỉ nói đáp án: “tổng các chữ số bằng 18, nên nó chia hết cho 9”.',
      },
    ],
    widget: FactorHuntWidget,
  },
  {
    layout: 'split',
    accent: PURPLE,
    icon: 'AlertTriangle',
    eyebrow: 'Problem 1 — work backwards',
    eyebrowVn: 'Bài 1 — làm ngược lại',
    title: 'The Missing Digit',
    titleVn: 'Chữ số bị thiếu',
    ratio: 55,
    side: 'left',
    content:
      'A four-digit number starts **2, 7, 4** — but the last digit has been rubbed out.\n\n' +
      '> **2 7 4 ▢**  is divisible by **9**.\n\n' +
      'What is the missing digit? There is only one answer.',
    contentVn:
      'Một số có bốn chữ số bắt đầu bằng **2, 7, 4** — nhưng chữ số cuối đã bị xoá mất.\n\n' +
      '> **2 7 4 ▢**  chia hết cho **9**.\n\n' +
      'Chữ số bị thiếu là số mấy? Chỉ có một đáp án duy nhất.',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer:
        'The three digits we can see add to $2 + 7 + 4 = 13$. The next multiple of 9 after 13 is **18**, and $18 − 13 = 5$.\n\n' +
        'So the missing digit is **5**, and the number is $2745$. The one after that would need a total of 27, which needs a digit of 14 — and there is no such digit.',
      answerVn:
        'Ba chữ số nhìn thấy được cộng lại bằng $2 + 7 + 4 = 13$. Bội số của 9 kế tiếp sau 13 là **18**, và $18 − 13 = 5$.\n\n' +
        'Vậy chữ số bị thiếu là **5**, và con số đó là $2745$. Bội số tiếp theo cần tổng bằng 27, tức là cần chữ số 14 — mà không có chữ số nào như vậy.',
    },
  },
  {
    // Question and answer are two slides on purpose. The class has to produce
    // three or four arrangements and notice they all work BEFORE the reason
    // is on screen; putting the reason on the same slide throws that away.
    layout: 'split',
    accent: PURPLE,
    icon: 'Sparkles',
    eyebrow: 'Investigate',
    eyebrowVn: 'Khám phá',
    title: 'Shuffle the Digits',
    titleVn: 'Xáo trộn các chữ số',
    ratio: 55,
    content:
      'Use the digits **8, 3, 6 and 1**, each one exactly once, to build a four-digit number.\n\n' +
      '> Now find an arrangement that is **not** divisible by 9.\n\n' +
      'Try 8361. Try 1638. Try 3186. Keep going.',
    contentVn:
      'Dùng các chữ số **8, 3, 6 và 1**, mỗi chữ số đúng một lần, để tạo thành một số có bốn chữ số.\n\n' +
      '> Bây giờ hãy tìm một cách sắp xếp **không** chia hết cho 9.\n\n' +
      'Thử 8361. Thử 1638. Thử 3186. Cứ tiếp tục.',
  },
  {
    layout: 'split',
    accent: GREEN,
    icon: 'ShieldCheck',
    eyebrow: 'You cannot do it — and you can say why',
    eyebrowVn: 'Em không thể làm được — và em giải thích được vì sao',
    title: 'There Are 24 Arrangements',
    titleVn: 'Có 24 cách sắp xếp',
    ratio: 55,
    content:
      'Every one of them divides by 9, and you do not have to test them.\n\n' +
      'Moving the digits around **never changes the digit sum**, and $8 + 3 + 6 + 1 = 18$ whichever order you write them in.\n\n' +
      'In 1.4 we made a **conjecture** from three examples. This is stronger: we have a **reason**, so we are certain.',
    contentVn:
      'Mọi cách trong số đó đều chia hết cho 9, và em không cần thử từng cái.\n\n' +
      'Di chuyển các chữ số **không bao giờ làm thay đổi tổng của chúng**, và $8 + 3 + 6 + 1 = 18$ dù em viết theo thứ tự nào.\n\n' +
      'Ở bài 1.4 ta đưa ra một **phỏng đoán** từ ba ví dụ. Lần này mạnh hơn: ta có một **lý do**, nên ta chắc chắn.',
    notes: [
      {
        tone: 'write',
        text: '**Shuffling the digits of a number does not change the digit sum** — so it does not change whether the number divides by 3 or by 9.',
        textVn: '**Xáo trộn các chữ số của một số không làm thay đổi tổng các chữ số** — nên cũng không làm thay đổi việc số đó có chia hết cho 3 hay cho 9 hay không.',
      },
    ],
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Boxes',
    eyebrow: 'Problem 2',
    eyebrowVn: 'Bài 2',
    title: 'The Biscuit Tins',
    titleVn: 'Những hộp bánh quy',
    ratio: 55,
    side: 'left',
    image: biscuits,
    content:
      'Mr Bowen bakes **5304 biscuits** for the school fair. He puts them into bags of **8**.\n\n' +
      'Will every bag be full, with **no biscuits left over**? Use a test, not a calculator.',
    contentVn:
      'Thầy Bowen nướng **5304 cái bánh quy** cho hội chợ trường. Thầy cho vào các túi, mỗi túi **8 cái**.\n\n' +
      'Mọi túi có đầy không, và có **thừa cái bánh nào** không? Hãy dùng dấu hiệu chia hết, đừng dùng máy tính.',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer: 'The last three digits are **304**, and $304 ÷ 8 = 38$. So 5304 is divisible by 8: every bag is full, with none left over. There are $5304 ÷ 8 = 663$ bags.',
      answerVn: 'Ba chữ số cuối là **304**, và $304 ÷ 8 = 38$. Vậy 5304 chia hết cho 8: mọi túi đều đầy, không thừa cái nào. Có tất cả $5304 ÷ 8 = 663$ túi.',
    },
  },
  {
    layout: 'split',
    accent: TEAL,
    icon: 'Users',
    eyebrow: 'Problem 3',
    eyebrowVn: 'Bài 3',
    title: 'The School Hall',
    titleVn: 'Hội trường của trường',
    ratio: 55,
    side: 'left',
    image: chairs,
    content:
      'Mr Bowen has **2916 chairs**. He wants to put them out in rows of **9**, with **no chairs left over**.\n\n' +
      'Can he do it? And how many rows will there be?',
    contentVn:
      'Thầy Bowen có **2916 cái ghế**. Thầy muốn xếp thành các hàng, mỗi hàng **9 cái**, và **không thừa cái ghế nào**.\n\n' +
      'Thầy làm được không? Và sẽ có bao nhiêu hàng?',
    reveal: {
      label: 'Check your answer',
      labelVn: 'Kiểm tra đáp án',
      answer:
        'The digits add to $2 + 9 + 1 + 6 = 18$, which is a multiple of 9. So yes — and there are $2916 ÷ 9 = 324$ rows.\n\n' +
        'There are 24 students in the class.',
      answerVn:
        'Tổng các chữ số là $2 + 9 + 1 + 6 = 18$, là bội số của 9. Vậy được — và sẽ có $2916 ÷ 9 = 324$ hàng.\n\n' +
        'Lớp có 24 học sinh.',
    },
  },

  // ── Section 5: recap and homework ─────────────────────────────────────────
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
      '> Your notebook should now have **2 key words**, **the three sentences**, and **9 tests** — for 2, 3, 4, 5, 6, 8, 9, 10 and 11. Check that none is missing.',
    contentVn:
      '> Trong vở của em bây giờ phải có **2 từ khoá**, **ba câu nói cùng một điều**, và **9 dấu hiệu chia hết** — cho 2, 3, 4, 5, 6, 8, 9, 10 và 11. Hãy kiểm tra xem có thiếu cái nào không.',
    items: [
      { text: 'Say what **divisible by** means, and give the other two sentences that say the same thing.', textVn: 'Nói được **divisible by** nghĩa là gì, và nêu hai câu còn lại nói cùng một điều.' },
      { text: 'Test a number for **2, 5 and 10** by its last digit.', textVn: 'Kiểm tra một số cho **2, 5 và 10** bằng chữ số cuối.' },
      { text: 'Test for **3 and 9** by adding the digits — and for **4 and 8** by the end of the number.', textVn: 'Kiểm tra **3 và 9** bằng cách cộng các chữ số — và **4 và 8** bằng phần đuôi của số.' },
      { text: 'Explain why the test for **6** is really two tests.', textVn: 'Giải thích vì sao dấu hiệu cho **6** thật ra là hai dấu hiệu.' },
      { text: 'Say why there is **no test for 7**.', textVn: 'Nói được vì sao **không có dấu hiệu cho 7**.' },
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
    content: 'Write the **test you used** next to every answer, not just yes or no. “Divisible by 4 because 08 is a multiple of 4” gets the mark; “yes” does not.',
    contentVn: 'Với mỗi câu, hãy ghi rõ **dấu hiệu em đã dùng**, không chỉ viết có hay không. “Chia hết cho 4 vì 08 là bội số của 4” thì được điểm; chỉ viết “có” thì không.',
    notes: [
      {
        tone: 'homework',
        badge: 'Section 1.5 · pages 16–17',
        badgeVn: 'Mục 1.5 · trang 16–17',
        icon: 'Pencil',
        text:
          '**Focus** — Q1 to 4. Everybody.\n' +
          '**Practice** — Q5 to 9.\n' +
          '**Challenge** — Q10 to 13. An attempt beats a blank.',
        textVn:
          '**Focus** — câu 1 đến 4. Tất cả các em.\n' +
          '**Practice** — câu 5 đến 9.\n' +
          '**Challenge** — câu 10 đến 13. Làm sai vẫn hơn bỏ trống.',
      },
    ],
  },
  {
    layout: 'hero',
    color: TEAL,
    icon: 'CheckCircle2',
    brand: 'Year 7 Mathematics',
    brandVn: 'Toán Lớp 7',
    title: 'Lesson Complete!',
    titleVn: 'Hoàn thành bài học!',
    subtitle: 'You can test a number for nine different factors without dividing once. Exit question: **is 4113 divisible by 3?** Say the test out loud, not just the answer.',
    subtitleVn: 'Em có thể kiểm tra chín ước số khác nhau của một số mà không cần chia lần nào. Câu hỏi ra về: **4113 có chia hết cho 3 không?** Hãy nói to cách kiểm tra, đừng chỉ nói đáp án.',
  },
]
