import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";

const contactInfo = [
  { icon: Mail, title: "Email", detail: "support@dattapay.com", description: "Reply within 4 hours", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { icon: Phone, title: "Phone", detail: "+1 (888) 555-0123", description: "Mon-Fri, 9am-6pm PST", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { icon: MapPin, title: "Office", detail: "San Francisco, CA", description: "100 Financial District", bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
  { icon: MessageSquare, title: "Live Chat", detail: "Available 24/7", description: "Instant answers", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              Contact
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We&apos;re Here{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                to Help
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Questions about a transfer? Our team responds fast.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="h-full border-border/50 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${info.bg}`}>
                    <info.icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <h3 className="font-semibold">{info.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{info.detail}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
