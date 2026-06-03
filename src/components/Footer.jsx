import React from 'react';
import {
  MapPin, Phone, Mail, Clock,
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
      className="bg-gradient-to-br from-[#020818] to-[#0a1628] text-white pt-16 pb-10"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main Grid ───────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">

          {/* Brand Column */}
          <div className="flex flex-col justify-start">
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

            <p className="text-white/60 leading-relaxed text-sm max-w-xs mb-6">
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
          <nav aria-label="Quick links" className="lg:pl-8">
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
              Contact Info
            </h3>
            <address className="not-italic space-y-4">

              {/* Phone */}
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center
                             bg-[#c9a55a]/10 border border-[#c9a55a]/20 text-[#c9a55a]/70"
                >
                  <Phone size={13} aria-hidden="true" />
                </span>
                <div className="text-sm text-white/70 space-y-1">
                  <a href="tel:+923160285386" className="block hover:text-[#c9a55a] transition-colors">
                    +92 316 0285386
                  </a>
                  <a href="tel:+923030411114" className="block hover:text-[#c9a55a] transition-colors">
                    +92 303 0411114
                  </a>
                </div>
              </div>

              {/* General Email */}
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center
                             bg-[#c9a55a]/10 border border-[#c9a55a]/20 text-[#c9a55a]/70"
                >
                  <Mail size={13} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wide leading-none mb-0.5">
                    General Inquiries
                  </p>
                  <a
                    href="mailto:info@accurate-consultancy.com"
                    className="text-sm text-white/70 hover:text-[#c9a55a] transition-colors break-all"
                  >
                    info@accurate-consultancy.com
                  </a>
                </div>
              </div>

              {/* Founder email */}
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center
                             bg-[#c9a55a]/10 border border-[#c9a55a]/20 text-[#c9a55a]/70"
                >
                  <Mail size={13} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wide leading-none mb-0.5">
                    Founder & MD
                  </p>
                  <a
                    href="mailto:imran@accurate-consultancy.com"
                    className="text-sm text-white/70 hover:text-[#c9a55a] transition-colors break-all"
                  >
                    imran@accurate-consultancy.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center
                             bg-[#c9a55a]/10 border border-[#c9a55a]/20 text-[#c9a55a]/70"
                >
                  <MapPin size={13} aria-hidden="true" />
                </span>
                <span className="text-sm text-white/70">Lahore, Pakistan</span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center
                             bg-[#c9a55a]/10 border border-[#c9a55a]/20 text-[#c9a55a]/70"
                >
                  <Clock size={13} aria-hidden="true" />
                </span>
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
