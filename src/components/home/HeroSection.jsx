import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Lock, FileCode2, Sparkles } from 'lucide-react';
import RobotVideo from '../RobotVideo.jsx';

export default function HeroSection() {
  const handleScrollToHowItWorks = (e) => {
    e.preventDefault();
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-white">
      {/* Subtle background mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* --- TOP TYPOGRAPHY SECTION --- */}
        <div className="max-w-4xl mx-auto space-y-4 mb-8">
          
          {/* Label per brief */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF5F5] border border-[#CCCCCC] text-[#C00000] text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C00000] animate-pulse" />
            AI-native workflow platform for regulated organisations
          </div>

          {/* Headline per brief */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.15]">
            AI that plays by your rules. <br />
            <span className="text-[#C00000]">Governance built in.</span>
          </h1>

          {/* Subhead per brief */}
          <p className="text-base sm:text-lg md:text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Kanta is the AI-native platform for regulated work. Describe a process and AI builds the app. Your rules decide what it can change, and every run is on record.
          </p>

          {/* Buttons per brief */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C00000] hover:bg-[#8B0000] text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              <span>Book a demo</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="#how-it-works"
              onClick={handleScrollToHowItWorks}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#CCCCCC] bg-white text-[#1A1A1A] hover:bg-[#FEF5F5] hover:border-[#C00000] font-semibold text-sm transition-colors"
            >
              <span>See how it works</span>
            </a>
          </div>

          {/* Line under the buttons per brief */}
          <p className="text-xs text-[#555555] pt-1">
            Run on Kanta Cloud in Singapore, or in your own cloud with your own AI models.
          </p>
        </div>

        {/* --- LOWER VISUAL GRID (Robot + Imagine AI Builder + Rules Cards) --- */}
        <div className="max-w-6xl mx-auto px-2 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
          
          {/* LEFT: Imagine AI Builder Card ("Imagine's chat beside the plan it wrote") */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-3">
            <div className="w-full max-w-sm bg-white rounded-2xl p-4 border border-[#CCCCCC] shadow-md text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#FEF5F5] text-[#C00000] flex items-center justify-center font-bold text-xs">
                    ✦
                  </div>
                  <span className="font-bold text-xs text-[#1A1A1A]">Imagine App Builder</span>
                </div>
                <span className="text-[10px] bg-[#FEF5F5] text-[#C00000] font-semibold px-2 py-0.5 rounded-full border border-[#CCCCCC]/60">
                  Plan Mode
                </span>
              </div>
              
              <div className="mt-3 space-y-2.5 text-xs">
                <div className="bg-[#FEF5F5] rounded-xl p-3 text-[#1A1A1A]">
                  <p className="text-[11px] font-semibold text-[#C00000] mb-0.5">Brief submitted:</p>
                  <p className="text-xs italic leading-snug">
                    "Build a claims intake tracker. Claims over S$5,000 need supervisor approval..."
                  </p>
                </div>
                <div className="bg-white border border-[#CCCCCC] rounded-xl p-3 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs">
                    <CheckCircle2 size={13} />
                    <span>Plan generated with 3 safety rules</span>
                  </div>
                  <p className="text-[11px] text-[#555555] leading-snug">
                    Threshold checked on server. Staff cannot approve. Status changes traced.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature card below left */}
            <div className="w-full max-w-sm bg-white rounded-xl px-4 py-3 border border-[#CCCCCC] shadow-xs flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-[#FEF5F5] text-[#C00000] flex items-center justify-center shrink-0">
                <Shield size={16} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A1A1A]">Row-Level Security</h4>
                <p className="text-xs text-[#555555]">Permissions enforced in data, not browser</p>
              </div>
            </div>
          </div>

          {/* CENTER: Centered Robot Video with "Hi, I'm Kanta!" Speech Bubble */}
          <div className="lg:col-span-4 flex items-center justify-center py-2 lg:py-0">
            <RobotVideo />
          </div>

          {/* RIGHT: Rules that must hold + Owner sign-off card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-3">
            <div className="w-full max-w-sm bg-white rounded-2xl p-4 border border-[#CCCCCC] shadow-md text-left">
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
                <div className="w-6 h-6 rounded-md bg-[#FEF5F5] text-[#C00000] flex items-center justify-center">
                  <Lock size={13} />
                </div>
                <h3 className="font-bold text-xs text-[#1A1A1A]">Rules that must hold</h3>
              </div>
              
              <ul className="mt-3 space-y-2 text-xs text-[#555555]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C00000] mt-1.5 shrink-0" />
                  <span>Only supervisors approve claims &gt; S$5,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C00000] mt-1.5 shrink-0" />
                  <span>Every claim starts with status: <strong>Submitted</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C00000] mt-1.5 shrink-0" />
                  <span>Full run trace logged with timestamps</span>
                </li>
              </ul>
            </div>

            {/* Feature card below right */}
            <div className="w-full max-w-sm bg-white rounded-xl px-4 py-3 border border-[#CCCCCC] shadow-xs flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-[#FEF5F5] text-[#C00000] flex items-center justify-center shrink-0">
                <FileCode2 size={16} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1A1A1A]">Owner Approval Note</h4>
                <p className="text-xs text-[#555555]">AI pauses for sign-off before going live</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
