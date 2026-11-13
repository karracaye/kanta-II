import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Server, KeyRound, Lock, EyeOff, ArrowRight } from 'lucide-react';

export default function DeploymentSection() {
  const points = [
    {
      title: 'Kanta Cloud.',
      desc: 'Hosted on Amazon Web Services in Singapore.',
      icon: Cloud,
    },
    {
      title: 'Self-hosted.',
      desc: 'Run Kanta in containers on your own AWS or Azure, with your own AI models through Azure OpenAI or Amazon Bedrock.',
      icon: Server,
    },
    {
      title: 'Access control.',
      desc: 'Separate permissions for the people who build apps and the people who use them. New app users wait for approval.',
      icon: Lock,
    },
    {
      title: 'Keys.',
      desc: 'Keys per environment, with rotation and revocation.',
      icon: KeyRound,
    },
    {
      title: 'Document privacy.',
      desc: 'Zero data retention, available per document type.',
      icon: EyeOff,
    },
  ];

  return (
    <section id="deployment" className="py-20 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
            Deployment & Privacy
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Your data stays <br />
            <span className="text-[#B92025]">where you need it.</span>
          </h2>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Outfit']">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Link to Security Page per brief */}
        <div className="text-center pt-2">
          <Link
            to="/security"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border border-slate-200 text-slate-800 hover:border-[#B92025] hover:text-[#B92025] hover:bg-red-50/40 font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>More on the Security page</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
