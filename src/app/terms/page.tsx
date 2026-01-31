import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-24">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
            Legal
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {[
              { title: "1. Acceptance of Terms", content: "By accessing or using the DattaPay Remmit service (\"Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, do not use the Service. We reserve the right to modify these Terms at any time." },
              { title: "2. Eligibility", content: "You must be at least 18 years old and have the legal capacity to enter into a binding agreement. By using DattaPay Remmit, you represent that you meet these requirements and that all information you provide is accurate." },
              { title: "3. Account Registration", content: "To use our Service, you must create an account and complete identity verification. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account." },
              { title: "4. Money Transfer Services", content: "DattaPay Remmit provides international money transfer services subject to applicable laws. Transfer amounts, delivery times, and methods may vary based on destination, payment method, and regulatory requirements." },
              { title: "5. Fees and Exchange Rates", content: "Fees and exchange rates are disclosed before you confirm each transfer. Exchange rates fluctuate and the rate applied is the rate at confirmation. We may change our fee structure with notice to existing customers." },
              { title: "6. Prohibited Activities", content: "You agree not to use the Service for any unlawful purpose, including money laundering, terrorist financing, fraud, or any other illegal activity. We reserve the right to suspend accounts and report to authorities." },
              { title: "7. Limitation of Liability", content: "To the fullest extent permitted by law, DattaPay Remmit shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed fees paid in the twelve months preceding the claim." },
              { title: "8. Contact Information", content: "If you have questions about these Terms, contact us at legal@dattapay.com or write to: DattaPay Remmit, 100 Financial District, Suite 400, San Francisco, CA 94111." },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
