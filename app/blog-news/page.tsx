'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useQuoteModal } from '@/lib/quote-context';
import { motion, AnimatePresence } from 'motion/react';
import { ClipboardCheck, Calendar, Search, ArrowRight, Zap, Award, Flame, Settings } from 'lucide-react';

export default function BlogNewsPage() {
  const { openModal } = useQuoteModal();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');

  const tags = ['ALL', 'REGULATORY CODE', 'ENERGY SAVINGS', 'MAINTENANCE BLUEPRINTS', 'WELDING TECHNOLOGY'];

  const articles = [
    {
      title: 'Deciphering ASME Section I versus Section IV Boiler Codes',
      tag: 'REGULATORY CODE',
      date: 'June 10, 2026',
      readTime: '6 min read',
      editor: 'Javarius Gay',
      snippet: 'Determining correct power vs. heating criteria is crucial to pass state compliance. We break down the differences and pressure ceilings specified by code.',
      body: 'Understanding the clear distinction between ASME Section I (Power Boilers) and Section IV (Heating Boilers) is fundamental to proper facilities design and code compliance. Section I governs high-temperature, high-pressure steam boilers operating beyond 15 PSI or high-temperature water boilers exceeding 160 PSI and 250°F. Conversely, Section IV is strictly limited to low-pressure steam (15 PSI max) and low-pressure hot water (160 PSI / 250°F max). Choosing the incorrect design classification triggers intense auditing difficulties, excessive licensing costs, and potential safety compromises.',
    },
    {
      title: '3 Preventive Boiler Tube Scale Expatriation Strategies',
      tag: 'MAINTENANCE BLUEPRINTS',
      date: 'May 28, 2026',
      readTime: '5 min read',
      editor: 'Javarius Gay',
      snippet: 'Hard silicate scaling damages steam drum transfer efficiency. Implement these three wash-out procedures to maximize tube life.',
      body: 'Silicate and calcium scale act as extreme thermal insulators inside fire-tube and water-tube boilers. Even 1/16th of an inch of scale buildup can force a boiler to consume up to 15% more fuel to maintain required steam pressure. This artikel outlines: 1) Meticulous daily blowdown frequency, 2) Ultrasonic wall diagnostics to detect localized tube scaling, and 3) Targeted chemical wash-outs using custom organic scale solvents. Protecting tube materials also extends structural service life by preventing fire-side tube overheating.',
    },
    {
      title: 'Integrating Exhaust Flue Economizers to Shave Fuel Bills',
      tag: 'ENERGY SAVINGS',
      date: 'May 14, 2026',
      readTime: '8 min read',
      editor: 'Thermal Engineering Desk',
      snippet: 'Don`t let valuable thermal dollars fly up your exhaust stack. Learn how heat recovery loops recover waste exhaust.',
      body: 'In typical industrial process boilers, hot exhaust gases exit the chimney at temperatures ranging from 400°F to 600°F. This represents direct thermodynamic loss. By placing a custom-engineered heat exchanger loop, or economizer, directly in the flue path, facilities can pre-heat cold makeup water before it enters the boiler drum. This decreases the fuel volume needed to flash water to steam. For large manufacturing plants, integrating an economizer yields up to 10-15% total fuel savings, paying itself off completely within 12 months.',
    },
    {
      title: 'A Facilities Manual for Georgia State Boiler Examinations',
      tag: 'REGULATORY CODE',
      date: 'April 22, 2026',
      readTime: '7 min read',
      editor: 'Compliance Desk',
      snippet: 'Step-by-step checklist to dry-dock, clean, inspect safety interlocks, and secure certificate updates seamlessly.',
      body: 'Georgia state department safety inspectors audit all municipal and high-pressure private pressure vessels annually. Failing a compliance examination results in immediate shutdown orders. To ensure zero operational friction: 1) Cool the system and perform a complete mechanical water washout, 2) Expose all hand-holes, man-holes, and low-water cutoff chambers, 3) Test pressure-relief valves for crisp closure, and 4) Collect and present complete water treatment logs alongside ASME weld certificates.',
    },
    {
      title: 'Advanced Welds: Mastering alloy joining for R-Stamp repairs',
      tag: 'WELDING TECHNOLOGY',
      date: 'March 05, 2026',
      readTime: '10 min read',
      editor: 'Javarius Gay',
      snippet: 'How high-temperature alloy joins hold mechanical stability. Analyzing pre-heating and weld cooling procedures under NBBI.',
      body: 'High-alloy pressure boiler parts require highly specific welding steps to prevent thermal cracking. Under the National Board R-Stamp, our welding cohorts apply precise temperature-controlled pre-heating before joining alloy and carbon metals. Using backing gas and implementing careful post-weld heat treatment (PWHT) ensures that weld seams contain zero hydrogen embrittlement, yielding standard pressure boundaries that stand up to decades of cyclical heating stress.',
    }
  ];

  const filteredArticles = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.snippet.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.body.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'ALL' || art.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="w-full">
      {/* 1. HEADER SECTION */}
      <section className="relative bg-[#090c1a] border-b border-slate-900 py-16 md:py-24 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 80%), linear-gradient(rgba(21, 28, 58, 0.5) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 40px 40px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold block">
            THE BOILER LLC NEWS ROOM
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-white">
            INDUSTRIAL BULLITINS & CODES JOURNAL
          </h1>
          <div className="h-1 w-20 bg-brand-orange mx-auto my-3" />
          <p className="text-brand-gray text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Meticulous engineering briefings on energy recovery, ASME code updates, preventative operations, and boiler water chemistry calculations.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & NEWS WRAPPER */}
      <section className="py-20 bg-[#070913] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          {/* Controls bar */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center pb-8 border-b border-slate-900">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search boiler codes, scaling, welds..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#090c17] border border-slate-800 rounded pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-orange font-mono placeholder:text-slate-600"
              />
            </div>

            {/* Tags list */}
            <div className="flex flex-wrap gap-2 font-mono text-[10px]">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded font-bold uppercase transition duration-150 ${
                    selectedTag === tag
                      ? 'bg-brand-orange text-brand-dark'
                      : 'bg-[#090b14] border border-slate-800 text-brand-gray hover:text-white hover:border-slate-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

          </div>

          {/* ARTICLES DISPLAY GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Articles List */}
            <div className="lg:col-span-8 space-y-8">
              <AnimatePresence mode="popLayout">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((art) => (
                    <motion.article
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      key={art.title}
                      className="bg-[#0b0e22] border border-slate-800 rounded-lg p-6 md:p-8 hover:border-brand-orange/35 transition duration-200 relative group"
                    >
                      <div className="space-y-4">
                        
                        {/* Meta */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-900 pb-3">
                          <span className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-widest bg-brand-orange/10 px-2 py-0.5 rounded">
                            {art.tag}
                          </span>
                          <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                            <span className="flex items-center gap-1">
                              <Calendar size={11} /> {art.date}
                            </span>
                            <span>•</span>
                            <span>{art.readTime}</span>
                          </div>
                        </div>

                        {/* Title and Snippet */}
                        <div className="space-y-2">
                          <h3 className="font-display font-black text-lg md:text-xl text-slate-100 group-hover:text-white transition uppercase tracking-wide">
                            {art.title}
                          </h3>
                          <p className="text-xs text-slate-300 font-sans leading-relaxed">
                            {art.snippet}
                          </p>
                        </div>

                        {/* Article body snippet */}
                        <div className="bg-brand-dark/40 border border-slate-850 p-4 rounded text-xs text-brand-gray font-sans leading-relaxed">
                          {art.body}
                        </div>

                        {/* Author signature block */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-900 font-mono text-[10px] text-slate-500">
                          <span>WRITTEN BY: <span className="font-bold text-slate-400">{art.editor}</span></span>
                          <span className="text-brand-orange font-bold uppercase">The Boiler LLC Editorial Desk</span>
                        </div>

                      </div>
                    </motion.article>
                  ))
                ) : (
                  <div className="text-center py-16 bg-[#0b0e22] border border-slate-800 rounded font-mono text-xs text-brand-gray">
                    ⚠️ No articles match your active specifications. Re-adjust your search.
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Side column: Codes Guidelines shortcuts / Newsletter */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Compliance checklist reminder */}
              <div className="bg-[#0a0d1f] border border-slate-800 rounded p-6 space-y-4">
                <div className="flex items-center gap-2 text-brand-orange font-mono text-[11px] font-bold uppercase tracking-wider">
                  <ClipboardCheck size={16} /> REGULATORY CHECKLISTS
                </div>
                <h4 className="font-display font-bold text-sm text-slate-100 uppercase tracking-wider">
                  PASS GA PRESSURE INSPECTIONS
                </h4>
                <p className="text-xs text-brand-gray leading-relaxed font-sans">
                  The Boiler LLC recommends doing a hydrostatic relief check and tube-scaling washout 30 days before any state examination.
                </p>
                <div className="space-y-2.5 font-mono text-[11px] text-slate-300">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Clean fire-side refractory chambers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Test redundant low-water cut-out sensors</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Record complete chemical soft water log profiles</span>
                  </div>
                </div>
                <button
                  onClick={openModal}
                  className="w-full py-2.5 bg-brand-navy border border-slate-800 hover:border-brand-orange/60 text-xs font-mono font-bold text-slate-200 hover:text-white rounded uppercase transition tracking-wider"
                >
                  ACQUIRE INSPECTION ESTIMATE
                </button>
              </div>

              {/* Quick static quote card */}
              <div className="bg-gradient-to-br from-[#0c1025] to-brand-dark border border-slate-800/80 rounded p-6 space-y-4 text-center">
                <span className="text-brand-orange font-mono text-[10px] uppercase font-bold tracking-widest block">
                  FAST DISPATCH ACTUATOR
                </span>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Is your industrial process or steam distribution line shut down due to a code-welding leak?
                </p>
                <Link
                  href="/contact"
                  className="w-full py-2.5 bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-display font-black text-xs rounded uppercase transition tracking-widest block"
                >
                  DISPATCH CREW NOW »
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
