import React, { useState, useEffect } from 'react';
import { Award, Globe, Users, CheckCircle, Mail, Phone, Star, Shield, TrendingUp, MapPin, Clock, Sparkles, Briefcase, GraduationCap, Building2, HeartHandshake } from 'lucide-react';

const expertise = [
  { icon: Briefcase, label: 'Visit & Tourist Visa Processing' },
  { icon: Building2, label: 'Skilled Worker Immigration' },
  { icon: TrendingUp, label: 'Business & Investor Visas' },
  { icon: GraduationCap, label: 'Study Abroad Consulting' },
  { icon: Globe, label: 'Express Entry & PR Pathways' },
  { icon: Clock, label: 'Corporate Travel Management' },
  { icon: MapPin, label: 'UK & European Immigration' },
  { icon: HeartHandshake, label: 'Canada & Australia PR' }
];

const achievements = [
  { icon: Award, value: '19+', label: 'Years Experience', color: '#FF6B6B' },
  { icon: Users, value: '2,000+', label: 'Cases Handled', color: '#4ECDC4' },
  { icon: Globe, value: '50+', label: 'Countries Covered', color: '#FFE66D' },
  { icon: TrendingUp, value: '90%', label: 'Success Rate', color: '#A8E6CF' }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStat, setActiveStat] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(165deg, #f8fafc 0%, #f0f4ff 30%, #fef9ec 70%, #f8fafc 100%)'
      }}
    >
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{ 
            background: 'radial-gradient(circle, #c9a55a, transparent 70%)',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-25"
          style={{ 
            background: 'radial-gradient(circle, #3b4fca, transparent 70%)',
            animation: 'float 15s ease-in-out infinite reverse'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ 
            background: 'radial-gradient(circle, #c9a55a, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(201,165,90,0.3) 1px, transparent 1px),
          radial-gradient(circle at 80% 50%, rgba(201,165,90,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Enhanced */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{
            background: 'rgba(201,165,90,0.1)',
            border: '1px solid rgba(201,165,90,0.2)'
          }}>
            <Sparkles size={16} style={{ color: '#c9a55a' }} />
            <span className="font-bold text-xs tracking-[0.3em] uppercase" style={{ color: '#c9a55a' }}>
              Meet the Expert
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
            Leadership &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Expertise
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Decades of experience guiding thousands of clients to their global destinations
          </p>
        </div>

        {/* Main Card - Enhanced */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 hover:shadow-[0_20px_80px_rgba(201,165,90,0.3)]"
          style={{
            border: '1px solid rgba(201,165,90,0.15)',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT - Enhanced Photo Section */}
            <div
              className="relative p-8 md:p-12 flex flex-col items-center justify-center text-center"
              style={{
                background: 'linear-gradient(145deg, #010610 0%, #0a1628 40%, #1a1060 80%, #0a1628 100%)',
                overflow: 'hidden'
              }}
            >
              {/* Animated Background Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: Math.random() * 4 + 2,
                      height: Math.random() * 4 + 2,
                      background: 'rgba(201,165,90,0.3)',
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `floatParticle ${10 + Math.random() * 20}s linear infinite`,
                      animationDelay: `${Math.random() * 10}s`
                    }}
                  />
                ))}
              </div>

              {/* Gold orb behind photo - Enhanced */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, #c9a55a, transparent 70%)',
                  animation: 'pulse 4s ease-in-out infinite'
                }}
              />

              {/* Photo with Enhanced Animation */}
              <div className="relative mb-8">
                <div
                  className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{
                    background: 'conic-gradient(from 0deg, #c9a55a, #f0c040, #ffd700, #f0c040, #c9a55a)',
                    padding: '4px',
                    borderRadius: '50%',
                    width: '220px',
                    height: '220px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                />
                <div
                  className="relative rounded-full overflow-hidden transform transition-all duration-700 hover:scale-105"
                  style={{
                    width: '210px',
                    height: '210px',
                    margin: '0 auto',
                    border: '4px solid transparent',
                    background: 'linear-gradient(#0a1628, #0a1628) padding-box, linear-gradient(135deg, #c9a55a, #f0c040) border-box',
                    boxShadow: '0 0 60px rgba(201,165,90,0.3), inset 0 0 60px rgba(201,165,90,0.1)'
                  }}
                >
                  <img
                    src="/photo.webp"
                    alt="Muhammad Imran Malik - FOUNDER & Managing Director"
                    style={{
                      width: '210px',
                      height: '210px',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block'
                    }}
                  />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, transparent 100%)'
                  }} />
                </div>
              </div>

              {/* Name & Title - Enhanced */}
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                  Muhammad Imran Malik
                </h3>
                <div
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 transform hover:scale-105 transition-transform duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                    color: '#0a1628',
                    boxShadow: '0 0 30px rgba(201,165,90,0.3)'
                  }}
                >
                  <Shield size={16} />
                  <span className="font-bold text-sm">Founder & Managing Director</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-5">
                  <MapPin size={14} style={{ color: 'rgba(255,255,255,0.4)' }} />
                  <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Accurate Consultancy · Lahore, Pakistan
                  </p>
                </div>

                {/* Star Rating - Enhanced */}
                <div className="flex items-center justify-center space-x-1 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="#c9a55a"
                      style={{ color: '#c9a55a' }}
                      className="animate-pulse-slow"
                      style={{
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                  <span className="text-sm ml-2 font-semibold px-3 py-1 rounded-full" style={{
                    background: 'rgba(201,165,90,0.2)',
                    color: '#c9a55a'
                  }}>
                    4.9/5 Client Rating
                  </span>
                </div>

                {/* Contact Buttons - Enhanced */}
                <div className="flex items-center justify-center space-x-3 flex-wrap gap-3">
                  <a
                    href="mailto:imran@accurate-consultancy.com"
                    aria-label="Send email"
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'white',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(201,165,90,0.6)';
                      e.currentTarget.style.background = 'rgba(201,165,90,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    }}
                  >
                    <Mail size={16} className="group-hover:scale-110 transition-transform" />
                    <span>Email</span>
                  </a>
                  
                  <a
                    href="tel:+923160285386"
                    aria-label="Call"
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'white',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(201,165,90,0.6)';
                      e.currentTarget.style.background = 'rgba(201,165,90,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    }}
                  >
                    <Phone size={16} className="group-hover:scale-110 transition-transform" />
                    <span>Call</span>
                  </a>
                  
                  <a
                    href="https://wa.me/923160285386"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="group flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-110 hover:shadow-xl"
                    style={{
                      background: '#25D366',
                      color: 'white',
                      textDecoration: 'none',
                      boxShadow: '0 4px 20px rgba(37,211,102,0.3)'
                    }}
                  >
                    <span className="group-hover:scale-110 transition-transform">💬</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT - Enhanced Bio Section */}
            <div className="p-8 md:p-12 bg-white/80 backdrop-blur-sm flex flex-col justify-center">
              {/* Bio - Enhanced */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: '#0a1628' }}>
                  <span className="w-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #c9a55a, #f0c040)' }} />
                  About Muhammad Imran Malik
                </h4>
                
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p className="text-base">
                    With over <strong className="text-gray-800">19+ years of dedicated experience</strong> in 
                    visa and immigration consulting across the <strong className="text-gray-800">UAE and Pakistan</strong>, 
                    Muhammad Imran Malik has established himself as one of the region's most trusted immigration professionals.
                  </p>
                  <p className="text-base">
                    As the <strong className="text-gray-800">Founder & Managing Director</strong> of Accurate Consultancy, 
                    he has personally guided over <strong className="text-gray-800">2,000+ clients</strong> across 
                    50+ countries — from visit visas to complex investor immigration programs.
                  </p>
                  <p className="text-base">
                    His deep regulatory knowledge, ethical approach, and commitment to client success has 
                    earned Accurate Consultancy a <span className="font-bold" style={{ color: '#c9a55a' }}>90% approval rate</span> — 
                    one of the highest in the industry.
                  </p>
                </div>
              </div>

              {/* Expertise Grid - Enhanced */}
              <div className="mb-8">
                <h4 className="text-base font-bold mb-4 uppercase tracking-wider flex items-center gap-2" style={{ color: '#0a1628' }}>
                  <Briefcase size={18} style={{ color: '#c9a55a' }} />
                  Areas of Expertise
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {expertise.map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-2 py-2.5 px-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #f8fafc, #fef9ec)',
                        border: '1px solid rgba(201,165,90,0.1)',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(201,165,90,0.3)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #fef9ec, #f8fafc)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(201,165,90,0.1)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #f8fafc, #fef9ec)';
                      }}
                    >
                      <item.icon size={14} style={{ color: '#c9a55a', flexShrink: 0 }} />
                      <span className="text-xs font-medium" style={{ color: '#374151' }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Row - Enhanced with animation */}
              <div
                className="grid grid-cols-4 gap-3 p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0a1628, #1a1060, #0a1628)',
                  border: '1px solid rgba(201,165,90,0.2)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                }}
              >
                {/* Animated background bar */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'linear-gradient(90deg, transparent, rgba(201,165,90,0.05), transparent)',
                  animation: 'slideBar 4s ease-in-out infinite'
                }} />
                
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className="relative text-center group cursor-pointer"
                    onMouseEnter={() => setActiveStat(i)}
                    onMouseLeave={() => setActiveStat(null)}
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at center, ${a.color}20, transparent 70%)`
                      }}
                    />
                    <a.icon
                      size={20}
                      className="mx-auto mb-2 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                      style={{ color: a.color }}
                    />
                    <div
                      className="font-black text-white transition-all duration-300 group-hover:scale-110"
                      style={{ fontSize: 'clamp(1rem, 1.5vw, 1.3rem)' }}
                    >
                      {a.value}
                    </div>
                    <div
                      className="text-xs leading-tight mt-1 font-medium"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      {a.label}
                    </div>
                    
                    {/* Animated indicator */}
                    {activeStat === i && (
                      <div
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${a.color}, transparent)`,
                          animation: 'pulse 1s ease-in-out infinite'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.7; }
        }
        
        @keyframes floatParticle {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes slideBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes spin {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg); }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
