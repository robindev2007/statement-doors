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
    <Container className="max-w-4xl py-12 sm:py-16">
      <header className="mb-8 sm:mb-10">
        <H1>Terms and Conditions</H1>
      </header>

      <div className="space-y-8">
        {/* Section 1 */}
        <section className="space-y-2">
          <H2>1. Acceptance of Terms</H2>
          <P>
            By accessing or using Magnolia (“Service”), you agree to be bound by
            these Terms of Service. If you do not agree to these terms, you may
            not use the Service.
          </P>
        </section>

        {/* Section 2 */}
        <section className="space-y-2">
          <H2>2. Description of Service</H2>
          <P>
            Magnolia is an AI-powered chatbot platform designed to support
            smarter conversations, automation, analytics, and decision-making.
            Features may evolve over time as we improve our services.
          </P>
        </section>

        {/* Section 3 */}
        <section className="space-y-2">
          <H2>3. Eligibility</H2>
          <P>
            You must be at least 18 years old or have legal authority to enter
            into this agreement. By using Magnolia, you represent that you meet
            these requirements.
          </P>
        </section>

        {/* Section 4 */}
        <section className="space-y-2">
          <H2>4. Account Registration & Security</H2>
          <P>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities under your account.
            Magnolia is not liable for any loss caused by unauthorized account
            access.
          </P>
        </section>

        {/* Section 5 */}
        <section className="space-y-2">
          <H2>5. Acceptable Use Policy</H2>
          <P>You agree not to use Magnolia to:</P>
          <P>Violate any applicable laws or regulations</P>
          <P>Upload harmful, abusive, or illegal content</P>
          <P>Attempt to disrupt or exploit system security</P>
          <P>Train AI models with unauthorized or sensitive data</P>
          <P>
            We reserve the right to suspend or terminate accounts that violate
            these rules.
          </P>
        </section>

        {/* Section 6 */}
        <section className="space-y-2">
          <H2>6. AI-Generated Content Disclaimer</H2>
          <P>
            Magnolia provides AI-generated responses for informational and
            operational purposes. While we strive for accuracy, AI outputs may
            not always be complete or error-free. You are responsible for
            reviewing and validating AI-generated content before relying on it.
          </P>
        </section>

        {/* Section 7 */}
        <section className="space-y-2">
          <H2>7. Contact Us</H2>
          <P>
            If you have questions or concerns about this Privacy Policy or your
            data, please contact us at:{" "}
            <a
              href="mailto:privacy@Magnolia.ai"
              className="text-primary underline underline-offset-4"
            >
              privacy@Magnolia.ai
            </a>
          </P>
        </section>
      </div>
    </Container>
  );
}
