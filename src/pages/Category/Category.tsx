import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Reveal } from '../../components/Reveal'
import { SectionHeader } from '../../components/SectionHeader'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { Placeholder } from '../../components/Placeholder'
import { ProductModal } from '../../components/ProductModal'
import { FAQ } from '../../components/FAQ'
import { LeadForm } from '../../components/LeadForm/LeadForm'
import { getCategoryBySlug } from '../../data/categories'
import { processSteps } from '../../data/site'
import { ArrowUpRight, ArrowRight } from '../../components/Icons'
import type { ProductType } from '../../data/types'

export function Category() {
  const { slug } = useParams<{ slug: string }>()
  const category = slug ? getCategoryBySlug(slug) : undefined
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)

  if (!category) return <Navigate to="/catalog" replace />

  return (
    <div className="category-page">
      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Главная', to: '/' },
            { label: 'Каталог', to: '/catalog' },
            { label: category.name },
          ]}
        />
      </div>

      {/* Category Hero */}
      <section className="cat-hero">
        <div className="container">
          <div className="cat-hero-grid">
            <div className="cat-hero-info">
              <Reveal>
                <span className="label cat-hero-label">КАТАЛОГ / {category.id}</span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="h1 cat-hero-title">{category.name}</h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="body-lg cat-hero-desc">{category.heroDescription}</p>
              </Reveal>
              <Reveal delay={300}>
                <Link to="/#lead-form" className="btn btn-dark">
                  ПОЛУЧИТЬ РАСЧЁТ <ArrowUpRight size={18} />
                </Link>
              </Reveal>
            </div>
            <div className="cat-hero-image">
              <Reveal delay={200}>
                <Placeholder label={category.shortName.toUpperCase()} aspect="4/3" />
              </Reveal>
            </div>
          </div>
        </div>
        <style>{`
          .cat-hero { padding: 24px 0 64px; }
          .cat-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
          .cat-hero-info { display: flex; flex-direction: column; gap: 20px; }
          .cat-hero-label { color: var(--c-text-secondary); }
          .cat-hero-title { color: var(--c-text); }
          .cat-hero-desc { color: var(--c-text-secondary); }
          @media (max-width: 768px) { .cat-hero-grid { grid-template-columns: 1fr; gap: 32px; } }
        `}</style>
      </section>

      {/* Category Description */}
      <section className="section-sm">
        <div className="container">
          <Reveal>
            <div className="cat-desc">
              <span className="label">О категории</span>
              <p className="body-lg">{category.description}</p>
            </div>
          </Reveal>
        </div>
        <style>{`
          .cat-desc { display: flex; flex-direction: column; gap: 16px; max-width: 720px; }
          .cat-desc .label { color: var(--c-text-secondary); }
          .cat-desc .body-lg { color: var(--c-text); }
        `}</style>
      </section>

      {/* Product/Type Cards */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader label="ВИДЫ" title={`Виды ${category.name.toLowerCase()}`} />
          </Reveal>
          <div className="cat-products">
            {category.productTypes.map((pt, i) => (
              <Reveal key={pt.id} delay={i * 80}>
                <button className="cat-product" onClick={() => setSelectedProduct(pt)}>
                  <div className="cat-product-image">
                    <Placeholder label={pt.name.toUpperCase()} aspect="4/3" />
                  </div>
                  <div className="cat-product-info">
                    <h3 className="h4 cat-product-title">{pt.name}</h3>
                    <p className="body-sm cat-product-desc">{pt.description}</p>
                    <span className="cat-product-cta">
                      ПОДРОБНЕЕ <ArrowRight size={16} className="arrow" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .cat-products { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
          .cat-product {
            display: flex;
            flex-direction: column;
            text-align: left;
            transition: transform var(--t-med);
          }
          .cat-product:hover { transform: translateY(-4px); }
          .cat-product-image { overflow: hidden; border-radius: 12px; }
          .cat-product-image .placeholder { transition: transform var(--t-med); }
          .cat-product:hover .cat-product-image .placeholder { transform: scale(1.04); }
          .cat-product-info { display: flex; flex-direction: column; gap: 8px; padding-top: 16px; }
          .cat-product-title { color: var(--c-text); }
          .cat-product-desc { color: var(--c-text-secondary); }
          .cat-product-cta {
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
          .cat-product:hover .cat-product-cta { gap: 12px; color: var(--c-accent); }
          @media (max-width: 1024px) { .cat-products { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 640px) { .cat-products { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* Materials / Execution */}
      <section className="section dark">
        <div className="container">
          <Reveal>
            <SectionHeader label="МАТЕРИАЛЫ" title="Материалы и исполнение" dark />
          </Reveal>
          <Reveal delay={100}>
            <div className="cat-materials">
              <div className="cat-material-item">
                <span className="label">Материал</span>
                <p className="body">Уточняется при расчёте</p>
              </div>
              <div className="cat-material-item">
                <span className="label">Покрытие</span>
                <p className="body">Уточняется при расчёте</p>
              </div>
              <div className="cat-material-item">
                <span className="label">Размеры</span>
                <p className="body">Изготавливаем по вашим размерам</p>
              </div>
              <div className="cat-material-item">
                <span className="label">Исполнение</span>
                <p className="body">По эскизам, чертежам и техническим заданиям</p>
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`
          .cat-materials { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 48px; }
          .cat-material-item { display: flex; flex-direction: column; gap: 8px; padding: 32px 0; border-top: 1px solid var(--c-border-dark); }
          .cat-material-item .label { color: var(--c-accent); }
          .cat-material-item .body { color: var(--c-text-dark-secondary); }
          @media (max-width: 768px) { .cat-materials { grid-template-columns: 1fr 1fr; } }
          @media (max-width: 480px) { .cat-materials { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* Category Works */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader label="РАБОТЫ" title={`Работы — ${category.name.toLowerCase()}`} />
          </Reveal>
          <div className="cat-works">
            {[0, 1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 80}>
                <Placeholder label={`РАБОТА ${String(i + 1).padStart(2, '0')}`} aspect="4/3" />
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .cat-works { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 48px; }
          @media (max-width: 1024px) { .cat-works { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 640px) { .cat-works { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader label="ПРОЦЕСС" title="От задачи до готовой конструкции" />
          </Reveal>
          <div className="cat-process">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 60}>
                <div className="cat-process-step">
                  <span className="cat-process-num">{step.num}</span>
                  <span className="cat-process-name">{step.name}</span>
                  <span className="cat-process-desc">{step.description}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .cat-process { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; margin-top: 48px; }
          .cat-process-step { display: flex; flex-direction: column; gap: 8px; padding: 24px 16px 24px 0; border-top: 1px solid var(--c-border); }
          .cat-process-num { font-size: 13px; font-weight: 700; color: var(--c-accent); }
          .cat-process-name { font-size: 16px; font-weight: 700; }
          .cat-process-desc { font-size: 13px; color: var(--c-text-secondary); }
          @media (max-width: 1024px) { .cat-process { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 640px) { .cat-process { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* Category FAQ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader label="ВОПРОСЫ" title={`Вопросы — ${category.name.toLowerCase()}`} />
          </Reveal>
          <Reveal delay={100}>
            <div className="cat-faq">
              <FAQ items={category.faq} />
            </div>
          </Reveal>
        </div>
        <style>{`
          .cat-faq { margin-top: 48px; max-width: 800px; }
        `}</style>
      </section>

      {/* Lead CTA */}
      <section className="section dark">
        <div className="container">
          <div className="cat-lead">
            <div className="cat-lead-left">
              <Reveal>
                <h2 className="h2 cat-lead-title">Нужен расчёт {category.name.toLowerCase()}?</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="body-lg cat-lead-text">Пришлите размеры или эскиз — рассчитаем стоимость.</p>
              </Reveal>
            </div>
            <div className="cat-lead-right">
              <Reveal delay={200}>
                <LeadForm variant="dark" defaultProduct={category.name} />
              </Reveal>
            </div>
          </div>
        </div>
        <style>{`
          .cat-lead { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: start; }
          .cat-lead-left { display: flex; flex-direction: column; gap: 16px; position: sticky; top: 120px; }
          .cat-lead-title { color: var(--c-text-dark); }
          .cat-lead-text { color: var(--c-text-dark-secondary); }
          @media (max-width: 1024px) { .cat-lead { grid-template-columns: 1fr; gap: 32px; } .cat-lead-left { position: static; } }
        `}</style>
      </section>

      <ProductModal
        product={selectedProduct}
        categoryName={category.name}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  )
}
