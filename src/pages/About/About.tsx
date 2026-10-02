import { Link } from 'react-router-dom'
import { Reveal } from '../../components/Reveal'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { useSEO } from '../../hooks/useSEO'
import { stats, benefits } from '../../data/site'
import { ArrowUpRight } from '../../components/Icons'

export function About() {
  useSEO({
    title: 'О компании — Строительные решения | Екатеринбург',
    description: 'Строительные решения — две бригады строителей и сварщиков с собственным производством. Изготавливаем металлоконструкции и возводим частные постройки без посредников.',
    keywords: ['о компании', 'строительные решения', 'бригада строителей', 'сварщики', 'Екатеринбург', 'Верхняя Пышма'],
    canonical: 'https://строительные-решения.рф/about',
  })

  return (
    <div className="about-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'О компании' }]} />
      </div>

      <section className="about-hero">
        <div className="container">
          <Reveal>
            <span className="label" style={{ color: 'var(--c-text-secondary)' }}>О КОМПАНИИ</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="h1 about-hero-title">МЫ ПРОИЗВОДИМ,<br />А НЕ ПЕРЕПРОДАЁМ.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-lg about-hero-text">
              Строительные решения — это две частные бригады строителей и сварщиков. Мы изготавливаем конструкции под ваши размеры на собственном производстве, а также возводим любые частные постройки.
            </p>
          </Reveal>
        </div>
        <style>{`
          .about-hero { padding: 24px 0 48px; }
          .about-hero-title { margin-top: 16px; }
          .about-hero-text { color: var(--c-text-secondary); margin-top: 24px; max-width: 640px; }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-numbers">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="about-number">
                  <span className="about-number-value">{s.value}</span>
                  <span className="about-number-label">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .about-numbers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
          .about-number { display: flex; flex-direction: column; gap: 8px; padding: 32px 0; border-top: 2px solid var(--c-text); }
          .about-number-value { font-size: clamp(48px, 6vw, 72px); font-weight: 800; letter-spacing: -0.03em; line-height: 1; }
          .about-number-label { font-size: 15px; color: var(--c-text-secondary); }
          @media (max-width: 640px) { .about-numbers { grid-template-columns: 1fr; gap: 0; } }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-content">
            <Reveal>
              <div className="about-text">
                <span className="label">ПОДХОД</span>
                <p className="body-lg">
                  Мы занимаемся строительством домов и производством металлоконструкций самостоятельно — без посредников и перекупщиков.
                  Это значит, что мы контролируем качество на каждом этапе: от расчёта до монтажа.
                </p>
                <p className="body-lg">
                  Изготавливаем по вашим размерам, эскизам и техническим заданиям.
                  Работаем с частными клиентами, бизнесом и строительными компаниями.
                  Доставка и монтаж по всем регионам России.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="about-image">
                <img src="https://i.postimg.cc/XN8rwWkg/images-(9).jpg" alt="Строительные решения" style={{ width: '100%', borderRadius: '16px', aspectRatio: '4/3', objectFit: 'cover' }} />
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          .about-content { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
          .about-text { display: flex; flex-direction: column; gap: 16px; }
          .about-text .label { color: var(--c-text-secondary); }
          .about-text .body-lg { color: var(--c-text); }
          @media (max-width: 768px) { .about-content { grid-template-columns: 1fr; gap: 32px; } }
        `}</style>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="label" style={{ color: 'var(--c-text-secondary)' }}>ПРЕИМУЩЕСТВА</span>
          </Reveal>
          <div className="about-benefits">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="about-benefit">
                  <span className="about-benefit-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="h4">{b.title}</h3>
                  <p className="body">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .about-benefits { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 32px; }
          .about-benefit { display: flex; flex-direction: column; gap: 12px; padding: 32px 0; border-top: 1px solid var(--c-border); }
          .about-benefit-num { font-size: 13px; font-weight: 700; color: var(--c-accent); }
          .about-benefit .body { color: var(--c-text-secondary); }
          @media (max-width: 1024px) { .about-benefits { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 640px) { .about-benefits { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      <section className="section dark">
        <div className="container">
          <Reveal>
            <div className="about-cta">
              <h2 className="h2 about-cta-title">Готовы обсудить проект?</h2>
              <Link to="/#lead-form" className="btn btn-primary">
                ПОЛУЧИТЬ РАСЧЁТ <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
        <style>{`
          .about-cta { display: flex; flex-direction: column; gap: 24px; align-items: flex-start; }
          .about-cta-title { color: var(--c-text-dark); }
        `}</style>
      </section>
    </div>
  )
}
