import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ChevronRight, MapPin, Globe, Sparkles, Star, Users, TrendingUp, Clock } from 'lucide-react';

const destinations = {
  usa: {
    name: 'United States',
    flag: '🇺🇸',
    tagline: 'Land of opportunity awaits you',
    color: '#3b82f6',
    gradient: 'from-blue-600 to-blue-400',
    highlights: ['E-2 Treaty Investor Program', 'L1-A Executive Transfer', 'F-1 Student Visa', 'B1/B2 Tourist Visa'],
    stats: { visas: '50+', success: '92%', time: '3-6 months' },
    image: '🗽'
  },
  uk: {
    name: 'United Kingdom',
    flag: '🇬🇧',
    tagline: 'Gateway to Europe and beyond',
    color: '#ef4444',
    gradient: 'from-red-600 to-red-400',
    highlights: ['Skilled Worker Visa', 'Student Route Visa', 'Innovator Founder', 'Standard Visitor Visa'],
    stats: { visas: '40+', success: '88%', time: '2-5 months' },
    image: '🏰'
  },
  canada: {
    name: 'Canada',
    flag: '🇨🇦',
    tagline: "World's most welcoming nation",
    color: '#ef4444',
    gradient: 'from-red-600 to-red-400',
    highlights: ['Skilled Migration', 'C11 Work Permit', 'Study Permit', 'Startup Visa'],
    stats: { visas: '45+', success: '94%', time: '4-8 months' },
    image: '🍁'
  },
  australia: {
    name: 'Australia',
    flag: '🇦🇺',
    tagline: 'Sunshine, opportunity, and growth',
    color: '#f59e0b',
    gradient: 'from-amber-600 to-amber-400',
    highlights: ['Skilled Migration', 'Business Innovation', 'Student Visa', 'Visitor Visa (subclass 600)'],
    stats: { visas: '35+', success: '90%', time: '3-7 months' },
    image: '🦘'
  },
  uae: {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    tagline: 'Business hub of the Middle East',
    color: '#10b981',
    gradient: 'from-emerald-600 to-emerald-400',
    highlights: ['Golden Visa', 'Business Setup', 'Employment Visa', 'Tourist Visa'],
    stats: { visas: '30+', success: '95%', time: '1-3 months' },
    image: '🏙️'
  },
  europe: {
    name: 'Europe',
    flag: '🇪🇺',
    tagline: 'Schengen access across 27 nations',
    color: '#3b82f6',
    gradient: 'from-blue-600 to-blue-400',
    highlights: ['Schengen Visa', 'Skilled Migration', 'Jobseeker Visa', 'Student Exchange'],
    stats: { visas: '55+', success: '87%', time: '2-4 months' },
    image: '🏛️'
  },
  newzealand: {
    name: 'New Zealand',
    flag: '🇳🇿',
    tagline: 'Pure nature, pure opportunity',
    color: '#8b5cf6',
    gradient: 'from-purple-600 to-purple-400',
    highlights: ['Skilled Migrant', 'Investor Visa', 'Student Visa', 'Essential Skills'],
    stats: { visas: '25+', success: '93%', time: '4-9 months' },
    image: '🌿'
  }
};

const Destinations = () => {
  const [active, setActive] = useState('usa');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleTabChange = (key) => {
    setActive(key);
  };

  const dest = destinations[active];

  return (
    <section 
      id="destinations" 
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #f0f4ff 0%, #f8fafc 50%, #fef9ec 100%)' 
      }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #c9a55a, transparent 70%)',
            animation: 'float 20s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ 
            background: 'radial-gradient(circle, #3b4fca, transparent 70%)',
            animation: 'float 15s ease-in-out infinite reverse'
          }} 
        />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,165,90,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{
            background: 'rgba(201,165,90,0.1)',
            border: '1px solid rgba(201,165,90,0.2)'
          }}>
            <Globe size={16} style={{ color: '#c9a55a' }} />
            <span className="font-bold text-xs tracking-[0.3em] uppercase" style={{ color: '#c9a55a' }}>
              Where We Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
            Featured{' '}
            <span style={{
              background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Destinations
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Expert guidance for every major immigration destination worldwide
          </p>
        </div>

        {/* Country Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {Object.entries(destinations).map(([key, d], index) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`group relative flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                  !isActive ? 'hover:border-[#c9a55a]/40 hover:shadow-[0_4px_15px_rgba(201,165,90,0.15)]' : ''
                }`}
                style={{
                  background: isActive 
                    ? 'linear-gradient(135deg, #c9a55a, #f0c040)' 
                    : 'rgba(255,255,255,0.8)',
                  color: isActive ? '#0a1628' : '#374151',
                  border: isActive 
                    ? 'none' 
                    : '1px solid rgba(201,165,90,0.15)',
                  boxShadow: isActive 
                    ? '0 8px 30px rgba(201,165,90,0.4)' 
                    : '0 2px 8px rgba(0,0,0,0.04)',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  transitionDelay: `${index * 30}ms`
                }}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">{d.flag}</span>
                <span>{d.name}</span>
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse" style={{ background: '#c9a55a' }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Destination Card */}
        <div 
          key={active}
          className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[0_20px_80px_rgba(201,165,90,0.2)]"
          style={{ 
            border: '1px solid rgba(201,165,90,0.15)',
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Card Header */}
          <div 
            className="p-8 md:p-10 text-white relative overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, #020818 0%, #0a1628 40%, ${dest.color} 100%)`,
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
                style={{ 
                  background: `radial-gradient(circle, ${dest.color}, transparent)`,
                  animation: 'float 20s ease-in-out infinite'
                }} 
              />
              <div 
                className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10"
                style={{ 
                  background: `radial-gradient(circle, ${dest.color}, transparent)`,
                  animation: 'float 15s ease-in-out infinite reverse'
                }} 
              />
              <div className="absolute top-10 right-20 opacity-10">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: dest.color }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div 
                    className="text-7xl md:text-8xl animate-float"
                    style={{ animationDelay: '0.5s' }}
                  >
                    {dest.flag}
                  </div>
                  <div 
                    className="absolute -bottom-2 -right-2 text-2xl animate-pulse"
                    style={{ animationDuration: '2s' }}
                  >
                    {dest.image}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{dest.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin size={16} style={{ color: '#c9a55a' }} />
                    <p className="text-white/70">{dest.tagline}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-xs text-white/50 uppercase tracking-wider">Programs</div>
                  <div className="text-2xl font-bold" style={{ color: '#c9a55a' }}>{dest.highlights.length}+</div>
                </div>
                <div className="w-px h-10" style={{ background: 'rgba(255,255,255,0.1)' }} />
                <div className="text-center">
                  <div className="text-xs text-white/50 uppercase tracking-wider">Success Rate</div>
                  <div className="text-2xl font-bold" style={{ color: '#c9a55a' }}>{dest.stats.success}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={18} style={{ color: '#c9a55a' }} />
              <h4 className="text-sm font-bold uppercase tracking-wider" style={{ color: '#0a1628' }}>
                Key Immigration Programs
              </h4>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {dest.highlights.map((h, i) => (
                <div 
                  key={i}
                  className="group relative p-4 rounded-2xl transition-all duration-300 cursor-default overflow-hidden border border-[rgba(201,165,90,0.1)] hover:border-[#c9a55a]/40 hover:shadow-[0_10px_30px_rgba(201,165,90,0.12)] hover:scale-[1.03]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(240,244,255,0.8), rgba(254,249,236,0.8))',
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.05}s, border-color 0.3s, box-shadow 0.3s, transform 0.3s`
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                      style={{ 
                        background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                        boxShadow: '0 4px 15px rgba(201,165,90,0.3)'
                      }}
                    >
                      <CheckCircle size={18} style={{ color: '#0a1628' }} />
                    </div>
                    <span className="font-semibold text-sm" style={{ color: '#0a1628' }}>{h}</span>
                  </div>
                  {/* Hover line marker */}
                  <div 
                    className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ 
                      background: 'linear-gradient(90deg, #c9a55a, #f0c040)',
                      width: '0%'
                    }} 
                  />
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-2xl" style={{
              background: 'linear-gradient(135deg, rgba(10,22,40,0.05), rgba(201,165,90,0.05))',
              border: '1px solid rgba(201,165,90,0.1)'
            }}>
              {[
                { icon: <Users size={16} />, label: 'Visa Types', value: dest.stats.visas },
                { icon: <TrendingUp size={16} />, label: 'Success Rate', value: dest.stats.success },
                { icon: <Clock size={16} />, label: 'Processing Time', value: dest.stats.time }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1" style={{ color: '#c9a55a' }}>
                    {stat.icon}
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(10,22,40,0.5)' }}>
                      {stat.label}
                    </span>
                  </div>
                  <div className="font-bold" style={{ color: '#0a1628' }}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* CTA Option Group */}
            <div 
              className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
              style={{ borderTop: '1px solid rgba(201,165,90,0.1)' }}
            >
              <div className="flex items-center gap-2">
                <Star size={16} style={{ color: '#c9a55a' }} fill="#c9a55a" />
                <p className="text-sm" style={{ color: 'rgba(10,22,40,0.7)' }}>
                  Get personalized advice for <strong style={{ color: '#0a1628' }}>{dest.name}</strong> immigration
                </p>
              </div>
              <a 
                href="#consultation"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #0a1628, #1a2a4a)',
                  color: '#c9a55a',
                  border: '1px solid rgba(201,165,90,0.2)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,165,90,0.5)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,165,90,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,165,90,0.2)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
                }}
              >
                <span>Get Expert Consultation</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Destinations;
