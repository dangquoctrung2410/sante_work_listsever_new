import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../components/base/error/ErrorBoundaryRoutes';
import Administrator from '../pages/administrator/Administrator';
// import Home from '../pages/Home'
import path from '../mocks/Path.json';
import NotFound from '../pages/404/NotFound';
import Login from '../pages/login/Login';
import PrivateRouter from './PrivateRouter';
import Monitor from '../pages/monitor/Monitor';
import Register from '../pages/register/Register';
const Router = () => {
  return (
    <ErrorBoundaryRoutes>
      <Route
        path={path.home.url}
        element={
          <PrivateRouter hasAnyAuthorities={[]}>
            <Monitor />
          </PrivateRouter>
        }
      />
      <Route path={path.register.url} element={<Register />} />
      <Route path={path.login.url} element={<Login />} />
      <Route
        path={path.admin.url}
        element={
          <PrivateRouter hasAnyAuthorities={[]}>
            <Administrator />
          </PrivateRouter>
        }
      />
      <Route path="*" element={<NotFound />} />
    </ErrorBoundaryRoutes>
  );
};

export default Router;
