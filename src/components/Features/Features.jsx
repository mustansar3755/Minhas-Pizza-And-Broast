import { Flame, Truck, Tag, Leaf } from 'lucide-react'
import { useStaggerChildren, useFadeUp } from '../../hooks/useScrollAnimation'
import { FEATURES } from '../../data/restaurantData'

const iconMap = {
  fresh: Leaf,
  bbq: Flame,
  delivery: Truck,
  deals: Tag,
}

const iconColors = {
  fresh: '#4ade80',
  bbq: '#f97316',
  delivery: '#60a5fa',
  deals: '#f5a623',
}

const bgColors = {
  fresh: 'rgba(74,222,128,0.08)',
  bbq: 'rgba(249,115,22,0.08)',
  delivery: 'rgba(96,165,250,0.08)',
  deals: 'rgba(245,166,35,0.08)',
}

export default function Features() {
  const titleRef = useFadeUp({ y: 30 })
  const cardsRef = useStaggerChildren(0.15)

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--color-brand-charcoal)' }}>
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #e02020 30%, #f5a623 70%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <p className="section-tag mb-3">Why Choose Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Minhas <span className="gradient-text-red">Promise</span>
          </h2>
          <div className="divider mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon]
            const color = iconColors[feature.icon]
            const bg = bgColors[feature.icon]
            return (
              <div
                key={feature.icon}
                className="menu-card p-7 text-center group cursor-default"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: bg, border: `1px solid ${color}22` }}
                >
                  <Icon size={28} style={{ color }} />
                </div>

                {/* Content */}
                <h3
                  className="text-white font-bold text-lg mb-3 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#777] text-sm leading-relaxed">
                  {feature.desc}
                </p>

                {/* Bottom accent line */}
                <div
                  className="h-0.5 w-0 group-hover:w-full mx-auto mt-5 transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #2a2a2a, transparent)' }} />
    </section>
  )
}
