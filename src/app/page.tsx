import LeagueBrowser from '@/components/home/LeagueBrowser'
import Footer from '@/components/layout/Footer'
import { getAllClubs } from '@/lib/data/getAllClubs'

export default async function HomePage() {
  const clubs = await getAllClubs()
  return (
    <main>
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px 48px' }}>
        <div className="kicker-accent">Issue Nº 01</div>
        <h1 className="hero-title" style={{ color: 'var(--ink)', marginTop: 16 }}>
          Story of <span className="italic" style={{ color: 'var(--accent)' }}>Futiball</span>
        </h1>
        <p className="lede" style={{ marginTop: 24, maxWidth: 720 }}>
          Editorial profiles of the great clubs of European football.
        </p>
      </section>
      <div className="rule-band" />
      <LeagueBrowser clubs={clubs} />
      <Footer />
    </main>
  )
}
