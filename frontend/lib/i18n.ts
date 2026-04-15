import mk from "@/lib/translations/mk.json";
import en from "@/lib/translations/en.json";
import de from "@/lib/translations/de.json";
import it from "@/lib/translations/it.json";
import fr from "@/lib/translations/fr.json";
import sr from "@/lib/translations/sr.json";
import sq from "@/lib/translations/sq.json";

export type Locale = "mk" | "en" | "de" | "it" | "fr" | "sr" | "sq";

export const defaultLocale: Locale = "mk";

const translations: Record<Locale, Record<string, string>> = {
  mk,
  en,
  de,
  it,
  fr,
  sr,
  sq,
};

export function t(key: string, locale: Locale): string {
  return (
    translations[locale]?.[key] ?? translations[defaultLocale]?.[key] ?? key
  );
}

export const localeNames: Record<Locale, string> = {
  en: "🇬🇧 English",
  mk: "🇲🇰 Македонски",
  sq: "🇦🇱 Shqip",
  sr: "🇷🇸 Srpski",
  fr: "🇫🇷 Français",
  de: "🇩🇪 Deutsch",
  it: "🇮🇹 Italiano",
};
