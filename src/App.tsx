import { Navigate, Route, Routes } from 'react-router-dom'
import { DEFAULT_LANG } from './config/site'
import { PAGES, localePath } from './lib/paths'
import Layout, { Shell } from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Models from './pages/Models'
import ModelDetail from './pages/ModelDetail'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Workshop from './pages/Workshop'
import ArticleDetail from './pages/ArticleDetail'
import Development from './pages/Development'
import Contact from './pages/Contact'
import Scope from './pages/Scope'
import Impressum from './components/pages/Impressum'
import Datenschutz from './components/pages/Datenschutz'
import NotFound from './pages/NotFound'

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to={localePath(DEFAULT_LANG)} replace />} />
    {/* Old URLs without language prefix */}
    <Route path="/impressum" element={<Navigate to={localePath(DEFAULT_LANG, 'impressum')} replace />} />
    <Route path="/datenschutz" element={<Navigate to={localePath(DEFAULT_LANG, 'datenschutz')} replace />} />

    <Route path="/:lang" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={PAGES.about} element={<About />} />
      <Route path={PAGES.models} element={<Models />} />
      <Route path={`${PAGES.models}/:slug`} element={<ModelDetail />} />
      <Route path={PAGES.projects} element={<Projects />} />
      <Route path={`${PAGES.projects}/:slug`} element={<ProjectDetail />} />
      <Route path={PAGES.workshop} element={<Workshop />} />
      <Route path={`${PAGES.workshop}/:slug`} element={<ArticleDetail />} />
      <Route path={PAGES.development} element={<Development />} />
      <Route path={PAGES.contact} element={<Contact />} />
      <Route path={PAGES.scope} element={<Scope />} />
      <Route path={PAGES.impressum} element={<Impressum />} />
      <Route path={PAGES.datenschutz} element={<Datenschutz />} />
      <Route path="*" element={<NotFound />} />
    </Route>

    <Route
      path="*"
      element={
        <Shell lang={DEFAULT_LANG}>
          <NotFound />
        </Shell>
      }
    />
  </Routes>
)

export default App
