import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Fatima Ahmed',
    role: 'Software Engineer',
    location: 'Lahore → Canada',
    image: '👩‍💼',
    stars: 5,
    quote: 'I was rejected twice before Accurate Consultancy took my case. Their strategic approach and attention to detail got me approved within 8 weeks. Their team is genuinely invested in your success, not just the fees.',
    visa: 'Express Entry (PR)'
  },
  {
    id: 2,
    name: 'Muhammad Hassan',
    role: 'Business Owner',
    location: 'Karachi → UAE',
    image: '👨‍💼',
    stars: 5,
    quote: 'Setting up business in Dubai seemed impossible until I met Imran. He handled everything from visa to setup, saving me months of stress. His expertise is unmatched in Pakistan. Highly recommended!',
    visa: 'Golden Visa + Business Setup'
  },
  {
    id: 3,
    name: 'Ayesha Khan',
    role: 'Medical Doctor',
    location: 'Islamabad → UK',
    image: '👩‍⚕️',
    stars: 5,
    quote: 'The personalized guidance and real-time updates throughout the process were outstanding. They made sure every document was perfect. My Standard Visitor Visa was approved in just 3 weeks!',
    visa: 'Standard Visitor Visa'
  },
  {
    id: 4,
    name: 'Ali Raza',
    role: 'Finance Manager',
    location: 'Rawalpindi → USA',
    image: '👨‍💼',
    stars: 5,
    quote: 'I had a prior B-1 refusal. Imran\'s expertise in US immigration and understanding of refusal reasons turned my case around. I got approved for my E-2 visa. Best investment ever.',
    visa: 'E-2 Treaty Investor'
  },
  {
    id: 5,
    name: 'Zainab Ali',
    role: 'Student',
    location: 'Multan → Australia',
    image: '👩‍🎓',
    stars: 5,
    quote: 'From university selection to visa approval — they guided me through everything. The checklist they provided was so detailed, I never second-guessed myself. Now studying at Sydney University!',
    visa: 'Student Visa (Subclass 500)'
  },
  {
    id: 6,
    name: 'Bilal Sheikh',
    role: 'Consultant',
    location: 'Lahore → Europe',
    image: '👨‍💼',
    stars: 5,
    quote: 'Got my Schengen visa approved for 5 years (!) thanks to their strategy. They made the application so strong that the embassy approved with zero requests. Worth every rupee.',
    visa: 'Schengen Visa (5 years)'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fef9ec 0%, #f0f4ff 100%)' }}
    >
      {/* Background Decorations */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b4fca, transparent)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="font-bold text-xs tracking-[0.3em] uppercase" style={{ color: '#c9a55a' }}>
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-lg">
            Real stories from real clients who achieved their immigration goals
          </p>
        </div>

        {/* Carousel */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl animate-scaleIn"
          style={{
            border: '1px solid rgba(201,165,90,0.2)',
            background: 'white'
          }}
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT — Stats and Quote */}
            <div
              className="p-10 md:p-12 flex flex-col justify-center"
              style={{
                background: 'linear-gradient(135deg, #0a1628, #1a1060)',
                color: 'white'
              }}
            >
              {/* Visa Type Badge */}
              <div className="inline-flex items-center space-x-2 w-fit mb-6 px-4 py-2 rounded-full animate-fadeInUp"
                style={{ background: 'rgba(201,165,90,0.15)', border: '1px solid rgba(201,165,90,0.4)' }}>
                <span style={{ fontSize: '18px' }}>🎯</span>
                <span className="text-sm font-bold" style={{ color: '#c9a55a' }}>
                  {testimonial.visa}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-2 mb-6 animate-fadeInUp delay-100">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    fill="#c9a55a"
                    style={{ color: '#c9a55a' }}
                    className="animate-float"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-xl md:text-2xl font-bold leading-relaxed mb-8 animate-fadeInUp delay-200 relative"
                style={{ color: 'rgba(255,255,255,0.95)' }}
              >
                <span
                  className="absolute -top-6 -left-3 text-5xl opacity-20"
                  style={{ color: '#c9a55a' }}
                >
                  "
                </span>
                {testimonial.quote}
                <span
                  className="absolute -bottom-6 -right-3 text-5xl opacity-20"
                  style={{ color: '#c9a55a' }}
                >
                  "
                </span>
              </blockquote>

              {/* Client Info */}
              <div className="animate-slideInLeft delay-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1" style={{ color: '#c9a55a' }}>
                  <MapPin size={14} />
                  <span className="text-sm font-semibold">{testimonial.location}</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Testimonial Selector */}
            <div className="p-10 md:p-12 flex flex-col justify-between bg-white">
              {/* Selector Dots */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  More Success Stories
                </p>
                <div className="space-y-2">
                  {testimonials.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setCurrent(idx);
                        setAutoPlay(false);
                      }}
                      className="w-full text-left p-4 rounded-xl transition-all duration-300 animate-fadeInUp group hover:scale-105"
                      style={{
                        animationDelay: `${idx * 0.05}s`,
                        background: current === idx ? 'linear-gradient(135deg, #f0f4ff, #faf8f3)' : 'transparent',
                        border: current === idx ? '2px solid #c9a55a' : '1px solid #e5e7eb'
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300"
                          style={{
                            background: current === idx ? 'linear-gradient(135deg, #c9a55a, #f0c040)' : '#f0f0f0'
                          }}
                        >
                          {t.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5
                            className="font-bold text-sm truncate transition-colors duration-300"
                            style={{ color: current === idx ? '#0a1628' : '#374151' }}
                          >
                            {t.name}
                          </h5>
                          <p
                            className="text-xs truncate transition-colors duration-300"
                            style={{ color: current === idx ? '#c9a55a' : '#9ca3af' }}
                          >
                            {t.visa}
                          </p>
                        </div>
                        <div
                          className="w-2 h-2 rounded-full transition-all duration-300"
                          style={{
                            background: current === idx ? '#c9a55a' : '#e5e7eb'
                          }}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: '1px solid #f0f0f0' }}>
                <div className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                  {current + 1} / {testimonials.length}
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #f0f4ff, #faf8f3)',
                      border: '1px solid #c9a55a'
                    }}
                  >
                    <ChevronLeft size={18} style={{ color: '#0a1628' }} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                      border: '1px solid #c9a55a'
                    }}
                  >
                    <ChevronRight size={18} style={{ color: '#0a1628' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;