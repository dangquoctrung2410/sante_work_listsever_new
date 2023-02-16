type Props = {}
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import metadata from '../Release/metadata.json'
import { useAppDispatch, useAuth } from '../app/hooks'
import { setAuth } from '../features/auth/authSlice'
import Language from '../features/language/Language'
import Theme from '../features/theme/Theme'
import { servicesManager } from '../services/serviceManager'

function Home({}: Props) {
  const auth = useAuth()
  const dispatch = useAppDispatch()
  useEffect(() => {
    fetchUserInfo()
  }, [])

  const fetchUserInfo = async () => {
    const service = servicesManager.TestLogin
    const response = await service.getUserInfo()
    if (response.status === 1) {
      dispatch(setAuth({ ...auth, user: response.data }))
    }
  }

  const colors = [
    '--color-50',
    '--color-100',
    '--color-200',
    '--color-300',
    '--color-400',
    '--color-500',
    '--color-600',
    '--color-700',
    '--color-800',
    '--color-900',
    '--color-A100',
    '--color-A200',
    '--color-A400',
    '--color-A700',
  ]
  const { t, i18n } = useTranslation('common')
  const navigate = useNavigate()

  return (
    <div>
      <h1 className="version">{t('welcome.title', { framework: 'REACT' })}</h1>
      <div className="version">{`Version ${metadata.version}`}</div>
      <div>
        {colors.map((i) => (
          <div
            key={i}
            style={{
              width: 400,
              height: 40,
              lineHeight: '40px',
              background: `var(${i})`,
              textAlign: 'center',
            }}
          >
            {i}
          </div>
        ))}
        <Theme />
        <Language />
        <button
          onClick={() => {
            localStorage.removeItem('token')
            dispatch(setAuth({ isAuth: false, user: null }))
            navigate('/login')
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Home
