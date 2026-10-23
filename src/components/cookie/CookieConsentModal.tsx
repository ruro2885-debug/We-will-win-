import React, { useState, useEffect } from 'react';
import {
  parseConsentRecord,
  buildAcceptAllRecord,
  buildRejectAllRecord,
  buildCustomRecord,
  CONSENT_STORAGE_KEY,
  CookieConsentRecord,
} from '../../utils/consentManager';
import { Shield, Check, X, Sliders, ChevronLeft } from 'lucide-react';

interface CookieConsentModalProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export const CookieConsentModal: React.FC<CookieConsentModalProps> = ({
  forceOpen = false,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState<'initial' | 'customize'>('initial');
  
  // Customization checkboxes
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    if (forceOpen) {
      const stored = parseConsentRecord(localStorage.getItem(CONSENT_STORAGE_KEY));
      if (stored) {
        setAnalyticsEnabled(stored.categories.analytics);
        setMarketingEnabled(stored.categories.marketing);
      }
      setIsVisible(true);
      return;
    }

    const stored = parseConsentRecord(localStorage.getItem(CONSENT_STORAGE_KEY));
    if (!stored || !stored.hasConsented) {
      // Show consent banner on first visit
      setIsVisible(true);
    }
  }, [forceOpen]);

  const saveAndExit = (record: CookieConsentRecord) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    setIsVisible(false);
    setViewMode('initial');
    if (onClose) onClose();
    // Dispatch custom event so any listeners update immediately
    window.dispatchEvent(new CustomEvent('crestiq_consent_updated', { detail: record }));
  };

  const handleAcceptAll = () => {
    const record = buildAcceptAllRecord();
    saveAndExit(record);
  };

  const handleRejectAll = () => {
    const record = buildRejectAllRecord();
    saveAndExit(record);
  };

  const handleSaveCustom = () => {
    const record = buildCustomRecord({
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });
    saveAndExit(record);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-heading"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6 bg-slate-950/70"
    >
      {/* Light, crisp, solid panel with zero glassmorphism and clear text contrast */}
      <div className="w-full max-w-xl bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all duration-200">
        
        {/* Header bar */}
        <div className="px-6 pt-6 pb-2 flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 shrink-0 border border-blue-100">
            <Shield className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h2 id="cookie-heading" className="text-xl font-bold tracking-tight text-slate-900">
              We value your privacy
            </h2>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">
              Crestiqtrades uses essential technologies to ensure secure navigation, authentication readiness, and session reliability. With your permission, we also utilize optional analytics and marketing tools to analyze usage patterns and refine our trading intelligence workflows.
            </p>
          </div>
        </div>

        {/* Dynamic content view */}
        {viewMode === 'initial' ? (
          <div className="px-6 py-5">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
              {/* Reject All - clearly visible, not hidden */}
              <button
                type="button"
                onClick={handleRejectAll}
                className="order-3 sm:order-1 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Reject All
              </button>

              {/* Customize */}
              <button
                type="button"
                onClick={() => setViewMode('customize')}
                className="order-2 sm:order-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Sliders className="w-4 h-4 text-slate-500" aria-hidden="true" />
                Customize
              </button>

              {/* Accept All */}
              <button
                type="button"
                onClick={handleAcceptAll}
                className="order-1 sm:order-3 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Accept All
              </button>
            </div>
            
            <div className="mt-4 text-center sm:text-left">
              <a
                href="/cookies"
                className="text-xs text-slate-500 hover:text-blue-600 underline underline-offset-2 transition-colors"
              >
                Read our full Cookie Policy &amp; Data Categories
              </a>
            </div>
          </div>
        ) : (
          /* Customize View */
          <div className="px-6 py-4">
            <div className="space-y-4 my-2 max-h-[60vh] overflow-y-auto pr-1">
              
              {/* Necessary Category */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-slate-900">Strictly Necessary</span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Essential for the core platform to function, including security verification, session routing, and anti-fraud monitoring. Cannot be switched off.
                  </p>
                </div>
                <div className="pt-1">
                  <div className="w-9 h-5 bg-blue-600 rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-90">
                    <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Category */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                <div>
                  <span className="font-semibold text-sm text-slate-900">Analytics &amp; Performance</span>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Allows us to aggregate telemetry on page responsiveness, execution latency metrics, and user journeys to improve platform speed and usability.
                  </p>
                </div>
                <div className="pt-1">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={analyticsEnabled}
                    onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                    className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      analyticsEnabled ? 'bg-blue-600' : 'bg-slate-300'
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        analyticsEnabled ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Marketing Category */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start justify-between gap-4">
                <div>
                  <span className="font-semibold text-sm text-slate-900">Marketing &amp; Campaigns</span>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Helps measure campaign effectiveness and deliver relevant educational content regarding platform features and market webinars.
                  </p>
                </div>
                <div className="pt-1">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={marketingEnabled}
                    onClick={() => setMarketingEnabled(!marketingEnabled)}
                    className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      marketingEnabled ? 'bg-blue-600' : 'bg-slate-300'
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        marketingEnabled ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Customization Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
              <button
                type="button"
                onClick={() => setViewMode('initial')}
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to options
              </button>

              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
