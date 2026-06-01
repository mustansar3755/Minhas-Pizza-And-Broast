import { useState } from 'react'
import { Check, Zap } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useFadeUp, useStaggerChildren } from '../../hooks/useScrollAnimation'
import { DEALS, CONTACT } from '../../data/restaurantData'

const TAB_STYLE = {
  'dhamka-zinger': { active: 'from-[#e02020] to-[#b01818]', text: '#e02020', glow: 'rgba(224,32,32,0.3)' },
  'lunch-midnight': { active: 'from-[#f5a623] to-[#d4890a]', text: '#f5a623', glow: 'rgba(245,166,35,0.3)' },
  'square-pizza': { active: 'from-[#8b5cf6] to-[#6d28d9]', text: '#8b5cf6', glow: 'rgba(139,92,246,0.3)' },
  students: { active: 'from-[#22c55e] to-[#15803d]', text: '#22c55e', glow: 'rgba(34,197,94,0.3)' },
}

function DealCard({ deal, accentColor, glowColor }) {
  return (
    <div
      className="menu-card p-6 flex flex-col gap-5 relative overflow-hidden group"
      style={{ '--card-glow': glowColor }}
    >
      {/* Glow top line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`, opacity: 0.5 }}
      />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: `${accentColor}18`, border: `1px solid ${accentColor}30` }}
          >
            <Zap size={14} style={{ color: accentColor }} />
          </div>
          <div>
            <h3 className="text-white font-bold text-base" style={{ fontFamily: 'Playfair Display, serif' }}>
              {deal.name}
            </h3>
          </div>
        </div>
        {deal.badge && (
          <span className="deal-badge">{deal.badge}</span>
        )}
      </div>

      {/* Items */}
      <ul className="space-y-2 flex-1">
        {deal.items.map((it, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check size={13} className="mt-0.5 shrink-0" style={{ color: accentColor }} />
            <span className="text-[#aaa] text-sm leading-snug">{it}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="flex items-end justify-between pt-2 border-t border-brand-border">
        <div>
          <p className="text-[#666] text-xs mb-0.5">Total Price</p>
          <p className="price-tag text-2xl" style={{ color: accentColor }}>
            Rs. {deal.price.toLocaleString()}
          </p>
        </div>
        <a
          href={`https://wa.me/${CONTACT.whatsapp}?text=Hi! I want to order ${deal.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:scale-105"
          style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`, boxShadow: `0 4px 14px ${glowColor}` }}
        >
          <FaWhatsapp size={13} />
          Order
        </a>
      </div>
    </div>
  )
}

export default function Deals({ sectionRef }) {
  const [activeCategory, setActiveCategory] = useState('dhamka-zinger')
  const titleRef = useFadeUp({ y: 30 })
  const activeDeal = DEALS[activeCategory]
  const style = TAB_STYLE[activeCategory]

  return (
    <section id="deals" ref={sectionRef} className="py-24" style={{ background: 'var(--color-brand-charcoal)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 opacity-0">
          <p className="section-tag mb-3">Exclusive Offers</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Hot <span className="gradient-text-red">Deals</span> You Can't Miss
          </h2>
          <p className="text-[#666] text-base max-w-xl mx-auto mt-3">
            Crafted for value lovers — from students to families, there's a deal for everyone.
          </p>
          <div className="divider mx-auto mt-5" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(DEALS).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? `bg-linear-to-r ${TAB_STYLE[key].active} text-white shadow-lg scale-105`
                  : 'tab-inactive'
              }`}
              style={activeCategory === key ? { boxShadow: `0 6px 20px ${TAB_STYLE[key].glow}` } : {}}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <DealsGrid key={activeCategory} deals={activeDeal.items} accentColor={style.text} glowColor={style.glow} />
      </div>
    </section>
  )
}

function DealsGrid({ deals, accentColor, glowColor }) {
  const gridRef = useStaggerChildren(0.1)
  return (
    <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {deals.map((deal) => (
        <div key={deal.id}>
          <DealCard deal={deal} accentColor={accentColor} glowColor={glowColor} />
        </div>
      ))}
    </div>
  )
}
