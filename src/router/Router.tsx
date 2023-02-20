import { Route } from 'react-router-dom'
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes'
import { AUTHORITIES } from '../constants/constants'
import Admin from '../pages/Admin'
// import Home from '../pages/Home'
import Login from '../pages/login/Login'
import NotFound from '../pages/404/NotFound'
import PrivateRouter from './PrivateRouter'
import path from '../mocks/Path.json'
import Monitor from '../pages/monitor/Monitor'
const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route
        index={true}
        element={
          <PrivateRouter hasAnyAuthorities={[AUTHORITIES.USER]}>
            <Monitor />
          </PrivateRouter>
        }
      />
      <Route path={path.login.url} element={<Login />} />
      <Route
        path={path.admin.url}
        element={
          <PrivateRouter hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]}>
            <Admin />
          </PrivateRouter>
        }
      />
      <Route path="*" element={<NotFound />} />
    </ErrorBoundaryRoutes>
  )
}

export default Router
