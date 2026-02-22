import { useTranslation } from 'react-i18next'

const Terms = () => {
  const { t } = useTranslation()

  const termsItems = t('terms.items', { returnObjects: true }) as string[]
  const liabilityItems = t('liability.items', { returnObjects: true }) as string[]

  return (
    <section id="terms" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* General Terms */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.heading')}</h3>
            <ol className="space-y-4">
              {termsItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-bold text-primary-700 mr-3">{index + 1}.</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Liability */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('liability.heading')}</h3>
            <p className="text-gray-700 mb-4 font-semibold">{t('liability.intro')}</p>
            <ul className="space-y-3">
              {liabilityItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 text-xl mr-3">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terms
