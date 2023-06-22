import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { servicesManager } from '../../services/serviceManager';

export const getAllWorklist = createAsyncThunk('dicom-node/get', async () => {
  const service = servicesManager.serviceWorklist;
  return service?.getAllWorklist();
});

export const deleteWorklist = createAsyncThunk(
  'dicom-node/delete',
  async (id: any) => {
    const service = servicesManager.serviceWorklist;
    return service?.deleteWorklist(id);
  },
);
export const updateWorklist = createAsyncThunk(
  'dicom-node/delete',
  async (data: { id: any; data: any }) => {
    const service = servicesManager.serviceWorklist;
    return service?.updateWorklist(data.id, data.data);
  },
);

const initialState = [
  {
    host: '',
    port: 0,
    description: '',
    aeTitle: '',
  },
];
const dicomNodeSlice = createSlice({
  name: 'dicom-node',
  initialState,
  reducers: {
    setGetAllWorklist(state: any, action: PayloadAction) {
      state = action.payload;

      return state;
    },
  },
  extraReducers(builder: any) {
    builder.addCase(getAllWorklist.fulfilled, (state: any, action: any) => {
      state = action.payload.data;
      return state;
    });
  },
});

export const { setGetAllWorklist } = dicomNodeSlice.actions;
export default dicomNodeSlice.reducer;
