'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useQuoteModal } from '@/lib/quote-context';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Calendar, MapPin, Gauge, Award, ArrowUpRight, Flame, Settings } from 'lucide-react';

export default function ProjectsPage() {
  const { openModal } = useQuoteModal();
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'POWER GENERATION', 'HEALTHCARE', 'MANUFACTURING', 'COMMERCIAL & PUBLIC'];

  const projects = [
    {
      title: 'Water-Tube Boiler Overhaul',
      category: 'POWER GENERATION',
      location: 'Atlanta Power Grid Center',
      date: 'January 2026',
      specs: '1200 HP water-tube boiler • Full re-tubing and combustion re-lining',
      challenge: 'The primary water-tube system suffered extensive scale calcification and localized structural failures on the core water wall tubes, causing operations to drop below 60%.',
      solution: 'Our crews drafted complete tube extraction diagrams, rolled 420 brand-new carbon alloy tubes, performed pressure-weld assemblies, and applied R-stamp certifications.',
      result: 'The system fired at 100% capacity under inspection, achieving a 98.7% combustion rating and zero state-examination limitations.',
      clientQuote: 'Javarius Gay and his technicians saved us hundreds of thousands in replacement costs.',
      clientRole: 'Marcus Vance, Facility Director'
    },
    {
      title: 'Emergency Medical Boiler Re-Tube',
      category: 'HEALTHCARE',
      location: 'Piedmont Healthcare Facility',
      date: 'April 2026',
      specs: '600 HP high-pressure steam boiler • Specialized NDT ultrasound verification',
      challenge: 'A critical crack was identified on tube #42 during an ultrasound audit, threatening immediate shutdown of heating systems across the surgical wing.',
      solution: 'We executed localized isolation, extracted the fractured tube casing, performed high-temperature code welding, and verified structural integrity with hydrostatic pressure.',
      result: 'Operation resumed in 14 hours total, with zero heating disruption across the patient wings.',
      clientQuote: 'They responded in under two hours and had the system back online before dawn.',
      clientRole: 'Sarah Jenkins, PE, Director of Nursing & Facilities'
    },
    {
      title: 'Automated Biomass Steam Integration',
      category: 'MANUFACTURING',
      location: 'Georgia Wood Pulp Processing',
      date: 'May 2026',
      specs: '1500 HP combined heat & power grid • Waste wood heat recovery integration',
      challenge: 'The plant sought to reduce massive gas consumption bills by converting waste wood pulp gases into process steam.',
      solution: 'Designed and installed a custom waste-heat-recovery (WHR) header, fabricated specialized economizer coils, and integrated oxygen combustion controls.',
      result: 'Lowered grid fuel imports by 22% overall, with full thermal ROI achieved in less than one year.',
      clientQuote: 'The Boiler LLC delivered complex systems calculations on budget and on schedule.',
      clientRole: 'Donald Westbrook, Lead mechanical Coordinator'
    },
    {
      title: 'State University Heating Grid Renovation',
      category: 'COMMERCIAL & PUBLIC',
      location: 'Atlanta Academic Campus',
      date: 'March 2026',
      specs: 'Tri-boiler hot water network • Smart building systems interlock',
      challenge: 'An outdated, heavy coal-boiler system required immediate environment-compliant conversion into gas/fuel modern networks.',
      solution: 'Removed internal grid elements safely, mounted modern low-NOx burners, updated electronic sequence parameters, and integrated smart control boards.',
      result: '98.5% state emission compliant, yielding fully automated, remote steam-monitoring.',
      clientQuote: 'An incredible modernization project. Highly recommend their thermal engineering teams.',
      clientRole: 'Prof. David Lawson, University Infrastructure Board'
    },
    {
      title: 'Process Steam Line Pipe Isolation',
      category: 'MANUFACTURING',
      location: 'Atlanta Beverage Bottlers',
      date: 'February 2026',
      specs: 'ASME B31.3 process piping • 450 PSI header stress analysis',
      challenge: 'The bottling lines required mechanical heat loop extensions without compromising pressure limits on the main steam header.',
      solution: 'Modeled pressure fluctuations, fabricated and insulated expansion headers, and welded branch connections under active safety bypass guidelines.',
      result: 'Bottle manufacturing throughput boosted by 15% with zero pressure drop on existing steam legs.',
      clientQuote: 'Precise layouts and impeccable high-pressure pipe welding standards.',
      clientRole: 'Claudio Rossi, Plant Operations supervisor'
    }
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* 1. HEADER HERO */}
      <section className="relative bg-[#090c1a] border-b border-slate-900 py-16 md:py-24 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 80%), linear-gradient(rgba(21, 28, 58, 0.5) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 30px 30px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold block">
            THE BOILER LLC PROJECTS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-white">
            COMPLETED WORKS & STRUCTURAL PERFORMANCE
          </h1>
          <div className="h-1 w-20 bg-brand-orange mx-auto my-3" />
          <p className="text-brand-gray text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            A meticulous digest of power grid restorations, healthcare emergency remediations, and heavy industrial boiler integrations in Georgia.
          </p>
        </div>
      </section>

      {/* 2. FILTER MENU ELEMENT */}
      <section className="py-20 bg-[#070913] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="flex flex-wrap items-center justify-center gap-2 pb-4 border-b border-slate-900 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded font-bold uppercase transition duration-150 ${
                  activeCategory === cat
                    ? 'bg-brand-orange text-brand-dark'
                    : 'bg-[#090c16] border border-slate-800 text-brand-gray hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* DYNAMIC CARD GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={p.title}
                  className="bg-[#0b0e22] border border-slate-800 rounded-lg overflow-hidden p-6 md:p-8 flex flex-col justify-between hover:border-brand-orange/40 transition duration-200 relative group"
                >
                  {/* Case Photo Illustration Thumbnail */}
                  <div className="border border-slate-850 rounded-lg overflow-hidden h-44 relative mb-6 group-hover:border-slate-700 transition">
                    <img
                      src={`https://picsum.photos/seed/boiler-weld-${idx}/640/360`}
                      alt={p.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition duration-350 filter saturate-50 hover:saturate-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-transparent opacity-85" />
                    <span className="absolute bottom-3 left-4 font-mono text-[9px] text-[#94a3b8] bg-brand-dark/90 px-2 py-0.5 rounded border border-slate-800 uppercase tracking-widest">
                      SYSTEM PROJECT REGISTER INDEX • 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-5">
                    
                    {/* Top block */}
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-widest bg-brand-orange/10 px-2.5 py-1 rounded">
                          {p.category}
                        </span>
                        <h3 className="font-display font-black text-lg md:text-xl text-slate-100 group-hover:text-white transition uppercase mt-2">
                          {p.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-brand-gray whitespace-nowrap">{p.date}</span>
                    </div>

                    {/* Metadata specs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono py-3 border-y border-slate-900 text-slate-300">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-brand-orange flex-shrink-0" />
                        <span>{p.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge size={14} className="text-brand-orange flex-shrink-0" />
                        <span className="truncate">{p.specs}</span>
                      </div>
                    </div>

                    {/* Description blocks */}
                    <div className="space-y-3 pt-2 text-xs leading-relaxed font-sans">
                      <div>
                        <span className="font-mono text-[10px] text-brand-gray uppercase tracking-wider block font-bold">
                          The Operational challenge:
                        </span>
                        <p className="text-brand-gray mt-0.5">{p.challenge}</p>
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-brand-orange uppercase tracking-wider block font-bold">
                          The Mechanical Solution:
                        </span>
                        <p className="text-slate-300 mt-0.5">{p.solution}</p>
                      </div>
                      <div className="border-l-2 border-brand-orange pl-3 bg-brand-navy/30 py-2.5 rounded-r">
                        <span className="font-mono text-[10px] text-brand-yellow uppercase tracking-wider block font-bold">
                          THE SYSTEM OUTCOME:
                        </span>
                        <p className="text-slate-300 font-medium mt-0.5">{p.result}</p>
                      </div>
                    </div>

                  </div>

                  {/* Client feedback quote */}
                  <div className="pt-6 border-t border-slate-900 mt-6 bg-[#080a18] p-4 rounded-md">
                    <p className="text-xs italic text-slate-300 leading-normal">
                      &ldquo;{p.clientQuote}&rdquo;
                    </p>
                    <span className="block font-mono text-[10px] text-brand-gray uppercase tracking-widest text-right mt-2">
                      — {p.clientRole}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. SAFETY CERTIFICATION REDIRECT FOOT */}
      <section className="py-20 bg-[#090c1a] text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
            PREPARE YOUR PLANT FOR HIGH-PRESSURE EXAMINATIONS
          </h2>
          <p className="text-brand-gray text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Need localized water wall tube extraction, ultrasound diagnostics, boiler wash-out services, or an authorized R-Stamp welding dispatcher?
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4 font-mono text-xs">
            <button
              onClick={openModal}
              className="px-8 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-display font-black tracking-widest rounded uppercase transition inline-block shadow-lg shadow-brand-orange/15"
            >
              COMMENCE SPECIFICATIONS PORTAL
            </button>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-brand-dark border border-slate-800 text-white hover:border-slate-700 rounded tracking-widest uppercase transition inline-block"
            >
              TALK TO EMERGENCY DISPATCH
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
