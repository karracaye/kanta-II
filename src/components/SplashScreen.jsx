import React, { useState, useEffect } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [chatStep, setChatStep] = useState(1); // 1: msg1, 2: msg2
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Message 2 appears at 1.0s
    const timer2 = setTimeout(() => {
      setChatStep(2);
    }, 1000);

    // Progress bar 0% -> 100% over ~2.5 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 120);

    // Trigger fade-out animation at 2.5s
    const timerFade = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete callback at 3.0s total
    const timerComplete = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000);

    return () => {
      clearTimeout(timer2);
      clearTimeout(timerFade);
      clearTimeout(timerComplete);
      clearInterval(interval);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-all duration-700 font-sans p-4 ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Radial Glow */}
      <div className="absolute w-[450px] h-[450px] bg-red-400/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-md w-full px-4">
        
        {/* KANTA LOGO AT THE VERY TOP OF THE CHAT */}
        <div className="flex flex-col items-center space-y-2 animate-in zoom-in-90 duration-500">
          <img
            src="/assets/logo/Lockup-Color@2x.png"
            alt="Kanta Logo"
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-md"
          />
          <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest block font-mono">
            Autonomous AI Platform
          </span>
        </div>

        {/* Kanta Bot Chat Speech Dialogue Row */}
        <div className="w-full space-y-3">
          
          {/* Bot Chat Message 1 with Uploaded 2D Robot Icon */}
          <div className="flex items-start gap-3 text-left animate-in fade-in slide-in-from-bottom-2 duration-300">
            <img
              src="/assets/logo/robot-happy.png"
              alt="Kanta 2D Robot"
              className="w-10 h-10 object-contain shrink-0 mt-1 drop-shadow-md rounded-full animate-bounce"
            />
            <div className="bg-white border border-slate-200/90 text-slate-800 p-4 sm:p-5 rounded-3xl rounded-tl-xs shadow-xl font-['Outfit'] flex-1">
              <p className="text-sm sm:text-base font-semibold">
                Hi! Initializing your Kanta AI workspace...
              </p>
            </div>
          </div>

          {/* Bot Chat Message 2 with Uploaded 2D Robot Icon */}
          {chatStep >= 2 && (
            <div className="flex items-start gap-3 text-left animate-in fade-in slide-in-from-bottom-2 duration-300">
              <img
                src="/assets/logo/robot-happy.png"
                alt="Kanta 2D Robot"
                className="w-10 h-10 object-contain shrink-0 mt-1 drop-shadow-md rounded-full animate-pulse"
              />
              <div className="bg-red-50 border border-red-100 text-[#B92025] p-4 rounded-3xl rounded-tl-xs shadow-md font-bold text-xs sm:text-sm flex items-center gap-2 flex-1">
                <CheckCircle2 size={16} className="text-[#B92025] shrink-0" />
                <span>Platform online & ready! Welcome to Kanta.</span>
              </div>
            </div>
          )}

        </div>

        {/* Progress Loading Bar */}
        <div className="w-48 bg-slate-100 rounded-full h-1.5 overflow-hidden border border-slate-200 shadow-inner mt-2">
          <div
            className="h-full bg-[#B92025] transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <span className="text-[10px] font-mono text-slate-500 font-bold tracking-wider">
          Loading Kanta Engine... {progress}%
        </span>

      </div>
    </div>
  );
}
