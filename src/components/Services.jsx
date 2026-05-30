import React, { useState } from 'react';
import { Plane, Briefcase, GraduationCap, Users, Building2, Compass, ChevronRight, X } from 'lucide-react';

const serviceData = [
  {
    icon: Plane,
    title: 'Visit Visa',
    short: 'Tourism, family visits, and short-term travel visas processed efficiently with expert guidance.',
    color: '#3b82f6',
    bg: 'from-blue-900 to-blue-800',
    details: {
      overview: 'Our visit visa service covers tourism, family reunification, and short-term travel. We handle everything from document preparation to embassy liaison.',
      benefits: ['Fast-track processing', 'Embassy coordination', 'Interview preparation', 'Multiple destination expertise'],
      timeline: '7–15 business days',
      requirements: 'Valid passport, financial proof, travel itinerary, invitation letter'
    }
  },
  {
    icon: Briefcase,
    title: 'Work Visa',
    short: 'Employment-based visas, corporate transfers, and skilled worker programs for global careers.',
    color: '#f59e0b',
    bg: 'from-amber-700 to-amber-600',
    details: {
      overview: 'We specialize in work permits across USA, UK, Canada, Australia, and UAE — handling every step from employer sponsorship to visa approval.',
      benefits: ['Employer sponsorship support', 'Skills assessment', 'Job market guidance', 'Relocation assistance'],
      timeline: '2–6 months',
      requirements: 'Job offer, educational credentials, work experience, professional certifications'
    }
  },
  {
    icon: GraduationCap,
    title: 'Study Abroad',
    short: 'Student visas, university placements, and education consulting for top global institutions.',
    color: '#8b5cf6',
    bg: 'from-purple-900 to-purple-800',
    details: {
      overview: 'Complete study visa consultancy from university selection to enrollment — for top institutions in the UK, Canada, Australia, and USA.',
      benefits: ['University shortlisting', 'Application strategy', 'Scholarship identification', 'Admission coordination'],
      timeline: '3–4 months',
      requirements: 'Academic transcripts, IELTS/TOEFL, financial proof, university admission letter'
    }
  },
  {
    icon: Users,
    title: 'Skilled Immigration',
    short: 'Express Entry, points-based pathways, and PR programs for qualified professionals worldwide.',
    color: '#10b981',
    bg: 'from-emerald-800 to-emerald-700',
    details: {
      overview: 'Permanent residency pathways through Express Entry, points-based systems, and provincial nominee programs in Canada, Australia, and New Zealand.',
      benefits: ['Points optimization', 'EOI preparation', 'Provincial sponsorship', 'Settlement support'],
      timeline: '4–8 months',
      requirements: 'Work experience, education, English proficiency, skills assessment certificate'
    }
  },
  {
    icon: Building2,
    title: 'Business Immigration',
    short: 'Investor visas, entrepreneur programs, and corporate immigration for global business expansion.',
    color: '#f97316',
    bg: 'from-orange-800 to-orange-700',
    details: {
      overview: 'Tailored solutions for entrepreneurs and investors — business visas, startup programs, and investment-based immigration across major jurisdictions.',
      benefits: ['Business plan review', 'Investment structuring', 'Source of funds documentation', 'Business registration support'],
      timeline: '3–6 months',
      requirements: 'Business plan, financial statements, investment proof, personal background'
    }
  },
  {
    icon: Compass,
    title: 'Travel Management',
    short: 'Comprehensive travel coordination, corporate logistics, and relocation management worldwide.',
    color: '#ec4899',
    bg: 'from-pink-900 to-pink-800',
    details: {
      overview: 'End-to-end travel and relocation management — from visa coordination and flight bookings to accommodation and settlement support.',
      benefits: ['Coordinated visa processing', 'Flight arrangements', 'Travel insurance guidance', 'Settlement orientation'],
      timeline: 'Flexible based on schedule',
      requirements: 'Immigration status confirmation, travel dates, accommodation preferences'
    }
  }
];

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
        <div className={`bg-gradient-to-r ${service.bg} p-8 text-white rounded-t-3xl`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.2)' }}>
                <service.icon size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-white/70 text-sm mt-1">Immigration Solution</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/20 transition-colors">
              <X size={22} />
            </button>
          </div>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-blue-950 mb-2">Overview</h3>
            <p className="text-gray-600 leading-relaxed">{service.details.overview}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-950 mb-3">Key Benefits</h3>
            <div className="space-y-2">
              {service.details.benefits.map((b, i) => (
                <div key={i} className="flex items-center space-x-3 bg-blue-50 p-3 rounded-xl">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: service.color }}>
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-800 font-medium text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
              <p className="text-xs text-amber-600 font-bold uppercase tracking-wide mb-1">Timeline</p>
              <p className="text-gray-800 font-semibold text-sm">{service.details.timeline}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <p className="text-xs text-blue-600 font-bold uppercase tracking-wide mb-1">Requirements</p>
              <p className="text-gray-700 text-xs">{service.details.requirements}</p>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button onClick={onClose}
              className="flex-1 py-3 rounded-full font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
              Close
            </button>
            <a href="#consultation" onClick={onClose}
              className="flex-1 py-3 rounded-full font-bold text-center transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #c9a55a, #f0c040)', color: '#0a1628' }}>
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold text-xs tracking-[0.3em] uppercase">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
            Core Immigration Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Comprehensive visa solutions tailored to your unique goals and circumstances.
            Click any card for full details.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group bg-white rounded-2xl p-8 cursor-pointer transition-all duration-400 flex flex-col h-full"
              style={{
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#c9a55a';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(201,165,90,0.15)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${service.bg} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={26} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300"
                style={{ color: '#0a1628' }}>
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm flex-grow mb-6">
                {service.short}
              </p>

              {/* Learn More */}
              <div className="flex items-center font-semibold text-sm space-x-1 mt-auto"
                style={{ color: '#c9a55a' }}>
                <span>View Details</span>
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-3xl p-10 text-center text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #020818, #0a1628, #1a1060)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }} />
          <h3 className="text-2xl md:text-3xl font-bold mb-3 relative z-10">
            50+ Countries Covered
          </h3>
          <p className="text-gray-300 mb-6 relative z-10">
            Don't see your destination? We handle applications worldwide.
          </p>
          <a href="#consultation"
            className="inline-flex items-center space-x-2 px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #c9a55a, #f0c040)', color: '#0a1628' }}>
            <span>Ask Our Experts</span>
            <ChevronRight size={18} />
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;
