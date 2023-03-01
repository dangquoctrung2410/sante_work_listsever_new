import { Button, Space } from 'antd';
import { Link, Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../../components/base/error/ErrorBoundaryRoutes';
import User from '../../layout/administrator/user/User';

type Props = {};

const Administrator = (_props: Props) => {
  return (
    <div>
      <Space>
        <Link to={`user`}>
          <Button type="primary">User</Button>
        </Link>
      </Space>
      <Space>
        <Link to={`role`}>
          <Button type="primary">Role</Button>
        </Link>
      </Space>
      <Space>
        <Link to={`group`}>
          <Button type="primary">Group</Button>
        </Link>
      </Space>
      <Space>
        <Link to={`organization`}>
          <Button type="primary">Organization</Button>
        </Link>
      </Space>

      <ErrorBoundaryRoutes>
        <Route index={true} path="user" element={<User />} />
        <Route path="role" element={'role'} />
        <Route path="group" element={'group'} />
        <Route path="organization" element={'organization'} />
      </ErrorBoundaryRoutes>
    </div>
  );
};

export default Administrator;
