// src/guess-who/SignIn.jsx
// The staff sign-in both ends use to read the students from The Current. The
// session is kept on this device, so it is needed once per laptop and phone.
// Sign the laptop in before the TV is plugged in: the TV shows the name typed.
import { useState } from 'react'
import { LogIn, Loader2 } from 'lucide-react'
import { signIn } from './school.js'

export default function SignIn({ compact = false, purpose = 'Sign in to put the students on the board' }) {
  const [who, setWho] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (!who.trim() || !password) return
    setBusy(true)
    setError('')
    try {
      await signIn(who, password)
    } catch (err) {
      setError(/invalid/i.test(err.message || '') ? 'That name or password did not work.' : err.message || 'Could not sign in.')
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className={`gw-panel ${compact ? 'p-4' : 'p-5'} space-y-3`}>
      <div>
        <div className="gw-kicker">The Current</div>
        <div className="font-bold text-white/90">{purpose}</div>
      </div>
      <input
        className="gw-input"
        value={who}
        onChange={(e) => setWho(e.target.value)}
        placeholder="Email or short name"
        autoComplete="username"
        autoCapitalize="none"
        spellCheck={false}
      />
      <input
        className="gw-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoComplete="current-password"
      />
      {error && <p className="text-sm font-bold text-rose-300">{error}</p>}
      <button type="submit" disabled={busy} className="gw-btn gw-btn-orange w-full justify-center">
        {busy ? <Loader2 className="w-5 h-5 animate-spin" /> : <LogIn className="w-5 h-5" strokeWidth={2.5} />}
        Sign in
      </button>
    </form>
  )
}
