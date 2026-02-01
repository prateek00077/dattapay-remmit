"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const providers = [
  { name: "DattaPay", highlight: true, fee: "$0", exchangeRate: "83.25", received: "₹83,250", savings: null, features: { instantTransfer: true, noFees: true, midMarketRate: true, tracking: true } },
  { name: "Western Union", highlight: false, fee: "$14.99", exchangeRate: "80.22", received: "₹79,020", savings: "₹4,230", features: { instantTransfer: false, noFees: false, midMarketRate: false, tracking: true } },
  { name: "Your Bank", highlight: false, fee: "$45.00", exchangeRate: "79.85", received: "₹76,257", savings: "₹6,993", features: { instantTransfer: false, noFees: false, midMarketRate: false, tracking: false } },
  { name: "PayPal", highlight: false, fee: "$4.99", exchangeRate: "80.90", received: "₹80,495", savings: "₹2,755", features: { instantTransfer: true, noFees: false, midMarketRate: false, tracking: true } },
];

const featureLabels: Record<string, string> = {
  instantTransfer: "Instant Delivery",
  noFees: "Zero Transfer Fees",
  midMarketRate: "Mid-Market Rate",
  tracking: "Live Tracking",
};

export function RateComparison() {
  return (
    <section className="border-t bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Headline & Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              <TrendingUp className="mr-1.5 h-3 w-3" /> Rate Comparison
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Stop Overpaying{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                on Transfers
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Sending $1,000 USD to India — compare how much actually gets delivered with each provider. The difference adds up fast.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border/50 bg-green-50 p-5 text-center dark:bg-green-950/30">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">₹83,250</div>
                <div className="mt-1 text-sm text-muted-foreground">Delivered with DattaPay</div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-red-50 p-5 text-center dark:bg-red-950/30">
                <div className="text-3xl font-bold text-red-500 dark:text-red-400">₹76,257</div>
                <div className="mt-1 text-sm text-muted-foreground">Delivered via Bank</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Single comparison card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card className="overflow-hidden border-border/50 shadow-xl">
              <div className="bg-primary px-6 py-4">
                <h3 className="font-semibold text-primary-foreground">Provider Comparison</h3>
                <p className="text-sm text-primary-foreground/70">$1,000 USD → INR</p>
              </div>
              <CardContent className="p-0">
                {providers.map((p, i) => (
                  <motion.div
                    key={p.name}
                    className={`flex items-center justify-between gap-4 px-6 py-4 ${
                      i < providers.length - 1 ? "border-b border-border/50" : ""
                    } ${p.highlight ? "bg-primary/5" : ""}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                  >
                    {/* Provider name & badge */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${p.highlight ? "text-primary" : ""}`}>{p.name}</span>
                        {p.highlight && (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                            BEST
                          </span>
                        )}
                      </div>
                      <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
                        <span>Fee: {p.fee === "$0" ? <span className="font-semibold text-green-600 dark:text-green-400">FREE</span> : p.fee}</span>
                        <span>Rate: {p.exchangeRate}</span>
                      </div>
                    </div>

                    {/* Received amount */}
                    <div className="text-right">
                      <div className={`text-lg font-bold ${p.highlight ? "text-primary" : ""}`}>{p.received}</div>
                      {p.savings && (
                        <span className="text-xs font-medium text-red-500 dark:text-red-400">−{p.savings}</span>
                      )}
                      {p.highlight && (
                        <span className="text-xs font-medium text-green-600 dark:text-green-400">Max value</span>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Feature checkmarks row */}
                <div className="border-t border-border/50 bg-muted/30 px-6 py-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">DattaPay includes</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {Object.entries(providers[0].features).map(([key, val]) => (
                      <div key={key} className="flex items-center gap-1.5 text-xs">
                        {val ? (
                          <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                        ) : (
                          <X className="h-3.5 w-3.5 text-muted-foreground/40" />
                        )}
                        <span>{featureLabels[key]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
