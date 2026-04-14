"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    labelKey: "social_facebook",
    href: "https://www.facebook.com/profile.php?id=100090537676744",
    icon: Facebook,
  },
  {
    labelKey: "social_linkedin",
    href: "https://www.linkedin.com/company/ngo-youth-of-diverse-families/",
    icon: Linkedin,
  },
  {
    labelKey: "social_instagram",
    href: "https://www.instagram.com/ydf.mk",
    icon: Instagram,
  },
];

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40 text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/images/ydfmk.png"
                alt=""
                className="h-10 w-10 rounded-full b dark:hidden"
              />
              <img
                src="/images/ydf-white.png"
                alt=""
                className="hidden h-10 w-10 rounded-full border-2 border-primary-foreground dark:block"
              />
              <span className="text-lg font-bold">YDF.MK</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("hero_subtitle")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t("nav_organization")}
            </h2>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t("nav_about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t("nav_opportunities")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t("nav_blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pay-a-semester"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t("nav_pay_semester")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t("nav_contact")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t("contact_follow_us")}
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ngo.ydf@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                ngo.ydf@gmail.com
              </a>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.labelKey}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(link.labelKey)}
                    className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <link.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {year} {t("site_name")}. {t("footer_rights")}
          </p>
          <div className="flex gap-4">
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("footer_accessibility")}
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("footer_privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
