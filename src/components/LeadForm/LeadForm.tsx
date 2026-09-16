import { useState, useRef, useCallback } from 'react'
import { ArrowUpRight, Upload, Close, Check } from '../Icons'

interface LeadFormProps {
  variant?: 'dark' | 'light'
  defaultProduct?: string
  compact?: boolean
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  phone: string
  product: string
  comment: string
  file: File | null
}

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf']
const MAX_FILE_SIZE = 10 * 1024 * 1024

export function LeadForm({ variant = 'dark', defaultProduct = '', compact = false }: LeadFormProps) {
  const [data, setData] = useState<FormData>({
    name: '',
    phone: '',
    product: defaultProduct,
    comment: '',
    file: null,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>()
  const [state, setState] = useState<FormState>('idle')
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const update = useCallback((field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }, [])

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!data.name.trim()) e.name = 'Укажите имя'
    if (!data.phone.trim()) e.phone = 'Укажите телефон'
    else if (data.phone.replace(/\D/g, '').length < 10) e.phone = 'Некорректный телефон'
    if (!data.product.trim()) e.product = 'Укажите, что нужно изготовить'
    if (data.file && data.file.size > MAX_FILE_SIZE) e.file = 'Файл больше 10 МБ'
    if (data.file && !ALLOWED_TYPES.includes(data.file.type)) e.file = 'Допустимы JPG, PNG, PDF'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleFile = (file: File | null) => {
    if (!file) return
    setData((prev) => ({ ...prev, file }))
    setErrors((prev) => ({ ...prev, file: undefined }))
  }

  const removeFile = () => {
    setData((prev) => ({ ...prev, file: null }))
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setState('loading')
    try {
      await submitLead(data)
      setState('success')
    } catch {
      setState('error')
    }
  }

  const reset = () => {
    setData({ name: '', phone: '', product: defaultProduct, comment: '', file: null })
    setState('idle')
    setErrors(undefined)
  }

  if (state === 'success') {
    return (
      <div className={`lead-success ${variant}`}>
        <div className="lead-success-icon">
          <Check size={32} />
        </div>
        <h3 className="h3">ЗАЯВКА ОТПРАВЛЕНА</h3>
        <p className="body">Спасибо! Мы получили ваш запрос и свяжемся с вами.</p>
        <button onClick={reset} className={`btn ${variant === 'dark' ? 'btn-outline-dark' : 'btn-outline'}`}>
          Отправить ещё одну
        </button>
        <style>{`
          .lead-success {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 16px;
            padding: 48px 24px;
          }
          .lead-success-icon {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: var(--c-accent);
            color: var(--c-primary-dark);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .lead-success.dark { color: var(--c-text-dark); }
          .lead-success.dark .body { color: var(--c-text-dark-secondary); }
        `}</style>
      </div>
    )
  }

  const isDark = variant === 'dark'

  return (
    <form onSubmit={handleSubmit} className={`lead-form ${variant} ${compact ? 'compact' : ''}`} noValidate>
      <div className="lead-form-row">
        <div className="lead-field">
          <label htmlFor="lf-name">Имя *</label>
          <input
            id="lf-name"
            type="text"
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            className={errors?.name ? 'error' : ''}
            aria-invalid={!!errors?.name}
            aria-describedby={errors?.name ? 'lf-name-err' : undefined}
          />
          {errors?.name && <span id="lf-name-err" className="lead-field-err">{errors.name}</span>}
        </div>
        <div className="lead-field">
          <label htmlFor="lf-phone">Телефон *</label>
          <input
            id="lf-phone"
            type="tel"
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={errors?.phone ? 'error' : ''}
            aria-invalid={!!errors?.phone}
            aria-describedby={errors?.phone ? 'lf-phone-err' : undefined}
            placeholder="+7 ___ ___-__-__"
          />
          {errors?.phone && <span id="lf-phone-err" className="lead-field-err">{errors.phone}</span>}
        </div>
      </div>
      <div className="lead-field">
        <label htmlFor="lf-product">Что нужно изготовить? *</label>
        <input
          id="lf-product"
          type="text"
          value={data.product}
          onChange={(e) => update('product', e.target.value)}
          className={errors?.product ? 'error' : ''}
          aria-invalid={!!errors?.product}
          aria-describedby={errors?.product ? 'lf-product-err' : undefined}
        />
        {errors?.product && <span id="lf-product-err" className="lead-field-err">{errors.product}</span>}
      </div>
      <div className="lead-field">
        <label htmlFor="lf-comment">Комментарий</label>
        <textarea
          id="lf-comment"
          value={data.comment}
          onChange={(e) => update('comment', e.target.value)}
          rows={3}
        />
      </div>
      <div className="lead-field">
        <label>Прикрепить фото или чертёж</label>
        <div
          className={`lead-upload ${dragOver ? 'drag' : ''} ${errors?.file ? 'error' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]) }}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') fileInputRef.current?.click() }}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            style={{ display: 'none' }}
          />
          {data.file ? (
            <div className="lead-upload-file">
              <span className="lead-upload-name">{data.file.name}</span>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); removeFile() }}
                className="lead-upload-remove"
                aria-label="Удалить файл"
              >
                <Close size={16} />
              </button>
            </div>
          ) : (
            <div className="lead-upload-placeholder">
              <Upload size={20} />
              <span>Перетащите файл или нажмите</span>
              <span className="lead-upload-hint">JPG, PNG, PDF — до 10 МБ</span>
            </div>
          )}
        </div>
        {errors?.file && <span className="lead-field-err">{errors.file}</span>}
      </div>
      {state === 'error' && (
        <div className="lead-form-error">
          Не удалось отправить заявку. Позвоните нам или попробуйте ещё раз.
        </div>
      )}
      <button type="submit" className={`btn btn-primary lead-form-submit`} disabled={state === 'loading'}>
        {state === 'loading' ? 'ОТПРАВКА...' : 'ПОЛУЧИТЬ РАСЧЁТ'}
        {state !== 'loading' && <ArrowUpRight size={18} />}
      </button>
      <p className={`lead-form-privacy ${isDark ? 'dark' : ''}`}>
        Нажимая кнопку, вы соглашаетесь с{' '}
        <a href="/privacy">политикой конфиденциальности</a>
      </p>
      <style>{`
        .lead-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .lead-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .lead-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .lead-field label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .lead-form.dark .lead-field label { color: var(--c-text-dark-secondary); }
        .lead-form.light .lead-field label { color: var(--c-text-secondary); }
        .lead-field input,
        .lead-field textarea {
          padding: 14px 16px;
          border: 1px solid var(--c-border);
          border-radius: 8px;
          background: var(--c-white);
          color: var(--c-text);
          font-size: 16px;
          transition: border-color var(--t-fast);
          resize: vertical;
        }
        .lead-form.dark .lead-field input,
        .lead-form.dark .lead-field textarea {
          background: var(--c-dark-surface);
          border-color: var(--c-border-dark);
          color: var(--c-text-dark);
        }
        .lead-field input:focus,
        .lead-field textarea:focus {
          outline: none;
          border-color: var(--c-accent);
        }
        .lead-field input.error,
        .lead-field textarea.error {
          border-color: #ff4444;
        }
        .lead-field-err {
          font-size: 13px;
          color: #ff4444;
        }
        .lead-upload {
          border: 1px dashed var(--c-border);
          border-radius: 8px;
          padding: 24px;
          cursor: pointer;
          transition: border-color var(--t-fast), background var(--t-fast);
          background: var(--c-white);
        }
        .lead-form.dark .lead-upload {
          border-color: var(--c-border-dark);
          background: var(--c-dark-surface);
        }
        .lead-upload.drag {
          border-color: var(--c-accent);
          background: rgba(200, 255, 0, 0.05);
        }
        .lead-upload.error { border-color: #ff4444; }
        .lead-upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-align: center;
          color: var(--c-text-secondary);
        }
        .lead-form.dark .lead-upload-placeholder { color: var(--c-text-dark-secondary); }
        .lead-upload-hint { font-size: 12px; opacity: 0.7; }
        .lead-upload-file {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .lead-upload-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--c-text);
        }
        .lead-form.dark .lead-upload-name { color: var(--c-text-dark); }
        .lead-upload-remove {
          color: var(--c-text-secondary);
          padding: 4px;
          border-radius: 4px;
          transition: color var(--t-fast);
        }
        .lead-upload-remove:hover { color: #ff4444; }
        .lead-form-error {
          padding: 12px 16px;
          background: rgba(255, 68, 68, 0.1);
          border: 1px solid rgba(255, 68, 68, 0.3);
          border-radius: 8px;
          font-size: 14px;
          color: #ff6666;
        }
        .lead-form-submit {
          width: 100%;
          justify-content: center;
          padding: 18px;
          font-size: 15px;
        }
        .lead-form-submit:disabled { opacity: 0.6; cursor: wait; }
        .lead-form-privacy {
          font-size: 12px;
          color: var(--c-text-secondary);
          text-align: center;
        }
        .lead-form-privacy.dark { color: var(--c-text-dark-secondary); }
        .lead-form-privacy a { text-decoration: underline; }
        .lead-form-privacy a:hover { color: var(--c-accent); }
        @media (max-width: 640px) {
          .lead-form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </form>
  )
}

async function submitLead(data: FormData): Promise<void> {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      phone: data.phone,
      product: data.product,
      comment: data.comment,
    }),
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443")
  }
}
