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
  RefreshCw,
  CreditCard,
  Users,
  Wallet,
  Building2,
} from "lucide-react";

const mainFeatures = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Most transfers arrive within minutes. No more 3-5 business day holds.",
    badge: "Speed",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    color: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: TrendingUp,
    title: "Google Mid-Market Rates",
    description: "The real exchange rate — save up to 8x compared to traditional banks.",
    badge: "Rates",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Shield,
    title: "Bank-Level Protection",
    description: "256-bit SSL, two-factor authentication, and biometric login.",
    badge: "Security",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Globe,
    title: "180+ Countries",
    description: "Bank deposits, mobile wallets, cash pickup, or doorstep delivery.",
    badge: "Coverage",
    bg: "bg-teal-50 dark:bg-teal-950/30",
    color: "text-teal-600 dark:text-teal-400",
  },
];

const additionalFeatures = [
  { icon: Smartphone, title: "Mobile & Web", description: "Send from any device, 24/7.", bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
  { icon: Bell, title: "Live Notifications", description: "Real-time alerts at every stage.", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
  { icon: RefreshCw, title: "Scheduled Transfers", description: "Automate weekly or monthly sends.", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { icon: CreditCard, title: "Flexible Payments", description: "Bank, debit, credit, or Apple Pay.", bg: "bg-green-50 dark:bg-green-950/30", color: "text-green-600 dark:text-green-400" },
  { icon: Users, title: "Multiple Recipients", description: "Save contacts. Send to many at once.", bg: "bg-orange-50 dark:bg-orange-950/30", color: "text-orange-600 dark:text-orange-400" },
  { icon: Wallet, title: "Multi-Currency Wallet", description: "Hold and convert multiple currencies.", bg: "bg-violet-50 dark:bg-violet-950/30", color: "text-violet-600 dark:text-violet-400" },
  { icon: Building2, title: "Business Payments", description: "Payroll, vendor payments, and invoicing.", bg: "bg-slate-50 dark:bg-slate-950/30", color: "text-slate-600 dark:text-slate-400" },
  { icon: Globe, title: "15+ Languages", description: "App and support in your language.", bg: "bg-rose-50 dark:bg-rose-950/30", color: "text-rose-600 dark:text-rose-400" },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
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
              Every feature maximizes the amount delivered — faster, safer, and fully transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-20 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
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
              </div>
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
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {additionalFeatures.map((feature) => (
              <Card key={feature.title} className="h-full border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Try It{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Free
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Your first transfer is on us. Sign up and send money in under 2 minutes.
            </p>
            <Button
              size="lg"
              className="group mt-10 h-14 rounded-full px-10 text-base font-semibold shadow-lg shadow-primary/20"
              asChild
            >
              <Link href="/contact">
                Start Sending Free{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
