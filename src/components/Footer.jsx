import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, 
  Facebook, Linkedin, Instagram, Send,
  Shield, Award, Globe, Lock, ChevronRight 
} from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer 
      id="contact" 
      className="relative text-white pt-16 pb-10 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020818, #0a1628)' }}
      aria-label="Site footer"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c9a55a, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── SECTION 1: Trust Badges ───────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 pb-8"
          style={{ borderBottom: '1px solid rgba(201,165,90,0.15)' }}>
          {[
            { icon: Award, label: 'DTS Licensed', color: '#c9a55a' },
            { icon: Globe, label: 'Global Path Compliant', color: '#3b82f6' },
            { icon: Shield, label: 'FBR Registered', color: '#10b981' },
            { icon: Lock, label: '100% Data Privacy', color: '#f59e0b' }
          ].map((badge, i) => (
            <div key={i}
              className="flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(201,165,90,0.03)',
                border: '1px solid rgba(201,165,90,0.1)'
              }}>
              <badge.icon size={22} style={{ color: badge.color, marginBottom: '8px' }} />
              <p className="text-xs font-bold tracking-wide uppercase" style={{ color: badge.color }}>
                {badge.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION 2: Main Content Grid ──────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

          {/* Column 1: Brand Profile */}
          <div className="flex flex-col justify-start">
            <a href="#" className="inline-block mb-5 group" aria-label="Accurate Consultancy — Home">
              <img 
                src="/logo.webp" 
                alt="Accurate Consultancy" 
                className="h-[60px] w-auto object-contain group-hover:scale-102 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(201,165,90,0.3)]" 
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted partner in global immigration — delivering premium visa services with expertise, integrity, and genuine care for every client.
            </p>

            {/* Social Matrix */}
            <div className="flex items-center gap-3">
              <a href="https://wa.me/923160285386" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                style={{ background: '#25D366' }} aria-label="WhatsApp" title="Chat on WhatsApp">
                <span className="text-sm">💬</span>
              </a>
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Instagram, href: '#', label: 'Instagram' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-[#c9a55a]/10 text-white/60 transition-all duration-300 hover:scale-110 hover:bg-[#c9a55a]/10 hover:border-[#c9a55a]/40 hover:text-[#c9a55a]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Inlined Newsletter Signup */}
          <div className="flex flex-col justify-start lg:px-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-[#c9a55a] mb-5">
              Newsletter Signup
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Subscribe to get premium updates on changing immigration laws, pathways, and intake windows.
            </p>
            {subscribed ? (
              <div className="p-4 rounded-xl text-center border text-sm bg-green-500/10 border-green-500/30 text-green-400">
                ✨ Thank you! You've successfully subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border text-sm rounded-full py-3 pl-5 pr-12 text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-[#c9a55a]/60 focus:bg-white/10"
                  style={{ borderColor: 'rgba(201,165,90,0.15)' }}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 p-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center text-[#0a1628]"
                  style={{ background: 'linear-gradient(135deg, #c9a55a, #f0c040)' }}
                >
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Column 3: Quick Navigation */}
          <nav aria-label="Quick links" className="lg:pl-12">
            <h3 className="text-sm font-bold tracking-wider uppercase text-[#c9a55a] mb-5">
              Quick Links
            </h3>
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
                    className="flex items-center gap-2 text-white/60 hover:text-[#c9a55a] transition-all duration-300 group">
                    <ChevronRight size={14} className="shrink-0 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── SECTION 3: Detailed Corporate Directory ───────────── */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pb-8"
          style={{ borderBottom: '1px solid rgba(201,165,90,0.15)' }}>
          
          <address className="not-italic space-y-4 grid sm:grid-cols-2 gap-4 sm:space-y-0 md:block md:space-y-4">
            {/* Phone Registry */}
            <div className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center bg-[#c9a55a]/10 border border-[#c9a55a]/20 text-[#c9a55a]/70">
                <Phone size={13} />
              </span>
              <div className="text-sm text-white/70 space-y-1">
                <a href="tel:+923160285386" className="block hover:text-[#c9a55a] transition-colors">+92 316 0285386</a>
                <a href="tel:+923030411114" className="block hover:text-[#c9a55a] transition-colors">+92 303 0411114</a>
              </div>
            </div>

            {/* General Comms */}
            <div className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center bg-[#c9a55a]/10 border border-[#c9a55a]/20 text-[#c9a55a]/70">
                <Mail size={13} />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-wider mb-0.5">General Inquiries</p>
                <a href="mailto:info@accurate-consultancy.com" className="text-sm text-white/70 hover:text-[#c9a55a] transition-colors break-all">
                  info@accurate-consultancy.com
                </a>
              </div>
            </div>
          </address>

          <address className="not-italic space-y-4 grid sm:grid-cols-2 gap-4 sm:space-y-0 md:block md:space-y-4">
            {/* Executive Management Channel */}
            <div className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center bg-[#c9a55a]/10 border border-[#c9a55a]/20 text-[#c9a55a]/70">
                <Mail size={13} />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-wider mb-0.5">Founder & MD</p>
                <a href="mailto:imran@accurate-consultancy.com" className="text-sm text-white/70 hover:text-[#c9a55a] transition-colors break-all">
                  imran@accurate-consultancy.com
                </a>
              </div>
            </div>

            {/* Coordinates & Hours */}
            <div className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center bg-[#c9a55a]/10 border border-[#c9a55a]/20 text-[#c9a55a]/70">
                <MapPin size={13} />
              </span>
              <div className="text-sm text-white/70">
                <p className="font-medium">Lahore, Pakistan</p>
                <div className="flex items-center gap-1.5 text-xs text-white/40 mt-0.5">
                  <Clock size={11} />
                  <span>Mon–Sat: 9:00 AM – 6:00 PM PKT</span>
                </div>
              </div>
            </div>
          </address>
        </div>

        {/* ── SECTION 4: Bottom Meta Bar ────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {year} Accurate Consultancy. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
}
