import { useState, useEffect } from "react";
import { Phone, Mail, ChevronRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "services", "destinations", "about", "consultation"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Services", id: "services" },
    { label: "Destinations", id: "destinations" },
    { label: "About", id: "about" },
    { label: "Contact", id: "consultation" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* ===== HIGH-CONTRAST SLIM UTILITY STRIP ===== */}
      <div className="hidden md:block bg-gray-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-end gap-6 text-[11px] font-medium tracking-wide">
          <a
            href="tel:+923160285386"
            className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors group/utility"
          >
            <Phone size={12} className="text-[#D4AF37] group-hover/utility:text-white transition-colors" />
            +92 316 0285386
          </a>
          <a
            href="mailto:info@accurate-consultancy.com"
            className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors group/utility"
          >
            <Mail size={12} className="text-[#D4AF37] group-hover/utility:text-white transition-colors" />
            info@accurate-consultancy.com
          </a>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-gray-950/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* ===== BRAND LOGO (Corner Anchored) ===== */}
            <button
              type="button"
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-3 group text-left"
            >
              <span className="text-[#D4AF37] font-black text-xl tracking-tight">
                Accurate
              </span>
              <span className="text-white/80 text-xs uppercase tracking-[0.25em] hidden sm:inline border-l border-white/20 pl-3">
                Consultancy
              </span>
            </button>

            {/* ===== DESKTOP LINKS ===== */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-4 py-2 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? "text-[#D4AF37] bg-[#D4AF37]/[0.08]"
                        : "text-gray-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* ===== DESKTOP "GHOST" CTA ===== */}
            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => scrollTo("consultation")}
                className="group relative px-6 py-3 border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#D4AF37] hover:text-white bg-transparent hover:bg-[#D4AF37]/10 font-black text-[10px] uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(214,175,55,0.05)] hover:shadow-[0_0_25px_rgba(214,175,55,0.2)] hover:-translate-y-0.5"
              >
                Book Consultation
                <ChevronRight size={12} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* ===== MOBILE TRIGGER ===== */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all duration-300 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle main menu"
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

        {/* ===== MOBILE DRAWER ===== */}
        <div
          className={`lg:hidden grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/10 bg-gray-950/98 backdrop-blur-md px-6 py-6 space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full text-left px-4 py-4 rounded-md uppercase tracking-widest transition-all duration-200 ${
                      isActive
                        ? "text-[#D4AF37] bg-[#D4AF37]/15 border-l-2 border-[#D4AF37]"
                        : "text-gray-100 hover:text-white active:bg-white/10"
                    }`}
                    style={{
                      animation: isOpen
                        ? `mobileNavFadeSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s both`
                        : "none",
                    }}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      {isActive && <ChevronRight size={14} />}
                    </span>
                  </button>
                );
              })}

              <div className="pt-4 space-y-4">
                <button
                  type="button"
                  onClick={() => scrollTo("consultation")}
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-gray-950 font-black text-xs uppercase tracking-widest rounded-sm text-center shadow-lg active:scale-[0.98] transition-transform"
                >
                  Book Consultation
                </button>

                {/* HIGH-VISIBILITY MOBILE DETAILS */}
                <div className="mt-5 space-y-2 text-xs text-gray-300 text-center sm:text-left">
                  <a
                    href="tel:+923160285386"
                    className="hover:text-[#D4AF37] active:text-[#D4AF37] py-1 flex items-center gap-2 justify-center sm:justify-start group/mob"
                  >
                    <Phone size={13} className="text-[#D4AF37] group-hover/mob:text-white transition-colors" />
                    +92 316 0285386
                  </a>
                  <a
                    href="mailto:info@accurate-consultancy.com"
                    className="hover:text-[#D4AF37] active:text-[#D4AF37] py-1 flex items-center gap-2 justify-center sm:justify-start group/mob"
                  >
                    <Mail size={13} className="text-[#D4AF37] group-hover/mob:text-white transition-colors" />
                    info@accurate-consultancy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes mobileNavFadeSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
