"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowRight, Check, X, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    name: "Personal",
    description: "For individuals sending money internationally.",
    price: "Free",
    priceDetail: "to get started",
    fee: "0.5%",
    feeLabel: "per transfer",
    popular: false,
    features: [
      { text: "Up to $5,000 per transfer", included: true },
      { text: "3 free transfers per month", included: true },
      { text: "Google mid-market rates", included: true },
      { text: "Live transfer tracking", included: true },
      { text: "Email & chat support", included: true },
      { text: "Bank & mobile wallet delivery", included: true },
      { text: "Scheduled transfers", included: false },
      { text: "Priority support", included: false },
      { text: "API access", included: false },
    ],
    cta: "Start Free",
  },
  {
    name: "Premium",
    description: "For frequent senders who want the lowest rates and most features.",
    price: "$9.99",
    priceDetail: "per month",
    fee: "0.25%",
    feeLabel: "per transfer",
    popular: true,
    features: [
      { text: "Up to $25,000 per transfer", included: true },
      { text: "Unlimited free transfers", included: true },
      { text: "Best rates guaranteed", included: true },
      { text: "Live transfer tracking", included: true },
      { text: "Priority 24/7 support", included: true },
      { text: "All delivery methods", included: true },
      { text: "Scheduled & recurring transfers", included: true },
      { text: "Rate alerts", included: true },
      { text: "API access", included: false },
    ],
    cta: "Go Premium",
  },
  {
    name: "Business",
    description: "For companies with payroll, vendor payments, or high-volume needs.",
    price: "$49.99",
    priceDetail: "per month",
    fee: "0.15%",
    feeLabel: "per transfer",
    popular: false,
    features: [
      { text: "Up to $100,000 per transfer", included: true },
      { text: "Unlimited free transfers", included: true },
      { text: "Wholesale exchange rates", included: true },
      { text: "Tracking, reports & analytics", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "All delivery methods", included: true },
      { text: "Batch & scheduled transfers", included: true },
      { text: "Rate alerts & lock-in", included: true },
      { text: "Full API access", included: true },
    ],
    cta: "Talk to Sales",
  },
];

const comparisons = [
  { provider: "DattaPay", fee: "$5.00", rate: "83.25", received: "\u20B982,420", highlight: true },
  { provider: "Traditional Bank", fee: "$45.00", rate: "80.50", received: "\u20B976,878", highlight: false },
  { provider: "Competitor A", fee: "$7.99", rate: "82.10", received: "\u20B981,445", highlight: false },
  { provider: "Competitor B", fee: "$3.99", rate: "81.80", received: "\u20B981,415", highlight: false },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

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
              We show you the full cost upfront — the fee, the rate, and exactly how much gets delivered. That&apos;s it.
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative h-7 w-12 rounded-full transition-colors ${isAnnual ? "bg-primary" : "bg-muted"}`}
              >
                <span className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${isAnnual ? "translate-x-5" : "translate-x-0"}`} />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
                Annual{" "}
                <span className="ml-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-600 dark:bg-green-950/30 dark:text-green-400">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full transition-all hover:-translate-y-1 hover:shadow-xl ${
                    plan.popular
                      ? "border-2 border-primary shadow-xl shadow-primary/10"
                      : "border-border/50"
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-primary px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-4 pt-8">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-bold ${plan.popular ? "text-primary" : ""}`}>
                          {plan.price === "Free"
                            ? "Free"
                            : isAnnual
                              ? `$${(parseFloat(plan.price.replace("$", "")) * 0.8).toFixed(2)}`
                              : plan.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          /{plan.priceDetail}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        + {plan.fee} {plan.feeLabel}
                      </p>
                    </div>

                    <Separator />

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                          ) : (
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/30" />
                          )}
                          <span className={`text-sm ${feature.included ? "" : "text-muted-foreground/50"}`}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full rounded-full ${plan.popular ? "shadow-lg shadow-primary/20" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                      asChild
                    >
                      <Link href="/contact">
                        {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Comparison */}
      <section className="border-t bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Numbers{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Speak for Themselves
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sending $1,000 USD to India — see how much more actually gets delivered with DattaPay.
            </p>
          </div>

          <motion.div
            className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border/50 bg-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
                <span className={`text-center ${comp.highlight ? "font-semibold text-green-600 dark:text-green-400" : "text-muted-foreground"}`}>{comp.fee}</span>
                <span className="text-center text-muted-foreground">{comp.rate}</span>
                <span className={`text-right font-bold ${comp.highlight ? "text-primary" : ""}`}>
                  {comp.received}
                </span>
              </div>
            ))}
            <div className="border-t border-border/50 bg-muted/30 px-6 py-3">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Info className="h-3 w-3" />
                Rates as of today. Actual rates may vary at time of transfer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 sm:py-24">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Try It Free — Your First 3 Transfers on Us
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              No commitment required. Sign up, send money, and see the savings yourself.
            </p>
            <Button
              size="lg"
              className="mt-8 h-14 rounded-full bg-white px-8 text-base font-semibold text-primary shadow-xl hover:bg-white/90"
              asChild
            >
              <Link href="/contact">
                Send Money Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
