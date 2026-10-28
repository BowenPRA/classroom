// src/guess-who/questions.js
// The ideas under the board's question box. Typing their own question is the
// point (it is English practice), so these are a helping hand: three model
// questions at a time, each one about something the player has not asked yet.
//
// Every idea belongs to a topic, and a topic is covered as soon as any question
// mentions it — tapped or typed, in any wording a Year 7 might use. "Is she a
// girl?" covers boy-or-girl, so neither "Is your person a boy?" nor "Is your
// person a girl?" comes back. First letters are the exception: each letter is a
// topic of its own, so asking about A leaves B on offer.
//
// Some ideas are built from the faces still up: boy or girl, school stage, year
// group, age, first letter and name length appear only while they would split
// the faces left, so a My class board (all Year 7) never suggests "Is your
// person in Year 7?". The rest (glasses, hair, smiling…) cannot be seen in the
// data, and stay on offer until asked.
//
// Pure and deterministic, with no React in it: questions.test.js covers it.
import { fold } from './match.js'

// ── Reading a typed question ────────────────────────────────────────────────

const NUMBER_WORDS = {
  one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9', ten: '10',
  eleven: '11', twelve: '12', thirteen: '13', fourteen: '14', fifteen: '15', sixteen: '16', seventeen: '17', eighteen: '18',
}

/**
 * A question as plain words: lower case, no accents or punctuation, "person's"
 * as "person" (so its s is never read as a letter), number words as digits.
 */
export function words(text) {
  const s = String(text || '').replace(/([a-z0-9])['’‘`´]s\b/gi, '$1')
  return fold(s).split(' ').filter(Boolean).map((w) => NUMBER_WORDS[w] || w)
}

/** A plural made singular: "classes" → "class", "flies" → "fly", "horns" → "horn". */
function singular(w) {
  if (w.length > 4 && w.endsWith('ies')) return `${w.slice(0, -3)}y`
  if (w.length > 4 && w.endsWith('sses')) return w.slice(0, -2)
  if (w.length > 4 && /(x|ch|sh|z)es$/.test(w)) return w.slice(0, -2)
  if (w.length > 3 && w.endsWith('s') && !/(ss|us|is)$/.test(w)) return w.slice(0, -1)
  return w
}

/**
 * A word's stem, so "glasses", "smiling", "horns" and "flies" meet "glass",
 * "smile", "horn" and "fly". Deliberately small: plurals, -ing, -ed and a final
 * e. A keyword and a typed word are stemmed the same way, so the stem only has
 * to be consistent, not correct.
 */
export function stem(w) {
  let s = singular(w)
  if (s.length > 5 && s.endsWith('ing')) s = s.slice(0, -3)
  else if (s.length > 4 && s.endsWith('ed')) s = s.slice(0, -2)
  if (s.length >= 5 && s.endsWith('e')) s = s.slice(0, -1)
  return s
}

/** Edits between two short words, a swap of neighbours counting as one; anything over `cap` reports cap + 1. */
function edits(a, b, cap) {
  if (Math.abs(a.length - b.length) > cap) return cap + 1
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)])
  for (let j = 1; j <= b.length; j++) d[0][j] = j
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1)
    }
  }
  return Math.min(d[a.length][b.length], cap + 1)
}

// Words a question is made of. They, and every keyword, are spelled right by
// definition: "short" is never a slip for "shirt", nor "classes" for "glasses".
const COMMON = `your you person people monster it its he she his her him they them their does do did is are was be
  have has had wear wearing the a an this that name start with can could of in on at or and not no yes school than more
  less big small little like look see show very any some what who which how many much there got get letter word from live
  eat kind type one by for to as so ear eye nose mouth face head tall fat thin`.split(/\s+/)

// ── Topics ──────────────────────────────────────────────────────────────────
// `keys`: words or phrases, any one of which covers the topic. `all`: groups of
// words that cover it together ("long" and "hair"). `test`: anything a word
// list cannot say. `ask`: the model questions, one shown at a time; or `make`,
// which builds one from the faces still up (or returns null).
// `family`: topics shown one at a time (one hair idea, one school idea).
// Ranked by `tier`, best first; each game shuffles within a tier.

const HAIR = ['hair', 'haircut', 'hairstyle']
const COLOURS = ['black', 'brown', 'blonde', 'blond', 'red', 'ginger', 'grey', 'gray', 'white', 'yellow', 'orange', 'golden', 'dyed', 'colour', 'color', 'coloured', 'colored']
const AGE_KEYS = ['old', 'older', 'oldest', 'young', 'younger', 'youngest', 'age', 'aged', 'born', 'birthday']
// A bare number after these is an age: "Is your person 12?", "Is he 11?".
const AGE_BEFORE = new Set(['person', 'he', 'she', 'it', 'they', 'is', 'are', 'be', 'about', 'over', 'under', 'than'])

const isNumber = (w) => /^\d{1,2}$/.test(w)
/** Is `w` one of `list`, stem for stem? */
const among = (w, list) => list.some((k) => stem(k) === stem(w))
const YEAR_WORDS = ['year', 'yr', 'grade', 'class', 'lop']

/** "Year 7", "grade 5", "class 7", "Y7", "year seven". */
function asksYear(ws) {
  return ws.some((w, i) => /^(y|yr|year|grade|class|lop)\d{1,2}$/.test(w) || (among(w, YEAR_WORDS) && isNumber(ws[i + 1] || '')))
}

/** "Is your person 12?": a number that is not a year group or a count of letters. */
function asksAgeByNumber(ws) {
  if (ws.some((w) => among(w, ['letter']))) return false
  return ws.some((w, i) => isNumber(w) && i > 0 && AGE_BEFORE.has(ws[i - 1]))
}

/** How long the name is: "more than 4 letters", "a long name". */
function asksNameLength(ws) {
  const has = (list) => ws.some((w) => among(w, list))
  if (has(['letter']) && (has(['more', 'less', 'fewer', 'than', 'many', 'number', 'over', 'under', 'long', 'short']) || ws.some(isNumber))) return true
  return has(['name']) && has(['long', 'short', 'longer', 'shorter']) && !has(HAIR)
}

// Every school level The Current uses, youngest first, and its stage.
const LEVELS = ['Nursery', 'Kindergarten', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Upper Secondary']
const stageOf = (level) => {
  const i = LEVELS.indexOf(level)
  if (i < 0) return null
  return i < 2 ? 'early' : i < 8 ? 'primary' : 'secondary'
}

// ── Questions built from the faces still up ─────────────────────────────────

/** The faces in each group, by `keyOf` (people it gives null are left out). */
function groups(faces, keyOf) {
  const m = new Map()
  for (const f of faces) {
    const k = keyOf(f)
    if (k === null || k === undefined || k === '') continue
    m.set(k, (m.get(k) || 0) + 1)
  }
  return m
}

/**
 * The value of `keyOf` that best halves the faces with one: the group nearest
 * half, as long as some faces are outside it. Ties go to `order`; values in
 * `skip` (already asked) still count as faces but are never chosen.
 */
function bestSplit(faces, keyOf, order = (a, b) => String(a).localeCompare(String(b)), skip = () => false) {
  const m = groups(faces, keyOf)
  const total = [...m.values()].reduce((a, b) => a + b, 0)
  const fits = [...m.entries()].filter(([k, n]) => n > 0 && n < total && !skip(k))
  if (!fits.length) return null
  fits.sort((a, b) => Math.abs(a[1] - total / 2) - Math.abs(b[1] - total / 2) || order(a[0], b[0]))
  return fits[0][0]
}

/** The cut "more than t" that best halves the numbers, or null if they are all the same. */
function bestCut(values) {
  const v = values.filter((n) => Number.isFinite(n)).sort((a, b) => a - b)
  const cuts = [...new Set(v)].slice(0, -1)
  if (!cuts.length) return null
  const above = (t) => v.filter((n) => n > t).length
  return cuts.reduce((best, t) => (Math.abs(above(t) - v.length / 2) < Math.abs(above(best) - v.length / 2) ? t : best))
}

const firstLetter = (f) => fold(f.name).replace(/[^a-z]/g, '')[0] || null

// ── The two boards ──────────────────────────────────────────────────────────

const STUDENT_TOPICS = [
  {
    id: 'gender', tier: 1,
    keys: ['boy', 'girl', 'male', 'female', 'man', 'men', 'woman', 'women', 'lady', 'guy', 'gender'],
    make: (faces, seed) => {
      const m = groups(faces, (f) => f.gender || null)
      if (!(m.get('Boy') && m.get('Girl'))) return null
      return seed % 2 ? 'Is your person a boy?' : 'Is your person a girl?'
    },
  },
  { id: 'glasses', tier: 1, keys: ['glasses', 'spectacles', 'specs', 'eyeglasses', 'sunglasses'], ask: ['Does your person wear glasses?'] },
  {
    id: 'stage', family: 'school', tier: 1,
    keys: ['primary', 'secondary', 'high school', 'middle school', 'elementary', 'early years', 'kindergarten', 'kinder', 'kindy', 'nursery', 'preschool'],
    make: (faces) => {
      const stage = bestSplit(faces, (f) => stageOf(f.level), (a, b) => ['primary', 'secondary', 'early'].indexOf(a) - ['primary', 'secondary', 'early'].indexOf(b))
      return {
        primary: 'Is your person in primary school?',
        secondary: 'Is your person in secondary school?',
        early: 'Is your person in Nursery or Kindergarten?',
      }[stage] || null
    },
  },
  {
    id: 'year', family: 'school', tier: 1,
    keys: ['kindergarten', 'kinder', 'kindy', 'nursery', 'preschool', 'upper secondary'],
    test: asksYear,
    make: (faces) => {
      const level = bestSplit(faces, (f) => (LEVELS.includes(f.level) ? f.level : null), (a, b) => LEVELS.indexOf(a) - LEVELS.indexOf(b))
      return level ? `Is your person in ${level}?` : null
    },
  },
  { id: 'hairLength', family: 'hair', tier: 1, keys: ['bald', 'shaved'], all: [HAIR, ['long', 'short', 'length', 'longer', 'shorter']], ask: ['Does your person have long hair?', 'Does your person have short hair?'] },
  { id: 'smile', tier: 1, keys: ['smile', 'smiling', 'happy', 'laugh', 'grin'], ask: ['Is your person smiling?'] },
  {
    id: 'age', tier: 2,
    keys: AGE_KEYS,
    test: asksAgeByNumber,
    make: (faces) => {
      const t = bestCut(faces.map((f) => f.age))
      return t === null ? null : `Is your person older than ${t}?`
    },
  },
  { id: 'fringe', family: 'hair', tier: 2, keys: ['fringe', 'bangs'], ask: ['Does your person have a fringe?'] },
  { id: 'clothes', tier: 2, keys: ['uniform', 'shirt', 'tshirt', 'polo', 'jumper', 'sweater', 'jacket', 'hoodie', 'coat', 'dress', 'blouse', 'collar', 'clothes', 'clothing'], ask: ['Is your person wearing a school uniform?', 'Is your person wearing a white shirt?'] },
  { id: 'tie', tier: 2, keys: ['tie', 'necktie'], ask: ['Is your person wearing a tie?'] },
  { id: 'teeth', tier: 2, keys: ['teeth', 'tooth', 'braces'], ask: ['Is your person showing their teeth?'] },
  { id: 'jewellery', tier: 2, keys: ['earring', 'earrings', 'necklace', 'jewellery', 'jewelry', 'bracelet', 'piercing'], ask: ['Does your person wear earrings?'] },
  { id: 'hairStyle', family: 'hair', tier: 2, keys: ['curly', 'curl', 'wavy', 'straight', 'ponytail', 'pony tail', 'plait', 'braid', 'bun', 'spiky'], ask: ['Does your person have curly hair?', 'Does your person have a ponytail?'] },
  { id: 'hairClip', family: 'hair', tier: 2, keys: ['clip', 'hairclip', 'headband', 'hairband', 'ribbon', 'scrunchie'], ask: ['Does your person have a hair clip?'] },
  { id: 'hairColour', family: 'hair', tier: 2, keys: ['blonde', 'blond', 'ginger', 'dyed'], all: [HAIR, COLOURS], ask: ['Does your person have black hair?', 'Does your person have brown hair?'] },
  {
    id: 'nameLength', tier: 2,
    test: asksNameLength,
    make: (faces) => {
      const t = bestCut(faces.map((f) => fold(f.name).replace(/[^a-z]/g, '').length || null))
      return t === null ? null : `Does your person's name have more than ${t} letters?`
    },
  },
]

const MONSTER_TOPICS = [
  { id: 'fly', family: 'sky', tier: 1, keys: ['fly', 'flew', 'flying', 'float', 'hover'], ask: ['Can your monster fly?'] },
  { id: 'animal', tier: 1, keys: ['animal', 'pet'], ask: ['Is your monster an animal?'] },
  { id: 'person', tier: 1, keys: ['a person', 'human', 'people', 'man', 'men', 'woman', 'women', 'boy', 'girl', 'lady'], ask: ['Is your monster a person?'] },
  { id: 'colour', tier: 1, keys: COLOURS.filter((c) => c !== 'dyed').concat(['green', 'purple', 'blue', 'pink', 'gold', 'silver']), ask: ['Is your monster green?', 'Is your monster purple?', 'Is your monster orange?', 'Is your monster black?'] },
  { id: 'horns', tier: 1, keys: ['horn'], ask: ['Does your monster have horns?'] },
  { id: 'wings', family: 'sky', tier: 1, keys: ['wing'], ask: ['Does your monster have wings?'] },
  { id: 'magic', tier: 2, keys: ['magic', 'magical', 'spell', 'wand'], ask: ['Can your monster do magic?'] },
  { id: 'hat', tier: 2, keys: ['hat', 'cap', 'crown', 'hood', 'helmet', 'turban'], ask: ['Is your monster wearing a hat?'] },
  { id: 'tail', tier: 2, keys: ['tail'], ask: ['Does your monster have a tail?'] },
  { id: 'legs', tier: 2, keys: ['leg', 'legs', 'feet', 'foot'], ask: ['Does your monster have legs?', 'Does your monster have four legs?'] },
  { id: 'hair', tier: 2, keys: ['hair', 'hairy', 'fur', 'furry', 'bald'], ask: ['Does your monster have hair?'] },
  { id: 'clothes', tier: 2, keys: ['clothes', 'clothing', 'dress', 'cape', 'cloak', 'costume', 'shirt', 'robe', 'suit'], ask: ['Is your monster wearing clothes?'] },
  { id: 'teeth', tier: 2, keys: ['teeth', 'tooth', 'fang'], ask: ['Does your monster have sharp teeth?'] },
  { id: 'smile', tier: 2, keys: ['smile', 'smiling', 'happy', 'laugh', 'grin'], ask: ['Is your monster smiling?'] },
  { id: 'water', tier: 2, keys: ['water', 'sea', 'ocean', 'swim', 'river', 'lake', 'fish'], ask: ['Does your monster live in water?'] },
  { id: 'real', tier: 2, keys: ['real', 'exist'], ask: ['Is your monster a real animal?'] },
  { id: 'eyes', tier: 2, keys: ['eye'], ask: ['Does your monster have big eyes?'] },
]

// First letters, on both boards: the unasked letter that starts the most names
// still up, as long as it does not start them all. Each letter is its own
// topic ('letter:k'), covered by lettersAsked() below.
const FIRST_LETTER = {
  id: 'letter', tier: 1,
  make: (faces, seed, { covered, subject }) => {
    const l = bestSplit(faces, firstLetter, (a, b) => a.localeCompare(b), (x) => covered.has(`letter:${x}`))
    return l ? `Does your ${subject}'s name start with ${l.toUpperCase()}?` : null
  },
}

const BOARDS = { school: STUDENT_TOPICS, monsters: MONSTER_TOPICS }
const topicsFor = (board) => (board === 'monsters' ? MONSTER_TOPICS : STUDENT_TOPICS)

// Words in their own right (and their singulars), never slips for another word.
const KNOWN = new Set([
  ...COMMON,
  ...Object.values(BOARDS).flatMap((list) => list.flatMap((t) => [...(t.keys || []), ...(t.all || []).flat()])).flatMap((k) => k.split(' ')),
  'class', 'year', 'grade', 'first', 'begin', 'end', 'last',
].flatMap((w) => [w, singular(w)]))

/**
 * Does the typed word `w` mean the keyword `k`? The same stem; or, for a word
 * nobody would type on purpose, a small slip in a longer word: one change from
 * five letters, two from eight, and a swapped pair in a four-letter word
 * ("hiar"). A slip never changes the first letter.
 */
function sameWord(w, k) {
  const sw = stem(w)
  const sk = stem(k)
  if (sw === sk || w === k) return true
  if (w.length < 4 || KNOWN.has(w) || KNOWN.has(singular(w)) || w[0] !== k[0]) return false
  const allowed = (s) => (s.length >= 8 ? 2 : s.length >= 5 ? 1 : 0)
  const allow = allowed(k)
  if (allow) return edits(w, k, allow) <= allow || (allowed(sk) > 0 && edits(sw, sk, allowed(sk)) <= allowed(sk))
  return k.length === 4 && w.length === 4 && edits(w, k, 1) === 1 && [...w].sort().join() === [...k].sort().join()
}

/** Does the phrase `key` ("high school", "glasses") run through the words? */
function hasPhrase(ws, key) {
  const ks = key.split(' ')
  for (let i = 0; i + ks.length <= ws.length; i++) if (ks.every((k, j) => sameWord(ws[i + j], k))) return true
  return false
}

const CUES = new Set(['start', 'begin', 'beginn', 'began', 'first', 'initial'].map(stem))
const STOPS = new Set(['end', 'last', 'finish'].map(stem))

/**
 * The first letters a question asks about: "Does it start with A?" → ['a'];
 * "Does their name begin with a B?" → ['b'] (that a is "a"); "the first letter
 * of your person's name is K" → ['k']; "start with A or B" → ['a', 'b'].
 * Only after a start-word, and never in "end with", so other letters are safe.
 */
export function lettersAsked(text) {
  const ws = words(text)
  const from = ws.findIndex((w) => CUES.has(stem(w)))
  if (from < 0) return []
  const found = []
  for (let i = from + 1; i < ws.length; i++) {
    const w = ws[i]
    if (STOPS.has(stem(w))) break
    if (!/^[a-z]$/.test(w)) continue
    // "a" is the letter only on its own: last, or "A or B"; "a B", "a letter", "a vowel" are articles.
    if (w === 'a' && i + 1 < ws.length && !['or', 'and', 'please'].includes(ws[i + 1])) continue
    if (!found.includes(w)) found.push(w)
  }
  return found
}

/**
 * The topics a question covers on this board ('school' or 'monsters'): ids
 * like 'gender' and 'glasses', and 'letter:a' for a first letter.
 */
export function topicsIn(text, board = 'school') {
  const ws = words(text)
  const out = []
  for (const t of topicsFor(board)) {
    const byKey = (t.keys || []).some((k) => hasPhrase(ws, k))
    const byAll = Boolean(t.all) && t.all.every((group) => group.some((k) => hasPhrase(ws, k)))
    if (byKey || byAll || t.test?.(ws)) out.push(t.id)
  }
  for (const l of lettersAsked(text)) out.push(`letter:${l}`)
  return out
}

/** Every topic covered by these questions (nulls, for questions asked out loud, are skipped). */
export function coveredTopics(questions, board = 'school') {
  return new Set(questions.filter(Boolean).flatMap((q) => topicsIn(q, board)))
}

// A small, fixed hash, so each game's shuffle is the same every time it is drawn.
function hash(s) {
  let h = 2166136261
  for (const c of s) h = Math.imul(h ^ c.codePointAt(0), 16777619)
  return h >>> 0
}

const normal = (q) => words(q).join(' ')

/**
 * Up to `count` ideas for the player, best first: none on a topic already
 * covered, none that would not split the faces still up, and at most one per
 * family. `board` is 'school' (My class and Whole school) or 'monsters';
 * `asked` is every question asked so far (typed or tapped); `faces` the people
 * still up, as `{ name, gender, level, age }`; `game` varies the order from game
 * to game. An empty list means the ideas have run dry.
 */
export function suggestions({ board = 'school', asked = [], faces = [], game = 0, count = 3 }) {
  const covered = coveredTopics(asked, board)
  const said = new Set(asked.filter(Boolean).map(normal))
  const subject = board === 'monsters' ? 'monster' : 'person'
  const ranked = [...topicsFor(board), FIRST_LETTER].sort((a, b) => a.tier - b.tier || hash(`${game}:${a.id}`) - hash(`${game}:${b.id}`))

  const ideas = []
  for (const t of ranked) {
    if (covered.has(t.id)) continue
    const seed = hash(`${game}:${t.id}:pick`)
    const q = t.make ? t.make(faces, seed, { covered, subject }) : t.ask[seed % t.ask.length]
    if (q) ideas.push({ family: t.family || t.id, q })
  }

  const families = new Set()
  const out = []
  for (const i of ideas) {
    if (out.length >= count) break
    if (families.has(i.family) || said.has(normal(i.q))) continue
    families.add(i.family)
    out.push(i.q)
  }
  return out
}

/** Every fixed model question on a board, for tests: [{ id, q }]. */
export const fixedQuestions = (board) => topicsFor(board).flatMap((t) => (t.ask || []).map((q) => ({ id: t.id, q })))
