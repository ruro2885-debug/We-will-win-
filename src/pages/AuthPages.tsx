import React, { useState } from 'react';
import { CrestiqLogo } from '../components/brand/CrestiqLogo';
import { Lock, Mail, User, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';

interface AuthPageProps {
  mode: 'login' | 'register';
  onNavigate: (path: string) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ mode, onNavigate }) => {
  const isLogin = mode === 'login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email || !password || (!isLogin && !name)) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email.trim(), password);
        setSuccessMessage('Authentication verified. Redirecting to platform overview...');
        setTimeout(() => {
          onNavigate('/dashboard');
        }, 800);
      } else {
        const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
        if (name.trim() && cred.user) {
          await updateProfile(cred.user, { displayName: name.trim() });
        }
        setSuccessMessage('Account registered successfully. Redirecting to platform overview...');
        setTimeout(() => {
          onNavigate('/dashboard');
        }, 800);
      }
    } catch (err: any) {
      let msg = 'Authentication error. Please verify your credentials.';
      const code = err.code || '';
      if (code === 'auth/invalid-email') {
        msg = 'Invalid email address format.';
      } else if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
        msg = 'Invalid email or password.';
      } else if (code === 'auth/email-already-in-use') {
        msg = 'An account with this email address already exists. Please sign in.';
      } else if (code === 'auth/weak-password') {
        msg = 'Password is too weak. Please use at least 6 characters with letters and numbers.';
      } else if (code === 'auth/network-request-failed') {
        msg = 'Network connection error. Please verify your connectivity.';
      } else if (err.message) {
        msg = err.message;
      }
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const { setSessionUser } = useAuth();

  const handleDemoSignIn = async () => {
    setEmail('demo.trader@crestiqtrades.com');
    setPassword('DemoPass2025!');
    setErrorMessage(null);
    setIsLoading(true);
    
    // Set immediate session user
    setSessionUser({
      uid: 'cq-demo-9821',
      email: 'demo.trader@crestiqtrades.com',
      displayName: 'Institutional Trader',
      isDemo: true,
    });

    try {
      await signInWithEmailAndPassword(auth, 'demo.trader@crestiqtrades.com', 'DemoPass2025!');
    } catch {
      try {
        const cred = await createUserWithEmailAndPassword(auth, 'demo.trader@crestiqtrades.com', 'DemoPass2025!');
        if (cred.user) {
          await updateProfile(cred.user, { displayName: 'Institutional Trader' });
        }
      } catch {}
    } finally {
      setIsLoading(false);
      onNavigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#0B0D10]">
      <div className="w-full max-w-md bg-[#11151B] border border-[#1C2430] rounded-xl p-8 sm:p-10 shadow-2xl space-y-6">
        
        {/* Brand mark */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-block focus:outline-none focus:ring-2 focus:ring-[#246BFD] rounded p-1"
          >
            <CrestiqLogo variant="horizontal" theme="dark" size="md" />
          </button>
          
          <h1 className="mt-4 text-2xl font-bold text-white tracking-tight">
            {isLogin ? 'Sign in to your client account' : 'Create your Crestiqtrades profile'}
          </h1>
          
          <p className="mt-2 text-xs text-[#A7B0BD]">
            {isLogin
              ? 'Enter your credentials to access your trading portfolio & analytics.'
              : 'Join the institutional-grade quantitative platform with disciplined risk controls.'}
          </p>
        </div>

        {/* Demo Fast Access Button */}
        <div className="bg-[#181E27] border border-[#2A3648] rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#4A8DFF]" />
            <span className="text-xs text-[#A7B0BD] font-medium">Quick inspection:</span>
          </div>
          <button
            type="button"
            onClick={handleDemoSignIn}
            disabled={isLoading}
            className="text-xs font-semibold px-2.5 py-1.5 bg-[#246BFD] hover:bg-[#1D58D8] text-white rounded transition-colors"
          >
            Load Demo Account
          </button>
        </div>

        {/* Error / Success Alerts */}
        {errorMessage && (
          <div className="p-3.5 rounded-lg bg-[#380E0E] border border-[#FF4D4D]/40 text-xs text-[#FF4D4D] flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="p-3.5 rounded-lg bg-[#072E20] border border-[#00E599]/40 text-xs text-[#00E599] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{successMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {!isLogin && (
            <div>
              <label className="block text-xs font-bold text-[#A7B0BD] uppercase tracking-wider mb-1">
                Full Legal Name <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#677284]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-[#0B0D10] border border-[#1C2430] rounded-lg text-white placeholder-[#677284] focus:outline-none focus:border-[#246BFD] focus:ring-1 focus:ring-[#246BFD]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#A7B0BD] uppercase tracking-wider mb-1">
              Email Address <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#677284]">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-[#0B0D10] border border-[#1C2430] rounded-lg text-white placeholder-[#677284] focus:outline-none focus:border-[#246BFD] focus:ring-1 focus:ring-[#246BFD]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#A7B0BD] uppercase tracking-wider mb-1">
              Password <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#677284]">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3.5 py-2.5 text-sm bg-[#0B0D10] border border-[#1C2430] rounded-lg text-white placeholder-[#677284] focus:outline-none focus:border-[#246BFD] focus:ring-1 focus:ring-[#246BFD]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-[#246BFD] hover:bg-[#1D58D8] rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#246BFD] disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{isLogin ? 'Sign In to Account' : 'Initialize Account Registration'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>

        {/* Security Assurance */}
        <div className="p-3 bg-[#0B0D10] border border-[#1C2430] rounded-lg flex items-center gap-2 text-[11px] text-[#A7B0BD]">
          <ShieldCheck className="w-4 h-4 text-[#00E599] shrink-0" />
          <span>Protected by Firebase Auth enterprise encryption &amp; secure session tokens.</span>
        </div>

        {/* Toggle between Login and Register */}
        <div className="pt-4 border-t border-[#1C2430] text-center text-xs text-[#A7B0BD]">
          {isLogin ? (
            <p>
              Don't have an account yet?{' '}
              <button
                type="button"
                onClick={() => onNavigate('/register')}
                className="text-[#4A8DFF] hover:underline font-semibold"
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
                className="text-[#4A8DFF] hover:underline font-semibold"
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
