import { useTranslation } from 'react-i18next'
import Section from '../common/Section'
import Divider from '../common/Divider'

const TargetAudience = () => {
  const { t } = useTranslation()

  return (
    <Section id="target-audience" backgroundColor="gray">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t('targetAudience.heading')}
        </h2>

        <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
          <p className="font-medium">{t('targetAudience.text')}</p>

          <ul className="space-y-3 ml-6">
            {(t('targetAudience.list', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-700 mr-3 text-xl">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 p-4 bg-white rounded-lg border-l-4 border-accent">
            {t('targetAudience.notSuitable')}
          </p>
        </div>
      </div>

      <Divider />
    </Section>
  )
}

export default TargetAudience
