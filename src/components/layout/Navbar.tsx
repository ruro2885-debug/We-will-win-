import React, { useState, useEffect, useRef } from 'react';
import { CrestiqLogo } from '../brand/CrestiqLogo';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Markets', path: '/markets' },
    { label: 'AI Trading', path: '/ai-trading' },
    { label: 'Copy Trading', path: '/copy-trading' },
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' },
  ];

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

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0F19] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => handleLinkClick('/')}
          className="focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md py-1 pr-2 transition-transform active:scale-[0.98]"
        >
          <CrestiqLogo variant="horizontal" theme="dark" size="md" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                type="button"
                onClick={() => handleLinkClick(link.path)}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'text-white bg-[#1E293B] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-[#111827]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Customer Call-to-Actions (Strictly customer-facing, no admin portal link!) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleLinkClick('/login')}
            className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white hover:bg-[#1E293B] rounded-lg border border-[#334155] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('/register')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#1E293B] rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Solid surface, no blur) */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden border-b border-[#1E293B] bg-[#0E1526] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleLinkClick(link.path)}
                  className={`flex items-center justify-between w-full text-left px-3.5 py-2.5 text-base font-medium rounded-lg ${
                    isActive
                      ? 'text-white bg-[#1E293B] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-[#161F33]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#1E293B] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => handleLinkClick('/login')}
              className="w-full text-center px-4 py-2.5 text-sm font-semibold text-slate-200 bg-[#161F33] hover:bg-[#1E293B] rounded-lg border border-[#334155] transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('/register')}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
