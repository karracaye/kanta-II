import React, { useState } from 'react';
import { Volume2, Sparkles, FileText, Database, Zap } from 'lucide-react';

export default function GreetingBubble() {
  const [greetingText, setGreetingText] = useState(
    'I can read, understand, and process your documents. What would you like to do today?'
  );
  const [activeAction, setActiveAction] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const actions = [
    { id: 'docs', label: 'Process Docs', icon: FileText, text: "I'll summarize your PDFs, Word files, or spreadsheets instantly!" },
    { id: 'sql', label: 'Query SQL', icon: Database, text: "Executing secure SQL database queries with row-level encryption." },
    { id: 'workflow', label: 'Run Workflow', icon: Zap, text: "Orchestrating multi-agent LLM workflow pipelines on standby." },
  ];

  const handleActionClick = (action) => {
    setActiveAction(action.id);
    setIsProcessing(true);
    setGreetingText(`Selected: ${action.label}. ${action.text}`);

    setTimeout(() => {
      setIsProcessing(false);
    }, 1500);
  };

  const toggleAudioGreeting = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] font-sans z-20">
      {/* Speech Bubble Container */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-lg transition-all duration-300 hover:shadow-xl relative text-left">
        {/* Pointer Tail pointing left-down towards Kanta Robot */}
        <div className="absolute -left-3 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[14px] border-r-white drop-shadow-xs"></div>

        {/* Title Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img
              src="/assets/logo/Iconic-Color@2x.png"
              alt="Kanta Icon"
              className="w-5 h-5 object-contain"
            />
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base font-['Outfit']">
              Hi, I'm Kanta!
            </h3>
          </div>

          <button
            onClick={toggleAudioGreeting}
            className={`p-1.5 rounded-full transition-colors flex items-center gap-1 text-xs font-semibold ${
              isPlayingAudio
                ? 'bg-red-50 text-[#D83025] border border-red-200'
                : 'text-slate-400 hover:text-slate-600 bg-slate-100'
            }`}
            title="Listen to AI Voice Greeting"
          >
            <Volume2 size={13} className={isPlayingAudio ? 'animate-bounce' : ''} />
          </button>
        </div>

        {/* Speech Bubble Subtext */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3 font-medium">
          {greetingText}
        </p>

        {/* Processing State */}
        {isProcessing && (
          <div className="flex items-center gap-2 text-xs text-[#D83025] font-semibold mb-3 bg-red-50 px-2.5 py-1.5 rounded-lg border border-red-100 animate-pulse">
            <Sparkles size={12} className="animate-spin" />
            <span>Kanta is configuring agent tools...</span>
          </div>
        )}

        {/* Quick Action Pills with Vector Icons */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          {actions.map((act) => {
            const IconComp = act.icon;
            return (
              <button
                key={act.id}
                onClick={() => handleActionClick(act)}
                className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border transition-all duration-200 ${
                  activeAction === act.id
                    ? 'bg-[#D83025] text-white border-[#D83025] scale-105'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <IconComp size={12} className={activeAction === act.id ? 'text-white' : 'text-[#D83025]'} />
                <span>{act.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
