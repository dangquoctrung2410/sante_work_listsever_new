import { Row, Skeleton, Space, theme, Typography } from 'antd';
import { Key } from 'react';
import Translate from '../../../../components/base/translate/Translate';
import { RootState, useAppSelector } from '../../../../redux/store';
import styleModule from './style.module.scss';
const { useToken } = theme;

const { Title, Text } = Typography;
type Props = {};

const DiskContent = (_props: Props) => {
  const { token } = useToken();

  const monitorData = useAppSelector((state: RootState) => state.monitor);
  const diskData = monitorData.find((item: any) => item.key === 'disk');

  if (!diskData) {
    return <Skeleton active={true} />;
  }

  return (
    <div className={styleModule.memoryContent}>
      <div className={styleModule.memoryTitle}>
        <Space>
          <Title level={3}>Disk</Title>
        </Space>
        <Space style={{ float: 'right', fontSize: 15 }}>
          {/* <Text>{cpuData.data.model}</Text> */}
        </Space>
      </div>
      <div className={styleModule.memoryMain}>
        <div className={styleModule.logicalMemory}>
          {diskData.data.map((disk: any, idx: Key | null | undefined) => {
            const percented = Math.round((disk.Used / disk.Blocks) * 100);
            return (
              <div
                key={idx}
                style={{
                  flex: 1,
                  height: '100%',
                  float: 'left',
                  padding: 15,
                }}
              >
                <Row>
                  <Text>
                    {disk.Filesystem} ({disk.Mounted})
                  </Text>
                </Row>
                <Row>
                  <div
                    style={{
                      width: '100%',
                      height: '36px',
                      background: token.colorPrimaryBg,
                      border: `1px solid ${token.colorBorderBg}`,
                    }}
                  >
                    <div
                      style={{
                        width: `${percented}%`,
                        height: '100%',
                        background:
                          percented < 90
                            ? token.colorPrimaryActive
                            : token.colorErrorActive,
                      }}
                    />
                  </div>
                </Row>
                <Row>
                  <div style={{ flex: 1 }}>
                    <Space align="center">
                      <Text ellipsis={true}>
                        <Translate contentKey="monitor.disk.free" />:{' '}
                        {Math.round(disk.Available / Math.pow(1024, 3))} GB
                      </Text>
                    </Space>
                  </div>
                  <div style={{ flex: 1 }}>
                    <Space align="center">
                      <Text ellipsis={true}>
                        <Translate contentKey="monitor.disk.used" />:{' '}
                        {Math.round(disk.Used / Math.pow(1024, 3))} GB
                      </Text>
                    </Space>
                  </div>
                  <div style={{ flex: 1 }}>
                    <Space align="center">
                      <Text ellipsis={true}>
                        <Translate contentKey="monitor.disk.total" />:{' '}
                        {Math.round(disk.Blocks / Math.pow(1024, 3))} GB
                      </Text>
                    </Space>
                  </div>
                </Row>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiskContent;
