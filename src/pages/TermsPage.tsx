import React from 'react';
import { Scale, FileText, ArrowLeft, AlertTriangle } from 'lucide-react';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
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
            <Scale className="w-3.5 h-3.5" />
            <span>Platform Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Terms and Conditions
          </h1>
          <p className="mt-3 text-sm text-slate-400 font-mono">
            Platform Stage: Phase 1 Foundation // Entity: Crestiqtrades (Est. 2022)
          </p>
        </div>

        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">1. Agreement to Terms</h2>
            <p>
              By accessing, browsing, or utilizing the web interface, features, or APIs offered by Crestiqtrades, you represent that you have read, comprehended, and agreed to be legally bound by these Terms and Conditions. If you do not accept these terms in full, you must discontinue platform access immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">2. Nature of Platform Services</h2>
            <p>
              Crestiqtrades operates as an algorithmic market intelligence, analytics, and strategy synchronization platform. Our tools assist clients in evaluating market statistics, setting risk parameters, and exploring strategy replication models.
            </p>
            <p className="p-4 rounded-lg bg-[#0E1526] border border-[#1E293B] text-xs text-amber-300">
              <strong>Notice:</strong> Nothing provided on this website constitutes personalized investment advice, a solicitation to purchase or sell securities, or an endorsement of any speculative asset. All decisions are taken at the sole discretion of the user.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">3. User Eligibility &amp; Account Responsibilities</h2>
            <p>
              To create an account and engage with trading features, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Be at least 18 years of age (or the legal age of majority in your jurisdiction).</li>
              <li>Not be located in or a citizen of any sanctioned territory or prohibited jurisdiction.</li>
              <li>Maintain the absolute confidentiality of your authentication credentials and notify us immediately of any unauthorized access.</li>
              <li>Provide accurate, truthful identity information during KYC compliance verification.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">4. Prohibited Conduct</h2>
            <p>Users are expressly prohibited from:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Attempting to probe, scan, or breach system vulnerabilities or bypass access restrictions.</li>
              <li>Deploying automated scrapers, malicious bots, or high-frequency denial-of-service payloads against our infrastructure.</li>
              <li>Engaging in market manipulation, wash trading, or abusive latency arbitrage exploiting technical delays.</li>
              <li>Impersonating Crestiqtrades staff, administrators, or authorized representatives.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">5. Intellectual Property Rights</h2>
            <p>
              All trademarks, service marks, algorithmic model names, visual identities, logos (including the Crestiqtrades vector mark), and software source code are the proprietary intellectual property of Crestiqtrades. No license is granted without explicit written authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Crestiqtrades and its directors, officers, and technical personnel shall not be liable for any indirect, incidental, punitive, or consequential losses—including loss of trading capital, profits, or missed opportunities—arising from system downtime, network latency, slippage, or market volatility.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">7. Modifications and Inquiries</h2>
            <p>
              We reserve the right to amend these Terms and Conditions as platform capabilities expand. Continued use following posted modifications constitutes acceptance. Contact the{' '}
              <button
                type="button"
                onClick={() => onNavigate('/support')}
                className="text-sky-400 hover:underline font-semibold"
              >
                Support Desk
              </button>{' '}
              for contractual clarifications.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
