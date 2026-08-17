import { useState } from 'react'
import { SystemsStackMark } from './SystemsStack'

const CONTACT_EMAIL = 'frediect@proton.me'
const WHATSAPP_URL = 'https://wa.me/254720847588'
const PHONE = '+254 720 847 588'

const SERVICES = [
  'Custom Software Development', 'Full Stack Development', 'Desktop Application Development',
  'Mobile App Development', 'Business Process Automation', 'Database Design & Management',
]
const PRODUCTS = [
  'Rent Management System', 'School Management System', 'Hospital Management System',
  'Inventory & POS System', 'Payroll Solution', 'Business Automation Suite','Sacco Management System',]
const QUICK_LINKS = [
  { label: 'Rent Management System', href: '#product' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Request a Quote', href: '#quote' },
]

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div className="border-b border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-lg mb-1">Get product updates &amp; tech insights</p>
          <p className="text-sm text-white/50">Occasional emails about new features and practical software tips. No spam.</p>
        </div>
        {submitted ? (
          <p className="text-sm text-brass font-medium">Thanks — you're on the list.</p>
        ) : (
          <form onSubmit={submit} className="flex gap-2">
            <input
              type="email" required placeholder="you@company.com" value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2.5 rounded-full bg-white/10 border border-white/15 placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-brass w-56"
            />
            <button type="submit" className="bg-brass hover:bg-brass-dark transition-colors text-ink font-semibold text-sm px-5 py-2.5 rounded-full">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Newsletter />

      <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <SystemsStackMark className="w-7 h-6" />
            <span className="font-display font-semibold">Noventra Technologies</span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed mb-4">
            Custom software, web, mobile and cloud solutions — plus our flagship Rent Management
            System — for businesses that want to run on systems, not spreadsheets.
          </p>
          <div className="flex flex-col gap-1.5 text-sm text-white/60">
            <a href={WHATSAPP_URL} className="hover:text-white transition-colors">WhatsApp</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{PHONE}</a>
          </div>
        </div>

        <div>
          <p className="mono-tag text-[11px] text-white/40 font-semibold mb-4">Quick Links</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono-tag text-[11px] text-white/40 font-semibold mb-4">Services</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            {SERVICES.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div>
          <p className="mono-tag text-[11px] text-white/40 font-semibold mb-4">Products</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            {PRODUCTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40">
          <span>© 2026 Noventra Technologies. All Rights Reserved.</span>
          <span>© 2026 Noventra Technologies. Designed by Frediect Noventra Admin.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
