import type { Metadata } from "next";
import { Suspense } from "react";

import { LoginForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "Sign in | Statement Doors",
  description: "Sign in to Continue to your Statement door account",
};

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
