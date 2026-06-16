'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useQuoteModal } from '@/lib/quote-context';
import { Mail, Phone, MapPin, ShieldCheck, CornerRightDown, ArrowUp, Send, Check } from 'lucide-react';

export default function Footer() {
  const { openModal } = useQuoteModal();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSuccess(false), 5000);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#03050b] border-t border-slate-900 text-slate-300 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
        
        {/* 1. Brand & Certification Segment */}
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-10 w-10 bg-brand-navy rounded border border-slate-800 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-8 h-8 fill-none stroke-brand-orange stroke-[4]">
                <circle cx="50" cy="50" r="18" />
                <path d="M50 10 L85 22 V55 C85 75 50 90 50 90 C50 90 15 75 15 55 V22 Z" className="stroke-slate-800 stroke-[3]" />
                <path d="M43 58 C43 58 45 42 50 36 C55 42 57 58 50 62 C45 61 43 58 43 58 Z" className="fill-brand-orange/80 stroke-none" />
              </svg>
            </div>
            <div>
              <span className="font-display font-black text-base text-white tracking-widest block">THE BOILER LLC</span>
              <span className="text-[8px] font-mono tracking-widest text-brand-gray uppercase">ATLANTA GA • MECH DIV</span>
            </div>
          </Link>

          <p className="text-xs text-brand-gray leading-relaxed font-sans">
            Precision engineering, industrial boiler systems, energy solutions, and complete preventative maintenance designs compliant with ASME, NBBI, and National Safety Standards.
          </p>

          {/* Core ASME Badges (S, U, R) */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block tracking-wider">
              Authorized Metal Stamp Authority:
            </span>
            <div className="flex gap-2">
              {['S', 'U', 'R'].map((stamp) => (
                <div
                  key={stamp}
                  className="h-8 w-8 rounded border border-slate-800 bg-brand-navy/60 flex items-center justify-center font-display font-black text-brand-orange text-sm shadow-inner"
                  title={`ASME ${stamp} Stamp Authorized`}
                >
                  {stamp}
                </div>
              ))}
              <div className="flex-1 flex items-center justify-center rounded border border-slate-800 bg-brand-navy/30 px-2 text-[9px] font-mono text-slate-400">
                NBBI REG #71092
              </div>
            </div>
          </div>
        </div>

        {/* 2. Systems Operations Quicklinks */}
        <div className="space-y-4">
          <h4 className="font-display text-xs font-black uppercase tracking-widest text-[#f8fafc] border-l-2 border-brand-orange pl-2.5">
            ENGINEERING CAPABILITIES
          </h4>
          <ul className="space-y-2.5 text-xs font-mono">
            {[
              { name: 'Boiler Installation', href: '/services#installation' },
              { name: 'Boiler Repair & Re-tubing', href: '/services#repair' },
              { name: 'Mechanical Systems Design', href: '/services#design' },
              { name: 'Energy Efficiency Auditing', href: '/services#energy' },
              { name: 'Equipment Inspections', href: '/services#inspection' },
              { name: 'Plant Emergency Support', href: '/services#emergency' },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-brand-gray hover:text-brand-orange transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-700 group-hover:text-brand-orange transition-colors">↳</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Corporate Contact Directory */}
        <div className="space-y-4">
          <h4 className="font-display text-xs font-black uppercase tracking-widest text-[#f8fafc] border-l-2 border-brand-orange pl-2.5">
            CORPORATE DIRECTORY
          </h4>
          <div className="space-y-3.5 text-xs font-mono">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
              <div className="text-brand-gray">
                <span className="font-bold text-slate-300 block">The Boiler LLC Headquarters</span>
                2425 Piedmont Road NE<br />Atlanta, GA 30324, USA
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone size={14} className="text-brand-orange flex-shrink-0" />
              <a href="tel:+14045550192" className="text-brand-gray hover:text-white transition">
                +1 (404) 555-0192
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail size={14} className="text-brand-orange flex-shrink-0" />
              <a href="mailto:solutions@theboilerllc.com" className="text-brand-gray hover:text-white transition select-all">
                solutions@theboilerllc.com
              </a>
            </div>

            <div className="border-t border-slate-900 pt-3 text-[10px] text-slate-500 uppercase tracking-wider">
              Managing Director: <span className="font-bold text-slate-300 font-sans">Javarius Gay</span>
            </div>
          </div>
        </div>

        {/* 4. Engineering Division Newsletter */}
        <div className="space-y-4">
          <h4 className="font-display text-xs font-black uppercase tracking-widest text-[#f8fafc] border-l-2 border-brand-orange pl-2.5">
            MESSAGING & SYSTEM NEWS
          </h4>
          <p className="text-xs text-brand-gray leading-relaxed">
            Subscribe to our industrial bulletin for regulatory updates, ASME boiler code amendments, and energy-conservation strategies.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="corporate@email.com"
                className="w-full bg-[#0a0d17] border border-slate-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-orange font-mono placeholder:text-slate-700"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 h-6 w-6  bg-brand-navy border border-slate-800 rounded text-brand-orange hover:text-white transition flex items-center justify-center"
                aria-label="Submit newsletter subscription"
              >
                {newsletterSuccess ? <Check size={12} className="text-emerald-500" /> : <Send size={11} />}
              </button>
            </div>
            {newsletterSuccess && (
              <p className="text-[10px] text-emerald-400 font-mono">
                ✓ System registered successfully. Welcome aboard.
              </p>
            )}
          </form>

          <div className="pt-2">
            <button
              onClick={openModal}
              className="w-full py-2 bg-brand-navy border border-slate-800 hover:border-brand-orange/65 text-slate-200 font-mono font-bold text-xs rounded transition uppercase tracking-wider text-center"
            >
              🚀 REQUEST FLUID PROPOSAL
            </button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-500">
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          <span>© {new Date().getFullYear()} The Boiler LLC. All Engineering Rights Reserved.</span>
          <span className="hidden sm:inline">•</span>
          <span>Designed with Architectural Precision in Atlanta, GA</span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="/about" className="hover:text-brand-orange transition">REGULATORY CORE</Link>
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 hover:text-white text-slate-400 bg-brand-navy/60 px-2.5 py-1.5 rounded border border-slate-800 transition font-bold"
          >
            RETRACT HEIGHT <ArrowUp size={10} />
          </button>
        </div>
      </div>
    </footer>
  );
}
