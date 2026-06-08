import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';

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
      <style>{`.continent{fill:rgba(201,165,90,0.3);stroke:rgba(201,165,90,0.6);stroke-width:1}.water{fill:rgba(10,22,40,0.2)}`}</style>
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
  
  // Changed from countriesData.length (10) to 50 to meet your requirements
  const countriesCount = useCounter(50, 2000); 
  
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center" style={{ background: 'linear-gradient(135deg, #010610 0%, #0a1628 50%, #160d50 100%)' }}>
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #c9a55a, transparent)', animation: 'float 20s ease-in-out infinite' }} />
      <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #3b4fca, transparent)', animation: 'float 15s ease-in-out infinite reverse' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
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

        <div className="hidden lg:flex items-center justify-center relative h-96">
          <div className="relative w-64 h-64 rounded-full overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1060, #0a1628)', boxShadow: '0 0 60px rgba(201,165,90,0.4)', border: '2px solid rgba(201,165,90,0.2)' }}>
            <div style={{ animation: 'panGlobalMap 30s linear infinite' }}><ContinentsMap /></div>
          </div>
          {countriesData.map((country, index) => (
            <div key={index} className="absolute" style={{ transform: `rotate(${country.angle}deg) translateX(180px)`, animation: `rotateOrbit 25s linear infinite`, animationDelay: `${index * 1}s` }}>
              <div style={{ transform: `rotate(-${country.angle}deg)`, cursor: 'pointer' }} onMouseEnter={() => setHoveredCountry(index)} onMouseLeave={() => setHoveredCountry(null)}>
                <span style={{ fontSize: '20px' }}>{country.flag}</span>
                {hoveredCountry === index && <div style={{ position: 'absolute', background: '#c9a55a', color: '#0a1628', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', bottom: '100%', left: '50%', transform: 'translateX(-50%)' }}>{country.name}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes slideInLeft{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}@keyframes textShimmer{0%,100%{backgroundPosition:200% 0}50%{backgroundPosition:0 0}}@keyframes rotateOrbit{from{transform:rotate(0deg)translateX(180px)}to{transform:rotate(360deg)translateX(180px)}}@keyframes panGlobalMap{from{transform:translateX(0)}to{transform:translateX(-100px)}}@keyframes float{0%,100%{transform:translateY(0px)}50%{transform:translateY(-20px)}}.animate-fadeInUp{animation:fadeInUp .8s ease-out forwards;opacity:0}.delay-100{animation-delay:.1s}.delay-200{animation-delay:.2s}.delay-300{animation-delay:.3s}.animate-slideInLeft{animation:slideInLeft .8s ease-out forwards;opacity:0}`}</style>
    </section>
  );
};

export default Hero;
