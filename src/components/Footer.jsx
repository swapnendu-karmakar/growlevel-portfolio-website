import { Zap } from 'lucide-react'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer 
      className="bg-ink/95 backdrop-blur-3xl text-white border-t border-white/10 relative z-10"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap size={14} className="text-white fill-white" />
              </span>
              <span className="font-display font-semibold text-lg">
                GrowLevel<span className="text-accent">.</span>
              </span>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              Building Systems. Driving Growth.
            </p>
            <p className="font-body text-xs text-white/30 mt-2">
              We Build, Scale & You Grow!
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-4">Navigation</p>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA block */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-sm">
            <p className="font-display font-semibold text-base text-white mb-2">
              Ready to build something great?
            </p>
            <p className="font-body text-sm text-white/50 mb-4">
              Start a conversation — no obligation, just clarity.
            </p>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-body text-sm font-medium rounded-xl hover:bg-accent-light transition-colors duration-200"
            >
              Get Started →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30">
            © {year} GrowLevel Digital. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/20">
            Built with ❤️ for growing businesses
          </p>
        </div>
      </div>
    </footer>
  )
}
