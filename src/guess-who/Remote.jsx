// src/guess-who/Remote.jsx
// Mr Bowen's remote, at #/guess-who/remote/<room>: on his phone (scan the QR on
// the board) or in a second window on the laptop. It shows the secret person
// and sends the board what he says. The board keeps the game; this end only
// asks, and draws the copy of the game the board sends back.
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Dices, Undo2, RotateCcw, Eye, Check, X, MessageCircleQuestion, Loader2, Settings2, LogOut, Users, Plus, Minus } from 'lucide-react'
import { Face, Pumpkin } from './art.jsx'
import SignIn from './SignIn.jsx'
import { useSchool } from './useSchool.js'
import { openBus } from './bus.js'
import { signOut } from './school.js'
import { BOARD_SIZE, MIN_BOARD, MONSTERS, cleanRoomCode, cleanSteps, prizeFor, randomOf } from './game.js'

export default function Remote() {
  const { room: param } = useParams()
  const room = cleanRoomCode(param)
  if (room.length !== 4) return <RoomEntry />
  return <RemoteRoom key={room} room={room} />
}

function RoomEntry() {
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const go = (e) => {
    e.preventDefault()
    const c = cleanRoomCode(code)
    if (c.length === 4) navigate(`/guess-who/remote/${c}`)
  }
  return (
    <div className="gw-remote">
      <form onSubmit={go} className="gw-panel p-5 space-y-3 mt-10">
        <div className="gw-kicker">Guess Who remote</div>
        <div className="font-bold text-white/90">Type the room code from the board.</div>
        <input
          className="gw-input gw-code-input"
          value={code}
          onChange={(e) => setCode(cleanRoomCode(e.target.value))}
          placeholder="ABCD"
          autoCapitalize="characters"
          autoComplete="off"
          spellCheck={false}
        />
        <button className="gw-btn gw-btn-orange w-full justify-center" type="submit">Join</button>
      </form>
    </div>
  )
}

function RemoteRoom({ room }) {
  const [host, setHost] = useState(null) // { game, ready, count, pool }
  const [net, setNet] = useState('connecting')
  const [boardLive, setBoardLive] = useState(false)
  // Kept here, not in the pick screen, so "Deal a new 24" keeps the editor open.
  const [editingFaces, setEditingFaces] = useState(false)
  const busRef = useRef(null)
  const lastState = useRef(0)

  useEffect(() => {
    const me = `remote-${Math.random().toString(36).slice(2, 8)}`
    // `let`: the status callback below fires later and needs the bus it belongs to.
    let bus
    bus = openBus(room, me, (msg) => {
      if (msg.from !== 'board' || msg.type !== 'state' || !msg.game) return
      lastState.current = Date.now()
      setBoardLive(true)
      setHost({ game: msg.game, ready: msg.ready, count: msg.count, pool: Array.isArray(msg.pool) ? msg.pool : [] })
    }, (status) => {
      setNet(status)
      if (status === 'live') bus?.send('hello')
    })
    busRef.current = bus
    bus.send('hello')
    // The hello doubles as a heartbeat: the board answers each one with the
    // whole game, which also tells this end the board is still there.
    const beat = setInterval(() => {
      bus.send('hello')
      setBoardLive(Date.now() - lastState.current < 12000)
    }, 4000)
    return () => { clearInterval(beat); bus.close(); busRef.current = null }
  }, [room])

  const send = (type, body) => {
    navigator.vibrate?.(25)
    busRef.current?.send(type, body)
  }

  const game = host?.game
  const school = useSchool(Boolean(game) && game.source !== 'monsters')
  const people = game?.source === 'monsters' ? MONSTERS : school.students
  const byId = useMemo(() => new Map((people || []).map((p) => [p.id, p])), [people])

  let body
  if (!host) {
    body = (
      <div className="gw-panel p-5 text-center space-y-2">
        <Loader2 className="w-8 h-8 mx-auto animate-spin text-orange-300" />
        <div className="font-bold">Looking for board {room}…</div>
        <div className="text-sm text-white/60">Open Guess Who on the laptop. The code is on its start screen.</div>
      </div>
    )
  } else if (game.source !== 'monsters' && school.session === null) {
    body = <SignIn compact purpose="Sign in to see the secret student" />
  } else if (game.phase === 'lobby') {
    body = <LobbyControls host={host} send={send} />
  } else if (game.phase === 'pick' && editingFaces) {
    body = <FacesEditor key={game.game} game={game} pool={host.pool} byId={byId} send={send} onDone={() => setEditingFaces(false)} />
  } else if (game.phase === 'pick') {
    body = <PickSecret key={game.game} game={game} byId={byId} send={send} onEditFaces={() => setEditingFaces(true)} />
  } else if (game.phase === 'play') {
    body = <PlayControls game={game} byId={byId} send={send} />
  } else {
    body = <RevealControls game={game} byId={byId} send={send} />
  }

  return (
    <div className="gw-remote">
      <header className="gw-remote-head">
        <div>
          <div className="gw-kicker">Guess Who remote</div>
          <div className="font-black text-lg leading-none">Room {room}</div>
        </div>
        <span className={`gw-net ${boardLive ? 'is-live' : net === 'offline' ? 'is-off' : ''}`}>
          {boardLive ? 'Board connected' : net === 'offline' ? 'No internet' : 'Connecting…'}
        </span>
      </header>
      {school.error && game && game.source !== 'monsters' && <p className="gw-panel p-3 text-sm font-bold text-rose-300">{school.error}</p>}
      {body}
      {game && game.phase !== 'play' && <StepsEditor key={game.steps.join('-')} steps={game.steps} send={send} />}
      {school.session && (
        <button className="gw-link mx-auto mt-6" onClick={() => signOut()}>
          <LogOut className="w-4 h-4" strokeWidth={2.5} />
          Sign out of this phone
        </button>
      )}
    </div>
  )
}

function LobbyControls({ host, send }) {
  return (
    <div className="gw-panel p-5 space-y-3">
      <div className="font-bold text-white/90">
        {host.ready
          ? `The board is ready: ${host.game.source === 'monsters' ? 'the monsters' : host.game.source === 'class' ? `your class, ${host.count} students` : `${host.count} students`}.`
          : 'The board is still loading its faces.'}
      </div>
      <button className="gw-btn gw-btn-orange w-full justify-center gw-remote-big" disabled={!host.ready} onClick={() => send('deal')}>
        Deal the cards
      </button>
    </div>
  )
}

function PickSecret({ game, byId, send, onEditFaces }) {
  const [chosen, setChosen] = useState(null)
  const person = byId.get(chosen)
  return (
    <div className="space-y-3">
      <div className="gw-panel p-4 space-y-3">
        <div className="font-black text-lg">Choose the secret person</div>
        <button className="gw-btn gw-btn-gold w-full justify-center gw-remote-big" onClick={() => send('pick', { id: randomOf(game.cards) })}>
          <Dices className="w-6 h-6" strokeWidth={2.5} />
          Random
        </button>
        <div className="text-sm text-white/60 text-center">or tap a face below</div>
        <button className="gw-btn gw-btn-ghost w-full justify-center" onClick={onEditFaces}>
          <Users className="w-5 h-5" strokeWidth={2.5} />
          Change the {game.cards.length} faces
        </button>
      </div>
      <div className="gw-mini-grid">
        {game.cards.map((id) => (
          <button key={id} className={`gw-mini ${chosen === id ? 'is-chosen' : ''}`} onClick={() => setChosen(id)}>
            <Face person={byId.get(id)} />
            <span className="gw-mini-name">{byId.get(id)?.name}</span>
          </button>
        ))}
      </div>
      {chosen && (
        <div className="gw-sheet">
          <button className="gw-btn gw-btn-orange w-full justify-center gw-remote-big" onClick={() => send('pick', { id: chosen })}>
            Start with {person?.name || 'this one'}
          </button>
        </div>
      )}
    </div>
  )
}

/**
 * Before the secret is chosen: take faces off the board or put others on. Each
 * change goes to the board at once, so the room sees it happen. The list here
 * is the truth while editing, so quick taps never fight a reply in flight.
 */
function FacesEditor({ game, pool, byId, send, onDone }) {
  const [cards, setCards] = useState(game.cards)
  const change = (next) => {
    setCards(next)
    send('setCards', { cards: next })
  }
  const nameOf = (id) => byId.get(id)?.name || ''
  const off = pool.filter((id) => !cards.includes(id)).sort((a, b) => nameOf(a).localeCompare(nameOf(b)))
  const full = cards.length >= BOARD_SIZE
  const fewest = cards.length <= MIN_BOARD
  return (
    <div className="space-y-3">
      <div className="gw-panel p-4 flex items-center justify-between gap-3">
        <div>
          <div className="font-black text-lg leading-tight">Change the faces</div>
          <div className="text-sm text-white/60">{cards.length} on the board · {MIN_BOARD} to {BOARD_SIZE}</div>
        </div>
        <button className="gw-btn gw-btn-orange" onClick={onDone}>
          <Check className="w-5 h-5" strokeWidth={3} />
          Done
        </button>
      </div>

      <div className="gw-kicker px-1">On the board · tap to take off</div>
      <div className="gw-mini-grid">
        {cards.map((id) => (
          <button key={id} className="gw-mini" disabled={fewest} onClick={() => change(cards.filter((x) => x !== id))}>
            <Face person={byId.get(id)} />
            <span className="gw-mini-badge is-off"><Minus className="w-3.5 h-3.5" strokeWidth={3.5} /></span>
            <span className="gw-mini-name">{nameOf(id)}</span>
          </button>
        ))}
      </div>

      {off.length > 0 && (
        <>
          <div className="gw-kicker px-1">{full ? 'Not on the board · take one off to add' : 'Not on the board · tap to add'}</div>
          <div className="gw-mini-grid">
            {off.map((id) => (
              <button key={id} className="gw-mini is-spare" disabled={full} onClick={() => change([...cards, id])}>
                <Face person={byId.get(id)} />
                <span className="gw-mini-badge is-on"><Plus className="w-3.5 h-3.5" strokeWidth={3.5} /></span>
                <span className="gw-mini-name">{nameOf(id)}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {pool.length > BOARD_SIZE && (
        <button className="gw-btn gw-btn-ghost w-full justify-center" onClick={() => send('deal')}>
          <Dices className="w-5 h-5" strokeWidth={2.5} />
          Deal a new {BOARD_SIZE} at random
        </button>
      )}
    </div>
  )
}

function PlayControls({ game, byId, send }) {
  const secret = byId.get(game.secret)
  const asked = game.log.length
  const prize = prizeFor(asked, game.steps)
  const facesLeft = game.cards.length - game.down.length
  const secretDown = game.down.includes(game.secret)

  // A buzz when the player sends a question, so Mr Bowen can look up from the crowd.
  useEffect(() => {
    if (game.pending) navigator.vibrate?.([60, 40, 60])
  }, [game.pending])

  // One press, one question: the buttons wait for the board to count it, so a
  // double tap in the noise of a carnival cannot cost the player a Riverbuck.
  const [pendingAt, setPendingAt] = useState(null)
  const waiting = pendingAt !== null && pendingAt === asked
  useEffect(() => {
    if (pendingAt === null) return
    const t = setTimeout(() => setPendingAt(null), 2500)
    return () => clearTimeout(t)
  }, [pendingAt])
  const answer = (a) => {
    if (waiting) return
    send('answer', { answer: a })
    if (a !== 'again') setPendingAt(asked)
  }

  const [menu, setMenu] = useState(false)

  return (
    <div className="space-y-3 pb-4">
      <div className="gw-secret">
        <div className="gw-secret-face"><Face person={secret} /></div>
        <div className="min-w-0">
          <div className="gw-kicker">The secret person</div>
          <div className="gw-secret-name">{secret?.name || '…'}</div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {secret?.level && <span className="gw-chip">{secret.level}</span>}
            {secret?.gender && <span className="gw-chip">{secret.gender}</span>}
            {secret?.age != null && <span className="gw-chip">Age {secret.age}</span>}
          </div>
        </div>
      </div>

      <div key={game.pending || 'none'} className={`gw-incoming ${game.pending ? 'is-new' : ''}`}>
        {game.pending ? (
          <>
            <div className="gw-kicker">They ask</div>
            <div className="gw-incoming-q">“{game.pending}”</div>
          </>
        ) : (
          <div className="text-white/60 font-bold">Waiting for their question… They can also ask out loud.</div>
        )}
      </div>

      <div className="gw-remote-count">
        <div><span className="gw-remote-count-n">{asked}</span> question{asked === 1 ? '' : 's'}</div>
        <div className="gw-remote-prize">
          {prize > 0 ? (
            <>
              {Array.from({ length: prize }, (_, k) => <Pumpkin key={k} lit className="w-6 h-6" />)}
              <span>if they guess now</span>
            </>
          ) : (
            <span>No Riverbucks left</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="gw-answer is-yes" disabled={waiting} onClick={() => answer('yes')}>
          <Check className="w-10 h-10" strokeWidth={3.5} />
          YES
        </button>
        <button className="gw-answer is-no" disabled={waiting} onClick={() => answer('no')}>
          <X className="w-10 h-10" strokeWidth={3.5} />
          NO
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className="gw-btn gw-btn-ghost justify-center" onClick={() => answer('again')}>
          <MessageCircleQuestion className="w-5 h-5" strokeWidth={2.5} />
          Try again
        </button>
        <button className="gw-btn gw-btn-ghost justify-center" disabled={!asked} onClick={() => send('undo')}>
          <Undo2 className="w-5 h-5" strokeWidth={2.5} />
          Undo answer
        </button>
      </div>
      <p className="text-xs text-white/50 text-center">Try again: not a yes / no question. It goes back to them to fix, and is not counted.</p>

      {asked > 0 && (
        <div className="gw-panel p-3">
          <div className="font-bold text-sm mb-2">Questions so far</div>
          <ol className="gw-remote-log">
            {game.log.map((e, i) => (
              <li key={i} className={`is-${e.a}`}>
                <span className="gw-remote-log-n">{i + 1}</span>
                <span className={e.q ? '' : 'italic text-white/50'}>{e.q || 'Asked out loud'}</span>
                <b>{e.a === 'yes' ? 'YES' : 'NO'}</b>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="gw-panel p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-sm">{facesLeft} faces left on the board</span>
          {secretDown && <span className="gw-chip is-warn">Secret is flipped down</span>}
        </div>
        <div className="gw-mini-grid is-small">
          {game.cards.map((id) => (
            <span key={id} className={`gw-mini ${game.down.includes(id) ? 'is-down' : ''} ${id === game.secret ? 'is-secret' : ''}`}>
              <Face person={byId.get(id)} />
            </span>
          ))}
        </div>
      </div>

      <button className="gw-link mx-auto" onClick={() => setMenu(!menu)}>
        <Settings2 className="w-4 h-4" strokeWidth={2.5} />
        {menu ? 'Hide' : 'End this game'}
      </button>
      {menu && (
        <div className="grid grid-cols-2 gap-3">
          <button className="gw-btn gw-btn-ghost justify-center" onClick={() => { setMenu(false); send('giveUp') }}>
            <Eye className="w-5 h-5" strokeWidth={2.5} />
            Show the answer
          </button>
          <button className="gw-btn gw-btn-ghost justify-center" onClick={() => { setMenu(false); send('deal') }}>
            <RotateCcw className="w-5 h-5" strokeWidth={2.5} />
            New board
          </button>
        </div>
      )}
    </div>
  )
}

function RevealControls({ game, byId, send }) {
  const secret = byId.get(game.secret)
  const guess = byId.get(game.guess)
  const won = game.guess !== null && game.guess === game.secret
  const prize = won ? prizeFor(game.log.length, game.steps) : 0
  return (
    <div className="space-y-3">
      <div className={`gw-panel p-5 text-center space-y-2 ${won ? 'gw-result-win' : 'gw-result-lose'}`}>
        <div className="gw-kicker">{game.log.length} question{game.log.length === 1 ? '' : 's'}</div>
        {won ? (
          <>
            <div className="text-2xl font-black">They got it!</div>
            <div className="flex justify-center gap-1">
              {Array.from({ length: prize }, (_, k) => <Pumpkin key={k} lit className="w-10 h-10" />)}
            </div>
            <div className="text-xl font-black">
              {prize ? `Pay ${prize} Riverbuck${prize === 1 ? '' : 's'}` : 'Too many questions: no Riverbucks'}
            </div>
          </>
        ) : game.guess === null ? (
          <div className="text-2xl font-black">Game ended: it was {secret?.name}</div>
        ) : (
          <>
            <div className="text-2xl font-black">Wrong guess</div>
            <div className="text-white/80">They said {guess?.name}. It was {secret?.name}.</div>
          </>
        )}
      </div>
      <button className="gw-btn gw-btn-orange w-full justify-center gw-remote-big" onClick={() => send('deal')}>
        Next player
      </button>
    </div>
  )
}

/** The three Riverbucks steps. Saved by the board, so they hold for every game until changed. */
function StepsEditor({ steps, send }) {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState(steps)
  const clean = cleanSteps(draft)
  const changed = clean && clean.join() !== steps.join()
  return (
    <div className="mt-4">
      <button className="gw-link mx-auto" onClick={() => setOpen(!open)}>
        <Settings2 className="w-4 h-4" strokeWidth={2.5} />
        Riverbucks steps
      </button>
      {open && (
        <div className="gw-panel p-4 mt-2 space-y-2">
          {[3, 2, 1].map((value, k) => (
            <label key={value} className="flex items-center gap-3 font-bold">
              <span className="w-28">{value} Riverbuck{value === 1 ? '' : 's'}</span>
              <span className="text-white/60 text-sm">up to</span>
              <input
                className="gw-input w-20 text-center"
                type="number"
                inputMode="numeric"
                min="1"
                max="30"
                value={draft[k]}
                onChange={(e) => setDraft(draft.map((n, j) => (j === k ? e.target.value : n)))}
              />
              <span className="text-white/60 text-sm">questions</span>
            </label>
          ))}
          {!clean && <p className="text-sm font-bold text-rose-300">Each number must be bigger than the one above it.</p>}
          <button className="gw-btn gw-btn-orange w-full justify-center" disabled={!changed} onClick={() => send('steps', { steps: clean })}>
            Save steps
          </button>
        </div>
      )}
    </div>
  )
}
