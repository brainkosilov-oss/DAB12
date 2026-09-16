import { Reveal } from '../../components/Reveal'
import { SectionHeader } from '../../components/SectionHeader'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { LeadForm } from '../../components/LeadForm/LeadForm'

export function DeliveryInstallation() {
  return (
    <div className="delivery-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Доставка и монтаж' }]} />
      </div>

      <section className="delivery-hero">
        <div className="container">
          <Reveal>
            <span className="label" style={{ color: 'var(--c-text-secondary)' }}>ДОСТАВКА И МОНТАЖ</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="h1 delivery-hero-title">ДОСТАВКА<br />И МОНТАЖ</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-lg delivery-hero-text">
              Доставляем и устанавливаем металлоконструкции. Работаем по всем регионам России.
            </p>
          </Reveal>
        </div>
        <style>{`
          .delivery-hero { padding: 24px 0 48px; }
          .delivery-hero-title { margin-top: 16px; }
          .delivery-hero-text { color: var(--c-text-secondary); margin-top: 16px; max-width: 560px; }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="delivery-grid">
            <Reveal>
              <div className="delivery-block">
                <span className="label delivery-block-label">01 — ДОСТАВКА</span>
                <h2 className="h3 delivery-block-title">Доставка</h2>
                <p className="body">
                  Организуем доставку готовых конструкций на объект. Работаем по всем регионам России.
                </p>
                <p className="body delivery-block-note">
                  Сроки и стоимость доставки уточняются при расчёте.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="delivery-block">
                <span className="label delivery-block-label">02 — МОНТАЖ</span>
                <h2 className="h3 delivery-block-title">Монтаж</h2>
                <p className="body">
                  Выполняем монтаж и установку изготовленных конструкций на объекте.
                </p>
                <p className="body delivery-block-note">
                  Условия монтажа уточняются при расчёте конкретного проекта.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          .delivery-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
          .delivery-block { display: flex; flex-direction: column; gap: 12px; padding: 40px; background: var(--c-white); border: 1px solid var(--c-border); border-radius: 16px; }
          .delivery-block-label { color: var(--c-accent); }
          .delivery-block-title { color: var(--c-text); }
          .delivery-block-note { color: var(--c-text-secondary); }
          @media (max-width: 768px) { .delivery-grid { grid-template-columns: 1fr; gap: 24px; } }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <SectionHeader label="ПРОЦЕСС" title="От задачи до готовой конструкции" />
          </Reveal>
          <div className="delivery-process">
            {[
              { num: '01', name: 'Заявка', description: 'Вы оставляете заявку с описанием задачи.' },
              { num: '02', name: 'Консультация', description: 'Специалист уточняет детали и требования.' },
              { num: '03', name: 'Расчёт', description: 'Выполняем расчёт стоимости и сроков.' },
              { num: '04', name: 'Производство', description: 'Изготавливаем конструкцию на собственном производстве.' },
              { num: '05', name: 'Доставка', description: 'Доставляем готовую конструкцию на объект.' },
              { num: '06', name: 'Монтаж', description: 'Выполняем монтаж и установку.' },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 60}>
                <div className="delivery-process-step">
                  <span className="delivery-process-num">{step.num}</span>
                  <span className="delivery-process-name">{step.name}</span>
                  <span className="delivery-process-desc">{step.description}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .delivery-process { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; margin-top: 48px; }
          .delivery-process-step { display: flex; flex-direction: column; gap: 8px; padding: 24px 16px 24px 0; border-top: 1px solid var(--c-border); }
          .delivery-process-num { font-size: 13px; font-weight: 700; color: var(--c-accent); }
          .delivery-process-name { font-size: 16px; font-weight: 700; }
          .delivery-process-desc { font-size: 13px; color: var(--c-text-secondary); }
          @media (max-width: 1024px) { .delivery-process { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 640px) { .delivery-process { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="delivery-lead">
            <div className="delivery-lead-left">
              <Reveal>
                <h2 className="h2 delivery-lead-title">Заказать доставку и монтаж</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="body-lg delivery-lead-text">Пришлите размеры или эскиз — рассчитаем стоимость.</p>
              </Reveal>
            </div>
            <div className="delivery-lead-right">
              <Reveal delay={200}>
                <LeadForm variant="dark" />
              </Reveal>
            </div>
          </div>
        </div>
        <style>{`
          .delivery-lead { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: start; }
          .delivery-lead-left { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 120px; }
          .delivery-lead-title { color: var(--c-text-dark); }
          .delivery-lead-text { color: var(--c-text-dark-secondary); }
          @media (max-width: 1024px) { .delivery-lead { grid-template-columns: 1fr; gap: 32px; } .delivery-lead-left { position: static; } }
        `}</style>
      </section>
    </div>
  )
}
