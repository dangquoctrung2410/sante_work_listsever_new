import { Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../../../components/base/error/ErrorBoundaryRoutes';
import DetailGroup from '../../../components/modalContent/group/DetailGroup';
import Group from './Group';

type Props = {};

const GroupRouter = (_props: Props) => {
  return (
    <ErrorBoundaryRoutes>
      <Route index={true} element={<Group />} />
      <Route path="/:id" element={<DetailGroup />} />
    </ErrorBoundaryRoutes>
  );
};

export default GroupRouter;
