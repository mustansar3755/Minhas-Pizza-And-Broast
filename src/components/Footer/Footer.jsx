import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock} from 'lucide-react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '../../data/restaurantData'

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid #1f1f1f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-red to-brand-red-dark flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>M</span>
              </div>
              <div>
                <p className="text-white font-bold leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Minhas Pizza & Broast
                </p>
                <p className="text-brand-gold text-[11px] font-medium tracking-widest uppercase">
                  Delicious in Taste
                </p>
              </div>
            </div>
            <p className="text-[#555] text-sm leading-relaxed">
              Your neighborhood's favorite stop for pizza, broast, BBQ, and desi food. Open daily, serving late!
            </p>
            <div className="flex gap-3">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-[#222] flex items-center justify-center text-[#555] hover:text-[#1877f2] hover:border-[#1877f2]/40 transition-all">
                <FaFacebook />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl border border-[#222] flex items-center justify-center text-[#555] hover:text-[#e1306c] hover:border-[#e1306c]/40 transition-all">
                <FaInstagram/>
              </a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-[#222] flex items-center justify-center text-[#555] hover:text-[#25D366] hover:border-[#25D366]/40 transition-all">
                <FaWhatsapp size={15} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Quick Links</p>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/menu', label: 'Our Menu' },
                { to: '/deals', label: 'Deals & Offers' },
                { to: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#555] text-sm hover:text-brand-gold transition-colors animated-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Contact</p>
            <ul className="space-y-3.5">
              <li>
                <div className="flex items-start gap-2.5">
                  <MapPin size={13} className="text-brand-red mt-0.5 shrink-0" />
                  <span className="text-[#555] text-sm leading-snug">{CONTACT.address}</span>
                </div>
              </li>
              {CONTACT.phones.map(phone => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/-/g, '')}`}
                    className="flex items-center gap-2.5 text-[#555] text-sm hover:text-brand-gold transition-colors">
                    <Phone size={12} className="shrink-0" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`tel:${CONTACT.landline}`}
                  className="flex items-center gap-2.5 text-[#555] text-sm hover:text-brand-gold transition-colors">
                  <Phone size={12} className="shrink-0" />
                  {CONTACT.landline} <span className="text-[#333] text-xs">(Landline)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours + CTA */}
          <div>
            <p className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">Hours</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-[#4ade80]" />
                <span className="text-[#555] text-sm">Open Daily</span>
              </div>
              <p className="text-[#4ade80] text-sm font-medium pl-5">Closes at 2:00 AM</p>
              <div className="pl-5">
                <span className="open-badge">Open Now</span>
              </div>
            </div>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hello! I want to place an order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold w-full justify-center"
            >
              <FaWhatsapp size={16} />
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-dark py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#333] text-xs">
            © {new Date().getFullYear()} Minhas Pizza & Broast. All rights reserved.
          </p>
          <p className="text-[#333] text-xs">
            Made with ❤️ for the best food in Bhikhi
          </p>
        </div>
      </div>
    </footer>
  )
}
