import * as React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Header } from "@/components/header";
import { Footer } from "@/components/reuseables";
import { AUTH_TOKEN_KEY } from "@/lib/cookies";
import { decodeJwt, isTokenExpired } from "@/lib/jwt";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_TOKEN_KEY)?.value;

  if (!token) {
    redirect("/login");
  }

  const payload = decodeJwt(token);

  if (!payload || isTokenExpired(payload.exp)) {
    redirect("/login");
  }

  if (payload.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
