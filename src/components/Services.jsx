import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Globe, Workflow, Settings, BarChart3, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'High-performance websites built with modern tech. Fast, accessible, and engineered to convert visitors into customers.',
    tags: ['React', 'Next.js', 'Webflow'],
  },
  {
    icon: Workflow,
    title: 'Automation & Workflows',
    description:
      'End-to-end business automation using no-code and custom solutions. Connect your tools, eliminate friction, reclaim time.',
    tags: ['Zapier', 'Make', 'n8n'],
  },
  {
    icon: Settings,
    title: 'Digital Systems Setup',
    description:
      'CRM, project management, analytics, and communication stacks — fully configured and ready for your team to hit the ground running.',
    tags: ['CRM', 'Analytics', 'Ops'],
  },
  {
    icon: BarChart3,
    title: 'Growth Strategy',
    description:
      'Data-backed digital strategy that maps your goals to measurable outcomes. From funnels to full-stack growth plans.',
    tags: ['SEO', 'Funnels', 'Ads'],
  },
]

export default function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-8 section-gray">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`animate-fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="font-mono text-xs font-medium text-accent uppercase tracking-widest accent-dot">
            What We Do
          </span>
        </div>

        <div className="mt-5 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className={`font-display text-4xl sm:text-5xl font-bold leading-tight text-ink max-w-md animate-fade-up delay-100 ${
              isVisible ? 'visible' : ''
            }`}
          >
            Services built for scale.
          </h2>
          <p
            className={`font-body text-base text-slate-muted max-w-sm animate-fade-up delay-200 ${
              isVisible ? 'visible' : ''
            }`}
          >
            Each service is designed to integrate with the others — creating a compounding effect on your growth.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`glass-card group rounded-2xl p-7 cursor-default animate-fade-up ${
                  isVisible ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${(i + 3) * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-accent-pale flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-surface-border group-hover:text-accent transition-colors duration-200"
                  />
                </div>

                <h3 className="font-display font-semibold text-lg text-ink mb-2">{service.title}</h3>
                <p className="font-body text-sm text-slate-muted leading-relaxed mb-5">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-surface-border/60 text-xs font-mono font-medium text-slate-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
