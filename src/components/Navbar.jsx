import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Brand Identity */}
          <div className="flex items-center">
            <span className="text-xl font-black tracking-tight text-slate-900">
              ACCURATE <span className="text-amber-600 font-medium">CONSULTANCY</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-sm font-semibold text-gray-600 hover:text-amber-600 transition-colors">Home</a>
            <a href="#about" className="text-sm font-semibold text-gray-600 hover:text-amber-600 transition-colors">About</a>
            <a href="#services" className="text-sm font-semibold text-gray-600 hover:text-amber-600 transition-colors">B2B Services</a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-amber-600 transition-all shadow-sm">
              Corporate Inquiry
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              type="button" 
              className="text-gray-500 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-inner">
          <a href="#hero" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-slate-50">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-slate-50">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-slate-50">B2B Services</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-center px-4 py-3 rounded-xl text-base font-bold text-white bg-slate-900 mt-4">Corporate Inquiry</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
