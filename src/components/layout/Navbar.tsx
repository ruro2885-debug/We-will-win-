import React, { useState, useEffect, useRef } from 'react';
import { CrestiqLogo } from '../brand/CrestiqLogo';
import { Menu, X, ArrowRight, ShieldCheck, User, LogOut, LayoutDashboard, Wallet, PieChart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const { user, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const publicLinks = [
    { label: 'Home', path: '/' },
    { label: 'Markets', path: '/markets' },
    { label: 'AI Trading', path: '/ai-trading' },
    { label: 'Copy Trading', path: '/copy-trading' },
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' },
  ];

  const authenticatedLinks = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Portfolio', path: '/portfolio', icon: PieChart },
    { label: 'Wallet', path: '/wallet', icon: Wallet },
    { label: 'Markets', path: '/markets' },
    { label: 'AI Trading', path: '/ai-trading' },
    { label: 'Copy Trading', path: '/copy-trading' },
    { label: 'Support', path: '/support' },
  ];

  const navLinks = user ? authenticatedLinks : publicLinks;

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !toggleButtonRef.current?.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    onNavigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0D10] border-b border-[#1C2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Approved Crestiq Shield with apex needle */}
        <button
          type="button"
          onClick={() => handleLinkClick('/')}
          className="focus:outline-none focus:ring-2 focus:ring-[#246BFD] rounded-md py-1 pr-2 transition-transform active:scale-[0.98]"
        >
          <CrestiqLogo variant="horizontal" theme="dark" size="md" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                type="button"
                onClick={() => handleLinkClick(link.path)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  isActive
                    ? 'text-white bg-[#181E27] border border-[#2A3648]'
                    : 'text-[#A7B0BD] hover:text-white hover:bg-[#11151B]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Customer Call-to-Actions (Strictly customer-facing, zero admin exposure) */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => handleLinkClick('/dashboard')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11151B] border border-[#1C2430] text-xs font-semibold text-white hover:border-[#2A3648] transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#00E599]"></div>
                <span className="font-mono">{user.displayName || user.email?.split('@')[0] || 'Client'}</span>
              </button>
              <button
                type="button"
                onClick={handleSignOut}
                className="p-2 text-[#A7B0BD] hover:text-[#FF4D4D] bg-[#11151B] hover:bg-[#181E27] rounded-lg border border-[#1C2430] transition-colors"
                title="Sign Out"
                aria-label="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={() => handleLinkClick('/login')}
                className="px-3.5 py-1.5 text-xs font-bold text-[#A7B0BD] hover:text-white hover:bg-[#181E27] rounded-lg border border-[#1C2430] transition-colors focus:outline-none focus:ring-2 focus:ring-[#246BFD]"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/register')}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#246BFD] hover:bg-[#1D58D8] rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#246BFD]"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#A7B0BD] hover:text-white hover:bg-[#181E27] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#246BFD]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Solid surface, zero glassmorphism) */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden border-b border-[#1C2430] bg-[#11151B] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleLinkClick(link.path)}
                  className={`flex items-center justify-between w-full text-left px-3.5 py-2.5 text-sm font-bold rounded-lg ${
                    isActive
                      ? 'text-white bg-[#181E27] border border-[#2A3648]'
                      : 'text-[#A7B0BD] hover:text-white hover:bg-[#181E27]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#4A8DFF]"></span>}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#1C2430] flex flex-col gap-2.5">
            {user ? (
              <button
                type="button"
                onClick={handleSignOut}
                className="w-full text-center px-4 py-2.5 text-xs font-bold text-[#FF4D4D] bg-[#181E27] hover:bg-[#380E0E] rounded-lg border border-[#1C2430] transition-colors"
              >
                Sign Out ({user.displayName || user.email})
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => handleLinkClick('/login')}
                  className="w-full text-center px-4 py-2.5 text-xs font-bold text-[#F5F7FA] bg-[#181E27] hover:bg-[#1F2733] rounded-lg border border-[#2A3648] transition-colors"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick('/register')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#246BFD] hover:bg-[#1D58D8] rounded-lg shadow-sm transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
