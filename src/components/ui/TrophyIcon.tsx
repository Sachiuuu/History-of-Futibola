'use client'

/* Distinct SVG trophy shapes per competition type, with 3D spin via rotateY + brightness */

const TROPHY_SHAPES: Record<string, (id: string) => React.ReactElement> = {
  'champions-league': (id) => (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id={`gold-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5d778" />
          <stop offset="40%" stopColor="#c8992a" />
          <stop offset="70%" stopColor="#e8c44a" />
          <stop offset="100%" stopColor="#a07820" />
        </linearGradient>
        <linearGradient id={`shine-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Big-ear handles */}
      <path d="M18 18 C4 22 2 42 14 46 L20 40 C12 36 12 24 20 24 Z" fill={`url(#gold-${id})`} />
      <path d="M62 18 C76 22 78 42 66 46 L60 40 C68 36 68 24 60 24 Z" fill={`url(#gold-${id})`} />
      {/* Cup body */}
      <path d="M20 8 L60 8 L54 52 Q40 62 26 52 Z" fill={`url(#gold-${id})`} />
      {/* Lid top */}
      <ellipse cx="40" cy="8" rx="20" ry="5" fill={`url(#gold-${id})`} />
      {/* Stem */}
      <rect x="36" y="52" width="8" height="18" rx="3" fill={`url(#gold-${id})`} />
      {/* Base platform */}
      <rect x="24" y="70" width="32" height="6" rx="3" fill={`url(#gold-${id})`} />
      <rect x="20" y="76" width="40" height="5" rx="2" fill={`url(#gold-${id})`} />
      {/* Shine overlay */}
      <path d="M20 8 L60 8 L54 52 Q40 62 26 52 Z" fill={`url(#shine-${id})`} />
    </svg>
  ),

  'league': (id) => (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id={`gold-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5d778" />
          <stop offset="40%" stopColor="#b8861a" />
          <stop offset="70%" stopColor="#e8c44a" />
          <stop offset="100%" stopColor="#9a7010" />
        </linearGradient>
      </defs>
      {/* Jug-style lid */}
      <ellipse cx="40" cy="10" rx="18" ry="5" fill={`url(#gold-${id})`} />
      <rect x="22" y="6" width="36" height="8" rx="2" fill={`url(#gold-${id})`} />
      {/* Jug handles */}
      <path d="M22 18 C8 22 8 46 22 50" stroke={`url(#gold-${id})`} strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M58 18 C72 22 72 46 58 50" stroke={`url(#gold-${id})`} strokeWidth="6" strokeLinecap="round" fill="none" />
      {/* Body */}
      <path d="M22 14 L58 14 L55 52 Q40 60 25 52 Z" fill={`url(#gold-${id})`} />
      {/* Neck / stem */}
      <rect x="35" y="52" width="10" height="16" rx="4" fill={`url(#gold-${id})`} />
      {/* Base tiers */}
      <rect x="26" y="68" width="28" height="5" rx="2" fill={`url(#gold-${id})`} />
      <rect x="20" y="73" width="40" height="6" rx="2" fill={`url(#gold-${id})`} />
    </svg>
  ),

  'fa-cup': (id) => (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id={`silver-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8e8f0" />
          <stop offset="40%" stopColor="#9090a8" />
          <stop offset="70%" stopColor="#d0d0e0" />
          <stop offset="100%" stopColor="#707088" />
        </linearGradient>
      </defs>
      {/* Small round knob on top */}
      <circle cx="40" cy="7" r="5" fill={`url(#silver-${id})`} />
      {/* Lid */}
      <ellipse cx="40" cy="12" rx="14" ry="4" fill={`url(#silver-${id})`} />
      {/* Small handles */}
      <path d="M26 20 C16 24 16 42 26 46" stroke={`url(#silver-${id})`} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M54 20 C64 24 64 42 54 46" stroke={`url(#silver-${id})`} strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Body — rounder, more globular */}
      <path d="M26 16 Q20 34 22 48 Q40 58 58 48 Q60 34 54 16 Z" fill={`url(#silver-${id})`} />
      {/* Stem */}
      <rect x="36" y="52" width="8" height="14" rx="3" fill={`url(#silver-${id})`} />
      {/* Base */}
      <rect x="25" y="66" width="30" height="5" rx="2" fill={`url(#silver-${id})`} />
      <rect x="20" y="71" width="40" height="6" rx="2" fill={`url(#silver-${id})`} />
    </svg>
  ),

  'europa': (id) => (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id={`bronze-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0a060" />
          <stop offset="40%" stopColor="#b06020" />
          <stop offset="70%" stopColor="#e08040" />
          <stop offset="100%" stopColor="#904010" />
        </linearGradient>
      </defs>
      {/* Handles */}
      <path d="M20 16 C8 20 8 44 20 48" stroke={`url(#bronze-${id})`} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M60 16 C72 20 72 44 60 48" stroke={`url(#bronze-${id})`} strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Cup body */}
      <path d="M20 12 L60 12 L57 50 Q40 60 23 50 Z" fill={`url(#bronze-${id})`} />
      {/* Lid */}
      <ellipse cx="40" cy="12" rx="20" ry="5" fill={`url(#bronze-${id})`} />
      {/* Star on lid */}
      <path d="M40 4 L41.5 8.5 L46 8.5 L42.5 11 L44 15.5 L40 13 L36 15.5 L37.5 11 L34 8.5 L38.5 8.5 Z" fill="#f5d778" opacity="0.9" />
      {/* Stem */}
      <rect x="36" y="50" width="8" height="18" rx="3" fill={`url(#bronze-${id})`} />
      {/* Base */}
      <rect x="24" y="68" width="32" height="5" rx="2" fill={`url(#bronze-${id})`} />
      <rect x="20" y="73" width="40" height="6" rx="2" fill={`url(#bronze-${id})`} />
    </svg>
  ),

  'league-cup': (id) => (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id={`gold2-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5d778" />
          <stop offset="40%" stopColor="#c8992a" />
          <stop offset="100%" stopColor="#a07820" />
        </linearGradient>
      </defs>
      <path d="M22 16 C10 20 10 44 22 48" stroke={`url(#gold2-${id})`} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M58 16 C70 20 70 44 58 48" stroke={`url(#gold2-${id})`} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M22 10 L58 10 L56 50 Q40 58 24 50 Z" fill={`url(#gold2-${id})`} />
      <ellipse cx="40" cy="10" rx="18" ry="5" fill={`url(#gold2-${id})`} />
      <rect x="37" y="50" width="6" height="20" rx="3" fill={`url(#gold2-${id})`} />
      <rect x="26" y="70" width="28" height="5" rx="2" fill={`url(#gold2-${id})`} />
      <rect x="21" y="75" width="38" height="5" rx="2" fill={`url(#gold2-${id})`} />
    </svg>
  ),

  'super-cup': (id) => (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id={`supergold-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe08a" />
          <stop offset="50%" stopColor="#c89020" />
          <stop offset="100%" stopColor="#f5c840" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="8" r="6" fill={`url(#supergold-${id})`} />
      <path d="M20 14 C10 20 10 46 20 52" stroke={`url(#supergold-${id})`} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M60 14 C70 20 70 46 60 52" stroke={`url(#supergold-${id})`} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M20 10 L60 10 L58 54 Q40 64 22 54 Z" fill={`url(#supergold-${id})`} />
      <ellipse cx="40" cy="10" rx="20" ry="6" fill={`url(#supergold-${id})`} />
      <rect x="36" y="54" width="8" height="16" rx="3" fill={`url(#supergold-${id})`} />
      <rect x="24" y="70" width="32" height="5" rx="2" fill={`url(#supergold-${id})`} />
      <rect x="19" y="75" width="42" height="6" rx="2" fill={`url(#supergold-${id})`} />
    </svg>
  ),

  'cwc': (id) => (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id={`cwcgold-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5d778" />
          <stop offset="40%" stopColor="#c8992a" />
          <stop offset="100%" stopColor="#906010" />
        </linearGradient>
      </defs>
      {/* Globe shape on top */}
      <circle cx="40" cy="14" r="12" fill={`url(#cwcgold-${id})`} />
      <ellipse cx="40" cy="14" rx="12" ry="5" fill="none" stroke="#a07820" strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="2" x2="40" y2="26" stroke="#a07820" strokeWidth="1" opacity="0.5" />
      {/* Base stem */}
      <rect x="36" y="26" width="8" height="10" rx="2" fill={`url(#cwcgold-${id})`} />
      {/* Wide base */}
      <path d="M20 36 L60 36 L58 54 Q40 62 22 54 Z" fill={`url(#cwcgold-${id})`} />
      <rect x="34" y="54" width="12" height="16" rx="3" fill={`url(#cwcgold-${id})`} />
      <rect x="23" y="70" width="34" height="5" rx="2" fill={`url(#cwcgold-${id})`} />
      <rect x="18" y="75" width="44" height="6" rx="2" fill={`url(#cwcgold-${id})`} />
    </svg>
  ),
}

const FALLBACK_SHAPE = (id: string) => TROPHY_SHAPES['league'](id)

interface TrophyIconProps {
  type?: string
  size?: number
  spinning?: boolean
}

let idCounter = 0

export default function TrophyIcon({ type = 'league', size = 80, spinning = true }: TrophyIconProps) {
  const id = `trophy-${type}-${idCounter++}`
  const shape = TROPHY_SHAPES[type] ?? FALLBACK_SHAPE

  return (
    <div
      style={{
        width: size,
        height: size * 1.25,
        perspective: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          animation: spinning ? 'trophy-spin-3d 4s ease-in-out infinite' : undefined,
          transformOrigin: 'center center',
          willChange: 'transform',
          filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.18))',
        }}
      >
        {shape(id)}
      </div>
    </div>
  )
}
