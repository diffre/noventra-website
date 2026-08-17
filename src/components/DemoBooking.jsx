import { useState } from 'react'
import { Eyebrow, Reveal } from './ui'

const SLOTS = ['Mon · 10:00 AM', 'Tue · 2:00 PM', 'Wed · 11:30 AM', 'Thu · 3:00 PM', 'Fri · 9:00 AM']
const WHATSAPP_NUMBER = '254720847588'

export default function DemoBooking() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [slot, setSlot] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!name || !email || !slot) return
    const message = encodeURIComponent(
      `Hi Noventra, I'd like to book a Rent Management System demo.\nName: ${name}\nEmail: ${email}\nPreferred slot: ${slot}`,
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    setSent(true)
  }

  return (
    <section id="demo" className="py-24 md:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <Eyebrow>Live Demo</Eyebrow>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 mb-4">
            See the Rent Management System in action.
          </h2>
          <p className="text-muted mb-10">
            Book a 20-minute walkthrough with our team — we'll tailor it to your property portfolio.
          </p>
        </Reveal>

        <Reveal delay={100}>
          {sent ? (
            <div className="bg-brass-light border border-brass/30 rounded-2xl p-8">
              <p className="font-display font-semibold text-lg mb-1">Request sent via WhatsApp</p>
              <p className="text-sm text-muted">We'll confirm your slot shortly. Talk soon.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-paper border border-line rounded-2xl p-8 text-left">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-muted mb-1.5">Full name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-line bg-surface focus:outline-none focus:ring-2 focus:ring-indigo text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted mb-1.5">Work email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-line bg-surface focus:outline-none focus:ring-2 focus:ring-indigo text-sm" />
                </div>
              </div>

              <label className="block text-xs font-medium text-muted mb-2">Choose a time slot</label>
              <div className="flex flex-wrap gap-2 mb-6">
                {SLOTS.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSlot(s)}
                    className={`text-xs font-medium px-3 py-2 rounded-full border transition-colors ${
                      slot === s ? 'bg-ink text-white border-ink' : 'border-line text-muted hover:border-ink'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <button type="submit" className="w-full bg-brass hover:bg-brass-dark transition-colors text-ink font-semibold py-3 rounded-full text-sm">
                Confirm Demo Slot
              </button>
              <p className="text-[11px] text-muted text-center mt-3">Opens WhatsApp to confirm with our team directly.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
