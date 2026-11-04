import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import DemoModal from './components/DemoModal.jsx';
import HomePage from './pages/HomePage.jsx';
import DemoPage from './pages/DemoPage.jsx';
import InsuranceClaimsPage from './pages/InsuranceClaimsPage.jsx';
import InvoiceApprovalPage from './pages/InvoiceApprovalPage.jsx';
import SecurityPage from './pages/SecurityPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPostPage from './pages/BlogPostPage.jsx';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    // Disable automatic browser scroll restoration on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Always force scroll to top on refresh/load
    window.scrollTo(0, 0);
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
    window.scrollTo(0, 0);
  };

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden relative font-sans">
        {/* Starting Animated SplashScreen (matching kanta-ii.vercel.app) */}
        {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

        <Navbar onBookDemo={handleOpenDemo} />
        
        <Routes>
          <Route path="/" element={<HomePage onBookDemo={handleOpenDemo} />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/solutions/insurance-claims" element={<InsuranceClaimsPage />} />
          <Route path="/solutions/invoice-approval" element={<InvoiceApprovalPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/ai-built-claims-app" element={<BlogPostPage />} />
        </Routes>

        <Footer onBookDemo={handleOpenDemo} />

        {/* Book Demo Scheduling Modal */}
        <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
      </div>
    </BrowserRouter>
  );
}
