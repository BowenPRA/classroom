// src/guess-who/tally.js
// Today's booth tally, kept on Mr Bowen's phone: games played, winners, and
// Riverbucks paid out. The remote adds a game when it sees the reveal, keyed by
// the game's code (game.js newGameId), so a game is never counted twice however
// often the board repeats its state. A new day starts from zero.
import { useCallback, useEffect, useState } from 'react'

const TALLY_KEY = 'classroom:guess-who:tally'

const today = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const fresh = () => ({ day: today(), games: [] })

function load() {
  try {
    const t = JSON.parse(localStorage.getItem(TALLY_KEY))
    if (t && t.day === today() && Array.isArray(t.games)) return t
  } catch { /* nothing saved, or storage blocked */ }
  return fresh()
}

/**
 * `{ games, winners, paid, add(game), reset() }`. `add` takes `{ id, won,
 * prize }` and ignores an id it already has.
 */
export function useTally() {
  const [tally, setTally] = useState(load)

  useEffect(() => {
    try { localStorage.setItem(TALLY_KEY, JSON.stringify(tally)) } catch { /* storage blocked */ }
  }, [tally])

  const add = useCallback((game) => {
    setTally((t) => {
      const current = t.day === today() ? t : fresh()
      if (current.games.some((g) => g.id === game.id)) return t
      return { ...current, games: [...current.games, { id: game.id, won: Boolean(game.won), prize: Number(game.prize) || 0 }] }
    })
  }, [])

  const reset = useCallback(() => setTally(fresh()), [])

  // Past midnight with the page still open, yesterday's games no longer count.
  const games = tally.day === today() ? tally.games : []
  return {
    games: games.length,
    winners: games.filter((g) => g.won).length,
    paid: games.reduce((sum, g) => sum + g.prize, 0),
    add,
    reset,
  }
}
