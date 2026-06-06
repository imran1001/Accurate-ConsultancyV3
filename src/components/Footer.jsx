import React from 'react';
import { Mail, Phone, MapPin, Shield, Award, Globe, Lock } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';

const Footer = () => {
  return (
    <footer className="relative"
      style={{ background: 'linear-gradient(135deg, #010610, #0a1628, #1a1060)' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* SECTION 1: Trust Badges */}
        <div className="grid md:grid-cols-4 gap-4 mb-16 pb-8"
          style={{ borderBottom: '1px solid rgba(201,165,90,0.2)' }}>
          {[
            { icon: Award, label: 'DTS Licensed', color: '#c9a55a' },
            { icon: Globe, label: 'Global Path Compliant', color: '#3b82f6' },
            { icon: Shield, label: 'FBR Registered', color: '#10b981' },
            { icon: Lock, label: '100% Data Privacy', color: '#f59e0b' }
          ].map((badge, i) => (
            <div key={i}
              className="flex flex-col items-center text-center p-4 rounded-xl animate-fadeInUp hover:scale-105 transition-transform"
              style={{
                background: 'rgba(201,165,90,0.05)',
                border: '1px solid rgba(201,165,90,0.15)',
                animationDelay: `${i * 0.1}s`
              }}>
              <badge.icon size={24} style={{ color: badge.color, marginBottom: '8px' }} />
              <p className="text-xs font-bold" style={{ color: badge.color }}>
                {badge.label}
              </p>
            </div>
          ))}
        </div>

        {/* SECTION 2: Main Content (Logo + Newsletter + Links) */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* LEFT: Brand Info */}
          <div className="animate-fadeInUp">
            <img src="/logo.webp" alt="Accurate Consultancy" className="h-10 mb-4" />
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Your trusted partner in global immigration — delivering premium visa services with expertise, integrity, and genuine care for every client.
            </p>

            {/* Social Icons Placeholder */}
            <div className="flex items-center space-x-3">
              <a href="https://wa.me/923160285386" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: '#25D366' }}
                aria-label="WhatsApp"
                title="WhatsApp">
                <span style={{ fontSize: '18px' }}>💬</span>
              </a>
              <a href="mailto:info@accurate-consultancy.com"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(201,165,90,0.2)', border: '1px solid rgba(201,165,90,0.4)' }}
                aria-label="Email"
                title="Email">
                <Mail size={16} style={{ color: '#c9a55a' }} />
              </a>
              <a href="tel:+923160285386"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(201,165,90,0.2)', border: '1px solid rgba(201,165,90,0.4)' }}
                aria-label="Call"
                title="Call">
                <Phone size={16} style={{ color: '#c9a55a' }} />
              </a>
              {/* LinkedIn & Instagram - Add URLs when ready */}
              <p className="text-xs ml-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                More coming soon
              </p>
            </div>
          </div>

          {/* CENTER: Newsletter */}
          <div className="animate-fadeInUp delay-100">
            <NewsletterSignup />
          </div>

          {/* RIGHT: Quick Links */}
          <div className="animate-fadeInUp delay-200">
            <h4 className="font-bold mb-4" style={{ color: 'white' }}>Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Destinations', href: '#destinations' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#consultation' }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href}
                    className="transition-all hover:translate-x-1 hover:text-white inline-flex items-center"
                    style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SECTION 3: Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pb-8"
          style={{ borderBottom: '1px solid rgba(201,165,90,0.2)' }}>

          <div className="animate-fadeInUp">
            <div className="flex items-start space-x-3 mb-4">
              <MapPin size={18} style={{ color: '#c9a55a', marginTop: '2px' }} />
              <div>
                <h4 className="font-bold" style={{ color: 'white' }}>Office Location</h4>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Lahore, Pakistan<br />
                  <span style={{ fontSize: '12px' }}>Mon–Sat: 9:00 AM – 6:00 PM PKT</span>
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fadeInUp delay-100">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} style={{ color: '#c9a55a' }} />
                <div>
                  <a href="tel:+923160285386" className="text-sm font-semibold hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.8)' }}>
                    +92 316 0285386
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} style={{ color: '#c9a55a' }} />
                <div>
                  <a href="tel:+923030411114" className="text-sm font-semibold hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.8)' }}>
                    +92 303 0411114
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} style={{ color: '#c9a55a' }} />
                <div>
                  <a href="mailto:info@accurate-consultancy.com" className="text-sm font-semibold hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.8)' }}>
                    info@accurate-consultancy.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} style={{ color: '#c9a55a' }} />
                <div>
                  <a href="mailto:imran@accurate-consultancy.com" className="text-sm font-semibold hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.8)' }}>
                    imran@accurate-consultancy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: Bottom (Copyright + Policies) */}
        <div className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <p className="mb-3">© 2026 Accurate Consultancy. All rights reserved.</p>
          <div className="flex items-center justify-center space-x-4 flex-wrap">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
