import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, Globe, MapPin, ChevronRight, Sparkles, TrendingUp, Award, Users, Star } from 'lucide-react';

// Counter Hook with improved easing
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
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

// Enhanced country data with coordinates
const countriesData = [
  { flag: '🇺🇸', name: 'United States', lat: 37.0902, lng: -95.7129, color: '#FF6B6B', cities: 'New York, LA, Chicago' },
  { flag: '🇬🇧', name: 'United Kingdom', lat: 55.3781, lng: -3.4360, color: '#4ECDC4', cities: 'London, Manchester' },
  { flag: '🇪🇸', name: 'Spain', lat: 40.4637, lng: -3.7492, color: '#FFE66D', cities: 'Madrid, Barcelona' },
  { flag: '🇩🇪', name: 'Germany', lat: 51.1657, lng: 10.4515, color: '#A8E6CF', cities: 'Berlin, Munich' },
  { flag: '🇵🇹', name: 'Portugal', lat: 39.3999, lng: -8.2245, color: '#FF8B94', cities: 'Lisbon, Porto' },
  { flag: '🇨🇦', name: 'Canada', lat: 56.1304, lng: -106.3468, color: '#88D8B0', cities: 'Toronto, Vancouver' },
  { flag: '🇦🇺', name: 'Australia', lat: -25.2744, lng: 133.7751, color: '#FFD93D', cities: 'Sydney, Melbourne' },
  { flag: '🇨🇳', name: 'China', lat: 35.8617, lng: 104.1954, color: '#6BCB77', cities: 'Beijing, Shanghai' },
  { flag: '🇳🇿', name: 'New Zealand', lat: -40.9006, lng: 174.8860, color: '#4D96FF', cities: 'Auckland, Wellington' },
  { flag: '🇦🇪', name: 'UAE', lat: 23.4241, lng: 53.8478, color: '#FF6B6B', cities: 'Dubai, Abu Dhabi' },
  { flag: '🇸🇬', name: 'Singapore', lat: 1.3521, lng: 103.8198, color: '#FF4757', cities: 'Singapore City' },
  { flag: '🇯🇵', name: 'Japan', lat: 36.2048, lng: 138.2529, color: '#2ED573', cities: 'Tokyo, Osaka' },
  { flag: '🇫🇷', name: 'France', lat: 46.6033, lng: 1.8883, color: '#1E90FF', cities: 'Paris, Lyon' },
  { flag: '🇮🇹', name: 'Italy', lat: 41.8719, lng: 12.5674, color: '#FF6B81', cities: 'Rome, Milan' },
  { flag: '🇳🇱', name: 'Netherlands', lat: 52.1326, lng: 5.2913, color: '#FFA502', cities: 'Amsterdam' },
];

// Professional Rotating Globe Component
const RotatingGlobe = ({ rotation, mousePosition }) => {
  const centerX = 480;
  const centerY = 300;
  const radius = 260;

  // Project latitude/longitude to 2D coordinates
  const projectTo2D = (lat, lng, rotX = 0, rotY = 0) => {
    const phi = (90 - lat) * Math.PI / 180;
    const theta = (lng + 180) * Math.PI / 180;
    
    const x = -radius * Math.sin(phi) * Math.cos(theta + rotX);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta + rotX);
    
    // Simple 3D rotation around Y axis
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const rotatedX = x * cosY + z * sinY;
    const rotatedZ = -x * sinY + z * cosY;
    
    // Perspective projection
    const perspective = 600 / (600 + rotatedZ);
    return {
      x: centerX + rotatedX * perspective,
      y: centerY + y * perspective * 0.8,
      z: rotatedZ,
      scale: perspective
    };
  };

  return (
    <svg viewBox="0 0 960 600" className="w-full h-full">
      <defs>
        <style>
          {`
            .globe-bg { fill: url(#globeGradient); }
            .grid-line { 
              stroke: rgba(201,165,90,0.08); 
              stroke-width: 0.5;
              fill: none;
            }
            .continent { 
              fill: rgba(201,165,90,0.2); 
              stroke: rgba(201,165,90,0.3); 
              stroke-width: 1.2;
              transition: all 0.3s ease;
            }
            .continent-glow {
              fill: rgba(201,165,90,0.08);
              stroke: rgba(201,165,90,0.15);
              stroke-width: 1;
            }
            .country-dot {
              fill: #c9a55a;
              transition: all 0.3s ease;
            }
            .country-dot:hover {
              fill: #f0c040;
              r: 6;
            }
          `}
        </style>
        <radialGradient id="globeGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1a2070" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="#0a1628" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#050a18" stopOpacity="1"/>
        </radialGradient>
        <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c9a55a" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#c9a55a" stopOpacity="0"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Globe Background */}
      <circle cx={centerX} cy={centerY} r={radius} className="globe-bg" stroke="rgba(201,165,90,0.15)" strokeWidth="1.5"/>
      
      {/* Outer glow */}
      <circle cx={centerX} cy={centerY} r={radius + 20} fill="url(#globeGlow)" opacity="0.5"/>

      {/* Grid Lines - Longitude */}
      {[-80, -60, -40, -20, 0, 20, 40, 60, 80].map((lng) => {
        const points = [];
        for (let lat = -90; lat <= 90; lat += 5) {
          const pos = projectTo2D(lat, lng, 0, rotation);
          points.push(`${pos.x},${pos.y}`);
        }
        return (
          <polyline 
            key={`long-${lng}`}
            points={points.join(' ')} 
            className="grid-line"
            opacity={0.4}
          />
        );
      })}

      {/* Grid Lines - Latitude */}
      {[-60, -30, 0, 30, 60].map((lat) => {
        const points = [];
        for (let lng = -180; lng <= 180; lng += 5) {
          const pos = projectTo2D(lat, lng, 0, rotation);
          points.push(`${pos.x},${pos.y}`);
        }
        return (
          <polyline 
            key={`lat-${lat}`}
            points={points.join(' ')} 
            className="grid-line"
            opacity={0.4}
          />
        );
      })}

      {/* Continents with proper projection */}
      {continentsData.map((continent, idx) => (
        <g key={`continent-${idx}`}>
          <path 
            d={continent.paths.map(path => 
              path.map(([lat, lng]) => {
                const pos = projectTo2D(lat, lng, 0, rotation);
                return `${pos.x},${pos.y}`;
              }).join(' ')
            ).join(' ')}
            className={continent.isGlow ? 'continent-glow' : 'continent'}
          />
        </g>
      ))}

      {/* Country Markers */}
      {countriesData.map((country, idx) => {
        const pos = projectTo2D(country.lat, country.lng, 0, rotation);
        const isVisible = pos.z > -50 && pos.scale > 0.3;
        
        if (!isVisible) return null;
        
        return (
          <g 
            key={`marker-${idx}`}
            transform={`translate(${pos.x},${pos.y})`}
            style={{ cursor: 'pointer' }}
          >
            {/* Marker glow */}
            <circle 
              cx="0" cy="0" r="12" 
              fill={country.color}
              opacity="0.15"
              filter="url(#glow)"
            >
              <animate attributeName="r" values="10;16;10" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            {/* Marker dot */}
            <circle 
              cx="0" cy="0" r="4" 
              fill={country.color}
              className="country-dot"
            >
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            {/* Flag emoji with scale based on depth */}
            <text 
              x="0" 
              y="-12" 
              textAnchor="middle"
              fontSize={12 * pos.scale}
              opacity={0.5 + 0.5 * pos.scale}
            >
              {country.flag}
            </text>
          </g>
        );
      })}

      {/* Shine effect */}
      <ellipse 
        cx={centerX - 80} 
        cy={centerY - 60} 
        rx="120" 
        ry="180" 
        fill="rgba(255,255,255,0.03)"
        transform={`rotate(-30, ${centerX - 80}, ${centerY - 60})`}
      />
      <ellipse 
        cx={centerX - 100} 
        cy={centerY - 100} 
        rx="60" 
        ry="100" 
        fill="rgba(255,255,255,0.02)"
        transform={`rotate(-30, ${centerX - 100}, ${centerY - 100})`}
      />
    </svg>
  );
};

// Continent data with lat/lng coordinates
const continentsData = [
  {
    paths: [
      // North America
      [[50, -130], [60, -120], [65, -100], [60, -80], [50, -70], [45, -60], [40, -75], [35, -80], [30, -85], [25, -90], [20, -95], [15, -100], [10, -90], [8, -80], [10, -70], [15, -60], [20, -50], [25, -60], [30, -70], [35, -80], [40, -85], [45, -90], [48, -100], [50, -110], [52, -120], [50, -130]],
      // Greenland
      [[70, -50], [75, -40], [80, -30], [80, -20], [75, -25], [70, -30], [65, -40], [70, -50]]
    ],
    isGlow: false
  },
  {
    paths: [
      // South America
      [[10, -75], [5, -70], [0, -60], [-5, -55], [-10, -50], [-15, -45], [-20, -40], [-25, -45], [-30, -50], [-35, -55], [-40, -60], [-45, -65], [-50, -70], [-55, -70], [-55, -65], [-50, -60], [-45, -55], [-40, -50], [-35, -45], [-30, -40], [-25, -35], [-20, -30], [-15, -35], [-10, -40], [-5, -45], [0, -50], [5, -55], [10, -60], [12, -65], [10, -75]]
    ],
    isGlow: false
  },
  {
    paths: [
      // Europe
      [[35, -10], [40, -10], [45, -5], [50, 0], [55, 5], [60, 10], [65, 15], [70, 20], [70, 30], [65, 30], [60, 25], [55, 20], [50, 15], [45, 10], [40, 5], [35, 0], [35, -5], [35, -10]]
    ],
    isGlow: false
  },
  {
    paths: [
      // Africa
      [[35, -5], [35, 0], [30, 5], [25, 10], [20, 15], [15, 20], [10, 25], [5, 30], [0, 35], [-5, 40], [-10, 40], [-15, 35], [-20, 30], [-25, 25], [-30, 20], [-35, 15], [-35, 20], [-30, 25], [-25, 30], [-20, 35], [-15, 40], [-10, 45], [-5, 50], [0, 50], [5, 45], [10, 40], [15, 35], [20, 30], [25, 25], [30, 20], [35, 15], [35, 10], [35, 5], [35, -5]]
    ],
    isGlow: false
  },
  {
    paths: [
      // Asia
      [[35, 0], [40, 5], [45, 10], [50, 15], [55, 20], [60, 25], [65, 30], [70, 35], [75, 40], [80, 45], [80, 50], [75, 55], [70, 60], [65, 65], [60, 70], [55, 75], [50, 80], [45, 85], [40, 90], [35, 95], [30, 100], [25, 105], [20, 110], [15, 115], [10, 120], [5, 125], [0, 130], [-5, 135], [-10, 140], [-10, 145], [-5, 150], [0, 150], [5, 145], [10, 140], [15, 135], [20, 130], [25, 125], [30, 120], [35, 115], [40, 110], [45, 105], [50, 100], [55, 95], [60, 90], [65, 85], [70, 80], [70, 75], [65, 70], [60, 65], [55, 60], [50, 55], [45, 50], [40, 45], [35, 40], [30, 35], [25, 30], [20, 25], [15, 20], [10, 15], [5, 10], [0, 5], [-5, 0], [35, 0]]
    ],
    isGlow: false
  },
  {
    paths: [
      // Australia
      [[-10, 130], [-15, 125], [-20, 120], [-25, 115], [-30, 115], [-35, 120], [-40, 125], [-40, 130], [-35, 135], [-30, 140], [-25, 145], [-20, 150], [-15, 155], [-10, 155], [-10, 150], [-10, 140], [-10, 130]]
    ],
    isGlow: false
  }
];

// Background Particles Component
const Particles = ({ count = 40 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 30 + 15,
    delay: Math.random() * 15,
    opacity: Math.random() * 0.2 + 0.05
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
            background: 'rgba(201,165,90,0.4)',
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
  
  const [rotation, setRotation] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Smooth rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.15) % (2 * Math.PI));
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #c9a55a, transparent 70%)',
            animation: 'float 20s ease-in-out infinite' 
          }} 
        />
        <div 
          className="absolute bottom-0 left-20 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ 
            background: 'radial-gradient(circle, #3b4fca, transparent 70%)',
            animation: 'float 15s ease-in-out infinite reverse' 
          }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-8"
          style={{ 
            background: 'radial-gradient(circle, #c9a55a, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite' 
          }} 
        />
      </div>

      <Particles />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(201,165,90,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="relative">
          {/* Decorative badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full animate-fadeInUp" style={{ 
            background: 'linear-gradient(135deg, rgba(201,165,90,0.12), rgba(240,192,64,0.05))',
            border: '1px solid rgba(201,165,90,0.15)',
            backdropFilter: 'blur(10px)',
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
              transform: `perspective(1000px) rotateX(${mousePosition.y * -4}deg) rotateY(${mousePosition.x * 4}deg)`
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
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full" style={{
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
                boxShadow: '0 0 40px rgba(201,165,90,0.15)'
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
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
                textDecoration: 'none'
              }}
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="group relative p-3 rounded-xl text-center animate-fadeInUp transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(201,165,90,0.08), rgba(240,192,64,0.02))',
                  border: '1px solid rgba(201,165,90,0.1)',
                  backdropFilter: 'blur(10px)',
                  animationDelay: `${i * 0.1}s`
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: `radial-gradient(circle at center, ${stat.color}15, transparent 70%)`
                }} />
                <div className="relative">
                  <div className="flex justify-center mb-1 group-hover:scale-110 transition-transform" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="text-xl font-black" style={{ 
                    color: '#c9a55a',
                    textShadow: '0 0 20px rgba(201,165,90,0.05)'
                  }}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-wider mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-6 flex items-center gap-6 animate-fadeInUp delay-400">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#c9a55a" style={{ color: '#c9a55a' }} />
              ))}
              <span className="text-xs font-semibold ml-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                4.9/5 Rating
              </span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['👤', '👤', '👤', '👤'].map((emoji, i) => (
                  <div key={i} className="w-5 h-5 rounded-full border border-[#0a1628] overflow-hidden flex items-center justify-center text-[8px]" style={{
                    background: 'rgba(201,165,90,0.15)'
                  }}>
                    {emoji}
                  </div>
                ))}
              </div>
              <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                2,000+ Happy Clients
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Professional Rotating Globe */}
        <div className="hidden lg:flex items-center justify-center relative h-[550px]">
          {/* Glow rings */}
          <div className="absolute w-[450px] h-[450px] rounded-full" style={{
            background: 'radial-gradient(circle, rgba(201,165,90,0.05), transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite'
          }} />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5" style={{
            animation: 'rotateRing 25s linear infinite'
          }} />
          <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5" style={{
            animation: 'rotateRing 18s linear infinite reverse'
          }} />
          
          {/* Main globe container with 3D effect */}
          <div 
            className="relative w-[420px] h-[420px] rounded-full overflow-hidden"
            style={{ 
              background: 'transparent',
              boxShadow: '0 0 80px rgba(201,165,90,0.05), inset 0 0 80px rgba(201,165,90,0.02)',
              transform: `perspective(1200px) rotateX(${mousePosition.y * -2}deg) rotateY(${mousePosition.x * 2}deg)`
            }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.03) 0%, transparent 60%)',
              borderRadius: '50%'
            }} />
            
            <div className="w-full h-full">
              <RotatingGlobe rotation={rotation} mousePosition={mousePosition} />
            </div>
            
            {/* Inner glow overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(circle at center, transparent 30%, rgba(5,10,24,0.4) 100%)',
              borderRadius: '50%'
            }} />
          </div>

          {/* Center label with animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="relative">
                <Globe size={28} className="mx-auto mb-1" style={{ color: 'rgba(201,165,90,0.15)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-dashed" style={{
                    borderColor: 'rgba(201,165,90,0.05)',
                    animation: 'spin 25s linear infinite'
                  }} />
                </div>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: 'rgba(201,165,90,0.2)' }}>
                15+ Countries
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
