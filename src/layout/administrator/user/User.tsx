import { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';
import { getAllUser } from '../../../reducers/slice/userSlice';
import { useEffect } from 'react';
type Props = {};

interface IDataType {
  key: React.Key;
  fullname: string;
  username: string;
  email: string;
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
  ];

  const rowSelection = {
    selectedRowKeys: [],
    onChange: () => {},
  };

  return (
    <Table
      size="small"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={listUser}
    />
  );
};

export default User;
