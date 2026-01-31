"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sendCountries = [
  { flag: "\u{1F1FA}\u{1F1F8}", code: "USD" }, { flag: "\u{1F1EC}\u{1F1E7}", code: "GBP" }, { flag: "\u{1F1EA}\u{1F1FA}", code: "EUR" }, { flag: "\u{1F1E8}\u{1F1E6}", code: "CAD" }, { flag: "\u{1F1E6}\u{1F1FA}", code: "AUD" },
];
const receiveCountries = [
  { flag: "\u{1F1EE}\u{1F1F3}", code: "INR" }, { flag: "\u{1F1F5}\u{1F1ED}", code: "PHP" }, { flag: "\u{1F1F2}\u{1F1FD}", code: "MXN" }, { flag: "\u{1F1F3}\u{1F1EC}", code: "NGN" }, { flag: "\u{1F1F5}\u{1F1F0}", code: "PKR" }, { flag: "\u{1F1E7}\u{1F1F7}", code: "BRL" },
];

export function CorridorFlags() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Most-Loved Transfer Routes</h2>
          <p className="mt-3 text-muted-foreground">High-volume corridors with real-time rates and instant delivery</p>
        </motion.div>
        <motion.div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="flex flex-col items-center gap-3">
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:bg-blue-950/30 dark:text-blue-400">Send From</span>
            <div className="flex gap-2">
              {sendCountries.map((c, i) => (
                <motion.div key={c.code} className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-border/50 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:h-20 sm:w-20" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                  <span className="text-2xl sm:text-3xl">{c.flag}</span>
                  <span className="mt-1 text-[9px] font-medium text-muted-foreground sm:text-[10px]">{c.code}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-md shadow-primary/20">
            <ArrowRight className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-600 dark:bg-green-950/30 dark:text-green-400">Deliver To</span>
            <div className="flex gap-2">
              {receiveCountries.map((c, i) => (
                <motion.div key={c.code} className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-border/50 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:h-20 sm:w-20" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}>
                  <span className="text-2xl sm:text-3xl">{c.flag}</span>
                  <span className="mt-1 text-[9px] font-medium text-muted-foreground sm:text-[10px]">{c.code}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
