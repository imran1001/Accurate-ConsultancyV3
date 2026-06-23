import { useState, useEffect } from "react";
import { Phone, Mail, ChevronRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Visa Tracks", id: "visa-tracks" },
  { label: "B2B Partnerships", id: "partnerships" },
  { label: "Insights", id: "insights" },
  { label: "Contact", id: "consultation" },
];

const SECTION_IDS = ["hero", ...NAV_ITEMS.map((i) => i.id)];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 140;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (y >= offsetTop && y < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Utility strip */}
      <div className="hidden md:block bg-gray-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-end gap-6 text-[11px] font-medium tracking-wide">
          <a
            href="tel:+923160285386"
            className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
          >
            <Phone size={12} className="text-[#D4AF37]" />
            +92 316 0285386
          </a>
          <a
            href="mailto:info@accurate-consultancy.com"
            className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
          >
            <Mail size={12} className="text-[#D4AF37]" />
            info@accurate-consultancy.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-gray-950/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Brand Identity */}
            <button
              type="button"
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-3 group"
            >
              <span className="text-[#D4AF37] font-black text-xl tracking-tight">
                Accurate
              </span>
              <span className="text-white/80 text-xs uppercase tracking-[0.25em] hidden sm:inline border-l border-white/20 pl-3">
                Consultancy
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                      isActive
                        ? "text-[#D4AF37] bg-[#D4AF37]/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => scrollTo("consultation")}
                className="group px-6 py-3 border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white bg-transparent hover:bg-[#D4AF37]/10 font-black text-[10px] uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                Book Consultation
                <ChevronRight
                  size={12}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </div>

            {/* Mobile trigger */}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <span className="relative w-6 h-6 block">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/10 bg-gray-950/98 backdrop-blur-md px-6 py-6 space-y-2">
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full text-left px-4 py-4 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                      isActive
                        ? "text-[#D4AF37] bg-[#D4AF37]/15 border-l-2 border-[#D4AF37]"
                        : "text-gray-100 hover:text-white hover:bg-white/5"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 40 + 100}ms` : "0ms",
                      transform: isOpen ? "translateY(0)" : "translateY(-8px)",
                      opacity: isOpen ? 1 : 0,
                      transitionProperty: "transform, opacity, background-color, color",
                    }}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      {isActive && <ChevronRight size={14} />}
                    </span>
                  </button>
                );
              })}

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => scrollTo("consultation")}
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-gray-950 font-black text-xs uppercase tracking-widest rounded-sm shadow-lg active:scale-[0.98] transition-transform"
                >
                  Book Consultation
                </button>

                <div className="mt-5 space-y-2 text-xs text-gray-300 text-center sm:text-left">
                  <a
                    href="tel:+923160285386"
                    className="flex items-center gap-2 justify-center sm:justify-start hover:text-[#D4AF37] transition-colors"
                  >
                    <Phone size={13} className="text-[#D4AF37]" />
                    +92 316 0285386
                  </a>
                  <a
                    href="mailto:info@accurate-consultancy.com"
                    className="flex items-center gap-2 justify-center sm:justify-start hover:text-[#D4AF37] transition-colors"
                  >
                    <Mail size={13} className="text-[#D4AF37]" />
                    info@accurate-consultancy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
