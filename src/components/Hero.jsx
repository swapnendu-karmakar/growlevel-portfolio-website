import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3×', label: 'Avg. Growth Rate' },
]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const scrollToWork = () => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  const scrollDown = () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 overflow-hidden">
      {/* Background grid decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(229,231,235,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(229,231,235,0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Modern Ambient Blur Glows */}
      <div 
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: '4s' }} 
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[80px] pointer-events-none animate-pulse"
        style={{ animationDuration: '7s' }} 
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Glassmorphic Badge */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm text-ink text-xs font-mono font-medium mb-8 transition-all duration-700 hover:bg-white/60 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Digital Growth Agency
        </div>

        {/* Heading */}
        <h1
          className={`font-display text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.12] tracking-tight text-ink mb-6 transition-all duration-700 delay-100 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Building Systems.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-400">Driving Growth.</span>
        </h1>

        {/* Sub-tagline */}
        <p
          className={`font-body text-lg sm:text-xl text-slate-muted max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          We Build, Scale & You Grow — smart digital infrastructure for ambitious businesses.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button onClick={scrollToWork} className="btn-outline w-full sm:w-auto justify-center">
            View Our Work
          </button>
          <button onClick={scrollToContact} className="btn-primary w-full sm:w-auto justify-center">
            Get Started <ArrowRight size={15} />
          </button>
        </div>

        {/* Glassmorphic Stats row */}
        <div
          className={`mt-20 p-8 glass-card rounded-3xl grid grid-cols-3 gap-6 max-w-xl mx-auto transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl font-bold text-ink">{stat.value}</p>
              <p className="font-body text-xs text-slate-muted mt-2 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-muted hover:text-accent transition-all duration-700 delay-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  )
}
