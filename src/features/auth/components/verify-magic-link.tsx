"use client";

import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type VerificationStatus = "loading" | "success" | "error";

export function VerifyMagicLink() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<VerificationStatus>("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    async function verify() {
      // Simulate/trigger token verification
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        if (!isMounted) return;

        // In a live system, you'd send `token` to your verification API route or client
        if (token === "invalid") {
          setStatus("error");
          setErrorMessage("This magic link is invalid or has expired.");
          return;
        }

        setStatus("success");

        // Automatically redirect to homepage after success
        const timer = setTimeout(() => {
          router.push("/");
        }, 1500);

        return () => clearTimeout(timer);
      } catch {
        if (!isMounted) return;
        setStatus("error");
        setErrorMessage("Verification failed. Please try signing in again.");
      }
    }

    verify();

    return () => {
      isMounted = false;
    };
  }, [token, router]);

  return (
    <Card className="w-full max-w-115 border-0 bg-transparent shadow-none">
      <CardHeader className="text-center">
        {status === "loading" && (
          <div className="bg-muted/60 mx-auto mb-4 flex size-14 items-center justify-center rounded-full">
            <Loader2 className="text-foreground size-7 animate-spin" />
          </div>
        )}

        {status === "success" && (
          <div className="bg-primary/15 mx-auto mb-4 flex size-14 items-center justify-center rounded-full">
            <CheckCircle2 className="text-primary size-7" />
          </div>
        )}

        {status === "error" && (
          <div className="bg-destructive/10 mx-auto mb-4 flex size-14 items-center justify-center rounded-full">
            <XCircle className="text-destructive size-7" />
          </div>
        )}

        <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
          {status === "loading" && "Just a moment..."}
          {status === "success" && "Account Verified!"}
          {status === "error" && "Verification Failed"}
        </CardTitle>

        <CardDescription className="text-muted-foreground mt-2 text-sm">
          {status === "loading" &&
            "We’re verifying your magic link. Please wait while we prepare your session."}
          {status === "success" &&
            "Your email has been verified. Redirecting you to the home page..."}
          {status === "error" &&
            (errorMessage ||
              "This magic link is invalid or has already been used.")}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center pt-2">
        {status === "success" && (
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-2 h-10 w-full max-w-xs bg-black text-sm font-semibold text-white hover:bg-black/90",
            )}
          >
            Continue to Home
          </Link>
        )}

        {status === "error" && (
          <div className="mt-2 flex w-full max-w-xs flex-col gap-2">
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-10 w-full bg-black text-sm font-semibold text-white hover:bg-black/90",
              )}
            >
              Back to Sign In
            </Link>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "hover:bg-muted h-10 w-full bg-transparent text-sm font-medium",
              )}
            >
              Go to Home
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
