import { Eyebrow, Reveal } from './ui'

const FEATURES = [
  'Tenant Management', 'Property Management', 'Rent Collection', 'Payment Tracking',
  'Reports & Analytics', 'Payment Reminders', 'Monthly Income Dashboard', 'Outstanding Balance Monitoring',
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function PreviewPanel() {
  return (
    <div className="bg-ink rounded-2xl shadow-panel p-6 text-white">
      <div className="flex items-center justify-between mb-5">
        <span className="mono-tag text-[11px] text-white/50">Rent Management System</span>
        <span className="mono-tag text-[10px] bg-white/10 text-white/70 px-2 py-1 rounded-full">Illustrative preview</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/5 rounded-xl p-4">
          <p className="mono-tag text-[10px] text-white/40 mb-1">Monthly Income</p>
          <p className="font-display font-semibold text-2xl">KES 435,000.00</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <p className="mono-tag text-[10px] text-white/40 mb-1">Collection Rate</p>
          <p className="font-display font-semibold text-2xl">10%</p>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-4">
        <p className="mono-tag text-[10px] text-white/40 mb-3">Tenant Ledger (sample)</p>
        <div className="space-y-2.5">
          {[
            { name: 'Tenant A · Unit 4B', status: 'Paid', tone: 'text-brass' },
            { name: 'Tenant B · Unit 2A', status: 'Paid', tone: 'text-brass' },
            { name: 'Tenant C · Unit 7C', status: 'Due soon', tone: 'text-indigo-light' },
            { name: 'Tenant D · Unit 1A', status: 'Overdue', tone: 'text-white/50' },
          ].map((row) => (
            <div key={row.name} className="flex items-center justify-between text-sm">
              <span className="text-white/70">{row.name}</span>
              <span className={`text-xs font-medium ${row.tone}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[11px] text-white/35 mt-4">Sample data shown for illustration.</p>
    </div>
  )
}

export default function FlagshipProduct() {
  return (
    <section id="product" className="py-24 md:py-32 bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <Eyebrow tone="brass">Flagship Product</Eyebrow>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4 mb-5">Rent Management System</h2>
          <p className="text-white/70 leading-relaxed mb-8">
            A complete platform for landlords and property managers to run their rental business from
            one place — tenants, properties, payments and reports, without the paperwork.
          </p>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-9">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                <span className="text-brass"><CheckIcon /></span>
                {f}
              </li>
            ))}
          </ul>

          <a href="#demo" className="bg-brass hover:bg-brass-dark transition-colors text-ink font-semibold px-6 py-3 rounded-full text-sm inline-block">
            Book a Demo
          </a>
        </Reveal>

        <Reveal delay={150}>
          <PreviewPanel />
        </Reveal>
      </div>
    </section>
  )
}
