"use client";

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Container } from "@/components/reuseables/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { H2, P } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

const SHOP_LINKS: FooterLink[] = [
  { label: "Front Doors", href: "/front-doors" },
  { label: "All Doors", href: "/all-doors" },
  { label: "Design Your Door", href: "/design-your-door" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Finance Your Door", href: "/finance-your-door" },
  { label: "Coming Soon", href: "/coming-soon" },
];

const SUPPORT_LINKS: FooterLink[] = [
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Customer Reviews", href: "/reviews" },
];

const TRUST_FEATURES = [
  "UK Wide Delivery",
  "Expert Installation",
  "10 Year Warranty",
  "Secure Payments",
];

interface FooterProps extends React.ComponentProps<"footer"> {
  className?: string;
  showCta?: boolean;
}

export function Footer({ className, showCta = true, ...props }: FooterProps) {
  return (
    <footer className={cn("w-full", className)} {...props}>
      {/* Top CTA Banner Section with Background Image */}
      {showCta && (
        <div className="relative w-full overflow-hidden py-16 text-white sm:py-20 lg:py-24">
          {/* Background Image */}
          <Image
            src="/images/footer/cta-bg.png"
            alt="Statement Doors Architectural Background"
            fill
            priority={false}
            className="object-cover object-center"
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

          <Container className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            {/* Left Column: Heading, Subheading & Action Buttons */}
            <div className="max-w-xl text-left">
              <H2 className="font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Make a Statement?
              </H2>
              <P className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
                Design your perfect front door today or browse our collection.
              </P>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Button
                  variant="theme"
                  size="lg"
                  className="group flex items-center gap-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:gap-3 sm:text-sm"
                  render={
                    <Link href="/design-your-door">
                      Design Your Door
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  }
                />
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-lg border-white/30 bg-transparent text-xs font-semibold tracking-wider text-white uppercase hover:border-white/60 hover:bg-white/10 hover:text-white sm:text-sm"
                  render={<Link href="/all-doors">Browse All Doors</Link>}
                />
              </div>
            </div>

            {/* Right Column: Trust Features with primary tick mark icons (no bg) */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-4">
              {TRUST_FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm font-medium text-white sm:text-base"
                >
                  <Check className="text-primary size-5 shrink-0 stroke-[2.5]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}

      {/* Main Footer Links & Newsletter - Dark Theme */}
      <div className="dark text-foreground w-full border-white/10 bg-[#0B0D0F] pt-16 pb-12 sm:pt-20">
        <Container>
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            {/* Brand Column */}
            <div className="flex flex-col sm:col-span-2 md:col-span-3 lg:col-span-1">
              <Link
                href="/"
                className="flex items-center gap-2 transition-opacity hover:opacity-90"
              >
                <Image
                  src="/images/logo/logo-white.svg"
                  alt="Statement Doors"
                  width={224}
                  height={46}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-muted-foreground mt-4 max-w-xs text-sm leading-relaxed">
                Premium aluminium and steel front doors. Stylish, secure and
                built to last for UK homes.
              </p>

              {/* Social Icons (Facebook, Instagram, YouTube, TikTok) */}
              <div className="mt-5 flex items-center gap-1.5">
                {/* Facebook */}
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex size-9 items-center justify-center rounded-full bg-[#1F2937] text-white/80 transition-all hover:bg-[#374151] hover:text-white"
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-full bg-[#1F2937] text-white/80 transition-all hover:bg-[#374151] hover:text-white"
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </Link>

                {/* YouTube */}
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex size-9 items-center justify-center rounded-full bg-[#1F2937] text-white/80 transition-all hover:bg-[#374151] hover:text-white"
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <polygon
                      points="10 15 15 12 10 9 10 15"
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </Link>

                {/* TikTok */}
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex size-9 items-center justify-center rounded-full bg-[#1F2937] text-white/80 transition-all hover:bg-[#374151] hover:text-white"
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* SHOP Column */}
            <div>
              <h4 className="text-foreground text-xs font-semibold tracking-wider uppercase">
                SHOP
              </h4>
              <ul className="mt-3.5 space-y-1.5">
                {SHOP_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SUPPORT Column */}
            <div>
              <h4 className="text-foreground text-xs font-semibold tracking-wider uppercase">
                SUPPORT
              </h4>
              <ul className="mt-3.5 space-y-1.5">
                {SUPPORT_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY Column */}
            <div>
              <h4 className="text-foreground text-xs font-semibold tracking-wider uppercase">
                COMPANY
              </h4>
              <ul className="mt-3.5 space-y-1.5">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* NEWSLETTER Column */}
            <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
              <h4 className="text-foreground text-xs font-semibold tracking-wider uppercase">
                NEWSLETTER
              </h4>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Get the latest designs, offers and inspiration.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex flex-col gap-2.5"
              >
                <Input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="h-9 w-fit border-transparent text-sm text-[#13171C] placeholder:text-[#676567] dark:bg-white"
                />
                <Button
                  type="submit"
                  variant="theme"
                  size="lg"
                  className="w-fit text-xs font-semibold tracking-wider uppercase"
                >
                  SUBSCRIBE
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Bar: Centered Copyright */}
          <div className="mt-12 border-t border-white/10 pt-8 text-center sm:mt-16">
            <p className="text-muted-foreground text-xs">
              © 2025 Statement Doors. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
