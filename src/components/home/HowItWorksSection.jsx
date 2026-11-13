import React from 'react';
import { MessageSquare, FileCheck2, Cpu, UserCheck, ShieldAlert, Check } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '1',
      title: 'Describe it.',
      desc: 'Tell Kanta what the process needs in plain language. It asks the questions that change the design, such as who is allowed to approve what.',
      icon: MessageSquare,
    },
    {
      num: '2',
      title: 'Approve the plan.',
      desc: 'Kanta proposes the screens, the data, the workflow and the rules that must always hold. Nothing is created until you say go.',
      icon: FileCheck2,
    },
    {
      num: '3',
      title: 'AI creates it.',
      desc: 'Kanta sets up the data model, the server-side workflow and the screens, then checks its own work.',
      icon: Cpu,
    },
    {
      num: '4',
      title: 'Sign off on access.',
      desc: 'Before the app is finished, Kanta shows its owner who can change what, in plain language, and waits for approval.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Describe your process. <br />
            <span className="text-[#B92025]">Kanta builds the app.</span>
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="kanta-glass-card kanta-glass-card-hover rounded-2xl p-6 relative flex flex-col hover:border-red-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[#B92025] border border-red-100 flex items-center justify-center font-bold text-base shadow-2xs">
                    <IconComponent size={22} />
                  </div>
                  <span className="text-2xl font-black text-slate-200 font-['Outfit']">
                    0{step.num}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit']">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed flex-1 font-['Plus_Jakarta_Sans']">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual per brief: "The owner-approval note at the end of an AI build" */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border-2 border-red-200/90 shadow-xl p-6 sm:p-8 relative overflow-hidden">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-5">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B92025] border border-red-100 flex items-center justify-center shadow-xs">
              <ShieldAlert size={22} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#B92025]">
                Build Verification · Step 4
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                Owner Approval Note: Elevated Permissions Required
              </h4>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-800">
            <p className="bg-red-50/60 border border-red-100 rounded-2xl p-4 leading-relaxed font-medium">
              <strong>Note for App Owner:</strong> The intake workflow saves new claims with system credentials outside the table's normal write rules. This allows frontline staff to log submissions without granting them permissions to edit or reassign claims later.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 block mb-0.5">Proposed Rule:</span>
                <span className="font-bold text-slate-900">Claims table is read-only for staff role</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 block mb-0.5">Workflow Override:</span>
                <span className="font-bold text-slate-900">System creates record via intake hook</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium">
                AI paused execution. Awaiting human administrator sign-off before deploying.
              </span>
              <button
                type="button"
                className="px-5 py-2.5 rounded-full bg-[#B92025] hover:opacity-90 text-white text-xs font-bold transition-all shadow-md shadow-red-900/15 hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Check size={14} />
                <span>Approve & Deploy App</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
