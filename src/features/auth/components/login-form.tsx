"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import {
  type LoginFormData,
  loginSchema,
} from "@/features/auth/schemas/login.schema";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    // Submit handler placeholder
    console.log("Sign in form data:", data);
  };

  return (
    <Card className="w-full max-w-115 shadow-sm">
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
            <div className="mt-1.5 flex justify-end">
              <Link
                href="/forgot-password"
                className="text-brand-link text-xs font-medium transition-opacity hover:underline hover:opacity-85"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Remember me with shadcn Checkbox & Label */}
          <div className="flex items-center gap-2 pt-0.5">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="rememberMe"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <Label
              htmlFor="rememberMe"
              className="text-foreground cursor-pointer text-sm font-normal"
            >
              Remember me
            </Label>
          </div>

          {/* Submit Button - Black bg and white text */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 h-10 w-full bg-black text-sm font-semibold text-white hover:bg-black/90 active:bg-black/80"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        {/* Divider with Separator */}
        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <Separator />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card text-muted-foreground px-3">or</span>
          </div>
        </div>

        {/* Social Logins - Transparent background */}
        <div className="space-y-2.5">
          <Button
            type="button"
            variant="outline"
            className="border-border hover:bg-muted h-10 w-full gap-2.5 bg-transparent font-medium"
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
            className="border-border hover:bg-muted h-10 w-full gap-2.5 bg-transparent font-medium"
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
      <CardFooter className="justify-center pt-1">
        <p className="text-muted-foreground text-sm">
          <span>Don’t have a account? </span>
          <Link
            href="/signup"
            className="text-brand-link font-semibold transition-opacity hover:underline hover:opacity-85"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
