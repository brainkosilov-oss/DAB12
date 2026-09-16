import { useState } from 'react'
import { Reveal } from '../../components/Reveal'
import { Placeholder } from '../../components/Placeholder'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { works } from '../../data/site'
import { Close } from '../../components/Icons'

const tabs = ['Все', 'Навесы', 'Ворота', 'Заборы', 'Лестницы', 'Террасы', 'Другое']

export function Works() {
  const [activeTab, setActiveTab] = useState('Все')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = activeTab === 'Все' ? works : works.filter((w) => w.tab === activeTab)

  return (
    <div className="works-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Работы' }]} />
      </div>

      <section className="works-hero">
        <div className="container">
          <Reveal>
            <span className="label label-accent" style={{ color: 'var(--c-text-secondary)' }}>ПОРТФОЛИО</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="h1 works-hero-title">НАШИ РАБОТЫ</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-lg works-hero-sub">Металлоконструкции, которые уже изготовили и установили.</p>
          </Reveal>
        </div>
        <style>{`
          .works-hero { padding: 24px 0 48px; }
          .works-hero-title { margin-top: 16px; }
          .works-hero-sub { color: var(--c-text-secondary); margin-top: 16px; }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="works-tabs" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`works-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  aria-selected={activeTab === tab}
                >
                  {tab}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="works-masonry">
            {filtered.map((w, i) => (
              <Reveal key={w.id} delay={i * 50}>
                <button className="work-card" onClick={() => setLightbox(works.indexOf(w))}>
                  <Placeholder label={w.title.toUpperCase()} aspect={i % 3 === 0 ? '3/4' : '4/3'} />
                  <div className="work-card-info">
                    <span className="label work-card-cat">{w.category}</span>
                    <h3 className="h4 work-card-title">{w.title}</h3>
                    <p className="body-sm work-card-desc">{w.description}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .works-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
          .works-tab {
            padding: 10px 20px;
            font-size: 14px;
            font-weight: 600;
            color: var(--c-text-secondary);
            border: 1px solid var(--c-border);
            border-radius: 8px;
            transition: all var(--t-fast);
          }
          .works-tab:hover { color: var(--c-text); border-color: var(--c-text); }
          .works-tab.active { background: var(--c-primary-dark); color: var(--c-text-dark); border-color: var(--c-primary-dark); }
          .works-masonry {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: auto;
            gap: 16px;
          }
          .work-card {
            display: flex;
            flex-direction: column;
            text-align: left;
            transition: transform var(--t-med);
          }
          .work-card:hover { transform: translateY(-4px); }
          .work-card .placeholder { transition: transform var(--t-med); }
          .work-card:hover .placeholder { transform: scale(1.03); }
          .work-card-info { display: flex; flex-direction: column; gap: 6px; padding-top: 12px; }
          .work-card-cat { color: var(--c-text-secondary); }
          .work-card-title { color: var(--c-text); }
          .work-card-desc { color: var(--c-text-secondary); }
          @media (max-width: 768px) { .works-masonry { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 480px) { .works-masonry { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Закрыть">
            <Close size={28} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Placeholder label={works[lightbox].title.toUpperCase()} aspect="16/10" />
            <div className="lightbox-info">
              <span className="label">{works[lightbox].category}</span>
              <h3 className="h3">{works[lightbox].title}</h3>
              <p className="body">{works[lightbox].description}</p>
            </div>
          </div>
          <style>{`
            .lightbox {
              position: fixed; inset: 0; z-index: 300;
              background: rgba(0,0,0,0.85);
              display: flex; align-items: center; justify-content: center;
              padding: 24px;
              animation: fadeIn var(--t-fast) forwards;
            }
            .lightbox-close {
              position: absolute; top: 24px; right: 24px;
              color: var(--c-text-dark); z-index: 10;
              padding: 8px;
            }
            .lightbox-content {
              max-width: 800px; width: 100%;
              animation: scaleIn var(--t-med) forwards;
            }
            .lightbox-info {
              display: flex; flex-direction: column; gap: 8px;
              padding-top: 16px;
              color: var(--c-text-dark);
            }
            .lightbox-info .label { color: var(--c-accent); }
          `}</style>
        </div>
      )}
    </div>
  )
}
