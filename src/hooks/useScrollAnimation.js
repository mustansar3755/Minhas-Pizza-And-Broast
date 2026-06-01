import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Fade up on scroll
export function useFadeUp(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(
      el,
      { opacity: 0, y: options.y ?? 50 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 0.9,
        ease: options.ease ?? 'power3.out',
        delay: options.delay ?? 0,
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 85%',
          once: true,
        },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return ref
}

// Stagger children on scroll
export function useStaggerChildren(stagger = 0.12, options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const children = el.children
    gsap.fromTo(
      children,
      { opacity: 0, y: options.y ?? 40 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 0.7,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 85%',
          once: true,
        },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return ref
}

// Hero entrance animation
export function useHeroAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('[data-hero-tag]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo('[data-hero-title]', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3')
      .fromTo('[data-hero-sub]', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .fromTo('[data-hero-btns]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo('[data-hero-badge]', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3')
      .fromTo('[data-hero-img]', { opacity: 0, scale: 0.95, x: 30 }, { opacity: 1, scale: 1, x: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
    return () => tl.kill()
  }, [])
  return ref
}

// Navbar scroll effect
export function useNavbarScroll() {
  const ref = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current
      if (!el) return
      if (window.scrollY > 60) {
        el.classList.add('navbar-scrolled')
      } else {
        el.classList.remove('navbar-scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return ref
}
