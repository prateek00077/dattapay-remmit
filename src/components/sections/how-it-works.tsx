"use client";

import { motion } from "framer-motion";
import { UserPlus, CreditCard, Send, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  { icon: UserPlus, step: "01", title: "Create Your Account", description: "Sign up in under 2 minutes with a quick ID check. No branch visits, no paperwork — just your phone or laptop.", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { icon: CreditCard, step: "02", title: "Link a Payment Method", description: "Connect your bank account, debit card, or credit card. All major payment methods are supported and verified instantly.", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { icon: Send, step: "03", title: "Enter Amount & Send", description: "Choose the amount, pick a recipient, and see exactly what they'll receive — then hit confirm.", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
  { icon: CheckCircle2, step: "04", title: "Delivered in Minutes", description: "Your recipient gets the funds within minutes to their bank, mobile wallet, or cash pickup point. Track it live.", bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400" },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">Simple Process</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">From Your Wallet to Theirs</h2>
          <p className="mt-4 text-lg text-muted-foreground">International transfers shouldn&apos;t feel complicated. With DattaPay, it&apos;s four steps and a few taps.</p>
        </div>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-border lg:left-1/2 lg:block" />
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div key={step.step} className="relative" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className={`flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-16 lg:py-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`flex-1 ${index % 2 === 1 ? "lg:text-left" : "lg:text-right"}`}>
                    <div className={`inline-flex flex-col ${index % 2 === 1 ? "lg:items-start" : "items-start lg:items-end"}`}>
                      <span className={`inline-flex rounded-full ${step.bg} px-3 py-1 text-xs font-bold uppercase tracking-wider ${step.color}`}>Step {step.step}</span>
                      <h3 className="mt-3 text-xl font-bold sm:text-2xl">{step.title}</h3>
                      <p className="mt-2 max-w-md text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <motion.div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-border bg-card shadow-md ${step.bg}`} whileInView={{ scale: [0.8, 1.05, 1] }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                      <step.icon className={`h-6 w-6 ${step.color}`} />
                    </motion.div>
                  </div>
                  <div className="hidden flex-1 lg:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
