import React from 'react';
import { ArrowUpRight, FileText, Cpu, GitBranch, Code, BarChart3, MessageSquare, Database, ShieldCheck, BookOpen, Search, Globe } from 'lucide-react';

export default function UseCasesSection({ onBookDemo }) {
  const useCases = [
    {
      category: 'OPERATIONS TEAMS',
      title: 'Document Processing Pipeline',
      desc: 'Build an automated pipeline that extracts, classifies, validates, and routes documents. Process invoices, contracts, or applications at scale.',
      tags: [
        { label: 'OCR Parse', icon: FileText },
        { label: 'LLM Engine', icon: Cpu },
        { label: 'If-Else Rule', icon: GitBranch },
        { label: 'Code Node', icon: Code },
        { label: 'Data Viz', icon: BarChart3 },
      ],
      metrics: [
        { val: '100+', label: 'Documents / hour' },
        { val: '85%', label: 'Review time saved' },
      ],
    },
    {
      category: 'B2B SAAS COMPANIES',
      title: 'Customer Support Bot',
      desc: 'Embed an AI chatbot that queries your database with row-level security. Each customer sees only their own data (order status, invoices, metrics).',
      tags: [
        { label: 'AI Chatbot', icon: MessageSquare },
        { label: 'DB Query', icon: Database },
        { label: 'Row Security', icon: ShieldCheck },
        { label: 'Visualizations', icon: BarChart3 },
      ],
      metrics: [
        { val: '40-60%', label: 'Ticket deflection' },
        { val: 'Instant', label: 'Response time' },
      ],
    },
    {
      category: 'ANALYSTS & DUE DILIGENCE',
      title: 'Research & Analysis Assistant',
      desc: 'Build a research assistant that queries your knowledge base, searches the live web, pulls from APIs, and synthesizes findings with citations.',
      tags: [
        { label: 'RAG Search', icon: BookOpen },
        { label: 'Web Search', icon: Search },
        { label: 'HTTP API', icon: Globe },
        { label: 'LLM Reasoning', icon: Cpu },
      ],
      metrics: [
        { val: '70%', label: 'Time reduction' },
        { val: 'Multi', label: 'Sources synthesized' },
      ],
    },
  ];

  return (
    <section id="use-cases" className="py-16 bg-[#FAF6F0] bg-dot-mesh border-t border-slate-200/80 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#D83025] text-xs font-semibold tracking-wide border border-red-100">
            <span>ENTERPRISE USE CASES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Built for real <span className="text-[#D83025]">workflows</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            See how teams use Kanta to automate complex end-to-end processes and deliver AI-powered experiences at scale.
          </p>
        </div>

        {/* Use Cases Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group text-left hover:-translate-y-1 hover:border-[#D83025]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-slate-100 text-slate-700 border-slate-200">
                    {item.category}
                  </span>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-[#D83025] transition-colors" />
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit']">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>

                {/* Key Nodes Tags */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">KEY NODES</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tagObj, tIdx) => {
                      const TagIcon = tagObj.icon;
                      return (
                        <span key={tIdx} className="inline-flex items-center gap-1 text-[10px] font-semibold bg-slate-50 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                          <TagIcon size={10} className="text-[#D83025]" />
                          <span>{tagObj.label}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <strong className="text-base font-extrabold block text-[#D83025]">{m.val}</strong>
                      <span className="text-[10px] text-slate-500 font-medium">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
