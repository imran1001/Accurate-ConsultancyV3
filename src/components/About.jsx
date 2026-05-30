import React from 'react';
import { Award, Globe, Users, CheckCircle, Mail, Phone, Star, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  const expertise = [
    'Visit & Tourist Visa Processing',
    'Skilled Worker Immigration',
    'Business & Investor Visas',
    'Study Abroad Consulting',
    'Express Entry & PR Pathways',
    'Corporate Travel Management',
    'UK & European Immigration',
    'Canada & Australia PR',
  ];

  const achievements = [
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '5,000+', label: 'Cases Handled' },
    { icon: Globe, value: '50+', label: 'Countries Covered' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f0f4ff 50%, #fef9ec 100%)' }}
    >
      {/* Background Decorations */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b4fca, transparent)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="font-bold text-xs tracking-[0.3em] uppercase"
            style={{ color: '#c9a55a' }}
          >
            Meet the Expert
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 mb-4"
            style={{ color: '#0a1628' }}
          >
            Leadership & Expertise
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Decades of experience guiding thousands of clients to their global destinations
          </p>
        </div>

        {/* Main Card */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{ border: '1px solid rgba(201,165,90,0.2)' }}
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT — Photo + Info */}
            <div
              className="relative p-10 flex flex-col items-center justify-center text-white text-center"
              style={{ background: 'linear-gradient(135deg, #010610 0%, #0a1628 50%, #1a1060 100%)' }}
            >
              {/* Gold orb behind photo */}
              <div
                className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }}
              />

              {/* Photo */}
              <div className="relative mb-6">
                {/* Gold ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #c9a55a, #f0c040, #c9a55a)',
                    padding: '3px',
                    borderRadius: '50%'
                  }}
                />
                <div
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: '200px',
                    height: '200px',
                    border: '4px solid transparent',
                    background: 'linear-gradient(#0a1628, #0a1628) padding-box, linear-gradient(135deg, #c9a55a, #f0c040) border-box',
                    boxShadow: '0 0 40px rgba(201,165,90,0.4)'
                  }}
                >
                  <img
                    src="/photo.png"
                    alt="Muhammad Imran Malik - Managing Director"
                    style={{
                      width: '200px',
                      height: '200px',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block'
                    }}
                  />
                </div>
              </div>

              {/* Name & Title */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                  Muhammad Imran Malik
                </h3>
                <div
                  className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                    color: '#0a1628'
                  }}
                >
                  <Shield size={14} />
                  <span className="font-bold text-sm">Managing Director</span>
                </div>
                <p className="text-sm font-medium mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Accurate Consultancy · Lahore, Pakistan
                </p>

                {/* Star Rating */}
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={18} fill="#c9a55a" style={{ color: '#c9a55a' }} />
                  ))}
                  <span className="text-sm ml-2 font-semibold" style={{ color: '#c9a55a' }}>
                    4.9/5 Client Rating
                  </span>
                </div>

                {/* Contact Buttons */}
                <div className="flex items-center justify-center space-x-3 flex-wrap gap-2">
                  <a
                    href="mailto:info@accurate-consultancy.com"
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba
