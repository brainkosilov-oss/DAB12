import { useEffect, useRef } from 'react'
import type { ProductType } from '../data/types'
import { Placeholder } from './Placeholder'
import { LeadForm } from './LeadForm/LeadForm'
import { Close } from './Icons'

interface ProductModalProps {
  product: ProductType | null
  categoryName: string
  onClose: () => void
}

export function ProductModal({ product, categoryName, onClose }: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!product) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [product, onClose])

  if (!product) return null

  const specs = [
    { label: 'Габариты', value: product.dimensions },
    { label: 'Вес', value: product.weight },
    { label: 'Материал', value: product.material },
    { label: 'Покрытие', value: product.coating },
  ].filter((s) => s.value)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          <Close size={24} />
        </button>
        <div className="modal-grid">
          <div className="modal-image">
            <Placeholder label={product.name.toUpperCase()} aspect="4/5" />
          </div>
          <div className="modal-info">
            <span className="label modal-cat">{categoryName}</span>
            <h2 className="h3 modal-title">{product.name}</h2>
            <p className="body modal-desc">{product.description}</p>

            {product.characteristics.length > 0 && (
              <div className="modal-section">
                <span className="label modal-section-label">Характеристики</span>
                <ul className="modal-chars">
                  {product.characteristics.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-section">
              <span className="label modal-section-label">Спецификации</span>
              <dl className="modal-specs">
                {specs.map((s) => (
                  <div key={s.label} className="modal-spec">
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="modal-price">
              <span className="modal-price-label">{product.priceLabel}</span>
            </div>

            <div className="modal-cta">
              <LeadForm variant="light" compact defaultProduct={`${categoryName} — ${product.name}`} />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 300;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn var(--t-fast) forwards;
        }
        .modal {
          position: relative;
          background: var(--c-white);
          border-radius: 16px;
          max-width: 1000px;
          width: 100%;
          max-height: 92vh;
          overflow-y: auto;
          animation: scaleIn var(--t-med) forwards;
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 10;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          color: var(--c-text);
          transition: background var(--t-fast), color var(--t-fast);
        }
        .modal-close:hover { background: var(--c-primary-dark); color: var(--c-text-dark); }
        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .modal-image { padding: 24px; }
        .modal-image .placeholder { height: 100%; }
        .modal-info {
          padding: 40px 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .modal-cat { color: var(--c-text-secondary); }
        .modal-title { color: var(--c-text); }
        .modal-desc { color: var(--c-text-secondary); }
        .modal-section { display: flex; flex-direction: column; gap: 12px; }
        .modal-section-label { color: var(--c-text-secondary); }
        .modal-chars { display: flex; flex-direction: column; gap: 6px; }
        .modal-chars li {
          font-size: 15px;
          color: var(--c-text);
          padding-left: 16px;
          position: relative;
        }
        .modal-chars li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 1px;
          background: var(--c-accent);
        }
        .modal-specs { display: flex; flex-direction: column; gap: 8px; }
        .modal-spec {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--c-border);
        }
        .modal-spec dt { font-size: 14px; color: var(--c-text-secondary); }
        .modal-spec dd { font-size: 14px; font-weight: 600; color: var(--c-text); text-align: right; }
        .modal-price {
          padding: 16px 20px;
          background: var(--c-light-bg);
          border-radius: 8px;
        }
        .modal-price-label { font-size: 16px; font-weight: 700; color: var(--c-text); }
        .modal-cta { margin-top: 8px; }
        @media (max-width: 768px) {
          .modal { max-height: 95vh; border-radius: 12px; }
          .modal-grid { grid-template-columns: 1fr; }
          .modal-image { padding: 16px 16px 0; }
          .modal-image .placeholder { aspect-ratio: 16/10; height: auto; }
          .modal-info { padding: 24px 16px 16px; }
        }
      `}</style>
    </div>
  )
}
