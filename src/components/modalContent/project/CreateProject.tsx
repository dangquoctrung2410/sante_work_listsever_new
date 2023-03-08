import { Button, Form, Input, Select } from 'antd';
import { useEffect } from 'react';
import { getAllOrganization } from '../../../reducers/slice/organizationSlice';
import {
  createProject,
  getAllProject,
} from '../../../reducers/slice/projectSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';
import { acronymString } from '../../../utils/convertString';

type Props = {};

const CreateProject = (_props: Props) => {
  const dispatch = useAppDispatch();
  const listOrganization = useAppSelector(
    (state: RootState) => state.organization.listOrganization,
  );

  useEffect(() => {
    dispatch(getAllOrganization());
  }, []);

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
        await dispatch(createProject(values));
        dispatch(getAllProject());
      }}
    >
      <Form.Item label="Name" name="name">
        <Input
          onChange={(e) => {
            form.setFieldValue('key', acronymString(e.target.value));
          }}
        />
      </Form.Item>

      <Form.Item label="Key" name="key">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>

      <Form.Item label="Organization" name="organization">
        <Select
          mode="multiple"
          placeholder="Select organization"
          style={{ width: '100%' }}
          filterOption={(input, option) =>
            ((option?.label ?? '') as any).includes(input)
          }
          options={listOrganization.map((organization: any) => {
            return {
              value: organization.id,
              label: organization.name,
            };
          })}
        />
      </Form.Item>

      <Form.Item label="Project Type" name="type">
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

export default CreateProject;
