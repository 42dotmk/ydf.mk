"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { PageHeader } from "@/components/page-header";
import {
  Heart,
  Handshake,
  Share2,
  ExternalLink,
  Building2,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function SupportUsPage() {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);

  const copyAccount = () => {
    navigator.clipboard.writeText("300000005356764").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const supportOptions = [
    {
      icon: Heart,
      titleKey: "support_donate_title",
      descKey: "support_donate_desc",
    },
    {
      icon: Handshake,
      titleKey: "support_partner_title",
      descKey: "support_partner_desc",
    },
    {
      icon: Share2,
      titleKey: "support_share_title",
      descKey: "support_share_desc",
    },
  ];

  return (
    <>
      <PageHeader
        title={t("support_page_title")}
        description={t("support_page_desc")}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        {/* Options grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {supportOptions.map((opt) => (
            <article
              key={opt.titleKey}
              className="flex flex-col gap-4 rounded-2xl border bg-card p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <opt.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-card-foreground">
                {t(opt.titleKey)}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {t(opt.descKey)}
              </p>
            </article>
          ))}
        </div>

        {/* Donation details */}
        <section className="mt-12 rounded-2xl bg-primary/5 p-8 lg:p-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            {t("pay_page_donate_title")}
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <a
              href="https://ecrowd.mk/projects/0a6981a1-4c92-497b-bfaf-a9e137b5b1c8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t("pay_page_ecrowd")}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
              <Building2
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <p className="text-sm text-muted-foreground">
                {t("pay_page_bank_details")}
              </p>
              <button
                type="button"
                onClick={copyAccount}
                aria-label={copied ? "Copied" : "Copy bank account number"}
                className="ml-auto shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("nav_contact")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
