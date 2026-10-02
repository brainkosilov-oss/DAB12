import { useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { FloatingCTA } from './components/FloatingCTA/FloatingCTA'

const Home = lazy(() => import('./pages/Home/Home').then(m => ({ default: m.Home })))
const Catalog = lazy(() => import('./pages/Catalog/Catalog').then(m => ({ default: m.Catalog })))
const Category = lazy(() => import('./pages/Category/Category').then(m => ({ default: m.Category })))
const Works = lazy(() => import('./pages/Works/Works').then(m => ({ default: m.Works })))
const Production = lazy(() => import('./pages/Production/Production').then(m => ({ default: m.Production })))
const About = lazy(() => import('./pages/About/About').then(m => ({ default: m.About })))
const Services = lazy(() => import('./pages/Services/Services').then(m => ({ default: m.Services })))
const ServiceCategory = lazy(() => import('./pages/Services/ServiceCategory').then(m => ({ default: m.ServiceCategory })))
const DeliveryInstallation = lazy(() => import('./pages/DeliveryInstallation/DeliveryInstallation').then(m => ({ default: m.DeliveryInstallation })))
const Documents = lazy(() => import('./pages/Documents/Documents').then(m => ({ default: m.Documents })))
const Contacts = lazy(() => import('./pages/Contacts/Contacts').then(m => ({ default: m.Contacts })))
const Privacy = lazy(() => import('./pages/Legal/Privacy').then(m => ({ default: m.Privacy })))
const Consent = lazy(() => import('./pages/Legal/Consent').then(m => ({ default: m.Consent })))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function ScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (hash === '#lead-form') {
      const el = document.getElementById('lead-form')
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [hash, pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <Header />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:slug" element={<Category />} />
            <Route path="/works" element={<Works />} />
            <Route path="/production" element={<Production />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceCategory />} />
            <Route path="/delivery-installation" element={<DeliveryInstallation />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/consent" element={<Consent />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
