import type { Metadata } from "next";

import { LegalContent } from "@/features/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions | Statement Doors",
  description:
    "Terms and Conditions for Statement Doors platform and services.",
};

export default function TermsPage() {
  return <LegalContent type="terms" title="Terms and Conditions" />;
}
