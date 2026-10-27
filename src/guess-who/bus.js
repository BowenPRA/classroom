// src/guess-who/bus.js
// The wire between the board (the TV) and the remote (Mr Bowen's phone). Two
// transports carry the same messages, and either one alone is enough:
//
//  - BroadcastChannel joins windows of one browser: the two-monitor setup,
//    board on the TV and remote in a second window on the laptop. It needs no
//    network at all.
//  - A Supabase realtime broadcast channel joins a phone, over the internet.
//
// Every message carries an id, so a copy that arrives by both routes is handled
// once. Ids, answers, counts and the player's typed questions travel, never a
// name or a photo from The Current: the room code is the only lock on the
// realtime channel, and nothing on it is stored.
import { supabase } from './school.js'

const SEEN_MAX = 300

// One realtime channel per room, shared and released late. Supabase hands a
// second `channel()` call for a topic the channel already open on it, so a
// remount that closes and reopens straight away (React's StrictMode does it on
// every load in development) would be handed the closing channel and sit at
// CLOSED for good. Holding it a moment after the last user lets go means the
// remount simply picks it back up.
const rooms = new Map()

function statusOf(status) {
  if (status === 'SUBSCRIBED') return 'live'
  if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT' || status === 'CLOSED') return 'offline'
  return 'connecting'
}

function acquire(room) {
  let r = rooms.get(room)
  if (r) {
    clearTimeout(r.timer)
    r.users += 1
    return r
  }
  r = { users: 1, timer: null, status: 'connecting', listeners: new Set(), watchers: new Set() }
  r.channel = supabase.channel(`guess-who-${room}`, { config: { broadcast: { self: false } } })
  r.channel.on('broadcast', { event: 'msg' }, ({ payload }) => r.listeners.forEach((fn) => fn(payload)))
  r.channel.subscribe((status) => {
    r.status = statusOf(status)
    r.watchers.forEach((fn) => fn(r.status))
  })
  rooms.set(room, r)
  return r
}

function release(room, r) {
  r.users -= 1
  if (r.users > 0) return
  r.timer = setTimeout(() => {
    rooms.delete(room)
    supabase.removeChannel(r.channel)
  }, 2000)
}

/**
 * Open the room. `from` names this end ('board' or 'remote-…'); messages this
 * end sent are never delivered back to it. `onStatus` hears 'connecting',
 * 'live' or 'offline' for the internet route — the local route has no state.
 * Returns `{ send(type, body), close() }`.
 */
export function openBus(room, from, onMessage, onStatus) {
  const seen = new Set()
  const order = []
  const accept = (msg) => {
    if (!msg || typeof msg !== 'object' || msg.from === from || seen.has(msg.mid)) return
    seen.add(msg.mid)
    order.push(msg.mid)
    if (order.length > SEEN_MAX) seen.delete(order.shift())
    onMessage(msg)
  }

  let local = null
  try {
    local = new BroadcastChannel(`classroom:guess-who:${room}`)
    local.onmessage = (e) => accept(e.data)
  } catch {
    local = null // very old browser: the internet route still works
  }

  const shared = acquire(room)
  const watch = (status) => onStatus?.(status)
  shared.listeners.add(accept)
  shared.watchers.add(watch)
  // A channel picked back up may already be live; say so, after this call returns.
  queueMicrotask(() => watch(shared.status))

  let count = 0
  return {
    send(type, body = {}) {
      const msg = { ...body, type, from, mid: `${from}.${Date.now().toString(36)}.${(count++).toString(36)}` }
      try { local?.postMessage(msg) } catch { /* window closing */ }
      // Before the channel is up a send would be lost; both ends repeat what
      // matters (hello, state) until the other answers, so nothing waits on it.
      if (shared.status === 'live') shared.channel.send({ type: 'broadcast', event: 'msg', payload: msg })
    },
    close() {
      try { local?.close() } catch { /* already closed */ }
      shared.listeners.delete(accept)
      shared.watchers.delete(watch)
      release(room, shared)
    },
  }
}
