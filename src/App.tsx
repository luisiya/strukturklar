import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import PremiumService from './components/sections/PremiumService'
import FoundersService from './components/sections/FoundersService'
import ProfessionalBackground from './components/sections/ProfessionalBackground'
import Terms from './components/sections/Terms'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import Impressum from './components/pages/Impressum'
import Datenschutz from './components/pages/Datenschutz'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <div className="min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <PremiumService />
            <ProfessionalBackground />
            <FoundersService />
            <Terms />
            <Contact />
          </main>
        } />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
