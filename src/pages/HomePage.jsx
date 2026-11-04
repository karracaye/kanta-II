import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import ParallaxFeatures from '../components/ParallaxFeatures.jsx';
import HowItWorksSection from '../components/home/HowItWorksSection.jsx';
import WhyKantaSection from '../components/home/WhyKantaSection.jsx';
import OnePlatformSection from '../components/home/OnePlatformSection.jsx';
import AuditSection from '../components/home/AuditSection.jsx';
import DocumentsSection from '../components/home/DocumentsSection.jsx';
import UseCasesSection from '../components/home/UseCasesSection.jsx';
import DeploymentSection from '../components/home/DeploymentSection.jsx';
import ClosingCTASection from '../components/home/ClosingCTASection.jsx';

export default function HomePage({ onBookDemo }) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to anchor if hash exists
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      {/* 1. Top Hero Page with walking robot & speech bubble */}
      <HeroSection onBookDemo={onBookDemo} />

      {/* 2. Red Banner (Build your app in minutes) */}
      <ParallaxFeatures onBookDemo={onBookDemo} />

      {/* 3. How it works (#how-it-works) */}
      <HowItWorksSection />

      {/* 4. Why Kanta (#why-kanta) */}
      <WhyKantaSection />

      {/* 5. One Platform (#platform) */}
      <OnePlatformSection />

      {/* 6. AI you can audit (#audit) */}
      <AuditSection />

      {/* 7. Documents (#documents) */}
      <DocumentsSection />

      {/* 8. Use cases (#use-cases) */}
      <UseCasesSection />

      {/* 9. Deployment (#deployment) */}
      <DeploymentSection />

      {/* 10. Closing CTA */}
      <ClosingCTASection />
    </main>
  );
}
