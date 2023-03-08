import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMemberOfGroup } from '../../../reducers/slice/groupSlice';
import { useAppDispatch } from '../../../redux/store';

type Props = {};

const MemberGroup = (_props: Props) => {
  const { id } = useParams<'id'>();
  const dispatch = useAppDispatch();
  const [memberOfGroup, setMemberOfGroup] = useState([]);

  const getListMemberOfGroup = async () => {
    if (id) {
      const listMemberOfGroup = await dispatch(getMemberOfGroup(id));
      setMemberOfGroup(listMemberOfGroup.payload);
    }
  };
  useEffect(() => {
    getListMemberOfGroup();
  }, []);

  const columns: ColumnsType<any> = [
    {
      title: 'Full name',
      dataIndex: 'fullname',
      sorter: true,
      sortOrder: 'descend',
      ellipsis: true,
      render: (_text: any, record: any) => {
        return <Link to={record.id}>{record.fullname}</Link>;
      },
    },
    {
      sorter: true,
      ellipsis: true,

      title: 'Login',
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
      title: 'Membership',
      dataIndex: 'groups',
      render: (_text: any, record: any) => {
        const groups = record.groups;
        return groups.map((group: any) => {
          return <Link to={group.id}>{group.name}</Link>;
        });
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
  console.log(memberOfGroup);
  return (
    <>
      <Table
        bordered={false}
        size="small"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={memberOfGroup}
      />
    </>
  );
};

export default MemberGroup;
