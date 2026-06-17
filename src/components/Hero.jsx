import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Star, Users, MapPin, Sparkles } from 'lucide-react';

// Custom hook for smooth number animation
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

const Hero = () => {
  const yearsExp = useCounter(19, 2200);
  const successRate = useCounter(90, 2000);
  const approvedCases = useCounter(2000, 2500);
  const corridors = useCounter(50, 1800);

  // Replaced custom CSS classes with Tailwind arbitrary values for precise desktop positioning
  const cards = [
    { flag: '🇨🇦', name: 'Canada', subtitle: 'Study • Work • PR', delay: 0, desktopPos: 'top-[5%] left-0 lg:-left-[10%]' },
    { flag: '🇬🇧', name: 'United Kingdom', subtitle: 'Student • Visitor', delay: 1, desktopPos: 'top-[15%] right-0 lg:-right-[5%]' },
    { flag: '🇦🇺', name: 'Australia', subtitle: 'Skilled • Study', delay: 2, desktopPos: 'bottom-[20%] left-0 lg:-left-[5%]' },
    { flag: '🇺🇸', name: 'United States', subtitle: 'F1 • B1/B2', delay: 3, desktopPos: 'bottom-[5%] right-0 lg:right-0' },
    { flag: '🇪🇺', name: 'Europe', subtitle: 'Schengen • Work', delay: 0.5, desktopPos: 'top-[45%] lg:-left-[12%]' },
    { flag: '🇦🇪', name: 'UAE', subtitle: 'Golden Visa • Work', delay: 1.5, desktopPos: 'bottom-[45%] lg:-right-[12%]' },
  ];

  return (
    <section className="relative min-h-screen bg-[#081326] text-white overflow-hidden flex flex-col justify-center pt-24 pb-16">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#0B1D3A_0%,#081326_70%)] pointer-events-none" />
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Typography Column */}
        <div className="lg:col-span-6 flex flex-col justify-center z-20 pt-8 lg:pt-0 text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center space-x-2 w-max px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[9px] sm:text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest">
              Travel - Visa & Immigration - Business consultancy
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Trusted Visa & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
              Immigration Consultants
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 px-4 lg:px-0">
            Premium consultancy delivering seamless pathways to your dream destinations. We help professionals, families, and businesses secure visas and global opportunities with uncompromising expertise.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 sm:mb-12 w-full sm:w-auto">
            <a href="#consultation" className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#081326] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] shadow-[0_4px_20px_rgba(212,175,55,0.2)] transition-all duration-300 hover:scale-[1.03]">
              Book Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10">
              Explore Services
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-6 border-t border-white/10 w-full max-w-xl">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold tracking-wider text-slate-300">4.9/5 Client Rating</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:block" />
            <span className="text-xs font-medium text-slate-400">Trusted Since 2006</span>
          </div>
        </div>

        {/* Right Graphical Space */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center mt-12 lg:mt-0 w-full">
          
          {/* Globe & Orbit Container (Relative for positioning) */}
          <div className="relative flex items-center justify-center w-full min-h-[300px] lg:min-h-[540px]">
            
            {/* Desktop Only: Rotating decorative gold rings */}
            <div className="hidden lg:block absolute w-[500px] h-[500px] rounded-full border border-[#D4AF37]/20 pointer-events-none animate-spin-slow" style={{ animationDuration: '35s' }} />
            <div className="hidden lg:block absolute w-[400px] h-[400px] rounded-full border border-[#D4AF37]/10 pointer-events-none animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
            <div className="hidden lg:block absolute w-[300px] h-[300px] rounded-full border border-[#D4AF37]/5 pointer-events-none animate-spin-slow" style={{ animationDuration: '18s' }} />

            {/* Desktop Only: Orbiting gold particles */}
            <div className="hidden lg:block absolute w-[420px] h-[420px] pointer-events-none animate-spin-slow" style={{ animationDuration: '20s' }}>
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * 360;
                return (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-60"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${angle}deg) translateX(210px)`,
                      transformOrigin: '0 0',
                    }}
                  />
                );
              })}
            </div>

            {/* The Globe Sphere */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full shadow-[0_0_80px_rgba(212,175,55,0.3)] flex items-center justify-center group">
              <div className="absolute -inset-1 rounded-full border-2 border-[#D4AF37]/30 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#0B1D3A] via-[#1A2D50] to-[#081326]">
                <div className="absolute inset-0 animate-spin-globe" style={{ animationDuration: '30s' }}>
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                      <radialGradient id="blueSphere" cx="45%" cy="35%" r="70%">
                        <stop offset="0%" stopColor="#2A5A8F" stopOpacity="0.95" />
                        <stop offset="40%" stopColor="#0F2B5C" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#081326" stopOpacity="0.95" />
                      </radialGradient>
                      <radialGradient id="sphereGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="200" cy="200" r="190" fill="url(#blueSphere)" />
                    <circle cx="200" cy="200" r="190" fill="url(#sphereGlow)" />
                    <g stroke="#D4AF37" strokeWidth="1.8" fill="none" opacity="0.7">
                      <ellipse cx="200" cy="200" rx="160" ry="40" />
                      <ellipse cx="200" cy="200" rx="138" ry="20" />
                      <ellipse cx="200" cy="200" rx="138" ry="60" />
                      <ellipse cx="200" cy="200" rx="80" ry="10" />
                      <ellipse cx="200" cy="200" rx="80" ry="70" />
                      <circle cx="200" cy="80" r="6" />
                      <circle cx="200" cy="320" r="6" />
                    </g>
                    <g stroke="#D4AF37" strokeWidth="1.8" fill="none" opacity="0.7">
                      <ellipse cx="200" cy="200" rx="40" ry="160" />
                      <ellipse cx="200" cy="200" rx="80" ry="160" />
                      <ellipse cx="200" cy="200" rx="120" ry="160" />
                      <ellipse cx="200" cy="200" rx="160" ry="160" />
                    </g>
                    <circle cx="200" cy="200" r="188" stroke="#D4AF37" strokeWidth="2.5" fill="none" opacity="0.5" />
                    <ellipse cx="150" cy="120" rx="70" ry="40" fill="rgba(255,255,255,0.06)" transform="rotate(-30, 150, 120)" />
                  </svg>
                </div>
                {/* Desktop Only Highlights */}
                <div className="hidden lg:block absolute w-20 h-20 rounded-full bg-[#D4AF37]/20 blur-2xl top-10 right-10 animate-pulse" />
                <div className="hidden lg:block absolute w-12 h-12 rounded-full bg-[#D4AF37]/10 blur-xl bottom-10 left-10 animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>

            {/* Desktop Only: Floating Destination Cards */}
            <div className="hidden lg:block">
              {cards.map((card) => (
                <div
                  key={card.name}
                  className={`absolute ${card.desktopPos} p-4 rounded-2xl bg-[#081326]/80 border border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/40 transition-all duration-500 hover:scale-105 group animate-bounce-slow`}
                  style={{ animationDelay: `${card.delay}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{card.flag}</div>
                    <div>
                      <h3 className="text-white font-bold text-base leading-tight group-hover:text-[#D4AF37] transition-colors">
                        {card.name}
                      </h3>
                      <p className="text-slate-400 text-[11px] mt-1">{card.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative label */}
            <div className="hidden lg:block absolute bottom-[-10px] left-1/2 -translate-x-1/2 text-[10px] font-medium text-white/20 tracking-[0.4em] uppercase whitespace-nowrap">
              Global Destinations
            </div>
          </div>

          {/* Mobile Only: Destination Cards Grid */}
          <div className="grid grid-cols-2 gap-3 mt-8 w-full max-w-md lg:hidden px-4">
            {cards.map((card) => (
              <div
                key={card.name}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-2 p-3 rounded-xl bg-[#081326]/80 border border-white/10 backdrop-blur-md shadow-lg text-center sm:text-left"
              >
                <div className="text-3xl">{card.flag}</div>
                <div>
                  <h3 className="text-white font-bold text-sm leading-tight">
                    {card.name}
                  </h3>
                  <p className="text-slate-400 text-[10px] mt-0.5">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Institutional Statistics Bar */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-20 mt-16 lg:mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {[
            { val: yearsExp, label: 'Years Experience', suffix: '+' },
            { val: successRate, label: 'Success Rate', suffix: '%' },
            { val: approvedCases, label: 'Approved Cases', suffix: '+' },
            { val: corridors, label: 'Global Corridors', suffix: '+' },
          ].map((stat, idx) => (
            <div key={idx} className="p-4 sm:p-6 rounded-2xl bg-[#0B1D3A]/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-300 text-center lg:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#D4AF37]">
                {stat.val}{stat.suffix}
              </div>
              <div className="text-[10px] sm:text-xs lg:text-sm font-medium text-slate-400 tracking-wide mt-1 sm:mt-2 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cleaned up Style Block - Only Animations */}
      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spinSlow linear infinite;
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-globe {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-globe {
          animation: spin-globe 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
