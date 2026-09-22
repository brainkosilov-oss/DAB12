import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { FloatingCTA } from './components/FloatingCTA/FloatingCTA'
import { Home } from './pages/Home/Home'
import { Catalog } from './pages/Catalog/Catalog'
import { Category } from './pages/Category/Category'
import { Works } from './pages/Works/Works'
import { Production } from './pages/Production/Production'
import { About } from './pages/About/About'
import { Services } from './pages/Services/Services'
import { ServiceCategory } from './pages/Services/ServiceCategory'
import { DeliveryInstallation } from './pages/DeliveryInstallation/DeliveryInstallation'
import { Documents } from './pages/Documents/Documents'
import { Contacts } from './pages/Contacts/Contacts'
import { Privacy } from './pages/Legal/Privacy'
import { Consent } from './pages/Legal/Consent'

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
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
