import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Twitter, ChevronRight, Globe } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = ['About Us', 'Services', 'Destinations', 'Success Stories', 'Blog', 'Contact'];

  return (
    <footer style={{ background: 'linear-gradient(135deg, #020818, #0a1628)' }}>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img
              src="/logo.png"
              alt="Accurate Consultancy"
              className="w-auto mb-6"
              style={{
                height: '70px',
                filter: 'drop-shadow(0 0 15px rgba(201,165,90,0.5)) brightness(1.05)'
              }}
            />
            <p className="leading-relaxed mb-6 max-w-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Your trusted partner in global immigration — delivering premium visa services
              with expertise, integrity, and genuine care for every client.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' }
              ].map(({ icon: Icon, label }) => (
                
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(201,165,90,0.2)',
                    color: 'rgba(255,255,255,0.6)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(201,165,90,0.2)';
                    e.currentTarget.style.borderColor = 'rgba(201,165,90,0.6)';
                    e.currentTarget.style.color = '#c9a55a';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(201,165,90,0.2)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6"
              style={{ color: '#c9a55a' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  
                    href="#"
                    className="flex items-center space-x-2 text-sm transition-all duration-300 group"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#c9a55a'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6"
              style={{ color: '#c9a55a' }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#c9a55a' }} />
                <div className="space-y-1">
                  <a href="tel:+923160285386" className="block text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => e.target.style.color = '#c9a55a'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                    +92 316 0285386
                  </a>
                  <a href="tel:+923030411114" className="block text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => e.target.style.color = '#c9a55a'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                    +92 303 0411114
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Globe size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#25d366' }} />
                <div className="space-y-1">
                  <a href="https://wa.me/923160285386" target="_blank" rel="noopener noreferrer"
                    className="block text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => e.target.style.color = '#25d366'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                    WhatsApp · +92 316 0285386
                  </a>
                  <a href="https://wa.me/923030411114" target="_blank" rel="noopener noreferrer"
                    className="block text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                    onMouseEnter={e => e.target.style.color = '#25d366'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                    WhatsApp · +92 303 0411114
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#c9a55a' }} />
                <a href="mailto:info@accurate-consultancy.com"
                  className="text-sm break-all transition-colors"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={e => e.target.style.color = '#c9a55a'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                  info@accurate-consultancy.com
                </a>
              </li>

              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#c9a55a' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Lahore, Pakistan
                </span>
              </li>

              <li className="flex items-start space-x-3">
                <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#c9a55a' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Mon–Sat: 9:00 AM – 6:00 PM PKT
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: 'rgba(201,165,90,0.15)' }} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {year} Accurate Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              
                key={item}
                href="#"
                className="text-xs transition-colors"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => e.target.style.color = '#c9a55a'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
