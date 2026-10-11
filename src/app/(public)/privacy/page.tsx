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
    <div className="bg-background w-full py-12 sm:py-16 lg:py-20">
      <Container className="max-w-4xl">
        <header className="border-border mb-10 border-b pb-8 sm:mb-12">
          <span className="text-primary text-xs font-semibold tracking-wider uppercase">
            Legal & Compliance
          </span>
          <H1 className="text-foreground mt-2">Privacy Policy</H1>
          <P className="text-muted-foreground mt-3 text-sm sm:text-base">
            Last updated: October 2026
          </P>
        </header>

        <div className="text-foreground/90 space-y-10">
          {/* Section 1 */}
          <section className="space-y-3">
            <H2 className="text-xl font-bold sm:text-2xl">1. Introduction</H2>
            <P className="text-muted-foreground leading-relaxed">
              This Privacy Policy describes how Magnolia (“we”, “our”, or “us”)
              collects, uses, and safeguards your information when you access or
              use our services (“Service”). By using Nietzsche, you agree to the
              practices described in this policy.
            </P>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <H2 className="text-xl font-bold sm:text-2xl">
              2. Information We Collect
            </H2>
            <P className="text-muted-foreground leading-relaxed">
              We collect information to provide and improve our Service,
              including:
            </P>

            <div className="border-border/60 bg-muted/20 space-y-4 rounded-xl border p-5 sm:p-6">
              <div>
                <H3 className="text-foreground text-base font-semibold sm:text-lg">
                  a. Account Information
                </H3>
                <ul className="text-muted-foreground mt-2 list-inside list-disc space-y-1 text-sm sm:text-base">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Account credentials</li>
                  <li>Subscription details</li>
                </ul>
              </div>

              <div>
                <H3 className="text-foreground text-base font-semibold sm:text-lg">
                  b. Usage Data
                </H3>
                <ul className="text-muted-foreground mt-2 list-inside list-disc space-y-1 text-sm sm:text-base">
                  <li>Chat interactions and conversation metadata</li>
                  <li>Feature usage and performance data</li>
                  <li>
                    Log files, IP address, browser type, and device information
                  </li>
                </ul>
              </div>

              <div>
                <H3 className="text-foreground text-base font-semibold sm:text-lg">
                  c. User-Provided Content
                </H3>
                <ul className="text-muted-foreground mt-2 list-inside list-disc space-y-1 text-sm sm:text-base">
                  <li>
                    Messages, prompts, files, and data you submit to train or
                    interact with the AI
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <H2 className="text-xl font-bold sm:text-2xl">
              3. How We Use Your Information
            </H2>
            <P className="text-muted-foreground leading-relaxed">
              We use your information to:
            </P>
            <ul className="text-muted-foreground list-inside list-disc space-y-1.5 sm:pl-2">
              <li>Provide and operate the Magnolia platform</li>
              <li>Improve AI responses, features, and performance</li>
              <li>Manage subscriptions, billing, and support</li>
              <li>Ensure platform security and prevent abuse</li>
              <li>Communicate service updates and important notices</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <H2 className="text-xl font-bold sm:text-2xl">
              4. AI Data Processing & Training
            </H2>
            <P className="text-muted-foreground leading-relaxed">
              Your data may be processed by AI systems to generate responses and
              insights. We do not use your private data to train shared or
              public AI models without authorization. You retain ownership of
              your content at all times.
            </P>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <H2 className="text-xl font-bold sm:text-2xl">
              5. Data Sharing & Disclosure
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
            <H2 className="text-xl font-bold sm:text-2xl">6. Data Security</H2>
            <P className="text-muted-foreground leading-relaxed">
              Magnolia implements industry-standard security measures, including
              encryption, access controls, and secure infrastructure, to protect
              your data from unauthorized access or misuse.
            </P>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <H2 className="text-xl font-bold sm:text-2xl">
              7. Changes to This Privacy Policy
            </H2>
            <P className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and continued use of the Service
              indicates acceptance of the updated policy.
            </P>
          </section>

          {/* Section 8 */}
          <section className="border-border bg-card rounded-xl border p-6 sm:p-8">
            <H2 className="text-xl font-bold sm:text-2xl">8. Contact Us</H2>
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
