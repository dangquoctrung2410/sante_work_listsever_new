import { Tabs } from 'antd';
import MemberGroup from './MemberGroup';
import RoleGroup from './RoleGroup';

type Props = {};

const DetailGroup = (_props: Props) => {
  const items = [
    {
      key: '1',
      label: `Member`,
      children: <MemberGroup />,
    },
    {
      key: '2',
      label: `Role`,
      children: <RoleGroup />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default DetailGroup;
