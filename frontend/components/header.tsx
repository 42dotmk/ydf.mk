"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTheme } from "@/hooks/use-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, Monitor, Moon, Sun, X } from "lucide-react";

interface NavItem {
  labelKey: string;
  href?: string;
  children?: { labelKey: string; href: string }[];
}

const navItems: NavItem[] = [
  { labelKey: "nav_home", href: "/" },
  {
    labelKey: "nav_organization",
    children: [
      { labelKey: "nav_about", href: "/about" },
      // { labelKey: "nav_projects", href: "/projects" },
    ],
  },
  {
    labelKey: "nav_for_youth",
    children: [
      { labelKey: "nav_opportunities", href: "/opportunities" },
      { labelKey: "nav_blog", href: "/blog" },
      // { labelKey: "nav_events", href: "/events" },
      { labelKey: "nav_news", href: "/news" },
    ],
  },
  {
    labelKey: "nav_support",
    children: [
      { labelKey: "nav_pay_semester", href: "/pay-a-semester" },
      { labelKey: "nav_support_us", href: "/support-us" },
    ],
  },
  { labelKey: "nav_contact", href: "/contact" },
];

function ThemeToggle({ tone = "default" }: { tone?: "default" | "inverse" }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : "system";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={`rounded-lg p-2 transition-colors ${
            tone === "inverse"
              ? "text-primary-foreground hover:bg-primary-foreground/10"
              : "text-foreground hover:bg-accent"
          }`}
          aria-label="Toggle theme"
        >
          <span className="sr-only">Toggle theme</span>
          {currentTheme === "light" ? (
            <Sun
              className={`h-4 w-4 transition-opacity ${mounted ? "opacity-100" : "opacity-0"}`}
              aria-hidden="true"
            />
          ) : currentTheme === "dark" ? (
            <Moon
              className={`h-4 w-4 transition-opacity ${mounted ? "opacity-100" : "opacity-0"}`}
              aria-hidden="true"
            />
          ) : (
            <Monitor
              className={`h-4 w-4 transition-opacity ${mounted ? "opacity-100" : "opacity-0"}`}
              aria-hidden="true"
            />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={6} className="min-w-[140px]">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={theme || "system"}
          onValueChange={setTheme}
        >
          <DropdownMenuRadioItem value="system">
            <Monitor className="h-4 w-4" />
            System
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="light">
            <Sun className="h-4 w-4" />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <Moon className="h-4 w-4" />
            Dark
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DesktopDropdown({
  item,
  t,
}: {
  item: NavItem;
  t: (key: string) => string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
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
    <div ref={ref} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
      >
        {t(item.labelKey)}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul className="absolute left-0 top-full z-[1000] mt-1 min-w-[180px] overflow-hidden rounded-lg border bg-popover shadow-lg">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {t(child.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MobileAccordion({
  item,
  t,
  onNavigate,
}: {
  item: NavItem;
  t: (key: string) => string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-foreground"
      >
        {t(item.labelKey)}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul className="pb-2">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block px-8 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {t(child.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const { t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    hamburgerRef.current?.focus();
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeMobile();
        return;
      }
      if (e.key === "Tab" && mobileMenuRef.current) {
        const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, closeMobile]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-primary/60 bg-primary text-primary-foreground shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label={t("site_name")}
          >
            <img
              src="/images/ydf-white.png"
              alt=""
              className="h-9 w-9 object-contain rounded-full border-2 border-primary-foreground"
            />
            <span className="hidden text-lg font-bold text-primary-foreground sm:inline">
              YDF.MK
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) =>
              item.href ? (
                <Link
                  key={item.labelKey}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  {t(item.labelKey)}
                </Link>
              ) : (
                <DesktopDropdown key={item.labelKey} item={item} t={t} />
              ),
            )}
          </nav>

          {/* Desktop language switcher */}
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle tone="inverse" />
            <LanguageSwitcher tone="inverse" />
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t("close_menu") : t("open_menu")}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-primary-foreground transition-colors hover:bg-primary-foreground/10 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu - rendered outside header to avoid stacking context */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 top-[61px] z-[999] bg-background lg:hidden"
          style={{ pointerEvents: "none" }}
        >
          <div
            className="flex h-full flex-col overflow-y-auto"
            style={{ pointerEvents: "auto" }}
          >
            <div className="border-b px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <LanguageSwitcher mobile />
                <ThemeToggle />
              </div>
            </div>
            <nav aria-label="Mobile navigation">
              <ul>
                {navItems.map((item) => (
                  <li key={item.labelKey} className="border-b">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className="block px-4 py-3 text-base font-medium text-foreground"
                      >
                        {t(item.labelKey)}
                      </Link>
                    ) : (
                      <MobileAccordion
                        item={item}
                        t={t}
                        onNavigate={closeMobile}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
