import type { CSSProperties } from 'react'
import type { ClubTheme } from '@/types/club'

export function buildClubTheme(theme: ClubTheme): CSSProperties {
  return {
    '--club-primary': theme.primaryColor,
    '--club-secondary': theme.secondaryColor,
    '--club-accent': theme.accentColor,
    '--club-dark': theme.darkColor,
    '--club-glass-tint': theme.glassTint,
    '--club-glass-stroke': theme.glassStroke,
    '--club-text-dark': theme.textOnDark,
    '--club-text-light': theme.textOnLight,
  } as CSSProperties
}
