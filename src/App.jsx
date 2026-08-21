import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen.jsx';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import ParallaxFeatures from './components/ParallaxFeatures.jsx';
import ProblemSolutionSection from './components/ProblemSolutionSection.jsx';
import UnifiedPlatformSection from './components/UnifiedPlatformSection.jsx';
import WorkflowStudioSection from './components/WorkflowStudioSection.jsx';
import EmbeddedAgentSection from './components/EmbeddedAgentSection.jsx';
import IntegrationsSection from './components/IntegrationsSection.jsx';
import UseCasesSection from './components/UseCasesSection.jsx';
import GetStartedCTA from './components/GetStartedCTA.jsx';
import Footer from './components/Footer.jsx';
import DemoModal from './components/DemoModal.jsx';

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
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden relative">
      {/* Starting Animated SplashScreen (Triggers on refresh/load) */}
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

      <Navbar onBookDemo={handleOpenDemo} />
      <main>
        {/* 1. Design 2 Top Hero Page */}
        <HeroSection onBookDemo={handleOpenDemo} />

        {/* 2. Red Banner (Build your app in minutes) */}
        <ParallaxFeatures onBookDemo={handleOpenDemo} />

        {/* 3. Problem & Solution Section (Your AI stack is too fragmented) */}
        <ProblemSolutionSection onBookDemo={handleOpenDemo} />

        {/* 4. Unified Stack (Build AI Applications On One Platform) */}
        <UnifiedPlatformSection onBookDemo={handleOpenDemo} />

        {/* 5. Workflow Studio ("Ready for any automation" & Node Library - DIRECTLY AFTER UNIFIED STACK) */}
        <WorkflowStudioSection />

        {/* 6. Embedded AI Agent (Add AI to your product in one line) */}
        <EmbeddedAgentSection />

        {/* 7. Integrations & Stack (Works with your stack) */}
        <IntegrationsSection />

        {/* 8. Enterprise Use Cases (Built for real workflows) */}
        <UseCasesSection onBookDemo={handleOpenDemo} />

        {/* 9. Get Started CTA (Ready to unify your AI stack?) */}
        <GetStartedCTA onBookDemo={handleOpenDemo} />
      </main>

      <Footer onBookDemo={handleOpenDemo} />

      {/* Book Demo Scheduling Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
