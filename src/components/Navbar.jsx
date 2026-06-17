import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#031124]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-[#D4AF37]/20'
          : 'bg-[#031124]/80 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo – using logo.webp from public folder */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => scrollTo('hero')}
          >
            <img
              src="/logo.webp"
              alt="Accurate Consultancy"
              className="h-12 w-auto sm:h-14 md:h-16 transition-transform hover:scale-105 duration-300"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(212,175,55,0.3))',
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo('consultation')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-gray-900 font-bold text-xs rounded-full shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all duration-300 uppercase tracking-wider"
            >
              Book Consultation →
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
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
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with smooth slide-down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 bg-[#031124] border-t border-[#D4AF37]/10 space-y-2 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/5">
            <button
              onClick={() => scrollTo('consultation')}
              className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-gray-900 font-bold text-sm rounded-full shadow-md hover:shadow-[#D4AF37]/30 transition-all duration-300 uppercase tracking-wider"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
