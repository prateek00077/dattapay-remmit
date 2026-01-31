"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Send, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 sm:py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <motion.div
            className="absolute left-[8%] top-[15%] hidden h-14 w-14 items-center justify-center rounded-2xl bg-white/10 lg:flex"
            animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Send className="h-6 w-6 text-primary-foreground/70" />
          </motion.div>
          <motion.div
            className="absolute right-[10%] top-[20%] hidden h-12 w-12 items-center justify-center rounded-xl bg-white/10 lg:flex"
            animate={{ y: [6, -6, 6], rotate: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Shield className="h-5 w-5 text-primary-foreground/70" />
          </motion.div>
          <motion.div
            className="absolute bottom-[18%] left-[12%] hidden h-11 w-11 items-center justify-center rounded-xl bg-white/10 lg:flex"
            animate={{ y: [-5, 7, -5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap className="h-5 w-5 text-primary-foreground/70" />
          </motion.div>

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Your First Transfer Is on Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Join 100,000+ senders who chose DattaPay for better rates, zero fees, and transfers that arrive in minutes. Sign up and send your first transfer completely free.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group h-14 rounded-full bg-white px-8 text-base font-semibold text-primary shadow-xl hover:bg-white/90"
                asChild
              >
                <Link href="/contact">
                  Send Money Free{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-primary-foreground/30 bg-transparent px-8 text-base font-semibold text-primary-foreground hover:bg-white/10"
                asChild
              >
                <Link href="/pricing">See Our Pricing</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15">
                  <Shield className="h-3 w-3 text-primary-foreground" />
                </div>
                FinCEN Registered
              </span>
              <span className="flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15">
                  <Zap className="h-3 w-3 text-primary-foreground" />
                </div>
                Arrives in Minutes
              </span>
              <span className="flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15">
                  <Send className="h-3 w-3 text-primary-foreground" />
                </div>
                180+ Countries
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
