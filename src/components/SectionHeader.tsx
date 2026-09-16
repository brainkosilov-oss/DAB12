import { Reveal } from './Reveal'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  dark?: boolean
  center?: boolean
}

export function SectionHeader({ label, title, description, dark = false, center = false }: SectionHeaderProps) {
  return (
    <Reveal className={`section-header ${center ? 'section-header-center' : ''}`}>
      {label && <span className={`label ${dark ? 'label-accent' : ''}`}>{label}</span>}
      <h2 className={`h2 section-header-title ${dark ? 'section-header-title-dark' : ''}`}>{title}</h2>
      {description && (
        <p className={`body-lg section-header-desc ${dark ? 'section-header-desc-dark' : ''}`}>{description}</p>
      )}
      <style>{`
        .section-header { display: flex; flex-direction: column; gap: 16px; max-width: 720px; }
        .section-header-center { align-items: center; text-align: center; margin: 0 auto; }
        .section-header-title { margin-top: 4px; }
        .section-header-title-dark { color: var(--c-text-dark); }
        .section-header-desc { color: var(--c-text-secondary); max-width: 600px; }
        .section-header-desc-dark { color: var(--c-text-dark-secondary); }
      `}</style>
    </Reveal>
  )
}
