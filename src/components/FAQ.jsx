import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "How long does visa processing typically take?",
    answer: "Processing times vary by destination and visa type. Most visit visas take 2-4 weeks, while work and study visas range from 4-12 weeks. Once submitted to immigration authorities, we provide real-time status updates. Our proactive follow-up typically accelerates processing by 2-3 weeks compared to self-applicants."
  },
  {
    id: 2,
    question: "What's your success rate and what makes it so high?",
    answer: "We maintain a 98% approval rate — among the highest in Pakistan. This comes from: (1) Meticulous document verification before submission, (2) Custom strategies for each applicant's unique profile, (3) 19+ years of regulatory expertise across 50+ countries, (4) Real-time response to embassy/consulate requests, and (5) Early identification and mitigation of potential refusal triggers."
  },
  {
    id: 3,
    question: "Do you handle visa rejections and appeals?",
    answer: "Yes. We specialize in post-rejection strategies including appeals, reapplications, and alternative visa routes. We analyze the refusal letter, identify the cause, and develop a stronger reapplication strategy. Many clients we've worked with after a rejection were approved in subsequent attempts due to improved documentation and strategy."
  },
  {
    id: 4,
    question: "What documents do I need to start?",
    answer: "It depends on your visa type. Generally: Valid passport, proof of funds, employment/education details, travel history, and personal identification. We provide a detailed checklist during your free consultation. You don't need to gather everything upfront — we guide you step-by-step through the entire documentation process."
  },
  {
    id: 5,
    question: "Do you offer payment plans or flexible pricing?",
    answer: "Yes. We offer flexible payment structures for corporate clients and complex cases. Retainer models available for businesses needing ongoing visa support. Book a free consultation to discuss pricing options tailored to your situation. We believe immigration services should be accessible, not prohibitively expensive."
  },
  {
    id: 6,
    question: "How do I schedule a free consultation?",
    answer: "Three ways: (1) Fill the form below and we'll contact you within 2 hours, (2) WhatsApp us directly at +92 316 0285386, or (3) Email imran@accurate-consultancy.com with your visa inquiry. Consultations are completely free, confidential, and have zero obligation. Book today and start your journey to success."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #f8fafc 100%)' }}
    >
      {/* Background Decorations */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b4fca, transparent)' }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="font-bold text-xs tracking-[0.3em] uppercase" style={{ color: '#c9a55a' }}>
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: '#0a1628' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about our visa and immigration services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="rounded-2xl overflow-hidden border transition-all duration-300 animate-fadeInUp hover:shadow-lg"
              style={{
                animationDelay: `${index * 0.08}s`,
                border: openId === faq.id ? '1px solid rgba(201,165,90,0.4)' : '1px solid #e5e7eb',
                background: openId === faq.id ? 'linear-gradient(135deg, #fef9ec, #faf8f3)' : 'white',
                boxShadow: openId === faq.id ? '0 10px 30px rgba(201,165,90,0.15)' : '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-start justify-between p-6 text-left transition-all duration-200 hover:bg-opacity-50"
                style={{
                  background: 'transparent'
                }}
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div
                    className="mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: openId === faq.id ? 'linear-gradient(135deg, #c9a55a, #f0c040)' : 'rgba(201,165,90,0.1)',
                      color: openId === faq.id ? '#0a1628' : '#c9a55a'
                    }}
                  >
                    <HelpCircle size={16} />
                  </div>
                  <h3
                    className="text-lg font-bold leading-tight transition-colors duration-200"
                    style={{ color: openId === faq.id ? '#0a1628' : '#1a1a1a' }}
                  >
                    {faq.question}
                  </h3>
                </div>

                <div
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0 ml-4 transition-transform duration-300"
                  style={{
                    transform: openId === faq.id ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <ChevronDown size={20} style={{ color: openId === faq.id ? '#c9a55a' : '#9ca3af' }} />
                </div>
              </button>

              {/* Answer (Animated) */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openId === faq.id ? '500px' : '0px',
                  opacity: openId === faq.id ? 1 : 0
                }}
              >
                <div className="px-6 pb-6 pt-0">
                  <div
                    className="pl-10 py-3 rounded-xl animate-slideInLeft"
                    style={{
                      background: 'linear-gradient(135deg, #f0f4ff, #faf8f3)',
                      borderLeft: '3px solid #c9a55a'
                    }}
                  >
                    <p className="text-gray-600 leading-relaxed" style={{ fontSize: '15px' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div
          className="mt-12 p-8 rounded-2xl text-center animate-slideInLeft"
          style={{
            background: 'linear-gradient(135deg, #0a1628, #1a1060)',
            border: '1px solid rgba(201,165,90,0.2)'
          }}
        >
          <p className="text-white mb-4">Still have questions? Our experts are ready to help.</p>
          
          <a
            href="#consultation"
            className="inline-flex items-center space-x-2 px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
              color: '#0a1628',
              textDecoration: 'none'
            }}
          >
            <span>Book Your Free Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;