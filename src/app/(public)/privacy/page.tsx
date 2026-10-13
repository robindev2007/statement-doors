import type { Metadata } from "next";

import { LegalContent } from "@/features/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Statement Doors",
  description: "Privacy Policy and data practices for Statement Doors.",
};

export default function PrivacyPolicyPage() {
  return <LegalContent type="privacy" title="Privacy Policy" />;
}
