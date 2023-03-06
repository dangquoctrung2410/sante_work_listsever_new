import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTHORITIES } from '../../constants/constants';
import { IPostLogin } from '../../models/request/login.model';
// import axios from 'axios'
import { defaultAuth, IAuth } from '../../models/reducers/auth.model';
import { servicesManager } from '../../services/serviceManager';
import { IPostRegister } from '../../models/request/register.model';
import { saveToken } from '../../localstorage/localstorage';

const initialState: IAuth = defaultAuth;

export const login = createAsyncThunk(
  'auth/login',
  async (data: IPostLogin) => {
    const service = servicesManager.serviceMonitor;
    return service?.login(data);
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (data: IPostRegister) => {
    const service = servicesManager.serviceMonitor;
    return service?.register(data);
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action);
      saveToken(action.payload.access_token);
      return {
        ...state,
        isAuthenticated: true,
        account: {
          authorities: [AUTHORITIES.USER],
        },
      };
    });
  },
});

export const { setAuthentication } = authSlice.actions;
export default authSlice.reducer;
