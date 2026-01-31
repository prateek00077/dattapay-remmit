"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Shield, Lock, BadgeCheck, RefreshCcw, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";

const trustBadges = [
  { icon: Shield, label: "FinCEN Registered", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { icon: Lock, label: "256-bit Encryption", bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400" },
  { icon: BadgeCheck, label: "100K+ Happy Senders", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { icon: RefreshCcw, label: "Full Refund Promise", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-6 rounded-full border-border/60 px-4 py-1.5 text-sm font-medium">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Delivering to 180+ countries worldwide
            </Badge>
          </motion.div>

          <motion.h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            Move Money Globally.{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Pay Zero Fees.
            </span>
          </motion.h1>

          <motion.p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            DattaPay delivers cross-border transfers at Google mid-market rates with zero hidden fees. Funds arrive in minutes — not days. Built for speed, transparency, and trust.
          </motion.p>

          <motion.div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Button size="lg" className="h-12 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20" asChild>
              <Link href="/contact">
                Send Your First Transfer <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 rounded-full px-8 text-base font-semibold" asChild>
              <Link href="/pricing">Check Live Rates</Link>
            </Button>
          </motion.div>

          <motion.div className="mt-14 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            {trustBadges.map((badge, i) => (
              <motion.div key={badge.label} className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-card px-4 py-2.5 shadow-sm" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${badge.bg}`}>
                  <badge.icon className={`h-4 w-4 ${badge.color}`} />
                </div>
                <span className="text-xs font-medium sm:text-sm">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3-Step Process */}
        <motion.div className="relative mx-auto mt-20 max-w-5xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}>
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-xl">
            <div className="border-b bg-gradient-to-r from-primary/5 via-transparent to-primary/5 px-8 py-4">
              <h3 className="text-center font-semibold">Money in Their Account in 3 Steps</h3>
              <p className="mt-1 text-center text-sm text-muted-foreground">No paperwork. No branch visits. Just tap, send, done.</p>
            </div>
            <div className="p-8 sm:p-12">
              <div className="relative grid gap-8 md:grid-cols-3">
                <div className="absolute left-[16.7%] right-[16.7%] top-6 hidden h-px bg-border md:block" />
                {[
                  { step: "01", title: "Pick Amount & Country", desc: "Enter how much to send and where — see the live rate instantly", icon: Globe, bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
                  { step: "02", title: "Add Recipient Details", desc: "Enter their bank account, mobile wallet, or cash pickup point", icon: Zap, bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
                  { step: "03", title: "Confirm & Deliver", desc: "Hit send — they get the money in minutes with live tracking", icon: Shield, bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400" },
                ].map((s) => (
                  <div key={s.step} className="relative text-center">
                    <div className={`relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${s.bg}`}>
                      <span className={`text-lg font-bold ${s.color}`}>{s.step}</span>
                    </div>
                    <h4 className="font-semibold">{s.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
