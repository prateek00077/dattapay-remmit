import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Company: [
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
  Resources: [
    { label: "FAQ", href: "/#faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="DattaPay" width={140} height={40} className="h-8 w-auto" />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Cross-border transfers at the best rates, zero fees, and delivery in minutes.
            </p>
            <div className="mt-4 flex gap-2">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex flex-col items-center justify-between gap-3 py-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} DattaPay Remmit. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Registered with FinCEN | Licensed Money Service Business</p>
        </div>
      </div>
    </footer>
  );
}
