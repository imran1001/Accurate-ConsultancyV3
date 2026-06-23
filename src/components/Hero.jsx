import React, { useState, useEffect } from 'react';
import mdPortrait from "../assets/managing-director-visa-portrait.jpg";

// Optimized Counter Hook
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
      if (progress < 1) requestAnimationFrame(animate);
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);

  return count;
};

function CounterStat({ value, suffix, label, delay }) {
  const count = useCounter(value, 2000);
  return (
    <div 
      className="group/card p-4 rounded-lg border border-white/[0.03] bg-gradient-to-br from-white/[0.02] to-transparent hover:bg-white/[0.05] hover:border-[#D4AF37]/20 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-2xl sm:text-3xl font-black mb-1 bg-gradient-to-r from-white to-gray-300 group-hover/card:from-[#D4AF37] group-hover/card:to-[#F3E5AB] bg-clip-text text-transparent transition-colors duration-300">
        {count}{suffix}
      </div>
      <div className="text-gray-500 group-hover/card:text-gray-400 text-[10px] font-bold tracking-wider uppercase transition-colors duration-300">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const stats = [
    { value: 19, label: 'Years Track Record', suffix: '+' },
    { value: 90, label: 'Success Velocity', suffix: '%' },
    { value: 2000, label: 'Approved Portfolios', suffix: '+' },
    { value: 50, label: 'Global Accessways', suffix: '+' }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 sm:pt-44 lg:pt-48 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-[#020916]"
    >
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 pointer-events-none bg-gradient-to-br from-[#D4AF37] to-transparent mix-blend-screen" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 pointer-events-none bg-gradient-to-tr from-[#1a2b4c] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT CONTENT COLUMN */}
        <div className="text-left w-full lg:col-span-5 z-20 animate-fade-in-up">
          
          {/* Corporate Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#04152d]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(214,175,55,0.05)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="text-[11px] font-bold text-gray-200 uppercase tracking-widest">
              Trusted Since 2006 • Visa & Immigration Excellence
            </span>
          </div>

          {/* Core Dynamic Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 text-white tracking-tight">
            Visa, Immigration <br className="hidden sm:inline" />
            <span className="relative mt-1 inline-block bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] bg-[length:200%_auto] bg-clip-text text-transparent font-black">
              & Study Abroad
            </span>
            <span className="block text-gray-400 text-3xl sm:text-4xl md:text-5xl font-medium mt-2 tracking-wide">
              Experts.
            </span>
          </h1>

          {/* Description Text */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-xl font-normal">
            Empowering students, ambitious professionals, and families to transcend borders through impeccably tailored consultancy, corporate relocation, and international academic access paths.
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <a
              href="#consultation"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-gray-950 font-black text-xs rounded-sm shadow-[0_4px_30px_rgba(214,175,55,0.25)] hover:shadow-[0_4px_45px_rgba(214,175,55,0.5)] hover:-translate-y-0.5 transition-all duration-300 no-underline tracking-widest uppercase overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer block" />
              <span className="relative flex items-center gap-2">
                Schedule a Confidential Session
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/5 pt-8">
            {stats.map((stat, i) => (
              <CounterStat key={stat.label} {...stat} delay={i * 100} />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT COLUMN */}
        <div className="w-full lg:col-span-7 flex items-center justify-center relative py-8 z-10 animate-scale-in">
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[580px] lg:h-[720px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#D4AF37]/30 group hover:border-[#D4AF37]/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            
            {/* Cinematic Portrait Asset */}
            <img
              src={mdPortrait}
              alt="Accurate Consultancy Leadership Overview"
              className="w-full h-full object-cover object-[72%_15%] hover-zoom"
            />

            {/* Floating Live Approvals Badge */}
            <div className="absolute bottom-6 left-6 z-20 bg-gray-950/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl max-w-xs hidden sm:block animate-fade-in-up [animation-delay:400ms] animation-fill-both">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-[11px] font-bold tracking-wider uppercase text-gray-200">Instant Verification</p>
              </div>
              <p className="text-xs text-gray-400 mt-1 font-medium">Australian Student Visa Approved successfully.</p>
            </div>

            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#020916] blur-md pointer-events-none z-10 opacity-95" />
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] z-20" />
          </div>
        </div>

      </div>
    </section>
  );
}
