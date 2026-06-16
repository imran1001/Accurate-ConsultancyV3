import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, Globe, MapPin, ChevronRight, Sparkles, TrendingUp, Award, Users, CheckCircle, Star } from 'lucide-react';

// Counter Hook with improved easing
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic bezier ease-out
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(easeOutCubic * (end - start) + start);
      setCount(value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start]);
  return count;
};

// Enhanced country data
const countriesData = [
  { flag: '🇺🇸', name: 'United States', angle: 0, color: '#FF6B6B', cities: '50+ States' },
  { flag: '🇬🇧', name: 'United Kingdom', angle: 36, color: '#4ECDC4', cities: 'London, Manchester' },
  { flag: '🇪🇸', name: 'Spain', angle: 72, color: '#FFE66D', cities: 'Madrid, Barcelona' },
  { flag: '🇩🇪', name: 'Germany', angle: 108, color: '#A8E6CF', cities: 'Berlin, Munich' },
  { flag: '🇵🇹', name: 'Portugal', angle: 144, color: '#FF8B94', cities: 'Lisbon, Porto' },
  { flag: '🇨🇦', name: 'Canada', angle: 180, color: '#88D8B0', cities: 'Toronto, Vancouver' },
  { flag: '🇦🇺', name: 'Australia', angle: 216, color: '#FFD93D', cities: 'Sydney, Melbourne' },
  { flag: '🇨🇳', name: 'China', angle: 252, color: '#6BCB77', cities: 'Beijing, Shanghai' },
  { flag: '🇳🇿', name: 'New Zealand', angle: 288, color: '#4D96FF', cities: 'Auckland, Wellington' },
  { flag: '🇦🇪', name: 'UAE', angle: 324, color: '#FF6B6B', cities: 'Dubai, Abu Dhabi' },
  { flag: '🇸🇬', name: 'Singapore', angle: 18, color: '#FF4757', cities: 'Singapore City' },
  { flag: '🇯🇵', name: 'Japan', angle: 54, color: '#2ED573', cities: 'Tokyo, Osaka' },
  { flag: '🇫🇷', name: 'France', angle: 90, color: '#1E90FF', cities: 'Paris, Lyon' },
  { flag: '🇮🇹', name: 'Italy', angle: 126, color: '#FF6B81', cities: 'Rome, Milan' },
  { flag: '🇳🇱', name: 'Netherlands', angle: 162, color: '#FFA502', cities: 'Amsterdam' },
];

// Enhanced 3D Globe Component
const Globe3D = () => (
  <svg viewBox="0 0 960 600" className="w-full h-full">
    <defs>
      <style>
        {`
          .continent { 
            fill: rgba(201,165,90,0.25); 
            stroke: rgba(201,165,90,0.4); 
            stroke-width: 1.5;
            transition: all 0.5s ease;
          }
          .continent:hover {
            fill: rgba(201,165,90,0.35);
            stroke: rgba(201,165,90,0.6);
          }
          .continent-line {
            stroke: rgba(201,165,90,0.15);
            stroke-width: 0.5;
            fill: none;
          }
          .grid-line {
            stroke: rgba(201,165,90,0.06);
            stroke-width: 0.5;
          }
          .glow-ring {
            fill: none;
            stroke: rgba(201,165,90,0.1);
            stroke-width: 2;
          }
        `}
      </style>
      <radialGradient id="globeGlow">
        <stop offset="0%" stopColor="#c9a55a" stopOpacity="0.15"/>
        <stop offset="100%" stopColor="#c9a55a" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a1060" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#0a1628" stopOpacity="0.9"/>
      </linearGradient>
    </defs>
    
    {/* Background */}
    <rect width="960" height="600" fill="url(#globeGradient)" />
    
    {/* Grid lines */}
    <g className="grid-line">
      <line x1="0" y1="100" x2="960" y2="100" />
      <line x1="0" y1="200" x2="960" y2="200" />
      <line x1="0" y1="300" x2="960" y2="300" />
      <line x1="0" y1="400" x2="960" y2="400" />
      <line x1="0" y1="500" x2="960" y2="500" />
      <line x1="160" y1="0" x2="160" y2="600" />
      <line x1="320" y1="0" x2="320" y2="600" />
      <line x1="480" y1="0" x2="480" y2="600" />
      <line x1="640" y1="0" x2="640" y2="600" />
      <line x1="800" y1="0" x2="800" y2="600" />
    </g>
    
    {/* Latitude/Longitude lines */}
    <g className="continent-line">
      <ellipse cx="480" cy="300" rx="400" ry="80" />
      <ellipse cx="480" cy="300" rx="400" ry="160" />
      <ellipse cx="480" cy="300" rx="400" ry="240" />
      <ellipse cx="480" cy="300" rx="80" ry="280" />
      <ellipse cx="480" cy="300" rx="160" ry="280" />
      <ellipse cx="480" cy="300" rx="240" ry="280" />
    </g>
    
    {/* Continents with 3D effect */}
    <g className="continent">
      {/* North America */}
      <path d="M 120,80 L 200,55 L 280,75 L 300,115 L 285,175 L 245,195 L 205,175 L 185,215 L 165,195 L 125,175 L 105,135 Z" />
      <path d="M 140,90 L 180,70 L 260,90 L 280,120 L 265,170 L 235,185 L 200,170 L 180,210 L 160,190 L 130,170 L 115,140 Z" fill="rgba(201,165,90,0.05)" />
      
      {/* South America */}
      <path d="M 220,220 L 260,205 L 305,225 L 325,275 L 305,325 L 265,355 L 245,335 L 225,295 L 205,255 Z" />
      <path d="M 230,230 L 260,220 L 295,235 L 310,280 L 295,320 L 265,345 L 250,330 L 230,295 L 215,260 Z" fill="rgba(201,165,90,0.05)" />
      
      {/* Europe */}
      <path d="M 375,95 L 445,75 L 475,115 L 485,175 L 445,195 L 415,175 L 385,155 L 365,135 Z" />
      <path d="M 385,105 L 440,90 L 465,125 L 470,170 L 445,185 L 415,170 L 390,155 L 375,140 Z" fill="rgba(201,165,90,0.05)" />
      
      {/* Africa */}
      <path d="M 375,215 L 415,195 L 455,205 L 475,255 L 455,315 L 415,345 L 385,315 L 365,275 Z" />
      <path d="M 385,225 L 415,210 L 445,220 L 465,260 L 445,310 L 415,335 L 390,310 L 375,275 Z" fill="rgba(201,165,90,0.05)" />
      
      {/* Asia */}
      <path d="M 495,75 L 575,55 L 645,75 L 675,115 L 645,175 L 595,195 L 545,175 L 515,155 L 495,135 Z" />
      <path d="M 505,85 L 565,70 L 630,90 L 660,125 L 640,170 L 590,185 L 540,170 L 515,155 L 500,140 Z" fill="rgba(201,165,90,0.05)" />
      
      {/* Australia */}
      <path d="M 695,335 L 755,315 L 795,335 L 815,375 L 775,395 L 715,375 L 695,355 Z" />
      <path d="M 705,345 L 750,330 L 785,345 L 800,375 L 770,390 L 720,375 L 705,360 Z" fill="rgba(201,165,90,0.05)" />
      
      {/* Antarctica */}
      <path d="M 100,495 L 400,475 L 700,495 L 800,515 L 600,545 L 300,545 L 100,515 Z" />
    </g>
    
    {/* Glow rings */}
    <circle cx="480" cy="300" r="280" className="glow-ring" style={{ animation: 'pulseRing 4s ease-in-out infinite' }} />
    <circle cx="480" cy="300" r="260" className="glow-ring" style={{ animation: 'pulseRing 4s ease-in-out infinite 0.5s' }} />
  </svg>
);

// Background Particles Component
const Particles = ({ count = 50 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 20 + 10,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.3 + 0.1
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: 'rgba(201,165,90,0.3)',
            animation: `floatParticle ${p.speed}s linear infinite`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const yearsCount = useCounter(19, 2000);
  const successCount = useCounter(90, 2000);
  const casesCount = useCounter(2000, 2500);
  const countriesCount = useCounter(50, 2000);
  
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Smooth rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: <Award size={24} />, value: yearsCount, label: 'Years Experience', suffix: '+', color: '#FF6B6B' },
    { icon: <TrendingUp size={24} />, value: successCount, label: 'Success Rate', suffix: '%', color: '#4ECDC4' },
    { icon: <Users size={24} />, value: casesCount, label: 'Approved Cases', suffix: '+', color: '#FFE66D' },
    { icon: <Globe size={24} />, value: countriesCount, label: 'Global Corridors', suffix: '+', color: '#A8E6CF' }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center"
      style={{ 
        background: 'linear-gradient(160deg, #010610 0%, #0a1628 30%, #160d50 60%, #1a0a30 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div 
          className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ 
            background: 'radial-gradient(circle, #c9a55a, transparent 70%)',
            animation: 'float 20s ease-in-out infinite' 
          }} 
        />
        <div 
          className="absolute bottom-0 left-20 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #3b4fca, transparent 70%)',
            animation: 'float 15s ease-in-out infinite reverse' 
          }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10"
          style={{ 
            background: 'radial-gradient(circle, #c9a55a, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite' 
          }} 
        />
        
        {/* Animated gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{
          background: 'linear-gradient(90deg, transparent, rgba(201,165,90,0.3), transparent)',
          animation: 'slideLine 3s ease-in-out infinite'
        }} />
      </div>

      <Particles />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(201,165,90,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="relative">
          {/* Decorative badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full animate-fadeInUp" style={{ 
            background: 'linear-gradient(135deg, rgba(201,165,90,0.15), rgba(240,192,64,0.05))',
            border: '1px solid rgba(201,165,90,0.2)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 30px rgba(201,165,90,0.05)'
          }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a55a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a55a]"></span>
            </span>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Est. 2006 • Global Leaders</span>
            <Sparkles size={14} style={{ color: '#c9a55a' }} />
          </div>

          {/* Main heading with 3D tilt effect */}
          <div 
            className="transform transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)`
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fadeInUp delay-100">
              <span style={{ color: 'white' }}>Navigate Your Journey to </span>
              <span className="relative inline-block">
                <span 
                  className="relative z-10"
                  style={{ 
                    background: 'linear-gradient(135deg, #c9a55a, #f0c040, #ffd700, #f0c040, #c9a55a)',
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'textShimmer 4s ease-in-out infinite'
                  }}
                >
                  Global Success
                </span>
                {/* Glow underline */}
                <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full" style={{
                  background: 'linear-gradient(90deg, transparent, #c9a55a, transparent)',
                  animation: 'underlinePulse 2s ease-in-out infinite'
                }} />
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-8 animate-fadeInUp delay-200" style={{ 
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '500px'
          }}>
            Premium visa and immigration consultancy delivering seamless pathways to your dream destination.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-slideInLeft delay-300">
            <a 
              href="#consultation" 
              className="group relative flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                color: '#0a1628',
                textDecoration: 'none',
                boxShadow: '0 0 40px rgba(201,165,90,0.2)'
              }}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <Play size={18} className="group-hover:scale-110 transition-transform" />
              Get Started Today
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="group flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg" 
              style={{ 
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                textDecoration: 'none'
              }}
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="group relative p-4 rounded-2xl text-center animate-fadeInUp transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(201,165,90,0.1), rgba(240,192,64,0.03))',
                  border: '1px solid rgba(201,165,90,0.15)',
                  backdropFilter: 'blur(10px)',
                  animationDelay: `${i * 0.1}s`
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: `radial-gradient(circle at center, ${stat.color}20, transparent 70%)`
                }} />
                <div className="relative">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black" style={{ 
                    color: '#c9a55a',
                    textShadow: '0 0 20px rgba(201,165,90,0.1)'
                  }}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex items-center gap-6 animate-fadeInUp delay-400">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#c9a55a" style={{ color: '#c9a55a' }} />
              ))}
              <span className="text-sm font-semibold ml-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                4.9/5 Rating
              </span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['👤', '👤', '👤', '👤'].map((emoji, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0a1628] overflow-hidden flex items-center justify-center text-xs" style={{
                    background: 'rgba(201,165,90,0.2)'
                  }}>
                    {emoji}
                  </div>
                ))}
              </div>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                2,000+ Happy Clients
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Enhanced 3D Globe */}
        <div className="hidden lg:flex items-center justify-center relative h-[550px]">
          {/* Glow rings */}
          <div className="absolute w-[450px] h-[450px] rounded-full" style={{
            background: 'radial-gradient(circle, rgba(201,165,90,0.08), transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite'
          }} />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5" style={{
            animation: 'rotateRing 20s linear infinite'
          }} />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5" style={{
            animation: 'rotateRing 15s linear infinite reverse'
          }} />
          
          {/* Main globe container with 3D effect */}
          <div 
            className="relative w-80 h-80 rounded-full overflow-hidden transform transition-transform duration-300"
            style={{ 
              background: 'linear-gradient(135deg, #1a1060, #0a1628)',
              boxShadow: '0 0 80px rgba(201,165,90,0.2), inset 0 0 80px rgba(201,165,90,0.05)',
              border: '2px solid rgba(201,165,90,0.2)',
              transform: `perspective(1000px) rotateX(${mousePosition.y * -3}deg) rotateY(${mousePosition.x * 3}deg)`
            }}
          >
            {/* Globe shine */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)'
            }} />
            
            <div style={{ animation: 'panGlobalMap 30s linear infinite' }}>
              <Globe3D />
            </div>
            
            {/* Inner glow overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(circle at center, transparent 30%, rgba(10,22,40,0.6) 100%)'
            }} />
          </div>

          {/* Country markers with improved visibility */}
          {countriesData.map((country, index) => {
            const angle = (index / countriesData.length) * 360;
            const isHovered = hoveredCountry === index;
            
            return (
              <div 
                key={index} 
                className="absolute transition-all duration-100"
                style={{ 
                  transform: `rotate(${rotation + angle}deg) translateX(210px)`,
                }}
              >
                <div 
                  className="relative group"
                  style={{ 
                    transform: `rotate(-${rotation + angle}deg)`,
                    cursor: 'pointer',
                    zIndex: isHovered ? 100 : 1
                  }}
                  onMouseEnter={() => setHoveredCountry(index)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-full blur-md transition-all duration-300"
                      style={{
                        background: `radial-gradient(circle, ${country.color}, transparent)`,
                        transform: `scale(${isHovered ? 2.5 : 1.5})`,
                        opacity: isHovered ? 1 : 0.4
                      }}
                    />
                    
                    {/* Flag */}
                    <span 
                      className={`relative text-2xl block transition-all duration-300 ${isHovered ? 'scale-150' : 'scale-100'}`}
                      style={{
                        filter: isHovered ? 'drop-shadow(0 0 20px rgba(201,165,90,0.5))' : 'none'
                      }}
                    >
                      {country.flag}
                    </span>
                  </div>
                  
                  {/* Enhanced Tooltip */}
                  {isHovered && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2.5 rounded-xl whitespace-nowrap" style={{
                      background: 'rgba(10,22,40,0.95)',
                      border: '1px solid rgba(201,165,90,0.3)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                      zIndex: 100,
                      minWidth: '120px'
                    }}>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{country.flag}</span>
                        <div className="text-left">
                          <div className="text-sm font-bold" style={{ color: '#c9a55a' }}>{country.name}</div>
                          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{country.cities}</div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rotate-45" style={{
                        background: 'rgba(10,22,40,0.95)',
                        borderRight: '1px solid rgba(201,165,90,0.3)',
                        borderBottom: '1px solid rgba(201,165,90,0.3)'
                      }} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Center label with animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="relative">
                <Globe size={36} className="mx-auto mb-2" style={{ color: 'rgba(201,165,90,0.2)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed" style={{
                    borderColor: 'rgba(201,165,90,0.1)',
                    animation: 'spin 20s linear infinite'
                  }} />
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(201,165,90,0.3)' }}>
                Global Network
              </div>
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
          0%, 100% { backgroundPosition: 0% 50%; }
          50% { backgroundPosition: 100% 50%; }
        }
        
        @keyframes panGlobalMap {
          from { transform: translateX(0); }
          to { transform: translateX(-120px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes underlinePulse {
          0%, 100% { transform: scaleX(0.8); opacity: 0.3; }
          50% { transform: scaleX(1); opacity: 1; }
        }
        
        @keyframes slideLine {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes pulseRing {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
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
