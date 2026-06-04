import React from 'react';
import { MessageCircle, ChevronRight, Globe, Award, CheckCircle, Users, Star } from 'lucide-react';

const trustBadges = [
  { icon: Award,       label: '19+ Years',  sublabel: 'Experience'      },
  { icon: CheckCircle, label: '98%',         sublabel: 'Success Rate'    },
  { icon: Users,       label: '5,000+',      sublabel: 'Approved Cases'  },
  { icon: Globe,       label: '50+',         sublabel: 'Global Corridors'}
];

// Seamless, simplified vector path representing world continents
const ContinentsMap = () => (
  <svg
    className="w-full h-full opacity-65"
    viewBox="0 0 200 100"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#c9a55a">
      {/* North America */}
      <path d="M10,15 L35,12 L45,25 L40,40 L30,42 L25,35 L12,30 Z" />
      {/* Central & South America */}
      <path d="M30,42 L33,50 L38,62 L34,85 L28,75 L25,58 L24,48 Z" />
      {/* Greenland */}
      <path d="M35,2 L48,5 L42,12 L32,8 Z" />
      {/* Eurasia / Europe / Asia */}
      <path d="M68,15 L95,10 L135,12 L145,25 L138,48 L115,50 L100,42 L85,38 L72,28 Z" />
      {/* United Kingdom & Ireland */}
      <path d="M64,16 A2,2 0 1,1 64,12 A2,2 0 1,1 64,16" />
      {/* Africa */}
      <path d="M72,36 L92,38 L100,52 L94,72 L85,78 L78,65 L70,50 Z" />
      {/* Australia */}
      <path d="M125,65 L142,68 L145,78 L130,82 L122,75 Z" />
      {/* Major Island Groups */}
      <path d="M112,52 L118,55 L114,60 Z" />
      <path d="M124,54 L130,58 L126,62 Z" />
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #010610 0%, #0a1628 35%, #0d1d3a 65%, #160d50 100%)'
      }}
    >
      {/* ===== BIGGER ANIMATED ROTATING GLOBE WITH ORBITING STARS ===== */}
      <div
        className="absolute -right-44 top-1/2 -translate-y-1/2 w-[440px] h-[440px] pointer-events-none hidden lg:block"
        style={{
          animation: 'globeFadeIn 1s ease-out forwards'
        }}
      >
        {/* Outer Orbit Container */}
        <div
          className="absolute inset-0"
          style={{
            animation: 'rotateOrbit 40s linear infinite',
          }}
        >
          {/* 5 Orbiting Stars */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                left: '50%',
                top: '6%',
                transform: `rotate(${angle}deg) translateX(-50%)`,
                boxShadow: '0 0 15px rgba(201,165,90,0.8)',
                animation: 'fadeInScale 0.5s ease-out forwards',
                animationDelay: `${i * 0.1}s`
              }}
            >
              {/* Glow Halo */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(201,165,90,0.4), transparent)',
                  width: '20px',
                  height: '20px',
                  top: '-8.5px',
                  left: '-8.5px',
                  animation: 'haloScale 2s infinite ease-in-out',
                  animationDelay: `${i * 0.2}s`
                }}
              />
            </div>
          ))}

          {/* Center Globe Sphere (Upscaled to w-80 h-80) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #0f2347 0%, #050d1a 70%, #010408 100%)',
              border: '2px solid rgba(201,165,90,0.35)',
              boxShadow: '0 0 70px rgba(201,165,90,0.35), inset -20px -20px 50px rgba(0,0,0,0.9), inset 20px 20px 40px rgba(201,165,90,0.25)',
            }}
          >
            {/* Infinite Map Tracking Layer */}
            <div 
              className="absolute inset-y-0 flex flex-row items-center"
              style={{
                width: '200%',
                animation: 'panGlobalMap 30s linear infinite'
              }}
            >
              <div className="w-1/2 h-full"><ContinentsMap /></div>
              <div className="w-1/2 h-full"><ContinentsMap /></div>
            </div>

            {/* Globe Grid Overlay */}
            <svg
              className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Latitudes */}
              {[20, 40, 60, 80].map((y) => (
                <line
                  key={`lat-${y}`}
                  x1="0" y1={y} x2="100" y2={y}
                  stroke="rgba(201,165,90,0.15)" strokeWidth="0.4"
                />
              ))}
              {/* Longitudes */}
              <path d="M50,0 Q25,50 50,100" fill="none" stroke="rgba(201,165,90,0.15)" strokeWidth="0.4" />
              <path d="M50,0 Q75,50 50,100" fill="none" stroke="rgba(201,165,90,0.15)" strokeWidth="0.4" />
              <path d="M50,0 Q5,50 50,100" fill="none" stroke="rgba(201,165,90,0.08)" strokeWidth="0.4" />
              <path d="M50,0 Q95,50 50,100" fill="none" stroke="rgba(201,165,90,0.08)" strokeWidth="0.4" />
              {/* Equator */}
              <line
                x1="0" y1="50" x2="100" y2="50"
                stroke="rgba(201,165,90,0.3)" strokeWidth="0.8" strokeDasharray="2,2"
              />
            </svg>

            {/* Spherical Shading Overlay */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 30% 30%, transparent 40%, rgba(5,13,26,0.3) 70%, rgba(1,4,8,0.9) 100%)'
              }}
            />
          </div>
        </div>

        {/* Outer Atmospheric Glow Ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: '1px solid rgba(201,165,90,0.15)',
            animation: 'glowRingPulse 4s infinite ease-in-out'
          }}
        />
      </div>

      {/* Left Glow Orb */}
      <div
        className="absolute top-10 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,165,90,0.15), transparent)' }}
      />

      {/* ===== CONTENT CONTAINER ===== */}
      <div className="max-w-6xl mx-auto relative z-10 w-full text-center">

        {/* Logo with Float Animation */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
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
            style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.2rem)', letterSpacing: '-0.02em' }}
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
          className="text-gray-300 leading-relaxed mx-auto mb-10 animate-fade-in-up delay-300"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.25rem)', maxWidth: '640px', lineHeight: 1.8 }}
        >
          Premium visa and immigration consultancy delivering seamless pathways
          to your dream destination with expert guidance every step of the way.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-400">
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

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in-up delay-500">
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

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,70 L0,70 Z" fill="white" />
        </svg>
      </div>

      {/* ===== CSS ANIMATIONS ===== */}
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
          from { opacity: 0; transform: translateY(-50%) scale(0.8); }
          to { opacity: 1; transform: translateY(-50%) scale(1); }
        }

        @keyframes rotateOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes panGlobalMap {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes haloScale {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
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

        @keyframes glowRingPulse {
          0%, 100% { box-shadow: 0 0 100px rgba(201,165,90,0.35), inset 0 0 60px rgba(201,165,90,0.15); }
          50% { box-shadow: 0 0 130px rgba(201,165,90,0.55), inset 0 0 80px rgba(201,165,90,0.25); }
        }

        html { scroll-behavior: smooth; }
      `}</style>
    </section>
  );
};

export default Hero;
