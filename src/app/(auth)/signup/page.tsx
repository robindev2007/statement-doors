import type { Metadata } from "next";

import { SignUpForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "Create Account | Statement Doors",
  description:
    "Lets get started with a few basic details to create your account",
};

export default function SignUpPage() {
  return <SignUpForm />;
}
