import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Star, Users, Shield, Globe } from 'lucide-react';

// Optimized Counter Hook
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(easeOutQuart * (end - start) + start);
      setCount(value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);
  return count;
};

// Reduced to 6 key destinations – cleaner, less crowded
const countriesData = [
  { flag: '🇺🇸', name: 'United States', angle: 0 },
  { flag: '🇬🇧', name: 'United Kingdom', angle: 60 },
  { flag: '🇨🇦', name: 'Canada', angle: 120 },
  { flag: '🇦🇺', name: 'Australia', angle: 180 },
  { flag: '🇪🇺', name: 'Europe', angle: 240 },
  { flag: '🇦🇪', name: 'UAE', angle: 300 },
];

// Enhanced world map (more detailed continents)
const ContinentsMap = () => (
  <svg viewBox="0 0 960 600" className="w-full h-full opacity-70">
    <defs>
      <style>{`
        .continent { 
          fill: rgba(201,165,90,0.15); 
          stroke: rgba(201,165,90,0.4); 
          stroke-width: 1.5;
        }
        .continent-glow {
          fill: rgba(201,165,90,0.05);
          stroke: rgba(201,165,90,0.2);
          stroke-width: 0.5;
        }
        .water { fill: transparent; }
      `}</style>
    </defs>
    <rect className="water" width="960" height="600" />
    <g className="continent">
      {/* North America */}
      <path d="M 120,80 L 200,55 L 280,75 L 300,115 L 285,175 L 245,195 L 205,175 L 185,215 L 165,195 L 125,175 L 105,135 Z" />
      {/* South America */}
      <path d="M 220,220 L 260,205 L 305,225 L 325,275 L 305,325 L 265,355 L 245,335 L 225,295 L 205,255 Z" />
      {/* Europe */}
      <path d="M 375,95 L 445,75 L 475,115 L 485,175 L 445,195 L 415,175 L 385,155 L 365,135 Z" />
      {/* Africa */}
      <path d="M 375,215 L 415,195 L 455,205 L 475,255 L 455,315 L 415,345 L 385,315 L 365,275 Z" />
      {/* Asia */}
      <path d="M 495,75 L 575,55 L 645,75 L 675,115 L 645,175 L 595,195 L 545,175 L 515,155 L 495,135 Z" />
      {/* Australia */}
      <path d="M 695,335 L 755,315 L 795,335 L 815,375 L 775,395 L 715,375 L 695,355 Z" />
    </g>
  </svg>
);

const Hero = () => {
  const yearsCount = useCounter(19, 2000);
  const successCount = useCounter(90, 2000);
  const casesCount = useCounter(2000, 2500);
  const countriesCount = useCounter(50, 2000);

  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <section className="relative min-h-screen bg-[#020916] text-white overflow-hidden flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-10 right-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-20 pointer-events-none bg-gradient-to-r from-[#c9a55a] to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-10 pointer-events-none bg-gradient-to-r from-[#3b4fca] to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(201,165,90,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="text-center lg:text-left w-full">
          {/* Badge – shorter and responsive */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#c9a55a]/30 bg-[#c9a55a]/10 backdrop-blur-md mb-4 sm:mb-6 animate-fadeInUp">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a55a] animate-pulse" />
            <span className="text-[8px] sm:text-[11px] font-bold text-[#c9a55a] uppercase tracking-widest whitespace-nowrap">
              Visa & Immigration Experts
            </span>
          </div>

          {/* Headline – mobile‑friendly wrapping */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] mb-4 sm:mb-6 text-white tracking-tight">
            <span className="block">Navigate Your Journey to</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#c9a55a] via-[#f0c040] to-[#c9a55a] bg-[length:200%_auto] animate-textShimmer break-words">
              Global Success
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
            Premium visa and immigration consultancy delivering seamless pathways to your dream destination. We offer unparalleled support for corporate, family, and independent migration.
          </p>

          {/* CTAs – responsive stacking */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a href="#consultation" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg bg-gradient-to-r from-[#c9a55a] to-[#f0c040] text-[#0a1628] shadow-lg shadow-[#c9a55a]/20 hover:scale-105 hover:shadow-xl transition-all duration-300 no-underline">
              <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              Get Started Today
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 no-underline">
              Explore Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 pt-4 sm:pt-6 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#c9a55a]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-white">4.9/5</span>
              <span className="text-[10px] sm:text-xs text-gray-400">(200+ Reviews)</span>
            </div>
            <div className="w-px h-5 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-[#c9a55a]" />
              <span className="text-xs sm:text-sm font-medium text-white">2,000+</span>
              <span className="text-[10px] sm:text-xs text-gray-400">Happy Clients</span>
            </div>
            <div className="w-px h-5 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Shield size={14} className="text-[#c9a55a]" />
              <span className="text-[10px] sm:text-xs text-gray-400">Trusted Since 2006</span>
            </div>
          </div>

          {/* Stats Grid – responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10">
            {[
              { icon: '📅', value: yearsCount, label: 'Years Experience', suffix: '+' },
              { icon: '✅', value: successCount, label: 'Success Rate', suffix: '%' },
              { icon: '👥', value: casesCount, label: 'Approved Cases', suffix: '+' },
              { icon: '🌍', value: countriesCount, label: 'Global Corridors', suffix: '+' }
            ].map((stat, i) => (
              <div key={i} className="p-3 sm:p-4 rounded-2xl text-center border border-[#c9a55a]/20 bg-[#c9a55a]/5 backdrop-blur-sm hover:border-[#c9a55a]/40 transition-all duration-300 group">
                <div className="text-xl sm:text-2xl mb-0.5 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-[#c9a55a] text-lg sm:text-2xl font-black">{stat.value}{stat.suffix}</div>
                <div className="text-gray-400 text-[9px] sm:text-[11px] mt-0.5 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column – Fixed Orbital Globe (desktop only) */}
        <div className="hidden lg:flex w-full items-center justify-center py-8 lg:py-0">
          <div className="relative w-[420px] h-[420px] flex items-center justify-center">
            
            {/* Orbit Tracks */}
            <div className="absolute w-full h-full rounded-full border border-dashed border-[#c9a55a]/20 pointer-events-none animate-spin-slow" style={{ animationDuration: '60s' }} />
            <div className="absolute w-[75%] h-[75%] rounded-full border border-double border-white/5 pointer-events-none" />

            {/* Core Globe */}
            <div className="relative w-60 h-60 rounded-full overflow-hidden bg-gradient-to-br from-[#1a1060] to-[#0a1628] shadow-[0_0_60px_rgba(201,165,90,0.3)] border-2 border-[#c9a55a]/30">
              <div className="w-full h-full animate-pan-map">
                <ContinentsMap />
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-white/5" />
              <div className="absolute -inset-1 rounded-full border border-[#c9a55a]/20 animate-pulse" style={{ animationDuration: '4s' }} />
            </div>

            {/* Orbiting Flags – fixed nested animation */}
            {countriesData.map((country, index) => {
              const angle = (index / countriesData.length) * 360;
              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    animation: `orbit ${35}s linear infinite`,
                    animationDelay: `${(index / countriesData.length) * -35}s`,
                  }}
                >
                  <div
                    className="relative flex items-center justify-center w-14 h-14 rounded-full border border-[#c9a55a]/40 bg-[#0a1628]/90 text-2xl shadow-xl hover:scale-125 hover:border-[#f0c040] hover:shadow-[#c9a55a]/40 transition-all duration-300 cursor-pointer backdrop-blur-md select-none"
                    style={{
                      animation: `counterOrbit ${35}s linear infinite`,
                      animationDelay: `${(index / countriesData.length) * -35}s`,
                    }}
                    onMouseEnter={() => setHoveredCountry(index)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    <span>{country.flag}</span>
                    
                    {hoveredCountry === index && (
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-[#c9a55a] to-[#f0c040] text-[#0a1628] font-bold text-xs py-1 px-2.5 rounded-md shadow-lg pointer-events-none tracking-wide z-50">
                        {country.name}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-dashed border-[#c9a55a]/20 flex items-center justify-center mx-auto animate-spin-slow" style={{ animationDuration: '15s' }}>
                  <Globe size={24} className="text-[#c9a55a]/30" />
                </div>
                <div className="text-[10px] font-medium text-white/20 tracking-[0.3em] uppercase mt-2">Global Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pan-map {
          from { transform: translateX(0); }
          to { transform: translateX(-100px); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(180px); }
          to { transform: rotate(360deg) translateX(180px); }
        }
        @keyframes counterOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-textShimmer {
          animation: textShimmer 4s ease-in-out infinite;
          background-size: 200% auto;
        }
        .animate-pan-map {
          animation: pan-map 25s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
