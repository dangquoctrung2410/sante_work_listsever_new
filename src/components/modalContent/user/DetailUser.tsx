import { Tabs } from 'antd';
import GroupUser from './GroupUser';
import RoleUser from './RoleUser';

type Props = {};

const DetailUser = (_props: Props) => {
  const items = [
    {
      key: '1',
      label: `Group`,
      children: <GroupUser />,
    },
    {
      key: '2',
      label: `Role`,
      children: <RoleUser />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default DetailUser;
