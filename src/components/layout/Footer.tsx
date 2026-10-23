import React from 'react';
import { CrestiqLogo } from '../brand/CrestiqLogo';
import { ShieldAlert, Cookie, HelpCircle, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenCookieSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCookieSettings }) => {
  return (
    <footer className="bg-[#070A11] border-t border-[#1E293B] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand & Overview Column */}
          <div className="col-span-2">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded py-1"
            >
              <CrestiqLogo variant="horizontal" theme="dark" size="md" />
            </button>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Crestiqtrades delivers institutional-grade AI market analytics, quantitative order execution, and copy trading infrastructure. Dedicated to disciplined capital parameters and predictive analytics.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="px-2.5 py-1 rounded bg-[#111827] border border-[#1E293B] text-slate-300">
                Established 2022
              </span>
              <span className="px-2.5 py-1 rounded bg-[#111827] border border-[#1E293B] text-slate-300">
                Multi-Asset Coverage
              </span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-slate-200 uppercase">Platform</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/ai-trading')}
                  className="hover:text-white transition-colors text-left"
                >
                  AI Trading
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/copy-trading')}
                  className="hover:text-white transition-colors text-left"
                >
                  Copy Trading
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/markets')}
                  className="hover:text-white transition-colors text-left"
                >
                  Markets Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/')}
                  className="hover:text-white transition-colors text-left"
                >
                  Platform Features
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company & Support */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-slate-200 uppercase">Company</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Our Company
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/support')}
                  className="hover:text-white transition-colors text-left"
                >
                  Support Desk
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/support')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Assistance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Governance */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-slate-200 uppercase">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/risk-disclosure')}
                  className="hover:text-white transition-colors text-left text-amber-400/90 hover:text-amber-300"
                >
                  Risk Disclosure
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/cookies')}
                  className="hover:text-white transition-colors text-left"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCookieSettings}
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors text-left text-xs font-medium"
                >
                  <Cookie className="w-3.5 h-3.5" />
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Risk Awareness Statement */}
        <div className="mt-12 pt-8 border-t border-[#1E293B] text-xs leading-relaxed text-slate-500">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#0E1526] border border-[#1E293B]">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-300">Mandatory Risk Disclosure:</span> Trading foreign exchange, digital assets, equities, and derivative contracts involves substantial risk of loss and is not suitable for every investor. Quantitative models and artificial intelligence tools provide statistical analysis and algorithmic automation but do not guarantee profitable outcomes or eliminate market volatility. You should never allocate funds you cannot afford to lose. Please review our full{' '}
              <button
                type="button"
                onClick={() => onNavigate('/risk-disclosure')}
                className="text-amber-400 hover:underline font-medium inline"
              >
                Risk Disclosure Statement
              </button>{' '}
              prior to engaging in platform activity.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2022–{new Date().getFullYear()} Crestiqtrades. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Platform Foundation Phase 1</span>
            <span className="text-slate-600">|</span>
            <span>Security-First Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
