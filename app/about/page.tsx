'use client';

import React from 'react';
import Link from 'next/link';
import { useQuoteModal } from '@/lib/quote-context';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Eye, Award, HardHat, FileText, CheckCircle2, Phone, Briefcase } from 'lucide-react';

export default function AboutPage() {
  const { openModal } = useQuoteModal();

  const values = [
    {
      title: 'Commitment to Quality',
      description: 'All operations match or exceed National Board criteria. We implement triple-validation checkout protocols on every pressure weld before firing any burner.',
      icon: <Award className="h-6 w-6 text-brand-orange" />
    },
    {
      title: 'Safety First Culture',
      description: 'We run ongoing OSHA regulatory checkups. Every technician carries state licensing and specialized structural thermal handling certificates.',
      icon: <HardHat className="h-6 w-6 text-brand-orange" />
    },
    {
      title: 'Technological Innovation',
      description: 'Pioneers in advanced electronic combustion modulation, digital boiler feed-water monitoring, and high-efficiency hybrid economizer arrays.',
      icon: <CheckCircle2 className="h-6 w-6 text-brand-orange" />
    },
  ];

  return (
    <div className="w-full">
      {/* 1. SECTION HEADER */}
      <section className="relative bg-[#090c1a] border-b border-slate-900 py-16 md:py-24 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 80%), linear-gradient(#0e132c 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 30px 30px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold block">
            ABOUT THE BOILER LLC
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-white">
            Pioneering Heavy Industrial Mechanical Designs
          </h1>
          <div className="h-1 w-20 bg-brand-orange mx-auto my-3" />
          <p className="text-brand-gray text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-mono">
            ESTABLISHED BY JAVARIUS GAY SOLUTIONS CORE • ATLANTA, GEORGIA
          </p>
        </div>
      </section>

      {/* 2. MAIN SYNOPSIS CONTAINER */}
      <section className="py-20 bg-[#070913] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-brand-orange uppercase font-semibold">Corporate Overview</span>
              <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-wider text-white">
                HEAVY STEAM & ENERGY FLUID BLUEPRINT
              </h2>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Founded in Atlanta, **The Boiler LLC** is a fully integrated, licensed, and ASME-certified industrial engineering company. We serve as the primary mechanical and maintenance partner for critical power generation facilities, healthcare systems, and high-capacity central utility operations.
            </p>

            <p className="text-sm text-brand-gray leading-relaxed font-sans">
              Under the active administration of Managing Director **Javarius Gay**, our technical cohorts deliver turnkey boiler assembly, complex pressure piping installation, structural steel alterations, preventative burner combustion tuning, and certified state compliance reviews. Where steam is critical, we make certain throughput is consistent, safe, and highly efficient.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-900">
              <div className="bg-[#0b0e21] border border-slate-800 p-4 rounded text-left">
                <span className="text-brand-orange font-mono text-xs font-bold block uppercase mb-1">State Licensure</span>
                <p className="text-xs text-slate-300">Georgia State Power Boiler Operator License Registry & Code Stamp Authority.</p>
              </div>
              <div className="bg-[#0b0e21] border border-slate-800 p-4 rounded text-left">
                <span className="text-brand-orange font-mono text-xs font-bold block uppercase mb-1">ASME Standards</span>
                <p className="text-xs text-slate-300">National Board Authorized R Stamp, ASME Section I and VIII compliance criteria.</p>
              </div>
            </div>
          </div>

          {/* Right Block: Mission & Vision */}
          <div className="lg:col-span-6 space-y-6">
            {/* Custom Illustration Card */}
            <div className="bg-[#0b1025] border border-slate-800 rounded overflow-hidden relative group shadow-lg">
              <img
                src="/images/about_boiler_illustration.jpg"
                alt="Boiler Blueprint Schematic"
                className="w-full h-52 object-cover opacity-75 group-hover:opacity-100 transition duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-4 font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest bg-brand-dark/90 px-2.5 py-1 rounded border border-slate-800">
                ASME CODES SPECIFICATION PLOT
              </div>
            </div>
            
            {/* Mission Statement */}
            <div className="bg-[#0b1025] border border-slate-800 rounded p-8 relative overflow-hidden flex gap-5">
              <div className="h-12 w-12 bg-brand-orange/10 rounded flex items-center justify-center text-brand-orange flex-shrink-0">
                <Target size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wider">
                  OUR CORPORATE MISSION
                </h3>
                <p className="text-xs text-brand-gray leading-relaxed font-sans">
                  To supply industrial manufacturing, power generation, and public infrastructures with the safest, most thermal-efficient, and structurally robust mechanical heating, steam routing, and custom combustion boiler solutions. We believe in absolute reliability—because down-time is never an option for vital systems.
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="bg-[#0b1025] border border-slate-800 rounded p-8 relative overflow-hidden flex gap-5">
              <div className="h-12 w-12 bg-brand-orange/10 rounded flex items-center justify-center text-brand-orange flex-shrink-0">
                <Eye size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wider">
                  OUR TECHNOLOGICAL VISION
                </h3>
                <p className="text-xs text-brand-gray leading-relaxed font-sans">
                  To establish the benchmark for digital hybrid boiler installations across Georgia, combining classical mechanical pressure engineering with modern computerized emissions optimization, solidifying our stance as the primary energy saving partner for local and state operations.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. DETAILED PROFILE: JAVARIUS GAY */}
      <section className="py-20 bg-[#090c1a] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold">
              MANAGING ADMINISTRATION
            </span>
            <h2 className="font-display font-black text-3xl uppercase tracking-wider text-white">
              OWNER & FOUNDING ENGINEER PROFILE
            </h2>
          </div>

          <div className="bg-[#0d122e] border border-slate-800 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 shadow-xl shadow-brand-dark/20">
            
            {/* Profile Avatar Frame */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-4">
              <div className="relative h-48 w-48 rounded bg-brand-navy border-2 border-brand-orange flex items-center justify-center p-1 font-display font-black text-5xl text-brand-orange select-none">
                {/* Simulated professional avatar vector representation */}
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-orange stroke-[2]">
                  <path d="M50 45 C58 45 64 38 64 30 C64 22 58 15 50 15 C42 15 36 22 36 30 C36 38 42 45 50 45 Z" className="fill-brand-orange/10" />
                  <path d="M20 85 C20 70 32 60 50 60 C68 60 80 70 80 85" className="fill-brand-orange/5" />
                  <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="3" className="text-slate-800" />
                </svg>
                <div className="absolute -bottom-2 bg-brand-orange text-brand-dark px-3 py-1 font-mono text-[10px] font-black uppercase rounded tracking-widest shadow-lg">
                  FOUNDER
                </div>
              </div>
              <div className="space-y-1 pt-2">
                <h3 className="font-display font-black text-lg text-slate-100 uppercase">Javarius Gay</h3>
                <p className="text-xs text-brand-orange font-mono font-bold uppercase">Managing Director & Plant inspector</p>
                <p className="text-[10px] text-brand-gray font-mono">STAMP COORDINATION OFFICER</p>
              </div>
            </div>

            {/* Profile specifications */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-brand-orange text-xs font-mono font-bold uppercase block tracking-widest border-b border-slate-850 pb-2">
                DIRECT ADMINISTRATIVE RESOLVE
              </span>

              <p className="text-sm text-slate-300 leading-relaxed italic">
                &ldquo;Our client directive is simple: Zero downtime and 100% safety. In industrial mechanical systems, there is no margin for error or partial solutions. When we design heat exchangers, install pressure boilers, or re-tube structural chambers, we do it to hold structural integrity for decades.&rdquo;
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-4 text-slate-300">
                <div className="flex items-center gap-2.5 bg-brand-dark p-3 border border-slate-800 rounded">
                  <ShieldCheck size={16} className="text-brand-orange flex-shrink-0" />
                  <span>Licensed State Boiler Operator</span>
                </div>
                <div className="flex items-center gap-2.5 bg-brand-dark p-3 border border-slate-800 rounded">
                  <Award size={16} className="text-brand-orange flex-shrink-0" />
                  <span>Certified ASME Welding Proctor</span>
                </div>
                <div className="flex items-center gap-2.5 bg-brand-dark p-3 border border-slate-800 rounded">
                  <FileText size={16} className="text-brand-orange flex-shrink-0" />
                  <span>National Board NBBI authorized</span>
                </div>
                <div className="flex items-center gap-2.5 bg-brand-dark p-3 border border-slate-800 rounded">
                  <Briefcase size={16} className="text-brand-orange flex-shrink-0" />
                  <span>35+ Year Combined Group Oversight</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange hover:bg-brand-orange/95 text-brand-dark font-display font-black text-xs tracking-widest rounded uppercase transition transition-all duration-200"
                >
                  DISPATCH DIRECT DIRECTIVE <Phone size={12} className="stroke-[2.5]" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. VALUES & CORE CONFORMANCE */}
      <section className="py-20 bg-[#070913] border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold">
              BLUEPRINT PARAMETERS
            </span>
            <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider">
              COMMITMENT TO INDUSTRIAL CONFORMANCE
            </h2>
            <p className="text-brand-gray text-xs md:text-sm max-w-2xl mx-auto">
              Our engineering execution is guided by robust customer standards—making certain your mechanical plant passes inspections with distinction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-[#0b0e20] border border-slate-800 rounded-lg p-6 hover:border-brand-orange/45 transition duration-200 text-left space-y-4"
              >
                <div className="h-12 w-12 bg-brand-navy rounded border border-slate-800/80 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-display font-black text-base uppercase text-slate-100 tracking-wider">
                  {v.title}
                </h3>
                <p className="text-xs text-brand-gray leading-relaxed font-sans">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>



    </div>
  );
}
