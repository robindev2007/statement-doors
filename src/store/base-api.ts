import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getAuthToken } from "@/lib/utils";

const getBaseUrl = (): string => {
  const isProd = process.env.NODE_ENV === "production";
  const envUrl = isProd
    ? process.env.NEXT_PUBLIC_API_URL_PROD
    : process.env.NEXT_PUBLIC_API_URL_DEV;

  const rawUrl = (
    envUrl ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://206.162.244.142:7002"
  ).replace(/\/+$/, "");

  return rawUrl.endsWith("/api/v1") ? rawUrl : `${rawUrl}/api/v1`;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    prepareHeaders: (headers) => {
      const token = getAuthToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["auth", "user", "door", "category", "legal"],
  endpoints: () => ({}),
});
