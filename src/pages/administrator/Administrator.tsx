import { Button, Layout, Space } from 'antd';
import { Link, Route } from 'react-router-dom';
import { ErrorBoundaryRoutes } from '../../components/base/error/ErrorBoundaryRoutes';
import GroupRouter from '../../layout/administrator/group/Router';
import Organization from '../../layout/administrator/organization/Organization';
import Project from '../../layout/administrator/project/Project';
import Role from '../../layout/administrator/role/Role';
import UserRouter from '../../layout/administrator/user/Router';
import Monitor from '../monitor/Monitor';
const { Header, Content } = Layout;
type Props = {};

const Administrator = (_props: Props) => {
  return (
    <Layout
      style={{ height: '100%', width: '100%', background: 'transparent' }}
    >
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
          <Link to={`project`}>
            <Button type="link">Project</Button>
          </Link>
          <Link to={`monitor`}>
            <Button type="link">Monitor</Button>
          </Link>
        </Space>
      </Header>
      <Content>
        <ErrorBoundaryRoutes>
          <Route index={true} path="user/*" element={<UserRouter />} />
          <Route path="role" element={<Role />} />
          <Route path="group/*" element={<GroupRouter />} />
          <Route path="organization" element={<Organization />} />
          <Route path="project" element={<Project />} />
          <Route path="monitor" element={<Monitor />} />
        </ErrorBoundaryRoutes>
      </Content>
    </Layout>
  );
};

export default Administrator;
