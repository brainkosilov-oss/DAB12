import { Reveal } from '../../components/Reveal'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { Placeholder } from '../../components/Placeholder'
import { LeadForm } from '../../components/LeadForm/LeadForm'
import { companyInfo } from '../../data/site'
import { Phone, Mail, MapPin, Send } from '../../components/Icons'

export function Contacts() {
  const contacts = [
    { label: 'Телефон', value: companyInfo.phone, href: `tel:${companyInfo.phoneRaw}`, icon: Phone },
    { label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}`, icon: Mail },
    { label: 'Telegram', value: companyInfo.telegram, href: `https://t.me/${companyInfo.telegram.replace('@', '')}`, icon: Send },
    { label: 'WhatsApp', value: companyInfo.whatsapp, href: `https://wa.me/${companyInfo.whatsappRaw}`, icon: Phone },
    { label: 'MAX', value: companyInfo.max, href: `tel:${companyInfo.phoneRaw}`, icon: Phone },
  ]

  return (
    <div className="contacts-page">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Контакты' }]} />
      </div>

      <section className="contacts-hero">
        <div className="container">
          <Reveal>
            <span className="label" style={{ color: 'var(--c-text-secondary)' }}>КОНТАКТЫ</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="h1 contacts-hero-title">КОНТАКТЫ</h1>
          </Reveal>
        </div>
        <style>{`
          .contacts-hero { padding: 24px 0 48px; }
          .contacts-hero-title { margin-top: 16px; }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contacts-grid">
            <Reveal>
              <div className="contacts-info">
                {contacts.map((c, i) => {
                  const Icon = c.icon
                  return (
                    <a key={i} href={c.href} className="contact-item">
                      <div className="contact-item-icon"><Icon size={20} /></div>
                      <div className="contact-item-info">
                        <span className="label">{c.label}</span>
                        <span className="contact-item-value">{c.value}</span>
                      </div>
                    </a>
                  )
                })}
                <div className="contact-item">
                  <div className="contact-item-icon"><MapPin size={20} /></div>
                  <div className="contact-item-info">
                    <span className="label">Адрес</span>
                    <span className="contact-item-value">{companyInfo.address}</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="contacts-form">
                <h2 className="h3 contacts-form-title">Оставить заявку</h2>
                <LeadForm variant="light" />
              </div>
            </Reveal>
          </div>
        </div>
        <style>{`
          .contacts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
          .contacts-info { display: flex; flex-direction: column; gap: 24px; }
          .contact-item {
            display: flex; gap: 16px; align-items: flex-start;
            transition: opacity var(--t-fast);
          }
          .contact-item:hover { opacity: 0.7; }
          .contact-item-icon {
            width: 44px; height: 44px;
            display: flex; align-items: center; justify-content: center;
            background: var(--c-white);
            border: 1px solid var(--c-border);
            border-radius: 10px;
            color: var(--c-text);
            flex-shrink: 0;
          }
          .contact-item-info { display: flex; flex-direction: column; gap: 4px; }
          .contact-item-info .label { color: var(--c-text-secondary); }
          .contact-item-value { font-size: 18px; font-weight: 600; color: var(--c-text); }
          .contacts-form {
            padding: 32px;
            background: var(--c-white);
            border: 1px solid var(--c-border);
            border-radius: 16px;
          }
          .contacts-form-title { color: var(--c-text); margin-bottom: 24px; }
          @media (max-width: 768px) { .contacts-grid { grid-template-columns: 1fr; gap: 32px; } }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="contacts-map">
              <Placeholder label="КАРТА" aspect="21/9" />
            </div>
          </Reveal>
        </div>
        <style>{`
          .contacts-map { border-radius: 16px; overflow: hidden; }
        `}</style>
      </section>
    </div>
  )
}
