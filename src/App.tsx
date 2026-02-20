import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import Introduction from './components/sections/Introduction'
import ProblemStatement from './components/sections/ProblemStatement'
import Approach from './components/sections/Approach'
import TargetAudience from './components/sections/TargetAudience'
import StrategyCheck from './components/sections/StrategyCheck'
import ProfessionalStance from './components/sections/ProfessionalStance'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <ProblemStatement />
        <Approach />
        <TargetAudience />
        <StrategyCheck />
        <ProfessionalStance />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
