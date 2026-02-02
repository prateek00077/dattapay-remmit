"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Shield, Globe, Zap, DollarSign, Clock, ShieldCheck, Smartphone, Users } from "lucide-react";
import { motion } from "framer-motion";

const featureBadges = [
  { icon: DollarSign, label: "Zero Transfer Fees", bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400" },

  { icon: Clock, label: "Delivered in Minutes", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
  { icon: ShieldCheck, label: "Bank-Level Security", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { icon: Smartphone, label: "Send From Anywhere", bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
  { icon: Users, label: "Designed for modern senders", bg: "bg-teal-50 dark:bg-teal-950/30", color: "text-teal-600 dark:text-teal-400" },
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
              Build by former visa employees
            </Badge>
          </motion.div>

          <motion.h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            Move Money Globally.{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Pay Zero Fees.
            </span>
          </motion.h1>

          <motion.p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Cross-border transfers at Google mid-market rates. No hidden fees. Funds arrive in minutes.
          </motion.p>

          <motion.div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Button size="lg" className="h-12 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20" asChild>
              <Link href="/contact">
                Send Your First Transfer <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 rounded-full px-8 text-base font-semibold" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>

          <motion.div className="mt-14 flex flex-wrap items-center justify-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            {featureBadges.map((badge, i) => (
              <motion.div key={badge.label} className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-card px-4 py-2.5 shadow-sm" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${badge.bg}`}>
                  <badge.icon className={`h-4 w-4 ${badge.color}`} />
                </div>
                <span className="text-xs font-medium sm:text-sm">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3-Step Process — Vertical Timeline */}
        <div className="mx-auto mt-20 max-w-3xl">
          <motion.h3
            className="mb-12 text-center text-2xl font-bold tracking-tight sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Send Money in{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">3 Steps</span>
          </motion.h3>

          <div className="relative">
            {/* Vertical connector line */}
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-px bg-border sm:left-8"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: "top" }}
            />

            {[
              { step: "01", title: "Pick Amount & Country", desc: "Enter amount and destination — see the live rate instantly.", icon: Globe, bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400", ring: "ring-blue-200 dark:ring-blue-900" },
              { step: "02", title: "Add Recipient", desc: "Bank account, mobile wallet, or cash pickup — your choice.", icon: Zap, bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400", ring: "ring-amber-200 dark:ring-amber-900" },
              { step: "03", title: "Confirm & Deliver", desc: "They get the money in minutes with live tracking.", icon: Shield, bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400", ring: "ring-green-200 dark:ring-green-900" },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                className="relative mb-10 flex items-start gap-5 sm:gap-7 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              >
                {/* Step circle */}
                <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-4 ${s.ring} ${s.bg} sm:h-16 sm:w-16`}>
                  <s.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${s.color}`} />
                </div>

                {/* Content */}
                <div className="pt-1 sm:pt-3">
                  <span className={`text-xs font-bold uppercase tracking-widest ${s.color}`}>Step {s.step}</span>
                  <h4 className="mt-1 text-lg font-semibold sm:text-xl">{s.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
