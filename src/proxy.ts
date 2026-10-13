import { type NextRequest, NextResponse } from "next/server";

import { AUTH_TOKEN_KEY } from "@/lib/cookies";

const AUTH_ROUTES = ["/login", "/signup"];

export function proxy(request: NextRequest) {
  const token = request.cookies.get(AUTH_TOKEN_KEY)?.value;
  const { pathname } = request.nextUrl;

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  // If user is already logged in, redirect them away from auth pages to home
  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/login/:path*", "/signup/:path*"],
};
