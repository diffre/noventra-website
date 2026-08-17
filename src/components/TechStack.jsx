import { Eyebrow, Reveal } from './ui'

const STACK = [
  { group: 'Frontend', items: ['React', 'JavaScript', 'HTML5 & CSS3', 'Bootstrap'] },
  { group: 'Backend', items: ['Python', 'Django', 'Flask'] },
  { group: 'Data', items: ['MySQL', 'PostgreSQL', 'REST APIs'] },
  { group: 'Tooling', items: ['Git', 'GitHub'] },
]

export default function TechStack() {
  return (
    <section className="py-24 bg-surface border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-12">
          <Eyebrow>Technology</Eyebrow>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4">
            Built on tools proven to scale.
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            Every system we ship is layered — a clean interface, dependable logic underneath, and data
            that stays consistent as usage grows.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STACK.map((s) => (
            <Reveal key={s.group}>
              <p className="mono-tag text-[11px] text-indigo font-semibold mb-3">{s.group}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="text-sm bg-paper border border-line rounded-full px-3 py-1.5">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
