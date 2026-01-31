import { Badge } from "@/components/ui/badge";

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-24">
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
            Legal
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {[
              { title: "1. Information We Collect", content: "We collect information you provide directly, including name, email, phone, date of birth, government ID details, bank information, and transaction history. We also collect device information, IP addresses, and usage data." },
              { title: "2. How We Use Your Information", content: "We use your information to provide money transfer services, verify identity, comply with regulations, process transactions, send notifications, detect fraud, improve services, and communicate about products (with consent)." },
              { title: "3. Information Sharing", content: "We share information only as necessary: with payment partners, identity verification services, regulatory authorities, and service providers. We never sell personal information to third parties." },
              { title: "4. Data Security", content: "We implement 256-bit SSL encryption in transit, AES-256 at rest, two-factor authentication, regular independent security audits, and strict employee access controls." },
              { title: "5. Data Retention", content: "We retain information while your account is active or as needed for services. Certain information is retained as required by law, for dispute resolution, and agreement enforcement." },
              { title: "6. Your Rights", content: "Depending on jurisdiction, you may access, correct, delete your information, restrict processing, request portability, and withdraw marketing consent. Contact privacy@dattapay.com." },
              { title: "7. Cookies and Tracking", content: "We use cookies and tracking technologies to enhance experience, analyze usage, and personalize content. Manage preferences through browser settings. Essential cookies cannot be disabled." },
              { title: "8. Contact Us", content: "Questions about this policy? Contact our Data Protection Officer at privacy@dattapay.com or: DattaPay Remmit, 100 Financial District, Suite 400, San Francisco, CA 94111." },
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
