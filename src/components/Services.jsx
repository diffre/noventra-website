import { Eyebrow, Reveal, SectionMark } from './ui'

const SERVICES = [
  { title: 'Custom Software Development', desc: 'Purpose-built applications shaped around how your business actually operates, not the other way round.' },
  { title: 'Web Application Development', desc: 'Fast, responsive web platforms your team and customers can rely on from any browser.' },
  { title: 'Desktop Application Development', desc: 'Dependable desktop software for teams that need offline speed and tight system access.' },
  { title: 'Mobile App Development', desc: "Native-feeling Android and iOS apps that put your business in your customers' pockets." },
  { title: 'Business Process Automation', desc: 'We replace manual, repetitive work with workflows that run themselves — and rarely break.' },
  { title: 'Database Design & Management', desc: 'Structured, well-indexed data foundations that stay fast and accurate as you grow.' },
  { title: 'System Integration & API Development', desc: 'We connect the tools you already use so information moves between them without manual re-entry.' },
  { title: 'Cloud-Based Solutions', desc: 'Applications hosted to scale with demand, accessible securely from anywhere in the world.' },
  { title: 'Software Maintenance & Support', desc: 'Ongoing monitoring, fixes and upgrades so your systems keep running long after launch day.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <Eyebrow>Services</Eyebrow>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4">
            One partner, every layer of the system.
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            From the interface your team touches every day to the database holding it all together,
            we build and maintain the full stack.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <div className="bg-surface border border-line rounded-2xl p-6 h-full shadow-card hover:-translate-y-1 transition-transform duration-300">
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionMark />
      </div>
    </section>
  )
}
