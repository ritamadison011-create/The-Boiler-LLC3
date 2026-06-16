'use client';

import React, { useState } from 'react';
import { useQuoteModal } from '@/lib/quote-context';
import { Mail, Phone, MapPin, Calendar, Clock, Send, ShieldCheck, Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  const { openModal } = useQuoteModal();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    purpose: 'General Query',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.company.trim()) tempErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) tempErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) tempErrors.message = 'Message content is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSuccess(true);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      purpose: 'General Query',
      message: '',
    });
    setTimeout(() => setSuccess(false), 6000);
  };

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
            CONTACT THE BOILER LLC
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-white">
            COMMUNICATE WITH THE SYSTEMS OFFICE
          </h1>
          <div className="h-1 w-20 bg-brand-orange mx-auto my-3" />
          <p className="text-brand-gray text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Acquire certified dispatchers, coordinate ASME inspections, or detail heavy mechanical project profiles.
          </p>
        </div>
      </section>

      {/* 2. CONTACT LAYOUT WRAPPER */}
      <section className="py-20 bg-[#070913] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office details, Hours, Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Core Address Box */}
            <div className="bg-[#0b1025] border border-slate-800 rounded-lg p-6 md:p-8 space-y-5">
              <h3 className="font-display font-black text-lg text-[#f8fafc] uppercase tracking-wider border-l-2 border-brand-orange pl-3">
                OFFICE HEADQUARTERS
              </h3>
              
              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-100 block">The Boiler LLC</span>
                    2425 Piedmont Road NE<br />Atlanta, GA 30324<br />United States
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-orange flex-shrink-0" />
                  <a href="tel:+14045550192" className="text-slate-200 hover:text-brand-orange transition font-bold select-all">
                    +1 (404) 555-0192 (Support Desk)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-orange flex-shrink-0" />
                  <a href="mailto:solutions@theboilerllc.com" className="text-slate-200 hover:text-brand-orange transition select-all">
                    solutions@theboilerllc.com
                  </a>
                </div>

                <div className="border-t border-slate-900 pt-3 text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">
                  Managing Director: <span className="font-bold text-slate-200 block font-sans">Javarius Gay</span>
                </div>
              </div>
            </div>

            {/* Operating Times */}
            <div className="bg-[#0b1025] border border-slate-800 rounded-lg p-6 space-y-4">
              <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest flex items-center gap-2">
                <Clock size={14} className="text-brand-orange" /> OPERATIONAL HOUR SCHEDULES
              </h4>
              <div className="font-mono text-[11px] text-slate-300 space-y-2">
                <div className="flex justify-between border-b border-slate-900 pb-1">
                  <span>Monday - Friday</span>
                  <span className="text-slate-100 font-bold">7:00 AM - 5:00 PM EST</span>
                </div>
                <div className="flex justify-between border-b border-slate-900 pb-1">
                  <span>Saturday</span>
                  <span className="text-slate-100 font-bold">8:00 AM - 1:00 PM EST</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Sunday (Emergency Only)</span>
                  <span className="text-brand-orange font-bold">24-Hour Active Dispatch</span>
                </div>
              </div>
            </div>

            {/* Interactive Vector Map representation */}
            <div className="bg-[#0b1025] border border-slate-800 rounded-lg p-5 space-y-4 relative overflow-hidden group">
              <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest block">
                MAP LOCATOR OVERVIEW: ATLANTA GA
              </span>

              {/* Meticulously styled mechanical map representing Piedmont Rd NE */}
              <div className="h-48 w-full bg-[#05070e] border border-slate-900 rounded relative overflow-hidden shadow-inner select-none">
                {/* Horizontal / Vertical coordinate lines representing roads */}
                <div className="absolute inset-x-0 top-1/2 h-[3px] bg-slate-900 translate-y-2 cursor-help" title="Piedmont Road NE" />
                <div className="absolute inset-y-0 left-1/3 w-[3px] bg-slate-900 translate-x-4 cursor-help" title="Lindbergh Way / intersection" />
                <div className="absolute inset-y-0 right-1/4 w-[2px] bg-slate-900 border-dashed border-slate-850 cursor-help" title="Adair Lane NE" />
                
                {/* SVG details (river, park block) */}
                <div className="absolute top-4 left-6 h-8 w-20 bg-emerald-950/20 border border-emerald-900/10 rounded-full flex items-center justify-center text-[8px] font-mono text-emerald-800 uppercase">
                  Piedmont Park Block
                </div>

                {/* Grid markings */}
                <div className="absolute inset-0 border border-brand-orange/5" style={{
                  backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.02) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />

                {/* LOCATOR PIN GAUGE */}
                <div className="absolute top-1/2 left-1/3 translate-y-px translate-x-3 gap-1.5 flex flex-col items-center">
                  <div className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#070a14] border-2 border-brand-orange flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                    </span>
                  </div>
                  <div className="bg-[#0b1025] border border-brand-orange text-[9px] font-mono text-white px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                    📍 THE BOILER LLC (2425 Piedmont Rd)
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 text-[7px] font-mono text-slate-600">
                  COORD_33.821_N_84.368_W
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Complete Interactive Form */}
          <div className="lg:col-span-7 bg-[#0b0e25] border border-slate-800 rounded-lg p-6 md:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute top-4 right-4 font-mono text-[9px] text-[#475569] uppercase select-none">
              SECURE MESSAGE TRANS-IN
            </div>

            <div className="space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl uppercase tracking-wider text-slate-100">
                  TRANSMIT DIGITAL INTAKE
                </h3>
                <p className="text-xs text-brand-gray leading-relaxed font-sans">
                  Detail any plant maintenance requests, coordinate mechanical boiler assemblies, or provide comments below.
                </p>
              </div>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-4"
                >
                  <div className="h-14 w-14 bg-brand-orange/15 rounded-full flex items-center justify-center text-brand-orange animate-bounce">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                      Message Packet Received
                    </h4>
                    <p className="text-xs text-brand-gray max-w-sm mx-auto leading-relaxed mt-1 font-sans">
                      Your transmission details have been secure-logged by our dispatcher board, we will react within 24 operational hours.
                    </p>
                  </div>
                  <p className="text-[10px] font-mono text-slate-600 uppercase border-t border-slate-900 pt-3">
                    TX_STATUS: REGISTERED_SUCCESSFULLY
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full bg-brand-dark border rounded px-4 py-2 text-slate-200 focus:outline-none focus:border-brand-orange ${
                          errors.name ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.name && <p className="text-[10px] text-red-400 mt-0.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Corporate / Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Industrial Power Co."
                        className={`w-full bg-brand-dark border rounded px-4 py-2 text-slate-200 focus:outline-none focus:border-brand-orange ${
                          errors.company ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.company && <p className="text-[10px] text-red-400 mt-0.5">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="buyer@company.com"
                        className={`w-full bg-brand-dark border rounded px-4 py-2 text-slate-200 focus:outline-none focus:border-brand-orange ${
                          errors.email ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-400 mt-0.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Contact Telephone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (404) 555-0100"
                        className={`w-full bg-brand-dark border rounded px-4 py-2 text-slate-200 focus:outline-none focus:border-brand-orange ${
                          errors.phone ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.phone && <p className="text-[10px] text-red-400 mt-0.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Reason for Contact
                    </label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="w-full bg-brand-dark border border-slate-800 rounded px-4 py-2 text-slate-200 focus:outline-none focus:border-brand-orange"
                    >
                      <option value="General Query">General Query / Discussion</option>
                      <option value="ASME Stamp Project">ASME Stamp Boiler Project</option>
                      <option value="Scheduled Maintenance Plan">Scheduled Outage / Preventative Plan</option>
                      <option value="Emergency Outage Assistance">Emergency Diagnostics request</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Message / Specifications *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Please cover mechanical parameters, boiler water conditions, specific steam pressure ceilings, or general questions..."
                      className={`w-full bg-brand-dark border rounded px-4 py-2.5 text-slate-200 focus:outline-none focus:border-brand-orange placeholder:text-slate-700 ${
                        errors.message ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.message && <p className="text-[10px] text-red-400 mt-0.5">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full h-11 bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-display font-extrabold text-xs tracking-widest rounded uppercase transition flex items-center justify-center gap-2"
                    >
                      TRANSMIT DETAILS <Send size={12} className="stroke-[2.5]" />
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 3. INDIRECT STALWART BANNER */}
      <section className="py-20 bg-[#090c1a] text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
            PREV-ALIGNMENT ESTIMATES GENERATOR
          </h2>
          <p className="text-brand-gray text-xs sm:text-sm max-w-lg mx-auto">
            Instead of general messaging, do you wish to specify exact water tube limits, boiler categories, facility specifications, and project durations directly to Javarius Gay?
          </p>
          <div className="pt-2">
            <button
              onClick={openModal}
              className="px-8 py-3 bg-brand-navy border border-slate-800 hover:border-brand-orange/60 text-white font-mono font-bold text-xs tracking-widest rounded uppercase transition inline-block"
            >
              🚀 INITIATE SECURE ESTIMATE WIZARD
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
