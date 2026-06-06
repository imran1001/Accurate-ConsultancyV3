import React, { useState } from 'react';
import { CheckCircle, ChevronRight, MapPin } from 'lucide-react';

const destinations = {
  usa: {
    name: 'United States',
    flag: '🇺🇸',
    tagline: 'Land of opportunity awaits you',
    color: '#3b82f6',
    highlights: ['E-2 Treaty Investor Program', 'L1-A Executive Transfer', 'F-1 Student Visa', 'B1/B2 Tourist Visa']
  },
  uk: {
    name: 'United Kingdom',
    flag: '🇬🇧',
    tagline: 'Gateway to Europe and beyond',
    color: '#ef4444',
    highlights: ['Skilled Worker Visa', 'Student Route Visa', 'Innovator Founder', 'Standard Visitor Visa']
  },
  canada: {
    name: 'Canada',
    flag: '🇨🇦',
    tagline: 'World\'s most welcoming nation',
    color: '#ef4444',
    highlights: ['Skilled Migration', 'C11 Work Permit', 'Study Permit', 'Startup Visa']
  },
  australia: {
    name: 'Australia',
    flag: '🇦🇺',
    tagline: 'Sunshine, opportunity, and growth',
    color: '#f59e0b',
    highlights: ['Skilled Migration', 'Business Innovation', 'Student Visa', 'Visitor Visa (subclass 600)']
  },
  uae: {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    tagline: 'Business hub of the Middle East',
    color: '#10b981',
    highlights: ['Golden Visa', 'Business Setup', 'Employment Visa', 'Tourist Visa']
  },
  europe: {
    name: 'Europe',
    flag: '🇪🇺',
    tagline: 'Schengen access across 27 nations',
    color: '#3b82f6',
    highlights: ['Schengen Visa', 'Skilled Migration', 'Jobseeker Visa', 'Student Exchange']
  },
  newzealand: {
    name: 'New Zealand',
    flag: '🇳🇿',
    tagline: 'Pure nature, pure opportunity',
    color: '#8b5cf6',
    highlights: ['Skilled Migrant', 'Investor Visa', 'Student Visa', 'Essential Skills']
  }
};

const Destinations = () => {
  const [active, setActive] = useState('usa');
  const [transitionKey, setTransitionKey] = useState(0);
  const dest = destinations[active];

  const handleTabChange = (key) => {
    setActive(key);
    setTransitionKey(prev => prev + 1);
  };

  return (
    <section id="destinations" className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #f8fafc 100%)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header with Animation */}
        <div className="text-center mb-14 animate-fadeInUp">
          <span className="text-amber-600 font-bold text-xs tracking-[0.3em] uppercase">Where We Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
            Featured Destinations
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Expert guidance for every major immigration destination worldwide
          </p>
        </div>

        {/* Country Tabs with Animation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-slideInLeft">
          {Object.entries(destinations).map(([key, d], index) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className="flex items-center space-x-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.05}s`,
                ...(active === key ? {
                  background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                  color: '#0a1628',
                  boxShadow: '0 8px 25px rgba(201,165,90,0.4)',
                  transform: 'scale(1.05)'
                } : {
                  background: 'white',
                  color: '#374151',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                })
              }}
            >
              <span className="text-xl">{d.flag}</span>
              <span>{d.name}</span>
            </button>
          ))}
        </div>

        {/* Active Destination Card with Smooth Transition */}
        <div key={transitionKey} className="rounded-3xl overflow-hidden shadow-2xl animate-scaleIn"
          style={{ border: '1px solid rgba(201,165,90,0.2)' }}>

          {/* Card Header */}
          <div className="p-8 md:p-10 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #020818, #0a1628, #1a1060)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{ background: `radial-gradient(circle, ${dest.color}, transparent)` }} />
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-5">
                <div className="text-6xl md:text-7xl animate-float">{dest.flag}</div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold">{dest.name}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <MapPin size={16} style={{ color: '#c9a55a' }} />
                    <p className="text-gray-300">{dest.tagline}</p>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-right">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Available Programs</div>
                  <div className="text-2xl font-bold" style={{ color: '#c9a55a' }}>{dest.highlights.length}+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid with Staggered Animation */}
          <div className="p-8 md:p-10 bg-white">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">
              Key Immigration Programs
            </h4>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {dest.highlights.map((h, i) => (
                <div key={i}
                  className="flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 cursor-default group animate-fadeInUp hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #f0f4ff, #fef9ec)',
                    border: '1px solid rgba(201,165,90,0.15)',
                    animationDelay: `${i * 0.08}s`
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,165,90,0.5)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(201,165,90,0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,165,90,0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-scaleIn"
                    style={{ background: 'linear-gradient(135deg, #c9a55a, #f0c040)' }}>
                    <CheckCircle size={18} style={{ color: '#0a1628' }} />
                  </div>
                  <span className="font-semibold text-blue-950">{h}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 animate-slideInRight"
              style={{ borderTop: '1px solid #f3f4f6' }}>
              <p className="text-gray-500 text-sm">
                Get personalized advice for <strong>{dest.name}</strong> immigration
              </p>
              <a href="#consultation"
                className="inline-flex items-center space-x-2 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #0a1628, #1a2a4a)',
                  color: '#c9a55a',
                  border: '1px solid rgba(201,165,90,0.3)'
                }}>
                <span>Get Expert Consultation</span>
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
