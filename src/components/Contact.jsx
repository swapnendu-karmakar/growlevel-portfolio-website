import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { supabase } from '../lib/supabase'
import { Send, CheckCircle, AlertCircle, Loader2, Mail, MessageSquare, User } from 'lucide-react'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('loading')
    setErrorMsg('')

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          message: form.message.trim(),
        },
      ])

      if (error) throw error

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Contact form error:', err)
      setErrorMsg('Something went wrong. Please try again or email us directly.')
      setStatus('error')
    }
  }

  const inputBase =
    'w-full px-4 py-3 rounded-xl border border-surface-border bg-white font-body text-sm text-ink placeholder:text-slate-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/60 transition-all duration-200'

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-8 section-gray">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className={`animate-fade-up ${isVisible ? 'visible' : ''}`}>
              <span className="font-mono text-xs font-medium text-accent uppercase tracking-widest accent-dot">
                Get In Touch
              </span>
            </div>

            <h2
              className={`mt-5 font-display text-4xl sm:text-5xl font-bold leading-tight text-ink animate-fade-up delay-100 ${isVisible ? 'visible' : ''
                }`}
            >
              Ready to grow?
              <br />
              <span className="text-accent">Let's talk.</span>
            </h2>

            <p
              className={`mt-5 font-body text-base text-slate-muted leading-relaxed animate-fade-up delay-200 ${isVisible ? 'visible' : ''
                }`}
            >
              Tell us about your business and what you're looking to build. We'll get back to you within 24 hours with a clear plan of action.
            </p>

            {/* Contact info */}
            <div
              className={`mt-8 flex flex-col gap-4 animate-fade-up delay-300 ${isVisible ? 'visible' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent-pale flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-accent" />
                </div>
                <a href="mailto:growleveldigital@gmail.com" className="font-body text-sm text-ink hover:text-accent transition-colors">
                  growleveldigital@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent-pale flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={15} className="text-accent" />
                </div>
                <span className="font-body text-sm text-ink">Response within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`glass-card rounded-2xl p-8 animate-fade-up delay-200 ${isVisible ? 'visible' : ''}`}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle size={28} className="text-green-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-ink">Message sent!</h3>
                <p className="font-body text-sm text-slate-muted max-w-xs">
                  Thanks for reaching out. We'll review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline text-sm py-2.5 px-5 mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="font-body text-xs font-medium text-ink/70 mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">
                    <User size={11} /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={inputBase}
                  />
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-ink/70 mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">
                    <Mail size={11} /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className={inputBase}
                  />
                </div>

                <div>
                  <label className="font-body text-xs font-medium text-ink/70 mb-1.5 flex items-center gap-1.5 uppercase tracking-wider">
                    <MessageSquare size={11} /> Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                    rows={5}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 border border-red-100">
                    <AlertCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="font-body text-xs text-red-600">{errorMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={15} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </button>

                <p className="font-body text-xs text-center text-slate-muted/70">
                  No spam. We take your privacy seriously.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
