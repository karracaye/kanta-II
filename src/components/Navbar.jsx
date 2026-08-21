import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onBookDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-1.5'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Kanta Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/assets/logo/Lockup-Color@2x.png"
              alt="Kanta Logo"
              className="h-12 sm:h-14 w-auto transform group-hover:scale-105 transition-transform duration-300 object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm font-semibold text-slate-800 hover:text-[#D83025] transition-colors"
            >
              Features
            </a>
            <a
              href="#integrations"
              className="text-sm font-semibold text-slate-800 hover:text-[#D83025] transition-colors"
            >
              Integrations
            </a>
            <a
              href="#use-cases"
              className="text-sm font-semibold text-slate-800 hover:text-[#D83025] transition-colors"
            >
              Use Cases
            </a>
          </nav>

          {/* Circle / Pill Theme Contact Us CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onBookDemo}
              className="bg-[#D83025] hover:bg-[#C0261D] text-white px-7 py-2.5 rounded-full font-bold text-sm border-2 border-red-600 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#D83025] transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 hover:text-[#D83025] py-1"
          >
            Features
          </a>
          <a
            href="#integrations"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 hover:text-[#D83025] py-1"
          >
            Integrations
          </a>
          <a
            href="#use-cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 hover:text-[#D83025] py-1"
          >
            Use Cases
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookDemo();
            }}
            className="w-full text-center bg-[#D83025] text-white px-6 py-3 rounded-full font-bold text-sm border-2 border-red-600 block shadow-md"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
