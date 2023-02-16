import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store'

const initialState: {
  value: string
} = {
  value: '',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<{ theme: string }>) => {
      state.value = action.payload.theme
    },
  },
})

export const selectTheme = (state: RootState) => state.theme.value

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
