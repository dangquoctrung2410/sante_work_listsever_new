import { Col, Row, Skeleton, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { RootState, useAppSelector } from '../../../redux/store';
import styleModule from './style.module.scss';
const { Text } = Typography;

type Props = {};

const Network = (_props: Props) => {
  const [data, setData] = useState<Array<any>>([]);
  const monitorData = useAppSelector((state: RootState) => state.monitor);
  const networkData = monitorData.find(
    (item: any) => item.key === 'networkInterfaces',
  );
  useEffect(() => {
    if (networkData) {
      const dataTemp = [
        ...data,
        { percent: networkData.data.avgCPUsLogicUsed },
      ];
      if (dataTemp.length > 10) {
        dataTemp.shift();
      }
      networkData && setData(dataTemp);
    }
  }, [networkData]);

  if (!networkData) {
    return <Skeleton active={true} />;
  }

  return (
    <>
      {Object.entries(networkData.data).map((item, idx) => {
        const key = item[0];
        const value: any = item[1];
        const ipv4 = value.find(
          (ip: { family: string }) => ip.family === 'IPv4',
        );
        return (
          <Row key={idx} className={styleModule.disk}>
            <Col span={9} className={styleModule.col}>
              <ResponsiveContainer
                width="100%"
                height="100%"
                className={styleModule.chart}
              >
                <AreaChart
                  data={data}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#d46b08"
                    fill="#fff7e6"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Col>
            <Col span={15} className={styleModule.col}>
              <Row>
                <Space>
                  <Text ellipsis={true} className={styleModule.largeTitle}>
                    {key}
                  </Text>
                </Space>
              </Row>
              <Row>
                <Space>
                  <Text ellipsis={true} className={styleModule.smallTitle}>
                    {ipv4.address || '0.0.0.0'}
                  </Text>
                </Space>
              </Row>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default Network;
