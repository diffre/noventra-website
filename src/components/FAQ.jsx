import { useState } from 'react'
import { Eyebrow, Reveal } from './ui'

const FAQS = [
  {
    q: 'What kind of businesses do you build software for?',
    a: 'Startups, SMEs, enterprises, landlords, schools, hospitals and retail businesses. If your business runs on repeatable processes, we can likely automate or digitize them.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most custom builds take 4–10 weeks depending on scope, from initial requirements through to launch. Smaller automations or integrations can move faster. We agree on a timeline together before work starts, and keep you updated at every milestone.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. Every project includes a support window after launch, and ongoing maintenance plans are available for ongoing monitoring, fixes, and upgrades as your business grows.',
  },
  {
    q: 'Can you customize the Rent Management System for my portfolio?',
    a: 'Yes — the Rent Management System is built to adapt to different portfolio sizes and rent structures. Book a demo and we\'ll walk through what customization would look like for your specific properties.',
  },
  {
    q: 'What does the development process look like?',
    a: 'We start with a discovery conversation to understand your workflow, propose a scope and quote, then build in short iterations with regular check-ins so you see progress throughout — not just at the end.',
  },
  {
    q: 'Do you work with clients outside Kenya?',
    a: "Yes — we're remote-first and work with clients globally. Most communication happens over call, WhatsApp, and email, with the same process regardless of location.",
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display font-medium text-base md:text-lg pr-4">{item.q}</span>
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`shrink-0 transition-transform duration-300 text-indigo ${isOpen ? 'rotate-45' : ''}`}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-muted leading-relaxed pb-5 pr-8">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 md:py-32 bg-paper">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="mb-12">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4">Answers before you ask.</h2>
        </Reveal>

        <Reveal delay={100}>
          <div>
            {FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
