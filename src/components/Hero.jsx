import React, { useState, useEffect } from 'react';

// Optimized Counter Hook
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setCount(value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);
  return count;
};

// Strategic Core Markets perfectly spaced at 60-degree intervals
const countriesData = [
  { flag: '🇺🇸', name: 'United States', angle: 0 },
  { flag: '🇬🇧', name: 'United Kingdom', angle: 60 },
  { flag: '🇨🇦', name: 'Canada', angle: 120 },
  { flag: '🇦🇺', name: 'Australia', angle: 180 },
  { flag: '🇪🇺', name: 'Europe', angle: 240 },
  { flag: '🇳🇿', name: 'New Zealand', angle: 300 },
];

const ContinentsMap = () => (
  <svg viewBox="0 0 960 600" className="w-full h-full opacity-70 transition-opacity duration-500 group-hover:opacity-90">
    <defs>
      <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
        <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#AA7C11" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect fill="transparent" width="960" height="600" />
    <g fill="url(#mapGrad)" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="1 1">
      <path d="M 120,140 Q 180,110 220,150 T 190,240 Z" />
      <path d="M 280,220 Q 340,190 380,260 T 290,340 Z" />
      <path d="M 400,120 Q 480,95 520,180 T 420,260 Z" />
      <path d="M 580,220 Q 690,195 720,310 T 630,360 Z" />
      <path d="M 720,380 Q 840,365 850,440 T 760,490 Z" />
      <path d="M 180,440 Q 240,410 270,480 T 190,520 Z" />
    </g>
  </svg>
);

const Hero = () => {
  const yearsCount = useCounter(19, 2000); 
  const successCount = useCounter(90, 2000);
  const casesCount = useCounter(2000, 2000);
  const countriesCount = useCounter(50, 2000); 

  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <section className="relative min-h-screen pt-32 sm:pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-[#020916]">
      
      {/* ===== BACKGROUND AMBIENT GLOWS ===== */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 pointer-events-none bg-gradient-to-br from-[#D4AF37] to-transparent mix-blend-screen" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 pointer-events-none bg-gradient-to-tr from-[#1a2b4c] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ===== LEFT CONTENT COLUMN ===== */}
        <div className="text-left w-full lg:col-span-7 z-20">
          
          {/* Corporate Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#04152d]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(214,175,55,0.05)] animate-fadeInUp">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="text-[11px] font-bold text-gray-200 uppercase tracking-widest">
              Trusted Since 2006 • Visa & Immigration Excellence
            </span>
          </div>

          {/* Core Dynamic Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 text-white tracking-tight">
            Visa, Immigration <br className="hidden sm:inline" />
            <span className="relative mt-1 inline-block bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-[length:200%_auto] bg-clip-text text-transparent animate-textShimmer font-black">
              & Study Abroad
            </span>
            <span className="block text-gray-400 text-3xl sm:text-4xl md:text-5xl font-medium mt-2 tracking-wide">
              Experts.
            </span>
          </h1>

          {/* Subheading Description */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-xl font-normal">
            Empowering students, ambitious professionals, and families to transcend borders through impeccably tailored consultancy, corporate relocation, and international academic access paths.
          </p>

          {/* Action Button Set */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <a 
              href="#consultation" 
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-gray-950 font-bold text-sm rounded-md shadow-[0_4px_30px_rgba(214,175,55,0.2)] hover:shadow-[0_4px_40px_rgba(214,175,55,0.4)] hover:-translate-y-0.5 transition-all duration-300 no-underline tracking-wide uppercase"
            >
              <span>Schedule a Confidential Session</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
            </a>
          </div>

          {/* High-Fidelity Metrics Counter Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/5 pt-8">
            {[
              { value: yearsCount, label: 'Years Track Record', suffix: '+' },
              { value: successCount, label: 'Success Velocity', suffix: '%' },
              { value: casesCount, label: 'Approved Portfolios', suffix: '+' },
              { value: countriesCount, label: 'Global Accessways', suffix: '+' }
            ].map((stat, i) => (
              <div key={i} className="group/card p-4 rounded-lg border border-white/[0.03] bg-gradient-to-br from-white/[0.02] to-transparent hover:bg-white/[0.05] hover:border-[#D4AF37]/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-black mb-1 bg-gradient-to-r from-white to-gray-300 group-hover/card:from-[#D4AF37] group-hover/card:to-[#F3E5AB] bg-clip-text text-transparent transition-colors duration-300">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-500 group-hover/card:text-gray-400 text-[10px] font-bold tracking-wider uppercase transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT COLUMN - CORE LUXURY GLOBE ARCHITECTURE ===== */}
        <div className="hidden lg:flex w-full lg:col-span-5 items-center justify-center relative py-8">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center group/globe animate-fadeIn">
            
            {/* Ambient Shadow Backdroppers */}
            <div className="absolute inset-4 rounded-full bg-[#D4AF37]/5 blur-3xl opacity-50 pointer-events-none group-hover/globe:opacity-80 transition-opacity duration-1000" />
            
            {/* Elegant Celestial Orbit Vectors */}
            <div className="absolute w-[98%] h-[98%] rounded-full border border-[#D4AF37]/15 pointer-events-none animate-[spin_80s_linear_infinite] shadow-[inset_0_0_60px_rgba(214,175,55,0.03)]" />
            <div className="absolute w-[78%] h-[78%] rounded-full border border-dashed border-white/10 pointer-events-none animate-[spin_50s_linear_infinite_reverse]" />
            <div className="absolute w-[58%] h-[58%] rounded-full border border-white/5 pointer-events-none" />

            {/* Core Global Sphere Container */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-[#041226] to-[#010610] shadow-[0_0_60px_rgba(214,175,55,0.1),inset_0_0_40px_rgba(0,0,0,0.9)] border border-[#D4AF37]/30 backdrop-blur-xl z-10 group-hover/globe:border-[#D4AF37]/60 transition-colors duration-500">
              <div className="w-full h-full animate-[panGlobalMap_40s_linear_infinite]">
                <ContinentsMap />
              </div>
              <div className="absolute inset-0 rounded-full shadow-[inset_-25px_-25px_60px_rgba(0,0,0,0.95),inset_10px_10px_30px_rgba(214,175,55,0.1)] pointer-events-none" />
            </div>

            {/* Orbiting Global Flags Matrix */}
            {countriesData.map((country, index) => {
              const orbitStyles = {
                '--start-angle': `${country.angle}deg`,
                '--end-angle': `${country.angle + 360}deg`,
                animation: 'orbitSmooth 45s linear infinite',
              };

              return (
                /* Perfectly balanced parent position with -ml-9 -mt-9 calculation adjustments */
                <div 
                  key={index} 
                  className="absolute left-[50%] top-[50%] -ml-9 -mt-9 z-20"
                  style={orbitStyles}
                >
                  {/* Expanded high-visibility w-18 h-18 design framework */}
                  <div 
                    className="relative flex items-center justify-center w-18 h-18 rounded-full border border-white/10 bg-[#030f20]/95 text-3xl shadow-2xl hover:scale-115 hover:border-[#D4AF37] hover:shadow-[#D4AF37]/40 transition-all duration-300 cursor-pointer backdrop-blur-md select-none animate-[counterRotate_45s_linear_infinite]"
                    onMouseEnter={() => setHoveredCountry(index)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    <span className="drop-shadow-md transform scale-110">{country.flag}</span>
                     
                    {/* Immersive Tooltip Matrix */}
                    {hoveredCountry === index && (
                      <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-[#061833] text-white border border-[#D4AF37]/40 font-bold text-[11px] py-1.5 px-3 rounded shadow-[0_4px_20px_rgba(0,0,0,0.6)] pointer-events-none tracking-wider z-50 uppercase animate-fadeInUp">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                          {country.name}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>

      {/* ===== EMBEDDED DYNAMIC ANIMATION LAYERS ===== */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes panGlobalMap {
          from { transform: translateX(0); }
          to { transform: translateX(-200px); }
        }
        /* Increased orbit radius parameter to 215px for safe structural clearance */
        @keyframes orbitSmooth {
          from { transform: rotate(var(--start-angle)) translateX(215px) rotate(calc(-1 * var(--start-angle))); }
          to { transform: rotate(var(--end-angle)) translateX(215px) rotate(calc(-1 * var(--end-angle))); }
        }
        @keyframes counterRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
