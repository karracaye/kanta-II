import React from 'react';
import { Layout, GitBranch, Database, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function UnifiedPlatformSection({ onBookDemo }) {
  const cards = [
    {
      title: 'Apps',
      badge: 'No-Code Frontend Builder',
      icon: Layout,
      desc: 'Build complete web applications—not just dashboards—using a visual builder. Replace React, Vue, or Svelte with drag-and-drop components that connect directly to your backend.',
      features: [
        { name: '20+ Components', sub: 'Forms, tables, charts, navigation, and more' },
        { name: 'Multi-Page Apps', sub: 'Full routing and navigation built-in' },
        { name: 'Direct Backend Access', sub: 'Trigger workflows from any interaction' },
        { name: 'Role-Based Access', sub: 'Public, authenticated, or role-specific' },
      ],
    },
    {
      title: 'Workflows',
      badge: 'Visual Backend Engine',
      icon: GitBranch,
      desc: 'Replace FastAPI, Express, or .NET with visual logic. Build complete backend workflows with database operations, API calls, and AI integration—no code required.',
      features: [
        { name: '17 Specialized Nodes', sub: 'LLM, OCR, Code, HTTP, Database, and more' },
        { name: 'Parallel Execution', sub: 'DAG-based with automatic optimization' },
        { name: 'Conditional Logic', sub: '14+ operators for complex branching' },
        { name: 'Sub-Workflows', sub: 'Reusable components with loop support' },
      ],
    },
    {
      title: 'Database',
      badge: 'Built-in Data Layer',
      icon: Database,
      desc: 'No PostgreSQL setup, no migrations, no ORMs. Create tables, define schemas, and query data—all managed within the platform and accessible from Workflows and Apps.',
      features: [
        { name: 'Visual Schema Builder', sub: 'Create tables and relationships in UI' },
        { name: 'Row-Level Security', sub: 'Fine-grained access control built-in' },
        { name: 'REST API Access', sub: 'Query and write via API endpoints' },
        { name: 'Project Isolation', sub: 'Separate data namespaces per project' },
      ],
    },
  ];

  return (
    <section id="features" className="py-16 bg-[#FAF6F0] bg-dot-mesh border-t border-slate-200/80 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[#D83025] text-xs font-semibold tracking-wide border border-red-100">
            <span>UNIFIED STACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Build AI Applications <br />
            <span className="text-[#D83025]">On One Platform</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Everything you need to build enterprise-grade applications. From LLM-powered APIs to Full-Stack AI Apps, all you need is Kanta.
          </p>
        </div>

        {/* 3 Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 group-hover:bg-[#D83025] group-hover:text-white transition-colors shadow-2xs">
                      <IconComponent size={20} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-red-200">
                      <ArrowUpRight size={16} className="text-slate-400 group-hover:text-[#D83025] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 font-['Outfit']">
                      {card.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mt-1.5 bg-slate-100 text-slate-700 border border-slate-200">
                      {card.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Micro Features */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    {card.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle2 size={15} className="text-[#D83025] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-slate-900 font-bold">{feat.name}</strong>
                          <span className="text-[10px] text-slate-500 font-medium">{feat.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Plus Ribbon Banner */}
        <div className="mt-8 bg-white rounded-3xl p-6 border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <p className="text-xs font-medium text-slate-700">
            <strong className="text-slate-900 font-bold">Plus:</strong>{' '}
            <span className="text-slate-900 font-semibold px-2.5 py-0.5 rounded-full border border-slate-200 bg-slate-50 inline-block my-0.5">LLM Endpoints</span>{' '}
            <span className="text-slate-900 font-semibold px-2.5 py-0.5 rounded-full border border-slate-200 bg-slate-50 inline-block my-0.5">Knowledge Base (RAG)</span>{' '}
            <span className="text-slate-900 font-semibold px-2.5 py-0.5 rounded-full border border-slate-200 bg-slate-50 inline-block my-0.5">Embeddable Chatbot</span>{' '}
            <span className="text-slate-900 font-semibold px-2.5 py-0.5 rounded-full border border-slate-200 bg-slate-50 inline-block my-0.5">Enterprise Security</span>
          </p>

          <button
            onClick={onBookDemo}
            className="px-6 py-2.5 rounded-full bg-[#D83025] hover:bg-[#C0261D] text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
          >
            <span>See how it connects</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
