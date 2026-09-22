import { Link } from 'react-router-dom'
import { Reveal } from '../../components/Reveal'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { Placeholder } from '../../components/Placeholder'
import { ArrowUpRight } from '../../components/Icons'
import { serviceCategories } from '../../data/serviceCategories'
import type { ServiceCategory } from '../../data/types'

export function Services() {
  return (
    <div className="services-catalog-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Каталог услуг' }]} />
      </div>

      <section className="services-catalog-hero dark">
        <div className="container">
          <Reveal>
            <span className="label label-accent">КАТАЛОГ УСЛУГ</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="h1 services-catalog-title">Услуги под ключ<br />от проекта до сдачи объекта.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-lg services-catalog-text">
              Полный цикл строительных работ — проектирование, монтаж, сдача.
            </p>
          </Reveal>
        </div>
        <style>{`
          .services-catalog-hero { padding: 24px 0 48px; }
          .services-catalog-title { margin-top: 16px; color: var(--c-text-dark); }
          .services-catalog-text { color: var(--c-text-dark-secondary); margin-top: 16px; }
        `}</style>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-catalog-grid">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 50}>
                <ServiceCard category={cat} />
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .services-catalog-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          @media (max-width: 768px) { .services-catalog-grid { grid-template-columns: 1fr; } }
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

function ServiceCard({ category }: { category: ServiceCategory }) {
  return (
    <Link to={`/services/${category.slug}`} className="service-cat-card">
      <div className="service-cat-card-image">
        <Placeholder label={category.shortName.toUpperCase()} aspect="16/9" />
      </div>
      <div className="service-cat-card-info">
        <span className="service-cat-card-num">{category.id}</span>
        <h3 className="h4 service-cat-card-title">{category.name}</h3>
        <p className="body-sm service-cat-card-desc">{category.heroDescription}</p>
        <span className="service-cat-card-cta">
          ПОДРОБНЕЕ <ArrowUpRight size={16} />
        </span>
      </div>
      <style>{`
        .service-cat-card {
          display: flex;
          flex-direction: column;
          transition: transform var(--t-med);
        }
        .service-cat-card:hover { transform: translateY(-4px); }
        .service-cat-card-image { overflow: hidden; border-radius: 12px; }
        .service-cat-card-image .placeholder { transition: transform var(--t-med); }
        .service-cat-card:hover .service-cat-card-image .placeholder { transform: scale(1.04); }
        .service-cat-card-info { display: flex; flex-direction: column; gap: 8px; padding-top: 16px; }
        .service-cat-card-num { font-size: 13px; font-weight: 700; color: var(--c-accent); }
        .service-cat-card-title { color: var(--c-text); }
        .service-cat-card-desc { color: var(--c-text-secondary); }
        .service-cat-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--c-text);
          margin-top: 4px;
          transition: gap var(--t-fast);
        }
        .service-cat-card:hover .service-cat-card-cta { gap: 12px; color: var(--c-accent); }
      `}</style>
    </Link>
  )
}
