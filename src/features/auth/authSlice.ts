import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IAuth } from '../../models/auth.model'
import { IUser } from './../../models/auth.model'

const initialState: IAuth = {
  isAuth: false,
  user: null,
}

export const themeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IAuth>) => {
      state.isAuth = action.payload.isAuth
      state.user = action.payload.user
    },
  },
})

export const selectAuth = (state: RootState) => state.auth

export const { setAuth } = themeSlice.actions

export default themeSlice.reducer
