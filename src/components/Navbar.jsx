import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0A192F] text-white w-full sticky top-0 z-50 border-b border-[#D4AF37]/20 shadow-lg backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Brand Identity / Monogram */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] rounded flex items-center justify-center shadow-md shadow-black/30">
            <span className="font-serif font-bold text-xl text-[#0A192F] tracking-wider">AC</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold tracking-wide text-white group-hover:text-[#D4AF37] transition duration-300">
              Accurate Consultancy
            </span>
            <span className="text-[10px] tracking-widest uppercase text-gray-400">
              Travel - Visa &amp; Immigration - Business consultancy
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-medium text-gray-300">
          <li><a href="#hero" className="hover:text-[#D4AF37] transition duration-300 py-2">Home</a></li>
          <li><a href="#services" className="hover:text-[#D4AF37] transition duration-300 py-2">Services</a></li>
          <li><a href="#destinations" className="hover:text-[#D4AF37] transition duration-300 py-2">Destinations</a></li>
          <li><a href="#about" className="hover:text-[#D4AF37] transition duration-300 py-2">About</a></li>
          <li><a href="#faq" className="hover:text-[#D4AF37] transition duration-300 py-2">FAQ</a></li>
        </ul>

        {/* Action Button */}
        <div className="hidden md:block">
          <a 
            href="#consultation" 
            className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] px-5 py-2.5 rounded text-xs uppercase tracking-widest transition-all duration-300 font-semibold shadow-sm"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-300 hover:text-[#D4AF37] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden bg-[#0F2447] border-t border-[#D4AF37]/10 px-6 py-4 space-y-4 shadow-xl">
          <ul className="space-y-3 text-xs uppercase tracking-widest text-gray-300">
            <li><a href="#hero" onClick={() => setIsOpen(false)} className="block hover:text-[#D4AF37] py-1">Home</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-[#D4AF37] py-1">Services</a></li>
            <li><a href="#destinations" onClick={() => setIsOpen(false)} className="block hover:text-[#D4AF37] py-1">Destinations</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-[#D4AF37] py-1">About</a></li>
            <li><a href="#faq" onClick={() => setIsOpen(false)} className="block hover:text-[#D4AF37] py-1">FAQ</a></li>
          </ul>
          <a 
            href="#consultation" 
            onClick={() => setIsOpen(false)}
            className="block w-full text-center border border-[#D4AF37] text-[#D4AF37] bg-transparent py-2.5 rounded text-xs uppercase tracking-widest font-semibold"
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
