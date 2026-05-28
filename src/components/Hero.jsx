import { Award, CheckCircle, Users, Globe, MessageCircle, ChevronRight } from 'lucide-react';

const BADGES = [
  { icon: Award,        label: '15+ Years',  sublabel: 'Experience'     },
  { icon: CheckCircle,  label: '98%',         sublabel: 'Success Rate'   },
  { icon: Users,        label: '5,000+',      sublabel: 'Happy Clients'  },
  { icon: Globe,        label: '50+',         sublabel: 'Countries'      },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8
                 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950
                 overflow-hidden"
    >
      {/* ── Background Decorations ─────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 bg-dot-grid opacity-100" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full
                   bg-amber-500/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full
                   bg-blue-400/5 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* ── Pill Badge ─────────────────────────────── */}
          <div className="inline-flex items-center gap-2 bg-blue-900/60 backdrop-blur-sm
                          px-5 py-2 rounded-full border border-amber-600/30 mb-10
                          animate-fade-in">
            <Globe className="text-amber-400 shrink-0" size={18} aria-hidden="true" />
            <span className="text-amber-400 font-semibold text-xs tracking-widest uppercase">
              Your Global Mobility Partner
            </span>
          </div>

          {/* ── Headline ───────────────────────────────── */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       font-bold text-white mb-6 leading-[1.1] text-balance
                       animate-fade-up"
          >
            Navigate Your Journey to
            <span className="block mt-2 text-shimmer">
              Global Success
            </span>
          </h1>

          {/* ── Sub-headline ───────────────────────────── */}
          <p
            className="text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed
                       max-w-3xl mx-auto animate-fade-up delay-200"
          >
            Premium visa and immigration consultancy delivering seamless pathways
            to your dream destination — with expert guidance every step of the way.
          </p>

          {/* ── CTA Buttons ────────────────────────────── */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4
                       mb-16 animate-fade-up delay-300"
          >
            <a href="#consultation" className="btn-primary w-full sm:w-auto text-base px-10 py-4">
              <MessageCircle size={18} aria-hidden="true" />
              Start Your Journey
            </a>
            <a href="#services" className="btn-secondary w-full sm:w-auto text-base px-10 py-4">
              Explore Services
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>

          {/* ── Trust Badges ───────────────────────────── */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto
                       animate-fade-up delay-500"
          >
            {BADGES.map(({ icon: Icon, label, sublabel }, i) => (
              <div
                key={i}
                className="bg-white/8 backdrop-blur-md rounded-2xl p-5 sm:p-6
                           border border-white/15 hover:border-amber-400/50
                           hover:bg-white/12 transition-all duration-300
                           hover:-translate-y-1 cursor-default"
              >
                <Icon
                  className="text-amber-400 mx-auto mb-3"
                  size={30}
                  aria-hidden="true"
                />
                <div className="text-2xl font-bold text-white font-display">{label}</div>
                <div className="text-xs text-blue-200/70 mt-0.5 tracking-wide">{sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Decorative Wave ────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden"
      >
        <svg
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48 L0 20 Q300 0 600 20 Q900 40 1200 12 L1200 48 Z"
            fill="#f8f9fb"
          />
        </svg>
      </div>
    </section>
  );
}
