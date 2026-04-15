"use client";

import { useLocale } from "@/lib/locale-context";
import { type Locale, localeNames } from "@/lib/i18n";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher({
  tone = "default",
  mobile = false,
}: {
  tone?: "default" | "inverse";
  mobile?: boolean;
}) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={t("language")}
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          tone === "inverse"
            ? "text-primary-foreground hover:bg-primary-foreground/10"
            : "text-foreground hover:bg-accent"
        }`}
      >
        <span>{localeNames[locale]}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t("language")}
          className={`absolute top-full z-[1000] mt-1 overflow-hidden rounded-lg border bg-popover shadow-lg ${
            mobile ? "left-0 w-[220px]" : "right-0 min-w-[180px]"
          }`}
        >
          {(Object.keys(localeNames) as Locale[]).map((loc) => (
            <li
              key={loc}
              role="option"
              aria-selected={locale === loc}
              onClick={() => {
                setLocale(loc);
                setOpen(false);
              }}
              className={`flex items-center w-full px-4 py-2.5 text-sm transition-colors cursor-pointer hover:bg-accent ${
                locale === loc
                  ? "font-semibold text-primary"
                  : "text-foreground"
              }`}
            >
              {localeNames[loc]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
