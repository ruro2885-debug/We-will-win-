/**
 * Crestiqtrades Design System Tokens
 * Deliberate, institutional fintech aesthetic: NO GLASSMORPHISM.
 * Palette: Controlled blue, white, and black:
 *   #0B0D10 primary dark canvas
 *   #11151B secondary dark cards & surfaces
 *   #181E27 elevated surface & modal frames
 *   #246BFD primary blue
 *   #4A8DFF supporting blue
 *   #FFFFFF / #F5F7FA clean whites
 *   #A7B0BD secondary text
 *   #677284 muted tertiary text
 *   #00E599 restrained positive / #FF4D4D restrained negative
 */

export const tokens = {
  colors: {
    brand: {
      deep: '#0B0D10', // Primary dark canvas
      surface: '#11151B', // Secondary dark cards
      surfaceElevated: '#181E27', // Elevated interactive panels & modal surfaces
      surfaceHover: '#1F2733',
      borderSubtle: '#1C2430',
      borderProminent: '#2A3648',
      primaryBlue: '#246BFD',
      supportingBlue: '#4A8DFF',
      blueTint: '#12234A',
    },
    text: {
      primary: '#FFFFFF',
      soft: '#F5F7FA',
      secondary: '#A7B0BD',
      muted: '#677284',
      inverted: '#0B0D10',
    },
    status: {
      success: '#00E599',
      successSurface: '#072E20',
      warning: '#F5A623',
      warningSurface: '#332305',
      danger: '#FF4D4D',
      dangerSurface: '#380E0E',
      info: '#246BFD',
    },
    light: {
      background: '#FFFFFF',
      surface: '#F5F7FA',
      border: '#E2E8F0',
      textPrimary: '#0B0D10',
      textSecondary: '#4A5568',
      textMuted: '#718096',
    }
  },
  typography: {
    fontSans: "'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontMono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
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
