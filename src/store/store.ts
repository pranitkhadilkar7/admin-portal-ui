import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { logger } from "./middleware"
import { loginReducer, logout } from "../pages/login/login-slice"
import { clearLocalStorage } from "../utility/storageUtil"

const appReducer = combineReducers({
  login: loginReducer,
})

export const store = configureStore({
  // reducer: {
  //   login: loginReducer,
  // },
  // reducer: appReducer,
  reducer: (state, action) => {
    if (action.type === logout.type) {
      state = {}
      clearLocalStorage()
    }
    return appReducer(state, action)
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
