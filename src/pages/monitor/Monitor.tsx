import { theme } from 'antd';
import { useEffect, useState } from 'react';
import Cpu from '../../components/miniChart/cpu/Cpu';
import Disk from '../../components/miniChart/disk/Disk';
import Memory from '../../components/miniChart/memory/Memory';
import Network from '../../components/miniChart/network/Network';
import CpuContent from '../../layout/container/content/cpu/CpuContent';
import DiskContent from '../../layout/container/content/disk/DiskContent';
import MemoryContent from '../../layout/container/content/memory/MemoryContent';
import NetworkContent from '../../layout/container/content/network/NetworkContent';
import SiderLeft from '../../layout/container/siderLeft/SiderLeft';
import { getPerformance } from '../../reducers/slice/monitorSlice';
import { useAppDispatch } from '../../redux/store';
import styleModule from './style.module.scss';
const { useToken } = theme;
type Props = {};

let interval: NodeJS.Timeout | null | undefined = null;
const Monitor = (_props: Props) => {
  const { token } = useToken();
  const [tabs, setTabs] = useState<
    Array<{
      key: string;
      content: any;
      label: any;
      active: boolean;
      disable?: boolean;
    }>
  >([
    { key: 'cpu', content: <CpuContent />, label: <Cpu />, active: true },
    {
      key: 'memory',
      content: <MemoryContent />,
      label: <Memory />,
      active: false,
    },
    { key: 'disk', content: <DiskContent />, label: <Disk />, active: false },
    {
      key: 'network',
      content: <NetworkContent />,
      label: <Network />,
      active: false,
    },
  ]);
  const activeTab = tabs.find((tab) => tab.active === true);
  const dispatch = useAppDispatch();
  const onTabChange = (key: string) => {
    const tabsClone = [...tabs];
    tabsClone.forEach((tab) => {
      tab.key === key ? (tab.active = true) : (tab.active = false);
    });
    setTabs(tabsClone);
  };
  useEffect(() => {
    dispatch(getPerformance());

    interval && clearInterval(interval);
    interval = setInterval(() => {
      dispatch(getPerformance());
    }, 5000);
    return () => {
      interval && clearInterval(interval);
    };
  }, []);

  return (
    <div className={styleModule.monitor}>
      <div className={styleModule.container}>
        <div
          className={styleModule.siderLeft}
          style={{ background: token.colorBgContainer }}
        >
          <SiderLeft tabs={tabs} onTabChange={onTabChange} />
        </div>
        <div className={styleModule.main}>{activeTab && activeTab.content}</div>
      </div>
    </div>
  );
};

export default Monitor;
