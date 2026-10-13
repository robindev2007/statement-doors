import type { ApiResponse, User } from "@/store";

// Login request payload with username and password
export interface LoginRequest {
  username: string; // Validated email passed as username
  password: string;
}

export interface Token {
  token_type: string;
  access_token: string;
}

export interface LoginData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  token: Token;
  created_at: string;
}

export type AuthUser = User;
export type LoginResponse = ApiResponse<LoginData>;

export interface SignupRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  phone?: string | null;
  profile_picture?: string | null;
}
