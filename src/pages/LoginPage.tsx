import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { setAuth } from '../features/auth/authSlice'
import { servicesManager } from '../services/serviceManager'
type Props = {}

function LoginPage({}: Props) {
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('Tta@123')
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const login = async () => {
    setLoading(true)
    const service = servicesManager.TestLogin
    const response = await service.login({
      userName: username,
      password,
      rememberMe: true,
    })
    if (response.status === 1) {
      localStorage.setItem('token', response.data.jwtToken)
      dispatch(setAuth({ isAuth: true, user: null }))
      navigate('/')
    } else {
      setLoading(false)
      alert(response.message)
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <h2 style={{ color: 'var(--color-A700)', textAlign: 'center' }}>Login</h2>
      Username:
      <input
        style={{ padding: '8px 16px', fontSize: 16 }}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      Password:
      <input
        style={{ padding: '8px 16px', fontSize: 16 }}
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {loading ? (
        'Loading...'
      ) : (
        <button
          style={{
            marginTop: 20,
            padding: '8px 16px',
            fontSize: 16,
            background: 'var(--color-A700)',
            color: '#fff',
          }}
          onClick={login}
        >
          Login
        </button>
      )}
    </div>
  )
}

export default LoginPage
