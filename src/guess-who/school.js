// src/guess-who/school.js
// The Guess Who board's link to The Current (Palm River Academy's admin app,
// current.pra.edu.vn), which is where the students live. No student is ever
// written into this repo: the site is public and deploys to two GitHub
// accounts, so names and faces are read at play time, after a staff sign-in,
// under the same row-level rules The Current itself uses (`adm_students`, the
// private `adm-photos` bucket). The URL and publishable key are public by
// design — the same pair ships in The Current's own bundle — and read nothing
// without a signed-in staff account.
//
// The same client carries the realtime channel between the TV and Mr Bowen's
// phone (bus.js). Broadcast needs no sign-in, so the monster board plays
// without one.
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://gpfycuxltrjeeyxnnktu.supabase.co'
const SUPABASE_KEY = 'sb_publishable_PnbUt3hda2bKjMnW__il0w_7aR3lqhe'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    // bowenpra.github.io also serves the Dashboard, which keeps its students'
    // Supabase sessions in this origin's localStorage. A key of our own means a
    // staff sign-in here never replaces a student's session there.
    storageKey: 'classroom:guess-who-auth',
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
})

/**
 * The Current's sign-in, unchanged: an email and password, or a short name,
 * which maps onto the Dashboard's teacher-login convention so one account works
 * in every app. Throws Supabase's error on a wrong password.
 */
export async function signIn(identifier, password) {
  let email = identifier.trim()
  let pw = password
  if (!email.includes('@')) {
    email = `${email.toLowerCase()}@science.local`
    pw = `${password.trim()}-y8s`
  }
  const { error } = await supabase.auth.signInWithPassword({ email, password: pw })
  if (error) throw error
}

export const signOut = () => supabase.auth.signOut()

// Storage keys are plain ASCII, so The Current files "photos/bơ.jpg" as
// "photos/b_1a1.jpg". Copied from its src/lib/photoKey.js — the two must agree.
const PHOTO_BUCKET = 'adm-photos'
const photoKey = (path) => String(path || '').normalize('NFC').replace(/[^A-Za-z0-9._/-]/gu, (c) => `_${c.codePointAt(0).toString(16)}`)
// Long enough for a whole carnival afternoon on one load.
const LINK_SECONDS = 12 * 60 * 60

// The Current's own test for an enrolled student (src/lib/studentRecords.js):
// `status`, or the older `active` flag on rows from before it existed.
const enrolled = (s) => (['active', 'pending', 'inactive'].includes(s.status) ? s.status === 'active' : s.active !== false)

function ageOn(dob, now) {
  if (!dob) return null
  const d = new Date(dob)
  if (Number.isNaN(d.getTime())) return null
  let age = now.getFullYear() - d.getFullYear()
  if (now.getMonth() < d.getMonth() || (now.getMonth() === d.getMonth() && now.getDate() < d.getDate())) age -= 1
  return age
}

/**
 * Every enrolled student, shaped for a card: `{ id, name, level, gender, age,
 * photo }`, with `photo` a signed link (or null — the card shows initials).
 * Row-level security hands a signed-out or non-staff user an empty list rather
 * than an error, so an empty result is reported as one.
 */
export async function loadStudents() {
  const { data, error } = await supabase
    .from('adm_students')
    .select('id, full_name, nickname, level, gender, photo, dob, status, active')
  // A dropped connection comes back as "TypeError: Failed to fetch".
  if (error) throw new Error(/fetch|network/i.test(error.message) ? 'Could not reach The Current. Check the internet, then reload.' : error.message)
  const rows = (data || []).filter(enrolled)
  if (!rows.length) throw new Error('No students came back. Is this a staff account in The Current?')

  const stored = (p) => p && !p.startsWith('data:') && !p.startsWith('http')
  const keys = [...new Set(rows.map((r) => r.photo).filter(stored).map(photoKey))]
  const links = new Map()
  if (keys.length) {
    const { data: signed, error: linkError } = await supabase.storage.from(PHOTO_BUCKET).createSignedUrls(keys, LINK_SECONDS)
    // Photos are a nicety: without them every card still shows its initials.
    if (!linkError) for (const s of signed || []) if (s.signedUrl) links.set(s.path, s.signedUrl)
  }

  const now = new Date()
  return rows.map((r) => ({
    id: r.id,
    name: (r.nickname || '').trim() || (r.full_name || '').trim() || '?',
    level: r.level || '',
    gender: r.gender === 'male' ? 'Boy' : r.gender === 'female' ? 'Girl' : '',
    age: ageOn(r.dob, now),
    photo: !r.photo ? null : stored(r.photo) ? links.get(photoKey(r.photo)) || null : r.photo,
  }))
}
