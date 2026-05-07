import type { CSSProperties } from 'react'
import type { ClubTheme } from '@/types/club'

function hexToRgb(hex: string): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `${r}, ${g}, ${b}`
}

export function buildClubTheme(theme: ClubTheme): CSSProperties {
  const rgb = hexToRgb(theme.primaryColor)
  return {
    '--accent': theme.primaryColor,
    '--accent-soft': `rgba(${rgb}, 0.12)`,
    '--club-primary': theme.primaryColor,
    '--club-secondary': theme.secondaryColor,
    '--club-accent': theme.accentColor,
    '--club-dark': theme.darkColor,
  } as CSSProperties
}
