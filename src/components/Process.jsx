import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Search, Hammer, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand',
    description:
      'We start with a deep-dive into your business: goals, bottlenecks, customers, and competitive landscape. No assumptions — just clarity.',
    detail: 'Discovery call → Audit → Strategy brief',
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Build',
    description:
      'Architecture first, execution next. We design and build systems that are clean, scalable, and documented — so your team can own them.',
    detail: 'Design → Develop → Test → Deliver',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Scale',
    description:
      'Launch is just the beginning. We monitor, iterate, and optimize — turning your digital system into a growth compounding machine.',
    detail: 'Launch → Monitor → Optimize → Grow',
  },
]

export default function Process() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="process" className="py-24 lg:py-32 px-6 lg:px-8 section-gray">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center animate-fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="font-mono text-xs font-medium text-accent uppercase tracking-widest accent-dot">
            How We Work
          </span>
          <h2
            className={`mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight text-ink animate-fade-up delay-100 ${
              isVisible ? 'visible' : ''
            }`}
          >
            A process that delivers.
          </h2>
          <p
            className={`mt-4 font-body text-base text-slate-muted max-w-lg mx-auto animate-fade-up delay-200 ${
              isVisible ? 'visible' : ''
            }`}
          >
            Three phases. Zero fluff. Every engagement follows this playbook — refined across dozens of projects.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 relative">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className={`relative animate-fade-up ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${(i + 3) * 100}ms` }}
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-9 left-full w-full h-px bg-surface-border z-0 -translate-x-6" />
                )}

                <div className="glass-card rounded-2xl p-7 relative z-10">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-accent-pale flex items-center justify-center">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <span className="font-display text-3xl font-800 text-ink/8 select-none">{step.number}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-ink mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-slate-muted leading-relaxed mb-5">{step.description}</p>

                  <div className="pt-4 border-t border-surface-border">
                    <p className="font-mono text-xs text-accent">{step.detail}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
