import React from 'react';

export default function Footer({ onBookDemo }) {
  return (
    <footer className="bg-gradient-to-br from-[#800A0A] via-[#5C0606] to-[#2B0303] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-red-900/60 font-sans relative overflow-hidden text-center md:text-left">
      
      {/* Subtle decorative grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/15">
          
          {/* Brand & Tagline Col (Bigger Logo on Darker Red Background) */}
          <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="inline-block hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/logo/Lockup-Color@2x.png"
                alt="Kanta Logo"
                className="h-12 sm:h-14 w-auto object-contain brightness-0 invert drop-shadow-md"
              />
            </a>
            <p className="text-red-100/90 text-xs max-w-sm font-medium leading-relaxed">
              Kanta is a unified AI workflow orchestrator that empowers users to automate intelligent tasks flexibly, securely and at scale.
            </p>
          </div>

          {/* Nav Col 1: Products */}
          <div className="space-y-3 text-xs flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-extrabold text-amber-300 font-['Outfit'] uppercase tracking-wider text-xs">
              Products
            </h4>
            <ul className="space-y-2 text-red-100/90 font-medium">
              <li><a href="#features" className="hover:text-white transition-colors">Agentic Innovation</a></li>
              <li><a href="#embed-agent" className="hover:text-white transition-colors">AI Assistant</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Finance Intelligence</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Document Processing</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Item Matching</a></li>
            </ul>
          </div>

          {/* Nav Col 2: Resources */}
          <div className="space-y-3 text-xs flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-extrabold text-amber-300 font-['Outfit'] uppercase tracking-wider text-xs">
              Resources
            </h4>
            <ul className="space-y-2 text-red-100/90 font-medium">
              <li><a href="#features" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Nav Col 3: Company */}
          <div className="space-y-3 text-xs flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-extrabold text-amber-300 font-['Outfit'] uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="space-y-2 text-red-100/90 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">News</a></li>
              <li><button onClick={onBookDemo} className="hover:text-white transition-colors cursor-pointer">Careers</button></li>
              <li><button onClick={onBookDemo} className="hover:text-white transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>

          {/* Nav Col 4: Legal */}
          <div className="space-y-3 text-xs flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-extrabold text-amber-300 font-['Outfit'] uppercase tracking-wider text-xs">
              Legal
            </h4>
            <ul className="space-y-2 text-red-100/90 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Ribbon */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-red-200/80 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Kanta AI Pte Ltd. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 text-red-100/90">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
