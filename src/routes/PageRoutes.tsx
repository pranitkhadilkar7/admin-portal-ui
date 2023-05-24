import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from "../pages/login/Login"
import { RequireAuth } from "./RequireAuth"
import { Home } from "../pages/home/Home"
import { AuthNotRequired } from "./AuthNotRequired"

export function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route
        path="/login"
        element={
          <AuthNotRequired>
            <Login />
          </AuthNotRequired>
        }
      />
      <Route
        path="/home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}
