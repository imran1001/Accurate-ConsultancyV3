import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Star, Users } from 'lucide-react';

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
  // Initialize the counter variables
  const yearsExp = useCounter(19, 2200);
  const successRate = useCounter(90, 2000);
  const approvedCases = useCounter(2000, 2500);
  const corridors = useCounter(50, 1800);

  return (
    <section className="relative min-h-screen bg-[#081326] text-white overflow-hidden flex flex-col justify-center pt-24 pb-16">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#0B1D3A_0%,#081326_70%)] pointer-events-none" />
      <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 z-10 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Typography Column */}
        <div className="lg:col-span-6 flex flex-col justify-center z-20">
          
          {/* Standardized Core Service Badge */}
          <div className="inline-flex items-center space-x-2 w-max px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest">
              Travel - Visa & Immigration - Business consultancy
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Trusted Visa & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
              Immigration Consultants
            </span>
          </h1>

          <p className="text-slate-300 text-lg font-normal leading-relaxed max-w-xl mb-10">
            Premium consultancy delivering seamless pathways to your dream destinations. We help professionals, families, and businesses secure visas and global opportunities with uncompromising expertise.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a href="#consultation" className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#081326] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] shadow-[0_4px_20px_rgba(212,175,55,0.2)] transition-all duration-300 hover:scale-[1.03]">
              Book Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10">
              Explore Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 max-w-xl">
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

        {/* Right Graphical Space (Hybrid Globe + Cards) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[500px] mt-12 lg:mt-0">
          
          {/* Abstract Cyber/Gold Globe Background */}
          <div className="absolute w-[440px] h-[440px] rounded-full border border-[#D4AF37]/20 pointer-events-none animate-[spin_50s_linear_infinite]" />
          <div className="absolute w-[340px] h-[340px] rounded-full border border-white/5 pointer-events-none animate-[spin_35s_linear_infinite_reverse]" />
          
          {/* Inner Glowing Node */}
          <div className="relative w-64 h-64 rounded-full bg-gradient-to-tr from-[#081326] via-[#0B1D3A] to-[#122A54] shadow-[0_0_50px_rgba(212,175,55,0.15)] border border-white/10 flex items-center justify-center overflow-hidden">
            <Globe size={100} className="text-[#D4AF37] opacity-20" />
            <div className="absolute top-0 inset-x-0 h-[50%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          </div>

          {/* Floating Destination Cards */}
          <div className="absolute top-[5%] left-[0%] lg:-left-[10%] p-4 rounded-2xl bg-[#081326]/80 border border-white/10 backdrop-blur-xl shadow-2xl animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🇨🇦</div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">Canada</h3>
                <p className="text-slate-400 text-[11px] mt-1">Study Visa • Work • PR</p>
              </div>
            </div>
          </div>

          <div className="absolute top-[15%] right-[0%] lg:-right-[5%] p-4 rounded-2xl bg-[#081326]/80 border border-white/10 backdrop-blur-xl shadow-2xl animate-bounce-slow delay-100">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🇬🇧</div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">United Kingdom</h3>
                <p className="text-slate-400 text-[11px] mt-1">Student • Visitor Visa</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[20%] left-[5%] lg:-left-[5%] p-4 rounded-2xl bg-[#081326]/80 border border-white/10 backdrop-blur-xl shadow-2xl animate-bounce-slow delay-200">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🇦🇺</div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">Australia</h3>
                <p className="text-slate-400 text-[11px] mt-1">Skilled Migration • Study</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[5%] right-[5%] lg:right-[0%] p-4 rounded-2xl bg-[#081326]/80 border border-white/10 backdrop-blur-xl shadow-2xl animate-bounce-slow delay-300">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🇺🇸</div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">United States</h3>
                <p className="text-slate-400 text-[11px] mt-1">F1 Visa • B1/B2</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Institutional Statistics Bar (Locked to bottom) */}
      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 z-20 mt-16 lg:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {[
            { val: yearsExp, label: 'Years Experience', suffix: '+' },
            { val: successRate, label: 'Success Rate', suffix: '%' },
            { val: approvedCases, label: 'Approved Cases', suffix: '+' },
            { val: corridors, label: 'Global Corridors', suffix: '+' },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0B1D3A]/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-300 text-center md:text-left">
              <div className="text-3xl lg:text-4xl font-black text-[#D4AF37]">
                {stat.val}{stat.suffix}
              </div>
              <div className="text-xs lg:text-sm font-medium text-slate-400 tracking-wide mt-2 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Micro-Animations */}
      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow { animation: bounceSlow 5s ease-in-out infinite; }
        .delay-100 { animation-delay: 1s; }
        .delay-200 { animation-delay: 2s; }
        .delay-300 { animation-delay: 3s; }
      `}</style>
    </section>
  );
};

export default Hero;
