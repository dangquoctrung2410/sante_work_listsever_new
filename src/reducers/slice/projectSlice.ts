import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  defaultListProject,
  IListProjectReducer,
} from '../../models/reducers/project.model';
import { ICreateGroup } from '../../models/request/create-group.model';
// import axios from 'axios'
import { servicesManager } from '../../services/serviceManager';

const initialState: IListProjectReducer = defaultListProject;

export const getAllProject = createAsyncThunk(
  'project/allProject',
  async () => {
    const service = servicesManager.serviceMonitor;
    return await service?.getAllProject();
  },
);

export const createProject = createAsyncThunk(
  'project/createProject',
  async (data: ICreateGroup) => {
    const service = servicesManager.serviceMonitor;
    return await service?.createProject(data);
  },
);

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllProject.fulfilled, (state, action) => {
      return {
        ...state,
        listProject: action.payload.data,
      };
    });
  },
});

export default projectSlice.reducer;
