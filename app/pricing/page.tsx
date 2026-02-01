import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PricingCards } from "@/components/sections/pricing-cards";

const comparisons = [
  { provider: "DattaPay", fee: "$5.00", rate: "83.25", received: "₹82,420", highlight: true },
  { provider: "Traditional Bank", fee: "$45.00", rate: "80.50", received: "₹76,878", highlight: false },
  { provider: "Competitor A", fee: "$7.99", rate: "82.10", received: "₹81,445", highlight: false },
  { provider: "Competitor B", fee: "$3.99", rate: "81.80", received: "₹81,415", highlight: false },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              Pricing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Honest Pricing.{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                No Surprises.
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Full cost upfront — the fee, the rate, and exactly how much gets delivered.
            </p>
          </div>

          {/* Client component: toggle + animated cards */}
          <PricingCards />
        </div>
      </section>

      {/* Rate Comparison */}
      <section className="border-t bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Compare{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                the Numbers
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground">Sending $1,000 USD to India</p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border/50 bg-card">
            <div className="grid grid-cols-4 gap-4 bg-muted/50 px-6 py-3 text-sm font-semibold text-muted-foreground">
              <span>Provider</span>
              <span className="text-center">Fee</span>
              <span className="text-center">Rate (INR)</span>
              <span className="text-right">Received</span>
            </div>
            {comparisons.map((comp) => (
              <div
                key={comp.provider}
                className={`grid grid-cols-4 gap-4 border-t border-border/50 px-6 py-4 text-sm ${
                  comp.highlight ? "bg-primary/5" : ""
                }`}
              >
                <span className="flex items-center gap-2 font-medium">
                  {comp.highlight && <span className="h-2 w-2 rounded-full bg-primary" />}
                  {comp.provider}
                </span>
                <span
                  className={`text-center ${comp.highlight ? "font-semibold text-green-600 dark:text-green-400" : "text-muted-foreground"}`}
                >
                  {comp.fee}
                </span>
                <span className="text-center text-muted-foreground">{comp.rate}</span>
                <span className={`text-right font-bold ${comp.highlight ? "text-primary" : ""}`}>
                  {comp.received}
                </span>
              </div>
            ))}
            <div className="border-t border-border/50 bg-muted/30 px-6 py-3">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Info className="h-3 w-3" />
                Rates as of today. Actual rates may vary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              First 3 Transfers{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Free
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              No commitment. Sign up, send money, and see the savings.
            </p>
            <Button
              size="lg"
              className="group mt-10 h-14 rounded-full px-10 text-base font-semibold shadow-lg shadow-primary/20"
              asChild
            >
              <Link href="/contact">
                Send Money Free{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
