// content/games/G03_jeopardy-finale/boards.js
// One Jeopardy board: the second half of Unit 1, plus two rounds of trivia.
//
//   Maths 1.4   — factors and the highest common factor
//   Maths 1.5   — tests for divisibility
//   Maths 1.6   — squares, cubes and their roots
//   Science 1.4 — cells, tissues, organs, organ systems, organisms
//   plus Animal Records and Big Numbers, Weird Facts
//
// The four teaching categories are drawn from what those decks actually
// taught — the same numbers, the same traps, the same worked examples — so a
// team that revised can win. Where a lesson had a trap in it (HCF(8, 9) is 1
// and not "none", even is not enough for 6, the small 2 in 5² does not double,
// a leaf is an organ), the trap is here too.
//
// The last two categories are not filler. They exist so that the teams who
// find the maths hardest still get to shout a right answer in English, and
// they are still worked in English: a full sentence, a reason, a number.
//
// A clue is { value, q, qVn, a, aVn }. Nothing here goes through
// `parseInlineText` — the widget prints these as plain text — but the house
// rule still holds: write "dollars", never a dollar sign, and use the Unicode
// minus (−) so a negative number reads as a number and not as a hyphen.

export const BOARDS = [
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
          },
          {
            value: 200,
            q: 'What is the fastest animal in the world? It is not the cheetah.',
            qVn: 'Loài động vật nhanh nhất thế giới là loài nào? Không phải báo săn đâu.',
            a: 'The peregrine falcon, which dives at about 390 km/h. The cheetah is the fastest on LAND, at about 110 km/h.',
            aVn: 'Chim cắt lớn, lao xuống với tốc độ khoảng 390 km/h. Báo săn chỉ nhanh nhất TRÊN CẠN, khoảng 110 km/h.',
          },
          {
            value: 300,
            q: 'A giraffe has a neck about two metres long. How many neck bones does it have — and how many have you got?',
            qVn: 'Hươu cao cổ có chiếc cổ dài khoảng hai mét. Nó có bao nhiêu đốt xương cổ — còn em có bao nhiêu?',
            a: 'Seven each. The giraffe has exactly the same number as you; its bones are simply enormous.',
            aVn: 'Cả hai đều có bảy. Hươu cao cổ có đúng bằng số của em; chỉ là mỗi đốt xương của nó to khổng lồ.',
          },
          {
            value: 400,
            q: 'Which animal has three hearts and blue blood?',
            qVn: 'Loài vật nào có ba trái tim và máu màu xanh?',
            a: 'The octopus. Two hearts push blood through the gills and one pushes it round the body; its blood carries copper instead of iron, so it is blue, not red.',
            aVn: 'Bạch tuộc. Hai tim đẩy máu qua mang, một tim đẩy máu đi khắp cơ thể; máu của nó chứa đồng thay vì sắt, nên có màu xanh chứ không đỏ.',
          },
          {
            value: 500,
            q: 'One animal survives being frozen solid, dried out completely, and even the vacuum of space — but you need a microscope to see it. What is it?',
            qVn: 'Có một loài vật sống sót qua cả việc bị đông cứng, khô kiệt hoàn toàn, và cả chân không ngoài vũ trụ — nhưng phải dùng kính hiển vi mới nhìn thấy nó. Đó là con gì?',
            a: 'The tardigrade, or water bear — under a millimetre long. Some were carried into orbit in 2007, exposed to open space, and came back alive.',
            aVn: 'Gấu nước (tardigrade) — dài chưa tới một milimét. Năm 2007 người ta đưa chúng lên quỹ đạo, phơi ra ngoài không gian, và chúng vẫn sống sót trở về.',
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
