"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, MailCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { useSignupMutation } from "@/features/auth/api";
import {
  type SignupFormData,
  signupSchema,
} from "@/features/auth/schemas/signup.schema";
import { cn, handleApiError } from "@/lib/utils";

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");

  const [signup, { isLoading }] = useSignupMutation();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      setErrorMessage(null);
      const res = await signup(data).unwrap();
      setRegisteredEmail(data.email);
      setIsSuccess(true);
      toast.success(
        res.message || "Account created! Please check your email to verify.",
      );
    } catch (err: unknown) {
      const msg = handleApiError(
        err,
        "Failed to create account. Please try again.",
      );
      setErrorMessage(msg);
    }
  };

  if (isSuccess) {
    return (
      <Card className="border-border/50 w-full max-w-135 border shadow-xs">
        <CardHeader className="text-center">
          <div className="bg-primary/10 text-primary mx-auto mb-4 flex size-14 items-center justify-center rounded-full">
            <MailCheck className="size-7" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
            Check your email
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2 text-sm leading-relaxed">
            We’ve sent a verification link to{" "}
            <span className="text-foreground font-semibold">
              {registeredEmail}
            </span>
            . Please check your inbox and click the link to activate your
            account.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 pt-2">
          <div className="bg-muted/40 text-muted-foreground rounded-lg p-4 text-center text-xs">
            Didn’t receive the email? Check your spam or junk folder.
          </div>

          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "default" }),
              "flex h-10 w-full items-center justify-center bg-black text-sm font-semibold text-white hover:bg-black/90 active:bg-black/80",
            )}
          >
            Go to Sign In
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50 w-full max-w-135 border shadow-xs">
      {/* Header */}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
          Create your account
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-1 text-sm">
          Lets get started with a few basic details
        </CardDescription>
      </CardHeader>

      <CardContent>
        {errorMessage && (
          <div className="bg-destructive/10 text-destructive border-destructive/20 mb-4 rounded-md p-3 text-xs font-medium">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name & Last Name Row */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName" className="text-foreground">
                First Name
              </Label>
              <div className="mt-1.5">
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="h-9.5 px-3"
                  {...register("firstName")}
                />
              </div>
              {errors.firstName && (
                <p className="text-destructive mt-1 text-xs">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName" className="text-foreground">
                Last Name
              </Label>
              <div className="mt-1.5">
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Smith"
                  className="h-9.5 px-3"
                  {...register("lastName")}
                />
              </div>
              {errors.lastName && (
                <p className="text-destructive mt-1 text-xs">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <Label htmlFor="email" className="text-foreground">
              Email
            </Label>
            <div className="mt-1.5">
              <Input
                id="email"
                type="email"
                placeholder="hijuyed@gmail.com"
                className="h-9.5 px-3"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-destructive mt-1 text-xs">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <Label htmlFor="phoneNumber" className="text-foreground">
              Phone Number
            </Label>
            <div className="mt-1.5">
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="1546965899549"
                className="h-9.5 px-3"
                {...register("phoneNumber")}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-destructive mt-1 text-xs">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <Label htmlFor="password" className="text-foreground">
              Password
            </Label>
            <div className="relative mt-1.5">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="h-9.5 pr-10 pl-3"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground absolute inset-y-0 right-0 flex items-center pr-3 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-destructive mt-1 text-xs">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <Label htmlFor="confirmPassword" className="text-foreground">
              Confirm Password
            </Label>
            <div className="relative mt-1.5">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="h-9.5 pr-10 pl-3"
                {...register("confirmPassword")}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="text-muted-foreground hover:text-foreground absolute inset-y-0 right-0 flex items-center pr-3 transition-colors"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-destructive mt-1 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Agree Terms & Privacy Policy Checkbox */}
          <div>
            <div className="flex items-center gap-2 pt-1">
              <Controller
                name="agreeToTerms"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="agreeToTerms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label
                htmlFor="agreeToTerms"
                className="text-foreground cursor-pointer text-sm font-normal select-none"
              >
                <span>I agree </span>
                <Link
                  href="/terms"
                  className="text-brand-link font-medium hover:underline"
                >
                  Terms
                </Link>
                <span> & </span>
                <Link
                  href="/privacy"
                  className="text-brand-link font-medium hover:underline"
                >
                  Privacy Policy
                </Link>
              </Label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-destructive mt-1 text-xs">
                {errors.agreeToTerms.message}
              </p>
            )}
          </div>

          {/* Submit Button - Black bg and white text */}
          <Button
            type="submit"
            disabled={isLoading || isSubmitting}
            className="mt-3 h-10 w-full bg-black text-sm font-semibold text-white hover:bg-black/90 active:bg-black/80"
          >
            {isLoading || isSubmitting
              ? "Creating Account..."
              : "Create Account"}
          </Button>
        </form>
      </CardContent>

      {/* Footer Log in link */}
      <CardFooter className="justify-center pt-1">
        <p className="text-muted-foreground text-sm">
          <span>Already have an account? </span>
          <Link
            href="/login"
            className="text-brand-link font-semibold transition-opacity hover:underline hover:opacity-85"
          >
            Log in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
