/**
 * Question-bank check. For every bank at content/banks/<bank>/bank.js:
 *   A) recomputes each question's `check` and compares it with the answer
 *   B) lints the strings: Vietnamese twins, the same numbers in both languages,
 *      no dollar signs, a real minus sign, answers short enough for a TV, and
 *      a source in the house format
 * Run: npm run check:bank [bank]
 *
 * `check` is a JavaScript expression, evaluated with the helpers in H below:
 *   '-6 - 4'  'lcm(4, 8)'  'factors(12)'  'round(34.9892, 1)'  'solve("2a + 4 = 18")'
 * What it returns decides how the answer `a` is read (after its last "=", if any):
 *   number  the first number in the answer must equal it
 *   array   the numbers in the answer, in order, must equal it
 *   string  must appear in the answer as a whole token ('Yes', '35.0', '7:30')
 *   same(e) / simplify(e) / expand(e)
 *           the answer is an expression that must equal e for any values of its
 *           letters; simplify and expand also require no brackets and no two
 *           like terms left uncollected
 */
import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

const BANKS = path.resolve('content/banks')
const ONLY = process.argv[2]

// What a projector can carry. Vietnamese runs about a quarter longer.
const MAX = { q: 170, qVn: 215, a: 40, aVn: 48, why: 100, whyVn: 130 }

const SOURCE = new RegExp(
  '^(deck \\d\\.\\d s\\d+'
  + '|(LB|WB) \\d\\.\\d ex \\d+[a-z]?'
  + '|(hw\\d\\dx?|q1rev) [A-Z]?\\d+(\\.\\d+)?[a-z]?'
  + '|jeopardy [a-z0-9-]+ · .+ [1-5]00'
  + ')( \\(adapted\\))?$',
)

// ── numbers and expressions ─────────────────────────────────────────────────
const SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' }
const plain = (s) => s
  .replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/')
  .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (m) => `^${[...m].map((c) => SUP[c]).join('')}`)
  // 90 000 → 90000: a space (plain, no-break, thin or narrow) before exactly three digits
  .replace(/(\d)[    ](?=\d{3}(?!\d))/g, '$1')

// "add a zero" in English is "thêm một số 0" in Vietnamese: count the word as a digit
const numbers = (s) => (plain(s).replace(/\bzeros?\b/gi, '0').match(/-?\d+(?:\.\d+)?/g) || []).map(Number)
const close = (x, y) => Math.abs(x - y) <= 1e-9 * Math.max(1, Math.abs(x), Math.abs(y))
const sorted = (xs) => [...xs].sort((p, q) => p - q)
const sameList = (xs, ys) => xs.length === ys.length && xs.every((x, i) => close(x, ys[i]))

// '4x + 6y', '12 − 4c', 'x²', '3(n + 2)' → a JS function of its letters
function compile(expr) {
  const s = plain(expr).replace(/\s+/g, '')
  const tokens = s.match(/\d+(?:\.\d+)?|[a-zA-Z]|[-+*/^()]/g) || []
  if (tokens.join('') !== s) throw new Error(`cannot read "${expr}" as an expression`)
  let js = ''
  tokens.forEach((t, i) => {
    const prev = tokens[i - 1]
    const ends = prev && (/^[\d.a-zA-Z)]+$/.test(prev))
    const starts = /^[a-zA-Z(]$/.test(t)
    js += (ends && starts ? '*' : '') + t
  })
  // Power binds before a unary minus, which JS refuses to parse: −x² → -(x**2)
  js = js.replace(/([a-zA-Z]|\d+(?:\.\d+)?)\^(\d+)/g, '($1**$2)')
  if (js.includes('^')) throw new Error(`unsupported power in "${expr}"`)
  const vars = [...new Set(tokens.filter((t) => /^[a-zA-Z]$/.test(t)))]
  const fn = new Function(...vars, `return (${js})`)
  return { vars, fn, flat: s }
}

const TRIALS = [2.3, -1.7, 3.1, 0.6, 5, -4, 1.9]
function equivalent(a, b) {
  const A = compile(a)
  const B = compile(b)
  const vars = [...new Set([...A.vars, ...B.vars])]
  for (let t = 0; t < 5; t++) {
    const env = Object.fromEntries(vars.map((v, i) => [v, TRIALS[(t + i * 3) % TRIALS.length] + t * 0.37]))
    const x = A.fn(...A.vars.map((v) => env[v]))
    const y = B.fn(...B.vars.map((v) => env[v]))
    if (!close(x, y)) return false
  }
  return true
}

// No brackets, and no two terms with the same letters: 4x + 6y, not 7x + 5y − 3x + y
function simplified(expr) {
  const s = plain(expr).replace(/\s+/g, '')
  if (s.includes('(')) return 'still has brackets'
  if (/(^|[^\d.])1[a-zA-Z]/.test(s)) return 'write x, not 1x'
  const terms = s.split(/(?<=.)(?=[-+])/)
  const seen = new Set()
  for (const term of terms) {
    const powers = {}
    for (const m of term.matchAll(/([a-zA-Z])(?:\^(\d+))?/g)) powers[m[1]] = (powers[m[1]] || 0) + Number(m[2] || 1)
    const sig = Object.keys(powers).sort().map((k) => k + powers[k]).join('')
    if (seen.has(sig)) return `like terms left uncollected (${sig || 'number'})`
    seen.add(sig)
  }
  return null
}

// ── helpers available to `check` ────────────────────────────────────────────
const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b))
const range = (lo, hi) => Array.from({ length: hi - lo + 1 }, (_, i) => lo + i)
const half = (x, dp) => {
  const f = 10 ** dp
  const r = Math.round(Number((Math.abs(x) * f).toPrecision(15))) / f
  return Math.sign(x) * r
}
const ineq = (s) => {
  const m = plain(s).replace(/\s+/g, '').match(/^([a-zA-Z])([<>])(-?\d+(?:\.\d+)?)$/)
  if (!m) throw new Error(`cannot read inequality "${s}"`)
  return { op: m[2], n: Number(m[3]) }
}
const H = {
  hcf: (...ns) => ns.reduce((a, b) => gcd(a, b)),
  lcm: (...ns) => ns.reduce((a, b) => Math.abs(a * b) / gcd(a, b)),
  factors: (n) => range(1, n).filter((d) => n % d === 0),
  multiples: (n, k) => range(1, k).map((i) => n * i),
  common: (xs, ys) => xs.filter((x) => ys.includes(x)),
  divisible: (n, d) => (n % d === 0 ? 'Yes' : 'No'),
  yes: (b) => (b ? 'Yes' : 'No'),
  tf: (b) => (b ? 'True' : 'False'),
  sqrt: Math.sqrt,
  cbrt: (x) => Math.round(Math.cbrt(x) * 1e9) / 1e9,
  // the two consecutive whole numbers a root lies between
  between: (x) => [Math.floor(x), Math.ceil(x)],
  // rounding as taught: half away from zero; d.p. keeps its trailing zeros
  round: (x, dp) => half(x, dp).toFixed(dp),
  nearest: (x, unit) => Math.sign(x) * Math.round(Number((Math.abs(x) / unit).toPrecision(15))) * unit,
  dp: (s) => (String(s).split('.')[1] || '').length,
  val: (expr, env) => { const c = compile(expr); return c.fn(...c.vars.map((v) => env[v])) },
  solve: (eq) => {
    const [l, r] = eq.split('=')
    const L = compile(l)
    const R = compile(r)
    const v = [...new Set([...L.vars, ...R.vars])]
    if (v.length !== 1) throw new Error(`solve wants one letter in "${eq}"`)
    const f = (x) => L.fn(...L.vars.map(() => x)) - R.fn(...R.vars.map(() => x))
    const slope = f(1) - f(0)
    if (close(slope, 0)) throw new Error(`"${eq}" has no single solution`)
    const x = -f(0) / slope
    if (!close(f(x), 0) || !close(f(2) - f(0), 2 * slope)) throw new Error(`"${eq}" is not linear`)
    return x
  },
  // integers strictly between lo and hi
  ints: (lo, hi) => range(Math.floor(lo) + 1, Math.ceil(hi) - 1),
  least: (s) => { const { op, n } = ineq(s); if (op !== '>') throw new Error('least wants x > n'); return Math.floor(n) + 1 },
  greatest: (s) => { const { op, n } = ineq(s); if (op !== '<') throw new Error('greatest wants x < n'); return Math.ceil(n) - 1 },
  // the first k integers that satisfy x < n (going down) or x > n (going up)
  first: (s, k) => { const { op, n } = ineq(s); const start = op === '>' ? Math.floor(n) + 1 : Math.ceil(n) - 1; return range(0, k - 1).map((i) => (op === '>' ? start + i : start - i)) },
  clock: (hm, minutes) => {
    const [h, m] = hm.split(':').map(Number)
    const t = h * 60 + m + minutes
    return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`
  },
  same: (e) => ({ alg: e, form: null }),
  simplify: (e) => ({ alg: e, form: 'simplified' }),
  expand: (e) => ({ alg: e, form: 'simplified' }),
}
const evaluate = (expr) => new Function(...Object.keys(H), `return (${expr})`)(...Object.values(H))

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
function compare(result, a) {
  const ans = a.includes('=') ? a.slice(a.lastIndexOf('=') + 1).trim() : a.trim()
  if (result && typeof result === 'object' && 'alg' in result) {
    if (!equivalent(ans, result.alg)) return `"${ans}" is not equal to ${result.alg}`
    return result.form === 'simplified' ? simplified(ans) : null
  }
  if (Array.isArray(result)) {
    const got = numbers(ans)
    return sameList(got, result) ? null : `expected ${result.join(', ')}, answer has ${got.join(', ') || 'no numbers'}`
  }
  if (typeof result === 'number') {
    const got = numbers(ans)[0]
    return got !== undefined && close(got, result) ? null : `expected ${result}, answer has ${got ?? 'no number'}`
  }
  if (typeof result === 'string') {
    const re = new RegExp(`(^|[^\\w.])${escape(result)}(?![\\w]|\\.\\d)`, /^[a-z]/i.test(result) ? 'i' : '')
    return re.test(plain(ans)) || re.test(ans) ? null : `expected "${result}" in the answer`
  }
  return `check returned ${typeof result}`
}

// ── string lint ─────────────────────────────────────────────────────────────
const TEXT = ['q', 'qVn', 'a', 'aVn', 'why', 'whyVn']
function lintText(field, s) {
  const out = []
  if (s.includes('$')) out.push(`${field} has a dollar sign`)
  if (/(^|[\s(=+×÷−])-(?=[\d(a-zA-Z])/.test(s)) out.push(`${field} uses a hyphen as a minus sign`)
  if (/\d-\d/.test(s)) out.push(`${field} has a hyphen between digits (use − or –)`)
  if (/\s-\s/.test(s)) out.push(`${field} has a spaced hyphen (use − or —)`)
  if (/ {2,}/.test(s)) out.push(`${field} has a run of spaces (they collapse on screen)`)
  if (s !== s.trim()) out.push(`${field} has leading or trailing space`)
  if (/\*[^*]+\*/.test(s)) out.push(`${field} has asterisks (no markup in the bank)`)
  if (s.length > MAX[field]) out.push(`${field} is ${s.length} chars (max ${MAX[field]})`)
  return out
}

function slideCount(course, deck) {
  const file = path.resolve('content', course, deck, 'slides.js')
  if (!fs.existsSync(file)) return null
  return (fs.readFileSync(file, 'utf8').match(/\blayout:\s*'/g) || []).length
}

// ── run ─────────────────────────────────────────────────────────────────────
const errors = []
const warnings = []
const err = (id, msg) => errors.push(`  ${id.padEnd(10)} ${msg}`)
const warn = (id, msg) => warnings.push(`  ${id.padEnd(10)} ${msg}`)

const banks = fs.readdirSync(BANKS, { withFileTypes: true })
  .filter((d) => d.isDirectory() && (!ONLY || d.name === ONLY))
  .map((d) => d.name)

for (const bank of banks) {
  const dir = path.join(BANKS, bank)
  if (fs.existsSync(path.join(dir, 'index.js'))) {
    err(bank, 'has an index.js — registry.js would load it as a lesson')
  }
  const { UNITS, QUESTIONS, COURSE } = await import(pathToFileURL(path.join(dir, 'bank.js')).href)
  const units = new Map(UNITS.map((u) => [u.unit, u]))
  const ids = new Set()
  const texts = new Map()
  const tally = new Map(UNITS.map((u) => [u.unit, { n: 0, l1: 0, l2: 0, l3: 0, calc: 0, words: 0, checked: 0 }]))

  for (const u of UNITS) {
    for (const f of ['unit', 'title', 'titleVn', 'deck']) if (!u[f]) err(u.unit || bank, `UNITS entry missing ${f}`)
    if (slideCount(COURSE, u.deck) === null) err(u.unit, `no deck at content/${COURSE}/${u.deck}`)
  }

  for (const item of QUESTIONS) {
    const id = item.id || '(no id)'
    if (!/^[a-z]\d\.\d-\d{2}$/.test(id)) err(id, 'id should look like m1.1-07')
    if (ids.has(id)) err(id, 'duplicate id')
    ids.add(id)
    const unit = units.get(item.unit)
    if (!unit) { err(id, `unit "${item.unit}" is not in UNITS`); continue }
    if (id.slice(1, 4) !== item.unit) err(id, `id does not match unit ${item.unit}`)
    if (![1, 2, 3].includes(item.level)) err(id, 'level must be 1, 2 or 3')
    if (!['calc', 'words'].includes(item.kind)) err(id, "kind must be 'calc' or 'words'")

    for (const f of ['q', 'qVn', 'a', 'aVn']) if (typeof item[f] !== 'string' || !item[f]) err(id, `missing ${f}`)
    if (!!item.why !== !!item.whyVn) err(id, 'why and whyVn come as a pair')
    for (const f of TEXT) if (typeof item[f] === 'string') for (const m of lintText(f, item[f])) err(id, m)
    const known = new Set(['id', 'unit', 'level', 'kind', 'source', 'check', ...TEXT])
    for (const k of Object.keys(item)) if (!known.has(k)) err(id, `unknown field "${k}"`)

    // The two languages must carry the same numbers
    if (item.q && item.qVn && !sameList(sorted(numbers(item.q)), sorted(numbers(item.qVn)))) err(id, 'q and qVn have different numbers')
    if (item.a && item.aVn && !sameList(sorted(numbers(item.a)), sorted(numbers(item.aVn)))) err(id, 'a and aVn have different numbers')
    if (item.why && item.whyVn && !sameList(sorted(numbers(item.why)), sorted(numbers(item.whyVn)))) warn(id, 'why and whyVn have different numbers')
    if (item.kind === 'words' && item.q === item.qVn) err(id, "a 'words' question needs a Vietnamese qVn")

    const key = (item.q || '').toLowerCase().replace(/\s+/g, ' ')
    if (texts.has(key)) err(id, `same question as ${texts.get(key)}`)
    texts.set(key, id)

    if (!SOURCE.test(item.source || '')) err(id, `source "${item.source}" is not in the house format`)
    const deckRef = (item.source || '').match(/^deck (\d\.\d) s(\d+)/)
    if (deckRef) {
      const u = units.get(deckRef[1])
      const count = u && slideCount(COURSE, u.deck)
      if (!u) err(id, `source names deck ${deckRef[1]}, which is not in UNITS`)
      else if (count !== null && Number(deckRef[2]) > count) err(id, `source names slide ${deckRef[2]}; deck ${u.deck} has ${count}`)
    }

    if (item.check !== undefined) {
      try {
        const problem = compare(evaluate(item.check), item.a)
        if (problem) err(id, `check ${item.check}: ${problem}`)
      } catch (e) {
        err(id, `check ${item.check} failed: ${e.message}`)
      }
    }

    const t = tally.get(item.unit)
    t.n++
    t[`l${item.level}`]++
    t[item.kind]++
    if (item.check !== undefined) t.checked++
  }

  console.log(`\n${bank}: ${QUESTIONS.length} questions\n`)
  console.log('  unit   total   L1  L2  L3   calc words   checked')
  for (const [u, t] of tally) {
    const row = [u.padEnd(6), String(t.n).padStart(5), '  ',
      String(t.l1).padStart(3), String(t.l2).padStart(3), String(t.l3).padStart(3), '  ',
      String(t.calc).padStart(5), String(t.words).padStart(5), '  ', String(t.checked).padStart(7)]
    console.log(`  ${row.join(' ')}`)
    if (t.n === 0) err(u, 'unit has no questions')
  }
}

if (warnings.length) console.log(`\nwarnings (${warnings.length}):\n${warnings.join('\n')}`)
if (errors.length) console.log(`\nerrors (${errors.length}):\n${errors.join('\n')}`)
console.log(`\ntotal: ${errors.length} errors, ${warnings.length} warnings`)
process.exit(errors.length ? 1 : 0)
