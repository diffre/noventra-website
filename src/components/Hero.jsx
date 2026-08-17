import { SystemsStackHero } from './SystemsStack'
import { Eyebrow, Reveal } from './ui'

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink text-white overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <Eyebrow tone="white">Technology partner · Kenya &amp; remote</Eyebrow>
          <h1 className="font-display font-semibold text-4xl md:text-6xl leading-[1.08] mt-5 mb-6">
            Smart software that runs your business for you.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
            We design secure, scalable software that automates operations and accelerates growth —
            from custom platforms to our flagship Rent Management System.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a href="#quote" className="bg-brass hover:bg-brass-dark transition-colors text-ink font-semibold px-6 py-3 rounded-full text-sm">
              Request a Quote
            </a>
            <a href="#demo" className="border border-white/25 hover:border-white/50 transition-colors text-white px-6 py-3 rounded-full text-sm">
              Book a Demo
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Secure by design
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18M18 17V9M12 17V5M6 17v-3"/></svg>
              Built to scale
            </span>
            <a href="tel:+254720847588" className="hover:text-white transition-colors">+254 720 847 588</a>
          </div>
        </Reveal>

        <Reveal delay={150} className="hidden md:block">
          <SystemsStackHero className="w-full max-w-md mx-auto" />
        </Reveal>
      </div>
    </section>
  )
}
