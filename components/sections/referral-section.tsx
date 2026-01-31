"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Gift, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const perks = [
  {
    icon: Gift,
    value: "$25",
    label: "Your Reward",
    description: "Earn $25 credit every time a friend completes their first transfer through DattaPay",
    bg: "bg-green-50 dark:bg-green-950/30",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: Users,
    value: "$25",
    label: "Their Reward",
    description: "Your friend gets $25 off their first transfer — a win for both sides",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: DollarSign,
    value: "Unlimited",
    label: "No Limits",
    description: "Refer 5 friends or 500 — there's no cap on how much you can earn",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    color: "text-amber-600 dark:text-amber-400",
  },
];

export function ReferralSection() {
  return (
    <section className="border-t bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Referral Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto max-w-sm">
              <motion.div
                className="absolute -left-6 -top-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-green-50 shadow-lg dark:bg-green-950/30"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border/50 bg-amber-50 shadow-lg dark:bg-amber-950/30"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Gift className="h-7 w-7 text-amber-600 dark:text-amber-400" />
              </motion.div>

              <div className="rounded-3xl border border-border/50 bg-card p-8 shadow-xl">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary shadow-lg shadow-primary/20">
                    <Gift className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-4xl font-bold text-transparent">
                    $25 + $25
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    For every successful referral
                  </p>
                  <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
                    <div className="text-xs font-medium text-muted-foreground">
                      Your referral code
                    </div>
                    <div className="mt-1 font-mono text-lg font-bold tracking-widest text-primary">
                      DATTAPAY25
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              <Gift className="mr-1.5 h-3 w-3" /> Refer & Earn
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Share the Savings,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Earn Rewards
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Know someone who sends money abroad? Invite them to DattaPay and you both earn $25 when they make their first transfer.
            </p>

            <div className="mt-8 space-y-4">
              {perks.map((perk, index) => (
                <motion.div
                  key={perk.label}
                  className={`flex items-start gap-4 rounded-2xl border border-border/50 ${perk.bg} p-4 transition-all hover:shadow-md`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${perk.bg}`}>
                    <perk.icon className={`h-5 w-5 ${perk.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">{perk.value}</span>
                      <span className="text-sm font-semibold">{perk.label}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="group mt-8 h-13 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20"
              asChild
            >
              <Link href="/contact">
                Invite a Friend{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
