import { toast } from "@/components/ui/sonner";
import type { ApiErrorResponse } from "@/store";

export interface HandleApiErrorOptions {
  fallbackMessage?: string;
  showToast?: boolean;
}

// Extracts the top-level message from the backend API error response
export function getApiErrorMessage(
  error: unknown,
  fallbackMessage = "An unexpected error occurred. Please try again.",
): string {
  if (error && typeof error === "object") {
    // RTK Query error with API response payload (e.g. { data: { message: "..." } })
    if ("data" in error && error.data && typeof error.data === "object") {
      const data = error.data as Partial<ApiErrorResponse>;

      if (typeof data.message === "string" && data.message.trim().length > 0) {
        return data.message;
      }

      if (
        data.error &&
        typeof data.error.detail === "string" &&
        data.error.detail.trim().length > 0
      ) {
        return data.error.detail;
      }
    }

    // Direct error object containing message property
    if (
      "message" in error &&
      typeof (error as { message: unknown }).message === "string"
    ) {
      return (error as { message: string }).message;
    }
  }

  return fallbackMessage;
}

// Extracts top-level error message and triggers toast notification
export function handleApiError(
  error: unknown,
  fallbackMessage?: string,
): string;
export function handleApiError(
  error: unknown,
  options?: HandleApiErrorOptions,
): string;
export function handleApiError(
  error: unknown,
  optionsOrFallback?: string | HandleApiErrorOptions,
): string {
  const options: HandleApiErrorOptions =
    typeof optionsOrFallback === "string"
      ? { fallbackMessage: optionsOrFallback, showToast: true }
      : { showToast: true, ...optionsOrFallback };

  const message = getApiErrorMessage(error, options.fallbackMessage);

  if (options.showToast !== false) {
    toast.error(message);
  }

  return message;
}
