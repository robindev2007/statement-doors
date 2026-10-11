import type { Metadata } from "next";

import { Container } from "@/components/reuseables/container";
import { H1, H2, H3, P } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Privacy Policy | Magnolia",
  description:
    "Learn how Magnolia collects, uses, and safeguards your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="max-w-4xl py-12 sm:py-16">
      <header className="mb-8 sm:mb-10">
        <H1>Privacy Policy</H1>
      </header>

      <div className="space-y-8">
        {/* Section 1 */}
        <section className="space-y-2">
          <H2>1. Introduction</H2>
          <P>
            This Privacy Policy describes how Magnolia (“we”, “our”, or “us”)
            collects, uses, and safeguards your information when you access or
            use our services (“Service”). By using Nietzsche, you agree to the
            practices described in this policy.
          </P>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <H2>2. Information We Collect</H2>
          <P>
            We collect information to provide and improve our Service,
            including:
          </P>

          <div className="space-y-3 pl-1 sm:pl-2">
            <div>
              <H3>a. Account Information</H3>
              <P>Name</P>
              <P>Email address</P>
              <P>Account credentials</P>
              <P>Subscription details</P>
            </div>

            <div>
              <H3>b. Usage Data</H3>
              <P>Chat interactions and conversation metadata</P>
              <P>Feature usage and performance data</P>
              <P>Log files, IP address, browser type, and device information</P>
            </div>

            <div>
              <H3>c. User-Provided Content</H3>
              <P>
                Messages, prompts, files, and data you submit to train or
                interact with the AI
              </P>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-2">
          <H2>3. How We Use Your Information</H2>
          <P>We use your information to:</P>
          <P>Provide and operate the Magnolia platform</P>
          <P>Improve AI responses, features, and performance</P>
          <P>Manage subscriptions, billing, and support</P>
          <P>Ensure platform security and prevent abuse</P>
          <P>Communicate service updates and important notices</P>
        </section>

        {/* Section 4 */}
        <section className="space-y-2">
          <H2>4. AI Data Processing & Training</H2>
          <P>
            Your data may be processed by AI systems to generate responses and
            insights. We do not use your private data to train shared or public
            AI models without authorization. You retain ownership of your
            content at all times.
          </P>
        </section>

        {/* Section 5 */}
        <section className="space-y-2">
          <H2>5. Data Sharing & Disclosure</H2>
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
          <H2>6. Data Security</H2>
          <P>
            Magnolia implements industry-standard security measures, including
            encryption, access controls, and secure infrastructure, to protect
            your data from unauthorized access or misuse.
          </P>
        </section>

        {/* Section 7 */}
        <section className="space-y-2">
          <H2>7. Changes to This Privacy Policy</H2>
          <P>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and continued use of the Service
            indicates acceptance of the updated policy.
          </P>
        </section>

        {/* Section 8 */}
        <section className="space-y-2">
          <H2>8. Contact Us</H2>
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
