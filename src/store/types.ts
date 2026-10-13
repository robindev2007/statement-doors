export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  total_pages: number;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  profile_picture: string;
  role: string;
  is_active: boolean;
  created_at: string;
}

// Standard single resource / action response (e.g. GET by id, POST, PUT, DELETE)
export interface ApiResponse<T = unknown> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

// Paginated collection response
export interface PaginatedApiResponse<T = unknown> {
  success: boolean;
  statusCode: number;
  message: string;
  pagination: PaginationInfo;
  data: T[];
}

export type PaginatedResponse<T = unknown> = PaginatedApiResponse<T>;

export interface ValidationErrorDetail {
  field: string;
  message: string;
  type: string;
}

// Exact backend error response structure
export interface ApiErrorResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data?: null;
  error?: {
    detail?: string;
  };
  errors?: ValidationErrorDetail[];
}
