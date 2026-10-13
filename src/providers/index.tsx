"use client";

import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import { StoreProvider } from "@/store";
import { ThemeProvider } from "./theme-provider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <StoreProvider>
        {children}
        <Toaster />
      </StoreProvider>
    </ThemeProvider>
  );
}

export * from "./theme-provider";
