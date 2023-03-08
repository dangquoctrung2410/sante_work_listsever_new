import { GroupOutlined } from '@ant-design/icons';
import { Button, Select, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllGroup } from '../../../reducers/slice/groupSlice';
import {
  getGroupOfUser,
  userJoinToGroup,
} from '../../../reducers/slice/userSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../redux/store';

type Props = {};
let values: string[] = [];

const GroupUser = (_props: Props) => {
  const dispatch = useAppDispatch();
  const { id } = useParams<'id'>();
  const [groupOfUser, setGroupOfUser] = useState([]);

  const listGroup = useAppSelector((state: RootState) => state.group.listGroup);
  const getListGroupOfUser = async () => {
    if (id) {
      const listGroupOfUser = await dispatch(getGroupOfUser(id));
      setGroupOfUser(listGroupOfUser.payload);
    }
  };
  useEffect(() => {
    getListGroupOfUser();
    dispatch(getAllGroup());
  }, []);
  console.log(groupOfUser);
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
    <Space direction="vertical">
      <Space>
        <Select
          onChange={(value) => {
            console.log(value);
            values = value;
          }}
          showArrow={true}
          showSearch={true}
          mode="multiple"
          placeholder="Add to group"
          style={{ width: 120 }}
          filterOption={(input, option) =>
            ((option?.label ?? '') as any).includes(input)
          }
          options={listGroup.map((item: any) => ({
            value: item.id,
            label: item.name,
          }))}
        />
        <Button
          type="primary"
          onClick={async () => {
            if (id) {
              await dispatch(userJoinToGroup({ userId: id, groupIds: values }));
              getListGroupOfUser();
            }
          }}
        >
          Add
        </Button>
      </Space>

      <Table
        size="small"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={groupOfUser}
      />
    </Space>
  );
};

export default GroupUser;
