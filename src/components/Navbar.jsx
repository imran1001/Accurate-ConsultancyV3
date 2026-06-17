import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#031124]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo Container */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center gap-2 cursor-pointer">
              {/* Premium Gold/Navy AC Icon */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] flex items-center justify-center font-bold text-gray-900 text-lg shadow-md">
                AC
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-wide text-sm sm:text-base leading-none uppercase">
                  Accurate
                </span>
                <span className="text-[#D4AF37] text-[10px] sm:text-xs tracking-widest uppercase mt-0.5">
                  Consultancy
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-[#D4AF37] text-sm font-medium transition-colors">Services</a>
            <a href="#destinations" className="text-gray-300 hover:text-[#D4AF37] text-sm font-medium transition-colors">Destinations</a>
            <a href="#about" className="text-gray-300 hover:text-[#D4AF37] text-sm font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-[#D4AF37] text-sm font-medium transition-colors">Contact</a>
          </div>

          {/* Desktop Call to Action Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-gray-900 font-bold text-xs rounded-full shadow-md hover:brightness-110 transition-all uppercase tracking-wider">
              Book Consultation ›
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close Icon (X)
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Menu Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu Layer */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 bg-[#031124] border-b border-white/5 space-y-3 shadow-xl">
          <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Services</a>
          <a href="#destinations" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Destinations</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Contact</a>
          <div className="pt-4 border-t border-white/5">
            <button className="w-full py-3 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-gray-900 font-bold text-sm rounded-full shadow-md text-center uppercase tracking-wider">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
