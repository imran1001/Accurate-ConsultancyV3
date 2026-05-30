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
    const element = document.getElementById(id);
    if (element) {
      const offset = 96;
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'shadow-2xl'
        : ''
    }`}
    style={{
      background: scrolled
        ? 'rgba(2, 8, 24, 0.98)'
        : 'rgba(2, 8, 24, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(201, 165, 90, 0.15)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Logo - Large & Prominent */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center group focus:outline-none"
            aria-label="Accurate Consultancy Home"
          >
            <img
              src="/logo.png"
              alt="Accurate Consultancy"
              className="w-auto object-contain transition-all duration-300 group-hover:scale-105"
              style={{
                height: 'clamp(56px, 6vw, 80px)',
                filter: 'drop-shadow(0 0 12px rgba(201, 165, 90, 0.6)) brightness(1.05)',
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative font-semibold text-sm tracking-widest uppercase transition-colors duration-300 py-2"
                style={{ color: 'rgba(255,255,255,0.8)' }}
                onMouseEnter={e => e.target.style.color = '#c9a55a'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.8)'}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #c9a55a, #f0c040)' }}
                />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('consultation')}
              className="group relative font-bold text-sm px-6 py-3 rounded-full uppercase tracking-wider transition-all duration-300 hover:scale-105 flex items-center space-x-2 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                color: '#0a1628',
                boxShadow: '0 0 20px rgba(201, 165, 90, 0.4)'
              }}
            >
              <Globe size={16} />
              <span>Book Consultation</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl transition-all duration-300"
            style={{
              color: 'white',
              background: mobileMenuOpen ? 'rgba(201,165,90,0.2)' : 'transparent',
              border: '1px solid rgba(201,165,90,0.3)'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
      style={{ background: 'rgba(2,8,24,0.98)', borderTop: '1px solid rgba(201,165,90,0.15)' }}>
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-3 px-4 rounded-lg font-medium uppercase tracking-wide transition-all duration-300"
              style={{ color: 'rgba(255,255,255,0.8)' }}
              onMouseEnter={e => { e.target.style.color = '#c9a55a'; e.target.style.background = 'rgba(201,165,90,0.1)'; }}
              onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.8)'; e.target.style.background = 'transparent'; }}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('consultation')}
            className="block w-full py-3 px-6 rounded-full font-bold text-center uppercase tracking-wide mt-4"
            style={{
              background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
              color: '#0a1628'
            }}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
