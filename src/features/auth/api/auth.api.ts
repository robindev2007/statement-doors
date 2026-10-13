import { setAuthToken } from "@/lib/utils";
import {
  type ApiResponse,
  baseApi,
  type PaginatedApiResponse,
  type User,
} from "@/store";

import type { LoginFormData } from "../schemas/login.schema";
import type { SignupFormData } from "../schemas/signup.schema";
import type { LoginRequest, LoginResponse } from "../types/auth.types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login taking username and password encoded as application/x-www-form-urlencoded
    login: builder.mutation<LoginResponse, LoginRequest | LoginFormData>({
      query: (credentials) => {
        const username =
          "username" in credentials ? credentials.username : credentials.email;
        const password = credentials.password;

        const body = new URLSearchParams();
        body.append("username", username);
        body.append("password", password);

        return {
          url: "/auth/login",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: body.toString(),
        };
      },
      invalidatesTags: ["auth"],
      async onQueryStarted(_args, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data?.data?.token?.access_token;

          if (token) {
            setAuthToken(token);
          }
        } catch {
          // Handled in component
        }
      },
    }),

    signup: builder.mutation<ApiResponse<null>, SignupFormData>({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          password: data.password,
          role: "user",
          phone: data.phoneNumber || null,
        },
      }),
      invalidatesTags: ["auth"],
    }),

    verifyMagicLink: builder.mutation<ApiResponse<null>, { token: string }>({
      query: ({ token }) => ({
        url: "/auth/verify-magic-link",
        method: "GET",
        params: { token },
      }),
      invalidatesTags: ["auth"],
    }),

    getMe: builder.query<ApiResponse<User>, void>({
      query: () => "/users/me",
      providesTags: ["user"],
    }),

    getUsers: builder.query<
      PaginatedApiResponse<User>,
      { page?: number; limit?: number } | void
    >({
      query: (params) => ({
        url: "/users",
        params: params || undefined,
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useVerifyMagicLinkMutation,
  useGetMeQuery,
  useGetUsersQuery,
} = authApi;
