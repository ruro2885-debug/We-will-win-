import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieConsentModal } from './components/cookie/CookieConsentModal';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { MarketsPage } from './pages/MarketsPage';
import { AiTradingPage } from './pages/AiTradingPage';
import { CopyTradingPage } from './pages/CopyTradingPage';
import { SupportPage } from './pages/SupportPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { RiskDisclosurePage } from './pages/RiskDisclosurePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { AuthPage } from './pages/AuthPages';
import { AdminEntryPage } from './pages/AdminEntryPage';
import { updateDocumentMeta } from './utils/seo';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isCookieModalForced, setIsCookieModalForced] = useState<boolean>(false);

  // Sync document title, meta descriptions, and canonical tags
  useEffect(() => {
    updateDocumentMeta(currentPath);
  }, [currentPath]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCookiePreferences = () => {
    setIsCookieModalForced(true);
  };

  // Special Concealed Administrator Entry Route
  if (currentPath === '/admin') {
    return (
      <div className="min-h-screen bg-[#070A11] text-white">
        <AdminEntryPage onNavigate={navigateTo} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-[#E2E8F0]">
      {/* Public Header Navigation (Zero admin exposure) */}
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />

      {/* Main View Router */}
      <div className="flex-1">
        {currentPath === '/' && <LandingPage onNavigate={navigateTo} />}
        {currentPath === '/about' && <AboutPage onNavigate={navigateTo} />}
        {currentPath === '/markets' && <MarketsPage onNavigate={navigateTo} />}
        {currentPath === '/ai-trading' && <AiTradingPage onNavigate={navigateTo} />}
        {currentPath === '/copy-trading' && <CopyTradingPage onNavigate={navigateTo} />}
        {currentPath === '/support' && <SupportPage />}
        {currentPath === '/privacy' && <PrivacyPage onNavigate={navigateTo} />}
        {currentPath === '/terms' && <TermsPage onNavigate={navigateTo} />}
        {currentPath === '/risk-disclosure' && <RiskDisclosurePage onNavigate={navigateTo} />}
        {currentPath === '/cookies' && (
          <CookiePolicyPage
            onNavigate={navigateTo}
            onOpenCookieSettings={handleOpenCookiePreferences}
          />
        )}
        {currentPath === '/login' && <AuthPage mode="login" onNavigate={navigateTo} />}
        {currentPath === '/register' && <AuthPage mode="register" onNavigate={navigateTo} />}
      </div>

      {/* Public Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenCookieSettings={handleOpenCookiePreferences}
      />

      {/* Global Custom Cookie Consent Experience */}
      <CookieConsentModal
        forceOpen={isCookieModalForced}
        onClose={() => setIsCookieModalForced(false)}
      />
    </div>
  );
}
