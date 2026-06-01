import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import DealsPage from './pages/DealsPage'
import ContactPage from './pages/ContactPage'
import WhatsAppFloat from './components/UI/WhatsAppFloat'
import ScrollToTop from './components/UI/ScrollToTop'

export default function App() {
  return (
    <div className="noise-overlay min-h-screen bg-brand-black">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <WhatsAppFloat />
    </div>
  )
}
