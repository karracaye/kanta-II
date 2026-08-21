import React from 'react';

export default function ParallaxFeatures() {
  return (
    <div className="w-full font-sans">
      {/* --- FLAT BANNER WITH KANTA LOGO GRADIENT THEME --- */}
      <section className="w-full bg-gradient-to-r from-[#D83025] via-[#FF5722] to-[#C0261D] text-white py-14 px-4 sm:px-6 lg:px-8 text-center shadow-none relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-2 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight font-['Outfit']">
            Build your app in <span className="text-[#FBBF24] italic">minutes.</span>
          </h2>
          <p className="text-lg sm:text-xl font-bold text-orange-100 tracking-wide font-['Outfit']">
            Autonomous AI Platform
          </p>
        </div>
      </section>
    </div>
  );
}
