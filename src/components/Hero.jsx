import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Globe, Star, Users, MapPin, Sparkles, 
  Shield, ChevronRight, Award, TrendingUp 
} from 'lucide-react';

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

  const cards = [
    { flag: '🇨🇦', name: 'Canada', subtitle: 'Study • Work • PR', delay: 0, desktopPos: 'top-[8%] left-0 lg:-left-[8%]' },
    { flag: '🇬🇧', name: 'United Kingdom', subtitle: 'Student • Visitor', delay: 1, desktopPos: 'top-[12%] right-0 lg:-right-[8%]' },
    { flag: '🇦🇺', name: 'Australia', subtitle: 'Skilled • Study', delay: 2, desktopPos: 'bottom-[12%] left-0 lg:-left-[8%]' },
    { flag: '🇺🇸', name: 'United States', subtitle: 'F1 • B1/B2', delay: 3, desktopPos: 'bottom-[8%] right-0 lg:right-0' },
  ];

  return (
    <section className="relative min-h-screen bg-[#081326] text-white overflow-hidden flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-16">
      
      {/* ===== ENHANCED BACKGROUND INTERIOR ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#0B1D3A_0%,#081326_70%)]" />
        <div className="absolute right-[-10%] top-[10%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-[#D4AF37]/5 blur-[80px] sm:blur-[120px] animate-float-slow" />
        <div className="absolute left-[-5%] bottom-[20%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-[#3b4fca]/5 blur-[70px] sm:blur-[100px] animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-20 sm:opacity-30" style={{
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent animate-slide-line" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 z-10 grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center">
        
        {/* ===== LEFT COLUMN: HEADLINE & ACTIONS ===== */}
        <div className="lg:col-span-6 flex flex-col justify-center z-20 text-center lg:text-left items-center lg:items-start max-w-2xl mx-auto lg:max-w-none">
          
          {/* Badge: Prevented wrapping on ultra-small screens */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md mb-4 sm:mb-6 animate-fade-in-up max-w-full">
            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D4AF37]"></span>
            </span>
            <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-[#D4AF37] uppercase tracking-wide xs:tracking-widest whitespace-nowrap overflow-hidden text-ellipsis">
              Visa & Immigration Experts
            </span>
            <Sparkles size={11} className="text-[#D4AF37] hidden xs:block flex-shrink-0" />
          </div>

          {/* Headline: Fluid sizing prevents "Immigration Consultants" from breaking ugly on mobile */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 animate-fade-in-up delay-100 w-full break-words">
            <span className="block text-white mb-1 xs:mb-0">Trusted Visa &</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-300% animate-gradient-shift py-1">
              Immigration Consultants
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-xs xs:text-sm sm:text-lg font-normal leading-relaxed max-w-xl mb-6 sm:mb-8 px-1 xs:px-2 lg:px-0 animate-fade-in-up delay-200">
            Premium consultancy delivering seamless pathways to your dream destinations worldwide.
          </p>

          {/* CTAs: Optimized stacked layout for micro screens, side-by-side on larger items */}
          <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto mb-8 sm:mb-12 animate-fade-in-up delay-300">
            <a 
              href="#consultation" 
              className="group relative w-full xs:w-auto flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm text-[#081326] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] shadow-[0_4px_20px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-[1.02] overflow-hidden whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <span className="relative flex items-center gap-1.5">
                Get Started Today
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#services" 
              className="group w-full xs:w-auto flex items-center justify-center gap-1.5 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm text-white border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30 whitespace-nowrap"
            >
              Explore Services
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Indicators: Clean separation on mobile viewports */}
          <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 xs:gap-4 pt-4 sm:pt-6 border-t border-white/10 w-full max-w-xl animate-fade-in-up delay-400">
            <div className="flex items-center gap-2">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-current sm:w-3.5 sm:h-3.5" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">4.9/5</span>
              <span className="text-[11px] text-slate-400">(200+ Reviews)</span>
            </div>
            
            <div className="hidden xs:block w-px h-3.5 bg-white/20" />
            
            <div className="flex items-center gap-1.5">
              <Users size={13} className="text-[#D4AF37] sm:w-3.5 sm:h-3.5" />
              <span className="text-xs font-bold text-white">2,000+</span>
              <span className="text-[11px] text-slate-400">Happy Clients</span>
            </div>
          </div>
        </div>

        {/* ===== RIGHT COLUMN: GLOBE INTERACTIVE ILLUSTRATION ===== */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center mt-4 lg:mt-0 w-full">
          
          <div className="relative flex items-center justify-center w-full min-h-[160px] xs:min-h-[200px] sm:min-h-[260px] lg:min-h-[500px]">
            
            {/* Desktop ambient rings */}
            <div className="hidden lg:block absolute w-[500px] h-[500px] rounded-full border border-[#D4AF37]/10 pointer-events-none animate-spin-slow" style={{ animationDuration: '40s' }} />
            <div className="hidden lg:block absolute w-[380px] h-[380px] rounded-full border border-[#D4AF37]/5 pointer-events-none animate-spin-slow" style={{ animationDuration: '28s', animationDirection: 'reverse' }} />

            {/* Globe Sphere Layout */}
            <div className="relative w-28 h-28 xs:w-36 xs:h-36 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-full shadow-[0_0_60px_rgba(212,175,55,0.2)] flex items-center justify-center">
              <div className="absolute -inset-1 rounded-full border border-[#D4AF37]/20 animate-pulse" style={{ animationDuration: '3s' }} />
              
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#0B1D3A] via-[#1A2D50] to-[#081326]">
                <div className="absolute inset-0 animate-spin-globe" style={{ animationDuration: '35s' }}>
                  <svg viewBox="0 0 400 400" className="w-full h-full opacity-70">
                    <defs>
                      <radialGradient id="blueSphere" cx="45%" cy="35%" r="70%">
                        <stop offset="0%" stopColor="#2A5A8F" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#0F2B5C" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#081326" stopOpacity="0.95" />
                      </radialGradient>
                    </defs>
                    <circle cx="200" cy="200" r="190" fill="url(#blueSphere)" />
                    <g stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.5">
                      <ellipse cx="200" cy="200" rx="160" ry="40" />
                      <ellipse cx="200" cy="200" rx="138" ry="60" />
                      <ellipse cx="200" cy="200" rx="80" ry="80" />
                    </g>
                    <g stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.5">
                      <ellipse cx="200" cy="200" rx="40" ry="160" />
                      <ellipse cx="200" cy="200" rx="80" ry="160" />
                      <ellipse cx="200" cy="200" rx="120" ry="160" />
                    </g>
                    <circle cx="200" cy="200" r="188" stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Desktop Interactive Floating Cards */}
            <div className="hidden lg:block">
              {cards.map((card) => (
                <div
                  key={card.name}
                  className={`absolute ${card.desktopPos} p-3 rounded-xl bg-[#081326]/85 border border-white/10 backdrop-blur-xl shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-500 hover:scale-105 group animate-bounce-slow`}
                  style={{ animationDelay: `${card.delay}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl group-hover:scale-110 transition-transform">{card.flag}</div>
                    <div className="text-left">
                      <h3 className="text-white font-bold text-xs leading-tight group-hover:text-[#D4AF37] transition-colors">{card.name}</h3>
                      <p className="text-slate-400 text-[10px] mt-0.5 whitespace-nowrap">{card.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile horizontal destination strip */}
          <div className="lg:hidden w-full overflow-x-auto pb-2 pt-2 -mx-4 px-4 scrollbar-hide mt-4">
            <div className="flex gap-2.5 w-max">
              {cards.map((card) => (
                <div key={card.name} className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0B1D3A]/60 border border-white/5 backdrop-blur-md shadow-md">
                  <span className="text-xl">{card.flag}</span>
                  <div className="text-left">
                    <p className="text-white font-bold text-[11px] leading-tight">{card.name}</p>
                    <p className="text-slate-400 text-[9px] mt-0.5">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== STATISTICS BAR: Fixed word clipping/wrapping on narrow devices ===== */}
      <div className="relative max-w-7xl mx-auto w-full px-4 xs:px-5 sm:px-6 lg:px-8 z-20 mt-10 sm:mt-16 lg:mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {[
            { val: yearsExp, label: 'Years Experience', suffix: '+', icon: <Award size={14} className="text-[#D4AF37]" /> },
            { val: successRate, label: 'Success Rate', suffix: '%', icon: <TrendingUp size={14} className="text-[#D4AF37]" /> },
            { val: approvedCases, label: 'Approved Cases', suffix: '+', icon: <Users size={14} className="text-[#D4AF37]" /> },
            { val: corridors, label: 'Global Corridors', suffix: '+', icon: <Globe size={14} className="text-[#D4AF37]" /> },
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="group p-3.5 xs:p-4 sm:p-5 lg:p-6 rounded-2xl bg-[#0B1D3A]/40 border border-white/5 backdrop-blur-sm relative overflow-hidden hover:border-[#D4AF37]/20 transition-all duration-300 text-center lg:text-left hover:bg-[#0B1D3A]/60"
            >
              <div className="flex flex-col xs:flex-row lg:flex-row items-center lg:justify-start gap-1 xs:gap-2.5">
                <div className="opacity-70 group-hover:opacity-100 hidden xs:block">{stat.icon}</div>
                <div className="text-lg xs:text-xl sm:text-2xl lg:text-4xl font-black text-[#D4AF37] tracking-tight">
                  {stat.val}{stat.suffix}
                </div>
              </div>
              {/* Added dynamic leading and break tracking for long words like Experience/Corridors */}
              <div className="text-[9px] xs:text-[10px] sm:text-xs lg:text-sm font-medium text-slate-400 tracking-wide mt-1.5 uppercase group-hover:text-slate-300 transition-colors max-w-full break-words leading-tight">
                {stat.label}
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-500 w-0 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== GLOBAL CSS STYLES FOR ANIMATIONS ===== */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.08s; }
        .delay-200 { animation-delay: 0.16s; }
        .delay-300 { animation-delay: 0.24s; }
        .delay-400 { animation-delay: 0.32s; }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .bg-300% { background-size: 300% 100%; }
        .animate-gradient-shift {
          animation: gradient-shift 4.5s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float-slow {
          animation: float-slow 16s ease-in-out infinite;
        }

        @keyframes slide-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-line {
          animation: slide-line 10s linear infinite;
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 4s ease-in-out infinite;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 45s linear infinite;
        }

        @keyframes spin-globe {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-globe {
          animation: spin-globe 40s linear infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;
