"use client";

import { useLocale } from "@/lib/locale-context";
import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/animate";

export function NewsletterSection() {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ngo.ydf@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
        <FadeIn>
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20">
              <Mail
                className="h-7 w-7 text-primary-foreground"
                aria-hidden="true"
              />
            </div>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground lg:text-3xl">
            {t("newsletter_title")}
          </h2>
          <p className="mb-8 leading-relaxed text-primary-foreground/80">
            {t("newsletter_desc")}
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-3 backdrop-blur-sm">
              <Mail
                className="h-4 w-4 text-primary-foreground/60"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-primary-foreground">
                ngo.ydf@gmail.com
              </span>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? "Copied" : "Copy email address"}
                className="ml-2 rounded-md p-1.5 text-primary-foreground/60 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                {copied ? (
                  <Check className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
            {/* <p className="text-xs text-primary-foreground/60">
              {t("newsletter_copy_email")}
            </p> */}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
