import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll detection for background and tracking state transformations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active structural viewport target
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth operational scroll architecture
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#020916]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-3 sm:py-4'
          : 'bg-[#020916]/40 backdrop-blur-md border-b border-white/[0.03] py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* ===== BRAND LOGO CONTEXT ===== */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group relative"
            onClick={() => scrollTo('hero')}
          >
            <div className="relative flex items-center">
              {/* Dynamic Aura Halo Adjusted for Larger Footprint */}
              <div 
                className="absolute inset-0 blur-2xl opacity-50 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(214,175,55,0.45), transparent 70%)',
                  transform: 'scale(1.8)',
                }}
              />
              {/* Expanded Premium Sizing Architecture */}
              <img
                src="/logo.webp"
                alt="Accurate Consultancy"
                className="relative h-14 sm:h-17 md:h-20 object-contain transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                  filter: 'drop-shadow(0 4px 12px rgba(214,175,55,0.18))',
                }}
              />
            </div>
          </div>

          {/* ===== DESKTOP HORIZONTAL LINKS ===== */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    isActive 
                      ? 'text-[#D4AF37] drop-shadow-[0_0_8px_rgba(214,175,55,0.3)]' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Premium Micro Underline Mechanics */}
                  <span
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-full transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* ===== DESKTOP PRESTIGE ACTION BUTTON ===== */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo('consultation')}
              className="group relative px-6 py-3 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-gray-950 font-black text-[10px] uppercase tracking-widest rounded-sm shadow-[0_4px_25px_rgba(214,175,55,0.15)] hover:shadow-[0_4px_35px_rgba(214,175,55,0.35)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer Light Reflection Sweep */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmerSweep block" />
              <span className="relative flex items-center gap-2">
                Book Consultation
                <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* ===== MOBILE TRIGGER SYSTEM ===== */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all duration-300 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle Main Menu</span>
              <div className="w-6 h-5 relative flex flex-col justify-between items-end">
                <span className={`h-[2px] bg-current rounded-full transition-all duration-300 transform origin-right ${isOpen ? 'w-6 -rotate-45 translate-y-[-1px]' : 'w-6'}`} />
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

      {/* ===== MOBILE GLASS-DRAWER SYSTEM ===== */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out border-b border-white/[0.06] shadow-2xl ${
          isOpen ? 'max-h-[480px] opacity-100 bg-[#020916]/98 backdrop-blur-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-5 pt-4 pb-8 space-y-2">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-4 py-3.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  isActive
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10 border-l-2 border-[#D4AF37]'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.02]'
                }`}
                style={{
                  animation: isOpen ? `mobileNavFadeSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.04}s both` : 'none',
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {isActive && <span className="w-1 h-1 rounded-full bg-[#D4AF37] shadow-[0_0_6px_rgba(214,175,55,0.8)]" />}
                </div>
              </button>
            );
          })}
          
          {/* Mobile Interactive Panel Segment */}
          <div className="pt-5 mt-4 border-t border-white/[0.05] space-y-4">
            <button
              onClick={() => scrollTo('consultation')}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-gray-950 font-black text-xs uppercase tracking-widest rounded-sm text-center shadow-lg"
            >
              Book Consultation
            </button>
            
            {/* Real-time Validation Meta info */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[10px] font-medium tracking-wider text-gray-500 text-center sm:text-left">
              <div>📞 +92 316 0285386</div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-800" />
              <div>✉️ imran@accurate-consultancy.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== EMBEDDED PRESTIGE KEYFRAMES ===== */}
      <style>{`
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes mobileNavFadeSlide {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-shimmerSweep {
          animation: shimmerSweep 2.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
      `}</style>
    </nav>
  );
}
