import { GroupOutlined } from '@ant-design/icons';
import { Space, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateOrganization from '../../../components/modalContent/organization/CreateOrganization';
import { getAllOrganization } from '../../../reducers/slice/organizationSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';
const { Text } = Typography;
interface IDataType {
  key: React.Key;
  id: string;
  name: string;
  projects: any;
}

type Props = {};

const Organization = (_props: Props) => {
  const dispatch = useAppDispatch();
  const listOrganization = useAppSelector(
    (state: RootState) => state.organization.listOrganization,
  );
  useEffect(() => {
    dispatch(getAllOrganization());
  }, []);

  const columns: ColumnsType<IDataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      sortOrder: 'descend',
      ellipsis: true,
      render: (_text: any, record: any) => {
        return (
          <Space>
            <Link to={record.id}>
              <GroupOutlined /> {record.name}
            </Link>
            <Text
              ellipsis={true}
              type="secondary"
              style={{ maxWidth: '50%', overflow: 'hidden' }}
            >
              {record.description}
            </Text>
          </Space>
        );
      },
    },
    {
      sorter: true,
      ellipsis: true,
      title: 'Projects',
      dataIndex: 'projects',
      render: (_text: any, record: any) => {
        return record.projects.map((project: any, idx: number) => {
          return (
            <>
              <Space align="center" direction="horizontal" key={idx}>
                <Link to={project.id}>{project.name}</Link>
              </Space>
              ,
            </>
          );
        });
      },
    },
  ];

  const rowSelection = {
    selectedRowKeys: [],
    onChange: () => {},
  };

  return (
    <>
      <CreateOrganization />
      <Table
        bordered={false}
        size="small"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={listOrganization}
      />
    </>
  );
};

export default Organization;
