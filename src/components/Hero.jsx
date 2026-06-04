import React from 'react';
import { MessageCircle, ChevronRight, Globe, Award, CheckCircle, Users, Star } from 'lucide-react';

const trustBadges = [
  { icon: Award,       label: '19+ Years',  sublabel: 'Experience'      },
  { icon: CheckCircle, label: '98%',         sublabel: 'Success Rate'    },
  { icon: Users,       label: '5,000+',      sublabel: 'Approved Cases'  },
  { icon: Globe,       label: '50+',         sublabel: 'Global Corridors'}
];

// High-fidelity dotted/particle style continent mesh matching the premium reference image style
const DottedContinentsMap = () => (
  <svg
    className="w-full h-full opacity-75"
    viewBox="0 0 240 120"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#c9a55a" opacity="0.85">
      {/* North America Dotted Mesh Mapping */}
      <circle cx="25" cy="20" r="1.5" /><circle cx="35" cy="18" r="1.5" /><circle cx="45" cy="22" r="1.5" />
      <circle cx="20" cy="28" r="1.5" /><circle cx="30" cy="26" r="1.5" /><circle cx="40" cy="30" r="1.5" />
      <circle cx="50" cy="34" r="1.5" /><circle cx="35" cy="38" r="1.5" /><circle cx="45" cy="42" r="1.5" />
      
      {/* South America Dotted Mesh Mapping */}
      <circle cx="48" cy="55" r="1.5" /><circle cx="56" cy="58" r="1.5" /><circle cx="52" cy="68" r="1.5" />
      <circle cx="58" cy="74" r="1.5" /><circle cx="62" cy="84" r="1.5" /><circle cx="60" cy="94" r="1.5" />
      <circle cx="58" cy="104" r="1.5" />

      {/* Europe & United Kingdom Mesh Mapping */}
      <circle cx="98" cy="22" r="1.5" /><circle cx="104" cy="18" r="1.5" /><circle cx="112" cy="20" r="1.5" />
      <circle cx="94" cy="28" r="1.5" /><circle cx="102" cy="28" r="1.5" /><circle cx="110" cy="30" r="1.5" />
      
      {/* Africa Mesh Mapping */}
      <circle cx="102" cy="48" r="1.5" /><circle cx="112" cy="46" r="1.5" /><circle cx="122" cy="50" r="1.5" />
      <circle cx="106" cy="58" r="1.5" /><circle cx="116" cy="60" r="1.5" /><circle cx="124" cy="64" r="1.5" />
      <circle cx="112" cy="72" r="1.5" /><circle cx="118" cy="78" r="1.5" /><circle cx="120" cy="88" r="1.5" />

      {/* Asia & Middle East Mesh Mapping */}
      <circle cx="128" cy="24" r="1.5" /><circle cx="138" cy="20" r="1.5" /><circle cx="148" cy="18" r="1.5" />
      <circle cx="158" cy="16" r="1.5" /><circle cx="168" cy="22" r="1.5" /><circle cx="178" cy="20" r="1.5" />
      <circle cx="134" cy="34" r="1.5" /><circle cx="144" cy="32" r="1.5" /><circle cx="154" cy="30" r="1.5" />
      <circle cx="164" cy="32" r="1.5" /><circle cx="174" cy="34" r="1.5" /><circle cx="184" cy="30" r="1.5" />
      <circle cx="140" cy="44" r="1.5" /><circle cx="150" cy="42" r="1.5" /><circle cx="160" cy="44" r="1.5" />
      <circle cx="170" cy="46" r="1.5" /><circle cx="180" cy="42" r="1.5" /><circle cx="190" cy="48" r="1.5" />

      {/* Australia Mesh Mapping */}
      <circle cx="180" cy="78" r="1.5" /><circle cx="190" cy="76" r="1.5" /><circle cx="200" cy="80" r="1.5" />
      <circle cx="184" cy="88" r="1.5" /><circle cx="194" cy="86" r="1.5" /><circle cx="190" cy="94" r="1.5" />
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

  // High-resolution premium country flag configuration matching requested channels
  const countryFlags = [
    { code: 'us', name: 'USA', top: '10%', left: '15%', delay: '0s' },
    { code: 'gb', name: 'UK', top: '22%', left: '75%', delay: '1.2s' },
    { code: 'ca', name: 'Canada', top: '70%', left: '12%', delay: '2.4s' },
    { code: 'au', name: 'Australia', top: '80%', left: '68%', delay: '3.6s' },
    { code: 'fr', name: 'France', top: '48%', left: '85%', delay: '4.8s' }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #010610 0%, #0a1628 35%, #0d1d3a 65%, #160d50 100%)'
      }}
    >
      {/* ===== MASSIVE HIGH-TECH PARTICLE GLOBE FROM EBRYX REFERENCE ===== */}
      <div
        className="absolute -right-32 bottom-4 lg:top-1/2 lg:-translate-y-1/2 w-[580px] h-[580px] pointer-events-none hidden lg:block"
        style={{
          animation: 'globeFadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Deep Field Atmospheric Glow Core */}
        <div className="absolute inset-10 rounded-full bg-radial from-blue-600/20 via-indigo-900/10 to-transparent blur-3xl" />

        {/* Outer Orbit Rotation System carrying the flags */}
        <div className="absolute inset-0 select-none">
          {countryFlags.map((flag, idx) => (
            <div
              key={idx}
              className="absolute z-30 flex flex-col items-center justify-center group"
              style={{
                top: flag.top,
                left: flag.left,
                animation: 'floatingOrbitBadge 6s ease-in-out infinite',
                animationDelay: flag.delay
              }}
            >
              {/* Premium Flag Circular Token Container */}
              <div 
                className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-b from-[#c9a55a] via-[#f0c040] to-[#0a1628] shadow-[0_0_25px_rgba(201,165,90,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(201,165,90,0.7)]"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a1628] flex items-center justify-center">
                  <img 
                    src={`https://flagcdn.com/w160/${flag.code}.png`}
                    alt={flag.name}
                    className="w-full h-full object-cover scale-105"
                  />
                </div>
              </div>
              {/* Subtle Elegant Mini Label text */}
              <span className="mt-1.5 text-[10px] font-bold tracking-widest text-white/80 bg-[#0a1628]/90 px-2 py-0.5 rounded-md border border-[#c9a55a]/30 uppercase">
                {flag.name}
              </span>
            </div>
          ))}

          {/* Center High-Tech Particle Mesh Globe Sphere */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #0d2247 0%, #040c1a 65%, #010308 100%)',
              border: '2px solid rgba(201,165,90,0.3)',
              boxShadow: '0 0 90px rgba(59,130,246,0.25), 0 0 50px rgba(201,165,90,0.2), inset -30px -30px 60px rgba(0,0,0,0.95), inset 20px 20px 50px rgba(201,165,90,0.15)',
            }}
          >
            {/* Infinite Horizontal Panning Dotted Continent Matrices */}
            <div 
              className="absolute inset-y-0 flex flex-row items-center mix-blend-screen"
              style={{
                width: '200%',
                animation: 'panGlobalMap 35s linear infinite'
              }}
            >
              <div className="w-1/2 h-full"><DottedContinentsMap /></div>
              <div className="w-1/2 h-full"><DottedContinentsMap /></div>
            </div>

            {/* Matrix Digital Lat/Long Coordinates Ring Elements Overlay */}
            <svg
              className="absolute inset-0 w-full h-full mix-blend-screen opacity-40 pointer-events-none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Spherical Latitudes */}
              {[15, 30, 45, 60, 75].map((y) => (
                <line
                  key={`lat-${y}`}
                  x1="0" y1={y} x2="100" y2={y}
                  stroke="rgba(201,165,90,0.2)" strokeWidth="0.3"
                />
              ))}
              {/* Complex Dimensional Longitudinal Vector Paths */}
              <path d="M50,0 Q10,50 50,100" fill="none" stroke="rgba(201,165,90,0.2)" strokeWidth="0.3" />
              <path d="M50,0 Q30,50 50,100" fill="none" stroke="rgba(201,165,90,0.2)" strokeWidth="0.3" />
              <path d="M50,0 Q70,50 50,100" fill="none" stroke="rgba(201,165,90,0.2)" strokeWidth="0.3" />
              <path d="M50,0 Q90,50 50,100" fill="none" stroke="rgba(201,165,90,0.2)" strokeWidth="0.3" />
              
              {/* Main Equator Marker Line */}
              <line
                x1="0" y1="50" x2="100" y2="50"
                stroke="rgba(201,165,90,0.4)" strokeWidth="0.6" strokeDasharray="1,2"
              />
            </svg>

            {/* Perfect Deep-Shadow Sphere Realism Volumetric Layer */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 30% 30%, transparent 35%, rgba(4,12,26,0.2) 60%, rgba(1,3,8,0.95) 100%)'
              }}
            />
          </div>
        </div>

        {/* External High-Tech Floating Aura Ring Frame */}
        <div
          className="absolute inset-4 rounded-full pointer-events-none"
          style={{
            border: '1px dashed rgba(201,165,90,0.15)',
            animation: 'rotateOrbit 60s linear infinite'
          }}
        />
      </div>

      {/* Left Ambient Radial Soft Blur Backdrop */}
      <div
        className="absolute top-10 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,165,90,0.12), transparent)' }}
      />

      {/* ===== CONTENT CONTAINER ===== */}
      <div className="max-w-6xl mx-auto relative z-10 w-full text-center lg:text-left lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        
        {/* Left Side Branding copy stack */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Logo with Float Animation */}
          <div className="flex justify-center lg:justify-start mb-8 animate-fade-in-up">
            <img
              src="/logo.webp"
              alt="Accurate Consultancy"
              width="220"
              height="120"
              style={{
                height: 'clamp(70px, 10vw, 130px)',
                width: 'auto',
                filter: 'drop-shadow(0 0 25px rgba(201,165,90,0.8)) drop-shadow(0 0 50px rgba(201,165,90,0.4)) brightness(1.1)',
                animation: 'logoFloat 4s ease-in-out infinite'
              }}
            />
          </div>

          {/* Badge with Rotating Star */}
          <div
            className="inline-flex items-center space-x-2 px-5 py-2 rounded-full mb-8 animate-fade-in-up delay-100"
            style={{
              background: 'rgba(201,165,90,0.08)',
              border: '1px solid rgba(201,165,90,0.35)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Globe size={15} style={{ color: '#c9a55a' }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#c9a55a' }}>
              Your Global Mobility Partner
            </span>
            <div style={{ animation: 'starRotate 3s linear infinite' }}>
              <Star size={12} fill="#c9a55a" style={{ color: '#c9a55a' }} />
            </div>
          </div>

          {/* Headline */}
          <div className="animate-fade-in-up delay-200">
            <h1
              className="font-black text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)', letterSpacing: '-0.02em' }}
            >
              Navigate Your Journey to
              <span
                className="block mt-1"
                style={{
                  background: 'linear-gradient(90deg, #b8872a 0%, #f0d060 40%, #e8b830 70%, #c9a55a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 100%',
                  animation: 'textShimmer 3s linear infinite'
                }}
              >
                Global Success
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="text-gray-300 leading-relaxed mb-10 animate-fade-in-up delay-300"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '600px', lineHeight: 1.8 }}
          >
            Premium visa and immigration consultancy delivering seamless pathways
            to your dream destination with expert guidance every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16 animate-fade-in-up delay-400">
            <button
              onClick={() => scrollToSection('consultation')}
              aria-label="Start your immigration journey"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #c9a55a, #f0c040, #c9a55a)',
                color: '#0a1628',
                boxShadow: '0 0 40px rgba(201,165,90,0.5)'
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 60px rgba(201,165,90,0.7)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(201,165,90,0.5)'; }}
            >
              <MessageCircle size={20} />
              <span>Start Your Journey</span>
            </button>

            <button
              onClick={() => scrollToSection('services')}
              aria-label="Explore our immigration services"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-bold text-lg text-white transition-all duration-300 hover:scale-105"
              style={{
                border: '2px solid rgba(255,255,255,0.25)',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,165,90,0.6)';
                e.currentTarget.style.background = 'rgba(201,165,90,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              <span>Explore Services</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Right spacing filler placeholder row for desktop viewport grid columns alignment */}
        <div className="lg:col-span-5 h-[300px] lg:h-auto pointer-events-none" />
      </div>

      {/* Trust Badges Grid Horizontal Row Footer Layout Context */}
      <div className="max-w-6xl mx-auto relative z-20 w-full px-4 sm:px-6 lg:px-8 mt-4 animate-fade-in-up delay-500">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto lg:mx-0">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,165,90,0.15)',
                backdropFilter: 'blur(12px)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(201,165,90,0.08)';
                e.currentTarget.style.borderColor = 'rgba(201,165,90,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(201,165,90,0.15)';
              }}
            >
              <div
                style={{
                  animation: 'badgeIconPulse 2s infinite ease-in-out',
                  animationDelay: `${i * 0.2}s`
                }}
              >
                <badge.icon size={30} className="mx-auto mb-3" style={{ color: '#c9a55a' }} />
              </div>
              <div className="text-2xl md:text-3xl font-black text-white mb-1">{badge.label}</div>
              <div className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {badge.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none z-10">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,70 L0,70 Z" fill="white" />
        </svg>
      </div>

      {/* ===== CSS FRAMEWORK KEYFRAMES ANIMATIONS ===== */}
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes globeFadeIn {
          from { opacity: 0; transform: translate(40px, -50%) scale(0.9); }
          to { opacity: 1; transform: translate(0, -50%) scale(1); }
        }

        @keyframes rotateOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes panGlobalMap {
          0% { background-position: 0% center; transform: translateX(0%); }
          100% { background-position: -200% center; transform: translateX(-50%); }
        }

        @keyframes floatingOrbitBadge {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.04); }
        }

        @keyframes textShimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes starRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes badgeIconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        html { scroll-behavior: smooth; }
      `}</style>
    </section>
  );
};

export default Hero;
