export interface ClubTheme {
  primaryColor: string
  secondaryColor: string
  accentColor: string
  darkColor: string
  glassTint: string
  glassStroke: string
  textOnDark: string
  textOnLight: string
}

export interface Stadium {
  name: string
  image: string
  capacity: number
  builtYear: number
  location: string
}

export interface TrophyEntry {
  competition: string
  count: number
  icon: string
  years: number[]
}

export interface TrophyRecord {
  leagueTitles: number
  breakdown: TrophyEntry[]
}

export interface TimelineEvent {
  year: number
  event: string
}

export interface Legend {
  id: string
  name: string
  position: string
  nationality: string
  yearsActive: string
  image: string
  careerGoals: number
  careerAppearances: number
  bio: string
  trophies: string[]
}

export interface ClubRecord {
  player?: string
  value?: number | string
  unit?: string
  description?: string
  year?: number
}

export interface Club {
  id: string
  name: string
  shortName: string
  nickname: string
  leagueId: string
  country: string
  city: string
  foundedYear: number
  badge: string
  stadium: Stadium
  description: string
  differentiator: string
  theme: ClubTheme
  trophies: TrophyRecord
  historicalTimeline: TimelineEvent[]
  records: Record<string, ClubRecord>
  legends: Legend[]
  availableSeasons: string[]
}
