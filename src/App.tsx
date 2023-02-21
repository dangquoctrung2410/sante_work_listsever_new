// import i18next from 'i18next'
// import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next';
// import historyNote from './release/history.json'
// import metadata from './release/metadata.json'
import Router from './router/Router';

import { ConfigProvider, theme } from 'antd';
import { useEffect } from 'react';
import Language from './components/base/language/Language';
import LoadingTopBar from './components/base/loading/LoadingTopBar';
import Theme from './components/base/theme/Theme';
import i18n from './i18n';
import { setLanguge } from './reducers/slice/themeLanguageSlice';
import {
  getStore,
  RootState,
  useAppDispatch,
  useAppSelector,
} from './redux/store';
import { serviceConfig } from './services/serviceManager';
import styleModule from './style.module.scss';
import 'antd/dist/reset.css';
import './theme/default-theme.scss';
import './theme/light-theme.scss';
import './theme/pink-theme.scss';
import './theme/purple-theme.scss';
import './theme/red-theme.scss';
import { generate } from '@ant-design/colors';
const { defaultAlgorithm, darkAlgorithm } = theme;
const App = () => {
  const colors = generate('#0c356f', {
    theme: 'dark',
  });
  console.log(colors);
  const theme = useAppSelector((state: RootState) => state.themeLanguage.theme);
  const dispatch = useAppDispatch();
  useEffect(() => {
    serviceConfig(getStore());
    dispatch(setLanguge(i18n.resolvedLanguage));
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'light' ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: '#0c356f',
        },
      }}
    >
      <I18nextProvider i18n={i18n}>
        <div className={styleModule.app} data-theme={theme}>
          <LoadingTopBar />
          <div className={styleModule.monitor}>
            <div className={styleModule.header}>
              <Language />
              <Theme />
            </div>
            <div className={styleModule.container}>
              <div className={styleModule.main}>
                <Router />
              </div>
            </div>
            <div className={styleModule.footer}>Footer</div>
          </div>
        </div>
      </I18nextProvider>
    </ConfigProvider>
  );
};

export default App;
