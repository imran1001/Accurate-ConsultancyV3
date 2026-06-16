import React, { useState, useEffect, useRef } from 'react';
import { 
  Plane, Briefcase, GraduationCap, Users, Building2, Compass, 
  ChevronRight, X, Clock, FileText, Sparkles, Star, 
  Shield, Award, TrendingUp, CheckCircle 
} from 'lucide-react';

const serviceData = [
  {
    icon: Plane,
    title: 'Visit Visa',
    short: 'Tourism, family visits, and short-term travel visas processed with expert guidance from document preparation to embassy liaison.',
    color: '#3b82f6',
    bg: 'from-blue-600 to-blue-400',
    tag: 'Most Popular',
    stats: { success: '94%', time: '7-15 days', cases: '500+' },
    details: {
      overview: 'Our visit visa service covers tourism, family reunification, and short-term travel. We handle everything from document preparation to embassy liaison for a stress-free experience.',
      benefits: ['Fast-track processing available', 'Complete embassy coordination', 'Interview coaching & preparation', 'Multi-country expertise'],
      timeline: '7–15 business days',
      requirements: 'Valid passport, bank statements, travel itinerary, invitation letter (if applicable)'
    }
  },
  {
    icon: Briefcase,
    title: 'Work Visa',
    short: 'Employment-based visas, corporate transfers, and skilled worker programs opening doors to global career opportunities.',
    color: '#f59e0b',
    bg: 'from-amber-500 to-amber-400',
    tag: 'High Demand',
    stats: { success: '88%', time: '2-6 months', cases: '300+' },
    details: {
      overview: 'We specialize in work permits across USA, UK, Canada, Australia, and UAE — managing employer sponsorship through to visa approval.',
      benefits: ['Employer sponsorship coordination', 'Skills assessment support', 'Job market guidance', 'Post-approval relocation help'],
      timeline: '2–6 months depending on country',
      requirements: 'Confirmed job offer, educational credentials, work experience records, professional certifications'
    }
  },
  {
    icon: GraduationCap,
    title: 'Study Abroad',
    short: 'Student visas, university placements, and education pathway consulting for top global institutions worldwide.',
    color: '#8b5cf6',
    bg: 'from-purple-600 to-purple-400',
    tag: 'Students',
    stats: { success: '92%', time: '3-4 months', cases: '400+' },
    details: {
      overview: 'Complete study visa consultancy from university shortlisting to enrollment confirmation — covering UK, Canada, Australia, and USA.',
      benefits: ['University shortlisting by profile', 'Application strategy & essays', 'Scholarship identification', 'Pre-departure orientation'],
      timeline: '3–4 months full process',
      requirements: 'Academic transcripts, IELTS/TOEFL scores, financial proof, university acceptance letter'
    }
  },
  {
    icon: Users,
    title: 'Skilled Immigration',
    short: 'Express Entry, points-based pathways, and permanent residency programs for qualified professionals seeking new homes.',
    color: '#10b981',
    bg: 'from-emerald-600 to-emerald-400',
    tag: 'PR Pathway',
    stats: { success: '90%', time: '4-8 months', cases: '250+' },
    details: {
      overview: 'Permanent residency pathways through Express Entry, points-based systems, and provincial nominee programs in Canada, Australia, and New Zealand.',
      benefits: ['Comprehensive points assessment', 'EOI lodgement & management', 'Provincial sponsorship guidance', 'Settlement support services'],
      timeline: '4–8 months full process',
      requirements: 'Relevant work experience, educational credentials, English proficiency, skills assessment certificate'
    }
  },
  {
    icon: Building2,
    title: 'Business Immigration',
    short: 'Investor visas, entrepreneur programs, and corporate immigration for business expansion and global ventures.',
    color: '#f97316',
    bg: 'from-orange-600 to-orange-400',
    tag: 'Investors',
    stats: { success: '95%', time: '3-6 months', cases: '150+' },
    details: {
      overview: 'Tailored immigration solutions for entrepreneurs and investors — covering business visas, startup programs, and investment-based pathways.',
      benefits: ['Business plan development', 'Investment structuring guidance', 'Source of funds documentation', 'Corporate registration support'],
      timeline: '3–6 months',
      requirements: 'Business plan, audited financial statements, investment proof, clean personal background'
    }
  },
  {
    icon: Compass,
    title: 'Travel Management',
    short: 'Comprehensive travel coordination, corporate logistics, and relocation management for seamless global mobility.',
    color: '#ec4899',
    bg: 'from-pink-600 to-pink-400',
    tag: 'Corporate',
    stats: { success: '97%', time: 'Flexible', cases: '200+' },
    details: {
      overview: 'End-to-end travel and relocation management — from visa coordination and flight logistics to accommodation and on-ground settlement.',
      benefits: ['Coordinated multi-visa processing', 'Flight & hotel arrangements', 'Travel insurance advisory', 'On-ground settlement support'],
      timeline: 'Flexible per your schedule',
      requirements: 'Immigration status confirmation, preferred travel dates, accommodation preferences'
    }
  }
];

// Enhanced Service Modal
const ServiceModal = ({ service, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ 
        background: 'rgba(0,0,0,0.8)', 
        backdropFilter: 'blur(12px)',
        animation: isVisible ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.3s ease-in'
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        style={{
          animation: isVisible ? 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'slideDown 0.3s ease-in',
          transformOrigin: 'center bottom'
        }}
      >
        {/* Modal Header */}
        <div 
          className={`bg-gradient-to-r ${service.bg} p-8 text-white rounded-t-3xl relative overflow-hidden`}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, white, transparent)' }}
            />
          </div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ 
                  background: 'rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
                }}
              >
                <service.icon size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Star size={14} fill="white" style={{ color: 'white' }} />
                  <span className="text-sm text-white/80">{service.tag}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-7 space-y-6">
          <p className="text-gray-600 leading-relaxed text-base">{service.details.overview}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl" style={{
            background: 'linear-gradient(135deg, rgba(201,165,90,0.05), rgba(201,165,90,0.02))',
            border: '1px solid rgba(201,165,90,0.1)'
          }}>
            {[
              { icon: <Award size={16} />, label: 'Success Rate', value: service.stats.success },
              { icon: <Clock size={16} />, label: 'Processing Time', value: service.stats.time },
              { icon: <Users size={16} />, label: 'Cases Handled', value: service.stats.cases }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1" style={{ color: '#c9a55a' }}>
                  {stat.icon}
                </div>
                <div className="font-bold text-sm" style={{ color: '#0a1628' }}>{stat.value}</div>
                <div className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(10,22,40,0.4)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle size={16} style={{ color: '#c9a55a' }} />
              <h3 className="font-bold" style={{ color: '#0a1628' }}>Key Benefits</h3>
            </div>
            <div className="grid gap-2">
              {service.details.benefits.map((b, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(240,244,255,0.6), rgba(254,249,236,0.4))',
                    border: '1px solid rgba(201,165,90,0.08)',
                    animation: `slideIn 0.4s ease-out ${i * 0.1}s both`
                  }}
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: service.color }}
                  >
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline & Requirements */}
          <div className="grid grid-cols-2 gap-4">
            <div 
              className="p-4 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(201,165,90,0.08), rgba(201,165,90,0.03))',
                border: '1px solid rgba(201,165,90,0.15)'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} style={{ color: '#c9a55a' }} />
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: '#c9a55a' }}>Timeline</p>
              </div>
              <p className="font-semibold text-sm" style={{ color: '#0a1628' }}>{service.details.timeline}</p>
            </div>
            <div 
              className="p-4 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(59,130,246,0.03))',
                border: '1px solid rgba(59,130,246,0.15)'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FileText size={14} style={{ color: '#3b82f6' }} />
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: '#3b82f6' }}>Documents</p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(10,22,40,0.7)' }}>{service.details.requirements}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-2">
            <button 
              onClick={onClose} 
              className="flex-1 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(10,22,40,0.05)',
                color: '#0a1628',
                border: '1px solid rgba(10,22,40,0.1)'
              }}
            >
              Close
            </button>
            <a 
              href="#consultation" 
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                color: '#0a1628',
                boxShadow: '0 4px 20px rgba(201,165,90,0.3)'
              }}
            >
              <span>Book Consultation</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slideDown {
          from { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to { 
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
        }
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

const Services = () => {
  const [selected, setSelected] = useState(null);
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

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' 
      }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #c9a55a, transparent 70%)',
            animation: 'float 20s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-15"
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
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{
            background: 'rgba(201,165,90,0.1)',
            border: '1px solid rgba(201,165,90,0.2)'
          }}>
            <Sparkles size={16} style={{ color: '#c9a55a' }} />
            <span className="font-bold text-xs tracking-[0.3em] uppercase" style={{ color: '#c9a55a' }}>
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-5" style={{ color: '#0a1628' }}>
            Core Immigration{' '}
            <span style={{
              background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Services
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive visa solutions tailored to your unique goals. Click any card for full details.
          </p>
        </div>

        {/* Enhanced Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceData.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelected(service)}
              className="group relative bg-white rounded-2xl p-7 cursor-pointer flex flex-col h-full transition-all duration-500"
              style={{ 
                border: '1px solid rgba(201,165,90,0.1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,165,90,0.3)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(201,165,90,0.12)';
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(201,165,90,0.1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              {/* Decorative gradient background */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.color}05, transparent 60%)`,
                }}
              />

              {/* Tag */}
              <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-4 self-start"
                style={{ 
                  background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                  color: service.color,
                  border: `1px solid ${service.color}20`
                }}
              >
                <Star size={12} fill={service.color} style={{ color: service.color }} />
                {service.tag}
              </div>

              {/* Icon with Animation */}
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`,
                    boxShadow: `0 8px 30px ${service.color}30`
                  }}
                >
                  <service.icon className="text-white" size={26} />
                </div>
              </div>

              {/* Content */}
              <div className="relative flex-grow">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0a1628' }}>
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed" style={{ fontSize: '14px' }}>
                  {service.short}
                </p>
              </div>

              {/* Stats mini */}
              <div className="relative flex items-center justify-between mt-4 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium" style={{ color: 'rgba(10,22,40,0.5)' }}>
                    ⏱ {service.stats.time}
                  </span>
                  <span className="text-xs font-medium" style={{ color: 'rgba(10,22,40,0.5)' }}>
                    ✅ {service.stats.success}
                  </span>
                </div>
                <div className="flex items-center gap-1 font-bold text-sm transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: '#c9a55a' }}>
                  <span>Details</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Banner */}
        <div className={`rounded-3xl p-10 md:p-12 text-center text-white relative overflow-hidden transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ background: 'linear-gradient(135deg, #010610 0%, #0a1628 40%, #1a1060 100%)' }}>
          
          {/* Animated background */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{ 
                background: 'radial-gradient(circle, #c9a55a, transparent)',
                animation: 'float 20s ease-in-out infinite'
              }} 
            />
            <div 
              className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15"
              style={{ 
                background: 'radial-gradient(circle, #3b4fca, transparent)',
                animation: 'float 15s ease-in-out infinite reverse'
              }} 
            />
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(201,165,90,0.05) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Globe size={24} style={{ color: '#c9a55a' }} />
              <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#c9a55a' }}>Global Coverage</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">50+ Countries Covered</h3>
            <p className="text-gray-400 text-base mb-6 max-w-xl mx-auto">
              Don't see your destination? We handle applications worldwide with our extensive network of partners.
            </p>
            <a 
              href="#consultation"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ 
                background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                color: '#0a1628',
                boxShadow: '0 4px 30px rgba(201,165,90,0.3)'
              }}
            >
              <span>Ask Our Experts</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
};

export default Services;
