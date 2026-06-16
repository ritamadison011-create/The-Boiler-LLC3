'use client';

import React, { useState } from 'react';
import { useQuoteModal } from '@/lib/quote-context';
import { motion } from 'motion/react';
import { ShieldCheck, Factory, Gauge, Building, Flame, Hospital, GraduationCap, Landmark, Settings, HelpCircle, FileText } from 'lucide-react';

export default function IndustriesPage() {
  const { openModal } = useQuoteModal();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Manufacturing');

  const industries = [
    {
      name: 'Manufacturing',
      icon: <Factory className="h-6 w-6 text-brand-orange" />,
      sub: 'Process steam plants, bottling loops, and high-capacity processing.',
      pressure: '150 - 350 PSI (Medium to High)',
      code: 'ASME SECTION VIII / B31.3',
      temp: '360°F - 440°F (182°C - 226°C)',
      integrity: 'Critical - Unplanned shutdown disrupts raw material lines directly.',
      description: 'Process steam serves as the thermodynamic catalyst for pasteurization, high-pressure cleaning, curing ovens, and continuous extrusion molds. We maintain precise control loop boundaries and high-integrity pressure lines to avoid costly batch losses.',
      considerations: [
        'Continuous automatic blowdown configurations.',
        'Flue-gas exhaust heat recyclers for heavy savings.',
        'Chemical softeners to prevent silicate scale lining.'
      ]
    },
    {
      name: 'Power Generation',
      icon: <Flame className="h-6 w-6 text-brand-orange" />,
      sub: 'Super-heated utility systems, steam turbines, and cogeneration grids.',
      pressure: '600 - 1500+ PSI (Supercritical/High)',
      code: 'ASME SECTION I / B31.1',
      temp: '500°F - 950°F (260°C - 510°C)',
      integrity: 'Extreme - Directly tied to grid distribution capacity indicators.',
      description: 'Super-heated steam lines require elite mechanical certifications. High-alloy metals, structural tube welding verification, ultrasonic shell monitoring, and ASME code stamps are mandatory to hold structural stability under extreme stress levels.',
      considerations: [
        'Ultrasonic thickness (UT) and crack-detection testing.',
        'S-Stamp power boiler certified repair welds.',
        'Header mass distribution stress assessments.'
      ]
    },
    {
      name: 'Commercial Facilities',
      icon: <Building className="h-6 w-6 text-brand-orange" />,
      sub: 'Multi-story administrative grids, district steam loop heating systems.',
      pressure: '15 - 50 PSI (Low to Medium)',
      code: 'ASME SECTION IV',
      temp: '220°F - 290°F (104°C - 143°C)',
      integrity: 'High - Directly impacts workspace temperature & public occupancy.',
      description: 'Commercial installations focus on safety, automated sequence configurations, gas burner emission compliance, and silent operations. We mount low-NOx burners and integrated electronic control panels for seamless, unmanned management.',
      considerations: [
        'Electronic sequence combustion controllers.',
        'Weekly safety relief valve mechanical testing.',
        'Draft induction fan noise reduction dampeners.'
      ]
    },
    {
      name: 'Healthcare Facilities',
      icon: <Hospital className="h-6 w-6 text-brand-orange" />,
      sub: 'Sterilization steam channels, domestic central heating, sanitizing structures.',
      pressure: '50 - 125 PSI (Medium pressure)',
      code: 'ASME CODES / ASHRAE 170',
      temp: '290°F - 350°F (143°C - 176°C)',
      integrity: 'Vital - Direct legal dependency for sterilization & sterile climate locks.',
      description: 'Hospital boiler infrastructures require clean, dual-fuel boiler networks to ensure continuous hot water and clean sterilization steam. Preventative audits and 24/7 dispatcher lines are mandatory to protect critical environments.',
      considerations: [
        'Dual-fuel (Natural Gas / Fuel Oil #2) quick burners.',
        'Clean-steam steam generators for autoclave grids.',
        'Redundant booster feed-water pumps.'
      ]
    },
    {
      name: 'Educational Institutions',
      icon: <GraduationCap className="h-6 w-6 text-brand-orange" />,
      sub: 'Central campus physical plants, process research steam chambers, dorm vectors.',
      pressure: '15 - 150 PSI (Multi-building Dist.)',
      code: 'ASME SECTION I & IV',
      temp: '240°F - 365°F (115°C - 185°C)',
      integrity: 'High - Required for multi-building heating, hydration, and laboratories.',
      description: 'Large academic campuses rely on central distribution tunnels. Managing long process loops, compensating for massive volume expansions, and keeping boiler water clear of severe oxidation is our primary focus.',
      considerations: [
        'Condensate return monitoring and chemical feed treatment.',
        'Out-of-hours automatic setback burner controls.',
        'Thermal expansion expansion joints.'
      ]
    },
    {
      name: 'Government Facilities',
      icon: <Landmark className="h-6 w-6 text-brand-orange" />,
      sub: 'Judiciary facilities, civic infrastructures, security facilities.',
      pressure: '30 - 150 PSI',
      code: 'MIL-SPEC / ASME COMPLIANT',
      temp: '270°F - 365°F (132°C - 185°C)',
      integrity: 'Severe - Subject to secure background procedures and state audits.',
      description: 'Federal and state boiler systems must satisfy strict procurement parameters and rigorous environmental code audits. We construct certified emission-reduction systems and maintain complete materials provenance documentation.',
      considerations: [
        'Comprehensive emissions telemetry logs.',
        'Secure technical operator dispatch clearance.',
        'Strict ASME code-material tracing logs.'
      ]
    },
    {
      name: 'Industrial Plants',
      icon: <Settings className="h-6 w-6 text-brand-orange" />,
      sub: 'Heavy refineries, pulp mills, chemical reaction boilers, vulcanizer beds.',
      pressure: '300 - 800+ PSI (High Temperature)',
      code: 'ASME SECTION I & VIII / API 510',
      temp: '420°F - 750°F (215°C - 398°C)',
      integrity: 'Extreme - Direct catalyst for chemical, plastic, and heavy refineries.',
      description: 'Industrial refineries operate under hostile ambient chemicals. We utilize corrosion-resistant high-alloy materials, design heavy thermal refractory casings, and schedule precise preventative shutdowns to prevent tube failures.',
      considerations: [
        'High-alloy chrome-moly tube integrations.',
        'Complete sulfur and combustion gas analysis.',
        'Advanced automated blowdown heat recovery.'
      ]
    }
  ];

  const activeIndustry = industries.find(i => i.name === selectedIndustry) || industries[0];

  return (
    <div className="w-full">
      {/* 1. LAYER HEADER */}
      <section className="relative bg-[#090c1a] border-b border-slate-900 py-16 md:py-24 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 80%), linear-gradient(rgba(21, 28, 58, 0.5) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 40px 40px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold block">
            INDUSTRIES SERVED
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-white">
            THERMAL SOLUTIONS ACROSS SECURE INDUSTRIES
          </h1>
          <div className="h-1 w-20 bg-brand-orange mx-auto my-3" />
          <p className="text-brand-gray text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Delivering thermodynamic reliability, ASME stamps compliance, and professional code alignments for high-hazard municipal and private sectors.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE EXPLORER BLUEPRINT */}
      <section className="py-20 bg-[#070913] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sector selectors side panel */}
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono text-[10px] text-brand-gray uppercase tracking-widest block font-bold mb-3">
              SELECT SECTOR SYSTEM BLUEPRINT:
            </span>
            <div className="flex flex-col gap-1.5 font-display text-xs">
              {industries.map((ind) => (
                <button
                  key={ind.name}
                  onClick={() => setSelectedIndustry(ind.name)}
                  className={`flex items-center gap-3 w-full py-3.5 px-4 rounded border text-left transition duration-150 ${
                    selectedIndustry === ind.name
                      ? 'border-brand-orange bg-brand-orange/10 text-white font-bold'
                      : 'border-slate-800 bg-[#090b14] text-brand-gray hover:border-slate-705 hover:text-white'
                  }`}
                  id={`industry-tab-${ind.name.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <span className={selectedIndustry === ind.name ? 'text-brand-orange animate-pulse' : 'text-slate-600'}>
                    {ind.icon}
                  </span>
                  <div>
                    <span className="uppercase block tracking-wider">{ind.name}</span>
                    <span className="text-[9px] font-mono text-slate-500 block uppercase mt-0.5">{ind.code.split(' / ')[0]}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed schematic display cabinet */}
          <div className="lg:col-span-8 bg-[#0b0e24] border border-slate-800 rounded-lg p-6 md:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute top-4 right-4 font-mono text-[9px] text-[#475569] uppercase select-none">
              SCHEMATIC INDEX // {activeIndustry.name}
            </div>

            <div className="space-y-6">
              
              {/* Industry heading */}
              <div className="space-y-1">
                <div className="h-10 w-10 bg-brand-dark border border-slate-800 text-brand-orange rounded flex items-center justify-center mb-3 text-brand-orange">
                  {activeIndustry.icon}
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-widest text-white">
                  {activeIndustry.name} Division
                </h3>
                <p className="text-xs text-brand-yellow font-mono font-semibold tracking-wide block uppercase">
                  {activeIndustry.sub}
                </p>
              </div>

              {/* Schematic Specifications parameters block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-brand-dark p-5 rounded border border-slate-800/80 font-mono text-xs">
                <div>
                  <span className="text-brand-gray block text-[10px] uppercase">Standard Operating Pressure</span>
                  <span className="text-slate-200 font-bold block mt-0.5">{activeIndustry.pressure}</span>
                </div>
                <div>
                  <span className="text-brand-gray block text-[10px] uppercase">Thermodynamic Standards</span>
                  <span className="text-brand-yellow font-bold block mt-0.5">{activeIndustry.temp}</span>
                </div>
                <div className="border-t border-slate-850 pt-3">
                  <span className="text-brand-gray block text-[10px] uppercase">Compliance Code Registry</span>
                  <span className="text-slate-200 font-bold block mt-0.5">{activeIndustry.code}</span>
                </div>
                <div className="border-t border-slate-850 pt-3">
                  <span className="text-brand-gray block text-[10px] uppercase">Outage Integrity Rating</span>
                  <span className="text-red-400 font-bold block mt-0.5 uppercase tracking-wide">{activeIndustry.integrity}</span>
                </div>
              </div>

              {/* Long narrative descriptor */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-brand-gray uppercase tracking-widest font-bold">
                  SECTOR MECHANICS BLUEPRINT:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
                  {activeIndustry.description}
                </p>
              </div>

              {/* Strategic Considerations bullets list */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-[10px] text-brand-orange uppercase tracking-widest font-bold">
                  STRATEGIC ENGINEERING CONSIDERATIONS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                  {activeIndustry.considerations.map((con, idx) => (
                    <div key={idx} className="bg-brand-navy p-3 border border-slate-800/60 rounded flex flex-col justify-between">
                      <span className="text-brand-orange font-bold text-xs">0{idx + 1}.</span>
                      <p className="text-[11px] text-slate-300 leading-normal mt-1.5 font-sans whitespace-normal">{con}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom action trigger */}
            <div className="border-t border-slate-850 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left font-mono text-[9px] text-[#475569] uppercase">
                🛡️ THE BOILER LLC • SYSTEM CALIBRATION INDEX
              </div>
              <button
                onClick={openModal}
                className="px-6 py-2.5 bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-display font-black text-xs tracking-widest rounded uppercase transition transition-all duration-200 shadow-md shadow-brand-orange/10 transform active:scale-95"
              >
                ACQUIRE SECTOR SCHEMATIC QUOTE »
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CORE ADJACENCIES CAP */}
      <section className="py-20 bg-[#090c1a] border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold">
              SYSTEM TRUSTEES
            </span>
            <h2 className="font-display font-black text-3xl uppercase tracking-wider text-white">
              CRAFTED THERMAL ADVISORS IN GEORGIA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 6).map((ind) => (
              <div
                key={ind.name}
                className="bg-[#0b0e22] border border-slate-800 rounded-lg p-6 text-left flex flex-col justify-between hover:border-slate-700 transition"
                id={`industry-card-${ind.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 bg-brand-dark border border-slate-800 rounded flex items-center justify-center text-brand-orange">
                    {ind.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-slate-100 tracking-wider">
                      {ind.name} Operations
                    </h4>
                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">{ind.code}</p>
                  </div>
                  <p className="text-xs text-brand-gray leading-normal">
                    {ind.sub}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-500">MAX RATING:</span>
                  <span className="text-brand-orange font-bold uppercase">{ind.pressure.split(' (')[0]}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
