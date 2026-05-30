import React from 'react';
import { Award, Globe, Users, CheckCircle, Mail, Phone, Shield, TrendingUp } from 'lucide-react';

var expertiseList = [
  'Visit and Tourist Visa Processing',
  'Skilled Worker Immigration',
  'Business and Investor Visas',
  'Study Abroad Consulting',
  'Express Entry and PR Pathways',
  'Corporate Travel Management',
  'UK and European Immigration',
  'Canada and Australia PR'
];

var statsList = [
  { value: '15+',   label: 'Years Experience' },
  { value: '5000+', label: 'Cases Handled'    },
  { value: '50+',   label: 'Countries'        },
  { value: '98%',   label: 'Success Rate'     }
];

function About() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 1rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f0f4ff 50%, #fef9ec 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#c9a55a', fontWeight: '700', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Meet the Expert
          </p>
          <h2 style={{ color: '#0a1628', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0.75rem 0 1rem' }}>
            Leadership and Expertise
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto' }}>
            Decades of experience guiding thousands of clients to their global destinations
          </p>
        </div>

        <div style={{ borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)', border: '1px solid rgba(201,165,90,0.2)' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>

            <div style={{ background: 'linear-gradient(135deg, #010610 0%, #0a1628 50%, #1a1060 100%)', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: 'white' }}>

              <div style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #c9a55a', boxShadow: '0 0 40px rgba(201,165,90,0.5)', marginBottom: '1.5rem', flexShrink: '0' }}>
                <img
                  src="/photo.png"
                  alt="Muhammad Imran Malik"
                  style={{ width: '200px', height: '200px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: '900', color: 'white', marginBottom: '0.5rem' }}>
                Muhammad Imran Malik
              </h3>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 20px', borderRadius: '9999px', background: 'linear-gradient(135deg, #c9a55a, #f0c040)', color: '#0a1628', fontWeight: '700', fontSize: '14px', marginBottom: '1rem' }}>
                <Shield size={14} />
                <span>Managing Director</span>
              </div>

              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', marginBottom: '1rem' }}>
                Accurate Consultancy, Lahore, Pakistan
              </p>

              <p style={{ color: '#c9a55a', fontWeight: '600', fontSize: '14px', marginBottom: '1.5rem' }}>
                4.9/5 Client Rating
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                
                  href="mailto:info@accurate-consultancy.com"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '9999px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}
                >
                  <Mail size={13} />
                  <span>Email</span>
                </a>
                
                  href="tel:+923160285386"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '9999px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}
                >
                  <Phone size={13} />
                  <span>Call</span>
                </a>
                
                  href="https://wa.me/923160285386"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '9999px', background: '#25D366', color: 'white', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}
                >
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            <div style={{ background: 'white', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

              <h4 style={{ color: '#0a1628', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>
                About Muhammad Imran Malik
              </h4>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1rem', fontSize: '15px' }}>
                With over 15 years of dedicated experience in visa and immigration consulting,
                Muhammad Imran Malik has established himself as one of Pakistan's most trusted
                immigration professionals.
              </p>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '1rem', fontSize: '15px' }}>
                As the Managing Director of Accurate Consultancy, he has personally guided over
                5,000 clients across 50+ countries, from visit visas to complex investor
                immigration programs in the USA, UK, Canada, and Australia.
              </p>
              <p style={{ color: '#4b5563', lineHeight: '1.8', marginBottom: '2rem', fontSize: '15px' }}>
                His deep regulatory knowledge, ethical approach, and commitment to client success
                has earned Accurate Consultancy a 98% approval rate, one of the highest in the
                industry.
              </p>

              <h4 style={{ color: '#0a1628', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                Areas of Expertise
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '2rem' }}>
                {expertiseList.map(function(item, i) {
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #f0f0f0' }}>
                      <CheckCircle size={13} style={{ color: '#c9a55a', flexShrink: 0 }} />
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#374151' }}>{item}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', padding: '20px', borderRadius: '16px', background: 'linear-gradient(135deg, #0a1628, #1a1060)', border: '1px solid rgba(201,165,90,0.2)' }}>
                {statsList.map(function(s, i) {
                  return (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ color: 'white', fontWeight: '900', fontSize: '1.1rem' }}>{s.value}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '4px', lineHeight: '1.3' }}>{s.label}</div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
