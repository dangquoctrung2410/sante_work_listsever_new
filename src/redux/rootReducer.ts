import authSlice from '../reducers/slice/authSlice';
import groupSlice from '../reducers/slice/groupSlice';
import loadingBarSlice from '../reducers/slice/loadingBarSlice';
import monitorSlice from '../reducers/slice/monitorSlice';
import organizationSlice from '../reducers/slice/organizationSlice';
import projectSlice from '../reducers/slice/projectSlice';
import roleSlice from '../reducers/slice/roleSlice';
import themeLanguageSlice from '../reducers/slice/themeLanguageSlice';
import userSlice from '../reducers/slice/userSlice';

const rootReducer: any = {
  auth: authSlice,
  themeLanguage: themeLanguageSlice,
  loadingBar: loadingBarSlice,
  monitor: monitorSlice,
  user: userSlice,
  group: groupSlice,
  organization: organizationSlice,
  role: roleSlice,
  project: projectSlice,
};
export { rootReducer };
