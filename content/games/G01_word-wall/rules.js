// content/games/G01_word-wall/rules.js
// What both ends of Word Wall agree on: the board on the projector
// (widgets.jsx) and the phone remote's copy of it (remote.jsx).

// Four wrong guesses and the hearts are gone.
export const MAX_MISTAKES = 4

// An item in levels.js is a plain word, or an object with a picture.
export const asItem = (raw) => (typeof raw === 'string' ? { word: raw } : raw)

// A tile's id is "<group>-<item>": where it sits in the level, whatever order
// the tiles are shuffled into.
export const tileId = (group, item) => `${group}-${item}`

export const hasPictures = (level) => Boolean(level?.groups.some((g) => g.items.some((i) => typeof i !== 'string' && i.img)))
