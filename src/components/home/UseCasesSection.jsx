import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Receipt, Landmark, Building2, ArrowRight } from 'lucide-react';

export default function UseCasesSection() {
  const cases = [
    {
      title: 'Insurance',
      copy: 'Claims intake with amount-based approval; underwriting document review',
      link: '/solutions/insurance-claims',
      linkText: 'Explore insurance claims',
      icon: ShieldCheck,
    },
    {
      title: 'Finance operations',
      copy: 'Invoice capture, matching and approval',
      link: '/solutions/invoice-approval',
      linkText: 'Explore invoice approval',
      icon: Receipt,
    },
    {
      title: 'Banking and finance',
      copy: 'Customer onboarding documents; credit document checks',
      link: '/demo',
      linkText: 'Book a demo',
      icon: Landmark,
    },
    {
      title: 'Government',
      copy: 'Applications and permits; case management with a full run history',
      link: '/demo',
      linkText: 'Book a demo',
      icon: Building2,
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
            Use cases
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Processes with rules, <br />
            <span className="text-[#B92025]">documents and approvals.</span>
          </h2>
        </div>

        {/* 4 Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {cases.map((c, idx) => {
            const IconComp = c.icon;
            return (
              <div
                key={idx}
                className="kanta-glass-card kanta-glass-card-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-red-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#B92025] border border-red-100 flex items-center justify-center mb-4 shadow-2xs">
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit']">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                    {c.copy}
                  </p>
                </div>

                <Link
                  to={c.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B92025] hover:text-[#9E1B1F] transition-colors group"
                >
                  <span>{c.linkText}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Line under the tiles per brief */}
        <div className="text-center pt-2">
          <p className="text-xs sm:text-sm font-bold text-slate-800 bg-red-50/70 inline-block px-6 py-3 rounded-full border border-red-200 shadow-2xs font-['Outfit']">
            Kanta already runs production accounts payable workflows.
          </p>
        </div>

      </div>
    </section>
  );
}
