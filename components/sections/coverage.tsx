"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

const regions = [
  {
    name: "North America",
    countries: ["United States", "Canada", "Mexico"],
    bg: "bg-blue-50 dark:bg-blue-950/30",
    color: "text-blue-600 dark:text-blue-400",
    badgeColor: "bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
  },
  {
    name: "Europe",
    countries: ["United Kingdom", "Germany", "France", "Spain", "Italy"],
    bg: "bg-purple-50 dark:bg-purple-950/30",
    color: "text-purple-600 dark:text-purple-400",
    badgeColor: "bg-purple-100 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400",
  },
  {
    name: "Asia Pacific",
    countries: ["India", "Philippines", "China", "Japan", "Vietnam"],
    bg: "bg-teal-50 dark:bg-teal-950/30",
    color: "text-teal-600 dark:text-teal-400",
    badgeColor: "bg-teal-100 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400",
  },
  {
    name: "Middle East & Africa",
    countries: ["UAE", "Saudi Arabia", "Nigeria", "Kenya", "South Africa"],
    bg: "bg-amber-50 dark:bg-amber-950/30",
    color: "text-amber-600 dark:text-amber-400",
    badgeColor: "bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400",
  },
  {
    name: "South America",
    countries: ["Brazil", "Colombia", "Argentina", "Peru", "Chile"],
    bg: "bg-pink-50 dark:bg-pink-950/30",
    color: "text-pink-600 dark:text-pink-400",
    badgeColor: "bg-pink-100 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400",
  },
  {
    name: "Oceania",
    countries: ["Australia", "New Zealand", "Fiji"],
    bg: "bg-green-50 dark:bg-green-950/30",
    color: "text-green-600 dark:text-green-400",
    badgeColor: "bg-green-100 text-green-600 dark:bg-green-950/50 dark:text-green-400",
  },
];

export function CoverageSection() {
  return (
    <section className="border-t bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
            <Globe className="mr-1.5 h-3 w-3" /> Global Network
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            One Platform,{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              180+ Countries
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Recipients can collect funds through bank deposits, mobile wallets, or cash pickup at thousands of locations across 180+ countries.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              className={`group rounded-2xl border border-border/50 ${region.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${region.bg}`}>
                  <Globe className={`h-5 w-5 ${region.color}`} />
                </div>
                <h3 className="text-lg font-bold">{region.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {region.countries.map((country) => (
                  <Badge
                    key={country}
                    className={`rounded-full border-0 font-normal ${region.badgeColor}`}
                  >
                    {country}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
