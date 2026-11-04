import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertOctagon,
  ArrowRight,
  Zap,
  Cpu,
  Database,
  Terminal,
  Activity,
  FileCode,
  Globe
} from 'lucide-react';

export default function ProblemSolutionSection({ onBookDemo }) {
  const [activeMode, setActiveMode] = useState('kanta');

  return (
    <section id="stack-comparison" className="py-16 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-200/80 text-slate-900 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER BLOCK --- */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#D83025] uppercase font-['Outfit']">
            Platform Transformer
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Outfit'] tracking-tight text-slate-900 leading-tight">
            Your AI stack is <span className="text-[#D83025]">too fragmented</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Stop stitching together 5 separate SaaS tools, APIs, and fragile glue code. Switch to a single unified engine.
          </p>

          {/* SEGMENTED SWITCHER */}
          <div className="pt-3 flex justify-center">
            <div className="bg-slate-200/70 p-1 rounded-full border border-slate-300/80 flex items-center gap-1.5 shadow-inner">
              <button
                onClick={() => setActiveMode('traditional')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeMode === 'traditional'
                    ? 'bg-white text-slate-900 border border-slate-300 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <AlertOctagon size={14} className="text-slate-500" />
                <span>Traditional Stack (5+ Tools)</span>
              </button>

              <button
                onClick={() => setActiveMode('kanta')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeMode === 'kanta'
                    ? 'bg-[#D83025] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles size={14} className="text-white" />
                <span>Kanta Unified Engine</span>
              </button>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC STAGE --- */}
        {activeMode === 'kanta' ? (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl space-y-6 text-left">
            
            {/* Top Bar Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center shadow-xs">
                  <Zap size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-['Outfit'] flex items-center gap-2">
                    <span>Kanta Unified Execution Engine</span>
                    <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-3 py-0.5 rounded-full border border-slate-200">
                      v3.2 Active
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Single runtime handling UI, backend DAG pipelines, vector retrieval, and database constraints.
                  </p>
                </div>
              </div>

              {/* Real-time Telemetry Pills */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200 flex items-center gap-1.5 font-semibold">
                  <Activity size={13} className="text-[#D83025]" />
                  <span>2,400 Req/sec</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-red-50 text-[#D83025] border border-red-100 font-semibold flex items-center gap-1">
                  <Zap size={13} />
                  <span>12ms Latency</span>
                </span>
              </div>
            </div>

            {/* Visual Pipeline DAG Flow Track */}
            <div className="bg-[#FAF6F0] p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="text-xs font-mono text-slate-500 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Terminal size={14} className="text-slate-700" />
                  <strong className="text-slate-800">live_pipeline_orchestrator.dag</strong>
                </span>
                <span className="text-[#D83025] font-bold flex items-center gap-1 px-3 py-0.5 rounded-full border border-red-100 bg-white">
                  <CheckCircle2 size={13} />
                  <span>100% Synced</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                <div className="bg-white border border-slate-200/90 p-4 rounded-2xl space-y-1 shadow-2xs">
                  <span className="text-[10px] font-mono font-bold text-slate-400">STEP 01</span>
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <Globe size={15} className="text-slate-700" />
                    <span>Data Ingestion</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">PDFs, Webhooks, SQL Stream</p>
                </div>

                <div className="bg-white border border-slate-200/90 p-4 rounded-2xl space-y-1 shadow-2xs">
                  <span className="text-[10px] font-mono font-bold text-slate-400">STEP 02</span>
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <FileCode size={15} className="text-slate-700" />
                    <span>OCR & Embedding</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">Vector Search (Pinecone Sync)</p>
                </div>

                <div className="bg-white border border-slate-200/90 p-4 rounded-2xl space-y-1 shadow-2xs">
                  <span className="text-[10px] font-mono font-bold text-slate-400">STEP 03</span>
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <Cpu size={15} className="text-slate-700" />
                    <span>Multi-LLM Routing</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">GPT-4o + Claude Hybrid</p>
                </div>

                <div className="bg-white border border-slate-200/90 p-4 rounded-2xl space-y-1 shadow-2xs">
                  <span className="text-[10px] font-mono font-bold text-slate-400">STEP 04</span>
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                    <Database size={15} className="text-slate-700" />
                    <span>Row-Level DB Save</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">AES-256 Encrypted Output</p>
                </div>
              </div>
            </div>

            {/* 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-slate-200/80 space-y-1.5">
                <CheckCircle2 size={16} className="text-[#D83025]" />
                <h4 className="text-xs font-bold text-slate-900 font-['Outfit']">Full-Stack Synergy</h4>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  Frontend UI, visual backend logic, and vector database unified in 1 engine.
                </p>
              </div>

              <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-slate-200/80 space-y-1.5">
                <CheckCircle2 size={16} className="text-[#D83025]" />
                <h4 className="text-xs font-bold text-slate-900 font-['Outfit']">Visual DAG Builder</h4>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  Construct complex multi-agent workflows drag-and-drop with zero code needed.
                </p>
              </div>

              <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-slate-200/80 space-y-1.5">
                <CheckCircle2 size={16} className="text-[#D83025]" />
                <h4 className="text-xs font-bold text-slate-900 font-['Outfit']">Self-Hosted & VPC</h4>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  Keep your sensitive enterprise data isolated inside your private cloud.
                </p>
              </div>

              <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-slate-200/80 space-y-1.5">
                <CheckCircle2 size={16} className="text-[#D83025]" />
                <h4 className="text-xs font-bold text-slate-900 font-['Outfit']">Multi-LLM Support</h4>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  Seamlessly route between OpenAI, Anthropic Claude, Llama 3, and custom models.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={onBookDemo}
                className="bg-[#D83025] hover:bg-[#C0261D] text-white px-7 py-3 rounded-full font-bold text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Switch to Unified Engine</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>
        ) : (
          /* TRADITIONAL FRAGMENTED STACK WARNING VIEW */
          <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 text-left">
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
              <AlertOctagon size={24} className="text-slate-700 shrink-0" />
              <div>
                <strong className="text-sm font-bold text-slate-900">
                  Fragmented Stack Penalty: 5+ Disconnected Tools
                </strong>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  High API latency, fragile SDK glue code, separate SaaS subscriptions, and zero centralized row-level security.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-400">TOOL 01</span>
                <h4 className="text-xs font-bold text-slate-900">Frontend UI</h4>
                <p className="text-[11px] text-slate-500">React / Next.js</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-400">TOOL 02</span>
                <h4 className="text-xs font-bold text-slate-900">Backend Server</h4>
                <p className="text-[11px] text-slate-500">FastAPI / Node</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-400">TOOL 03</span>
                <h4 className="text-xs font-bold text-slate-900">Database</h4>
                <p className="text-[11px] text-slate-500">PostgreSQL + ORM</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-400">TOOL 04</span>
                <h4 className="text-xs font-bold text-slate-900">Vector DB</h4>
                <p className="text-[11px] text-slate-500">Pinecone / Weaviate</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-slate-400">TOOL 05</span>
                <h4 className="text-xs font-bold text-slate-900">LLM Provider</h4>
                <p className="text-[11px] text-slate-500">OpenAI API SDK</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
