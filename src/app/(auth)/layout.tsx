import * as React from "react";

import { Header } from "@/components/header";
import { Footer } from "@/components/reuseables";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-12 sm:py-16">
        {children}
      </main>
      <Footer showCta={false} />
    </div>
  );
}
