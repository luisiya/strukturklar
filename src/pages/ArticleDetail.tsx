import { useParams } from 'react-router-dom'
import { useT } from '../i18n'
import { Seo, absoluteUrl } from '../lib/seo'
import { localePath } from '../lib/paths'
import { breadcrumbs } from '../lib/breadcrumbs'
import { getArticle, getModel, getProject } from '../content'
import { ARTICLE_SECTIONS } from '../content/types'
import { site } from '../config/site'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Badge from '../components/ui/Badge'
import TemplateSections from '../components/ui/TemplateSections'
import PageLink from '../components/ui/PageLink'
import { ModelCard, ProjectCard } from '../components/ui/Cards'
import NotFound from './NotFound'
import { formatDate } from './Workshop'

const ArticleDetail = () => {
  const { slug = '' } = useParams()
  const { t, lang } = useT()
  const found = getArticle(slug, lang)
  if (!found) return <NotFound />

  const { item: article, languages } = found
  const path = localePath(lang, 'workshop', slug)
  const crumbs = breadcrumbs(t, lang, 'workshop', { name: article.title, slug })
  const project = article.project ? getProject(article.project, lang)?.item : undefined
  const model = article.model ? getModel(article.model, lang)?.item : undefined

  return (
    <>
      <Seo
        lang={lang}
        path={path}
        title={article.title}
        description={article.intro}
        languages={languages}
        type="article"
        breadcrumbs={crumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.intro,
            datePublished: article.date,
            inLanguage: article.lang,
            articleSection: article.category,
            mainEntityOfPage: absoluteUrl(path),
            image: absoluteUrl(site.ogImage),
            author: { '@type': 'Person', name: site.person.name, url: site.url },
            publisher: { '@type': 'Organization', name: site.name, url: site.url },
          },
        ]}
      />
      <PageHeader title={article.title} intro={article.intro} breadcrumbs={crumbs}>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-ink-muted">
          <time dateTime={article.date}>{formatDate(article.date, lang)}</time>
          <Badge tone="neutral">{article.category}</Badge>
        </div>
      </PageHeader>

      <Section>
        <TemplateSections
          order={ARTICLE_SECTIONS}
          sections={article.sections}
          headings={(key) => t(`workshop.sections.${key}`)}
        />
        {article.video && (
          <p className="mt-10">
            <a href={article.video.url} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {t('workshop.video')} · {article.video.platform}
            </a>
          </p>
        )}
      </Section>

      {(project || model) && (
        <Section labelledBy="related" tone="surface">
          <h2 id="related" className="h3">
            {project ? t('common.relatedProject') : t('common.relatedModel')}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {project && <ProjectCard project={project} />}
            {model && <ModelCard model={model} />}
          </div>
        </Section>
      )}

      <Section>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-medium">{article.cta ?? t('workshop.ctaDefault')}</p>
          <PageLink page="contact" className="btn-primary">
            {t('contact.cta')}
          </PageLink>
        </div>
      </Section>
    </>
  )
}

export default ArticleDetail
