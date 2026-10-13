"use client";

import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { useVerifyMagicLinkMutation } from "@/features/auth/api";
import { cn, handleApiError } from "@/lib/utils";

type VerificationStatus = "loading" | "success" | "error";

export function VerifyMagicLink() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email") || "";

  const loginUrl = email
    ? `/login?email=${encodeURIComponent(email)}`
    : "/login";

  const [status, setStatus] = useState<VerificationStatus>(() =>
    token ? "loading" : "error",
  );
  const [errorMessage, setErrorMessage] = useState<string>(() =>
    token ? "" : "Missing or invalid verification token.",
  );
  const hasRequestedRef = useRef(false);

  const [verifyMagicLink] = useVerifyMagicLinkMutation();

  useEffect(() => {
    if (!token || hasRequestedRef.current) return;
    const activeToken = token;
    hasRequestedRef.current = true;

    async function executeVerification() {
      try {
        const res = await verifyMagicLink({ token: activeToken }).unwrap();
        setStatus("success");

        const msg =
          res.message ||
          "Account successfully verified via Magic Link! You can now log in.";
        toast.success(msg);

        // Auto-redirect to login with email prefilled
        setTimeout(() => {
          router.push(loginUrl);
        }, 1200);
      } catch (err: unknown) {
        setStatus("error");
        const msg = handleApiError(
          err,
          "Invalid or expired verification link. Please request a new one.",
        );
        setErrorMessage(msg);
      }
    }

    executeVerification();
  }, [token, loginUrl, router, verifyMagicLink]);

  return (
    <Card className="flex min-h-[60vh] w-full max-w-115 flex-col justify-center border-0 bg-transparent shadow-none">
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
          {status === "loading" && "Verifying your account..."}
          {status === "success" && "Account Verified!"}
          {status === "error" && "Verification Failed"}
        </CardTitle>

        <CardDescription className="text-muted-foreground mt-2 text-sm">
          {status === "loading" &&
            "Please wait while we verify your verification link with the server."}
          {status === "success" &&
            "Your email has been verified. Redirecting you to sign in..."}
          {status === "error" &&
            (errorMessage ||
              "This verification link is invalid or has already been used.")}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center pt-2">
        {status === "success" && (
          <Link
            href={loginUrl}
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-2 h-10 w-full max-w-xs bg-black text-sm font-semibold text-white hover:bg-black/90",
            )}
          >
            Go to Sign In
          </Link>
        )}

        {status === "error" && (
          <div className="mt-2 flex w-full max-w-xs flex-col gap-2">
            <Link
              href={loginUrl}
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
