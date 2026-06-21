import {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
} from 'react';

// ──────────────────────────────────────────────────────────────────────────────
// 1. TYPES
// ──────────────────────────────────────────────────────────────────────────────

interface NavItem {
    label: string;
    id: string;
}

interface NavConfig {
    items: NavItem[];
    contact: {
        phone: string;
        email: string;
    };
    brand: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
}

// ──────────────────────────────────────────────────────────────────────────────
// 2. CONFIGURATION
// ──────────────────────────────────────────────────────────────────────────────

const NAV_CONFIG: NavConfig = {
    items: [
        { label: 'Services', id: 'services' },
        { label: 'Destinations', id: 'destinations' },
        { label: 'About', id: 'about' },
        { label: 'Contact', id: 'consultation' },
    ],
    contact: {
        phone: '+92 316 0285386',
        email: 'info@accurate-consultancy.com',
    },
    brand: {
        src: '/logo.webp',
        alt: 'Accurate Consultancy Logo',
        width: 240,
        height: 80,
    },
};

// ──────────────────────────────────────────────────────────────────────────────
// 3. HOOKS
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Debounce a value to reduce update frequency.
 */
function useDebounce<T>(value: T, delay: number): T {
    const [debounced, setDebounced] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounced;
}

/**
 * Track scroll state with passive listener & debounced threshold.
 */
function useScrollState(threshold = 20): boolean {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handler = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > threshold);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, [threshold]);

    return scrolled;
}

/**
 * Intersection Observer–based section tracker (more accurate than manual offset).
 */
function useActiveSection(
    sectionIds: string[],
    rootMargin = '-80px 0px -40% 0px'
): string {
    const [activeId, setActiveId] = useState<string>(sectionIds[0] || 'hero');

    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry with the highest intersection ratio
                let bestEntry: IntersectionObserverEntry | null = null;
                let bestRatio = 0;

                for (const entry of entries) {
                    if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
                        bestRatio = entry.intersectionRatio;
                        bestEntry = entry;
                    }
                }

                if (bestEntry) {
                    const id = bestEntry.target.id;
                    setActiveId(id);
                }
            },
            {
                threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
                rootMargin,
            }
        );

        for (const el of elements) observer.observe(el);

        return () => observer.disconnect();
    }, [sectionIds, rootMargin]);

    return activeId;
}

// ──────────────────────────────────────────────────────────────────────────────
// 4. MAIN COMPONENT
// ──────────────────────────────────────────────────────────────────────────────

export default function Navbar() {
    // ── state ────────────────────────────────────────────────────────────────
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const scrolled = useScrollState(20);
    const sectionIds = useMemo(
        () => ['hero', ...NAV_CONFIG.items.map((i) => i.id)],
        []
    );
    const activeSection = useActiveSection(sectionIds);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    // ── close on escape key ──────────────────────────────────────────────────
    useEffect(() => {
        if (!isMobileOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileOpen(false);
                triggerRef.current?.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [isMobileOpen]);

    // ── trap focus inside mobile menu ──────────────────────────────────────
    useEffect(() => {
        if (!isMobileOpen || !mobileMenuRef.current) return;

        const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
            'button, a, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        first.focus();
        document.addEventListener('keydown', handleTab);
        return () => document.removeEventListener('keydown', handleTab);
    }, [isMobileOpen]);

    // ── lock body scroll when mobile menu is open ─────────────────────────
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileOpen]);

    // ── smooth scroll to section ────────────────────────────────────────────
    const scrollTo = useCallback((id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top, behavior: 'smooth' });
        }
        setIsMobileOpen(false);
    }, []);

    // ── toggle mobile menu ──────────────────────────────────────────────────
    const toggleMobile = useCallback(() => {
        setIsMobileOpen((prev) => !prev);
    }, []);

    // ── render helpers ──────────────────────────────────────────────────────
    const isActive = useCallback(
        (id: string) => activeSection === id,
        [activeSection]
    );

    // ──────────────────────────────────────────────────────────────────────────
    // 5. RENDER
    // ──────────────────────────────────────────────────────────────────────────

    return (
        <>
            {/* ─── SKIP LINK (a11y) ─── */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:px-6 focus:py-4 focus:bg-[#D4AF37] focus:text-gray-950 focus:font-bold focus:rounded-sm focus:shadow-xl"
            >
                Skip to main content
            </a>

            <nav
                className={`
              fixed top-0 left-0 right-0 z-50
              transition-all duration-500 ease-out
              ${
                  scrolled
                      ? 'bg-[#020916]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-3 sm:py-4'
                      : 'bg-[#020916]/40 backdrop-blur-md border-b border-white/[0.03] py-5 sm:py-6'
              }
            `}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">

                        {/* ── BRAND ── */}
                        <div
                            className="flex-shrink-0 flex items-center cursor-pointer group relative"
                            onClick={() => scrollTo('hero')}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    scrollTo('hero');
                                }
                            }}
                            aria-label="Go to homepage"
                        >
                            <div className="relative flex items-center">
                                {/* aura glow */}
                                <div
                                    className="absolute inset-0 blur-2xl opacity-50 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(214,175,55,0.45), transparent 70%)',
                                        transform: 'scale(1.8)',
                                    }}
                                />
                                <img
                                    src={NAV_CONFIG.brand.src}
                                    alt={NAV_CONFIG.brand.alt}
                                    width={NAV_CONFIG.brand.width}
                                    height={NAV_CONFIG.brand.height}
                                    className="relative h-14 sm:h-17 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-[1.02]"
                                    style={{
                                        filter: 'drop-shadow(0 4px 12px rgba(214,175,55,0.18))',
                                    }}
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        </div>

                        {/* ── DESKTOP NAV ── */}
                        <div className="hidden md:flex items-center gap-10 lg:gap-12">
                            {NAV_CONFIG.items.map((item) => {
                                const active = isActive(item.id);
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        className={`
                                  relative text-[11px] font-bold uppercase tracking-widest
                                  transition-all duration-300
                                  ${
                                      active
                                          ? 'text-[#D4AF37] drop-shadow-[0_0_8px_rgba(214,175,55,0.3)]'
                                          : 'text-gray-300 hover:text-white'
                                  }
                                `}
                                        aria-current={active ? 'page' : undefined}
                                    >
                                        <span className="relative z-10">{item.label}</span>

                                        {/* underline */}
                                        <span
                                            className={`
                                        absolute -bottom-2 left-1/2 -translate-x-1/2
                                        h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]
                                        rounded-full transition-all duration-300
                                        ${
                                            active
                                                ? 'w-full opacity-100'
                                                : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50'
                                        }
                                      `}
                                        />
                                    </button>
                                );
                            })}
                        </div>

                        {/* ── DESKTOP CTA ── */}
                        <div className="hidden md:block">
                            <button
                                onClick={() => scrollTo('consultation')}
                                className="group relative px-6 py-3 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-gray-950 font-black text-[10px] uppercase tracking-widest rounded-sm shadow-[0_4px_25px_rgba(214,175,55,0.15)] hover:shadow-[0_4px_35px_rgba(214,175,55,0.35)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                                aria-label="Book a consultation"
                            >
                                {/* shimmer sweep */}
                                <span
                                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmerSweep block"
                                    aria-hidden="true"
                                />
                                <span className="relative flex items-center gap-2">
                                    Book Consultation
                                    <svg
                                        className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* ── MOBILE TRIGGER ── */}
                        <div className="md:hidden flex items-center">
                            <button
                                ref={triggerRef}
                                onClick={toggleMobile}
                                type="button"
                                className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/[0.04] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50"
                                aria-expanded={isMobileOpen}
                                aria-controls="mobile-menu"
                                aria-label={isMobileOpen ? 'Close main menu' : 'Open main menu'}
                            >
                                <div className="w-6 h-5 relative flex flex-col justify-between items-end">
                                    <span
                                        className={`
                                    h-[2px] bg-current rounded-full
                                    transition-all duration-300 transform origin-right
                                    ${isMobileOpen ? 'w-6 -rotate-45 translate-y-[1px]' : 'w-6'}
                                  `}
                                    />
                                    <span
                                        className={`
                                    h-[2px] bg-current rounded-full
                                    transition-all duration-200
                                    ${isMobileOpen ? 'w-0 opacity-0' : 'w-4'}
                                  `}
                                    />
                                    <span
                                        className={`
                                    h-[2px] bg-current rounded-full
                                    transition-all duration-300 transform origin-right
                                    ${isMobileOpen ? 'w-6 rotate-45 translate-y-[1px]' : 'w-5'}
                                  `}
                                    />
                                </div>

                                {/* live indicator dot */}
                                {!isMobileOpen && (
                                    <span
                                        className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(214,175,55,0.6)] animate-pulse"
                                        aria-hidden="true"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── MOBILE DRAWER ── */}
                <div
                    id="mobile-menu"
                    ref={mobileMenuRef}
                    className={`
                md:hidden absolute top-full left-0 right-0
                overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                border-b border-[#D4AF37]/20 shadow-[0_15px_30px_rgba(0,0,0,0.8)]
                bg-[#020916]
                ${isMobileOpen ? 'max-h-[520px] opacity-100 visible' : 'max-h-0 opacity-0 invisible pointer-events-none'}
              `}
                    role="menu"
                    aria-hidden={!isMobileOpen}
                >
                    <div className="px-5 pt-6 pb-10 space-y-3 bg-[#020916]">
                        {NAV_CONFIG.items.map((item, index) => {
                            const active = isActive(item.id);
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`
                                block w-full text-left px-4 py-4 rounded-md uppercase tracking-widest
                                transition-all duration-200
                                ${
                                    active
                                        ? 'text-[#D4AF37] bg-[#D4AF37]/15 border-l-2 border-[#D4AF37]'
                                        : 'text-gray-100 hover:text-white active:bg-white/10'
                                }
                              `}
                                    style={{
                                        animation: isMobileOpen
                                            ? `mobileNavFadeSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s both`
                                            : 'none',
                                    }}
                                    role="menuitem"
                                    aria-current={active ? 'page' : undefined}
                                >
                                    <div className="flex items-center justify-between text-sm font-bold">
                                        <span>{item.label}</span>
                                        {active && (
                                            <span
                                                className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(214,175,55,0.8)]"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </div>
                                </button>
                            );
                        })}

                        {/* mobile footer actions */}
                        <div className="pt-6 mt-5 border-t border-white/[0.08] space-y-5 bg-[#020916]">
                            <button
                                onClick={() => scrollTo('consultation')}
                                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-gray-950 font-black text-xs uppercase tracking-widest rounded-sm text-center shadow-lg active:scale-[0.98] transition-transform"
                                role="menuitem"
                            >
                                Book Consultation
                            </button>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs font-medium tracking-wider text-gray-300 text-center sm:text-left">
                                <a
                                    href={`tel:${NAV_CONFIG.contact.phone.replace(/\s/g, '')}`}
                                    className="active:text-[#D4AF37] py-1 block transition-colors"
                                >
                                    📞 {NAV_CONFIG.contact.phone}
                                </a>
                                <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" aria-hidden="true" />
                                <a
                                    href={`mailto:${NAV_CONFIG.contact.email}`}
                                    className="active:text-[#D4AF37] py-1 block transition-colors"
                                >
                                    ✉️ {NAV_CONFIG.contact.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── SCROLL PROGRESS INDICATOR ── */}
                <div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] transition-all duration-150"
                    style={{
                        width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`,
                        opacity: scrolled ? 1 : 0,
                    }}
                    aria-hidden="true"
                />

                {/* ── KEYFRAMES ── */}
                <style>{`
              @keyframes shimmerSweep {
                0%   { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
              @keyframes mobileNavFadeSlide {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-shimmerSweep {
                animation: shimmerSweep 2.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
              }
            `}</style>
            </nav>
        </>
    );
}
