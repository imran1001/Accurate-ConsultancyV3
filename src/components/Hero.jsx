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

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);

  return count;
};

// Upgraded Continents Map with glowing target nodes
const ContinentsMap = () => (
  <svg viewBox="0 0 960 600" className="w-full h-full" style={{ opacity: 0.9 }}>
    <defs>
      <style>{`
        .continent { fill: rgba(201,165,90,0.15); stroke: rgba(201,165,90,0.5); stroke-width: 1.5; }
        .glow-node { fill: #f0c040; filter: drop-shadow(0 0 6px #c9a55a); animation: pulseNode 2s infinite alternate; }
        @keyframes pulseNode {
          0% { opacity: 0.5; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </defs>
    <g className="continent">
      {/* Abstracted Continent Paths */}
      <path d="M 100,150 L 150,120 L 180,140 L 160,180 Z" />
      <path d="M 200,200 L 280,180 L 300,250 L 240,270 Z" />
      <path d="M 350,100 L 420,90 L 450,160 L 380,180 Z" />
      <path d="M 550,200 L 650,180 L 680,280 L 600,300 Z" />
      <path d="M 700,350 L 800,340 L 820,420 L 740,440 Z" />
      <path d="M 150,400 L 200,380 L 220,450 L 170,470 Z" />
    </g>
    {/* Floating Golden Immigration Hubs */}
    <rect x="250" y="220" width="8" height="8" className="glow-node" style={{ animationDelay: '0s' }} />
    <rect x="620" y="250" width="12" height="12" className="glow-node" style={{ animationDelay: '0.5s' }} />
    <rect x="400" y="150" width="6" height="6" className="glow-node" style={{ animationDelay: '1s' }} />
    <rect x="750" y="380" width="10" height="10" className="glow-node" style={{ animationDelay: '1.5s' }} />
  </svg>
);

// Flag Orbit Configuration
const orbitFlags = [
  { flag: '🇺🇸', radius: 190, duration: 16, delay: 0 },
  { flag: '🇬🇧', radius: 230, duration: 20, delay: -5 },
  { flag: '🇨🇦', radius: 200, duration: 18, delay: -9 },
  { flag: '🇦🇺', radius: 250, duration: 24, delay: -14 },
  { flag: '🇪🇺', radius: 210, duration: 22, delay: -18 },
];

const Hero = () => {
  const yearsCount = useCounter(19, 2000);
  const successCount = useCounter(98, 2000);
  const casesCount = useCounter(5000, 2500);
  const countriesCount = useCounter(50, 2000);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center"
      style={{
        background: 'linear-gradient(135deg, #010610 0%, #0a1628 50%, #160d50 100%)'
      }}
    >
      {/* Animated Background Orbs */}
      <div
        className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #c9a55a, transparent)',
          animation: 'float 20s ease-in-out infinite'
        }}
      />
      <div
        className="absolute bottom-0 left-20 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #3b4fca, transparent)',
          animation: 'float 15s ease-in-out infinite reverse'
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT (Text & CTA) */}
          <div>
            <div
              className="inline-flex items-center space-x-3 mb-8 px-4 py-2 rounded-full animate-fadeInUp"
              style={{
                background: 'linear-gradient(135deg, rgba(201,165,90,0.15), rgba(240,192,64,0.1))',
                border: '1px solid rgba(201,165,90,0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <img src="/logo.webp" alt="Accurate Consultancy" className="w-6 h-6" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Est. 2006
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-fadeInUp delay-100"
              style={{ color: 'white' }}
            >
              Navigate Your Journey to{' '}
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(90deg, #c9a55a, #f0c040, #c9a55a)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'textShimmer 3s ease-in-out infinite'
                }}
              >
                Global Success
              </span>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-8 animate-fadeInUp delay-200"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              Premium visa and immigration consultancy delivering seamless pathways to your dream destination with expert guidance every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-slideInLeft delay-300">
              <a
                href="#consultation"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(201,165,90,0.4)] cursor-pointer group"
                style={{
                  background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                  color: '#0a1628',
                  textDecoration: 'none'
                }}
              >
                <Play size={18} />
                <span>Get Started Today</span>
              </a>
              
              <a
                href="#services"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: '2px solid rgba(201,165,90,0.4)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,165,90,0.8)';
                  e.currentTarget.style.background = 'rgba(201,165,90,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,165,90,0.4)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                <span>Explore Services</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* ANIMATED STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: '📅', value: yearsCount, label: 'Years\nExperience', suffix: '+' },
                { icon: '✅', value: successCount, label: 'Success\nRate', suffix: '%' },
                { icon: '👥', value: casesCount, label: 'Approved\nCases', suffix: '+' },
                { icon: '🌍', value: countriesCount, label: 'Global\nCorridors', suffix: '+' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl text-center animate-fadeInUp hover:scale-105 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,165,90,0.15), rgba(240,192,64,0.05))',
                    border: '1px solid rgba(201,165,90,0.2)',
                    backdropFilter: 'blur(10px)',
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div
                    className="text-2xl md:text-3xl font-black"
                    style={{ color: '#c9a55a' }}
                  >
                    {stat.value}{stat.suffix}
                  </div>
                  <div
                    className="text-xs leading-tight mt-2 whitespace-pre-line uppercase font-bold tracking-wider"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT - BEAUTIFUL GLOBE & FLAGS */}
          <div className="hidden lg:flex items-center justify-center relative h-[500px] w-full">
            
            {/* Elliptical Orbit Path Tracks */}
            <div 
              className="absolute w-[110%] h-[260px] border border-dashed rounded-[100%] -rotate-12 pointer-events-none" 
              style={{ borderColor: 'rgba(201,165,90,0.3)' }} 
            />
            <div 
              className="absolute w-[90%] h-[320px] border rounded-[100%] rotate-12 pointer-events-none" 
              style={{ borderColor: 'rgba(255,255,255,0.1)' }} 
            />

            {/* Deep Space Globe Container */}
            <div
              className="relative w-[320px] h-[320px] rounded-full overflow-hidden animate-globeFadeIn z-10"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #1a1060 0%, #010610 80%)',
                boxShadow: 'inset -25px -25px 50px rgba(0,0,0,0.8), 0 0 60px rgba(201,165,90,0.2), inset 0 0 40px rgba(201,165,90,0.4)',
                border: '1px solid rgba(201,165,90,0.4)'
              }}
            >
              {/* Globe Grid Texture */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{
                  backgroundImage: 'linear-gradient(rgba(201,165,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,165,90,1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }} 
              />
              
              {/* Seamless Infinite Panning Map Container */}
              <div 
                className="flex absolute inset-0" 
                style={{ width: '200%', animation: 'panGlobalMap 40s linear infinite' }}
              >
                <div className="w-1/2 h-full"><ContinentsMap /></div>
                <div className="w-1/2 h-full"><ContinentsMap /></div>
              </div>
            </div>

            {/* Orbiting Country Flags */}
            {orbitFlags.map((item, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 flex items-center justify-center bg-[#0a1628]/80 backdrop-blur-md rounded-full border border-[rgba(201,165,90,0.5)] z-20 hover:scale-125 transition-transform cursor-pointer"
                style={{
                  boxShadow: '0 0 20px rgba(201,165,90,0.3), inset 0 0 10px rgba(255,255,255,0.1)',
                  animation: `orbitFlag${i} ${item.duration}s linear infinite ${item.delay}s`,
                }}
              >
                <span className="text-2xl leading-none drop-shadow-md">{item.flag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic CSS Styles */}
      <style>{`
        /* Dynamic orbital paths to keep flags completely upright while rotating */
        ${orbitFlags.map((item, i) => `
          @keyframes orbitFlag${i} {
            0% { transform: rotate(0deg) translateX(${item.radius}px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(${item.radius}px) rotate(-360deg); }
          }
        `).join('\n')}

        @keyframes panGlobalMap {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes globeFadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
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
