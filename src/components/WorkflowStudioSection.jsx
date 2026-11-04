import React from 'react';
import { CheckCircle2, Terminal, Sparkles, Play, Cpu, Zap, Database, FileText, Tag, Code, Globe, BarChart3, Flag, GitBranch } from 'lucide-react';

export default function WorkflowStudioSection() {
  const simpleCategories = [
    {
      step: '01',
      title: 'Triggers & Data Input',
      desc: 'Start workflows via Webhooks, Schedules, PDFs, or Forms.',
      icon: Play,
      bg: 'bg-[#FAF6F0] border border-slate-200',
      iconBg: 'bg-slate-100 text-slate-800 border border-slate-200',
      nodes: [
        { label: 'Start Trigger', icon: Play },
        { label: 'Document Reader', icon: FileText },
        { label: 'Webhook Input', icon: Globe },
      ],
    },
    {
      step: '02',
      title: 'AI Reasoning Engines',
      desc: 'Extract document text & run GPT-4o / Claude models.',
      icon: Cpu,
      bg: 'bg-red-50/60 border border-red-200/80',
      iconBg: 'bg-red-100 text-[#D83025] border border-red-200',
      nodes: [
        { label: 'LLM Generator', icon: Cpu },
        { label: 'Vision OCR Parse', icon: FileText },
        { label: 'Intent Classifier', icon: Tag },
      ],
    },
    {
      step: '03',
      title: 'Actions & Logic Rules',
      desc: 'Connect REST APIs, Python/JS code, and If-Else rules.',
      icon: Zap,
      bg: 'bg-orange-50/60 border border-orange-200/80',
      iconBg: 'bg-orange-100 text-[#FF5722] border border-orange-200',
      nodes: [
        { label: 'If-Else Rule', icon: GitBranch },
        { label: 'HTTP API Call', icon: Globe },
        { label: 'Custom Code', icon: Code },
      ],
    },
    {
      step: '04',
      title: 'Database & Output',
      desc: 'Save output to SQL databases and render visual charts.',
      icon: Database,
      bg: 'bg-amber-50/60 border border-amber-200/80',
      iconBg: 'bg-amber-100 text-amber-800 border border-amber-200',
      nodes: [
        { label: 'Save to Database', icon: Database },
        { label: 'Data Chart Output', icon: BarChart3 },
        { label: 'Final Response', icon: Flag },
      ],
    },
  ];

  return (
    <section id="workflow-studio" className="py-16 bg-white border-t border-slate-200/80 font-sans relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          {/* LEFT COLUMN: Section Header & Compact Feature Checklist */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs sm:text-sm font-bold tracking-wider text-[#D83025] uppercase font-['Outfit']">
              Workflow Studio
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight leading-tight">
              Ready for any <span className="text-[#D83025]">automation</span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Build complex AI pipelines visually. Our DAG-based engine handles parallel execution, conditional branching, and sub-workflows automatically.
            </p>

            {/* Compact Feature Highlight Cards */}
            <div className="space-y-2.5 pt-1">
              <div className="bg-[#FAF6F0] p-3.5 rounded-2xl border border-slate-200/90 flex items-start gap-3 shadow-2xs hover:border-[#D83025] transition-colors">
                <CheckCircle2 size={16} className="text-[#D83025] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-bold text-slate-900 block font-['Outfit']">Parallel Execution</strong>
                  <span className="text-[10px] text-slate-500 font-medium">Independent nodes run simultaneously via ThreadPool</span>
                </div>
              </div>

              <div className="bg-[#FAF6F0] p-3.5 rounded-2xl border border-slate-200/90 flex items-start gap-3 shadow-2xs hover:border-[#FF5722] transition-colors">
                <CheckCircle2 size={16} className="text-[#FF5722] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-bold text-slate-900 block font-['Outfit']">Conditional Branching</strong>
                  <span className="text-[10px] text-slate-500 font-medium">14+ operators: equals, contains, regex, and more</span>
                </div>
              </div>

              <div className="bg-[#FAF6F0] p-3.5 rounded-2xl border border-slate-200/90 flex items-start gap-3 shadow-2xs hover:border-amber-500 transition-colors">
                <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-xs font-bold text-slate-900 block font-['Outfit']">Sub-Workflows</strong>
                  <span className="text-[10px] text-slate-500 font-medium">Reusable components with loop support for iteration</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Node Library Card */}
          <div className="lg:col-span-7 bg-[#FAF6F0] rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl space-y-4">
            
            {/* Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-red-50 text-[#D83025] flex items-center justify-center border border-red-100 shadow-2xs">
                  <Terminal size={14} />
                </div>
                <div>
                  <strong className="text-xs font-extrabold text-slate-900 font-['Outfit'] block">
                    How Kanta Nodes Work
                  </strong>
                  <span className="text-[10px] text-slate-500 font-medium">4 simple building blocks</span>
                </div>
              </div>

              <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5 font-mono shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Visual Flow</span>
              </span>
            </div>

            {/* 4 Step Blocks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {simpleCategories.map((item, idx) => {
                const MainIcon = item.icon;
                return (
                  <div key={idx} className={`p-4 rounded-2xl ${item.bg} space-y-2 shadow-2xs`}>
                    <div className="flex items-center justify-between">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${item.iconBg}`}>
                        <MainIcon size={14} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-500 px-2 py-0.5 rounded-full border border-slate-200 bg-white">STEP {item.step}</span>
                    </div>

                    <h4 className="text-xs font-extrabold text-slate-900 font-['Outfit']">
                      {item.title}
                    </h4>

                    <p className="text-[10px] text-slate-600 font-medium leading-tight">
                      {item.desc}
                    </p>

                    <div className="pt-1.5 flex flex-wrap gap-1">
                      {item.nodes.map((nodeItem, nIdx) => {
                        const NodeIcon = nodeItem.icon;
                        return (
                          <span key={nIdx} className="inline-flex items-center gap-1 text-[9px] font-bold bg-white text-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200">
                            <NodeIcon size={10} className="text-[#D83025]" />
                            <span>{nodeItem.label}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Simple Bottom Ribbon */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#D83025]" />
                <span>Drag & drop nodes visually</span>
              </span>
              <span className="text-[#D83025] font-bold px-3 py-0.5 rounded-full border border-red-100 bg-white">100% No-Code</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
