import { Link } from 'react-router-dom'
import { Reveal } from '../../components/Reveal'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { services, processSteps } from '../../data/site'
import { ArrowUpRight } from '../../components/Icons'

export function Services() {
  return (
    <div className="services-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Услуги' }]} />
      </div>

      <section className="services-hero">
        <div className="container">
          <Reveal>
            <span className="label" style={{ color: 'var(--c-text-secondary)' }}>УСЛУГИ</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="h1 services-hero-title">УСЛУГИ</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-lg services-hero-text">
              Полный цикл — от проектирования до монтажа.
            </p>
          </Reveal>
        </div>
        <style>{`
          .services-hero { padding: 24px 0 48px; }
          .services-hero-title { margin-top: 16px; }
          .services-hero-text { color: var(--c-text-secondary); margin-top: 16px; }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <div className="service-card">
                  <span className="service-card-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="h3 service-card-title">{s.name}</h3>
                  <p className="body service-card-desc">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .service-card {
            display: flex; flex-direction: column; gap: 12px;
            padding: 32px;
            background: var(--c-white);
            border: 1px solid var(--c-border);
            border-radius: 12px;
            transition: border-color var(--t-fast), transform var(--t-med);
          }
          .service-card:hover { border-color: var(--c-text); transform: translateY(-4px); }
          .service-card-num { font-size: 13px; font-weight: 700; color: var(--c-accent); }
          .service-card-title { color: var(--c-text); }
          .service-card-desc { color: var(--c-text-secondary); }
          @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="label" style={{ color: 'var(--c-text-secondary)' }}>ПРОЦЕСС</span>
          </Reveal>
          <div className="services-process">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 60}>
                <div className="services-process-step">
                  <span className="services-process-num">{step.num}</span>
                  <span className="services-process-name">{step.name}</span>
                  <span className="services-process-desc">{step.description}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .services-process { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; margin-top: 32px; }
          .services-process-step { display: flex; flex-direction: column; gap: 8px; padding: 24px 16px 24px 0; border-top: 1px solid var(--c-border); }
          .services-process-num { font-size: 13px; font-weight: 700; color: var(--c-accent); }
          .services-process-name { font-size: 16px; font-weight: 700; }
          .services-process-desc { font-size: 13px; color: var(--c-text-secondary); }
          @media (max-width: 1024px) { .services-process { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 640px) { .services-process { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      <section className="section dark">
        <div className="container">
          <Reveal>
            <div className="services-cta">
              <h2 className="h2 services-cta-title">Нужна услуга?</h2>
              <Link to="/#lead-form" className="btn btn-primary">
                ПОЛУЧИТЬ РАСЧЁТ <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
        <style>{`
          .services-cta { display: flex; flex-direction: column; gap: 24px; align-items: flex-start; }
          .services-cta-title { color: var(--c-text-dark); }
        `}</style>
      </section>
    </div>
  )
}
