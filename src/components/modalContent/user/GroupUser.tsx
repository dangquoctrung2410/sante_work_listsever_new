import { DownOutlined, GroupOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';
import { getGroupOfUser } from '../../../reducers/slice/userSlice';

type Props = {};

const GroupUser = (_props: Props) => {
  const dispatch = useAppDispatch();
  const { id } = useParams<'id'>();
  const listGroup = useAppSelector((state: RootState) => state.group.listUser);
  useEffect(() => {
    id && dispatch(getGroupOfUser(id));
  }, []);

  const columns: ColumnsType<any> = [
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
      <Dropdown
        trigger={['click']}
        dropdownRender={() => {
          return 'dsadasdasdasd';
        }}
        placement="bottomLeft"
        arrow={true}
      >
        <Button icon={<DownOutlined />} type="primary">
          Add Group
        </Button>
      </Dropdown>
      <Table
        size="small"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={listGroup}
      />
    </>
  );
};

export default GroupUser;
