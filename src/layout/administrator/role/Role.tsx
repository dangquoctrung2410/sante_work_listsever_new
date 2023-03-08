import { Space, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateRole from '../../../components/modalContent/role/CreateRole';
import { IRole } from '../../../models/reducers/role.model';
import { getAllRole } from '../../../reducers/slice/roleSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';

const { Text } = Typography;
type Props = {};

const Role = (_props: Props) => {
  const dispatch = useAppDispatch();
  const listRole = useAppSelector((state: RootState) => state.role.listRole);

  useEffect(() => {
    dispatch(getAllRole());
  }, []);

  const columns: ColumnsType<IRole> = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      sortOrder: 'descend',
      ellipsis: true,
      render: (_text: any, record: any) => {
        return (
          <Space>
            <Link to={record.id}>{record.name}</Link>
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
      title: 'Key',
      dataIndex: 'key',
    },
    {
      sorter: true,
      ellipsis: true,
      title: 'Policies',
      dataIndex: 'policies',
      render: (_text: any, record: any) => {
        return <Typography.Text>{record.policies.length}</Typography.Text>;
      },
    },
  ];

  const rowSelection = {
    selectedRowKeys: [],
    onChange: () => {},
  };

  return (
    <>
      <CreateRole />
      <Table
        bordered={false}
        size="small"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={listRole}
      />
    </>
  );
};

export default Role;
