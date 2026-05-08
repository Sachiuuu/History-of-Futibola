'use client'

import { useState } from 'react'
import type { SeasonData } from '@/types/season'
import SectionHeader from '@/components/ui/SectionHeader'
import KitDisplay from './KitDisplay'
import SeasonSparkline from './SeasonSparkline'

interface SeasonSectionProps {
  availableSeasons: string[]
  seasonsData: Record<string, SeasonData>
}

function gd(s: SeasonData): string {
  const diff = s.leagueGoalsFor - s.leagueGoalsAgainst
  return diff >= 0 ? `+${diff}` : String(diff)
}

function notable(s: SeasonData): string {
  if (s.internationalTournaments.length > 0) {
    const t = s.internationalTournaments[0]
    return `${t.competition} — ${t.stage}`
  }
  return s.seasonHighlight.slice(0, 60) + '…'
}

function ordSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return s[(v - 20) % 10] || s[v] || s[0]
}

export default function SeasonSection({ availableSeasons, seasonsData }: SeasonSectionProps) {
  const firstSeason = availableSeasons[0] ?? null
  const [selected, setSelected] = useState<string | null>(firstSeason)

  const seasonList = availableSeasons
    .map((s) => seasonsData[s])
    .filter(Boolean)

  const panel = selected ? seasonsData[selected] : null

  return (
    <section id="seasons">
      <SectionHeader kicker="Form Guide" title="Season by Season" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[7fr_5fr]">
        {/* Left: seasons table + kits */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div style={{ border: '1px solid var(--rule)', background: 'var(--paper-2)', overflowX: 'auto' }}>
          <SeasonSparkline seasons={[...seasonList].reverse()} />
          <table className="season-table">
            <thead>
              <tr>
                <th>Season</th>
                <th className="num">Pos</th>
                <th className="num">Pts</th>
                <th className="num">W</th>
                <th className="num">D</th>
                <th className="num">L</th>
                <th className="num">GD</th>
                <th>Notable</th>
              </tr>
            </thead>
            <tbody>
              {seasonList.map((s, i) => (
                <tr
                  key={s.season}
                  className={selected === s.season ? 'current' : ''}
                  tabIndex={0}
                  role="row"
                  aria-pressed={selected === s.season}
                  onClick={() => setSelected(s.season)}
                  onKeyDown={(e) => e.key === 'Enter' && setSelected(s.season)}
                >
                  <td className="season-cell">{s.displayLabel}</td>
                  <td className="num pos-cell">
                    <span className="pos-pill">{s.leaguePosition}</span>
                  </td>
                  <td className="num">{s.leaguePoints}</td>
                  <td className="num">{s.leagueWins}</td>
                  <td className="num">{s.leagueDraws}</td>
                  <td className="num">{s.leagueLosses}</td>
                  <td className="num">{gd(s)}</td>
                  <td className="notable">{notable(s)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Kits below the season table */}
        {panel && (
          <div style={{ border: '1px solid var(--rule)', borderTop: 'none', background: 'var(--paper-2)', padding: '24px 20px' }}>
            <div className="kicker" style={{ color: 'var(--accent)', marginBottom: 16 }}>
              {panel.displayLabel} · Kits
            </div>
            <KitDisplay home={panel.kits.home} away={panel.kits.away} third={panel.kits.third} />
          </div>
        )}
        </div>

        {/* Right: current season panel */}
        {panel && (
          <aside
            key={selected}
            className="animate-fade-in"
            style={{
              padding: 36,
              border: '2px solid var(--accent)',
              background: 'var(--paper-2)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Head */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--rule)', paddingBottom: 20, marginBottom: 0 }}>
              <div>
                <div className="kicker" style={{ color: 'var(--accent)' }}>Current Season</div>
                <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 22, color: 'var(--ink)', marginTop: 4, letterSpacing: '-0.01em' }}>
                  {panel.displayLabel}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
                <span style={{
                  fontFamily: 'var(--display)', fontWeight: 800, fontSize: 72, lineHeight: 1, letterSpacing: '-0.04em',
                  color: panel.leaguePosition <= 4 ? 'var(--accent)' : panel.leaguePosition >= 15 ? '#b45309' : 'var(--ink)',
                }}>
                  {panel.leaguePosition}
                </span>
                <span style={{ fontFamily: 'var(--body)', fontSize: 20, fontWeight: 500, verticalAlign: 'super', marginLeft: 3, color: 'var(--muted)' }}>
                  {ordSuffix(panel.leaguePosition)}
                </span>
              </div>
            </div>

            {/* Stats grid 3×2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { n: panel.leaguePoints, label: 'Points' },
                { n: panel.leagueWins, label: 'Wins' },
                { n: panel.leagueDraws, label: 'Draws' },
                { n: panel.leagueLosses, label: 'Losses' },
                { n: panel.leagueGoalsFor, label: 'Goals for' },
                { n: panel.leagueGoalsAgainst, label: 'Against' },
              ].map(({ n, label }, i) => (
                <div
                  key={label}
                  style={{
                    padding: '20px 0',
                    borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--rule)' : 'none',
                    borderBottom: i < 3 ? '1px solid var(--rule)' : 'none',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 36, lineHeight: 1, letterSpacing: '-0.01em', color: 'var(--ink)' }}>{n}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 8 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'var(--rule)', margin: '20px 0' }} />

            {/* Top scorer / assister / tournament */}
            {[
              { label: 'Top scorer', val: `${panel.topScorer.name} · ${panel.topScorer.goals} goals` },
              { label: 'Top assister', val: `${panel.topAssister.name} · ${panel.topAssister.assists ?? '—'} assists` },
              ...(panel.internationalTournaments[0]
                ? [{ label: panel.internationalTournaments[0].competition, val: `${panel.internationalTournaments[0].stage} — ${panel.internationalTournaments[0].result}` }]
                : []),
            ].map(({ label, val }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', gap: 16, fontSize: 14, borderBottom: '1px solid var(--rule)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', flexShrink: 0 }}>{label}</div>
                <div style={{ textAlign: 'right', color: 'var(--ink)' }}><strong>{val}</strong></div>
              </div>
            ))}

            {/* Season note */}
            <p style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--rule)', fontSize: 14, fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.6 }}>
              {panel.seasonHighlight}
            </p>

          </aside>
        )}
      </div>
    </section>
  )
}
