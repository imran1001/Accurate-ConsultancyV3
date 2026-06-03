import React from 'react';
import {
  MapPin, Phone, Mail, Globe,
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-blue-950 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Main Grid ───────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

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
                height={78}
                className="h-12 w-auto object-contain
                           group-hover:scale-105 transition-transform duration-300
                           drop-shadow-[0_1px_8px_rgba(217,119,6,0.4)]"
                loading="lazy"
              />
            </a>

            <p className="text-blue-200/70 leading-relaxed text-sm max-w-sm mb-6">
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
                  className="w-10 h-10 bg-blue-900 hover:bg-amber-600 rounded-full
                             flex items-center justify-center
                             transition-all duration-300 hover:scale-110"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-blue-200/70 hover:text-amber-400
                               text-sm transition-colors duration-200 group"
                  >
                    <ChevronRight
                      size={14}
                      className="shrink-0 group-hover:translate-x-0.5 transition-transform"
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
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-amber-400 mb-6">
              Contact Us
            </h3>
            <address className="not-italic space-y-4">

              {/* Phone Contacts */}
              <div className="flex items-start gap-3">
                <Phone className="text-amber-400 shrink-0 mt-0.5" size={17} aria-hidden="true" />
                <div className="text-sm text-blue-200/70 space-y-1">
                  <a href="tel:+923160285386" className="block hover:text-amber-400 transition-colors font-medium">
                    +92 316 0285386
                  </a>
                  <a href="tel:+923030411114" className="block hover:text-amber-400 transition-colors font-medium">
                    +92 303 0411114
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="text-amber-400 shrink-0 mt-0.5" size={17} aria-hidden="true" />
                <a
                  href="mailto:info@accurate-consultancy.com"
                  className="text-sm text-blue-200/70 hover:text-amber-400 transition-colors break-all"
                >
                  info@accurate-consultancy.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-400 shrink-0 mt-0.5" size={17} aria-hidden="true" />
                <span className="text-sm text-blue-200/70">Lahore, Pakistan</span>
              </div>

              {/* Operational Hours */}
              <div className="flex items-start gap-3">
                <Globe className="text-amber-400 shrink-0 mt-0.5" size={17} aria-hidden="true" />
                <span className="text-sm text-blue-200/70">Mon–Sat: 9:00 AM – 6:00 PM PKT</span>
              </div>
            </address>
          </div>
        </div>

        {/* ── Bottom Bar ──────────────────────────── */}
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row
                        justify-between items-center gap-4">
          <p className="text-blue-200/50 text-xs">
            © {year} Accurate Consultancy. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-blue-200/50 hover:text-amber-400 text-xs transition-colors"
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
