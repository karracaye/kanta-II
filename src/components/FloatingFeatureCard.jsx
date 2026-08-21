import React, { useState } from 'react';
import { ShieldCheck, Mic, Database, Download, Check, ExternalLink } from 'lucide-react';

export default function FloatingFeatureCard({ type, className = '' }) {
  const [active, setActive] = useState(false);

  const cardData = {
    row_level_security: {
      icon: ShieldCheck,
      title: 'Row-Level Security',
      subtitle: 'User-specific data access',
      badge: 'Protected',
    },
    voice_input: {
      icon: Mic,
      title: 'Voice Input',
      subtitle: 'Speech-to-text queries',
      badge: 'Active',
    },
    database_access: {
      icon: Database,
      title: 'Database Access',
      subtitle: 'Query tables with SQL constraints',
      badge: 'Connected',
    },
    export: {
      icon: Download,
      title: 'Export',
      subtitle: 'Download conversation history',
      badge: 'Ready',
    },
  };

  const current = cardData[type] || cardData.row_level_security;
  const IconComponent = current.icon;

  return (
    <div
      onClick={() => setActive(!active)}
      className={`kanta-glass-card rounded-xl px-3 py-2 flex items-center justify-between gap-2.5 cursor-pointer select-none transition-colors duration-200 w-full max-w-[240px] ${
        active ? 'border-[#D83025] ring-2 ring-red-500/20 bg-white' : ''
      } ${className}`}
    >
      <div className="flex items-center gap-2">
        {/* Icon Box */}
        <div
          className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
            active
              ? 'bg-[#D83025] text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 group-hover:bg-red-50 group-hover:text-[#D83025]'
          }`}
        >
          <IconComponent size={13} />
        </div>

        {/* Labels */}
        <div className="text-left">
          <h4 className="text-[10px] font-bold text-slate-900 leading-tight">
            {current.title}
          </h4>
          <p className="text-[8.5px] text-slate-500 font-medium leading-tight">
            {current.subtitle}
          </p>
        </div>
      </div>

      {/* Status indicator on hover/click */}
      {active ? (
        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">
          ✓
        </span>
      ) : (
        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
      )}
    </div>
  );
}
