import { useT } from '../../i18n'
import { Seo } from '../../lib/seo'
import { localePath } from '../../lib/paths'
import { breadcrumbs } from '../../lib/breadcrumbs'
import { site } from '../../config/site'
import LegalNotice from '../ui/LegalNotice'
import PageHeader from '../ui/PageHeader'
import PageLink from '../ui/PageLink'

const Impressum = () => {
  const { t, lang } = useT()
  const crumbs = breadcrumbs(t, lang, 'impressum')
  const { person, address } = site
  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang, 'impressum')}
        title={t('meta.impressum.title')}
        description={t('meta.impressum.description')}
        breadcrumbs={crumbs}
      />
      <PageHeader title={t('meta.impressum.title')} breadcrumbs={crumbs} />
      <LegalNotice />
      <div className="container-page py-14 sm:py-20" lang="de">
        <div className="max-w-prose space-y-10 leading-relaxed text-ink-soft">
          <section>
            <h2 className="h3 mb-3">Angaben gemäß § 5 DDG</h2>
            <p>
              {person.name}
              <br />
              {site.name}
              <br />
              {address.street}
              <br />
              {address.postalCode} {address.city}
              <br />
              {address.country}
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-ink">Kontakt</h2>
            <p>
              Telefon: <a href={`tel:${person.phoneHref}`}>{person.phone}</a>
              <br />
              E-Mail: <a href={`mailto:${person.email}`}>{person.email}</a>
            </p>
          </section>

          {/* Add a "Berufshaftpflichtversicherung" section (insurer, address, territorial scope) once a policy exists. */}
          {/* § 5 Abs. 1 Nr. 6 DDG: add USt-IdNr. or Wirtschafts-Identifikationsnummer here once one is assigned. */}

          <section>
            <h2 className="mb-2 text-base font-semibold text-ink">Umfang der Tätigkeit</h2>
            <p>
              Es wird keine Rechtsberatung und keine Hilfeleistung in Steuersachen erbracht, soweit diese gesetzlich
              befugten Personen vorbehalten ist. Einzelheiten:{' '}
              <PageLink page="scope" className="link">
                {t('scope.heading')}
              </PageLink>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default Impressum
