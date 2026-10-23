/**
 * Cookie Consent Manager for Crestiqtrades
 * Handles persistent user consent without deceptive dark patterns.
 * Supports: Necessary (essential, locked), Analytics (optional), Marketing (optional).
 */

export interface CookieConsentCategories {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookieConsentRecord {
  version: string;
  timestamp: string;
  hasConsented: boolean;
  categories: CookieConsentCategories;
}

export const CONSENT_STORAGE_KEY = 'crestiq_cookie_consent_v1';
export const CURRENT_CONSENT_VERSION = '1.0.0';

export function createDefaultConsentRecord(): CookieConsentRecord {
  return {
    version: CURRENT_CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    hasConsented: false,
    categories: {
      necessary: true,
      analytics: false,
      marketing: false,
    },
  };
}

export function parseConsentRecord(rawJson: string | null): CookieConsentRecord | null {
  if (!rawJson) return null;
  try {
    const data = JSON.parse(rawJson);
    if (data && data.version && data.categories) {
      return {
        version: data.version,
        timestamp: data.timestamp || new Date().toISOString(),
        hasConsented: Boolean(data.hasConsented),
        categories: {
          necessary: true, // Always required
          analytics: Boolean(data.categories.analytics),
          marketing: Boolean(data.categories.marketing),
        },
      };
    }
  } catch {
    // Malformed storage
  }
  return null;
}

export function buildAcceptAllRecord(): CookieConsentRecord {
  return {
    version: CURRENT_CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    hasConsented: true,
    categories: {
      necessary: true,
      analytics: true,
      marketing: true,
    },
  };
}

export function buildRejectAllRecord(): CookieConsentRecord {
  return {
    version: CURRENT_CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    hasConsented: true,
    categories: {
      necessary: true,
      analytics: false,
      marketing: false,
    },
  };
}

export function buildCustomRecord(prefs: { analytics: boolean; marketing: boolean }): CookieConsentRecord {
  return {
    version: CURRENT_CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    hasConsented: true,
    categories: {
      necessary: true,
      analytics: Boolean(prefs.analytics),
      marketing: Boolean(prefs.marketing),
    },
  };
}
