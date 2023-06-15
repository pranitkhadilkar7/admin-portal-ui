import { Route, Routes, Navigate } from "react-router-dom"
import { RequireAuth } from "./RequireAuth"
import { AuthNotRequired } from "./AuthNotRequired"
import { PageLayout } from "../components/common/PageLayout"
import { PATHS, PRIVATE_ROUTES, PUBLIC_ROUTES } from "./paths"

export function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={PATHS.home} replace />} />
      {PUBLIC_ROUTES.map((publicRoutes) => (
        <Route
          key={publicRoutes.path}
          path={publicRoutes.path}
          element={
            <AuthNotRequired>
              <publicRoutes.component />
            </AuthNotRequired>
          }
        />
      ))}
      {PRIVATE_ROUTES.map((privateRoutes) => (
        <Route
          key={privateRoutes.path}
          path={privateRoutes.path}
          element={
            <RequireAuth>
              <PageLayout children={<privateRoutes.component />} />
            </RequireAuth>
          }
        />
      ))}
      <Route
        path="*"
        element={<PageLayout children={<h1>Page Not Found</h1>} />}
      />
    </Routes>
  )
}
