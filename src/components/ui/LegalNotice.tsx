import { useT } from '../../i18n'

// Legal texts stay German only; other languages get a short hint.
const LegalNotice = () => {
  const { t, lang } = useT()
  if (lang === 'de') return null
  return (
    <p className="container-page pt-10 text-sm text-ink-muted" lang={lang}>
      {t('common.legalGermanOnly')}
    </p>
  )
}

export default LegalNotice
