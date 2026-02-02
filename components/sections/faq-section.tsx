import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqCategories = [
  {
    category: "Getting Started",
    color: "text-teal-600 dark:text-teal-400",
    dotColor: "bg-teal-500",
    questions: [
      { q: "How do I sign up?", a: "Download the app or visit our website, tap 'Get Started', verify your ID, and send your first transfer in under 2 minutes." },
      { q: "What ID do I need?", a: "A government-issued photo ID (passport, driver's license, or national ID). For higher limits, we may ask for proof of address." },
      { q: "What are the transfer limits?", a: "Minimum $10. Maximums: Personal ($5,000), Premium ($25,000), Business ($100,000) per transfer." },
    ],
  },
  {
    category: "Transfers & Delivery",
    color: "text-purple-600 dark:text-purple-400",
    dotColor: "bg-purple-500",
    questions: [
      { q: "How fast is delivery?", a: "Most transfers arrive within minutes. Bank deposits may take up to 1 business day. Mobile wallets and cash pickup are usually instant." },
      { q: "What delivery methods are available?", a: "Bank deposit, mobile wallet, cash pickup, and doorstep delivery in select countries. Options vary by destination." },
      { q: "Can I cancel a transfer?", a: "Yes, before the money is processed and delivered. Check your transfer history to cancel an in-progress transfer." },
    ],
  },
  {
    category: "Fees & Rates",
    color: "text-green-600 dark:text-green-400",
    dotColor: "bg-green-500",
    questions: [
      { q: "What does DattaPay charge?", a: "Personal: 3 free transfers/month, then 0.5%. Premium: unlimited at 0.25%. Business: 0.15%. No hidden charges." },
      { q: "Where do your rates come from?", a: "We use the Google mid-market rate — the same rate banks use between themselves. Always visible before you confirm." },
      { q: "Are there hidden fees?", a: "None. The confirmation screen shows exactly what you pay and what your recipient receives." },
    ],
  },
  {
    category: "Security",
    color: "text-pink-600 dark:text-pink-400",
    dotColor: "bg-pink-500",
    questions: [
      { q: "How is my money protected?", a: "256-bit encryption, two-factor authentication, biometric login, and regular security audits. Funds held in segregated accounts at regulated institutions." },
      { q: "Is DattaPay licensed?", a: "Yes. Registered with FinCEN and licensed across all US jurisdictions where we operate. Fully AML/KYC compliant." },
      { q: "What if I see unauthorized activity?", a: "Contact support immediately at support@dattapay.com or via 24/7 live chat. We'll freeze your account and guide you through resolution." },
    ],
  },
];

export function FAQSection() {
  return (
    <div id="faq" className="scroll-mt-20">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              <HelpCircle className="mr-1.5 h-3 w-3" /> FAQ
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your Questions,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Answered
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Everything you need to know about sending money with DattaPay.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={category.category}>
                <div className="mb-4 flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${category.dotColor}`} />
                  <h3 className={`text-xl font-bold ${category.color}`}>
                    {category.category}
                  </h3>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
