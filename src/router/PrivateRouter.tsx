import {
  createSearchParams,
  Navigate,
  RouteProps,
  useLocation,
} from 'react-router-dom';
import ErrorBoundary from '../components/base/error/ErrorBoundary';
import path from '../mocks/Path.json';
import NotAuthorized from '../pages/403/NotAuthorized';
import { useAppSelector } from '../redux/store';

export const hasAnyAuthority = (
  authorities: Array<string>,
  hasAnyAuthorities: Array<string>,
) => {
  if (authorities && authorities.length !== 0) {
    if (hasAnyAuthorities.length === 0) {
      return true;
    }
    return hasAnyAuthorities.some((auth) => authorities.includes(auth));
  }
  return false;
};

type IOwnProps = RouteProps & {
  hasAnyAuthorities?: Array<string>;
  children: React.ReactNode;
};

const PrivateRouter = ({
  children,
  hasAnyAuthorities = [],
  ...rest
}: IOwnProps) => {
  const isAuthenticated = useAppSelector(
    (state: { auth: { isAuthenticated: any } }) => state.auth.isAuthenticated,
  );

  const account = useAppSelector(
    (state: { auth: { account: any } }) => state.auth.account,
  );
  const isAuthorized = hasAnyAuthority(account.authorities, hasAnyAuthorities);
  const location = useLocation();
  if (!children) {
    throw new Error(
      `A component needs to be specified for private route for path ${
        (rest as any).path
      }`,
    );
  }

  if (isAuthenticated) {
    if (isAuthorized) {
      return <ErrorBoundary>{children}</ErrorBoundary>;
    }

    return <NotAuthorized />;
  }

  return (
    <Navigate
      to={{
        pathname: path.login.url,
        search: createSearchParams({
          return: location.pathname,
        }).toString(),
      }}
      replace={true}
      state={{ from: location }}
    />
  );
};

export default PrivateRouter;
