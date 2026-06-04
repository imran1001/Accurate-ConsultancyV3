import React from 'react';
import { MessageCircle, ChevronRight, Globe, Award, CheckCircle, Users, Star } from 'lucide-react';

const trustBadges = [
  { icon: Award,       label: '19+ Years',   sublabel: 'Experience'      },
  { icon: CheckCircle, label: '98%',         sublabel: 'Success Rate'    },
  { icon: Users,       label: '5,000+',      sublabel: 'Approved Cases'  },
  { icon: Globe,       label: '50+',         sublabel: 'Global Corridors'}
];

// High-fidelity dotted/particle style continent mesh
const DottedContinentsMap = () => (
  <svg
    className="w-full h-full opacity-70"
    viewBox="0 0 240 120"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#c9a55a" opacity="0.9">
      {/* North America */}
      <circle cx="25" cy="20" r="1" /><circle cx="35" cy="18" r="1.5" /><circle cx="45" cy="22" r="1" />
      <circle cx="20" cy="28" r="1.5" /><circle cx="30" cy="26" r="1" /><circle cx="40" cy="30" r="1.5" />
      <circle cx="50" cy="34" r="1" /><circle cx="35" cy="38" r="1.5" /><circle cx="45" cy="42" r="1" />
      
      {/* South America */}
      <circle cx="48" cy="55" r="1.5" /><circle cx="56" cy="58" r="1" /><circle cx="52" cy="68" r="1.5" />
      <circle cx="58" cy="74" r="1" /><circle cx="62" cy="84" r="1.5" /><circle cx="60" cy="94" r="1" />
      <circle cx="58" cy="104" r="1.5" />

      {/* Europe & UK */}
      <circle cx="98" cy="22" r="1.5" /><circle cx="104" cy="18" r="1" /><circle cx="112" cy="20" r="1.5" />
      <circle cx="94" cy="28" r="1" /><circle cx="102" cy="28" r="1.5" /><circle cx="110" cy="30" r="1" />
      
      {/* Africa */}
      <circle cx="102" cy="48" r="1.5" /><circle cx="112" cy="46" r="1" /><circle cx="122" cy="50" r="1.5" />
      <circle cx="106" cy="58" r="1" /><circle cx="116" cy="60" r="1.5" /><circle cx="124" cy="64" r="1" />
      <circle cx="112" cy="72" r="1.5" /><circle cx="118" cy="78" r="1" /><circle cx="120" cy="88" r="1.5" />

      {/* Asia */}
      <circle cx="128" cy="24" r="1" /><circle cx="138" cy="20" r="1.5" /><circle cx="148" cy="18" r="1" />
      <circle cx="158" cy="16" r="1.5" /><circle cx="168" cy="22" r="1" /><circle cx="178" cy="20" r="1.5" />
      <circle cx="134" cy="34" r="1.5" /><circle cx="144" cy="32" r="1" /><circle cx="154" cy="30" r="1.5" />
      <circle cx="164" cy="32" r="1" /><circle cx="174" cy="34" r="1.5" /><circle cx="184" cy="30" r="1" />
      <circle cx="140" cy="44" r="1.5" /><circle cx="150" cy="42" r="1" /><circle cx="160" cy="44" r="1.5" />
      <circle cx="170" cy="46" r="1" /><circle cx="180" cy="42" r="1.5" /><circle cx="190" cy="48" r="1" />

      {/* Australia */}
      <circle cx="180" cy="78" r="1.5" /><circle cx="190" cy="76" r="1" /><circle cx="200" cy="80" r="1.5" />
      <circle cx="184" cy="88" r="1" /><circle cx="194" cy="86" r="1.5" /><circle cx="190" cy="94" r="1" />
    </g>
  </svg>
);

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const countryFlags = [
    { code: 'us', name: 'USA', top: '15%', left: '8%', delay: '0s' },
    { code: 'gb', name: 'UK', top: '35%', left: '2%', delay: '1.2s' },
    { code: 'ca', name: 'Canada', top: '65%', left: '5%', delay: '2.4s' },
    { code: 'au', name: 'Australia', top: '85%', left: '15%', delay: '3.6s' },
    { code: 'fr', name: 'France', top: '50%', left: '-2%', delay: '4.8s' }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#010610]"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0d1d3a] via-[#010610] to-[#010610] opacity-80" />

      {/* ===== MASSIVE EBRYX-STYLE GLOBE ===== */}
      <div
        className="absolute z-0 pointer-events-none right-[-300px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] lg:right-[-400px] lg:w-[1200px] lg:h-[1200px] hidden md:block"
        style={{ animation: 'globeFadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
      >
        {/* Core Glow */}
        <div className="absolute inset-20 rounded-full bg-blue-900/20 blur-[100px]" />

        {/* Orbiting Flags Container */}
        <div className="absolute inset-0" style={{ animation: 'slowOrbitRotate 60s linear infinite' }}>
          {/* Inner Counter-Rotation for Flags to stay upright */}
          <div className="absolute inset-0" style={{ animation: 'slowOrbitCounterRotate 60s linear infinite' }}>
            {countryFlags.map((flag, idx) => (
              <div
                key={idx}
                className="absolute z-30 flex flex-col items-center justify-center"
                style={{
                  top: flag.top,
                  left: flag.left,
                  animation: 'flagHover 4s ease-in-out infinite',
                  animationDelay: flag.delay
                }}
              >
                <div 
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full p-[2px] bg-gradient-to-b from-[#c9a55a] via-[#f0c040] to-transparent shadow-[0_0_30px_rgba(201,165,90,0.3)] backdrop-blur-sm"
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0a1628] flex items-center justify-center border border-[#c9a55a]/20">
                    <img 
                      src={`https://flagcdn.com/w160/${flag.code}.png`}
                      alt={flag.name}
                      className="w-full h-full object-cover scale-[1.15]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center High-Tech Particle Sphere */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] rounded-full overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #0a1b38 0%, #030812 60%, #000000 100%)',
            border: '1px solid rgba(201,165,90,0.15)',
            boxShadow: 'inset -50px -50px 100px rgba(0,0,0,0.9), inset 30px 30px 80px rgba(59,130,246,0.1)',
          }}
        >
          {/* Panning Dotted Map */}
          <div 
            className="absolute inset-y-0 flex flex-row items-center mix-blend-screen"
            style={{ width: '200%', animation: 'panGlobalMap 45s linear infinite' }}
          >
            <div className="w-1/2 h-full"><DottedContinentsMap /></div>
            <div className="w-1/2 h-full"><DottedContinentsMap /></div>
          </div>

          {/* Grid Lines */}
          <svg className="absolute inset-0 w-full h-full mix-blend-screen opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[20, 40, 60, 80].map((y) => (
              <line key={`lat-${y}`} x1="0" y1={y} x2="100" y2={y} stroke="rgba(201,165,90,0.2)" strokeWidth="0.2" />
            ))}
            <path d="M50,0 Q20,50 50,100" fill="none" stroke="rgba(201,165,90,0.2)" strokeWidth="0.2" />
            <path d="M50,0 Q80,50 50,100" fill="none" stroke="rgba(201,165,90,0.2)" strokeWidth="0.2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(201,165,90,0.3)" strokeWidth="0.4" strokeDasharray="1,2" />
          </svg>

          {/* Volumetric Shadow Overlay */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_transparent_40%,_rgba(0,0,0,0.8)_80%,_#000_100%)] pointer-events-none" />
        </div>

        {/* Orbit Rings */}
        <div className="absolute inset-10 rounded-full border border-dashed border-[#c9a55a]/10 pointer-events-none" style={{ animation: 'slowOrbitRotate 120s linear infinite reverse' }} />
        <div className="absolute inset-24 rounded-full border border-dashed border-blue-500/10 pointer-events-none" style={{ animation: 'slowOrbitRotate 90s linear infinite' }} />
      </div>

      {/* ===== CONTENT CONTAINER ===== */}
      <div className="max-w-7xl mx-auto relative z-10 w-full lg:grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side Content */}
        <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left pt-10">
          
          <div className="mb-8 animate-fade-in-up">
            <img
              src="/logo.webp"
              alt="Accurate Consultancy"
              className="h-20 lg:h-28 w-auto drop-shadow-[0_0_25px_rgba(201,165,90,0.6)]"
              style={{ animation: 'logoFloat 4s ease-in-out infinite' }}
            />
          </div>

          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full mb-6 animate-fade-in-up delay-100 bg-[#c9a55a]/10 border border-[#c9a55a]/30 backdrop-blur-md">
            <Globe size={15} className="text-[#c9a55a]" />
            <span className="text-xs font-bold tracking-wider text-[#c9a55a] uppercase">
              Travel - Visa & Immigration - Business consultancy
            </span>
            <div className="animate-[spin_4s_linear_infinite]">
              <Star size={12} className="text-[#c9a55a]" fill="currentColor" />
            </div>
          </div>

          <h1 className="font-black text-white leading-tight mb-6 animate-fade-in-up delay-200 text-5xl lg:text-7xl tracking-tight">
            Navigate Your Journey to
            <span className="block mt-2 bg-gradient-to-r from-[#c9a55a] via-[#f0d060] to-[#c9a55a] bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              Global Success
            </span>
          </h1>

          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-in-up delay-300">
            Premium visa and immigration consultancy delivering seamless pathways to your dream destination with expert guidance every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 animate-fade-in-up delay-400">
            <button
              onClick={() => scrollToSection('consultation')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-[#c9a55a] to-[#f0c040] text-[#0a1628] hover:scale-105 transition-all shadow-[0_0_30px_rgba(201,165,90,0.4)] hover:shadow-[0_0_50px_rgba(201,165,90,0.6)]"
            >
              <MessageCircle size={20} />
              <span>Start Your Journey</span>
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-bold text-lg text-white border-2 border-white/20 bg-white/5 hover:bg-[#c9a55a]/10 hover:border-[#c9a55a]/50 backdrop-blur-md transition-all hover:scale-105"
            >
              <span>Explore Services</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto relative z-20 w-full mt-auto pb-10 animate-fade-in-up delay-500">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto lg:mx-0">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center bg-white/5 border border-[#c9a55a]/20 backdrop-blur-md hover:-translate-y-2 hover:bg-[#c9a55a]/10 hover:border-[#c9a55a]/40 transition-all duration-300 group"
            >
              <badge.icon size={32} className="mx-auto mb-4 text-[#c9a55a] group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-black text-white mb-1">{badge.label}</div>
              <div className="text-xs font-semibold text-white/60 uppercase tracking-widest">{badge.sublabel}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Footer */}
      <div className="absolute bottom-0 left-0 right-0 leading-none z-10 translate-y-[1px]">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[50px] lg:h-[70px]">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,70 L0,70 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Animations */}
      <style>{`
        .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.8s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes globeFadeIn {
          from { opacity: 0; transform: translate(100px, -50%) scale(0.9); }
          to { opacity: 1; transform: translate(0, -50%) scale(1); }
        }

        @keyframes slowOrbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes slowOrbitCounterRotate {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes flagHover {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }

        @keyframes panGlobalMap {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
