import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Globe, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

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

const dots = [
  { flag: '🇺🇸', name: 'USA',         top: '28%', left: '14%' },
  { flag: '🇬🇧', name: 'UK',          top: '22%', left: '43%' },
  { flag: '🇩🇪', name: 'Germany',     top: '24%', left: '49%' },
  { flag: '🇦🇪', name: 'UAE',         top: '42%', left: '57%' },
  { flag: '🇨🇦', name: 'Canada',      top: '18%', left: '20%' },
  { flag: '🇦🇺', name: 'Australia',   top: '68%', left: '80%' },
  { flag: '🇳🇿', name: 'New Zealand', top: '74%', left: '87%' },
  { flag: '🇸🇬', name: 'Singapore',   top: '55%', left: '76%' },
  { flag: '🇫🇷', name: 'France',      top: '27%', left: '46%' },
  { flag: '🇯🇵', name: 'Japan',       top: '30%', left: '82%' },
];

const stats = [
  { icon: Award,       value: 19,    suffix: '+', label: 'Years Experience' },
  { icon: TrendingUp,  value: 90,    suffix: '%', label: 'Success Rate'     },
  { icon: Users,       value: 2000,  suffix: '+', label: 'Cases Handled'    },
  { icon: Globe,       value: 50,    suffix: '+', label: 'Countries'        },
];

const Hero = () => {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);
  const y1 = useCounter(19, 1800);
  const y2 = useCounter(90, 1800);
  const y3 = useCounter(2000, 2200);
  const y4 = useCounter(50, 1800);
  const counts = [y1, y2, y3, y4];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
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
      {/* Fine dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(201,165,90,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Ambient glows */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,165,90,0.08), transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,79,202,0.07), transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="hero-grid">

          {/* ── LEFT: Copy ── */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '8px 18px', borderRadius: '9999px',
                background: 'rgba(201,165,90,0.08)',
                border: '1px solid rgba(201,165,90,0.22)',
                marginBottom: '28px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#c9a55a', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
              <span style={{ color: '#c9a55a', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Trusted Since 2006 &nbsp;·&nbsp; Lahore, Pakistan
              </span>
            </div>

            {/* Headline */}
            <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s' }}>
              <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '4px' }}>
                Your Trusted
              </h1>
              <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '4px', background: 'linear-gradient(90deg, #b8872a, #f0d060, #c9a55a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Immigration Partner
              </h1>
              <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 600, color: 'rgba(255,255,255,0.45)', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 0 }}>
                USA · UK · Canada · UAE · Australia
              </h1>
            </div>

            {/* Divider rule */}
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #c9a55a, transparent)', margin: '28px 0', borderRadius: '2px', opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.3s' }} />

            {/* Body copy */}
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.58)', lineHeight: 1.85, maxWidth: '440px', marginBottom: '36px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
              19 years of expert guidance navigating visa approvals, corporate relocations, 
              and immigration pathways for professionals and families across 50+ countries.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px', opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.35s' }}>
              <button
                onClick={() => go('consultation')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '8px', background: 'linear-gradient(135deg, #c9a55a, #f0c040)', color: '#0a1628', fontWeight: 800, fontSize: '14px', border: 'none', cursor: 'pointer', letterSpacing: '0.04em', boxShadow: '0 8px 32px rgba(201,165,90,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(201,165,90,0.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,165,90,0.3)'; }}
              >
                Book Free Consultation
                <ChevronRight size={17} />
              </button>
              <button
                onClick={() => go('services')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', borderRadius: '8px', background: 'transparent', color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: '14px', border: '1.5px solid rgba(255,255,255,0.12)', cursor: 'pointer', letterSpacing: '0.02em' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,165,90,0.4)'; e.currentTarget.style.color = '#c9a55a'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              >
                Our Services <ArrowRight size={16} />
              </button>
            </div>

            {/* Stats bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '28px', gap: '1px', background: 'rgba(201,165,90,0.05)', borderRadius: '12px', border: '1px solid rgba(201,165,90,0.1)', overflow: 'hidden', opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.5s' }}>
              {stats.map(function(s, i) {
                return (
                  <div key={i} style={{ padding: '18px 14px', textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid rgba(201,165,90,0.08)' : 'none', background: 'rgba(6,15,32,0.6)' }}>
                    <s.icon size={15} style={{ color: '#c9a55a', margin: '0 auto 6px', display: 'block', opacity: 0.7 }} />
                    <div style={{ color: '#c9a55a', fontWeight: 900, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', lineHeight: 1, marginBottom: '5px' }}>
                      {counts[i]}{s.suffix}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.09em', fontWeight: 600 }}>
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '22px', opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.6s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {[0,1,2,3,4].map(i => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#c9a55a">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px', fontWeight: 600, marginLeft: '6px' }}>4.9/5 Client Rating</span>
              </div>
              <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.1)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={13} style={{ color: '#4ECDC4' }} />
                <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: '12px', fontWeight: 600 }}>Licensed & Certified</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Static World Map ── */}
          <div
            className="hero-map-col"
            style={{ position: 'relative', opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(32px)', transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s' }}
          >
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(201,165,90,0.15)', background: 'linear-gradient(145deg, rgba(15,25,55,0.9), rgba(6,12,28,0.97))', boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)', height: '480px' }}>

              {/* Card header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid rgba(201,165,90,0.08)', background: 'rgba(201,165,90,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(201,165,90,0.1)', border: '1px solid rgba(201,165,90,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Globe size={14} style={{ color: '#c9a55a' }} />
                  </div>
                  <div>
                    <div style={{ color: '#c9a55a', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Global Network</div>
                    <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>50+ countries covered</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
                  <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 600 }}>Active</span>
                </div>
              </div>

              {/* Map with dots */}
              <div style={{ position: 'relative', height: '340px', padding: '12px' }}>
                {/* SVG world map */}
                <svg viewBox="0 0 1000 500" style={{ width: '100%', height: '100%', opacity: 0.22 }} preserveAspectRatio="xMidYMid meet">
                  <path d="M85,80 L160,55 L230,70 L255,110 L240,170 L200,195 L170,180 L150,210 L125,190 L95,165 L75,125 Z" fill="#c9a55a" />
                  <path d="M185,220 L235,205 L285,225 L305,280 L285,340 L245,365 L220,340 L200,295 L180,255 Z" fill="#c9a55a" />
                  <path d="M430,80 L505,62 L535,100 L540,160 L500,185 L465,165 L440,145 L420,120 Z" fill="#c9a55a" />
                  <path d="M440,200 L490,185 L535,198 L550,255 L530,325 L490,355 L458,325 L440,280 Z" fill="#c9a55a" />
                  <path d="M555,65 L660,48 L740,72 L775,115 L745,175 L680,198 L615,178 L575,155 L555,130 Z" fill="#c9a55a" />
                  <path d="M720,190 L770,175 L810,195 L815,230 L785,250 L740,230 Z" fill="#c9a55a" />
                  <path d="M760,320 L835,300 L880,325 L895,375 L855,400 L785,378 Z" fill="#c9a55a" />
                  <line x1="0" y1="250" x2="1000" y2="250" stroke="#c9a55a" strokeWidth="0.5" opacity="0.2" />
                  <line x1="500" y1="0" x2="500" y2="500" stroke="#c9a55a" strokeWidth="0.5" opacity="0.2" />
                  <line x1="250" y1="0" x2="250" y2="500" stroke="#c9a55a" strokeWidth="0.5" opacity="0.1" />
                  <line x1="750" y1="0" x2="750" y2="500" stroke="#c9a55a" strokeWidth="0.5" opacity="0.1" />
                  <line x1="0" y1="125" x2="1000" y2="125" stroke="#c9a55a" strokeWidth="0.5" opacity="0.1" />
                  <line x1="0" y1="375" x2="1000" y2="375" stroke="#c9a55a" strokeWidth="0.5" opacity="0.1" />
                </svg>

                {/* Destination dots */}
                {dots.map(function(d, i) {
                  return (
                    <div
                      key={i}
                      style={{ position: 'absolute', top: d.top, left: d.left, zIndex: 10 }}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div style={{ position: 'relative', width: '32px', height: '32px' }}>
                        <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(201,165,90,0.25)', animation: 'mapPing 2.5s ease-in-out infinite', animationDelay: i * 0.2 + 's' }} />
                        <div style={{ position: 'relative', zIndex: 1, width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(8,18,40,0.9)', border: '1.5px solid rgba(201,165,90,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', cursor: 'default', backdropFilter: 'blur(8px)' }}>
                          {d.flag}
                        </div>
                        {hovered === i && (
                          <div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '6px', padding: '5px 10px', borderRadius: '6px', background: 'rgba(6,18,40,0.97)', border: '1px solid rgba(201,165,90,0.3)', color: '#c9a55a', fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 50 }}>
                            {d.name}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom destination pills */}
              <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(201,165,90,0.07)', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                {[
                  { flag: '🇺🇸', label: 'USA',       time: '3-6 mo' },
                  { flag: '🇬🇧', label: 'UK',        time: '2-4 mo' },
                  { flag: '🇨🇦', label: 'Canada',    time: '4-8 mo' },
                  { flag: '🇦🇪', label: 'UAE',       time: '2-6 wk' },
                  { flag: '🇦🇺', label: 'Australia', time: '3-7 mo' },
                ].map(function(item, i) {
                  return (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                      <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(201,165,90,0.07)', border: '1px solid rgba(201,165,90,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px' }}>
                        {item.flag}
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '10px', fontWeight: 600 }}>{item.label}</span>
                      <span style={{ color: 'rgba(201,165,90,0.6)', fontSize: '9px' }}>{item.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Floating approval badge */}
            <div style={{ position: 'absolute', top: '-14px', right: '-14px', padding: '10px 16px', borderRadius: '12px', background: 'rgba(6,18,40,0.97)', border: '1px solid rgba(78,205,196,0.3)', backdropFilter: 'blur(16px)', boxShadow: '0 12px 40px rgba(0,0,0,0.4)', textAlign: 'center' }}>
              <div style={{ color: '#4ECDC4', fontWeight: 800, fontSize: '14px' }}>90% Approval</div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', marginTop: '2px' }}>Industry Leading</div>
            </div>

            {/* Floating office badge */}
            <div style={{ position: 'absolute', bottom: '-16px', left: '-16px', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '14px', background: 'rgba(6,18,40,0.97)', border: '1px solid rgba(201,165,90,0.18)', backdropFilter: 'blur(16px)', boxShadow: '0 16px 50px rgba(0,0,0,0.45)' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #c9a55a, #f0c040)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '18px' }}>📍</span>
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '13px' }}>Lahore Office</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>Mon–Sat · 9AM–6PM PKT</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes mapPing { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(2.2);opacity:0} }
        @media(max-width:1023px){ .hero-grid{grid-template-columns:1fr !important;} .hero-map-col{display:none !important;} }
      `}</style>
    </section>
  );
};

export default Hero;
