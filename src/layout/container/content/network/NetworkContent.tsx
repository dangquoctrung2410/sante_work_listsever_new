import { Card, Row, Skeleton, Space, Typography } from 'antd';
import { Key } from 'react';
import NetworkDetail from '../../../../components/miniChart/network/NetworkDetail';
import { RootState, useAppSelector } from '../../../../redux/store';
import styleModule from './style.module.scss';

const { Title, Text } = Typography;
type Props = {};

const NetworkContent = (_props: Props) => {
  const monitorData = useAppSelector((state: RootState) => state.monitor);
  const networkData = monitorData.find(
    (item: any) => item.key === 'networkInterfaces',
  );

  if (!networkData) {
    return <Skeleton active={true} />;
  }
  console.log(networkData);
  return (
    <div className={styleModule.memoryContent}>
      <div className={styleModule.memoryTitle}>
        <Space>
          <Title level={3}>Network</Title>
        </Space>
      </div>
      <div className={styleModule.memoryMain}>
        <div className={styleModule.logicalMemory}>
          {Object.entries(networkData.data).map((item, idx) => {
            const key = item[0];
            const value: any = item[1];
            return (
              <Card
                title={
                  <Row className={styleModule.disk}>
                    <Text ellipsis={true}>{key}</Text>
                  </Row>
                }
                key={idx}
                style={{ flex: 1, margin: 10 }}
              >
                <Row className={styleModule.disk}>
                  {value.map((it: any, idx1: Key | null | undefined) => {
                    return <NetworkDetail key={idx1} data={it} />;
                  })}
                </Row>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NetworkContent;
