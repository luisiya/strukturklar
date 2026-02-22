import { useTranslation } from 'react-i18next'

const PremiumService = () => {
  const { t } = useTranslation()

  const targetItems = t('premiumService.positioning.targetItems', { returnObjects: true }) as string[]
  const notSuitableItems = t('premiumService.positioning.notSuitableItems', { returnObjects: true }) as string[]
  const serviceItems = t('premiumService.services.items', { returnObjects: true }) as string[]
  const pricingFactors = t('premiumService.pricing.factors', { returnObjects: true }) as string[]
  const purposeItems = t('premiumService.consultation.items', { returnObjects: true }) as string[]
  const checkboxes = t('premiumService.consultation.checkboxes', { returnObjects: true }) as string[]

  return (
    <section id="premium-service" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
          {t('premiumService.heading')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-700 to-accent mx-auto mb-16" />

        {/* Positioning */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('premiumService.positioning.heading')}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-4">{t('premiumService.positioning.intro')}</p>
              <ul className="space-y-2">
                {targetItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-700 text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4">{t('premiumService.positioning.notSuitableIntro')}</p>
              <ul className="space-y-2">
                {notSuitableItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 text-xl mr-3">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('premiumService.services.heading')}</h3>
          <ul className="space-y-3 mb-6">
            {serviceItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-700 text-xl mr-3">•</span>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-900 font-semibold italic">{t('premiumService.services.note')}</p>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('premiumService.pricing.heading')}</h3>
          <div className="bg-primary-50 rounded-lg p-8 border-2 border-primary-700">
            <h4 className="text-xl font-bold text-gray-900 mb-2">{t('premiumService.pricing.title')}</h4>
            <p className="text-3xl font-bold text-primary-700 mb-6">{t('premiumService.pricing.price')}</p>
            <p className="text-gray-700 mb-3">{t('premiumService.pricing.dependsOn')}</p>
            <ul className="space-y-2">
              {pricingFactors.map((factor, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span className="text-gray-700">{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Consultation */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('premiumService.consultation.heading')}</h3>
          <p className="text-xl text-primary-700 font-semibold mb-6">{t('premiumService.consultation.duration')}</p>

          <p className="text-gray-700 font-semibold mb-3">{t('premiumService.consultation.purpose')}</p>
          <ul className="space-y-2 mb-6">
            {purposeItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-700 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-700 font-semibold mb-3">{t('premiumService.consultation.requirements')}</p>
          <ul className="space-y-2">
            {checkboxes.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-400 mr-2">☐</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PremiumService
