import React from 'react';
import { MessageCircle, ChevronRight, Globe, Award, CheckCircle, Users, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { icon: Award,        label: '15+ Years',  sublabel: 'Experience'     },
    { icon: CheckCircle,  label: '98%',         sublabel: 'Success Rate'   },
    { icon: Users,        label: '5,000+',      sublabel: 'Approved Cases' },
    { icon: Globe,        label: '50+',         sublabel: 'Global Corridors'}
  ];

  const stars = Array.from({ length: 90 }, (_, i) => ({
    id: i,
    size: Math.random() > 0.85 ? 2 : 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 4
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #010610 0%, #0a1628 35%, #0d1d3a 65%, #160d50 100%)' }}
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map(s => (
          <div key={s.id} className="absolute rounded-full bg-white"
            style={{
              width: s.size, height: s.size,
              top: `${s.top}%`, left: `${s.left}%`,
              opacity: s.opacity,
              animation: `twinkle ${s.duration}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`
            }} />
        ))}
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,165,90,0.15), transparent)' }} />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(59,79,202,0.2), transparent)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,165,90,0.05), transparent)' }} />

      <div className="max-w-6xl mx-auto relative z-10 w-full text-center">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/logo.png" alt="Accurate Consultancy"
            style={{
              height: 'clamp(70px, 10vw, 130px)',
              width: 'auto',
              filter: 'drop-shadow(0 0 25px rgba(201,165,90,0.8)) drop-shadow(0 0 50px rgba(201,165,90,0.4)) brightness(1.1)'
            }}
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(201,165,90,0.08)',
            border: '1px solid rgba(201,165,90,0.35)',
            backdropFilter: 'blur(10px)'
          }}>
          <Globe size={15} style={{ color: '#c9a55a' }} />
          <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#c9a55a' }}>
            Your Global Mobility Partner
          </span>
          <Star size={12} fill="#c9a55a" style={{ color: '#c9a55a' }} />
        </div>

        {/* Headline */}
        <h1 className="font-black text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.2rem)', letterSpacing: '-0.02em' }}>
          Navigate Your Journey to
          <span className="block mt-1"
            style={{
              background: 'linear-gradient(90deg, #b8872a 0%, #f0d060 40%, #e8b830 70%, #c9a55a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(201,165,90,0.4))'
            }}>
            Global Success
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 leading-relaxed mx-auto mb-10"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.25rem)', maxWidth: '640px', lineHeight: 1.8 }}>
          Premium visa and immigration consultancy delivering seamless pathways
          to your dream destination — with expert guidance every step of the way.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button onClick={() => scrollToSection('consultation')}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #c9a55a, #f0c040, #c9a55a)',
              color: '#0a1628',
              boxShadow: '0 0 40px rgba(201,165,90,0.5), 0 8px 25px rgba(201,165,90,0.3)'
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 60px rgba(201,165,90,0.7), 0 12px 35px rgba(201,165,90,0.4)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(201,165,90,0.5), 0 8px 25px rgba(201,165,90,0.3)'}
          >
            <MessageCircle size={20} />
            <span>Start Your Journey</span>
          </button>

          <button onClick={() => scrollToSection('services')}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {trustBadges.map((badge, i) => (
            <div key={i}
              className="rounded-2xl p-5 text-center group cursor-default transition-all duration-300"
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
              <badge.icon size={30} className="mx-auto mb-3"
                style={{ color: '#c9a55a', filter: 'drop-shadow(0 0 6px rgba(201,165,90,0.5))' }} />
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
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,70 L0,70 Z" fill="white"/>
        </svg>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.8); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
