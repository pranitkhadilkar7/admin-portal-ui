import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getAccessTokenFromLocal } from "../utility/storageUtil"
import { urlBase } from "../http/httpInstance"

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({
    baseUrl: urlBase,
    prepareHeaders(headers) {
      const token = getAccessTokenFromLocal() ?? ""
      headers.set("Authorization", `Bearer ${token}`)
    },
  }),
  endpoints: () => ({}),
})
