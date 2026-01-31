import { Hero } from "@/components/sections/hero";
import { FeaturePills } from "@/components/sections/feature-pills";
import { CorridorFlags } from "@/components/sections/corridor-flags";
import { CurrencyConverter } from "@/components/sections/currency-converter";
import { FeaturesHighlight } from "@/components/sections/features-highlight";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { RateComparison } from "@/components/sections/rate-comparison";
import { CoverageSection } from "@/components/sections/coverage";
import { ReferralSection } from "@/components/sections/referral-section";
import { SocialProof } from "@/components/sections/social-proof";
import { PartnersSection } from "@/components/sections/partners-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturePills />
      <CurrencyConverter />
      <CorridorFlags />
      <FeaturesHighlight />
      <HowItWorksSection />
      <RateComparison />
      <ReferralSection />
      <CoverageSection />
      <SocialProof />
      <PartnersSection />
      <CTASection />
    </>
  );
}
