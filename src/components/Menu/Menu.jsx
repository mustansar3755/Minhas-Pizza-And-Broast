import { useState } from 'react'

import { FaWhatsapp } from 'react-icons/fa'
import { useFadeUp, useStaggerChildren } from '../../hooks/useScrollAnimation'
import { MENU_ITEMS, MENU_CATEGORIES, CONTACT } from '../../data/restaurantData'

function MenuCard({ item }) {
  // eslint-disable-next-line no-unused-vars
  const minPrice = Math.min(...item.variants.map(v => v.price))

  return (
    <div className="menu-card p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="text-white font-semibold text-base leading-snug"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              {item.name}
            </h3>
            {item.badge && (
              <span className="deal-badge">{item.badge}</span>
            )}
          </div>
          <p className="text-[#666] text-xs leading-relaxed">{item.description}</p>
        </div>
        {item.variants.length === 1 && (
          <div className="shrink-0 text-right">
            <p className="price-tag text-xl">Rs. {item.variants[0].price.toLocaleString()}</p>
          </div>
        )}
      </div>

      {/* Variants */}
      {item.variants.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {item.variants.map((v, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-xl"
              style={{ background: '#252525', border: '1px solid #333' }}
            >
              <span className="text-[#aaa] text-xs font-medium">{v.label}</span>
              <span className="text-brand-gold text-xs font-bold">Rs. {v.price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      )}

      {/* Order CTA */}
      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=Hi! I want to order ${item.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-[#25D366] transition-all hover:scale-[1.02]"
        style={{ border: '1px solid rgba(37,211,102,0.25)', background: 'rgba(37,211,102,0.06)' }}
      >
        <FaWhatsapp size={14} />
        Order Now
      </a>
    </div>
  )
}

export default function Menu({ sectionRef }) {
  const [activeTab, setActiveTab] = useState('broast')
  const titleRef = useFadeUp({ y: 30 })

  return (
    <section id="menu" ref={sectionRef} className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 opacity-0">
          <p className="section-tag mb-3">Our Menu</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Explore Our <span className="gradient-text-gold">Flavors</span>
          </h2>
          <p className="text-[#666] text-base max-w-xl mx-auto mt-3">
            From crispy broast to sizzling BBQ — every item crafted with love and the finest ingredients.
          </p>
          <div className="divider mx-auto mt-5" />
        </div>

        {/* Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id ? 'tab-active scale-105' : 'tab-inactive'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <MenuGrid key={activeTab} items={MENU_ITEMS[activeTab] || []} />
      </div>
    </section>
  )
}

function MenuGrid({ items }) {
  const gridRef = useStaggerChildren(0.08)

  return (
    <div
      ref={gridRef}
      className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
    >
      {items.map((item) => (
        <div key={item.id}>
          <MenuCard item={item} />
        </div>
      ))}
    </div>
  )
}
