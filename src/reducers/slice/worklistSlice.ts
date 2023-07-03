import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddworklist } from '../../models/reducers/addworklist.model';
import { IItem } from '../../models/reducers/posttest.model';
import {
  defaultWorklist,
  IQueryParams,
  IWorklist,
} from '../../models/reducers/worklist.model';
import { servicesManager } from '../../services/serviceManager';
import { DEFAULT } from '../../utils/constants';

const initialState: IWorklist = defaultWorklist;

export const getWorklist = createAsyncThunk(
  'worklist/getAll',
  async (queryParams?: any) => {
    const service = servicesManager.serviceWorklist;
    return service?.getWorklist(queryParams);
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

export const createPatient = createAsyncThunk(
  'worklist/create',
  async (data: any, { dispatch }) => {
    const service = servicesManager.serviceWorklist;
    await service?.createPatient(data);
    return dispatch(getWorklist({ limit: DEFAULT.limit }));
  },
);

const worklistSlice = createSlice({
  name: 'worklist',
  initialState,
  reducers: {
    setWorklist(state, action: PayloadAction<IWorklist>) {
      state = action.payload;
      return state;
    },

    setQueryParamsWorklist(state, action: PayloadAction<IQueryParams>) {
      state.queryParams = { ...state.queryParams, ...action.payload };
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(getWorklist.fulfilled, (state, action) => {
      state.worklistData = action.payload;
      state.worklistData.data = state.worklistData.data.map(
        (it: any, idx: number) => ({
          key: ++idx,
          ...it,
        }),
      );
      return state;
    });
  },
});

export const { setWorklist, setQueryParamsWorklist } = worklistSlice.actions;
export default worklistSlice.reducer;
