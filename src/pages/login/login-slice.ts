import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LoginForm, LoginResponse, LoginState } from "./login-type"
import { post } from "../../http/httpMethods"
import { loginUrl } from "../../constants/apiUrl"
import { RootState } from "../../store/store"
import { AxiosResponse } from "axios"
import {
  clearLocalStorage,
  getAccessTokenFromLocal,
  setAccessTokenAtLocal,
} from "../../utility/storageUtil"

const initialState: LoginState = {
  accessToken: getAccessTokenFromLocal(),
}

export const login = createAsyncThunk<AxiosResponse<LoginResponse>, LoginForm>(
  "users/login",
  async (userData, { rejectWithValue }) => {
    try {
      return await post(loginUrl, { ...userData })
    } catch (err: any) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response)
    }
  }
)

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = ""
      clearLocalStorage()
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.accessToken = action.payload.data.accessToken
      setAccessTokenAtLocal(action.payload.data.accessToken)
    })
  },
})

export const { logout } = slice.actions
export const loginSelector = (state: RootState) => state.login
export const loginReducer = slice.reducer
