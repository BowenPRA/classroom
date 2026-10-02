// content/banks/y7-math/bank.js
// The Year 7 maths question bank: short questions with short answers, for any
// game that wants one at a time — Around the World first, Jeopardy later.
//
// NOTHING IN content/banks IS CALLED index.js, AND NOTHING EVER SHOULD BE.
// registry.js turns every content/<x>/<y>/index.js into a lesson, so an index
// file here would put the bank on the site as a broken deck. Games import this
// file by name instead.
//
// One file per deck, named after the deck's folder. 3.1 and 3.2 were taught as
// one deck, so they share a file, but each question carries its own section,
// and a game can offer them separately or together.
//
// A question:
//
//   {
//     id: 'm1.1-07',     stable and never reused; 'm' leaves room for 's' later
//     unit: '1.1',       the section, as the book numbers it
//     level: 2,          1 one step or recall · 2 the unit's core skill, or a
//                        short word problem in its wording · 3 the trap, or two
//                        steps. For Jeopardy: 100 → 1, 200–300 → 2, 400–500 → 3
//     kind: 'words',     'calc' a bare calculation · 'words' the English is part
//                        of the question
//     q, qVn,            the question
//     a, aVn,            the answer, short enough to read from the back row
//     why, whyVn,        optional: one line shown with the answer on the reveal
//     source,            where it came from: 'deck 1.1 s9' (slide 9 of that
//                        deck) · 'WB 2.3 ex 2' (Workbook exercise) · 'hw02 B2a'
//                        or 'q1rev A4c' (the packet's own question label) ·
//                        'jeopardy maths · Multiples & the LCM 400' (board id,
//                        category, value) — plus ' (adapted)' when the numbers
//                        or the story changed
//     check,             optional, read only by `npm run check:bank`: the sum it
//                        recomputes and compares with `a` (see scripts/bank-check.mjs)
//   }
//
// Every string is plain text. Nothing here goes through parseInlineText or
// KaTeX: use the Unicode minus (−), × and ÷, ² and ³, and never a dollar sign.
// Decimals take a point in both languages, as the 3.1–3.2 deck writes them.
//
// Where the English IS the question ("Subtract 5 from 8"), the Vietnamese twin
// keeps that phrase in English, in quotes, and translates only the instruction
// around it. Translating the phrase would answer the question.
import { QUESTIONS as U01_1 } from './U01_1.js'
import { QUESTIONS as U01_2 } from './U01_2.js'
import { QUESTIONS as U01_3 } from './U01_3.js'
import { QUESTIONS as U01_4 } from './U01_4.js'
import { QUESTIONS as U01_5 } from './U01_5.js'
import { QUESTIONS as U01_6 } from './U01_6.js'
import { QUESTIONS as U02_1 } from './U02_1.js'
import { QUESTIONS as U02_2 } from './U02_2.js'
import { QUESTIONS as U02_3 } from './U02_3.js'
import { QUESTIONS as U02_4 } from './U02_4.js'
import { QUESTIONS as U02_5 } from './U02_5.js'
import { QUESTIONS as U02_6 } from './U02_6.js'
import { QUESTIONS as U03_1_2 } from './U03_1_2.js'

// The lesson course this bank was written from. Every `deck` below is a folder
// in content/<COURSE>/.
export const COURSE = 'y7-math'

// The units a game can filter by, in teaching order.
export const UNITS = [
  { unit: '1.1', deck: 'U01_1', title: 'Adding & subtracting integers', titleVn: 'Cộng và trừ số nguyên' },
  { unit: '1.2', deck: 'U01_2', title: 'Multiplying & dividing integers', titleVn: 'Nhân và chia số nguyên' },
  { unit: '1.3', deck: 'U01_3', title: 'Lowest common multiples', titleVn: 'Bội số chung nhỏ nhất' },
  { unit: '1.4', deck: 'U01_4', title: 'Highest common factors', titleVn: 'Ước số chung lớn nhất' },
  { unit: '1.5', deck: 'U01_5', title: 'Tests for divisibility', titleVn: 'Dấu hiệu chia hết' },
  { unit: '1.6', deck: 'U01_6', title: 'Square roots & cube roots', titleVn: 'Căn bậc hai và căn bậc ba' },
  { unit: '2.1', deck: 'U02_1', title: 'Constructing expressions', titleVn: 'Xây dựng biểu thức' },
  { unit: '2.2', deck: 'U02_2', title: 'Expressions & formulae', titleVn: 'Biểu thức và công thức' },
  { unit: '2.3', deck: 'U02_3', title: 'Collecting like terms', titleVn: 'Thu gọn hạng tử đồng dạng' },
  { unit: '2.4', deck: 'U02_4', title: 'Expanding brackets', titleVn: 'Khai triển dấu ngoặc' },
  { unit: '2.5', deck: 'U02_5', title: 'Equations', titleVn: 'Phương trình' },
  { unit: '2.6', deck: 'U02_6', title: 'Inequalities', titleVn: 'Bất đẳng thức' },
  { unit: '3.1', deck: 'U03_1_2', title: 'Place value & powers of 10', titleVn: 'Giá trị theo vị trí và lũy thừa của 10' },
  { unit: '3.2', deck: 'U03_1_2', title: 'Rounding', titleVn: 'Làm tròn' },
]

export const QUESTIONS = [
  ...U01_1, ...U01_2, ...U01_3, ...U01_4, ...U01_5, ...U01_6,
  ...U02_1, ...U02_2, ...U02_3, ...U02_4, ...U02_5, ...U02_6,
  ...U03_1_2,
]
