import authSlice from '../reducers/slice/authSlice';
import dicomNodeSlice from '../reducers/slice/dicomNodeSlice';
import groupSlice from '../reducers/slice/groupSlice';
import loadingBarSlice from '../reducers/slice/loadingBarSlice';
import monitorSlice from '../reducers/slice/monitorSlice';
import organizationSlice from '../reducers/slice/organizationSlice';
import projectSlice from '../reducers/slice/projectSlice';
import roleSlice from '../reducers/slice/roleSlice';
import tableSlice from '../reducers/slice/tableSlice';
import themeLanguageSlice from '../reducers/slice/themeLanguageSlice';
import userSlice from '../reducers/slice/userSlice';
import worklistSlice from '../reducers/slice/worklistSlice';

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
  table: tableSlice,
  worklist: worklistSlice,
  dicomNode: dicomNodeSlice,
};
export { rootReducer };
