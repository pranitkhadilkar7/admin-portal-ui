import { Home } from "../pages/home/Home"
import { Login } from "../pages/login/Login"
import { Users } from "../pages/users/Users"

export const PATHS = {
  login: "/login",
  home: "/home",
  users: "/users",
}

export const LEFT_NAV = [
  {
    path: PATHS.home,
    title: "Home",
  },
  {
    path: PATHS.users,
    title: "Users",
  },
]

export const PUBLIC_ROUTES = [
  {
    path: PATHS.login,
    component: Login,
  },
]

export const PRIVATE_ROUTES = [
  {
    path: PATHS.home,
    component: Home,
  },
  {
    path: PATHS.users,
    component: Users,
  },
]
