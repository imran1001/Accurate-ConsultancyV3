import React, { useState, useEffect } from 'react';







import { Menu, X, ChevronRight, Globe } from 'lucide-react';









const Navbar = () => {







  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);







  const [scrolled, setScrolled] = useState(false);









  useEffect(() => {







    const handleScroll = () => setScrolled(window.scrollY > 30);







    window.addEventListener('scroll', handleScroll);







    return () => window.removeEventListener('scroll', handleScroll);







  }, []);









  const scrollToSection = (id) => {







    const el = document.getElementById(id);







    if (el) {







      const top = el.getBoundingClientRect().top + window.pageYOffset - 96;







      window.scrollTo({ top, behavior: 'smooth' });







      setMobileMenuOpen(false);







    }







  };









  const navLinks = [







    { name: 'Services',     id: 'services'     },







    { name: 'Destinations', id: 'destinations' },







    { name: 'About',        id: 'about'        },







    { name: 'Contact',      id: 'consultation' }







  ];









  return (







    <nav







      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"







      style={{







        background: scrolled ? 'rgba(1,6,16,0.97)' : 'rgba(1,6,16,0.85)',







        backdropFilter: 'blur(24px)',







        borderBottom: scrolled ? '1px solid rgba(201,165,90,0.25)' : '1px solid rgba(201,165,90,0.1)',







        boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none'







      }}







    >







      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">







        <div className="flex justify-between items-center h-24">









          {/* Logo */}







          <button







            onClick={() => scrollToSection('hero')}







            className="flex items-center group focus:outline-none"







            aria-label="Go to homepage"







          >







            <img







              src="/logo.webp"







              alt="Accurate Consultancy"







              width="180"







              height="70"







              className="transition-all duration-300 group-hover:scale-105"







              style={{







                height: 'clamp(52px, 5.5vw, 76px)',







                width: 'auto',







                filter: 'drop-shadow(0 0 10px rgba(201,165,90,0.55)) brightness(1.05)'







              }}







            />







          </button>









          {/* Desktop Nav */}







          <div className="hidden lg:flex items-center space-x-10">







            {navLinks.map(item => (







              <button







                key={item.id}







                onClick={() => scrollToSection(item.id)}







                aria-label={'Go to ' + item.name + ' section'}







                className="group relative py-2 text-sm font-semibold uppercase tracking-widest transition-colors duration-300"







                style={{ color: 'rgba(255,255,255,0.75)' }}







                onMouseEnter={e => { e.currentTarget.style.color = '#c9a55a'; }}







                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}







              >







                {item.name}







                <span







                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"







                  style={{ background: 'linear-gradient(90deg, #c9a55a, #f0c040)' }}







                />







              </button>







            ))}







          </div>









          {/* CTA Button */}







          <div className="hidden md:flex items-center">







            <button







              onClick={() => scrollToSection('consultation')}







              aria-label="Book a consultation"







              className="group flex items-center space-x-2 px-7 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105"







              style={{







                background: 'linear-gradient(135deg, #c9a55a, #f0c040)',







                color: '#0a1628',







                boxShadow: '0 4px 20px rgba(201,165,90,0.35)'







              }}







              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,165,90,0.6)'; }}







              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,165,90,0.35)'; }}







            >







              <Globe size={16} />







              <span>Book Consultation</span>







              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />







            </button>







          </div>









          {/* Mobile Toggle */}







          <button







            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}







            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}







            aria-expanded={mobileMenuOpen}







            className="lg:hidden p-2.5 rounded-xl transition-all duration-300"







            style={{







              color: 'white',







              border: '1px solid rgba(201,165,90,0.25)',







              background: mobileMenuOpen ? 'rgba(201,165,90,0.15)' : 'transparent'







            }}







          >







            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}







          </button>







        </div>







      </div>









      {/* Mobile Menu */}







      <div







        className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}







        style={{ background: 'rgba(1,6,16,0.98)', borderTop: '1px solid rgba(201,165,90,0.15)' }}







      >







        <div className="px-4 py-5 space-y-1">







          {navLinks.map(item => (







            <button







              key={item.id}







              onClick={() => scrollToSection(item.id)}







              aria-label={'Go to ' + item.name}







              className="block w-full text-left py-3 px-4 rounded-xl font-semibold text-sm uppercase tracking-wide transition-all duration-300"







              style={{ color: 'rgba(255,255,255,0.75)' }}







              onMouseEnter={e => {







                e.currentTarget.style.color = '#c9a55a';







                e.currentTarget.style.background = 'rgba(201,165,90,0.08)';







              }}







              onMouseLeave={e => {







                e.currentTarget.style.color = 'rgba(255,255,255,0.75)';







                e.currentTarget.style.background = 'transparent';







              }}







            >







              {item.name}







            </button>







          ))}







          <div className="pt-2">







            <button







              onClick={() => scrollToSection('consultation')}







              aria-label="Book a consultation"







              className="w-full py-3.5 px-6 rounded-full font-bold text-sm uppercase tracking-wide"







              style={{ background: 'linear-gradient(135deg, #c9a55a, #f0c040)', color: '#0a1628' }}







            >







              Book Consultation







            </button>







          </div>







        </div>







      </div>







    </nav>







  );







};









export default Navbar;











