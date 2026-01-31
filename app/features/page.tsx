"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Smartphone,
  Bell,
  Lock,
  BarChart3,
  RefreshCw,
  CreditCard,
  Users,
  HeadphonesIcon,
  Wallet,
  Building2,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const mainFeatures = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description:
      "Most transfers arrive in the recipient's account within minutes. No more 3-5 business day holds — funds are delivered when they're needed.",
    badge: "Speed",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    color: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: TrendingUp,
    title: "Google Mid-Market Rates",
    description:
      "We lock in the real exchange rate — the same one banks use between themselves. No inflated spreads, no hidden markups. You save up to 8x compared to traditional banks.",
    badge: "Rates",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Shield,
    title: "Bank-Level Protection",
    description:
      "256-bit SSL encryption, two-factor authentication, biometric login, and compliance across every jurisdiction we operate in. Your money and identity are protected at every step.",
    badge: "Security",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Globe,
    title: "180+ Countries",
    description:
      "Send money to 180+ countries through bank deposits, mobile wallets, cash pickup, or doorstep delivery. Full global coverage from a single platform.",
    badge: "Coverage",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    color: "text-teal-600 dark:text-teal-400",
  },
];

const additionalFeatures = [
  { icon: Smartphone, title: "Mobile & Web Apps", description: "Send from your phone or browser — transfers are available 24/7 from anywhere.", bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
  { icon: Bell, title: "Live Notifications", description: "Get real-time alerts at every stage — sent, in transit, and delivered.", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
  { icon: Lock, title: "Biometric Login", description: "Secure your account with fingerprint or face recognition — fast and safe.", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { icon: BarChart3, title: "Rate Alerts", description: "Set a target rate and we notify you when it's time to send.", bg: "bg-teal-50 dark:bg-teal-950/30", color: "text-teal-600 dark:text-teal-400" },
  { icon: RefreshCw, title: "Scheduled Transfers", description: "Automate weekly or monthly transfers — never miss a payment.", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { icon: CreditCard, title: "Flexible Payments", description: "Pay via bank transfer, debit card, credit card, or Apple Pay.", bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400" },
  { icon: Users, title: "Multiple Recipients", description: "Save frequent recipients and send to several at once with one click.", bg: "bg-orange-50 dark:bg-orange-950/30", color: "text-orange-600 dark:text-orange-400" },
  { icon: HeadphonesIcon, title: "24/7 Live Support", description: "Chat, email, or call — our team is available around the clock.", bg: "bg-cyan-50 dark:bg-cyan-950/30", color: "text-cyan-600 dark:text-cyan-400" },
  { icon: Wallet, title: "Multi-Currency Wallet", description: "Hold and convert multiple currencies in your DattaPay wallet.", bg: "bg-violet-50 dark:bg-violet-950/30", color: "text-violet-600 dark:text-violet-400" },
  { icon: Building2, title: "Business Payments", description: "Dedicated tools for payroll, vendor payments, and invoicing abroad.", bg: "bg-slate-50 dark:bg-slate-950/30", color: "text-slate-600 dark:text-slate-400" },
  { icon: FileCheck, title: "Instant Verification", description: "Automated KYC/AML checks so you can start sending within minutes.", bg: "bg-emerald-50 dark:bg-emerald-950/30", color: "text-emerald-600 dark:text-emerald-400" },
  { icon: Globe, title: "15+ Languages", description: "Use the app and reach support in your preferred language.", bg: "bg-rose-50 dark:bg-rose-950/30", color: "text-rose-600 dark:text-rose-400" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              Features
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Powerful Tools for{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Smarter Transfers
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Every feature is built to maximize the amount delivered — faster, safer, and with full transparency at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-20 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-3 rounded-full px-3 py-1">
                    {feature.badge}
                  </Badge>
                  <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <Button className="mt-6 rounded-full px-6 shadow-lg shadow-primary/20" asChild>
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex-1">
                  <div className={`flex h-64 items-center justify-center rounded-3xl border border-border/50 ${feature.bg} sm:h-80`}>
                    <div className={`flex h-24 w-24 items-center justify-center rounded-3xl ${feature.bg} shadow-xl`}>
                      <feature.icon className={`h-12 w-12 ${feature.color}`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="border-t bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Every Detail,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Thoughtfully Built
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From rate alerts to multi-language support — we sweat the details so you don&apos;t have to.
            </p>
          </div>

          <motion.div
            className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {additionalFeatures.map((feature) => (
              <motion.div key={feature.title} variants={item}>
                <Card className="h-full border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-5">
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${feature.bg}`}>
                      <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 sm:py-24">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              See the Difference Yourself
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Your first transfer is free. Sign up and send money in under 2 minutes.
            </p>
            <Button
              size="lg"
              className="mt-8 h-14 rounded-full bg-white px-8 text-base font-semibold text-primary shadow-xl hover:bg-white/90"
              asChild
            >
              <Link href="/contact">
                Start Sending Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
