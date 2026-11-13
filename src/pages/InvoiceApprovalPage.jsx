import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Receipt, AlertTriangle, ArrowRight, CheckCircle2, FileText, ArrowRightLeft, Database } from 'lucide-react';

export default function InvoiceApprovalPage() {
  useEffect(() => {
    document.title = 'Invoice capture and approval | Kanta AI';
    window.scrollTo(0, 0);
  }, []);

  const handlingPoints = [
    {
      title: 'Fields in plain language.',
      desc: 'Define the fields you need, such as invoice number, date, supplier, currency, tax and total, or start from ready-made invoice fields.',
    },
    {
      title: 'Line items and pages.',
      desc: "Kanta extracts line-item tables and skips supporting pages it doesn't need.",
    },
    {
      title: 'Checks you can read.',
      desc: 'Workflow steps compare invoice data with your records and apply your approval limits on the server.',
    },
    {
      title: 'Approvals by amount.',
      desc: 'Approvers see only what their role allows, and every decision is recorded.',
    },
    {
      title: 'Connected to your systems.',
      desc: 'Workflows call your finance system through web service steps.',
    },
  ];

  return (
    <main className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
            Solution · Finance Operations
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Outfit']">
            From inbox to approval, <br />
            <span className="text-[#B92025]">without retyping.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
            Kanta reads each invoice, checks it against your rules, and routes it to the right approver.
          </p>
        </div>

        {/* The Problem Box */}
        <div className="bg-gradient-to-r from-red-50/80 via-red-50/40 to-white rounded-3xl p-6 sm:p-8 border border-red-200/80 space-y-2.5 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B92025]">
            <AlertTriangle size={16} />
            <span>The problem</span>
          </div>
          <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed font-['Plus_Jakarta_Sans']">
            Invoices arrive in every layout. Finance teams retype them, chase approvals by email, and rebuild the audit trail at month end.
          </p>
        </div>

        {/* Interactive Visual: Invoice Extraction & Automated 3-Way Matching Workflow */}
        <div className="kanta-glass-card rounded-3xl shadow-xl p-6 sm:p-8 space-y-6 border border-slate-200/90">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B92025]">
                Live Accounts Payable Pipeline
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
                Multi-Step Invoice Routing & ERP Sync
              </h3>
            </div>
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 shadow-2xs">
              Matched Against ERP PO #PO-8812
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold uppercase text-slate-400 block font-mono">
                1. Extraction & Parsing
              </span>
              <div className="font-bold text-sm text-slate-900 font-['Outfit']">Acme Hardware Pte Ltd</div>
              <div className="text-xs text-slate-500 space-y-1 font-medium">
                <div>Inv: <strong>INV-9921</strong> · S$ 8,240.00</div>
                <div>Confidence: <strong className="text-emerald-700">99.6%</strong> across 14 fields</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-red-50/50 border-2 border-[#B92025] space-y-2 shadow-xs">
              <span className="text-[10px] font-bold uppercase text-[#B92025] block font-mono">
                2. Server-Side Rule Match
              </span>
              <div className="font-bold text-sm text-slate-900 font-['Outfit']">Threshold Check: &gt; S$5,000</div>
              <div className="text-xs text-slate-500 space-y-1 font-medium">
                <div>PO Variance: <strong className="text-emerald-700">0.0%</strong> (exact match)</div>
                <div>Routing: Head of Operations (Tier 2)</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold uppercase text-slate-400 block font-mono">
                3. System Dispatch
              </span>
              <div className="font-bold text-sm text-slate-900 font-['Outfit']">Webhook to SAP / NetSuite</div>
              <div className="text-xs text-slate-500 space-y-1 font-medium">
                <div>Payload posted with audit hash</div>
                <div>Audit log locked & timestamped</div>
              </div>
            </div>

          </div>
        </div>

        {/* How Kanta Handles It */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#B92025]">
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
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#B92025] flex items-center justify-center font-bold text-xs mb-3 shadow-2xs font-['Outfit']">
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

        {/* What an auditor gets & Proof */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="kanta-glass-card p-6 sm:p-8 rounded-3xl shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B92025]">
              Compliance
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
              What an auditor gets
            </h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
              Every run keeps its inputs, outputs, version and step timings, each extracted field carries a confidence score, and documents can be deleted once processed.
            </p>
          </div>

          <div className="kanta-glass-card p-6 sm:p-8 rounded-3xl shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B92025]">
              Track Record
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
              Proof
            </h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
              Kanta already runs production accounts payable workflows.
            </p>
          </div>
        </div>

        {/* Call to Action Box */}
        <div className="bg-gradient-to-br from-red-50/60 via-white to-red-50/30 border-2 border-red-100 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">
            Call to action
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']">
            Bring a few sample invoices with sensitive details removed, plus your approval limits, to a working session.
          </p>
          <div className="pt-2">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B92025] hover:opacity-90 text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
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
