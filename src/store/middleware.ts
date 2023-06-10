import { Middleware, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { logout } from "../pages/login/login-slice"

export const logger: Middleware =
  (api) => (next) => async (action: PayloadAction<AxiosResponse>) => {
    // console.log("dispatching", action)
    // console.log("next state", api.getState())
    if (
      action.type.includes("rejected") &&
      action.payload.data.statusCode === 401
    ) {
      api.dispatch(logout())
    }
    return next(action)
  }
