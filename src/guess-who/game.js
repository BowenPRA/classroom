// src/guess-who/game.js
// Guess Who's rules and fixed data, with no React in it.
//
// The board (the TV) owns the game: it deals, keeps the secret, counts the
// questions and judges the final guess. The remote only asks it to do things.
// So the state below is the board's, and the remote renders the copy the board
// broadcasts. It holds ids only — the people behind them are looked up in the
// roster each end loads for itself.

export const BOARD_SIZE = 24

// The most questions that still win 3, 2 and 1 Riverbucks. 24 faces take about
// five perfect halvings, so 5 is a sharp game, 9 a generous one. Mr Bowen can
// change them from the remote.
export const DEFAULT_STEPS = [5, 7, 9]

/** Riverbucks for a correct guess after `questions` answers. */
export function prizeFor(questions, steps) {
  if (questions <= steps[0]) return 3
  if (questions <= steps[1]) return 2
  if (questions <= steps[2]) return 1
  return 0
}

/**
 * Where the player stands on the Riverbucks steps after `asked` questions:
 * `prize` if they guess right now, and `left`, how many more they may ask and
 * still win it.
 */
export function prizeStatus(asked, steps) {
  const prize = prizeFor(asked, steps)
  return { prize, left: prize ? steps[3 - prize] - asked : 0 }
}

/** A typed question, tidied: one line, at most 140 characters, or '' if empty. */
export const cleanQuestion = (text) => String(text || '').replace(/\s+/g, ' ').trim().slice(0, 140)

/** Three whole numbers, each above the last, or null. */
export function cleanSteps(steps) {
  if (!Array.isArray(steps) || steps.length !== 3) return null
  const s = steps.map((n) => Math.round(Number(n)))
  if (s.some((n) => !Number.isFinite(n) || n < 1 || n > 30)) return null
  if (!(s[0] < s[1] && s[1] < s[2])) return null
  return s
}

export const blankGame = (source = 'class') => ({
  phase: 'lobby', // lobby → pick → play → reveal
  // 'class': the names on this laptop's Class list, with faces from The Current;
  // 'school': every enrolled student in The Current; 'monsters': built in.
  source,
  cards: [], // ids, in board order
  secret: null,
  down: [], // ids the player has flipped down
  pending: null, // the question the player typed, waiting for Mr Bowen's answer
  log: [], // { q, a }: each answered question (q is null if it was asked out loud) and 'yes' / 'no'
  guess: null, // the id guessed, or null if Mr Bowen ended the game
  steps: DEFAULT_STEPS,
  game: 0, // bumped on every deal, so animations restart
})

function shuffle(list) {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Fewer faces than this is not a game.
export const MIN_BOARD = 4

/** A fresh board: up to BOARD_SIZE ids drawn at random (a small class all fits). */
export const dealIds = (people) => shuffle(people.map((p) => p.id)).slice(0, BOARD_SIZE)

export const randomOf = (list) => list[Math.floor(Math.random() * list.length)]

// ── Saved on this device ────────────────────────────────────────────────────
// The room code and the board's game survive a reload (a tripped cable, a
// browser crash mid-game). Every read and write is wrapped: storage throws in
// private windows, and a game that forgets beats a game that crashes.

const ROOM_KEY = 'classroom:guess-who:room'
const GAME_KEY = 'classroom:guess-who:game'
const ROOM_LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no I/1 or O/0 to misread

export const newRoomCode = () => Array.from({ length: 4 }, () => randomOf(ROOM_LETTERS)).join('')

export const cleanRoomCode = (code) => String(code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4)

/** This board's room code, made once and kept. */
export function boardRoom() {
  try {
    const saved = cleanRoomCode(localStorage.getItem(ROOM_KEY))
    if (saved.length === 4) return saved
  } catch { /* storage blocked */ }
  const code = newRoomCode()
  try { localStorage.setItem(ROOM_KEY, code) } catch { /* storage blocked */ }
  return code
}

export function loadGame() {
  try {
    const g = JSON.parse(localStorage.getItem(GAME_KEY))
    if (g && Array.isArray(g.cards) && Array.isArray(g.down) && Array.isArray(g.log)) {
      // Games saved before questions were typed kept bare 'yes' / 'no' answers.
      const log = g.log.map((e) => (typeof e === 'string' ? { q: null, a: e } : e)).filter((e) => e && (e.a === 'yes' || e.a === 'no'))
      const pending = typeof g.pending === 'string' ? g.pending : null
      return { ...blankGame(g.source), ...g, log, pending, steps: cleanSteps(g.steps) || DEFAULT_STEPS }
    }
  } catch { /* nothing saved, or storage blocked */ }
  return blankGame()
}

export function saveGame(game) {
  try { localStorage.setItem(GAME_KEY, JSON.stringify(game)) } catch { /* storage blocked */ }
}

// ── The monster board ───────────────────────────────────────────────────────
// Built in, so the game can be shown, practised, or played when the wifi will
// not sign in. Every one differs in something a player can ask about: colour,
// wings, horns, hats, animals, legs.
export const MONSTERS = [
  ['vampire', 'Vampire', '🧛'],
  ['zombie', 'Zombie', '🧟'],
  ['witch', 'Witch', '🧙‍♀️'],
  ['wizard', 'Wizard', '🧙‍♂️'],
  ['ghost', 'Ghost', '👻'],
  ['pumpkin', 'Pumpkin', '🎃'],
  ['bat', 'Bat', '🦇'],
  ['spider', 'Spider', '🕷️'],
  ['skull', 'Skull', '💀'],
  ['alien', 'Alien', '👽'],
  ['robot', 'Robot', '🤖'],
  ['wolf', 'Wolf', '🐺'],
  ['genie', 'Genie', '🧞'],
  ['mermaid', 'Mermaid', '🧜‍♀️'],
  ['fairy', 'Fairy', '🧚'],
  ['owl', 'Owl', '🦉'],
  ['cat', 'Black cat', '🐈‍⬛'],
  ['troll', 'Troll', '🧌'],
  ['ogre', 'Ogre', '👹'],
  ['goblin', 'Goblin', '👺'],
  ['clown', 'Clown', '🤡'],
  ['dragon', 'Dragon', '🐉'],
  ['ninja', 'Ninja', '🥷'],
  ['elf', 'Elf', '🧝'],
].map(([id, name, emoji]) => ({ id: `monster-${id}`, name, emoji }))

// Shown under the board, a few at a time. Asking the question is the hard
// part for this class, so the board keeps a model sentence in front of them.
export const STARTERS = {
  school: [
    'Is your person a boy?',
    'Is your person a girl?',
    'Is your person in Year 7?',
    'Is your person in primary school?',
    'Does your person wear glasses?',
    'Does your person have long hair?',
    'Is your person older than 10?',
    'Does their name start with A?',
    'Is your person smiling?',
    'Does your person have short hair?',
  ],
  monsters: [
    'Can your monster fly?',
    'Is your monster green?',
    'Does your monster have horns?',
    'Is your monster an animal?',
    'Does your monster wear a hat?',
    'Does your monster have wings?',
    'Is your monster a person?',
    'Does your monster have a tail?',
  ],
}
