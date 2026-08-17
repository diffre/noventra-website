import { useState, useEffect } from 'react'
import { SystemsStackMark } from './SystemsStack'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#product', label: 'Product' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <SystemsStackMark className="w-7 h-6" />
          <span className="font-display font-semibold text-lg tracking-tight">Noventra Technologies</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#quote"
            className="bg-ink text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-ink-soft transition-colors"
          >
            Request a Quote
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-paper border-b border-line px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setMenuOpen(false)}
            className="bg-ink text-white text-sm font-medium px-4 py-2 rounded-full text-center"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  )
}
