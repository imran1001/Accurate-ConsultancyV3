import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Globe, MapPin, ChevronRight } from 'lucide-react';

// Counter Hook
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

// Enhanced country data with more destinations
const countriesData = [
  { flag: '🇺🇸', name: 'United States', angle: 0, color: '#FF6B6B' },
  { flag: '🇬🇧', name: 'United Kingdom', angle: 36, color: '#4ECDC4' },
  { flag: '🇪🇸', name: 'Spain', angle: 72, color: '#FFE66D' },
  { flag: '🇩🇪', name: 'Germany', angle: 108, color: '#A8E6CF' },
  { flag: '🇵🇹', name: 'Portugal', angle: 144, color: '#FF8B94' },
  { flag: '🇨🇦', name: 'Canada', angle: 180, color: '#88D8B0' },
  { flag: '🇦🇺', name: 'Australia', angle: 216, color: '#FFD93D' },
  { flag: '🇨🇳', name: 'China', angle: 252, color: '#6BCB77' },
  { flag: '🇳🇿', name: 'New Zealand', angle: 288, color: '#4D96FF' },
  { flag: '🇦🇪', name: 'UAE', angle: 324, color: '#FF6B6B' },
  { flag: '🇸🇬', name: 'Singapore', angle: 18, color: '#FF4757' },
  { flag: '🇯🇵', name: 'Japan', angle: 54, color: '#2ED573' },
  { flag: '🇫🇷', name: 'France', angle: 90, color: '#1E90FF' },
  { flag: '🇮🇹', name: 'Italy', angle: 126, color: '#FF6B81' },
  { flag: '🇳🇱', name: 'Netherlands', angle: 162, color: '#FFA502' },
];

const ContinentsMap = () => (
  <svg viewBox="0 0 960 600" className="w-full h-full" style={{ opacity: 0.6 }}>
    <defs>
      <style>
        {`
          .continent { 
            fill: rgba(201,165,90,0.15); 
            stroke: rgba(201,165,90,0.3); 
            stroke-width: 1.5;
            transition: all 0.3s ease;
          }
          .continent:hover {
            fill: rgba(201,165,90,0.25);
            stroke: rgba(201,165,90,0.5);
          }
          .water { 
            fill: rgba(10,22,40,0.1);
          }
          .grid-line {
            stroke: rgba(201,165,90,0.05);
            stroke-width: 0.5;
          }
        `}
      </style>
      <radialGradient id="glow">
        <stop offset="0%" stopColor="#c9a55a" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#c9a55a" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect className="water" width="960" height="600" />
    {/* Grid lines for depth */}
    <line x1="0" y1="100" x2="960" y2="100" className="grid-line" />
    <line x1="0" y1="200" x2="960" y2="200" className="grid-line" />
    <line x1="0" y1="300" x2="960" y2="300" className="grid-line" />
    <line x1="0" y1="400" x2="960" y2="400" className="grid-line" />
    <line x1="0" y1="500" x2="960" y2="500" className="grid-line" />
    <line x1="200" y1="0" x2="200" y2="600" className="grid-line" />
    <line x1="400" y1="0" x2="400" y2="600" className="grid-line" />
    <line x1="600" y1="0" x2="600" y2="600" className="grid-line" />
    <line x1="800" y1="0" x2="800" y2="600" className="grid-line" />
    {/* Enhanced continents with more detail */}
    <g className="continent">
      {/* North America */}
      <path d="M 120,80 L 200,60 L 280,80 L 300,120 L 280,180 L 240,200 L 200,180 L 180,220 L 160,200 L 120,180 L 100,140 Z" />
      {/* South America */}
      <path d="M 220,220 L 260,210 L 300,230 L 320,280 L 300,330 L 260,360 L 240,340 L 220,300 L 200,260 Z" />
      {/* Europe */}
      <path d="M 380,100 L 450,80 L 480,120 L 490,180 L 450,200 L 420,180 L 390,160 L 370,140 Z" />
      {/* Africa */}
      <path d="M 380,220 L 420,200 L 460,210 L 480,260 L 460,320 L 420,350 L 390,320 L 370,280 Z" />
      {/* Asia */}
      <path d="M 500,80 L 580,60 L 650,80 L 680,120 L 650,180 L 600,200 L 550,180 L 520,160 L 500,140 Z" />
      {/* Australia */}
      <path d="M 700,340 L 760,320 L 800,340 L 820,380 L 780,400 L 720,380 L 700,360 Z" />
      {/* Antartica */}
      <path d="M 100,500 L 400,480 L 700,500 L 800,520 L 600,550 L 300,550 L 100,520 Z" />
    </g>
  </svg>
);

const Hero = () => {
  const yearsCount = useCounter(19, 2000);
  const successCount = useCounter(90, 2000);
  const casesCount = useCounter(2000, 2500);
  const countriesCount = useCounter(50, 2000);
  
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [rotation, setRotation] = useState(0);

  // Smooth rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center" style={{ 
      background: 'linear-gradient(135deg, #010610 0%, #0a1628 40%, #160d50 70%, #1a0a30 100%)' 
    }}>
      {/* Enhanced animated background elements */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ 
        background: 'radial-gradient(circle, #c9a55a, transparent)',
        animation: 'float 20s ease-in-out infinite' 
      }} />
      <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ 
        background: 'radial-gradient(circle, #3b4fca, transparent)',
        animation: 'float 15s ease-in-out infinite reverse' 
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-5 pointer-events-none" style={{ 
        background: 'radial-gradient(circle, #c9a55a, transparent)',
        animation: 'pulse 8s ease-in-out infinite' 
      }} />
      
      {/* Grid overlay for depth */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(201,165,90,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div>
          <div className="inline-flex items-center space-x-3 mb-8 px-4 py-2 rounded-full animate-fadeInUp" style={{ 
            background: 'linear-gradient(135deg, rgba(201,165,90,0.2), rgba(240,192,64,0.1))',
            border: '1px solid rgba(201,165,90,0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 30px rgba(201,165,90,0.1)'
          }}>
            <span className="w-2 h-2 rounded-full bg-[#c9a55a] animate-pulse"></span>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Est. 2006 • Global Leaders</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fadeInUp delay-100">
            <span style={{ color: 'white' }}>Navigate Your Journey to </span>
            <span style={{ 
              background: 'linear-gradient(90deg, #c9a55a, #f0c040, #ffd700, #f0c040, #c9a55a)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'textShimmer 4s ease-in-out infinite'
            }}>Global Success</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-8 animate-fadeInUp delay-200" style={{ 
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '500px'
          }}>
            Premium visa and immigration consultancy delivering seamless pathways to your dream destination.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-slideInLeft delay-300">
            <a href="#consultation" className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ 
              background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
              color: '#0a1628',
              textDecoration: 'none',
              boxShadow: '0 0 40px rgba(201,165,90,0.3)'
            }}>
              <Play size={18} className="group-hover:scale-110 transition-transform" />
              Get Started Today
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105" style={{ 
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              textDecoration: 'none'
            }}>
              Explore Services
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Enhanced Stats with better visibility */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '🌟', value: yearsCount, label: 'Years Experience', suffix: '+' },
              { icon: '📈', value: successCount, label: 'Success Rate', suffix: '%' },
              { icon: '🎯', value: casesCount, label: 'Approved Cases', suffix: '+' },
              { icon: '🌍', value: countriesCount, label: 'Global Corridors', suffix: '+' }
            ].map((stat, i) => (
              <div key={i} className="group p-4 rounded-2xl text-center animate-fadeInUp transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ 
                background: 'linear-gradient(135deg, rgba(201,165,90,0.15), rgba(240,192,64,0.05))',
                border: '1px solid rgba(201,165,90,0.2)',
                backdropFilter: 'blur(10px)',
                animationDelay: `${i * 0.1}s`
              }}>
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-2xl font-black" style={{ 
                  color: '#c9a55a',
                  textShadow: '0 0 20px rgba(201,165,90,0.2)'
                }}>
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs font-medium uppercase tracking-wider mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Enhanced Globe */}
        <div className="hidden lg:flex items-center justify-center relative h-[500px]">
          {/* Outer glow ring */}
          <div className="absolute w-[400px] h-[400px] rounded-full" style={{
            background: 'radial-gradient(circle, rgba(201,165,90,0.1), transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite'
          }} />
          
          {/* Main globe container */}
          <div className="relative w-80 h-80 rounded-full overflow-hidden" style={{ 
            background: 'linear-gradient(135deg, #1a1060, #0a1628)',
            boxShadow: '0 0 80px rgba(201,165,90,0.3), inset 0 0 80px rgba(201,165,90,0.1)',
            border: '2px solid rgba(201,165,90,0.3)'
          }}>
            <div className="absolute inset-0" style={{ 
              background: 'radial-gradient(circle at 30% 30%, rgba(201,165,90,0.1), transparent 70%)',
              pointerEvents: 'none'
            }} />
            <div style={{ animation: 'panGlobalMap 30s linear infinite' }}>
              <ContinentsMap />
            </div>
            
            {/* Inner glow overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(circle at center, transparent 30%, rgba(10,22,40,0.5) 100%)'
            }} />
          </div>

          {/* Country markers with improved visibility */}
          {countriesData.map((country, index) => {
            const angle = (index / countriesData.length) * 360;
            return (
              <div 
                key={index} 
                className="absolute"
                style={{ 
                  transform: `rotate(${rotation + angle}deg) translateX(200px)`,
                  transition: 'transform 0.1s linear'
                }}
              >
                <div 
                  className="relative group"
                  style={{ 
                    transform: `rotate(-${rotation + angle}deg)`,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={() => setHoveredCountry(index)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity" style={{
                      background: `radial-gradient(circle, ${country.color}, transparent)`,
                      transform: 'scale(1.5)'
                    }} />
                    <span className="relative text-2xl block group-hover:scale-125 transition-transform duration-300">
                      {country.flag}
                    </span>
                  </div>
                  
                  {/* Tooltip with improved visibility */}
                  {hoveredCountry === index && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg whitespace-nowrap font-medium text-xs" style={{
                      background: 'rgba(10,22,40,0.95)',
                      border: '1px solid rgba(201,165,90,0.3)',
                      color: '#c9a55a',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                      zIndex: 50
                    }}>
                      <div className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rotate-45" style={{
                        background: 'rgba(10,22,40,0.95)',
                        borderRight: '1px solid rgba(201,165,90,0.3)',
                        borderBottom: '1px solid rgba(201,165,90,0.3)'
                      }} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <Globe size={32} className="mx-auto mb-1" style={{ color: 'rgba(201,165,90,0.3)' }} />
              <div className="text-xs font-medium uppercase tracking-widest" style={{ color: 'rgba(201,165,90,0.4)' }}>
                Global Network
              </div>
            </div>
          </div>
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
          0%, 100% { backgroundPosition: 300% 0; }
          50% { backgroundPosition: 0 0; }
        }
        @keyframes panGlobalMap {
          from { transform: translateX(0); }
          to { transform: translateX(-150px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
