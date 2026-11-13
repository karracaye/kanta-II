import React, { useState } from 'react';
import { GitBranch, Layout, Database, Bot, Check } from 'lucide-react';

export default function OnePlatformSection() {
  const [activeTab, setActiveTab] = useState('workflows');

  const pillars = [
    {
      id: 'workflows',
      title: 'Workflows.',
      desc: 'Visual steps with rules, branching, code and AI, run on demand, from apps or by other systems.',
      icon: GitBranch,
      details: [
        'Deterministic server-side branching',
        'Direct hooks into ERP and core banking APIs',
        'Zero-token native logic execution',
      ],
    },
    {
      id: 'apps',
      title: 'Apps.',
      desc: 'Screens from ready-made and AI-made components, for desktop, tablet and mobile.',
      icon: Layout,
      details: [
        'Responsive layout generated in seconds',
        'State bound directly to data schema',
        'Strict RBAC widget rendering',
      ],
    },
    {
      id: 'data',
      title: 'Data.',
      desc: 'Built-in tables with typed fields, relationships and role-based access.',
      icon: Database,
      details: [
        'Postgres-backed typed schema with relational foreign keys',
        'Row-level encryption at rest',
        'Row-level security policies enforced at database level',
      ],
    },
    {
      id: 'agents',
      title: 'Agents.',
      desc: 'Conversational AI with tools and skills, embeddable in your own portal with per-user data limits.',
      icon: Bot,
      details: [
        'Tool-calling with bounded execution rights',
        'Embed via single-line JavaScript snippet',
        'Strict session isolation per authenticated user',
      ],
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="platform" className="py-20 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header per brief */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
            One platform
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            One platform. <br />
            <span className="text-[#B92025]">One set of rules.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed pt-1 font-['Plus_Jakarta_Sans']">
            Workflows, app screens, data and AI agents live in one place, so one permission model and one record cover all of them. No gaps between a workflow tool, an app designer and a database for rules or logs to fall through.
          </p>
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {pillars.map((item) => {
            const IconComp = item.icon;
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`p-6 rounded-3xl border text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#B92025] shadow-lg ring-2 ring-red-500/20 translate-y-[-2px]'
                    : 'kanta-glass-card hover:border-red-200 hover:shadow-md'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                    isSelected ? 'bg-[#B92025] text-white shadow-xs' : 'bg-red-50 text-[#B92025]'
                  }`}
                >
                  <IconComp size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 font-['Outfit']">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Inspector Box */}
        <div className="kanta-glass-card rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/90">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-[#B92025] uppercase tracking-wider">
                Architecture Detail
              </span>
              <h4 className="text-lg font-bold text-slate-900 font-['Outfit']">
                {currentPillar.title} Integrated Governance & Data Flow
              </h4>
            </div>
            <span className="text-xs font-semibold text-slate-500 font-mono self-start sm:self-auto">
              Unified Security Boundary
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentPillar.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-[#B92025] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} />
                </div>
                <span className="text-xs font-semibold text-slate-700 leading-snug font-['Plus_Jakarta_Sans']">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
