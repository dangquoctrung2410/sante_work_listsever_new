import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../../../components/base/error/ErrorBoundaryRoutes';
import DetailUser from '../../../components/modalContent/user/DetailUser';
import User from './User';

type Props = {};

const UserRouter = (_props: Props) => {
  return (
    <ErrorBoundaryRoutes>
      <Route index={true} element={<User />} />
      <Route index={true} path=":id" element={<DetailUser />} />
    </ErrorBoundaryRoutes>
  );
};

export default UserRouter;
