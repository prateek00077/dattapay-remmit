import { Hero } from "@/components/sections/hero";
import { CurrencyConverter } from "@/components/sections/currency-converter";
import { FeaturesHighlight } from "@/components/sections/features-highlight";
import { RateComparison } from "@/components/sections/rate-comparison";
import { SocialProof } from "@/components/sections/social-proof";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CurrencyConverter />
      <FeaturesHighlight />
      <RateComparison />
      <SocialProof />
      <CTASection />
    </>
  );
}
