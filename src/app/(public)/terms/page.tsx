import type { Metadata } from "next";

import { Container } from "@/components/reuseables/container";
import { H1, H2, P } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Terms of Service | Magnolia",
  description:
    "Terms and Conditions of using the Magnolia platform and services.",
};

export default function TermsPage() {
  return (
    <div className="bg-background w-full py-12 sm:py-16 lg:py-20">
      <Container className="max-w-4xl">
        <header className="border-border mb-10 border-b pb-8 sm:mb-12">
          <span className="text-primary text-xs font-semibold tracking-wider uppercase">
            Legal & Compliance
          </span>
          <H1 className="text-foreground mt-2">Terms and Conditions</H1>
          <P className="text-muted-foreground mt-3 text-sm sm:text-base">
            Last updated: October 2026
          </P>
        </header>

        <div className="text-foreground/90 space-y-10">
          {/* Section 1 */}
          <section className="space-y-3">
            <H2 className="text-xl font-bold sm:text-2xl">
              1. Acceptance of Terms
            </H2>
            <P className="text-muted-foreground leading-relaxed">
              By accessing or using Magnolia (“Service”), you agree to be bound
              by these Terms of Service. If you do not agree to these terms, you
              may not use the Service.
            </P>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <H2 className="text-xl font-bold sm:text-2xl">
              2. Description of Service
            </H2>
            <P className="text-muted-foreground leading-relaxed">
              Magnolia is an AI-powered chatbot platform designed to support
              smarter conversations, automation, analytics, and decision-making.
              Features may evolve over time as we improve our services.
            </P>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <H2 className="text-xl font-bold sm:text-2xl">3. Eligibility</H2>
            <P className="text-muted-foreground leading-relaxed">
              You must be at least 18 years old or have legal authority to enter
              into this agreement. By using Magnolia, you represent that you
              meet these requirements.
            </P>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <H2 className="text-xl font-bold sm:text-2xl">
              4. Account Registration & Security
            </H2>
            <P className="text-muted-foreground leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities under your account.
              Magnolia is not liable for any loss caused by unauthorized account
              access.
            </P>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <H2 className="text-xl font-bold sm:text-2xl">
              5. Acceptable Use Policy
            </H2>
            <P className="text-muted-foreground leading-relaxed">
              You agree not to use Magnolia to:
            </P>
            <ul className="text-muted-foreground list-inside list-disc space-y-1.5 sm:pl-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Upload harmful, abusive, or illegal content</li>
              <li>Attempt to disrupt or exploit system security</li>
              <li>Train AI models with unauthorized or sensitive data</li>
            </ul>
            <P className="text-muted-foreground mt-2 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate
              these rules.
            </P>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <H2 className="text-xl font-bold sm:text-2xl">
              6. AI-Generated Content Disclaimer
            </H2>
            <P className="text-muted-foreground leading-relaxed">
              Magnolia provides AI-generated responses for informational and
              operational purposes. While we strive for accuracy, AI outputs may
              not always be complete or error-free. You are responsible for
              reviewing and validating AI-generated content before relying on
              it.
            </P>
          </section>

          {/* Section 7 */}
          <section className="border-border bg-card rounded-xl border p-6 sm:p-8">
            <H2 className="text-xl font-bold sm:text-2xl">7. Contact Us</H2>
            <P className="text-muted-foreground mt-2 leading-relaxed">
              If you have questions or concerns about this Privacy Policy or
              your data, please contact us at:{" "}
              <a
                href="mailto:privacy@Magnolia.ai"
                className="text-primary font-medium underline underline-offset-4 hover:opacity-80"
              >
                privacy@Magnolia.ai
              </a>
            </P>
          </section>
        </div>
      </Container>
    </div>
  );
}
