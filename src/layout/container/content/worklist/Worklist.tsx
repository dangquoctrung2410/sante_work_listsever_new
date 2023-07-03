import {
  AppstoreOutlined,
  ClockCircleOutlined,
  DesktopOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Layout, Space, theme } from 'antd';
import { useState } from 'react';
import ConfigContent from '../../../../components/config/ConfigContent';
import WorklistContent from '../../../../components/worklist-content/WorklistContent';
import styles from './style.module.scss';

const { useToken } = theme;

const { Sider, Content } = Layout;
type Props = {};

const Worklist = (_props: Props) => {
  const { token } = useToken();

  const [tabList, setTabList] = useState([
    {
      icon: <DesktopOutlined />,
      active: true,
      content: <WorklistContent />,
    },
    {
      icon: <SettingOutlined />,
      active: false,
      content: <ConfigContent />,
    },
    {
      icon: <ClockCircleOutlined />,
      active: false,
      content: <div></div>,
    },
    {
      icon: <AppstoreOutlined />,
      active: false,
      content: <div></div>,
    },
  ]);

  const currentTab = tabList.find((tab) => tab.active);

  if (!currentTab) {
    return null;
  }

  const activeTab = (idx: number) => {
    const tabClone = [...tabList].map((item, index) => {
      if (idx === index) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
    setTabList(tabClone);
  };

  return (
    <Layout className={styles.main}>
      <Sider width={40}>
        <Space
          style={{
            width: '100%',
            height: '100%',
            background: token.colorBgLayout,
          }}
          direction="vertical"
          align="center"
        >
          {tabList.map((item, idx) => (
            <Button
              key={idx}
              onClick={() => activeTab(idx)}
              type={item.active ? 'primary' : 'default'}
              icon={item.icon}
            />
          ))}
        </Space>
      </Sider>

      <Content>{currentTab.content}</Content>
    </Layout>
  );
};

export default Worklist;
