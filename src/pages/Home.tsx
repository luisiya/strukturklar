import { useT } from '../i18n'
import { Seo, organizationSchema, personSchema } from '../lib/seo'
import { localePath } from '../lib/paths'
import { site } from '../config/site'
import Hero from '../components/home/Hero'
import { Method, When } from '../components/home/Thinking'
import Services from '../components/home/Fields'
import { Audience, Check, DecisionSupport, ProjectSupport } from '../components/home/Offer'
import { AboutTeaser, ContactCta, ModelsTeaser, ProjectsTeaser } from '../components/home/Teasers'

const Home = () => {
  const { t, lang } = useT()
  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang)}
        title={t('meta.home.title')}
        description={t('meta.home.description')}
        fullTitle
        jsonLd={[
          organizationSchema,
          personSchema,
          { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.url, inLanguage: lang },
        ]}
      />
      <Hero />
      <When />
      <Services />
      <Method />
      <DecisionSupport />
      <ProjectSupport />
      <ModelsTeaser />
      <ProjectsTeaser />
      <Audience />
      <AboutTeaser />
      <Check />
      <ContactCta />
    </>
  )
}

export default Home
