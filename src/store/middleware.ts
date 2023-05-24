import { Middleware } from "@reduxjs/toolkit"

export const logger: Middleware = (api) => (next) => async (action) => {
  // console.log("dispatching", action)
  // console.log("next state", api.getState())
  return next(action)
}
