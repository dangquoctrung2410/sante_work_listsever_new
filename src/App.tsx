// import i18next from 'i18next'
// import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next';
// import historyNote from './release/history.json'
// import metadata from './release/metadata.json'
import Router from './router/Router';

import { ConfigProvider, Layout, theme, Typography } from 'antd';
import { useEffect } from 'react';
import Language from './components/base/language/Language';
import LoadingTopBar from './components/base/loading/LoadingTopBar';
// import Theme from './components/base/theme/Theme';
import 'antd/dist/reset.css';
import Theme from './components/base/theme/Theme';
import ThemeMode from './components/base/theme/ThemeMode';
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
const { Text } = Typography;
const { defaultAlgorithm, darkAlgorithm } = theme;
const App = () => {
  const themeData = useAppSelector(
    (state: RootState) => state.themeLanguage.theme,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    serviceConfig(getStore());
    dispatch(setLanguge(i18n.resolvedLanguage));
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: themeData.dark ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: themeData.color,
          borderRadius: 4,
        },
      }}
    >
      <I18nextProvider i18n={i18n}>
        <div className={styleModule.app}>
          <Layout className={styleModule.monitor}>
            <LoadingTopBar />
            <div className={styleModule.header}>
              <Language />
              <Theme />
              <ThemeMode />
            </div>
            <div className={styleModule.container}>
              <div className={styleModule.main}>
                <Router />
              </div>
            </div>
            <div className={styleModule.footer}>
              <Text>Footer</Text>
            </div>
          </Layout>
        </div>
      </I18nextProvider>
    </ConfigProvider>
  );
};

export default App;
