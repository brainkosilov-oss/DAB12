import { Reveal } from '../../components/Reveal'
import { SectionHeader } from '../../components/SectionHeader'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { Placeholder } from '../../components/Placeholder'
import { LeadForm } from '../../components/LeadForm/LeadForm'
import { processSteps } from '../../data/site'

export function Production() {
  return (
    <div className="production-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Производство' }]} />
      </div>

      <section className="prod-hero dark">
        <div className="container">
          <Reveal>
            <span className="label label-accent">ПРОИЗВОДСТВО</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="h1 prod-hero-title">СВОЁ ПРОИЗВОДСТВО.<br />ПОЛНЫЙ КОНТРОЛЬ.</h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="prod-hero-metric">
              <span className="prod-metric-value">300 м²</span>
              <span className="prod-metric-label">собственное производство</span>
            </div>
          </Reveal>
        </div>
        <style>{`
          .prod-hero { padding: 48px 0 64px; }
          .prod-hero-title { margin-top: 16px; color: var(--c-text-dark); }
          .prod-hero-metric {
            display: flex; flex-direction: column; gap: 4px;
            margin-top: 32px; padding: 32px 0;
            border-top: 1px solid var(--c-border-dark);
            border-bottom: 1px solid var(--c-border-dark);
            max-width: 400px;
          }
          .prod-metric-value { font-size: clamp(48px, 6vw, 72px); font-weight: 800; letter-spacing: -0.03em; color: var(--c-accent); line-height: 1; }
          .prod-metric-label { font-size: 14px; color: var(--c-text-dark-secondary); }
        `}</style>
      </section>

      <section className="section">
        <div className="container">
          <div className="prod-content">
            <Reveal>
              <div className="prod-text">
                <span className="label">О ПРОИЗВОДСТВЕ</span>
                <p className="body-lg">
                  METLIGHT — собственное производство металлоконструкций в Верхней Пышме / Екатеринбурге.
                  Изготавливаем конструкции самостоятельно, без цепочки посредников.
                </p>
                <p className="body-lg">
                  Производим по вашим размерам, эскизам и техническим заданиям.
                  От отдельных элементов до комплексных металлоконструкций.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="prod-image">
                <Placeholder label="ПРОИЗВОДСТВО" aspect="4/3" />
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          .prod-content { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
          .prod-text { display: flex; flex-direction: column; gap: 16px; }
          .prod-text .label { color: var(--c-text-secondary); }
          .prod-text .body-lg { color: var(--c-text); }
          @media (max-width: 768px) { .prod-content { grid-template-columns: 1fr; gap: 32px; } }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <SectionHeader label="ПРОЦЕСС" title="От задачи до готовой конструкции" />
          </Reveal>
          <div className="prod-process">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 60}>
                <div className="prod-process-step">
                  <span className="prod-process-num">{step.num}</span>
                  <span className="prod-process-name">{step.name}</span>
                  <span className="prod-process-desc">{step.description}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .prod-process { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; margin-top: 48px; }
          .prod-process-step { display: flex; flex-direction: column; gap: 8px; padding: 24px 16px 24px 0; border-top: 1px solid var(--c-border); }
          .prod-process-num { font-size: 13px; font-weight: 700; color: var(--c-accent); }
          .prod-process-name { font-size: 16px; font-weight: 700; }
          .prod-process-desc { font-size: 13px; color: var(--c-text-secondary); }
          @media (max-width: 1024px) { .prod-process { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 640px) { .prod-process { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="prod-lead">
            <div className="prod-lead-left">
              <Reveal>
                <h2 className="h2 prod-lead-title">Хотите заказать производство?</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="body-lg prod-lead-text">Пришлите размеры, фото или чертёж — рассчитаем стоимость.</p>
              </Reveal>
            </div>
            <div className="prod-lead-right">
              <Reveal delay={200}>
                <LeadForm variant="dark" />
              </Reveal>
            </div>
          </div>
        </div>
        <style>{`
          .prod-lead { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: start; }
          .prod-lead-left { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 120px; }
          .prod-lead-title { color: var(--c-text-dark); }
          .prod-lead-text { color: var(--c-text-dark-secondary); }
          @media (max-width: 1024px) { .prod-lead { grid-template-columns: 1fr; gap: 32px; } .prod-lead-left { position: static; } }
        `}</style>
      </section>
    </div>
  )
}
