export const AUTH_TOKEN_KEY = "auth_token";

// Sets a cookie with standard options (7 days default)
export function setCookie(name: string, value: string, days = 7): void {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${secure}`;
}

// Reads a cookie value by name
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`,
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : null;
}

// Deletes a cookie by setting its expiration to the past
export function deleteCookie(name: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
}

// Stores the authentication token in cookies (and synchronizes with localStorage)
export function setAuthToken(token: string, days = 7): void {
  setCookie(AUTH_TOKEN_KEY, token, days);
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }
}

// Retrieves the authentication token (checking cookies first, then localStorage)
export function getAuthToken(): string | null {
  const token = getCookie(AUTH_TOKEN_KEY);
  if (token) return token;
  if (typeof window !== "undefined") {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }
  return null;
}

// Clears the authentication token from both cookies and localStorage
export function removeAuthToken(): void {
  deleteCookie(AUTH_TOKEN_KEY);
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
}
