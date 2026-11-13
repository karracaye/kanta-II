import React from 'react';

export default function ParallaxFeatures() {
  return (
    <div className="w-full font-sans">
      {/* --- BANNER WITH OFFICIAL KANTA LOGO RED DOMINANT GRADIENT --- */}
      <section className="w-full bg-[#B92025] text-white py-14 px-4 sm:px-6 lg:px-8 text-center shadow-none relative overflow-hidden">
        {/* Subtle radial ambient highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-2 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight font-['Outfit'] drop-shadow-xs">
            Build your app in <span className="text-[#FBB03C] italic">minutes.</span>
          </h2>
          <p className="text-lg sm:text-xl font-bold text-red-100 tracking-wide font-['Outfit']">
            Autonomous AI Platform
          </p>
        </div>
      </section>
    </div>
  );
}
