import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  defaultWorklist,
  IWorklistItem,
} from '../../models/reducers/worklist.model';
import { servicesManager } from '../../services/serviceManager';

const initialState: Array<IWorklistItem> = defaultWorklist;

export const getWorklist = createAsyncThunk('worklist/get', async () => {
  const service = servicesManager.serviceWorklist;
  return service?.getWorklist();
});

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
