import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

export default function Navbar({ onBookDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  const handleAnchorClick = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-white/80 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Kanta Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/assets/logo/Lockup-Color@2x.png"
              alt="Kanta Logo"
              className="h-10 sm:h-12 w-auto transform group-hover:scale-105 transition-transform duration-300 object-contain"
            />
          </Link>

          {/* Desktop Nav Links per Brief */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-semibold text-slate-800">
            <a
              href="/#how-it-works"
              onClick={(e) => handleAnchorClick(e, 'how-it-works')}
              className="hover:text-[#B92025] transition-colors py-1"
            >
              How it works
            </a>

            {/* Solutions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => setSolutionsOpen(true)}
                className="flex items-center gap-1 hover:text-[#B92025] transition-colors py-1 cursor-pointer focus:outline-hidden"
              >
                <span>Solutions</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-[#B92025]' : ''}`}
                />
              </button>

              {solutionsOpen && (
                <div
                  onMouseLeave={() => setSolutionsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-red-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <Link
                    to="/solutions/insurance-claims"
                    className="block px-4 py-2.5 hover:bg-red-50/70 transition-colors"
                  >
                    <div className="font-bold text-slate-900 text-sm">Insurance claims</div>
                    <div className="text-xs text-slate-500 font-medium">Claims intake with approval rules</div>
                  </Link>
                  <Link
                    to="/solutions/invoice-approval"
                    className="block px-4 py-2.5 hover:bg-red-50/70 transition-colors border-t border-slate-100"
                  >
                    <div className="font-bold text-slate-900 text-sm">Invoice approval</div>
                    <div className="text-xs text-slate-500 font-medium">Invoice capture and approval</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/security"
              className={`hover:text-[#B92025] transition-colors py-1 ${location.pathname === '/security' ? 'text-[#B92025] font-semibold' : ''}`}
            >
              Security
            </Link>

            <Link
              to="/blog"
              className={`hover:text-[#B92025] transition-colors py-1 ${location.pathname.startsWith('/blog') ? 'text-[#B92025] font-semibold' : ''}`}
            >
              Blog
            </Link>

            <a
              href="https://apps.kanta.ai/studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#B92025] transition-colors flex items-center gap-1 py-1"
            >
              <span>Sign in</span>
              <ExternalLink size={13} className="opacity-70" />
            </a>
          </nav>

          {/* Book a demo Button per Brief with Kanta Logo Red */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/demo"
              className="bg-[#B92025] hover:opacity-90 text-white px-7 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md shadow-red-900/15 hover:shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Book a demo</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              to="/demo"
              className="bg-[#B92025] text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-sm shadow-red-900/15"
            >
              Book a demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#B92025] transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-5 pt-4 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200 text-left font-sans">
          <a
            href="/#how-it-works"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleAnchorClick(e, 'how-it-works');
            }}
            className="block text-sm font-semibold text-slate-800 hover:text-[#B92025] py-2 border-b border-slate-100"
          >
            How it works
          </a>
          
          <div className="py-2 border-b border-slate-100 space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-[#B92025]">Solutions</div>
            <Link
              to="/solutions/insurance-claims"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-[#B92025] pl-2 py-1"
            >
              Insurance claims
            </Link>
            <Link
              to="/solutions/invoice-approval"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-[#B92025] pl-2 py-1"
            >
              Invoice approval
            </Link>
          </div>

          <Link
            to="/security"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#B92025] py-2 border-b border-slate-100"
          >
            Security
          </Link>

          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-800 hover:text-[#B92025] py-2 border-b border-slate-100"
          >
            Blog
          </Link>

          <a
            href="https://apps.kanta.ai/studio"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-semibold text-slate-600 hover:text-[#B92025] py-2"
          >
            Sign in (Studio)
          </a>
        </div>
      )}
    </header>
  );
}
