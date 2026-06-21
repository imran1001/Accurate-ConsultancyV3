import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Globe, Star, Users, Shield, Award, 
  TrendingUp, CheckCircle, Sparkles, ChevronRight
} from 'lucide-react';

// Optimized Counter Hook
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

// Destination data for floating cards
const destinations = [
  { flag: '🇺🇸', name: 'United States', color: '#FF6B6B' },
  { flag: '🇬🇧', name: 'United Kingdom', color: '#4ECDC4' },
  { flag: '🇨🇦', name: 'Canada', color: '#FFD93D' },
  { flag: '🇦🇺', name: 'Australia', color: '#6BCB77' },
  { flag: '🇪🇺', name: 'Europe', color: '#4D96FF' },
  { flag: '🇦🇪', name: 'UAE', color: '#FF6B6B' },
];

// Enhanced Globe SVG with gold wireframe
const GlobeWireframe = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <radialGradient id="globeGrad" cx="45%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#1a2b5c" stopOpacity="0.95" />
        <stop offset="50%" stopColor="#0a1628" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#020916" stopOpacity="0.95" />
      </radialGradient>
      <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4AF37" />
        <stop offset="50%" stopColor="#F3E5AB" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
    </defs>
    
    {/* Base sphere */}
    <circle cx="200" cy="200" r="190" fill="url(#globeGrad)" />
    <circle cx="200" cy="200" r="190" fill="url(#globeGlow)" />
    
    {/* Latitude lines */}
    <g stroke="url(#goldLine)" strokeWidth="1.2" fill="none" opacity="0.5">
      <ellipse cx="200" cy="200" rx="160" ry="40" />
      <ellipse cx="200" cy="200" rx="138" ry="20" />
      <ellipse cx="200" cy="200" rx="138" ry="60" />
      <ellipse cx="200" cy="200" rx="80" ry="10" />
      <ellipse cx="200" cy="200" rx="80" ry="70" />
      <circle cx="200" cy="80" r="4" />
      <circle cx="200" cy="320" r="4" />
    </g>
    
    {/* Longitude lines */}
    <g stroke="url(#goldLine)" strokeWidth="1.2" fill="none" opacity="0.5">
      <ellipse cx="200" cy="200" rx="40" ry="160" />
      <ellipse cx="200" cy="200" rx="80" ry="160" />
      <ellipse cx="200" cy="200" rx="120" ry="160" />
      <ellipse cx="200" cy="200" rx="160" ry="160" />
    </g>
    
    {/* Outer ring */}
    <circle cx="200" cy="200" r="188" stroke="url(#goldLine)" strokeWidth="2" fill="none" opacity="0.3" />
    
    {/* Intersection dots */}
    <g fill="#D4AF37" opacity="0.6">
      <circle cx="200" cy="160" r="2" />
      <circle cx="200" cy="240" r="2" />
      <circle cx="160" cy="200" r="2" />
      <circle cx="240" cy="200" r="2" />
      <circle cx="138" cy="180" r="1.5" />
      <circle cx="262" cy="180" r="1.5" />
      <circle cx="138" cy="220" r="1.5" />
      <circle cx="262" cy="220" r="1.5" />
    </g>
    
    {/* Shine effect */}
    <ellipse cx="140" cy="120" rx="60" ry="35" fill="rgba(255,255,255,0.04)" transform="rotate(-30, 140, 120)" />
  </svg>
);

const Hero = () => {
  const yearsCount = useCounter(19, 2200);
  const successCount = useCounter(90, 2000);
  const casesCount = useCounter(2000, 2500);
  const countriesCount = useCounter(50, 1800);
  const [hoveredDest, setHoveredDest] = useState(null);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-[#020916]"
    >
      {/* ===== BACKGROUND AMBIENT GLOWS ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 bg-gradient-to-br from-[#D4AF37] to-transparent mix-blend-screen" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-[130px] opacity-15 bg-gradient-to-tr from-[#1a2b5c] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] opacity-10 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px]" />
        
        {/* Animated gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent animate-slide-line" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* ===== LEFT CONTENT COLUMN ===== */}
        <div className="text-center lg:text-left w-full lg:col-span-6 z-20">
          
          {/* Corporate Badge with sparkle */}
          <div className="inline-flex items-center gap-2 mb-5 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#D4AF37]/30 bg-[#04152d]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(214,175,55,0.05)] animate-fadeInUp">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="text-[9px] sm:text-[11px] font-bold text-gray-200 uppercase tracking-widest whitespace-nowrap">
              Trusted Since 2006
            </span>
            <Sparkles size={12} className="text-[#D4AF37] hidden sm:block" />
          </div>

          {/* Core Dynamic Heading – Enhanced */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-4 sm:mb-6 text-white tracking-tight animate-fadeInUp delay-100">
            <span className="block">Visa, Immigration</span>
            <span className="relative inline-block bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-[length:200%_auto] bg-clip-text text-transparent font-black animate-gradient-shift">
              & Study Abroad
            </span>
            <span className="block text-gray-400 text-2xl sm:text-4xl md:text-5xl font-medium mt-1 sm:mt-2 tracking-wide">
              Experts.
            </span>
          </h1>

          {/* Subheading Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 font-normal animate-fadeInUp delay-200">
            Empowering students, ambitious professionals, and families to transcend borders through impeccably tailored consultancy, corporate relocation, and international academic access paths.
          </p>

          {/* Action Buttons – Enhanced */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 w-full animate-fadeInUp delay-300">
            <a
              href="#consultation"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-gray-950 font-bold text-xs sm:text-sm rounded-full shadow-[0_4px_30px_rgba(214,175,55,0.25)] hover:shadow-[0_8px_50px_rgba(214,175,55,0.4)] hover:-translate-y-0.5 transition-all duration-300 no-underline tracking-wide uppercase overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                <span>Start Your Journey</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#services"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300 no-underline"
            >
              <span>Explore Services</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Enhanced Trust Signals */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 pt-4 sm:pt-6 border-t border-white/10 animate-fadeInUp delay-400">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-white">4.9/5</span>
              <span className="text-[9px] sm:text-xs text-gray-400">(200+ Reviews)</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-[#D4AF37]" />
              <span className="text-xs sm:text-sm font-medium text-white">2,000+</span>
              <span className="text-[9px] sm:text-xs text-gray-400">Happy Clients</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Shield size={14} className="text-[#D4AF37]" />
              <span className="text-[9px] sm:text-xs text-gray-400">Trusted Since 2006</span>
            </div>
          </div>

          {/* Stats Grid – Enhanced with icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10">
            {[
              { icon: <Award size={16} />, value: yearsCount, label: 'Years Track Record', suffix: '+' },
              { icon: <TrendingUp size={16} />, value: successCount, label: 'Success Velocity', suffix: '%' },
              { icon: <CheckCircle size={16} />, value: casesCount, label: 'Approved Portfolios', suffix: '+' },
              { icon: <Globe size={16} />, value: countriesCount, label: 'Global Accessways', suffix: '+' }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="group/stat p-3 sm:p-4 rounded-xl text-center border border-white/[0.03] bg-gradient-to-br from-white/[0.02] to-transparent hover:bg-white/[0.05] hover:border-[#D4AF37]/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-1.5 mb-1 text-[#D4AF37] opacity-60 group-hover/stat:opacity-100 transition-opacity">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-white to-gray-300 group-hover/stat:from-[#D4AF37] group-hover/stat:to-[#F3E5AB] bg-clip-text text-transparent transition-colors duration-300">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[8px] sm:text-[10px] font-bold tracking-wider uppercase text-gray-500 group-hover/stat:text-gray-400 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT CONTENT COLUMN – Dynamic Globe + Cards ===== */}
        <div className="w-full lg:col-span-6 flex flex-col items-center justify-center relative py-6 lg:py-8 z-10">
          
          {/* Globe Container – slightly smaller */}
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            
            {/* Rotating decorative rings */}
            <div className="absolute inset-0 rounded-full border border-[#D4AF37]/10 pointer-events-none animate-spin-slow" style={{ animationDuration: '50s' }} />
            <div className="absolute inset-[10%] rounded-full border border-[#D4AF37]/5 pointer-events-none animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            <div className="absolute inset-[25%] rounded-full border border-dashed border-[#D4AF37]/5 pointer-events-none animate-spin-slow" style={{ animationDuration: '20s' }} />

            {/* Core Globe – smaller */}
            <div className="relative w-[70%] max-w-[260px] aspect-square rounded-full shadow-[0_0_80px_rgba(212,175,55,0.2)]">
              <div className="absolute -inset-3 rounded-full border-2 border-[#D4AF37]/20 animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute -inset-6 rounded-full border border-[#D4AF37]/10 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#0B1D3A] via-[#1A2D50] to-[#081326]">
                <div className="absolute inset-0 animate-spin-globe" style={{ animationDuration: '30s' }}>
                  <GlobeWireframe />
                </div>
                {/* Depth overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-white/5" />
                <div className="absolute w-16 h-16 rounded-full bg-[#D4AF37]/10 blur-2xl top-8 right-8 animate-pulse" />
                <div className="absolute w-10 h-10 rounded-full bg-[#D4AF37]/5 blur-xl bottom-8 left-8 animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>

            {/* Floating destination cards – closer and larger */}
            <div className="absolute inset-0 pointer-events-none">
              {destinations.map((dest, i) => {
                // Reduced radius to bring cards closer (was 78 → now 60)
                const radius = 60;
                const angle = (i / destinations.length) * 360 - 60;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <div
                    key={i}
                    className="absolute pointer-events-auto"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={() => setHoveredDest(i)}
                    onMouseLeave={() => setHoveredDest(null)}
                  >
                    <div
                      className={`flex items-center gap-2 px-3 py-2 rounded-full bg-[#020916]/90 border backdrop-blur-md transition-all duration-300 ${
                        hoveredDest === i
                          ? 'border-[#D4AF37]/60 shadow-[0_0_30px_rgba(212,175,55,0.2)] scale-110'
                          : 'border-white/10 hover:border-[#D4AF37]/30 hover:scale-105'
                      }`}
                    >
                      {/* Larger flag */}
                      <span className="text-xl">{dest.flag}</span>
                      {/* Slightly larger country name */}
                      <span className="text-[11px] font-medium text-white whitespace-nowrap hidden sm:inline">
                        {dest.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border border-dashed border-[#D4AF37]/15 flex items-center justify-center mx-auto animate-spin-slow" style={{ animationDuration: '20s' }}>
                  <Globe size={20} className="text-[#D4AF37]/20" />
                </div>
                <div className="text-[8px] font-medium text-white/15 tracking-[0.3em] uppercase mt-2">
                  Global Network
                </div>
              </div>
            </div>
          </div>

          {/* Mobile destination strip – updated to match new sizes */}
          <div className="lg:hidden w-full overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide mt-4">
            <div className="flex gap-2 w-max">
              {destinations.map((dest, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-full bg-[#020916]/90 border border-white/10 backdrop-blur-md"
                >
                  <span className="text-xl">{dest.flag}</span>
                  <span className="text-[10px] font-medium text-white whitespace-nowrap">{dest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ===== ANIMATIONS ===== */}
      <style>{`
        /* Fade In Up */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        /* Gradient Shift */
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          animation: gradientShift 4s ease-in-out infinite;
          background-size: 200% auto;
        }

        /* Slide Line */
        @keyframes slideLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-line {
          animation: slideLine 8s linear infinite;
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
        @keyframes spinGlobe {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-globe {
          animation: spinGlobe 30s linear infinite;
        }

        /* Hide scrollbar */
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
