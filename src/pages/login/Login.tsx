import {
  AntDesignOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { isRejected } from '@reduxjs/toolkit';
import { Avatar, Button, Checkbox, Form, Input, Space, Typography } from 'antd';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Translate from '../../components/base/translate/Translate';
import path from '../../mocks/Path.json';
import { login } from '../../reducers/slice/authSlice';
import { useAppDispatch } from '../../redux/store';
import styleModule from './style.module.scss';

const { Title } = Typography;
type Props = {};

const Login = ({}: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectRouter = searchParams.get('return') || path.home.url;

  const onFinish = async (values: any) => {
    const result = await dispatch(login(values));
    if (!isRejected(result)) {
      navigate(redirectRouter);
    }
  };

  return (
    <div className={styleModule.login}>
      <Space direction="vertical" align="center">
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
        />
        <Title style={{ fontSize: 22 }} level={5}>
          <Translate contentKey="login.title" />
        </Title>
        <Form
          style={{ width: 250 }}
          initialValues={{
            remember: true,
            username: 'admin',
            password: 'admin',
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: (
                  <Translate contentKey="login.requiredMessage.username" />
                ),
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: (
                  <Translate contentKey="login.requiredMessage.password" />
                ),
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Space direction="horizontal" style={{ width: '100%' }}>
              <Form.Item name="remember" valuePropName="checked" noStyle={true}>
                <Checkbox>
                  <Translate contentKey="login.remember" />
                </Checkbox>
              </Form.Item>

              <Link to={'/register'}>
                <Translate contentKey="login.register" />
              </Link>
            </Space>
          </Form.Item>

          <Form.Item>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button
                size="small"
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                <Translate contentKey="login.login" />
              </Button>
              <Link to={'/register'}>
                <Button size="small" type="primary" style={{ width: '100%' }}>
                  <Translate contentKey="login.register" />
                </Button>
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
};

export default Login;
