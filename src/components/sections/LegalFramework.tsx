import { useTranslation } from 'react-i18next'

const LegalFramework = () => {
  const { t } = useTranslation()

  const items = t('legalFramework.items', { returnObjects: true }) as string[]

  return (
    <section id="legal" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
          {t('legalFramework.heading')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-700 to-accent mx-auto mb-12" />

        <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg">
          <p className="text-xl text-gray-900 font-semibold mb-6 text-center">
            {t('legalFramework.intro')}
          </p>

          <p className="text-lg text-gray-700 font-semibold mb-4">
            {t('legalFramework.notIncluded')}
          </p>

          <ul className="space-y-3 mb-8">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-600 text-xl mr-3 flex-shrink-0">✗</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg text-gray-900 font-semibold text-center p-4 bg-gray-50 rounded">
            {t('legalFramework.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default LegalFramework
