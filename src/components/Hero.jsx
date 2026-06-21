import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronRight, ArrowRight, Globe, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

// ─── Animated Counter ───────────────────────────────────────────────
function useCounter(end, duration = 1800, start = 0) {
  const [count, setCount] = useState(start);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    let frameId;
    let startTime = null;

    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, start, prefersReducedMotion]);

  return count;
}

// ─── Reduced Motion Hook ────────────────────────────────────────────
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (!window.matchMedia) return;
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return prefersReducedMotion;
}

// ─── Static Data ────────────────────────────────────────────────────
const DESTINATIONS = [
  { flag: '🇺🇸', name: 'USA', top: '26%', left: '12%' },
  { flag: '🇬🇧', name: 'UK', top: '20%', left: '42%' },
  { flag: '🇩🇪', name: 'Germany', top: '22%', left: '48%' },
  { flag: '🇦🇪', name: 'UAE', top: '40%', left: '56%' },
  { flag: '🇨🇦', name: 'Canada', top: '16%', left: '18%' },
  { flag: '🇦🇺', name: 'Australia', top: '66%', left: '78%' },
  { flag: '🇳🇿', name: 'New Zealand', top: '72%', left: '85%' },
  { flag: '🇸🇬', name: 'Singapore', top: '53%', left: '74%' },
  { flag: '🇫🇷', name: 'France', top: '25%', left: '45%' },
  { flag: '🇯🇵', name: 'Japan', top: '30%', left: '80%' },
  { flag: '🇮🇳', name: 'India', top: '45%', left: '67%' },
];

const STATS = [
  { icon: Award, end: 19, suffix: '+', label: 'Years Experience' },
  { icon: TrendingUp, end: 90, suffix: '%', label: 'Success Rate' },
  { icon: Users, end: 2000, suffix: '+', label: 'Cases Handled' },
  { icon: Globe, end: 50, suffix: '+', label: 'Countries' },
];

const QUICK_DESTINATIONS = [
  { flag: '🇺🇸', label: 'USA', time: '3-6 mo' },
  { flag: '🇬🇧', label: 'UK', time: '2-4 mo' },
  { flag: '🇨🇦', label: 'Canada', time: '4-8 mo' },
  { flag: '🇦🇪', label: 'UAE', time: '2-6 wk' },
  { flag: '🇦🇺', label: 'Australia', time: '3-7 mo' },
];

// ─── Main Hero Component ──────────────────────────────────────────
export default function Hero() {
  const [hoveredDot, setHoveredDot] = useState(null);
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const counts = STATS.map(s => useCounter(s.end, 1800, 0));

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  // ── Fade-in styles ──
  const fadeIn = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

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
      {/* ─── Background Effects ──────────────────────────────────── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(201,165,90,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '600px', height: '600px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,165,90,0.08), transparent 65%)',
        pointerEvents: 'none', animation: prefersReducedMotion ? 'none' : 'pulseGlow 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '500px', height: '500px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,79,202,0.06), transparent 65%)',
        pointerEvents: 'none', animation: prefersReducedMotion ? 'none' : 'pulseGlow 8s ease-in-out infinite reverse',
      }} />

      {/* ─── Main Container ────────────────────────────────────────── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="hero-grid">

          {/* ─── LEFT COLUMN ──────────────────────────────────────── */}
          <div>

            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '8px 18px', borderRadius: '9999px',
              background: 'rgba(201,165,90,0.08)',
              border: '1px solid rgba(201,165,90,0.22)',
              marginBottom: '28px',
              ...fadeIn(0),
            }}>
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#c9a55a', display: 'inline-block',
                animation: prefersReducedMotion ? 'none' : 'pulse 2s ease-in-out infinite',
              }} />
              <span style={{ color: '#c9a55a', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Trusted Since 2006 · Lahore, Pakistan
              </span>
            </div>

            {/* Headline */}
            <div style={fadeIn(0.1)}>
              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '4px',
              }}>
                Your Trusted
              </h1>
              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '4px',
                background: 'linear-gradient(90deg, #b8872a, #f0d060, #c9a55a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Immigration Partner
              </h1>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}>
                USA · UK · Canada · UAE · Australia
              </h2>
            </div>

            {/* Divider */}
            <div style={{
              width: '60px', height: '2px',
              background: 'linear-gradient(90deg, #c9a55a, transparent)',
              margin: '28px 0',
              borderRadius: '2px',
              ...fadeIn(0.2),
            }} />

            {/* Description */}
            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.85,
              maxWidth: '440px',
              marginBottom: '36px',
              ...fadeIn(0.25),
            }}>
              19 years of expert guidance navigating visa approvals, corporate relocations,
              and immigration pathways for professionals and families across 50+ countries.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px',
              ...fadeIn(0.35),
            }}>
              <button
                onClick={() => scrollTo('consultation')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                  color: '#0a1628', fontWeight: 800, fontSize: '14px',
                  border: 'none', cursor: 'pointer', letterSpacing: '0.04em',
                  boxShadow: '0 8px 32px rgba(201,165,90,0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 14px 40px rgba(201,165,90,0.45)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,165,90,0.3)';
                }}
              >
                Book Free Consultation <ChevronRight size={17} />
              </button>
              <button
                onClick={() => scrollTo('services')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 24px', borderRadius: '8px',
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 600, fontSize: '14px',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  cursor: 'pointer', letterSpacing: '0.02em',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,165,90,0.4)';
                  e.currentTarget.style.color = '#c9a55a';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                Our Services <ArrowRight size={16} />
              </button>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              background: 'rgba(201,165,90,0.04)',
              border: '1px solid rgba(201,165,90,0.1)',
              borderRadius: '12px',
              overflow: 'hidden',
              ...fadeIn(0.45),
            }}>
              {STATS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: '18px 12px',
                    textAlign: 'center',
                    borderRight: i < STATS.length - 1 ? '1px solid rgba(201,165,90,0.08)' : 'none',
                    background: 'rgba(6,15,32,0.6)',
                  }}
                >
                  <s.icon size={16} style={{ color: '#c9a55a', margin: '0 auto 6px', display: 'block', opacity: 0.7 }} />
                  <div style={{ color: '#c9a55a', fontWeight: 900, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', lineHeight: 1, marginBottom: '5px' }}>
                    {counts[i]}{s.suffix}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.09em', fontWeight: 600 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '20px', marginTop: '22px',
              ...fadeIn(0.55),
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#c9a55a">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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

          {/* ─── RIGHT COLUMN – Map ──────────────────────────────── */}
          <div
            className="hero-map-col"
            style={{
              position: 'relative',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(32px)',
              transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(201,165,90,0.15)',
              background: 'linear-gradient(145deg, rgba(15,25,55,0.9), rgba(6,12,28,0.97))',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
              height: '480px',
            }}>

              {/* Card header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(201,165,90,0.08)',
                background: 'rgba(201,165,90,0.03)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '30px', height: '30px', borderRadius: '8px',
                    background: 'rgba(201,165,90,0.1)',
                    border: '1px solid rgba(201,165,90,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Globe size={14} style={{ color: '#c9a55a' }} />
                  </div>
                  <div>
                    <div style={{ color: '#c9a55a', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Global Network</div>
                    <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>50+ countries covered</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: '#4ade80', display: 'inline-block',
                    animation: prefersReducedMotion ? 'none' : 'pulse 2s ease-in-out infinite',
                  }} />
                  <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 600 }}>Active</span>
                </div>
              </div>

              {/* Map area */}
              <div style={{ position: 'relative', height: '340px', padding: '12px' }}>
                {/* SVG world map – cleaned up with more realistic shapes */}
                <svg viewBox="0 0 1000 500" style={{ width: '100%', height: '100%', opacity: 0.2 }} preserveAspectRatio="xMidYMid meet">
                  {/* North America */}
                  <path d="M85,80 L160,55 L230,70 L255,110 L240,170 L200,195 L170,180 L150,210 L125,190 L95,165 L75,125 Z" fill="#c9a55a" />
                  {/* South America */}
                  <path d="M185,220 L235,205 L285,225 L305,280 L285,340 L245,365 L220,340 L200,295 L180,255 Z" fill="#c9a55a" />
                  {/* Europe */}
                  <path d="M430,80 L505,62 L535,100 L540,160 L500,185 L465,165 L440,145 L420,120 Z" fill="#c9a55a" />
                  {/* Africa */}
                  <path d="M440,200 L490,185 L535,198 L550,255 L530,325 L490,355 L458,325 L440,280 Z" fill="#c9a55a" />
                  {/* Asia */}
                  <path d="M555,65 L660,48 L740,72 L775,115 L745,175 L680,198 L615,178 L575,155 L555,130 Z" fill="#c9a55a" />
                  {/* Australia */}
                  <path d="M760,320 L835,300 L880,325 L895,375 L855,400 L785,378 Z" fill="#c9a55a" />
                  {/* Grid lines */}
                  <line x1="0" y1="250" x2="1000" y2="250" stroke="#c9a55a" strokeWidth="0.5" opacity="0.15" />
                  <line x1="500" y1="0" x2="500" y2="500" stroke="#c9a55a" strokeWidth="0.5" opacity="0.15" />
                  <line x1="250" y1="0" x2="250" y2="500" stroke="#c9a55a" strokeWidth="0.5" opacity="0.08" />
                  <line x1="750" y1="0" x2="750" y2="500" stroke="#c9a55a" strokeWidth="0.5" opacity="0.08" />
                  <line x1="0" y1="125" x2="1000" y2="125" stroke="#c9a55a" strokeWidth="0.5" opacity="0.08" />
                  <line x1="0" y1="375" x2="1000" y2="375" stroke="#c9a55a" strokeWidth="0.5" opacity="0.08" />
                </svg>

                {/* Destination dots with hover */}
                {DESTINATIONS.map((d, i) => (
                  <div
                    key={i}
                    style={{ position: 'absolute', top: d.top, left: d.left, zIndex: 10 }}
                    onMouseEnter={() => setHoveredDot(i)}
                    onMouseLeave={() => setHoveredDot(null)}
                  >
                    <div style={{ position: 'relative', width: '34px', height: '34px' }}>
                      {/* Ping ring */}
                      <span style={{
                        position: 'absolute', inset: 0, borderRadius: '50%',
                        background: 'rgba(201,165,90,0.2)',
                        animation: prefersReducedMotion ? 'none' : `mapPing 2.5s ease-in-out infinite ${i * 0.15}s`,
                      }} />
                      {/* Dot */}
                      <div style={{
                        position: 'relative', zIndex: 1,
                        width: '34px', height: '34px', borderRadius: '50%',
                        background: 'rgba(8,18,40,0.9)',
                        border: `1.5px solid ${hoveredDot === i ? 'rgba(201,165,90,0.8)' : 'rgba(201,165,90,0.45)'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '16px', cursor: 'default',
                        backdropFilter: 'blur(8px)',
                        transition: 'border-color 0.2s, transform 0.2s',
                        transform: hoveredDot === i ? 'scale(1.1)' : 'scale(1)',
                      }}>
                        {d.flag}
                      </div>
                      {/* Tooltip */}
                      {hoveredDot === i && (
                        <div style={{
                          position: 'absolute', bottom: '100%', left: '50%',
                          transform: 'translateX(-50%)', marginBottom: '8px',
                          padding: '5px 12px', borderRadius: '8px',
                          background: 'rgba(6,18,40,0.96)',
                          border: '1px solid rgba(201,165,90,0.3)',
                          color: '#c9a55a', fontSize: '12px', fontWeight: 700,
                          whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 50,
                          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                        }}>
                          {d.name}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom destination pills */}
              <div style={{
                padding: '12px 16px',
                borderTop: '1px solid rgba(201,165,90,0.07)',
                display: 'flex', justifyContent: 'space-around', alignItems: 'center',
              }}>
                {QUICK_DESTINATIONS.map((item, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                    <div style={{
                      width: '34px', height: '34px', borderRadius: '10px',
                      background: 'rgba(201,165,90,0.07)',
                      border: '1px solid rgba(201,165,90,0.14)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '17px',
                      transition: 'transform 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.borderColor = 'rgba(201,165,90,0.4)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'rgba(201,165,90,0.14)'; }}
                    >
                      {item.flag}
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '10px', fontWeight: 600 }}>{item.label}</span>
                    <span style={{ color: 'rgba(201,165,90,0.6)', fontSize: '9px' }}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating approval badge */}
            <div style={{
              position: 'absolute', top: '-14px', right: '-14px',
              padding: '10px 16px', borderRadius: '12px',
              background: 'rgba(6,18,40,0.97)',
              border: '1px solid rgba(78,205,196,0.3)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
              textAlign: 'center',
            }}>
              <div style={{ color: '#4ECDC4', fontWeight: 800, fontSize: '14px' }}>90% Approval</div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', marginTop: '2px' }}>Industry Leading</div>
            </div>

            {/* Floating office badge */}
            <div style={{
              position: 'absolute', bottom: '-16px', left: '-16px',
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '12px 16px', borderRadius: '14px',
              background: 'rgba(6,18,40,0.97)',
              border: '1px solid rgba(201,165,90,0.18)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 16px 50px rgba(0,0,0,0.45)',
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #c9a55a, #f0c040)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
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

      {/* ─── Bottom wave ────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      {/* ─── Global styles ──────────────────────────────────────────── */}
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes mapPing { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(2.5);opacity:0} }
        @keyframes pulseGlow { 0%,100%{transform:scale(1);opacity:0.08} 50%{transform:scale(1.1);opacity:0.2} }

        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-map-col { display: none !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  );
}
