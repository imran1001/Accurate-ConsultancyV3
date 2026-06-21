import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, Globe, ChevronRight, ShieldCheck, Award, TrendingUp, Users, Star } from 'lucide-react';

// ---------- Animated counter ----------
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime = null;
    const animate = (t) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [end, duration]);
  return count;
};

// ---------- Destination data (kept tight — 8 evenly-spaced markers) ----------
const countriesData = [
  { flag: '🇺🇸', name: 'United States', cities: '50+ States' },
  { flag: '🇬🇧', name: 'United Kingdom', cities: 'London, Manchester' },
  { flag: '🇨🇦', name: 'Canada', cities: 'Toronto, Vancouver' },
  { flag: '🇦🇺', name: 'Australia', cities: 'Sydney, Melbourne' },
  { flag: '🇩🇪', name: 'Schengen / EU', cities: 'Germany, France, Spain' },
  { flag: '🇵🇹', name: 'Portugal', cities: 'Lisbon, Porto' },
  { flag: '🇳🇿', name: 'New Zealand', cities: 'Auckland, Wellington' },
  { flag: '🇦🇪', name: 'UAE', cities: 'Dubai, Abu Dhabi' },
];

// ---------- Clean wireframe globe (no blobby continents) ----------
const WireframeGlobe = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    <defs>
      <radialGradient id="sphereFill" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#1a2440" />
        <stop offset="60%" stopColor="#0d1426" />
        <stop offset="100%" stopColor="#050a14" />
      </radialGradient>
      <linearGradient id="sphereShine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
        <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>

    <circle cx="200" cy="200" r="190" fill="url(#sphereFill)" stroke="rgba(212,175,55,0.25)" strokeWidth="1.5" />

    {/* latitude lines */}
    {[60, 110, 160, 200, 240, 290, 340].map((cy, i) => {
      const rx = 190 * Math.sin(Math.acos((cy - 200) / 190 === Infinity ? 0 : (cy - 200) / 190));
      const ry = 8;
      return <ellipse key={`lat-${i}`} cx="200" cy={cy} rx={Math.max(rx, 10)} ry={ry} fill="none" stroke="rgba(212,175,55,0.16)" strokeWidth="1" />;
    })}

    {/* longitude lines */}
    {[190, 140, 70, 0].map((rx, i) => (
      <ellipse key={`lon-${i}`} cx="200" cy="200" rx={rx} ry="190" fill="none" stroke="rgba(212,175,55,0.16)" strokeWidth="1" />
    ))}

    <circle cx="200" cy="200" r="190" fill="url(#sphereShine)" />
  </svg>
);

// ---------- Subtle background dust ----------
const Particles = ({ count = 22 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 18 + 14,
    delay: Math.random() * 10,
  }));
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: 'rgba(212,175,55,0.35)',
            animation: `floatParticle ${p.speed}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const yearsCount = useCounter(19);
  const successCount = useCounter(90);
  const casesCount = useCounter(2000, 2400);
  const countriesCount = useCounter(50);

  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [rotation, setRotation] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setRotation((r) => (r + 0.15) % 360), 50);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <Award size={22} />, value: yearsCount, label: 'Years Experience', suffix: '+' },
    { icon: <TrendingUp size={22} />, value: successCount, label: 'Success Rate', suffix: '%' },
    { icon: <Users size={22} />, value: casesCount, label: 'Approved Cases', suffix: '+' },
    { icon: <Globe size={22} />, value: countriesCount, label: 'Countries Covered', suffix: '+' },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-40 sm:pt-44 lg:pt-48 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center"
      style={{ background: 'linear-gradient(165deg, #020916 0%, #060d1c 45%, #0a1424 100%)' }}
    >
      {/* Background accents — single gold family only, kept subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />
      </div>

      <Particles />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* ===== Left column ===== */}
        <div className="relative">
          <div
            className="inline-flex items-center gap-3 mb-7 px-5 py-2 rounded-sm animate-fadeInUp"
            style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}
          >
            <ShieldCheck size={14} style={{ color: '#D4AF37' }} />
            <span className="text-[11px] font-bold text-white uppercase tracking-widest">
              Established 2006 &middot; Trusted Global Immigration Partner
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-white animate-fadeInUp delay-100">
            Your Trusted Partner for{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #F3E5AB, #AA7C11)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Global Immigration Success
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-8 text-gray-300 max-w-lg animate-fadeInUp delay-200">
            Premium visa and immigration consultancy delivering seamless pathways across 50+ countries — trusted by
            2,000+ clients worldwide for honest advice and end-to-end case management.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-fadeInUp delay-300">
            
              href="#consultation"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-sm font-black text-xs uppercase tracking-widest text-gray-950 shadow-[0_4px_25px_rgba(212,175,55,0.18)] hover:shadow-[0_4px_35px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #F3E5AB, #AA7C11)' }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmerSweep" />
              <Play size={14} className="relative" />
              <span className="relative">Book Consultation</span>
              <ChevronRight size={14} className="relative group-hover:translate-x-0.5 transition-transform" />
            </a>

            
              href="#services"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest text-white border border-white/15 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#D4AF37]/40 transition-all duration-300"
            >
              Explore Services
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fadeInUp delay-400">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="relative p-4 rounded-sm text-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}
              >
                <div className="flex justify-center mb-2" style={{ color: '#D4AF37' }}>
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl font-black text-white">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wider mt-1 text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trust row */}
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#D4AF37" style={{ color: '#D4AF37' }} />
              ))}
              <span className="text-sm font-semibold ml-1 text-gray-300">4.9/5 Client Rating</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-white/10" />
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <ShieldCheck size={15} style={{ color: '#D4AF37' }} />
              2,000+ Successfully Placed Clients
            </div>
          </div>
        </div>

        {/* ===== Right column — contained globe, nothing escapes the box ===== */}
        <div className="hidden lg:flex items-center justify-center relative h-[460px] overflow-hidden">
          <div
            className="absolute w-[440px] h-[440px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07), transparent 70%)' }}
          />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-white/5" style={{ animation: 'rotateRing 30s linear infinite' }} />

          {/* Globe */}
          <div
            className="relative w-72 h-72 rounded-full overflow-hidden"
            style={{ boxShadow: '0 0 70px rgba(212,175,55,0.18), inset 0 0 60px rgba(212,175,55,0.05)' }}
          >
            <WireframeGlobe />
          </div>

          {/* Orbit markers — radius kept inside the 460px container, so nothing clips into the navbar */}
          {countriesData.map((country, index) => {
            const angle = (index / countriesData.length) * 360;
            const isHovered = hoveredCountry === index;
            return (
              <div
                key={index}
                className="absolute"
                style={{ transform: `rotate(${rotation + angle}deg) translateX(190px)` }}
              >
                <div
                  className="relative"
                  style={{ transform: `rotate(-${rotation + angle}deg)`, cursor: 'pointer', zIndex: isHovered ? 30 : 1 }}
                  onMouseEnter={() => setHoveredCountry(index)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-transform duration-300"
                    style={{
                      background: 'rgba(5,10,20,0.9)',
                      border: '1px solid rgba(212,175,55,0.35)',
                      transform: isHovered ? 'scale(1.25)' : 'scale(1)',
                      boxShadow: isHovered ? '0 0 18px rgba(212,175,55,0.45)' : 'none',
                    }}
                  >
                    {country.flag}
                  </div>

                  {isHovered && (
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 rounded-sm whitespace-nowrap"
                      style={{ background: 'rgba(5,10,20,0.97)', border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 15px 40px rgba(0,0,0,0.5)' }}
                    >
                      <div className="text-xs font-bold" style={{ color: '#D4AF37' }}>{country.name}</div>
                      <div className="text-[10px] text-gray-400">{country.cities}</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <Globe size={28} className="mx-auto mb-1.5" style={{ color: 'rgba(212,175,55,0.4)' }} />
              <div className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(212,175,55,0.5)' }}>
                Global Network
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.7s ease-out forwards; opacity: 0; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }

        @keyframes floatParticle {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }

        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .group-hover\\:animate-shimmerSweep:hover {
          animation: shimmerSweep 1.4s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
