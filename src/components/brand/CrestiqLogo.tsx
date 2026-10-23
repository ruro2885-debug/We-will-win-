import React from 'react';

interface CrestiqLogoProps {
  variant?: 'horizontal' | 'symbol';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const CrestiqLogo: React.FC<CrestiqLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
  className = '',
}) => {
  const isLight = theme === 'light';

  // Dimension scaling
  const dimensions = {
    sm: { symbolSize: 28, height: 28, width: variant === 'horizontal' ? 160 : 28, fontSize: 16 },
    md: { symbolSize: 34, height: 34, width: variant === 'horizontal' ? 195 : 34, fontSize: 19 },
    lg: { symbolSize: 42, height: 42, width: variant === 'horizontal' ? 240 : 42, fontSize: 23 },
    xl: { symbolSize: 56, height: 56, width: variant === 'horizontal' ? 310 : 56, fontSize: 30 },
  }[size];

  const primaryGradientId = `crest-g1-${theme}-${size}`;
  const secondaryGradientId = `crest-g2-${theme}-${size}`;

  const SymbolSVG = (
    <svg
      width={dimensions.symbolSize}
      height={dimensions.symbolSize}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={primaryGradientId} x1="6" y1="36" x2="34" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isLight ? '#0F172A' : '#1D4ED8'} />
          <stop offset="100%" stopColor={isLight ? '#1E40AF' : '#0284C7'} />
        </linearGradient>
        <linearGradient id={secondaryGradientId} x1="12" y1="34" x2="38" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isLight ? '#0F766E' : '#0D9488'} />
          <stop offset="100%" stopColor={isLight ? '#0284C7' : '#2DD4BF'} />
        </linearGradient>
      </defs>

      {/* Hexagonal Shield Structure */}
      <path
        d="M20 3L35 12V28L20 37L5 28V12L20 3Z"
        stroke={isLight ? '#CBD5E1' : '#334155'}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Left Facet */}
      <path d="M10 26L20 9V32L10 26Z" fill={`url(#${primaryGradientId})`} />

      {/* Right Facet */}
      <path d="M30 26L20 9V32L30 26Z" fill={`url(#${secondaryGradientId})`} opacity="0.95" />

      {/* Crest Peak Cap */}
      <path d="M20 9L25 16H15L20 9Z" fill={isLight ? '#0284C7' : '#38BDF8'} />

      {/* Precision Core Line */}
      <path d="M20 9V34" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="9" r="1.75" fill="#FFFFFF" />
    </svg>
  );

  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`} aria-label="Crestiqtrades logo">
        {SymbolSVG}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`} aria-label="Crestiqtrades">
      {SymbolSVG}
      <span
        style={{ fontSize: `${dimensions.fontSize}px` }}
        className={`font-extrabold tracking-tight leading-none ${
          isLight ? 'text-slate-900' : 'text-white'
        }`}
      >
        Crestiq<span className={isLight ? 'text-sky-600 font-semibold' : 'text-sky-400 font-semibold'}>trades</span>
      </span>
    </div>
  );
};
