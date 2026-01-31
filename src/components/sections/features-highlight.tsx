"use client";

import { DollarSign, TrendingUp, Clock, ShieldCheck, Smartphone, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const features = [
  { icon: DollarSign, title: "Zero Transfer Fees", description: "Every dollar you send is a dollar that gets delivered. No service charges, no processing fees, no hidden deductions.", bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400" },
  { icon: TrendingUp, title: "Google Mid-Market Rates", description: "We match the real exchange rate — the one banks use between themselves. You save up to 8x compared to traditional wire transfers.", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { icon: Clock, title: "Delivered in Minutes", description: "Most transfers land in the recipient's account within minutes. No more waiting 3-5 business days for your money to arrive.", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
  { icon: ShieldCheck, title: "Bank-Level Protection", description: "256-bit SSL encryption, two-factor authentication, and biometric login. Your money and data are protected at every step.", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { icon: Smartphone, title: "Transfer From Anywhere", description: "Send from our web app or mobile — no branch visits, no paperwork. Available 24/7, on any device, from any location.", bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
  { icon: Users, title: "Chosen by 100K+ Senders", description: "Over 100,000 customers across 180+ countries trust DattaPay with $2B+ in transfers. Rated 4.9 stars on average.", bg: "bg-teal-50 dark:bg-teal-950/30", color: "text-teal-600 dark:text-teal-400" },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export function FeaturesHighlight() {
  return (
    <section className="border-t py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">Why DattaPay</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Designed Around{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">What Matters</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Every feature is engineered to maximize the amount delivered — faster, safer, and with full transparency.</p>
        </div>
        <motion.div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          {features.map((f) => (
            <motion.div key={f.title} variants={item}>
              <Card className="group h-full border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg">
                <CardContent className="p-6">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${f.bg}`}>
                    <f.icon className={`h-6 w-6 ${f.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
