import { useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router-dom"
import { PATHS } from "./paths"

type Props = {
  children: JSX.Element
}

export function RequireAuth({ children }: Props) {
  const { isAuth } = useAuth()
  if (isAuth) return children
  return <Navigate to={PATHS.login} replace />
}
