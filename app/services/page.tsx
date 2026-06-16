'use client';

import React, { useState } from 'react';
import { useQuoteModal } from '@/lib/quote-context';
import { motion } from 'motion/react';
import {
  Wrench,
  Cpu,
  Flame,
  Activity,
  Award,
  ShieldCheck,
  Check,
  Zap,
  Hammer,
  ClipboardList,
  FlameKindling,
  HelpCircle
} from 'lucide-react';

export default function ServicesPage() {
  const { openModal } = useQuoteModal();
  const [selectedServiceTab, setSelectedServiceTab] = useState<string>('Boiler Installation');

  const services = [
    {
      id: 'installation',
      title: 'Boiler Installation',
      short: 'ASME-certified high and low pressure steam system assemblies.',
      icon: <Flame className="h-6 w-6 text-brand-orange" />,
      code: 'ASME SECTION I & IV',
      specs: [
        'Turnkey water-tube and fire-tube boiler erections.',
        'Combustion controls calibration and burner mounting.',
        'High-pressure steam headers and deaerator installations.',
        'Structural seismic supports and pipe routing blueprints.'
      ],
      details: 'We provide heavy industrial boiler installation matching strict ASME Section I power and Section IV heating code specifications. From structural concrete pad casting to high-pressure manifold gas alignments, our licensed operator crews arrange complete, tested systems ready for state registry.'
    },
    {
      id: 'repair',
      title: 'Boiler Repair & Maintenance',
      short: 'Specialized tube re-rolling, refractory repairs, and high-alloy welding.',
      icon: <Hammer className="h-6 w-6 text-brand-orange" />,
      code: 'NBBI R-STAMP APPROVED',
      specs: [
        'Complete heavy wall tube extraction and rolling operations.',
        'High-alloy pressure welding and drum fracture remediation.',
        'Refractory brick, castable layout, and combustion chamber rebuilds.',
        'Valves, gaskets, and mud-leg blowout maintenance.'
      ],
      details: 'Authorized under the National Board "R" Stamp, our welding techs perform deep vessel remediation and preventative maintenance. We handle urgent fire-tube and water-tube repairs, replacing damaged heating surface alloys, restoring system integrity under hydrostatic verifications.'
    },
    {
      id: 'engineering',
      title: 'Industrial Engineering',
      short: 'Comprehensive process steam layouts, system retrofits, and thermodynamic calculations.',
      icon: <Cpu className="h-6 w-6 text-brand-orange" />,
      code: 'PE STAMPED MANIFESTS',
      specs: [
        'Thermodynamic balancing and mass flow determinations.',
        'Flue gas stack emissions consulting and layout routing.',
        'Process steam distribution and condenser system designs.',
        'Piping isometric diagrams and high-stress stress analysis.'
      ],
      details: 'Delivering comprehensive engineering for high-temperature fluid handling networks, we design boiler room environments, size primary headers, configure fuel storage feeds, and optimize plant-wide condensate loops to guarantee thermodynamic stability.'
    },
    {
      id: 'design',
      title: 'Mechanical Systems Design',
      short: 'Bespoke high-temperature fluid routing and automated balance-of-plant system configuration.',
      icon: <Zap className="h-6 w-6 text-brand-orange" />,
      code: 'ASME B31.1 & B31.3',
      specs: [
        'High-pressure process piping layouts.',
        'Fluid velocity modeling and valve sizing audits.',
        'Pneumatic and electronic system control loop diagrams.',
        'Skid-mounted fluid system fabrication drawings.'
      ],
      details: 'We design custom mechanical piping systems in strict accordance with ASME B31.1 (Power Piping) and B31.3 (Process Piping) guidelines, detailing expansion joints, support brackets, and localized pressure-reducing stations.'
    },
    {
      id: 'energy',
      title: 'Energy Efficiency Consulting',
      short: 'Exhaust flue gas economizer applications and smart oxygen burner optimization.',
      icon: <Activity className="h-6 w-6 text-brand-orange" />,
      code: 'EPA PARTNER DIRECTIVES',
      specs: [
        'Flue gas combustion oxygen and carbon audits.',
        'Waste heat extraction stack-economizer design loops.',
        'Variable frequency drive (VFD) fan and feed pump integrations.',
        'Blowdown heat recovery flash steam designs.'
      ],
      details: 'Our energy consulting division focuses on shrinking industrial gas and fuel oil bills. By auditing combustion profiles, balancing fuel-to-air rations, and routing heat exhaust back into feed-water tanks, we frequently achieve double-digit fuel reduction.'
    },
    {
      id: 'inspection',
      title: 'Industrial Equipment Inspection',
      short: 'Non-destructive testing (NDT), hydrostatic tests, and ultrasonic shell analysis.',
      icon: <ClipboardList className="h-6 w-6 text-brand-orange" />,
      code: 'ASME SECTION V NDT',
      specs: [
        'Ultrasonic thickness testing (UT) on inner vessel linings.',
        'Magnetic particle (MT) and liquid penetrant (PT) weld checkups.',
        'Hydrostatic safety relief valve testing.',
        'Georgia State Boiler inspector preparation checklists.'
      ],
      details: 'Ensuring structural safety and regulatory code compliance, we manage full non-destructive inspections. We identify localized oxidation, micro-fractures, and structural fatigue, documenting shell conditions for insurance and state authorities.'
    },
    {
      id: 'maintenance',
      title: 'Plant Maintenance Services',
      short: 'Scheduled outage coordinators, water treatment programs, and valve repair.',
      icon: <Wrench className="h-6 w-6 text-brand-orange" />,
      code: 'OSHA 1910 STANDARD',
      specs: [
        'Boiler dry-docking, cleaning, and chemical washouts.',
        'Water softeners, de-alkalizers, and chemical treatment consulting.',
        'Rotary soot blower rebuilds.',
        'Expansion joint and insulation jacketing reinstatements.'
      ],
      details: 'We execute complete plant shutdown services, cleaning steam drums and tube bundles down to the bare metal. Our chemical washing processes dissolve hardened scale, restoring thermal transfer efficiency across boiler walls.'
    },
    {
      id: 'emergency',
      title: 'Emergency Engineering Support',
      short: '24/7 dispatcher service, structural tube failures, and system diagnostics.',
      icon: <FlameKindling className="h-6 w-6 text-brand-orange" />,
      code: 'CRITICAL HOTLINE',
      specs: [
        '2-hour localized on-site team arrival in Atlanta.',
        'Critical diagnostic pressure leak isolation.',
        'Authorized structural ASME emergency welding.',
        'Temporary auxiliary boiler connections and alignment.'
      ],
      details: 'When a critical outage strikes, every hour represents heavy operational deficit. The Boiler LLC operates an active 24/7/365 structural dispatch network. We deploy diagnostic welding crews immediately to seal leakage and bring operations back online.'
    }
  ];

  const activeService = services.find(s => s.title === selectedServiceTab) || services[0];

  return (
    <div className="w-full">
      {/* 1. SECTION HEADER */}
      <section className="relative bg-[#090c1a] border-b border-slate-900 py-16 md:py-24 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 80%), linear-gradient(rgba(21, 28, 58, 0.5) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 40px 40px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold block">
            THE BOILER LLC CAPABILITIES
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-white">
            Industrial Systems Mechanical Services
          </h1>
          <div className="h-1 w-20 bg-brand-orange mx-auto my-3" />
          <p className="text-brand-gray text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Delivering high-integrity engineering, preventative plant services, and emergency repair according to National Board standards.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC SERVICES WORKSPACE */}
      <section className="py-20 bg-[#070913] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Side tab labels */}
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono text-[10px] text-brand-gray uppercase tracking-widest block font-bold mb-3">
              SELECT SERVICE SECTOR FOR DETAILED AUDIT:
            </span>
            <div className="flex flex-col gap-1.5">
              {services.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setSelectedServiceTab(item.title)}
                  className={`flex items-center gap-3 w-full py-3 px-4 rounded border text-left transition duration-150 ${
                    selectedServiceTab === item.title
                      ? 'border-brand-orange bg-brand-orange/10 text-white font-bold'
                      : 'border-slate-800 bg-[#090b14] text-brand-gray hover:border-slate-700 hover:text-white'
                  }`}
                  id={`service-tab-${item.id}`}
                >
                  <span className={`${selectedServiceTab === item.title ? 'text-brand-orange' : 'text-slate-600'}`}>
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider font-display">{item.title}</span>
                    <span className="text-[9px] font-mono opacity-50">{item.code}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Display detailed specifications */}
          <div className="lg:col-span-8 bg-[#0a0d1f] border border-slate-800 rounded-lg p-6 md:p-8 flex flex-col justify-between shadow-2xl relative">
            {/* Corner Accent Decors */}
            <div className="absolute top-3 right-4 font-mono text-[10px] text-brand-orange font-bold">
              {activeService.code}
            </div>

            <div className="space-y-6">
              
              {/* Service header */}
              <div className="space-y-2">
                <span className="h-10 w-10 bg-[#161d3f] rounded flex items-center justify-center text-brand-orange border border-slate-700/50">
                  {activeService.icon}
                </span>
                <h3 className="font-display font-black text-2xl uppercase tracking-wider text-slate-100 mt-4">
                  {activeService.title}
                </h3>
                <p className="text-xs font-mono text-brand-yellow uppercase tracking-widest font-semibold">
                  Primary Code Registry: {activeService.code}
                </p>
              </div>

              {/* Service long narrative */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-t border-slate-850 pt-4">
                {activeService.details}
              </p>

              {/* Specifications checklist */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-[10px] text-brand-gray uppercase tracking-widest font-bold">
                  CORE TECHNICAL CRITERIA EXECUTED:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                  {activeService.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-brand-dark p-3 border border-slate-800 rounded">
                      <Check size={14} className="text-brand-orange flex-shrink-0 mt-0.5 stroke-[3]" />
                      <span className="text-slate-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom action trigger */}
            <div className="border-t border-slate-850 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left font-mono text-[10px] text-brand-gray uppercase">
                ⚙️ THE BOILER LLC • SYSTEM AUDITING INDEX
              </div>
              <button
                onClick={openModal}
                className="px-6 py-2.5 bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-display font-black text-xs tracking-widest rounded uppercase transition transition-all duration-200 shadow-md shadow-brand-orange/10 transform active:scale-95"
              >
                REQUEST PROPOSAL NOW »
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 3. STATIC EXPULSION CARDS SECTOR */}
      <section className="py-20 bg-[#090c1a] border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold">
              SYSTEM SECTORS
            </span>
            <h2 className="font-display font-black text-3xl uppercase tracking-wider text-white">
              COMPLETE STEAM PLANT CODES COVERED
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.id}
                className="bg-[#0c1023] border border-slate-800 rounded p-6 text-left flex flex-col justify-between hover:border-slate-700 transition"
                id={`service-card-${s.id}`}
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 bg-brand-dark border border-slate-800 rounded flex items-center justify-center text-brand-orange">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-slate-100 tracking-wider">
                      {s.title}
                    </h4>
                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">{s.code}</p>
                  </div>
                  <p className="text-xs text-brand-gray leading-normal">
                    {s.short}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-900 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-brand-orange font-bold uppercase">Code Standard</span>
                  <span className="text-[10px] font-mono text-[#475569]">{s.code.split(' ')[0]}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. EMERGENCY SYSTEM STRAY */}
      <section className="py-24 bg-[#070913] text-center px-4 relative overflow-hidden">
        {/* Warning caution border lines */}
        <div className="absolute top-0 inset-x-0 h-1 bg-[repeating-linear-gradient(45deg,#f97316,#f97316_10px,#070913_10px,#070913_20px)]" />
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-950/40 text-red-500 border border-red-900/40 animate-pulse">
            <Activity size={24} />
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
            OUTAGE DISPATCH HOT DESK ACTIVE
          </h2>
          <p className="text-brand-gray text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Immediate response for mechanical leaks, boiler block failures, pipe fracturing, or structural emergencies. Authorized state operator crews can deploy instantly in Atlanta, GA.
          </p>
          <div className="pt-2">
            <a
              href="tel:+14045550192"
              className="px-8 py-3.5 bg-red-500 hover:bg-red-600 text-brand-dark font-display font-extrabold text-xs tracking-widest rounded uppercase transition inline-block shadow-lg shadow-red-500/15"
            >
              📱 INITIATE DISPATCH: +1 (404) 555-0192
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
