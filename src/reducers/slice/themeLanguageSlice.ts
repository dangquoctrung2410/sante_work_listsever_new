import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i18n from '../../i18n';
import { saveLanguage } from '../../localstorage/localstorage';
import {
  defaultThemeLanguage,
  IThemeLanguage,
} from '../../models/reducers/themeLanguage.model';

const initialState: IThemeLanguage = defaultThemeLanguage;

export const themeLanguageSlice = createSlice({
  name: 'themeLanguage',
  initialState,
  reducers: {
    setThemeDarkMode: (state) => {
      state.theme.dark = !state.theme.dark;
    },
    setThemeColor: (state, action: PayloadAction<string>) => {
      state.theme.color = action.payload;
    },
    setLanguge: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);
      saveLanguage(action.payload);
    },
  },
});

export const { setThemeColor, setThemeDarkMode, setLanguge } =
  themeLanguageSlice.actions;

export default themeLanguageSlice.reducer;
