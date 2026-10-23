import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signOut as fbSignOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

export interface AppUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  isDemo?: boolean;
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  signOut: () => Promise<void>;
  setSessionUser: (user: AppUser | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
  setSessionUser: () => {},
});

const SESSION_USER_KEY = 'crestiq_client_session_v1';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const stored = sessionStorage.getItem(SESSION_USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const u: AppUser = {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
        };
        setUser(u);
        try {
          sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(u));
        } catch {}
      } else {
        // If not in firebase auth, check if there's a stored session
        const stored = sessionStorage.getItem(SESSION_USER_KEY);
        if (stored) {
          try {
            setUser(JSON.parse(stored));
          } catch {}
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const setSessionUser = (sessionUser: AppUser | null) => {
    setUser(sessionUser);
    try {
      if (sessionUser) {
        sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(sessionUser));
      } else {
        sessionStorage.removeItem(SESSION_USER_KEY);
      }
    } catch {}
  };

  const signOut = async () => {
    try {
      await fbSignOut(auth);
    } catch {}
    setUser(null);
    try {
      sessionStorage.removeItem(SESSION_USER_KEY);
    } catch {}
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut, setSessionUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
