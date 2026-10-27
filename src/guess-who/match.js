// src/guess-who/match.js
// Puts faces to the names on Mr Bowen's Class list (the random-student roster
// his lessons keep on this laptop) by finding each one among The Current's
// students. The roster holds whatever he typed — a nickname, a first name,
// "Louis C" — so the match is forgiving about accents, case and initials, but
// never guesses: a name that fits two students is reported, not picked.

/** Lower case, no accents or punctuation, single spaces: "Bảo Châu" → "bao chau". */
export const fold = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[đĐ]/g, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

const words = (s) => (s ? s.split(' ') : [])

/** True when `needle`'s words run, in order, through `hay`'s — each one whole (or, with `prefix`, the start of one). */
function runsThrough(needle, hay, prefix) {
  const n = words(needle)
  const h = words(hay)
  if (!n.length) return false
  for (let i = 0; i + n.length <= h.length; i++) {
    if (n.every((w, k) => (prefix ? h[i + k].startsWith(w) : h[i + k] === w))) return true
  }
  return false
}

// Tried in order; the first test that finds anyone decides.
const TESTS = [
  (f, s) => s.nick === f,
  (f, s) => s.full === f,
  (f, s) => runsThrough(f, s.nick, false) || runsThrough(f, s.full, false),
  (f, s) => runsThrough(f, s.nick, true) || runsThrough(f, s.full, true),
]

/**
 * Match roster names to students (`{ id, nickname, fullName, level, … }`).
 * Returns `{ found: [student], missing: [name], unsure: [name] }`: `found` in
 * roster order without repeats, `missing` names nobody fits, `unsure` names
 * that fit more than one student even after preferring the class's own year.
 */
export function matchClass(names, students) {
  const keyed = students.map((s) => ({ s, nick: fold(s.nickname), full: fold(s.fullName) }))
  const candidates = names.map((name) => {
    const f = fold(name)
    if (!f) return []
    for (const test of TESTS) {
      const hits = keyed.filter((k) => test(f, k))
      if (hits.length) return hits.map((k) => k.s)
    }
    return []
  })

  // A class is mostly one year group: let the clear matches say which, and
  // use it to settle a name that fits a child in another year too.
  const years = {}
  for (const c of candidates) if (c.length === 1) years[c[0].level] = (years[c[0].level] || 0) + 1
  const classYear = Object.keys(years).sort((a, b) => years[b] - years[a])[0]

  const found = []
  const missing = []
  const unsure = []
  names.forEach((name, i) => {
    let c = candidates[i]
    if (c.length > 1 && classYear) {
      const sameYear = c.filter((s) => s.level === classYear)
      if (sameYear.length) c = sameYear
    }
    if (c.length === 0) missing.push(name)
    else if (c.length > 1) unsure.push(name)
    else if (!found.includes(c[0])) found.push(c[0])
  })
  return { found, missing, unsure }
}

/**
 * Rows × columns for a board of `n` cards, keeping each card near the shape of
 * a portrait photo. `ratio` is the grid's width over its height on a 16:9 TV
 * once the header and footer are taken out.
 */
export function gridFor(n, ratio = 2.3) {
  let best = { cols: 8, rows: 3, score: Infinity }
  for (let rows = 1; rows <= 6; rows++) {
    const cols = Math.ceil(n / rows)
    if (cols < 1 || (rows - 1) * cols >= n) continue // would leave a whole row empty
    const score = Math.abs(Math.log(((ratio / cols) * rows) / 0.8))
    if (score < best.score) best = { cols, rows, score }
  }
  return best
}
