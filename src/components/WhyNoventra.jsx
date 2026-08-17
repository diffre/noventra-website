import { Eyebrow, Reveal, SectionMark } from './ui'

const REASONS = [
  { title: 'Custom-built', desc: 'Solutions designed around your business, not a rigid template.' },
  { title: 'Modern & scalable', desc: 'Technologies that grow with your business instead of holding it back.' },
  { title: 'Secure & reliable', desc: 'Applications built to protect your data and stay online when you need them.' },
  { title: 'Clean design', desc: 'Interfaces your team can pick up quickly, with no unnecessary complexity.' },
  { title: 'Agile process', desc: 'Regular check-ins and iterations, so you see progress at every stage.' },
  { title: 'Affordable pricing', desc: 'Transparent quotes that match the scope of what you actually need.' },
  { title: 'On-time delivery', desc: 'Timelines we set with you, and commit to hitting.' },
  { title: 'Dedicated support', desc: 'A team that stays reachable after launch, not just during it.' },
  { title: 'Long-term partner', desc: 'We build relationships meant to outlast a single project.' },
]

export default function WhyNoventra() {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <Eyebrow>Why Noventra</Eyebrow>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4">
            A long-term technology partner, not a one-off vendor.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <h3 className="font-display font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brass inline-block" />
                {r.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{r.desc}</p>
            </Reveal>
          ))}
        </div>

        <SectionMark />
      </div>
    </section>
  )
}
