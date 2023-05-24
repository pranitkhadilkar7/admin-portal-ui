import { useSelector } from "react-redux"
import { loginSelector } from "../pages/login/login-slice"

export function useAuth() {
  const { accessToken } = useSelector(loginSelector)
  const isAuth = !!accessToken
  return { isAuth }
}
