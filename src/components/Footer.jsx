import React, { useState } from 'react';
import { Menu, X, Phone, Globe, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Branding */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleScroll('hero')}>
            <img 
              src="/logo.webp" 
              alt="Accurate Consultancy" 
              className="h-14 w-auto brightness-110"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.href.replace('#', ''))}
                className="text-gray-300 hover:text-[#c9a55a] font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="mailto:info@accurate-consultancy.com"
              className="text-sm font-semibold text-[#c9a55a] flex items-center space-x-1 hover:underline"
            >
              <span>info@accurate-consultancy.com</span>
            </a>
            <button
              onClick={() => handleScroll('consultation')}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#c9a55a] to-[#f0c040] text-[#0a1628] transition-transform duration-200 hover:scale-105"
            >
              <span>Book Consultation</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1628] border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.href.replace('#', ''))}
              className="block w-full text-left text-gray-300 hover:text-[#c9a55a] py-2 font-medium"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 border-t border-white/5 space-y-4">
            <div className="text-sm text-gray-400 flex items-center space-x-2">
              <Globe size={16} className="text-[#c9a55a]" />
              <span>info@accurate-consultancy.com</span>
            </div>
            <button
              onClick={() => handleScroll('consultation')}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-full font-bold bg-gradient-to-r from-[#c9a55a] to-[#f0c040] text-[#0a1628]"
            >
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
