import React from 'react';
import { CrestiqLogo } from '../brand/CrestiqLogo';
import { ShieldAlert, Cookie, HelpCircle, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenCookieSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCookieSettings }) => {
  const { user } = useAuth();

  return (
    <footer className="bg-[#07090C] border-t border-[#1C2430] text-[#A7B0BD] text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand & Overview Column */}
          <div className="col-span-2">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="focus:outline-none focus:ring-2 focus:ring-[#246BFD] rounded py-1"
            >
              <CrestiqLogo variant="horizontal" theme="dark" size="md" />
            </button>
            <p className="mt-4 text-xs text-[#A7B0BD] max-w-sm leading-relaxed">
              Crestiqtrades delivers institutional-grade AI market analytics, quantitative order execution, and copy trading infrastructure. Dedicated to disciplined capital parameters and predictive analytics.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#A7B0BD]">
              <span className="px-2.5 py-1 rounded bg-[#11151B] border border-[#1C2430] text-white">
                Established 2022
              </span>
              <span className="px-2.5 py-1 rounded bg-[#11151B] border border-[#1C2430] text-white">
                Multi-Asset Coverage
              </span>
            </div>
          </div>

          {/* Column 1: Platform & Workspace */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">Platform</h3>
            <ul className="mt-4 space-y-2.5 text-xs">
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
                  onClick={() => onNavigate('/dashboard')}
                  className="hover:text-white transition-colors text-left font-medium text-[#4A8DFF]"
                >
                  Client Dashboard
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/portfolio')}
                  className="hover:text-white transition-colors text-left"
                >
                  Portfolio Holdings
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/wallet')}
                  className="hover:text-white transition-colors text-left"
                >
                  Treasury &amp; Funding
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company & Support */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">Company</h3>
            <ul className="mt-4 space-y-2.5 text-xs">
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
            <h3 className="text-xs font-bold tracking-wider text-white uppercase">Legal</h3>
            <ul className="mt-4 space-y-2.5 text-xs">
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
                  className="hover:text-white transition-colors text-left text-[#F5A623] hover:underline"
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
                  className="inline-flex items-center gap-1.5 text-[#4A8DFF] hover:underline transition-colors text-left text-xs font-semibold"
                >
                  <Cookie className="w-3.5 h-3.5" />
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Risk Awareness Statement */}
        <div className="mt-12 pt-8 border-t border-[#1C2430] text-xs leading-relaxed text-[#A7B0BD]">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <ShieldAlert className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white">Mandatory Risk Disclosure:</span> Trading foreign exchange, digital assets, equities, and derivative contracts involves substantial risk of loss and is not suitable for every investor. Quantitative models and artificial intelligence tools provide statistical analysis and algorithmic automation but do not guarantee profitable outcomes or eliminate market volatility. You should never allocate funds you cannot afford to lose. Please review our full{' '}
              <button
                type="button"
                onClick={() => onNavigate('/risk-disclosure')}
                className="text-[#F5A623] hover:underline font-bold inline"
              >
                Risk Disclosure Statement
              </button>{' '}
              prior to engaging in platform activity.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#1C2430] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#677284]">
          <p>© 2022–{new Date().getFullYear()} Crestiqtrades. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Institutional Quantitative Infrastructure</span>
            <span className="text-[#1C2430]">|</span>
            <span>Security-First Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
