import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../../models/reducers/posttest.model';
import {
  defaultWorklist,
  IDataPatient,
  IWorklistItem,
} from '../../models/reducers/worklist.model';
import { servicesManager } from '../../services/serviceManager';
import { IAddworklist } from '../../models/reducers/addworklist.model';

const initialState: Array<IWorklistItem> = defaultWorklist;

export const getAllPatient = createAsyncThunk(
  'worklist/get',
  async (data?: {
    pageindex?: number;
    modality?: any;
    patientName?: any;
    sortBy?: any;
  }) => {
    const service = servicesManager.serviceWorklist;
    return service?.getAllPatient(
      data?.pageindex,
      data?.modality,
      data?.patientName,
      data?.sortBy,
    );
  },
);

export const deletePatient = createAsyncThunk(
  'worklist/delete',
  async (id: any) => {
    const service = servicesManager.serviceWorklist;
    return service?.deletePatient(id);
  },
);
export const updatePatient = createAsyncThunk(
  'worklist/update',
  async (data: { id: any; data: any }) => {
    const service = servicesManager.serviceWorklist;
    return service?.updatePatient(data.id, data.data);
  },
);
export const createPatient = createAsyncThunk(
  'worklist/create',
  async (data: any, { dispatch }) => {
    const service = servicesManager.serviceWorklist;
    await service?.createPatient(data);
    return dispatch(getAllPatient({ pageindex: 1 }));
  },
);

export const potsWorklist = createAsyncThunk(
  'worklist/post',
  async (data: IItem) => {
    const service = servicesManager.serviceWorklist;
    return service?.potsWorklist(data);
  },
);
export const addWorklist = createAsyncThunk(
  'addworklist/post',
  async (data: IAddworklist) => {
    const service = servicesManager.serviceWorklist;
    return service?.addWorklist(data);
  },
);

const worklistSlice = createSlice({
  name: 'worklist',
  initialState,
  reducers: {
    setWorklist(state: any, action: PayloadAction<Array<IDataPatient>>) {
      state = action.payload;
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllPatient.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const {} = worklistSlice.actions;
export default worklistSlice.reducer;
