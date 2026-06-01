import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Clock, MapPin, Star } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import gsap from 'gsap'
import { CONTACT } from '../../data/restaurantData'

const FOOD_IMGS = [
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=80', // pizza
  'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&q=80', // broast
  'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=700&q=80', // bbq
]

export default function Hero() {
  const heroRef = useRef(null)
  const imgRef = useRef(null)
  const [imgIdx, setImgIdx] = React.useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo('[data-hero-tag]', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .fromTo('[data-hero-title]', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.3')
      .fromTo('[data-hero-sub]', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .fromTo('[data-hero-btns]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo('[data-hero-info]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
      .fromTo('[data-hero-img]', { opacity: 0, scale: 0.92, x: 40 }, { opacity: 1, scale: 1, x: 0, duration: 1.1, ease: 'power3.out' }, '-=1')
    return () => tl.kill()
  }, [])

  // Auto-rotate images
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setImgIdx(prev => (prev + 1) % FOOD_IMGS.length)
    }, 3500)
    return () => clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    if (!imgRef.current) return
    gsap.fromTo(imgRef.current, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' })
  }, [imgIdx])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center hero-bg pt-24 pb-16 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(224,32,32,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #f5a623, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left: Content */}
          <div className="space-y-7">
            {/* Tag */}
            <div data-hero-tag className="opacity-0 flex items-center gap-3">
              <span className="open-badge">Open Now • Closes 2 AM</span>
              <div className="flex items-center gap-1 text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
            </div>

            {/* Main Headline */}
            <div data-hero-title className="opacity-0">
              <h1 className="leading-[1.1] tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-white font-bold">
                  Minhas
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text-gold text-glow-gold">
                  Pizza &
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-white font-bold">
                  Broast
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div data-hero-sub className="opacity-0">
              <p className="text-brand-gold text-xl font-medium italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                "{CONTACT.tagline}"
              </p>
              <p className="text-[#888] text-base mt-2 leading-relaxed max-w-md">
                Fresh Pizza, Crispy Broast, Live BBQ & Authentic Desi Food — all in one place. 
                Serving Bhikhi & Sheikhupura with flavors that keep you coming back.
              </p>
            </div>

            {/* CTA Buttons */}
            <div data-hero-btns className="opacity-0 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=Hello! I'd like to place an order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg"
              >
                <FaWhatsapp size={20} />
                Order on WhatsApp
              </a>
              <Link
                to="/menu"
                className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold"
              >
                View Full Menu
              </Link>
            </div>

            {/* Info row */}
            <div data-hero-info className="flex flex-wrap gap-5 pt-2">
              <div className="flex items-center gap-2 text-[#777] text-sm">
                <Clock size={14} className="text-brand-gold" />
                <span>Daily until 2:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-[#777] text-sm">
                <MapPin size={14} className="text-brand-red" />
                <span>Adda Bhikhi, Sheikhupura</span>
              </div>
            </div>
          </div>

          {/* Right: Food Image */}
          <div data-hero-img className="opacity-0 relative flex justify-center">
            {/* Image container */}
            <div className="relative w-full max-w-lg">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(224,32,32,0.2) 0%, transparent 70%)', filter: 'blur(30px)' }} />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden border border-brand-border shadow-2xl"
                style={{ aspectRatio: '4/3' }}>
                <img
                  ref={imgRef}
                  src={FOOD_IMGS[imgIdx]}
                  alt="Minhas special food"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(13,13,13,0.6) 100%)' }} />
              </div>

              {/* Image dots */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {FOOD_IMGS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === imgIdx ? 'w-6 h-2 bg-brand-gold' : 'w-2 h-2 bg-[#555] hover:bg-[#888]'
                    }`}
                  />
                ))}
              </div>

              {/* Floating card — Rating */}
              <div className="absolute -top-4 -left-4 sm:-left-8 bg-brand-card border border-brand-border rounded-2xl px-4 py-3 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-linear-to-br from-brand-gold to-brand-gold-dark flex items-center justify-center">
                    <Star size={14} fill="white" stroke="none" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">4.9 Rating</p>
                    <p className="text-[#666] text-[11px]">1200+ reviews</p>
                  </div>
                </div>
              </div>

              {/* Floating card — Hours */}
              <div className="absolute -bottom-2 -right-4 sm:-right-8 bg-brand-card border border-brand-border rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-linear-to-br from-brand-red to-brand-red-dark flex items-center justify-center">
                    <Clock size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Open Daily</p>
                    <p className="text-[#4ade80] text-[11px] font-semibold">Closes 2:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20 animate-bounce">
          <ChevronDown size={24} className="text-[#555]" />
        </div>
      </div>
    </section>
  )
}

// React needs to be in scope for useState
import React from 'react'
