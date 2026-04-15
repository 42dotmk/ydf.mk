"use client";

import { useLocale } from "@/lib/locale-context";

export function SkipLink() {
  const { t } = useLocale();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
    >
      {t("skip_to_content")}
    </a>
  );
}
