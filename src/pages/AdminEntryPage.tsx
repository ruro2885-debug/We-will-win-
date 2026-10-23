import React, { useState, useEffect, useRef } from 'react';
import { TapCounter } from '../utils/tapCounter';
import { ArrowLeft, ShieldAlert, Lock, KeyRound, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';
import { AdminDashboard } from './AdminDashboard';

interface AdminEntryPageProps {
  onNavigate: (path: string) => void;
}

export const AdminEntryPage: React.FC<AdminEntryPageProps> = ({ onNavigate }) => {
  // Authentication session state
  const [authToken, setAuthToken] = useState<string | null>(() => {
    return sessionStorage.getItem('crestiq_admin_token');
  });

  // Tap counter instance for the 9-tap interaction
  const tapCounterRef = useRef<TapCounter>(new TapCounter(9, 120));
  const [isRevealed, setIsRevealed] = useState(false);
  const [tapProgress, setTapProgress] = useState(0);

  // Form states
  const [passwordInput, setPasswordInput] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Reset taps if user navigates away or unmounts
  useEffect(() => {
    return () => {
      tapCounterRef.current.reset();
    };
  }, []);

  // Handle deliberate tap on designated interactive area (the geometric 404 shield)
  const handleTap = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (isRevealed) return;

    const result = tapCounterRef.current.registerTap(Date.now());
    if (result.didIncrement) {
      setTapProgress(result.count);
    }
    if (result.unlocked) {
      setIsRevealed(true);
    }
  };

  // Submit password to secure server endpoint (NEVER evaluated in client bundle!)
  const handleVerifyPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    if (!passwordInput.trim()) {
      setAuthError('Authorization credential is required.');
      return;
    }

    setVerifying(true);

    try {
      const response = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Invalid administrator credentials.');
      }

      // Successful server authentication
      sessionStorage.setItem('crestiq_admin_token', data.token);
      setAuthToken(data.token);
    } catch (err: any) {
      setAuthError(err.message || 'Authentication failed. Please check credentials.');
    } finally {
      setVerifying(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('crestiq_admin_token');
    setAuthToken(null);
    setIsRevealed(false);
    setPasswordInput('');
    tapCounterRef.current.reset();
    setTapProgress(0);
  };

  // If already authenticated with a valid server session, render the 9-section Admin Dashboard
  if (authToken) {
    return <AdminDashboard token={authToken} onLogout={handleLogout} onNavigate={onNavigate} />;
  }

  return (
    <div className="min-h-screen bg-[#070A11] text-white flex flex-col justify-between p-6 sm:p-12 relative overflow-hidden">
      
      {/* Top Bar with simple return link */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO HOMEPAGE</span>
        </button>

        <span className="font-mono text-[11px] text-slate-400">
          STATUS CODE: 404 NOT FOUND
        </span>
      </div>

      {/* Main Content Area */}
      <div className="max-w-xl w-full mx-auto my-auto text-center py-12">
        
        {/* Designated Interactive Area: The 404 Geometric Shield */}
        <div className="inline-block relative mb-8">
          <button
            type="button"
            id="admin-secret-tap-area"
            data-testid="interactive-404-crest"
            onClick={handleTap}
            aria-label="Crestiq Status Symbol"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0D1322] border border-[#1E293B] hover:border-[#334155] flex items-center justify-center transition-all cursor-default active:scale-95 focus:outline-none focus:ring-1 focus:ring-slate-700"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="select-none pointer-events-none"
            >
              <path
                d="M20 3L35 12V28L20 37L5 28V12L20 3Z"
                stroke="#334155"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M10 26L20 9V32L10 26Z" fill="#1E40AF" />
              <path d="M30 26L20 9V32L30 26Z" fill="#0D9488" opacity="0.95" />
              <path d="M20 9L25 16H15L20 9Z" fill="#38BDF8" />
              <path d="M20 9V34" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* 404 Message */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          404 — Resource Not Located
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-md mx-auto">
          The destination endpoint you requested does not exist on the Crestiqtrades execution network. Please verify your routing address or return to the main portal.
        </p>

        {/* Default action button for ordinary visitors */}
        {!isRevealed && (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#111827] hover:bg-[#1E293B] rounded-lg border border-[#334155] transition-colors"
            >
              Back to Crestiqtrades Portal
            </button>
          </div>
        )}

        {/* Revealed Concealed Password Interface (Triggered strictly after 9 deliberate taps) */}
        {isRevealed && (
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#111827] border border-[#1E293B] shadow-2xl text-left animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-center gap-2.5 pb-4 border-b border-[#1E293B]">
              <div className="p-2 rounded-lg bg-blue-950 border border-blue-900 text-sky-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">
                  Restricted Gateway Verification
                </h2>
                <p className="text-xs text-slate-400">
                  Authentication is strictly audited on the secure server.
                </p>
              </div>
            </div>

            <form onSubmit={handleVerifyPassword} className="mt-6 space-y-4">
              {authError && (
                <div className="p-3 rounded-lg bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Administrative Credential
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    autoFocus
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter security key..."
                    className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setIsRevealed(false)}
                  className="text-xs text-slate-400 hover:text-slate-200"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={verifying}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {verifying ? (
                    <span>Verifying with Server...</span>
                  ) : (
                    <span>Authenticate Session</span>
                  )}
                </button>
              </div>
            </form>

          </div>
        )}

      </div>

      {/* Footer subtle text */}
      <div className="text-center font-mono text-[10px] text-slate-400">
        CRESTIQTRADES // SYS-DISP-404 // AUDIT VERIFIED
      </div>

    </div>
  );
};
