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

const ContinentsMap = () => (
  <svg viewBox="0 0 960 600" className="w-full h-full opacity-60">
    <defs>
      <style>{`.continent{fill:rgba(201,165,90,0.3);stroke:rgba(201,165,90,0.6);stroke-width:1.5}.water{fill:transparent}`}</style>
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
  const yearsCount = useCounter(20, 2000); // Adjusted dynamically for 2006 base
  const successCount = useCounter(98, 2000);
  const casesCount = useCounter(2500, 2500);
  const countriesCount = useCounter(50, 2000); 

  return (
    <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-[#020916]">
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-20 pointer-events-none bg-gradient-to-r from-[#c9a55a] to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-10 pointer-events-none bg-gradient-to-r from-[#1a2b4c] to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="text-left w-full">
          {/* Updated Corporate Badge */}
          <div className="inline-flex items-center space-x-3 mb-6 px-5 py-2.5 rounded-sm border-l-4 border-[#c9a55a] bg-[#c9a55a]/10 backdrop-blur-md animate-fadeInUp">
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              Trusted Since 2006 • Visa & Immigration Experts
            </span>
          </div>

          {/* Updated Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 text-white tracking-tight">
            Visa, Immigration & <br />
            <span className="bg-gradient-to-r from-[#c9a55a] via-[#f0c040] to-[#c9a55a] bg-[length:200%_auto] bg-clip-text text-transparent animate-textShimmer">
              Study Abroad Solutions
            </span>
            <br /> Worldwide
          </h1>

          {/* Updated Subheading */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl font-light">
            Helping students, professionals and families achieve their international goals through trusted visa, immigration, study abroad and travel solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a href="#consultation" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-bold text-lg bg-gradient-to-r from-[#c9a55a] to-[#f0c040] text-[#0a1628] shadow-lg shadow-[#c9a55a]/20 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 no-underline">
              Schedule a Consultation
            </a>
          </div>

          {/* Stats Metrics Display Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: yearsCount, label: 'Years Experience', suffix: '+' },
              { value: successCount, label: 'Success Rate', suffix: '%' },
              { value: casesCount, label: 'Approved Cases', suffix: '+' },
              { value: countriesCount, label: 'Global Corridors', suffix: '+' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-sm text-left border-l-2 border-[#c9a55a]/40 bg-gradient-to-r from-[#c9a55a]/5 to-transparent">
                <div className="text-[#c9a55a] text-2xl sm:text-3xl font-black mb-1">{stat.value}{stat.suffix}</div>
                <div className="text-gray-400 text-[11px] font-semibold tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Clean Corporate Globe (Hidden on mobile) */}
        <div className="hidden lg:flex w-full items-center justify-center py-8 lg:py-0">
          <div className="relative w-[450px] h-[450px] flex items-center justify-center">
            
            {/* Elegant Minimalist Orbit Rings */}
            <div className="absolute w-[100%] h-[100%] rounded-full border border-[#c9a55a]/20 pointer-events-none animate-[spin_60s_linear_infinite] shadow-[inset_0_0_50px_rgba(201,165,90,0.05)]" />
            <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-[#c9a55a]/30 pointer-events-none animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute w-[60%] h-[60%] rounded-full border border-white/5 pointer-events-none" />

            {/* Core Rotating Central Globe */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#020916] shadow-[0_0_80px_rgba(201,165,90,0.15)] border border-[#c9a55a]/40 backdrop-blur-xl">
              <div className="w-full h-full animate-[panGlobalMap_35s_linear_infinite]">
                <ContinentsMap />
              </div>
              {/* Inner globe shadow for 3D sphere effect */}
              <div className="absolute inset-0 rounded-full shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8)] pointer-events-none" />
            </div>

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
          to { transform: translateX(-150px); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
