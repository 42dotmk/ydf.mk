"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { type Locale, defaultLocale, t as translate } from "@/lib/i18n";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const STORAGE_KEY = "ydf-locale";

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "mk" || stored === "en") return stored;
  } catch {
    // localStorage not available
  }
  return defaultLocale;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = getStoredLocale();
    setLocaleState(stored);
    document.documentElement.lang = stored;
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // localStorage not available
    }
  }, []);

  const t = useCallback((key: string) => translate(key, locale), [locale]);

  // Prevent flash of wrong locale text
  if (!mounted) {
    return (
      <LocaleContext.Provider
        value={{
          locale: defaultLocale,
          setLocale,
          t: (key: string) => translate(key, defaultLocale),
        }}
      >
        {children}
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
