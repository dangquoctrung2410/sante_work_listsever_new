import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setOpenTbale: (state, actions) => {
      state = actions.payload;

      return state;
    },
  },
});

export const { setOpenTbale } = tableSlice.actions;

export default tableSlice.reducer;
