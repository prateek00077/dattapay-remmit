"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const providers = [
  { name: "DattaPay", highlight: true, fee: "$0", exchangeRate: "83.25", received: "\u20B983,250", savings: null, features: { instantTransfer: true, noFees: true, midMarketRate: true, tracking: true } },
  { name: "Western Union", highlight: false, fee: "$14.99", exchangeRate: "80.22", received: "\u20B979,020", savings: "\u20B94,230", features: { instantTransfer: false, noFees: false, midMarketRate: false, tracking: true } },
  { name: "Your Bank", highlight: false, fee: "$45.00", exchangeRate: "79.85", received: "\u20B976,257", savings: "\u20B96,993", features: { instantTransfer: false, noFees: false, midMarketRate: false, tracking: false } },
  { name: "PayPal", highlight: false, fee: "$4.99", exchangeRate: "80.90", received: "\u20B980,495", savings: "\u20B92,755", features: { instantTransfer: true, noFees: false, midMarketRate: false, tracking: true } },
];

export function RateComparison() {
  return (
    <section className="border-t bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
            <TrendingUp className="mr-1.5 h-3 w-3" /> Rate Comparison
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stop Overpaying on Transfers</h2>
          <p className="mt-4 text-lg text-muted-foreground">Sending $1,000 USD to India — compare how much actually gets delivered with each provider.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {providers.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <Card className={`relative h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${p.highlight ? "border-2 border-primary shadow-xl shadow-primary/10" : "border-border/50"}`}>
                {p.highlight && <div className="bg-primary px-4 py-1.5 text-center text-xs font-semibold text-primary-foreground">Best Value</div>}
                <CardContent className="p-5">
                  <h3 className={`text-lg font-bold ${p.highlight ? "text-primary" : ""}`}>{p.name}</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Fee</span>
                      <span className={`font-semibold ${p.fee === "$0" ? "text-green-600 dark:text-green-400" : ""}`}>{p.fee === "$0" ? "FREE" : p.fee}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Rate</span>
                      <span className="font-semibold">{p.exchangeRate}</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Received</span>
                      <span className={`text-xl font-bold ${p.highlight ? "text-primary" : ""}`}>{p.received}</span>
                    </div>
                    {p.savings && <div className="rounded-lg bg-red-50 px-3 py-1.5 text-center dark:bg-red-950/30"><span className="text-xs font-medium text-red-600 dark:text-red-400">Recipient loses {p.savings}</span></div>}
                    {p.highlight && <div className="rounded-lg bg-green-50 px-3 py-1.5 text-center dark:bg-green-950/30"><span className="text-xs font-medium text-green-600 dark:text-green-400">Maximum value delivered</span></div>}
                  </div>
                  <div className="mt-4 space-y-2 border-t pt-4">
                    {Object.entries(p.features).map(([key, val]) => (
                      <div key={key} className="flex items-center gap-2 text-xs">
                        {val ? <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" /> : <X className="h-3.5 w-3.5 text-muted-foreground/40" />}
                        <span className={val ? "" : "text-muted-foreground/50"}>
                          {key === "instantTransfer" && "Instant Delivery"}
                          {key === "noFees" && "Zero Transfer Fees"}
                          {key === "midMarketRate" && "Mid-Market Rate"}
                          {key === "tracking" && "Live Tracking"}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
