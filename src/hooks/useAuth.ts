import { useSelector } from "react-redux"
import { loginSelector } from "../pages/login/login-slice"
import { getAccessTokenFromLocal } from "../utility/storageUtil"

export function useAuth() {
  const { accessToken } = useSelector(loginSelector)
  const isAuth = !!(accessToken || getAccessTokenFromLocal())
  return { isAuth }
}
