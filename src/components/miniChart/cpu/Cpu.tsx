import { Col, Row, Space, Spin } from 'antd';
import { ResponsiveContainer, Area, AreaChart, YAxis } from 'recharts';
import { RootState, useAppSelector } from '../../../redux/store';
import styleModule from './style.module.scss';
import { useEffect, useState } from 'react';
type Props = {};

const Cpu = (_props: Props) => {
  const [data, setData] = useState<Array<any>>([]);
  const monitorData = useAppSelector((state: RootState) => state.monitor);
  const cpuData = monitorData.find((item: any) => item.key === 'cpu');
  useEffect(() => {
    if (cpuData) {
      const dataTemp = [...data, { percent: cpuData.data.avgCPUsLogicUsed }];
      if (dataTemp.length > 10) {
        dataTemp.shift();
      }
      cpuData && setData(dataTemp);
    }
  }, [cpuData]);
  if (!cpuData) {
    return (
      <Row className={styleModule.cpu}>
        <Spin />
      </Row>
    );
  }

  console.log(data);
  return (
    <Row className={styleModule.cpu}>
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
              dataKey="percent"
              stroke="#0958d9"
              fill="#e6f4ff"
            />
            <YAxis hide={true} type="number" domain={[0, 100]} />
          </AreaChart>
        </ResponsiveContainer>
      </Col>
      <Col span={15} className={styleModule.col}>
        <Row>
          <Space className={styleModule.largeTitle}>
            <span>CPU</span>
          </Space>
        </Row>
        <Row>
          <Space className={styleModule.smallTitle}>
            <span>{cpuData.data.avgCPUsLogicUsed || 0}%</span>
          </Space>
        </Row>
      </Col>
    </Row>
  );
};

export default Cpu;
