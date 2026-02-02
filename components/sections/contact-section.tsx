import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactSection() {
  return (
    <div id="contact" className="scroll-mt-20">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 sm:py-28">
        <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
              Contact
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We&apos;re Here{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                to Help
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Questions about a transfer? Our team responds fast.
            </p>
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
    </div>
  );
}
