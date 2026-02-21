import { useTranslation } from 'react-i18next'

const Packages = () => {
  const { t } = useTranslation()

  const package1Items = t('packages.package1.items', { returnObjects: true }) as string[]
  const package2Items = t('packages.package2.items', { returnObjects: true }) as string[]

  return (
    <section id="packages" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
          {t('packages.heading')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-700 to-accent mx-auto mb-16" />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Package 1 */}
          <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200 hover:border-primary-700 transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('packages.package1.name')}</h3>
            <p className="text-gray-600 mb-4">{t('packages.package1.subtitle')}</p>
            <p className="text-3xl font-bold text-primary-700 mb-6">{t('packages.package1.price')}</p>

            <p className="text-sm font-semibold text-gray-700 mb-3">{t('packages.package1.includes')}</p>
            <ul className="space-y-2">
              {package1Items.map((item, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Package 2 */}
          <div className="bg-primary-50 rounded-lg p-8 border-2 border-primary-700 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Empfohlen
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('packages.package2.name')}</h3>
            <p className="text-gray-600 mb-4">{t('packages.package2.subtitle')}</p>
            <p className="text-3xl font-bold text-primary-700 mb-6">{t('packages.package2.price')}</p>

            <p className="text-sm font-semibold text-gray-700 mb-3">{t('packages.package2.includes')}</p>
            <ul className="space-y-2">
              {package2Items.map((item, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Package 3 */}
          <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200 hover:border-primary-700 transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('packages.package3.name')}</h3>
            <p className="text-gray-600 mb-4">{t('packages.package3.subtitle')}</p>
            <div className="mb-6">
              <p className="text-xl font-bold text-primary-700">{t('packages.package3.price1')}</p>
              <p className="text-gray-500 text-sm my-1">{t('packages.package3.or')}</p>
              <p className="text-xl font-bold text-primary-700">{t('packages.package3.price2')}</p>
            </div>

            <p className="text-sm text-gray-600 italic bg-white p-3 rounded">{t('packages.package3.note')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages
