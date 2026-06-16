import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

// Counter Hook
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

// Updated country data
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
  <svg viewBox="0 0 960 600" className="w-full h-full" style={{ opacity: 0.8 }}>
    <defs>
      <style>{`.continent{fill:rgba(201,165,90,0.3);stroke:rgba(201,165,90,0.6);stroke-width:1}.water{fill:transparent}`}</style>
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
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center" style={{ background: 'linear-gradient(135deg, #010610 0%, #0a1628 50%, #160d50 100%)' }}>
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #c9a55a, transparent)', animation: 'float 20s ease-in-out infinite' }} />
      <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #3b4fca, transparent)', animation: 'float 15s ease-in-out infinite reverse' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center space-x-3 mb-8 px-4 py-2 rounded-full animate-fadeInUp" style={{ background: 'linear-gradient(135deg, rgba(201,165,90,0.15), rgba(240,192,64,0.1))', border: '1px solid rgba(201,165,90,0.3)', backdropFilter: 'blur(10px)' }}>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Est. 2006</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-fadeInUp delay-100" style={{ color: 'white' }}>
            Navigate Your Journey to <span style={{ background: 'linear-gradient(90deg, #c9a55a, #f0c040, #c9a55a)', backgroundSize: '200% 100%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'textShimmer 3s ease-in-out infinite' }}>Global Success</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-8 animate-fadeInUp delay-200" style={{ color: 'rgba(255,255,255,0.75)' }}>Premium visa and immigration consultancy delivering seamless pathways to your dream destination.</p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-slideInLeft delay-300">
            <a href="#consultation" className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ background: 'linear-gradient(135deg, #c9a55a, #f0c040)', color: '#0a1628', textDecoration: 'none' }}>
              <Play size={18} /> Get Started Today
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '📅', value: yearsCount, label: 'Years Experience', suffix: '+' },
              { icon: '✅', value: successCount, label: 'Success Rate', suffix: '%' },
              { icon: '👥', value: casesCount, label: 'Approved Cases', suffix: '+' },
              { icon: '🌍', value: countriesCount, label: 'Global Corridors', suffix: '+' }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl text-center animate-fadeInUp" style={{ background: 'linear-gradient(135deg, rgba(201,165,90,0.15), rgba(240,192,64,0.05))', border: '1px solid rgba(201,165,90,0.2)', backdropFilter: 'blur(10px)', animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div style={{ color: '#c9a55a', fontSize: '24px', fontWeight: '900' }}>{stat.value}{stat.suffix}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '8px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - The Globe & Orbiting Flags */}
        <div className="hidden lg:flex items-center justify-center relative h-[600px] w-full">
          
          {/* Main Central Globe */}
          <div className="relative w-[340px] h-[340px] rounded-full overflow-hidden z-10" style={{ background: 'linear-gradient(135deg, #1a1060, #0a1628)', boxShadow: '0 0 80px rgba(201,165,90,0.3)', border: '2px solid rgba(201,165,90,0.2)' }}>
            <div className="flex h-full" style={{ width: '200%', animation: 'panGlobalMap 30s linear infinite' }}>
              <div className="w-1/2 h-full"><ContinentsMap /></div>
              <div className="w-1/2 h-full"><ContinentsMap /></div>
            </div>
            {/* Volumetric Globe Shadow */}
            <div className="absolute inset-0 rounded-full shadow-[inset_-40px_-40px_80px_rgba(0,0,0,0.8)] pointer-events-none" />
          </div>

          {/* Orbit System Ring */}
          <div className="absolute top-1/2 left-1/2 w-0 h-0 z-20" style={{ animation: 'orbitSpin 35s linear infinite' }}>
            {countriesData.map((country, index) => (
              // 1. Position the flag along the orbit path
              <div
                key={index}
                className="absolute top-0 left-0 flex items-center justify-center"
                style={{ transform: `rotate(${country.angle}deg) translateX(240px)` }} // 240px is the orbit radius
              >
                {/* 2. Counter-rotate exactly opposite to the orbit to keep elements upright */}
                <div style={{ animation: 'orbitCounterSpin 35s linear infinite' }}>
                  
                  {/* 3. Counter-rotate the initial placement angle so the flag doesn't sit sideways */}
                  <div
                    style={{ transform: `rotate(-${country.angle}deg)`, cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredCountry(index)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    className="relative flex items-center justify-center group"
                  >
                    
                    {/* The Flag Container */}
                    <div 
                      className="flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 group-hover:scale-125"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(4px)',
                        boxShadow: '0 0 20px rgba(255,255,255,0.05)'
                      }}
                    >
                      <span style={{ fontSize: '42px', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.6))' }}>
                        {country.flag}
                      </span>
                    </div>

                    {/* Hover Tooltip */}
                    <div 
                      className={`absolute bottom-full mb-3 px-4 py-1.5 rounded-lg font-bold text-sm whitespace-nowrap transition-all duration-300 pointer-events-none ${
                        hoveredCountry === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                      style={{ 
                        background: '#c9a55a', 
                        color: '#0a1628',
                        boxShadow: '0 4px 15px rgba(201,165,90,0.4)'
                      }}
                    >
                      {country.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#c9a55a]" />
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Faint Orbit Guideline */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-dashed border-[#c9a55a]/20 pointer-events-none" />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes textShimmer {
          0%, 100% { backgroundPosition: 200% 0; }
          50% { backgroundPosition: 0 0; }
        }
        /* Forward Orbit Spin */
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        /* Exact Counter Spin to Keep Flags Upright */
        @keyframes orbitCounterSpin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        /* Continuous Map Panning */
        @keyframes panGlobalMap {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); } 
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fadeInUp { animation: fadeInUp .8s ease-out forwards; opacity: 0; }
        .delay-100 { animation-delay: .1s; }
        .delay-200 { animation-delay: .2s; }
        .delay-300 { animation-delay: .3s; }
        .animate-slideInLeft { animation: slideInLeft .8s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
};

export default Hero;
