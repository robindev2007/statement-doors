import type { Metadata } from "next";

import { LoginForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "Sign in | Statement Doors",
  description: "Sign in to Continue to your Statement door account",
};

export default function LoginPage() {
  return <LoginForm />;
}
