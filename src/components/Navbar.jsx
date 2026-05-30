import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileMenuOpen(false);
        return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 96; // Adjusts for the fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Destinations', id: 'destinations' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'consultation' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-blue-950/95 backdrop-blur-md border-amber-600/20 shadow-2xl py-2'
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center transition-all duration-500">
          
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center group focus:outline-none shrink-0"
            aria-label="Accurate Consultancy Home"
          >
            <img
              src="/logo.png"
              alt="Accurate Consultancy"
              className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${scrolled ? 'h-16' : 'h-20'}`}
              style={{ filter: 'drop-shadow(0 0 12px rgba(201, 165, 90, 0.4))' }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative font-semibold text-sm tracking-widest uppercase text-gray-200 hover:text-amber-500 transition-colors duration-300 py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-yellow-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('consultation')}
              className="btn-primary group"
            >
              <Globe size={16} />
              <span>Book Consultation</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 border ${
              mobileMenuOpen
                ? 'bg-amber-600/20 text-amber-500 border-amber-600/30'
                : 'text-gray-200 border-transparent hover:border-amber-600/30'
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-blue-950/98 backdrop-blur-xl border-t border-amber-600/20 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-3 px-4 rounded-lg font-medium uppercase tracking-wide text-gray-200 hover:text-amber-500 hover:bg-amber-600/10 transition-all duration-300"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('consultation')}
            className="btn-primary w-full mt-4 flex justify-center group"
          >
            <Globe size={16} />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
