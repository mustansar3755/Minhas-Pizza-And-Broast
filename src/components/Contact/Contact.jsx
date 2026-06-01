import { Phone, MapPin, Clock} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useFadeUp, useStaggerChildren } from '../../hooks/useScrollAnimation'
import { CONTACT } from '../../data/restaurantData'

export default function Contact({ sectionRef }) {
  const titleRef = useFadeUp({ y: 30 })
  const infoRef = useStaggerChildren(0.12)

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-14 opacity-0">
          <p className="section-tag mb-3">Find Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact & <span className="gradient-text-gold">Location</span>
          </h2>
          <div className="divider mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info Cards */}
          <div ref={infoRef} className="space-y-5">
            {/* Address */}
            <div className="menu-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-brand-red" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Address</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{CONTACT.address}</p>
                  <p className="text-[#666] text-xs mt-1">{CONTACT.addressFull}</p>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="menu-card p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3">Phone Numbers</h3>
                  <div className="space-y-2">
                    {CONTACT.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/-/g, '')}`}
                        className="flex items-center gap-2 text-[#aaa] hover:text-brand-gold transition-colors text-sm group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
                        {phone}
                      </a>
                    ))}
                    <a
                      href={`tel:${CONTACT.landline}`}
                      className="flex items-center gap-2 text-[#aaa] hover:text-brand-gold transition-colors text-sm group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#888]/40 group-hover:bg-brand-gold transition-colors" />
                      {CONTACT.landline} <span className="text-[#555] text-xs">(Landline)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="menu-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#4ade80]/10 border border-[#4ade80]/20 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-[#4ade80]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="open-badge">Open Now</span>
                  </div>
                  <p className="text-[#888] text-sm mt-2">{CONTACT.hours}</p>
                </div>
              </div>
            </div>

            {/* Social & WhatsApp */}
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=Hello! I want to order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-gold flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold"
              >
                <FaWhatsapp size={18} />
                WhatsApp Order
              </a>
             
               
             
            </div>
          </div>

          {/* Map */}
          <div className="menu-card overflow-hidden">
            <div
              className="w-full h-80 flex items-center justify-center relative"
              style={{ background: '#1a1a1a' }}
            >
              {/* Embedded Google Map iframe */}
              <iframe
                title="Minhas Pizza & Broast Location"
                src="https://maps.google.com/maps?q=Bhikhi+Sheikhupura+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) saturate(0.7)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay Pin */}
              <div className="absolute inset-0 pointer-events-none flex items-end p-4">
                <div className="bg-brand-black/90 backdrop-blur-sm border border-brand-border rounded-xl px-4 py-3 flex items-center gap-3">
                  <MapPin size={16} className="text-brand-red shrink-0" />
                  <div>
                    <p className="text-white text-xs font-semibold">Minhas Pizza & Broast</p>
                    <p className="text-[#666] text-[11px]">Adda Bhikhi, Sheikhupura</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-brand-border">
              <a
                href="https://maps.google.com?q=Bhikhi+Sheikhupura+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-gold text-sm font-medium hover:text-brand-gold-light transition-colors animated-link"
              >
                <MapPin size={14} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
