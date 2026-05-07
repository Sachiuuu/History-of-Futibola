import type { ReactNode, CSSProperties } from 'react'
import type { ClubTheme } from '@/types/club'
import { buildClubTheme } from '@/lib/theme/buildClubTheme'

interface PageWrapperProps {
  theme: ClubTheme
  children: ReactNode
  className?: string
}

export default function PageWrapper({ theme, children, className = '' }: PageWrapperProps) {
  const cssVars = buildClubTheme(theme) as CSSProperties

  const background = [
    `radial-gradient(ellipse 75% 55% at 2% 2%, ${theme.glassTint} 0%, transparent 65%)`,
    `radial-gradient(ellipse 55% 75% at 98% 98%, ${theme.glassTint} 0%, transparent 65%)`,
    `radial-gradient(ellipse 40% 50% at 50% 0%, ${theme.glassTint} 0%, transparent 60%)`,
    '#f7f6f3',
  ].join(', ')

  return (
    <div style={{ ...cssVars, background }} className={`min-h-screen ${className}`}>
      {children}
    </div>
  )
}
