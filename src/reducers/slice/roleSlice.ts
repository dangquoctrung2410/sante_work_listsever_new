import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  defaultListGroup,
  IListGroupReducer,
} from '../../models/reducers/group.model';
import { ICreateGroup } from '../../models/request/create-group.model';
// import axios from 'axios'
import { servicesManager } from '../../services/serviceManager';

const initialState: IListGroupReducer = defaultListGroup;

export const getAllRole = createAsyncThunk('role/allRole', async () => {
  const service = servicesManager.serviceMonitor;
  return await service?.getAllRole();
});

export const createRole = createAsyncThunk(
  'role/createRole',
  async (data: ICreateGroup) => {
    const service = servicesManager.serviceMonitor;
    return await service?.createRole(data);
  },
);

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllRole.fulfilled, (state, action) => {
      return {
        ...state,
        listRole: action.payload.data,
      };
    });
  },
});

export default roleSlice.reducer;
