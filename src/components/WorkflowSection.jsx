import React, { useState } from 'react';
import { Play, CheckCircle2, ArrowRight, ShieldCheck, Database, Cpu, RefreshCw, FileText, Sparkles } from 'lucide-react';

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    {
      id: 1,
      title: '1. Ingest Data',
      desc: 'Connect PDF documents, SQL databases, or live webhooks.',
      icon: FileText,
      detail: 'Parsed 14,200 records with automated schema inference.',
    },
    {
      id: 2,
      title: '2. LLM Reasoning',
      desc: 'Run multi-agent evaluations and vector search matching.',
      icon: Cpu,
      detail: 'Routed query via GPT-4o & Claude 3.5 Sonnet hybrid pipeline.',
    },
    {
      id: 3,
      title: '3. Execute Actions',
      desc: 'Trigger API webhooks, update DBs, and export reports.',
      icon: Database,
      detail: 'Executed row-level encrypted database update in 12ms.',
    },
  ];

  const handleTestRun = () => {
    setIsRunning(true);
    setActiveStep(1);
    setTimeout(() => setActiveStep(2), 900);
    setTimeout(() => setActiveStep(3), 1800);
    setTimeout(() => setIsRunning(false), 2700);
  };

  return (
    <section id="use-cases" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#D83025] text-xs font-bold uppercase tracking-wider border border-red-100">
              <RefreshCw size={14} className={isRunning ? 'animate-spin' : ''} />
              <span>Real-Time Orchestration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Outfit'] tracking-tight text-slate-900 leading-tight">
              Automate complex workflows in <span className="text-[#D83025]">3 simple steps.</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              Kanta handles end-to-end LLM orchestration, model routing, security guardrails, and data transformations automatically.
            </p>

            <div className="pt-2">
              <button
                onClick={handleTestRun}
                disabled={isRunning}
                className="bg-[#D83025] hover:bg-[#C0261D] text-white px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-md shadow-red-900/20 flex items-center gap-2.5 active:scale-95 disabled:opacity-50"
              >
                <Play size={16} className="fill-current" />
                <span>{isRunning ? 'Running Agent Simulation...' : 'Simulate Workflow Run'}</span>
              </button>
            </div>
          </div>

          {/* Right Column Interactive Flow Visualizer (Design 2 Light Theme) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-mono text-slate-500 ml-2">kanta_pipeline_v2.json</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live Pipeline</span>
              </span>
            </div>

            {/* Steps Visual Grid */}
            <div className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;
                const isPassed = activeStep > step.id;

                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#D83025] shadow-md ring-2 ring-red-500/10 translate-x-1.5'
                        : isPassed
                        ? 'bg-white/80 border-emerald-200 text-slate-700'
                        : 'bg-white/50 border-slate-200/80 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                            isActive
                              ? 'bg-[#D83025] text-white shadow-sm'
                              : isPassed
                              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                          <p className="text-xs text-slate-500 font-medium">{step.desc}</p>
                        </div>
                      </div>

                      {isPassed ? (
                        <CheckCircle2 size={20} className="text-emerald-500" />
                      ) : isActive ? (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#D83025] animate-ping"></div>
                      ) : null}
                    </div>

                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs font-mono text-[#D83025] bg-red-50/60 p-2.5 rounded-lg border border-red-100">
                        ➜ Status: {step.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
