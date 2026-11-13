import React from 'react';
import { Database, Layout, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function IntegrationsSection({ onBookDemo }) {
  const cards = [
    {
      title: 'Connect Your Data',
      badge: 'Data Layer',
      icon: Database,
      desc: 'Bring data from anywhere into your AI applications. Native connectors for popular databases, cloud storage, and APIs—with real-time sync and zero ETL pipeline build steps required.',
      features: [
        'PostgreSQL, MySQL, MongoDB, and Snowflake connectors',
        'S3, Google Drive, and Notion document ingestion',
        'Automatic schema discovery and vector embedding sync',
      ],
    },
    {
      title: 'Add AI to Your Apps',
      badge: 'Embeddable UI',
      icon: Layout,
      desc: 'Embed intelligent chatbots, search interfaces, and workflow triggers directly into your existing product with a single line of code or flexible SDK.',
      features: [
        'Iframe and React component SDKs',
        'Custom styling to match your brand design',
        'User authentication and session management built-in',
      ],
    },
    {
      title: 'Keep What Works',
      badge: 'Flexible Stack',
      icon: RefreshCw,
      desc: "Already have a database or LLM provider you love? Kanta integrates seamlessly into your existing infrastructure without forcing a complete rewrite.",
      features: [
        'Bring your own OpenAI, Anthropic, or Azure keys',
        'Connect existing vector databases (Pinecone, Weaviate)',
        'Export workflows as standard REST API endpoints',
      ],
    },
  ];

  return (
    <section id="integrations" className="py-16 bg-white border-t border-slate-200/80 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
            Integrations & Stack
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Works with your <span className="text-[#B92025]">stack</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Connect your existing databases, tools, and AI models. Kanta fits into your infrastructure—not the other way around.
          </p>
        </div>

        {/* 3 Main Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 group-hover:bg-[#B92025] group-hover:text-white transition-colors">
                    <IconComponent size={20} />
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit']">
                      {card.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mt-1 bg-slate-100 text-slate-700 border border-slate-200">
                      {card.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    {card.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={14} className="text-[#B92025] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Major AI Providers Ribbon */}
        <div className="mt-8 bg-[#FAF6F0] p-6 rounded-3xl border border-slate-200/90 shadow-2xs text-center space-y-4">
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
            SUPPORTED AI PROVIDERS & DATA STORES
          </span>

          <div className="flex flex-wrap justify-center items-center gap-3">
            {['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Meta Llama 3', 'Pinecone', 'PostgreSQL', 'AWS S3', 'Snowflake'].map((provider, pIdx) => (
              <span
                key={pIdx}
                className="bg-white border border-slate-200 px-4 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-2xs"
              >
                {provider}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
