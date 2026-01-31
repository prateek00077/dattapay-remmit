"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Target,
  Lightbulb,
  Shield,
  Users,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Heart, title: "Users First", description: "Every feature is built with one question: does this help senders transfer more, faster, and cheaper? If not, we skip it.", bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
  { icon: Target, title: "Radical Transparency", description: "We show you the rate, the fee, and the exact amount delivered — before you hit send. No fine print, ever.", bg: "bg-teal-50 dark:bg-teal-950/30", color: "text-teal-600 dark:text-teal-400" },
  { icon: Lightbulb, title: "Relentless Improvement", description: "We ship faster delivery routes, lower costs, and better tools every month. Standing still is not an option.", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
  { icon: Shield, title: "Uncompromised Security", description: "Trust is earned transfer by transfer. We invest heavily in encryption, compliance, and fraud prevention.", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { icon: Users, title: "Accessible to Everyone", description: "Money transfer shouldn't require a bank account or a tech degree. We design for simplicity and inclusion.", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { icon: Globe, title: "Measured by Impact", description: "We track success by how much value we deliver to senders and recipients — not just revenue or volume.", bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400" },
];

const team = [
  { name: "Arjun Patel", role: "CEO & Co-Founder", initials: "AP", bio: "Former VP at Goldman Sachs. 15 years building fintech products across 3 continents.", bg: "bg-teal-50 dark:bg-teal-950/30", color: "text-teal-600 dark:text-teal-400" },
  { name: "Sarah Chen", role: "CTO & Co-Founder", initials: "SC", bio: "Ex-Google payments engineer who scaled infrastructure serving 500M+ users.", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { name: "Michael Okonkwo", role: "COO", initials: "MO", bio: "Operations leader from Stripe and Wise. Expert in cross-border payment networks.", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { name: "Elena Rodriguez", role: "VP of Compliance", initials: "ER", bio: "Former financial regulator. Ensures compliance across every jurisdiction we serve.", bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
];

const milestones = [
  { year: "2019", event: "Founded in San Francisco by immigrants who knew the problem firsthand", bg: "bg-teal-50 dark:bg-teal-950/30", dot: "bg-teal-500" },
  { year: "2020", event: "Crossed $1M in transfers within 8 months of launch", bg: "bg-blue-50 dark:bg-blue-950/30", dot: "bg-blue-500" },
  { year: "2021", event: "Expanded to 50 countries and raised Series A funding", bg: "bg-purple-50 dark:bg-purple-950/30", dot: "bg-purple-500" },
  { year: "2022", event: "50,000 active senders; launched iOS and Android apps", bg: "bg-pink-50 dark:bg-pink-950/30", dot: "bg-pink-500" },
  { year: "2023", event: "Reached 120+ countries; introduced business transfers", bg: "bg-amber-50 dark:bg-amber-950/30", dot: "bg-amber-500" },
  { year: "2024", event: "Surpassed $1B total volume delivered worldwide", bg: "bg-green-50 dark:bg-green-950/30", dot: "bg-green-500" },
  { year: "2025", event: "180+ countries with real-time delivery on most routes", bg: "bg-cyan-50 dark:bg-cyan-950/30", dot: "bg-cyan-500" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              Our Story
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Rethinking How{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Money Moves Across Borders
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Our founders saw how much value was lost to banks and middlemen on every international transfer. They built DattaPay to make cross-border payments fast, fair, and transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Story + Timeline */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  DattaPay Exists
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Every month, billions of dollars move across borders — and a huge chunk gets lost to fees, markups, and slow infrastructure. Banks charge $25-50 per transfer and bury another 3-5% in the exchange rate spread.
                </p>
                <p>
                  We built DattaPay to fix that. By connecting directly to payment networks and using the real exchange rate, we eliminate the middlemen and pass the savings to you.
                </p>
                <p>
                  Today, DattaPay serves 100,000+ customers across 180+ countries, having processed more than $2 billion in cross-border transfers.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold">Our Journey</h3>
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className={`flex items-center gap-4 rounded-xl border border-border/50 ${m.bg} p-4 transition-all hover:shadow-sm`}
                >
                  <div className={`h-3 w-3 shrink-0 rounded-full ${m.dot}`} />
                  <span className="shrink-0 text-sm font-bold">{m.year}</span>
                  <span className="text-sm text-muted-foreground">{m.event}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              What{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Drives Us
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Six principles that shape every transfer, every feature, and every decision.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="h-full border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${value.bg}`}>
                      <value.icon className={`h-6 w-6 ${value.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The People Behind{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                DattaPay
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A team from Goldman Sachs, Google, Stripe, and Wise — united by the mission to make remittances fair.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <Avatar className="mx-auto h-20 w-20">
                      <AvatarFallback className={`text-xl font-semibold ${member.bg} ${member.color}`}>
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 font-semibold">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 sm:py-24">
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">We&apos;re Hiring Across the Globe</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Join a team that&apos;s making international money transfer fair, fast, and accessible for everyone.
            </p>
            <Button
              size="lg"
              className="mt-8 h-14 rounded-full bg-white px-8 text-base font-semibold text-primary shadow-xl hover:bg-white/90"
              asChild
            >
              <Link href="/contact">
                See Open Roles <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
