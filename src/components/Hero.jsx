import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Shield, Award, Users, TrendingUp, Globe, CheckCircle, Star, Phone, Mail } from 'lucide-react';

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let startTime = null;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  return count;
};

const credentials = [
  'Visa & Immigration Specialist',
  'UAE & Pakistan Licensed',
  'OISC Accredited Advisor',
  'Corporate Relocation Expert',
];

const quickStats = [
  { icon: Award,       val: 19,    sfx: '+', label: 'Years Experience' },
  { icon: TrendingUp,  val: 90,    sfx: '%', label: 'Approval Rate'    },
  { icon: Users,       val: 2000,  sfx: '+', label: 'Cases Handled'    },
  { icon: Globe,       val: 50,    sfx: '+', label: 'Countries'        },
];

const destinations = [
  { flag: '🇺🇸', name: 'USA'       },
  { flag: '🇬🇧', name: 'UK'        },
  { flag: '🇨🇦', name: 'Canada'    },
  { flag: '🇦🇪', name: 'UAE'       },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇳🇿', name: 'NZ'        },
];

const Hero = () => {
  const [vis, setVis] = useState(false);
  const c1 = useCounter(19,   1800);
  const c2 = useCounter(90,   1800);
  const c3 = useCounter(2000, 2200);
  const c4 = useCounter(50,   1800);
  const counts = [c1, c2, c3, c4];

  useEffect(() => {
    const t = setTimeout(() => setVis(true), 80);
    return () => clearTimeout(t);
  }, []);

  function go(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 96, behavior: 'smooth' });
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(150deg, #010610 0%, #060f20 40%, #0b1830 70%, #08102a 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '96px',
      }}
    >
      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(rgba(201,165,90,0.055) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />

      {/* Ambient glows */}
      <div style={{ position: 'absolute', top: '-10%', right: '-8%', width: '580px', height: '580px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,165,90,0.07), transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-12%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,79,202,0.07), transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="hero4-grid">

          {/* ── LEFT: Copy & CTAs ── */}
          <div>
            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 18px', borderRadius: '9999px', background: 'rgba(201,165,90,0.07)', border: '1px solid rgba(201,165,90,0.2)', marginBottom: '32px', opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(14px)', transition: 'opacity 0.7s, transform 0.7s' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#c9a55a', display: 'inline-block', animation: 'h4pulse 2s ease-in-out infinite' }} />
              <span style={{ color: '#c9a55a', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Visa & Immigration · Est. 2006
              </span>
            </div>

            {/* Headline */}
            <div style={{ opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(22px)', transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s', marginBottom: '24px' }}>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '6px' }}>
                Navigate Your
              </h1>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', background: 'linear-gradient(90deg, #b8872a, #f0d060, #c9a55a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '6px' }}>
                Journey to
              </h1>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                Global Success
              </h1>
            </div>

            {/* Gold rule */}
            <div style={{ width: '52px', height: '3px', background: 'linear-gradient(90deg, #c9a55a, transparent)', borderRadius: '3px', marginBottom: '24px', opacity: vis ? 1 : 0, transition: 'opacity 0.7s ease 0.3s' }} />

            {/* Body */}
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, maxWidth: '430px', marginBottom: '36px', opacity: vis ? 1 : 0, transition: 'opacity 0.7s ease 0.25s' }}>
              With 19 years of dedicated expertise across UAE and Pakistan, I personally guide
              professionals, students, and families through every step of their immigration journey.
            </p>

            {/* Credential chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px', opacity: vis ? 1 : 0, transition: 'opacity 0.7s ease 0.35s' }}>
              {credentials.map(function(c, i) {
                return (
                  <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '6px', background: 'rgba(201,165,90,0.06)', border: '1px solid rgba(201,165,90,0.15)' }}>
                    <CheckCircle size={11} style={{ color: '#c9a55a', flexShrink: 0 }} />
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 600 }}>{c}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '44px', opacity: vis ? 1 : 0, transition: 'opacity 0.7s ease 0.4s' }}>
              <button
                onClick={() => go('consultation')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '8px', background: 'linear-gradient(135deg, #c9a55a, #f0c040)', color: '#0a1628', fontWeight: 800, fontSize: '14px', border: 'none', cursor: 'pointer', letterSpacing: '0.04em', boxShadow: '0 8px 30px rgba(201,165,90,0.28)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(201,165,90,0.42)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,165,90,0.28)'; }}
              >
                Book Free Consultation <ChevronRight size={17} />
              </button>
              <button
                onClick={() => go('services')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 22px', borderRadius: '8px', background: 'transparent', color: 'rgba(255,255,255,0.65)', fontWeight: 600, fontSize: '14px', border: '1.5px solid rgba(255,255,255,0.11)', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,165,90,0.38)'; e.currentTarget.style.color = '#c9a55a'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.11)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
              >
                Explore Services <ArrowRight size={16} />
              </button>
            </div>

            {/* Stats bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(201,165,90,0.1)', opacity: vis ? 1 : 0, transition: 'opacity 0.8s ease 0.55s' }}>
              {quickStats.map(function(s, i) {
                return (
                  <div key={i} style={{ padding: '16px 10px', textAlign: 'center', background: 'rgba(6,14,32,0.7)', borderRight: i < quickStats.length - 1 ? '1px solid rgba(201,165,90,0.08)' : 'none' }}>
                    <s.icon size={14} style={{ color: '#c9a55a', margin: '0 auto 5px', display: 'block', opacity: 0.7 }} />
                    <div style={{ color: '#c9a55a', fontWeight: 900, fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', lineHeight: 1, marginBottom: '4px' }}>
                      {counts[i]}{s.sfx}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '9.5px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: Photo + Card ── */}
          <div
            className="hero4-right"
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: vis ? 1 : 0, transform: vis ? 'translateX(0)' : 'translateX(36px)', transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s' }}
          >
            {/* Main profile card */}
            <div style={{ width: '100%', maxWidth: '420px', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(201,165,90,0.15)', background: 'linear-gradient(150deg, rgba(15,24,52,0.95), rgba(6,12,28,0.98))', boxShadow: '0 40px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)' }}>

              {/* Photo area */}
              <div style={{ position: 'relative', background: 'linear-gradient(145deg, #010610, #0a1628)', padding: '32px 32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
                {/* Gold glow behind photo */}
                <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,165,90,0.18), transparent 65%)', pointerEvents: 'none' }} />

                {/* Photo frame */}
                <div style={{ position: 'relative', marginBottom: '20px' }}>
                  <div style={{ position: 'absolute', inset: '-4px', borderRadius: '50%', background: 'linear-gradient(135deg, #c9a55a, #f0c040, #c9a55a)', padding: '3px' }} />
                  <div style={{ position: 'relative', width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #0a1628' }}>
                    <img
                      src="/photo.png"
                      alt="Muhammad Imran Malik - Founder and Managing Director"
                      width="160"
                      height="160"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                    />
                  </div>
                  {/* Verified badge */}
                  <div style={{ position: 'absolute', bottom: '6px', right: '6px', width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #c9a55a, #f0c040)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #0a1628' }}>
                    <CheckCircle size={14} style={{ color: '#0a1628' }} />
                  </div>
                </div>

                {/* Name & title */}
                <div style={{ textAlign: 'center', marginBottom: '16px', position: 'relative', zIndex: 1 }}>
                  <h2 style={{ color: 'white', fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.02em', margin: '0 0 4px' }}>
                    Muhammad Imran Malik
                  </h2>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 14px', borderRadius: '9999px', background: 'linear-gradient(135deg, #c9a55a, #f0c040)', color: '#0a1628', fontWeight: 700, fontSize: '11.5px', letterSpacing: '0.03em' }}>
                    <Shield size={11} />
                    Founder & Managing Director
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '6px', fontWeight: 500 }}>
                    Accurate Consultancy · Lahore, Pakistan
                  </div>
                </div>

                {/* Star rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                  {[0,1,2,3,4].map(i => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c9a55a">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                  <span style={{ color: '#c9a55a', fontWeight: 700, fontSize: '12px', marginLeft: '4px' }}>4.9/5 Client Rating</span>
                </div>
              </div>

              {/* Info body */}
              <div style={{ padding: '20px 24px 24px' }}>
                {/* Quick statement */}
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.75, marginBottom: '18px', textAlign: 'center', fontStyle: 'italic' }}>
                  "19 years guiding professionals across 50+ countries to their immigration goals — personally, not through a call centre."
                </p>

                {/* Destinations row */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {destinations.map(function(d, i) {
                    return (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(201,165,90,0.06)', border: '1px solid rgba(201,165,90,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                          {d.flag}
                        </div>
                        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '9px', fontWeight: 600 }}>{d.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Contact quick links */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                  <a href="tel:+923160285386" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '12px', fontWeight: 600 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,165,90,0.3)'; e.currentTarget.style.color = '#c9a55a'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                  >
                    <Phone size={13} /> Call Now
                  </a>
                  <a href="https://wa.me/923160285386" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px', borderRadius: '8px', background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)', color: '#25d366', textDecoration: 'none', fontSize: '12px', fontWeight: 600 }}>
                    <svg width="13" height="13" viewBox="0 0 32 32" fill="#25d366"><path d="M16.002 3C9.375 3 4 8.373 4 15c0 2.387.68 4.614 1.856 6.502L4 29l7.686-1.822A12.938 12.938 0 0016.002 28C22.629 28 28 22.627 28 16S22.629 3 16.002 3z"/></svg>
                    WhatsApp
                  </a>
                </div>

                {/* CTA button */}
                <button
                  onClick={() => go('consultation')}
                  style={{ width: '100%', padding: '13px', borderRadius: '8px', background: 'linear-gradient(135deg, #c9a55a, #f0c040)', color: '#0a1628', fontWeight: 800, fontSize: '13.5px', border: 'none', cursor: 'pointer', letterSpacing: '0.04em', boxShadow: '0 6px 24px rgba(201,165,90,0.25)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(201,165,90,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(201,165,90,0.25)'; }}
                >
                  Book Free Consultation →
                </button>
              </div>
            </div>

            {/* Floating experience badge */}
            <div style={{ position: 'absolute', top: '30px', left: '-20px', padding: '10px 16px', borderRadius: '12px', background: 'rgba(6,18,40,0.97)', border: '1px solid rgba(201,165,90,0.2)', backdropFilter: 'blur(16px)', boxShadow: '0 12px 40px rgba(0,0,0,0.4)', textAlign: 'center' }} className="hero4-badge-left">
              <div style={{ color: '#c9a55a', fontWeight: 900, fontSize: '22px', lineHeight: 1 }}>19+</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>Years Expert</div>
            </div>

            {/* Floating success badge */}
            <div style={{ position: 'absolute', top: '120px', right: '-20px', padding: '10px 16px', borderRadius: '12px', background: 'rgba(6,18,40,0.97)', border: '1px solid rgba(78,205,196,0.25)', backdropFilter: 'blur(16px)', boxShadow: '0 12px 40px rgba(0,0,0,0.4)', textAlign: 'center' }} className="hero4-badge-right">
              <div style={{ color: '#4ECDC4', fontWeight: 900, fontSize: '18px', lineHeight: 1 }}>90%</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '2px' }}>Approval Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      <style>{`
        @keyframes h4pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media(max-width:1023px){
          .hero4-grid{grid-template-columns:1fr !important;}
          .hero4-right{display:none !important;}
        }
        @media(max-width:1100px){
          .hero4-badge-left{display:none;}
          .hero4-badge-right{display:none;}
        }
      `}</style>
    </section>
  );
};

export default Hero;
