import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import RobotVideo from './RobotVideo.jsx';
import AIChatWidget from './AIChatWidget.jsx';
import GreetingBubble from './GreetingBubble.jsx';
import FloatingFeatureCard from './FloatingFeatureCard.jsx';

export default function HeroSection({ onBookDemo }) {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-white min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full flex-1 flex flex-col justify-center">
        
        {/* --- TOP TYPOGRAPHY SECTION (Static, No Animation) --- */}
        <div className="max-w-4xl mx-auto space-y-4 mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-['Outfit']">
            Orchestrate Intelligent Tasks. <br />
            Build Your <span className="text-[#D83025]">AI Agents.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Build LLM-powered APIs, automate complex workflows, and deploy <br className="hidden sm:block" />
            data apps—all from a single, unified platform.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onBookDemo}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#FF5722] text-[#FF5722] hover:bg-orange-50 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Phone size={14} />
              <span>Call Us</span>
            </button>

            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
            >
              <span>Explore Features</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* --- LOWER VISUAL GRID (Static, Exactly matching media_1787291785291.png) --- */}
        <div className="max-w-6xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* LEFT SIDE: AI Chat Assistant + 2 Lower Cards */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-4">
            <AIChatWidget />
            <div className="w-full max-w-md flex flex-col items-center lg:items-end space-y-3 pr-2">
              <FloatingFeatureCard type="row_level_security" />
              <FloatingFeatureCard type="voice_input" />
            </div>
          </div>

          {/* CENTER: Centered Robot Video */}
          <div className="lg:col-span-4 flex items-center justify-center py-2 lg:py-0">
            <RobotVideo />
          </div>

          {/* RIGHT SIDE: Speech Bubble + 2 Lower Cards */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-4">
            {/* "Hi, I'm Kanta!" Speech Bubble */}
            <div>
              <GreetingBubble />
            </div>

            {/* 2 Lower Right Cards (Database Access & Export) */}
            <div className="w-full max-w-md flex flex-col items-center lg:items-start space-y-3 pl-2">
              <FloatingFeatureCard type="database_access" />
              <FloatingFeatureCard type="export" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
