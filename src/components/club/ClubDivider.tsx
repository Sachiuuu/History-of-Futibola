export default function ClubDivider() {
  return (
    <div
      style={{
        height: 6,
        background: 'repeating-linear-gradient(-45deg, var(--accent) 0, var(--accent) 3px, var(--club-secondary, var(--accent-soft)) 3px, var(--club-secondary, var(--accent-soft)) 6px, transparent 6px, transparent 16px)',
        opacity: 0.45,
        maxWidth: 1280,
        margin: '0 auto',
      }}
    />
  )
}
