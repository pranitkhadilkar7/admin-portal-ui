import { apiService } from "../../store/api-service"
import { GetUsersParams, GetUsersResponseForTable } from "./users-type"

const usersApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<GetUsersResponseForTable, GetUsersParams>({
      query: (params) => ({
        url: "/users",
        params,
      }),
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
