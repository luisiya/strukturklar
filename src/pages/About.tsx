import { useT } from '../i18n'
import { Seo, personSchema } from '../lib/seo'
import { localePath } from '../lib/paths'
import { breadcrumbs } from '../lib/breadcrumbs'
import PageHeader from '../components/ui/PageHeader'
import Portrait from '../components/ui/Portrait'
import Badge from '../components/ui/Badge'
import PageLink from '../components/ui/PageLink'
import Section from '../components/ui/Section'

const Chips = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((item) => (
      <li key={item} className="rounded border border-line bg-surface px-3 py-1.5 text-sm text-ink-soft">
        {item}
      </li>
    ))}
  </ul>
)

const About = () => {
  const { t, tm, lang } = useT()
  const crumbs = breadcrumbs(t, lang, 'about')

  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang, 'about')}
        title={t('meta.about.title')}
        description={t('meta.about.description')}
        breadcrumbs={crumbs}
        jsonLd={[personSchema]}
      />
      <PageHeader label={t('about.label')} title={t('about.heading')} breadcrumbs={crumbs} />

      <Section labelledBy="about-text">
        <div className="grid gap-12 md:grid-cols-[minmax(0,320px)_1fr] lg:gap-20">
          <div className="mx-auto w-full max-w-[280px] md:mx-0 md:max-w-none">
            <Portrait alt={t('about.photoAlt')} />
          </div>
          <div>
            <h2 id="about-text" className="sr-only">
              {t('about.label')}
            </h2>
            <div className="max-w-prose space-y-5">
              {tm<string[]>('about.text').map((p) => (
                <p key={p} className="body text-[1.08rem]">
                  {p}
                </p>
              ))}
            </div>
            <h3 className="label mb-4 mt-10 text-ink-muted">{t('about.tasksHeading')}</h3>
            <ul className="max-w-prose space-y-2">
              {tm<string[]>('about.tasks').map((item) => (
                <li key={item} className="flex gap-3 body">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-petrol" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-prose border-l-2 border-petrol pl-5 text-xl font-medium leading-snug">
              {t('about.keyPhrase')}
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="background-heading" tone="surface">
        <h2 id="background-heading" className="h2">
          {t('about.backgroundHeading')}
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tm<{ title: string; text: string }[]>('about.background').map((item) => (
            <div key={item.title} className="card bg-paper p-6 sm:p-7">
              <h3 className="h3">{item.title}</h3>
              <p className="body mt-3">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="experience-heading">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3">
              <h2 id="experience-heading" className="h2">
                {t('about.growthHeading')}
              </h2>
              <Badge tone="ochre">{t('common.inDevelopment')}</Badge>
            </div>
            <div className="mt-8 max-w-prose space-y-4">
              {tm<string[]>('about.growth').map((p) => (
                <p key={p} className="body">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-8 max-w-prose font-semibold">{t('about.claim')}</p>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="label mb-4 text-ink-muted">{t('about.systemsHeading')}</h3>
              <Chips items={tm<string[]>('about.systems')} />
            </div>
            <div>
              <h3 className="label mb-4 text-ink-muted">{t('about.languagesHeading')}</h3>
              <p className="text-ink-soft">{tm<string[]>('about.languages').join(' · ')}</p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 sm:flex-row">
          <PageLink page="development" className="btn-secondary">
            {t('home.about.developmentCta')}
          </PageLink>
          <PageLink page="contact" className="btn-primary">
            {t('contact.cta')}
          </PageLink>
        </div>
      </Section>
    </>
  )
}

export default About
