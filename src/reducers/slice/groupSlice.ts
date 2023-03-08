import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  defaultListGroup,
  IListGroupReducer,
} from '../../models/reducers/group.model';
import { ICreateGroup } from '../../models/request/create-group.model';
// import axios from 'axios'
import { servicesManager } from '../../services/serviceManager';

const initialState: IListGroupReducer = defaultListGroup;

export const getAllGroup = createAsyncThunk('group/allGroup', async () => {
  const service = servicesManager.serviceMonitor;
  return await service?.getAllGroup();
});

export const getMemberOfGroup = createAsyncThunk(
  'group/getMemberOfGroup',
  async (groupId: string) => {
    const service = servicesManager.serviceMonitor;
    return await service?.getMemberOfGroup(groupId);
  },
);

export const createGroup = createAsyncThunk(
  'group/createGroup',
  async (data: ICreateGroup) => {
    const service = servicesManager.serviceMonitor;
    return await service?.createGroup(data);
  },
);

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllGroup.fulfilled, (state, action) => {
      action.payload.data.forEach((element: any, idx: any) => {
        element.key = idx;
      });
      return {
        ...state,
        listGroup: action.payload.data,
      };
    });
  },
});

export default groupSlice.reducer;
