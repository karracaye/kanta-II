import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ShieldCheck, Lock, FileCode2 } from 'lucide-react';
import RobotVideo from './RobotVideo.jsx';
import AIChatWidget from './AIChatWidget.jsx';
import FloatingFeatureCard from './FloatingFeatureCard.jsx';

export default function HeroSection({ onBookDemo }) {
  const handleScrollToHowItWorks = (e) => {
    e.preventDefault();
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-6 md:pt-28 md:pb-8 -mb-2 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        
        {/* --- TOP TYPOGRAPHY SECTION --- */}
        <div className="max-w-4xl mx-auto space-y-4 mb-8">
          
          {/* Simple, modern, minimalist text label in official Kanta red */}
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
            AI-native workflow platform for regulated organisations
          </p>

          {/* Headline with official Kanta logo Red */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-['Outfit']">
            AI that plays by your rules. <br />
            <span className="text-[#B92025]">Governance built in.</span>
          </h1>

          {/* Subhead per brief */}
          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
            Kanta is the AI-native platform for regulated work. Describe a process and AI builds the app. Your rules decide what it can change, and every run is on record.
          </p>

          {/* Buttons per brief */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#B92025] hover:opacity-90 text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-red-900/15 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Book a demo</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="#how-it-works"
              onClick={handleScrollToHowItWorks}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-800 hover:border-[#B92025] hover:text-[#B92025] hover:bg-red-50/50 font-bold text-xs sm:text-sm transition-colors shadow-2xs"
            >
              <span>See how it works</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Line under the buttons per brief */}
          <p className="text-xs text-slate-400 font-medium pt-1">
            Run on Kanta Cloud in Singapore, or in your own cloud with your own AI models.
          </p>
        </div>

        {/* --- LOWER VISUAL GRID --- */}
        <div className="max-w-6xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* LEFT SIDE: AI Chat Assistant + 2 Lower Cards */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-4">
            <AIChatWidget />
            <div className="w-full max-w-md flex flex-col items-center lg:items-end space-y-3 pr-2">
              <FloatingFeatureCard type="row_level_security" />
              <FloatingFeatureCard type="voice_input" />
            </div>
          </div>

          {/* CENTER: Centered Robot Video (white.mp4 with walking bubble) */}
          <div className="lg:col-span-4 flex items-center justify-center py-2 lg:py-0">
            <RobotVideo />
          </div>

          {/* RIGHT SIDE: 2 Cards + Owner Approval Sign-off Box */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-4">
            <div className="w-full max-w-[300px] bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-sm text-left font-sans space-y-2.5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <div className="w-6 h-6 rounded-md bg-red-50 text-[#B92025] border border-red-100 flex items-center justify-center">
                  <Lock size={13} />
                </div>
                <h3 className="font-bold text-xs text-slate-900 font-['Outfit']">
                  Rules that must hold
                </h3>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B92025] mt-1.5 shrink-0" />
                  <span>Thresholds checked on server (S$5,000)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B92025] mt-1.5 shrink-0" />
                  <span>Enforced in data, not browser</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B92025] mt-1.5 shrink-0" />
                  <span>Owner sign-off before deploy</span>
                </li>
              </ul>
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
