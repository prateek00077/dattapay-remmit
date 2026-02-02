import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Target,
  Shield,
  Globe,
} from "lucide-react";

const values = [
  { icon: Heart, title: "Users First", description: "Every feature exists to help you transfer more, faster, and cheaper.", bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
  { icon: Target, title: "Radical Transparency", description: "The fee, the rate, and the exact amount delivered — visible before you send.", bg: "bg-teal-50 dark:bg-teal-950/30", color: "text-teal-600 dark:text-teal-400" },
  { icon: Shield, title: "Uncompromised Security", description: "Encryption, compliance, and fraud prevention at every step.", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { icon: Globe, title: "Accessible to Everyone", description: "No bank account or tech degree required. Built for simplicity.", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
];

const team = [
  { name: "Arjun Patel", role: "CEO & Co-Founder", initials: "AP", bio: "Former VP at Goldman Sachs. 15 years in fintech across 3 continents.", bg: "bg-teal-50 dark:bg-teal-950/30", color: "text-teal-600 dark:text-teal-400" },
  { name: "Sarah Chen", role: "CTO & Co-Founder", initials: "SC", bio: "Ex-Google payments engineer. Scaled infrastructure for 500M+ users.", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { name: "Michael Okonkwo", role: "COO", initials: "MO", bio: "Operations leader from Stripe and Wise. Cross-border payment expert.", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { name: "Elena Rodriguez", role: "VP of Compliance", initials: "ER", bio: "Former financial regulator. Ensures compliance across all jurisdictions.", bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
];

const milestones = [
  { year: "2019", event: "Founded in San Francisco by immigrants who knew the problem firsthand", bg: "bg-teal-50 dark:bg-teal-950/30", dot: "bg-teal-500" },
  { year: "2021", event: "Expanded to 50 countries. Raised Series A", bg: "bg-purple-50 dark:bg-purple-950/30", dot: "bg-purple-500" },
  { year: "2023", event: "120+ countries. Launched business transfers", bg: "bg-amber-50 dark:bg-amber-950/30", dot: "bg-amber-500" },
  { year: "2025", event: "180+ countries. Real-time delivery on most routes. $1B+ volume", bg: "bg-green-50 dark:bg-green-950/30", dot: "bg-green-500" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              Our Story
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Rethinking How{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Money Moves
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              We built DattaPay to make cross-border payments fast, fair, and transparent — by cutting out the middlemen.
            </p>
          </div>
        </div>
      </section>

      {/* Story + Timeline */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  DattaPay Exists
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Banks charge $25-50 per transfer and bury another 3-5% in the exchange rate. We connect directly to payment networks, use the real rate, and pass the savings to you.
                </p>
                <p>
                  Today, DattaPay serves customers across multiple countries, enabling fast and secure transfers worldwide.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Our Journey</h3>
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className={`flex items-center gap-4 rounded-xl border border-border/50 ${m.bg} p-4`}
                >
                  <div className={`h-3 w-3 shrink-0 rounded-full ${m.dot}`} />
                  <span className="shrink-0 text-sm font-bold">{m.year}</span>
                  <span className="text-sm text-muted-foreground">{m.event}</span>
                </div>
              ))}
            </div>
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
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="h-full border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${value.bg}`}>
                    <value.icon className={`h-6 w-6 ${value.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Team Behind{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                DattaPay
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="h-full border-border/50 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Join{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Help us make international money transfer fair and fast for everyone.
            </p>
            <Button
              size="lg"
              className="group mt-10 h-14 rounded-full px-10 text-base font-semibold shadow-lg shadow-primary/20"
              asChild
            >
              <Link href="/contact">
                See Open Roles{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
