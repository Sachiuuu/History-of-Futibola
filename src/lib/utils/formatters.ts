export function formatYear(year: number): string {
  return year.toString()
}

export function formatSeason(season: string): string {
  return season.replace('-', '/')
}

export function formatNumber(n: number): string {
  return n.toLocaleString('en-GB')
}
