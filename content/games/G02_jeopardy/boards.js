// content/games/G02_jeopardy/boards.js
// Four Jeopardy boards, six categories of five clues each.
//
//   1. Mathematics 1.1–1.3   — integers, sign rules, multiples and the LCM
//   2. Science 1.1–1.3       — cells, plant vs animal, specialised cells
//   3. Revision              — one category per unit, all six units, fresh clues
//   4. Unit 1 Finale         — Maths 1.4–1.6, Science 1.4, and two trivia rounds
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
// while the teams argue. Only Board 4 uses pictures so far; the field works on
// any board.
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
]
