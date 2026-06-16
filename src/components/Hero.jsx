import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, ArrowRight, Globe, MapPin, ChevronRight, 
  Sparkles, Award, Users, TrendingUp, CheckCircle, Star,
  Shield, Zap
} from 'lucide-react';

// Counter Hook with ease-out
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(ease * (end - start) + start);
      setCount(value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);
  return count;
};

// Country data with coordinates for globe projection
const countriesData = [
  { flag: '🇺🇸', name: 'United States', lat: 37.09, lng: -95.71, color: '#FF6B6B' },
  { flag: '🇬🇧', name: 'United Kingdom', lat: 55.38, lng: -3.44, color: '#4ECDC4' },
  { flag: '🇪🇸', name: 'Spain', lat: 40.46, lng: -3.75, color: '#FFE66D' },
  { flag: '🇩🇪', name: 'Germany', lat: 51.17, lng: 10.45, color: '#A8E6CF' },
  { flag: '🇵🇹', name: 'Portugal', lat: 39.40, lng: -8.22, color: '#FF8B94' },
  { flag: '🇨🇦', name: 'Canada', lat: 56.13, lng: -106.35, color: '#88D8B0' },
  { flag: '🇦🇺', name: 'Australia', lat: -25.27, lng: 133.78, color: '#FFD93D' },
  { flag: '🇨🇳', name: 'China', lat: 35.86, lng: 104.20, color: '#6BCB77' },
  { flag: '🇳🇿', name: 'New Zealand', lat: -40.90, lng: 174.89, color: '#4D96FF' },
  { flag: '🇦🇪', name: 'UAE', lat: 23.42, lng: 53.85, color: '#FF6B6B' },
  { flag: '🇸🇬', name: 'Singapore', lat: 1.35, lng: 103.82, color: '#FF4757' },
  { flag: '🇯🇵', name: 'Japan', lat: 36.20, lng: 138.25, color: '#2ED573' },
  { flag: '🇫🇷', name: 'France', lat: 46.60, lng: 1.89, color: '#1E90FF' },
  { flag: '🇮🇹', name: 'Italy', lat: 41.87, lng: 12.57, color: '#FF6B81' },
  { flag: '🇳🇱', name: 'Netherlands', lat: 52.13, lng: 5.29, color: '#FFA502' },
];

// Enhanced 3D Globe Component
const RotatingGlobe = ({ rotation }) => {
  const centerX = 480, centerY = 300, radius = 280;
  const project = (lat, lng, rotY) => {
    const phi = (90 - lat) * Math.PI / 180;
    const theta = (lng + 180) * Math.PI / 180;
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    // Rotate around Y
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const rx = x * cosY + z * sinY;
    const rz = -x * sinY + z * cosY;
    const perspective = 600 / (600 + rz);
    return { x: centerX + rx * perspective, y: centerY + y * perspective * 0.8, scale: perspective, visible: rz > -100 };
  };

  return (
    <svg viewBox="0 0 960 600" className="w-full h-full">
      <defs>
        <radialGradient id="globeGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1a2070" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#0a1628" stopOpacity="0.95"/>
        </radialGradient>
        <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c9a55a" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#c9a55a" stopOpacity="0"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx={centerX} cy={centerY} r={radius} fill="url(#globeGrad)" stroke="rgba(201,165,90,0.2)" strokeWidth="1.5"/>
      <circle cx={centerX} cy={centerY} r={radius+20} fill="url(#globeGlow)" opacity="0.5"/>
      {/* Grid lines - longitude */}
      {[-60,-30,0,30,60].map(lng => {
        const pts = [];
        for (let lat=-90; lat<=90; lat+=5) {
          const p = project(lat, lng, rotation);
          pts.push(`${p.x},${p.y}`);
        }
        return <polyline key={`lon-${lng}`} points={pts.join(' ')} stroke="rgba(201,165,90,0.12)" strokeWidth="0.8" fill="none"/>;
      })}
      {/* Grid lines - latitude */}
      {[-60,-30,0,30,60].map(lat => {
        const pts = [];
        for (let lng=-180; lng<=180; lng+=5) {
          const p = project(lat, lng, rotation);
          pts.push(`${p.x},${p.y}`);
        }
        return <polyline key={`lat-${lat}`} points={pts.join(' ')} stroke="rgba(201,165,90,0.12)" strokeWidth="0.8" fill="none"/>;
      })}
      {/* Continents (simplified but recognizable) */}
      <g fill="rgba(201,165,90,0.2)" stroke="rgba(201,165,90,0.3)" strokeWidth="1.2">
        {/* North America */}
        <path d="M 140,90 L 200,70 L 260,90 L 280,130 L 260,180 L 220,200 L 190,180 L 170,210 L 150,190 L 120,170 L 110,140 Z" />
        {/* South America */}
        <path d="M 230,230 L 260,215 L 300,235 L 320,280 L 300,330 L 260,350 L 240,330 L 220,290 L 210,260 Z" />
        {/* Europe */}
        <path d="M 380,100 L 430,80 L 460,120 L 470,170 L 440,190 L 410,170 L 390,150 L 375,135 Z" />
        {/* Africa */}
        <path d="M 380,220 L 420,200 L 460,210 L 480,260 L 460,320 L 420,345 L 390,320 L 370,280 Z" />
        {/* Asia */}
        <path d="M 490,80 L 560,60 L 630,80 L 660,120 L 630,170 L 580,190 L 530,170 L 500,150 Z" />
        {/* Australia */}
        <path d="M 690,340 L 740,320 L 780,340 L 800,380 L 760,395 L 710,380 L 690,360 Z" />
        {/* Antarctica */}
        <path d="M 120,490 L 400,470 L 680,490 L 780,510 L 600,540 L 320,540 L 120,510 Z" />
      </g>
      {/* Country markers */}
      {countriesData.map((c, idx) => {
        const p = project(c.lat, c.lng, rotation);
        if (!p.visible) return null;
        return (
          <g key={idx} transform={`translate(${p.x},${p.y})`} style={{ cursor: 'pointer' }}>
            <circle cx="0" cy="0" r="12" fill={c.color} opacity="0.2" filter="url(#glow)">
              <animate attributeName="r" values="10;16;10" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="0" cy="0" r="4" fill={c.color}>
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
            </circle>
            <text x="0" y="-12" textAnchor="middle" fontSize={14 * p.scale} opacity={0.6+0.4*p.scale} fill="white" style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))' }}>{c.flag}</text>
          </g>
        );
      })}
      {/* Shine */}
      <ellipse cx={centerX-80} cy={centerY-60} rx="120" ry="160" fill="rgba(255,255,255,0.03)" transform="rotate(-30, 400, 240)"/>
    </svg>
  );
};

// Particles background
const Particles = ({ count = 40 }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = 20 + Math.random() * 20;
      const delay = Math.random() * 10;
      return (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            background: 'rgba(201,165,90,0.3)',
            animation: `floatParticle ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            opacity: 0.1 + Math.random() * 0.2
          }}
        />
      );
    })}
    <style>{`
      @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
      }
    `}</style>
  </div>
);

const Hero = () => {
  const yearsCount = useCounter(19, 2000);
  const successCount = useCounter(90, 2000);
  const casesCount = useCounter(2000, 2500);
  const countriesCount = useCounter(50, 2000);

  const [rotation, setRotation] = useState(0);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.012) % (2 * Math.PI));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax for globe (optional)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const stats = [
    { icon: <Award size={22} />, value: yearsCount, label: 'Years Experience', suffix: '+', color: '#FF6B6B' },
    { icon: <TrendingUp size={22} />, value: successCount, label: 'Success Rate', suffix: '%', color: '#4ECDC4' },
    { icon: <Users size={22} />, value: casesCount, label: 'Approved Cases', suffix: '+', color: '#FFE66D' },
    { icon: <Globe size={22} />, value: countriesCount, label: 'Global Corridors', suffix: '+', color: '#A8E6CF' }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center"
      style={{ 
        background: 'linear-gradient(160deg, #010610 0%, #0a1628 30%, #0f0a30 60%, #1a0a30 100%)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #c9a55a, transparent 70%)', animation: 'float 20s ease-in-out infinite' }} />
        <div className="absolute bottom-0 left-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-15" style={{ background: 'radial-gradient(circle, #3b4fca, transparent 70%)', animation: 'float 15s ease-in-out infinite reverse' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-8" style={{ background: 'radial-gradient(circle, #c9a55a, transparent 70%)', animation: 'pulse 8s ease-in-out infinite' }} />
      </div>

      <Particles />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(201,165,90,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="relative">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full animate-fadeInUp" style={{ 
            background: 'linear-gradient(135deg, rgba(201,165,90,0.15), rgba(240,192,64,0.05))',
            border: '1px solid rgba(201,165,90,0.2)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 30px rgba(201,165,90,0.05)'
          }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a55a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c9a55a]"></span>
            </span>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Est. 2006 • Global Leaders</span>
            <Shield size={14} style={{ color: '#c9a55a' }} />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fadeInUp delay-100">
            <span style={{ color: 'white' }}>Navigate Your Journey to </span>
            <span className="relative inline-block">
              <span className="relative z-10" style={{ 
                background: 'linear-gradient(135deg, #c9a55a, #f0c040, #ffd700, #f0c040, #c9a55a)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'textShimmer 4s ease-in-out infinite'
              }}>Global Success</span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full" style={{
                background: 'linear-gradient(90deg, transparent, #c9a55a, transparent)',
                animation: 'underlinePulse 2s ease-in-out infinite'
              }} />
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-8 animate-fadeInUp delay-200" style={{ 
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '500px'
          }}>
            Premium visa and immigration consultancy delivering seamless pathways to your dream destination.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-slideInLeft delay-300">
            <a href="#consultation" className="group relative flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden" style={{ 
              background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
              color: '#0a1628',
              textDecoration: 'none',
              boxShadow: '0 0 40px rgba(201,165,90,0.2)'
            }}>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <Play size={18} className="group-hover:scale-110 transition-transform" />
              Get Started Today
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="group flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ 
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              textDecoration: 'none'
            }}>
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, i) => (
              <div key={i} className="group relative p-3.5 rounded-xl text-center animate-fadeInUp transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden" style={{ 
                background: 'linear-gradient(135deg, rgba(201,165,90,0.1), rgba(240,192,64,0.02))',
                border: '1px solid rgba(201,165,90,0.12)',
                backdropFilter: 'blur(10px)',
                animationDelay: `${i * 0.1}s`
              }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle at center, ${stat.color}15, transparent 70%)` }} />
                <div className="relative">
                  <div className="flex justify-center mb-1 group-hover:scale-110 transition-transform" style={{ color: stat.color }}>{stat.icon}</div>
                  <div className="text-xl font-black" style={{ color: '#c9a55a', textShadow: '0 0 20px rgba(201,165,90,0.05)' }}>{stat.value}{stat.suffix}</div>
                  <div className="text-[10px] font-medium uppercase tracking-wider mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicator */}
          <div className="mt-6 flex items-center gap-6 animate-fadeInUp delay-400">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#c9a55a" style={{ color: '#c9a55a' }} />)}
              <span className="text-xs font-semibold ml-1" style={{ color: 'rgba(255,255,255,0.6)' }}>4.9/5 Rating</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['👤','👤','👤','👤'].map((e,i) => (
                  <div key={i} className="w-5 h-5 rounded-full border border-[#0a1628] overflow-hidden flex items-center justify-center text-[8px]" style={{ background: 'rgba(201,165,90,0.15)' }}>{e}</div>
                ))}
              </div>
              <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>2,000+ Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Right Column - Globe */}
        <div className="hidden lg:flex items-center justify-center relative h-[600px]">
          {/* Glow rings */}
          <div className="absolute w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,165,90,0.06), transparent 70%)', animation: 'pulse 4s ease-in-out infinite' }} />
          <div className="absolute w-[580px] h-[580px] rounded-full border border-white/5" style={{ animation: 'rotateRing 30s linear infinite' }} />
          <div className="absolute w-[460px] h-[460px] rounded-full border border-white/5" style={{ animation: 'rotateRing 20s linear infinite reverse' }} />
          <div className="absolute w-[340px] h-[340px] rounded-full border border-white/5" style={{ animation: 'rotateRing 15s linear infinite' }} />

          {/* Globe container with parallax */}
          <div 
            className="relative w-[480px] h-[480px] rounded-full overflow-hidden"
            style={{ 
              boxShadow: '0 0 100px rgba(201,165,90,0.08), inset 0 0 100px rgba(201,165,90,0.03)',
              transform: `perspective(1200px) rotateX(${mousePos.y * -2}deg) rotateY(${mousePos.x * 2}deg)`
            }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)', borderRadius: '50%' }} />
            <div className="w-full h-full">
              <RotatingGlobe rotation={rotation} />
            </div>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 35%, rgba(5,10,24,0.5) 100%)', borderRadius: '50%' }} />
          </div>

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="relative w-16 h-16 mx-auto">
                <Globe size={36} className="absolute inset-0 m-auto" style={{ color: 'rgba(201,165,90,0.12)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-dashed" style={{ borderColor: 'rgba(201,165,90,0.06)', animation: 'spin 25s linear infinite' }} />
                </div>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] mt-2" style={{ color: 'rgba(201,165,90,0.15)' }}>15+ Countries</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        @keyframes underlinePulse {
          0%, 100% { transform: scaleX(0.8); opacity: 0.3; }
          50% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
