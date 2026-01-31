"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowDownUp, TrendingUp } from "lucide-react";
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
              We lock in the Google mid-market rate — the same rate banks use between themselves. No inflated markups. No conversion surprises. What you see is what gets delivered.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border/50 bg-green-50 p-5 text-center dark:bg-green-950/30">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">$0</div>
                <div className="mt-1 text-sm text-muted-foreground">Transfer Fee</div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-blue-50 p-5 text-center dark:bg-blue-950/30">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">8x</div>
                <div className="mt-1 text-sm text-muted-foreground">Cheaper Than Banks</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <Card className="overflow-hidden border-border/50 shadow-xl">
              <div className="bg-primary px-6 py-4">
                <h3 className="font-semibold text-primary-foreground">Quick Rate Calculator</h3>
                <p className="text-sm text-primary-foreground/70">Preview your transfer before you send</p>
              </div>
              <CardContent className="space-y-5 p-6">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">You Send</label>
                  <div className="flex gap-2">
                    <Input type="number" value={sendAmount} onChange={(e) => setSendAmount(e.target.value)} className="h-12 rounded-xl text-lg font-semibold" />
                    <select value={sendCurrency} onChange={(e) => setSendCurrency(Number(e.target.value))} className="h-12 rounded-xl border border-border bg-card px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50">
                      {currencies.map((c, i) => (<option key={c.code} value={i}>{c.flag} {c.code}</option>))}
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm">
                    <ArrowDownUp className="h-4 w-4 text-primary" />
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">They Receive</label>
                  <div className="flex gap-2">
                    <div className="flex h-12 flex-1 items-center rounded-xl border border-border bg-muted/50 px-4">
                      <span className="text-lg font-semibold text-primary">{convertedAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <select value={receiveCurrency} onChange={(e) => setReceiveCurrency(Number(e.target.value))} className="h-12 rounded-xl border border-border bg-card px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50">
                      {receiveCurrencies.map((c, i) => (<option key={c.code} value={i}>{c.flag} {c.code}</option>))}
                    </select>
                  </div>
                </div>
                <div className="rounded-xl bg-primary/5 px-4 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Exchange Rate</span>
                    <span className="font-semibold">1 {currencies[sendCurrency].code} = {effectiveRate.toFixed(2)} {receiveCurrencies[receiveCurrency].code}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Transfer Fee</span>
                    <span className="font-bold text-green-600 dark:text-green-400">FREE</span>
                  </div>
                </div>
                <Button className="h-12 w-full rounded-full text-base font-semibold shadow-lg shadow-primary/20" asChild>
                  <Link href="/contact">Send This Amount <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
