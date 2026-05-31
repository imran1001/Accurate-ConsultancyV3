import React from 'react';
import {
  MapPin, Phone, Mail, Globe, Clock,
  Facebook, Linkedin, Instagram, Twitter,
  ChevronRight,
} from 'lucide-react';

const QUICK_LINKS = [
  'About Us', 'Services', 'Destinations',
  'Success Stories', 'Blog', 'Contact',
];

const SOCIAL = [
  { Icon: Facebook,  href: '#', label: 'Facebook'  },
  { Icon: Linkedin,  href: '#', label: 'LinkedIn'  },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter,   href: '#', label: 'Twitter'   },
];

/* Inline WhatsApp SVG for clean dependencies */
function WhatsAppIcon({ size = 17 }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M16.002 3C9.375 3 4 8.373 4 15c0 2.387.68 4.614 1.856 6.502L4 29l7.686-1.822A12.938 12.938 0 0016.002 28C22.629 28 28 22.627 28 16S22.629 3 16.002 3zm0 23.5c-2.118 0-4.1-.593-5.789-1.623l-.415-.248-4.558 1.08 1.117-4.43-.27-.44A10.46 10.46 0 015.5 16c0-5.79 4.712-10.5 10.502-10.5S26.5 10.21 26.5 16 21.79 26.5 16.002 26.5zm5.77-7.87c-.316-.158-1.87-.921-2.159-1.027-.29-.106-.5-.158-.71.158-.21.316-.814 1.027-.998 1.237-.184.21-.368.237-.684.079-.316-.158-1.334-.491-2.54-1.567-.938-.836-1.571-1.869-1.755-2.185-.184-.316-.02-.487.138-.644.143-.142.316-.37.474-.554.158-.184.21-.316.316-.527.105-.21.053-.395-.026-.554-.079-.158-.71-1.713-.973-2.345-.256-.615-.516-.532-.71-.542l-.605-.01c-.21 0-.553.079-.843.395-.29.316-1.105 1.08-1.105 2.634s1.131 3.054 1.289 3.264c.158.21 2.226 3.395 5.392 4.762.754.325 1.342.519 1.8.664.757.24 1.447.206 1.991.125.607-.09 1.87-.765 2.133-1.503.263-.738.263-1.37.184-1.503-.079-.132-.29-.21-.605-.368z" />
    </svg>
  );
}

const WA_NUMBERS = [
  { number: '923160285386', display: '+92 316 0285386', label: 'Sales & Visa' },
  { number: '923030411114', display: '+92 303 0411114', label: 'Support'      },
];

const WA_MSG = encodeURIComponent(
  'Hello! I found your website and would like to enquire about your visa and immigration services.'
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-[#020818] to-[#0a1628] text-white pt-16 pb-10"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Main Grid ───────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              aria-label="Accurate Consultancy — Home"
              className="inline-block mb-6 group"
            >
              <img
                src="/logo.webp"
                alt="Accurate Consultancy"
                width={220}
                height={70}
                className="h-[70px] w-auto object-contain 
                           group-hover:scale-105 transition-transform duration-300 
                           drop-shadow-[0_0_15px_rgba(201,165,90,0.5)] brightness-105"
                loading="lazy"
              />
            </a>

            <p className="text-white/60 leading-relaxed text-base max-w-sm mb-6">
              Your trusted partner in global immigration — delivering premium visa services
              with expertise, integrity, and genuine care for every client.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center
                             bg-white/5 border border-[#c9a55a]/20 text-white/60
                             transition-all duration-300 
                             hover:scale-110 hover:bg-[#c9a55a]/20 hover:border-[#c9a55a]/60 hover:text-[#c9a55a]"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-sm font-bold tracking-wider uppercase text-[#c9a55a] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-white/60 hover:text-[#c9a55a]
                               text-sm transition-colors duration-300 group"
                  >
                    <ChevronRight
                      size={14}
                      className="shrink-0 group-hover:translate-x-1 transition-transform duration-300"
                      aria-hidden="true"
                    />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-[#c9a55a] mb-6">
              Contact Us
            </h3>
            <address className="not-italic space-y-4">

              {/* Phone (tel:) */}
              <div className="flex items-start gap-3">
                <Phone className="text-[#c9a55a] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                <div className="text-sm text-white/70 space-y-1">
                  <a href="tel:+923160285386" className="block hover:text-[#c9a55a] transition-colors">
                    +92 316 0285386
                  </a>
                  <a href="tel:+923030411114" className="block hover:text-[#c9a55a] transition-colors">
                    +92 303 0411114
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <Globe className="text-[#25d366] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                <div className="text-sm space-y-1 text-white/70">
                  {WA_NUMBERS.map(({ number, display, label }) => (
                    <a
                      key={number}
                      href={`https://wa.me/${number}?text=${WA_MSG}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-[#25d366]
                                 transition-colors duration-200 group"
                      aria-label={`WhatsApp ${label}: ${display}`}
                    >
                      <span>WhatsApp · {display}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="text-[#c9a55a] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                <a
                  href="mailto:info@accurate-consultancy.com"
                  className="text-sm text-white/70 hover:text-[#c9a55a] transition-colors break-all"
                >
                  info@accurate-consultancy.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="text-[#c9a55a] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                <span className="text-sm text-white/70">Lahore, Pakistan</span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="text-[#c9a55a] shrink-0 mt-0.5" size={16} aria-hidden="true" />
                <span className="text-sm text-white/70">Mon–Sat: 9:00 AM – 6:00 PM PKT</span>
              </div>
            </address>
          </div>
        </div>

        {/* ── Divider ─────────────────────────────── */}
        <div className="h-px w-full bg-[#c9a55a]/15 mb-8" />

        {/* ── Bottom Bar ──────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {year} Accurate Consultancy. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 hover:text-[#c9a55a] text-xs transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        
      </div>
    </footer>
  );
}
