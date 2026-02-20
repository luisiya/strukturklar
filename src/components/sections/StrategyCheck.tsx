import { useTranslation } from 'react-i18next'
import Section from '../common/Section'
import Divider from '../common/Divider'

const StrategyCheck = () => {
  const { t } = useTranslation()

  return (
    <Section id="strategy-check">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t('strategyCheck.heading')}
        </h2>

        <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
          <p className="font-medium">{t('strategyCheck.intro')}</p>

          <ol className="space-y-4 ml-6">
            {(t('strategyCheck.steps', { returnObjects: true }) as string[]).map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary-700 text-white rounded-full font-bold mr-4">
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 space-y-2">
            <p className="text-xl text-gray-900">{t('strategyCheck.goal1')}</p>
            <p className="text-xl font-bold text-primary-700">{t('strategyCheck.goal2')}</p>
          </div>
        </div>
      </div>

      <Divider />
    </Section>
  )
}

export default StrategyCheck
