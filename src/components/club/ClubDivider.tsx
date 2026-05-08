interface ClubDividerProps {
  variant?: 'stripes' | 'solid' | 'dots'
}

export default function ClubDivider({ variant = 'stripes' }: ClubDividerProps) {
  const base: React.CSSProperties = { maxWidth: 1280, margin: '0 auto' }

  if (variant === 'solid') {
    return (
      <div style={{
        ...base,
        height: 2,
        background: 'var(--accent)',
        opacity: 0.35,
      }} />
    )
  }

  if (variant === 'dots') {
    return (
      <div style={{
        ...base,
        height: 6,
        backgroundImage: 'radial-gradient(circle, var(--accent) 1.5px, transparent 1.5px)',
        backgroundSize: '12px 6px',
        opacity: 0.4,
      }} />
    )
  }

  return (
    <div style={{
      ...base,
      height: 6,
      background: 'repeating-linear-gradient(-45deg, var(--accent) 0, var(--accent) 3px, var(--club-secondary, var(--accent-soft)) 3px, var(--club-secondary, var(--accent-soft)) 6px, transparent 6px, transparent 16px)',
      opacity: 0.45,
    }} />
  )
}
