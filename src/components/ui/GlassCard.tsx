import type { ReactNode, CSSProperties } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  strong?: boolean
  style?: CSSProperties
}

export default function GlassCard({ children, className = '', strong = false, style }: GlassCardProps) {
  return (
    <div className={`${strong ? 'glass-card-strong' : 'glass-card'} ${className}`} style={style}>
      {children}
    </div>
  )
}
