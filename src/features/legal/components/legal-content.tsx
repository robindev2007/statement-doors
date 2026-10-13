"use client";

import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { AlertCircle, RefreshCw } from "lucide-react";
import * as React from "react";

import { Container } from "@/components/reuseables/container";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetLegalQuery } from "../api";

interface LegalContentProps {
  type: "terms" | "privacy";
  title: string;
}

function extractLegalContent(rawHtml: string): string {
  if (!rawHtml) return "";

  // Extract <main> content if available
  const mainMatch = rawHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    return mainMatch[1].trim();
  }

  // Extract <body> content and strip isolated headers
  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    return bodyMatch[1].replace(/<header[^>]*>[\s\S]*?<\/header>/i, "").trim();
  }

  return rawHtml.trim();
}

function sanitizeLegalHtml(html: string): string {
  if (!html) return "";
  if (typeof window !== "undefined") {
    return DOMPurify.sanitize(html, {
      USE_PROFILES: { html: true },
      FORBID_TAGS: ["script", "iframe", "object", "embed"],
    });
  }
  return html;
}

export function LegalContent({ type, title }: LegalContentProps) {
  const { data, isLoading, isError, refetch } = useGetLegalQuery();

  const legalData = data?.data;
  const rawContent =
    type === "terms"
      ? legalData?.terms_and_conditions
      : legalData?.privacy_policy;

  const parsedContent = React.useMemo(() => {
    if (!rawContent) return null;
    const extracted = extractLegalContent(rawContent);
    const sanitized = sanitizeLegalHtml(extracted);
    return parse(sanitized);
  }, [rawContent]);

  return (
    <Container className="max-w-4xl py-12 sm:py-16">
      {isLoading ? (
        <div className="space-y-6">
          <header className="mb-8">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="mt-2 h-4 w-40" />
          </header>
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="space-y-3 pt-4">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="space-y-3 pt-4">
            <Skeleton className="h-6 w-56" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      ) : isError ? (
        <div className="bg-destructive/10 border-destructive/20 rounded-xl border p-6 text-center">
          <AlertCircle className="text-destructive mx-auto size-8" />
          <h2 className="mt-3 text-base font-semibold">
            Unable to load {title}
          </h2>
          <p className="text-muted-foreground mt-1 text-xs">
            We encountered an error while retrieving this document. Please try
            again.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => refetch()}
            className="mt-4 gap-1.5"
          >
            <RefreshCw className="size-3.5" />
            <span>Try Again</span>
          </Button>
        </div>
      ) : parsedContent ? (
        <div className="prose prose-neutral dark:prose-invert text-foreground [&_.updated]:text-muted-foreground max-w-none [&_.updated]:mb-6 [&_.updated]:text-xs">
          {parsedContent}
        </div>
      ) : (
        <div className="py-12 text-center">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Content is currently being updated. Please check back shortly.
          </p>
        </div>
      )}
    </Container>
  );
}
