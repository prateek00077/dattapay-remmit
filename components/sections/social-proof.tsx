"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Sends to India monthly",
    initials: "PS",
    rating: 5,
    text: "My parents receive more money every month since I switched. The rate is genuinely better than my bank, and they see it in minutes.",
    amount: "Saved $340/year",
    avatarBg: "bg-teal-50 text-teal-600 dark:bg-teal-950/30 dark:text-teal-400",
  },
  {
    name: "Carlos Mendez",
    role: "Sends to Mexico weekly",
    initials: "CM",
    rating: 5,
    text: "Other services eat 4-5% in hidden markups. DattaPay shows the real rate and charges nothing extra.",
    amount: "Saved $520/year",
    avatarBg: "bg-purple-50 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400",
  },
  {
    name: "Fatima Ali",
    role: "Sends to Pakistan",
    initials: "FA",
    rating: 5,
    text: "Before I confirm, I see the exact amount my mother will get — no surprises, no deductions on the other end.",
    amount: "Saved $280/year",
    avatarBg: "bg-pink-50 text-pink-600 dark:bg-pink-950/30 dark:text-pink-400",
  },
];

const stats = [
  { value: "$2B+", label: "Delivered Worldwide", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { value: "100K+", label: "Active Senders", bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400" },
  { value: "180+", label: "Countries", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { value: "4.9\u2605", label: "Average Rating", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
];

export function SocialProof() {
  return (
    <section className="border-t py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`rounded-2xl border border-border/50 ${stat.bg} p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg sm:p-8`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`text-3xl font-bold ${stat.color} sm:text-4xl`}>
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              <Star className="mr-1.5 h-3 w-3 fill-amber-500 text-amber-500" /> 4.9 Star Average
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Real People,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Real Savings
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="group h-full border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg">
                  <CardContent className="relative p-6">
                    <Quote className="absolute right-4 top-4 h-8 w-8 text-muted-foreground/10 transition-colors group-hover:text-muted-foreground/20" />

                    <div className="mb-3 flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    <div className="mt-3 inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-950/30 dark:text-green-400">
                      {t.amount}
                    </div>

                    <div className="mt-4 flex items-center gap-3 border-t border-border/50 pt-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className={`text-sm font-medium ${t.avatarBg}`}>
                          {t.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
