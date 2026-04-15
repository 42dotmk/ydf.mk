"use client";

import { useLocale } from "@/lib/locale-context";
import { PageHeader } from "@/components/page-header";

export default function PrivacyPage() {
  const { t, locale } = useLocale();

  return (
    <>
      <PageHeader title={t("privacy_title")} />
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t("privacy_desc")}
          </p>

          {locale === "mk" ? (
            <>
              <h2 className="mt-8 text-xl font-bold text-foreground">
                Собирање податоци
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Оваа веб-страница не собира лични податоци автоматски. Ако не
                контактирате преку формуларот за контакт, ги собираме само
                податоците што ги доставувате доброволно (име, е-пошта, порака).
              </p>
              <h2 className="mt-8 text-xl font-bold text-foreground">
                Употреба на податоци
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Вашите податоци ги користиме исклучиво за одговарање на вашите
                прашања и барања. Не ги споделуваме вашите информации со трети
                страни.
              </p>
              <h2 className="mt-8 text-xl font-bold text-foreground">
                Контакт
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                За прашања околу приватноста, контактирајте не на{" "}
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
                Data Collection
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                This website does not automatically collect personal data. If you
                contact us through the contact form, we only collect the
                information you voluntarily provide (name, email, message).
              </p>
              <h2 className="mt-8 text-xl font-bold text-foreground">
                Data Usage
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We use your data exclusively to respond to your inquiries and
                requests. We do not share your information with third parties.
              </p>
              <h2 className="mt-8 text-xl font-bold text-foreground">
                Contact
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                For privacy-related questions, please contact us at{" "}
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
