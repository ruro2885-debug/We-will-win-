import React, { useState } from 'react';
import { CrestiqLogo } from '../components/brand/CrestiqLogo';
import { Lock, Mail, User, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

interface AuthPageProps {
  mode: 'login' | 'register';
  onNavigate: (path: string) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ mode, onNavigate }) => {
  const isLogin = mode === 'login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (!isLogin && !name)) {
      setStatusMessage('Please complete all required fields.');
      return;
    }

    setSubmitted(true);
    setStatusMessage(
      isLogin
        ? 'Authentication Gateway Active: Live credential verification will bind directly to the production Firebase Authentication provider once project credentials are submitted.'
        : 'Registration Submitted: Account profile initialized for verification. Firebase Auth & Firestore schemas will persist client records upon live backend provisioning.'
    );
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#0B0F19]">
      <div className="w-full max-w-md bg-[#111827] border border-[#1E293B] rounded-2xl p-8 sm:p-10 shadow-2xl space-y-6">
        
        {/* Logo */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-block focus:outline-none focus:ring-2 focus:ring-sky-500 rounded p-1"
          >
            <CrestiqLogo variant="horizontal" theme="dark" size="md" />
          </button>
          
          <h2 className="mt-4 text-2xl font-extrabold text-white tracking-tight">
            {isLogin ? 'Sign in to your client account' : 'Create your Crestiqtrades profile'}
          </h2>
          
          <p className="mt-2 text-xs text-slate-400">
            {isLogin
              ? 'Enter your credentials to access your trading portfolio & analytics.'
              : 'Join the quantitative trading network with disciplined risk controls.'}
          </p>
        </div>

        {/* Status / Notice Box */}
        {statusMessage && (
          <div className="p-4 rounded-xl bg-[#0E1526] border border-blue-900/60 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-sky-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Integration Status Notice</span>
            </div>
            <p className="leading-relaxed">{statusMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Full Legal Name <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Email Address <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Password <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>{isLogin ? 'Sign In to Account' : 'Initialize Account Registration'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>

        {/* Toggle between Login and Register */}
        <div className="pt-4 border-t border-[#1E293B] text-center text-xs text-slate-400">
          {isLogin ? (
            <p>
              Don't have an account yet?{' '}
              <button
                type="button"
                onClick={() => onNavigate('/register')}
                className="text-sky-400 hover:text-sky-300 font-semibold"
              >
                Create an account
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => onNavigate('/login')}
                className="text-sky-400 hover:text-sky-300 font-semibold"
              >
                Sign in here
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};
