"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  type LoginFormData,
  loginSchema,
} from "@/features/auth/schemas/login.schema";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "hijuyed@gmail.com",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    // Submit handler placeholder
    console.log("Sign in form data:", data);
  };

  return (
    <Card className="w-full max-w-[440px] shadow-sm">
      {/* Header */}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
          Welcome back
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-1 text-sm">
          Sign in to Continue to your Statement door account
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="text-foreground flex items-center gap-1 text-sm font-medium"
            >
              <span>Email</span>
              <span className="text-destructive">*</span>
              <span className="text-muted-foreground text-xs">(optional)</span>
            </label>
            <div className="mt-1.5">
              <Input
                id="email"
                type="email"
                placeholder="hijuyed@gmail.com"
                className="h-11 px-3.5"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-destructive mt-1 text-xs">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="text-foreground flex items-center gap-1 text-sm font-medium"
            >
              <span>Password</span>
              <span className="text-destructive">*</span>
              <span className="text-muted-foreground text-xs">(optional)</span>
            </label>
            <div className="relative mt-1.5">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="h-11 pr-10 pl-3.5"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground absolute inset-y-0 right-0 flex items-center pr-3"
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

          {/* Remember me & Forgot Password */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex cursor-pointer items-center gap-2 select-none">
              <input
                type="checkbox"
                className="border-input size-4 rounded accent-black"
                {...register("rememberMe")}
              />
              <span className="text-foreground text-sm">Remember me</span>
            </label>
            <div className="flex items-center gap-1 text-sm">
              <Link
                href="/forgot-password"
                className="text-foreground hover:underline"
              >
                Forgot Password?
              </Link>
              <span className="text-destructive">*</span>
              <span className="text-muted-foreground text-xs">(optional)</span>
            </div>
          </div>

          {/* Submit Button - Black bg and white text */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 h-11 w-full bg-black text-base font-semibold text-white hover:bg-black/90 active:bg-black/80"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="border-border w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card text-muted-foreground px-3">or</span>
          </div>
        </div>

        {/* Social Logins with real SVG icons from public/icons */}
        <div className="space-y-3">
          <Button
            type="button"
            variant="outline"
            className="border-border hover:bg-muted h-11 w-full gap-2.5 font-medium"
          >
            <Image
              src="/icons/google.svg"
              alt="Google"
              width={18}
              height={18}
              className="size-[18px]"
            />
            <span>Sign in with Google</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="border-border hover:bg-muted h-11 w-full gap-2.5 font-medium"
          >
            <Image
              src="/icons/apple.svg"
              alt="Apple"
              width={18}
              height={18}
              className="size-[18px]"
            />
            <span>Continue with Apple</span>
          </Button>
        </div>
      </CardContent>

      {/* Sign up footer */}
      <CardFooter className="justify-center pt-2">
        <p className="text-muted-foreground text-sm">
          <span>Don’t have a account? </span>
          <Link
            href="/signup"
            className="text-foreground font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
