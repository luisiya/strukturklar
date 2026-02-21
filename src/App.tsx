import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import ForWhom from './components/sections/ForWhom'
import WhenUseful from './components/sections/WhenUseful'
import WhatYouGet from './components/sections/WhatYouGet'
import CollaborationModel from './components/sections/CollaborationModel'
import Packages from './components/sections/Packages'
import LegalFramework from './components/sections/LegalFramework'
import Liability from './components/sections/Liability'
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
            <ForWhom />
            <WhenUseful />
            <WhatYouGet />
            <CollaborationModel />
            <Packages />
            <LegalFramework />
            <Liability />
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
