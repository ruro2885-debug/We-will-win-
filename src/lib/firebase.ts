import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';
import { parseConsentRecord, CONSENT_STORAGE_KEY } from '../utils/consentManager';

export const firebaseConfig = {
  apiKey: "AIzaSyAasIngQUhF_aCorhuAyqVCB78VYWLb0ko",
  authDomain: "crestiqtrades.firebaseapp.com",
  projectId: "crestiqtrades",
  storageBucket: "crestiqtrades.firebasestorage.app",
  messagingSenderId: "1095352352054",
  appId: "1:1095352352054:web:d6528e93b420be3918c797",
  measurementId: "G-Z6C13N1HC0"
};

// Initialize Firebase App instance
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Firebase Authentication instance
export const auth = getAuth(app);

// Firestore Database instance
export const db = getFirestore(app);

// Privacy-compliant Analytics instance (only initialized if user explicitly opted in to Analytics cookies)
let analyticsInstance: Analytics | null = null;

export async function initAnalyticsIfConsented(): Promise<Analytics | null> {
  if (typeof window === 'undefined') return null;
  if (analyticsInstance) return analyticsInstance;

  try {
    const rawConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    const consent = parseConsentRecord(rawConsent);

    // Strict consent check: only initialize when user explicitly enabled analytics
    if (consent && consent.hasConsented && consent.categories.analytics) {
      const supported = await isSupported();
      if (supported) {
        analyticsInstance = getAnalytics(app);
        return analyticsInstance;
      }
    }
  } catch (err) {
    // Non-fatal, privacy protection fallback
    console.debug('Firebase Analytics initialization skipped or deferred:', err);
  }
  return null;
}

// Auto-initialize when consent changes in client
if (typeof window !== 'undefined') {
  initAnalyticsIfConsented();
  window.addEventListener('crestiq_consent_updated', () => {
    initAnalyticsIfConsented();
  });
}

export default app;
