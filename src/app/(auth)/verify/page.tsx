import type { Metadata } from "next";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import { VerifyMagicLink } from "@/features/auth";

export const metadata: Metadata = {
  title: "Verifying Account | Statement Doors",
  description: "Verifying your magic link email session",
};

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-muted/60 mb-4 flex size-14 items-center justify-center rounded-full">
            <Loader2 className="text-foreground size-7 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            Just a moment...
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Preparing your session...
          </p>
        </div>
      }
    >
      <VerifyMagicLink />
    </Suspense>
  );
}
