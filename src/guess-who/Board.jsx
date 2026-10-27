// src/guess-who/Board.jsx
// The TV. It owns the game (see game.js): it deals 24 faces, holds the secret
// Mr Bowen picks on his phone, counts his YES / NO answers, lets the player
// flip faces down with a tap, and judges the one final guess.
//
// The player stands at the laptop, which mirrors to the TV. Mr Bowen holds the
// remote (#/guess-who/remote/<room>), on his phone or in a second window.
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Maximize, Minimize, Volume2, VolumeX, Home, Smartphone, LogOut, ExternalLink, Ghost as GhostIcon, Users, School, Undo2, ListChecks, SendHorizontal, Pencil } from 'lucide-react'
import { Sky, Bucks, Ghost, Face, QrCode } from './art.jsx'
import SignIn from './SignIn.jsx'
import { useSchool } from './useSchool.js'
import { openBus } from './bus.js'
import { signOut } from './school.js'
import { matchClass, gridFor } from './match.js'
import { play, unlockAudio, isMuted, setMuted } from './sfx.js'
import { useStudentPicker } from '../lib/useStudentPicker.js'
import { RandomStudentModal } from '../components/RandomStudent.jsx'
import {
  BOARD_SIZE, MIN_BOARD, MONSTERS, STARTERS, blankGame, boardRoom, cleanQuestion, cleanSteps, dealIds, loadGame, prizeFor,
  prizeStatus, saveGame,
} from './game.js'

function reducer(g, a) {
  switch (a.type) {
    case 'source':
      return g.phase === 'lobby' ? { ...blankGame(a.source), steps: g.steps, game: g.game } : g
    case 'deal':
      return { ...g, phase: 'pick', cards: a.cards, secret: null, down: [], pending: null, log: [], guess: null, game: g.game + 1 }
    case 'setCards':
      return g.phase === 'pick' ? { ...g, cards: a.cards } : g
    case 'pick':
      return g.phase === 'pick' && g.cards.includes(a.id) ? { ...g, phase: 'play', secret: a.id } : g
    case 'toggle':
      if (g.phase !== 'play') return g
      return { ...g, down: g.down.includes(a.id) ? g.down.filter((x) => x !== a.id) : [...g.down, a.id] }
    case 'ask':
      return g.phase === 'play' && !g.pending && a.text ? { ...g, pending: a.text } : g
    case 'unask':
      return { ...g, pending: null }
    case 'answer':
      // The answer goes with the typed question; with none, it was asked out loud.
      return g.phase === 'play' ? { ...g, log: [...g.log, { q: g.pending, a: a.answer }], pending: null } : g
    case 'undo':
      return g.phase === 'play' && g.log.length ? { ...g, log: g.log.slice(0, -1) } : g
    case 'reveal':
      return g.phase === 'play' ? { ...g, phase: 'reveal', guess: a.guess } : g
    case 'steps': {
      const steps = cleanSteps(a.steps)
      return steps ? { ...g, steps } : g
    }
    case 'lobby':
      return { ...g, phase: 'lobby', cards: [], secret: null, down: [], pending: null, log: [], guess: null }
    default:
      return g
  }
}

// Falling sweets for a win. Fixed here rather than random at render, so the
// shower is the same every time and React renders stay pure.
const CONFETTI = Array.from({ length: 46 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  delay: ((i * 0.29) % 2.4) + 2.4,
  duration: 3.2 + (i % 5) * 0.45,
  size: 2.6 + (i % 4) * 0.7,
  spin: i % 2 ? 1 : -1,
  emoji: ['🍬', '🍭', '🎃', '🍫', '⭐', '🦇'][i % 6],
}))

export default function Board() {
  const [room] = useState(boardRoom)
  const [game, dispatch] = useReducer(reducer, null, loadGame)
  const monsters = game.source === 'monsters'
  const school = useSchool(!monsters)
  // The Class list is the random-student roster Mr Bowen's lessons keep on this
  // laptop; the same hook and editor, so an edit here is an edit there.
  const picker = useStudentPicker()
  const [editingClass, setEditingClass] = useState(false)
  const classMatch = useMemo(
    () => (school.students ? matchClass(picker.names, school.students) : null),
    [picker.names, school.students],
  )
  // `faces` turns a card's id into a person; `people` is who gets dealt.
  const faces = monsters ? MONSTERS : school.students
  const people = monsters ? MONSTERS : game.source === 'class' ? classMatch?.found : school.students
  const ready = (people?.length || 0) >= MIN_BOARD
  const byId = useMemo(() => new Map((faces || []).map((p) => [p.id, p])), [faces])

  const [net, setNet] = useState('connecting')
  const [remoteLive, setRemoteLive] = useState(false)
  const [splash, setSplash] = useState(null)
  const [guessing, setGuessing] = useState(false)
  const [confirmId, setConfirmId] = useState(null)
  const [muted, setMutedState] = useState(isMuted)
  const [fullscreen, setFullscreen] = useState(false)
  // The question being typed on the laptop, before it is sent.
  const [draft, setDraft] = useState('')

  // The bus callback is made once; it reads the latest game through refs.
  const busRef = useRef(null)
  const live = useRef({ game, people, ready })
  const lastSeen = useRef(0)
  const splashCount = useRef(0)
  useEffect(() => { live.current = { game, people, ready } })

  const sendState = useCallback(() => {
    const { game: g, ready: r, people: p } = live.current
    // `pool`: everyone this board could deal, so the remote can swap faces in.
    busRef.current?.send('state', { game: g, ready: r, count: p?.length || 0, pool: (p || []).map((x) => x.id) })
  }, [])

  const act = useCallback((intent) => {
    const g = live.current.game
    switch (intent.type) {
      case 'deal': {
        const pool = live.current.people
        if ((pool?.length || 0) < MIN_BOARD) return
        dispatch({ type: 'deal', cards: dealIds(pool) })
        setGuessing(false)
        setConfirmId(null)
        setDraft('')
        play('deal')
        return
      }
      case 'setCards': {
        // Mr Bowen changing the faces before he picks: only people this board
        // could deal, no repeats, and a playable number.
        const pool = new Set((live.current.people || []).map((p) => p.id))
        const cards = Array.isArray(intent.cards) ? intent.cards : []
        if (cards.length < MIN_BOARD || cards.length > BOARD_SIZE || new Set(cards).size !== cards.length || !cards.every((id) => pool.has(id))) return
        dispatch({ type: 'setCards', cards })
        return
      }
      case 'pick':
        dispatch({ type: 'pick', id: intent.id })
        return
      case 'answer': {
        if (g.phase !== 'play') return
        const answer = intent.answer
        splashCount.current += 1
        if (answer === 'yes' || answer === 'no') {
          dispatch({ type: 'answer', answer })
          setSplash({ kind: answer, n: g.log.length + 1, q: g.pending, key: splashCount.current })
        } else {
          // Not a yes / no question: it goes back in the box to be reworded.
          dispatch({ type: 'unask' })
          if (g.pending) setDraft(g.pending)
          setSplash({ kind: 'again', key: splashCount.current })
        }
        play(answer === 'yes' || answer === 'no' ? answer : 'again')
        return
      }
      case 'undo':
        dispatch({ type: 'undo' })
        return
      case 'giveUp':
        dispatch({ type: 'reveal', guess: null })
        setGuessing(false)
        setConfirmId(null)
        return
      case 'steps':
        dispatch({ type: 'steps', steps: intent.steps })
        return
      case 'lobby':
        dispatch({ type: 'lobby' })
        return
      default:
    }
  }, [])

  useEffect(() => {
    const bus = openBus(room, 'board', (msg) => {
      if (!String(msg.from).startsWith('remote')) return
      lastSeen.current = Date.now()
      setRemoteLive(true)
      // A remote says hello on arrival and every few seconds after; the reply
      // is the whole game, so a phone that missed a message catches up.
      if (msg.type === 'hello') sendState()
      else act(msg)
    }, setNet)
    busRef.current = bus
    return () => { bus.close(); busRef.current = null }
  }, [room, act, sendState])

  useEffect(() => {
    saveGame(game)
    sendState()
  }, [game, ready, sendState])

  useEffect(() => {
    const t = setInterval(() => setRemoteLive(Date.now() - lastSeen.current < 15000), 3000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (!splash) return
    const t = setTimeout(() => setSplash(null), 1700)
    return () => clearTimeout(t)
  }, [splash])

  const won = game.phase === 'reveal' && game.guess !== null && game.guess === game.secret
  useEffect(() => {
    if (game.phase !== 'reveal') return
    if (game.guess === null) { play('again'); return }
    play('drum')
    const t = setTimeout(() => play(won ? 'win' : 'lose'), 2300)
    return () => clearTimeout(t)
  }, [game.phase, game.guess, game.game, won])

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])
  const toggleFullscreen = useCallback(() => {
    unlockAudio()
    if (document.fullscreenElement) document.exitFullscreen?.()
    else document.documentElement.requestFullscreen?.().catch(() => {})
  }, [])

  const inGuess = guessing && game.phase === 'play'
  const confirming = inGuess && confirmId ? confirmId : null

  useEffect(() => {
    const onKey = (e) => {
      if (e.target instanceof HTMLInputElement) return
      if (e.key === 'Escape') { setConfirmId(null); setGuessing(false) }
      if (e.key === 'f' || e.key === 'F') toggleFullscreen()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggleFullscreen])

  const remoteUrl = useMemo(() => `${window.location.origin}${window.location.pathname}#/guess-who/remote/${room}`, [room])
  const openRemoteWindow = () => {
    unlockAudio()
    window.open(remoteUrl, 'guess-who-remote', 'popup,width=440,height=900')
  }

  const onCard = (id) => {
    unlockAudio()
    if (game.phase !== 'play') return
    if (inGuess) {
      if (!game.down.includes(id)) setConfirmId(id)
      return
    }
    dispatch({ type: 'toggle', id })
    play('flip')
  }

  const toggleMute = () => {
    setMuted(!muted)
    setMutedState(!muted)
    if (muted) unlockAudio()
  }

  const tools = (
    <Toolbar
      room={room}
      remoteLive={remoteLive}
      net={net}
      muted={muted}
      fullscreen={fullscreen}
      onMute={toggleMute}
      onFullscreen={toggleFullscreen}
      onLobby={game.phase === 'lobby' ? null : () => {
        // The player stands at this laptop, so a stray tap must not end their game.
        if (game.phase === 'reveal' || window.confirm('End this game and go back to the start screen?')) act({ type: 'lobby' })
      }}
    />
  )

  if (game.phase === 'lobby') {
    return (
      <div className="gw-root">
        <Sky />
        <Lobby
          game={game}
          school={school}
          ready={ready}
          count={people?.length || 0}
          classList={picker.names}
          classMatch={classMatch}
          remoteUrl={remoteUrl}
          room={room}
          remoteLive={remoteLive}
          net={net}
          onSource={(source) => { unlockAudio(); dispatch({ type: 'source', source }) }}
          onDeal={() => { unlockAudio(); act({ type: 'deal' }) }}
          onOpenRemote={openRemoteWindow}
          onEditClass={() => setEditingClass(true)}
        />
        <div className="gw-lobby-tools">{tools}</div>
        <RandomStudentModal open={editingClass} onClose={() => setEditingClass(false)} picker={picker} listOnly />
      </div>
    )
  }

  const facesLeft = game.cards.length - game.down.filter((id) => game.cards.includes(id)).length
  const secretPerson = byId.get(game.secret)
  const guessPerson = byId.get(game.guess)
  // The grid shares the width with the sidebar, so it is a little over square.
  const grid = gridFor(game.cards.length || 24, 1.33)
  const sendQuestion = () => {
    const text = cleanQuestion(draft)
    if (!text || game.phase !== 'play' || game.pending) return
    unlockAudio()
    dispatch({ type: 'ask', text })
    setDraft('')
    play('ask')
  }

  return (
    <div className="gw-root">
      <Sky />
      <div className="gw-board">
        <header className="gw-hud">
          <h1 className="gw-title gw-title-small">Guess Who?</h1>
          {tools}
        </header>

        <div className="gw-main">
          <main
            className={`gw-grid ${inGuess ? 'is-guessing' : ''}`}
            style={{ '--cols': grid.cols, '--rows': grid.rows, '--prows': Math.ceil(game.cards.length / 4) }}
          >
            {game.cards.map((id, i) => (
              <Card
                key={`${game.game}-${id}`}
                person={byId.get(id)}
                index={i}
                down={game.down.includes(id)}
                guessable={inGuess && !game.down.includes(id)}
                disabled={game.phase !== 'play' || (inGuess && game.down.includes(id))}
                onClick={() => onCard(id)}
              />
            ))}
          </main>

          <aside className="gw-side">
            <Meter steps={game.steps} asked={game.log.length} />
            {game.phase === 'pick' ? (
              <div className="gw-ask gw-ask-wait">
                <span className="gw-ask-emoji">🤫</span>
                <span>Mr Bowen is choosing a secret person…</span>
              </div>
            ) : inGuess ? (
              <div className="gw-ask gw-ask-guess">
                <span>Tap the face you think it is.</span>
                <button className="gw-btn gw-btn-ghost" onClick={() => setGuessing(false)}>
                  <Undo2 className="gw-icon" strokeWidth={2.5} />
                  Not yet
                </button>
              </div>
            ) : (
              <AskBox
                key={game.game}
                game={game}
                draft={draft}
                onDraft={setDraft}
                onSend={sendQuestion}
                onChange={() => { setDraft(game.pending || ''); dispatch({ type: 'unask' }) }}
              />
            )}
            <QuestionLog log={game.log} />
            <div className="gw-side-foot">
              <div className="gw-faces-left">
                <span className="gw-faces-left-n">{facesLeft}</span>
                <span>faces<br />left</span>
              </div>
              <button
                className={`gw-btn gw-btn-gold gw-guess-btn ${facesLeft === 1 && !inGuess ? 'is-calling' : ''}`}
                disabled={game.phase !== 'play' || inGuess}
                onClick={() => { unlockAudio(); setGuessing(true) }}
              >
                Final guess!
              </button>
            </div>
          </aside>
        </div>
      </div>

      {game.phase === 'pick' && !remoteLive && (
        <PickBanner remoteUrl={remoteUrl} room={room} onOpenRemote={openRemoteWindow} />
      )}
      {game.phase === 'play' && !remoteLive && <JoinChip remoteUrl={remoteUrl} room={room} />}
      {splash && <Splash splash={splash} />}
      {confirming && (
        <ConfirmGuess
          person={byId.get(confirming)}
          onYes={() => { dispatch({ type: 'reveal', guess: confirming }); setConfirmId(null); setGuessing(false) }}
          onNo={() => setConfirmId(null)}
        />
      )}
      {game.phase === 'reveal' && (
        <Reveal
          key={game.game}
          guess={guessPerson}
          secret={secretPerson}
          gaveUp={game.guess === null}
          won={won}
          questions={game.log.length}
          prize={won ? prizeFor(game.log.length, game.steps) : 0}
          onNext={() => act({ type: 'deal' })}
        />
      )}
    </div>
  )
}

function Toolbar({ room, remoteLive, net, muted, fullscreen, onMute, onFullscreen, onLobby }) {
  const icon = 'w-[2.6vmin] h-[2.6vmin] min-w-4 min-h-4'
  return (
    <div className="gw-tools">
      <span
        className={`gw-room ${remoteLive ? 'is-live' : ''}`}
        title={remoteLive ? 'The remote is connected' : net === 'live' ? 'Waiting for the remote' : 'Joining the room…'}
      >
        <Smartphone className={icon} strokeWidth={2.5} />
        {room}
      </span>
      <button className="gw-tool" onClick={onMute} title={muted ? 'Sound on' : 'Sound off'}>
        {muted ? <VolumeX className={icon} strokeWidth={2.5} /> : <Volume2 className={icon} strokeWidth={2.5} />}
      </button>
      <button className="gw-tool" onClick={onFullscreen} title="Full screen (F)">
        {fullscreen ? <Minimize className={icon} strokeWidth={2.5} /> : <Maximize className={icon} strokeWidth={2.5} />}
      </button>
      {onLobby ? (
        <button className="gw-tool" onClick={onLobby} title="Back to the start screen">
          <Home className={icon} strokeWidth={2.5} />
        </button>
      ) : (
        <Link className="gw-tool" to="/" title="Leave the game">
          <Home className={icon} strokeWidth={2.5} />
        </Link>
      )}
    </div>
  )
}

/**
 * The Riverbucks meter: what a right guess wins now, in one token; how many more
 * questions keep it, in words; and a bar with a segment per question that
 * empties as they are asked, grouped under the 3, 2 and 1 each stretch is worth.
 */
function Meter({ steps, asked }) {
  const groups = [
    { value: 3, from: 0, to: steps[0] },
    { value: 2, from: steps[0], to: steps[1] },
    { value: 1, from: steps[1], to: steps[2] },
  ]
  const { prize, left } = prizeStatus(asked, steps)
  const after = prize ? prize - 1 : 0
  let line
  let sub
  if (!prize) {
    line = 'No Riverbucks left'
    sub = 'You can still win the game!'
  } else if (left) {
    line = <><b>{left}</b> more question{left === 1 ? '' : 's'}</>
    sub = after ? `then it drops to ${after}` : 'then there are none'
  } else {
    line = 'Guess now!'
    sub = after ? `One more question drops it to ${after}` : 'One more question and there are none'
  }
  return (
    <div className="gw-meter">
      <div className="gw-meter-head">
        <span>Riverbucks</span>
        <span>Questions <b>{asked}</b></span>
      </div>
      <div className="gw-meter-hero">
        <div className="gw-meter-win">
          <span>Win now</span>
          <Bucks key={prize} n={prize} className="gw-meter-bucks" />
        </div>
        <div key={asked} className={`gw-meter-text ${prize && !left ? 'is-last' : ''}`}>
          <div className="gw-meter-line">{line}</div>
          <div className="gw-meter-sub">{sub}</div>
        </div>
      </div>
      <div className="gw-bar">
        {groups.map((g) => {
          const passed = asked > g.to
          return (
            <div key={g.value} className={`gw-bar-group ${passed ? 'is-passed' : ''} ${!passed && prize === g.value ? 'is-current' : ''}`} style={{ flexGrow: g.to - g.from }}>
              <div className="gw-bar-segs">
                {Array.from({ length: g.to - g.from }, (_, k) => {
                  const q = g.from + k
                  return <span key={k} className={`gw-seg ${q < asked ? 'is-used' : ''} ${q === asked ? 'is-next' : ''}`} />
                })}
              </div>
              <Bucks n={g.value} className={`gw-bar-bucks ${passed ? 'is-spent' : ''}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * Where the player types a question for Mr Bowen. Model questions sit under it,
 * and a tap puts one in the box to send or change. A sent question waits here,
 * big enough for the queue to read, until he answers on his phone.
 */
function AskBox({ game, draft, onDraft, onSend, onChange }) {
  const input = useRef(null)
  const list = STARTERS[game.source] || STARTERS.school
  // Two model questions, a different two each game: the list below soon shows more.
  const models = [0, 1].map((k) => list[(game.game * 2 + k) % list.length])
  const playing = game.phase === 'play'

  // Ready for the next question as soon as the last one is answered.
  useEffect(() => {
    if (playing && !game.pending) input.current?.focus()
  }, [playing, game.pending])

  if (game.pending) {
    return (
      <div className="gw-ask gw-ask-sent">
        <div className="gw-ask-label">Your question</div>
        <div className="gw-ask-q">“{game.pending}”</div>
        <div className="gw-ask-thinking">
          Mr Bowen is thinking<span className="gw-dots3"><i>.</i><i>.</i><i>.</i></span>
        </div>
        <button className="gw-link" onClick={onChange}>
          <Pencil className="w-4 h-4" strokeWidth={2.5} />
          Change it
        </button>
      </div>
    )
  }
  return (
    <form className="gw-ask" onSubmit={(e) => { e.preventDefault(); onSend() }}>
      <label className="gw-ask-label" htmlFor="gw-question">Type your question</label>
      <div className="gw-ask-row">
        <input
          id="gw-question"
          ref={input}
          className="gw-ask-input"
          value={draft}
          onChange={(e) => onDraft(e.target.value)}
          placeholder="Is your person…?"
          maxLength={140}
          autoComplete="off"
          spellCheck
          disabled={!playing}
        />
        <button type="submit" className="gw-btn gw-btn-orange gw-ask-send" disabled={!playing || !draft.trim()} title="Ask (Enter)">
          <SendHorizontal className="gw-icon" strokeWidth={2.5} />
          Ask
        </button>
      </div>
      <div className="gw-models">
        {models.map((q) => (
          <button key={q} type="button" className="gw-model" disabled={!playing} onClick={() => { onDraft(q); input.current?.focus() }}>
            {q}
          </button>
        ))}
      </div>
    </form>
  )
}

/** Every question asked this game, with Mr Bowen's answer. The newest stays in view. */
function QuestionLog({ log }) {
  const list = useRef(null)
  useEffect(() => {
    if (list.current) list.current.scrollTop = list.current.scrollHeight
  }, [log.length])
  return (
    <div className="gw-log">
      <div className="gw-log-head">Questions and answers</div>
      {log.length ? (
        <ol ref={list} className="gw-log-list">
          {log.map((e, i) => (
            <li key={i} className={`gw-log-item is-${e.a}`}>
              <span className="gw-log-n">{i + 1}</span>
              <span className={`gw-log-q ${e.q ? '' : 'is-spoken'}`}>{e.q || 'Asked out loud'}</span>
              <span className="gw-log-a">{e.a === 'yes' ? 'YES' : 'NO'}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="gw-log-empty">No questions yet.</p>
      )}
    </div>
  )
}

function Card({ person, index, down, guessable, disabled, onClick }) {
  return (
    <button
      className={`gw-card ${down ? 'is-down' : ''} ${guessable ? 'is-guessable' : ''}`}
      style={{ '--i': index }}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={down}
      aria-label={person ? `${person.name}${down ? ', flipped down' : ''}` : 'Loading'}
    >
      <span className="gw-card-inner">
        <span className="gw-card-front">
          <Face person={person} />
          <span className="gw-card-name">{person?.name || ''}</span>
        </span>
        <span className="gw-card-back">
          <Ghost className="gw-card-ghost" />
          <span className="gw-card-back-name">{person?.name || ''}</span>
        </span>
      </span>
    </button>
  )
}

const SOURCES = [
  { id: 'class', label: 'My class', Icon: Users },
  { id: 'school', label: 'Whole school', Icon: School },
  { id: 'monsters', label: 'Monsters', Icon: GhostIcon },
]

/** What the chosen board will hold, and anything Mr Bowen needs to fix first. */
function SourceInfo({ game, school, count, classList, classMatch }) {
  if (game.source === 'monsters') return <div className="font-bold text-white/90">24 monsters. No sign-in needed.</div>
  if (school.error) return <div className="font-bold text-rose-300">{school.error}</div>
  if (!school.students) return <div className="font-bold text-white/90">Loading the students…</div>
  if (game.source === 'school') return <div className="font-bold text-white/90">{count} students. Each game deals 24 at random.</div>

  if (!classList.length) {
    return (
      <>
        <div className="font-bold text-white/90">The Class list on this laptop is empty.</div>
        <div className="text-white/60 text-[0.9em]">It is the list behind Class list in your lessons. Add one name per line.</div>
      </>
    )
  }
  const { missing, unsure } = classMatch
  return (
    <>
      <div className="font-bold text-white/90">
        {count} of {classList.length} on your Class list, with faces from The Current.
        {count > 24 ? ' Each game deals 24 at random.' : count >= MIN_BOARD ? ' All of them go on the board.' : ` A board needs at least ${MIN_BOARD}.`}
      </div>
      {missing.length > 0 && <div className="text-amber-300 text-[0.9em] font-bold">Not in The Current: {missing.join(', ')}</div>}
      {unsure.length > 0 && <div className="text-amber-300 text-[0.9em] font-bold">Fits two students: {unsure.join(', ')}. Type their full name.</div>}
    </>
  )
}

function Lobby({ game, school, ready, count, classList, classMatch, remoteUrl, room, remoteLive, net, onSource, onDeal, onOpenRemote, onEditClass }) {
  const [a, b, c] = game.steps
  const monsters = game.source === 'monsters'
  const needsSignIn = !monsters && school.session === null
  return (
    <div className="gw-lobby">
      <div className="gw-lobby-left">
        <h1 className="gw-title">Guess Who?</h1>
        <p className="gw-subtitle">The Halloween Edition</p>
        <ol className="gw-howto">
          <li><span className="gw-howto-n">1</span><span>Type a question.<br /><small>Mr Bowen can only say YES or NO.</small></span></li>
          <li><span className="gw-howto-n">2</span><span>Tap faces to flip them down.</span></li>
          <li><span className="gw-howto-n">3</span><span>Guess who it is!<br /><small>You have ONE guess.</small></span></li>
        </ol>
        <div className="gw-prizes">
          <div className="gw-prizes-title">Fewer questions = more Riverbucks</div>
          {[[3, a], [2, b], [1, c]].map(([value, max]) => (
            <div key={value} className="gw-prize-row">
              <Bucks n={value} className="gw-prize-bucks" />
              <b>{value} Riverbuck{value === 1 ? '' : 's'}</b>
              <span>{max} questions or fewer</span>
            </div>
          ))}
        </div>
      </div>

      <div className="gw-lobby-right">
        <div className="gw-source">
          {SOURCES.map(({ id, label, Icon }) => (
            <button key={id} className={`gw-source-btn ${game.source === id ? 'is-on' : ''}`} onClick={() => onSource(id)}>
              <Icon className="w-5 h-5 shrink-0" strokeWidth={2.5} />
              {label}
            </button>
          ))}
        </div>

        {needsSignIn ? (
          <SignIn />
        ) : (
          <div className="gw-panel p-5 space-y-1">
            <div className="gw-kicker">{monsters ? 'Practice board' : 'From The Current'}</div>
            <SourceInfo game={game} school={school} count={count} classList={classList} classMatch={classMatch} />
            {!monsters && school.session && (
              <div className="flex flex-wrap gap-x-5 gap-y-1 pt-1">
                {game.source === 'class' && school.students && (
                  <button className="gw-link" onClick={onEditClass}>
                    <ListChecks className="w-4 h-4" strokeWidth={2.5} />
                    Edit the Class list
                  </button>
                )}
                <button className="gw-link" onClick={() => signOut()}>
                  <LogOut className="w-4 h-4" strokeWidth={2.5} />
                  Sign out
                </button>
              </div>
            )}
          </div>
        )}

        <div className="gw-panel gw-join p-5">
          <QrCode text={remoteUrl} className="gw-join-qr" />
          <div className="min-w-0">
            <div className="gw-kicker">Mr Bowen's remote</div>
            <div className="gw-join-code">{room}</div>
            <div className={`gw-join-status ${remoteLive ? 'is-live' : ''}`}>
              {remoteLive ? 'Phone connected' : net === 'offline' ? 'No internet: use a window on this laptop' : 'Scan with your phone'}
            </div>
            <button className="gw-link mt-2" onClick={onOpenRemote}>
              <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
              Open the remote in a window
            </button>
          </div>
        </div>

        <button className="gw-btn gw-btn-orange gw-deal-btn" disabled={!ready} onClick={onDeal}>
          Deal the cards
        </button>
      </div>
    </div>
  )
}

/** No remote yet, so nobody can choose the secret: show how to join. With one, the board stays in view while faces change. */
function PickBanner({ remoteUrl, room, onOpenRemote }) {
  return (
    <div className="gw-pick">
      <div className="gw-pick-card">
        <div className="gw-pick-emoji">🤫</div>
        <div className="gw-pick-text">Mr Bowen chooses a secret person on his phone.</div>
        <div className="gw-pick-join">
          <QrCode text={remoteUrl} className="gw-pick-qr" />
          <div>
            <div className="gw-kicker">Scan to choose</div>
            <div className="gw-join-code">{room}</div>
            <button className="gw-link mt-1" onClick={onOpenRemote}>
              <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
              Open the remote in a window
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/** The phone dropped out mid-game: a small way back in, out of the player's way. */
function JoinChip({ remoteUrl, room }) {
  return (
    <div className="gw-joinchip">
      <QrCode text={remoteUrl} className="gw-joinchip-qr" />
      <div>
        <div className="gw-kicker">Remote lost</div>
        <div className="font-black tracking-widest">{room}</div>
      </div>
    </div>
  )
}

function Splash({ splash }) {
  const text = { yes: 'YES!', no: 'NO!', again: 'Try again!' }[splash.kind]
  return (
    <div key={splash.key} className={`gw-splash is-${splash.kind}`} aria-live="assertive">
      <div className="gw-splash-word">{text}</div>
      {splash.q && <div className="gw-splash-q">“{splash.q}”</div>}
      <div className="gw-splash-sub">
        {splash.kind === 'again' ? 'Ask a YES or NO question.' : `Question ${splash.n}`}
      </div>
    </div>
  )
}

function ConfirmGuess({ person, onYes, onNo }) {
  return (
    <div className="gw-modal" onClick={onNo}>
      <div className="gw-confirm" onClick={(e) => e.stopPropagation()}>
        <div className="gw-confirm-face"><Face person={person} /></div>
        <div className="gw-confirm-q">Is it <b>{person?.name}</b>?</div>
        <div className="gw-confirm-actions">
          <button className="gw-btn gw-btn-ghost" onClick={onNo}>Go back</button>
          <button className="gw-btn gw-btn-gold" onClick={onYes} autoFocus>Yes, final answer!</button>
        </div>
      </div>
    </div>
  )
}

function Reveal({ guess, secret, gaveUp, won, questions, prize, onNext }) {
  const asked = `${questions} question${questions === 1 ? '' : 's'}`
  return (
    <div className={`gw-reveal ${gaveUp ? 'is-quick' : ''}`}>
      {!gaveUp && (
        <div className="gw-stage1">
          <div className="gw-stage1-text">Is it…</div>
          <div className="gw-reveal-card gw-drumroll"><Face person={guess} /><span>{guess?.name}</span></div>
        </div>
      )}

      <div className="gw-stage2">
        {won ? (
          <>
            <div className="gw-verdict is-win">YES!</div>
            <div className="gw-reveal-card is-win"><Face person={secret} /><span>{secret?.name}</span></div>
            {prize > 0 ? (
              <div className="gw-payout">
                <Bucks n={prize} className="gw-payout-bucks" />
                <span><b>{prize} Riverbuck{prize === 1 ? '' : 's'}!</b> In {asked}.</span>
              </div>
            ) : (
              <div className="gw-payout"><span>Correct, in {asked}. No Riverbucks this time.</span></div>
            )}
          </>
        ) : (
          <>
            <div className="gw-verdict is-lose">{gaveUp ? 'It was…' : 'BOO!'}</div>
            <div className="gw-reveal-pair">
              {!gaveUp && (
                <div className="gw-reveal-card is-wrong"><Face person={guess} /><span>{guess?.name}</span></div>
              )}
              <div className="gw-reveal-card is-answer"><Face person={secret} /><span>{secret?.name}</span></div>
            </div>
            <div className="gw-payout"><span>{gaveUp ? 'The secret person.' : <>It was <b>{secret?.name}</b>.</>}</span></div>
          </>
        )}
        <button className="gw-btn gw-btn-orange gw-next-btn" onClick={onNext}>Next player</button>
      </div>

      {won && (
        <div className="gw-confetti" aria-hidden="true">
          {CONFETTI.map((p, i) => (
            <span
              key={i}
              style={{ left: `${p.left}%`, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`, fontSize: `${p.size}vmin`, '--spin': p.spin }}
            >
              {p.emoji}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
