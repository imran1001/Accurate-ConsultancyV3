import React, { useState, useEffect } from 'react';

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

const Hero = () => {
  const yearsCount = useCounter(19, 2000);
  const successCount = useCounter(90, 2000);
  const casesCount = useCounter(2000, 2000);
  const countriesCount = useCounter(50, 2000);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 sm:pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-[#020916]"
    >
      {/* ===== BACKGROUND AMBIENT GLOWS ===== */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 pointer-events-none bg-gradient-to-br from-[#D4AF37] to-transparent mix-blend-screen" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 pointer-events-none bg-gradient-to-tr from-[#1a2b4c] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        
        {/* ===== LEFT CONTENT COLUMN ===== */}
        <div className="text-left w-full lg:col-span-6 z-20">
          
          {/* Corporate Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#04152d]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(214,175,55,0.05)] animate-fadeInUp">
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

          {/* Subheading Description */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-xl font-normal">
            Empowering students, ambitious professionals, and families to transcend borders through impeccably tailored consultancy, corporate relocation, and international academic access paths.
          </p>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <a
              href="#consultation"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-gray-950 font-bold text-sm rounded-md shadow-[0_4px_30px_rgba(214,175,55,0.2)] hover:shadow-[0_4px_40px_rgba(214,175,55,0.4)] hover:-translate-y-0.5 transition-all duration-300 no-underline tracking-wide uppercase"
            >
              <span>Schedule a Confidential Session</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/5 pt-8">
            {[
              { value: yearsCount, label: 'Years Track Record', suffix: '+' },
              { value: successCount, label: 'Success Velocity', suffix: '%' },
              { value: casesCount, label: 'Approved Portfolios', suffix: '+' },
              { value: countriesCount, label: 'Global Accessways', suffix: '+' }
            ].map((stat, i) => (
              <div key={i} className="group/card p-4 rounded-lg border border-white/[0.03] bg-gradient-to-br from-white/[0.02] to-transparent hover:bg-white/[0.05] hover:border-[#D4AF37]/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-black mb-1 bg-gradient-to-r from-white to-gray-300 group-hover/card:from-[#D4AF37] group-hover/card:to-[#F3E5AB] bg-clip-text text-transparent transition-colors duration-300">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-500 group-hover/card:text-gray-400 text-[10px] font-bold tracking-wider uppercase transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT CONTENT COLUMN (Image) ===== */}
        <div className="w-full lg:col-span-6 flex items-center justify-center relative py-8 z-10">
          <div className="relative w-full h-[360px] sm:h-[440px] md:h-[520px] lg:h-[640px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#D4AF37]/30 group hover:border-[#D4AF37]/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            
            <img
              src="/imageshero-1.webp"
              alt="Muhammad Imran Malik Consulting Client"
              className="w-full h-full object-cover object-[72%_15%] transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />

            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#020916] blur-md pointer-events-none z-10 opacity-95" />
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] z-20" />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
