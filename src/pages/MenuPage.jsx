import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useFadeUp, useStaggerChildren } from '../hooks/useScrollAnimation'
import { MENU_ITEMS, MENU_CATEGORIES, CONTACT } from '../data/restaurantData'
import Footer from '../components/Footer/Footer'

function MenuCard({ item }) {
  return (
    <div className="menu-card p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="text-white font-semibold text-base" style={{ fontFamily: 'Playfair Display, serif' }}>
              {item.name}
            </h3>
            {item.badge && <span className="deal-badge">{item.badge}</span>}
          </div>
          <p className="text-[#666] text-xs leading-relaxed">{item.description}</p>
        </div>
        {item.variants.length === 1 && (
          <p className="price-tag text-xl shrink-0">Rs. {item.variants[0].price.toLocaleString()}</p>
        )}
      </div>
      {item.variants.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {item.variants.map((v, i) => (
            <div key={i} className="px-3 py-2 rounded-xl flex items-center gap-2"
              style={{ background: '#252525', border: '1px solid #333' }}>
              <span className="text-[#aaa] text-xs">{v.label}</span>
              <span className="text-brand-gold text-xs font-bold">Rs. {v.price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      )}
      <a href={`https://wa.me/${CONTACT.whatsapp}?text=Hi! I want to order ${item.name}`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-[#25D366] transition-all hover:scale-[1.02] mt-auto"
        style={{ border: '1px solid rgba(37,211,102,0.25)', background: 'rgba(37,211,102,0.06)' }}>
        <FaWhatsapp size={14} /> Order Now
      </a>
    </div>
  )
}

function MenuGrid({ items }) {
  const ref = useStaggerChildren(0.07)
  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {items.map(item => <div key={item.id}><MenuCard item={item} /></div>)}
    </div>
  )
}

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('broast')
  const titleRef = useFadeUp({ y: 30 })

  return (
    <>
      <div className="min-h-screen bg-brand-black pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div ref={titleRef} className="text-center mb-14 opacity-0">
            <p className="section-tag mb-3">Full Menu</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Our <span className="gradient-text-gold">Complete</span> Menu
            </h1>
            <p className="text-[#666] text-base max-w-xl mx-auto mt-3">
              Browse everything we have — from crispy broast to sizzling karahi. 
              Order directly on WhatsApp!
            </p>
            <div className="divider mx-auto mt-5" />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {MENU_CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat.id ? 'tab-active scale-105' : 'tab-inactive'
                }`}>
                <span>{cat.icon}</span><span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <MenuGrid key={activeTab} items={MENU_ITEMS[activeTab] || []} />

          {/* CTA Banner */}
          <div className="mt-16 text-center p-10 rounded-3xl border border-brand-border"
            style={{ background: 'linear-gradient(135deg, rgba(224,32,32,0.06), rgba(245,166,35,0.04))' }}>
            <h3 className="text-white text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Order?
            </h3>
            <p className="text-[#666] mb-6">Place your order directly on WhatsApp and we'll handle the rest!</p>
            <a href={`https://wa.me/${CONTACT.whatsapp}?text=Hello! I'd like to place an order.`}
              target="_blank" rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold">
              <FaWhatsapp size={20} /> Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
