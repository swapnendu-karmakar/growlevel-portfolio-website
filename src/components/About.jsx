import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Target, Cpu, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Systems Thinking',
    body: 'We design digital infrastructure that works end-to-end — every tool, workflow, and touchpoint connected with purpose.',
  },
  {
    icon: Cpu,
    title: 'Smart Automation',
    body: 'Repetitive tasks, handled. We free up your team by automating the processes that slow businesses down.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    body: 'From startup to scale-up, we build foundations that handle growth without breaking down.',
  },
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className={`animate-fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="font-mono text-xs font-medium text-accent uppercase tracking-widest accent-dot">
            About Us
          </span>
        </div>

        <div className="mt-5 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — headline */}
          <div>
            <h2
              className={`font-display text-4xl sm:text-5xl font-bold leading-tight text-ink animate-fade-up delay-100 ${
                isVisible ? 'visible' : ''
              }`}
            >
              We don't just build websites.
              <br />
              <span className="text-accent">We build growth engines.</span>
            </h2>
          </div>

          {/* Right — body */}
          <div
            className={`animate-fade-up delay-200 ${isVisible ? 'visible' : ''}`}
          >
            <p className="font-body text-base text-slate-muted leading-relaxed mb-4">
              GrowLevel Digital partners with founders, startups, and growing businesses to architect the digital systems they need to compete in a modern market.
            </p>
            <p className="font-body text-base text-slate-muted leading-relaxed">
              Whether you're launching your first website or automating complex workflows, we bring strategy, execution, and momentum to every engagement.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className={`glass-card rounded-2xl p-6 transition-all duration-300 animate-fade-up delay-${(i + 2) * 100} ${
                  isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${(i + 3) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-accent-pale flex items-center justify-center mb-4">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-base text-ink mb-2">{pillar.title}</h3>
                <p className="font-body text-sm text-slate-muted leading-relaxed">{pillar.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
