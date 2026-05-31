import React from 'react';
import { Award, FileCheck, Shield, TrendingUp, Star, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Unmatched Expertise',
      description: '19+ years of proven success with thousands of approved visa applications across multiple jurisdictions and immigration categories.'
    },
    {
      icon: FileCheck,
      title: 'Personalised Case Analysis',
      description: 'Every client receives a tailored immigration strategy designed specifically for their unique profile, goals, and circumstances.'
    },
    {
      icon: Shield,
      title: 'End-to-End Transparency',
      description: 'Complete documentation support with real-time status updates and honest assessments — no surprises, ever.'
    },
    {
      icon: TrendingUp,
      title: 'Industry-Leading Success Rate',
      description: 'Our meticulous case preparation and deep regulatory knowledge consistently deliver above-industry approval rates.'
    }
  ];

  const stats = [
    { value: '4.9/5', label: 'Client Rating', icon: Star },
    { value: '98%', label: 'Approval Rate', icon: CheckCircle },
    { value: '15+', label: 'Years Active', icon: Award }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold text-xs tracking-[0.3em] uppercase">Our Advantage</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
            Why Choose Accurate Consultancy
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Your success is built on our foundation of excellence, integrity, and deep expertise
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl p-8 relative overflow-hidden transition-all duration-400 cursor-default"
              style={{
                background: 'linear-gradient(135deg, #020818, #0a1628)',
                border: '1px solid rgba(201,165,90,0.15)'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,165,90,0.5)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,165,90,0.15)'}
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, #c9a55a, #f0c040)' }}>
                  <item.icon size={26} style={{ color: '#0a1628' }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="rounded-3xl p-8 md:p-12"
          style={{
            background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
            boxShadow: '0 20px 60px rgba(201,165,90,0.3)'
          }}>
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="flex justify-center mb-2">
                  <stat.icon size={28} style={{ color: '#0a1628', opacity: 0.7 }} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#0a1628' }}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'rgba(10,22,40,0.7)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
