"use client";

import { useActionState, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/contact/action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const initialState: ContactFormState = { status: "idle", errors: {} };

function ContactFormContent({ onReset }: { onReset: () => void }) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <Card className="overflow-hidden border-border/50 shadow-xl">
        <div className="bg-primary px-6 py-5">
          <CardTitle className="text-xl text-primary-foreground">Send Us a Message</CardTitle>
          <CardDescription className="text-primary-foreground/70">
            We typically respond within 4 hours.
          </CardDescription>
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-950/30">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold">Message Received!</h3>
            <p className="max-w-sm text-muted-foreground">
              A member of our team will get back to you shortly.
            </p>
            <Button variant="outline" className="mt-4 rounded-full" onClick={onReset}>
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const errors = state.errors;

  return (
    <Card className="overflow-hidden border-border/50 shadow-xl">
      <div className="bg-primary px-6 py-5">
        <CardTitle className="text-xl text-primary-foreground">Send Us a Message</CardTitle>
        <CardDescription className="text-primary-foreground/70">
          We typically respond within 4 hours.
        </CardDescription>
      </div>
      <CardContent className="p-6">
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              className={`rounded-xl ${errors.name ? "border-red-500 ring-2 ring-red-500/20" : ""}`}
            />
            {errors.name && (
              <p className="flex items-center gap-1 text-xs text-red-500">
                <AlertCircle className="h-3 w-3" />
                {errors.name}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              className={`rounded-xl ${errors.email ? "border-red-500 ring-2 ring-red-500/20" : ""}`}
            />
            {errors.email && (
              <p className="flex items-center gap-1 text-xs text-red-500">
                <AlertCircle className="h-3 w-3" />
                {errors.email}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp Number</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              placeholder="+1 234 567 8900"
              className={`rounded-xl ${errors.whatsapp ? "border-red-500 ring-2 ring-red-500/20" : ""}`}
            />
            {errors.whatsapp && (
              <p className="flex items-center gap-1 text-xs text-red-500">
                <AlertCircle className="h-3 w-3" />
                {errors.whatsapp}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your needs..."
              rows={5}
              className={`rounded-xl ${errors.message ? "border-red-500 ring-2 ring-red-500/20" : ""}`}
            />
            {errors.message && (
              <p className="flex items-center gap-1 text-xs text-red-500">
                <AlertCircle className="h-3 w-3" />
                {errors.message}
              </p>
            )}
          </div>
          {state.status === "error" && Object.keys(errors).length > 0 && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950/30">
              <p className="text-sm text-red-600 dark:text-red-400">Please fix the errors above.</p>
            </div>
          )}
          <Button
            type="submit"
            className="w-full rounded-full shadow-lg shadow-primary/20"
            size="lg"
            disabled={isPending}
          >
            {isPending ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export function ContactForm() {
  const [key, setKey] = useState(0);
  return <ContactFormContent key={key} onReset={() => setKey((k) => k + 1)} />;
}
