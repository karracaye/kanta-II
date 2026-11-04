import React from 'react';
import { History, Search, FileCheck, CheckCircle2, Clock, Terminal, ChevronRight } from 'lucide-react';

export default function AuditSection() {
  const auditPoints = [
    {
      title: 'AI builds leave a record.',
      desc: "Kanta keeps a dated record of design decisions, the rules that must hold, and the owner's approvals.",
      icon: FileCheck,
    },
    {
      title: 'Find any run.',
      desc: 'Search run history, filter by status and date, and re-run with the same inputs.',
      icon: Search,
    },
    {
      title: 'Test agents before they go live.',
      desc: "Score an agent's answers against your own reference cases.",
      icon: History,
    },
  ];

  return (
    <section id="audit" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#D83025] uppercase font-['Outfit']">
            AI you can audit
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            AI you can <span className="text-[#D83025]">audit.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed pt-1 font-['Plus_Jakarta_Sans']">
            Every workflow run is traced: inputs, outputs, the version that ran, each step's status and timing, and timestamped logs. Every AI request is logged with the model used, the tokens consumed, who made it and when.
          </p>
        </div>

        {/* 3 Core Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {auditPoints.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="kanta-glass-card kanta-glass-card-hover rounded-3xl p-6 sm:p-7 relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#D83025] border border-red-100 flex items-center justify-center mb-4 shadow-2xs">
                  <IconComp size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit']">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual per brief: "A run trace showing inputs, outputs and step timings" */}
        <div className="bg-[#0F172A] text-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-2.5">
              <Terminal size={18} className="text-[#D83025]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                Run Trace #run_8932_claims_intake
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800">
                STATUS: SUCCESS
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
              <span>Version: v2.4.1</span>
              <span>Total Duration: 1.28s</span>
              <span>Tokens: 412</span>
            </div>
          </div>

          {/* Trace Steps Timeline */}
          <div className="space-y-3 font-mono text-xs">
            
            {/* Step 1 */}
            <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span className="text-slate-500">[0.00s]</span>
                <span className="text-white font-bold">1. Webhook Intake:</span>
                <span className="text-slate-300">Received multipart/form payload (claim_id: "CLM-4091")</span>
              </div>
              <span className="text-slate-500 text-[11px]">18ms</span>
            </div>

            {/* Step 2 (AI Step with Model & Tokens) */}
            <div className="p-3.5 bg-slate-900/90 rounded-xl border border-red-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span className="text-slate-500">[0.02s]</span>
                <span className="text-red-400 font-bold">2. AI Document Extraction:</span>
                <span className="text-slate-300">Claude 3.5 Sonnet (AWS Singapore) · 412 tokens</span>
              </div>
              <span className="text-slate-500 text-[11px]">890ms</span>
            </div>

            {/* Step 3 (Fixed Business Rule - Zero Tokens) */}
            <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span className="text-slate-500">[0.91s]</span>
                <span className="text-amber-400 font-bold">3. Rule Evaluation:</span>
                <span className="text-slate-300">Amount S$6,420 &gt; S$5,000 threshold -&gt; Flag supervisor</span>
              </div>
              <span className="text-slate-500 text-[11px]">4ms</span>
            </div>

            {/* Step 4 */}
            <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span className="text-slate-500">[0.92s]</span>
                <span className="text-white font-bold">4. Database Write:</span>
                <span className="text-slate-300">Committed to `claims_table` with status: "Under review"</span>
              </div>
              <span className="text-slate-500 text-[11px]">22ms</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
