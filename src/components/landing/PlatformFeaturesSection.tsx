import React from 'react';
import {
  BrainCircuit,
  BarChart2,
  Wallet,
  ReceiptText,
  UserCheck,
  Headphones,
  Sliders,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface PlatformFeaturesSectionProps {
  onNavigate: (path: string) => void;
}

export const PlatformFeaturesSection: React.FC<PlatformFeaturesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#0E1526] border-y border-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            System Capabilities
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Integrated trading suite. Engineered for high-stakes precision.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every component in Crestiqtrades works together—from signal generation to position settlement and audit ledgers—designed to ensure total operational visibility.
          </p>
        </div>

        {/* Varied Layout: Feature Showcase with asymmetric composition (not identical repetitive cards!) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Featured Large Span: AI Analytics Engine */}
          <div className="md:col-span-8 bg-[#111827] border border-[#1E293B] rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-900 text-sky-400 flex items-center justify-center mb-6">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                AI-Assisted Market &amp; Volatility Analysis
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Continuous ingestion of order book depth, tick volume, and correlation patterns. Our neural network models isolate liquidity anomalies and generate rule-bound risk proposals, giving you mathematical clarity instead of reactionary impulses.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span>// Signal Matrix</span>
                <span>// Volatility Gates</span>
                <span>// Regime Classifiers</span>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/ai-trading')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300"
              >
                Explore Engine Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Side Span: Institutional Trading Tools */}
          <div className="md:col-span-4 bg-[#111827] border border-[#1E293B] rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-900 text-teal-400 flex items-center justify-center mb-6">
                <BarChart2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Institutional Order Tools
              </h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Execute using TWAP, VWAP, stop-limit brackets, and dynamic trailing guardrails designed to minimize market impact across multi-asset books.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E293B]">
              <span className="text-xs font-mono text-teal-400">Deterministic Execution</span>
            </div>
          </div>

          {/* Three Column Row: Portfolio, Wallet, Ledger */}
          <div className="md:col-span-4 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-indigo-950 border border-indigo-900 text-indigo-400 flex items-center justify-center mb-4">
              <Sliders className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Portfolio Monitoring</h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Consolidated asset monitoring, margin utilization telemetry, and value-at-risk (VaR) exposures displayed in single-view dashboards.
            </p>
          </div>

          <div className="md:col-span-4 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-sky-950 border border-sky-900 text-sky-400 flex items-center justify-center mb-4">
              <Wallet className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Planned Wallet Infrastructure</h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Architecture prepared for non-custodial Web3 wallet connectivity, multi-chain settlement verification, and secure asset handoffs.
            </p>
          </div>

          <div className="md:col-span-4 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-900 text-emerald-400 flex items-center justify-center mb-4">
              <ReceiptText className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Immutable Transaction Ledger</h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every deposit, withdrawal request, order placement, and strategy fee deduction is stored in an auditable cryptographic log.
            </p>
          </div>

          {/* Bottom Dual Bar: Account Verification & Client Assistance */}
          <div className="md:col-span-6 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8 flex items-start gap-4 hover:border-slate-700 transition-colors">
            <div className="p-3 rounded-xl bg-[#0B0F19] border border-[#1E293B] text-sky-400 shrink-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Structured Account &amp; KYC Governance</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Streamlined verification workflows adhering to AML/KYC standards, safeguarding user accounts against unauthorized access or impersonation.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8 flex items-start gap-4 hover:border-slate-700 transition-colors">
            <div className="p-3 rounded-xl bg-[#0B0F19] border border-[#1E293B] text-sky-400 shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Dedicated Client Support Desk</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Direct inquiry submission with traceable ticket IDs and structured response tracking for technical, execution, and account questions.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/support')}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
              >
                Access Support Desk <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
