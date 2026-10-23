import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Bot, 
  Wallet, 
  TrendingUp, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Layers, 
  Activity, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  ChevronRight,
  RefreshCw,
  LogOut
} from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (path: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const { user, signOut } = useAuth();
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1D' | '1W' | '1M' | 'ALL'>('1W');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const handleSignOut = async () => {
    await signOut();
    onNavigate('/');
  };

  return (
    <div className="py-8 sm:py-12 bg-[#0B0D10] text-[#F5F7FA] min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header & Account Status */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-[#1C2430]">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#12234A] text-[#4A8DFF] border border-[#246BFD]/30">
                Client Workspace
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#00E599] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
                Engine Connected (NY4 14ms)
              </span>
            </div>
            
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Welcome back, {user?.displayName || user?.email?.split('@')[0] || 'Institutional Trader'}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#A7B0BD]">
              Account ID: <span className="font-mono text-[#F5F7FA]">{user?.uid ? `${user.uid.slice(0, 10)}...` : 'CQ-DEMO-9821'}</span> &bull; Tier: Professional Alpha Access
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleRefresh}
              className="p-2 text-[#A7B0BD] hover:text-white bg-[#11151B] hover:bg-[#181E27] border border-[#1C2430] rounded-lg transition-colors"
              title="Refresh Telemetry"
              aria-label="Refresh Telemetry"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-[#4A8DFF]' : ''}`} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/wallet')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#246BFD] hover:bg-[#1D58D8] rounded-lg transition-colors"
            >
              <Wallet className="w-4 h-4" />
              Manage Wallet
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              className="p-2 text-[#A7B0BD] hover:text-[#FF4D4D] bg-[#11151B] hover:bg-[#181E27] border border-[#1C2430] rounded-lg transition-colors"
              title="Sign Out"
              aria-label="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Financial Honesty Banner */}
        <div className="p-4 rounded-xl bg-[#11151B] border border-[#1C2430] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#4A8DFF] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-white">Demonstration &amp; Verification Environment:</span>{' '}
              <span className="text-[#A7B0BD]">
                Live balance displays reflect verified paper simulation until complete KYC and external brokerage gateway binding are completed.
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/risk-disclosure')}
            className="text-xs font-semibold text-[#4A8DFF] hover:underline whitespace-nowrap"
          >
            Read Risk Notice &rarr;
          </button>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <div className="flex items-center justify-between text-xs text-[#A7B0BD]">
              <span>Total Account Equity</span>
              <span className="text-[#00E599] font-mono text-[11px] font-bold">+4.12% 7D</span>
            </div>
            <div className="mt-2 text-2xl font-mono font-extrabold text-white">
              $48,920.45 <span className="text-xs font-sans font-medium text-[#A7B0BD]">USD</span>
            </div>
            <div className="mt-2 text-[11px] text-[#A7B0BD] flex items-center justify-between">
              <span>Unrealized P&amp;L</span>
              <span className="text-[#00E599] font-mono font-semibold">+$1,420.30</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <div className="flex items-center justify-between text-xs text-[#A7B0BD]">
              <span>Active Quantitative Exposure</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#12234A] text-[#4A8DFF]">3 / 4 Models</span>
            </div>
            <div className="mt-2 text-2xl font-mono font-extrabold text-white">
              $18,450.00 <span className="text-xs font-sans font-medium text-[#A7B0BD]">(37.7%)</span>
            </div>
            <div className="mt-2 text-[11px] text-[#A7B0BD] flex items-center justify-between">
              <span>Risk Utilization Ceiling</span>
              <span className="text-[#F5A623] font-mono font-semibold">45.0% Max</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <div className="flex items-center justify-between text-xs text-[#A7B0BD]">
              <span>Available Margin</span>
              <span className="text-[#00E599] font-mono text-[11px] font-bold">Unencumbered</span>
            </div>
            <div className="mt-2 text-2xl font-mono font-extrabold text-white">
              $30,470.45 <span className="text-xs font-sans font-medium text-[#A7B0BD]">USD</span>
            </div>
            <div className="mt-2 text-[11px] text-[#A7B0BD] flex items-center justify-between">
              <span>Collateral Ratio</span>
              <span className="text-white font-mono font-semibold">265.1%</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <div className="flex items-center justify-between text-xs text-[#A7B0BD]">
              <span>Active Circuit Breaker</span>
              <span className="text-[#00E599] font-mono text-[11px] font-bold">ARMED</span>
            </div>
            <div className="mt-2 text-2xl font-mono font-extrabold text-white">
              2.00% <span className="text-xs font-sans font-medium text-[#A7B0BD]">Max Drawdown</span>
            </div>
            <div className="mt-2 text-[11px] text-[#A7B0BD] flex items-center justify-between">
              <span>Current Session Delta</span>
              <span className="text-[#00E599] font-mono font-semibold">-0.14% (Safe)</span>
            </div>
          </div>

        </div>

        {/* Two-column layout: Active Strategies & Holdings Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Active Model Status (2 Columns) */}
          <div className="lg:col-span-2 p-6 rounded-xl bg-[#11151B] border border-[#1C2430] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1C2430]">
              <div>
                <h2 className="text-lg font-bold text-white">Active Quantitative Strategies</h2>
                <p className="text-xs text-[#A7B0BD] mt-0.5">Automated signal execution bound to strict risk parameters</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/ai-trading')}
                className="text-xs font-bold text-[#4A8DFF] hover:underline flex items-center gap-1"
              >
                Model Lab <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3.5">
              
              <div className="p-4 rounded-lg bg-[#0B0D10] border border-[#1C2430] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#12234A] text-[#4A8DFF] shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">Alpha-Momentum Engine (BTC/ETH)</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#072E20] text-[#00E599] font-bold">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-xs text-[#A7B0BD] mt-1">Multi-timeframe trend persistence with trailing ATR stop</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 sm:text-right">
                  <div>
                    <span className="text-[10px] text-[#677284] uppercase font-bold block">Allocated</span>
                    <span className="text-sm font-mono font-bold text-white">$10,000</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#677284] uppercase font-bold block">7D Performance</span>
                    <span className="text-sm font-mono font-bold text-[#00E599]">+5.4%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0B0D10] border border-[#1C2430] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#181E27] text-[#A7B0BD] shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">Statistical Arbitrage &amp; Range (FX Majors)</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#072E20] text-[#00E599] font-bold">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-xs text-[#A7B0BD] mt-1">Mean reversion targeting EUR/USD &amp; GBP/USD liquidity pools</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 sm:text-right">
                  <div>
                    <span className="text-[10px] text-[#677284] uppercase font-bold block">Allocated</span>
                    <span className="text-sm font-mono font-bold text-white">$8,450</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#677284] uppercase font-bold block">7D Performance</span>
                    <span className="text-sm font-mono font-bold text-[#00E599]">+2.1%</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0B0D10] border border-[#1C2430] flex flex-col sm:flex-row sm:items-center justify-between gap-4 opacity-70">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#181E27] text-[#677284] shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">Volatility Expansion Hunter</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181E27] text-[#A7B0BD] font-bold">
                        MONITORING (STANDBY)
                      </span>
                    </div>
                    <p className="text-xs text-[#A7B0BD] mt-1">Awaiting volatility compression trigger on NASDAQ-100</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 sm:text-right">
                  <div>
                    <span className="text-[10px] text-[#677284] uppercase font-bold block">Allocated</span>
                    <span className="text-sm font-mono font-bold text-[#A7B0BD]">$0</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#677284] uppercase font-bold block">Status</span>
                    <span className="text-sm font-mono font-bold text-[#A7B0BD]">Standby</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Asset Allocation & Quick Links */}
          <div className="p-6 rounded-xl bg-[#11151B] border border-[#1C2430] space-y-6 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Portfolio Distribution</h2>
              <p className="text-xs text-[#A7B0BD] mt-0.5">Asset diversification across markets</p>

              <div className="mt-5 space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-white">Digital Assets (BTC/ETH)</span>
                    <span className="font-mono text-[#4A8DFF]">42.5%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-[#181E27] overflow-hidden">
                    <div className="h-full bg-[#246BFD] rounded" style={{ width: '42.5%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-white">Cash &amp; Stablecoins (USD/USDC)</span>
                    <span className="font-mono text-[#00E599]">35.0%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-[#181E27] overflow-hidden">
                    <div className="h-full bg-[#00E599] rounded" style={{ width: '35%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-white">FX Currencies</span>
                    <span className="font-mono text-[#F5A623]">15.5%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-[#181E27] overflow-hidden">
                    <div className="h-full bg-[#F5A623] rounded" style={{ width: '15.5%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-white">Indices &amp; Commodities</span>
                    <span className="font-mono text-[#A7B0BD]">7.0%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-[#181E27] overflow-hidden">
                    <div className="h-full bg-[#677284] rounded" style={{ width: '7%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1C2430] space-y-2.5">
              <button
                type="button"
                onClick={() => onNavigate('/portfolio')}
                className="w-full py-2.5 px-4 text-xs font-bold text-center text-white bg-[#181E27] hover:bg-[#1F2733] border border-[#2A3648] rounded-lg transition-colors"
              >
                Inspect Complete Portfolio Holdings &rarr;
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/copy-trading')}
                className="w-full py-2.5 px-4 text-xs font-bold text-center text-[#A7B0BD] hover:text-white bg-transparent hover:bg-[#181E27] rounded-lg transition-colors"
              >
                Explore Copy Trading Allocators
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
