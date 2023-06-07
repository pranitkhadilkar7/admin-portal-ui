export type LoginResponse = {
  message: string
  accessToken: string
}

export type LoginForm = {
  email: string
  password: string
}

export type LoginState = {
  accessToken: string | null
}
