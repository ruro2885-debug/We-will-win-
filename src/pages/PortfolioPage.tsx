import React, { useState } from 'react';
import { 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  Filter, 
  Search, 
  Layers, 
  ShieldCheck, 
  Info,
  DollarSign,
  Download
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (path: string) => void;
}

interface Holding {
  id: string;
  name: string;
  symbol: string;
  category: 'crypto' | 'fx' | 'index' | 'commodity';
  allocation: number;
  quantity: string;
  avgEntry: string;
  currentPrice: string;
  totalValue: string;
  unrealizedPnL: string;
  pnlPercent: string;
  isPositive: boolean;
}

const HOLDINGS_DATA: Holding[] = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC/USD',
    category: 'crypto',
    allocation: 28.5,
    quantity: '0.2104 BTC',
    avgEntry: '$62,450.00',
    currentPrice: '$66,320.50',
    totalValue: '$13,953.83',
    unrealizedPnL: '+$814.30',
    pnlPercent: '+6.20%',
    isPositive: true,
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH/USD',
    category: 'crypto',
    allocation: 14.0,
    quantity: '2.540 ETH',
    avgEntry: '$2,580.00',
    currentPrice: '$2,695.20',
    totalValue: '$6,845.80',
    unrealizedPnL: '+$292.60',
    pnlPercent: '+4.46%',
    isPositive: true,
  },
  {
    id: 'usdc',
    name: 'USD Coin',
    symbol: 'USDC',
    category: 'crypto',
    allocation: 35.0,
    quantity: '17,122.15 USDC',
    avgEntry: '$1.00',
    currentPrice: '$1.00',
    totalValue: '$17,122.15',
    unrealizedPnL: '$0.00',
    pnlPercent: '0.00%',
    isPositive: true,
  },
  {
    id: 'eurusd',
    name: 'Euro / US Dollar',
    symbol: 'EUR/USD',
    category: 'fx',
    allocation: 10.5,
    quantity: '50,000 Units',
    avgEntry: '1.0820',
    currentPrice: '1.0864',
    totalValue: '$5,140.00',
    unrealizedPnL: '+$220.00',
    pnlPercent: '+4.06%',
    isPositive: true,
  },
  {
    id: 'gbpusd',
    name: 'British Pound / USD',
    symbol: 'GBP/USD',
    category: 'fx',
    allocation: 5.0,
    quantity: '20,000 Units',
    avgEntry: '1.2980',
    currentPrice: '1.2945',
    totalValue: '$2,448.67',
    unrealizedPnL: '-$70.00',
    pnlPercent: '-2.69%',
    isPositive: false,
  },
  {
    id: 'gold',
    name: 'Gold Spot',
    symbol: 'XAU/USD',
    category: 'commodity',
    allocation: 7.0,
    quantity: '1.25 oz',
    avgEntry: '$2,680.00',
    currentPrice: '$2,730.00',
    totalValue: '$3,412.50',
    unrealizedPnL: '+$62.50',
    pnlPercent: '+1.86%',
    isPositive: true,
  },
];

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'crypto' | 'fx' | 'commodity'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHoldings = HOLDINGS_DATA.filter((h) => {
    const matchesFilter = selectedFilter === 'all' || h.category === selectedFilter;
    const matchesSearch =
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-8 sm:py-12 bg-[#0B0D10] text-[#F5F7FA] min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header & Risk Audit */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-[#1C2430]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#12234A] text-[#4A8DFF] text-xs font-mono font-bold uppercase tracking-wider border border-[#246BFD]/30 mb-2">
              <PieChart className="w-3.5 h-3.5" />
              <span>Multi-Asset Allocation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Portfolio Holdings &amp; Exposure Analysis
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#A7B0BD]">
              Real-time mark-to-market position audit with granular risk factor distribution.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/wallet')}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#246BFD] hover:bg-[#1D58D8] rounded-lg transition-colors"
            >
              Deposit / Rebalance
            </button>
          </div>
        </div>

        {/* Portfolio Quantitative Risk Meters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <span className="text-xs text-[#A7B0BD] block">Sharpe Ratio (Annualized)</span>
            <span className="mt-1 text-xl font-mono font-bold text-[#00E599]">2.38</span>
            <span className="text-[10px] text-[#677284] block mt-0.5">Benchmark: S&amp;P 500 (1.14)</span>
          </div>

          <div className="p-4 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <span className="text-xs text-[#A7B0BD] block">Value at Risk (95% Daily)</span>
            <span className="mt-1 text-xl font-mono font-bold text-[#F5A623]">$640.20</span>
            <span className="text-[10px] text-[#677284] block mt-0.5">1.31% of portfolio equity</span>
          </div>

          <div className="p-4 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <span className="text-xs text-[#A7B0BD] block">Beta vs Global Market</span>
            <span className="mt-1 text-xl font-mono font-bold text-white">0.42</span>
            <span className="text-[10px] text-[#677284] block mt-0.5">Low directional correlation</span>
          </div>

          <div className="p-4 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <span className="text-xs text-[#A7B0BD] block">Max Historical Drawdown</span>
            <span className="mt-1 text-xl font-mono font-bold text-[#00E599]">-2.84%</span>
            <span className="text-[10px] text-[#677284] block mt-0.5">Within 3.0% risk mandate</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-xl bg-[#11151B] border border-[#1C2430]">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {(['all', 'crypto', 'fx', 'commodity'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wider transition-colors ${
                  selectedFilter === cat
                    ? 'bg-[#246BFD] text-white'
                    : 'text-[#A7B0BD] hover:text-white hover:bg-[#181E27]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#677284] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search asset or ticker..."
              className="w-full sm:w-56 pl-8 pr-3 py-1.5 text-xs bg-[#0B0D10] border border-[#1C2430] rounded-lg text-white placeholder-[#677284] focus:outline-none focus:border-[#246BFD]"
            />
          </div>
        </div>

        {/* Holdings Table */}
        <div className="rounded-xl bg-[#11151B] border border-[#1C2430] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#181E27] text-[#A7B0BD] border-b border-[#1C2430] font-mono uppercase text-[11px]">
                <tr>
                  <th className="py-3 px-4 font-bold">Asset / Instrument</th>
                  <th className="py-3 px-4 font-bold">Weight</th>
                  <th className="py-3 px-4 font-bold">Quantity</th>
                  <th className="py-3 px-4 font-bold">Avg Entry</th>
                  <th className="py-3 px-4 font-bold">Market Price</th>
                  <th className="py-3 px-4 font-bold">Total Value</th>
                  <th className="py-3 px-4 font-bold text-right">Unrealized P&amp;L</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C2430]">
                {filteredHoldings.map((h) => (
                  <tr key={h.id} className="hover:bg-[#181E27]/50 transition-colors">
                    <td className="py-3.5 px-4">
                      <div>
                        <span className="font-bold text-white block">{h.name}</span>
                        <span className="font-mono text-[11px] text-[#A7B0BD]">{h.symbol}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-white">
                      {h.allocation}%
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#F5F7FA]">
                      {h.quantity}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#A7B0BD]">
                      {h.avgEntry}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white">
                      {h.currentPrice}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-white">
                      {h.totalValue}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-right">
                      <span className={h.isPositive ? 'text-[#00E599]' : 'text-[#FF4D4D]'}>
                        {h.unrealizedPnL} ({h.pnlPercent})
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regulatory & Honesty Footnote */}
        <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#1C2430] text-xs text-[#A7B0BD] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#4A8DFF] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Custody &amp; Valuation Policy:</strong> Mark-to-market prices are refreshed via consolidated multi-source order book feeds. Simulated positions do not impact real spot settlement or carry sovereign insurance protections.
          </p>
        </div>

      </div>
    </div>
  );
};
