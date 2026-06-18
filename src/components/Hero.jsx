import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        isScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#020916]/95 backdrop-blur-md border-b border-[#c9a55a]/10 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* BRAND LOGO AREA */}
          <a href="#" className="flex items-center space-x-3 group no-underline">
            {/* Logo Icon - Adjusted to a balanced h-12 / w-12 */}
            <div className="h-12 w-12 rounded-sm bg-gradient-to-br from-[#c9a55a] to-[#f0c040] flex items-center justify-center shadow-md shadow-[#c9a55a]/10 transition-transform duration-300 group-hover:scale-105">
              <Shield size={24} className="text-[#020916]" strokeWidth={2.5} />
            </div>
            
            {/* Logo Typography */}
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-widest text-white uppercase leading-none font-sans">
                Accurate
              </span>
              <span className="text-[10px] font-bold tracking-[0.28em] text-[#c9a55a] uppercase mt-1 leading-none">
                Consultancy
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', href: '#' },
              { name: 'Services', href: '#services' },
              { name: 'About Us', href: '#about' },
              { name: 'Contact', href: '#consultation' }
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-semibold text-gray-300 hover:text-[#c9a55a] tracking-wide transition-colors duration-200 no-underline"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ACTION BUTTON */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#consultation" 
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm font-bold text-xs tracking-wider uppercase border border-[#c9a55a] text-[#c9a55a] bg-[#c9a55a]/5 hover:bg-[#c9a55a] hover:text-[#020916] transition-all duration-300 no-underline"
            >
              <PhoneCall size={14} />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-sm text-gray-400 hover:text-white hover:bg-[#c9a55a]/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROP DOWN DRAWER */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-[#020916] border-b border-[#c9a55a]/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          {[
            { name: 'Home', href: '#' },
            { name: 'Services', href: '#services' },
            { name: 'About Us', href: '#about' },
            { name: 'Contact', href: '#consultation' }
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-sm text-base font-medium text-gray-300 hover:text-white hover:bg-[#c9a55a]/10 transition-all no-underline"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-800 px-4">
            <a
              href="#consultation"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-sm font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-[#c9a55a] to-[#f0c040] text-[#020916] no-underline"
            >
              <span>Schedule Call</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
