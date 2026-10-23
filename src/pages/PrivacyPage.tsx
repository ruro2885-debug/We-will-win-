import React from 'react';
import { Shield, Lock, FileText, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
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
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-400 font-mono">
            Effective Date: October 2022 // Last Revised: October 2026 // Platform Stage: Phase 1
          </p>
        </div>

        {/* Legal Text Articles */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">1. Overview and Scope</h2>
            <p>
              This Privacy Policy applies to the official Crestiqtrades platform ("Crestiqtrades", "we", "us", or "our"), established in 2022. It outlines how we collect, process, store, and safeguard personal and technical data when you visit our website, register for client access, or utilize our algorithmic market intelligence tools.
            </p>
            <p>
              We are committed to operating in full transparency. We do not sell personal identification records, nor do we harvest browsing behavior for unrelated third-party advertising networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">2. Information We Collect</h2>
            <p>Depending on your interaction with the platform, we collect the following categories of data:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Account Credentials:</strong> Full name, verified email address, encrypted authentication hashes, and session identifiers created upon account onboarding.
              </li>
              <li>
                <strong className="text-white">Assistance Records:</strong> Inquiry details, submitted contact information, and communication transcripts generated when you interface with our Support Desk.
              </li>
              <li>
                <strong className="text-white">Technical &amp; Telemetry Data:</strong> IP addresses, browser agent headers, device screen dimensions, and anonymous load latency metrics required for cyber defense, anti-brute force rate limiting, and interface rendering.
              </li>
              <li>
                <strong className="text-white">Preferences &amp; Consent States:</strong> Timestamped cookie preference records (Strictly Necessary, Analytics, and Marketing) recorded in your client device storage.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">3. How Information Is Processed</h2>
            <p>We process collected information under lawful bases for specified purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>To provide, maintain, and verify authenticated access to trading infrastructure.</li>
              <li>To enforce security protections, detect malicious intrusion attempts, and prevent denial-of-service disruptions.</li>
              <li>To respond to and track client inquiries submitted via our assistance portal.</li>
              <li>To comply with statutory financial recordkeeping and anti-money laundering (AML) directives where applicable.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">4. Third-Party Services &amp; Infrastructure Readiness</h2>
            <p>
              Crestiqtrades is architected to interface with enterprise cloud providers for database persistence and authentication. Prior to connecting production database connectors (including Firebase or equivalent enterprise providers), data is isolated strictly to authorized application servers.
            </p>
            <p>
              We do not fabricate third-party audit claims or invent relationships with unauthorized brokers. Any future cloud integration partners will be bound by formal Data Processing Agreements (DPAs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">5. User Privacy Rights</h2>
            <p>
              Under applicable data protection frameworks (including GDPR, UK GDPR, and CCPA where applicable), you maintain the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Request an export of the personal records we hold regarding your profile.</li>
              <li>Request the correction or rectifying of outdated account data.</li>
              <li>Request the deletion of your account and associated records, subject to regulatory retention obligations.</li>
              <li>Modify or withdraw optional analytics and marketing cookie consents at any time using our Cookie Preferences manager.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">6. Data Retention and Deletion</h2>
            <p>
              Account identification records and security audit logs are retained for the duration of the active business relationship and in accordance with applicable financial limitation periods. De-identified analytical metrics may be retained for longitudinal performance benchmarking.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">7. Corporate Contact &amp; Inquiries</h2>
            <p>
              To exercise data rights or submit privacy-related questions, please lodge an inquiry through the official{' '}
              <button
                type="button"
                onClick={() => onNavigate('/support')}
                className="text-sky-400 hover:underline font-semibold"
              >
                Crestiqtrades Support Desk
              </button>
              . Configurable physical correspondence addresses will be published upon final regulatory licensing.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
