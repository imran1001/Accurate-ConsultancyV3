import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Star, Users, MapPin, Sparkles, Award, TrendingUp, CheckCircle } from 'lucide-react';

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

// Floating destination card data (now with Europe and UAE)
const destinationCards = [
  { flag: '🇨🇦', name: 'Canada', subtitle: 'Study • Work • PR', delay: 0, position: { top: '5%', left: '0%', lg: '-10%' } },
  { flag: '🇬🇧', name: 'United Kingdom', subtitle: 'Student • Visitor', delay: 0.1, position: { top: '15%', right: '0%', lg: '-5%' } },
  { flag: '🇦🇺', name: 'Australia', subtitle: 'Skilled • Study', delay: 0.2, position: { bottom: '20%', left: '5%', lg: '-5%' } },
  { flag: '🇺🇸', name: 'United States', subtitle: 'F1 • B1/B2', delay: 0.3, position: { bottom: '5%', right: '5%', lg: '0%' } },
  { flag: '🇪🇺', name: 'Europe', subtitle: 'Schengen • Work', delay: 0.15, position: { top: '45%', left: '-8%', lg: '-12%' } },
  { flag: '🇦🇪', name: 'UAE', subtitle: 'Golden Visa • Work', delay: 0.25, position: { bottom: '45%', right: '-8%', lg: '-12%' } },
];

const Hero = () => {
  const yearsExp = useCounter(19, 2200);
  const successRate = useCounter(90, 2000);
  const approvedCases = useCounter(2000, 2500);
  const corridors = useCounter(50, 1800);

  return (
    <section className="relative min-h-screen bg-[#081326] text-white overflow-hidden flex flex-col justify-center pt-24 pb-16">
      
      {/* Advanced Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#0B1D3A_0%,#081326_70%)] pointer-events-none" />
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[20%] w-[400px] h-[400px] rounded-full bg-[#3b4fca]/10 blur-[100px] pointer-events-none" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 z-10 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Typography Column */}
        <div className="lg:col-span-6 flex flex-col justify-center z-20">
          
          {/* Enhanced Badge with gold sparkle */}
          <div className="inline-flex items-center space-x-2.5 w-max px-5 py-2.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md mb-8 animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </span>
            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest">
              Travel • Visa • Immigration • Business
            </span>
            <Sparkles size={14} className="text-[#D4AF37]" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in-up delay-100">
            Trusted Visa & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] animate-text-shimmer">
              Immigration Consultants
            </span>
          </h1>

          <p className="text-slate-300 text-lg font-normal leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-200">
            Premium consultancy delivering seamless pathways to your dream destinations. We help professionals, families, and businesses secure visas and global opportunities with uncompromising expertise.
          </p>

          {/* CTAs with enhanced hover */}
          <div className="flex flex-wrap items-center gap-4 mb-12 animate-fade-in-up delay-300">
            <a href="#consultation" className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#081326] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] shadow-[0_4px_25px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)]">
              Book Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href="#services" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30">
              Explore Services
            </a>
          </div>

          {/* Trust Indicators - Enhanced */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 max-w-xl animate-fade-in-up delay-400">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold tracking-wider text-slate-300">4.9/5 Client Rating</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:block" />
            <span className="text-xs font-medium text-slate-400">Trusted Since 2006</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:block" />
            <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
              <CheckCircle size={12} className="text-[#D4AF37]" /> 90% Success
            </span>
          </div>
        </div>

        {/* Right Graphical Space (Enhanced Globe + Cards) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[550px] mt-12 lg:mt-0">
          
          {/* Rotating decorative rings */}
          <div className="absolute w-[480px] h-[480px] rounded-full border border-[#D4AF37]/10 pointer-events-none animate-spin-slow" style={{ animationDuration: '40s' }} />
          <div className="absolute w-[380px] h-[380px] rounded-full border border-white/5 pointer-events-none animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
          <div className="absolute w-[280px] h-[280px] rounded-full border border-[#D4AF37]/5 pointer-events-none animate-spin-slow" style={{ animationDuration: '20s' }} />
          
          {/* Central Golden Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

          {/* Core Globe Element */}
          <div className="relative w-64 h-64 rounded-full bg-gradient-to-tr from-[#081326] via-[#0B1D3A] to-[#122A54] shadow-[0_0_60px_rgba(212,175,55,0.15)] border border-white/10 flex items-center justify-center overflow-hidden group hover:shadow-[0_0_80px_rgba(212,175,55,0.25)] transition-all duration-700">
            <Globe size={100} className="text-[#D4AF37] opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
            <div className="absolute top-0 inset-x-0 h-[50%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            {/* Pulsing dot */}
            <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37] animate-ping opacity-70" style={{ top: '30%', right: '25%' }} />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping opacity-70" style={{ bottom: '20%', left: '30%' }} />
          </div>

          {/* Floating Destination Cards - Now with Europe and UAE */}
          {destinationCards.map((card, idx) => (
            <div
              key={idx}
              className={`absolute p-4 rounded-2xl bg-[#081326]/90 border border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/30 transition-all duration-500 hover:scale-105 group animate-bounce-soft`}
              style={{
                top: card.position.top,
                left: card.position.left,
                right: card.position.right,
                bottom: card.position.bottom,
                animationDelay: `${card.delay}s`,
                // Responsive adjustments
                ...(card.position.lg && { '--lg-left': card.position.lg, '--lg-right': card.position.lg }),
              }}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{card.flag}</div>
                <div>
                  <h3 className="text-white font-bold text-base leading-tight group-hover:text-[#D4AF37] transition-colors">{card.name}</h3>
                  <p className="text-slate-400 text-[11px] mt-1">{card.subtitle}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Decorative small label */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-medium text-white/20 tracking-[0.3em] uppercase">
            Global Destinations
          </div>
        </div>
      </div>

      {/* Institutional Statistics Bar (Enhanced) */}
      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 z-20 mt-16 lg:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {[
            { val: yearsExp, label: 'Years Experience', suffix: '+', icon: <Award size={18} className="text-[#D4AF37]" /> },
            { val: successRate, label: 'Success Rate', suffix: '%', icon: <TrendingUp size={18} className="text-[#D4AF37]" /> },
            { val: approvedCases, label: 'Approved Cases', suffix: '+', icon: <Users size={18} className="text-[#D4AF37]" /> },
            { val: corridors, label: 'Global Corridors', suffix: '+', icon: <Globe size={18} className="text-[#D4AF37]" /> },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-[#0B1D3A]/50 border border-white/5 backdrop-blur-sm relative overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300 text-center md:text-left hover:bg-[#0B1D3A]/70 hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)]"
            >
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="opacity-60 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-black text-[#D4AF37] group-hover:scale-105 transition-transform origin-left">
                  {stat.val}{stat.suffix}
                </div>
              </div>
              <div className="text-xs lg:text-sm font-medium text-slate-400 tracking-wide mt-2 uppercase group-hover:text-slate-300 transition-colors">
                {stat.label}
              </div>
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-500 w-0 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style>{`
        @keyframes bounceSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-soft {
          animation: bounceSoft 4.5s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: textShimmer 3s ease-in-out infinite;
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 40s linear infinite;
        }
        /* Responsive tweaks for floating cards */
        @media (min-width: 1024px) {
          [style*="--lg-left"] {
            left: var(--lg-left);
            right: auto;
          }
          [style*="--lg-right"] {
            right: var(--lg-right);
            left: auto;
          }
        }
        @media (max-width: 1024px) {
          .absolute {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            margin-bottom: 0.5rem;
          }
          .lg\\:col-span-6 .flex-wrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .lg\\:col-span-6 .absolute {
            position: relative !important;
          }
          .lg\\:col-span-6 .relative {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            min-height: auto;
            padding: 16px 0;
          }
          /* We'll move cards into a flex container on mobile */
          .lg\\:col-span-6 .flex-col {
            flex-direction: column;
            align-items: center;
          }
          .lg\\:col-span-6 .relative .absolute {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            transform: none !important;
          }
          .lg\\:col-span-6 .relative .absolute .flex {
            flex-direction: row;
          }
          /* Fix: wrap cards in a flex container for mobile */
          .lg\\:col-span-6 .relative {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            min-height: auto;
            padding: 16px 0;
          }
          .lg\\:col-span-6 .relative .absolute {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            transform: none !important;
            width: auto;
            margin: 0;
          }
          .lg\\:col-span-6 .relative .absolute .flex {
            flex-direction: row;
          }
          /* Hide the rotating rings on mobile */
          .lg\\:col-span-6 .absolute.w-\\[480px\\],
          .lg\\:col-span-6 .absolute.w-\\[380px\\],
          .lg\\:col-span-6 .absolute.w-\\[280px\\] {
            display: none;
          }
          /* Adjust central globe size */
          .lg\\:col-span-6 .relative.w-64 {
            width: 140px;
            height: 140px;
          }
          .lg\\:col-span-6 .relative.w-64 svg {
            width: 60px;
            height: 60px;
          }
          .lg\\:col-span-6 .relative.w-64 .absolute.w-2 {
            display: none;
          }
        }
        /* Ensure the cards wrap on mobile */
        .lg\\:col-span-6 .relative .absolute {
          position: relative !important;
          top: auto !important;
          left: auto !important;
          right: auto !important;
          bottom: auto !important;
          transform: none !important;
          width: auto;
          margin: 0;
        }
        .lg\\:col-span-6 .relative .absolute .flex {
          flex-direction: row;
        }
        /* Override absolute positioning for mobile */
        @media (max-width: 1024px) {
          .lg\\:col-span-6 .relative {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            min-height: auto;
            padding: 20px 0;
          }
          .lg\\:col-span-6 .relative .absolute {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            bottom: auto !important;
            transform: none !important;
            width: auto;
            margin: 0;
          }
          .lg\\:col-span-6 .relative .absolute .flex {
            flex-direction: row;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
