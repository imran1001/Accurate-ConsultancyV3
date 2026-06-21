import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronRight, ArrowRight, Globe, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

// ─── Animated Counter Hook ───────────────────────────────────────────
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

  // Tailwind dynamic class values for timing/fades
  const getFadeClass = (delayClass) => {
    return `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${delayClass} ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[18px]'
    }`;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-gradient-to-br from-[#010610] via-[#060f20] via-[#0b1830] to-[#08102a]"
    >
      {/* ─── Background Effects ──────────────────────────────────── */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(201,165,90,0.05)_1px,transparent_1px)]" 
        style={{ backgroundSize: '40px 40px' }} 
      />
      <div 
        className={`absolute top-0 right-0 w-[600px] height-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,165,90,0.08),transparent_65%)] pointer-events-none ${
          prefersReducedMotion ? '' : 'animate-[pulseGlow_6s_ease-in-out_infinite]'
        }`} 
      />
      <div 
        className={`absolute bottom-0 left-0 w-[500px] height-[500px] rounded-full bg-[radial-gradient(circle,rgba(59,79,202,0.06),transparent_65%)] pointer-events-none ${
          prefersReducedMotion ? '' : 'animate-[pulseGlow_8s_ease-in-out_infinite_reverse]'
        }`} 
      />

      {/* ─── Main Container ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── LEFT COLUMN: Brand Messaging ─────────────────────── */}
          <div className="flex flex-col justify-center text-left">
            
            {/* Eyebrow */}
            <div className={`inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full bg-[rgba(201,165,90,0.08)] border border-[rgba(201,165,90,0.22)] mb-7 ${getFadeClass('delay-0')}`}>
              <span className={`w-1.5 height-1.5 rounded-full bg-[#c9a55a] inline-block ${
                prefersReducedMotion ? '' : 'animate-[pulse_2s_ease-in-out_infinite]'
              }`} />
              <span className="color-[#c9a55a] text-[11px] font-bold tracking-[0.18em] uppercase">
                Trusted Since 2006 · Lahore, Pakistan
              </span>
            </div>

            {/* Headline */}
            <div className={getFadeClass('delay-100')}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-1">
                Your Trusted
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-2 bg-gradient-to-r from-[#b8872a] via-[#f0d060] to-[#c9a55a] bg-clip-text text-transparent">
                Immigration Partner
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold color-[rgba(255,255,255,0.45)] tracking-wide">
                USA · UK · Canada · UAE · Australia
              </h2>
            </div>

            {/* Divider */}
            <div className={`w-16 height-[2px] bg-gradient-to-r from-[#c9a55a] to-transparent my-7 rounded-sm ${getFadeClass('delay-200')}`} />

            {/* Description */}
            <p className={`text-base sm:text-lg color-[rgba(255,255,255,0.6)] leading-relaxed max-w-lg mb-9 ${getFadeClass('delay-300')}`}>
              19 years of expert guidance navigating visa approvals, corporate relocations,
              and immigration pathways for professionals and families across 50+ countries.
            </p>

            {/* Action Buttons */}
            <div className={`flex flex-wrap gap-4 mb-12 ${getFadeClass('delay-[400s]')}`}>
              <button
                onClick={() => scrollTo('consultation')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-br from-[#c9a55a] to-[#f0c040] text-[#0a1628] font-extrabold text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(201,165,90,0.3)] hover:shadow-[0_14px_40px_rgba(201,165,90,0.45)]"
              >
                Book Free Consultation <ChevronRight size={17} />
              </button>
              
              <button
                onClick={() => scrollTo('services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.7)] font-semibold text-sm tracking-wide transition-all duration-300 hover:border-[rgba(201,165,90,0.4)] hover:text-[#c9a55a]"
              >
                Our Services <ArrowRight size={16} />
              </button>
            </div>

            {/* Stats Dashboard Row */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 bg-[rgba(201,165,90,0.04)] border border-[rgba(201,165,90,0.1)] rounded-xl overflow-hidden ${getFadeClass('delay-[500s]')}`}>
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className={`p-4 text-center bg-[rgba(6,15,32,0.6)] ${
                    i < STATS.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[rgba(201,165,90,0.08)]' : ''
                  }`}
                >
                  <s.icon size={16} className="color-[#c9a55a] mx-auto mb-1.5 opacity-70 block" />
                  <div className="color-[#c9a55a] font-black text-xl sm:text-2xl mb-1">
                    {counts[i]}{s.suffix}
                  </div>
                  <div className="color-[rgba(255,255,255,0.38)] text-[10px] uppercase tracking-wider font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Licensing & Trust Strips */}
            <div className={`flex flex-wrap items-center gap-5 mt-6 ${getFadeClass('delay-[600s]')}`}>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#c9a55a">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="color-[rgba(255,255,255,0.45)] text-xs font-semibold ml-1.5">4.9/5 Client Rating</span>
              </div>
              <div className="hidden sm:block w-[1px] height-3.5 bg-[rgba(255,255,255,0.1)]" />
              <div className="flex items-center gap-1.5">
                <CheckCircle size={13} className="text-[#4ECDC4]" />
                <span className="color-[rgba(255,255,255,0.38)] text-xs font-semibold">Licensed & Certified</span>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN: Interactive Interactive Map Block ─────── */}
          <div
            className={`relative transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 hidden lg:block ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[rgba(201,165,90,0.15)] bg-gradient-to-br from-[rgba(15,25,55,0.9)] to-[rgba(6,12,28,0.97)] shadow-[0_40px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] h-[480px]">

              {/* Map Container Top Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(201,165,90,0.08)] bg-[rgba(201,165,90,0.03)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-[30px] height-[30px] rounded-lg bg-[rgba(201,165,90,0.1)] border border-[rgba(201,165,90,0.2)] flex items-center justify-center">
                    <Globe size={14} className="color-[#c9a55a]" />
                  </div>
                  <div>
                    <div className="color-[#c9a55a] font-bold text-xs tracking-wider uppercase">Global Network</div>
                    <div className="color-[rgba(255,255,255,0.3)] text-[11px]">50+ countries covered</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 height-1.5 rounded-full bg-[#4ade80] inline-block ${
                    prefersReducedMotion ? '' : 'animate-[pulse_2s_ease-in-out_infinite]'
                  }`} />
                  <span className="color-[rgba(255,255,255,0.35)] text-[11px] font-semibold">Active</span>
                </div>
              </div>

              {/* Map Canvas Vector Area */}
              <div className="relative h-[340px] p-3">
                <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20" preserveAspectRatio="xMidYMid meet">
                  <path d="M85,80 L160,55 L230,70 L255,110 L240,170 L200,195 L170,180 L150,210 L125,190 L95,165 L75,125 Z" fill="#c9a55a" />
                  <path d="M185,220 L235,205 L285,225 L305,280 L285,340 L245,365 L220,340 L200,295 L180,255 Z" fill="#c9a55a" />
                  <path d="M430,80 L505,62 L535,100 L540,160 L500,185 L465,165 L440,145 L420,120 Z" fill="#c9a55a" />
                  <path d="M440,200 L490,185 L535,198 L550,255 L530,325 L490,355 L458,325 L440,280 Z" fill="#c9a55a" />
                  <path d="M555,65 L660,48 L740,72 L775,115 L745,175 L680,198 L615,178 L575,155 L555,130 Z" fill="#c9a55a" />
                  <path d="M760,320 L835,300 L880,325 L895,375 L855,400 L785,378 Z" fill="#c9a55a" />
                  <line x1="0" y1="250" x2="1000" y2="250" stroke="#c9a55a" strokeWidth="0.5" opacity="0.15" />
                  <line x1="500" y1="0" x2="500" y2="500" stroke="#c9a55a" strokeWidth="0.5" opacity="0.15" />
                  <line x1="250" y1="0" x2="250" y2="500" stroke="#c9a55a" strokeWidth="0.5" opacity="0.08" />
                  <line x1="750" y1="0" x2="750" y2="500" stroke="#c9a55a" strokeWidth="0.5" opacity="0.08" />
                  <line x1="0" y1="125" x2="1000" y2="125" stroke="#c9a55a" strokeWidth="0.5" opacity="0.08" />
                  <line x1="0" y1="375" x2="1000" y2="375" stroke="#c9a55a" strokeWidth="0.5" opacity="0.08" />
                </svg>

                {/* Pinpoint Destinations */}
                {DESTINATIONS.map((d, i) => (
                  <div
                    key={i}
                    className="absolute z-10 w-[34px] h-[34px]"
                    style={{ top: d.top, left: d.left }}
                    onMouseEnter={() => setHoveredDot(i)}
                    onMouseLeave={() => setHoveredDot(null)}
                  >
                    <div className="relative w-full h-full">
                      <span className={`absolute inset-0 rounded-full bg-[rgba(201,165,90,0.2)] ${
                        prefersReducedMotion ? '' : 'animate-[mapPing_2.5s_ease-in-out_infinite]'
                      }`} style={{ animationDelay: `${i * 0.15}s` }} />
                      
                      <div className={`relative z-10 w-full h-full rounded-full bg-[rgba(8,18,40,0.9)] flex items-center justify-center text-base cursor-default backdrop-blur-md transition-all duration-200 border ${
                        hoveredDot === i ? 'border-[rgba(201,165,90,0.8)] scale-110' : 'border-[rgba(201,165,90,0.45)] scale-100'
                      }`}>
                        {d.flag}
                      </div>

                      {hoveredDot === i && (
                        <div className="absolute bottom-[105%] left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-lg bg-[rgba(6,18,40,0.96)] border border-[rgba(201,165,90,0.3)] color-[#c9a55a] text-xs font-bold whitespace-nowrap pointer-events-none z-50 shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
                          {d.name}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Look Destination Timelines Footer */}
              <div className="px-4 py-3 border-t border-[rgba(201,165,90,0.07)] flex justify-around items-center">
                {QUICK_DESTINATIONS.map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <div className="group w-[34px] h-[34px] rounded-xl bg-[rgba(201,165,90,0.07)] border border-[rgba(201,165,90,0.14)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 hover:border-[rgba(201,165,90,0.4)]">
                      {item.flag}
                    </div>
                    <span className="color-[rgba(255,255,255,0.55)] text-[10px] font-semibold">{item.label}</span>
                    <span className="color-[rgba(201,165,90,0.6)] text-[9px]">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Top Indicator Card */}
            <div className="absolute -top-3.5 -right-3.5 px-4 py-2.5 rounded-xl bg-[rgba(6,18,40,0.97)] border border-[rgba(78,205,196,0.3)] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.4)] text-center">
              <div className="text-[#4ECDC4] font-black text-sm">90% Approval</div>
              <div className="color-[rgba(255,255,255,0.35)] text-[10px] mt-0.5">Industry Leading</div>
            </div>

            {/* Floating Office Hours/Location Card */}
            <div className="absolute -bottom-4 -left-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-[rgba(6,18,40,0.97)] border border-[rgba(201,165,90,0.18)] backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.45)]">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#c9a55a] to-[#f0c040] flex items-center justify-center flex-shrink-0 text-lg">
                📍
              </div>
              <div>
                <div className="text-white font-bold text-sm">Lahore Office</div>
                <div className="color-[rgba(255,255,255,0.4)] text-[11px]">Mon–Sat · 9AM–6PM PKT</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Bottom Soft Wave Divider ─────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 line-height-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] block">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      {/* ─── Tailwind Keyframe Animation Injections ───────────────── */}
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes mapPing { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(2.5);opacity:0} }
        @keyframes pulseGlow { 0%,100%{transform:scale(1);opacity:0.08} 50%{transform:scale(1.1);opacity:0.2} }
      `}</style>
    </section>
  );
}
