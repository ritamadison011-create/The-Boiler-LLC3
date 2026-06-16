'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useQuoteModal } from '@/lib/quote-context';
import { Menu, X, Phone, ShieldCheck, Award, Lock, ExternalLink, CalendarDays } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useQuoteModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler for sticky elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page shift with a slight defer to prevent synchronous cascading renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
    }, 10);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'INDUSTRIES', path: '/industries' },
    { name: 'BLOG & NEWS', path: '/blog-news' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="w-full bg-[#05070e] text-slate-300 border-b border-slate-900/40 text-[11px] font-mono py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center md:text-left">
          <span className="flex items-center gap-1.5 text-brand-orange">
            <Award size={12} className="text-brand-orange" />
            ASME Power Boiler Stamp Authorization [S, U, R]
          </span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck size={12} className="text-emerald-500" />
            Georgia State Licensed Boiler Operator #710922
          </span>
        </div>
        <div className="flex items-center gap-4 text-center">
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span className="text-brand-orange font-bold uppercase tracking-wider">24/7 Emergency Service Broker</span>
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <a href="tel:+14045550192" className="flex items-center gap-1 hover:text-brand-orange font-bold transition">
            <Phone size={11} className="text-brand-orange" />
            +1 (404) 555-0192
          </a>
        </div>
      </div>

      {/* 2. MAIN NAV BAR (Sticky) */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-brand-dark/50 py-3'
            : 'bg-brand-dark border-b border-slate-900/50 py-5'
        }`}
        id="main-fixed-header"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand Logo Group */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Custom SVG logo showing a boiler silhouette inside a shield with glowing components */}
            <div className="relative h-12 w-12 flex-shrink-0 bg-brand-navy rounded border border-slate-800/80 flex items-center justify-center p-1 group-hover:border-brand-orange transition-colors">
              <svg viewBox="0 0 100 100" className="w-10 h-10 fill-none stroke-brand-orange stroke-[4]">
                {/* Shield container */}
                <path d="M50 10 L85 22 V55 C85 75 50 90 50 90 C50 90 15 75 15 55 V22 Z" className="stroke-slate-700 stroke-[3]" />
                {/* Boiler circular reactor shell */}
                <circle cx="50" cy="50" r="18" className="stroke-brand-orange" />
                {/* Boiler safety release pressure tabs */}
                <line x1="50" y1="18" x2="50" y2="32" />
                <line x1="50" y1="68" x2="50" y2="82" />
                <line x1="18" y1="50" x2="32" y2="50" />
                <line x1="68" y1="50" x2="82" y2="50" />
                {/* Central flame indicator */}
                <path d="M43 58 C43 58 45 42 50 36 C55 42 57 58 50 62 C45 61 43 58 43 58 Z" className="fill-brand-orange/80 stroke-none" />
              </svg>
              <div className="absolute -bottom-1 -right-1 bg-brand-orange text-[7px] text-brand-dark font-black px-1 rounded-sm select-none">
                GA
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-black text-lg tracking-wider text-slate-100 group-hover:text-white transition">
                  THE BOILER
                </span>
                <span className="font-display font-black text-sm tracking-wider text-brand-orange">
                  LLC
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-[#64748b] uppercase mt-px">
                Atlanta Mechanical Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-x-5 xl:gap-x-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative py-1 font-display text-xs font-bold tracking-widest transition-colors duration-200 hover:text-brand-orange ${
                  isActive(item.path) ? 'text-brand-orange' : 'text-slate-200'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-brand-orange"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Action Button Segment */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Request a Quote CTA */}
            <button
              onClick={openModal}
              className="px-4 py-2 bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-display font-extrabold text-xs tracking-wider rounded uppercase transition duration-150 shadow-md shadow-brand-orange/10 transform active:scale-95"
            >
              REQUEST A QUOTE
            </button>
          </div>

          {/* Mobile Hamburguer Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={openModal}
              className="px-2.5 py-1.5 bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-display font-extrabold text-[10px] tracking-wider rounded uppercase transition"
            >
              QUOTE
            </button>
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-1.5 text-slate-300 hover:text-white transition rounded bg-brand-navy border border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* 3. MOBILE MENU BACKGROUND DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[111px] bottom-0 z-30 bg-brand-dark/95 border-b border-slate-800/80 backdrop-blur-md flex flex-col p-6 overflow-y-auto lg:hidden"
            id="mobile-drawer-overlay"
          >
            <div className="space-y-4 flex-1">
              <p className="text-[10px] font-mono text-brand-gray tracking-wider uppercase border-b border-slate-800/60 pb-1.5">
                Navigation Indices
              </p>
              <div className="grid grid-cols-1 gap-1.5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`flex items-center justify-between py-2 px-3 rounded text-sm font-display font-bold tracking-widest transition-colors ${
                      isActive(item.path) ? 'bg-brand-orange/10 text-brand-orange' : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-[10px] text-slate-600">»</span>
                  </Link>
                ))}
              </div>


            </div>

            {/* Quick Contact Block */}
            <div className="mt-8 border-t border-slate-800/60 pt-5 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 bg-[#090b14] border border-slate-800 p-3 rounded">
                <div className="p-1.5 bg-brand-orange/10 rounded text-brand-orange">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-brand-gray uppercase">Dispatcher Hot Line</p>
                  <a href="tel:+14045550192" className="font-bold text-white tracking-wider hover:text-brand-orange transition">
                    +1 (404) 555-0192
                  </a>
                </div>
              </div>
              <p className="text-[10px] text-center text-slate-600 uppercase">
                The Boiler LLC • Mechanical Systems Atlanta
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
