import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { defaultMonitor, IMonitor } from '../../models/reducers/monitor.model'
import { servicesManager } from '../../services/serviceManager'

const initialState: Array<IMonitor> = defaultMonitor

export const getPerformance = createAsyncThunk('monitor/performance', async () => {
  const service = servicesManager.serviceMonitor
  return service?.getMonitor()
})

const monitorSlice = createSlice({
  name: 'monitor',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPerformance.fulfilled, (state, action) => {
      state = action.payload
      return state
    })
  },
})

export default monitorSlice.reducer
