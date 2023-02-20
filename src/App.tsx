// import i18next from 'i18next'
// import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
// import historyNote from './release/history.json'
// import metadata from './release/metadata.json'
import Router from './router/Router'

import { useEffect } from 'react'
import LoadingTopBar from './components/base/loading/LoadingTopBar'
import i18n from './i18n'
import { setLanguge } from './reducers/slice/themeLanguageSlice'
import { RootState, useAppDispatch, useAppSelector } from './redux/store'
import { serviceConfig } from './services/serviceManager'
import 'antd/dist/reset.css'
import './theme/default-theme.scss'
import './theme/pink-theme.scss'
import './theme/purple-theme.scss'
import './theme/red-theme.scss'
import styleModule from './style.module.scss'

const App = () => {
  const theme = useAppSelector((state: RootState) => state.themeLanguage.theme)
  const dispatch = useAppDispatch()
  useEffect(() => {
    serviceConfig()
    dispatch(setLanguge(i18n.resolvedLanguage))
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <div className={styleModule.app} data-theme={theme}>
        <LoadingTopBar />
        <div className={styleModule.monitor}>
          <div className={styleModule.header}>header</div>
          <div className={styleModule.container}>
            <div className={styleModule.main}>
              <Router />
            </div>
          </div>
          <div className={styleModule.footer}>Footer</div>
        </div>
      </div>
    </I18nextProvider>
  )
}

export default App
