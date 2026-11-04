import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Lock, Bot, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SecurityPage() {
  useEffect(() => {
    document.title = 'Security and AI governance | Kanta AI';
    window.scrollTo(0, 0);
  }, []);

  const hostingPoints = [
    'Kanta Cloud runs on Amazon Web Services (AWS) in Singapore.',
    'You can run Kanta in containers in your own AWS or Azure account, with your own Azure OpenAI or Amazon Bedrock models.',
    'Only the model chosen for each AI step sees its data, and steps without AI send nothing to a model.',
    'Zero data retention can be switched on per document type, deleting documents and results once your system confirms the result.',
  ];

  const accessPoints = [
    'Two permission systems: Studio roles control who builds, and app roles control who can read or change data. Neither grants the other.',
    'Self-signup is off by default, and new app users wait for approval.',
    'App roles take effect only where a table grants them, so permissions are enforced in the data.',
    'Your own portal can sign users in to embedded apps through short-lived, single-use sessions from approved sites.',
    'Keys are issued per environment, with last-used dates, rotation and revocation.',
  ];

  const governancePoints = [
    'AI acts only in the steps where a builder places it. Business rules run on the server as fixed logic.',
    'When AI builds an app, the owner approves the plan before anything is created, and approves data access before it is finished.',
    'Each AI-built app keeps a dated record of intent, the rules that must hold, and the options rejected.',
    "Agents can be scored against your private reference cases before going live, and embedded agents see only each visitor's own records.",
  ];

  const auditPoints = [
    'Every workflow run keeps its inputs, outputs, version, step timings and logs, and can be searched and re-run.',
    'Every AI request records the model, tokens, user and time.',
  ];

  return (
    <main className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#D83025] uppercase font-['Outfit']">
            Trust & Compliance
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Outfit']">
            Security and AI governance, <br />
            <span className="text-[#D83025]">built in.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
            How Kanta hosts your data, controls access, governs AI, and records what happened.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Section 1: Hosting and Data */}
          <div className="kanta-glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#D83025] flex items-center justify-center shadow-2xs">
                <Server size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-['Outfit']">
                Hosting and data
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 font-medium font-['Plus_Jakarta_Sans']">
              {hostingPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D83025] mt-2 shrink-0" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Access Control */}
          <div className="kanta-glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#D83025] flex items-center justify-center shadow-2xs">
                <Lock size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-['Outfit']">
                Access control
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 font-medium font-['Plus_Jakarta_Sans']">
              {accessPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D83025] mt-2 shrink-0" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: AI Governance */}
          <div className="kanta-glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#D83025] flex items-center justify-center shadow-2xs">
                <Bot size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-['Outfit']">
                AI governance
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 font-medium font-['Plus_Jakarta_Sans']">
              {governancePoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D83025] mt-2 shrink-0" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Audit */}
          <div className="kanta-glass-card rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#D83025] flex items-center justify-center shadow-2xs">
                <Shield size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-['Outfit']">
                Audit
              </h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 font-medium font-['Plus_Jakarta_Sans']">
              {auditPoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D83025] mt-2 shrink-0" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Security Call to Action */}
        <div className="bg-gradient-to-br from-red-50/60 via-white to-orange-50/40 border-2 border-red-100 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">
            Questions from your security team?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']">
            We regularly review architecture, data residency, VPC peering, and penetration testing with financial and enterprise security teams.
          </p>
          <div className="pt-2">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D83025] hover:bg-[#C0261D] text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Book a demo</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
