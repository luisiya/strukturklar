import { useT } from '../../i18n'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import PageLink from '../ui/PageLink'

interface Service {
  title: string
  text: string
  items: string[]
}

const Services = () => {
  const { t, tm } = useT()
  const services = tm<Service[]>('home.services.items')
  return (
    <Section id="leistungen" labelledBy="services-heading">
      <SectionHeader
        id="services-heading"
        label={t('home.services.label')}
        heading={t('home.services.heading')}
        intro={t('home.services.intro')}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((service, i) => (
          <article key={service.title} className="card flex flex-col p-6 sm:p-7">
            <span className="text-sm font-semibold tabular-nums text-petrol">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="h3 mt-4">{service.title}</h3>
            <p className="body mt-3 text-[0.95rem]">{service.text}</p>
            <ul className="mt-5 space-y-1.5 text-[0.95rem] text-ink-soft">
              {service.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-2.5 shrink-0 bg-line-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-muted">
        <PageLink page="scope" className="link">
          {t('home.services.scopeLabel')}
        </PageLink>{' '}
        {t('home.services.scopeNote')}
      </p>
    </Section>
  )
}

export default Services
