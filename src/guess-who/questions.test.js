// src/guess-who/questions.test.js
// The question ideas' matcher and picker (questions.js), on the kind of thing a
// Year 7 actually types: missing words, wrong verb forms, spelling slips, no
// question mark. Run with `npm test` (Node's own test runner, no packages).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { topicsIn, lettersAsked, suggestions, coveredTopics, fixedQuestions, stem } from './questions.js'
import { MONSTERS } from './game.js'

const covers = (text, id, board = 'school') =>
  assert.ok(topicsIn(text, board).includes(id), `"${text}" should cover ${id}; got [${topicsIn(text, board)}]`)
const missing = (text, id, board = 'school') =>
  assert.ok(!topicsIn(text, board).includes(id), `"${text}" should not cover ${id}; got [${topicsIn(text, board)}]`)

test('stems meet across word endings', () => {
  for (const [a, b] of [['glasses', 'glass'], ['smiling', 'smile'], ['smiled', 'smile'], ['horns', 'horn'], ['flies', 'fly'], ['flying', 'fly'], ['wearing', 'wear'], ['hairs', 'hair'], ['earrings', 'earring']]) {
    assert.equal(stem(a), stem(b), `${a} / ${b}`)
  }
  assert.notEqual(stem('tied'), stem('tie'))
})

test('boy or girl: any of the words covers both', () => {
  for (const q of ['Is your person a boy?', 'is your person girl', 'Is it a girls', 'Is your person male?', 'Is your person a female', 'Is your person a man?', 'Is your person woman', 'IS YOUR PERSON A BOY???', 'Your person is boy?']) covers(q, 'gender')
  // A pronoun is not a question about it.
  for (const q of ['Does he wear glasses?', 'Does she have long hair?', 'Is his name start with A?']) missing(q, 'gender')
})

test('glasses, spelling slips and all', () => {
  for (const q of ['Does your person wear glasses?', 'does he have glases', 'Does your person wear glass?', 'Is your person wear glasess', 'Does your person has galsses?', 'Does your person wear spectacles?', 'spectecles?', 'Does your person wear sunglasses?']) covers(q, 'glasses')
  // Real words are never slips: classes is not glasses.
  missing('Is your person in Year 7 classes?', 'glasses')
  missing('Is your person in class 7?', 'glasses')
})

test('hair: length, colour, style and fringe stay apart', () => {
  covers('Does your person have long hair?', 'hairLength')
  covers('Does your person have short hairs?', 'hairLength')
  covers('Is your person hair long', 'hairLength')
  covers('Is your person have long hiar?', 'hairLength')
  covers('Is your person bald?', 'hairLength')
  missing('Does your person have black hair?', 'hairLength')
  covers('Does your person have black hair?', 'hairColour')
  covers('Is your person blonde?', 'hairColour')
  covers("Is your person's hair long and black?", 'hairLength')
  covers("Is your person's hair long and black?", 'hairColour')
  covers('Does your person have a fringe?', 'fringe')
  covers('does your person have bangs', 'fringe')
  covers('Does your person have a frindge?', 'fringe')
  covers('Does your person have a ponytail?', 'hairStyle')
  covers('Does your person have curly hair?', 'hairStyle')
  missing('Does your person have curly hair?', 'hairLength')
})

test('short and shirt are both real words', () => {
  missing('Does your person have short hair?', 'clothes')
  missing('Is your person wearing a shirt?', 'hairLength')
  covers('Is your person wearing a white shirt?', 'clothes')
  missing('Is your person wearing a white shirt?', 'hairColour')
  covers('Is your person wearing a T-shirt?', 'clothes')
  covers('Is your person wear uniform?', 'clothes')
  covers('Is your person wearing a school uniforn?', 'clothes')
})

test('school stage and year group', () => {
  covers('Is your person in primary school?', 'stage')
  covers('Is your person in primery?', 'stage')
  covers('Is your person in secondry school?', 'stage')
  covers('Is your person in high school?', 'stage')
  missing('Is your person in Year 7?', 'stage')
  for (const q of ['Is your person in Year 7?', 'is your person year 5', 'Is your person in grade 3?', 'Is your person in Y7?', 'Is your person in year seven?', 'Is your person in class 7?', 'Is your person in Year7']) covers(q, 'year')
  covers('Is your person in Kindergarten?', 'year')
  covers('Is your person in Kindergarten?', 'stage')
  // "12 years old" is an age, not a year group.
  missing('Is your person 12 years old?', 'year')
  covers('Is your person 12 years old?', 'age')
})

test('age', () => {
  for (const q of ['Is your person older than 10?', 'Is your person older then 10', 'Is your person younger than 9?', 'Is your person 12?', 'Is he 11 years old?', 'Was your person born in 2014?', 'Is your person yonger than 8?']) covers(q, 'age')
  missing('Is your person in Year 7?', 'age')
  missing("Does your person's name have 5 letters?", 'age')
})

test('first letters retire one letter at a time', () => {
  assert.deepEqual(lettersAsked('Does it start with A?'), ['a'])
  assert.deepEqual(lettersAsked("Does your person's name start with K?"), ['k'])
  assert.deepEqual(lettersAsked('Does their name begin with a B?'), ['b'])
  assert.deepEqual(lettersAsked('does your person name start with letter m'), ['m'])
  assert.deepEqual(lettersAsked('Does your person name starts by H'), ['h'])
  assert.deepEqual(lettersAsked("Is the first letter of your person's name A?"), ['a'])
  assert.deepEqual(lettersAsked('Does the name start with "T"?'), ['t'])
  assert.deepEqual(lettersAsked('Does it start with A or B?'), ['a', 'b'])
  assert.deepEqual(lettersAsked('Does it start with I?'), ['i'])
  assert.deepEqual(lettersAsked('Does the name begin with M and end with H?'), ['m'])
  // Not about a first letter, or no single letter in it.
  assert.deepEqual(lettersAsked('Does the name end with A?'), [])
  assert.deepEqual(lettersAsked('Does their name start with a vowel?'), [])
  assert.deepEqual(lettersAsked('Is your person a boy?'), [])
  assert.deepEqual(lettersAsked('Is your person first name Minh?'), [])
  assert.deepEqual(lettersAsked('Does it start with Ng?'), [])
  covers('Does it start with A?', 'letter:a')
  missing('Does it start with A?', 'letter:b')
  missing('Does it start with A?', 'gender')
})

test('name length is not a first letter', () => {
  covers("Does your person's name have more than 4 letters?", 'nameLength')
  covers('Does your person have a long name?', 'nameLength')
  missing('Does your person have long hair?', 'nameLength')
  missing('Does the name start with the letter K?', 'nameLength')
})

test('smiling, teeth, tie, earrings', () => {
  for (const q of ['Is your person smiling?', 'Is your person smile?', 'Is your person simling', 'Is your person happy?']) covers(q, 'smile')
  covers('Can you see your person teeth?', 'teeth')
  covers('Is your person wearing a tie?', 'tie')
  missing('Is your person hair tied?', 'tie')
  covers('Does your person wear earing?', 'jewellery')
  // A short stem is not a slip: ears are not earrings.
  missing('Does your person have big ears?', 'jewellery')
})

test('monster board', () => {
  const m = (q, id) => covers(q, id, 'monsters')
  m('Can your monster fly?', 'fly')
  m('can it flying', 'fly')
  m('Does your monster has wing?', 'wings')
  m('Does it have horn', 'horns')
  m('Is your monster green colour?', 'colour')
  m('Is it purple', 'colour')
  m('Is your monster a animal?', 'animal')
  m('Is your monster animals', 'animal')
  m('Is your monster a person?', 'person')
  m('Is it a man?', 'person')
  m('Does your monster wear hat?', 'hat')
  m('Does your monster have 4 legs?', 'legs')
  m('Does your monster have a tail?', 'tail')
  m('Can your monster do magic?', 'magic')
  // Habit from the students' board: "your person" is not "a person".
  missing('Is your person green?', 'person', 'monsters')
  covers('Is your person green?', 'colour', 'monsters')
  // Student topics are not monster topics.
  missing('Does your monster wear glasses?', 'glasses', 'monsters')
})

test('every model question covers its own topic', () => {
  for (const board of ['school', 'monsters']) {
    for (const { id, q } of fixedQuestions(board)) covers(q, id, board)
  }
})

// A small whole-school board.
const kids = [
  { name: 'Linh', gender: 'Girl', level: 'Year 7', age: 12 },
  { name: 'Minh', gender: 'Boy', level: 'Year 7', age: 12 },
  { name: 'Khoa', gender: 'Boy', level: 'Year 3', age: 8 },
  { name: 'An', gender: 'Girl', level: 'Year 3', age: 8 },
  { name: 'Mai', gender: 'Girl', level: 'Kindergarten', age: 5 },
  { name: 'Đức', gender: 'Boy', level: 'Year 9', age: 14 },
  { name: 'Kim', gender: 'Girl', level: 'Year 5', age: 10 },
  { name: 'Nam', gender: 'Boy', level: 'Year 1', age: 6 },
]

test('three ideas, one per family, the same every time', () => {
  const a = suggestions({ board: 'school', asked: [], faces: kids, game: 3 })
  const b = suggestions({ board: 'school', asked: [], faces: kids, game: 3 })
  assert.equal(a.length, 3)
  assert.deepEqual(a, b)
  const families = a.map((q) => (/hair|fringe|ponytail|clip/i.test(q) ? 'hair' : /school|Year|Nursery|Kindergarten/.test(q) ? 'school' : q))
  assert.equal(new Set(families).size, 3)
})

test('dynamic ideas cover their own topic, and asking one retires it', () => {
  for (let game = 0; game < 40; game++) {
    const asked = []
    for (let round = 0; round < 40; round++) {
      const ideas = suggestions({ board: 'school', asked, faces: kids, game })
      if (!ideas.length) break
      const before = coveredTopics(asked).size
      asked.push(ideas[0])
      assert.ok(coveredTopics(asked).size > before, `"${ideas[0]}" covered nothing new`)
      assert.ok(!suggestions({ board: 'school', asked, faces: kids, game }).includes(ideas[0]), `"${ideas[0]}" came back`)
    }
  }
})

test('typing a keyword retires the whole topic', () => {
  const asked = ['is it a boy']
  for (let game = 0; game < 30; game++) {
    const ideas = suggestions({ board: 'school', asked, faces: kids, game, count: 20 })
    assert.ok(!ideas.some((q) => /a (boy|girl)\?/.test(q)), ideas.join(' | '))
  }
})

test('ideas fit the faces still up', () => {
  const myClass = kids.map((k) => ({ ...k, level: 'Year 7', age: 12 }))
  const all = suggestions({ board: 'school', faces: myClass, count: 30 })
  assert.ok(!all.some((q) => /Year|school\?|Kindergarten|older than/.test(q)), all.join(' | '))
  const girls = kids.filter((k) => k.gender === 'Girl')
  assert.ok(!suggestions({ board: 'school', faces: girls, count: 30 }).some((q) => /a (boy|girl)\?/.test(q)))
  // Letters only where a name up starts with one, and never one they all share.
  const letters = (faces, asked = []) => suggestions({ board: 'school', faces, asked, count: 30 }).filter((q) => /start with/.test(q))
  assert.deepEqual(letters(kids), ['Does your person\'s name start with K?'])
  assert.deepEqual(letters(kids, ['Does it start with K?']), ['Does your person\'s name start with M?'])
  assert.deepEqual(letters(kids.filter((k) => k.name.startsWith('K'))), [])
  // Đức counts as D.
  assert.deepEqual(letters([kids[5], kids[0]], []), ['Does your person\'s name start with D?'])
})

test('the ideas run dry', () => {
  for (const board of ['school', 'monsters']) {
    const faces = board === 'monsters' ? MONSTERS : kids
    const asked = []
    for (let i = 0; i < 200 && suggestions({ board, asked, faces }).length; i++) asked.push(suggestions({ board, asked, faces })[0])
    assert.deepEqual(suggestions({ board, asked, faces }), [])
    assert.ok(asked.length > 12, `${board}: only ${asked.length} ideas`)
  }
})

test('monster ideas include first letters, and flying and wings take turns', () => {
  const ideas = suggestions({ board: 'monsters', faces: MONSTERS, count: 30 })
  assert.ok(ideas.some((q) => /^Does your monster's name start with [A-Z]\?$/.test(q)), ideas.join(' | '))
  assert.ok(!ideas.some((q) => /person/.test(q.replace('a person?', ''))), ideas.join(' | '))
  for (let game = 0; game < 30; game++) {
    const three = suggestions({ board: 'monsters', faces: MONSTERS, game })
    assert.ok(!(three.includes('Can your monster fly?') && three.includes('Does your monster have wings?')), three.join(' | '))
  }
})

test('a first letter is sometimes among the first three', () => {
  const games = Array.from({ length: 20 }, (_, game) => suggestions({ board: 'school', faces: kids, game }))
  assert.ok(games.some((three) => three.some((q) => /start with/.test(q))))
  assert.ok(games.some((three) => three.some((q) => /a (boy|girl)\?/.test(q))))
})
