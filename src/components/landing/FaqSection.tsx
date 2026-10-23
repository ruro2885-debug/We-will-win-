import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Crestiqtrades?',
      answer:
        'Crestiqtrades is an AI-powered quantitative trading platform established in 2022. It is engineered to provide traders with algorithmic market intelligence, disciplined risk guardrails, strategy synchronization (copy trading), and unified multi-asset monitoring across global financial markets.',
    },
    {
      question: 'What is AI trading and how does Crestiqtrades utilize it?',
      answer:
        'AI trading on Crestiqtrades combines statistical machine-learning models, volatility filters, and automated execution parameters. The models analyze liquidity structures and pattern correlations in real time to suggest rule-bound risk parameters. It does NOT predict future market movements with certainty or guarantee profitable trades.',
    },
    {
      question: 'How does strategy copy trading work once operational?',
      answer:
        'Copy trading enables subscribers to mirror orders from vetted strategy providers in real time. Position sizes are proportionally scaled to your equity balance, and you maintain personal hard-stop drawdown parameters that immediately disconnect replication if exceeded. You never transfer custody of your funds to individual strategy providers.',
    },
    {
      question: 'What markets and asset classes are planned for the platform?',
      answer:
        'Crestiqtrades is architected to support major foreign exchange currency pairs (Forex), liquid digital assets (Cryptocurrencies), institutional equity indices (such as US500 and NAS100), and commodities (including precious metals and energy futures).',
    },
    {
      question: 'How do users create an account?',
      answer:
        'Users can initiate registration by selecting "Get Started", submitting standard identification details, and verifying their email. Once production authentication and database infrastructure are fully active, clients will access portfolio configuration and KYC verification tools directly.',
    },
    {
      question: 'What are the primary financial risks of trading?',
      answer:
        'Trading financial instruments involves significant risk of capital loss. Prices can fluctuate unpredictably due to economic news, market liquidity shocks, and systemic shifts. Quantitative tools and AI assistance help manage risk parameters but cannot eliminate market drawdowns. You should never trade with capital you cannot afford to lose.',
    },
    {
      question: 'How is personal information handled and secured?',
      answer:
        'Personal data is handled strictly in accordance with our Privacy Policy. Necessary session technologies ensure platform functionality, and user data is never sold. Optional analytics technologies are disabled by default until explicit consent is granted through our Cookie Preferences manager.',
    },
    {
      question: 'How can visitors and clients obtain assistance?',
      answer:
        'Assistance is available through our dedicated Support Desk. Clients can submit inquiries regarding technical operation, strategy configurations, or platform governance and receive a trackable support ticket reference.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0B0F19] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#161F33] border border-[#1E293B] text-xs font-mono font-medium text-sky-400">
            <HelpCircle className="w-3.5 h-3.5" />
            Knowledge &amp; Inquiries
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Direct, verifiable answers regarding our platform architecture, risk rules, and operational methodology.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                className="bg-[#111827] border border-[#1E293B] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#161F33] border border-[#1E293B] flex items-center justify-center shrink-0 text-slate-400 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-[#1E293B]/60"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
