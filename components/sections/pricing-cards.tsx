"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { motion } from "framer-motion";

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
      { text: "3 free transfers/month", included: true },
      { text: "Google mid-market rates", included: true },
      { text: "Live transfer tracking", included: true },
      { text: "Email & chat support", included: true },
      { text: "Scheduled transfers", included: false },
      { text: "API access", included: false },
    ],
    cta: "Start Free",
  },
  {
    name: "Premium",
    description: "For frequent senders who want the best rates.",
    price: "$9.99",
    priceDetail: "per month",
    fee: "0.25%",
    feeLabel: "per transfer",
    popular: true,
    features: [
      { text: "Up to $25,000 per transfer", included: true },
      { text: "Unlimited free transfers", included: true },
      { text: "Best rates guaranteed", included: true },
      { text: "Priority 24/7 support", included: true },
      { text: "Scheduled & recurring", included: true },
      { text: "Rate alerts", included: true },
      { text: "API access", included: false },
    ],
    cta: "Go Premium",
  },
  {
    name: "Business",
    description: "For payroll, vendor payments, and high volume.",
    price: "$49.99",
    priceDetail: "per month",
    fee: "0.15%",
    feeLabel: "per transfer",
    popular: false,
    features: [
      { text: "Up to $100,000 per transfer", included: true },
      { text: "Unlimited free transfers", included: true },
      { text: "Wholesale exchange rates", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Batch & scheduled transfers", included: true },
      { text: "Rate alerts & lock-in", included: true },
      { text: "Full API access", included: true },
    ],
    cta: "Talk to Sales",
  },
];

export function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      {/* Billing Toggle */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
          Monthly
        </span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className={`relative h-7 w-12 rounded-full transition-colors ${isAnnual ? "bg-primary" : "bg-muted"}`}
        >
          <span
            className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
              isAnnual ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
          Annual{" "}
          <span className="ml-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-600 dark:bg-green-950/30 dark:text-green-400">
            Save 20%
          </span>
        </span>
      </div>

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
                        <span className="text-sm text-muted-foreground">/{plan.priceDetail}</span>
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
    </>
  );
}
