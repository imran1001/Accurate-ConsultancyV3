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

  // Destination cards with desktop positioning
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
      
      {/* ===== ENHANCED BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#0B1D3A_0%,#081326_70%)]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] animate-float-slow" />
        <div className="absolute left-[-5%] bottom-[20%] w-[400px] h-[400px] rounded-full bg-[#3b4fca]/5 blur-[100px] animate-float-slow" style={{ animationDelay: '2s' }} />
        
        {/* Subtle animated grid */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
        
        {/* Animated horizontal line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent animate-slide-line" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ===== LEFT COLUMN ===== */}
        <div className="lg:col-span-6 flex flex-col justify-center z-20 pt-8 lg:pt-0 text-center lg:text-left items-center lg:items-start">
          
          {/* Badge with sparkle */}
          <div className="inline-flex items-center space-x-2 w-max px-3 sm:px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md mb-6 sm:mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="text-[9px] sm:text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest">
              Travel - Visa & Immigration - Business consultancy
            </span>
            <Sparkles size={14} className="text-[#D4AF37]" />
          </div>

          {/* Typography with gradient animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6 animate-fade-in-up delay-100">
            <span className="block text-white">Trusted Visa &</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-300% animate-gradient-shift">
              Immigration Consultants
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 px-4 lg:px-0 animate-fade-in-up delay-200">
            Premium consultancy delivering seamless pathways to your dream destinations. We help professionals, families, and businesses secure visas and global opportunities with uncompromising expertise.
          </p>

          {/* CTAs with shine effect */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 sm:mb-12 w-full sm:w-auto animate-fade-in-up delay-300">
            <a 
              href="#consultation" 
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#081326] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] shadow-[0_4px_25px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                Get Started Today
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#services" 
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-[1.02]"
            >
              <span>Explore Services</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-6 border-t border-white/10 w-full max-w-xl animate-fade-in-up delay-400">
            <div className="flex items-center gap-2">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">4.9/5</span>
              <span className="text-xs text-slate-400">(200+ Reviews)</span>
            </div>
            
            <div className="w-px h-6 bg-white/10 hidden sm:block" />
            
            <div className="flex items-center gap-2">
              <Users size={16} className="text-[#D4AF37]" />
              <span className="text-sm font-medium text-white">2,000+</span>
              <span className="text-xs text-slate-400">Happy Clients</span>
            </div>
            
            <div className="w-px h-6 bg-white/10 hidden sm:block" />
            
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-[#D4AF37]" />
              <span className="text-xs font-medium text-slate-400">Trusted Since 2006</span>
            </div>
          </div>
        </div>

        {/* ===== RIGHT COLUMN – GLOBE & CARDS ===== */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center mt-12 lg:mt-0 w-full">
          
          {/* Desktop Globe Container */}
          <div className="relative flex items-center justify-center w-full min-h-[300px] lg:min-h-[540px]">
            
            {/* Desktop Only: Rotating decorative rings */}
            <div className="hidden lg:block absolute w-[500px] h-[500px] rounded-full border border-[#D4AF37]/20 pointer-events-none animate-spin-slow" style={{ animationDuration: '35s' }} />
            <div className="hidden lg:block absolute w-[400px] h-[400px] rounded-full border border-[#D4AF37]/10 pointer-events-none animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
            <div className="hidden lg:block absolute w-[300px] h-[300px] rounded-full border border-[#D4AF37]/5 pointer-events-none animate-spin-slow" style={{ animationDuration: '18s' }} />

            {/* Desktop Only: Orbiting particles */}
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

            {/* Enhanced Globe Sphere */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full shadow-[0_0_100px_rgba(212,175,55,0.25)] flex items-center justify-center group">
              {/* Multiple outer glow rings */}
              <div className="absolute -inset-2 rounded-full border-2 border-[#D4AF37]/20 animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute -inset-4 rounded-full border border-[#D4AF37]/10 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#0B1D3A] via-[#1A2D50] to-[#081326]">
                
                {/* Rotating wireframe */}
                <div className="absolute inset-0 animate-spin-globe" style={{ animationDuration: '25s' }}>
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                      <radialGradient id="blueSphere" cx="45%" cy="35%" r="70%">
                        <stop offset="0%" stopColor="#2A5A8F" stopOpacity="0.95" />
                        <stop offset="40%" stopColor="#0F2B5C" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#081326" stopOpacity="0.95" />
                      </radialGradient>
                      <radialGradient id="sphereGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    
                    {/* Sphere background */}
                    <circle cx="200" cy="200" r="190" fill="url(#blueSphere)" />
                    <circle cx="200" cy="200" r="190" fill="url(#sphereGlow)" />
                    
                    {/* Gold latitude lines */}
                    <g stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.6">
                      <ellipse cx="200" cy="200" rx="160" ry="40" />
                      <ellipse cx="200" cy="200" rx="138" ry="20" />
                      <ellipse cx="200" cy="200" rx="138" ry="60" />
                      <ellipse cx="200" cy="200" rx="80" ry="10" />
                      <ellipse cx="200" cy="200" rx="80" ry="70" />
                      <circle cx="200" cy="80" r="5" />
                      <circle cx="200" cy="320" r="5" />
                    </g>
                    
                    {/* Gold longitude lines */}
                    <g stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.6">
                      <ellipse cx="200" cy="200" rx="40" ry="160" />
                      <ellipse cx="200" cy="200" rx="80" ry="160" />
                      <ellipse cx="200" cy="200" rx="120" ry="160" />
                      <ellipse cx="200" cy="200" rx="160" ry="160" />
                    </g>
                    
                    {/* Outer gold ring */}
                    <circle cx="200" cy="200" r="188" stroke="#D4AF37" strokeWidth="2.5" fill="none" opacity="0.4" />
                    
                    {/* Intersection dots */}
                    <g fill="#D4AF37" opacity="0.4">
                      <circle cx="200" cy="160" r="2.5" />
                      <circle cx="200" cy="240" r="2.5" />
                      <circle cx="160" cy="200" r="2.5" />
                      <circle cx="240" cy="200" r="2.5" />
                      <circle cx="138" cy="180" r="2" />
                      <circle cx="262" cy="180" r="2" />
                      <circle cx="138" cy="220" r="2" />
                      <circle cx="262" cy="220" r="2" />
                    </g>
                    
                    {/* Shine effect */}
                    <ellipse cx="150" cy="120" rx="70" ry="40" fill="rgba(255,255,255,0.05)" transform="rotate(-30, 150, 120)" />
                  </svg>
                </div>
                
                {/* Pulsing depth spots */}
                <div className="hidden lg:block absolute w-16 h-16 rounded-full bg-[#D4AF37]/15 blur-2xl top-8 right-8 animate-pulse" />
                <div className="hidden lg:block absolute w-10 h-10 rounded-full bg-[#D4AF37]/10 blur-xl bottom-8 left-8 animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>

            {/* Desktop Only: Floating Cards */}
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

          {/* Mobile Only: Cards Grid */}
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

      {/* ===== STATISTICS BAR ===== */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-20 mt-16 lg:mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {[
            { val: yearsExp, label: 'Years Experience', suffix: '+', icon: <Award size={18} className="text-[#D4AF37]" /> },
            { val: successRate, label: 'Success Rate', suffix: '%', icon: <TrendingUp size={18} className="text-[#D4AF37]" /> },
            { val: approvedCases, label: 'Approved Cases', suffix: '+', icon: <Users size={18} className="text-[#D4AF37]" /> },
            { val: corridors, label: 'Global Corridors', suffix: '+', icon: <Globe size={18} className="text-[#D4AF37]" /> },
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="group p-4 sm:p-6 rounded-2xl bg-[#0B1D3A]/50 border border-white/5 backdrop-blur-sm relative overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300 text-center lg:text-left hover:bg-[#0B1D3A]/70 hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)]"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="opacity-60 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#D4AF37] group-hover:scale-105 transition-transform origin-left">
                  {stat.val}{stat.suffix}
                </div>
              </div>
              <div className="text-[10px] sm:text-xs lg:text-sm font-medium text-slate-400 tracking-wide mt-1 sm:mt-2 uppercase group-hover:text-slate-300 transition-colors">
                {stat.label}
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-500 w-0 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* ===== ANIMATIONS STYLES ===== */}
      <style>{`
        /* Fade In Up */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        /* Gradient Shift */
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .bg-300% { background-size: 300% 100%; }
        .animate-gradient-shift {
          animation: gradient-shift 4s ease-in-out infinite;
        }

        /* Float Slow */
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        /* Slide Line */
        @keyframes slide-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-line {
          animation: slide-line 8s linear infinite;
        }

        /* Bounce Slow */
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 5s ease-in-out infinite;
        }

        /* Spin Slow */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow linear infinite;
        }

        /* Spin Globe */
        @keyframes spin-globe {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-globe {
          animation: spin-globe 30s linear infinite;
        }

        /* Pulse animation for rings - using Tailwind's animate-pulse is fine */
      `}</style>
    </section>
  );
};

export default Hero;
