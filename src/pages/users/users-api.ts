import { apiService } from "../../store/api-service"
import { GetUsersParams, User } from "./users-type"

const usersApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], GetUsersParams>({
      query: () => "/users",
    }),
  }),
})

export const { useGetUsersQuery } = usersApi
