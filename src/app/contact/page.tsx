"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

const contactInfo = [
  { icon: Mail, title: "Email Us", detail: "support@dattapay.com", description: "We reply within 4 hours on business days", bg: "bg-blue-50 dark:bg-blue-950/30", color: "text-blue-600 dark:text-blue-400" },
  { icon: Phone, title: "Call Us", detail: "+1 (888) 555-0123", description: "Mon-Fri, 9am-6pm PST", bg: "bg-purple-50 dark:bg-purple-950/30", color: "text-purple-600 dark:text-purple-400" },
  { icon: MapPin, title: "Headquarters", detail: "San Francisco, CA", description: "100 Financial District, Suite 400", bg: "bg-pink-50 dark:bg-pink-950/30", color: "text-pink-600 dark:text-pink-400" },
  { icon: MessageSquare, title: "Live Chat", detail: "Available 24/7", description: "Instant answers from our support team", bg: "bg-amber-50 dark:bg-amber-950/30", color: "text-amber-600 dark:text-amber-400" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    if (!name || name.trim().length < 2) errs.name = "Name must be at least 2 characters";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email";
    if (!subject || subject.trim().length < 3) errs.subject = "Subject is required";
    if (!message || message.trim().length < 10) errs.message = "Message must be at least 10 characters";
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormStatus("error");
      return;
    }
    setErrors({});
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  }

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
                When You Need Us
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Question about a transfer? Need help getting started? Our team responds fast — because your money shouldn&apos;t wait.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${info.bg}`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {info.detail}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Card className="overflow-hidden border-border/50 shadow-xl">
              <div className="bg-primary px-6 py-5">
                <CardTitle className="text-xl text-primary-foreground">Send Us a Message</CardTitle>
                <CardDescription className="text-primary-foreground/70">
                  We typically respond within 4 hours on business days.
                </CardDescription>
              </div>
              <CardContent className="p-6">
                {formStatus === "success" ? (
                  <motion.div
                    className="flex flex-col items-center gap-4 py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-950/30">
                      <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Message Received!</h3>
                    <p className="max-w-sm text-muted-foreground">
                      Thanks for reaching out. A member of our team will get back to you shortly.
                    </p>
                    <Button variant="outline" className="mt-4 rounded-full" onClick={() => setFormStatus("idle")}>
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" placeholder="John Doe" className={`rounded-xl ${errors.name ? "border-red-500 ring-red-500/20 ring-2" : ""}`} />
                        {errors.name && <p className="flex items-center gap-1 text-xs text-red-500"><AlertCircle className="h-3 w-3" />{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" className={`rounded-xl ${errors.email ? "border-red-500 ring-red-500/20 ring-2" : ""}`} />
                        {errors.email && <p className="flex items-center gap-1 text-xs text-red-500"><AlertCircle className="h-3 w-3" />{errors.email}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="How can we help?" className={`rounded-xl ${errors.subject ? "border-red-500 ring-red-500/20 ring-2" : ""}`} />
                      {errors.subject && <p className="flex items-center gap-1 text-xs text-red-500"><AlertCircle className="h-3 w-3" />{errors.subject}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="Tell us more about your question or issue..." rows={5} className={`rounded-xl resize-none ${errors.message ? "border-red-500 ring-red-500/20 ring-2" : ""}`} />
                      {errors.message && <p className="flex items-center gap-1 text-xs text-red-500"><AlertCircle className="h-3 w-3" />{errors.message}</p>}
                    </div>
                    {formStatus === "error" && Object.keys(errors).length > 0 && (
                      <div className="rounded-xl border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950/30">
                        <p className="text-sm text-red-600 dark:text-red-400">Please fix the errors above and try again.</p>
                      </div>
                    )}
                    <Button
                      type="submit"
                      className="w-full rounded-full shadow-lg shadow-primary/20"
                      size="lg"
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? (
                        <>Sending...</>
                      ) : (
                        <>Send Message <Send className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
