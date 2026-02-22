import { useTranslation } from 'react-i18next'

const ProfessionalBackground = () => {
  const { t } = useTranslation()

  const jobs = t('background.experience.jobs', { returnObjects: true }) as Array<{ title: string; description: string }>
  const systems = t('background.systems.items', { returnObjects: true }) as string[]

  return (
    <section id="background" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
          {t('background.heading')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-700 to-accent mx-auto mb-16" />

        {/* Profile */}
        <div className="mb-16 bg-primary-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('background.profile.title')}</h3>
          <p className="text-lg text-gray-700 leading-relaxed">{t('background.profile.text')}</p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('background.experience.heading')}</h3>
          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div key={index} className="border-l-4 border-primary-700 pl-6 py-2">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{job.title}</h4>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Systems */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('background.systems.heading')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {systems.map((system, index) => (
              <div key={index} className="flex items-center">
                <span className="text-primary-700 mr-2">✓</span>
                <span className="text-gray-700">{system}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalBackground
