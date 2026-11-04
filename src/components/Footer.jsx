import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer({ onBookDemo }) {
  return (
    <footer className="bg-gradient-to-br from-[#800A0A] via-[#5C0606] to-[#2B0303] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-red-900/60 font-sans relative overflow-hidden text-center md:text-left">
      
      {/* Subtle decorative grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/15">
          
          {/* Brand & Tagline Col */}
          <div className="md:col-span-5 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-block hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/logo/Lockup-Color@2x.png"
                alt="Kanta Logo"
                className="h-11 sm:h-12 w-auto object-contain brightness-0 invert drop-shadow-md"
              />
            </Link>
            <p className="text-red-100/90 text-xs sm:text-sm max-w-sm font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
              AI-native workflows for regulated organisations. Describe a process and AI builds the app, with your rules enforced and every AI step traced.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-red-200/90 pt-1">
              <a
                href="mailto:hello@kanta.ai"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-amber-300" />
                <span>hello@kanta.ai</span>
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/company/kanta-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin size={14} className="text-amber-300" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Links Column 1: Platform */}
          <div className="md:col-span-2 space-y-3 text-xs flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-extrabold text-amber-300 font-['Outfit'] uppercase tracking-wider text-xs">
              Platform
            </h4>
            <ul className="space-y-2 text-red-100/90 font-medium">
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="/#why-kanta" className="hover:text-white transition-colors">Why Kanta</a></li>
              <li><a href="/#platform" className="hover:text-white transition-colors">One platform</a></li>
              <li><a href="/#audit" className="hover:text-white transition-colors">AI you can audit</a></li>
              <li><a href="/#documents" className="hover:text-white transition-colors">Documents</a></li>
              <li><a href="/#deployment" className="hover:text-white transition-colors">Deployment</a></li>
            </ul>
          </div>

          {/* Links Column 2: Solutions */}
          <div className="md:col-span-3 space-y-3 text-xs flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-extrabold text-amber-300 font-['Outfit'] uppercase tracking-wider text-xs">
              Solutions & Trust
            </h4>
            <ul className="space-y-2 text-red-100/90 font-medium">
              <li>
                <Link to="/solutions/insurance-claims" className="hover:text-white transition-colors">
                  Insurance claims
                </Link>
              </li>
              <li>
                <Link to="/solutions/invoice-approval" className="hover:text-white transition-colors">
                  Invoice approval
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-white transition-colors">
                  Security & AI governance
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Insights & Case Study
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Access */}
          <div className="md:col-span-2 space-y-3 text-xs flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-extrabold text-amber-300 font-['Outfit'] uppercase tracking-wider text-xs">
              Access
            </h4>
            <ul className="space-y-2.5 text-red-100/90 font-medium">
              <li>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#D83025] hover:bg-orange-50 font-bold transition-all shadow-sm"
                >
                  <span>Book a demo</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="https://apps.kanta.ai/studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-red-200"
                >
                  <span>Sign in (Studio)</span>
                  <ArrowUpRight size={12} className="opacity-70" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Ribbon */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-red-200/80 gap-3 text-center sm:text-left">
          <p>© 2026 Kanta AI Pte Ltd. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 text-red-100/90">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
