export type GetUsersParams = {
  offset: number
  limit: number
}

export type User = {
  id: number
  email: string
  createdAt: string
  isEmailVerified: boolean
  firstName: string
  lastName: string
  country: string | null
  type: "COMPANY" | "ADMIN_REGULATOR" | null
}

export type GetUsersResponseForTable = {
  total: number
  result: User[]
}
