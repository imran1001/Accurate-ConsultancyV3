import { Award, FileCheck, Shield, Target, TrendingUp, Star } from 'lucide-react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

const REASONS = [
  {
    icon:        Award,
    title:       'Unmatched Expertise',
    description: '15+ years of proven success with thousands of approved visa applications across multiple jurisdictions and immigration categories.',
    delay:       'delay-100',
  },
  {
    icon:        FileCheck,
    title:       'Personalised Case Analysis',
    description: 'Every client receives a tailored immigration strategy designed specifically for their unique profile, goals, and circumstances.',
    delay:       'delay-200',
  },
  {
    icon:        Shield,
    title:       'End-to-End Transparency',
    description: 'Complete documentation support with real-time status updates and honest assessments — no surprises, ever.',
    delay:       'delay-300',
  },
  {
    icon:        Target,
    title:       'Industry-Leading Success Rate',
    description: 'Our meticulous case preparation and deep regulatory knowledge consistently deliver above-industry approval rates.',
    delay:       'delay-400',
  },
];

const STATS = [
  { icon: Star,       value: '4.9/5',  label: 'Client Rating'    },
  { icon: TrendingUp, value: '98%',    label: 'Approval Rate'     },
  { icon: Award,      value: '15+',    label: 'Years Active'      },
];

export default function WhyChooseUs() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section
      id="about"
      aria-labelledby="why-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* ── Heading ────────────────────────────────── */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase
                           text-amber-600 mb-4">
            Our Advantage
          </span>
          <h2
            id="why-heading"
            className={`section-heading mb-4 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            Why Choose Accurate Consultancy
          </h2>
          <p className={`section-sub ${visible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            Your success is built on our foundation of excellence, integrity, and deep expertise
          </p>
        </div>

        {/* ── Cards Grid ───────────────────────────── */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {REASONS.map(({ icon: Icon, title, description, delay }, i) => (
            <article
              key={i}
              className={`relative bg-gradient-to-br from-blue-950 to-blue-900
                          rounded-2xl p-8 text-white overflow-hidden group
                          hover:shadow-navy-lg hover:-translate-y-1
                          transition-all duration-500
                          ${visible ? `animate-fade-up ${delay}` : 'opacity-0'}`}
            >
              {/* Background orb */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-32 h-32 bg-amber-500/8 rounded-full
                           -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"
              />
              {/* Gold corner accent */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-48 h-1 bg-gradient-to-r
                           from-amber-600 to-transparent opacity-0 group-hover:opacity-100
                           transition-opacity duration-500"
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-400
                              rounded-xl flex items-center justify-center mb-6 shadow-gold
                              group-hover:scale-110 transition-transform duration-300"
                >
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
                <p className="text-blue-100/75 leading-relaxed text-sm">{description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ── Stats Bar ────────────────────────────── */}
        <div
          className={`bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600
                      rounded-2xl p-8 grid grid-cols-3 gap-4 text-center
                      shadow-gold-lg
                      ${visible ? 'animate-fade-up delay-500' : 'opacity-0'}`}
        >
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="text-white">
              <Icon className="mx-auto mb-2 opacity-90" size={22} aria-hidden="true" />
              <div className="text-2xl sm:text-3xl font-display font-bold">{value}</div>
              <div className="text-xs sm:text-sm opacity-85 font-medium mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
