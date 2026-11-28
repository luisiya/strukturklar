import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useT } from '../i18n'
import { Seo } from '../lib/seo'
import { localePath } from '../lib/paths'
import { breadcrumbs } from '../lib/breadcrumbs'
import { site } from '../config/site'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import PageLink from '../components/ui/PageLink'
import CopyEmail from '../components/ui/CopyEmail'

const photo = (w: number) => `${import.meta.env.BASE_URL}images/anastasiia-gurina-sw-${w}.jpg`

const Contact = () => {
  const { t, lang } = useT()
  const crumbs = breadcrumbs(t, lang, 'contact')
  const { person } = site

  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang, 'contact')}
        title={t('meta.contact.title')}
        description={t('meta.contact.description')}
        breadcrumbs={crumbs}
      />
      <PageHeader label={t('contact.label')} title={t('contact.heading')} intro={t('contact.text')} breadcrumbs={crumbs} />

      <Section>
        <div className="grid gap-14 md:grid-cols-[1fr_minmax(0,320px)] lg:gap-20">
          <div className="space-y-8">
            <div className="card p-6 sm:p-7">
              <h2 id="details-heading" className="label mb-5 text-ink-muted">
                {t('contact.detailsHeading')}
              </h2>
              <p className="text-lg font-semibold">{t('contact.detailsName')}</p>
              <p className="mt-1 text-sm text-ink-muted">{t('contact.detailsLine')}</p>
              <ul className="mt-5 space-y-3 text-ink-soft">
                <li className="flex items-center gap-3">
                  <HiOutlineLocationMarker aria-hidden="true" className="h-5 w-5 shrink-0 text-petrol" />
                  {person.city}
                </li>
              </ul>
              <div className="mt-5">
                <CopyEmail align="start" />
              </div>
            </div>
            <p className="text-sm text-ink-muted">
              {t('contact.scopeHint')}{' '}
              <PageLink page="scope" className="link">
                {t('scope.heading')}
              </PageLink>
            </p>
          </div>
          <img
            src={photo(480)}
            srcSet={`${photo(480)} 480w, ${photo(960)} 960w`}
            sizes="(min-width: 1024px) 360px, 80vw"
            alt={t('about.photoAlt')}
            width={480}
            height={600}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full max-w-sm rounded-lg object-cover"
          />
        </div>
      </Section>
    </>
  )
}

export default Contact
