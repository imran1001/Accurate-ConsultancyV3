import React, { useState } from 'react';
import { Send, CheckCircle, Lock, Phone, Mail, User, Globe, MessageSquare, ChevronDown, MapPin, AlertCircle } from 'lucide-react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', visaType: '', country: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formBody = new FormData();
      formBody.append('Full Name', formData.fullName);
      formBody.append('Email', formData.email);
      formBody.append('Phone / WhatsApp', formData.phone);
      formBody.append('Visa Category', formData.visaType);
      formBody.append('Destination Country', formData.country);
      formBody.append('Goals', formData.message);

      const response = await fetch('https://formspree.io/f/xyzdefgh', {
        method: 'POST',
        body: formBody,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', visaType: '', country: '', message: '' });
      } else {
        setError('Failed to submit. Please try again or contact us directly.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const filledFields = [formData.fullName, formData.email, formData.phone, formData.visaType, formData.country].filter(Boolean).length;
  const progressPercentage = (filledFields / 5) * 100;

  const inputStyle = {
    border: '2px solid #e5e7eb',
    fontSize: '15px',
    color: '#0a1628',
    width: '100%',
    borderRadius: '12px',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    background: 'white'
  };

  const focusStyle = (e) => {
    e.target.style.borderColor = '#c9a55a';
    e.target.style.boxShadow = '0 0 0 3px rgba(201,165,90,0.1)';
  };

  const blurStyle = (e) => {
    e.target.style.borderColor = '#e5e7eb';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section
      id="consultation"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f0f4ff 100%)' }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b4fca, transparent)' }} />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <span className="font-bold text-xs tracking-[0.3em] uppercase" style={{ color: '#c9a55a' }}>
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
            Book a Free Consultation
          </h2>
          <p className="text-gray-500 text-lg">
            Speak with one of our immigration experts — completely free, no obligation
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl overflow-hidden shadow-2xl animate-scaleIn"
          style={{ border: '1px solid rgba(201,165,90,0.2)' }}>

          {/* Top Banner */}
          <div className="py-4 px-8 flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, #020818, #0a1628)' }}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(201,165,90,0.15)', border: '1px solid rgba(201,165,90,0.4)' }}>
                <Lock size={13} style={{ color: '#c9a55a' }} />
              </div>
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Your information is 100% confidential and will never be shared
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-bold text-green-400">Experts Online</span>
            </div>
          </div>

          {/* Form Body */}
          <div className="p-8 md:p-12 bg-white">
            {submitted ? (
              <div className="text-center py-12 animate-slideInLeft">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 animate-scaleIn"
                  style={{ background: 'linear-gradient(135deg, #c9a55a, #f0c040)' }}>
                  <CheckCircle size={36} style={{ color: '#0a1628' }} />
                </div>
                <h3 className="text-3xl font-bold mb-3" style={{ color: '#0a1628' }}>
                  Thank You, {formData.fullName.split(' ')[0]}!
                </h3>
                <p className="text-gray-500 text-lg mb-2">Your consultation request has been received.</p>
                <p className="text-gray-400 mb-6">
                  Our team will contact you within <strong style={{ color: '#c9a55a' }}>2 hours</strong> via WhatsApp or email.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-left">
                  <p className="text-sm text-blue-900 font-semibold mb-2">What happens next:</p>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>✓ Initial consultation call scheduled</li>
                    <li>✓ Personalized visa assessment provided</li>
                    <li>✓ Documentation checklist sent</li>
                    <li>✓ Next steps explained in detail</li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '', visaType: '', country: '', message: '' });
                  }}
                  className="mt-6 px-6 py-2 rounded-full font-semibold text-sm"
                  style={{
                    background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                    color: '#0a1628',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Error Alert */}
                {error && (
                  <div className="mb-6 p-4 rounded-xl flex items-center space-x-3 animate-slideInLeft"
                    style={{ background: '#fee2e2', border: '1px solid #fecaca' }}>
                    <AlertCircle size={18} style={{ color: '#dc2626' }} />
                    <span style={{ color: '#991b1b', fontSize: '14px' }}>{error}</span>
                  </div>
                )}

                {/* Progress Bar */}
                <div className="mb-8 animate-fadeInUp">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wide" style={{ color: '#c9a55a' }}>
                      Form Progress
                    </span>
                    <span className="text-xs font-semibold" style={{ color: '#0a1628' }}>
                      {Math.round(progressPercentage)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-300"
                      style={{
                        background: 'linear-gradient(90deg, #c9a55a, #f0c040)',
                        width: `${progressPercentage}%`
                      }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">

                  {/* Full Name */}
                  <div className="animate-fadeInUp delay-100">
                    <label htmlFor="fullName" className="block text-sm font-bold mb-2" style={{ color: '#0a1628' }}>
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={17} className="absolute text-gray-400 pointer-events-none"
                        style={{ left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Ahmad Hassan"
                        style={{ ...inputStyle, paddingLeft: '42px', paddingRight: '16px', paddingTop: '13px', paddingBottom: '13px' }}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="animate-fadeInUp delay-150">
                    <label htmlFor="email" className="block text-sm font-bold mb-2" style={{ color: '#0a1628' }}>
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={17} className="absolute text-gray-400 pointer-events-none"
                        style={{ left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        style={{ ...inputStyle, paddingLeft: '42px', paddingRight: '16px', paddingTop: '13px', paddingBottom: '13px' }}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="animate-fadeInUp delay-200">
                    <label htmlFor="phone" className="block text-sm font-bold mb-2" style={{ color: '#0a1628' }}>
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone size={17} className="absolute text-gray-400 pointer-events-none"
                        style={{ left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+92 300 0000000"
                        style={{ ...inputStyle, paddingLeft: '42px', paddingRight: '16px', paddingTop: '13px', paddingBottom: '13px' }}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                  </div>

                  {/* Visa Type - ENHANCED */}
                  <div className="animate-fadeInUp delay-300">
                    <label htmlFor="visaType" className="block text-sm font-bold mb-2" style={{ color: '#0a1628' }}>
                      Visa Category *
                    </label>
                    <div className="relative">
                      <Globe size={17} className="absolute text-gray-400 pointer-events-none"
                        style={{ left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                      <ChevronDown size={17} className="absolute text-gray-400 pointer-events-none"
                        style={{ right: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                      <select
                        id="visaType"
                        name="visaType"
                        value={formData.visaType}
                        onChange={handleChange}
                        required
                        style={{ ...inputStyle, paddingLeft: '42px', paddingRight: '40px', paddingTop: '13px', paddingBottom: '13px', appearance: 'none' }}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      >
                        <option value="">Select a category</option>
                        <optgroup label="Visit & Tourism">
                          <option value="Tourist Visa">Tourist Visa</option>
                          <option value="Family Visit">Family Visit Visa</option>
                          <option value="Business Visit">Business Visit (B1/B2)</option>
                        </optgroup>
                        <optgroup label="Work & Employment">
                          <option value="Skilled Worker">Skilled Worker Visa</option>
                          <option value="Executive Transfer (L-1)">Executive Transfer (L-1)</option>
                          <option value="Investor (E-2)">Investor (E-2 Treaty)</option>
                          <option value="EB-5 Investment">EB-5 Investment</option>
                        </optgroup>
                        <optgroup label="Study & Education">
                          <option value="Student Visa">Student Visa (F-1/Student Visa)</option>
                          <option value="University Placement">University Placement & Counseling</option>
                        </optgroup>
                        <optgroup label="Skilled Immigration">
                          <option value="Express Entry">Express Entry (Canada)</option>
                          <option value="Points-Based Immigration">Points-Based Immigration</option>
                          <option value="Skilled Nomination">State Skilled Nomination</option>
                        </optgroup>
                        <optgroup label="Business & Investment">
                          <option value="Investor Program">Investor Program</option>
                          <option value="Entrepreneur Visa">Entrepreneur Visa</option>
                          <option value="Golden Visa">Golden Visa / Residency</option>
                        </optgroup>
                        <optgroup label="Specialty Programs">
                          <option value="Post-Refusal Appeal">Post-Refusal / Appeal</option>
                          <option value="Corporate Travel">Corporate Travel Management</option>
                          <option value="Family Sponsorship">Family Sponsorship</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Country */}
                <div className="mb-6 animate-fadeInUp delay-400">
                  <label htmlFor="country" className="block text-sm font-bold mb-2" style={{ color: '#0a1628' }}>
                    Destination Country *
                  </label>
                  <div className="relative">
                    <MapPin size={17} className="absolute text-gray-400 pointer-events-none"
                      style={{ left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                    <ChevronDown size={17} className="absolute text-gray-400 pointer-events-none"
                      style={{ right: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      style={{ ...inputStyle, paddingLeft: '42px', paddingRight: '40px', paddingTop: '13px', paddingBottom: '13px', appearance: 'none' }}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    >
                      <option value="">Select your destination</option>
                      <option value="United States">🇺🇸 United States</option>
                      <option value="United Kingdom">🇬🇧 United Kingdom</option>
                      <option value="Canada">🇨🇦 Canada</option>
                      <option value="Australia">🇦🇺 Australia</option>
                      <option value="New Zealand">🇳🇿 New Zealand</option>
                      <option value="United Arab Emirates">🇦🇪 United Arab Emirates</option>
                      <option value="Europe (Schengen)">🇪🇺 Europe (Schengen)</option>
                      <option value="Other">Other Destination</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8 animate-fadeInUp delay-500">
                  <label htmlFor="message" className="block text-sm font-bold mb-2" style={{ color: '#0a1628' }}>
                    Tell Us About Your Goals
                  </label>
                  <div className="relative">
                    <MessageSquare size={17} className="absolute text-gray-400 pointer-events-none"
                      style={{ left: '14px', top: '16px' }} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Briefly describe your immigration goals, timeline, or any specific questions..."
                      style={{ ...inputStyle, paddingLeft: '42px', paddingRight: '16px', paddingTop: '13px', paddingBottom: '13px', resize: 'none' }}
                      onFocus={focusStyle}
                      onBlur={blurStyle}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-3 py-4 rounded-full font-bold text-lg transition-all duration-300 animate-slideInRight"
                  style={{
                    background: loading ? '#9ca3af' : 'linear-gradient(135deg, #c9a55a, #f0c040)',
                    color: '#0a1628',
                    boxShadow: loading ? 'none' : '0 10px 30px rgba(201,165,90,0.4)',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    border: 'none'
                  }}
                  onMouseEnter={e => {
                    if (!loading) {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(201,165,90,0.6)';
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(201,165,90,0.4)';
                  }}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
