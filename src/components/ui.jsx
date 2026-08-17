import { SystemsStackMark } from './SystemsStack'
import useReveal from '../useReveal'

export function SectionMark() {
  return (
    <div className="flex justify-center my-2">
      <SystemsStackMark className="w-10 h-8 opacity-70" />
    </div>
  )
}

export function Eyebrow({ children, tone = 'indigo' }) {
  const tones = {
    indigo: 'text-indigo bg-indigo-light',
    brass: 'text-brass-dark bg-brass-light',
    white: 'text-white/70 bg-white/10',
  }
  return (
    <span className={`mono-tag inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full ${tones[tone]}`}>
      {children}
    </span>
  )
}

export function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
