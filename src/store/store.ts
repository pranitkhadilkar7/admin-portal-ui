import { configureStore } from "@reduxjs/toolkit"
import { logger } from "./middleware"
import { loginReducer } from "../pages/login/login-slice"

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
