"use client";

import { motion } from "framer-motion";
import { Shield, Award, Building2, Landmark, BadgeCheck, Lock } from "lucide-react";

const partners = [
  { name: "Visa", icon: BadgeCheck, bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { name: "Mastercard", icon: Shield, bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
  { name: "FinCEN", icon: Landmark, bg: "bg-teal-50 dark:bg-teal-950/30", color: "text-teal-600 dark:text-teal-400" },
  { name: "PCI DSS", icon: Lock, bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { name: "SOC 2", icon: Award, bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400" },
  { name: "Swift", icon: Building2, bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
];

const investors = [
  { name: "Sequoia Capital", bg: "bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-950/30 dark:text-green-400" },
  { name: "Andreessen Horowitz", bg: "bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-950/30 dark:text-blue-400" },
  { name: "Y Combinator", bg: "bg-amber-50 text-amber-600 hover:bg-amber-100 dark:bg-amber-950/30 dark:text-amber-400" },
  { name: "Tiger Global", bg: "bg-purple-50 text-purple-600 hover:bg-purple-100 dark:bg-purple-950/30 dark:text-purple-400" },
];

export function PartnersSection() {
  return (
    <section className="border-t py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Compliance & Payment Partners
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex items-center gap-2.5 rounded-2xl border border-border/50 bg-card px-5 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${partner.bg}`}>
                  <partner.icon className={`h-4 w-4 ${partner.color}`} />
                </div>
                <span className="text-sm font-semibold">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-flex rounded-full bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-600 dark:bg-purple-950/30 dark:text-purple-400">
            Backed by Leading Investors
          </span>
          <p className="mt-3 text-sm text-muted-foreground">
            Founded by IIT & Stanford alumni. Funded by Silicon Valley&apos;s top venture firms.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {investors.map((investor, index) => (
              <motion.div
                key={investor.name}
                className={`rounded-full border border-border/50 px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${investor.bg}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
              >
                {investor.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
