import React, { useState } from 'react';
import { Send, CheckCircle, Lock, Phone, Mail, User, Globe, MessageSquare, ChevronDown, MapPin } from 'lucide-react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', visaType: '', country: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputStyle = {
    border: '2px solid #e5e7eb',
    fontSize: '15px',
    color: '#0a1628',
    width: '100%',
    borderRadius: '12px',
    outline: 'none',
    transition: 'border-color 0.2s',
    background: 'white'
  };

  const focusStyle = (e) => e.target.style.borderColor = '#c9a55a';
  const blurStyle  = (e) => e.target.style.borderColor = '#e5e7eb';

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
        <div className="text-center mb-12">
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
        <div className="rounded-3xl overflow-hidden shadow-2xl"
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
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                  style={{ background: 'linear-gradient(135deg, #c9a55a, #f0c040)' }}>
                  <CheckCircle size={36} style={{ color: '#0a1628' }} />
                </div>
                <h3 className="text-3xl font-bold mb-3" style={{ color: '#0a1628' }}>
                  Thank You, {formData.fullName.split(' ')[0] || 'there'}!
                </h3>
                <p className="text-gray-500 text-lg mb-2">Your consultation request has been received.</p>
                <p className="text-gray-400">
                  Our team will contact you within <strong style={{ color: '#c9a55a' }}>24 hours</strong> via email or WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">

                  {/* Full Name */}
                  <div>
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
                  <div>
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
                  <div>
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

                  {/* Visa Type */}
                  <div>
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
                        <option value="visit">Visit Visa</option>
                        <option value="work">Work Visa</option>
                        <option value="study">Study Abroad</option>
                        <option value="skilled">Skilled Immigration</option>
                        <option value="business">Business Immigration</option>
                        <option value="travel">Travel Management</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Country */}
                <div className="mb-6">
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
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="newzealand">New Zealand</option>
                      <option value="uae">United Arab Emirates</option>
                      <option value="europe">Europe (Schengen)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
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
                  className="w-full flex items-center justify-center space-x-3 py-4 rounded-full font-bold text-lg transition-all duration-300"
                  style={{
                    background: loading ? '#9ca3af' : 'linear-gradient(135deg, #c9a55a, #f0c040)',
                    color: '#0a1628',
                    boxShadow: loading ? 'none' : '0 10px 30px rgba(201,165,90,0.4)',
                    transform: loading ? 'none' : undefined,
                    cursor: loading ? 'not-allowed' : 'pointer'
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
