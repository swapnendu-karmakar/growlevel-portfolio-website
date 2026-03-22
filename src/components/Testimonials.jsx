import { useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { supabase } from '../lib/supabase'
import { Quote } from 'lucide-react'

const FALLBACK_TESTIMONIALS = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'Founder, LaunchPad SaaS',
    feedback:
      'GrowLevel transformed our business. They didn\'t just build our website — they built our entire growth infrastructure. Revenue jumped 2.4× in 3 months.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'CEO, RetailFlow',
    feedback:
      'The automation they set up saved us 20+ hours per week. Our team now focuses on strategy instead of spreadsheets. Absolutely worth every rupee.',
  },
  {
    id: 3,
    name: 'Karan Patel',
    role: 'Marketing Head, GreenScale',
    feedback:
      'Professional, fast, and genuinely invested in results. The CRM setup they built for us changed how our entire sales team operates.',
  },
]

function TestimonialCard({ testimonial, delay }) {
  const { ref, isVisible } = useScrollAnimation(0.05)
  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-7 flex flex-col gap-4 animate-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Quote size={24} className="text-accent/30 flex-shrink-0" />
      <p className="font-body text-sm text-ink leading-relaxed flex-1">"{testimonial.feedback}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-surface-border">
        {/* Avatar initials */}
        <div className="w-9 h-9 rounded-full bg-accent-pale flex items-center justify-center flex-shrink-0">
          <span className="font-display text-xs font-bold text-accent">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-display font-semibold text-sm text-ink">{testimonial.name}</p>
          {testimonial.role && (
            <p className="font-body text-xs text-slate-muted">{testimonial.role}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation()
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .order('created_at', { ascending: false })
        if (error || !data || data.length === 0) {
          setTestimonials(FALLBACK_TESTIMONIALS)
          setUsingFallback(true)
        } else {
          setTestimonials(data)
        }
      } catch {
        setTestimonials(FALLBACK_TESTIMONIALS)
        setUsingFallback(true)
      } finally {
        setLoading(false)
      }
    }
    fetchTestimonials()
  }, [])

  return (
    <section id="testimonials" className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center animate-fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="font-mono text-xs font-medium text-accent uppercase tracking-widest accent-dot">
            Client Stories
          </span>
          <h2
            className={`mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight text-ink animate-fade-up delay-100 ${
              isVisible ? 'visible' : ''
            }`}
          >
            Results speak louder.
          </h2>
        </div>

        {!loading && usingFallback && (
          <p className="mt-4 font-mono text-xs text-center text-slate-muted">
            Demo testimonials — connect Supabase to load real ones
          </p>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
