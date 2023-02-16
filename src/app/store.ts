import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import counterReducer from '../features/counter/counterSlice'
import themeReducer from '../features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    auth: authReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
