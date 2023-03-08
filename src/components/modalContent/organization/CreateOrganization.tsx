import { Button, Form, Input, Select } from 'antd';
import {
  createOrganization,
  getAllOrganization,
} from '../../../reducers/slice/organizationSlice';
import { getAllProject } from '../../../reducers/slice/projectSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';
import { useEffect } from 'react';

type Props = {};

const CreateOrganization = (_props: Props) => {
  const dispatch = useAppDispatch();

  const listProject = useAppSelector(
    (state: RootState) => state.project.listProject,
  );

  useEffect(() => {
    dispatch(getAllProject());
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
        await dispatch(createOrganization(values));
        dispatch(getAllOrganization());
      }}
    >
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>

      <Form.Item label="Project" name="projects">
        <Select
          mode="multiple"
          placeholder="Select project"
          style={{ width: '100%' }}
          filterOption={(input, option) =>
            ((option?.label ?? '') as any).includes(input)
          }
          options={listProject.map((project: any) => {
            return {
              value: project.id,
              label: project.name,
            };
          })}
        />
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

export default CreateOrganization;
