/**
 * Deck smoke-check: walks every slide of a lesson in headless Chrome and
 * reports the failures that `lint`, `build` and `audit:svg` cannot see —
 *
 *   · content overflowing a slide (on a projector that means cut-off text)
 *   · images that failed to load (wrong path, missing from the build)
 *   · console errors thrown while rendering
 *
 * Run the dev server (or point at the deployed site) and then:
 *
 *   node scripts/deck-check.mjs http://localhost:5173/#/lesson/y7-science/U01_1
 *   node scripts/deck-check.mjs <url> 22 dark
 *
 * Set CHROME to override the browser path. Exits non-zero if anything fails,
 * so it can gate a deploy.
 */
import { spawn } from 'child_process'
import fs from 'fs'
import os from 'os'
import path from 'path'

const args = process.argv.slice(2)
const URL_ARG = args.find((a) => a.startsWith('http'))
const DARK = args.includes('dark')
const SLIDES = Number(args.find((a) => /^\d+$/.test(a)) || 40)
const PORT = 9333
// Images come off the network on a deployed site; sample too early and every
// slide looks broken. This is a settle delay, not a page-load timeout.
const SETTLE_MS = 1400

if (!URL_ARG) {
  console.error('usage: node scripts/deck-check.mjs <lesson-url> [slideCount] [dark]')
  process.exit(2)
}

const CANDIDATES = [
  process.env.CHROME,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean)

const chromePath = CANDIDATES.find((p) => fs.existsSync(p))
if (!chromePath) {
  console.error('No Chrome found. Set CHROME=/path/to/chrome')
  process.exit(2)
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'deck-check-'))
const chrome = spawn(chromePath, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars',
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, 'about:blank',
], { stdio: 'ignore' })

const cleanup = () => {
  try { chrome.kill() } catch { /* already gone */ }
  try { fs.rmSync(profile, { recursive: true, force: true }) } catch { /* best effort */ }
}
process.on('exit', cleanup)

// Wait for the debugger to come up.
let targets = null
for (let i = 0; i < 40 && !targets; i++) {
  await sleep(250)
  try { targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json() } catch { /* not ready */ }
}
if (!targets) { console.error('Chrome did not start'); cleanup(); process.exit(2) }

const page = targets.find((t) => t.type === 'page')
const ws = new WebSocket(page.webSocketDebuggerUrl)
await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject })

let msgId = 0
const pending = new Map()
const consoleErrors = []
ws.onmessage = (e) => {
  const m = JSON.parse(e.data)
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id) }
  if (m.method === 'Runtime.exceptionThrown') {
    consoleErrors.push(m.params?.exceptionDetails?.exception?.description?.split('\n')[0] || 'exception')
  }
}
const send = (method, params = {}) => new Promise((res) => {
  const id = ++msgId
  pending.set(id, res)
  ws.send(JSON.stringify({ id, method, params }))
})

await send('Page.enable')
await send('Runtime.enable')
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false })
await send('Page.navigate', { url: 'about:blank' })
await sleep(200)
await send('Page.navigate', { url: URL_ARG })
await sleep(2000)

const { result } = await send('Runtime.evaluate', {
  awaitPromise: true,
  returnByValue: true,
  expression: `(async () => {
    const wait = (ms) => new Promise(r => setTimeout(r, ms));
    document.documentElement.classList.${DARK ? 'add' : 'remove'}('dark');
    const rows = [];
    let last = null;
    for (let i = 1; i <= ${SLIDES}; i++) {
      await wait(${SETTLE_MS});
      // Advancing past the last slide leaves the deck for the course page.
      if (!location.hash.includes('/lesson/')) break;
      const title = ((document.querySelector('h1,h2') || {}).textContent || '(none)').trim();
      if (title === last && i > 1) break;
      last = title;
      const overflow = [];
      document.querySelectorAll('div').forEach((el) => {
        if (!/auto|scroll/.test(getComputedStyle(el).overflowY)) return;
        const over = el.scrollHeight - el.clientHeight;
        if (over > 16) overflow.push(over + 'px');
      });
      const broken = [...document.querySelectorAll('img')]
        .filter((x) => !(x.complete && x.naturalWidth > 0)).length;
      rows.push({ n: i, title: title.slice(0, 38), overflow, broken });
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    }
    return rows;
  })()`,
})

const rows = result.value || []
let bad = 0
for (const r of rows) {
  const problems = []
  if (r.overflow.length) problems.push(`overflow ${r.overflow.join(', ')}`)
  if (r.broken) problems.push(`${r.broken} broken image(s)`)
  if (problems.length) bad++
  console.log(`${String(r.n).padStart(3)}  ${r.title.padEnd(40)} ${problems.join(' · ') || 'ok'}`)
}
if (consoleErrors.length) {
  console.log('\nconsole errors:')
  for (const e of [...new Set(consoleErrors)]) console.log('  ' + e)
}

console.log(`\n${rows.length} slides checked, ${bad} with layout issues, ${consoleErrors.length} console error(s)`)
ws.close()
cleanup()
process.exit(bad || consoleErrors.length ? 1 : 0)
