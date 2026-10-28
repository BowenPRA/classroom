// src/guess-who/art.jsx
// The game's pictures: the night sky behind the board, the jack-o'-lantern prize,
// the ghost on a flipped card, a face for any person or monster, and the QR
// code that brings the phone in. All drawn here in SVG or CSS, so there is
// nothing to source or credit.
import { useId, useMemo } from 'react'
import { encode } from 'uqr'

/**
 * A jack-o'-lantern: a ribbed, shaded pumpkin with a carved face. Lit, the face
 * glows from inside; out, it is a dark carving on a faded pumpkin.
 */
export function Lantern({ lit = true, className = '' }) {
  // Gradient ids must be unique per drawing; useId's punctuation is not safe in url().
  const id = `gwl${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <svg viewBox="0 0 120 112" className={`gw-lantern ${lit ? 'is-lit' : 'is-out'} ${className}`} aria-hidden="true">
      <defs>
        <radialGradient id={`${id}b`} cx="45%" cy="38%" r="70%">
          <stop offset="0" stopColor="#ffb551" />
          <stop offset="0.55" stopColor="#ff8a1f" />
          <stop offset="1" stopColor="#d4500e" />
        </radialGradient>
        <radialGradient id={`${id}s`} cx="50%" cy="40%" r="75%">
          <stop offset="0" stopColor="#f7781a" />
          <stop offset="1" stopColor="#b9400b" />
        </radialGradient>
        <radialGradient id={`${id}f`} cx="50%" cy="55%" r="65%">
          <stop offset="0" stopColor="#fff6c2" />
          <stop offset="0.35" stopColor="#ffd23f" />
          <stop offset="1" stopColor="#f08400" />
        </radialGradient>
        <linearGradient id={`${id}t`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7ea33a" />
          <stop offset="1" stopColor="#3e5c17" />
        </linearGradient>
      </defs>
      <path d="M56 28 C55 19 58 10 66 6 C69 4.5 71.5 7.5 69.5 9.5 C64.5 13 63.5 19 64.5 28 Z" fill={`url(#${id}t)`} />
      <path d="M66 14 C76 7 86 11 82 18 C79 23 72 20 76 16" stroke="#557d1c" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <ellipse cx="34" cy="68" rx="28" ry="35" fill={`url(#${id}s)`} />
      <ellipse cx="86" cy="68" rx="28" ry="35" fill={`url(#${id}s)`} />
      <ellipse cx="47" cy="68" rx="26" ry="38" fill={`url(#${id}b)`} />
      <ellipse cx="73" cy="68" rx="26" ry="38" fill={`url(#${id}b)`} />
      <ellipse cx="60" cy="68" rx="21" ry="40" fill={`url(#${id}b)`} />
      <path d="M45 32 C38 52 38 86 45 105 M75 32 C82 52 82 86 75 105" stroke="#a83a08" strokeWidth="1.6" fill="none" opacity="0.4" />
      <ellipse cx="45" cy="47" rx="7" ry="13" fill="#fff" opacity="0.2" transform="rotate(-18 45 47)" />
      {/* The dark rim is the cut edge of the carving: it keeps the face readable when small. */}
      <g className="gw-lantern-face" fill={lit ? `url(#${id}f)` : '#2b1708'} stroke={lit ? '#7a2c04' : 'none'} strokeWidth="2.6" strokeLinejoin="round">
        <path d="M35 61 Q35 58 38 58 L51 58 Q53 58 52 56 L46 45 Q45 43 44 45 L35 59 Z" />
        <path d="M85 61 Q85 58 82 58 L69 58 Q67 58 68 56 L74 45 Q75 43 76 45 L85 59 Z" />
        <path d="M56 70 L64 70 L60 63 Z" />
        <path d="M29 77 Q60 104 91 77 Q84 80 79 80 L79 86 L71 86 L71 82 Q60 84 49 82 L49 86 L41 86 L41 80 Q36 80 29 77 Z" />
      </g>
    </svg>
  )
}

/** A Riverbucks amount: a jack-o'-lantern and the number. The one way the game shows a prize. */
export function Prize({ n, className = '' }) {
  return (
    <span className={`gw-prize ${n ? '' : 'is-zero'} ${className}`}>
      <Lantern lit={Boolean(n)} className="gw-prize-lantern" />
      <span className="gw-prize-n">{n}</span>
    </span>
  )
}

/** The friendly ghost on the back of a flipped-down card. */
export function Ghost({ className = '' }) {
  return (
    <svg viewBox="0 0 100 110" className={className} aria-hidden="true">
      <path d="M18 104 L18 48 C18 24 32 8 50 8 C68 8 82 24 82 48 L82 104 L71 94 L61 104 L50 94 L39 104 L29 94 Z" fill="#f5f0ff" />
      <path d="M70 18 C78 26 82 36 82 48 L82 104 L71 94 L68 97 C76 80 78 50 70 18 Z" fill="#d8ccf5" />
      <ellipse cx="38" cy="46" rx="6" ry="8" fill="#2e1065" />
      <ellipse cx="62" cy="46" rx="6" ry="8" fill="#2e1065" />
      <ellipse cx="50" cy="64" rx="6" ry="7" fill="#2e1065" />
      <ellipse cx="29" cy="58" rx="5" ry="3" fill="#f9a8d4" opacity="0.6" />
      <ellipse cx="71" cy="58" rx="5" ry="3" fill="#f9a8d4" opacity="0.6" />
    </svg>
  )
}

function Bat({ className = '', style }) {
  return (
    <svg viewBox="0 0 120 50" className={className} style={style} aria-hidden="true">
      <g className="gw-bat-wings" fill="#05020a">
        <path d="M60 22 C50 6 30 4 10 12 C20 16 22 22 18 30 C28 26 36 30 40 36 C46 28 54 28 60 34 Z" />
        <path d="M60 22 C70 6 90 4 110 12 C100 16 98 22 102 30 C92 26 84 30 80 36 C74 28 66 28 60 34 Z" />
      </g>
      <ellipse cx="60" cy="26" rx="7" ry="10" fill="#05020a" />
      <path d="M55 17 L54 10 L58 15 Z M65 17 L66 10 L62 15 Z" fill="#05020a" />
    </svg>
  )
}

/** Moon, stars, bats and fog. Sits behind everything and never takes a tap. */
export function Sky() {
  return (
    <div className="gw-sky" aria-hidden="true">
      <div className="gw-stars" />
      <div className="gw-moon" />
      <Bat className="gw-bat" style={{ '--y': '9vh', '--d': '38s', '--delay': '-6s', '--s': '1' }} />
      <Bat className="gw-bat" style={{ '--y': '22vh', '--d': '52s', '--delay': '-30s', '--s': '0.7' }} />
      <Bat className="gw-bat" style={{ '--y': '4vh', '--d': '61s', '--delay': '-44s', '--s': '0.55' }} />
      <div className="gw-fog gw-fog-1" />
      <div className="gw-fog gw-fog-2" />
    </div>
  )
}

const initials = (name) =>
  String(name || '?')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

// Initials tiles take a colour from the name, so the same child is always
// the same colour, and a board of them is not a wall of one purple.
const TILE_COLOURS = ['#f97316', '#a855f7', '#22c55e', '#ec4899', '#06b6d4', '#eab308', '#ef4444', '#6366f1']
const tileColour = (name) => TILE_COLOURS[[...String(name)].reduce((n, c) => n + c.codePointAt(0), 0) % TILE_COLOURS.length]

/** A person's photo, a monster's emoji, or (no photo) big initials. Fills its box. */
export function Face({ person, className = '' }) {
  if (!person) return <div className={`gw-face-fill gw-face-loading ${className}`} />
  if (person.emoji) {
    return (
      <div className={`gw-face-fill gw-face-emoji ${className}`}>
        <span>{person.emoji}</span>
      </div>
    )
  }
  if (person.photo) {
    return <img src={person.photo} alt="" draggable={false} className={`gw-face-fill object-cover ${className}`} />
  }
  return (
    <div className={`gw-face-fill gw-face-initials ${className}`} style={{ '--tile': tileColour(person.name) }}>
      <span>{initials(person.name)}</span>
    </div>
  )
}

/** A QR code drawn as one SVG path, dark on a white tile so any phone reads it. */
export function QrCode({ text, className = '' }) {
  const d = useMemo(() => {
    const { data, size } = encode(text, { ecc: 'M', border: 0 })
    let path = ''
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (data[y][x]) path += `M${x} ${y}h1v1h-1z`
    return { path, size }
  }, [text])
  return (
    <svg viewBox={`-3 -3 ${d.size + 6} ${d.size + 6}`} className={className} shapeRendering="crispEdges" role="img" aria-label="QR code for the remote">
      <rect x="-3" y="-3" width={d.size + 6} height={d.size + 6} fill="#fff" rx="2" />
      <path d={d.path} fill="#140a24" />
    </svg>
  )
}
