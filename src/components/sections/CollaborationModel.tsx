import { useTranslation } from 'react-i18next'

const CollaborationModel = () => {
  const { t } = useTranslation()

  return (
    <section id="collaboration" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
          {t('collaborationModel.heading')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-700 to-accent mx-auto mb-16" />

        <div className="space-y-12">
          {/* Stage 1 */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{t('collaborationModel.stage1.title')}</h3>
                <p className="text-primary-700 font-semibold">{t('collaborationModel.stage1.subtitle')}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">{t('collaborationModel.stage1.description')}</p>
            <p className="text-sm text-gray-600 italic bg-gray-50 p-4 rounded">
              <strong>Hinweis:</strong> {t('collaborationModel.stage1.note')}
            </p>
          </div>

          {/* Stage 2 */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('collaborationModel.stage2.title')}</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">{t('collaborationModel.stage2.description')}</p>
            <p className="text-gray-900 font-semibold">
              <strong>Ziel:</strong> {t('collaborationModel.stage2.goal')}
            </p>
          </div>

          {/* Stage 3 */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{t('collaborationModel.stage3.title')}</h3>
                <p className="text-gray-600">{t('collaborationModel.stage3.subtitle')}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4">{t('collaborationModel.stage3.description')}</p>
            <p className="text-sm text-gray-600 italic">{t('collaborationModel.stage3.note')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollaborationModel
