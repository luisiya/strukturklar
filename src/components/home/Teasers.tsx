import { useT } from '../../i18n'
import { site } from '../../config/site'
import { getModels } from '../../content'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import PageLink from '../ui/PageLink'
import Portrait from '../ui/Portrait'
import { ModelCard } from '../ui/Cards'

export const ModelsTeaser = () => {
  const { t, lang } = useT()
  return (
    <Section labelledBy="models-heading">
      <SectionHeader
        id="models-heading"
        label={t('home.models.label')}
        heading={t('home.models.heading')}
        intro={t('home.models.intro')}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {getModels(lang).map((model) => (
          <ModelCard key={model.slug} model={model} />
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm text-ink-muted">{t('home.models.note')}</p>
      <PageLink page="models" className="btn-secondary mt-8">
        {t('home.models.cta')}
      </PageLink>
    </Section>
  )
}

export const ProjectsTeaser = () => {
  const { t, tm } = useT()
  return (
    <Section labelledBy="projects-heading" tone="surface">
      <SectionHeader
        id="projects-heading"
        label={t('home.projects.label')}
        heading={t('home.projects.heading')}
        intro={t('home.projects.intro')}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tm<{ category: string; title: string; text: string }[]>('home.projects.items').map((item) => (
          <article key={item.title} className="card bg-paper p-6 sm:p-7">
            <p className="label text-ink-muted">{item.category}</p>
            <h3 className="h3 mt-3">{item.title}</h3>
            <p className="body mt-3 text-[0.95rem]">{item.text}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm text-ink-muted">{t('home.projects.note')}</p>
      <PageLink page="projects" className="btn-secondary mt-8">
        {t('home.projects.cta')}
      </PageLink>
    </Section>
  )
}

export const AboutTeaser = () => {
  const { t } = useT()
  return (
    <Section labelledBy="about-heading">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,320px)_1fr] lg:gap-20">
        <div className="mx-auto w-full max-w-[280px] md:max-w-none">
          <Portrait alt={t('about.photoAlt')} />
        </div>
        <div>
          <SectionHeader id="about-heading" label={t('home.about.label')} heading={t('home.about.heading')} />
          <p className="lead mt-6">{t('home.about.text')}</p>
          <p className="mt-6 text-ink-muted">{t('about.keyPhrase')}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PageLink page="about" className="btn-secondary">
              {t('home.about.cta')}
            </PageLink>
            <PageLink page="development" className="btn-secondary">
              {t('home.about.developmentCta')}
            </PageLink>
          </div>
        </div>
      </div>
    </Section>
  )
}

export const ContactCta = () => {
  const { t } = useT()
  return (
    <Section labelledBy="contact-cta-heading" tone="ink">
      <div className="mx-auto max-w-3xl text-center">
        <p className="label mb-4 text-paper/60">{t('contact.label')}</p>
        <h2 id="contact-cta-heading" className="h2 text-paper">
          {t('contact.heading')}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-paper/75">{t('contact.text')}</p>
        <p className="mt-8 font-semibold text-paper">{t('contact.detailsName')}</p>
        <p className="mt-1 text-sm text-paper/75">{t('contact.detailsLine')}</p>
        <p className="mt-1 text-sm text-paper/75">{site.person.city}</p>
        <PageLink page="contact" className="btn mt-10 bg-paper text-ink hover:bg-white">
          {t('contact.cta')}
        </PageLink>
      </div>
    </Section>
  )
}
