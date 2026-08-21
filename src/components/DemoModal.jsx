import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [fullName, setFullName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-8 border border-slate-200 shadow-2xl overflow-hidden">
        {/* Top Decorative Red Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#D83025] via-[#FF5722] to-[#E53935]"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div className="text-center space-y-4">
            {/* Logo Mark */}
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#D83025] flex items-center justify-center mx-auto shadow-sm border border-red-100">
              <Sparkles size={24} />
            </div>

            <h3 className="font-extrabold text-2xl text-slate-900 font-['Outfit']">
              Schedule Kanta AI Demo
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Experience Kanta document intelligence, vector search, and LLM workflow automation live with our engineering team.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Alex Morgan"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#D83025] focus:bg-white transition-all placeholder-slate-400 font-medium"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#D83025] focus:bg-white transition-all placeholder-slate-400 font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#D83025] hover:bg-[#C0261D] text-white py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-md shadow-red-900/20 flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Request Live Demo</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-1">
                <ShieldCheck size={12} className="text-emerald-500" />
                <span>256-Bit SSL Encrypted • Zero Data Retention</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 size={32} />
            </div>

            <h3 className="font-extrabold text-2xl text-slate-900 font-['Outfit']">
              Demo Confirmed!
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Thank you <strong className="text-slate-900">{fullName || 'Alex'}</strong>. We have sent your access invite to <span className="text-[#D83025] font-semibold">{emailInput}</span>. Our technical leads will reach out within 2 hours.
            </p>

            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md"
            >
              Return to Kanta Design 2
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
