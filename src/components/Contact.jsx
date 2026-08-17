import { Eyebrow, Reveal } from './ui'

const CONTACT_EMAIL = 'frediect@proton.me.com'
const PHONE = '+254 720 847 588'
const WHATSAPP_URL = 'https://wa.me/254720847588'

function ContactCard({ icon, label, value, href }) {
  return (
    <a href={href} className="flex items-start gap-4 bg-paper border border-line rounded-2xl p-5 hover:border-indigo/40 transition-colors">
      <span className="w-10 h-10 rounded-full bg-indigo-light text-indigo flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <p className="text-xs text-muted mb-0.5">{label}</p>
        <p className="font-medium text-sm">{value}</p>
      </div>
    </a>
  )
}

export default function Contact() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-12">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 mb-3">
            Let's build the system your business needs.
          </h2>
          <p className="text-muted leading-relaxed">
            Reach out directly, or send a quote request above — we typically respond within one business day.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <ContactCard
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              label="Call"
              value={PHONE}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
            />
            <ContactCard
              href={WHATSAPP_URL}
              label="Chat on WhatsApp"
              value="Start a conversation"
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>}
            />
            <ContactCard
              href={`mailto:${CONTACT_EMAIL}`}
              label="Email"
              value={CONTACT_EMAIL}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>}
            />
          </div>

          <div className="bg-paper border border-line rounded-2xl p-6 flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="font-medium text-sm mb-0.5">Global — remote-first</p>
              <p className="text-sm text-muted">We work with clients across Kenya and remotely, worldwide.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
