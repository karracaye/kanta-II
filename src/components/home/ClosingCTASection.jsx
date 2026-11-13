import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ClosingCTASection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-red-50/60 via-white to-red-50/30 border-2 border-red-200/80 rounded-3xl p-8 sm:p-14 shadow-xl shadow-red-500/5 space-y-6 relative overflow-hidden">
          
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#B92025] border border-red-200 flex items-center justify-center mx-auto shadow-2xs">
            <Sparkles size={24} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Bring a real process <br />
            <span className="text-[#B92025]">to your demo.</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']">
            Tell us one process your team runs today. We'll show Kanta's AI designing it live, with your rules in place from the first screen.
          </p>

          <div className="pt-2">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B92025] hover:opacity-90 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/35 active:scale-95 cursor-pointer"
            >
              <span>Book a demo</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
