import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AUTHORITIES } from '../../constants/constants'
import { IPostLogin } from '../../models/login.model'
// import axios from 'axios'
import { defaultAuth, IAuth } from '../../models/reducers/auth.model'
import { servicesManager } from '../../services/serviceManager'

const initialState: IAuth = defaultAuth

export const authenticate = createAsyncThunk('auth/login', async (data: IPostLogin) => {
  const service = servicesManager.serviceMonitor
  return service?.login(data)
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(authenticate.rejected, (state) => ({
        ...state,
      }))
      .addCase(authenticate.fulfilled, (state, _action) => ({
        ...state,
        isAuthenticated: true,
        account: {
          authorities: [AUTHORITIES.USER],
        },
      }))
      .addCase(authenticate.pending, (state) => ({
        ...state,
      }))
  },
})

export const { setAuthentication } = authSlice.actions
export default authSlice.reducer
