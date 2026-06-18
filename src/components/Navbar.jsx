import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll detection for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['hero', 'services', 'destinations', 'about', 'consultation'];
      const scrollPosition = window.scrollY + 120;

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

  // Smooth scroll to section
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Navigation items with their section IDs
  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Destinations', id: 'destinations' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'consultation' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[#031124]/95 backdrop-blur-lg shadow-[0_4px_40px_rgba(0,0,0,0.5)] border-b border-[#D4AF37]/20'
          : 'bg-[#031124]/80 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Perfectly balanced header heights */}
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-22 lg:h-24">
          
          {/* ===== BRAND LOGO with Glow ===== */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => scrollTo('hero')}
          >
            <div className="relative flex items-center">
              {/* Animated glow halo behind logo */}
              <div 
                className="absolute inset-0 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle, rgba(212,175,55,0.5), transparent 70%)',
                  transform: 'scale(1.5)',
                  filter: 'blur(20px)',
                }}
              />
              
              {/* Sleek, optimized logo proportions */}
              <img
                src="/logo.webp"
                alt="Accurate Consultancy"
                className="relative h-11 sm:h-14 md:h-16 lg:h-18 object-contain transition-all duration-500 group-hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(212,175,55,0.25)) drop-shadow(0 0 40px rgba(212,175,55,0.12))',
                }}
              />
            </div>
          </div>

          {/* ===== DESKTOP NAVIGATION ===== */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative text-sm font-medium transition-colors duration-200 group ${
                    isActive ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-[#D4AF37]'
                  }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-full" />
                  )}
                  {/* Hover underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* ===== DESKTOP CTA ===== */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo('consultation')}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-gray-900 font-bold text-xs rounded-full shadow-lg hover:shadow-[#D4AF37]/40 hover:scale-105 transition-all duration-300 uppercase tracking-wider overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-2">
                Book Consultation
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* ===== MOBILE HAMBURGER ===== */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="relative inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
              {/* Notification dot when menu is closed */}
              {!isOpen && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 bg-[#031124] border-t border-[#D4AF37]/10 space-y-1 shadow-2xl">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                style={{
                  animation: isOpen ? `fadeInSlide 0.3s ease-out ${index * 0.05}s both` : 'none',
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  )}
                </div>
              </button>
            );
          })}
          
          <div className="pt-4 border-t border-white/5">
            <button
              onClick={() => scrollTo('consultation')}
              className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-gray-900 font-bold text-sm rounded-full shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 uppercase tracking-wider"
            >
              Book Consultation
            </button>
          </div>
          
          {/* Mobile footer info */}
          <div className="pt-4 flex justify-center gap-4 text-[10px] text-gray-500">
            <span>📞 +92 316 0285386</span>
            <span className="w-px h-3 bg-gray-700" />
            <span>✉️ imran@accurate-consultancy.com</span>
          </div>
        </div>
      </div>

      {/* ===== ANIMATION STYLES ===== */}
      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
