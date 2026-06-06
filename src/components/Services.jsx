import React, { useState } from 'react';
import { Plane, Briefcase, GraduationCap, Users, Building2, Compass, ChevronRight, X, Clock, FileText } from 'lucide-react';

const serviceData = [
  {
    icon: Plane,
    title: 'Visit Visa',
    short: 'Tourism, family visits, and short-term travel visas processed with expert guidance from document preparation to embassy liaison.',
    color: '#3b82f6',
    bg: 'from-blue-900 to-blue-800',
    tag: 'Most Popular',
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
    bg: 'from-amber-700 to-amber-600',
    tag: 'High Demand',
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
    bg: 'from-purple-900 to-purple-800',
    tag: 'Students',
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
    bg: 'from-emerald-800 to-emerald-700',
    tag: 'PR Pathway',
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
    bg: 'from-orange-800 to-orange-700',
    tag: 'Investors',
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
    bg: 'from-pink-900 to-pink-800',
    tag: 'Corporate',
    details: {
      overview: 'End-to-end travel and relocation management — from visa coordination and flight logistics to accommodation and on-ground settlement.',
      benefits: ['Coordinated multi-visa processing', 'Flight & hotel arrangements', 'Travel insurance advisory', 'On-ground settlement support'],
      timeline: 'Flexible per your schedule',
      requirements: 'Immigration status confirmation, preferred travel dates, accommodation preferences'
    }
  }
];

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
        {/* Modal Header */}
        <div className={`bg-gradient-to-r ${service.bg} p-7 text-white rounded-t-3xl`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
                <service.icon size={26} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-white/70 text-sm mt-0.5">Premium Immigration Solution</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full transition-colors hover:bg-white/20">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-7 space-y-6">
          <p className="text-gray-600 leading-relaxed text-base">{service.details.overview}</p>

          {/* Benefits */}
          <div>
            <h3 className="font-bold text-blue-950 mb-3 text-base">Key Benefits</h3>
            <div className="grid gap-2">
              {service.details.benefits.map((b, i) => (
                <div key={i} className="flex items-center space-x-3 p-3 rounded-xl bg-blue-50 animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: service.color }}>
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-800 text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline & Requirements */}
          <div className="grid grid-cols-2 gap-4 animate-slideInLeft">
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
              <div className="flex items-center space-x-2 mb-2">
                <Clock size={14} style={{ color: '#c9a55a' }} />
                <p className="text-xs font-bold uppercase tracking-wide text-amber-700">Timeline</p>
              </div>
              <p className="text-gray-800 font-semibold text-sm">{service.details.timeline}</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
              <div className="flex items-center space-x-2 mb-2">
                <FileText size={14} style={{ color: '#3b82f6' }} />
                <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Documents</p>
              </div>
              <p className="text-gray-700 text-xs leading-relaxed">{service.details.requirements}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3">
            <button onClick={onClose} className="flex-1 py-3 rounded-full font-bold text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
              Close
            </button>
            <a href="#consultation" onClick={onClose} className="btn-primary flex-1 justify-center">
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="font-bold text-xs tracking-[0.3em] uppercase" style={{ color: '#c9a55a' }}>
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5" style={{ color: '#0a1628' }}>
            Core Immigration Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive visa solutions tailored to your unique goals. Click any card for full details.
          </p>
        </div>

        {/* 3x2 Grid with Staggered Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {serviceData.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelected(service)}
              className="relative bg-white rounded-2xl p-8 cursor-pointer flex flex-col h-full transition-all duration-300 animate-fadeInUp hover:scale-105"
              style={{ 
                border: '1.5px solid #f0f0f0', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#c9a55a';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(201,165,90,0.12)';
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#f0f0f0';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Tag */}
              <div className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-bold animate-scaleIn"
                style={{ background: 'rgba(201,165,90,0.1)', color: '#c9a55a', border: '1px solid rgba(201,165,90,0.3)' }}>
                {service.tag}
              </div>

              {/* Icon with Rotation */}
              <div className={`w-14 h-14 bg-gradient-to-br ${service.bg} rounded-2xl flex items-center justify-center mb-5 shadow-lg hover:animate-rotate transition-all`}>
                <service.icon className="text-white" size={26} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0a1628' }}>
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 flex-grow" style={{ fontSize: '15px' }}>
                {service.short}
              </p>

              {/* Link */}
              <div className="flex items-center space-x-1 font-bold text-sm mt-auto pt-4 group"
                style={{ color: '#c9a55a', borderTop: '1px solid #f5f5f5' }}>
                <span>View Details</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl p-10 md:p-12 text-center text-white relative overflow-hidden animate-fadeInUp"
          style={{ background: 'linear-gradient(135deg, #010610 0%, #0a1628 50%, #1a1060 100%)' }}>
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }} />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">50+ Countries Covered</h3>
            <p className="text-gray-400 mb-6 text-base">Don't see your destination? We handle applications worldwide.</p>
            <a href="#consultation"
              className="btn-primary"
              style={{ background: 'linear-gradient(135deg, #c9a55a, #f0c040)', color: '#0a1628' }}>
              <span>Ask Our Experts</span>
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Services;
