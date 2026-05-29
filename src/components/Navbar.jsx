import { useState } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { useScrollEffect } from '@hooks/useScrollEffect';

const NAV_LINKS = ['Services', 'Destinations', 'About', 'Contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollEffect(40);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-blue-950 shadow-xl border-b border-amber-600/20'
          : 'bg-blue-950/90 backdrop-blur-md border-b border-amber-600/10'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-20">
          {/* ── Logo ─────────────────────────────────── */}
          <a
            href="#"
            aria-label="Accurate Consultancy — Home"
            className="flex items-center group shrink-0"
          >
            {/* Replace your existing logo button with this */}
<button
  onClick={() => scrollToSection('hero')}
  className="flex items-center group focus:outline-none rounded-lg px-2 py-1 -ml-2 transition-all"
  aria-label="Accurate Consultancy Home"
>
  <img 
    src="/logo.png"
    alt="Accurate Consultancy"
    className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    style={{ 
      filter: 'drop-shadow(0 0 20px rgba(201, 165, 90, 0.8)) drop-shadow(0 0 40px rgba(201, 165, 90, 0.4))',
      maxWidth: '220px'
    }}
  />
</button>

          {/* ── Desktop Links ─────────────────────────── */}
          <ul
            role="list"
            className="hidden lg:flex items-center gap-8"
          >
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-amber-400 text-sm font-medium
                             tracking-wide transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400
                                   transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ───────────────────────────── */}
          <div className="hidden md:block">
            <a
              href="#consultation"
              className="btn-primary text-sm"
            >
              <Globe size={15} />
              Book Consultation
              <ChevronRight size={15} />
            </a>
          </div>

          {/* ── Mobile Toggle ─────────────────────────── */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-blue-900
                       transition-colors duration-200 focus-visible:ring-2
                       focus-visible:ring-amber-400"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ── Mobile Menu ───────────────────────────── */}
        <div
          id="mobile-menu"
          aria-hidden={!mobileOpen}
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <ul role="list" className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMobile}
                  className="block px-3 py-2.5 text-gray-300 hover:text-amber-400
                             hover:bg-blue-900/50 rounded-lg font-medium text-sm
                             tracking-wide transition-all duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 px-3">
            <a
              href="#consultation"
              onClick={closeMobile}
              className="btn-primary w-full"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
