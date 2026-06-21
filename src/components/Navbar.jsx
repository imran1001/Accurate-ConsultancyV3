import { useState, useEffect } from 'react';
import { Phone, Mail, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'services', 'destinations', 'about', 'consultation'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Destinations', id: 'destinations' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'consultation' },
  ];

  return (
    <header
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}
      className="transition-all duration-500"
    >
      {/* ===== SLIM UTILITY STRIP ===== */}
      <div
        className={`hidden sm:block border-b border-white/[0.06] transition-all duration-500 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
        }`}
        style={{ background: '#01040a' }}
      >
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-end gap-6 py-2 text-[11px] font-medium text-gray-400">
          <a href="tel:+923160285386" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
            <Phone size={12} />
            +92 316 0285386
          </a>
          <span className="w-px h-3 bg-white/10" />
          <a href="mailto:info@accurate-consultancy.com" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
            <Mail size={12} />
            info@accurate-consultancy.com
          </a>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-[#020916]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-2.5 sm:py-3'
            : 'bg-[#020916]/55 backdrop-blur-md border-b border-white/[0.04] py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1720px] mx-auto w-full px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">

            {/* ===== BRAND LOGO (Corner Anchored) ===== */}
            <div
              className="flex-shrink-0 flex items-center cursor-pointer group relative py-1"
              onClick={() => scrollTo('hero')}
            >
              <div className="relative flex items-center">
                <div
                  className="absolute inset-0 blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(214,175,55,0.45), transparent 70%)', transform: 'scale(1.8)' }}
                />
                <img
                  src="/logo.webp"
                  alt="Accurate Consultancy Logo"
                  width="240"
                  height="80"
                  className="relative h-11 sm:h-13 md:h-15 lg:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03] origin-left"
                  style={{ filter: 'drop-shadow(0 4px 12px rgba(214,175,55,0.18))' }}
                />
              </div>
            </div>

            {/* ===== DESKTOP LINKS ===== */}
            <div className="hidden md:flex items-center gap-2 lg:gap-5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? 'text-[#D4AF37] bg-[#D4AF37]/[0.08]'
                        : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-[1px] left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-full transition-all duration-300 ${
                        isActive ? 'w-2/3' : 'w-0'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* ===== DESKTOP "GHOST" CTA ===== */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollTo('consultation')}
                className="group relative px-6 py-3 border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white bg-transparent hover:bg-[#D4AF37]/10 font-black text-[10px] uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(214,175,55,0.05)] hover:shadow-[0_0_25px_rgba(214,175,55,0.2)] hover:-translate-y-0.5"
              >
                <span>Book Consultation</span>
                <ChevronRight size={13} className="transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </div>

            {/* ===== MOBILE TRIGGER ===== */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300 focus:outline-none"
                aria-expanded={isOpen}
                aria-label="Toggle main menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between items-end">
                  <span className={`h-[2px] bg-current rounded-full transition-all duration-300 transform origin-right ${isOpen ? 'w-6 -rotate-45 translate-y-[1px]' : 'w-6'}`} />
                  <span className={`h-[2px] bg-current rounded-full transition-all duration-200 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
                  <span className={`h-[2px] bg-current rounded-full transition-all duration-300 transform origin-right ${isOpen ? 'w-6 rotate-45 translate-y-[1px]' : 'w-5'}`} />
                </div>
                {!isOpen && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(214,175,55,0.6)] animate-pulse" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ===== MOBILE DRAWER ===== */}
        <div
          style={{ zIndex: 9999 }}
          className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out border-b border-[#D4AF37]/20 shadow-[0_15px_30px_rgba(0,0,0,0.8)] ${
            isOpen ? 'max-h-[580px] opacity-100 bg-[#020916] visible' : 'max-h-0 opacity-0 pointer-events-none invisible'
          }`}
        >
          <div className="px-5 pt-6 pb-10 space-y-3 bg-[#020916]">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`block w-full text-left px-4 py-4 rounded-md uppercase tracking-widest transition-all duration-200 ${
                    isActive ? 'text-[#D4AF37] bg-[#D4AF37]/15 border-l-2 border-[#D4AF37]' : 'text-gray-100 hover:text-white active:bg-white/10'
                  }`}
                  style={{ animation: isOpen ? `mobileNavFadeSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s both` : 'none' }}
                >
                  <div className="flex items-center justify-between text-sm font-bold">
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(214,175,55,0.8)]" />}
                  </div>
                </button>
              );
            })}

            <div className="pt-6 mt-5 border-t border-white/[0.08] space-y-5 bg-[#020916]">
              {/* Mobile keeps the solid gold button since there's no visual competition inside the menu */}
              <button
                onClick={() => scrollTo('consultation')}
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-gray-950 font-black text-xs uppercase tracking-widest rounded-sm text-center shadow-lg active:scale-[0.98] transition-transform"
              >
                Book Consultation
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs font-medium tracking-wider text-gray-300 text-center sm:text-left">
                <a href="tel:+923160285386" className="active:text-[#D4AF37] py-1 flex items-center gap-1.5 justify-center sm:justify-start">
                  <Phone size={13} /> +92 316 0285386
                </a>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
                <a href="mailto:info@accurate-consultancy.com" className="active:text-[#D4AF37] py-1 flex items-center gap-1.5 justify-center sm:justify-start">
                  <Mail size={13} /> info@accurate-consultancy.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes mobileNavFadeSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
