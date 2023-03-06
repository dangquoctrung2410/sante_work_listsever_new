import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios'
import {
  defaultListUser,
  IListUserReducer,
} from '../../models/reducers/user.model';
import { servicesManager } from '../../services/serviceManager';

const initialState: IListUserReducer = defaultListUser;

export const getAllUser = createAsyncThunk('user/allUser', async () => {
  const service = servicesManager.serviceMonitor;
  return await service?.getAllUser();
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      console.log(action);
      action.payload.data.forEach((element: any, idx: any) => {
        element.key = idx;
      });
      return {
        ...state,
        listUser: action.payload.data,
      };
    });
  },
});

export default userSlice.reducer;
