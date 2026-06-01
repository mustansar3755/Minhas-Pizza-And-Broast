import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { useFadeUp } from '../hooks/useScrollAnimation'
// import { MapPin, Phone } from 'lucide-react' // Ek do icons visual detail ke liye

export default function ContactPage() {
  const titleRef = useFadeUp({ y: 30 })

  return (
    <>
      {/* Full Screen Hero Section with Background Image */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{ 
            // Aap apni marzi ki koi bhi acchi pizza/restaurant image ka path yahan laga sakte hain
            backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')`, 
          }}
        />

        {/* Dark Overlay - Taake image ke upar text bilkul saaf aur parhne kabal rahe */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-brand-black" />

        {/* Animated Grid Lines for Premium Look (Optional) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div ref={titleRef} className="opacity-0 space-y-6">
            
            <p className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold bg-brand-gold/10
             border border-brand-gold/20 px-4 py-1.5 rounded-full inline-block backdrop-blur-sm">
              Minhas Pizza & Broast
            </p>
            
            <h1 
              className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              We'd Love to <br />
              Hear From <span className="gradient-text-gold">You</span>
            </h1>
            
            <div className="w-20 h-0.75 bg-linear-to-r from-transparent via-brand-gold to-transparent mx-auto my-6" />
            
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
              Have a question about our menu, catering services, or want to place a large order? Get in touch with our team today.
            </p>

            {/* Down Arrow / Scroll Indicator */}
            <div className="pt-10 animate-bounce">
              <a 
                href="#contact" 
                className="inline-flex flex-col items-center gap-2 text-xs text-gray-500 hover:text-brand-gold transition-colors tracking-widest uppercase font-semibold"
              >
                Scroll Down to Details
                <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main Contact Cards & Map Section (Background: Solid Premium Dark) */}
      <div id="contact" className="bg-brand-black relative z-20">
        <Contact />
      </div>

      <Footer />
    </>
  )
}