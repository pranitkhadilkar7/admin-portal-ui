import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { PATHS } from "./paths"

type Props = {
  children: JSX.Element
}

export function AuthNotRequired({ children }: Props) {
  const { isAuth } = useAuth()
  if (!isAuth) return children
  return <Navigate to={PATHS.home} replace />
}
