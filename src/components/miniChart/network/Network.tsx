import { Col, Row, Space, Spin } from 'antd';
import { ResponsiveContainer, Area, AreaChart } from 'recharts';
import { RootState, useAppSelector } from '../../../redux/store';
import { useEffect, useState } from 'react';
import styleModule from './style.module.scss';

type Props = {};

const Network = (_props: Props) => {
  const [data, setData] = useState<Array<any>>([]);
  const monitorData = useAppSelector((state: RootState) => state.monitor);
  const networkData = monitorData.find(
    (item: any) => item.key === 'networkInterfaces',
  );
  useEffect(() => {
    if (networkData) {
      console.log(networkData);
      const dataTemp = [
        ...data,
        { percent: networkData.data.avgCPUsLogicUsed },
      ];
      if (dataTemp.length > 10) {
        dataTemp.pop();
      }
      networkData && setData(dataTemp);
    }
  }, [networkData]);

  if (!networkData) {
    return (
      <Row className={styleModule.disk}>
        <Spin />
      </Row>
    );
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
                <Space className={styleModule.largeTitle}>
                  <span>{key}</span>
                </Space>
              </Row>
              <Row>
                <Space className={styleModule.smallTitle}>
                  <span>{ipv4.address || '0.0.0.0'}</span>
                </Space>
              </Row>
              <Row>
                <Space className={styleModule.smallTitle}>
                  <span>S: 0</span>
                </Space>
                <Space className={styleModule.smallTitle}>
                  <span>R:24.0kbps</span>
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
