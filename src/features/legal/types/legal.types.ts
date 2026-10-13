import type { ApiResponse } from "@/store";

export interface Legal {
  id: string;
  terms_and_conditions: string;
  privacy_policy: string;
  created_at: string;
  updated_at: string;
}

export type LegalResponse = ApiResponse<Legal>;
