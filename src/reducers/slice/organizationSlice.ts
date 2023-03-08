import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  defaultListOrganization,
  IListOrganizationReducer,
} from '../../models/reducers/organization.model';
import { ICreateGroup } from '../../models/request/create-group.model';
// import axios from 'axios'
import { servicesManager } from '../../services/serviceManager';

const initialState: IListOrganizationReducer = defaultListOrganization;

export const getAllOrganization = createAsyncThunk(
  'organization/allOrganization',
  async () => {
    const service = servicesManager.serviceMonitor;
    return await service?.getAllOrganization();
  },
);

export const createOrganization = createAsyncThunk(
  'organization/createOrganization',
  async (data: ICreateGroup) => {
    const service = servicesManager.serviceMonitor;
    return await service?.createOrganization(data);
  },
);

const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllOrganization.fulfilled, (state, action) => {
      action.payload.data.forEach((element: any, idx: any) => {
        element.key = idx;
      });
      return {
        ...state,
        listOrganization: action.payload.data,
      };
    });
  },
});

export default organizationSlice.reducer;
