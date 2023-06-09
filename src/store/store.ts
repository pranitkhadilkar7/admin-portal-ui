import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { logger } from "./middleware"
import { loginReducer, logout } from "../pages/login/login-slice"
import { clearLocalStorage } from "../utility/storageUtil"
import { apiService } from "./api-service"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

const appReducer = combineReducers({
  login: loginReducer,
  [apiService.reducerPath]: apiService.reducer,
})

export const store = configureStore({
  reducer: (state, action) => {
    if (action.type === logout.type) {
      state = {}
      clearLocalStorage()
    }
    return appReducer(state, action)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiService.middleware, logger]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
