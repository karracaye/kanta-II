import React from 'react';
import { FileText, Table, Trash2, RotateCcw, CheckCircle } from 'lucide-react';

export default function DocumentsSection() {
  const points = [
    {
      title: 'Fields in plain language.',
      desc: 'Describe each field you need, or start from ready-made invoice fields.',
      icon: FileText,
    },
    {
      title: 'Tables and pages.',
      desc: "Extract line-item tables and skip pages you don't need.",
      icon: Table,
    },
    {
      title: 'Zero data retention.',
      desc: 'Switch it on per document type, so documents are deleted once your system confirms the result.',
      icon: Trash2,
    },
    {
      title: 'Accuracy you can recheck.',
      desc: 'Save sample documents as test cases and rerun them after any change.',
      icon: RotateCcw,
    },
  ];

  return (
    <section id="documents" className="py-20 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
            Documents
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Documents in. <br />
            <span className="text-[#B92025]">Structured data out.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed pt-1 font-['Plus_Jakarta_Sans']">
            Kanta reads invoices, claims, identity documents and certificates with its own document models, and returns each field with a confidence score and its position on the page.
          </p>
        </div>

        {/* 4 Feature Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {points.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div
                key={idx}
                className="kanta-glass-card kanta-glass-card-hover rounded-3xl p-6 relative hover:border-red-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#B92025] border border-red-100 flex items-center justify-center mb-4 shadow-2xs">
                  <IconComp size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-['Outfit']">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual per brief: "An invoice with extracted fields, confidence scores and bounding boxes" */}
        <div className="kanta-glass-card rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-200/90">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B92025]">
                Extraction Inspector
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                Tax Invoice Model · Extracted Fields with Bounding Box Localization
              </h4>
            </div>
            <span className="text-xs px-3.5 py-1.5 bg-emerald-50 text-emerald-700 rounded-full font-bold border border-emerald-200 shadow-2xs">
              Confidence Score: 99.4%
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Invoice Visual Mock with Bounding Boxes */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 relative font-sans text-xs text-slate-900 space-y-4">
              <div className="flex justify-between items-start border-b pb-3">
                <div>
                  <div className="font-extrabold text-sm text-slate-900 font-['Outfit']">ACME PACIFIC LOGISTICS PTE LTD</div>
                  <div className="text-[11px] text-slate-500">UEN: 201934892K · 12 Marina Blvd, Singapore</div>
                </div>
                <div className="relative border-2 border-dashed border-[#B92025] p-1.5 rounded-lg bg-red-50/80">
                  <span className="text-[9px] font-bold text-[#B92025] block">#invoice_num [99.8%]</span>
                  <span className="font-mono font-bold text-xs">INV-2026-0891</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block">Billed To:</span>
                  <div className="font-bold text-slate-800">Apex Global Holdings</div>
                </div>
                <div className="relative border-2 border-dashed border-[#B92025] p-1.5 rounded-lg bg-red-50/80">
                  <span className="text-[9px] font-bold text-[#B92025] block">#invoice_date [99.5%]</span>
                  <div className="font-mono font-bold">14 Oct 2026</div>
                </div>
              </div>

              {/* Line items table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <div className="grid grid-cols-12 bg-slate-100 p-2 font-bold text-[11px] text-slate-600">
                  <div className="col-span-8">Description</div>
                  <div className="col-span-4 text-right">Amount (SGD)</div>
                </div>
                <div className="grid grid-cols-12 p-2 border-t border-slate-100 text-[11px]">
                  <div className="col-span-8 font-medium">Container Freight Forwarding (Port of SG)</div>
                  <div className="col-span-4 text-right font-mono font-bold">$4,800.00</div>
                </div>
                <div className="grid grid-cols-12 p-2 border-t border-slate-100 text-[11px]">
                  <div className="col-span-8 font-medium">Customs Clearance Inspection Fee</div>
                  <div className="col-span-4 text-right font-mono font-bold">$650.00</div>
                </div>
              </div>

              {/* Total Box */}
              <div className="flex justify-end pt-1">
                <div className="relative border-2 border-dashed border-[#B92025] p-2.5 rounded-xl bg-red-50/80 text-right min-w-[170px]">
                  <span className="text-[9px] font-bold text-[#B92025] block">#total_amount [99.9%]</span>
                  <span className="text-base font-bold font-mono text-slate-900">S$ 5,450.00</span>
                </div>
              </div>
            </div>

            {/* Right: Structured Data Output */}
            <div className="lg:col-span-6 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                JSON Extraction Output
              </div>

              <div className="bg-[#0F172A] text-slate-200 rounded-2xl p-4 font-mono text-xs overflow-x-auto border border-slate-800 shadow-md">
                <pre>{`{
  "document_type": "tax_invoice",
  "fields": {
    "invoice_number": {
      "value": "INV-2026-0891",
      "confidence": 0.998,
      "page": 1,
      "bbox": [420, 32, 560, 52]
    },
    "issue_date": {
      "value": "2026-10-14",
      "confidence": 0.995,
      "page": 1,
      "bbox": [420, 85, 510, 105]
    },
    "total_amount": {
      "value": 5450.00,
      "currency": "SGD",
      "confidence": 0.999,
      "page": 1,
      "bbox": [400, 240, 560, 270]
    }
  },
  "retention_policy": "zero_data_retention_enabled",
  "status": "ready_for_validation"
}`}</pre>
              </div>

              <p className="text-xs text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
                Zero data retention switch active: the source PDF is immediately scrubbed from temporary disk once confirmed by the downstream API.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
