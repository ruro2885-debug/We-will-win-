import React from 'react';
import { AlertOctagon, ShieldAlert, ArrowLeft, Scale, Info } from 'lucide-react';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export const RiskDisclosurePage: React.FC<LegalPageProps> = ({ onNavigate }) => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-950/80 border border-amber-800 text-xs font-mono font-medium text-amber-400 mb-4">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>Mandatory Financial Disclosure</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Risk Disclosure Statement
          </h1>
          <p className="mt-3 text-sm text-amber-300 font-mono">
            CRITICAL NOTICE: PLEASE READ CAREFULLY BEFORE ENGAGING IN ANY TRADING ACTIVITY
          </p>
        </div>

        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div className="p-6 rounded-xl bg-amber-950/30 border border-amber-800/60 text-amber-200 text-sm space-y-2">
            <h2 className="font-bold text-amber-300 text-base">Key Risk Summary</h2>
            <p>
              Trading financial products on margin, including foreign exchange, digital assets, equities, and derivative contracts, involves an exceptionally high level of risk. You may sustain a rapid loss of some or all of your deposited capital. Do not trade with money you cannot afford to lose.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">1. Inherent Market Volatility</h2>
            <p>
              Financial markets are subject to sudden, unpredictable price movements caused by geopolitical events, macroeconomic releases, central bank decisions, liquidity droughts, and systemic contagion. Bid-ask spreads can widen substantially during off-market hours or extreme announcements, resulting in execution at prices differing substantially from your quote.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">2. Leverage and Margin Hazards</h2>
            <p>
              The use of financial leverage magnifies both gains and losses. A relatively small adverse movement in price can result in immediate margin calls and the automated liquidation of your open positions. You must understand how margin ratios operate before engaging in leveraged contracts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">3. Limitations of Artificial Intelligence &amp; Algorithmic Tools</h2>
            <p>
              Crestiqtrades provides statistical algorithmic models, volatility indicators, and automated risk guardrails. You must acknowledge the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">No Guaranteed Returns:</strong> No algorithmic system, neural network, or predictive indicator can foresee future price action or guarantee profits.
              </li>
              <li>
                <strong className="text-white">Model Fallibility:</strong> Quantitative models are formulated based on historical correlation assumptions. During unprecedented regime shifts ("black swans"), historical relationships can break down entirely.
              </li>
              <li>
                <strong className="text-white">Technical Dependency:</strong> Automated strategies depend on network connectivity, order book depth, and low-latency API transmission. Network latency or hardware interruptions can impede intended stop-loss triggers.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">4. Risks Associated with Copy Trading</h2>
            <p>
              Replicating the transactions of third-party strategy providers entails unique risks:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Past performance of a strategy provider is not a reliable indicator of future results.</li>
              <li>Providers may abruptly alter their risk parameters or trading hours.</li>
              <li>Slippage may occur between the time the provider executes an order and the time your sub-account mirrors the fill.</li>
              <li>You remain solely responsible for configuring personal drawdown stops and monitoring portfolio margin.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white tracking-tight">5. Investor Suitability &amp; Independent Advice</h2>
            <p>
              Before trading on Crestiqtrades, you should carefully consider your investment objectives, financial circumstances, and experience level. If you are uncertain regarding any concept discussed in this disclosure, you should seek independent advice from a certified financial professional.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
