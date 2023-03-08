import { Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateUser from '../../../components/modalContent/user/CreateUser';
import { getAllUser } from '../../../reducers/slice/userSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';

type Props = {};

interface IDataType {
  key: React.Key;
  id: string;
  fullname: string;
  username: string;
  email: string;
  groups: any;
  createdAt: string;
}
const User = (_props: Props) => {
  const dispatch = useAppDispatch();
  const listUser = useAppSelector((state: RootState) => state.user.listUser);
  console.log(listUser);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const columns: ColumnsType<IDataType> = [
    {
      title: 'Fullname',
      dataIndex: 'fullname',
      sorter: true,
      sortOrder: 'descend',
      ellipsis: true,
      render: (_value, record, _index) => {
        console.log(record);
        return (
          <Link to={record.id}>
            <Space align="center" direction="horizontal">
              {record.fullname}
            </Space>
          </Link>
        );
      },
    },
    {
      sorter: true,
      ellipsis: true,

      title: 'Username',
      dataIndex: 'username',
    },
    {
      sorter: true,
      ellipsis: true,
      title: 'Email',
      dataIndex: 'email',
    },
    {
      sorter: true,
      ellipsis: true,
      title: 'Registration date',
      dataIndex: 'createdAt',
    },
    {
      sorter: true,
      ellipsis: true,
      title: 'Membership',
      dataIndex: 'group',
      render: (_value, record, _index) => {
        return record.groups.map((group: any, idx: number) => {
          return (
            <>
              <Space align="center" direction="horizontal" key={idx}>
                <Link to={group.id}>{group.name}</Link>
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
      <CreateUser />
      <Table
        bordered={false}
        size="small"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={listUser}
      />
    </>
  );
};

export default User;
