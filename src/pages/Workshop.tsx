import { useT } from '../i18n'
import { Seo } from '../lib/seo'
import { localePath } from '../lib/paths'
import { breadcrumbs } from '../lib/breadcrumbs'
import { getArticles } from '../content'
import { site } from '../config/site'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import PageLink from '../components/ui/PageLink'
import Badge from '../components/ui/Badge'

export const formatDate = (date: string, lang: string) =>
  new Date(date).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

const Workshop = () => {
  const { t, tm, lang } = useT()
  const crumbs = breadcrumbs(t, lang, 'workshop')
  const articles = getArticles(lang)
  const social = site.social.filter((s) => s.url)

  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang, 'workshop')}
        title={t('meta.workshop.title')}
        description={t('meta.workshop.description')}
        breadcrumbs={crumbs}
      />
      <PageHeader label={t('workshop.label')} title={t('workshop.heading')} intro={t('workshop.intro')} breadcrumbs={crumbs} />

      <Section labelledBy="topics-heading">
        <p className="lead mb-12 max-w-3xl">{t('workshop.lead')}</p>
        <h2 id="topics-heading" className="label mb-6 text-ink-muted">
          {t('workshop.topicsHeading')}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {tm<string[]>('workshop.topics').map((topic) => (
            <li key={topic} className="rounded border border-line bg-surface px-3.5 py-2 text-ink-soft">
              {topic}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="posts-heading" tone="surface">
        <h2 id="posts-heading" className="h2">
          {t('workshop.postsHeading')}
        </h2>
        {articles.length === 0 ? (
          <p className="body mt-6">{t('workshop.empty')}</p>
        ) : (
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {articles.map((article) => (
              <li key={article.slug} className="relative py-7">
                <div className="flex flex-wrap items-center gap-3 text-sm text-ink-muted">
                  <time dateTime={article.date}>{formatDate(article.date, lang)}</time>
                  <Badge tone="neutral">{article.category}</Badge>
                </div>
                <h3 className="h3 mt-3">
                  <PageLink page="workshop" slug={article.slug} className="after:absolute after:inset-0 hover:text-petrol">
                    {article.title}
                  </PageLink>
                </h3>
                <p className="body mt-2 max-w-prose">{article.intro}</p>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section labelledBy="channels-heading">
        <h2 id="channels-heading" className="h3">
          {t('workshop.channelsHeading')}
        </h2>
        <p className="body mt-4 max-w-prose">{t('workshop.channelsText')}</p>
        {social.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-3">
            {social.map((s) => (
              <li key={s.key}>
                <a href={s.url} target="_blank" rel="noopener noreferrer me" className="btn-secondary">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  )
}

export default Workshop
