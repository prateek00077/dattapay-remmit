"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowDownUp, TrendingUp, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const currencies = [
  { code: "USD", flag: "\u{1F1FA}\u{1F1F8}", rate: 1 },
  { code: "GBP", flag: "\u{1F1EC}\u{1F1E7}", rate: 0.79 },
  { code: "EUR", flag: "\u{1F1EA}\u{1F1FA}", rate: 0.92 },
  { code: "CAD", flag: "\u{1F1E8}\u{1F1E6}", rate: 1.36 },
  { code: "AUD", flag: "\u{1F1E6}\u{1F1FA}", rate: 1.53 },
];

const receiveCurrencies = [
  { code: "INR", flag: "\u{1F1EE}\u{1F1F3}", rate: 83.25 },
  { code: "PHP", flag: "\u{1F1F5}\u{1F1ED}", rate: 55.8 },
  { code: "MXN", flag: "\u{1F1F2}\u{1F1FD}", rate: 17.15 },
  { code: "PKR", flag: "\u{1F1F5}\u{1F1F0}", rate: 278.5 },
  { code: "NGN", flag: "\u{1F1F3}\u{1F1EC}", rate: 1550.0 },
  { code: "BRL", flag: "\u{1F1E7}\u{1F1F7}", rate: 4.97 },
];

export function CurrencyConverter() {
  const [sendAmount, setSendAmount] = useState("1000");
  const [sendCurrency, setSendCurrency] = useState(0);
  const [receiveCurrency, setReceiveCurrency] = useState(0);

  const amount = parseFloat(sendAmount) || 0;
  const sendRate = currencies[sendCurrency].rate;
  const receiveRate = receiveCurrencies[receiveCurrency].rate;
  const convertedAmount = (amount / sendRate) * receiveRate;
  const effectiveRate = receiveRate / sendRate;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              <TrendingUp className="mr-1.5 h-3 w-3" /> Google Mid-Market Rates
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Know Exactly What{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">They Receive</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The real exchange rate with no inflated markups. What you see is what gets delivered.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 dark:bg-green-950/30">
                  <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="font-semibold">$0 Transfer Fee</div>
                  <div className="text-sm text-muted-foreground">Every dollar you send is delivered</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/30">
                  <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold">8x Cheaper Than Banks</div>
                  <div className="text-sm text-muted-foreground">Real mid-market exchange rates, always</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <Card className="overflow-hidden border-border/50 shadow-2xl">
              <div className="bg-primary px-6 py-5">
                <h3 className="text-lg font-semibold text-primary-foreground">Rate Calculator</h3>
                <p className="text-sm text-primary-foreground/70">Preview your transfer — no signup needed</p>
              </div>
              <CardContent className="space-y-6 p-6">
                {/* Send */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">You Send</label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      value={sendAmount}
                      onChange={(e) => setSendAmount(e.target.value)}
                      className="h-14 rounded-xl text-xl font-bold"
                    />
                    <select
                      value={sendCurrency}
                      onChange={(e) => setSendCurrency(Number(e.target.value))}
                      className="h-14 rounded-xl border border-border bg-card px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      {currencies.map((c, i) => (
                        <option key={c.code} value={i}>{c.flag} {c.code}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Swap divider */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/5 shadow-sm"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowDownUp className="h-4 w-4 text-primary" />
                  </motion.div>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Receive */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">They Receive</label>
                  <div className="flex gap-2">
                    <div className="flex h-14 flex-1 items-center rounded-xl border-2 border-primary/20 bg-primary/5 px-4">
                      <span className="text-xl font-bold text-primary">
                        {convertedAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                    <select
                      value={receiveCurrency}
                      onChange={(e) => setReceiveCurrency(Number(e.target.value))}
                      className="h-14 rounded-xl border border-border bg-card px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      {receiveCurrencies.map((c, i) => (
                        <option key={c.code} value={i}>{c.flag} {c.code}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Rate info */}
                <div className="rounded-xl border border-border/50 bg-muted/30 px-4 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Exchange Rate</span>
                    <span className="font-semibold">
                      1 {currencies[sendCurrency].code} = {effectiveRate.toFixed(2)} {receiveCurrencies[receiveCurrency].code}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Transfer Fee</span>
                    <span className="font-bold text-green-600 dark:text-green-400">FREE</span>
                  </div>
                </div>

                <Button className="h-14 w-full rounded-full text-base font-semibold shadow-lg shadow-primary/20" asChild>
                  <Link href="/contact">
                    Send This Amount <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
