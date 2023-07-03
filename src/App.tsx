// import i18next from 'i18next'
// import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next';
// import historyNote from './release/history.json'
// import metadata from './release/metadata.json'
// import Router from './router/Router';

import { ConfigProvider, theme } from 'antd';
import { useEffect, useState } from 'react';
// import Language from './components/base/language/Language';
// import LoadingTopBar from './components/base/loading/LoadingTopBar';
// import Theme from './components/base/theme/Theme';
import 'antd/dist/reset.css';
// import Theme from './components/base/theme/Theme';
// import ThemeMode from './components/base/theme/ThemeMode';
import LoadingTopBar from './components/base/loading/LoadingTopBar';
import i18n from './i18n';
import WorklistPage from './pages/workslist/Worklist';
import { setLanguge } from './reducers/slice/themeLanguageSlice';
import {
  getStore,
  RootState,
  useAppDispatch,
  useAppSelector,
} from './redux/store';
import { serviceConfig } from './services/serviceManager';
// const { Text } = Typography;
const { defaultAlgorithm, darkAlgorithm } = theme;

const { useToken } = theme;
const App = () => {
  const { token } = useToken();
  const [loading, setLoading] = useState(true);

  const themeData = useAppSelector(
    (state: RootState) => state.themeLanguage.theme,
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    serviceConfig(getStore());
    dispatch(setLanguge(i18n.resolvedLanguage));
    setLoading(false);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: themeData.dark ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: themeData.color,
          fontSize: 13,
          sizeStep: 3,
          sizeUnit: 3,
          borderRadius: 3,
          fontFamily: 'Roboto',
        },
      }}
    >
      <I18nextProvider i18n={i18n}>
        <div
          style={{
            background: token.colorBgBase,
            width: '100%',
            height: '100vh',
            position: 'relative',
          }}
        >
          {!loading ? (
            <>
              <LoadingTopBar />
              <WorklistPage />
            </>
          ) : (
            'loading'
          )}

          {/* <Layout className={styleModule.monitor}>
            <LoadingTopBar />
            <div className={styleModule.header}>
              <Space>
                <Language />
              </Space>
              <Space>
                <Theme />
              </Space>
              <Space>
                <ThemeMode />
              </Space>
            </div>
            <div className={styleModule.container}>
              <div className={styleModule.main}>
                <Router />
              </div>
            </div>
            <div className={styleModule.footer}>
              <Text>Footer</Text>
            </div>
          </Layout> */}
        </div>
      </I18nextProvider>
    </ConfigProvider>
  );
};

export default App;
