import { Col, Row, Skeleton, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts';
import { RootState, useAppSelector } from '../../../redux/store';
import styleModule from './style.module.scss';
const { Text } = Typography;

type Props = {};

const Memory = (_props: Props) => {
  const [data, setData] = useState<Array<any>>([]);
  const monitorData = useAppSelector((state: RootState) => state.monitor);
  const memoryData = monitorData.find((item: any) => item.key === 'memory');
  useEffect(() => {
    if (memoryData) {
      const dataTemp = [
        ...data,
        {
          memory:
            ((memoryData.data.totalmem - memoryData.data.freemem) /
              memoryData.data.totalmem) *
            100,
        },
      ];
      if (dataTemp.length > 10) {
        dataTemp.shift();
      }
      memoryData && setData(dataTemp);
    }
  }, [memoryData]);
  if (!memoryData) {
    return <Skeleton active={true} />;
  }
  return (
    <Row className={styleModule.memory}>
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
              dataKey="memory"
              stroke="#c41d7f"
              fill="#fff0f6"
            />
            <YAxis type="number" domain={[0, 100]} hide={true} />
          </AreaChart>
        </ResponsiveContainer>
      </Col>
      <Col span={15} className={styleModule.col}>
        <Row>
          <Space>
            <Text className={styleModule.largeTitle} ellipsis={true}>
              Memory
            </Text>
          </Space>
        </Row>
        <Row>
          <Space>
            <Text ellipsis={true} className={styleModule.smallTitle}>
              {(
                (memoryData.data.totalmem - memoryData.data.freemem) /
                Math.pow(1024, 3)
              ).toFixed(1)}
              /{(memoryData.data.totalmem / Math.pow(1024, 3)).toFixed(1)} GB
            </Text>
            <Text ellipsis={true} className={styleModule.smallTitle}>
              (
              {Math.round(
                ((memoryData.data.totalmem - memoryData.data.freemem) /
                  memoryData.data.totalmem) *
                  100,
              )}
              %)
            </Text>
          </Space>
        </Row>
      </Col>
    </Row>
  );
};

export default Memory;
