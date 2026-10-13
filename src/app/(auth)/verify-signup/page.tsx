import type { Metadata } from "next";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import { VerifyMagicLink } from "@/features/auth";

export const metadata: Metadata = {
  title: "Verify Signup | Statement Doors",
  description: "Verifying your account registration",
};

export default function VerifySignupPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] w-full max-w-115 flex-col items-center justify-center py-12 text-center">
          <div className="bg-muted/60 mb-4 flex size-14 items-center justify-center rounded-full">
            <Loader2 className="text-foreground size-7 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            Verifying your account...
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Please wait while we verify your account...
          </p>
        </div>
      }
    >
      <VerifyMagicLink />
    </Suspense>
  );
}
