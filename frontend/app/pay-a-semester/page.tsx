"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { PageHeader } from "@/components/page-header";
import {
  GraduationCap,
  ExternalLink,
  Building2,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { SponsorsSection } from "@/components/home/sponsors-section";

export default function PayASemesterPage() {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);

  const copyAccount = () => {
    navigator.clipboard.writeText("300000005356764").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <PageHeader
        title={t("pay_page_title")}
        description={t("pay_page_desc")}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        {/* Impact stat */}
        <div className="mb-12 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-primary/5 p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <GraduationCap
                className="h-8 w-8 text-primary-foreground"
                aria-hidden="true"
              />
            </div>
            <span className="text-4xl font-bold text-primary">111+</span>
            <p className="max-w-sm text-sm text-muted-foreground">
              {t("pay_page_impact")}
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Donate */}
          <section className="rounded-2xl border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold text-card-foreground">
              {t("pay_page_donate_title")}
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {t("pay_page_donate_desc")}
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://ecrowd.mk/projects/0a6981a1-4c92-497b-bfaf-a9e137b5b1c8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t("pay_page_ecrowd")}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>

              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Building2
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  {t("pay_page_bank")}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    {t("pay_page_bank_details")}
                  </p>
                  <button
                    type="button"
                    onClick={copyAccount}
                    aria-label={copied ? "Copied" : "Copy bank account number"}
                    className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {copied ? (
                      <Check
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Apply */}
          <section className="rounded-2xl border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold text-card-foreground">
              {t("pay_page_apply_title")}
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {t("pay_page_apply_desc")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              {t("nav_contact")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </div>
      </div>
      <SponsorsSection />
    </>
  );
}
