import { Reveal } from '../../components/Reveal'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { FileText, ArrowUpRight } from '../../components/Icons'

export function Documents() {
  const docs = [
    { id: 'd1', title: 'Документ 01', desc: 'Уточняется при запросе' },
    { id: 'd2', title: 'Документ 02', desc: 'Уточняется при запросе' },
    { id: 'd3', title: 'Документ 03', desc: 'Уточняется при запросе' },
    { id: 'd4', title: 'Документ 04', desc: 'Уточняется при запросе' },
  ]

  return (
    <div className="documents-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Документы' }]} />
      </div>

      <section className="docs-hero">
        <div className="container">
          <Reveal>
            <span className="label" style={{ color: 'var(--c-text-secondary)' }}>ДОКУМЕНТЫ</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="h1 docs-hero-title">ДОКУМЕНТЫ<br />И СЕРТИФИКАТЫ</h1>
          </Reveal>
        </div>
        <style>{`
          .docs-hero { padding: 24px 0 48px; }
          .docs-hero-title { margin-top: 16px; }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="docs-grid">
            {docs.map((d, i) => (
              <Reveal key={d.id} delay={i * 60}>
                <div className="doc-card">
                  <div className="doc-card-icon">
                    <FileText size={32} />
                  </div>
                  <div className="doc-card-info">
                    <h3 className="h4 doc-card-title">{d.title}</h3>
                    <p className="body-sm doc-card-desc">{d.desc}</p>
                  </div>
                  <button className="doc-card-link" aria-label={`Скачать ${d.title}`}>
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="body docs-note">
              Документы будут добавлены после предоставления. Используются placeholders.
            </p>
          </Reveal>
        </div>
        <style>{`
          .docs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .doc-card {
            display: flex; align-items: center; gap: 20px;
            padding: 24px;
            background: var(--c-white);
            border: 1px solid var(--c-border);
            border-radius: 12px;
            transition: border-color var(--t-fast);
          }
          .doc-card:hover { border-color: var(--c-text); }
          .doc-card-icon {
            width: 56px; height: 56px;
            display: flex; align-items: center; justify-content: center;
            background: var(--c-light-bg);
            border-radius: 10px;
            color: var(--c-text-secondary);
            flex-shrink: 0;
          }
          .doc-card-info { flex: 1; display: flex; flex-direction: column; gap: 4px; }
          .doc-card-title { color: var(--c-text); }
          .doc-card-desc { color: var(--c-text-secondary); }
          .doc-card-link {
            width: 40px; height: 40px;
            display: flex; align-items: center; justify-content: center;
            border: 1px solid var(--c-border);
            border-radius: 8px;
            color: var(--c-text-secondary);
            transition: all var(--t-fast);
            flex-shrink: 0;
          }
          .doc-card-link:hover { background: var(--c-primary-dark); color: var(--c-text-dark); border-color: var(--c-primary-dark); }
          .docs-note { margin-top: 32px; color: var(--c-text-secondary); }
          @media (max-width: 640px) { .docs-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>
    </div>
  )
}
