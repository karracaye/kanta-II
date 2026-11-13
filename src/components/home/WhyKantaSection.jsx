import React from 'react';
import { Layers, ShieldCheck, DollarSign, Cloud, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function WhyKantaSection() {
  const points = [
    {
      title: 'AI where the work happens.',
      desc: 'Document reading, classification, language models and agents are native steps in the same workflow as your fixed rules. Choose models from Azure OpenAI, Amazon or Anthropic.',
      icon: Layers,
    },
    {
      title: 'Rules that hold.',
      desc: 'Business rules run on the server, and permissions are enforced in the data itself, not just hidden on screen.',
      icon: ShieldCheck,
    },
    {
      title: 'AI cost that follows your choices.',
      desc: 'Steps without AI use no AI tokens when they run.',
      icon: DollarSign,
    },
    {
      title: 'Your cloud, your models.',
      desc: 'Run on Kanta Cloud in Singapore, or host Kanta on your own Amazon Web Services (AWS) or Azure with Azure OpenAI or Amazon Bedrock.',
      icon: Cloud,
    },
  ];

  return (
    <section id="why-kanta" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
            Why Kanta
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Born AI-native. <br />
            <span className="text-[#B92025]">Made for regulated work.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed pt-1 font-['Plus_Jakarta_Sans']">
            Most workflow platforms were designed before generative AI and are adding it now. Kanta was designed around it from day one, together with the controls regulated organisations need.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {points.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="kanta-glass-card kanta-glass-card-hover rounded-3xl p-6 sm:p-7 relative hover:border-red-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#B92025] border border-red-100 flex items-center justify-center mb-4 shadow-2xs">
                  <IconComp size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit']">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual per brief: "A workflow on the canvas with an AI step beside fixed rules" */}
        <div className="kanta-glass-card rounded-3xl p-6 sm:p-8 overflow-hidden shadow-lg border border-slate-200/90">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B92025]">
                Interactive Canvas Preview
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                Workflow Canvas: AI Extraction Step Beside Fixed Business Rules
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 flex items-center gap-1 shadow-2xs">
                <CheckCircle2 size={13} />
                Valid Pipeline
              </span>
            </div>
          </div>

          {/* Node Flow Representation */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            {/* Node 1: Trigger */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-left space-y-1">
              <div className="text-[10px] uppercase font-bold text-slate-400">Step 1 · Trigger</div>
              <div className="text-sm font-bold text-slate-900 font-['Outfit']">Incoming Email & PDF</div>
              <div className="text-xs text-slate-500 font-mono">invoice.pdf (92 KB)</div>
            </div>

            {/* Node 2: AI Step */}
            <div className="p-4 rounded-2xl border-2 border-[#B92025] bg-red-50/50 text-left space-y-1 relative shadow-sm">
              <div className="absolute -top-2.5 right-3 bg-[#B92025] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                AI Native Step
              </div>
              <div className="text-[10px] uppercase font-bold text-[#B92025]">Step 2 · Extraction</div>
              <div className="text-sm font-bold text-slate-900 font-['Outfit']">Extract Invoice Metadata</div>
              <div className="text-xs text-slate-500 font-medium">Model: Claude 3.5 Sonnet (AWS)</div>
            </div>

            {/* Node 3: Fixed Business Rule (Zero AI Tokens) */}
            <div className="p-4 rounded-2xl border border-amber-300 bg-amber-50/50 text-left space-y-1 relative">
              <div className="absolute -top-2.5 right-3 bg-amber-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Fixed Rule · 0 Tokens
              </div>
              <div className="text-[10px] uppercase font-bold text-amber-800">Step 3 · Server Rule</div>
              <div className="text-sm font-bold text-slate-900 font-['Outfit']">Check Threshold: S$5,000</div>
              <div className="text-xs text-slate-500 font-mono">if total &gt; 5000 -&gt; route supervisor</div>
            </div>

            {/* Node 4: Action */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-left space-y-1">
              <div className="text-[10px] uppercase font-bold text-slate-400">Step 4 · Data Mutation</div>
              <div className="text-sm font-bold text-slate-900 font-['Outfit']">Create Approval Task</div>
              <div className="text-xs text-slate-500 font-medium">Permissions: supervisor-only</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
