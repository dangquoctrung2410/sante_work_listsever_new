import { useEffect } from 'react'
import { initReactI18next, useTranslation, I18nextProvider } from 'react-i18next'
import historyNote from './Release/history.json'
import metadata from './Release/metadata.json'

import i18next from 'i18next'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { useAppSelector } from './app/hooks'
import { selectTheme } from './features/theme/themeSlice'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'
import Router from './router/Router'
import { servicesManager } from './services/serviceManager'
import { ServiceTestLogin } from './services/serviceTestLogin'
import './theme/default-theme.scss'
import './theme/pink-theme.scss'
import './theme/purple-theme.scss'
import './theme/red-theme.scss'
import common_de from './translations/de/common.json'
import common_en from './translations/en/common.json'
i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        common: common_en, // 'common' is our custom namespace
      },
      de: {
        common: common_de,
      },
    },
    lng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
servicesManager.TestLogin = new ServiceTestLogin('https://telerad.vn:8887')
const App = () => {
  const theme = useAppSelector(selectTheme)

  useEffect(() => {
    const oldVersion = localStorage.getItem('VERSION')
    if (oldVersion !== metadata.version) {
      alert(JSON.stringify(historyNote[0]))
      localStorage.setItem('VERSION', metadata.version)
    }
  }, [])

  return (
    <I18nextProvider i18n={i18next}>
      <div className="App" data-theme={theme}>
        <Router />
      </div>
    </I18nextProvider>
  )
}

export default App
