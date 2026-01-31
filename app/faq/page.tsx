"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const faqCategories = [
  {
    category: "Getting Started",
    color: "text-teal-600 dark:text-teal-400",
    dotColor: "bg-teal-500",
    questions: [
      { q: "How do I sign up for DattaPay?", a: "Download our app or visit the website and tap 'Get Started'. You'll enter your name, email, and phone — then verify your identity with a photo ID. The whole process takes under 2 minutes and you can send your first transfer immediately." },
      { q: "What ID do I need to verify my account?", a: "A government-issued photo ID (passport, driver's license, or national ID card). For higher transfer limits, we may also ask for proof of address. Verification is automated and usually completes in seconds." },
      { q: "Is there a minimum or maximum I can send?", a: "The minimum transfer is $10. Maximums depend on your plan — Personal ($5,000), Premium ($25,000), and Business ($100,000) per transfer. Annual limits are based on your verification level." },
    ],
  },
  {
    category: "Transfers & Delivery",
    color: "text-purple-600 dark:text-purple-400",
    dotColor: "bg-purple-500",
    questions: [
      { q: "How fast will my recipient get the money?", a: "Most transfers arrive within minutes. Exact timing depends on the destination country, payment method, and delivery option. Bank deposits are typically minutes to 1 business day; mobile wallets and cash pickup are usually instant." },
      { q: "What delivery methods does DattaPay support?", a: "Bank deposit, mobile wallet top-up, cash pickup at partner locations, and doorstep delivery in select countries. Available options depend on the destination — we show all methods before you confirm." },
      { q: "Can I cancel a transfer after sending?", a: "Yes — you can cancel before the money has been processed and delivered. Once the recipient has received the funds, cancellation isn't possible. Check your transfer history to cancel an in-progress transfer." },
      { q: "Can I automate recurring transfers?", a: "Premium and Business members can schedule weekly, bi-weekly, or monthly recurring transfers. Ideal for regular remittances, rent, or payroll payments abroad." },
    ],
  },
  {
    category: "Fees & Exchange Rates",
    color: "text-green-600 dark:text-green-400",
    dotColor: "bg-green-500",
    questions: [
      { q: "What fees does DattaPay charge?", a: "Personal plan: 3 free transfers per month, then 0.5% per transfer. Premium: unlimited transfers at 0.25%. Business: 0.15% per transfer. No hidden charges — the total shown at checkout is the total you pay." },
      { q: "Where do your exchange rates come from?", a: "We use the Google mid-market rate — the same rate banks use between themselves. We add a small, transparent markup that's always visible before you confirm. Our rates are consistently better than banks and most competitors." },
      { q: "Are there any hidden fees or deductions?", a: "None. The amount shown on the confirmation screen is exactly what you pay and exactly what your recipient receives. No intermediary bank charges, no surprise deductions." },
    ],
  },
  {
    category: "Security & Privacy",
    color: "text-pink-600 dark:text-pink-400",
    dotColor: "bg-pink-500",
    questions: [
      { q: "How does DattaPay keep my money safe?", a: "We use 256-bit SSL encryption for all data in transit, AES-256 encryption at rest, two-factor authentication, biometric login, and undergo regular independent security audits. Your funds are held in segregated accounts at regulated financial institutions." },
      { q: "Is DattaPay a licensed money transfer service?", a: "Yes. We're registered with FinCEN as a Money Services Business and hold state licenses across all US jurisdictions where we operate. We comply with AML and KYC regulations in every country we serve." },
      { q: "What should I do if I see unauthorized activity?", a: "Contact us immediately at support@dattapay.com or through 24/7 live chat. We'll freeze your account to prevent further unauthorized access and guide you step-by-step through the resolution process." },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              <HelpCircle className="mr-1.5 h-3 w-3" /> FAQ
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your Questions,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Answered
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Everything you need to know about sending money with DattaPay — from sign-up to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${category.dotColor}`} />
                  <h2 className={`text-xl font-bold ${category.color}`}>
                    {category.category}
                  </h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${catIndex}-${faqIndex}`} className="border-border/50">
                      <AccordionTrigger className="text-left text-sm font-medium hover:text-primary hover:no-underline sm:text-base">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Can&apos;t Find Your Answer?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Our support team is available 24/7 via chat, email, and phone — and they actually know the product.
            </p>
            <Button
              size="lg"
              className="mt-8 h-14 rounded-full bg-white px-8 text-base font-semibold text-primary shadow-xl hover:bg-white/90"
              asChild
            >
              <Link href="/contact">
                Talk to Support <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
