import { Reveal } from '../../components/Reveal'
import { Breadcrumbs } from '../../components/Breadcrumbs'

interface LegalPageProps {
  title: string
  crumbs: string
  paragraphs: string[]
}

export function LegalPage({ title, crumbs, paragraphs }: LegalPageProps) {
  return (
    <div className="legal-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: crumbs }]} />
      </div>

      <section className="legal-hero">
        <div className="container">
          <Reveal>
            <h1 className="h1 legal-hero-title">{title}</h1>
          </Reveal>
        </div>
        <style>{`
          .legal-hero { padding: 24px 0 48px; }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="legal-content">
              {paragraphs.map((p, i) => (
                <p key={i} className="body legal-para">{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`
          .legal-content { max-width: 720px; display: flex; flex-direction: column; gap: 16px; }
          .legal-para { color: var(--c-text-secondary); }
        `}</style>
      </section>
    </div>
  )
}
