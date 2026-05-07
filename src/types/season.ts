export interface Kit {
  image: string
  primaryColor: string
  description: string
}

export interface Tournament {
  competition: string
  stage: string
  result: string
  groupStage?: string
  icon: string
}

export interface TopPlayer {
  name: string
  goals?: number
  assists?: number
  image: string
  nationality: string
  position: string
}

export interface SeasonData {
  clubId: string
  season: string
  displayLabel: string
  leaguePosition: number
  leaguePoints: number
  leagueWins: number
  leagueDraws: number
  leagueLosses: number
  leagueGoalsFor: number
  leagueGoalsAgainst: number
  leagueId: string
  kits: { home: Kit; away: Kit; third: Kit }
  internationalTournaments: Tournament[]
  topScorer: TopPlayer
  topAssister: TopPlayer
  seasonHighlight: string
}
