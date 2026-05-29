import React from 'react';
import { MessageCircle, ChevronRight, Globe, Award, CheckCircle, Users, Star } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { icon: Award, label: '15+ Years', sublabel: 'Experience' },
    { icon: CheckCircle, label: '98%', sublabel: 'Success Rate' },
    { icon: Users, label: '5,000+', sublabel: 'Approved Cases' },
    { icon: Globe, label: '50+', sublabel: 'Global Corridors' }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #020818 0%, #0a1628 30%, #0f2044 60%, #1a1060 100%)'
      }}
    >
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() > 0.8 ? '2px' : '1px',
              height: Math.random() > 0.8 ? '2px' : '1px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.1,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }}
      />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #3b4fca, transparent)' }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Logo - Big & Prominent */}
        <div className="flex justify-center mb-8">
          <img
            src="/logo.png"
            alt="Accurate Consultancy"
            className="w-auto object-contain"
            style={{
              height: 'clamp(80px, 12vw, 140px)',
              filter: 'drop-shadow(0 0 30px rgba(201, 165, 90, 0.9)) drop-shadow(0 0 60px rgba(201, 165, 90, 0.5)) brightness(1.1)',
            }}
          />
        </div>

        <div className="text-center max-w-5xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border mb-8"
            style={{
              background: 'rgba(201, 165, 90, 0.1)',
              borderColor: 'rgba(201, 165, 90, 0.4)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Globe className="text-amber-400" size={18} />
            <span className="text-amber-400 font-semibold text-xs tracking-[0.25em] uppercase">
              Your Global Mobility Partner
            </span>
            <Star className="text-amber-400" size={14} fill="currentColor" />
          </div>

          {/* Main Headline */}
          <h1 className="font-bold text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)' }}
          >
            Navigate Your Journey to
            <span className="block mt-2"
              style={{
                background: 'linear-gradient(90deg, #c9a55a, #f0d080, #c9a55a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Global Success
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 mb-10 leading-relaxed mx-auto"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              maxWidth: '700px'
            }}
          >
            Premium visa and immigration consultancy delivering seamless pathways
            to your dream destination — with expert guidance every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('consultation')}
              className="w-full sm:w-auto text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              style={{
                background: 'linear-gradient(135deg, #c9a55a, #f0c040, #c9a55a)',
                boxShadow: '0 0 30px rgba(201, 165, 90, 0.5)',
                color: '#0a1628'
              }}
            >
              <MessageCircle size={22} />
              <span>Start Your Journey</span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto text-white border-2 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              style={{ borderColor: 'rgba(255,255,255,0.4)' }}
            >
              <span>Explore Services</span>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="rounded-2xl p-5 border transition-all duration-300 transform hover:scale-105 group text-center"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(201, 165, 90, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <badge.icon
                  className="mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                  size={34}
                  style={{ color: '#c9a55a' }}
                />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{badge.label}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{badge.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8fafc"/>
        </svg>
      </div>

      {/* Twinkling animation */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
}
