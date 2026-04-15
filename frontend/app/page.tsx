import { HeroSection } from "@/components/home/hero-section";
import { PillarsSection } from "@/components/home/pillars-section";
import { PaySemesterTeaser } from "@/components/home/pay-semester-teaser";
import { OpportunitiesTeaser } from "@/components/home/opportunities-teaser";
import { SupportTeaser } from "@/components/home/support-teaser";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { SponsorsSection } from "@/components/home/sponsors-section";
import { NetworksSection } from "@/components/home/network-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <PaySemesterTeaser />
      <OpportunitiesTeaser />
      <SupportTeaser />
      <SponsorsSection />
      <NetworksSection />
      <NewsletterSection />
    </>
  );
}
