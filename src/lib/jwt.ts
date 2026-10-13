export type UserRole = "admin" | "user";

export interface JwtPayload {
  sub: string;
  user_id: string;
  role: UserRole;
  exp: number;
}

// Decodes a JWT token without requiring external dependencies
export function decodeJwt(token: string): JwtPayload | null {
  if (!token || typeof token !== "string") {
    return null;
  }

  try {
    const parts = token.replace(/^Bearer\s+/i, "").split(".");
    if (parts.length < 2) {
      return null;
    }

    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(
      base64.length + ((4 - (base64.length % 4)) % 4),
      "=",
    );

    const json =
      typeof Buffer !== "undefined"
        ? Buffer.from(padded, "base64").toString("utf-8")
        : atob(padded);

    return JSON.parse(json) as JwtPayload;
  } catch {
    return null;
  }
}

// Checks if the decoded token has expired
export function isTokenExpired(exp?: number): boolean {
  if (!exp) return true;
  return exp * 1000 < Date.now();
}
