import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../../models/reducers/posttest.model';
import {
  defaultWorklist,
  IWorklistItem,
} from '../../models/reducers/worklist.model';
import { servicesManager } from '../../services/serviceManager';
import { IAddworklist } from '../../models/reducers/addworklist.model';

const initialState: Array<IWorklistItem> = defaultWorklist;

export const getWorklist = createAsyncThunk('worklist/get', async () => {
  const service = servicesManager.serviceWorklist;
  return service?.getWorklist();
});

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
    setWorklist(state, action: PayloadAction<Array<IWorklistItem>>) {
      state = action.payload;
      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(getWorklist.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const {} = worklistSlice.actions;
export default worklistSlice.reducer;
