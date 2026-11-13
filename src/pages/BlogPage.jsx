import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Insights | Kanta AI';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header per brief */}
        <div className="max-w-2xl space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Insights.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
            How regulated teams can put AI to work, with their rules in place.
          </p>
        </div>

        {/* Post Grid: Single post card for now */}
        <div className="grid grid-cols-1 gap-6">
          <article className="kanta-glass-card kanta-glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Calendar size={14} className="text-[#B92025]" />
                <span>October 2026</span>
                <span>•</span>
                <span className="text-[#B92025] uppercase font-bold text-[11px]">Case Study</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#B92025] transition-colors leading-snug font-['Outfit']">
                We asked AI to build a claims app. It stopped and asked for permission.
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
                We gave Kanta's AI a four-sentence brief for a claims app. Before finishing, it stopped and asked the owner to approve who could change the data.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/blog/ai-built-claims-app"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#B92025] hover:opacity-90 text-white text-xs sm:text-sm font-bold transition-all shadow-md group-hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Read post</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        </div>

      </div>
    </main>
  );
}
