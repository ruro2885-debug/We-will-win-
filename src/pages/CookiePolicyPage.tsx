import React from 'react';
import { Cookie, Shield, Sliders, ArrowLeft } from 'lucide-react';

interface CookiePolicyPageProps {
  onNavigate: (path: string) => void;
  onOpenCookieSettings: () => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({
  onNavigate,
  onOpenCookieSettings,
}) => {
  return (
    <div className="py-16 md:py-24 bg-[#0B0F19] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </button>

        <div className="border-b border-[#1E293B] pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161F33] border border-[#1E293B] text-xs font-mono font-medium text-sky-400 mb-4">
            <Cookie className="w-3.5 h-3.5" />
            <span>Privacy &amp; Tracking Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Cookie Policy
          </h1>
          <p className="mt-3 text-sm text-slate-400 font-mono">
            Version 1.0.0 // Scope: Web Platform // Crestiqtrades
          </p>
        </div>

        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">1. What Are Cookies and Local Storage?</h2>
            <p>
              Cookies and local browser storage are small text files or key-value entries stored directly on your computer or mobile device when you access our website. They enable the web platform to remember your authentication state, security settings, and interface preferences over time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">2. Cookie Categories Used by Crestiqtrades</h2>
            
            {/* Category 1: Strictly Necessary */}
            <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B] space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">Category A: Strictly Necessary Technologies</h3>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-blue-950 text-sky-400 border border-blue-900">
                  Always Active
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                These technologies are required for core security and navigation functionality. They manage cryptographic session tokens, protect against Cross-Site Request Forgery (CSRF), enforce rate limiting against brute-force attacks, and preserve your cookie consent choices (<code className="text-sky-300 font-mono">crestiq_cookie_consent_v1</code>). Because the site cannot operate safely without them, they cannot be switched off.
              </p>
            </div>

            {/* Category 2: Analytics & Performance */}
            <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B] space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">Category B: Analytics &amp; Performance (Optional)</h3>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-[#161F33] text-slate-300 border border-[#334155]">
                  Requires Explicit Consent
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                These technologies allow us to monitor aggregated interface response times, evaluate rendering speeds, and analyze user journeys to improve navigational ergonomics. They are disabled by default until you grant affirmative consent via "Accept All" or through the "Customize" interface.
              </p>
            </div>

            {/* Category 3: Marketing & Campaigns */}
            <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B] space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">Category C: Marketing &amp; Campaigns (Optional)</h3>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-[#161F33] text-slate-300 border border-[#334155]">
                  Requires Explicit Consent
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Used to determine the reach of platform educational webinars and announcement campaigns. They do not store directly identifiable personal records. Disabled by default unless approved.
              </p>
            </div>

          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">3. Managing and Changing Your Preferences</h2>
            <p>
              You maintain total control over your cookie choices at all times. You can modify or withdraw your consent by clicking the button below or by using the permanent "Cookie Preferences" link located in the footer of every page on Crestiqtrades:
            </p>
            <div>
              <button
                type="button"
                onClick={onOpenCookieSettings}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
              >
                <Sliders className="w-4 h-4" />
                Open Cookie Preferences Modal
              </button>
            </div>
            <p className="text-xs text-slate-400 pt-2">
              Alternatively, you can clear all stored site data and cookies directly through your browser settings menu.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">4. Verification &amp; Contact</h2>
            <p>
              If you have inquiries regarding our data storage practices or wish to review technical keys, please lodge a ticket with our{' '}
              <button
                type="button"
                onClick={() => onNavigate('/support')}
                className="text-sky-400 hover:underline font-semibold"
              >
                Support Desk
              </button>
              .
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
