'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useQuoteModal } from '@/lib/quote-context';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Shield, Settings2, Calendar, FileText, Check } from 'lucide-react';

export default function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    systemType: 'Steam Generation',
    serviceNeeded: 'New System Installation',
    boilerHP: '100 - 500 HP',
    facilityCategory: 'Manufacturing Plant',
    timeline: 'Within 30 Days',
    fullName: '',
    company: '',
    email: '',
    phone: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [quoteId, setQuoteId] = useState('');

  const systemTypes = [
    'Steam Generation',
    'Hot Water Boiler',
    'Process Steam Boiler',
    'Waste Heat Recovery',
    'Combined Heat & Power',
    'Mechanical Piping Design'
  ];

  const servicesNeeded = [
    'New System Installation',
    'Boiler Repair / Re-tubing',
    'Mechanical System Design',
    'Plant Maintenance Services',
    'Emergency & Troubleshooting',
    'Energy Efficiency Auditing'
  ];

  const capacities = [
    'Under 100 HP (Utility scale)',
    '100 - 500 HP (Medium production)',
    '500 - 1500 HP (Large Industrial)',
    '1500+ HP (Utility / Heavy Industrial)'
  ];

  const facilities = [
    'Manufacturing Plant',
    'Power Generation Facility',
    'Commercial Office Boiler',
    'Healthcare Facility / Hospital',
    'Educational Campus',
    'Government Facility'
  ];

  const timelines = [
    'Immediate (Emergency / Outage)',
    'Within 30 Days',
    'Within 90 Days',
    'Budgetary / Long Term Planning'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    if (step === 3) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
      if (!formData.company.trim()) newErrors.company = 'Company Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    // Generate simulated Quote ID
    const randomHex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0');
    setQuoteId(`TBL-${new Date().getFullYear()}-${randomHex}`);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      systemType: 'Steam Generation',
      serviceNeeded: 'New System Installation',
      boilerHP: '100 - 500 HP',
      facilityCategory: 'Manufacturing Plant',
      timeline: 'Within 30 Days',
      fullName: '',
      company: '',
      email: '',
      phone: '',
      details: '',
    });
    setStep(1);
    setSubmitted(false);
    setErrors({});
  };

  const handleClose = () => {
    closeModal();
    // Reset after closing transition
    setTimeout(resetForm, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md"
            id="quote-modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-lg border border-slate-800 bg-[#0c1023] shadow-2xl shadow-brand-orange/10"
            id="quote-modal-container"
          >
            {/* Left Accent Bar */}
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-brand-orange" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 md:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-orange/10 text-brand-orange">
                  <Shield size={20} className="stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider text-slate-100">
                    Industrial Service Estimate
                  </h3>
                  <p className="text-xs text-brand-gray">
                    The Boiler LLC • Secure Engineering Quote Portal
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="rounded-full p-1.5 text-brand-gray hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Progress indicators */}
            {!submitted && (
              <div className="bg-[#0e132c] px-6 py-3 border-b border-slate-800/50 md:px-8 flex justify-between items-center text-xs text-brand-gray font-mono">
                <div className="flex items-center gap-1.5">
                  <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-brand-orange text-brand-dark font-bold' : 'bg-slate-800'}`}>1</span>
                  <span className={step >= 1 ? 'text-brand-light font-semibold' : ''}>System Info</span>
                </div>
                <div className="flex-1 mx-4 h-[1px] bg-slate-800" />
                <div className="flex items-center gap-1.5">
                  <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-brand-orange text-brand-dark font-bold' : 'bg-slate-800'}`}>2</span>
                  <span className={step >= 2 ? 'text-brand-light font-semibold' : ''}>Facility Profile</span>
                </div>
                <div className="flex-1 mx-4 h-[1px] bg-slate-800" />
                <div className="flex items-center gap-1.5">
                  <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-brand-orange text-brand-dark font-bold' : 'bg-slate-800'}`}>3</span>
                  <span className={step >= 3 ? 'text-brand-light font-semibold' : ''}>Contact Details</span>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              {!submitted ? (
                <div>
                  {/* STEP 1: System Specs */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest font-semibold">
                        <Settings2 size={16} /> Step 1: Steam & Mechanical Specifications
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        {/* System Type */}
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                            Select Boiler / Mechanical System
                          </label>
                          <div className="grid grid-cols-1 gap-2">
                            {systemTypes.map((type) => (
                              <button
                                key={type}
                                type="button"
                                onClick={() => handleSelectChange('systemType', type)}
                                className={`flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 ${
                                  formData.systemType === type
                                    ? 'border-brand-orange bg-brand-orange/10 text-white font-semibold'
                                    : 'border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white'
                                }`}
                              >
                                <span>{type}</span>
                                {formData.systemType === type && <Check size={14} className="text-brand-orange" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Service Required */}
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                            Primary Engineering Service Requested
                          </label>
                          <div className="grid grid-cols-1 gap-2">
                            {servicesNeeded.map((service) => (
                              <button
                                key={service}
                                type="button"
                                onClick={() => handleSelectChange('serviceNeeded', service)}
                                className={`flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 ${
                                  formData.serviceNeeded === service
                                    ? 'border-brand-orange bg-brand-orange/10 text-white font-semibold'
                                    : 'border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white'
                                }`}
                              >
                                <span>{service}</span>
                                {formData.serviceNeeded === service && <Check size={14} className="text-brand-orange" />}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Capacity Requirements */}
                      <div className="pt-2">
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                          Total Output / Boiler Horsepower Requirement
                        </label>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {capacities.map((cap) => {
                            const label = cap.split(' (')[0];
                            const desc = cap.includes(' (') ? cap.substring(cap.indexOf(' (')) : '';
                            return (
                              <button
                                key={cap}
                                type="button"
                                onClick={() => handleSelectChange('boilerHP', cap)}
                                className={`flex flex-col items-center justify-center p-3 rounded border text-center transition-all ${
                                  formData.boilerHP === cap
                                    ? 'border-brand-orange bg-brand-orange/10 text-white'
                                    : 'border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700'
                                }`}
                              >
                                <span className="text-sm font-bold block">{label}</span>
                                <span className="text-[10px] text-brand-gray block mt-0.5">{desc.replace(/[()]/g, '')}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Facility & Timeline */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest font-semibold">
                        <Calendar size={16} /> Step 2: Site Location & Operation Timeline
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        {/* Facility Category */}
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                            Facility Classification
                          </label>
                          <div className="grid grid-cols-1 gap-2">
                            {facilities.map((fac) => (
                              <button
                                key={fac}
                                type="button"
                                onClick={() => handleSelectChange('facilityCategory', fac)}
                                className={`flex items-center justify-between px-4 py-2.5 rounded border text-left text-sm transition-all duration-200 ${
                                  formData.facilityCategory === fac
                                    ? 'border-brand-orange bg-brand-orange/10 text-white font-semibold'
                                    : 'border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white'
                                }`}
                              >
                                <span>{fac}</span>
                                {formData.facilityCategory === fac && <Check size={14} className="text-brand-orange" />}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Timeline */}
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                            Execution Urgency / Completion Target
                          </label>
                          <div className="grid grid-cols-1 gap-2">
                            {timelines.map((time) => {
                              const isEmergency = time.includes('Immediate');
                              return (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => handleSelectChange('timeline', time)}
                                  className={`flex items-center justify-between px-4 py-3 rounded border text-left text-sm transition-all duration-200 ${
                                    formData.timeline === time
                                      ? isEmergency
                                        ? 'border-red-500 bg-red-950/20 text-red-200 font-semibold'
                                        : 'border-brand-orange bg-brand-orange/10 text-white font-semibold'
                                      : 'border-slate-800 bg-[#0e1329] text-brand-gray hover:border-slate-700/80 hover:text-white'
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    {isEmergency && <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />}
                                    <span>{time}</span>
                                  </div>
                                  {formData.timeline === time && (
                                    <Check size={14} className={isEmergency ? 'text-red-500' : 'text-brand-orange'} />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Contact Details */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest font-semibold mb-4">
                        <FileText size={16} /> Step 3: Engineering Contact Profile
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Contact Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className={`w-full bg-[#0e1329] border rounded px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-brand-orange ${
                              errors.fullName ? 'border-red-500' : 'border-slate-800'
                            }`}
                          />
                          {errors.fullName && <p className="text-[11px] text-red-400 mt-0.5">{errors.fullName}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Company / Entity Name *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Industrial Solutions Co."
                            className={`w-full bg-[#0e1329] border rounded px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-brand-orange ${
                              errors.company ? 'border-red-500' : 'border-slate-800'
                            }`}
                          />
                          {errors.company && <p className="text-[11px] text-red-400 mt-0.5">{errors.company}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Corporate Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="jdoe@company.com"
                            className={`w-full bg-[#0e1329] border rounded px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-brand-orange ${
                              errors.email ? 'border-red-500' : 'border-slate-800'
                            }`}
                          />
                          {errors.email && <p className="text-[11px] text-red-400 mt-0.5">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                            Direct Telephone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (404) 555-0100"
                            className={`w-full bg-[#0e1329] border rounded px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-brand-orange ${
                              errors.phone ? 'border-red-500' : 'border-slate-800'
                            }`}
                          />
                          {errors.phone && <p className="text-[11px] text-red-400 mt-0.5">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="pt-2">
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                          Project Description / Technical Details
                        </label>
                        <textarea
                          name="details"
                          value={formData.details}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Please cover mechanical conditions, equipment access, specific pressure metrics, or site requirements..."
                          className="w-full bg-[#0e1329] border border-slate-800 rounded px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-brand-orange placeholder:text-slate-600"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Buttons */}
                  <div className="mt-8 flex justify-between border-t border-slate-800/80 pt-4 font-mono text-xs">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-1.5 px-4 py-2 rounded border border-slate-800 text-brand-gray hover:text-white hover:border-slate-700 transition"
                      >
                        <ArrowLeft size={14} /> Back
                      </button>
                    ) : (
                      <div /> /* spacer */
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center gap-1.5 px-5 py-2 rounded bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-bold transition font-mono uppercase tracking-wider"
                      >
                        Next Screen <ArrowRight size={14} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-2.5 rounded bg-brand-orange hover:bg-brand-orange/90 text-brand-dark font-bold transition font-mono uppercase tracking-wider shadow-md shadow-brand-orange/20"
                      >
                        Submit Request <Check size={14} className="stroke-[3]" />
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                /* SUCCESS PANEL */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-6 space-y-5"
                >
                  <div className="h-16 w-16 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange animate-pulse">
                    <CheckCircle2 size={40} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl font-black text-white uppercase tracking-wider">
                      Proposal Ticket Registered
                    </h4>
                    <p className="text-sm text-brand-gray max-w-md mx-auto mt-2">
                      Thank you for submitting your specifications. Our mechanical engineering department has logged your industrial profile.
                    </p>
                  </div>

                  {/* Log Card */}
                  <div className="w-full max-w-md border border-slate-800/80 bg-[#0a0d1d] rounded p-4 font-mono text-xs text-left text-slate-300 space-y-2">
                    <div className="flex justify-between border-b border-slate-800/50 pb-2">
                      <span className="text-brand-gray">TICKET REF:</span>
                      <span className="font-bold text-brand-orange select-all">{quoteId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-gray">SYSTEM LEVEL:</span>
                      <span>{formData.systemType} ({formData.boilerHP.split(' (')[0]})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-gray">SERVICE CAP:</span>
                      <span>{formData.serviceNeeded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-gray">CONTACT:</span>
                      <span>{formData.fullName} ({formData.company})</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-800/50 pt-2 mt-2">
                      <span className="text-brand-gray">PRIORITY RATING:</span>
                      <span className={formData.timeline.includes('Immediate') ? 'text-red-400 font-bold' : 'text-brand-yellow font-bold'}>
                        {formData.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="bg-brand-navy/60 border border-brand-orange/10 px-4 py-3 text-brand-gray text-[11px] max-w-md leading-relaxed rounded">
                    💡 <span className="font-bold text-brand-light">Next Steps:</span> Javarius Gay, Managing Director, and our engineering desk will audit these variables. For <span className="text-brand-orange font-bold font-mono">Immediate</span> outages, a dispatcher is alerted. For standard queries, expect contact within 1 business day.
                  </div>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded font-mono text-xs uppercase tracking-wider transition"
                  >
                    Close Secure Portal
                  </button>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
