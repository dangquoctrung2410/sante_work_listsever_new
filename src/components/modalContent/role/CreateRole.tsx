import { Button, Form, Input } from 'antd';
import { createRole, getAllRole } from '../../../reducers/slice/roleSlice';
import { useAppDispatch } from '../../../redux/store';

type Props = {};

const CreateRole = (_props: Props) => {
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      autoComplete="off"
      onFinish={async (values: any) => {
        await dispatch(createRole(values));
        dispatch(getAllRole());
      }}
    >
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} shouldUpdate={true}>
        <Button
          type="primary"
          htmlType="submit"
          // disabled={
          //   !form.isFieldsTouched(true) ||
          //   !!form.getFieldsError().filter(({ errors }) => errors.length)
          //     .length
          // }
        >
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateRole;
