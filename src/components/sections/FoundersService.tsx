import { useTranslation } from 'react-i18next'

const FoundersService = () => {
  const { t } = useTranslation()

  const serviceItems = t('foundersService.services.items', { returnObjects: true }) as string[]
  const exclusions = t('foundersService.services.exclusions', { returnObjects: true }) as string[]

  return (
    <section id="founders-service" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
          {t('foundersService.heading')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-700 to-accent mx-auto mb-8" />

        <p className="text-xl text-center text-gray-700 font-semibold mb-6">
          {t('foundersService.subtitle')}
        </p>
        <p className="text-lg text-center text-gray-600 mb-4 max-w-4xl mx-auto">
          {t('foundersService.intro')}
        </p>
        <p className="text-base text-center text-gray-500 italic mb-16">
          {t('foundersService.languages')}
        </p>

        {/* Services */}
        <div className="mb-12 bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('foundersService.services.heading')}</h3>
          <ul className="space-y-3 mb-6">
            {serviceItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-700 text-xl mr-3">•</span>
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="border-t pt-6 mt-6">
            {exclusions.map((item, index) => (
              <p key={index} className="text-gray-600 italic mb-2">{item}</p>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-primary-50 rounded-lg p-8 border-2 border-primary-700">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('foundersService.pricing.heading')}</h3>
          <div className="space-y-3">
            <p className="text-xl font-semibold text-gray-900">{t('foundersService.pricing.option1')}</p>
            <p className="text-xl font-semibold text-gray-900">{t('foundersService.pricing.option2')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundersService
