import { Eyebrow, Reveal, SectionMark } from './ui'

const PORTFOLIO = [
  { tag: 'Property & Real Estate', title: 'Rent Management System', desc: 'Flagship platform for landlords: tenants, rent collection, reminders and reports in one dashboard.', flagship: true },
  { tag: 'Education', title: 'School Management System', desc: 'Admissions, fee tracking, timetables and gradebooks for schools of any size.' },
  { tag: 'Healthcare', title: 'Hospital Management System', desc: 'Patient records, appointments, billing and pharmacy inventory in a single secure system.' },
  { tag: 'Retail', title: 'Inventories & POS System', desc: 'Real-time stock tracking with a point-of-sale interface built for busy checkout counters.' },
  { tag: 'HR & Finance', title: 'Payroll Solution', desc: 'Automated payslips, statutory deductions and disbursement tracking for growing teams.' },
  { tag: 'Operations', title: 'Business Automation Suite', desc: 'Custom workflow automation that removes repetitive manual tasks from daily operations.' },
  { tag: 'Language', title: 'What programming Language? ', desc: 'We use latest programming tools and languages. We mainly focus on python for its robustness and security' },

]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <Eyebrow>Portfolio</Eyebrow>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4">
            Systems built for real businesses.
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            A look at the kinds of platforms we design and build — including our flagship product.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80}>
              <div className={`rounded-2xl p-6 h-full border transition-transform duration-300 hover:-translate-y-1 ${
                p.flagship ? 'bg-ink text-white border-ink' : 'bg-surface border-line shadow-card'
              }`}>
                <span className={`mono-tag text-[10px] font-semibold px-2 py-1 rounded-full ${
                  p.flagship ? 'bg-white/10 text-brass' : 'bg-indigo-light text-indigo'
                }`}>
                  {p.tag}
                </span>
                <h3 className="font-display font-semibold text-lg mt-4 mb-2">{p.title}</h3>
                <p className={`text-sm leading-relaxed ${p.flagship ? 'text-white/70' : 'text-muted'}`}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionMark />
      </div>
    </section>
  )
}
