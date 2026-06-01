import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useNavbarScroll } from '../../hooks/useScrollAnimation'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/deals', label: 'Deals' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useNavbarScroll()
  const location = useLocation()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-black/95 backdrop-blur-xl border-b border-brand-border shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-linear-to-br from-brand-red to-brand-red-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>M</span>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-brand-gold border-2 border-brand-black"></div>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-bold text-base leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Minhas
                </span>
                <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">
                  Pizza & Broast
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `animated-link text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-brand-gold' : 'text-[#cccccc] hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/923204141408?text=Hello! I'd like to place an order."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex btn-gold items-center gap-2 px-4 py-2.5 rounded-[8px] text-sm font-bold transition-all"
              >
                <FaWhatsapp size={16} />
                <span>Order Now</span>
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border
                 border-brand-border text-white hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 transition-transform duration-400 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: '#141414', borderLeft: '1px solid #2a2a2a' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-border">
          <span className="text-white font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Menu
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#888] hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-4 gap-1 mt-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-linear-to-r from-brand-red/20 to-transparent text-brand-gold border-l-2 border-brand-red'
                    : 'text-[#cccccc] hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-brand-border space-y-3">
          <a
            href="https://wa.me/923204141408?text=Hello! I'd like to place an order."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full btn-gold py-3 rounded-xl text-sm font-bold"
          >
            <FaWhatsapp size={18} />
            Order on WhatsApp
          </a>
          <a
            href="tel:03204141408"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium text-[#ccc] border border-brand-border hover:border-brand-gold hover:text-brand-gold transition-all"
          >
            <Phone size={15} />
            Call to Order
          </a>
        </div>
      </div>
    </>
  )
}
