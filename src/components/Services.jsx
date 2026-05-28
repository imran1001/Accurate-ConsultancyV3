import { useState }                          from 'react';
import {
  Plane, Briefcase, GraduationCap,
  Users, Building2, Map,
  ChevronRight,
} from 'lucide-react';
import { useIntersectionObserver }           from '@hooks/useIntersectionObserver';
import ServiceModal                          from '@components/ServiceModal';

/* ─────────────────────────────────────────────────────────────
   SERVICE DATA
   Each entry carries:
     icon        — Lucide component
     title       — card heading
     description — short card copy
     accent      — Tailwind gradient classes for icon bg + modal header
     delay       — staggered animation class
     details     — array of { heading, points[] } shown in the modal
   ───────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon:        Plane,
    title:       'Visit Visa',
    description: 'Tourism, family visits, and short-term travel visas processed efficiently with expert guidance from document preparation to embassy liaison.',
    accent:      'from-blue-900 to-blue-700',
    delay:       'delay-100',
    details: [
      {
        heading: 'Visa Sub-Types We Handle',
        points: [
          'B1/B2 Tourist & Business Visa (USA)',
          'Standard Visitor Visa (UK)',
          'Schengen Short-Stay Visa (Europe)',
          'UAE Tourist & Visit Visa',
          'Canada Temporary Resident Visa (TRV)',
          'Australia Visitor Visa (subclass 600)',
        ],
      },
      {
        heading: 'Our Process',
        points: [
          'Step 1 — Free eligibility assessment and document checklist',
          'Step 2 — Application form completion and document preparation',
          'Step 3 — Biometric appointment scheduling and guidance',
          'Step 4 — Embassy / consulate submission and tracking',
          'Step 5 — Visa collection and travel briefing',
        ],
      },
      {
        heading: 'Why Clients Choose Us',
        points: [
          'Dedicated case officer assigned from day one',
          'Real-time application status updates via WhatsApp',
          'Cover letter and itinerary drafting included',
          'Post-rejection appeal support available',
        ],
      },
    ],
  },
  {
    icon:        Briefcase,
    title:       'Work Visa',
    description: 'Employment-based visas, corporate transfers, and skilled worker programs opening doors to global career opportunities across every sector.',
    accent:      'from-amber-700 to-amber-500',
    delay:       'delay-200',
    details: [
      {
        heading: 'Work Visa Categories',
        points: [
          'H-1B Specialty Occupation Visa (USA)',
          'UK Skilled Worker Visa (points-based)',
          'UAE Employment / Residence Visa',
          'Canada LMIA Work Permit',
          'Germany Work Visa & EU Blue Card',
          'Australia Temporary Skill Shortage (TSS) Visa',
        ],
      },
      {
        heading: 'Corporate & Intra-Company Transfers',
        points: [
          'L-1A / L-1B Intra-Company Transfer (USA)',
          'ICT (Intra-Company Transfer) Visa — UK',
          'Multinational Company (MNC) Visa — Canada',
          'End-to-end employer sponsorship coordination',
        ],
      },
      {
        heading: 'Value-Added Services',
        points: [
          'Job offer letter and employment contract review',
          'Credential recognition and skills assessment support',
          'Dependent / family member visa processing',
          'Work permit renewal and extension management',
        ],
      },
    ],
  },
  {
    icon:        GraduationCap,
    title:       'Study Abroad',
    description: 'Student visas, university placements, and education pathway consulting for top institutions in the UK, Canada, Australia, and beyond.',
    accent:      'from-blue-800 to-indigo-700',
    delay:       'delay-300',
    details: [
      {
        heading: 'Top Destination Student Visas',
        points: [
          'F-1 Student Visa (USA) — universities & colleges',
          'UK Student Visa (formerly Tier 4)',
          'Canada Study Permit — DLI-approved institutions',
          'Australia Student Visa (subclass 500)',
          'Germany Student Visa — public & private universities',
          'New Zealand Student Visa',
        ],
      },
      {
        heading: 'University Placement Support',
        points: [
          'Course and institution shortlisting based on profile',
          'IELTS / TOEFL / Duolingo English Test preparation guidance',
          'Statement of Purpose (SOP) and personal statement drafting',
          'Scholarship search and application assistance',
          'Pre-departure orientation and accommodation guidance',
        ],
      },
      {
        heading: 'Post-Study Pathways',
        points: [
          'Post-Study Work Visa (UK Graduate Route)',
          'Post-Graduation Work Permit (PGWP) — Canada',
          'Temporary Graduate Visa (subclass 485) — Australia',
          'Skilled immigration pathway planning after graduation',
        ],
      },
    ],
  },
  {
    icon:        Users,
    title:       'Skilled Immigration',
    description: 'Express Entry, points-based systems, and permanent residency programs for qualified professionals seeking a new home abroad.',
    accent:      'from-amber-600 to-yellow-500',
    delay:       'delay-400',
    details: [
      {
        heading: 'Points-Based & Express Entry Programs',
        points: [
          'Canada Express Entry — Federal Skilled Worker (FSW)',
          'Canada Provincial Nominee Program (PNP)',
          'Australia SkillSelect — Skilled Independent (189)',
          'Australia State / Territory Nominated (190 & 491)',
          'New Zealand Skilled Migrant Category Resident Visa',
          'UK Points-Based System — Skilled Worker Route',
        ],
      },
      {
        heading: 'Permanent Residency Pathways',
        points: [
          'Comprehensive Ranking System (CRS) score optimisation',
          'Skills assessment bodies (WES, VETASSESS, Engineers Australia)',
          'IELTS / PTE / OET language test preparation advice',
          'PR application filing and government portal management',
          'Citizenship pathway planning after PR grant',
        ],
      },
      {
        heading: 'Green List & In-Demand Occupations',
        points: [
          'Occupation-specific eligibility checks for all programs',
          'Green List / Priority Occupations (NZ, AU, UK)',
          'Labour Market Impact Assessment (LMIA) guidance — Canada',
          'Job search strategy for employer-sponsored pathways',
        ],
      },
    ],
  },
  {
    icon:        Building2,
    title:       'Business Immigration',
    description: 'Investor visas, entrepreneur programs, and corporate immigration strategies for business expansion and international mobility.',
    accent:      'from-blue-950 to-indigo-900',
    delay:       'delay-500',
    details: [
      {
        heading: 'Investor & Entrepreneur Visas',
        points: [
          'EB-5 Immigrant Investor Program (USA)',
          'UK Innovator Founder Visa',
          'Canada Start-Up Visa Program',
          'Australia Business Innovation & Investment (subclass 888)',
          'New Zealand Investor Visa (Investor Plus & Investor)',
          'UAE Golden Visa — Investor & Entrepreneur Track',
        ],
      },
      {
        heading: 'Corporate Mobility Solutions',
        points: [
          'Multi-employee work permit batch processing',
          'Corporate retainer packages for SMEs and MNCs',
          'Business visitor and conference visa facilitation',
          'Global Talent / Exceptional Talent Visa endorsements',
        ],
      },
      {
        heading: 'Business Setup Support',
        points: [
          'UAE Free Zone & Mainland company setup advice',
          'Business plan preparation for visa endorsement',
          'Director / shareholder residence visa coordination',
          'Compliance and renewal calendar management',
        ],
      },
    ],
  },
  {
    icon:        Map,
    title:       'Travel Management',
    description: 'Comprehensive travel planning, itinerary management, and corporate travel solutions for seamless global mobility.',
    accent:      'from-teal-700 to-emerald-600',
    delay:       'delay-600',
    details: [
      {
        heading: 'Corporate Travel Services',
        points: [
          'End-to-end business trip planning and coordination',
          'Multi-destination itinerary design and optimisation',
          'Group and delegation travel management',
          'Corporate travel policy setup and compliance',
          'Emergency travel support and rebooking assistance',
        ],
      },
      {
        heading: 'Pre-Travel Documentation',
        points: [
          'Travel insurance sourcing and advisory',
          'Transit visa and stopover visa guidance',
          'Airport transfer and hotel accommodation coordination',
          'Currency and forex advisory for destination countries',
        ],
      },
      {
        heading: 'Integrated Mobility Packages',
        points: [
          'Visa + flight + accommodation bundled packages',
          'Umrah, Hajj, and religious travel planning',
          'Educational tour and student group travel',
          'VIP and executive travel concierge service',
        ],
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   SERVICE CARD
   ───────────────────────────────────────────────────────────── */
function ServiceCard({ service, visible, onOpen }) {
  const { icon: Icon, title, description, accent, delay } = service;

  return (
    <article
      className={`group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl
                  border border-gray-100 hover:border-amber-400/60 cursor-pointer
                  transition-all duration-500 hover:-translate-y-2
                  ${visible ? `animate-fade-up ${delay}` : 'opacity-0'}`}
      onClick={() => onOpen(service)}
      /* Keyboard: treat Enter / Space as click */
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(service); } }}
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${title}`}
    >
      {/* Icon bubble */}
      <div
        className={`w-14 h-14 bg-gradient-to-br ${accent} rounded-xl
                    flex items-center justify-center mb-6 shadow-lg
                    group-hover:scale-110 group-hover:rotate-3
                    transition-all duration-300`}
        aria-hidden="true"
      >
        <Icon className="text-white" size={28} />
      </div>

      {/* Text */}
      <h3 className="text-xl font-bold text-blue-950 mb-3 font-display">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">{description}</p>

      {/* Learn More affordance */}
      <div
        className="mt-6 flex items-center gap-1 text-amber-600 font-semibold text-sm
                   group-hover:gap-2 transition-all duration-200"
        aria-hidden="true"
      >
        <span>Learn More</span>
        <ChevronRight
          size={16}
          className="transform group-hover:translate-x-1 transition-transform duration-200"
        />
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────
   SERVICES SECTION
   ───────────────────────────────────────────────────────────── */
export default function Services() {
  const [ref, visible]     = useIntersectionObserver();
  const [activeService, setActiveService] = useState(null); // null = closed

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* ── Heading ──────────────────────────────── */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase
                           text-amber-600 mb-4">
            What We Offer
          </span>
          <h2
            id="services-heading"
            className={`section-heading mb-4 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            Core Immigration Services
          </h2>
          <p className={`section-sub ${visible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            Comprehensive visa solutions tailored to your unique goals and circumstances.
            Click any card for full details.
          </p>
        </div>

        {/* ── 6-Card Grid (perfect 3×2 on desktop) ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              visible={visible}
              onOpen={setActiveService}
            />
          ))}
        </div>

        {/* ── Bottom CTA strip ─────────────────────── */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-between
                      gap-6 bg-gradient-to-r from-blue-950 to-indigo-950
                      rounded-2xl px-8 py-7 shadow-navy
                      ${visible ? 'animate-fade-up delay-[700ms]' : 'opacity-0'}`}
        >
          <div>
            <p className="text-amber-400 font-display text-3xl font-bold">50+ Countries</p>
            <p className="text-blue-200/70 text-sm mt-1">
              Don't see your destination? We handle applications worldwide.
            </p>
          </div>
          <a href="#consultation" className="btn-primary shrink-0">
            Ask Our Experts
            <ChevronRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* ── Modal ─────────────────────────────────── */}
      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </section>
  );
}
