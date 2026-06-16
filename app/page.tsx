'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useQuoteModal } from '@/lib/quote-context';
import { motion } from 'motion/react';
import {
  ShieldAlert,
  Flame,
  Award,
  Settings,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Gauge,
  Sparkles,
  Users2,
  HardHat,
  Tv2,
  Briefcase,
  HelpCircle,
  Plus,
  Minus,
  Quote
} from 'lucide-react';

export default function HomePage() {
  const { openModal } = useQuoteModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const highlights = [
    {
      icon: <Users2 className="h-6 w-6 text-brand-orange" />,
      title: 'Experienced Engineering Team',
      desc: 'Directed directly by licensed supervisor Javarius Gay with certified mechanical, industrial piping, and thermal energy specialists.',
      metrics: '35+ Combined Years',
    },
    {
      icon: <Settings className="h-6 w-6 text-brand-orange" />,
      title: 'Industrial-Grade Solutions',
      desc: 'Full heavy-wall tube rolling, high-pressure welding, and complete vessel repair certified strictly under ASME S, U, R stamps.',
      metrics: '100% ASME Code compliant',
    },
    {
      icon: <HardHat className="h-6 w-6 text-brand-orange" />,
      title: 'Safety & Compliance Focused',
      desc: '100% OSHA safety standard adherence. Certified inspection compliance matching local, GA state, and national board metrics.',
      metrics: 'Zero OSHA violations',
    },
    {
      icon: <Flame className="h-6 w-6 text-brand-orange" />,
      title: 'Energy Efficient Systems',
      desc: 'Flue-gas economizers, heat-recovery configurations, and smart oxygen trim tuning to shave up to 15% off fuel inputs.',
      metrics: 'Up to 15% Fuel Shaving',
    },
  ];

  const safetyCerts = [
    { stamp: 'S', name: 'Power Boilers', description: 'Authorization to design, manufacture, and assemble high-pressure power boilers.' },
    { stamp: 'U', name: 'Pressure Vessels', description: 'Certified manufacturing of unfired, high-temperature pressure containers.' },
    { stamp: 'R', name: 'Repairs & Alterations', description: 'National Board authorization for specialized high-alloy welding, mechanical updates, and tube repairs.' },
  ];

  const testimonials = [
    {
      quote: "The Boiler LLC responded to our emergency steam line leak at 3:00 AM. Javarius Gay had a crew on-site with materials and weld procedures within two hours. Absolute professionals.",
      author: "Marcus Vance",
      role: "Operations Chief, Atlanta Power Generation Center",
      rating: 5,
    },
    {
      quote: "During our annual healthcare plant inspection, we found compromised tubing in the primary heating boiler. They completed a localized re-tube and secondary pressure test before our operational deadline.",
      author: "Sarah Jenkins, PE",
      role: "Director of Facilities, Piedmont Health Campus",
      rating: 5,
    },
    {
      quote: "Their energy efficiency analysis identified critical waste heat. By installing their flue-gas heat exchanger design, we achieved full ROI in just 11 months on fuel reduction alone.",
      author: "Donald Westbrook",
      role: "Plant Operations Manager, GA Manufacturing Alliance",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "What ASME code certifications does The Boiler LLC hold?",
      a: "The Boiler LLC holds prestigious ASME authorizations for 'S' (Power Boilers) and 'U' (Pressure Vessels), as well as the National Board 'R' (Repairs and Alterations) stamp. These allow us to perform critical structural updates and code-welding.",
    },
    {
      q: "What are your standard emergency response metrics in the Atlanta area?",
      a: "We maintain 24/7 dispatcher availability for immediate mechanical outages. Typically, diagnostic responders and containment crews are deployed on-site within 2 hours of direct dispatch within the Atlanta metro area.",
    },
    {
      q: "Does your team handle mechanical piping and thermal system design?",
      a: "Yes. In addition to repairs, we provide full mechanical systems planning, ASME code envelope designs, high-pressure steam distribution calculations, and custom industrial piping designs.",
    },
    {
      q: "Can you assist with annual Georgia state compliance examinations?",
      a: "Absolutely. We prepare pressure vessels, handle mechanical wash-outs, run hydrostatic testing, inspect safety interlocks, and accompany State Inspectors to make certain your operating certificates are renewed with zero friction.",
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#070913] border-b border-slate-900 overflow-hidden py-20 px-4 md:px-8">
        
        {/* Boiler Machine Faded Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/images/hero_boiler_illustration.jpg"
            alt="Boiler Machine Background"
            className="w-full h-full object-cover opacity-10 filter saturate-50 mix-blend-lighten"
            referrerPolicy="no-referrer"
          />
          {/* Subtle radial and linear dark overlays to fade edges into slate backgrounds */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070913]/40 to-[#070913] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070913]/20 via-transparent to-[#070913]" />
        </div>

        {/* Dynamic Blueprint Mechanical Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none select-none">
          {/* Main vertical blueprint divisions */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(ellipse at 50% 50%, rgba(249, 115, 22, 0.12) 0%, transparent 75%),
              linear-gradient(rgba(21, 28, 58, 0.5) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(21, 28, 58, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 40px 40px, 40px 40px'
          }} />
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-slate-800 opacity-20" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Context */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Glowing Critical Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 px-4 py-2 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-orange font-bold">
                CRITICAL EMERGENCY RESPONSE 24 / 7 / 365
              </span>
            </motion.div>

            {/* Display Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none text-white uppercase">
                ENGINEERING <br />
                <span className="text-brand-orange">EXCELLENCE.</span> <br />
                RELIABLE INDUSTRIAL SOLUTIONS.
              </h1>
              <p className="text-slate-400 font-sans text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
                Providing state-of-the-art steam systems, certified ASME code-welding, heavy pressure vessel repairs, and preventative plant maintenance configurations in Atlanta, GA.
              </p>
            </motion.div>

            {/* CTA action cluster */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={openModal}
                className="px-8 py-4 bg-brand-orange hover:bg-brand-orange/95 text-brand-dark font-display font-extrabold text-xs tracking-widest rounded uppercase transition shadow-lg shadow-brand-orange/20 flex items-center gap-2"
              >
                REQUEST A PROPOSAL <ArrowRight size={14} className="stroke-[2.5]" />
              </button>
              
              <Link
                href="/contact"
                className="px-8 py-4 bg-brand-navy hover:bg-[#151c3a] text-slate-100 border border-slate-800 hover:border-slate-700 font-display font-bold text-xs tracking-widest rounded uppercase transition flex items-center gap-2"
              >
                CONTACT US <ChevronRight size={14} />
              </Link>
            </motion.div>

            {/* Status indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-900 border-dashed max-w-lg font-mono text-center sm:text-left"
            >
              <div>
                <span className="block text-brand-orange text-xl font-bold font-display">S, U, R</span>
                <span className="text-[10px] text-brand-gray uppercase tracking-wider">ASME Stamps Approved</span>
              </div>
              <div className="border-x border-slate-900 px-4">
                <span className="block text-white text-xl font-bold font-display">100%</span>
                <span className="text-[10px] text-brand-gray uppercase tracking-wider">Regulatory Compliance</span>
              </div>
              <div>
                <span className="block text-brand-orange text-xl font-bold font-display">2HR MAX</span>
                <span className="text-[10px] text-brand-gray uppercase tracking-wider">GA Emergency dispatch</span>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Graphic: Simulated Isometric Mechanical Gauge Dashboard */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', duration: 1 }}
              className="w-full aspect-square relative bg-[#090b15] border border-slate-800 rounded p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Radial gradient background glow */}
              <div className="absolute inset-0 bg-gradient-radial from-brand-orange/5 via-transparent to-transparent pointer-events-none" />

              {/* Top mechanical stats bar */}
              <div className="flex justify-between items-center text-xs font-mono border-b border-slate-800/80 pb-4">
                <span className="text-brand-gray flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  STATION #04: CONNECTED
                </span>
                <span className="text-brand-orange font-bold uppercase">STEAM CORE ACTIVE</span>
              </div>

              {/* Main SVG Gauge Layout */}
              <div className="flex-1 flex items-center justify-center py-6">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    {/* Dark track background */}
                    <circle cx="50" cy="50" r="40" className="stroke-slate-900 fill-none" strokeWidth="6" />
                    {/* Glowing pressure line */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-brand-orange fill-none"
                      strokeWidth="6"
                      strokeDasharray="251.2"
                      strokeDashoffset="75.3" /* Represents 70% pressure level */
                    />
                    {/* Critical limit sector */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="stroke-red-500/60 fill-none"
                      strokeWidth="2"
                      strokeDasharray="251.2"
                      strokeDashoffset="213"
                    />
                  </svg>
                  {/* Gauge center context */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-mono select-none">
                    <span className="text-[10px] text-brand-gray uppercase tracking-wider">BOILER PSI</span>
                    <span className="text-4xl font-extrabold font-display text-white mt-1">428.5</span>
                    <span className="text-[11px] text-brand-yellow font-bold mt-1">HIGH CONSTANT</span>
                  </div>
                </div>
              </div>

              {/* Bottom technical indicators block */}
              <div className="border-t border-slate-800/80 pt-4 grid grid-cols-2 gap-4 font-mono text-xs">
                <div>
                  <span className="text-brand-gray block text-[10px] uppercase">Operational Temp</span>
                  <span className="text-slate-100 font-bold block mt-0.5">485.2°F (251.7°C)</span>
                </div>
                <div>
                  <span className="text-brand-gray block text-[10px] uppercase">Exhaust Trim</span>
                  <span className="text-brand-yellow font-bold block mt-0.5">98.6% Efficiency</span>
                </div>
              </div>

              {/* Border Grid Decors */}
              <div className="absolute top-1 left-1 font-mono text-[7px] text-slate-700">COORD_33.918_N</div>
              <div className="absolute bottom-1 right-2 font-mono text-[7px] text-slate-700">DISPATCH_PORT_3000</div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. SPECIFIC SERVICES CATEGORY JUMP */}
      <section className="py-20 bg-[#090c1a] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold">
                COMMITTED TO EXCELLENCE
              </span>
              <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-wider text-white">
                HEAVY MECHANICAL SYSTEMS SPECIALISTS
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-orange hover:text-white transition group"
            >
              VIEW COMPREHENSIVE SERVICE DIRECTORY
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0d122b] border border-slate-800 rounded p-6 hover:border-brand-orange/40 transition duration-200 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-brand-navy rounded border border-slate-800/80 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-slate-100 group-hover:text-white transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-gray leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-800/60 mt-6 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-brand-gray">RATED STANDARD:</span>
                  <span className="text-brand-yellow font-bold uppercase">{item.metrics}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SAFETY CERTIFICATIONS SEGMENT */}
      <section className="py-20 bg-[#070913] border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-12">
          
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center gap-1.5 text-xs text-brand-orange font-mono font-bold tracking-widest">
              <Award size={14} /> HEAVY EMBLEM SAFETY ASSURANCES
            </div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-wider">
              ASME CERTIFICATION COMPLIANCE
            </h2>
            <p className="text-brand-gray text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
              We operate strictly under the National Board of Boiler and Pressure Vessel Inspectors and state guidelines. All materials are certified, tracked, and registered accordingly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {safetyCerts.map((cert) => (
              <div
                key={cert.stamp}
                className="bg-[#0b1025] border border-slate-800 rounded p-6 text-left flex gap-5 hover:border-slate-700 transition"
              >
                <div className="h-16 w-16 flex-shrink-0 bg-brand-dark rounded border border-brand-orange/30 flex items-center justify-center font-display font-black text-brand-orange text-3xl shadow-inner select-none">
                  {cert.stamp}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-black text-sm uppercase text-slate-100 tracking-wider">
                    ASME Code Stamp &ldquo;{cert.stamp}&rdquo;
                  </h3>
                  <p className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest font-semibold">
                    {cert.name}
                  </p>
                  <p className="text-xs text-brand-gray leading-normal">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-navy/35 border border-slate-800 rounded-lg p-6 max-w-3xl mx-auto flex flex-col md:flex-row gap-5 items-center justify-between text-left font-mono">
            <div className="space-y-1">
              <span className="text-[10px] text-brand-gray uppercase tracking-wider">EMERGENCY LINE RE-CHECK</span>
              <p className="text-slate-200 text-sm font-sans font-medium">
                Do you have a compromised boiler system requiring rapid code welding under an ASME stamp?
              </p>
            </div>
            <a
              href="tel:+14045550192"
              className="px-6 py-2.5 bg-red-950/40 text-red-400 border border-red-900/60 hover:bg-red-900 hover:text-white transition rounded font-bold uppercase text-xs tracking-wider whitespace-nowrap text-center"
            >
              CALL EMERGENCY DESK
            </a>
          </div>

        </div>
      </section>

      {/* BRAND INFRASTRUCTURE VISUAL SPOTLIGHT */}
      <section className="py-20 bg-[#070913] border-b border-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold">
              PHYSICAL SYSTEM SHOWCASE
            </span>
            <h2 className="font-display font-black text-3xl uppercase tracking-wider text-white">
              ENGINEERED COMPRESSION VESSELS
            </h2>
            <div className="h-1 w-12 bg-brand-orange" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Every industrial boiler installation is drafted in precise mechanical wireframes and three-dimensional layout grids to assess water volume speed, combustion distribution efficiency, and gas exhaust clearance ratios.
            </p>
            <p className="text-xs text-brand-gray leading-relaxed font-sans">
              Our technicians utilize state-of-the-art diagnostic imaging to plan steam pipe paths across intricate Georgia industrial structures, avoiding structural interference and optimizing heat convection currents.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-slate-800 bg-[#090b15] p-2 rounded-lg overflow-hidden shadow-2xl relative group">
              <img
                src="/images/hero_boiler_illustration.jpg"
                alt="Boiler LLC system infrastructure"
                className="w-full rounded h-64 sm:h-80 object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-2 bottom-2 bg-brand-dark/95 border border-slate-800 rounded p-4 flex justify-between items-center font-mono text-xs">
                <div>
                  <span className="text-brand-orange block font-bold text-[10px] uppercase tracking-wide">COMPILER MODEL REGISTER</span>
                  <span className="text-slate-300 text-[11px] block mt-0.5">THE BOILER LLC // STATE OF GEORGIA</span>
                </div>
                <span className="text-emerald-500 font-bold bg-emerald-950/30 px-2 py-0.5 border border-emerald-900/40 rounded uppercase text-[9px] animate-pulse">AUTHORIZATION VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELECTION OF TESTIMONIALS */}
      <section className="py-20 bg-[#090c1a] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold">
              TRUSTED AT SCALE
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-wider">
              CLIENT SUCCESS & SYSTEM VERDICTS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-[#0d1127] border border-slate-800 rounded p-8 flex flex-col justify-between relative group"
              >
                {/* Visual feedback icon */}
                <div className="absolute top-6 right-6 text-brand-orange/15 group-hover:text-brand-orange/25 transition-colors">
                  <Quote size={40} className="stroke-[2.5]" />
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Rating stars */}
                  <div className="flex gap-1 text-brand-yellow font-bold text-xs font-mono">
                    {'★'.repeat(test.rating)}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic font-medium">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 mt-6 font-mono text-xs">
                  <span className="block font-sans font-bold text-slate-100">{test.author}</span>
                  <span className="text-[10px] text-brand-gray tracking-tight block mt-0.5">{test.role}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE FAQ ACCORDION */}
      <section className="py-20 bg-[#070913] border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold">
              HAVE TECHNICAL QUERIES?
            </span>
            <h2 className="font-display font-black text-3xl uppercase tracking-wider text-white">
              BOILER MANAGEMENT SYSTEM FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-800/80 bg-[#0a0e22] rounded overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left p-5 text-sm md:text-base font-bold font-display uppercase tracking-wide text-slate-200 hover:bg-[#0e142e] transition"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className="text-brand-orange">
                    {activeFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-brand-gray leading-relaxed border-t border-slate-800/50 bg-[#070a1d]">
                    <p className="font-sans font-normal">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <p className="text-brand-gray text-[11px] font-mono uppercase tracking-wider">
              HAVE MORE DISPATCH QUESTIONS?{' '}
              <Link href="/contact" className="text-brand-orange font-bold hover:underline">
                SPEAK TO THE DISPATCH OFFICE DECK »
              </Link>
            </p>
          </div>

        </div>
      </section>

      {/* 6. SYSTEM INTAKE BOTTOM ACTION BANNER */}
      <section className="py-20 bg-gradient-to-b from-[#070913] to-[#03050a] relative overflow-hidden text-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-wider">
            PREPARED TO START YOUR INDUSTRIAL INSTALLATION?
          </h2>
          <p className="text-brand-gray text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Configure system parameters, select capacity limits, specify regulatory timeline goals, and acquire a meticulous system estimate directly from our managing director.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange/95 text-brand-dark font-display font-extrabold text-xs tracking-widest rounded uppercase transition shadow-lg shadow-brand-orange/20"
            >
              COMMENCE QUOTE PORTAL
            </button>
            <Link
              href="/services"
              className="px-8 py-4 bg-brand-navy hover:bg-[#131a37] text-white border border-slate-800 rounded font-display font-bold text-xs tracking-widest rounded uppercase transition"
            >
              EXPLORE OUR INDUSTRIAL SERVICES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
