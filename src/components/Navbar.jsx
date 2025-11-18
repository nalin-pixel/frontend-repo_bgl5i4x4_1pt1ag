import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Method', href: '#method' },
  { label: 'Why us', href: '#why' },
  { label: 'Tools', href: '#tools' },
  { label: 'FAQs', href: '#faqs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            {/* Brand */}
            <a href="#" className="inline-flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-amber-400 to-blue-500 shadow-lg ring-1 ring-white/20" />
              <span className="text-lg font-semibold tracking-tight text-[#EFF5FF]" style={{ fontFamily: 'Geologica, var(--font-sans)' }}>Irrelevant</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-[#EFF5FF]/80 hover:text-[#EFF5FF] transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-[#0C63E7] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_-10px_rgba(12,99,231,0.7)] hover:shadow-[0_12px_30px_-10px_rgba(12,99,231,0.9)] transition-shadow">
                Join the movement
              </a>
            </nav>

            {/* Mobile button */}
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#EFF5FF]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile drawer */}
          {open && (
            <div className="border-t border-white/10 px-6 py-4 md:hidden">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm text-[#EFF5FF]/80 hover:text-[#EFF5FF]" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#cta" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0C63E7] px-4 py-2 text-sm font-semibold text-white">
                  Join the movement
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
