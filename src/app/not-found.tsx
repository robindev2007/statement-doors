import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

import { Header } from "@/components/header";
import { Container } from "@/components/reuseables/container";
import { Footer } from "@/components/reuseables/footer";
import { buttonVariants } from "@/components/ui/button";
import { H1, P } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center py-16 sm:py-24">
        <Container className="max-w-xl text-center">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            404 Error
          </span>
          <H1 className="text-foreground mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Page Not Found
          </H1>
          <P className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            Sorry, the page you are looking for doesn’t exist, has been removed,
            or is temporarily unavailable.
          </P>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-10 gap-2 bg-black px-5 text-sm font-semibold text-white hover:bg-black/90 active:bg-black/80",
              )}
            >
              <Home className="size-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/all-doors"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-border hover:bg-muted h-10 gap-2 bg-transparent px-5 text-sm font-medium",
              )}
            >
              <ArrowLeft className="size-4" />
              <span>Browse All Doors</span>
            </Link>
          </div>
        </Container>
      </main>
      <Footer showCta={false} />
    </div>
  );
}
