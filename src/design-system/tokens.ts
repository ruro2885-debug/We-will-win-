/**
 * Crestiqtrades Design System Tokens
 * Deliberate, institutional aesthetic: NO GLASSMORPHISM.
 * Deep obsidian navy, precision cobalt & teal accents, solid surfaces, crisp architectural borders.
 */

export const tokens = {
  colors: {
    brand: {
      deep: '#0B0F19', // Main dark canvas
      surface: '#111827', // Primary solid cards
      surfaceElevated: '#161F33', // Elevated interactive panels
      surfaceHover: '#1E293B',
      borderSubtle: '#1E293B',
      borderProminent: '#334155',
      primaryBlue: '#2563EB',
      primaryDarkBlue: '#1D4ED8',
      cyanAccent: '#0284C7',
      tealAccent: '#0D9488',
      lightTeal: '#14B8A6',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
      muted: '#64748B',
      inverted: '#0F172A',
    },
    status: {
      success: '#10B981',
      successSurface: '#064E3B',
      warning: '#F59E0B',
      warningSurface: '#78350F',
      danger: '#EF4444',
      dangerSurface: '#7F1D1D',
      info: '#0284C7',
    },
    light: {
      background: '#FFFFFF',
      surface: '#F8FAFC',
      border: '#E2E8F0',
      textPrimary: '#0F172A',
      textSecondary: '#475569',
      textMuted: '#64748B',
    }
  },
  typography: {
    fontSans: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
  },
  layout: {
    maxWidth: '1280px',
    narrowWidth: '960px',
    readingWidth: '768px',
  },
  transitions: {
    default: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    smooth: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  }
} as const;
