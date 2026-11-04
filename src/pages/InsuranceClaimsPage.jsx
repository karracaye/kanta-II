import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, AlertTriangle, CheckCircle2, FileText, UserCheck, Sparkles, Filter } from 'lucide-react';

export default function InsuranceClaimsPage() {
  const [selectedClaim, setSelectedClaim] = useState('CLM-2026-081');

  useEffect(() => {
    document.title = 'Claims intake with approval rules | Kanta AI';
    window.scrollTo(0, 0);
  }, []);

  const handlingPoints = [
    {
      title: 'Documents in, data out.',
      desc: 'Kanta reads claim documents and returns each field with a confidence score.',
    },
    {
      title: 'One intake screen.',
      desc: 'Staff log the policy number, claimant, amount and incident date, and every claim starts as Submitted.',
    },
    {
      title: 'Rules on the server.',
      desc: 'Claims above your threshold are flagged for supervisor approval by the server, so no one can log one as pre-approved.',
    },
    {
      title: 'Approvals enforced in the data.',
      desc: 'Only supervisors can move a claim to Under review, Approved or Rejected, and each decision records who decided and when.',
    },
    {
      title: 'AI where it helps the reviewer.',
      desc: 'An AI step can summarise a claim for the supervisor from the extracted facts.',
    },
  ];

  return (
    <main className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#D83025] uppercase font-['Outfit']">
            Solution · Insurance
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Outfit']">
            Claims move faster <br />
            <span className="text-[#D83025]">when the rules are built in.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
            Kanta's AI builds a claims intake app around your approval rules, and your rules decide what it can change.
          </p>
        </div>

        {/* The Problem Box */}
        <div className="bg-gradient-to-r from-red-50/70 via-orange-50/40 to-white rounded-3xl p-6 sm:p-8 border border-red-100 space-y-2.5 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D83025]">
            <AlertTriangle size={16} />
            <span>The problem</span>
          </div>
          <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed font-['Plus_Jakarta_Sans']">
            Claims arrive as forms, emails and scanned documents. Staff retype the details, high-value claims need a supervisor, and the record of who approved what sits in inboxes.
          </p>
        </div>

        {/* Interactive Visual per brief: "The claims board and the supervisor's decision panel" */}
        <div className="kanta-glass-card rounded-3xl shadow-xl p-6 sm:p-8 space-y-6 border border-slate-200/90">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D83025]">
                Live Application Mockup
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                Claims Board & Supervisor Decision Panel
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 font-mono">
              Role: Supervisor (Approval Rights Enabled)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Claims Board */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                Inward Claims Queue
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    id: 'CLM-2026-081',
                    claimant: 'Tan Wei Ming',
                    policy: 'POL-9021-MED',
                    amount: 'S$ 6,850.00',
                    threshold: 'Above S$5,000 (Requires Supervisor)',
                    status: 'Under review',
                  },
                  {
                    id: 'CLM-2026-082',
                    claimant: 'Priya Sharma',
                    policy: 'POL-3419-AUTO',
                    amount: 'S$ 1,420.00',
                    threshold: 'Standard Limit',
                    status: 'Submitted',
                  },
                  {
                    id: 'CLM-2026-083',
                    claimant: 'Marcus Lim',
                    policy: 'POL-7821-PROP',
                    amount: 'S$ 12,300.00',
                    threshold: 'Above S$5,000 (Requires Supervisor)',
                    status: 'Under review',
                  },
                ].map((claim) => (
                  <div
                    key={claim.id}
                    onClick={() => setSelectedClaim(claim.id)}
                    className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                      selectedClaim === claim.id
                        ? 'border-[#D83025] bg-red-50/30 shadow-md ring-1 ring-red-500/20'
                        : 'border-slate-200 bg-white hover:border-[#D83025]/50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-mono text-xs font-bold text-[#D83025]">{claim.id}</span>
                        <div className="font-bold text-sm text-slate-900 font-['Outfit']">{claim.claimant}</div>
                        <div className="text-xs text-slate-500">{claim.policy}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-bold text-sm text-slate-900">{claim.amount}</div>
                        <span className="inline-block mt-1 text-[10px] px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-bold">
                          {claim.status}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 text-[11px] text-[#D83025] font-semibold">
                      {claim.threshold}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Supervisor Decision Panel */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 text-xs font-sans">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Sparkles size={16} className="text-[#D83025]" />
                <span className="font-bold text-xs uppercase tracking-wider text-slate-900 font-['Outfit']">
                  AI Summary & Decision Panel
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5 shadow-2xs">
                <span className="text-[10px] font-bold uppercase text-[#D83025]">AI Extraction Fact Check</span>
                <p className="text-slate-800 leading-relaxed font-medium">
                  Hospitalization invoice matches incident date (12 Oct 2026). Surgery line-item S$5,200 verified with hospital tariff database. Zero duplicate claims found.
                </p>
                <div className="text-[10px] text-slate-500 font-mono">Extraction confidence: 99.2%</div>
              </div>

              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-bold uppercase text-slate-500 block font-mono">
                  Supervisor Decision (Enforced in Data Schema)
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="py-2.5 px-3 rounded-full bg-[#D83025] hover:bg-[#C0261D] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                  >
                    <CheckCircle2 size={13} />
                    <span>Approve Claim</span>
                  </button>
                  <button
                    type="button"
                    className="py-2.5 px-3 rounded-full border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Reject Claim
                  </button>
                </div>
                <p className="text-[10px] text-slate-500 pt-1 leading-snug">
                  Server audits supervisor ID, timestamp, and locks record against frontline modification.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* How Kanta Handles It */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#D83025]">
              The solution
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">
              How Kanta handles it
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {handlingPoints.map((pt, idx) => (
              <div
                key={idx}
                className="kanta-glass-card kanta-glass-card-hover p-6 rounded-3xl space-y-2"
              >
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#D83025] flex items-center justify-center font-bold text-xs mb-3 shadow-2xs font-['Outfit']">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-base text-slate-900 font-['Outfit']">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What a risk team gets & Proof */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="kanta-glass-card p-6 sm:p-8 rounded-3xl shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D83025]">
              Governance
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
              What a risk team gets
            </h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
              The app's owner approves who can change data before it goes live, every run is traced, and documents can be deleted once processed.
            </p>
          </div>

          <div className="kanta-glass-card p-6 sm:p-8 rounded-3xl shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D83025]">
              Validation
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
              Proof
            </h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
              Kanta's AI built this app from a four-sentence brief in our own testing, using fictional data. It asked who should approve claims under S$5,000 before building, and stopped for the owner's sign-off before finishing.
            </p>
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="bg-gradient-to-br from-red-50/60 via-white to-orange-50/40 border-2 border-red-100 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">
            Call to action
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']">
            Bring one claim type and a few sample claims with personal details removed to a working session.
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
