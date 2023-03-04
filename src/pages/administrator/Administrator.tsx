import { Button, Layout, Space } from 'antd';
import { Link, Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../../components/base/error/ErrorBoundaryRoutes';
import User from '../../layout/administrator/user/User';
import Monitor from '../monitor/Monitor';
const { Header, Content } = Layout;
type Props = {};

const Administrator = (_props: Props) => {
  return (
    <Layout style={{ height: '100%', width: '100%' }}>
      <Header>
        <Space>
          <Link to={`user`}>
            <Button type="link">User</Button>
          </Link>
          <Link to={`role`}>
            <Button type="link">Role</Button>
          </Link>
          <Link to={`group`}>
            <Button type="link">Group</Button>
          </Link>
          <Link to={`organization`}>
            <Button type="link">Organization</Button>
          </Link>
          <Link to={`monitor`}>
            <Button type="link">Monitor</Button>
          </Link>
        </Space>
      </Header>
      <Content>
        <ErrorBoundaryRoutes>
          <Route index={true} path="user" element={<User />} />
          <Route path="role" element={'role'} />
          <Route path="group" element={'group'} />
          <Route path="organization" element={'organization'} />
          <Route path="monitor" element={<Monitor />} />
        </ErrorBoundaryRoutes>
      </Content>
    </Layout>
  );
};

export default Administrator;
