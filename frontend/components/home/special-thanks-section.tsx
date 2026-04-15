"use client";

import { FadeIn } from "@/components/animate";

export function SpecialThanksSection() {
    return (
        <section className="bg-background py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <FadeIn>
                    <h2 className="text-center text-2xl font-bold text-foreground lg:text-3xl">
                        Специјална благодарност до
                    </h2>
                </FadeIn>
                <div className="mt-12 flex items-center justify-center">
                    <FadeIn>
                        <a
                            href="https://42.mk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-card p-6 shadow-sm"
                        >
                            <img
                                src="/images/sponsors/base42.svg"
                                alt="Base42"
                                className="h-24 w-auto max-w-full object-contain opacity-80 transition-opacity hover:opacity-100 md:h-28 dark:hidden"
                                loading="lazy"
                                decoding="async"
                            />
                            <img
                                src="/images/sponsors/base42-dark.svg"
                                alt="Base42"
                                className="hidden h-24 w-auto max-w-full object-contain opacity-80 transition-opacity hover:opacity-100 md:h-28 dark:block"
                                loading="lazy"
                                decoding="async"
                            />
                        </a>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
