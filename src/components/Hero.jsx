import React from 'react';
import { Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#060d18]/80 backdrop-blur-lg border-b border-[#c9a55a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#c9a55a] to-[#f0c040]">
              <span className="text-[#0a1628] font-black text-xl tracking-tighter">AC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl leading-none tracking-wide">ACCURATE</span>
              <span className="text-[#c9a55a] text-[10px] font-semibold tracking-[0.2em] uppercase">Consultancy</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-[#c9a55a] transition-colors duration-300">SERVICES</a>
            <a href="#destinations" className="text-sm font-medium text-gray-300 hover:text-[#c9a55a] transition-colors duration-300">DESTINATIONS</a>
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-[#c9a55a] transition-colors duration-300">ABOUT</a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-[#c9a55a] transition-colors duration-300">CONTACT</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="group flex items-center gap-2 bg-gradient-to-r from-[#c9a55a] to-[#f0c040] text-[#0a1628] px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,165,90,0.4)]">
              <Globe size={16} className="group-hover:animate-spin-slow" />
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
