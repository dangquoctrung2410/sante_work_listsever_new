import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Form, Input, Space, Typography } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Translate from '../../components/base/translate/Translate';
import path from '../../mocks/Path.json';
import styleModule from './style.module.scss';

const { Title } = Typography;

type Props = {};

const Register = (_props: Props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const redirectRouter = path.home.url;

  useEffect(() => {
    form.setFieldsValue({ email: 'string', password: 'string' });
  }, []);

  const onFinish = async () => {
    navigate(redirectRouter);
  };

  return (
    <div className={styleModule.register}>
      <Space direction="vertical" align="center">
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
        />

        <Title level={4}>
          <Translate contentKey="register.title" />
        </Title>
        <Form
          style={{ width: 250 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: (
                  <Translate contentKey="register.requiredMessage.fullname" />
                ),
              },
            ]}
          >
            <Input placeholder="Full name" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: (
                  <Translate contentKey="register.requiredMessage.username" />
                ),
              },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item name="email">
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: (
                  <Translate contentKey="register.requiredMessage.password" />
                ),
              },
            ]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: (
                  <Translate contentKey="register.requiredMessage.password" />
                ),
              },
            ]}
          >
            <Input type="passwordConfirm" placeholder="Password confirm" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle={true}>
            <Checkbox>
              <Translate contentKey="register.remember" />
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              size="small"
              type="primary"
              htmlType="submit"
              style={{ width: '100%' }}
            >
              <Translate contentKey="register.register" />
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
};

export default Register;
