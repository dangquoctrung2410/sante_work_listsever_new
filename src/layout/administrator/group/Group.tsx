import { GroupOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateGroup from '../../../components/modalContent/group/CreateGroup';
import { getAllGroup } from '../../../reducers/slice/groupSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';

type Props = {};

interface IDataType {
  key: React.Key;
  id: string;
  name: string;
  projects: any;
  users: any;
  roles: any;
}

const Group = (_props: Props) => {
  const dispatch = useAppDispatch();
  const listGroup = useAppSelector((state: RootState) => state.group.listGroup);
  useEffect(() => {
    dispatch(getAllGroup());
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
          <Link to={record.id}>
            <Space align="center" direction="horizontal">
              <GroupOutlined />
              {record.name}
            </Space>
          </Link>
        );
      },
    },
    {
      sorter: true,
      ellipsis: true,

      title: 'Projects',
      dataIndex: 'projects',
    },
    {
      sorter: true,
      ellipsis: true,
      title: 'Members',
      dataIndex: 'users',
      render: (_text: any, record: any) => {
        return <>{record.users.length}</>;
      },
    },
    {
      sorter: true,
      ellipsis: true,
      title: 'Role',
      dataIndex: 'roles',
    },
  ];

  const rowSelection = {
    selectedRowKeys: [],
    onChange: () => {},
  };

  return (
    <>
      <CreateGroup />
      <Table
        size="small"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={listGroup}
      />
    </>
  );
};

export default Group;
