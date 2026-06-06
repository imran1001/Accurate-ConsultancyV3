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

// Country data with flags and names
const countriesData = [
  { flag: '🇺🇸', name: 'United States', angle: 0 },
  { flag: '🇬🇧', name: 'United Kingdom', angle: 51.4 },
  { flag: '🇨🇦', name: 'Canada', angle: 102.8 },
  { flag: '🇦🇺', name: 'Australia', angle: 154.2 },
  { flag: '🇨🇳', name: 'China', angle: 205.6 },
  { flag: '🇮🇳', name: 'India', angle: 257 },
  { flag: '🇦🇪', name: 'UAE', angle: 308.4 },
];

// Continent Map Component
const ContinentsMap = () => (
  <svg viewBox="0 0 960 600" className="w-full h-full" style={{ opacity: 0.8 }}>
    <defs>
      <style>{`
        .continent { fill: rgba(201,165,90,0.3); stroke: rgba(201,165,90,0.6); stroke-width: 1; }
        .water { fill: rgba(10,22,40,0.2); }
      `}</style>
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
  const successCount = useCounter(98, 2000);
  const casesCount = useCounter(5000, 2500);
  const countriesCount = useCounter(50, 2000);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const ctaButtonStyle = {
    base: {
      background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
      color: '#0a1628',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
    secondary: {
      background: 'rgba(255,255,255,0.1)',
      color: 'white',
      border: '2px solid rgba(201,165,90,0.4)',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    }
  };

  return (
    <section
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
          {/* LEFT CONTENT */}
          <div>
            {/* Logo Badge Animation */}
            <div
              className="inline-flex items-center space-x-3 mb-8 px-4 py-2 rounded-full animate-fadeInUp"
              style={{
                background: 'linear-gradient(135deg, rgba(201,165,90,0.15), rgba(240,192,64,0.1))',
                border: '1px solid rgba(201,165,90,0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <img 
                src="/logo.webp" 
                alt="Accurate Consultancy logo" 
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Est. 2006
              </span>
            </div>

            {/* Main Heading */}
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

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl leading-relaxed mb-8 animate-fadeInUp delay-200"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              Premium visa and immigration consultancy delivering seamless pathways to your dream destination with expert guidance every step of the way.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-slideInLeft delay-300">
              
                href="#consultation"
                className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
                style={ctaButtonStyle.base}
                aria-label="Get started with consultation booking"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(201,165,90,0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(201,165,90,0.4)';
                }}
              >
                <Play size={18} />
                <span>Get Started Today</span>
              </a>

              
                href="#services"
                className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                style={ctaButtonStyle.secondary}
                aria-label="Explore our services"
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

            {/* ANIMATED STATS - WITH COUNTERS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: '📅', value: yearsCount, label: 'Years\nExperience', suffix: '+' },
                { icon: '✅', value: successCount, label: 'Success\nRate', suffix: '%' },
                { icon: '👥', value: casesCount, label: 'Approved\nCases', suffix: '+' },
                { icon: '🌍', value: countriesCount, label: 'Global\nCorridors', suffix: '+' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl text-center animate-fadeInUp hover:scale-110 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,165,90,0.15), rgba(240,192,64,0.05))',
                    border: '1px solid rgba(201,165,90,0.2)',
                    backdropFilter: 'blur(10px)',
                    animationDelay: `${i * 0.1}s`
                  }}
                  aria-label={`${stat.label.replace(/\n/g, ' ')}: ${stat.value}${stat.suffix}`}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div
                    className="text-2xl md:text-3xl font-black"
                    style={{ color: '#c9a55a' }}
                  >
                    {stat.value}{stat.suffix}
                  </div>
                  <div
                    className="text-xs leading-tight mt-2 whitespace-pre-line"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT - ENHANCED GLOBE WITH FLAGS */}
          <div className="hidden lg:flex items-center justify-center relative h-96">
            {/* Animated Halo - Multiple Rings */}
            <div
              className="absolute inset-0 rounded-full border-2"
              style={{
                borderColor: 'rgba(201,165,90,0.3)',
                animation: 'haloScale 4s ease-in-out infinite'
              }}
            />
            <div
              className="absolute inset-12 rounded-full border-2"
              style={{
                borderColor: 'rgba(201,165,90,0.2)',
                animation: 'haloScale 5s ease-in-out infinite reverse'
              }}
            />

            {/* Globe Container */}
            <div
              className="relative w-64 h-64 rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1a1060, #0a1628)',
                boxShadow: '0 0 60px rgba(201,165,90,0.4), inset 0 0 60px rgba(201,165,90,0.1)',
                border: '2px solid rgba(201,165,90,0.2)',
                animation: 'globeFadeIn 1s ease-out forwards'
              }}
            >
              <div style={{ animation: 'panGlobalMap 30s linear infinite' }}>
                <ContinentsMap />
              </div>
            </div>

            {/* ENHANCED FLAGS WITH ALL EFFECTS */}
            {countriesData.map((country, index) => {
              const sizeVariations = [14, 16, 18, 20, 18, 16, 14];
              const fontSize = sizeVariations[index] || 16;
              const animationDelay = `${index * 0.15}s`;

              return (
                <div
                  key={index}
                  className="absolute w-12 h-12 flex items-center justify-center transition-all duration-300 cursor-pointer"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${country.angle}deg) translateX(180px)`,
                    animation: `rotateOrbit 25s linear infinite`,
                    animationDelay: `${index * 1}s`
                  }}
                  onMouseEnter={() => setHoveredCountry(index)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  aria-label={country.name}
                  title={country.name}
                >
                  {/* Flag with multiple effects */}
                  <div
                    className="relative"
                    style={{
                      fontSize: `${fontSize}px`,
                      filter: 'drop-shadow(0 0 12px rgba(201,165,90,0.6))',
                      textShadow: '0 0 16px rgba(201,165,90,0.5)',
                      animation: `flagFloat 3s ease-in-out infinite`,
                      animationDelay: animationDelay,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 24px rgba(201,165,90,0.9)) drop-shadow(0 0 12px rgba(240,192,64,0.6))';
                      e.currentTarget.style.textShadow = '0 0 24px rgba(201,165,90,0.8)';
                      e.currentTarget.style.transform = 'scale(1.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(201,165,90,0.6))';
                      e.currentTarget.style.textShadow = '0 0 16px rgba(201,165,90,0.5)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {country.flag}

                    {/* Hover Tooltip - Country Name */}
                    <div
                      className="absolute -top-10 left-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg font-semibold text-sm z-50 pointer-events-none transition-all duration-200"
                      style={{
                        background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                        color: '#0a1628',
                        opacity: hoveredCountry === index ? 1 : 0,
                        transform: hoveredCountry === index 
                          ? 'translate(-50%, -16px) scale(1)' 
                          : 'translate(-50%, -8px) scale(0.8)',
                        boxShadow: '0 4px 20px rgba(201,165,90,0.4)',
                        marginLeft: '-50%'
                      }}
                    >
                      {country.name}
                      {/* Arrow */}
                      <div
                        className="absolute"
                        style={{
                          top: '100%',
                          left: '50%',
                          marginLeft: '-6px',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid #c9a55a'
                        }}
                      />
                    </div>

                    {/* Outer glow ring */}
                    <div
                      className="absolute inset-0 rounded-full border-2"
                      style={{
                        borderColor: 'rgba(201,165,90,0.3)',
                        animation: 'flagPulse 2s ease-in-out infinite',
                        animationDelay: animationDelay,
                        opacity: hoveredCountry === index ? 1 : 0.5,
                        transition: 'opacity 0.3s ease'
                      }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Decorative center dot */}
            <div
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: 'radial-gradient(circle, #c9a55a, #f0c040)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 20px rgba(201,165,90,0.8), inset 0 0 10px rgba(201,165,90,0.4)'
              }}
            />
          </div>
        </div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes textShimmer {
          0%, 100% {
            backgroundPosition: 200% 0;
          }
          50% {
            backgroundPosition: 0 0;
          }
        }

        @keyframes rotateOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(180px);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(180px);
          }
        }

        @keyframes flagFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes flagPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes panGlobalMap {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100px);
          }
        }

        @keyframes haloScale {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.2;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes globeFadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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
