'use client';

import React, { useState, useEffect } from 'react';
import { useQuoteModal } from '@/lib/quote-context';
import { motion } from 'motion/react';
import { Gauge, ShieldAlert, CheckCircle2, RefreshCw, Send, HelpCircle, HardHat, Waves, Flame, Clock } from 'lucide-react';

export default function ClientPortalPage() {
  const { openModal } = useQuoteModal();
  const [pressure, setPressure] = useState(250.3);
  const [efficiency, setEfficiency] = useState(98.6);
  const [flueTemp, setFlueTemp] = useState(384.2);
  const [pH, setPh] = useState(10.2);
  const [oxygen, setOxygen] = useState(0.005);
  const [sulfite, setSulfite] = useState(42);

  const [inputWater, setInputWater] = useState({
    pH: '10.2',
    oxygen: '0.005',
    hardness: '2',
  });

  const [waterResult, setWaterResult] = useState<{
    status: 'EXCELLENT' | 'CORROSION RISK' | 'SCALING RISK' | 'FATAL ALKALINITY';
    desc: string;
    class: string;
  } | null>(null);

  // Fluctuating metric simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setPressure(prev => {
        const delta = (Math.random() - 0.5) * 4;
        const next = prev + delta;
        return next < 240 ? 240 : next > 330 ? 330 : parseFloat(next.toFixed(1));
      });
      setFlueTemp(prev => {
        const delta = (Math.random() - 0.5) * 2;
        const next = prev + delta;
        return next < 370 ? 370 : next > 395 ? 395 : parseFloat(next.toFixed(1));
      });
      setEfficiency(prev => {
        const delta = (Math.random() - 0.5) * 0.2;
        const next = prev + delta;
        return next < 97.5 ? 97.5 : next > 99.2 ? 99.2 : parseFloat(next.toFixed(2));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleWaterAudit = (e: React.FormEvent) => {
    e.preventDefault();
    const phVal = parseFloat(inputWater.pH);
    const oxyVal = parseFloat(inputWater.oxygen);
    const hardVal = parseFloat(inputWater.hardness);

    if (isNaN(phVal) || isNaN(oxyVal) || isNaN(hardVal)) {
      setWaterResult({
        status: 'CORROSION RISK',
        desc: 'Invalid parameters recorded. Please input real numbers.',
        class: 'text-red-400 border-red-950/40 bg-red-950/15'
      });
      return;
    }

    if (phVal < 8.5) {
      setWaterResult({
        status: 'CORROSION RISK',
        desc: 'ALERT: Feed-water pH is highly acidic (< 8.5). Carbon dioxide and oxygen will trigger severe pipe pitting and rapid carbon erosion. Increase chemical alkalinity treatment immediately.',
        class: 'text-red-400 border-red-950/40 bg-red-950/15'
      });
    } else if (phVal > 11.5) {
      setWaterResult({
        status: 'FATAL ALKALINITY',
        desc: 'ALERT: pH exceeds safe operating limits (> 11.5). Triggers foaming and direct carry-over of water droplets into steam lines. Can fracture turbine blades and plug relief valves.',
        class: 'text-red-400 border-red-950/40 bg-red-950/15 animate-pulse'
      });
    } else if (hardVal > 5) {
      setWaterResult({
        status: 'SCALING RISK',
        desc: 'WARNING: Hardness exceeds 5 ppm. High calcium content will bind to water tubes, creating insulated silicate scale. Shaves thermal efficiency by up to 15%. Recommend secondary softener dump.',
        class: 'text-brand-yellow border-amber-955 bg-amber-950/10'
      });
    } else if (oxyVal > 0.01) {
      setWaterResult({
        status: 'CORROSION RISK',
        desc: 'WARNING: Dissolved oxygen exceeds limits (> 0.01 ppm). Risk of red oxygen pitting on steel boiler walls. Check deaerator spray nozzles and increase sulfite chemical dosing.',
        class: 'text-red-400 border-red-950/40 bg-red-950/15'
      });
    } else {
      setWaterResult({
        status: 'EXCELLENT',
        desc: 'SYSTEM PERFECT: pH of 10.2, zero scaling hardness, and tiny oxygen metrics. Steel passivated correctly against corrosion mechanisms. Keep parameter steady.',
        class: 'text-emerald-400 border-emerald-900 bg-emerald-950/15'
      });
    }
  };

  return (
    <div className="w-full">
      {/* 1. PORTAL HEADER */}
      <section className="relative bg-[#090c1a] border-b border-slate-900 py-12 md:py-16 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none select-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 80%), linear-gradient(rgba(21, 28, 58, 0.5) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 30px 30px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="font-mono text-xs uppercase text-brand-orange tracking-widest font-bold block">
            CLIENT OPERATIONS DIVISION
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-white">
            VIRTUAL BOILER ROOM MONITOR
          </h1>
          <div className="h-1 w-20 bg-brand-orange mx-auto my-2" />
          <p className="text-brand-gray text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Authorized regional clients can examine live fluctuating mechanical metrics, run diagnostic feed-water chemical simulations, and track state maintenance dispatchers.
          </p>
        </div>
      </section>

      {/* 2. PORTAL CORE INTERFACES */}
      <section className="py-16 bg-[#070913] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Block: LIVE SYSTEM GAUGE MONITOR (Simulated telemetry) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Live telemetry Grid */}
            <div className="bg-[#0b0e25] border border-slate-800 rounded-lg p-6 md:p-8 space-y-6 relative">
              <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5 select-none">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                LIVE STREAM TELEMETRY
              </div>
              
              <h3 className="font-display font-black text-base text-white uppercase tracking-wider">
                THERMIC SENSOR TELEMETRIC GRID
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                
                {/* Pressure card */}
                <div className="bg-brand-dark p-5 rounded border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-brand-gray block text-[10px] uppercase">Boiler Pressure</span>
                    <span className="text-3xl font-extrabold font-display text-white mt-1.5 block select-all">{pressure} <span className="text-sm font-normal text-slate-500">PSI</span></span>
                  </div>
                  <div className="pt-3 border-t border-slate-900 mt-4 flex justify-between items-center text-[10px]">
                    <span className="text-brand-yellow font-bold uppercase">HIGH CONSTANT</span>
                    <RefreshCw size={10} className="text-slate-600 animate-spin" />
                  </div>
                </div>

                {/* Efficiency card */}
                <div className="bg-brand-dark p-5 rounded border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-brand-gray block text-[10px] uppercase">Carbon combustion</span>
                    <span className="text-3xl font-extrabold font-display text-brand-orange mt-1.5 block select-all">{efficiency} <span className="text-sm font-normal text-slate-500">%</span></span>
                  </div>
                  <div className="pt-3 border-t border-slate-900 mt-4 flex justify-between items-center text-[10px]">
                    <span className="text-emerald-500 font-bold uppercase">OPTIMAL</span>
                    <Flame size={12} className="text-brand-orange animate-pulse" />
                  </div>
                </div>

                {/* Flue gas Temp card */}
                <div className="bg-brand-dark p-5 rounded border border-slate-800 flex flex-col justify-between">
                  <div>
                    <span className="text-brand-gray block text-[10px] uppercase">Exhaust Flue Temp</span>
                    <span className="text-3xl font-extrabold font-display text-white mt-1.5 block select-all">{flueTemp} <span className="text-sm font-normal text-slate-500">°F</span></span>
                  </div>
                  <div className="pt-3 border-t border-slate-900 mt-4 flex justify-between items-center text-[10px]">
                    <span className="text-brand-gray font-bold uppercase">SECURE PASSIVE</span>
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full" />
                  </div>
                </div>

              </div>

              <div className="border border-brand-orange/5 bg-brand-navy/30 rounded p-4 flex gap-4 items-center">
                <div className="h-10 w-10 bg-brand-dark border border-slate-800 text-brand-orange rounded-full flex items-center justify-center p-1 font-bold text-xs select-none">
                  !
                </div>
                <div className="text-left font-sans text-xs">
                  <span className="font-bold text-slate-100 block">Telemetry Interpretation</span>
                  <p className="text-brand-gray mt-0.5 leading-relaxed">
                    Fluctuating metrics represent dynamic process steam load demand from active production headers. Flue gas carbon optimization is managed by automated oxygen trim actuators configured by The Boiler LLC.
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Chemistry diagnostic audit (Interactivity core) */}
            <div className="bg-[#0b0e25] border border-slate-800 rounded-lg p-6 md:p-8 space-y-6">
              
              <div className="space-y-1">
                <h3 className="font-display font-black text-base text-white uppercase tracking-wider flex items-center gap-2">
                  <Waves size={18} className="text-brand-orange" /> FEED-WATER CHEMISTRY SCHEMATIC DIAGNOSTICS
                </h3>
                <p className="text-xs text-brand-gray leading-normal">
                  Hard scaling and oxygen carbon corrosion are the leading causes of pressure wall failures. Input your current chemistry measures below to calculate system safety instantly.
                </p>
              </div>

              <form onSubmit={handleWaterAudit} className="font-mono text-xs grid gap-4 sm:grid-cols-3 bg-brand-dark p-5 rounded border border-slate-800 items-end">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">pH scale level</label>
                  <input
                    type="text"
                    value={inputWater.pH}
                    onChange={(e) => setInputWater({ ...inputWater, pH: e.target.value })}
                    placeholder="e.g. 10.2"
                    className="w-full bg-[#0b0f24] border border-slate-800 rounded px-3 py-1.5 text-slate-200 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">Dissolved Oxygen (ppm)</label>
                  <input
                    type="text"
                    value={inputWater.oxygen}
                    onChange={(e) => setInputWater({ ...inputWater, oxygen: e.target.value })}
                    placeholder="e.g. 0.005"
                    className="w-full bg-[#0b0f24] border border-slate-800 rounded px-3 py-1.5 text-slate-200 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">Hardness scale (ppm)</label>
                  <input
                    type="text"
                    value={inputWater.hardness}
                    onChange={(e) => setInputWater({ ...inputWater, hardness: e.target.value })}
                    placeholder="e.g. 2"
                    className="w-full bg-[#0b0f24] border border-slate-800 rounded px-3 py-1.5 text-slate-200 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div className="sm:col-span-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-2 bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-display font-extrabold text-[10px] rounded uppercase tracking-widest transition"
                  >
                    CALCULATE WATER STABILITY INDEX »
                  </button>
                </div>
              </form>

              {waterResult && (
                <div className={`p-4 border rounded font-mono text-xs leading-relaxed ${waterResult.class}`}>
                  <span className="font-bold block text-sm border-b border-slate-800/50 pb-1.5 mb-2">
                    STATUS SUMMARY: {waterResult.status}
                  </span>
                  <p className="font-sans text-xs">{waterResult.desc}</p>
                </div>
              )}

            </div>

          </div>

          {/* Right Block: Active workflow Tickets & Dispatcher Link */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Active Tickets cabinet */}
            <div className="bg-[#0b0e25] border border-slate-800 rounded-lg p-6 space-y-5">
              <h3 className="font-display font-black text-sm text-[#f8fafc] uppercase tracking-wider border-l-2 border-brand-orange pl-2.5">
                ONGOING COMPLIANCE TICKETS
              </h3>

              <div className="space-y-4 font-mono text-[11px]">
                
                {/* Ticket 1 */}
                <div className="bg-brand-dark p-4 rounded border border-slate-800 space-y-2 text-left">
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span className="text-brand-orange font-bold">TBL-2026-X834</span>
                    <span className="text-[9px] bg-amber-950/20 text-brand-yellow px-2 py-0.5 rounded font-bold uppercase animate-pulse">In dispatcher</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-sans leading-normal">
                    <span className="font-bold text-slate-200">System:</span> Piedmont Hosp Autoclave Steam Loop<br />
                    <span className="font-bold text-slate-200">Engineer:</span> Javarius Gay (Managing Proctor)<br />
                    <span className="font-bold text-slate-200">Task:</span> Annual state wash-out preparation & safety diagnostics check.
                  </p>
                </div>

                {/* Ticket 2 */}
                <div className="bg-brand-dark p-4 rounded border border-slate-800 space-y-2 text-left">
                  <div className="flex justify-between border-b border-slate-900 pb-1.5">
                    <span className="text-brand-orange font-bold font-mono">TBL-2026-X306</span>
                    <span className="text-[9px] bg-emerald-950/20 text-emerald-400 px-2 py-0.5 rounded font-bold uppercase">PASSED INSPECT</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-sans leading-normal">
                    <span className="font-bold text-slate-200">System:</span> Atlanta Beverage bottling line #2<br />
                    <span className="font-bold text-slate-200">Engineer:</span> Thermal Weld proctors<br />
                    <span className="font-bold text-slate-200">Task:</span> ASME B31.3 carbon piping extensions join. Complete R-stamp verified.
                  </p>
                </div>

              </div>

              <div className="pt-2 text-center text-[10px] text-slate-500 font-mono uppercase tracking-widest leading-loose">
                AUTHENTICATED CLIENT GATEWAY DIRECTIVS
              </div>
            </div>

            {/* Quick dispatch triggers */}
            <div className="bg-[#0b0e25] border border-slate-800 rounded-lg p-6 space-y-4 text-center">
              <div className="h-10 w-10 bg-brand-dark border border-slate-805 rounded flex items-center justify-center p-1 text-brand-orange mx-auto">
                <HardHat size={20} className="text-brand-orange" />
              </div>
              <h4 className="font-display font-bold text-sm text-slate-100 uppercase tracking-wider">
                REGISTER PRE-OUTAGE DIRECTIVES
              </h4>
              <p className="text-xs text-brand-gray leading-relaxed font-sans">
                Need to document localized water log metrics, request custom system updates, or schedule preventative tube audits?
              </p>
              <button
                onClick={openModal}
                className="w-full py-2.5 bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-display font-black text-xs rounded uppercase tracking-widest transition"
              >
                REQUEST PROJECT PROPOSAL
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
