"use client";

import { DollarSign, TrendingUp, Zap, ShieldCheck, Smartphone, Award } from "lucide-react";
import { motion } from "framer-motion";

const pills = [
  { icon: DollarSign, label: "Zero Fees", bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400" },
  { icon: TrendingUp, label: "Google Live Rates", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { icon: Zap, label: "Arrives in Minutes", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
  { icon: ShieldCheck, label: "Bank-Grade Security", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { icon: Smartphone, label: "Web & Mobile", bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
  { icon: Award, label: "Full Refund Guarantee", bg: "bg-teal-50 dark:bg-teal-950/30", color: "text-teal-600 dark:text-teal-400" },
];

export function FeaturePills() {
  return (
    <section className="border-t bg-card/50 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {pills.map((pill, i) => (
            <motion.div key={pill.label} className="flex flex-col items-center gap-2.5 rounded-2xl border border-border/50 bg-card p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${pill.bg}`}>
                <pill.icon className={`h-5 w-5 ${pill.color}`} />
              </div>
              <h3 className="text-xs font-semibold leading-tight sm:text-sm">{pill.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
