import { useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { supabase } from '../lib/supabase'
import { ExternalLink, Loader2 } from 'lucide-react'

const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'LaunchPad SaaS',
    description: 'Full-stack SaaS platform with subscription billing, user dashboards, and automated onboarding flows.',
    link: '#',
    category: 'Web Dev',
  },
  {
    id: 2,
    title: 'RetailFlow Automation',
    description: 'End-to-end order management automation connecting Shopify, Notion, and email into a single pipeline.',
    link: '#',
    category: 'Automation',
  },
  {
    id: 3,
    title: 'GreenScale CRM Setup',
    description: 'Custom HubSpot CRM configuration for a D2C brand — complete with pipelines, sequences, and reporting.',
    link: '#',
    category: 'Systems',
  },
  {
    id: 4,
    title: 'Growify Landing Page',
    description: 'High-converting landing page for a coaching brand. 3× improvement in lead capture rate post-launch.',
    link: '#',
    category: 'Growth',
  },
  {
    id: 5,
    title: 'TaskBridge App',
    description: 'Internal project management tool built for a 40-person remote team, integrated with Slack and Jira.',
    link: '#',
    category: 'Web Dev',
  },
  {
    id: 6,
    title: 'AnalyticsPro Dashboard',
    description: 'Custom analytics dashboard aggregating data from GA4, Meta Ads, and Google Ads into one view.',
    link: '#',
    category: 'Systems',
  },
]

function ProjectCard({ project, delay }) {
  const { ref, isVisible } = useScrollAnimation(0.05)
  return (
    <div
      ref={ref}
      className={`glass-card group rounded-2xl overflow-hidden animate-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Color block header */}
      <div className="h-2 bg-accent/80" />
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="font-mono text-xs font-medium text-accent bg-accent-pale px-2.5 py-1 rounded-lg">
            {project.category || 'Project'}
          </span>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-muted hover:text-accent hover:bg-accent-pale transition-all duration-200"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
        <h3 className="font-display font-semibold text-base text-ink mb-2">{project.title}</h3>
        <p className="font-body text-sm text-slate-muted leading-relaxed">{project.description}</p>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const { ref, isVisible } = useScrollAnimation()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
        if (error || !data || data.length === 0) {
          setProjects(FALLBACK_PROJECTS)
          setUsingFallback(true)
        } else {
          setProjects(data)
        }
      } catch {
        setProjects(FALLBACK_PROJECTS)
        setUsingFallback(true)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="portfolio" className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`animate-fade-up ${isVisible ? 'visible' : ''}`}>
          <span className="font-mono text-xs font-medium text-accent uppercase tracking-widest accent-dot">
            Our Work
          </span>
        </div>

        <div className="mt-5 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className={`font-display text-4xl sm:text-5xl font-bold leading-tight text-ink animate-fade-up delay-100 ${
              isVisible ? 'visible' : ''
            }`}
          >
            Projects that move the needle.
          </h2>
          {usingFallback && (
            <p className="font-mono text-xs text-slate-muted border border-surface-border rounded-lg px-3 py-1.5 self-start lg:self-auto">
              Demo data — connect Supabase to load live projects
            </p>
          )}
        </div>

        {loading ? (
          <div className="mt-16 flex justify-center items-center gap-2 text-slate-muted">
            <Loader2 size={18} className="animate-spin" />
            <span className="font-body text-sm">Loading projects…</span>
          </div>
        ) : (
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 70} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
