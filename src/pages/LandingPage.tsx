import React from 'react';
import { HeroSection } from '../components/landing/HeroSection';
import { CredibilitySection } from '../components/landing/CredibilitySection';
import { AiTradingSection } from '../components/landing/AiTradingSection';
import { CopyTradingSection } from '../components/landing/CopyTradingSection';
import { MarketsSection } from '../components/landing/MarketsSection';
import { PlatformFeaturesSection } from '../components/landing/PlatformFeaturesSection';
import { HowItWorksSection } from '../components/landing/HowItWorksSection';
import { RiskAwarenessSection } from '../components/landing/RiskAwarenessSection';
import { FaqSection } from '../components/landing/FaqSection';
import { FinalCtaSection } from '../components/landing/FinalCtaSection';

interface LandingPageProps {
  onNavigate: (path: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <main id="main-content" className="w-full">
      <HeroSection onNavigate={onNavigate} />
      <CredibilitySection />
      <AiTradingSection onNavigate={onNavigate} />
      <CopyTradingSection onNavigate={onNavigate} />
      <MarketsSection onNavigate={onNavigate} />
      <PlatformFeaturesSection onNavigate={onNavigate} />
      <HowItWorksSection onNavigate={onNavigate} />
      <RiskAwarenessSection onNavigate={onNavigate} />
      <FaqSection />
      <FinalCtaSection onNavigate={onNavigate} />
    </main>
  );
};
