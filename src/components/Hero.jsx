import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

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

const countriesData = [
  { flag: '🇺🇸', name: 'United States', angle: 0 },
  { flag: '🇬🇧', name: 'United Kingdom', angle: 36 },
  { flag: '🇪🇸', name: 'Spain', angle: 72 },
  { flag: '🇩🇪', name: 'Germany', angle: 108 },
  { flag: '🇵🇹', name: 'Portugal', angle: 144 },
  { flag: '🇨🇦', name: 'Canada', angle: 180 },
  { flag: '🇦🇺', name: 'Australia', angle: 216 },
  { flag: '🇨🇳', name: 'China', angle: 252 },
  { flag: '🇳🇿', name: 'New Zealand', angle: 288 },
  { flag: '🇦🇪', name: 'UAE', angle: 324 },
];

const ContinentsMap = () => (
  <svg viewBox="0 0 960 600" className="w-full h-full opacity-60">
    <defs>
      <style>{`.continent{fill:rgba(201,165,90,0.25);stroke:rgba(201,165,90,0.5);stroke-width:1}.water{fill:transparent}`}</style>
    </defs>
    <rect className="water" width="960" height="600" />
    <g className="continent">
      <path d="M 100,150 L 150,120 L 180,140 L 160,180 Z" />
      <path d="M 200,200 L 280,180 L 300,250 L 240,270 Z" />
      <path d="M 350,100 L 420,90 L 450,160 L 380,180 Z" />
      <path d="M 550,200 L 650,180 L 680,280 L 600,300 Z" />
      <path d="M 700,350 L 800,340 L 820,420 L 740,440 Z" />
      <path d="M 150,400 L 200,380 L 220,450 L 170,470 Z" />
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
    <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-[#020916]">
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-20 pointer-events-none bg-gradient-to-r from-[#c9a55a] to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-10 pointer-events-none bg-gradient-to-r from-[#3b4fca] to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="text-left order-2 lg:order-1">
          <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 rounded-full border border-[#c9a55a]/30 bg-[#c9a55a]/10 backdrop-blur-md animate-fadeInUp">
            <span className="text-xs font-bold text-white uppercase tracking-wider">Travel • Visa & Immigration • Business Consultancy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 text-white tracking-tight">
            Navigate Your Journey to <br />
            <span className="bg-gradient-to-r from-[#c9a55a] via-[#f0c040] to-[#c9a55a] bg-[length:200%_auto] bg-clip-text text-transparent animate-textShimmer">
              Global Success
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
            Premium visa and immigration consultancy delivering seamless pathways to your dream destination. We offer unparalleled support for corporate, family, and independent migration.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a href="#consultation" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-[#c9a55a] to-[#f0c040] text-[#0a1628] shadow-lg shadow-[#c9a55a]/20 hover:scale-105 hover:shadow-xl transition-all duration-300 no-underline">
              <Play size={18} fill="currentColor" /> Get Started Today
            </a>
          </div>

          {/* Stats Metrics Display Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '📅', value: yearsCount, label: 'Years Experience', suffix: '+' },
              { icon: '✅', value: successCount, label: 'Success Rate', suffix: '%' },
              { icon: '👥', value: casesCount, label: 'Approved Cases', suffix: '+' },
              { icon: '🌍', value: countriesCount, label: 'Global Corridors', suffix: '+' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl text-center border border-[#c9a55a]/20 bg-[#c9a55a]/5 backdrop-blur-sm">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-[#c9a55a] text-xl sm:text-2xl font-black">{stat.value}{stat.suffix}</div>
                <div className="text-gray-400 text-[11px] mt-1 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Animated Orbital Column */}
        <div className="w-full flex items-center justify-center order-1 lg:order-2 py-8 lg:py-0">
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
            
            {/* Visual Orbit Tracks */}
            <div className="absolute w-full h-full rounded-full border border-dashed border-[#c9a55a]/20 pointer-events-none animate-[spin_80s_linear_infinite]" />
            <div className="absolute w-[70%] h-[70%] rounded-full border border-double border-white/5 pointer-events-none" />

            {/* Core Rotating Central Globe */}
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-gradient-to-br from-[#1a1060] to-[#0a1628] shadow-[0_0_50px_rgba(201,165,90,0.3)] border-2 border-[#c9a55a]/30">
              <div className="w-full h-full animate-[panGlobalMap_25s_linear_infinite]">
                <ContinentsMap />
              </div>
            </div>

            {/* Planetary Floating Countries Badges */}
            {countriesData.map((country, index) => {
              // Custom inline styles ensure smooth, continuous, upright planetary travel paths
              const orbitStyles = {
                '--start-angle': `${country.angle}deg`,
                '--end-angle': `${country.angle + 360}deg`,
                animation: 'orbitSmooth 35s linear infinite',
              };

              return (
                <div 
                  key={index} 
                  className="absolute left-[50%] top-[50%] -ml-6 -mt-6 sm:-ml-8 sm:-mt-8"
                  style={orbitStyles}
                >
                  <div 
                    className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-[#c9a55a]/40 bg-[#0a1628]/90 text-2xl sm:text-3xl shadow-xl hover:scale-125 hover:border-[#f0c040] hover:shadow-[#c9a55a]/40 transition-all duration-300 cursor-pointer backdrop-blur-md select-none animate-[counterRotate_35s_linear_infinite]"
                    onMouseEnter={() => setHoveredCountry(index)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    <span>{country.flag}</span>
                    
                    {hoveredCountry === index && (
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-[#c9a55a] to-[#f0c040] text-[#0a1628] font-bold text-[10px] sm:text-xs py-1 px-2.5 rounded-md shadow-lg pointer-events-none tracking-wide z-50">
                        {country.name}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Embedded High-Fidelity Style Adjustments */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes panGlobalMap {
          from { transform: translateX(0); }
          to { transform: translateX(-80px); }
        }
        @keyframes orbitSmooth {
          from { transform: rotate(var(--start-angle)) translateX(min(180px, 42vw)) rotate(calc(-1 * var(--start-angle))); }
          to { transform: rotate(var(--end-angle)) translateX(min(180px, 42vw)) rotate(calc(-1 * var(--end-angle))); }
        }
        @keyframes counterRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
