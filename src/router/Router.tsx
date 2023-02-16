import { useLocation, Navigate, Route, Routes } from 'react-router-dom'
function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = localStorage.getItem('token')
  console.log(auth)

  const location = useLocation()
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />
  }

  return children
}

import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import NotFound from '../pages/NotFound'

type Props = {}

const Router = (props: Props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
