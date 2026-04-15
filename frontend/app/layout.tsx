import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SkipLink } from "@/components/skip-link";
import { ThemeProvider } from "@/components/theme-provider";

const _inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Млади од семејна разновидност | Youth of Diverse Families",
  description:
    "Здружение на млади кое работи со и за млади кои доаѓаат од различни семејни конструкции. A youth association supporting young people from diverse family structures.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f37161" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mk" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');var s=window.matchMedia('(prefers-color-scheme: dark)').matches;var d=t==='dark'||(!t||t==='system')&&s;var c=d?'dark':'light';var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=c;}catch(e){}})();`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <SkipLink />
            <Header />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
