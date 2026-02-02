import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about-section";
import { RateComparison } from "@/components/sections/rate-comparison";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <RateComparison />
      <FAQSection />
      <ContactSection />
    </>
  );
}
