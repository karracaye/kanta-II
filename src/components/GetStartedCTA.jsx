import React, { useState } from 'react';
import { Mail, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function GetStartedCTA({ onBookDemo }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 bg-gradient-to-b from-white via-[#FAF6F0] to-white bg-grid-pattern border-t border-slate-200/80 font-sans relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* --- COMPACT MODERN CTA CARD --- */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md relative overflow-hidden text-left">
          
          {/* Top Red Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#B92025]"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Compact Copy */}
            <div className="md:col-span-7 space-y-2">
              <p className="text-xs font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
                Get Started
              </p>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight text-slate-900 leading-snug">
                Ready to unify your <span className="text-[#B92025]">AI stack?</span>
              </h2>

              <p className="text-slate-500 text-xs font-medium leading-relaxed">
                Deploy autonomous AI agents & LLM workflows in minutes—no complex setup required.
              </p>
            </div>

            {/* Right Column: Compact Form */}
            <div className="md:col-span-5 space-y-3">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter work email..."
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#B92025] focus:bg-white transition-all font-medium"
                  />
                  <button
                    type="submit"
                    className="bg-[#B92025] hover:bg-[#9E1B1F] text-white px-4 py-2 rounded-full font-bold text-xs transition-all shadow-2xs flex items-center justify-center gap-1 shrink-0 cursor-pointer active:scale-95"
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={13} />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 p-2.5 rounded-full text-xs font-semibold px-4">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Submitted for <strong>{email}</strong>!</span>
                </div>
              )}

              {/* Feature Checklist */}
              <div className="flex flex-wrap items-center gap-2.5 text-[10px] text-slate-500 font-medium pt-1">
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={11} className="text-[#B92025]" />
                  <span>Enterprise security</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={11} className="text-[#B92025]" />
                  <span>Deploy in minutes</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={11} className="text-[#B92025]" />
                  <span>Cloud Hosted</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Compact Quick Contact Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-left">
          <a
            href="mailto:ask@kanta.ai"
            className="bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full p-3.5 px-5 flex items-center justify-between transition-all shadow-2xs group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 text-[#B92025] flex items-center justify-center border border-red-100">
                <Mail size={15} />
              </div>
              <div>
                <strong className="text-xs font-bold text-slate-900 block font-['Outfit']">Email Us</strong>
                <span className="text-[10px] text-slate-500 font-medium">ask@kanta.ai</span>
              </div>
            </div>
            <ArrowRight size={14} className="text-slate-400 group-hover:text-[#B92025] group-hover:translate-x-1 transition-all" />
          </a>

          <button
            onClick={onBookDemo}
            className="bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full p-3.5 px-5 flex items-center justify-between transition-all shadow-2xs group text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200">
                <Calendar size={15} />
              </div>
              <div>
                <strong className="text-xs font-bold text-slate-900 block font-['Outfit']">Book a Demo</strong>
                <span className="text-[10px] text-slate-500 font-medium">30-minute walkthrough</span>
              </div>
            </div>
            <ArrowRight size={14} className="text-slate-400 group-hover:text-[#B92025] group-hover:translate-x-1 transition-all" />
          </button>
        </div>

      </div>
    </section>
  );
}
