"use client";

import { useLocale } from "@/lib/locale-context";
import { PageHeader } from "@/components/page-header";

export default function AccessibilityPage() {
  const { t, locale } = useLocale();

  return (
    <>
      <PageHeader title={t("accessibility_title")} />
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t("accessibility_desc")}
          </p>

          {locale === "mk" ? (
            <>
              <h2 className="mt-8 text-xl font-bold text-foreground">
                Нашата посветеност
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Се стремиме да обезбедиме дека нашата веб-страница е пристапна
                за сите корисници, вклучувајќи луѓе со попреченост. Нашата
                веб-страница е дизајнирана во согласност со WCAG 2.2 AA
                стандардите за пристапност.
              </p>
              <h2 className="mt-8 text-xl font-bold text-foreground">
                Карактеристики на пристапност
              </h2>
              <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                <li>Навигација со тастатура за сите интерактивни елементи</li>
                <li>Видливи индикатори за фокус</li>
                <li>Семантичка HTML структура</li>
                <li>Алтернативен текст за слики</li>
                <li>Контраст на бои во согласност со AA стандардите</li>
                <li>Поддршка за намалено движење</li>
                <li>Прескокнување до главна содржина</li>
              </ul>
              <h2 className="mt-8 text-xl font-bold text-foreground">
                Контакт
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Ако наидете на проблеми со пристапноста, контактирајте не на{" "}
                <a
                  href="mailto:ngo.ydf@gmail.com"
                  className="text-primary underline"
                >
                  ngo.ydf@gmail.com
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <h2 className="mt-8 text-xl font-bold text-foreground">
                Our Commitment
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We strive to ensure our website is accessible to all users,
                including people with disabilities. Our website is designed in
                accordance with WCAG 2.2 AA accessibility standards.
              </p>
              <h2 className="mt-8 text-xl font-bold text-foreground">
                Accessibility Features
              </h2>
              <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                <li>Keyboard navigation for all interactive elements</li>
                <li>Visible focus indicators</li>
                <li>Semantic HTML structure</li>
                <li>Alternative text for images</li>
                <li>Color contrast meeting AA standards</li>
                <li>Reduced motion support</li>
                <li>Skip to main content link</li>
              </ul>
              <h2 className="mt-8 text-xl font-bold text-foreground">
                Contact
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                If you encounter any accessibility issues, please contact us at{" "}
                <a
                  href="mailto:ngo.ydf@gmail.com"
                  className="text-primary underline"
                >
                  ngo.ydf@gmail.com
                </a>
                .
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
