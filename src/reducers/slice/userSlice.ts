import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTHORITIES } from '../../constants/constants';
// import axios from 'axios'
import { defaultAuth, IAuth } from '../../models/reducers/auth.model';
import { servicesManager } from '../../services/serviceManager';

const initialState: IAuth = defaultAuth;

export const getAllUser = createAsyncThunk('user/allUser', async () => {
  const service = servicesManager.serviceMonitor;
  await service?.getAllUser();
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthentication(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      console.log(action);
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

export const { setAuthentication } = userSlice.actions;
export default userSlice.reducer;
