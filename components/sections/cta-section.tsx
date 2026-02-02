"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Gift, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const perks = [
  { icon: Gift, text: "First transfer completely free" },
  { icon: Zap, text: "Delivered in minutes" },
  { icon: ShieldCheck, text: "No hidden fees, ever" },
];

export function CTASection() {
  return (
    <section className="border-t py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Send Smarter?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Join a growing community of senders benefiting from better rates, zero fees, and near-instant delivery.
          </p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {perks.map((perk) => (
              <div key={perk.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <perk.icon className="h-4 w-4 text-primary" />
                <span>{perk.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="group h-14 rounded-full px-10 text-base font-semibold shadow-lg shadow-primary/20"
              asChild
            >
              <Link href="/#contact">
                Send Your First Transfer{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
