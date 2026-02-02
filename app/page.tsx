import { Hero } from "@/components/sections/hero";
import { RateComparison } from "@/components/sections/rate-comparison";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RateComparison />
      <CTASection />
    </>
  );
}
