import React, { useEffect, useRef, useState } from 'react';
import {
  Award, Globe, Users, CheckCircle,
  Mail, Phone, Star, Shield, TrendingUp,
  MessageCircle, MapPin, ArrowRight
} from 'lucide-react';

/* ─────────────────────────────────────────────
   ACCURATE CONSULTANCY — About / Leadership Section
   Drop this file into your components folder and
   import it wherever your about section lives.
   Requires: lucide-react (already in your project)
   Font: add to index.html <head>:
   <link href="https://fonts.googleapis.com/css2?
     family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600
     &family=DM+Sans:wght@300;400;500&display=swap"
     rel="stylesheet">
───────────────────────────────────────────── */

const NAVY   = '#0A1828';
const NAVY2  = '#0F2244';
const GOLD   = '#D4AF37';
const GOLD_L = '#DFC76A';
const GOLD_D = '#C9A84C';
const WHITE  = '#FFFFFF';
const OFF    = '#F5F0E8';
const WARM   = '#EAE5DB';
const MUTED  = '#6B6560';

const expertise = [
  'Visit & Tourist Visa Processing',
  'Skilled Worker Immigration',
  'Business & Investor Visas',
  'Study Abroad Consulting',
  'Express Entry & PR Pathways',
  'Corporate Mobility Management',
  'UK, Schengen & European Visas',
  'Canada & Australia PR',
  'UAE Golden & Green Visa',
  'New Zealand AEWV Pathway',
  'Germany Ausbildung Visa',
  'Investor Program Advisory',
];

const achievements = [
  { Icon: Award,      value: '19+',    label: 'Years Experience'  },
  { Icon: Users,      value: '5,000+', label: 'Cases Handled'     },
  { Icon: Globe,      value: '50+',    label: 'Countries Covered' },
  { Icon: TrendingUp, value: '98%',    label: 'Success Rate'      },
];

const languages = [
  { flag: '🇬🇧', name: 'English',  level: 'Native'  },
  { flag: '🇦🇪', name: 'Arabic',   level: 'Fluent'  },
  { flag: '🇵🇰', name: 'Urdu',     level: 'Native'  },
  { flag: '🇮🇳', name: 'Hindi',    level: 'Fluent'  },
];

/* ── Tiny hook: fires once when element enters viewport ── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.unobserve(el); }
    }, { threshold: 0.12, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ── Animated counter ── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    const isDecimal = target.includes('.');
    const duration = 1400;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, num);
      setCount(isDecimal ? current.toFixed(1) : Math.floor(current));
      if (current >= num) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const prefix = target.match(/^[^0-9]*/)?.[0] || '';
  const suf    = target.match(/[^0-9.]+$/)?.[0] || suffix;
  return <span ref={ref}>{prefix}{count}{suf}</span>;
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
export default function About() {
  const [sectionRef, sectionInView] = useInView();

  return (
    <>
      {/* Google Fonts — Cormorant + DM Sans */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .ac-about * { box-sizing: border-box; }

        .ac-fade-up {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .ac-fade-up.ac-visible { opacity: 1; transform: translateY(0); }
        .ac-fade-left {
          opacity: 0;
          transform: translateX(28px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .ac-fade-left.ac-visible { opacity: 1; transform: translateX(0); }

        .ac-d1 { transition-delay: 0.05s; }
        .ac-d2 { transition-delay: 0.15s; }
        .ac-d3 { transition-delay: 0.25s; }
        .ac-d4 { transition-delay: 0.35s; }
        .ac-d5 { transition-delay: 0.45s; }
        .ac-d6 { transition-delay: 0.55s; }

        .ac-expertise-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          border-radius: 6px;
          border: 1px solid #E8E3D8;
          background: #FAFAF8;
          transition: border-color 0.2s, background 0.2s;
          cursor: default;
        }
        .ac-expertise-tag:hover {
          border-color: rgba(212,175,55,0.4);
          background: #FBF8EF;
        }

        .ac-lang-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: 100px;
          border: 1px solid rgba(212,175,55,0.2);
          background: rgba(212,175,55,0.05);
          transition: border-color 0.2s;
        }
        .ac-lang-pill:hover { border-color: rgba(212,175,55,0.45); }

        .ac-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.15s;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.02em;
        }
        .ac-contact-btn:hover { opacity: 0.88; transform: translateY(-1px); }

        .ac-stat-cell {
          padding: 20px 18px;
          background: rgba(10,24,40,0.85);
          text-align: center;
          flex: 1;
          transition: background 0.2s;
        }
        .ac-stat-cell:hover { background: rgba(15,34,68,0.9); }

        .ac-photo-ring {
          position: relative;
          display: inline-block;
        }
        .ac-photo-ring::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${GOLD}, ${GOLD_L}, ${GOLD_D});
          z-index: 0;
        }
        .ac-photo-inner {
          position: relative;
          z-index: 1;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid ${NAVY};
          box-shadow: 0 0 50px rgba(212,175,55,0.35);
        }
        .ac-photo-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .ac-photo-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, ${NAVY2}, #1E3F7A);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* Corner accents on card */
        .ac-card-corners {
          position: relative;
        }
        .ac-card-corners::before,
        .ac-card-corners::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: ${GOLD};
          border-style: solid;
          z-index: 2;
          pointer-events: none;
        }
        .ac-card-corners::before {
          top: -6px; left: -6px;
          border-width: 2px 0 0 2px;
        }
        .ac-card-corners::after {
          bottom: -6px; right: -6px;
          border-width: 0 2px 2px 0;
        }

        @media (max-width: 1024px) {
          .ac-main-grid { grid-template-columns: 1fr !important; }
          .ac-left-panel { padding: 56px 32px !important; }
          .ac-right-panel { padding: 48px 32px !important; }
          .ac-stats-row { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 640px) {
          .ac-about { padding: 64px 16px !important; }
          .ac-expertise-grid { grid-template-columns: 1fr !important; }
          .ac-stats-row { grid-template-columns: repeat(2,1fr) !important; }
          .ac-contact-btns { flex-direction: column !important; }
        }
      `}</style>

      <section
        id="about"
        className="ac-about"
        ref={sectionRef}
        style={{
          padding: '96px 40px',
          background: `linear-gradient(160deg, ${OFF} 0%, #EFEAE0 60%, ${WARM} 100%)`,
          fontFamily: "'DM Sans', sans-serif",
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Decorative BG blobs ── */}
        <div style={{
          position:'absolute', top:'-80px', right:'-80px',
          width:'500px', height:'500px', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(212,175,55,0.08), transparent 70%)',
          pointerEvents:'none',
        }}/>
        <div style={{
          position:'absolute', bottom:'-60px', left:'-60px',
          width:'400px', height:'400px', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(10,24,40,0.06), transparent 70%)',
          pointerEvents:'none',
        }}/>
        {/* Subtle grid texture */}
        <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.025,pointerEvents:'none'}}
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="abgrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke={NAVY} strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#abgrid)"/>
        </svg>

        <div style={{ maxWidth:'1200px', margin:'0 auto', position:'relative', zIndex:1 }}>

          {/* ── Section Header ── */}
          <div className={`ac-fade-up ${sectionInView ? 'ac-visible' : ''}`}
            style={{ textAlign:'center', marginBottom:'64px' }}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:'10px',
              fontSize:'11px', fontWeight:500, textTransform:'uppercase',
              letterSpacing:'0.14em', color:GOLD_D, marginBottom:'16px',
            }}>
              <span style={{display:'block',width:'28px',height:'1px',background:GOLD}}/>
              Meet the Expert
              <span style={{display:'block',width:'28px',height:'1px',background:GOLD}}/>
            </div>
            <h2 style={{
              fontFamily:"'Cormorant Garamond', serif",
              fontSize:'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight:700, lineHeight:1.08,
              letterSpacing:'-0.025em', color:NAVY,
              margin:'0 0 16px',
            }}>
              Leadership &amp; <em style={{fontStyle:'italic',color:GOLD_D}}>Expertise</em>
            </h2>
            <p style={{ fontSize:'16px', color:MUTED, fontWeight:300, lineHeight:1.75, maxWidth:'520px', margin:'0 auto' }}>
              Nearly two decades of guiding individuals, families, and corporations to their global destinations — with precision and zero margin for error.
            </p>
          </div>

          {/* ── MAIN CARD ── */}
          <div
            className={`ac-card-corners ac-fade-up ac-d1 ${sectionInView ? 'ac-visible' : ''}`}
            style={{
              borderRadius:'12px',
              overflow:'hidden',
              boxShadow:'0 24px 80px rgba(10,24,40,0.14)',
              border:'1px solid rgba(212,175,55,0.18)',
            }}
          >
            <div className="ac-main-grid" style={{ display:'grid', gridTemplateColumns:'420px 1fr' }}>

              {/* ══ LEFT PANEL ══ */}
              <div
                className="ac-left-panel"
                style={{
                  background:`linear-gradient(170deg, ${NAVY} 0%, #081220 60%, #0F2244 100%)`,
                  padding:'64px 48px',
                  display:'flex', flexDirection:'column',
                  alignItems:'center', justifyContent:'center',
                  textAlign:'center', position:'relative', overflow:'hidden',
                }}
              >
                {/* BG glow */}
                <div style={{
                  position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)',
                  width:'280px', height:'280px', borderRadius:'50%',
                  background:`radial-gradient(circle, rgba(212,175,55,0.12), transparent 70%)`,
                  pointerEvents:'none',
                }}/>
                {/* Gold vertical accent line */}
                <div style={{
                  position:'absolute', left:0, top:'15%', bottom:'15%',
                  width:'3px',
                  background:`linear-gradient(180deg, transparent, ${GOLD} 30%, ${GOLD} 70%, transparent)`,
                  opacity:0.4,
                }}/>

                {/* Photo */}
                <div className="ac-photo-ring" style={{ marginBottom:'28px' }}>
                  <div className="ac-photo-inner">
                    {/*
                      PUT photo.png in your project's /public folder.
                      The optimised face-cropped version is included in the
                      download alongside this file — just drop it in /public.
                    */}
                    <img
                      src="/photo.png"
                      alt="Muhammad Imran Malik — Senior Manager, Visa & Immigration"
                      style={{
                        width:'100%', height:'100%',
                        objectFit:'cover',
                        objectPosition:'center 10%',
                        display:'block',
                      }}
                      onError={e => {
                        e.target.style.display='none';
                        e.target.nextSibling.style.display='flex';
                      }}
                    />
                    {/* Fallback initials if photo missing */}
                    <div className="ac-photo-placeholder" style={{ display:'none' }}>
                      <span style={{
                        fontFamily:"'Cormorant Garamond', serif",
                        fontSize:'3.5rem', fontWeight:700, color:GOLD,
                      }}>IM</span>
                    </div>
                  </div>
                </div>

                {/* Name */}
                <h3 style={{
                  fontFamily:"'Cormorant Garamond', serif",
                  fontSize:'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight:700, color:WHITE, lineHeight:1.15,
                  margin:'0 0 10px', letterSpacing:'-0.01em',
                }}>
                  Muhammad Imran Malik
                </h3>

                {/* Title badge */}
                <div style={{
                  display:'inline-flex', alignItems:'center', gap:'7px',
                  background:`linear-gradient(135deg, ${GOLD}, ${GOLD_L})`,
                  color:NAVY, padding:'7px 18px', borderRadius:'100px',
                  fontSize:'12px', fontWeight:600, letterSpacing:'0.04em',
                  marginBottom:'10px',
                }}>
                  <Shield size={13}/>
                  Senior Manager, Visa &amp; Immigration
                </div>

                {/* Location */}
                <div style={{
                  display:'flex', alignItems:'center', gap:'5px',
                  fontSize:'12px', color:'rgba(255,255,255,0.45)',
                  marginBottom:'20px',
                }}>
                  <MapPin size={12} style={{color:GOLD_L}}/>
                  Accurate Consultancy · Lahore, Pakistan
                </div>

                {/* Stars */}
                <div style={{
                  display:'flex', alignItems:'center', justifyContent:'center',
                  gap:'3px', marginBottom:'28px',
                }}>
                  {[1,2,3,4,5].map(i=>(
                    <Star key={i} size={16} fill={GOLD} style={{color:GOLD}}/>
                  ))}
                  <span style={{ fontSize:'12px', color:GOLD_L, marginLeft:'8px', fontWeight:500 }}>
                    4.9 / 5 Client Rating
                  </span>
                </div>

                {/* Languages */}
                <div style={{ width:'100%', marginBottom:'28px' }}>
                  <div style={{
                    fontSize:'10px', textTransform:'uppercase', letterSpacing:'0.12em',
                    color:'rgba(255,255,255,0.35)', marginBottom:'12px', fontWeight:500,
                  }}>
                    Languages
                  </div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', justifyContent:'center' }}>
                    {languages.map((l,i)=>(
                      <div key={i} className="ac-lang-pill">
                        <span style={{fontSize:'15px'}}>{l.flag}</span>
                        <span style={{fontSize:'12px', color:'rgba(255,255,255,0.75)'}}>{l.name}</span>
                        <span style={{fontSize:'10px', color:GOLD_L, letterSpacing:'0.04em'}}>{l.level}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact buttons */}
                <div className="ac-contact-btns" style={{ display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:'center' }}>
                  <a
                    href="mailto:info@accurate-consultancy.com"
                    className="ac-contact-btn"
                    style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', color:WHITE }}
                  >
                    <Mail size={14}/> Email
                  </a>
                  <a
                    href="tel:+923160285386"
                    className="ac-contact-btn"
                    style={{ background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', color:WHITE }}
                  >
                    <Phone size={14}/> Call
                  </a>
                  <a
                    href="https://wa.me/923160285386?text=Hello!%20I%20found%20your%20website%20and%20would%20like%20to%20enquire%20about%20visa%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ac-contact-btn"
                    style={{ background:'#25D366', color:WHITE, border:'none' }}
                  >
                    <MessageCircle size={14}/> WhatsApp
                  </a>
                </div>
              </div>

              {/* ══ RIGHT PANEL ══ */}
              <div
                className="ac-right-panel"
                style={{
                  background:WHITE,
                  padding:'56px 48px',
                  display:'flex', flexDirection:'column', justifyContent:'center',
                }}
              >
                {/* Bio */}
                <div style={{ marginBottom:'36px' }}>
                  <div style={{
                    fontSize:'11px', fontWeight:500, textTransform:'uppercase',
                    letterSpacing:'0.14em', color:GOLD_D,
                    display:'flex', alignItems:'center', gap:'10px',
                    marginBottom:'14px',
                  }}>
                    <span style={{display:'block',width:'24px',height:'1px',background:GOLD}}/>
                    Senior Leadership
                  </div>
                  <h4 style={{
                    fontFamily:"'Cormorant Garamond', serif",
                    fontSize:'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight:600, color:NAVY,
                    lineHeight:1.2, letterSpacing:'-0.01em',
                    margin:'0 0 20px',
                  }}>
                    About Muhammad Imran Malik
                  </h4>

                  <p style={{ fontSize:'15px', color:MUTED, lineHeight:1.85, marginBottom:'16px', fontWeight:300 }}>
                    With <strong style={{color:NAVY,fontWeight:500}}>nearly two decades of specialised experience</strong> spanning UAE and Pakistan immigration corridors, Muhammad Imran Malik is among the most accomplished immigration professionals in the region. His career has been defined not by the volume of applications processed, but by the outcomes secured for clients where precision was not optional.
                  </p>
                  <p style={{ fontSize:'15px', color:MUTED, lineHeight:1.85, marginBottom:'16px', fontWeight:300 }}>
                    Holding an <strong style={{color:NAVY,fontWeight:500}}>MBA from PUCIT</strong> and affiliated with <strong style={{color:NAVY,fontWeight:500}}>Ravian Group LLC (USA)</strong>, Imran oversees the firm's full service portfolio — from UAE employment and residency visas, to UK and Schengen business categories, to Australia's skilled migration frameworks and New Zealand's Accredited Employer Work Visa pathway.
                  </p>
                  <p style={{ fontSize:'15px', color:MUTED, lineHeight:1.85, fontWeight:300 }}>
                    His practice has earned Accurate Consultancy a <strong style={{color:GOLD_D,fontWeight:500}}>98% application approval rate</strong> — built on one principle: every client's case is unique, and every detail matters.
                  </p>
                </div>

                {/* Expertise Grid */}
                <div style={{ marginBottom:'36px' }}>
                  <div style={{
                    fontSize:'11px', fontWeight:500, textTransform:'uppercase',
                    letterSpacing:'0.12em', color:'#9A958E', marginBottom:'14px',
                  }}>
                    Areas of Expertise
                  </div>
                  <div
                    className="ac-expertise-grid"
                    style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'8px' }}
                  >
                    {expertise.map((item, i) => (
                      <div key={i} className="ac-expertise-tag">
                        <CheckCircle size={13} style={{ color:GOLD, flexShrink:0 }}/>
                        <span style={{ fontSize:'12px', fontWeight:500, color:'#374151' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats bar */}
                <div style={{
                  display:'grid',
                  gridTemplateColumns:'repeat(4,1fr)',
                  gap:'1px',
                  background:'rgba(212,175,55,0.15)',
                  border:'1px solid rgba(212,175,55,0.2)',
                  borderRadius:'8px',
                  overflow:'hidden',
                }}
                  className="ac-stats-row"
                  role="list"
                  aria-label="Key statistics"
                >
                  {achievements.map(({ Icon, value, label }, i) => (
                    <div key={i} className="ac-stat-cell" role="listitem">
                      <Icon size={16} style={{ color:GOLD, margin:'0 auto 6px' }}/>
                      <div style={{
                        fontFamily:"'Cormorant Garamond', serif",
                        fontSize:'clamp(1.3rem, 2vw, 1.8rem)',
                        fontWeight:700, color:WHITE,
                        lineHeight:1, letterSpacing:'-0.02em',
                        marginBottom:'4px',
                      }}>
                        <Counter target={value}/>
                      </div>
                      <div style={{
                        fontSize:'10px', color:'rgba(255,255,255,0.45)',
                        textTransform:'uppercase', letterSpacing:'0.09em', lineHeight:1.4,
                      }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA link */}
                <div style={{ marginTop:'28px' }}>
                  <a
                    href="#consultation"
                    style={{
                      display:'inline-flex', alignItems:'center', gap:'8px',
                      fontSize:'14px', fontWeight:500,
                      color:NAVY, textDecoration:'none',
                      padding:'12px 24px',
                      background:`linear-gradient(135deg, ${GOLD}, ${GOLD_L})`,
                      borderRadius:'5px',
                      letterSpacing:'0.02em',
                      transition:'opacity 0.2s, transform 0.15s',
                      fontFamily:"'DM Sans', sans-serif",
                    }}
                    onMouseEnter={e=>{ e.currentTarget.style.opacity='0.88'; e.currentTarget.style.transform='translateY(-1px)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.opacity='1'; e.currentTarget.style.transform='translateY(0)'; }}
                  >
                    Request a Consultation
                    <ArrowRight size={15}/>
                  </a>
                </div>
              </div>

            </div>{/* end main-grid */}
          </div>{/* end main card */}

          {/* ── Bottom credential strip ── */}
          <div
            className={`ac-fade-up ac-d4 ${sectionInView ? 'ac-visible' : ''}`}
            style={{
              marginTop:'32px',
              display:'flex', alignItems:'center',
              justifyContent:'center', flexWrap:'wrap', gap:'12px',
            }}
          >
            {[
              'SECP Registered',
              'Ravian Group LLC Affiliate',
              'ICEF Certification Roadmap',
              'ApplyBoard Partner',
              'Unity International Partner',
              '19 Years Verified Experience',
            ].map((tag,i)=>(
              <div key={i} style={{
                display:'flex', alignItems:'center', gap:'6px',
                padding:'7px 16px',
                background:'rgba(255,255,255,0.7)',
                border:'1px solid rgba(212,175,55,0.25)',
                borderRadius:'100px',
                fontSize:'12px', fontWeight:500, color:NAVY,
                backdropFilter:'blur(8px)',
              }}>
                <div style={{
                  width:'6px', height:'6px', borderRadius:'50%', background:GOLD, flexShrink:0,
                }}/>
                {tag}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
