import authSlice from '../reducers/slice/authSlice';
import loadingBarSlice from '../reducers/slice/loadingBarSlice';
import monitorSlice from '../reducers/slice/monitorSlice';
import themeLanguageSlice from '../reducers/slice/themeLanguageSlice';
import userSlice from '../reducers/slice/userSlice';

const rootReducer: any = {
  auth: authSlice,
  themeLanguage: themeLanguageSlice,
  loadingBar: loadingBarSlice,
  monitor: monitorSlice,
  user: userSlice,
};
export { rootReducer };
