import { Eyebrow, Reveal } from './ui'

const UPCOMING = [
  '5 Signs Your Business Process Needs Automation',
  'Choosing Between a Web App and a Desktop App',
]

export default function Insights() {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-12">
          <Eyebrow>Insights</Eyebrow>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mt-4">
            Ideas on software, automation &amp; growth.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <article className="bg-surface border border-line rounded-2xl p-8 mb-8">
            <span className="mono-tag text-[10px] font-semibold text-brass-dark bg-brass-light px-2 py-1 rounded-full">Latest</span>
            <h3 className="font-display font-semibold text-2xl mt-4 mb-3">
              Why Landlords Are Ditching Spreadsheets for Rent Management Software
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              A spreadsheet works fine for two or three units. Past that, it starts costing you money
              in ways that don't show up until month-end: a payment logged in the wrong row, a tenant
              who was "due soon" three months ago and never followed up, a report that takes an evening
              to put together because the numbers live in four different tabs.
            </p>
            <p className="text-muted leading-relaxed">
              The shift isn't really about the spreadsheet — it's about what happens the moment rent
              collection becomes something the system tracks automatically instead of something you
              have to remember. Reminders go out before a payment is late, not after. A portfolio-wide
              collection rate is a number you glance at, not one you calculate. That's the actual case
              for software here: not that spreadsheets are bad, but that they stop scaling with you
              quietly, long before anyone thinks to replace them.
            </p>
          </article>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid sm:grid-cols-2 gap-5">
            {UPCOMING.map((title) => (
              <div key={title} className="border border-dashed border-line rounded-2xl p-6">
                <span className="mono-tag text-[10px] text-muted">Coming soon</span>
                <h4 className="font-display font-medium text-base mt-3">{title}</h4>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
