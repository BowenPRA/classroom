// content/games/G02_jeopardy/boards.js
// Seven Jeopardy boards of five clues a category.
//
//   1. Mathematics 1.1–1.3   — integers, sign rules, multiples and the LCM
//   2. Science 1.1–1.3       — cells, plant vs animal, specialised cells
//   3. Revision              — one category per unit, all six units, fresh clues
//   4. Unit 1 Finale         — Maths 1.4–1.6, Science 1.4, and two trivia rounds
//   5. Kindergarten & Year 1 — cooking and first science, read aloud
//   6. Year 1                — five columns of picture questions: kitchen,
//                              food, dishes from the world, claps, "Which is…?"
//   7. Science Unit 2        — states, particles, changes of state, elements,
//                              compounds and mixtures; 29 of 30 clues have a picture
//
// The board grid takes its column count from `categories.length`, so a board
// can have fewer than six.
//
// Every clue is written from what the deck for that unit actually taught, and
// the wording is the point: these are the sentences that cost marks, not the
// arithmetic. Where a lesson had a trap in it (subtract-from, "common", the LCM
// of 4 and 8, "green means plant", HCF(8, 9) = 1), the trap is here too.
//
// Board 4 is the only one that carries clues with no unit behind them. Its two
// trivia categories are not filler: a board made only of the taught units hands
// the game to the three strongest mathematicians in the room, and the other
// twenty-one stop speaking. Animal Records and Big Numbers are answerable by
// anyone, and are still answered in English, in a sentence, with a reason.
//
// A clue is { value, q, qVn, a, aVn }. Nothing here goes through
// `parseInlineText` — the widget prints these as plain text — but the house
// rule still holds: write "dollars", never a dollar sign, and use the Unicode
// minus (−) so a negative number reads as a number and not as a hyphen.
//
// A clue MAY also carry a picture, and most do not:
//
//   qImage: { src, alt, altVn }   shown the moment the clue opens
//   aImage: { src, alt, altVn }   held back until the teacher reveals
//
// Which of the two depends on one question: does seeing it give the answer
// away? "Which animal has three hearts?" gets an aImage, because a photograph
// of an octopus next to that sentence is not a clue any more. The giraffe is
// named in its own question, so its photograph is a qImage and can sit there
// while the teams argue.
//
// A clue can instead be LED by pictures, for a class that cannot read yet:
//
//   qImages: [{ src, alt, altVn, label?, labelVn? }, …]   one to three pictures
//   aIndex:  1                                          which one is right
//
// The question shrinks to a line over the top and the pictures take the rest
// of the card. With one picture it is "What is it?". With two to four it is a
// choice, and on the reveal the `aIndex` picture turns green and the others fade.
// `label` prints a word under a picture — the word to clap, or a teacher's name.
// A `qImage` on a picture clue sits beside the question as a small lead picture
// (a country's flag), not as one of the choices.
import { IMAGES } from './images.js'

export const BOARDS = [
  // ── 1 · MATHEMATICS ───────────────────────────────────────────────────────
  {
    id: 'maths',
    title: 'Mathematics · 1.1–1.3',
    titleVn: 'Toán học · Bài 1.1–1.3',
    subtitle: 'Integers, sign rules, multiples and the LCM',
    subtitleVn: 'Số nguyên, quy tắc dấu, bội số và BCNN',
    icon: 'Calculator',
    accent: '#1cb0f6',
    categories: [
      {
        name: 'Adding & Subtracting',
        nameVn: 'Cộng & Trừ',
        clues: [
          {
            value: 100,
            q: 'What is −3 + 5?',
            qVn: '−3 + 5 bằng bao nhiêu?',
            a: '2',
            aVn: '2',
          },
          {
            value: 200,
            q: 'What is −6 − 4?',
            qVn: '−6 − 4 bằng bao nhiêu?',
            a: '−10. Subtracting still sends you to the left.',
            aVn: '−10. Phép trừ vẫn đưa em đi sang trái.',
          },
          {
            value: 300,
            q: 'What is 2 − (−5)?',
            qVn: '2 − (−5) bằng bao nhiêu?',
            a: '7. Only minus a negative turns into plus.',
            aVn: '7. Chỉ có "trừ một số âm" mới đổi thành phép cộng.',
          },
          {
            value: 400,
            q: 'The temperature is −4 °C. It falls by 10 degrees. What is the new temperature?',
            qVn: 'Nhiệt độ là −4 °C. Nhiệt độ giảm 10 độ. Nhiệt độ mới là bao nhiêu?',
            a: '−14 °C.  −4 − 10 = −14',
            aVn: '−14 °C.  −4 − 10 = −14',
          },
          {
            value: 500,
            q: 'Mr Bowen is 6 dollars overdrawn (−6). He puts in 20 dollars, takes out 9 dollars, and the bank removes a 4-dollar debt. How much has he got?',
            qVn: 'Thầy Bowen đang nợ 6 đô la (−6). Thầy nạp vào 20 đô la, rút ra 9 đô la, rồi ngân hàng xoá một khoản nợ 4 đô la. Thầy còn bao nhiêu?',
            a: '9 dollars.  −6 + 20 − 9 − (−4) = 9. Removing a debt ADDS.',
            aVn: '9 đô la.  −6 + 20 − 9 − (−4) = 9. Xoá một khoản nợ nghĩa là CỘNG thêm.',
          },
        ],
      },
      {
        name: 'Every Class Is an English Class',
        nameVn: 'Giờ nào cũng là giờ tiếng Anh',
        clues: [
          {
            value: 100,
            q: '"Subtract 5 from 8." Write the calculation, then the answer.',
            qVn: '"Subtract 5 from 8." Hãy viết phép tính, rồi viết đáp án.',
            a: '8 − 5 = 3.  NOT 5 − 8. The word "from" marks the number you start at.',
            aVn: '8 − 5 = 3. KHÔNG phải 5 − 8. Từ "from" chỉ ra con số em bắt đầu.',
          },
          {
            value: 200,
            q: 'Name three English words that tell you a number is going DOWN.',
            qVn: 'Hãy nêu ba từ tiếng Anh cho biết một số đang GIẢM.',
            a: 'Any three of: fall, drop, decrease, loss, withdraw, owe, colder, lower, below, less than.',
            aVn: 'Ba từ bất kỳ trong: fall, drop, decrease, loss, withdraw, owe, colder, lower, below, less than.',
          },
          {
            value: 300,
            q: 'What is the difference between −3 and 4?',
            qVn: '"The difference between −3 and 4" bằng bao nhiêu?',
            a: '7 — the gap between them. A difference is never negative. (But −3 − 4 = −7, a different question.)',
            aVn: '7 — khoảng cách giữa hai số. Hiệu (difference) không bao giờ âm. (Còn −3 − 4 = −7, đó là câu hỏi khác.)',
          },
          {
            value: 400,
            q: '"Divide −20 by 4." Write the calculation, then the answer.',
            qVn: '"Divide −20 by 4." Hãy viết phép tính, rồi viết đáp án.',
            a: '−20 ÷ 4 = −5. "4 divided into −20" is the same calculation — the English swaps the order, the maths does not.',
            aVn: '−20 ÷ 4 = −5. "4 divided into −20" cũng là phép tính đó — tiếng Anh đảo thứ tự, còn toán thì không.',
          },
          {
            value: 500,
            q: 'What does the word "common" mean in maths, and what does it mean in everyday English?',
            qVn: 'Từ "common" trong toán nghĩa là gì, còn trong tiếng Anh hằng ngày nghĩa là gì?',
            a: 'In maths it means SHARED — in both lists. In everyday English it means ordinary.',
            aVn: 'Trong toán, nó nghĩa là CHUNG — có trong cả hai dãy. Trong tiếng Anh hằng ngày, nó nghĩa là bình thường, phổ biến.',
          },
        ],
      },
      {
        name: 'Multiplying & Dividing',
        nameVn: 'Nhân & Chia',
        clues: [
          {
            value: 100,
            q: 'What is 3 × −4?',
            qVn: '3 × −4 bằng bao nhiêu?',
            a: '−12. Different signs give a negative.',
            aVn: '−12. Khác dấu thì kết quả âm.',
          },
          {
            value: 200,
            q: 'What is −6 × −5?',
            qVn: '−6 × −5 bằng bao nhiêu?',
            a: '30. Same signs give a positive.',
            aVn: '30. Cùng dấu thì kết quả dương.',
          },
          {
            value: 300,
            q: 'What is −48 ÷ 6?',
            qVn: '−48 ÷ 6 bằng bao nhiêu?',
            a: '−8. Division uses the same four sign rules as multiplication.',
            aVn: '−8. Phép chia dùng đúng bốn quy tắc dấu như phép nhân.',
          },
          {
            value: 400,
            q: 'Work out 20 ÷ (−3 + −2). Careful.',
            qVn: 'Hãy tính 20 ÷ (−3 + −2). Cẩn thận nhé.',
            a: 'The bracket holds an ADDITION: −3 + −2 = −5. Then 20 ÷ −5 = −4.',
            aVn: 'Trong ngoặc là phép CỘNG: −3 + −2 = −5. Sau đó 20 ÷ −5 = −4.',
          },
          {
            value: 500,
            q: 'Is "two negatives make a positive" true? Prove your answer with two calculations.',
            qVn: 'Câu "hai số âm thành một số dương" có đúng không? Hãy chứng minh bằng hai phép tính.',
            a: 'True for × and ÷ : −3 × −4 = 12. FALSE for + : −3 + −4 = −7. The sentence needs the operation attached to it.',
            aVn: 'Đúng với × và ÷ : −3 × −4 = 12. SAI với + : −3 + −4 = −7. Câu nói đó phải gắn với phép tính cụ thể.',
          },
        ],
      },
      {
        name: 'Multiples & the LCM',
        nameVn: 'Bội số & BCNN',
        clues: [
          {
            value: 100,
            q: 'List the first five multiples of 4.',
            qVn: 'Hãy liệt kê năm bội số đầu tiên của 4.',
            a: '4, 8, 12, 16, 20',
            aVn: '4, 8, 12, 16, 20',
          },
          {
            value: 200,
            q: 'What do the letters LCM stand for, and what is it called in Vietnamese maths?',
            qVn: 'Ba chữ LCM viết tắt của cụm từ nào, và trong toán tiếng Việt gọi là gì?',
            a: 'Lowest Common Multiple — the same idea as BCNN, bội số chung nhỏ nhất.',
            aVn: 'Lowest Common Multiple — chính là BCNN, bội số chung nhỏ nhất.',
          },
          {
            value: 300,
            q: 'What is the LCM of 6 and 9?',
            qVn: 'BCNN của 6 và 9 là bao nhiêu?',
            a: '18. Multiples of 6: 6, 12, 18 … Multiples of 9: 9, 18 … The first match is 18.',
            aVn: '18. Bội của 6: 6, 12, 18 … Bội của 9: 9, 18 … Số trùng đầu tiên là 18.',
          },
          {
            value: 400,
            q: 'What is the LCM of 4 and 8? Careful.',
            qVn: 'BCNN của 4 và 8 là bao nhiêu? Cẩn thận nhé.',
            a: '8 — not 32. When one number divides the other, the LCM is just the bigger number.',
            aVn: '8 — không phải 32. Khi số này chia hết cho số kia, BCNN chính là số lớn hơn.',
          },
          {
            value: 500,
            q: 'A red light flashes every 4 seconds and a blue light every 6 seconds. They have just flashed together. When do they next flash together?',
            qVn: 'Đèn đỏ nháy mỗi 4 giây, đèn xanh nháy mỗi 6 giây. Hai đèn vừa nháy cùng lúc. Bao lâu nữa chúng lại nháy cùng lúc?',
            a: 'After 12 seconds — then 24, then 36. 12 is the LCM of 4 and 6.',
            aVn: 'Sau 12 giây — rồi 24, rồi 36. 12 là BCNN của 4 và 6.',
          },
        ],
      },
      {
        name: 'Word Problems',
        nameVn: 'Bài toán có lời văn',
        clues: [
          {
            value: 100,
            q: 'Mr Bowen parks on floor −4. He takes the lift up 9 floors. Which floor is he on?',
            qVn: 'Thầy Bowen đỗ xe ở tầng −4. Thầy đi thang máy lên 9 tầng. Thầy đang ở tầng nào?',
            a: 'Floor 5.  −4 + 9 = 5',
            aVn: 'Tầng 5.  −4 + 9 = 5',
          },
          {
            value: 200,
            q: 'One bus leaves every 10 minutes, another every 15 minutes. Both left at 7:00. When do they next leave together?',
            qVn: 'Một xe buýt chạy 10 phút một chuyến, xe kia 15 phút một chuyến. Cả hai cùng xuất phát lúc 7:00. Khi nào hai xe lại cùng xuất phát?',
            a: '7:30. LCM(10, 15) = 30, so 30 minutes later.',
            aVn: '7:30. BCNN(10, 15) = 30, tức là 30 phút sau.',
          },
          {
            value: 300,
            q: 'The temperature falls 3 degrees every hour for 6 hours. Write the calculation and the change.',
            qVn: 'Nhiệt độ giảm 3 độ mỗi giờ, trong 6 giờ. Hãy viết phép tính và mức thay đổi.',
            a: '6 × −3 = −18, so it is 18 degrees colder.',
            aVn: '6 × −3 = −18, tức là lạnh đi 18 độ.',
          },
          {
            value: 400,
            q: 'A diver goes from the surface to −48 m in 6 minutes, at a steady speed. How far does she go each minute?',
            qVn: 'Một thợ lặn đi từ mặt nước xuống −48 m trong 6 phút, với tốc độ đều. Mỗi phút cô ấy đi được bao xa?',
            a: '−48 ÷ 6 = −8, so 8 metres down every minute.',
            aVn: '−48 ÷ 6 = −8, tức là mỗi phút xuống 8 mét.',
          },
          {
            value: 500,
            q: 'A snail is 12 m down a well (−12 m). Every day it climbs 3 m and slides back 3 m. Where is it after nine days?',
            qVn: 'Một con ốc sên ở dưới giếng, sâu 12 m (−12 m). Mỗi ngày nó bò lên 3 m rồi tụt xuống 3 m. Sau chín ngày nó ở đâu?',
            a: 'Still −12 m. +3 − 3 = 0 every day, so nine days change nothing. Read the whole question before you calculate.',
            aVn: 'Vẫn ở −12 m. Mỗi ngày +3 − 3 = 0, nên chín ngày cũng chẳng thay đổi gì. Hãy đọc hết đề trước khi tính.',
          },
        ],
      },
      {
        name: 'Traps & Tricks',
        nameVn: 'Bẫy & Mẹo',
        clues: [
          {
            value: 100,
            q: 'Mr Bowen buys 0 durians at 90 000 dong each. How much does he spend?',
            qVn: 'Thầy Bowen mua 0 quả sầu riêng, mỗi quả 90 000 đồng. Thầy tiêu hết bao nhiêu tiền?',
            a: 'Nothing — 0 dong. Anything multiplied by zero is zero, so every other number in the question is decoration.',
            aVn: 'Không đồng nào — 0 đồng. Số nào nhân 0 cũng bằng 0, nên mọi con số khác trong đề chỉ là trang trí.',
          },
          {
            value: 200,
            q: 'Two alarms both ring every 15 minutes. They have just rung together. When do they next ring together?',
            qVn: 'Hai chiếc chuông báo đều reo mỗi 15 phút. Chúng vừa reo cùng lúc. Khi nào chúng lại reo cùng lúc?',
            a: 'In 15 minutes. The two numbers are the same, so there is nothing to work out — LCM(15, 15) = 15.',
            aVn: 'Sau 15 phút. Hai số giống nhau nên chẳng phải tính gì cả — BCNN(15, 15) = 15.',
          },
          {
            value: 300,
            q: 'What is −3 + −4? Careful — this is not the same shape as −3 − (−4).',
            qVn: '−3 + −4 bằng bao nhiêu? Cẩn thận — nó không giống dạng −3 − (−4).',
            a: '−7. Adding a negative still sends you left. Only − (−) becomes +.',
            aVn: '−7. Cộng một số âm vẫn đưa em sang trái. Chỉ có − (−) mới thành +.',
          },
          {
            value: 400,
            q: 'True or false: to find the LCM you always multiply the two numbers together.',
            qVn: 'Đúng hay sai: muốn tìm BCNN thì luôn luôn lấy hai số nhân với nhau.',
            a: 'False. That works only when the numbers share no factor (3 and 5 → 15). LCM(4, 8) is 8, not 32. When in doubt, list them.',
            aVn: 'Sai. Cách đó chỉ đúng khi hai số không có thừa số chung (3 và 5 → 15). BCNN(4, 8) là 8, không phải 32. Nếu không chắc, hãy liệt kê ra.',
          },
          {
            value: 500,
            q: 'Give a pair of integers with a product of −24 — and say how many such pairs there are altogether.',
            qVn: 'Hãy nêu một cặp số nguyên có tích bằng −24 — và cho biết tất cả có bao nhiêu cặp như vậy.',
            a: 'Eight pairs: 1 × −24, −1 × 24, 2 × −12, −2 × 12, 3 × −8, −3 × 8, 4 × −6, −4 × 6. Four factor pairs of 24, and each takes its minus sign two ways.',
            aVn: 'Có tám cặp: 1 × −24, −1 × 24, 2 × −12, −2 × 12, 3 × −8, −3 × 8, 4 × −6, −4 × 6. Số 24 có bốn cặp thừa số, mỗi cặp đặt dấu trừ được hai cách.',
          },
        ],
      },
    ],
  },

  // ── 2 · SCIENCE ───────────────────────────────────────────────────────────
  {
    id: 'science',
    title: 'Science · 1.1–1.3',
    titleVn: 'Khoa học · Bài 1.1–1.3',
    subtitle: 'Cells, plant vs animal, and cells built for a job',
    subtitleVn: 'Tế bào, thực vật và động vật, và tế bào chuyên hoá',
    icon: 'FlaskConical',
    accent: '#14b8a6',
    categories: [
      {
        name: 'What Is a Cell?',
        nameVn: 'Tế bào là gì?',
        clues: [
          {
            value: 100,
            q: 'What is a cell?',
            qVn: 'Tế bào là gì?',
            a: 'The smallest basic unit of all living organisms.',
            aVn: 'Đơn vị cơ bản nhỏ nhất của mọi cơ thể sống.',
          },
          {
            value: 200,
            q: 'What is an organelle?',
            qVn: 'Bào quan là gì?',
            a: 'A tiny structure inside a cell that does one specific job.',
            aVn: 'Một cấu trúc rất nhỏ bên trong tế bào, làm một nhiệm vụ cụ thể.',
          },
          {
            value: 300,
            q: 'Where does the English word "cell" come from?',
            qVn: 'Từ tiếng Anh "cell" bắt nguồn từ đâu?',
            a: 'From the Latin "cella", a small room — like a prison cell. Robert Hooke named it in 1665 after looking at cork.',
            aVn: 'Từ tiếng Latin "cella", nghĩa là căn phòng nhỏ — như phòng giam. Robert Hooke đặt tên năm 1665 khi quan sát nút bần.',
          },
          {
            value: 400,
            q: 'Roughly how many cells is one person made of?',
            qVn: 'Một người được tạo thành từ khoảng bao nhiêu tế bào?',
            a: 'About 100 trillion — 100 000 000 000 000.',
            aVn: 'Khoảng 100 nghìn tỉ — 100 000 000 000 000.',
          },
          {
            value: 500,
            q: 'Magnify one cell to the size of a soda can and the scale factor is 6000. Mr Bowen is 178 cm. How tall is he now — and what does that beat?',
            qVn: 'Phóng to một tế bào bằng lon nước ngọt thì tỉ lệ phóng đại là 6000 lần. Thầy Bowen cao 178 cm. Vậy thầy sẽ cao bao nhiêu — và cao hơn cái gì?',
            a: '178 cm × 6000 = 10 680 m = 10.68 km. Taller than Mount Everest, which is 8.85 km.',
            aVn: '178 cm × 6000 = 10 680 m = 10,68 km. Cao hơn đỉnh Everest, chỉ cao 8,85 km.',
          },
        ],
      },
      {
        name: 'Inside Every Cell',
        nameVn: 'Bên trong mọi tế bào',
        clues: [
          {
            value: 100,
            q: 'Which part controls the cell?',
            qVn: 'Bộ phận nào điều khiển tế bào?',
            a: 'The nucleus.',
            aVn: 'Nhân tế bào.',
          },
          {
            value: 200,
            q: 'Which part is the jelly that fills the cell, where the chemical reactions happen?',
            qVn: 'Bộ phận nào là chất keo lấp đầy tế bào, nơi diễn ra các phản ứng hoá học?',
            a: 'The cytoplasm.',
            aVn: 'Tế bào chất.',
          },
          {
            value: 300,
            q: 'Name all four parts that EVERY cell has.',
            qVn: 'Hãy nêu đủ bốn bộ phận mà MỌI tế bào đều có.',
            a: 'Cell membrane, cytoplasm, nucleus, mitochondria.',
            aVn: 'Màng tế bào, tế bào chất, nhân tế bào, ti thể.',
          },
          {
            value: 400,
            q: 'What job do the mitochondria do?',
            qVn: 'Ti thể làm nhiệm vụ gì?',
            a: 'They release the energy the cell needs from food.',
            aVn: 'Chúng giải phóng năng lượng từ thức ăn cho tế bào dùng.',
          },
          {
            value: 500,
            q: 'One human cell is missing one of those four parts. Which cell, which part — and why is losing it useful?',
            qVn: 'Có một loại tế bào người thiếu mất một trong bốn bộ phận đó. Đó là tế bào nào, thiếu bộ phận nào — và vì sao mất nó lại có lợi?',
            a: 'The red blood cell has no nucleus. That leaves more room inside for haemoglobin, so it can carry more oxygen.',
            aVn: 'Hồng cầu không có nhân. Nhờ vậy bên trong có thêm chỗ cho huyết sắc tố, nên nó chở được nhiều ô-xi hơn.',
          },
        ],
      },
      {
        name: 'Plant Only',
        nameVn: 'Chỉ có ở thực vật',
        clues: [
          {
            value: 100,
            q: 'Which part gives a plant cell its stiff, boxy shape?',
            qVn: 'Bộ phận nào giúp tế bào thực vật có hình hộp cứng cáp?',
            a: 'The cell wall.',
            aVn: 'Thành tế bào.',
          },
          {
            value: 200,
            q: 'What substance is a plant cell wall made of?',
            qVn: 'Thành tế bào thực vật được cấu tạo từ chất gì?',
            a: 'Cellulose.',
            aVn: 'Xen-lu-lô-zơ (cellulose).',
          },
          {
            value: 300,
            q: 'What is inside a chloroplast that makes it green — and what happens there?',
            qVn: 'Bên trong lục lạp có chất gì làm nó có màu xanh — và ở đó xảy ra điều gì?',
            a: 'Chlorophyll. The plant uses it to make its own food from sunlight.',
            aVn: 'Diệp lục. Cây dùng nó để tự tạo thức ăn từ ánh sáng mặt trời.',
          },
          {
            value: 400,
            q: 'Name the three parts a plant cell has that an animal cell has not.',
            qVn: 'Hãy nêu ba bộ phận mà tế bào thực vật có còn tế bào động vật thì không.',
            a: 'Cell wall, chloroplasts, sap vacuole.',
            aVn: 'Thành tế bào, lục lạp, không bào chứa dịch.',
          },
          {
            value: 500,
            q: 'In the photograph the Rhoeo cells were purple, with no chloroplasts at all. Plant or animal — and what is your evidence?',
            qVn: 'Trong bức ảnh, các tế bào cây Rhoeo có màu tím và hoàn toàn không có lục lạp. Đây là thực vật hay động vật — và bằng chứng của em là gì?',
            a: 'Plant. Every cell has a straight, stiff cell wall. Green is not the test — the wall is.',
            aVn: 'Thực vật. Mọi tế bào đều có thành tế bào thẳng và cứng. Màu xanh không phải là dấu hiệu — thành tế bào mới là.',
          },
        ],
      },
      {
        name: 'Animal Cells',
        nameVn: 'Tế bào động vật',
        clues: [
          {
            value: 100,
            q: 'Name two parts an animal cell does NOT have.',
            qVn: 'Hãy nêu hai bộ phận mà tế bào động vật KHÔNG có.',
            a: 'Any two of: cell wall, chloroplasts, sap vacuole.',
            aVn: 'Hai trong số: thành tế bào, lục lạp, không bào chứa dịch.',
          },
          {
            value: 200,
            q: 'Why has an animal cell no fixed shape?',
            qVn: 'Vì sao tế bào động vật không có hình dạng cố định?',
            a: 'Because it has no cell wall — only a thin, flexible membrane.',
            aVn: 'Vì nó không có thành tế bào — chỉ có màng mỏng và mềm dẻo.',
          },
          {
            value: 300,
            q: 'In English, what is the difference between "similar" and "the same"?',
            qVn: 'Trong tiếng Anh, "similar" khác "the same" ở chỗ nào?',
            a: '"Similar" means alike in some ways AND different in others. "The same" means no differences at all.',
            aVn: '"Similar" nghĩa là giống ở vài điểm VÀ khác ở vài điểm. "The same" nghĩa là không khác gì cả.',
          },
          {
            value: 400,
            q: 'Onion cells have straight walls but not one chloroplast. Plant or animal — and why no chloroplasts?',
            qVn: 'Tế bào hành có thành thẳng nhưng không hề có lục lạp. Đây là thực vật hay động vật — và vì sao không có lục lạp?',
            a: 'Plant — it has cell walls. No chloroplasts because that part of the onion grows underground, in the dark.',
            aVn: 'Thực vật — vì nó có thành tế bào. Không có lục lạp vì phần củ hành mọc dưới đất, trong bóng tối.',
          },
          {
            value: 500,
            q: 'You have built a model plant cell. What must you take away to turn it into an animal cell?',
            qVn: 'Em vừa làm xong mô hình một tế bào thực vật. Phải bỏ đi những gì để nó thành tế bào động vật?',
            a: 'The cell wall, the chloroplasts and the sap vacuole. Everything else stays.',
            aVn: 'Bỏ thành tế bào, lục lạp và không bào chứa dịch. Những phần còn lại giữ nguyên.',
          },
        ],
      },
      {
        name: 'Specialised Cells',
        nameVn: 'Tế bào chuyên hoá',
        clues: [
          {
            value: 100,
            q: 'In science, what does the FUNCTION of a cell mean?',
            qVn: 'Trong khoa học, "chức năng" (function) của tế bào nghĩa là gì?',
            a: 'The job the cell does.',
            aVn: 'Là công việc mà tế bào đó đảm nhiệm.',
          },
          {
            value: 200,
            q: 'What is the job of a red blood cell, and what carries the oxygen?',
            qVn: 'Hồng cầu có nhiệm vụ gì, và chất nào chở ô-xi?',
            a: 'It transports oxygen around the body. The red pigment haemoglobin carries it.',
            aVn: 'Nó vận chuyển ô-xi đi khắp cơ thể. Huyết sắc tố (hemoglobin) màu đỏ chở ô-xi.',
          },
          {
            value: 300,
            q: 'What is the job of a root hair cell, and what is its adaptation?',
            qVn: 'Tế bào lông hút có nhiệm vụ gì, và nó thích nghi như thế nào?',
            a: 'It absorbs water from the soil. It has a long, thin extension, which gives it a large surface area.',
            aVn: 'Nó hút nước từ đất. Nó có phần kéo dài mảnh và dài, tạo diện tích bề mặt lớn.',
          },
          {
            value: 400,
            q: 'What are cilia, and what do they sweep away?',
            qVn: 'Lông chuyển (cilia) là gì, và chúng quét đi thứ gì?',
            a: 'Tiny moving hairs on top of a ciliated cell. They sweep mucus — with the dust and germs trapped in it — away from the lungs.',
            aVn: 'Là những sợi lông nhỏ chuyển động trên bề mặt tế bào có lông chuyển. Chúng quét chất nhầy — cùng bụi và vi khuẩn dính trong đó — ra xa phổi.',
          },
          {
            value: 500,
            q: 'Why does a root hair cell have no chloroplasts?',
            qVn: 'Vì sao tế bào lông hút không có lục lạp?',
            a: 'Roots are underground in the dark. Chloroplasts need sunlight to make food, so down there they would be useless.',
            aVn: 'Rễ nằm dưới đất, trong bóng tối. Lục lạp cần ánh sáng mặt trời để tạo thức ăn, nên ở dưới đó chúng vô dụng.',
          },
        ],
      },
      {
        name: 'Under the Microscope',
        nameVn: 'Dưới kính hiển vi',
        clues: [
          {
            value: 100,
            q: 'What is a microscope?',
            qVn: 'Kính hiển vi là gì?',
            a: 'A tool that uses lenses to bend light and magnify a tiny image.',
            aVn: 'Một dụng cụ dùng thấu kính để bẻ cong ánh sáng và phóng to hình ảnh rất nhỏ.',
          },
          {
            value: 200,
            q: 'What is a stain, and why do we use one?',
            qVn: 'Thuốc nhuộm (stain) là gì, và vì sao ta dùng nó?',
            a: 'A coloured dye added to a specimen to make its parts easier to see.',
            aVn: 'Một loại phẩm màu nhỏ lên mẫu vật để nhìn rõ các bộ phận hơn.',
          },
          {
            value: 300,
            q: 'When you move the lens down towards the slide, why must you watch from the side and not through the eyepiece?',
            qVn: 'Khi hạ vật kính xuống gần lam kính, vì sao phải nhìn từ bên cạnh chứ không nhìn qua thị kính?',
            a: 'From the eyepiece you cannot judge the gap. Looking from the side is the only way to stop the lens being driven through the slide.',
            aVn: 'Nhìn qua thị kính thì không ước lượng được khoảng cách. Nhìn từ bên cạnh là cách duy nhất để vật kính không đâm vỡ lam kính.',
          },
          {
            value: 400,
            q: 'What is the one clue that always tells you cells are plant cells?',
            qVn: 'Dấu hiệu duy nhất luôn cho biết đó là tế bào thực vật là gì?',
            a: 'The cell wall — a straight, stiff edge, with the cells packed together like bricks. "No green" does NOT mean animal.',
            aVn: 'Thành tế bào — đường viền thẳng và cứng, các tế bào xếp sát nhau như những viên gạch. "Không có màu xanh" KHÔNG có nghĩa là tế bào động vật.',
          },
          {
            value: 500,
            q: 'Some things are too small for a light microscope to show. What kind of microscope is used instead, and what does it use in place of light?',
            qVn: 'Có những vật quá nhỏ, kính hiển vi quang học không nhìn thấy được. Người ta dùng loại kính hiển vi nào, và nó dùng gì thay cho ánh sáng?',
            a: 'An electron microscope. It uses a beam of electrons instead of light.',
            aVn: 'Kính hiển vi điện tử. Nó dùng chùm electron thay cho ánh sáng.',
          },
        ],
      },
    ],
  },

  // ── 3 · REVISION · ONE CATEGORY PER UNIT ──────────────────────────────────
  {
    id: 'revision',
    title: 'Revision · All Six Units',
    titleVn: 'Ôn tập · Cả sáu bài',
    subtitle: 'Maths and Science together, one category per unit',
    subtitleVn: 'Toán và Khoa học cùng nhau, mỗi bài một cột',
    icon: 'Trophy',
    accent: '#8b5cf6',
    categories: [
      {
        name: 'Maths 1.1',
        nameVn: 'Toán 1.1',
        clues: [
          {
            value: 100,
            q: 'What is an integer?',
            qVn: 'Số nguyên là gì?',
            a: 'A whole number that is positive, negative or zero.',
            aVn: 'Là số nguyên vẹn, có thể dương, âm hoặc bằng không.',
          },
          {
            value: 200,
            q: 'What is −7 + 10?',
            qVn: '−7 + 10 bằng bao nhiêu?',
            a: '3',
            aVn: '3',
          },
          {
            value: 300,
            q: 'What is 5 − (−3)?',
            qVn: '5 − (−3) bằng bao nhiêu?',
            a: '8. Minus a negative becomes plus.',
            aVn: '8. Trừ một số âm thì thành phép cộng.',
          },
          {
            value: 400,
            q: '"The temperature rose by 6 degrees from −2 °C." Write the calculation and the answer.',
            qVn: '"Nhiệt độ tăng 6 độ, từ −2 °C." Hãy viết phép tính và đáp án.',
            a: '−2 + 6 = 4 °C. "Rose" is an up-word, so it is an addition.',
            aVn: '−2 + 6 = 4 °C. "Rose" là từ chỉ sự tăng, nên đây là phép cộng.',
          },
          {
            value: 500,
            q: 'What is the inverse of −9 — and what is 3 − (−9)?',
            qVn: 'Số đối của −9 là gì — và 3 − (−9) bằng bao nhiêu?',
            a: 'The inverse of −9 is 9. And 3 − (−9) = 3 + 9 = 12.',
            aVn: 'Số đối của −9 là 9. Và 3 − (−9) = 3 + 9 = 12.',
          },
        ],
      },
      {
        name: 'Maths 1.2',
        nameVn: 'Toán 1.2',
        clues: [
          {
            value: 100,
            q: 'What is −8 × 2?',
            qVn: '−8 × 2 bằng bao nhiêu?',
            a: '−16',
            aVn: '−16',
          },
          {
            value: 200,
            q: 'What is the product of 2 and −9? (And what does "product" mean?)',
            qVn: 'Tích (product) của 2 và −9 là bao nhiêu? (Và "product" nghĩa là gì?)',
            a: '−18. The product is the answer when you multiply.',
            aVn: '−18. "Product" là kết quả của phép nhân, tức là tích.',
          },
          {
            value: 300,
            q: 'What is −36 ÷ −9?',
            qVn: '−36 ÷ −9 bằng bao nhiêu?',
            a: '4. Same signs give a positive.',
            aVn: '4. Cùng dấu thì kết quả dương.',
          },
          {
            value: 400,
            q: 'Estimate −4.1 × 2.8 by rounding. Do not work it out exactly.',
            qVn: 'Hãy ước lượng −4,1 × 2,8 bằng cách làm tròn. Đừng tính chính xác.',
            a: 'About −4 × 3 = −12. An estimate is a quick rough answer used to check the real one is sensible.',
            aVn: 'Khoảng −4 × 3 = −12. Ước lượng là đáp án nhanh và gần đúng, dùng để kiểm tra kết quả thật có hợp lí không.',
          },
          {
            value: 500,
            q: 'Fill in the gap: ___ × −7 = 56',
            qVn: 'Điền vào chỗ trống: ___ × −7 = 56',
            a: '−8. Sign first: the answer is positive and one number is negative, so the missing one is negative too. Then the digits.',
            aVn: '−8. Xét dấu trước: kết quả dương mà một số âm, nên số còn thiếu cũng phải âm. Sau đó mới tính chữ số.',
          },
        ],
      },
      {
        name: 'Maths 1.3',
        nameVn: 'Toán 1.3',
        clues: [
          {
            value: 100,
            q: 'What is a multiple? Give the first four multiples of 5.',
            qVn: 'Bội số là gì? Hãy nêu bốn bội số đầu tiên của 5.',
            a: 'A multiple is what you get when you multiply a number by 1, 2, 3, 4 … So: 5, 10, 15, 20.',
            aVn: 'Bội số là kết quả khi nhân một số với 1, 2, 3, 4 … Vậy: 5, 10, 15, 20.',
          },
          {
            value: 200,
            q: 'What is a common multiple of two numbers?',
            qVn: 'Bội số chung của hai số là gì?',
            a: 'A number that is a multiple of both — so it appears in both lists.',
            aVn: 'Một số vừa là bội của số này vừa là bội của số kia — tức là có mặt trong cả hai dãy.',
          },
          {
            value: 300,
            q: 'What is the LCM of 3 and 5 — and why does multiplying work this time?',
            qVn: 'BCNN của 3 và 5 là bao nhiêu — và vì sao lần này nhân hai số lại đúng?',
            a: '15. Multiplying works here because 3 and 5 share no factor. It is a lucky shortcut, not the rule.',
            aVn: '15. Lần này nhân được vì 3 và 5 không có thừa số chung. Đó là mẹo may mắn, không phải quy tắc.',
          },
          {
            value: 400,
            q: 'Hot dogs come 8 to a pack and buns come 12 to a pack. What is the smallest number of each you can buy with none left over?',
            qVn: 'Xúc xích bán theo gói 8 chiếc, bánh mì bán theo gói 12 chiếc. Số ít nhất của mỗi loại mà em mua được sao cho không thừa cái nào?',
            a: '24 of each. LCM(8, 12) = 24 — so 3 packs of hot dogs and 2 packs of buns.',
            aVn: 'Mỗi loại 24 cái. BCNN(8, 12) = 24 — tức là 3 gói xúc xích và 2 gói bánh mì.',
          },
          {
            value: 500,
            q: 'One tap drips every 4 seconds, another every 12 seconds. They have just dripped together. How often do they drip together?',
            qVn: 'Một vòi nước nhỏ giọt mỗi 4 giây, vòi kia mỗi 12 giây. Hai vòi vừa nhỏ giọt cùng lúc. Bao lâu chúng lại nhỏ cùng lúc?',
            a: 'Every 12 seconds — not 48. Four divides into 12, so the LCM is just the bigger number.',
            aVn: 'Cứ 12 giây một lần — không phải 48. Vì 12 chia hết cho 4, nên BCNN chính là số lớn hơn.',
          },
        ],
      },
      {
        name: 'Science 1.1',
        nameVn: 'Khoa học 1.1',
        clues: [
          {
            value: 100,
            q: 'What is the name of the tool we use to see cells?',
            qVn: 'Dụng cụ chúng ta dùng để nhìn thấy tế bào tên là gì?',
            a: 'A microscope.',
            aVn: 'Kính hiển vi.',
          },
          {
            value: 200,
            q: 'Finish the sentence: "All living organisms are made of ___."',
            qVn: 'Hoàn thành câu: "Mọi cơ thể sống đều được tạo thành từ ___."',
            a: '"… cells." Every one of them.',
            aVn: '"… tế bào." Không có ngoại lệ.',
          },
          {
            value: 300,
            q: 'In a photograph of a leaf, what are the little green circles inside the cells — and why are they green?',
            qVn: 'Trong ảnh chụp một chiếc lá, những vòng tròn nhỏ màu xanh bên trong tế bào là gì — và vì sao chúng màu xanh?',
            a: 'Chloroplasts. They are green because they contain chlorophyll, and the plant makes its food inside them using sunlight.',
            aVn: 'Lục lạp. Chúng màu xanh vì chứa diệp lục, và cây tạo thức ăn bên trong chúng nhờ ánh sáng mặt trời.',
          },
          {
            value: 400,
            q: 'Give two differences between a cell wall and a cell membrane.',
            qVn: 'Hãy nêu hai điểm khác nhau giữa thành tế bào và màng tế bào.',
            a: 'Any two: the wall is thick, stiff, made of cellulose and only in plants; the membrane is thin, flexible, in every cell, and controls what enters and leaves.',
            aVn: 'Hai điểm bất kỳ: thành thì dày, cứng, làm từ xen-lu-lô-zơ và chỉ có ở thực vật; màng thì mỏng, mềm dẻo, có ở mọi tế bào, và kiểm soát những gì ra vào.',
          },
          {
            value: 500,
            q: 'A model of a cell has limitations. What does that word mean?',
            qVn: 'Một mô hình tế bào có "limitations". Từ đó nghĩa là gì?',
            a: 'The weaknesses of the model — the ways it is different from the real object.',
            aVn: 'Là những hạn chế của mô hình — những điểm nó khác với vật thật.',
          },
        ],
      },
      {
        name: 'Science 1.2',
        nameVn: 'Khoa học 1.2',
        clues: [
          {
            value: 100,
            q: 'How many parts does an animal cell have — and name one of them.',
            qVn: 'Tế bào động vật có mấy bộ phận — và hãy kể tên một bộ phận.',
            a: 'Four: cell membrane, cytoplasm, nucleus, mitochondria.',
            aVn: 'Bốn: màng tế bào, tế bào chất, nhân tế bào, ti thể.',
          },
          {
            value: 200,
            q: 'Under the microscope some cells are soft and rounded with no straight edges at all. Plant or animal?',
            qVn: 'Dưới kính hiển vi, có những tế bào mềm, tròn, không hề có cạnh thẳng. Đó là thực vật hay động vật?',
            a: 'Animal — for example cheek cells. No cell wall means no straight edges.',
            aVn: 'Động vật — ví dụ tế bào niêm mạc má. Không có thành tế bào nên không có cạnh thẳng.',
          },
          {
            value: 300,
            q: 'Cellulose and chlorophyll are not organelles. So what are they?',
            qVn: 'Xen-lu-lô-zơ và diệp lục không phải là bào quan. Vậy chúng là gì?',
            a: 'Substances — the materials an organelle is made of or contains. An organelle is a structure you can point to.',
            aVn: 'Chúng là chất — vật liệu tạo nên hoặc chứa trong bào quan. Còn bào quan là cấu trúc mà em có thể chỉ vào được.',
          },
          {
            value: 400,
            q: 'Give the first four steps for making a slide of your own cheek cells, in order.',
            qVn: 'Hãy nêu bốn bước đầu tiên để làm tiêu bản tế bào má của chính em, theo đúng thứ tự.',
            a: 'Rub a clean cotton bud inside your cheek; smear it onto a slide; add a drop of stain; lower a cover slip on top.',
            aVn: 'Chà nhẹ tăm bông sạch vào mặt trong má; phết lên lam kính; nhỏ một giọt thuốc nhuộm; đậy lá kính lên trên.',
          },
          {
            value: 500,
            q: 'In everyday English a stain on your shirt is an accident. How is a stain in a laboratory different?',
            qVn: 'Trong tiếng Anh hằng ngày, vết bẩn (stain) trên áo là do vô ý. Còn "stain" trong phòng thí nghiệm khác thế nào?',
            a: 'In a laboratory you stain something on purpose, so that its parts show up under the microscope.',
            aVn: 'Trong phòng thí nghiệm, ta nhuộm màu một cách có chủ ý, để các bộ phận hiện rõ dưới kính hiển vi.',
          },
        ],
      },
      {
        name: 'Science 1.3',
        nameVn: 'Khoa học 1.3',
        clues: [
          {
            value: 100,
            q: 'What does it mean to say a cell is specialised?',
            qVn: 'Nói một tế bào "chuyên hoá" nghĩa là gì?',
            a: 'It has a structure that helps it carry out its job really well.',
            aVn: 'Nó có cấu tạo giúp nó làm thật tốt nhiệm vụ của mình.',
          },
          {
            value: 200,
            q: 'What is the job of a neurone, and what is its main adaptation?',
            qVn: 'Tế bào thần kinh có nhiệm vụ gì, và nó thích nghi chủ yếu ra sao?',
            a: 'It carries electrical signals around the body. It has a very long axon, so signals travel far and fast.',
            aVn: 'Nó dẫn truyền tín hiệu điện đi khắp cơ thể. Nó có sợi trục rất dài nên tín hiệu đi xa và nhanh.',
          },
          {
            value: 300,
            q: 'Name two things a red blood cell, a neurone and a ciliated cell all have. Careful.',
            qVn: 'Hãy nêu hai thứ mà hồng cầu, tế bào thần kinh và tế bào có lông chuyển đều có. Cẩn thận nhé.',
            a: 'Cytoplasm and a cell membrane — NOT a nucleus, because the red blood cell has none.',
            aVn: 'Tế bào chất và màng tế bào — KHÔNG phải nhân, vì hồng cầu không có nhân.',
          },
          {
            value: 400,
            q: 'What is the job of a palisade cell, and why is it at the top of the leaf?',
            qVn: 'Tế bào mô giậu có nhiệm vụ gì, và vì sao nó nằm ở phía trên của lá?',
            a: 'It makes food by photosynthesis. It is packed with chloroplasts, tall enough to stack more of them, and at the top so the light reaches it first.',
            aVn: 'Nó tạo thức ăn bằng quang hợp. Nó chứa đầy lục lạp, có dạng cao để xếp được nhiều lục lạp hơn, và nằm trên cùng để nhận ánh sáng trước tiên.',
          },
          {
            value: 500,
            q: 'Finish the sentence in full English: "A red blood cell is adapted to ___ because it has ___."',
            qVn: 'Hãy hoàn thành câu bằng tiếng Anh đầy đủ: "A red blood cell is adapted to ___ because it has ___."',
            a: '"… adapted to carry oxygen because it is full of haemoglobin." Also accept: because it is small enough to fit through a capillary, or because it has no nucleus, leaving more room.',
            aVn: '"… adapted to carry oxygen because it is full of haemoglobin." Cũng chấp nhận: vì nó đủ nhỏ để lọt qua mao mạch, hoặc vì nó không có nhân nên có thêm chỗ trống.',
          },
        ],
      },
    ],
  },

  // ── 4 · UNIT 1 FINALE · THE SECOND HALF OF THE UNIT, PLUS TRIVIA ─────────
  {
    id: 'unit1-finale',
    title: 'Unit 1 Finale · Maths 1.4–1.6, Science 1.4',
    titleVn: 'Chung kết Chương 1 · Toán 1.4–1.6, Khoa học 1.4',
    subtitle: 'Factors, divisibility, roots, tissues — and two rounds of trivia',
    subtitleVn: 'Ước số, chia hết, căn bậc hai, mô — và hai vòng đố vui',
    icon: 'Sparkles',
    accent: '#f59e0b',
    categories: [
      // ── Maths 1.4 ─────────────────────────────────────────────────────────
      {
        name: 'Factors & the HCF',
        nameVn: 'Ước số & ƯCLN',
        clues: [
          {
            value: 100,
            q: 'List all the factors of 12.',
            qVn: 'Hãy liệt kê tất cả các ước số của 12.',
            a: '1, 2, 3, 4, 6, 12. Hunt in pairs: 1 × 12, 2 × 6, 3 × 4.',
            aVn: '1, 2, 3, 4, 6, 12. Hãy tìm theo cặp: 1 × 12, 2 × 6, 3 × 4.',
          },
          {
            value: 200,
            q: 'What do the letters HCF stand for, and what is it called in Vietnamese maths?',
            qVn: 'Ba chữ HCF viết tắt của cụm từ nào, và trong toán tiếng Việt gọi là gì?',
            a: 'Highest Common Factor — the same idea as ƯCLN, ước chung lớn nhất.',
            aVn: 'Highest Common Factor — chính là ƯCLN, ước chung lớn nhất.',
          },
          {
            value: 300,
            q: 'What is the HCF of 8 and 9? Careful.',
            qVn: 'ƯCLN của 8 và 9 là bao nhiêu? Cẩn thận nhé.',
            a: '1 — never "none". Factors of 8: 1, 2, 4, 8. Factors of 9: 1, 3, 9. Only 1 is shared, and 1 is a factor of every number.',
            aVn: '1 — không bao giờ là "không có". Ước của 8: 1, 2, 4, 8. Ước của 9: 1, 3, 9. Chỉ có 1 là chung, mà 1 là ước của mọi số.',
          },
          {
            value: 400,
            q: 'What is the HCF of 6 and 18?',
            qVn: 'ƯCLN của 6 và 18 là bao nhiêu?',
            a: '6, not 1. When one number divides into the other, the HCF is the smaller number.',
            aVn: '6, không phải 1. Khi số này chia hết cho số kia, ƯCLN chính là số nhỏ hơn.',
          },
          {
            value: 500,
            q: 'Why does the book ask for the LOWEST common multiple, but the HIGHEST common factor?',
            qVn: 'Vì sao sách hỏi bội chung NHỎ NHẤT, nhưng lại hỏi ước chung LỚN NHẤT?',
            a: 'Multiples never stop, so there is no highest one to ask for. Factors stop, so a highest one exists — and the lowest common factor is always 1, which tells you nothing.',
            aVn: 'Bội số liệt kê mãi không hết, nên không có số lớn nhất để hỏi. Ước số thì dừng lại, nên có số lớn nhất — còn ước chung nhỏ nhất luôn bằng 1, chẳng cho biết điều gì.',
          },
        ],
      },

      // ── Maths 1.5 ─────────────────────────────────────────────────────────
      {
        name: 'Divisible By',
        nameVn: 'Chia hết cho',
        clues: [
          {
            value: 100,
            q: 'Which number between 2 and 11 has no quick test for divisibility?',
            qVn: 'Số nào trong khoảng từ 2 đến 11 không có mẹo kiểm tra chia hết nhanh?',
            a: '7. Tests for 7 do exist, but they take longer than the division itself — so divide, and look at the remainder.',
            aVn: '7. Vẫn có mẹo cho số 7, nhưng làm còn lâu hơn chia trực tiếp — nên cứ chia rồi xem số dư.',
          },
          {
            value: 200,
            q: 'Is 4113 divisible by 3? Say the TEST, not just the answer.',
            qVn: '4113 có chia hết cho 3 không? Hãy nói ra CÁCH KIỂM TRA, đừng chỉ nói đáp án.',
            a: 'Yes. 4 + 1 + 1 + 3 = 9, and 9 is a multiple of 3, so 4113 is divisible by 3. (4113 ÷ 3 = 1371.)',
            aVn: 'Có. 4 + 1 + 1 + 3 = 9, mà 9 là bội của 3, nên 4113 chia hết cho 3. (4113 ÷ 3 = 1371.)',
          },
          {
            value: 300,
            q: '10 is an even number. Is 10 divisible by 6?',
            qVn: '10 là số chẵn. Vậy 10 có chia hết cho 6 không?',
            a: 'No. The test for 6 is BOTH tests at once: divisible by 2 AND by 3. Here 1 + 0 = 1, so it fails the test for 3. Even is not enough.',
            aVn: 'Không. Muốn chia hết cho 6 phải qua CẢ HAI phép thử: chia hết cho 2 VÀ cho 3. Ở đây 1 + 0 = 1, nên nó trượt phép thử của 3. Chẵn thôi thì chưa đủ.',
          },
          {
            value: 400,
            q: '24 ÷ 6 = 4. Say that ONE fact in three different English sentences.',
            qVn: '24 ÷ 6 = 4. Hãy diễn đạt MỘT sự thật đó bằng ba câu tiếng Anh khác nhau.',
            a: '"6 is a factor of 24." · "24 is divisible by 6." · "24 is a multiple of 6." Three sentences, one division.',
            aVn: '"6 is a factor of 24." · "24 is divisible by 6." · "24 is a multiple of 6." Ba câu, chỉ một phép chia.',
          },
          {
            value: 500,
            q: 'Find the missing digit: 274▢ is divisible by 9. Why is there only one answer?',
            qVn: 'Hãy tìm chữ số còn thiếu: 274▢ chia hết cho 9. Vì sao chỉ có một đáp án?',
            a: '5, giving 2745. The digits you can see add to 13; the next multiple of 9 is 18, and 18 − 13 = 5. The multiple after that is 27, which would need a digit of 14 — impossible.',
            aVn: '5, được số 2745. Ba chữ số nhìn thấy cộng lại bằng 13; bội tiếp theo của 9 là 18, mà 18 − 13 = 5. Bội sau nữa là 27, sẽ cần chữ số 14 — không thể có.',
          },
        ],
      },

      // ── Maths 1.6 ─────────────────────────────────────────────────────────
      {
        name: 'Squares & Roots',
        nameVn: 'Bình phương & Căn',
        clues: [
          {
            value: 100,
            q: 'What is 9², and how do you say it out loud in English?',
            qVn: '9² bằng bao nhiêu, và đọc bằng tiếng Anh như thế nào?',
            a: '81. "Nine squared", which means 9 × 9.',
            aVn: '81. Đọc là "nine squared", nghĩa là 9 × 9.',
          },
          {
            value: 200,
            q: 'Which is bigger, 5² or 5 × 2? Work out both.',
            qVn: 'Số nào lớn hơn, 5² hay 5 × 2? Hãy tính cả hai.',
            a: '5² = 25 is bigger; 5 × 2 = 10. The small 2 counts how many 5s are multiplied together — it does not double the number.',
            aVn: '5² = 25 lớn hơn; 5 × 2 = 10. Số 2 nhỏ ở trên cho biết nhân bao nhiêu số 5 với nhau — nó không phải nhân đôi.',
          },
          {
            value: 300,
            q: '64 is on both lists. What is the square root of 64, and what is the cube root of 64?',
            qVn: '64 nằm trong cả hai danh sách. Căn bậc hai của 64 là bao nhiêu, và căn bậc ba của 64 là bao nhiêu?',
            a: 'Square root 8, because 8 × 8 = 64. Cube root 4, because 4 × 4 × 4 = 64.',
            aVn: 'Căn bậc hai là 8, vì 8 × 8 = 64. Căn bậc ba là 4, vì 4 × 4 × 4 = 64.',
          },
          {
            value: 400,
            q: 'The square root of 45 lies between which two consecutive whole numbers?',
            qVn: 'Căn bậc hai của 45 nằm giữa hai số tự nhiên liên tiếp nào?',
            a: '6 and 7, because 36 < 45 < 49 and the roots of 36 and 49 are 6 and 7. "Consecutive" means one straight after the other.',
            aVn: '6 và 7, vì 36 < 45 < 49 mà căn của 36 và 49 là 6 và 7. "Consecutive" nghĩa là liền nhau, số này ngay sau số kia.',
          },
          {
            value: 500,
            q: 'Mr Bowen is thinking of a square number between 100 and 200. Its square root is a multiple of 3. What is his number?',
            qVn: 'Thầy Bowen đang nghĩ tới một số chính phương nằm giữa 100 và 200. Căn bậc hai của nó là một bội của 3. Đó là số nào?',
            a: '144. The only square numbers between 100 and 200 are 121 and 144; their roots are 11 and 12, and 12 is the multiple of 3.',
            aVn: '144. Giữa 100 và 200 chỉ có hai số chính phương là 121 và 144; căn của chúng là 11 và 12, và 12 là bội của 3.',
          },
        ],
      },

      // ── Science 1.4 ───────────────────────────────────────────────────────
      {
        name: 'Cells to Organisms',
        nameVn: 'Từ tế bào đến cơ thể',
        clues: [
          {
            value: 100,
            q: 'What is a tissue?',
            qVn: 'Mô là gì?',
            a: 'A group of SIMILAR cells, all working together to carry out one particular function.',
            aVn: 'Một nhóm các tế bào GIỐNG NHAU, cùng làm việc để thực hiện một chức năng cụ thể.',
          },
          {
            value: 200,
            q: 'What is an organ? Give one human example and one plant example.',
            qVn: 'Cơ quan là gì? Hãy cho một ví dụ ở người và một ví dụ ở thực vật.',
            a: 'A structure made of several DIFFERENT tissues, working together. Human: the heart, the stomach, the skin. Plant: a leaf, a root, a flower.',
            aVn: 'Một cấu trúc gồm nhiều loại MÔ KHÁC NHAU cùng làm việc. Ở người: tim, dạ dày, da. Ở thực vật: lá, rễ, hoa.',
          },
          {
            value: 300,
            q: 'Is a leaf a tissue or an organ? Say why.',
            qVn: 'Lá cây là mô hay cơ quan? Vì sao?',
            a: 'An organ. One leaf holds four different tissues: upper epidermis, palisade layer, spongy layer, lower epidermis. Different tissues means organ.',
            aVn: 'Là cơ quan. Một chiếc lá chứa bốn loại mô khác nhau: biểu bì trên, mô giậu, mô xốp, biểu bì dưới. Nhiều loại mô khác nhau nghĩa là cơ quan.',
            // The same photograph the class met in the Science 1.4 lesson, so
            // the reveal is a recognition rather than a new picture to decode.
            // Count the four layers off it while the answer is on screen.
            aImage: {
              src: IMAGES.leafCrossSection,
              alt: 'A leaf cut across under a microscope: a flat top layer, tall column cells, loose round cells, then a flat bottom layer.',
              altVn: 'Lát cắt ngang của lá dưới kính hiển vi: một lớp dẹt ở trên, các tế bào hình cột cao, các tế bào tròn xếp thưa, rồi một lớp dẹt ở dưới.',
            },
          },
          {
            value: 400,
            q: 'Put these five in order, smallest first: organ · cell · organism · tissue · organ system.',
            qVn: 'Hãy sắp xếp năm mức sau từ nhỏ đến lớn: cơ quan · tế bào · cơ thể · mô · hệ cơ quan.',
            a: 'cell → tissue → organ → organ system → organism. One example goes all the way up: a ciliated cell → ciliated epithelium → a lung → the breathing system → you.',
            aVn: 'tế bào → mô → cơ quan → hệ cơ quan → cơ thể. Một ví dụ đi hết cả năm bậc: tế bào có lông chuyển → biểu mô có lông chuyển → lá phổi → hệ hô hấp → chính em.',
          },
          {
            value: 500,
            q: 'The word "tissue" has two meanings in English. Give both — in a full sentence each.',
            qVn: 'Từ "tissue" trong tiếng Anh có hai nghĩa. Hãy nêu cả hai — mỗi nghĩa một câu hoàn chỉnh.',
            a: 'Everyday, countable: "Mr Bowen sneezed, so he took a tissue out of the box." Scientific, uncountable: "The wall of the stomach contains muscle tissue."',
            aVn: 'Nghĩa hằng ngày, đếm được: "Mr Bowen sneezed, so he took a tissue out of the box." Nghĩa khoa học, không đếm được: "The wall of the stomach contains muscle tissue."',
          },
        ],
      },

      // ── Trivia 1 ──────────────────────────────────────────────────────────
      {
        name: 'Animal Records',
        nameVn: 'Kỷ lục động vật',
        clues: [
          {
            value: 100,
            q: 'What is the largest animal that has ever lived on Earth?',
            qVn: 'Loài động vật lớn nhất từng sống trên Trái Đất là loài nào?',
            a: 'The blue whale — about 30 metres long, and heavier than any dinosaur. It is alive today.',
            aVn: 'Cá voi xanh — dài khoảng 30 mét, nặng hơn bất kỳ loài khủng long nào. Và nó vẫn đang sống đến ngày nay.',
            aImage: {
              src: IMAGES.blueWhale,
              alt: 'A blue whale seen from above, its whole body just under clear blue water.',
              altVn: 'Một con cá voi xanh nhìn từ trên cao, toàn thân nằm ngay dưới mặt nước biển trong xanh.',
            },
          },
          {
            value: 200,
            q: 'What is the fastest animal in the world? It is not the cheetah.',
            qVn: 'Loài động vật nhanh nhất thế giới là loài nào? Không phải báo săn đâu.',
            a: 'The peregrine falcon, which dives at about 390 km/h. The cheetah is the fastest on LAND, at about 110 km/h.',
            aVn: 'Chim cắt lớn, lao xuống với tốc độ khoảng 390 km/h. Báo săn chỉ nhanh nhất TRÊN CẠN, khoảng 110 km/h.',
            aImage: {
              src: IMAGES.peregrineFalcon,
              alt: 'A peregrine falcon flying straight towards the camera, wings fully spread against a pale sky.',
              altVn: 'Một con chim cắt lớn bay thẳng về phía máy ảnh, hai cánh dang rộng trên nền trời nhạt.',
            },
          },
          {
            value: 300,
            q: 'A giraffe has a neck about two metres long. How many neck bones does it have — and how many have you got?',
            qVn: 'Hươu cao cổ có chiếc cổ dài khoảng hai mét. Nó có bao nhiêu đốt xương cổ — còn em có bao nhiêu?',
            // On the QUESTION: the clue says the word "giraffe" itself, so the
            // photograph gives nothing away. What it gives is two metres of
            // neck to look at while the teams argue about the number.
            qImage: {
              src: IMAGES.giraffe,
              alt: 'Two giraffes standing with their long necks crossed against a blue sky.',
              altVn: 'Hai con hươu cao cổ đứng bắt chéo hai chiếc cổ dài trên nền trời xanh.',
            },
            a: 'Seven each. The giraffe has exactly the same number as you; its bones are simply enormous.',
            aVn: 'Cả hai đều có bảy. Hươu cao cổ có đúng bằng số của em; chỉ là mỗi đốt xương của nó to khổng lồ.',
          },
          {
            value: 400,
            q: 'Which animal has three hearts and blue blood?',
            qVn: 'Loài vật nào có ba trái tim và máu màu xanh?',
            a: 'The octopus. Two hearts push blood through the gills and one pushes it round the body; its blood carries copper instead of iron, so it is blue, not red.',
            aVn: 'Bạch tuộc. Hai tim đẩy máu qua mang, một tim đẩy máu đi khắp cơ thể; máu của nó chứa đồng thay vì sắt, nên có màu xanh chứ không đỏ.',
            aImage: {
              src: IMAGES.octopus,
              alt: 'A common octopus on the sea floor, its eye and all eight arms clearly visible.',
              altVn: 'Một con bạch tuộc trên đáy biển, thấy rõ mắt và cả tám xúc tu.',
            },
          },
          {
            value: 500,
            q: 'One animal survives being frozen solid, dried out completely, and even the vacuum of space — but you need a microscope to see it. What is it?',
            qVn: 'Có một loài vật sống sót qua cả việc bị đông cứng, khô kiệt hoàn toàn, và cả chân không ngoài vũ trụ — nhưng phải dùng kính hiển vi mới nhìn thấy nó. Đó là con gì?',
            a: 'The tardigrade, or water bear — under a millimetre long. Some were carried into orbit in 2007, exposed to open space, and came back alive.',
            aVn: 'Gấu nước (tardigrade) — dài chưa tới một milimét. Năm 2007 người ta đưa chúng lên quỹ đạo, phơi ra ngoài không gian, và chúng vẫn sống sót trở về.',
            aImage: {
              src: IMAGES.tardigrade,
              alt: 'An electron microscope image of a tardigrade: a plump segmented body walking on eight stubby legs.',
              altVn: 'Ảnh chụp gấu nước bằng kính hiển vi điện tử: thân mập chia đốt, đi trên tám chiếc chân ngắn.',
            },
          },
        ],
      },

      // ── Trivia 2 ──────────────────────────────────────────────────────────
      {
        name: 'Big Numbers, Weird Facts',
        nameVn: 'Số khổng lồ, sự thật lạ',
        clues: [
          {
            value: 100,
            q: 'How many seconds are there in one hour?',
            qVn: 'Một giờ có bao nhiêu giây?',
            a: '3600, from 60 × 60. (And 86 400 in a whole day.)',
            aVn: '3600 giây, do 60 × 60. (Và một ngày có 86 400 giây.)',
          },
          {
            value: 200,
            q: 'An adult has 206 bones. Does a newborn baby have more, or fewer?',
            qVn: 'Người lớn có 206 chiếc xương. Vậy trẻ sơ sinh có nhiều hơn hay ít hơn?',
            a: 'More — about 300. As you grow, some of them fuse together into single larger bones.',
            aVn: 'Nhiều hơn — khoảng 300 chiếc. Khi lớn lên, một số xương dính liền lại thành những xương lớn hơn.',
          },
          {
            value: 300,
            q: 'How long does light from the Sun take to reach the Earth?',
            qVn: 'Ánh sáng từ Mặt Trời mất bao lâu để đến được Trái Đất?',
            a: 'About 8 minutes — 8 minutes and 20 seconds. So you always see the Sun as it was 8 minutes ago.',
            aVn: 'Khoảng 8 phút — chính xác là 8 phút 20 giây. Nghĩa là em luôn nhìn thấy Mặt Trời của 8 phút trước.',
          },
          {
            value: 400,
            q: 'A million seconds is about eleven and a half days. Roughly how long is a BILLION seconds?',
            qVn: 'Một triệu giây là khoảng mười một ngày rưỡi. Vậy MỘT TỈ giây là khoảng bao lâu?',
            a: 'About 32 years. A billion is a thousand millions — that is how far apart the two words really are.',
            aVn: 'Khoảng 32 năm. Một tỉ bằng một nghìn triệu — đó mới là khoảng cách thật giữa hai từ này.',
          },
          {
            value: 500,
            q: 'A sheet of paper is 0.1 mm thick. Fold it in half 42 times. Roughly how thick is it now?',
            qVn: 'Một tờ giấy dày 0,1 mm. Gấp đôi nó 42 lần. Khi đó nó dày khoảng bao nhiêu?',
            a: 'It reaches the Moon — about 440 000 km, and the Moon is 384 000 km away. Every fold doubles the thickness. (Nobody can really fold paper 42 times.)',
            aVn: 'Nó chạm tới Mặt Trăng — khoảng 440 000 km, mà Mặt Trăng chỉ cách 384 000 km. Mỗi lần gấp là dày gấp đôi. (Thực tế không ai gấp giấy được 42 lần đâu.)',
          },
        ],
      },
    ],
  },
  // ── 5 · KINDERGARTEN & YEAR 1 · COOKING AND FIRST SCIENCE ────────────────
  // A board for a class that cannot read the clues. THE TEACHER READS EVERY
  // ONE ALOUD, twice, which is why the questions are short spoken sentences
  // rather than written ones, and why the answers are one or two words.
  //
  // Twenty-nine of the thirty clues carry an `aImage`, and every one is held
  // back until the reveal. That is the engine of the whole board: the class
  // says "chopsticks" in English, THEN the photograph comes up and confirms
  // it. A five-year-old who has said a new English word out loud and then seen
  // the thing has learnt it; one who has only seen the picture has not had to
  // say anything.
  //
  // Three categories are cooking and three are Cambridge Primary Science
  // Stage 1 — the senses, living and non-living, and reversible against
  // irreversible change. "How Do We Cook It?" deliberately uses the same four
  // methods as the Word Wall puzzle of that name, so play the wall first.
  //
  // The values still run 100–500 and the 500s are still the hard ones, but
  // hard here means "say two things" or "say why", never a longer number.
  {
    id: 'kindy-cooking',
    title: 'Kindergarten & Year 1 · Cooking and First Science',
    titleVn: 'Mẫu giáo & Lớp 1 · Nấu ăn và Khoa học đầu tiên',
    subtitle: 'The kitchen, how food gets hot, the five senses and living things',
    subtitleVn: 'Nhà bếp, cách làm nóng thức ăn, năm giác quan và vật sống',
    icon: 'CookingPot',
    accent: '#ec4899',
    categories: [
      // ── Cooking · the kitchen ─────────────────────────────────────────────
      {
        name: 'In the Kitchen',
        nameVn: 'Trong Nhà Bếp',
        clues: [
          {
            value: 100,
            q: 'We pick up our rice with these two little sticks. What are they?',
            qVn: 'Chúng ta gắp cơm bằng hai chiếc que nhỏ này. Đó là gì?',
            a: 'Chopsticks.',
            aVn: 'Đôi đũa. (Tiếng Anh: chopsticks.)',
            aImage: { src: IMAGES.chopsticks, alt: 'A pair of wooden chopsticks.', altVn: 'Một đôi đũa gỗ.' },
          },
          {
            value: 200,
            q: 'It is round and flat, and we fry an egg in it. What is it?',
            qVn: 'Nó tròn và dẹt, chúng ta chiên trứng trong đó. Đó là cái gì?',
            a: 'A pan.',
            aVn: 'Cái chảo. (Tiếng Anh: a pan.)',
            aImage: { src: IMAGES.pan, alt: 'A round frying pan with a long handle.', altVn: 'Một cái chảo tròn có tay cầm dài.' },
          },
          {
            value: 300,
            q: 'This big machine keeps our milk cold. What is it?',
            qVn: 'Cái máy to này giữ cho sữa của chúng ta lạnh. Đó là cái gì?',
            a: 'The fridge.',
            aVn: 'Tủ lạnh. (Tiếng Anh: the fridge.)',
            aImage: { src: IMAGES.fridge, alt: 'A tall kitchen fridge.', altVn: 'Một chiếc tủ lạnh cao trong bếp.' },
          },
          {
            value: 400,
            q: 'Bread goes in. It gets hot. Brown, crunchy bread comes out. What is it?',
            qVn: 'Cho bánh mì vào. Nó nóng lên. Bánh mì vàng giòn đi ra. Đó là cái gì?',
            a: 'A toaster.',
            aVn: 'Máy nướng bánh mì. (Tiếng Anh: a toaster.)',
            aImage: { src: IMAGES.toaster, alt: 'An electric toaster with two slots.', altVn: 'Một máy nướng bánh mì có hai khe.' },
          },
          {
            value: 500,
            q: 'Mr Bowen is making soup for the whole class. Does he need a pan or a pot? Say why.',
            qVn: 'Thầy Bowen đang nấu canh cho cả lớp. Thầy cần cái chảo hay cái nồi? Vì sao?',
            a: 'A pot. A pot is deep, so it holds a lot of soup. A pan is flat.',
            aVn: 'Cái nồi. Nồi sâu nên chứa được nhiều canh. Còn chảo thì dẹt.',
            aImage: { src: IMAGES.pot, alt: 'A deep cooking pot with two handles and a lid.', altVn: 'Một cái nồi sâu có hai quai và nắp.' },
          },
        ],
      },

      // ── Cooking · the method, the same four as the Word Wall ──────────────
      {
        name: 'How Do We Cook It?',
        nameVn: 'Nấu Bằng Cách Nào?',
        clues: [
          {
            value: 100,
            q: 'We cook it in a pot of hot water. We eat it every day in Vietnam. What is it?',
            qVn: 'Chúng ta nấu nó trong nồi nước nóng. Ở Việt Nam ngày nào chúng ta cũng ăn. Đó là gì?',
            a: 'Rice.',
            aVn: 'Cơm. (Tiếng Anh: rice.)',
            aImage: { src: IMAGES.rice, alt: 'A bowl of cooked white rice.', altVn: 'Một bát cơm trắng đã nấu chín.' },
          },
          {
            value: 200,
            q: 'We mix flour and water, then we bake it in the oven. We put butter on it. What is it?',
            qVn: 'Chúng ta trộn bột với nước, rồi nướng trong lò. Chúng ta phết bơ lên. Đó là gì?',
            a: 'Bread.',
            aVn: 'Bánh mì. (Tiếng Anh: bread.)',
            aImage: { src: IMAGES.bread, alt: 'A loaf of bread.', altVn: 'Một ổ bánh mì.' },
          },
          {
            value: 300,
            q: 'Hot oil in a pan makes this go golden and crispy. We eat it at Tet. What is it?',
            qVn: 'Dầu nóng trong chảo làm món này vàng giòn. Chúng ta ăn nó vào dịp Tết. Đó là gì?',
            a: 'A spring roll.',
            aVn: 'Nem rán (chả giò). Tiếng Anh: a spring roll.',
            aImage: { src: IMAGES.springroll, alt: 'Golden fried spring rolls on a plate.', altVn: 'Những chiếc nem rán vàng giòn trên đĩa.' },
          },
          {
            value: 400,
            q: 'Which one do we NOT cook at all — a pizza, a fried egg, or a banana?',
            qVn: 'Món nào chúng ta KHÔNG nấu chút nào — bánh pizza, trứng ốp la, hay quả chuối?',
            a: 'The banana. We peel it and eat it. The other two need heat.',
            aVn: 'Quả chuối. Ta bóc vỏ rồi ăn luôn. Hai món kia đều cần làm nóng.',
            aImage: { src: IMAGES.banana, alt: 'A ripe yellow banana.', altVn: 'Một quả chuối chín vàng.' },
          },
          {
            value: 500,
            q: 'Mr Bowen has one egg. Name TWO different ways he could cook it.',
            qVn: 'Thầy Bowen có một quả trứng. Hãy nêu HAI cách khác nhau để nấu nó.',
            a: 'Fry it in a pan of hot oil, or boil it in a pot of water. (Also fine: scramble it, or bake it inside a cake.)',
            aVn: 'Chiên trong chảo dầu nóng, hoặc luộc trong nồi nước. (Cũng được: đánh tan rán lên, hoặc cho vào bánh để nướng.)',
            aImage: { src: IMAGES.friedegg, alt: 'A fried egg on a plate.', altVn: 'Một quả trứng ốp la trên đĩa.' },
          },
        ],
      },

      // ── Cooking · where the food starts ───────────────────────────────────
      {
        name: 'Where Does It Come From?',
        nameVn: 'Thức Ăn Từ Đâu Đến?',
        clues: [
          {
            value: 100,
            q: 'Which animal gives us milk?',
            qVn: 'Con vật nào cho chúng ta sữa?',
            a: 'The cow.',
            aVn: 'Con bò. (Tiếng Anh: the cow.)',
            aImage: { src: IMAGES.cow, alt: 'A cow standing in a field.', altVn: 'Một con bò đứng trên đồng cỏ.' },
          },
          {
            value: 200,
            q: 'Which animal gives us eggs?',
            qVn: 'Con vật nào cho chúng ta trứng?',
            a: 'The hen.',
            aVn: 'Con gà mái. (Tiếng Anh: the hen.)',
            aImage: { src: IMAGES.hen, alt: 'A brown hen.', altVn: 'Một con gà mái màu nâu.' },
          },
          {
            value: 300,
            q: 'Rice does not grow in a shop. It grows in a big field full of water. What do we call that field?',
            qVn: 'Cây lúa không mọc trong cửa hàng. Nó mọc trên một cánh đồng đầy nước. Cánh đồng đó gọi là gì?',
            a: 'A rice field. In English we also say a paddy field.',
            aVn: 'Cánh đồng lúa. Tiếng Anh: a rice field, hoặc a paddy field.',
            aImage: { src: IMAGES.riceField, alt: 'Green rice fields full of water, with farmers working in them.', altVn: 'Những thửa ruộng lúa xanh ngập nước, có bà con đang làm việc.' },
          },
          {
            value: 400,
            q: 'Cheese and butter both start as the same white drink. What is it?',
            qVn: 'Phô mai và bơ đều bắt đầu từ cùng một thức uống màu trắng. Đó là gì?',
            a: 'Milk.',
            aVn: 'Sữa. (Tiếng Anh: milk.)',
            aImage: { src: IMAGES.milk, alt: 'A glass of milk.', altVn: 'Một ly sữa.' },
          },
          {
            value: 500,
            q: 'Honey is made by a tiny animal with wings. Which one?',
            qVn: 'Mật ong do một con vật nhỏ có cánh làm ra. Con gì vậy?',
            a: 'The bee. Bees take sweet juice from flowers and turn it into honey.',
            aVn: 'Con ong. Ong lấy mật ngọt từ hoa rồi biến nó thành mật ong.',
            aImage: { src: IMAGES.bee, alt: 'A bee on a flower.', altVn: 'Một con ong đậu trên bông hoa.' },
          },
        ],
      },

      // ── Science · Stage 1, the senses ─────────────────────────────────────
      {
        name: 'Our Five Senses',
        nameVn: 'Năm Giác Quan',
        clues: [
          {
            value: 100,
            q: 'Which part of your body do you SEE with?',
            qVn: 'Em NHÌN bằng bộ phận nào trên cơ thể?',
            a: 'Your eyes.',
            aVn: 'Đôi mắt. (Tiếng Anh: your eyes.)',
            aImage: { src: IMAGES.eye, alt: 'A close-up of a human eye.', altVn: 'Cận cảnh một con mắt người.' },
          },
          {
            value: 200,
            q: 'Which part of your body do you HEAR with?',
            qVn: 'Em NGHE bằng bộ phận nào trên cơ thể?',
            a: 'Your ears.',
            aVn: 'Đôi tai. (Tiếng Anh: your ears.)',
            aImage: { src: IMAGES.ears, alt: 'A child holding both hands over his ears.', altVn: 'Một bạn nhỏ lấy hai tay bịt tai lại.' },
          },
          {
            value: 300,
            q: 'Mr Bowen is in the next room. He cannot see the kitchen, but he knows the cake is ready. Which part of his body told him?',
            qVn: 'Thầy Bowen đang ở phòng bên. Thầy không nhìn thấy nhà bếp, nhưng thầy biết bánh đã chín. Bộ phận nào trên cơ thể đã báo cho thầy?',
            a: 'His nose. He can SMELL it.',
            aVn: 'Cái mũi. Thầy NGỬI thấy mùi bánh.',
            aImage: { src: IMAGES.cake, alt: 'A cake.', altVn: 'Một chiếc bánh ngọt.' },
          },
          {
            value: 400,
            q: 'You put a piece of lemon on your tongue. Is it sweet, or is it sour?',
            qVn: 'Em đặt một miếng chanh lên lưỡi. Nó ngọt hay chua?',
            a: 'Sour! Your tongue is the part that tastes.',
            aVn: 'Chua! Cái lưỡi là bộ phận nếm vị. (Tiếng Anh: sour.)',
            aImage: { src: IMAGES.lemon, alt: 'A whole lemon and a lemon cut in half.', altVn: 'Một quả chanh nguyên và một quả chanh cắt đôi.' },
          },
          {
            value: 500,
            q: 'Mr Bowen shuts his eyes. He puts his hand in a bowl. It feels cold, hard and wet. What is in the bowl?',
            qVn: 'Thầy Bowen nhắm mắt lại. Thầy thò tay vào một cái bát. Thầy thấy lạnh, cứng và ướt. Trong bát có gì?',
            a: 'Ice. He used TOUCH — his hands — because his eyes were shut.',
            aVn: 'Nước đá. Thầy dùng xúc giác — đôi tay — vì mắt đang nhắm.',
            aImage: { src: IMAGES.ice, alt: 'Ice cubes in a glass of water.', altVn: 'Những viên đá trong ly nước.' },
          },
        ],
      },

      // ── Science · Stage 1, living things ──────────────────────────────────
      {
        name: 'Living or Not Living?',
        nameVn: 'Vật Sống Hay Không Sống?',
        clues: [
          {
            value: 100,
            q: 'Is a dog living, or not living?',
            qVn: 'Con chó là vật sống hay không sống?',
            a: 'Living. It eats, it moves and it grows.',
            aVn: 'Vật sống. Nó ăn, nó di chuyển và nó lớn lên.',
            aImage: { src: IMAGES.dog, alt: 'A dog.', altVn: 'Một chú chó.' },
          },
          {
            value: 200,
            q: 'Is a spoon living, or not living?',
            qVn: 'Cái thìa là vật sống hay không sống?',
            a: 'Not living. It has never been alive.',
            aVn: 'Không sống. Nó chưa bao giờ sống cả.',
            aImage: { src: IMAGES.spoon, alt: 'A metal spoon.', altVn: 'Một cái thìa kim loại.' },
          },
          {
            value: 300,
            q: 'Is a tree living, or not living? Say why.',
            qVn: 'Cái cây là vật sống hay không sống? Vì sao?',
            a: 'Living. It grows, and it needs water and light. Living does not mean it has to walk about.',
            aVn: 'Vật sống. Nó lớn lên và nó cần nước với ánh sáng. Sống không có nghĩa là phải đi lại được.',
            aImage: { src: IMAGES.tree, alt: 'A large green tree.', altVn: 'Một cái cây to xanh tốt.' },
          },
          {
            value: 400,
            q: 'There is a carrot in your soup. Is that carrot living NOW? Careful!',
            qVn: 'Trong bát canh của em có một miếng cà rốt. Miếng cà rốt đó BÂY GIỜ có phải vật sống không? Cẩn thận nhé!',
            a: 'Not living now. It WAS living when it was growing in the ground, but it is not living any more.',
            aVn: 'Bây giờ không sống. Nó ĐÃ từng sống khi còn mọc dưới đất, nhưng bây giờ thì không còn sống nữa.',
            aImage: { src: IMAGES.carrot, alt: 'Fresh carrots.', altVn: 'Những củ cà rốt tươi.' },
          },
          {
            value: 500,
            q: 'A little plant is pushing up out of the soil. Name TWO things it needs so it can keep growing.',
            qVn: 'Một cây con đang nhú lên khỏi mặt đất. Hãy nêu HAI thứ nó cần để tiếp tục lớn lên.',
            a: 'Water and light. (Also accept air, and soil to grow in.)',
            aVn: 'Nước và ánh sáng. (Cũng chấp nhận: không khí, và đất để mọc.)',
            aImage: { src: IMAGES.seedling, alt: 'A small green seedling pushing up out of the soil.', altVn: 'Một cây con màu xanh đang nhú lên khỏi mặt đất.' },
          },
        ],
      },

      // ── Science · Stage 1, change ─────────────────────────────────────────
      {
        name: 'Hot, Cold and Changing',
        nameVn: 'Nóng, Lạnh và Thay Đổi',
        clues: [
          {
            value: 100,
            q: 'We put water in the freezer and leave it all night. What does it turn into?',
            qVn: 'Chúng ta cho nước vào ngăn đá và để cả đêm. Nước biến thành gì?',
            a: 'Ice. The cold made it hard.',
            aVn: 'Nước đá. Cái lạnh đã làm nó cứng lại.',
            aImage: { src: IMAGES.ice, alt: 'Ice cubes in a glass of water.', altVn: 'Những viên đá trong ly nước.' },
          },
          {
            value: 200,
            q: 'We leave an ice lolly outside in the hot sun. What happens to it?',
            qVn: 'Chúng ta để một que kem ngoài trời nắng nóng. Chuyện gì sẽ xảy ra?',
            a: 'It melts. It turns into a puddle of liquid.',
            aVn: 'Nó tan chảy. Nó biến thành một vũng nước.',
            aImage: { src: IMAGES.meltingIcecream, alt: 'An ice lolly melting into a coloured puddle on hot pavement, with only the stick left.', altVn: 'Một que kem đang tan thành vũng nước màu trên vỉa hè nóng, chỉ còn lại chiếc que.' },
          },
          {
            value: 300,
            q: 'The water in the pot is very hot. It is full of bubbles. What is the water doing?',
            qVn: 'Nước trong nồi rất nóng. Nó sủi đầy bọt. Nước đang làm gì?',
            a: 'Boiling.',
            aVn: 'Đang sôi. (Tiếng Anh: boiling.)',
            aImage: { src: IMAGES.boilingPot, alt: 'A pot of water boiling on a stove.', altVn: 'Một nồi nước đang sôi trên bếp.' },
          },
          {
            value: 400,
            q: 'Mr Bowen cracks an egg into a hot pan. Does it stay runny?',
            qVn: 'Thầy Bowen đập một quả trứng vào chảo nóng. Trứng có còn lỏng không?',
            a: 'No. It goes white and firm. The heat changed it.',
            aVn: 'Không. Nó chuyển sang màu trắng và cứng lại. Sức nóng đã làm nó thay đổi.',
            aImage: { src: IMAGES.friedegg, alt: 'A fried egg, white and firm, on a plate.', altVn: 'Một quả trứng ốp la, đã trắng và chín, trên đĩa.' },
          },
          {
            value: 500,
            q: 'Ice melts into water, and water freezes back into ice. Can Mr Bowen turn a cooked egg back into a runny one?',
            qVn: 'Nước đá tan thành nước, rồi nước lại đông thành đá. Vậy thầy Bowen có thể biến quả trứng đã chín trở lại thành trứng lỏng không?',
            a: 'No — never. Some changes can go back again, and some can never go back.',
            aVn: 'Không — không bao giờ. Có những thay đổi quay lại được, và có những thay đổi thì không bao giờ quay lại được.',
          },
        ],
      },
    ],
  },

  // ── 6 · YEAR 1 · PICTURES THAT MAKE THEM THINK ────────────────────────────
  // Five columns, and every clue is a picture with a few words over it. The
  // class cannot read a sentence yet, so the words stay short and the pictures
  // carry the question.
  //
  // Almost every clue is a CHOICE, not a name. "What is it?" only asks a child
  // to remember a word; "Which one makes toast?" makes them look at three
  // things and think about what each one does. The 500s want two steps: an egg
  // is the odd one out because the other three are made from milk.
  //
  // `aIndex` says which picture is right, and it lights up green on the reveal.
  // With two pictures the class votes all at once: left hand for the left
  // picture, right hand for the right.
  //
  // Dishes from the World puts the country's flag beside its question (a
  // `qImage` on a picture clue), because "Italy" means nothing to a six-year-old
  // until they can see which flag it is.
  //
  // Claps counts the beats in a spoken word, and the 500 is still "fire", which
  // sounds long and is one clap.
  {
    id: 'year1-pictures',
    title: 'Year 1 · Picture Questions',
    titleVn: 'Lớp 1 · Câu hỏi bằng hình',
    subtitle: 'Kitchen, food, dishes from the world, claps, which is…?',
    subtitleVn: 'Nhà bếp, đồ ăn, món ăn thế giới, vỗ tay, cái nào…?',
    icon: 'Apple',
    accent: '#16a34a',
    categories: [
      {
        name: 'In the Kitchen',
        nameVn: 'Trong Nhà Bếp',
        clues: [
          {
            value: 100,
            q: 'Which one is NOT in the kitchen?',
            qVn: 'Cái nào KHÔNG có trong nhà bếp?',
            qImages: [
              { src: IMAGES.bed, alt: 'A bed.', altVn: 'Một cái giường.' },
              { src: IMAGES.pot, alt: 'A cooking pot.', altVn: 'Một cái nồi.' },
              { src: IMAGES.pan, alt: 'A frying pan.', altVn: 'Một cái chảo.' },
            ],
            aIndex: 0,
            a: 'The bed. A bed is in the bedroom.',
            aVn: 'Cái giường. Giường ở trong phòng ngủ.',
          },
          {
            value: 200,
            q: 'Which one makes toast?',
            qVn: 'Cái nào nướng bánh mì?',
            qImages: [
              { src: IMAGES.kettle, alt: 'A white electric kettle.', altVn: 'Một ấm đun nước điện màu trắng.' },
              { src: IMAGES.microwave, alt: 'A microwave oven.', altVn: 'Một cái lò vi sóng.' },
              { src: IMAGES.toaster, alt: 'A toaster.', altVn: 'Một máy nướng bánh mì.' },
            ],
            aIndex: 2,
            a: 'The toaster.',
            aVn: 'Máy nướng bánh mì. (Tiếng Anh: the toaster.)',
          },
          {
            value: 300,
            q: 'Where do we keep ice cream?',
            qVn: 'Chúng ta cất kem ở đâu?',
            qImages: [
              { src: IMAGES.fridge, alt: 'A tall fridge.', altVn: 'Một chiếc tủ lạnh cao.' },
              { src: IMAGES.oven, alt: 'An oven in a kitchen.', altVn: 'Một cái lò nướng trong bếp.' },
              { src: IMAGES.microwave, alt: 'A microwave oven.', altVn: 'Một cái lò vi sóng.' },
            ],
            aIndex: 0,
            a: 'In the fridge. It is cold inside.',
            aVn: 'Trong tủ lạnh. Bên trong tủ lạnh rất lạnh.',
          },
          {
            value: 400,
            q: 'Which one cooks rice?',
            qVn: 'Cái nào nấu cơm?',
            qImages: [
              { src: IMAGES.toaster, alt: 'A toaster.', altVn: 'Một máy nướng bánh mì.' },
              { src: IMAGES.kettle, alt: 'A white electric kettle.', altVn: 'Một ấm đun nước điện màu trắng.' },
              { src: IMAGES.riceCooker, alt: 'A white rice cooker with a round lid.', altVn: 'Một nồi cơm điện màu trắng có nắp tròn.' },
            ],
            aIndex: 2,
            a: 'The rice cooker.',
            aVn: 'Nồi cơm điện. (Tiếng Anh: the rice cooker.)',
          },
          {
            value: 500,
            q: 'Which one is for a hot pan?',
            qVn: 'Cái nào dùng để cầm chảo nóng?',
            qImages: [
              { src: IMAGES.sock, alt: 'A pair of red socks.', altVn: 'Một đôi tất màu đỏ.' },
              { src: IMAGES.ovenGlove, alt: 'A red oven glove.', altVn: 'Một chiếc găng tay nhắc nồi màu đỏ.' },
              { src: IMAGES.hat, alt: 'A hat.', altVn: 'Một cái mũ.' },
            ],
            aIndex: 1,
            a: 'The oven glove. It keeps your hand safe.',
            aVn: 'Găng tay nhắc nồi. Nó giữ cho tay em an toàn. (Tiếng Anh: an oven glove.)',
          },
        ],
      },
      {
        name: 'Food',
        nameVn: 'Đồ Ăn',
        clues: [
          {
            value: 100,
            q: 'Which one is a fruit?',
            qVn: 'Cái nào là trái cây?',
            qImages: [
              { src: IMAGES.broccoli, alt: 'A head of broccoli.', altVn: 'Một cây súp lơ xanh.' },
              { src: IMAGES.potato, alt: 'Two potatoes, one cut open.', altVn: 'Hai củ khoai tây, một củ bổ ra.' },
              { src: IMAGES.banana, alt: 'Bananas.', altVn: 'Những quả chuối.' },
            ],
            aIndex: 2,
            a: 'The banana.',
            aVn: 'Quả chuối. (Tiếng Anh: the banana.)',
          },
          {
            value: 200,
            q: 'Which one is NOT sweet?',
            qVn: 'Cái nào KHÔNG ngọt?',
            qImages: [
              { src: IMAGES.doughnut, alt: 'A chocolate doughnut with sprinkles.', altVn: 'Một chiếc bánh vòng phủ sô-cô-la.' },
              { src: IMAGES.onion, alt: 'Onions, some cut in half.', altVn: 'Những củ hành, có củ bổ đôi.' },
              { src: IMAGES.icecream, alt: 'An ice cream cone.', altVn: 'Một cây kem ốc quế.' },
            ],
            aIndex: 1,
            a: 'The onion.',
            aVn: 'Củ hành. (Tiếng Anh: the onion.)',
          },
          {
            value: 300,
            q: 'Which one grows on a tree?',
            qVn: 'Cái nào mọc trên cây?',
            qImages: [
              { src: IMAGES.orange, alt: 'Oranges, one cut open.', altVn: 'Những quả cam, có một quả bổ ra.' },
              { src: IMAGES.carrot, alt: 'Carrots.', altVn: 'Những củ cà rốt.' },
              { src: IMAGES.ginger, alt: 'Ginger root.', altVn: 'Củ gừng.' },
            ],
            aIndex: 0,
            a: 'The orange. Carrots and ginger grow under the ground.',
            aVn: 'Quả cam. Cà rốt và gừng mọc dưới đất.',
          },
          {
            value: 400,
            q: 'Which one is made from potatoes?',
            qVn: 'Món nào làm từ khoai tây?',
            qImages: [
              { src: IMAGES.bread, alt: 'A loaf of bread.', altVn: 'Một ổ bánh mì.' },
              { src: IMAGES.noodles, alt: 'A bowl of phở noodle soup.', altVn: 'Một bát phở.' },
              { src: IMAGES.chips, alt: 'Chips (French fries).', altVn: 'Khoai tây chiên.' },
            ],
            aIndex: 2,
            a: 'Chips. Some people say French fries.',
            aVn: 'Khoai tây chiên. (Tiếng Anh: chips, hoặc French fries.)',
          },
          {
            value: 500,
            q: 'Which one is different?',
            qVn: 'Cái nào khác các cái còn lại?',
            qImages: [
              { src: IMAGES.milk, alt: 'A glass of milk.', altVn: 'Một ly sữa.' },
              { src: IMAGES.cheese, alt: 'Cheese.', altVn: 'Phô mai.' },
              { src: IMAGES.egg, alt: 'Eggs.', altVn: 'Những quả trứng.' },
              { src: IMAGES.yoghurt, alt: 'A bowl of yoghurt.', altVn: 'Một bát sữa chua.' },
            ],
            aIndex: 2,
            a: 'The egg. It comes from a hen. The others are made from milk.',
            aVn: 'Quả trứng. Trứng do gà mái đẻ. Ba thứ kia đều làm từ sữa.',
          },
        ],
      },
      {
        name: 'Dishes from the World',
        nameVn: 'Món Ăn Thế Giới',
        clues: [
          {
            value: 100,
            q: 'Which one is from Vietnam?',
            qVn: 'Món nào đến từ Việt Nam?',
            qImage: { src: IMAGES.flagVietnam, alt: 'The flag of Vietnam.', altVn: 'Quốc kỳ Việt Nam.' },
            qImages: [
              { src: IMAGES.pizza, alt: 'A pizza.', altVn: 'Một chiếc bánh pizza.' },
              { src: IMAGES.banhMi, alt: 'A bánh mì sandwich.', altVn: 'Một ổ bánh mì kẹp.' },
            ],
            aIndex: 1,
            a: 'Bánh mì.',
            aVn: 'Bánh mì.',
          },
          {
            value: 200,
            q: 'Which one is from Italy?',
            qVn: 'Món nào đến từ nước Ý?',
            qImage: { src: IMAGES.flagItaly, alt: 'The flag of Italy.', altVn: 'Quốc kỳ Ý.' },
            qImages: [
              { src: IMAGES.pizza, alt: 'A pizza.', altVn: 'Một chiếc bánh pizza.' },
              { src: IMAGES.springroll, alt: 'Spring rolls.', altVn: 'Nem rán.' },
            ],
            aIndex: 0,
            a: 'Pizza.',
            aVn: 'Bánh pizza.',
          },
          {
            value: 300,
            q: 'Which one is from Japan?',
            qVn: 'Món nào đến từ Nhật Bản?',
            qImage: { src: IMAGES.flagJapan, alt: 'The flag of Japan.', altVn: 'Quốc kỳ Nhật Bản.' },
            qImages: [
              { src: IMAGES.banhMi, alt: 'A bánh mì sandwich.', altVn: 'Một ổ bánh mì kẹp.' },
              { src: IMAGES.sushi, alt: 'A plate of sushi.', altVn: 'Một đĩa sushi.' },
              { src: IMAGES.croissant, alt: 'A croissant.', altVn: 'Một chiếc bánh sừng bò.' },
            ],
            aIndex: 1,
            a: 'Sushi.',
            aVn: 'Sushi.',
          },
          {
            value: 400,
            q: 'Which one is from Korea?',
            qVn: 'Món nào đến từ Hàn Quốc?',
            qImage: { src: IMAGES.flagKorea, alt: 'The flag of South Korea.', altVn: 'Quốc kỳ Hàn Quốc.' },
            qImages: [
              { src: IMAGES.kimchi, alt: 'Kimchi.', altVn: 'Kim chi.' },
              { src: IMAGES.sushi, alt: 'A plate of sushi.', altVn: 'Một đĩa sushi.' },
              { src: IMAGES.pizza, alt: 'A pizza.', altVn: 'Một chiếc bánh pizza.' },
            ],
            aIndex: 0,
            a: 'Kimchi.',
            aVn: 'Kim chi.',
          },
          {
            value: 500,
            q: 'Which one is from France?',
            qVn: 'Món nào đến từ nước Pháp?',
            qImage: { src: IMAGES.flagFrance, alt: 'The flag of France.', altVn: 'Quốc kỳ Pháp.' },
            qImages: [
              { src: IMAGES.noodles, alt: 'A bowl of phở noodle soup.', altVn: 'Một bát phở.' },
              { src: IMAGES.croissant, alt: 'A croissant.', altVn: 'Một chiếc bánh sừng bò.' },
              { src: IMAGES.kimchi, alt: 'Kimchi.', altVn: 'Kim chi.' },
            ],
            aIndex: 1,
            a: 'The croissant. Fun fact: the bread in bánh mì came from France too!',
            aVn: 'Bánh sừng bò. Điều thú vị: bánh mì của chúng ta cũng bắt nguồn từ nước Pháp!',
          },
        ],
      },
      {
        // The word under each picture is English in both languages: it is the
        // English word the class claps.
        name: 'Claps',
        nameVn: 'Vỗ Tay',
        clues: [
          {
            value: 100,
            q: 'How many claps?',
            qVn: 'Vỗ tay mấy cái?',
            qImages: [{ src: IMAGES.tiger, alt: 'A tiger.', altVn: 'Một con hổ.', label: 'tiger', labelVn: 'tiger' }],
            a: '2 claps: ti · ger',
            aVn: '2 cái: ti · ger',
          },
          {
            value: 200,
            q: 'How many claps?',
            qVn: 'Vỗ tay mấy cái?',
            qImages: [{ src: IMAGES.elephant, alt: 'An elephant.', altVn: 'Một con voi.', label: 'elephant', labelVn: 'elephant' }],
            a: '3 claps: el · e · phant',
            aVn: '3 cái: el · e · phant',
          },
          {
            value: 300,
            q: 'Which one has 1 clap?',
            qVn: 'Từ nào chỉ vỗ tay 1 cái?',
            qImages: [
              { src: IMAGES.penguin, alt: 'A penguin.', altVn: 'Một con chim cánh cụt.', label: 'penguin', labelVn: 'penguin' },
              { src: IMAGES.duck, alt: 'Two ducks.', altVn: 'Hai con vịt.', label: 'duck', labelVn: 'duck' },
              { src: IMAGES.turtle, alt: 'A turtle swimming.', altVn: 'Một con rùa đang bơi.', label: 'turtle', labelVn: 'turtle' },
            ],
            aIndex: 1,
            a: 'Duck: 1 clap. Pen · guin and tur · tle have 2.',
            aVn: 'Duck: 1 cái. Pen · guin và tur · tle có 2 cái.',
          },
          {
            value: 400,
            q: 'How many claps?',
            qVn: 'Vỗ tay mấy cái?',
            qImages: [{ src: IMAGES.hippo, alt: 'A hippopotamus.', altVn: 'Một con hà mã.', label: 'hippopotamus', labelVn: 'hippopotamus' }],
            a: '5 claps: hip · po · pot · a · mus',
            aVn: '5 cái: hip · po · pot · a · mus',
          },
          {
            value: 500,
            q: 'How many claps?',
            qVn: 'Vỗ tay mấy cái?',
            qImages: [{ src: IMAGES.fire, alt: 'A campfire burning at night.', altVn: 'Một đống lửa trại cháy trong đêm.', label: 'fire', labelVn: 'fire' }],
            a: '1 clap: fire. It sounds long, but it is one clap.',
            aVn: '1 cái: fire. Nghe thì dài, nhưng chỉ vỗ một cái.',
          },
        ],
      },
      {
        // The pictures never show the real sizes — an ant and a bee fill the
        // same frame — so every one of these has to be answered from what the
        // child knows, not from what they see. The opposites (smaller,
        // lighter) and the -est words are the step up from "bigger".
        name: 'Which Is…?',
        nameVn: 'Cái Nào…?',
        clues: [
          {
            value: 100,
            q: 'Which is smaller?',
            qVn: 'Con nào nhỏ hơn?',
            qImages: [
              { src: IMAGES.bee, alt: 'A bee.', altVn: 'Một con ong.' },
              { src: IMAGES.ant, alt: 'An ant.', altVn: 'Một con kiến.' },
            ],
            aIndex: 1,
            a: 'An ant is smaller than a bee.',
            aVn: 'Con kiến nhỏ hơn con ong.',
          },
          {
            value: 200,
            q: 'Which is the slowest?',
            qVn: 'Con nào chậm nhất?',
            qImages: [
              { src: IMAGES.tiger, alt: 'A tiger.', altVn: 'Một con hổ.' },
              { src: IMAGES.snail, alt: 'A snail.', altVn: 'Một con ốc sên.' },
              { src: IMAGES.turtle, alt: 'A turtle swimming.', altVn: 'Một con rùa đang bơi.' },
            ],
            aIndex: 1,
            a: 'The snail is the slowest.',
            aVn: 'Con ốc sên chậm nhất.',
          },
          {
            value: 300,
            q: 'Which is lighter?',
            qVn: 'Cái nào nhẹ hơn?',
            qImages: [
              { src: IMAGES.whale, alt: 'A whale jumping out of the sea.', altVn: 'Một con cá voi nhảy lên khỏi mặt biển.' },
              { src: IMAGES.bus, alt: 'A yellow bus.', altVn: 'Một chiếc xe buýt màu vàng.' },
            ],
            aIndex: 1,
            a: 'A bus is lighter than a whale.',
            aVn: 'Xe buýt nhẹ hơn cá voi.',
          },
          {
            value: 400,
            q: 'Which is the biggest?',
            qVn: 'Cái nào to nhất?',
            qImages: [
              { src: IMAGES.earth, alt: 'The Earth seen from space.', altVn: 'Trái Đất nhìn từ vũ trụ.' },
              { src: IMAGES.moon, alt: 'The full moon.', altVn: 'Mặt Trăng tròn.' },
              { src: IMAGES.sun, alt: 'The sun.', altVn: 'Mặt Trời.' },
            ],
            aIndex: 2,
            a: 'The sun is the biggest.',
            aVn: 'Mặt Trời to nhất.',
          },
          {
            value: 500,
            q: 'Who is taller?',
            qVn: 'Ai cao hơn?',
            qImages: [
              { src: IMAGES.mrBowen, alt: 'Mr Bowen.', altVn: 'Thầy Bowen.', label: 'Mr Bowen', labelVn: 'Thầy Bowen' },
              { src: IMAGES.mrSeth, alt: 'Mr Seth.', altVn: 'Thầy Seth.', label: 'Mr Seth', labelVn: 'Thầy Seth' },
            ],
            aIndex: 0,
            a: 'Mr Bowen is taller than Mr Seth.',
            aVn: 'Thầy Bowen cao hơn thầy Seth.',
          },
        ],
      },
    ],
  },

  // ── 7 · SCIENCE UNIT 2 ────────────────────────────────────────────────────
  // Science 2.1–2.7, one category per idea rather than per lesson. There is no
  // 2.4 deck, so there is no 2.4 here.
  //
  // This is the Year 7 board that is built on pictures: 29 of the 30 clues
  // carry one. The photographs are the ones from the lessons, so a clue is a
  // memory of a slide. The drawn ones — particle boxes, symbol squares, H₂O,
  // Co and CO, the heating curve and the air pie — put the symbol or the
  // diagram on the card as the thing to read, because in this unit the
  // symbol IS the English.
  {
    id: 'science-u2',
    title: 'Science · Unit 2 · 2.1–2.7',
    titleVn: 'Khoa học · Chương 2 · Bài 2.1–2.7',
    subtitle: 'States, particles, elements, compounds and mixtures',
    subtitleVn: 'Các thể, hạt, nguyên tố, hợp chất và hỗn hợp',
    icon: 'Atom',
    accent: '#e11d48',
    categories: [
      {
        name: 'States of Matter',
        nameVn: 'Các thể của chất',
        clues: [
          {
            value: 100,
            q: 'Ice: solid, liquid or gas? Give one reason.',
            qVn: 'Nước đá: rắn, lỏng hay khí? Nêu một lý do.',
            qImage: { src: IMAGES.ice, alt: 'Ice cubes in a glass of water.', altVn: 'Những viên đá trong ly nước.' },
            a: 'A solid. It keeps its shape. (Or: it keeps its volume. It cannot be poured.)',
            aVn: 'Chất rắn. Nó giữ nguyên hình dạng. (Hoặc: nó giữ nguyên thể tích. Nó không rót được.)',
          },
          {
            value: 200,
            q: 'Mercury is a metal. Is it a solid, a liquid or a gas?',
            qVn: 'Thuỷ ngân là một kim loại. Nó là chất rắn, chất lỏng hay chất khí?',
            qImage: { src: IMAGES.mercury, alt: 'Silver liquid mercury being poured.', altVn: 'Thuỷ ngân lỏng màu bạc đang được rót.' },
            a: 'A liquid. It can be poured, and it takes the shape of its container.',
            aVn: 'Chất lỏng. Nó rót được, và nó có hình dạng của vật chứa nó.',
          },
          {
            value: 300,
            q: 'You can pour sand. So is sand a liquid?',
            qVn: 'Em có thể rót cát. Vậy cát có phải là chất lỏng không?',
            qImage: { src: IMAGES.hourglass, alt: 'Sand pouring through an hourglass.', altVn: 'Cát đang chảy qua một chiếc đồng hồ cát.' },
            a: 'No. Each grain of sand is a solid. Each grain keeps its own shape and volume.',
            aVn: 'Không. Mỗi hạt cát là một chất rắn. Mỗi hạt giữ nguyên hình dạng và thể tích của nó.',
          },
          {
            value: 400,
            q: 'Only one state of matter can be compressed (squashed). Which one?',
            qVn: 'Chỉ có một thể của chất có thể bị nén (ép lại). Đó là thể nào?',
            a: 'A gas. Its particles are far apart, so they can be pushed closer together.',
            aVn: 'Chất khí. Các hạt của nó ở xa nhau, nên có thể bị đẩy lại gần nhau hơn.',
            aImage: { src: IMAGES.balloon, alt: 'A hot-air balloon filling up with gas.', altVn: 'Một khinh khí cầu đang được bơm đầy khí.' },
          },
          {
            value: 500,
            q: 'You can squash a sponge. But a sponge is a solid. How?',
            qVn: 'Em có thể bóp một miếng bọt biển. Nhưng bọt biển là chất rắn. Tại sao bóp được?',
            qImage: { src: IMAGES.sponge, alt: 'A yellow kitchen sponge, full of holes.', altVn: 'Một miếng bọt biển màu vàng, có rất nhiều lỗ.' },
            a: 'A sponge is full of holes, and the holes are full of air. You squash the air — a gas. The solid does not get smaller.',
            aVn: 'Bọt biển có rất nhiều lỗ, và các lỗ chứa đầy không khí. Em đang nén không khí — một chất khí. Phần chất rắn không nhỏ đi.',
          },
        ],
      },
      {
        name: 'Particles',
        nameVn: 'Các hạt',
        clues: [
          {
            value: 100,
            q: 'Solid, liquid or gas?',
            qVn: 'Rắn, lỏng hay khí?',
            qImage: { src: IMAGES.particlesSolid, alt: 'Particles in neat rows, tightly packed and touching.', altVn: 'Các hạt xếp thành hàng ngay ngắn, sát nhau và chạm nhau.' },
            a: 'A solid. The particles are in a fixed pattern, tightly packed.',
            aVn: 'Chất rắn. Các hạt xếp theo một trật tự cố định, sát nhau.',
          },
          {
            value: 200,
            q: 'Solid, liquid or gas?',
            qVn: 'Rắn, lỏng hay khí?',
            qImage: { src: IMAGES.particlesGas, alt: 'A few particles, far apart, spread through the whole box.', altVn: 'Một vài hạt ở xa nhau, rải khắp cả hộp.' },
            a: 'A gas. The particles do not touch. They are far apart.',
            aVn: 'Chất khí. Các hạt không chạm nhau. Chúng ở xa nhau.',
          },
          {
            value: 300,
            q: 'Solid, liquid or gas? Look carefully.',
            qVn: 'Rắn, lỏng hay khí? Nhìn kỹ nhé.',
            qImage: { src: IMAGES.particlesLiquid, alt: 'Particles at the bottom of the box, touching, but not in rows.', altVn: 'Các hạt ở đáy hộp, chạm nhau, nhưng không xếp thành hàng.' },
            a: 'A liquid. The particles still touch, but there is no pattern. They move past one another.',
            aVn: 'Chất lỏng. Các hạt vẫn chạm nhau, nhưng không có trật tự. Chúng di chuyển qua nhau.',
          },
          {
            value: 400,
            q: 'Space is almost empty. What is the word for a space with no particles at all?',
            qVn: 'Vũ trụ gần như trống rỗng. Một khoảng không hoàn toàn không có hạt nào gọi là gì?',
            qImage: { src: IMAGES.earth, alt: 'The Earth seen from space.', altVn: 'Trái Đất nhìn từ vũ trụ.' },
            a: 'A vacuum. A vacuum contains nothing.',
            aVn: 'Chân không (vacuum). Chân không không chứa gì cả.',
          },
          {
            value: 500,
            q: 'Nobody stirs the water, but the ink spreads out. Why? Use the word "particles".',
            qVn: 'Không ai khuấy nước, nhưng mực vẫn lan ra. Tại sao? Hãy dùng từ "particles" (hạt).',
            qImage: { src: IMAGES.diffusion, alt: 'Ink spreading slowly through a glass of water.', altVn: 'Mực đang từ từ lan ra trong một cốc nước.' },
            a: 'The particles in a liquid move past one another. The ink particles move in between the water particles.',
            aVn: 'Các hạt trong chất lỏng di chuyển qua nhau. Các hạt mực đi vào giữa các hạt nước.',
          },
        ],
      },
      {
        name: 'Changes of State',
        nameVn: 'Sự chuyển thể',
        clues: [
          {
            value: 100,
            q: 'Solid to liquid. What is the word?',
            qVn: 'Từ rắn sang lỏng. Từ đó là gì?',
            qImage: { src: IMAGES.meltingIcecream, alt: 'An ice lolly melting into a puddle on hot pavement.', altVn: 'Một que kem đang tan thành vũng nước trên vỉa hè nóng.' },
            a: 'Melt. The ice lolly is melting.',
            aVn: 'Melt (nóng chảy). Que kem đang tan chảy.',
          },
          {
            value: 200,
            q: 'Liquid to gas, fast, at 100 °C. What is the word? What is the gas called?',
            qVn: 'Từ lỏng sang khí, nhanh, ở 100 °C. Từ đó là gì? Chất khí đó gọi là gì?',
            qImage: { src: IMAGES.boilingKettle, alt: 'A kettle boiling, with steam coming out.', altVn: 'Một chiếc ấm đang sôi, hơi nước bốc ra.' },
            a: 'Boil. The gas is steam.',
            aVn: 'Boil (sôi). Chất khí đó là steam (hơi nước).',
          },
          {
            value: 300,
            q: 'Evaporate and boil both change a liquid into a gas. What is the difference?',
            qVn: 'Bay hơi và sôi đều biến chất lỏng thành chất khí. Khác nhau ở đâu?',
            a: 'Evaporation is slow, only from the surface. Boiling is fast, all through the liquid.',
            aVn: 'Bay hơi thì chậm, chỉ ở bề mặt. Sôi thì nhanh, xảy ra khắp chất lỏng.',
          },
          {
            value: 400,
            q: 'Mr Bowen puts ice in a glass of water. Soon the OUTSIDE of the glass is wet. Where does the water come from?',
            qVn: 'Thầy Bowen cho đá vào một cốc nước. Một lúc sau, mặt NGOÀI của cốc bị ướt. Nước đó từ đâu ra?',
            qImage: { src: IMAGES.coldGlass, alt: 'Drops of water on the outside of a cold glass.', altVn: 'Những giọt nước ở mặt ngoài một chiếc cốc lạnh.' },
            a: 'From the air. Water vapour in the air touches the cold glass and condenses into drops. It does not come through the glass.',
            aVn: 'Từ không khí. Hơi nước trong không khí chạm vào cốc lạnh và ngưng tụ thành giọt. Nước không thấm qua thành cốc.',
          },
          {
            value: 500,
            q: 'Water is heated. Why does the line go flat at 100 °C?',
            qVn: 'Nước được đun nóng. Tại sao đường đồ thị đi ngang ở 100 °C?',
            qImage: { src: IMAGES.heatingCurve, alt: 'A graph of temperature against time. The line goes up, then flat at 100.', altVn: 'Đồ thị nhiệt độ theo thời gian. Đường đi lên, rồi đi ngang ở 100.' },
            a: 'The water is boiling. The heat changes the liquid into gas, so the temperature stays the same.',
            aVn: 'Nước đang sôi. Nhiệt làm chất lỏng biến thành khí, nên nhiệt độ giữ nguyên.',
          },
        ],
      },
      {
        name: 'Elements & Symbols',
        nameVn: 'Nguyên tố & Kí hiệu',
        clues: [
          {
            value: 100,
            q: 'Which element is this?',
            qVn: 'Đây là nguyên tố nào?',
            qImage: { src: IMAGES.symbolC, alt: 'A Periodic Table square: number 6, symbol C. The name is hidden.', altVn: 'Một ô trong Bảng tuần hoàn: số 6, kí hiệu C. Tên bị che.' },
            a: 'Carbon. Diamond and graphite (the "lead" in a pencil) are both carbon.',
            aVn: 'Cacbon. Kim cương và than chì ("ruột" bút chì) đều là cacbon.',
            aImage: { src: IMAGES.carbon, alt: 'Graphite and a diamond: two forms of carbon.', altVn: 'Than chì và kim cương: hai dạng của cacbon.' },
          },
          {
            value: 200,
            q: 'In the Periodic Table, what is a row called? What is a column called?',
            qVn: 'Trong Bảng tuần hoàn, một hàng gọi là gì? Một cột gọi là gì?',
            qImage: { src: IMAGES.periodicTable, alt: 'A Periodic Table poster on a classroom wall.', altVn: 'Một tấm áp phích Bảng tuần hoàn trên tường lớp học.' },
            a: 'A row is a period. A column is a group.',
            aVn: 'Một hàng là một chu kì (period). Một cột là một nhóm (group).',
          },
          {
            value: 300,
            q: 'Which is the right way to write the symbol for chlorine?',
            qVn: 'Cách viết nào đúng cho kí hiệu của clo (chlorine)?',
            qImages: [
              { src: IMAGES.symbolClCaps, alt: 'CL, two capital letters.', altVn: 'CL, hai chữ in hoa.' },
              { src: IMAGES.symbolClLower, alt: 'cl, two small letters.', altVn: 'cl, hai chữ thường.' },
              { src: IMAGES.symbolCl, alt: 'Cl, a capital C and a small l.', altVn: 'Cl, chữ C in hoa và chữ l thường.' },
            ],
            aIndex: 2,
            a: 'Cl. The first letter is a capital. The second letter is small.',
            aVn: 'Cl. Chữ cái đầu viết hoa. Chữ cái thứ hai viết thường.',
          },
          {
            value: 400,
            q: 'This is sodium. Its symbol is Na. Where does "Na" come from?',
            qVn: 'Đây là natri (sodium). Kí hiệu của nó là Na. "Na" từ đâu mà có?',
            qImage: { src: IMAGES.sodium, alt: 'Freshly cut chunks of sodium metal.', altVn: 'Những miếng kim loại natri vừa được cắt.' },
            a: 'From "natrium", the old Latin name for sodium.',
            aVn: 'Từ "natrium", tên La-tinh cổ của sodium.',
          },
          {
            value: 500,
            q: 'Co and CO. What is the difference?',
            qVn: 'Co và CO. Khác nhau thế nào?',
            qImage: { src: IMAGES.coVsCo, alt: 'Two squares: Co, and CO.', altVn: 'Hai ô: Co và CO.' },
            a: 'Co is one element: cobalt, a metal. CO is a compound: carbon monoxide — one carbon atom and one oxygen atom.',
            aVn: 'Co là một nguyên tố: coban, một kim loại. CO là một hợp chất: cacbon monoxit — một nguyên tử cacbon và một nguyên tử oxi.',
          },
        ],
      },
      {
        name: 'Compounds & Formulae',
        nameVn: 'Hợp chất & Công thức',
        clues: [
          {
            value: 100,
            q: 'What compound is this? How many atoms of each element?',
            qVn: 'Đây là hợp chất gì? Có bao nhiêu nguyên tử của mỗi nguyên tố?',
            qImage: { src: IMAGES.formulaH2o, alt: 'The formula H₂O.', altVn: 'Công thức H₂O.' },
            a: 'Water. Two hydrogen atoms and one oxygen atom.',
            aVn: 'Nước. Hai nguyên tử hiđro và một nguyên tử oxi.',
            aImage: { src: IMAGES.glassOfWater, alt: 'A glass of water.', altVn: 'Một cốc nước.' },
          },
          {
            value: 200,
            q: 'Salt is sodium chloride. Write its formula.',
            qVn: 'Muối là natri clorua (sodium chloride). Hãy viết công thức của nó.',
            qImage: { src: IMAGES.saltShaker, alt: 'A salt shaker full of table salt.', altVn: 'Một lọ rắc muối đầy muối ăn.' },
            a: 'NaCl. One sodium atom, one chlorine atom.',
            aVn: 'NaCl. Một nguyên tử natri, một nguyên tử clo.',
          },
          {
            value: 300,
            q: 'Dry ice is solid carbon dioxide. Write its formula.',
            qVn: 'Đá khô là cacbon đioxit (carbon dioxide) ở thể rắn. Hãy viết công thức của nó.',
            qImage: { src: IMAGES.dryIce, alt: 'White pellets of dry ice, smoking.', altVn: 'Những viên đá khô màu trắng đang bốc khói.' },
            a: 'CO₂. "Di" means two: two oxygen atoms.',
            aVn: 'CO₂. "Di" nghĩa là hai: hai nguyên tử oxi.',
          },
          {
            value: 400,
            q: 'Chlorine is a poisonous gas. Sodium is a dangerous metal. Bond them together. What do you get?',
            qVn: 'Clo là một chất khí độc. Natri là một kim loại nguy hiểm. Cho chúng liên kết với nhau. Em được chất gì?',
            qImage: { src: IMAGES.chlorine, alt: 'Yellow-green chlorine gas in a glass jar.', altVn: 'Khí clo màu vàng lục trong một bình thuỷ tinh.' },
            a: 'Salt — and you can eat it. A compound has new properties. It is not like its elements.',
            aVn: 'Muối — và em ăn được. Hợp chất có tính chất mới. Nó không giống các nguyên tố tạo ra nó.',
            aImage: { src: IMAGES.saltField, alt: 'Harvesting salt at a salt field in Phú Yên, Vietnam.', altVn: 'Thu hoạch muối trên cánh đồng muối ở Phú Yên, Việt Nam.' },
          },
          {
            value: 500,
            q: 'Copper sulfate. Name the THREE elements in it.',
            qVn: 'Đồng sunfat (copper sulfate). Kể tên BA nguyên tố có trong nó.',
            qImage: { src: IMAGES.copperSulfate, alt: 'Bright blue crystals of copper sulfate.', altVn: 'Những tinh thể đồng sunfat màu xanh lam.' },
            a: 'Copper, sulfur and oxygen. A name that ends in "-ate" has oxygen in it too.',
            aVn: 'Đồng, lưu huỳnh và oxi. Tên kết thúc bằng "-ate" thì có cả oxi.',
          },
        ],
      },
      {
        name: 'Compound or Mixture?',
        nameVn: 'Hợp chất hay hỗn hợp?',
        clues: [
          {
            value: 100,
            q: 'A magnet pulls the iron away from the sulfur. Compound or mixture?',
            qVn: 'Nam châm hút sắt ra khỏi lưu huỳnh. Hợp chất hay hỗn hợp?',
            qImage: { src: IMAGES.magnet, alt: 'A magnet covered in iron filings, lifted out of yellow sulfur.', altVn: 'Một thanh nam châm dính đầy mạt sắt, nhấc ra khỏi bột lưu huỳnh màu vàng.' },
            a: 'A mixture. The iron is still iron. The iron and sulfur are not bonded.',
            aVn: 'Hỗn hợp. Sắt vẫn là sắt. Sắt và lưu huỳnh không liên kết với nhau.',
          },
          {
            value: 200,
            q: 'Now heat the iron and sulfur. They make a new substance. What is its name?',
            qVn: 'Bây giờ đun nóng sắt và lưu huỳnh. Chúng tạo thành một chất mới. Tên của nó là gì?',
            a: 'Iron sulfide, a compound. The metal comes first. The non-metal ends in "-ide".',
            aVn: 'Sắt sunfua (iron sulfide), một hợp chất. Kim loại đứng trước. Phi kim kết thúc bằng "-ide".',
            aImage: { src: IMAGES.ironSulfide, alt: 'Iron sulfide: a dark grey solid.', altVn: 'Sắt sunfua: một chất rắn màu xám đen.' },
          },
          {
            value: 300,
            q: 'Air is a mixture. Which gas is 78%? Which gas is 21%?',
            qVn: 'Không khí là một hỗn hợp. Khí nào chiếm 78%? Khí nào chiếm 21%?',
            qImage: { src: IMAGES.airPie, alt: 'A pie chart of the air: 78%, 21% and 1%. The names are hidden.', altVn: 'Biểu đồ tròn của không khí: 78%, 21% và 1%. Tên các khí bị che.' },
            a: 'Nitrogen is 78%. Oxygen is 21%. Other gases are 1%.',
            aVn: 'Nitơ chiếm 78%. Oxi chiếm 21%. Các khí khác chiếm 1%.',
          },
          {
            value: 400,
            q: 'Motorbikes burn petrol. Which gas do they put into the air? Give its name and its formula.',
            qVn: 'Xe máy đốt xăng. Chúng thải vào không khí khí gì? Nêu tên và công thức của nó.',
            qImage: { src: IMAGES.traffic, alt: 'Motorbike traffic in Hanoi.', altVn: 'Dòng xe máy ở Hà Nội.' },
            a: 'Carbon dioxide, CO₂.',
            aVn: 'Cacbon đioxit, CO₂.',
          },
          {
            value: 500,
            q: 'You boil tap water away in an evaporating basin. A white solid is left. Was the tap water pure?',
            qVn: 'Em đun cho nước máy bay hơi hết trong một bát sứ (evaporating basin). Còn lại một chất rắn màu trắng. Nước máy có tinh khiết (pure) không?',
            qImage: { src: IMAGES.basin, alt: 'Three white evaporating basins.', altVn: 'Ba chiếc bát sứ trắng dùng để làm bay hơi.' },
            a: 'No. Pure water is only water. Tap water is a mixture: water and minerals. The same white solid builds up inside a kettle.',
            aVn: 'Không. Nước tinh khiết chỉ có nước. Nước máy là một hỗn hợp: nước và khoáng chất. Chất rắn trắng đó cũng bám bên trong ấm đun nước.',
            aImage: { src: IMAGES.limescale, alt: 'White limescale inside an electric kettle.', altVn: 'Cặn trắng bám bên trong một ấm đun nước điện.' },
          },
        ],
      },
    ],
  },
]
