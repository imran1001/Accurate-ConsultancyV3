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
              <img src="/logo.webp" alt="Accurate Consultancy" className="w-6 h-6" />
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
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
                style={{
                  background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                  color: '#0a1628',
                  textDecoration: 'none'
                }}
              >
                <Play size={18} />
                <span>Get Started Today</span>
              </a>
              
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

          {/* RIGHT CONTENT - GLOBE */}
          <div className="hidden lg:flex items-center justify-center relative h-96">
            {/* Animated Halo */}
            <div
              className="absolute inset-0 rounded-full border-2 animate-glow"
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
              className="relative w-64 h-64 rounded-full overflow-hidden animate-globeFadeIn"
              style={{
                background: 'linear-gradient(135deg, #1a1060, #0a1628)',
                boxShadow: '0 0 60px rgba(201,165,90,0.4), inset 0 0 60px rgba(201,165,90,0.1)',
                border: '2px solid rgba(201,165,90,0.2)'
              }}
            >
              <div style={{ animation: 'panGlobalMap 30s linear infinite' }}>
                <ContinentsMap />
              </div>
            </div>

            {/* Rotating Stars */}
            {[0, 72, 144, 216, 288].map((angle) => (
              <div
                key={angle}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                  top: '50%',
                  left: '50%',
                  width: '12px',
                  height: '12px',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(180px)`,
                  animation: `rotateOrbit 20s linear infinite`,
                  boxShadow: '0 0 15px rgba(201,165,90,0.6)'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #f0c040, #c9a55a)',
                    animation: 'rotateSelf 10s linear infinite'
                  }}
                />
              </div>
            ))}
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

        @keyframes rotateSelf {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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
