import { useState } from 'react'
import { Eyebrow, Reveal } from './ui'

const PROJECT_TYPES = [
  'Rent Management System', 'School Management System', 'Hospital Management System',
  'Inventory / POS System', 'Payroll Solution', 'Custom Software',
]
const CONTACT_EMAIL = 'frediect@gmail.com'

export default function QuoteForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', type: '', details: '' })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.type) return
    const subject = encodeURIComponent(`Quote request: ${form.type}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject type: ${form.type}\n\nDetails:\n${form.details}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="quote" className="py-24 md:py-32 bg-ink text-white">
      <div className="max-w-2xl mx-auto px-6">
        <Reveal className="text-center mb-10">
          <Eyebrow tone="brass">Request a Quote</Eyebrow>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 mb-3">Tell us what you're building.</h2>
          <p className="text-white/60">
            Share a few details and we'll get back to you with next steps — usually within one business day.
          </p>
        </Reveal>

        <Reveal delay={100}>
          {sent ? (
            <div className="bg-white/5 border border-white/15 rounded-2xl p-8 text-center">
              <p className="font-display font-semibold text-lg mb-1">Your email app should be open</p>
              <p className="text-sm text-white/60">Send it through and we'll reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-white/5 border border-white/15 rounded-2xl p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Full name" value={form.name} onChange={update('name')} required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/15 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brass text-sm" />
                <input placeholder="Company (optional)" value={form.company} onChange={update('company')}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/15 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brass text-sm" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email" value={form.email} onChange={update('email')} required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/15 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brass text-sm" />
                <input placeholder="Phone / WhatsApp" value={form.phone} onChange={update('phone')}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/15 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brass text-sm" />
              </div>
              <select value={form.type} onChange={update('type')} required
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/15 text-sm focus:outline-none focus:ring-2 focus:ring-brass [&>option]:text-ink">
                <option value="" className="text-muted">Select a project type</option>
                {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <textarea placeholder="Project details" rows={4} value={form.details} onChange={update('details')}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/15 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brass text-sm resize-none" />
              <button type="submit" className="w-full bg-brass hover:bg-brass-dark transition-colors text-ink font-semibold py-3 rounded-full text-sm">
                Send Request
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
