import { useState } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

const DESTINATIONS = {
  usa: {
    name:       'United States',
    flag:       '🇺🇸',
    tagline:    'Land of opportunity awaits you',
    highlights: ['EB-5 Investor Program', 'H-1B Work Visa', 'F-1 Student Visa', 'B1/B2 Tourist Visa'],
  },
  uk: {
    name:       'United Kingdom',
    flag:       '🇬🇧',
    tagline:    'Build your future in Britain',
    highlights: ['Skilled Worker Visa', 'Student Route', 'Innovator Founder', 'Global Talent Visa'],
  },
  canada: {
    name:       'Canada',
    flag:       '🇨🇦',
    tagline:    'A world of possibilities up north',
    highlights: ['Express Entry', 'Provincial Nominee', 'Study Permit', 'Startup Visa'],
  },
  australia: {
    name:       'Australia',
    flag:       '🇦🇺',
    tagline:    'Thrive Down Under',
    highlights: ['Skilled Migration', 'Business Innovation', 'Student Visa', 'Working Holiday'],
  },
  uae: {
    name:       'United Arab Emirates',
    flag:       '🇦🇪',
    tagline:    'Gateway to the Gulf',
    highlights: ['Golden Visa', 'Business Setup', 'Employment Visa', 'Tourist Visa'],
  },
  europe: {
    name:       'Europe',
    flag:       '🇪🇺',
    tagline:    'Your European adventure starts here',
    highlights: ['Schengen Visa', 'Golden Visa Programs', 'EU Blue Card', 'Student Exchange'],
  },
  newzealand: {
    name:       'New Zealand',
    flag:       '🇳🇿',
    tagline:    'Paradise and prosperity combined',
    highlights: ['Skilled Migrant', 'Accredited Employer Work Visa', 'Student Visa', 'Investor Visa'],
  },
};

export default function Destinations() {
  const [active, setActive] = useState('usa');
  const [ref, visible] = useIntersectionObserver();
  const dest = DESTINATIONS[active];

  return (
    <section
      id="destinations"
      aria-labelledby="destinations-heading"
      className="py-24 px-4 sm:px-6 lg:px-8
                 bg-gradient-to-b from-blue-50/60 to-white"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* ── Heading ────────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase
                           text-amber-600 mb-4">
            Where We Work
          </span>
          <h2
            id="destinations-heading"
            className={`section-heading mb-4 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            Featured Destinations
          </h2>
          <p className={`section-sub ${visible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            Expert guidance for every major immigration destination worldwide
          </p>
        </div>

        {/* ── Tab Buttons ───────────────────────────── */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-10
                      ${visible ? 'animate-fade-up delay-300' : 'opacity-0'}`}
          role="tablist"
          aria-label="Select a destination"
        >
          {Object.entries(DESTINATIONS).map(([key, d]) => (
            <button
              key={key}
              role="tab"
              id={`tab-${key}`}
              aria-selected={active === key}
              aria-controls={`panel-${key}`}
              onClick={() => setActive(key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                          transition-all duration-300 border focus-visible:outline-none
                          focus-visible:ring-2 focus-visible:ring-amber-500
                          ${active === key
                            ? 'bg-gradient-to-r from-amber-600 to-yellow-500 text-white border-transparent shadow-gold scale-105'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-amber-700'
                          }`}
            >
              <span className="text-xl" aria-hidden="true">{d.flag}</span>
              <span>{d.name}</span>
            </button>
          ))}
        </div>

        {/* ── Destination Panel ─────────────────────── */}
        <div
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className={`bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-200/60
                      ${visible ? 'animate-fade-up delay-400' : 'opacity-0'}`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
            <span
              className="text-6xl sm:text-7xl animate-float shrink-0"
              aria-hidden="true"
            >
              {dest.flag}
            </span>
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-blue-950">
                {dest.name}
              </h3>
              <p className="text-amber-600 font-medium mt-1">{dest.tagline}</p>
            </div>
          </div>

          {/* Highlight grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {dest.highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-amber-50
                           px-5 py-4 rounded-xl border border-amber-200/50
                           hover:border-amber-400 hover:shadow-md
                           transition-all duration-300 cursor-default"
              >
                <CheckCircle
                  className="text-amber-600 shrink-0"
                  size={22}
                  aria-hidden="true"
                />
                <span className="font-semibold text-blue-900 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="#consultation" className="btn-navy">
              Get Expert Consultation
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
