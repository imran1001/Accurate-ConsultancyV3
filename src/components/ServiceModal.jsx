import { useEffect, useRef } from 'react';
import { X, CheckCircle, ChevronRight } from 'lucide-react';

/**
 * ServiceModal
 * Props:
 *   service  — the full service object (with .details), or null when closed
 *   onClose  — callback to close the modal
 */
export default function ServiceModal({ service, onClose }) {
  const overlayRef = useRef(null);
  const closeRef   = useRef(null);

  /* ── Keyboard: close on Escape ─────────────────────── */
  useEffect(() => {
    if (!service) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    // Move focus to close button when modal opens
    closeRef.current?.focus();
    // Prevent body scroll while open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  /* ── Click outside ──────────────────────────────────── */
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!service) return null;

  const { icon: Icon, title, description, accent, details } = service;

  return (
    /* Overlay */
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4
                 bg-blue-950/80 backdrop-blur-sm
                 animate-fade-in"
    >
      {/* Panel */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
                   bg-white rounded-3xl shadow-2xl
                   animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Coloured header band ──────────────────── */}
        <div className={`bg-gradient-to-r ${accent} rounded-t-3xl p-8 relative overflow-hidden`}>
          {/* decorative orb */}
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"
          />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <Icon size={30} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase mb-1">
                  Our Services
                </p>
                <h2
                  id="modal-title"
                  className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight"
                >
                  {title}
                </h2>
              </div>
            </div>

            {/* Close button */}
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full
                         flex items-center justify-center shrink-0 mt-1
                         transition-colors duration-200 focus-visible:ring-2
                         focus-visible:ring-white"
            >
              <X size={18} className="text-white" />
            </button>
          </div>

          <p className="relative z-10 mt-4 text-white/80 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* ── Body ─────────────────────────────────── */}
        <div className="p-8">

          {/* Sub-services / detail sections */}
          {details.map((section, si) => (
            <div key={si} className="mb-8 last:mb-0">
              <h3 className="flex items-center gap-2 text-base font-bold text-blue-950 mb-4">
                <span
                  className="w-1.5 h-5 bg-gradient-to-b from-amber-500 to-yellow-400
                               rounded-full shrink-0"
                  aria-hidden="true"
                />
                {section.heading}
              </h3>
              <ul className="space-y-2.5">
                {section.points.map((point, pi) => (
                  <li
                    key={pi}
                    className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-amber-50/50
                               rounded-xl px-4 py-3 border border-amber-100/80"
                  >
                    <CheckCircle
                      size={17}
                      className="text-amber-600 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row
                          items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              Have questions? Our experts are ready to help.
            </p>
            <a
              href="#consultation"
              onClick={onClose}
              className="btn-primary shrink-0"
            >
              Book Consultation
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
