import { useState } from 'react'
import type { FAQItem } from '../data/types'
import { Plus, Minus } from './Icons'

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="faq">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            {open === i ? <Minus size={20} /> : <Plus size={20} />}
          </button>
          <div className="faq-answer" style={{ maxHeight: open === i ? '200px' : '0' }}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
      <style>{`
        .faq { display: flex; flex-direction: column; }
        .faq-item {
          border-bottom: 1px solid var(--c-border);
        }
        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          padding: 24px 0;
          text-align: left;
          font-size: 17px;
          font-weight: 600;
          color: var(--c-text);
          transition: color var(--t-fast);
        }
        .faq-question:hover { color: var(--c-accent); }
        .faq-question svg { color: var(--c-text-secondary); flex-shrink: 0; transition: color var(--t-fast); }
        .faq-item.open .faq-question svg { color: var(--c-accent); }
        .faq-answer {
          overflow: hidden;
          transition: max-height var(--t-med);
        }
        .faq-answer p {
          padding-bottom: 24px;
          font-size: 16px;
          line-height: 1.6;
          color: var(--c-text-secondary);
          max-width: 640px;
        }
      `}</style>
    </div>
  )
}
