import { useState } from 'react';
import { Send, CheckCircle, Loader } from 'lucide-react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

const VISA_TYPES = [
  { value: 'visit',    label: 'Visit / Tourist Visa'  },
  { value: 'work',     label: 'Work Visa'              },
  { value: 'study',    label: 'Study / Student Visa'   },
  { value: 'skilled',  label: 'Skilled Immigration'    },
  { value: 'business', label: 'Business Immigration'   },
  { value: 'family',   label: 'Family Reunification'   },
];

const COUNTRIES = [
  { value: 'usa',        label: '🇺🇸 United States'        },
  { value: 'uk',         label: '🇬🇧 United Kingdom'        },
  { value: 'canada',     label: '🇨🇦 Canada'                },
  { value: 'australia',  label: '🇦🇺 Australia'             },
  { value: 'newzealand', label: '🇳🇿 New Zealand'           },
  { value: 'uae',        label: '🇦🇪 United Arab Emirates'  },
  { value: 'europe',     label: '🇪🇺 Europe (Schengen)'     },
  { value: 'germany',    label: '🇩🇪 Germany'               },
  { value: 'other',      label: '🌍 Other'                  },
];

const INITIAL_FORM = {
  fullName:  '',
  email:     '',
  phone:     '',
  visaType:  '',
  country:   '',
  message:   '',
};

export default function ConsultationForm() {
  const [form, setForm]       = useState(INITIAL_FORM);
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [ref, visible]        = useIntersectionObserver();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate async API call (replace with real endpoint)
    await new Promise((r) => setTimeout(r, 1200));

    // In production: POST to your CRM / email service here
    console.log('Consultation request:', form);
    setStatus('success');
    setForm(INITIAL_FORM);

    // Reset after 5 s
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section
      id="consultation"
      aria-labelledby="form-heading"
      className="py-24 px-4 sm:px-6 lg:px-8
                 bg-gradient-to-b from-blue-50/60 to-white"
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* ── Heading ────────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase
                           text-amber-600 mb-4">
            Get Started
          </span>
          <h2
            id="form-heading"
            className={`section-heading mb-4 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            Book a Free Consultation
          </h2>
          <p className={`section-sub ${visible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            Speak with one of our immigration experts — completely free, no obligation
          </p>
        </div>

        {/* ── Form Card ─────────────────────────────── */}
        <div
          className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12
                      border border-amber-200/60
                      ${visible ? 'animate-fade-up delay-300' : 'opacity-0'}`}
        >
          {status === 'success' ? (
            /* ── Success State ─ */
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-600" size={44} />
              </div>
              <h3 className="text-2xl font-display font-bold text-blue-950">
                Request Received!
              </h3>
              <p className="text-gray-500 max-w-sm">
                Thank you! Our immigration team will contact you within{' '}
                <strong className="text-blue-950">24 hours</strong> to schedule your consultation.
              </p>
            </div>
          ) : (
            /* ── Form ─ */
            <form onSubmit={handleSubmit} noValidate className="space-y-6" id="contact">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-blue-950 mb-2">
                    Full Name <span aria-hidden="true" className="text-amber-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="e.g. Ahmed Hassan"
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-blue-950 mb-2">
                    Email Address <span aria-hidden="true" className="text-amber-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-blue-950 mb-2">
                    Phone / WhatsApp <span aria-hidden="true" className="text-amber-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    placeholder="+92 316 0285386"
                    className="form-input"
                  />
                </div>

                {/* Visa Type */}
                <div>
                  <label htmlFor="visaType" className="block text-sm font-semibold text-blue-950 mb-2">
                    Visa Category <span aria-hidden="true" className="text-amber-600">*</span>
                  </label>
                  <select
                    id="visaType"
                    name="visaType"
                    value={form.visaType}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="" disabled>Select a category</option>
                    {VISA_TYPES.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                {/* Destination Country */}
                <div className="sm:col-span-2">
                  <label htmlFor="country" className="block text-sm font-semibold text-blue-950 mb-2">
                    Destination Country <span aria-hidden="true" className="text-amber-600">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="" disabled>Select your destination</option>
                    {COUNTRIES.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-blue-950 mb-2">
                    Tell Us About Your Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe your immigration goals, timeline, or any specific questions…"
                    className="form-input resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader size={20} className="animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    Submit Consultation Request
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                🔒 Your information is 100% confidential and will never be shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
