import { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
type Props = {};

interface IDataType {
  key: React.Key;
  fullname: string;
  username: string;
  email: string;
  registrationDate: string;
}
const User = (_props: Props) => {
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
      dataIndex: 'registrationDate',
    },
  ];

  const data: Array<IDataType> = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      fullname: `Edward King ${i}`,
      username: `Edward King ${i}`,
      email: `Edward King ${i}`,
      registrationDate: `London, Park Lane no. ${i}`,
    });
  }

  const rowSelection = {
    selectedRowKeys: [],
    onChange: () => {},
  };

  return (
    <Table
      size="small"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
    />
  );
};

export default User;
