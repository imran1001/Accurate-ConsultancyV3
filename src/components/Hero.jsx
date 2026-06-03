import React from 'react';
import { MessageCircle, ChevronRight, Globe, Award, CheckCircle, Users, Star } from 'lucide-react';

const trustBadges = [
  { icon: Award,       label: '19+ Years',  sublabel: 'Experience'      },
  { icon: CheckCircle, label: '98%',         sublabel: 'Success Rate'    },
  { icon: Users,       label: '5,000+',      sublabel: 'Approved Cases'  },
  { icon: Globe,       label: '50+',         sublabel: 'Global Corridors'}
];

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
      style={{ background: 'linear-gradient(135deg, #010610 0%, #0a1628 35%, #0d1d3a 65%, #160d50 100%)' }}
    >
      {/* Animated Rotating Globe with Orbiting Stars */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none hidden lg:block fade-in-up">
        {/* Outer rotating orbit container */}
        <div
          className="absolute inset-0"
          style={{
            animation: 'rotateOrbit 40s linear infinite',
          }}
        >
          {/* Orbiting stars - 5 stars around the globe */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                left: '50%',
                top: '8%',
                transform: `rotate(${angle}deg) translateX(-50%)`,
                boxShadow: '0 0 15px rgba(201,165,90,0.8)',
                animation: `pulseStar 2s ease-in-out infinite ${i * 0.15}s`
              }}
            >
              {/* Glow halo around star */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(201,165,90,0.4), transparent)',
                  width: '20px',
                  height: '20px',
                  top: '-8.5px',
                  left: '-8.5px',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
            </div>
          ))}

          {/* Center Globe */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 35%, rgba(201,165,90,0.5), rgba(59,79,202,0.3), rgba(10,22,40,0.8))',
              border: '2px solid rgba(201,165,90,0.4)',
              boxShadow: '0 0 80px rgba(201,165,90,0.5), inset -20px -20px 40px rgba(59,79,202,0.3), inset 10px 10px 30px rgba(201,165,90,0.2)',
              animation: 'rotateSelf 25s linear infinite reverse',
            }}
          >
            {/* Globe Grid Pattern SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Latitude lines */}
              {[15, 30, 45, 60, 75].map((y) => (
                <line
                  key={`lat-${y}`}
                  x1="0"
                  y1={y}
                  x2="100"
                  y2={y}
                  stroke="rgba(201,165,90,0.25)"
                  strokeWidth="0.6"
                />
              ))}
              {/* Longitude lines */}
              {[15, 30, 45, 60, 75].map((x) => (
                <line
                  key={`lon-${x}`}
                  x1={x}
                  y1="0"
                  x2={x}
                  y2="100"
                  stroke="rgba(201,165,90,0.25)"
                  strokeWidth="0.6"
                />
              ))}
              {/* Equator highlight */}
              <line
                x1="0"
                y1="50"
                x2="100"
                y2="50"
                stroke="rgba(201,165,90,0.4)"
                strokeWidth="1"
                strokeDasharray="3,2"
              />
            </svg>

            {/* Prime Meridian accent */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full rounded-full"
              style={{
                background: 'linear-gradient(180deg, transparent, rgba(201,165,90,0.6), transparent)',
              }}
            />
          </div>

          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: '1px solid rgba(201,165,90,0.2)',
              animation: 'glowPulse 4s infinite',
            }}
          />
        </div>
      </div>

      {/* Left side glow orb */}
      <div
        className="absolute top-10 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,165,90,0.15), transparent)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10 w-full text-center">

        {/* Logo */}
        <div className="flex justify-center mb-8 fade-in-up">
          <img
            src="/logo.webp"
            alt="Accurate Consultancy"
            width="220"
            height="120"
            className="logo-float"
            style={{
              height: 'clamp(70px, 10vw, 130px)',
              width: 'auto',
              filter: 'drop-shadow(0 0 25px rgba(201,165,90,0.8)) drop-shadow(0 0 50px rgba(201,165,90,0.4)) brightness(1.1)'
            }}
          />
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center space-x-2 px-5 py-2 rounded-full mb-8 fade-in-up animation-delay-200"
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
          <div style={{ animation: 'rotateLinear 3s linear infinite' }}>
            <Star size={12} fill="#c9a55a" style={{ color: '#c9a55a' }} />
          </div>
        </div>

        {/* Headline */}
        <div className="fade-in-up animation-delay-300">
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
                animation: 'shimmer 3s linear infinite',
                backgroundSize: '200% 100%',
              }}
            >
              Global Success
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="text-gray-300 leading-relaxed mx-auto mb-10 fade-in-up animation-delay-400"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.25rem)', maxWidth: '640px', lineHeight: 1.8 }}
        >
          Premium visa and immigration consultancy delivering seamless pathways
          to your dream destination with expert guidance every step of the way.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up animation-delay-500">
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

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto fade-in-up animation-delay-600">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-center transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,165,90,0.15)',
                backdropFilter: 'blur(12px)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(201,165,90,0.08)';
                e.currentTarget.style.borderColor = 'rgba(201,165,90,0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(201,165,90,0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ animation: `pulseIcon 2s infinite ${i * 0.2}s` }}>
                <badge.icon
                  size={30}
                  className="mx-auto mb-3"
                  style={{ color: '#c9a55a' }}
                />
              </div>
              <div className="text-2xl md:text-3xl font-black text-white mb-1">{badge.label}</div>
              <div className="text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {badge.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,70 L0,70 Z" fill="white" />
        </svg>
      </div>

      <style>{`
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }

        .logo-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes rotateLinear {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotateOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotateSelf {
          from { transform: rotateZ(0deg) rotateX(20deg) rotateY(30deg); }
          to { transform: rotateZ(360deg) rotateX(20deg) rotateY(30deg); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes pulseStar {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        @keyframes pulseIcon {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 100px rgba(201,165,90,0.4), inset 0 0 60px rgba(201,165,90,0.1); }
          50% { box-shadow: 0 0 120px rgba(201,165,90,0.6), inset 0 0 80px rgba(201,165,90,0.2); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
