import { baseApi } from "@/store";

import type { LegalResponse } from "../types/legal.types";

export const legalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLegal: builder.query<LegalResponse, void>({
      query: () => "/legal",
      providesTags: ["legal"],
    }),
  }),
});

export const { useGetLegalQuery } = legalApi;
